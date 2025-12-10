// keyof = type operator

type RichPeopleVehicle = {
    //  key : value
    car: string;
    bike: string;
    cng: string;
}
type MyVehicle1 = 'bike' | 'car' | 'cng';
type MyVehicle2 = keyof RichPeopleVehicle; //get the keys of RichPeopleVehicle objects

const MyVehicle3: MyVehicle2 = 'bike'
// const MyVehicle4: MyVehicle2 = 'plane' //error


// keyof object
type user = {
    name: string;
    id: number;
    address: {
        city: string;
    }
}
const user1: user = {
    name: 'Sabbir',
    id: 2247538,
    address: {
        city: 'Dhaka',
    },
}

const watch = {
    brand: "apple",
}
// Pass generics object and keyof 
const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
    return obj[key];
}

const result1 = getPropertyFromObj(user1, 'name')
console.log(result1);

const result2 = getPropertyFromObj(watch, 'brand')
console.log(result2);