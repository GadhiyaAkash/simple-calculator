import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calInput: string = '';
  @ViewChild('search', { static: true }) searchElement: ElementRef;

  constructor() {
  }

  preCalculatValue() {

  }

  clickZero() {
    this.calInput += '0';
  }

  clickOne() {
    this.calInput += '1';
  }

  clickTwo() {
    this.calInput += '2';
  }

  clickThree() {
    this.calInput += '3';
  }

  clickFour() {
    this.calInput += '4';
  }

  clickFive() {
    this.calInput += '5';
  }

  clickSix() {
    this.calInput += '6';
  }

  clickSeven() {
    this.calInput += '7';
  }

  clickEight() {
    this.calInput += '8';
  }

  clickNine() {
    this.calInput += '9';
  }

  clickAC() {
    this.focusInput();
    this.calInput = '';
  }

  clickCross() {
    this.calInput = '9';
  }

  clickDivision() {
    this.calInput += '/';
  }

  clickMultiplication() {
    this.calInput += '*';
  }

  clickMinus() {
    this.calInput += '-';
  }

  clickPlus() {
    this.calInput += '+';
  }

  clickDot() {
    this.calInput += '.';
  }

  clickEqual() {
    this.calInput += '=';
  }

  /**
   * Helper function to focus on input
   */
  focusInput() {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
  }
}
