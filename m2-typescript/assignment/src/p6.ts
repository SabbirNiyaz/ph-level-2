//todo-> Problem 6:

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (books: Book[]) => {
    books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author},Published Year: ${book.publishedYear}, Available: ${book.isAvailable}`);
    })
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
const myBook2: Book = {
  title: 'The Modern Codding',
  author: 'S. Hossain Niyaz',
  publishedYear: 2025,
  isAvailable: false,
};

printBookDetails([myBook]);
printBookDetails([myBook2]);