


// App.js
import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from './components/BooksPage';
import BookDetailsPage from './components/BookDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

