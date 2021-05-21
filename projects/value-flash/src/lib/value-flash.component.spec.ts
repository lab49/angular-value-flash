import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formatter, formatters, FormatterType } from './formatters';

import { ValueFlashComponent } from './value-flash.component';

describe('ValueFlashComponent', () => {
  let component: ValueFlashComponent;
  let fixture: ComponentFixture<ValueFlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValueFlashComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueFlashComponent);
    component = fixture.componentInstance;
    component.value = 42;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the default formatter by default', () => {
    expect(component.usedFormatter).toBe(formatters.default);
  });

  for (let formatter in formatters) {
    it(`should use the provided formatter when its passed in the formatter input: ${formatter}`, () => {
      const formatterFn: Formatter = formatters[formatter as FormatterType];
      component.formatter = formatter as FormatterType;
      expect(component.usedFormatter).toBe(formatterFn);
    });
  }

  it('should use the explicitly defined formatter function when its passed', () => {
    const formatterFn: Formatter = (num: number) => (num + '🤑');
    component.formatterFn = formatterFn;
    expect(component.usedFormatter).toBe(formatterFn);
    expect(component.formattedValue).toBe("42🤑")
  });
});
