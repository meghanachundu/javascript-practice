// 1. Basic Class & Constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
  }
}

let p1 = new Person("Meghana", 25);
p1.greet();


// 2. Inheritance (extends)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

let d = new Dog("Vicky");
d.speak();


// 3. Using super() in constructor and method
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log(`${this.type} starting...`);
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type); // calls parent constructor
    this.brand = brand;
  }

  start() {
    super.start(); // call parent method
    console.log(`${this.brand} is ready to go!`);
  }
}

let c1 = new Car("Car", "Tesla");
c1.start();


// 4. Real-world tester example
class TestCase {
  constructor(name) {
    this.name = name;
    this.status = "Not Run";
  }

  run() {
    this.status = "Passed";
    console.log(`Test: ${this.name} → ${this.status}`);
  }
}

class LoginTest extends TestCase {
  constructor(name, user) {
    super(name);
    this.user = user;
  }

  run() {
    super.run(); // call parent method
    console.log(`Logged in as ${this.user}`);
  }
}

let test1 = new LoginTest("Login Test", "Meghana");
test1.run();


// 5. Practice Task → BankAccount
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited ₹${amount}. Balance: ₹${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`❌ Insufficient funds for ${this.owner}`);
    } else {
      this.balance -= amount;
      console.log(`${this.owner} withdrew ₹${amount}. Balance: ₹${this.balance}`);
    }
  }
}

class SavingsAccount extends BankAccount {
  addInterest(rate) {
    let interest = (this.balance * rate) / 100;
    this.balance += interest;
    console.log(`${this.owner} earned ₹${interest} interest. Balance: ₹${this.balance}`);
  }
}

let acc1 = new SavingsAccount("Meghana", 1000);
acc1.deposit(500);
acc1.withdraw(200);
acc1.addInterest(10);
