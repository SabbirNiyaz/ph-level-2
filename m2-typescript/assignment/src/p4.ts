//todo-> Problem 4:

type itemType = 
    { 
        title: string;
        rating: number;
    }[];

const filterByRating = (items: itemType) => {
    return items.filter(item => item.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));