import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import { SiGmail } from 'react-icons/si'

// *** META DATA *** -----------
export const metaData = {
  title: 'David Faure | Portfolio',
  description: 'Bienevenue sur mon Portfolio',
  ogImage: '/images/og-image.jpg',
}

// *** NAVBAR *** --------------
export const navigation = {
  label: 'Navbar',
  logoText: 'David Faure',
  FR: {
    menu: [
      {
        id: 1,
        label: 'À propos',
        link: '#about',
      },
      {
        id: 2,
        label: 'Projets',
        link: '#projects',
      },
      {
        id: 3,
        label: 'Contact',
        link: '#contact',
      },
    ],
  },
  EN: {
    menu: [
      {
        id: 1,
        label: 'About',
        link: '#about',
      },
      {
        id: 2,
        label: 'Project',
        link: '#projects',
      },
      {
        id: 3,
        label: 'Contact',
        link: '#contact',
      },
    ],
  },
  socialMediaLinks: [
    {
      id: 1,
      label: 'Instagram',
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/david.aswell/',
    },
    {
      id: 2,
      label: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com/davidaswell',
    },
    {
      id: 3,
      label: 'Github',
      icon: <FaGithub />,
      link: 'https://github.com/davidfaure',
    },
    {
      id: 4,
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/david-faure/',
    },
  ],
}

// *** HERO *** --------------
export const hero = {
  label: 'Hero',
  FR: {
    headingText:
      'Bonjour!<br/> Je suis David Faure,<br/> Développeur Web <br/> à Bordeaux.',
    bottomMoreText: 'Voir plus',
    downloadText: 'Télécharger CV',
    downloadedText: 'Téléchargé',
  },
  EN: {
    headingText:
      "Hello!<br/> I'm David Faure,<br/> a Web Developer <br/> from Bordeaux.",
    bottomMoreText: 'View more',
    downloadText: 'Download CV',
    downloadedText: 'Downloaded',
  },
  laptopInnerImage: '/images/inside-laptop-blue.png',
  showLoadingAnimation: true,
}

// *** ABOUT *** --------------
export const about = {
  FR: {
    headerText: 'À propos',
    profileImage: '/images/about/David_Faure_Pro_Small.jpg',
    bioText: `<p>Curieux, persévérant et autonome, j'ai eu la chance d'exercer plusieurs métiers qui m'ont permis d'acquérir diverses compétences techniques mais surtout humaines. Après 9 ans d'expérience chez Apple, j'ai choisi en 2020 de revenir à ma première passion :</p><h3>Le Développement Web.</h3><p>Après un diplôme d'Analyste Programmeur obtenu il y a 13 ans, j'ai choisi pour me remettre à niveau la Wild Code School, labellisée Grande Ecole du Numérique, qui utilise une pédagogie inversée et permet de travailler sur 3 projets différents (dont un avec un vrai client) au sein d'équipes différentes en méthodologie agile (SCRUM). C'est une formation intensive de 5 mois où on mise sur l'entraide, la recherche et le développement de l'autonomie de chacun.</p>`,
  },
  EN: {
    headerText: 'About',
    profileImage: '/images/about/David_Faure_Pro_Small.jpg',
    bioText: `<p> Curious, persevering and autonomous, I had the chance to exercise several trades which allowed me to acquire various technical skills and especially human’s one. After 9 years of experience at Apple, I chose in 2020 to return to my first passion: </p> <h3> Web Development. </h3> <p> After a Programmer Analyst diploma obtained 13 years ago, I chose to level up my technical skills the Wild Code School, which uses a reverse pedagogy and allows to work on 3 different projects (including one with a real client) within different teams in agile methodology (SCRUM). It is an intensive 5-month training course where we focus on support, research and the development of individual autonomy. </p>`,
  },
}

export const techImages = [
  { tech: 'react', logo: '/images/tech/react.png' },
  { tech: 'redux', logo: '/images/tech/redux.png' },
  { tech: 'javascript', logo: '/images/tech/javascript.png' },
  { tech: 'typescript', logo: '/images/tech/typescript.png' },
  { tech: 'framerMotion', logo: '/images/tech/framer-motion.png' },
  { tech: 'socketIo', logo: '/images/tech/socketio.png' },
  { tech: 'nodejs', logo: '/images/tech/node.png' },
]

