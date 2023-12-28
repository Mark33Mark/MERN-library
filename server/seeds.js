// SEED FILE CONNECT TO MONGODB ON ITS OWN
// *RUN  node seed/seeds.js from the same level as the server or .env variables ===undefined

const mongoose = require('mongoose');
// Schema must match the seed
const Books = require('./models/Books');

//**PROTECT CREDS WITH THIS .ENV INSTEAD OF BRADS' DEFAULTJSON
require('dotenv').config();
const db = process.env.MONGODB_URI;

// STAND ALONE CONNECTION TO DB;
mongoose
  .connect(db)
  .then(() => console.log('mongodb SEED connection success'))
  .catch((error) => console.log(error));

// MOCK DATA
const seedBooks= [
{
    title: "The Great Gatsby",
    thumbnail: "the-great-gatsby.jpg",
    slug: "the-great-gatsby",
    description: "First published in 1925, F. Scott Fitzgerald's “The Great Gatsby” is widely hailed as one of the most important American novels of the twentieth-century.",
    stars: "5",
    category: ["romance", "science"]
  },
  {
    title: "The Hobbit",
    thumbnail: "the-hobbit.jpg",
    slug: "the-hobbit",
    description: "This book is a critical introduction to J.R.R. Tolkien’s The Hobbit, but it also advances an argument about the novel in the context of Tolkien’s larger literary and philosophical project. ",
    stars: "5",
    category: ["crime", "food"]
  },
  {
    title: "Demon Copperhead",
    thumbnail: "demon-copperhead.jpg",
    slug: "demon-copperhead",
    description: "A masterful recasting of David Copperfield, narrated by an Appalachian boy whose wise, unwavering voice relates his encounters with poverty, addiction, institutional failures and moral collapse-and his efforts to conquer them. - the Pulitzer.",
    stars: "4",
    category: ["adventure"]
  },
  {
    title: "The Extra Mile",
    thumbnail: "the-extra-mile.jpg",
    slug: "the-extra-mile",
    description: "An inspirational and life-affirming read. What Kevin Sinfield has achieved on and off the field is truly remarkable. His inspiring leadership and relentless focus on fundraising for MND shows how we should all strive to care more for each other' Gareth Southgate",
    stars: "2",
    category: ["other", "food"]
  },
  {
    title: "No One Saw a Thing",
    thumbnail: "no-one-saw-a-thing.jpg",
    slug: "no-one-saw-a-thing",
    description: "Two children get on the train. Only one gets off... Probably the most suspenseful book I will read all year. Liz Nugent",
    stars: "2",
    category: ["thriller", "crime"]
  },
  {
    title: "The Ink Black Heart",
    thumbnail: "the-ink-black-heart.jpg",
    slug: "the-ink-black-heart",
    description: "When frantic, dishevelled Edie Ledwell appears in the office begging to speak to her, private detective Robin Ellacott doesn't know quite what to make of the situation. The co-creator of a popular cartoon, The Ink Black Heart, Edie is being persecuted by a mysterious online figure who goes by the pseudonym of Anomie. Edie is desperate to uncover Anomie's true identity.",
    stars: "5",
    category: ["fiction"]
  },
  {
    title: "Harry Potter",
    thumbnail: "harry-potter.jpg",
    slug: "harry-potter",
    description: "Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him.",
    stars: "5",
    category: ["fiction"]
  }
  ,
  {
    title: "The 6:20 Man",
    thumbnail: "the-6-20-man.jpg",
    slug: "the-6-20-man",
    description: "The 6:20 Man is a heart-racing thriller set in the world of high finance in New York, from the number one best-selling author David Baldacci...",
    stars: "4",
    category: ["fiction"]
  }
];

//   seeding function
const seedDB = async () => {
  // deletes any existing collections before seeding
  await Books.deleteMany({});
  await Books.insertMany(seedBooks);
  console.log('seedDB function ran');
};
//   call the function and it's promise to close this connection after seeding
seedDB().then(() => {
  console.log('seeds closed connection');
  mongoose.connection.close();
});

