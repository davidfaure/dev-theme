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
  headerText: 'Projets',
  infoText: `<p>Les projets ci-dessous ont été réalisés durant ma formation mais également durant mon temps libre afin de me perfectionner sur des nouvelles technologies.</p>`,
  projectsData: [
    {
      id: 1,
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
      id: 2,
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
    {
      id: 3,
      image: '/images/projects/mazeApp.png',
      title: '🧩 Maze game',
      stack: [
        { tech: 'react', logo: '/images/tech/react.png' },
        { tech: 'redux', logo: '/images/tech/redux.png' },
        { tech: 'typescript', logo: '/images/tech/typescript.png' },
      ],
      description:
        'Maze game est un jeu vous permettant de générer un labyrinthe de la taille de votre choix (10x10 mini) et de le parcourir afin de trouver la sortie avec le héros de votre choix. Le package Amazer a été utilisé pour ce projet et la version 2 est en cours de développement.',
      link: 'https://david-maze.netlify.app/',
      githubLink: '',
    },
    {
      id: 4,
      image: '/images/projects/contactForm.png',
      title: '📤 Contact',
      stack: [
        { tech: 'react', logo: '/images/tech/react.png' },
        { tech: 'javascript', logo: '/images/tech/javascript.png' },
        { tech: 'materialUI', logo: '/images/tech/material-ui.png' },
      ],
      description:
        'Un composant React réutilisable qui a été rélalisé lors du projet Empty Your Fridge. il est écrit en class component et contient et gestions des erreurs de saisies.',
      link: 'https://david-form-component.netlify.app/',
      githubLink: 'https://github.com/davidfaure/form-component',
    },
  ],
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
  text: 'David Faure',
}
