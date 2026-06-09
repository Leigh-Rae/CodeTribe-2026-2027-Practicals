
var libraryName = "Leigh's Library"

class Books{

constructor( title,author, pages){
this.title = title;
this.author = author;
this.pages = pages;
}
About(){
    let rating = "top tier"
    console.log("this book is about love")
    
}
}

let book1= new Books( "Atomic Habits", "James Clear", "320")
let book2= new Books( "The Alchemist", "Paulo Coelho", "208")
let book3= new Books( "Deep Work", "Cal Newport", "304")

console.log(book2)
console.log(book1)
console.log(book3)


