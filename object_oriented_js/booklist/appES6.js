class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(newBook) {
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
  }

  showAlert(msg, className) {
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
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// EVENT LISTENER FOR ADD
document.getElementById('book-form').addEventListener('submit', function (e) {
  //Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  //Instantiate book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();
  console.log(ui);

  //validate
  if (title === '' || author === '' || isbn === '') {
    //Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    //Add book to list
    ui.addBookToList(book);

    //Success alert
    ui.showAlert('Book Added!', 'success');

    //Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener('click', function (e) {
  //Instantiate UI
  const ui = new UI();

  //Delete book
  if (confirm('Are you sure you want to remove this field')) {
    ui.deleteBook(e.target);

    //Show alert
    ui.showAlert('Book Removed!', 'success');
  }
});
