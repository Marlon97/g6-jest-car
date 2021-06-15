class Car {
    gas = 0;
    model = 'not defined';
    year = 'not defined';
    wheels = 4;
    kmPerLt = 0;
    color = 'not defined';
    hybrid = 'not defined';
    kms = 0;
    tank = 0;

    constructor(model, color, kmPerLt, tank) {
        this.model = model;
        this.color = color;
        this.kmPerLt = kmPerLt;
        this.tank =tank;
    }

    currentGas(){
        return this.gas;
    }

    availableGasSpace() {
        return this.tank - this.gas;
    }

    addGas(liters) {
        this.gas = (liters<=this.availableGasSpace())?this.gas+liters:this.tank;
    }

    move(kms){
        this.kms += kms;
        this.gas -= kms / this.kmPerLt;
    }
}

module.exports = Car;