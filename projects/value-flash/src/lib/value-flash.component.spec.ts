import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueFlashComponent } from './value-flash.component';

describe('ValueFlashComponent', () => {
  let component: ValueFlashComponent;
  let fixture: ComponentFixture<ValueFlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueFlashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
