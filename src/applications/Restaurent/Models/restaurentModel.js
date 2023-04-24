import { LoremIpsum } from "lorem-ipsum";


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 4
  },
  wordsPerSentence: {
    max: 12,
    min: 8
  }
});
let date = new Date().toISOString().slice(0, 10)

 const randNum = (maxNum) =>{
  return Math.floor(Math.random(maxNum)) * 10
 }

const SECTION = {
  hero: {
    title: "Enjoy Healthy Life& Testy Food.",
    subTitle: "Healthy & Testy Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue",
  },
  about: {
    title: "Food is an important part Of a balanced Diet",
    subTitle: "About us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
  },
  catagory: {
    title: "Food category",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue",
  },
  whyChoose: {
    title: "Why We are the best?",
    subTitle: "Why Choose us",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue",
    ],
  },
  foodMenu: {
    title: "Our Food Menu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue",
  },
  teamMember: {
    title: "Team Member",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue",
  },
  testimonials: {
    title: "Customer Review",
    subTitle: "Testimonials",
    foodReview: {
      head: "Order now",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Quisque diam pellentesque bibendum fringilla bibendum. Urna, elit augue urna,",
      numOfStars: 5,
    },
  },
  blog: {
    title: "Latest news & Blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue",
  },
  partners: {
    title: "We work with the best pepole",
    subTitle: "Partners & Clients",
  },
  footer: {
    newsletterText: "Subscribe our newsletter and get discount 25%off",
    contactDetails: {
      title: "Contact us",
      location: "Kolkata India , 3rd Floor, Office 45",
      phoene: "00965 - 96659986",
      email: "M.Alyaqout@4house.Co",
      runningTime: "Sun - Sat / 10:00 AM - 8:00 PM",
    },
  },
};
const MENU = {
  Breakfast: [
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Berries and creme tart",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 450,
      price: 480,
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 660,
      price: 520,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 180,
      price: 220,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 900,
      price: 540,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 235,
      price: 780,
    },
  ],
  //--------------------
  Lunch: [
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 900,
      price: 540,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 235,
      price: 780,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Berries and creme tart",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 450,
      price: 480,
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 660,
      price: 520,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 180,
      price: 220,
    },
  ],
  //---------------
  Dinner: [
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 900,
      price: 540,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 235,
      price: 780,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Berries and creme tart",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 450,
      price: 480,
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 660,
      price: 520,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 180,
      price: 220,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
  ],
  //------------
  Desert: [
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 660,
      price: 520,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 180,
      price: 220,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 900,
      price: 540,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 235,
      price: 780,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Berries and creme tart",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 450,
      price: 480,
    },
  ],
  Drink: [
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 900,
      price: 540,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 235,
      price: 780,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Berries and creme tart",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 450,
      price: 480,
    },
  ],
  Snack: [
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 660,
      price: 520,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 180,
      price: 220,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      cal: 560,
      price: 320,
    },
  ],
};

const FOODCATAGORY = [
  {
    title: "Grand Italiano",
    imgUrl:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    noOfItems: 26,
  },
  {
    title: "Pene Salmone",
    imgUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    noOfItems: 32,
  },
  {
    title: "Molto Tagliatelle",
    imgUrl:
      "https://images.unsplash.com/photo-1558234469-50fc184d1cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    noOfItems: 12,
  },
  {
    title: "Pepperoni tagli",
    imgUrl:
      "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=502&q=80",
    noOfItems: 22,
  },
  {
    title: "Grand Italiano",
    imgUrl:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    noOfItems: 26,
  },
  {
    title: "Pene Salmone",
    imgUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    noOfItems: 32,
  },
  {
    title: "Molto Tagliatelle",
    imgUrl:
      "https://images.unsplash.com/photo-1558234469-50fc184d1cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    noOfItems: 12,
  },
  {
    title: "Pepperoni tagli",
    imgUrl:
      "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=502&q=80",
    noOfItems: 22,
  },
];

const FEATURES = [
  {
    title: "Fast Delivery",
    description: [
      "This is fast delevery, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in eu facilisis sed odio morbi quis ceu facilisis sed odio morbi quis ceu facilisis sed odio morbi quis c odio morbi quis c.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue",
    ],
    imgName: "fastDelevery",
  },
  {
    title: "24/7 services",
    description: [
      "24 / 7b service section,Ultricies mi quis hendrerit dolor magna eget est lorem. Sapien eget mi proin sed libero enim. Purus in mollis nunc sed id semper risus. At elementum eu facilisis sed odio morbi quis commodo odio. Amet justo donec enim diam vulputate ut pharetra sit amet. Id velit ut tortor pretium viverra.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue",
    ],

    imgName: "services",
  },
  {
    title: "Fresh food",
    description: [
      "Fresh food secrion here, Dictum sit amet justo donec enim diam. Pellentesque sit amet porttitor eget dolor morbi non arcu. Lectus quam id leo in vitae turpis massa. Sollicitudin nibh sit amet commodo nulla. Adipiscing elit pellentesque habitant morbi tristique senectus et.Adipiscing elit pellentesque Adipiscing e. et.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue",
    ],
    imgName: "freshFood",
  },
  {
    title: "Quality maintain",
    description: [
      "Quality maintain secrion here, Venenatis cras sed felis eget velit aliquet. Velit euismod in pellentesque massa placerat. Vulputate mi sit amet mauris commodo quis imperdiet massa. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ut tellus elementum sagittis vitae et leo duis ut. Mauris nunc congue nisi vi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue",
    ],
    imgName: "quality",
  },
];

const TEAMS = [
  {
    name: "Mark Henry",
    imgURL:
      "https://images.unsplash.com/photo-1576237680582-75be01432ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    position: "Owner",
  },
  {
    name: "Lucky Helen",
    imgURL:
      "https://images.unsplash.com/photo-1622329915089-ea1c29cee209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80",
    position: "Chef",
  },
  {
    name: "Moon Henry",
    imgURL:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    position: "Founder",
  },
  {
    name: "Tom Monrow",
    imgURL:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80",
    position: "Specialist",
  },
];

const REVIEW = [
  {
    profileName:"Abdur Rahman",
    profileUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    role: "customer",
    review: lorem.generateParagraphs(1),
  },
  {
    profileName:"Bulbul Hassan",
    profileUrl: "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    role: "Consumer",
    review: lorem.generateParagraphs(1),
  },
  {
    profileName:"Jorina Begum",
    profileUrl: "https://images.unsplash.com/photo-1542362879-8353335123aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    role: "employee",
    review: lorem.generateParagraphs(1),
  },
  {
    profileName:"M.Mohammad Nur",
    profileUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80",
    role: "customer",
    review: lorem.generateParagraphs(1),
  },
]

const BLOG = [
{
  title: 'Chocolate Truffle Cake WithHoney Flavor',
  description: lorem.generateSentences(2),
  date: date,
  comments: randNum(350),
},
{
  title: 'Chocolate Truffle Cake WithHoney Flavor',
  description: lorem.generateSentences(2),
  date: date,
  comments: randNum(350),
},
{
  title: 'Chocolate Truffle Cake WithHoney Flavor',
  description: lorem.generateSentences(2),
  date: date,
  comments: randNum(350),
},
]


export { SECTION, MENU, FOODCATAGORY, FEATURES, TEAMS, REVIEW, BLOG };
