import Product from "../models/Product.js";

const seedProducts = async () => {
  const count = await Product.count();
  if (count === 0) {
    await Product.bulkCreate([
      {
        name: "Nike Air Max",
        description: "Lightweight running shoes with air cushioning",
        price: 4999,
        stock: 30,
        image: "https://via.placeholder.com/300?text=Nike+Air+Max",
      },
      {
        name: "Apple iPhone 15",
        description: "Latest iPhone with A16 chip and 48MP camera",
        price: 79999,
        stock: 15,
        image: "https://via.placeholder.com/300?text=iPhone+15",
      },
      {
        name: "Samsung 4K TV 55inch",
        description: "Crystal clear 4K UHD Smart TV with HDR",
        price: 54999,
        stock: 10,
        image: "https://via.placeholder.com/300?text=Samsung+TV",
      },
      {
        name: "Boat Rockerz 450",
        description: "Wireless Bluetooth headphones with 15hr battery",
        price: 1299,
        stock: 50,
        image: "https://via.placeholder.com/300?text=Boat+Headphones",
      },
      {
        name: "Levi's Slim Fit Jeans",
        description: "Classic blue slim fit denim jeans",
        price: 2499,
        stock: 40,
        image: "https://via.placeholder.com/300?text=Levis+Jeans",
      },
    ]);
    console.log("Sample products seeded successfully");
  }
};

export default seedProducts;
