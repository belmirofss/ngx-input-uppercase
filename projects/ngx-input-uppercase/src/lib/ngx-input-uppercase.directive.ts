import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
selector: '[ngxInputUppercase]',
  host: {
    '(input)': '$event'
  }
})
export class NgxInputUppercaseDirective {

  private _lastValue: string = '';

  constructor(
    private _ref: ElementRef
  ) { }

  @HostListener('input', ['inputEvent']) onInput(inputEvent: any) {
    const selectionPositionStart = inputEvent.target.selectionStart;
    const selectionPositionEnd = inputEvent.target.selectionEnd;

    inputEvent.target.value = inputEvent.target.value.toUpperCase();
    inputEvent.target.setSelectionRange(selectionPositionStart, selectionPositionEnd);
    inputEvent.preventDefault();

    if (!this._lastValue || (this._lastValue && inputEvent.target.value.length > 0 && this._lastValue !== inputEvent.target.value)) {
      this._lastValue = this._ref.nativeElement.value = inputEvent.target.value;

      const htmlEvent = document.createEvent('HTMLEvents');
      htmlEvent.initEvent('input', false, true);
      event?.target?.dispatchEvent(htmlEvent);
    }
  }
}