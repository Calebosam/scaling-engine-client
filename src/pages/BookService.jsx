import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3001/books';  // Replace with your actual backend URL

const BookService = () => {
  const navigate = useNavigate()
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [editBookId, setEditBookId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editGenre, setEditGenre] = useState('');

  // Fetch all books when component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to fetch all books
  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Function to create a new book
  const createBook = async () => {
    try {
      await axios.post(API_URL, { title, description, genre });
      setTitle('');
      setDescription('');
      setGenre('');
      fetchBooks();  
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  // Function to update an existing book
  const updateBook = async () => {
    try {
      await axios.put(`${API_URL}/${editBookId}`, { title: editTitle, description: editDescription, genre: editGenre });
      setEditBookId(null);
      setEditTitle('');
      setEditDescription('');
      setEditGenre('');
      fetchBooks();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  // Function to delete a book
  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`${API_URL}/${bookId}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
        <button onClick={() => navigate("/")}>Back</button>
      <h1>Book Management</h1>

      {/* Create new book */}
      <h2>Create Book</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button onClick={createBook}>Create Book</button>
      </div>

      {/* List of books */}
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.description} (Genre: {book.genre})
            <button onClick={() => {
              setEditBookId(book.id);
              setEditTitle(book.title);
              setEditDescription(book.description);
              setEditGenre(book.genre);
            }}>
              Edit
            </button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Edit existing book */}
      {editBookId && (
        <div>
          <h2>Edit Book</h2>
          <input
            type="text"
            placeholder="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Genre"
            value={editGenre}
            onChange={(e) => setEditGenre(e.target.value)}
          />
          <button onClick={updateBook}>Update Book</button>
          <button onClick={() => setEditBookId(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default BookService;
