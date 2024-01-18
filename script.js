const library = document.querySelector("#library");

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = ()=>{
    return `${this.title}. ${this.author}, ${this.pages}`
  };
};
const book = new Book("The Elegance of the Hedgehog", 'Muriel Barbery', 256, "not read");
const myLibrary =[book];


function addBookToLibrary(){
  let promptUser = prompt("enter the book name", "harry potter");
  myLibrary.push(promptUser);
};

function displayBooks(){
  let arrayLength = myLibrary.length;
  for (i = 0; i < arrayLength; i++){
    let div = document.createElement("div");
    let btn = document.createElement("button");
    div.innerText = myLibrary[i].info();
    btn.innerText = myLibrary[i].read;
    library.appendChild(div);
    div.appendChild(btn);
  }
}
displayBooks();
const addBook = document.querySelector("#newBook")
addBook.addEventListener('click', ()=>{
  addBookToLibrary();
  displayBooks();
});
