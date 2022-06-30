import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Nenad",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Ball",
      slug: "ball",
      category: "Balls",
      image: "/images/ball.jpg",
      price: 10,
      countInStock: 30,
      brand: "Spalding",
      rating: 4.0,
      numReviews: 30,
      description: "high quality ball",
    },
    {
      name: "Hoop",
      slug: "hoop",
      category: "Hoops",
      image: "/images/hoop.jpg",
      price: 90,
      countInStock: 0,
      brand: "Wilson",
      rating: 3.0,
      numReviews: 5,
      description: "high quality hoop",
    },
    {
      name: "Jersay",
      slug: "jersay",
      category: "Jersays",
      image: "/images/jersay.jpg",
      price: 50,
      countInStock: 20,
      brand: "Peak",
      rating: 4.5,
      numReviews: 20,
      description: "high quality jersay",
    },
    {
      name: "Shoes",
      slug: "shoes",
      category: "Shoes",
      image: "/images/shoes.jpg",
      price: 40,
      countInStock: 10,
      brand: "Converse",
      rating: 3.5,
      numReviews: 10,
      description: "high quality shoes",
    },
  ],
};

export default data;
