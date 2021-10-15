import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import { SiGmail } from 'react-icons/si'

// *** META DATA *** -----------
export const metaData = {
  title: 'David Faure | Portfolio',
  description: 'Welcome to my portfolio website',
  ogImage: '/images/og-image.jpg',
}

// *** NAVBAR *** --------------
export const navigation = {
  label: 'Navbar',
  logoText: 'David Faure',
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
  headingText:
    'Bonjour!<br/> Je suis David Faure,<br/> Développeur Web <br/> à Bordeaux.',
  bottomMoreText: 'Voir plus',
  laptopInnerImage: '/images/inside-laptop-blue.png',
  showLoadingAnimation: true,
}

// *** ABOUT *** --------------
export const about = {
  headerText: 'À propos',
  profileImage: '/images/about/David_Faure_Pro.jpg',
  bioText: `<p>Curieux, persévérant et autonome, j'ai eu la chance d'exercer plusieurs métiers qui m'ont permis d'acquérir diverses compétences techniques mais surtout humaines. Après 9 ans d'expérience chez Apple, j'ai choisi en 2020 de revenir à ma première passion :</p><h3>Le Développement Web.</h3><p>Après un diplôme d'Analyste Programmeur obtenu il y a 13 ans, j'ai choisi pour me remettre à niveau la Wild Code School, labellisée Grande Ecole du Numérique, qui utilise une pédagogie inversée et permet de travailler sur 5 projets différents (dont un avec un vrai client) au sein d'équipes différentes en méthodologie agile (SCRUM). C'est une formation intensive de 5 mois où on mise sur l'entraide, la recherche et le développement de l'autonomie de chacun.</p>`,
}

export const techImages = [
  { tech: 'react', logo: '/images/tech/react.png' },
  { tech: 'redux', logo: '/images/tech/redux.png' },
  { tech: 'javascript', logo: '/images/tech/javascript.png' },
  { tech: 'typescript', logo: '/images/tech/typescript.png' },
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
      description:
        'Application de recherche de recette avec différentes options',
      link: 'https://in-my-fridge.netlify.app/',
      githubLink: '',
    },
    {
      id: 2,
      image: '/images/projects/placeholder-project.png',
      title: 'Some project',
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"',
      link: '#',
      githubLink: '',
    },
    {
      id: 3,
      image: '/images/projects/placeholder-project.png',
      title: 'Some project',
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"',
      link: '#',
      githubLink: 'https://github.com/',
    },
    {
      id: 4,
      image: '/images/projects/placeholder-project.png',
      title: 'Some project',
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"',
      link: '#',
      githubLink: 'https://github.com/',
    },
    {
      id: 5,
      image: '/images/projects/placeholder-project.png',
      title: 'Some project',
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"',
      link: '#',
      githubLink: 'https://github.com/',
    },
    {
      id: 6,
      image: '/images/projects/placeholder-project.png',
      title: 'Some project',
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"',
      link: '#',
      githubLink: 'https://github.com/',
    },
  ],
}

// *** CONTACT *** --------------
export const contact = {
  headingText: 'Me Contacter',
  infoText: `<p>Pour toutes questions, projets ou tout simplement pour me dire bonjour. N'hésitez pas à me contacter en remplissant le formulaire ci-dessous. Je vous répondrai dans les meilleurs délais.</p>`,
}

// *** FOOTER *** --------------
export const footer = {
  text: 'David Faure',
}
