
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://softwium.com/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h3 className="mt-4">Book Details Page</h3>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title: {book.title}</h5>
          <p className="card-text">ISBN: {book.isbn}</p>
          <p className="card-text">Page Count: {book.pageCount}</p>
          <p className="card-text">Authors: {book.authors.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;



