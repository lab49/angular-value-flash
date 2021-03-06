import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Formatter, formatters, FormatterType } from './formatters';

@Component({
  selector: 'value-flash',
  templateUrl: './value-flash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
})
export class ValueFlashComponent implements OnChanges, AfterViewInit {
  // #region Properties (11)

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
  public stylePrefix = 'rvf_Flash';
  /**
   * Amount of time the flashed state is visible for, in milliseconds.
   */
  @Input()
  public timeout = 200;
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
  public value = 0;
  @ViewChild('valueHolder')
  public valueHolderRef!: ElementRef<HTMLElement>;

  private animationTimeout!: any;

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor() {}

  // #endregion Constructors (1)

  // #region Public Accessors (2)

  public get formattedValue(): any {
    return this.usedFormatter(this.value);
  }

  public get usedFormatter(): any {
    return this.formatterFn ?? formatters[this.formatter];
  }

  // #endregion Public Accessors (2)

  // #region Private Accessors (1)

  private get valueHolder(): HTMLElement {
    return this.valueHolderRef.nativeElement;
  }

  // #endregion Private Accessors (1)

  // #region Public Methods (3)

  public handleValueChange(valueChange: SimpleChange): void {
    this.valueHolder.style.transition = '';
    if (valueChange.currentValue > valueChange.previousValue) {
      this.valueHolder.classList.add(
        `${this.stylePrefix}--flashing-up`,
        `${this.stylePrefix}--flashing`,
      );
      this.valueHolder.style.backgroundColor = this.upColor;
    } else if (valueChange.currentValue < valueChange.previousValue) {
      this.valueHolder.classList.add(
        `${this.stylePrefix}--flashing-down`,
        `${this.stylePrefix}--flashing`,
      );
      this.valueHolder.style.backgroundColor = this.downColor;
    }
    clearTimeout(this.animationTimeout);
    this.animationTimeout = setTimeout(() => this.clearFlashingState(), this.timeout);
    this.handleValuePositivity();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && changes.value.previousValue !== undefined) {
      this.handleValueChange(changes.value);
    }
  }

  public ngAfterViewInit() {
    this.handleValuePositivity();
  }

  // #endregion Public Methods (3)

  // #region Private Methods (1)

  private clearFlashingState(): void {
    this.valueHolder.style.transition =
      this.transition ?? `background-color ${this.transitionLength}ms ease-in-out`;
    this.valueHolder.classList.remove(
      `${this.stylePrefix}--flashing-down`,
      `${this.stylePrefix}--flashing-up`,
      `${this.stylePrefix}--flashing`,
    );
    this.valueHolder.style.backgroundColor = '';
  }

  private handleValuePositivity() {
    if (this.value > 0) {
      this.valueHolder.classList.add(this.stylePrefix + '--positive');
    } else {
      this.valueHolder.classList.remove(this.stylePrefix + '--positive');
    }
    if (this.value < 0) {
      this.valueHolder.classList.add(this.stylePrefix + '--negative');
    } else {
      this.valueHolder.classList.remove(this.stylePrefix + '--negative');
    }
  }

  // #endregion Private Methods (1)
}
