//! Utility types

type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
}

type productSummery = Pick<Product, 'id' | 'name' | 'price'> //? Pick = Pick with 

type OutStock = Omit<Product, 'stock'>  //? Omit = Pick without

type productWithReq = Required<Product>; //? Required = No optional

type optionalProduct = Partial<Product>; //? Partial = All optional

type productReadonly = Readonly<Product>; //? Readonly = Can't change

const emptyObj: Record<string, unknown> = {}; //? Record<key = string, value = unknown>
/*
const emptyObj = {
    "string": "unknown"
 }
*/

const product1: productWithReq = {
    id: 22,
    name: "Ram",
    price: 10000,
    stock: 5,
    color: "White",
}

const product2: optionalProduct = {
    name: "Ram",
    price: 10000,
    color: "White",
}



