import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calInput: string = '';
  @ViewChild('search', { static: true }) searchElement: ElementRef;
  numbers = [];
  operators = [];

  constructor() {
  }

  clickNumber(num) {
    this.calInput += num;
    this.numbers.push(parseInt(num));
  }

  clickOperator(operator) {
    this.calInput += operator;
    this.operators.push(operator);
  }

  clickAC() {
    this.focusInput();
    this.calInput = '';
    this.numbers = [];
    this.operators = [];
  }

  clickCross() {
    console.log("this.numbers::", this.numbers);
    console.log("this.operators::", this.operators);
  }

  clickDot() {
    // this.calInput += '.';
  }

  clickEqual() {
    let sum = 0;
    while (this.operators.length > 0) {
      var right = this.numbers.pop();

      if (isNaN(right)) {
        right = 0;
      }
      var left = this.numbers.pop();
      if (isNaN(left)) {
        left = 0;
      }
      var op = this.operators.pop();
      sum += this.calc(left, right, op);
    }
    this.calInput = sum.toString();
    this.numbers = [];
    this.operators = [];
  }

  calc(left, right, op) {
    switch (op) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
    }
    return 0;
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
