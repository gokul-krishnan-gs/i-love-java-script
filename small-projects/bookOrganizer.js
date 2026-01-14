const books = [
  {
    title: "The Alchemist",
    authorName: "Paulo Coelho",
    releaseYear: 2002
  },
  {
    title: "Clean Code",
    authorName: "Robert C. Martin",
    releaseYear: 2008
  },
  {
    title: "You Don't Know JS",
    authorName: "Kyle Simpson",
    releaseYear: 2015
  },
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 2018
  }
];


function sortByYear(book1,book2){
if(book1.releaseYear < book2.releaseYear){
  return -1;
}else if(book1.releaseYear > book2.releaseYear){
return 1;
}else if(book1.releaseYear === book2.releaseYear){
return 0;
}
}

const filteredBooks = books.filter((book)=>book.releaseYear < 2014);

console.log(filteredBooks);

filteredBooks.sort(sortByYear );
