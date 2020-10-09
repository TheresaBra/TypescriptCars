let car:Car; 
let wheel:Wheel; 
let plate;
let brand;
let color;
let diameter; 
let wheelBrand; 
​
window.onload = function(){
let wheel:any = document.getElementById("wheel") as HTMLFormElement; 
wheel.classList.add("hide"); 
}

function plateValidate(plate:string){
​
    let plate_regex = /[0-9]{4}[A-Z]{3}/g;
​
    if (!plate_regex.test(plate)) {
       
        return true;
    } else {
        return false;
    }
    
}
​

​
function createCar() {
    plate = (document.getElementById('plate') as HTMLInputElement).value;
    brand = (document.getElementById('brand') as HTMLInputElement).value;
    color = (document.getElementById('color') as HTMLInputElement).value;
​
    var error = 0;
    
​
    if (plate == ""){
        alert("Please insert a valid plate");
        error++;
    }
​
    if (plateValidate(plate)){
        alert("Plate must contain 4 numbers and 3 letters!");
        error++;
    }
​
    if (brand == ""){
        alert("Please insert a valid brand");
        error++;
    }
​
    if (color == ""){
        alert("Please insert a valid color");
        error++;
    }
​
    if (error == 0) {
    let plateInfo:any = document.getElementById('plateInfo')as HTMLElement;
    let colorInfo:any = document.getElementById('colorInfo')as HTMLElement;
    let brandInfo:any = document.getElementById('brandInfo')as HTMLElement;
​
    plateInfo.value = "Plate: " + plate;
    brandInfo.value = "Brand: " + brand;
    colorInfo.value = "Color: " + color;
​
    // car= new Car(plate, color, brand); 
    }
}

​function showFormWheel() {
    let wheel:any = document.getElementById("wheel") as HTMLFormElement; 
    wheel.classList.remove("hide"); 
    let form_car:any = document.getElementById("form_car") as HTMLFormElement; 
    form_car.classList.add("hide"); 
}

​function diameterValidate(diameter:number){
​
    if (diameter <0.4 || diameter>=2) {
        return false;
    } else {
        return true;
    }
    
}

function checkNumber(diameter:any){
    let diameter_regex=/^[0-9]+$/;

    if (!diameter_regex.test(diameter))
    {
        return true;
    } else {
        return false;
    }
}
​
function addWheels() {
​
    let wheel:any = document.getElementById("wheel") as HTMLFormElement; 
    var error = 0;
        
    for (let i = 1; i <= wheel.length; i++) {
        let diameter:any = (document.getElementById("diameter" +i) as HTMLFormElement).value;
        let wheelBrand:string = (document.getElementById('wheelBrand'+i) as HTMLInputElement).value;
        
        if (checkNumber(diameter)){
            alert("Diameter must be a number");
            error++;
        }
        if (!diameterValidate(diameter)){
            alert("Diameter must be bigger than 0.4 and smaller than 2!");
            error++;
        }
        if (wheelBrand == ""){
            alert("Please insert a valid wheel brand");
            error++;
        }
        if (error == 0) {
            
        let wheelInfo:any = document.getElementById('wheelInfo')as HTMLElement;
        wheelInfo.value = wheelInfo.value + (" Wheel: " + i + " Brand: " + wheelBrand  +   " Diameter: " + diameter);
        // wheel= new Wheel(wheelBrand,diameter);
    
        }
    }
}