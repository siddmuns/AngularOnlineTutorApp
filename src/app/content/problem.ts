export class Problem {
  //Problem fields
  public a: number;
  public b: number;
  public answer: number;
  public userAnswer: number | null = null;
  public operation: string;

  //No arg constructor
  constructor() {
    this.a = this.randomOperand();
    this.b = this.randomOperand();
    this.operation = this.randomOperation();
    this.answer = this.calculateAnswer();
  }

  //This returns a random number from 0 - 10
  private randomOperand(): number {
    return Math.floor(Math.random() * 10); // Random number between 0 and 9
  }

  //This returns a random operand
  private randomOperation(): string {
    const operations = ['+', '-', '*'];
    return operations[Math.floor(Math.random() * operations.length)];
  }

  //This returns the answer of the problem
  private calculateAnswer(): number {
    if (this.operation === '+') {
      return this.a + this.b;
    } else if (this.operation === '-') {
      return this.a - this.b;
    } else if (this.operation === '*') {
      return this.a * this.b;
    }
    else {
      return 0;
    }
  }
}

