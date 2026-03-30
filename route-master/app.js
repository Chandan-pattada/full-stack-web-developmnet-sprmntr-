const express = require('express');
const app = express();

app.use(express.json()); // to read JSON data

// Dummy Data
let books = [
    { id: 1, title: "Harry Potter", authorId: 1 },
    { id: 2, title: "The Hobbit", authorId: 2 }
];

let authors = [
    { id: 1, name: "J.K. Rowling" },
    { id: 2, name: "J.R.R. Tolkien" }
];

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Bookstore API');
});

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
});
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        authorId: req.body.authorId
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// Get all authors
app.get('/authors', (req, res) => {
    res.json(authors);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});