// *** PROJECTS *** --------------
export const projects = {
  FR: {
    headerText: 'Projets',
    infoText: `<p>Les projets ci-dessous ont été réalisés durant ma formation mais également durant mon temps libre afin de me perfectionner sur des nouvelles technologies.</p>`,
    projectsData: [
      {
        id: 1,
        image: '/images/projects/mazeApp.png',
        title: '🧩 Maze game V2',
        stack: [
          { tech: 'react', logo: '/images/tech/react.png' },
          { tech: 'redux', logo: '/images/tech/redux.png' },
          { tech: 'typescript', logo: '/images/tech/typescript.png' },
        ],
        description:
          'Maze game V2 est enfin là! Le labyrinthe est maintenant de 26x26, 4 modes de difficultés (facile, normal, difficile, expert), des crystaux à ramasser, des vies à conserver, des ennemis à éviter. Arriverez-vous à faire un meilleur score que moi ?',
        link: 'https://aswell-amazegame.netlify.app/',
        githubLink: '',
      },
      {
        id: 2,
        image: '/images/projects/chat-voice-app.png',
        title: '📞 Chat Voice App',
        stack: [
          { tech: 'react', logo: '/images/tech/react.png' },
          { tech: 'javascript', logo: '/images/tech/javascript.png' },
          { tech: 'socket.io', logo: '/images/tech/socketio.png' },
          { tech: 'node.js', logo: '/images/tech/node.png' },
        ],
        description:
          "Une application d'appel en visio avec chat inclus, vous pouvez passer des appels, couper votre micro et/ou caméra et chatter !",
        link: 'https://chat-voice-app.herokuapp.com/',
        githubLink: 'https://github.com/davidfaure/rogerVoice',
      },
      {
        id: 3,
        image: '/images/projects/emptyYourFridge.png',
        title: '🍓 Empty Your Fridge',
        stack: [
          { tech: 'react', logo: '/images/tech/react.png' },
          { tech: 'javascript', logo: '/images/tech/javascript.png' },
          { tech: 'nodejs', logo: '/images/tech/node.png' },
          { tech: 'materialUI', logo: '/images/tech/material-ui.png' },
        ],
        description:
          "Application de recherche de recette avec différentes options, notamment par mots-clés et ingrédients. Une fonctionnalité de recherche avancée est également à votre disposition ainsi qu'un formulaire de contact.",
        link: 'https://in-my-fridge.netlify.app/',
        githubLink: '',
      },
      {
        id: 4,
        image: '/images/projects/weather-app.png',
        title: '🌤 Weather App',
        stack: [
          { tech: 'react', logo: '/images/tech/react.png' },
          { tech: 'javascript', logo: '/images/tech/javascript.png' },
          { tech: 'materialUI', logo: '/images/tech/material-ui.png' },
        ],
        description:
          "Weather app permet de trouver la météo d'une ville par simple recherche. J'ai réalisé cette application pour améliorer mes compétences techniques et en utilisation d'API (OpenWeather).",
        link: 'https://reactjs-simple-weather-app.netlify.app/',
        githubLink: 'https://github.com/davidfaure/weather-app',
      },
    ],
  },
  EN: {
    headerText: 'Projects',
    infoText: `<p>The projects below were carried out during my training but also during my free time in order to improve myself on new technologies.</p>`,
    projectsData: [
      {
        id: 1,
        image: '/images/projects/mazeApp.png',
        title: '🧩 Maze game V2',
        stack: [
          { tech: 'react', logo: '/images/tech/react.png' },
          { tech: 'redux', logo: '/images/tech/redux.png' },
          { tech: 'typescript', logo: '/images/tech/typescript.png' },
        ],
        description:
          'Maze game V2 is finally here! The labyrinth is now 26x26, 4 difficulty settings (easy, normal, hard, expert), crystals to collect, lives to keep, enemies to avoid. Will you be able to beat my score?',
        link: 'https://aswell-amazegame.netlify.app/',
        githubLink: '',
      },
      {
        id: 2,
        image: '/images/projects/chat-voice-app.png',
        title: '📞 Chat Voice App',
        stack: [
          { tech: 'react', logo: '/images/tech/react.png' },
          { tech: 'javascript', logo: '/images/tech/javascript.png' },
          { tech: 'socket.io', logo: '/images/tech/socketio.png' },
          { tech: 'node.js', logo: '/images/tech/node.png' },
        ],
        description:
          'A videoconference app with chat included, you can make a call, shut down your camera and/or mic and chat !',
        link: 'https://chat-voice-app.herokuapp.com/',
        githubLink: 'https://github.com/davidfaure/rogerVoice',
      },
      {
        id: 3,
        image: '/images/projects/emptyYourFridge.png',
        title: '🍓 Empty Your Fridge',
        stack: [
          { tech: 'react', logo: '/images/tech/react.png' },
          { tech: 'javascript', logo: '/images/tech/javascript.png' },
          { tech: 'nodejs', logo: '/images/tech/node.png' },
          { tech: 'materialUI', logo: '/images/tech/material-ui.png' },
        ],
        description:
          'Recipe search application with different options, including keywords and ingredients. An advanced search functionality is also at your disposal as well as a contact form.',
        link: 'https://in-my-fridge.netlify.app/',
        githubLink: '',
      },
      {
        id: 4,
        image: '/images/projects/weather-app.png',
        title: '🌤 Weather App',
        stack: [
          { tech: 'react', logo: '/images/tech/react.png' },
          { tech: 'javascript', logo: '/images/tech/javascript.png' },
          { tech: 'materialUI', logo: '/images/tech/material-ui.png' },
        ],
        description:
          'Weather app allows you to find the weather of a city by simple search. I made this application to improve my technical skills and API use (OpenWeather).',
        link: 'https://reactjs-simple-weather-app.netlify.app/',
        githubLink: 'https://github.com/davidfaure/weather-app',
      },
    ],
  },
}

