import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lab49-value-flash',
  templateUrl: './value-flash.component.html',
  styles: [],
})
export class ValueFlashComponent implements OnInit, OnChanges {
  // #region Properties (10)

  private animationTimeout!: NodeJS.Timeout;

  /**
   * Color value when the component flashes 'down'.
   */
  @Input()
  downColor = 'red';
  /**
   * One of the built in formatters.
   */
  @Input()
  formatter?: 'currency' | 'percentage' | 'number' = 'number';
  /**
   * Pass your own formatter function.
   */
  //formatterFn?: Formatter;
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
  transition?: string;
  /**
   * Transition length, in milliseconds.
   */
  @Input()
  transitionLength = 100;
  /**
   * Color value when the component flashes 'up'.
   */
  @Input()
  upColor = 'green';
  /**
   * Value to display. The only required prop.
   */
  @Input()
  public value: number = 0;
  @ViewChild('valueHolder')
  public valueHolderRef!: ElementRef<HTMLElement>;

  private get valueHolder() {
    return this.valueHolderRef.nativeElement;
  }

  private get valueHolderClasslist() {
    return this.valueHolder.classList;
  }

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor() {}

  // #endregion Constructors (1)

  // #region Public Methods (3)

  public handleValueChange(valueChange: SimpleChange) {
    this.valueHolder.style.transition = `background-color ${this.transitionLength}ms ease-in-out`;
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
    this.valueHolder.classList.remove(`${this.stylePrefix}--flashing-down`);
    this.valueHolder.classList.remove(`${this.stylePrefix}--flashing-up`);
    this.valueHolder.style.backgroundColor = '';
  }

  // #endregion Private Methods (1)
}
