const PREMIUM_COEFFICIENT = 1.25;

class Worker {
  constructor(name, lastName, days, salary, premium) {
    if (isNaN(days) || typeof days !== "number") {
      throw new TypeError("Days must be number");
    }
    if (isNaN(salary) || typeof salary !== "number") {
      throw new TypeError("Salary must be number");
    }
    if (salary < 0) {
      throw new TypeError("Salary must be positive number");
    }
    if(days < 0) {
      throw new TypeError("Days must be positive number");
    }

    this.name = name;
    this.lastName = lastName;
    this.days = days;
    this.salary = salary;
    this.premium = premium;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
  getSalary() {
    if (this.premium) {
      return this.days * this.salary * PREMIUM_COEFFICIENT;
    }
    return this.days * this.salary;
  }
}

const worker1 = new Worker("Test", "Testovich", 30, 100, true);
const worker2 = new Worker("Text", "Textovich", 15, 50, false);



