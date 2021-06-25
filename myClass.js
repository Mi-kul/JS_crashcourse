//Class creation

class Customer {
  constructor(firstName, lastName, credit, orders) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.credit = credit;
    this.orders = orders;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }
}
