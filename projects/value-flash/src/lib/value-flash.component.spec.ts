import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Formatter, formatters, FormatterType } from './formatters';
import { ValueFlashComponent } from './value-flash.component';

@Component({
  selector: 'lab49-parent-test-component',
  template: '<lab49-value-flash [value]="value"></lab49-value-flash>',
})
export class ParentTestComponent {
  value: number = 0;
}

describe('ValueFlashComponent', () => {
  let parentComponent: ParentTestComponent;
  let component: ValueFlashComponent;
  let fixture: ComponentFixture<ParentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValueFlashComponent, ParentTestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTestComponent);
    parentComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(ValueFlashComponent)).componentInstance;
    parentComponent.value = 42;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the value from the parent', () => {
    expect(component.value).toEqual(42);
  });

  it('should use the default formatter by default', () => {
    expect(component.usedFormatter).toBe(formatters.default);
  });

  for (const formatter in formatters) {
    it(`should use the provided formatter when its passed in the formatter input: ${formatter}`, () => {
      const formatterFn: Formatter = formatters[formatter as FormatterType];
      component.formatter = formatter as FormatterType;
      expect(component.usedFormatter).toBe(formatterFn);
      expect(component.formattedValue).toEqual(formatterFn(component.value));
    });
  }

  it('should use the explicitly defined formatter function when its passed', () => {
    const formatterFn: Formatter = (num: number) => (num + '🤑');
    component.formatterFn = formatterFn;
    expect(component.usedFormatter).toBe(formatterFn);
    expect(component.formattedValue).toBe('42🤑');
  });

  it('should use the flashing up class when the value increases, and remove it after the timeout', fakeAsync(() => {
    const upClass = `${component.stylePrefix}--flashing-up`;
    parentComponent.value = 43;
    fixture.detectChanges();
    const valueClassList = component.valueHolderRef.nativeElement.classList;
    expect(valueClassList.contains(upClass)).toEqual(true);
    tick(component.timeout);
    expect(valueClassList.contains(upClass)).toEqual(false);
  }));

  it('should use the flashing down class when the value decreases, and remove it after the timeout (non-default timeout)', fakeAsync(() => {
    const downClass = `${component.stylePrefix}--flashing-down`;
    const customTimeout = 500;
    component.timeout = customTimeout;
    parentComponent.value = 25;
    fixture.detectChanges();
    const valueClassList = component.valueHolderRef.nativeElement.classList;
    const initialCheckTime = 200;
    expect(valueClassList.contains(downClass)).toEqual(true);
    tick(initialCheckTime);
    expect(valueClassList.contains(downClass)).toEqual(true);
    tick(customTimeout - initialCheckTime);
    expect(valueClassList.contains(downClass)).toEqual(false);
  }));
});
