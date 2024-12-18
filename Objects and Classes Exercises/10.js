class Vehicle {

    constructor(type, model, parts = {}, fuel, drive) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    }
    drive(fuel) {
        this.fuel -= fuel;
    }
}
