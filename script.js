function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary(){
    for (i = 0; i < myLibrary.length; i++){
    let div = document.createElement("div");
      div.setAttribute("data-index",i);
      let book = {
        title : document.createElement("div"),
        author : document.createElement("div"),
        pages :document.createElement("div"),
        readBtn : document.createElement("button"),
        delBtn : document.createElement("button")
      };
      book.readBtn.setAttribute("class", "read");
      book.delBtn.setAttribute("class","delete");
      book.title.innerText = `Name: ${myLibrary[i].title}`;
      book.author.innerText = `Author: ${myLibrary[i].author}`;
      book.pages.innerText = `Pages: ${myLibrary[i].pages}`
      book.readBtn.innerText = myLibrary[i].read;
      book.delBtn.innerText = "Delete";
      library.appendChild(div);
      console.log(myLibrary[i]);
      for (const e in book){
        div.appendChild(book[e]);
      };
      let j = i;
      book.readBtn.addEventListener("click", ()=>{
          if (book.readBtn.innerText == "Read"){
            book.readBtn.innerText = "Not Read";
            myLibrary[j].read = "Not Read"
          }
          else if (book.readBtn.innerText == "Not Read"){
            book.readBtn.innerText = "Read";
            myLibrary[j].read = "Read";
          };
      })
      book.delBtn.addEventListener("click", ()=> {
        myLibrary.splice(book.delBtn.parentNode.getAttribute("data-index"), 1);
        book.delBtn.parentNode.remove();
        removeChilds();
        addBookToLibrary();
        console.log(myLibrary);
      })
    };
};

function removeChilds(){
  for(i = 0; i < myLibrary.length; i++){
    library.removeChild(library.firstElementChild);
  }
}


const library = document.querySelector("#library");
let book = new Book("The Elegance of the Hedgehog", 'Muriel Barbery', 256, "Not Read");
const myLibrary =[book];
const dialog = document.querySelector("dialog");
const addBook = document.querySelector("#newBook");
const form = document.querySelector("form");
const exitBtn = document.querySelector("#exit")
addBookToLibrary();

addBook.addEventListener('click', ()=>{
  dialog.showModal();
});
exitBtn.addEventListener('click', ()=>{
  dialog.close();
});
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let book = new Book(document.querySelector("#title").value, document.querySelector("#author").value, document.querySelector("#pages").value, document.querySelector('input[name="read"]:checked').value);
  removeChilds();
  myLibrary.push(book);
  addBookToLibrary();
  dialog.close();
  console.log(myLibrary);
});
