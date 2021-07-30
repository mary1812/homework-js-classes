"use strict";

class CoolerHuman {
  constructor(name, lastName, age) {
    //проверка что пользователь имеет не отрицательный возраст при создании
    if (isNaN(age) || typeof age !== "number") {
      throw new TypeError("Age must be number");
    }
    //проверка что пользователь имеет возраст больше нуля
    if (age < 0) {
      throw new TypeError("Age must be positive number");
    }
    //свойства создаваемого экземпляра класса
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  //методы у экземпляров класса
  walk() {
    console.log("I am walking");
  }
  //создать метод isAdult, к-рый будет возвращать является ли конкретный пользователь совершеннолетним или нет
  isAdult() {
    return this.age >= 18;
  }
}

const coolerHuman1 = new CoolerHuman("Coolkid", "Coolkidovich", -50);

const coolerHuman2 = new CoolerHuman("Coolkid", "Coolkidovich", "rhr");

const coolerHuman3 = new CoolerHuman("Human", "Humanovich", 18);
