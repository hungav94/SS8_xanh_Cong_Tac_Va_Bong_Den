function SwitchButton(status, lamp) {
    this.status = status;
    this.lamp = ElectricLamp;
    this.SwitchButton = function () {
        this.status = true;
        this.lamp = ElectricLamp;
    };
    this.switchOff = function () {
        this.status = false;
    };
    this.switchOn = function () {
        this.status = true;
    };
    this.connectToLamp = function (ElectricLamp) {
        if (this.status) {
            ElectricLamp.turnOn();
            this.status = false;
        } else if (this.status == false) {
            ElectricLamp.turnOff();
            this.status = true;
        }
    };
}