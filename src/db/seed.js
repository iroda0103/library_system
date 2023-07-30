const bcryptjs = require("bcryptjs");

exports.seedAdmins = [
    {
      full_name: "Iroda Muminova",
      username: "iroda3242",
      password: bcryptjs.hashSync("1234"),
      is_super: true,
    },
    {
      full_name: "Nurbek Muminov",
      username: "nurbek3242",
      password: bcryptjs.hashSync("1234"),
    },
    {
      full_name: "Ra'no Muminova",
      username: "ra'no3242",
      password: bcryptjs.hashSync("1234"),
    },
  ];
  
exports.seedBorrowers = [
    {
      full_name: "John Doe",
      address: "123 Main St",
      phone: 1234567890,
    },
    {
      full_name: "Jane Smith",
      address: "456 Elm St",
      phone: 9876543210,
    },
    {
      full_name: "Bob Johnson",
      address: "789 Oak St",
      phone: 5555555555,
    },
  ];
  
 exports.seedAuthors = [
    {
      name: "O'tkir Hoshimov",
    },
    {
      name: "Said Ahmad",
    },
    {
      name: "Abdulla Qodiriy",
    },
  ];
  
exports.seedPublishers = [
    {
      name: "Publisher 1",
      address: "Address 1",
      phone: 1234567890,
      is_deleted: false,
    },
    {
      name: "Publisher 2",
      address: "Address 2",
      phone: 9876543210,
      is_deleted: true,
    },
    {
      name: "Publisher 3",
      address: "Address 3",
      phone: 1234567890,
      is_deleted: false,
    },
    {
      name: "Publisher 4",
      address: "Address 4",
      phone: 9876543210,
      is_deleted: false,
    },
    {
      name: "Publisher 5",
      address: "Address 5",
      phone: 1234567890,
      is_deleted: true,
    },
  ];
  
exports.seedBooks = [
    {
      title: "Book 1",
      publisher: "605a82c0c0d0e73b282bdc84", // Publisher modeldagi ID
      author: "605a82c0c0d0e73b282bdc85", // Author modeldagi ID
      copies: 5,
      is_deleted: false,
    },
    {
      title: "Book 2",
      publisher: "605a82c0c0d0e73b282bdc84",
      author: "605a82c0c0d0e73b282bdc85",
      copies: 3,
      is_deleted: true,
    },
    {
      title: "Book 3",
      publisher: "605a82c0c0d0e73b282bdc84",
      author: "605a82c0c0d0e73b282bdc85",
      copies: 2,
      is_deleted: false,
    },
    {
      title: "Book 4",
      publisher: "605a82c0c0d0e73b282bdc84",
      author: "605a82c0c0d0e73b282bdc85",
      copies: 5,
      is_deleted: false,
    },
    {
      title: "Book 5",
      publisher: "605a82c0c0d0e73b282bdc84",
      author: "605a82c0c0d0e73b282bdc85",
      copies: 50,
      is_deleted: false,
    },
    {
      title: "Book 6",
      publisher: "605a82c0c0d0e73b282bdc84",
      author: "605a82c0c0d0e73b282bdc85",
      copies: 60,
      is_deleted: true,
    },
  ];
  
