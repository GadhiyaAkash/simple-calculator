import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Public Variable's
   */
  calInput: string = '';
  numbers = [];
  operators = [];
  oldValue = '';

  /**
   * Get Element for focus
   */
  @ViewChild('search', {
    static: true
  }) searchElement: ElementRef;

  /**
   * pre-calcaulation before output
   * @param value 
   */
  clickButton(value) {
    if (this.isOperators(value)) {
      this.calInput += value;
      this.operators.push(value);
      this.oldValue = '';
    } else {
      this.calInput += value;
      var checkValue = this.oldValue + value.toString();
      if (this.oldValue && this.oldValue == value && checkValue) {
        this.oldValue += value.toString();
        this.numbers = this.numbers.slice(0, this.numbers.length - 2);
        this.numbers.push(parseInt(this.oldValue));
        this.oldValue = '';

      } else {
        this.oldValue += value.toString();
        this.numbers.push(parseInt(this.oldValue));
      }
    }
  }

  /**
   * Helper function to check operators
   * @param value 
   */
  isOperators(value) {
    if (value == '+' || value == '-' || value == '*' || value == '/') {
      return true;
    }
    return false;
  }

  /**
   * Clear all values
   */
  clickAC() {
    this.focusInput();
    this.calInput = '';
    this.numbers = [];
    this.operators = [];
    this.oldValue = '';
  }

  clickCross() {
    // Put your code...
  }

  clickDot() {
    // You can add decimal code if you want.
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
