"use client";
import { useState } from 'react';
import styles from './ProductCard.module.css';
import Link from 'next/link';

export default function Products() {
  const [books, setBooks] = useState([
    { id: 1, name: 'book 1', price: '$10' },
    { id: 2, name: 'book 3', price: '$20' },
    { id: 3, name: 'book 2', price: '$15' },
    { id: 4, name: 'book 4', price: '$25' },
    { id: 5, name: 'book 5', price: '$30' },
    { id: 6, name: 'book 6', price: '$35' },
    { id: 7, name: 'book 7', price: '$40' },
    { id: 8, name: 'book 8', price: '$45' },
    { id: 9, name: 'book 9', price: '$50' },
    { id: 10, name: 'book 10', price: '$55' },
    { id: 11, name: 'book 11', price: '$60' }
  ]);

  return (
    <>
      <Link href={"cart"}>cart</Link>
      <div className={styles.cards}>
        {books.map((book, index) => (
          <div key={index}>
            <img src="/book.webp" alt={book.name} className={styles.bookImage} />
            <h3 className="text-2xl font-bold">{book.name}</h3>
            <p className={styles.price}>{book.price}</p>
            <button className={styles.addBtn}>+</button>
          </div>
        ))}
      </div>
    </>
  );
}
