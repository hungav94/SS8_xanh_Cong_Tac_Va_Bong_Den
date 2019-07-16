function ElectricLamp(status) {
    this.status = status;
    this.ElectricLamp = function () {
        this.status = status;
    };
    this.turnOff = function () {
        alert('unlighting');
    };
    this.turnOn = function () {
        alert('lighting');
    };
}
