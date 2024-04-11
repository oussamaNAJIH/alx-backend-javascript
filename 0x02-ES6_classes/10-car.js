const carClassSymbol = Symbol('CarClass');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[carClassSymbol] = this.constructor;
  }

  cloneCar() {
    const CarClass = this[carClassSymbol];
    return new CarClass(this._brand, this._motor, this._color);
  }
}

export default Car;
