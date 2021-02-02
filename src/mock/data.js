import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tom Markey',
  subtitle: 'Python Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Before the pandemic, I spent 6 years cooking professionally in fine dining restaurants.  I'm now finding new challenges and problems to solve with software developement.  In many ways the two paths are very similar.  Both require respect for those who came before you, an eagerness to be better everyday, and the importance of understanding the fundamentals.",
  paragraphTwo: "\"Without experimenting, A willingness to ask questions and try new things, We surely become static.\" \n- Anthony Bourdain",
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Auto-Craig 4000',
    info: 'Sends your resume 4000 job postings in one click.',
    info2: '',
    url: 'https://github.com/t-markey/autoApplyCraig',
    repo: 'https://github.com/t-markey/autoApplyCraig', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Guava',
    info: 'A clone of the popular exercise tracker Strava.',
    info2: 'Upload and visualize gps data from a garmin watch. ',
    url: 'https://github.com/t-markey/Guava--Strava-redesign',
    repo: 'https://github.com/t-markey/Guava--Strava-redesign', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Landline to Web ',
    info: 'Gives the landline access to the internet.',
    info2: "A fun and useful tool to expand the capabilities of landlines for folks in the country that don't have internet.  It can search and orate wikipedia articles, send sms, get local/global weather, and get connected to the highest ranked local pizzeria near you!",
    url: 'https://twitter.com/tommarkey5/status/1317531049820303361',
    repo: 'https://github.com/t-markey/Land-Line-To-Web', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 't.markey@mailfence.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/tommarkey5',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/t-markey',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/t-markey',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
