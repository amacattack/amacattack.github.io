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
  resume:
    'https://docs.google.com/document/d/1EF8HJmifrOfc2d530hAy3nnBXSWV4d2HwOyQnoAHv1M/edit?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'flavali.png',
    title: 'Flavali',
    info: `Who doesn't like trying new foods and flavors? I certainly do, which is why I
    built and designed a culinary tasting scorecard app with React, Material-UI, and Redux.
    Also, to ensure users' could save their games, I collaborated on Git to integrate a Google Cloud Firestore backend.`,
    url: 'https://flavali.vercel.app',
    repo: 'https://github.com/amacattack/flavali', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ageless.png',
    title: 'The Ageless Foundation',
    info: `During my time as a freelancer for The Ageless foundation I laid the groundwork for a design system and 
    style guide for use across the company's web properties, increasing cohesiveness and efficiency among team members.`,
    url: 'https://agelessandrew.com/',
    repo: 'https://github.com/amacattack/ageless', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moneyMatch.png',
    title: 'MoneyMatch',
    info: `For ETHDenver's Hackathon, I collaborated with a team of three to enable betting on Super Smash Bros. Melee matches.  
    I personally used TypeScript & React to optimize the frontend for usability using vanilla-extract styling and Radix-UI.`,
    url: 'https://moneymatch.vercel.app/',
    repo: 'https://github.com/whoislewys/moneymatch-interface', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: `Let's Chat`,
  email: 'amannaioni210@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/amacattack',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/alyssa-mannaioni',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
