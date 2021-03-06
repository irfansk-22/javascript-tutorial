// Book Constructor - will handle creation of actual book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor - set of prototypes methods todo things like add book, delete book and show the alert
function UI() {}

UI.prototype = {
  constructor: UI,

  addBookToList: function (newBook) {
    const list = document.getElementById('book-list');
  
    //Create tr element
    const row = document.createElement('tr');
  
    //Insert cols
    row.innerHTML = `
      <td>${newBook.title}</td>
      <td>${newBook.author}</td>
      <td>${newBook.isbn}</td>
      <td><a href="#" class="delete">#</a></td>
      `;
  
    list.appendChild(row);
  },

  showAlert: function (msg, className) {
    //Create a div
    const div = document.createElement('div');
  
    //Add classes
    div.className = `alert ${className}`;
  
    //Add text
    div.appendChild(document.createTextNode(msg));
  
    //Get parent
    const container = document.querySelector('.container');
  
    //Get form
    const form = document.getElementById('book-form');
  
    //Insert alert
    container.insertBefore(div, form);
  
    //Timeout after 3sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  },

  deleteBook: function (target) {
    if (target.className === 'delete') {
      if (confirm('Are you sure you want to remove this field')) {
        target.parentElement.parentElement.remove();
        this.showAlert('Book Removed!', 'success'); //TODO:understand properly use of (this) here
      }
    }
  },

  clearFields: function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  },
};

// EVENT LISTENER FOR ADD
document.getElementById('book-form').addEventListener('submit', function (e) {

  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiate objects
  const book = new Book(title, author, isbn);
  const ui = new UI();

  //validate
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearFields();
  }

  e.preventDefault();
});

// EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
});
