//todo-> Problem 8:

interface ProductType {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}[];

const calculateTotalPrice = (products: ProductType[]) =>
    products.reduce((sum, product) => {
        const total = product.price * product.quantity;
        const discount = product.discount ? (total * product.discount) / 100 : 0;
        const finalPrice = total - discount;
        return sum + finalPrice;
    }, 0);

const products: ProductType[] = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));