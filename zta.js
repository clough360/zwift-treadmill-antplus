// console.log("device", device);
var Ant = require('ant-plus');


var stick = new Ant.GarminStick2;
var sensor = new Ant.HeartRateScanner(stick);

sensor.on('attached', () => {
    console.log("attached");
    fe.setTargetPower(100, () => console.log("set fe tp"));
});
sensor.on('detached', () => {
    console.log("detached");
});
sensor.on('hbData', function (data) {
    console.log(data.DeviceID, data.ComputedHeartRate);
});

var fe = new Ant.FitnessEquipmentSensor(stick);
fe.on('attached', () => console.log("attached fe"));
fe.on('detached', () => console.log("detached fe"));

// stick.on('startup', function () {
//     sensor.scan();
// );
stick.on('startup', function () {
    console.log("STICK", "Startup")
    //sensor.attach(0, 0);
    //sensor.scan();
    fe.attach(0, 0);
});

// console.log("Devices:");

// usb.getDeviceList().forEach(d => console.log("dev", d));

// console.log(getDevices());
if (!stick.open()) {
    console.log('Stick not found!');
    return;
}
console.log("USB ANT+ Stick found");   

let exit = false;

const loop = () => {
    if (!exit) {
        setTimeout(loop, 1000);
        console.log("tick");
    }
 };

loop();
