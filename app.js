class Vehicle {
    constructor(make, model, year){
        if(typeof make !== 'string' || typeof model !== 'string'){
            throw new Error('Please enter correct information for Make and Model')
        }
        if (typeof year !== 'number') {
            throw new Error('Please enter a number for year')
        }
        this.make = make;
        this.model = model; 
        this.year = year;
    }
    honk(){
        return 'Beep'
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make,model, year){
        super(make, model, year);
        this.numOfWheels = 4
    }

}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numOfWheels = 2;
    }
    revEngine(){
        return 'VROOM'
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity
    }
    vehicles = []; // this still works but is different from solution...is it okay?
    add(vehicle){
        if(!vehicle.make || !vehicle.model || !vehicle.year){
            throw new Error('Only vehicles are allowed here')
        }
        if(this.vehicles.length >= this.capacity){
            throw new Error('Garage is at capacity')
        }
        if(vehicle.numOfWheels === 4){
            this.vehicles.push('Car');
            return 'Vehicle added'
        } else {
            this.vehicles.push('Motorcycle');
            return 'Motorcycle added'
        }

    }
    // add(newVehicle) {
    //     if (!(newVehicle instanceof Vehicle)) {
    //       return "Only vehicles are allowed in here!";
    //     }
    //     if (this.vehicles.length >= this.capacity) {
    //       return "Sorry, we're full.";
    //     }
    //     this.vehicles.push(newVehicle);
    //     return "Vehicle added!";
    //   }

    // like more clarifcation on the exact meaning of code here 

}