const projects = [
  {
    title: 'Chatty',
    screenshot:
      'https://user-images.githubusercontent.com/67588177/93780458-cf2ee780-fbed-11ea-8771-1061768caaf5.png',
    description:
      'Group project - Tasked with creating a chat page that meets the following criteria: On page load users may choose a character to post a message as. Once the message is entered the user may hit enter or click the send button to post it. The message appears with a timestamp, the ability to edit and remove. A limit of 20 messages appear on the page. There is an option to switch into dark mode and the user may enlarge the text.',
    technologiesUsed: 'jQuery, Bootstrap, Webpack, Javascript ES6, Sass, HTML',
    available: true,
    url: 'https://chatty-group-project.netlify.app/',
    githubUrl: 'https://github.com/ryanmcnair/chatty-beta-1',
  },
  {
    title: 'Dino Kennel',
    screenshot:
      'https://user-images.githubusercontent.com/67588177/93780078-53cd3600-fbed-11ea-938e-dd6d6ca1594c.png',
    description:
      'Milestone project - This project showcases vanilla Javascrtipt we have learned to date. Healthy dinos show in the kennel, sick dinos in the hospital and dead dinos in the graveyard. New dinos can be added and all dinos can be removed. Dinos will be fed and petted to increase progress and go on adventures to decrease progress. You will be able to view adventures in a modal.',
    technologiesUsed: 'HTML, CSS, JavaScript & Bootstrap',
    available: true,
    url: 'https://dino-kennel-rm.netlify.app/',
    githubUrl: 'https://github.com/ryanmcnair/dino-kennel',
  },
  {
    title: 'Pants',
    screenshot:
      'https://user-images.githubusercontent.com/67588177/93784637-d99fb000-fbf2-11ea-84b4-54ab6093de5d.png',
    description:
      'Group project - Tasked with building a site of the teams choosing. The team must create a wireframe and project board before coding. Only one CSS file and one JS file allowed for the project. Every page must include a loop. The site must have a complex data structure, dynamic buttons and one form.',
    technologiesUsed: 'HTML, CSS, JavaScript & Bootstrap',
    available: true,
    url: 'https://bloomers-group-project.netlify.app/',
    githubUrl: 'https://github.com/ryanmcnair/bloomers',
  },
  {
    title: 'The Sorting Hat',
    screenshot:
      'https://user-images.githubusercontent.com/67588177/89460999-d595fc80-d730-11ea-80b0-8203658c656f.png',
    description:
      'Tasked with bringing the Hogwarts Sorting Hat to life. Users are asked to add their name on a form. The name is then randomly assigned a house value and color. The end result is a card that shows username, house value, a background color that matches the house and an expel button to remove the card from display.',
    technologiesUsed: 'HTML, CSS, JavaScript & Bootstrap',
    available: true,
    url: 'https://sortinghat-mcnair.netlify.app/',
    githubUrl: 'https://github.com/ryanmcnair/sorting-hat',
  },
  {
    title: 'Color Flipper',
    screenshot:
      'https://user-images.githubusercontent.com/67588177/89594422-57f8ec00-d817-11ea-9f48-5294d21cebba.png',
    description:
      "Group Assignment: Tasked with allowing a user to choose a random color or a random hex color by a button click on screen. The Simple color selection chooses the color randomly from an array and the Hex color selector randomly generates a color's hex code.",
    technologiesUsed: 'HTML, CSS, JavaScript & Bootstrap',
    available: true,
    url: 'https://colorflipper-mcnair.netlify.app/',
    githubUrl: 'https://github.com/ryanmcnair/color-flipper',
  },
  {
    title: 'Adoption Cards',
    screenshot:
      'https://user-images.githubusercontent.com/67588177/89481992-8ff02880-d75e-11ea-9d37-732032727eb3.png',
    description:
      'Tasked with showing the user 4 category buttons at the top of the page and to be able to filter each card by type. One button will undo the filtered results.',
    technologiesUsed: 'HTML, CSS & JavaScript',
    available: true,
    url: 'https://adoptioncards-mcnair.netlify.app/',
    githubUrl: 'https://github.com/ryanmcnair/event-listeners',
  },
  {
    title: 'Product Cards',
    screenshot:
      'https://user-images.githubusercontent.com/67588177/89460343-bfd40780-d72f-11ea-8489-a9de88929c38.png',
    description:
      "Tasked with building a grid of cards for a company's products",
    technologiesUsed: 'HTML & CSS',
    available: true,
    url: 'https://rmcnair-productcards.netlify.app/',
    githubUrl: 'https://github.com/ryanmcnair/ASSIGNMENT-product-cards',
  },
];

const myProjects = () => projects;

export default { myProjects };
