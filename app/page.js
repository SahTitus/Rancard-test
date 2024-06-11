import { Home } from "@components/pages/Home";
import React from "react";

const products = [
  {
    id: 1,
    name: '4 Meat Pizza',
    image: '/pizza1.jpg',
    rating: '4.5',
    price: 30,
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    image: '/pizza2.jpg',
    rating: '4.2',
    price: 25,
  },
  {
    id: 3,
    name: 'Pepperoni Pizza',
    image: '/pizza1.jpg',
    rating: '4.7',
    price: 28,
  },
  {
    id: 4,
    name: 'BBQ Chicken Pizza',
    image: '/pizza2.jpg',
    rating: '4.8',
    price: 32,
  },
  {
    id: 5,
    name: 'Hawaiian Pizza',
    image: '/pizza1.jpg',
    rating: '4.0',
    price: 27,
  },
  {
    id: 6,
    name: 'Veggie Pizza',
    image: '/pizza2.jpg',
    rating: '4.3',
    price: 26,
  },
  {
    id: 7,
    name: 'Buffalo Chicken Pizza',
    image: '/pizza1.jpg',
    rating: '4.6',
    price: 31,
  },
  {
    id: 8,
    name: 'Supreme Pizza',
    image: '/pizza2.jpg',
    rating: '4.5',
    price: 34,
  },
  {
    id: 9,
    name: 'Cheese Pizza',
    image: '/pizza1.jpg',
    rating: '4.4',
    price: 22,
  },
  {
    id: 10,
    name: 'Mexican Pizza',
    image: '/pizza2.jpg',
    rating: '4.7',
    price: 29,
  },
  {
    id: 11,
    name: 'White Pizza',
    image: '/pizza1.jpg',
    rating: '4.3',
    price: 30,
  },
  {
    id: 12,
    name: 'Meat Lovers Pizza',
    image: '/pizza2.jpg',
    rating: '4.8',
    price: 33,
  },
  {
    id: 13,
    name: 'Spinach and Feta Pizza',
    image: '/pizza1.jpg',
    rating: '4.2',
    price: 28,
  },
  {
    id: 14,
    name: 'BBQ Bacon Cheeseburger Pizza',
    image: '/pizza2.jpg',
    rating: '4.6',
    price: 35,
  },
  {
    id: 15,
    name: 'Pesto Chicken Pizza',
    image: '/pizza1.jpg',
    rating: '4.5',
    price: 32,
  }
];


export default function page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Home products={products} />
    </main>
  );
}
