class BasicCalculator {
  constructor() {
    this.result = 0;
    this.num1 = 0;
    this.num2 = 0;
  }

  getInput(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error("Both inputs must be numbers");
    }
    this.num1 = num1;
    this.num2 = num2;
    return this; // для цепочки вызовов
  }

  add() {
    this.result = this.num1 + this.num2;
    return this;
  }

  subtract() {
    this.result = this.num1 - this.num2;
    return this;
  }

  getResult() {
    return this.result;
  }
}

class AdvancedCalculator extends BasicCalculator {
  multiply() {
    this.result = this.num1 * this.num2;
    return this;
  }

  divide() {
    if (Math.abs(this.num2) < Number.EPSILON) {
      throw new Error("Division by zero is not allowed");
    }
    this.result = this.num1 / this.num2;
    return this;
  }

  power() {
    this.result = Math.pow(this.num1, this.num2);
    return this;
  }
}

// Пример использования с обработкой ошибок
try {
  const calc = new AdvancedCalculator();
  
  console.log("10 + 2 =", calc.getInput(10, 2).add().getResult());
  console.log("10 - 2 =", calc.getInput(10, 2).subtract().getResult());
  console.log("10 * 2 =", calc.getInput(10, 2).multiply().getResult());
  console.log("10 / 2 =", calc.getInput(10, 2).divide().getResult());
  console.log("10 ^ 2 =", calc.getInput(10, 2).power().getResult());
  
  // Это вызовет ошибку
  console.log("10 / 0 =", calc.getInput(10, 0).divide().getResult());
} catch (error) {
  console.error("Error:", error.message);
}