import projectPlanning from '../images/screenshots/projectPlanning-screenshot.jpg';
import iceCream from '../images/screenshots/iceCream-screenshot.jpg';
import phoneBook from '../images/screenshots/phoonebook-screenshot.jpg';
import movieFinder from '../images/screenshots/moviefinder-screenshot.jpg';
import imageFinder from '../images/screenshots/imagefinder-screenshot.jpg';
import webStudio from '../images/screenshots/webstudio-screenshot.jpg';
import weather from '../images/screenshots/weather-screenshot.jpg';
import description from '../images/description.svg';
import tools from '../images/tools.svg';

export const teamProjects = [
  {
    name: 'Project planning',
    url: 'https://project-planning.netlify.app/',
    screenshot: projectPlanning,
    description: 'Full stack web application for scheduling tasks, teamwork with GitHub',
    stack:
      'JavaScript, NodeJS, ReactJS, ReduxJS, REST API, Netlify, GIT, Figma, Trello, HTML5, CSS,  MongoDB, Express, ',
    icons: { description, tools },
  },
  {
    name: 'Ice cream',
    url: 'https://vitalii-skubii.github.io/icecream/',
    screenshot: iceCream,
    description: 'Ice cream advertisement. Adaptive layout',
    stack: 'HTML5, CSS3, JavaScript, Parcel, GIT, Figma, Trello',
    icons: { description, tools },
  },
];

export const ownProjects = [
  {
    name: 'PhoneBook',
    url: 'https://vadim-vatrya-goit-react-hw-09-phonebook.netlify.app',
    screenshot: phoneBook,
    description:
      'Application with the ability to register users and work with private collections of contacts',
    stack: 'React, Redux, JavaScript, SCSS, HTML5, REST API, Netlify',
    icons: { description, tools },
  },
  {
    name: 'MovieFinder',
    url: 'https://vadim-vatrya-goit-react-hw-04-movies.netlify.app',
    screenshot: movieFinder,
    description: 'Basic routing app for searching and storing movies',
    stack: 'React, JavaScript, CSS, HTML, REST API, Netlify',
    icons: { description, tools },
  },
  {
    name: 'ImageFinder',
    url: 'https://vadim-vatrya.github.io/goit-js-hw-13-image-finder/',
    screenshot: imageFinder,
    description: 'Adaptive (mobile first) web-page with image search by keywords',
    stack: 'React, JavaScript, HTML, CSS, REST API, Webpack, GIT',
    icons: { description, tools },
  },
  {
    name: 'WebStudio',
    url: 'https://vadim-vatrya.github.io/goit-markup-hw-08/',
    screenshot: webStudio,
    description: 'app for a web studio',
    stack: 'HTML, SCSS, JavaScript, GIT, Figma',
    icons: { description, tools },
  },
  {
    name: 'Weather forecast by city',
    url: 'https://vadim-vatrya.github.io/weather-forecast-by-city/',
    screenshot: weather,
    description: 'Shows the current weather in the city',
    stack: 'HTML, SCSS, JavaScript, ReactJS, React Hooks',
    icons: { description, tools },
  },
];
