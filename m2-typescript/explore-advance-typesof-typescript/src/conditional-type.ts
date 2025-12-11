// Conditional type (the type depends on condition)

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

//--------------------------------------------------------------------

type richPeopleVehicle = {
    bike: string;
    car: string;
    ship: string;
}

type checkVehicle<T> = T extends keyof richPeopleVehicle ? true : false;

type hasBike = checkVehicle<"ship">;