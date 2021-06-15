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
    price = 0;
    company = "not defined";
    devaluationRatePerKm = 1/1000000;

    constructor(props) {
        this.company = props['company'];
        this.color = props['color'];
        this.kmPerLt = props.kmPerLt;
        this.tank = props.tank;
        this.price = props.price;
        this.year = props.year;
        this.model = props.model;
    }

    currentGas(){
        return this.gas;
    }

    availableGasSpace() {
        return this.tank - this.gas;
    }

    addGas(liters) {
        this.gas += (liters<=this.availableGasSpace())?liters:this.availableGasSpace();
    }

    maximumDistanceToTravel() {
        return this.gas * this.kmPerLt;
    }

    move(kms){
        this.maximumDistanceToTravel();
        if (kms > this.maximumDistanceToTravel()) {
            this.kms += this.maximumDistanceToTravel();
            this.gas -= this.maximumDistanceToTravel() / this.kmPerLt;
        } else {
            this.kms += kms;
            this.gas -= kms / this.kmPerLt;
        }
    }

    currentSalePrice() {
        return this.price * ((this.kms*this.devaluationRatePerKm<0.9)?1-(this.kms*this.devaluationRatePerKm):0.1);
    }
}

module.exports = Car;