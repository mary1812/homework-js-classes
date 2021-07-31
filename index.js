class Worker {
  constructor(name, lastName, days, salary, premium) {
    if (isNaN(days) || typeof days !== "number") {
      throw new TypeError("Days must be number");
    }

    if (isNaN(salary)|| typeof salary !== "number") {
      throw new TypeError("Salary must be number");
    }
    if (salary < 0) {
      throw new TypeError("Salary must be positive");
    }
    if (days < 0) {
      throw new TypeError("Days must be positive");
    }
    if (premium === true) {
      salary += salary * 0.25;
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
    return this.days * this.salary;
  }
}

const worker1 = new Worker("Test", "Testovich", 30, 300, true);
const worker2 = new Worker("Text", "Textovich", 15, 150, false);
