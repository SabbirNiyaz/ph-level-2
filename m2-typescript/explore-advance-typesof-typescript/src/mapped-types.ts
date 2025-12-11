//! Mapped types

const arrayNum: number[] = [1, 3, 6];
const arrayStr: string[] = ['1', '3', '6'];

const arrayOfStringUsingMap: string[] = arrayNum.map((num) => num.toString());
const arrayOfNumberUsingMap: number[] = arrayStr.map((str) => parseInt(str));

console.log(arrayOfStringUsingMap);
console.log(arrayOfNumberUsingMap);

// Another example (key in)

type AreaOfNumber = {
    height: number;
    width: number;
}

type AreaOfString = {
    [key in "height" | "width"]: string;  // key come from AreaOfNumber's keys
}

// Better way
type AreaOfBoolean = {
    [key in keyof AreaOfNumber]: boolean;  // key come from keyof AreaOfNumber
}

type AreaBool<T> = {
    [key in keyof T]: T[key];
}

const area1: AreaBool<{ height: string; width: boolean }> = {
    height: "true",
    width: false,
};