// *** TEMPLATE *** -------------

export const template = {
  title: 'Template',
  FR: {
    headingText: 'Create React App (CRA) Template',
    npmLink: 'https://www.npmjs.com/package/cra-template-azwell-js-redux',
    npmButton: 'Je le veux',
    githubLink: 'https://github.com/davidfaure/cra-template-azwell-js-redux',
    githubButton: 'Source',
    infoText: `<p>Salut! j'ai fait ce template personnalisé pour gagner du temps lors de la mise en place d'un nouveau projet <strong>React</strong>. Vous pouvez l'utiliser en tapant ceci dans votre terminal préféré :</p>`,
    codeText: `~/Documents/workspace  
npx create-react-app your-project-name --template azwell-js-redux`,
    descriptionText: `<p>En installant ce template, vous trouverez une application React avec <strong>React-Router</strong> et <strong>Redux</strong> déjà installé et configuré. <strong>Eslint</strong> configuré avec <strong>Prettier</strong> en AirBnb style avec un check à chaque commit. Vous trouverez également <strong>Axios</strong> et mes règles <strong>CSS</strong>. Vous pouvez tout modifier si cela ne vous convient pas.</p><p>N'hésitez pas à me contacter pour toutes questions.</p>`,
  },
  EN: {
    headingText: 'Create React App (CRA) Template',
    npmLink: 'https://www.npmjs.com/package/cra-template-azwell-js-redux',
    npmButton: 'I want it',
    githubLink: 'https://github.com/davidfaure/cra-template-azwell-js-redux',
    githubButton: 'Source',
    infoText: `<p>Hello! I've created this custom template to save time when setting up a brand new <strong>React</strong> project. You can use it by typing this command in your favorite terminal app :</p>`,
    codeText: `~/Documents/workspace  
npx create-react-app your-project-name --template azwell-js-redux`,
    descriptionText: `<p>Installing this template to have a React app with <strong>React-Router</strong> and <strong>Redux</strong> already installed and configured. <strong>Eslint</strong> is configured with <strong>Prettier</strong> in AirBnb style with a lint-check before every commit. You will also find <strong>Axios</strong> and my personal <strong>CSS</strong> rules. Of course, you can change anything that is not fitting your need.</p><p>Don't hesitate to reach out to me for any questions.</p>`,
  },
}

// *** CONTACT *** --------------
export const contact = {
  FR: {
    headingText: 'Me Contacter',
    infoText: `<p>Pour toutes questions, projets ou tout simplement pour me dire bonjour. N'hésitez pas à me contacter en remplissant le formulaire ci-dessous. Je vous répondrai dans les meilleurs délais.</p>`,
  },
  EN: {
    headingText: 'Contact',
    infoText: `<p>For any questions, projects or just to say hello. Do not hesitate to contact me by filling out the form below. I will get back to you as soon as possible.</p>`,
  },
}

// *** FOOTER *** --------------
export const footer = {
  text: 'all right reserved',
}
