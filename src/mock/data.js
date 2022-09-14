import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alyssa | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Welcome to my website`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Alyssa',
  subtitle: `I'm a Frontend Developer!`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profPic.jpg',
  paragraphOne: `Software can make everyones' lives easier. My mission is to continue developing 
    and applying my skills in software to build a more sustainable world. Also it's cool to build things. 
    Because I enjoy coding, I believe that I can be a part of a generation that makes a sustainable world 
    a reality.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Flavali',
    info: `Who doesn't like trying new foods and flavors? I certainly do, which is why I am currently 
    building and designing a culinary tasting scorecard app with React, Material-UI, and Redux.
    Also, to ensure users' could save their games, I collaborated on Git to integrate a Google Cloud Firestore backend.`,
    url: 'https://flavali.vercel.app',
    repo: 'https://github.com/amacattack/flavali', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Todo List',
    info: `As a first solo project, I built a persistent todo list web app with JavaScript, HTML, and 
    CSS using local storage. I also integrated an API to display a daily inspirational quote on the web app 
    to keep motivation alive.`,
    url: 'https://amacattack.github.io/todo-list/',
    repo: 'https://github.com/amacattack/todo-list', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Card Matching Game',
    info: `To get an understanding of data structures, I implemented game logic with JavaScript to complete this responsive 
    hiking card matching game.`,
    url: 'https://amacattack.github.io/matching-game/',
    repo: 'https://github.com/amacattack/matching-game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'amannaioni210@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
