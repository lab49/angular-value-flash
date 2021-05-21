import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Formatter, formatters, FormatterType } from './formatters';

@Component({
  selector: 'lab49-value-flash',
  templateUrl: './value-flash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
})
export class ValueFlashComponent implements OnInit, OnChanges {
  // #region Properties (11)

  private animationTimeout!: any;

  /**
   * Color value when the component flashes 'down'.
   */
  @Input()
  public downColor = 'red';
  /**
   * One of the built in formatters.
   */
  @Input()
  public formatter: FormatterType = 'default';
  /**
   * Pass your own formatter function.
   */
  @Input()
  public formatterFn?: Formatter;
  /**
   * Prefix for the CSS selectors in the DOM.
   */
  @Input()
  public stylePrefix: string = 'rvf_Flash';
  /**
   * Amount of time the flashed state is visible for, in milliseconds.
   */
  @Input()
  public timeout: number = 200;
  /**
   * Custom CSS transition property.
   */
  @Input()
  public transition?: string;
  /**
   * Transition length, in milliseconds.
   */
  @Input()
  public transitionLength = 100;
  /**
   * Color value when the component flashes 'up'.
   */
  @Input()
  public upColor = 'green';
  /**
   * Value to display. The only required prop.
   */
  @Input()
  public value: number = 0;
  @ViewChild('valueHolder')
  public valueHolderRef!: ElementRef<HTMLElement>;

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor() {}

  // #endregion Constructors (1)

  // #region Public Accessors (2)

  public get formattedValue() {
    return this.usedFormatter(this.value);
  }

  public get usedFormatter() {
    return this.formatterFn ?? formatters[this.formatter];
  }

  // #endregion Public Accessors (2)

  // #region Private Accessors (1)

  private get valueHolder() {
    return this.valueHolderRef.nativeElement;
  }

  // #endregion Private Accessors (1)

  // #region Public Methods (3)

  public handleValueChange(valueChange: SimpleChange) {
    this.valueHolder.style.transition = '';
    if (valueChange.currentValue > valueChange.previousValue) {
      this.valueHolder.classList.add(`${this.stylePrefix}--flashing-up`);
      this.valueHolder.style.backgroundColor = this.upColor;
    } else if (valueChange.currentValue < valueChange.previousValue) {
      this.valueHolder.classList.add(`${this.stylePrefix}--flashing-down`);
      this.valueHolder.style.backgroundColor = this.downColor;
    }
    clearTimeout(this.animationTimeout);
    this.animationTimeout = setTimeout(
      () => this.clearFlashingState(),
      this.timeout
    );
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.value && changes.value.previousValue != undefined) {
      this.handleValueChange(changes.value);
    }
  }

  public ngOnInit(): void {}

  // #endregion Public Methods (3)

  // #region Private Methods (1)

  private clearFlashingState() {
    this.valueHolder.style.transition = this.transition ?? `background-color ${this.transitionLength}ms ease-in-out`;
    this.valueHolder.classList.remove(`${this.stylePrefix}--flashing-down`);
    this.valueHolder.classList.remove(`${this.stylePrefix}--flashing-up`);
    this.valueHolder.style.backgroundColor = '';
  }

  // #endregion Private Methods (1)
}
