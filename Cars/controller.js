"use strict";
var car;
var wheel;
var plate;
var brand;
var color;
var diameter;
var wheelBrand;
window.onload = function () {
    var wheel = document.getElementById("wheel");
    wheel.classList.add("hide");
};
function plateValidate(plate) {
    var plate_regex = /[0-9]{4}[A-Z]{3}/g;
    if (!plate_regex.test(plate)) {
        return true;
    }
    else {
        return false;
    }
}
function createCar() {
    plate = document.getElementById('plate').value;
    brand = document.getElementById('brand').value;
    color = document.getElementById('color').value;
    var error = 0;
    if (plate == "") {
        alert("Please insert a valid plate");
        error++;
    }
    if (plateValidate(plate)) {
        alert("Plate must contain 4 numbers and 3 letters!");
        error++;
    }
    if (brand == "") {
        alert("Please insert a valid brand");
        error++;
    }
    if (color == "") {
        alert("Please insert a valid color");
        error++;
    }
    if (error == 0) {
        var plateInfo = document.getElementById('plateInfo');
        var colorInfo = document.getElementById('colorInfo');
        var brandInfo = document.getElementById('brandInfo');
        plateInfo.value = "Plate: " + plate;
        brandInfo.value = "Brand: " + brand;
        colorInfo.value = "Color: " + color;
        // car= new Car(plate, color, brand); 
    }
}
function showFormWheel() {
    var wheel = document.getElementById("wheel");
    wheel.classList.remove("hide");
    var form_car = document.getElementById("form_car");
    form_car.classList.add("hide");
}
function diameterValidate(diameter) {
    if (diameter < 0.4 || diameter >= 2) {
        return false;
    }
    else {
        return true;
    }
}
function checkNumber(diameter) {
    var diameter_regex = /^[0-9]+$/;
    if (!diameter_regex.test(diameter)) {
        return true;
    }
    else {
        return false;
    }
}
function addWheels() {
    var wheel = document.getElementById("wheel");
    var error = 0;
    for (var i = 1; i <= wheel.length; i++) {
        var diameter_1 = document.getElementById("diameter" + i).value;
        var wheelBrand_1 = document.getElementById('wheelBrand' + i).value;
        if (checkNumber(diameter_1)) {
            alert("Diameter must be a number");
            error++;
        }
        if (!diameterValidate(diameter_1)) {
            alert("Diameter must be bigger than 0.4 and smaller than 2!");
            error++;
        }
        if (wheelBrand_1 == "") {
            alert("Please insert a valid wheel brand");
            error++;
        }
        if (error == 0) {
            var wheelInfo = document.getElementById('wheelInfo');
            wheelInfo.value = wheelInfo.value + (" Wheel: " + i + " Brand: " + wheelBrand_1 + " Diameter: " + diameter_1);
            // wheel= new Wheel(wheelBrand,diameter);
        }
    }
}
