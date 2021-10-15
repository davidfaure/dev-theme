import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

// *** META DATA *** -----------
export const metaData = {
  title: 'John Smith | Portfolio',
  description: 'Welcome to my portfolio website',
  ogImage: '/images/og-image.jpg',
}

// *** NAVBAR *** --------------
export const navigation = {
  label: 'Navbar',
  logoText: 'John Smith',
  menu: [
    {
      id: 1,
      label: 'About',
      link: '#about',
    },
    {
      id: 2,
      label: 'Projects',
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
      link: 'https://instagram.com/',
    },
    {
      id: 2,
      label: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com/',
    },
    {
      id: 3,
      label: 'Github',
      icon: <FaGithub />,
      link: 'https://github.com/',
    },
  ],
}

// *** HERO *** --------------
export const hero = {
  label: 'Hero',
  headingText:
    'Hello!<br/> I’m John Smith,<br/> a web developer<br/> from California.',
  bottomMoreText: 'View more',
  laptopInnerImage: '/images/inside-laptop.png',
  showLoadingAnimation: true,
}

// *** ABOUT *** --------------
export const about = {
  headerText: 'About me',
  profileImage: '/images/about/placeholder-about.jpg',
  bioText: `<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>`,
}

export const techImages = [
  { tech: 'react', logo: '/images/tech/react.png' },
  { tech: 'javascript', logo: '/images/tech/javascript.png' },
  { tech: 'typescript', logo: '/images/tech/typescript.png' },
  { tech: 'graphql', logo: '/images/tech/graphql.png' },
  { tech: 'framer-motion', logo: '/images/tech/framer-motion.png' },
]

// *** PROJECTS *** --------------
export const projects = {
  headerText: 'Projects',
  infoText: `<p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>`,
  projectsData: [
    {
      id: 1,
      image: '/images/projects/placeholder-project.png',
      title: 'Some project',
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"',
      link: '#',
      githubLink: 'https://github.com',
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
      title: 'Some project dfdf dfdfdfdfd s fdfdfdf',
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"',
      link: '#',
      githubLink: 'https://github.com/',
    },
  ],
}

// *** CONTACT *** --------------
export const contact = {
  headingText: 'Contact',
  infoText: `<p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.</p>`,
}

// *** FOOTER *** --------------
export const footer = {
  text: 'John Smith',
}
