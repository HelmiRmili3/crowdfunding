class Actor {

    
  constructor(data) {
    this.address = data.address;
    this.cin = data.cin;
    this.role = data.role;
    this.password = data.password;
    this.blocked = data.blocked;
  }



  getaAddress() {
    return this.address;
  }



}
