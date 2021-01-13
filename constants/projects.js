import boardrackImg from "../images/project-boardrack.png"
import boardrackv2Image from "../images/project-boardrackv2.png"
import samsDesignsImg from "../images/project-samsDesigns.png"
import portfolioImg from "../images/project-portfolio.png"
import sfsurentImg from "../images/project-sfsurent.png"
import sortVisImg from "../images/project-sortVisualizer.png"

export default [
  {
    title: "BoardRack V2",
    image: boardrackv2Image,
    description:
      "BoardRack V2 is a complete overhaul of the origional classified advertisement platform for buying or selling new and used surfboards.",
    motivation:
      "In version 2, I moved away from CRA and migrated to Next.js for improved SEO and SSR capabilites. I replaced the custom Express server with Next.js' API endpoints for a serverless configuration. The styling has migrated from CSS to CSS in JS conventions using Styled-Components, and introduced unit and integration testing with Jest and Enzyme. All part of an overall front to back redesign and update.",
    technologies: [
      "React",
      "Redux",
      "Node",
      "Next.js",
      "MongoDB",
      "Styled Components",
    ],
    services: ["Here API", "IPStack", "AWS", "Digital Ocean"],
    website: "https://boardrack.dev/",
    github: "https://github.com/DDropping/BoardRack_v2",
    bgColor: "linear-gradient(#c2ffef, #c2ffe1)",
  },
  {
    title: "BoardRack",
    image: boardrackImg,
    description:
      "BoardRack is a classified advertisement platform for buying or selling new and used surfboards. As it stands, it consists of a homepage for users to search or browse surfboards for sale, a user portal for CRUD operations pertaining to posts or account details, a messaging platform to allow interested parties to contact sellers, and location based services to show relevant posts depending on user's location.",
    motivation:
      "BoardRack began as an ambitious project to solidify my knowlege with Node.js, React, and Redux, but quickly turned into a passion project that has provided me with a solid foundation in full-stack development.",
    technologies: ["React", "Redux", "Node", "Express", "MongoDB", "CSS"],
    services: ["Here API", "IPStack", "AWS", "Digital Ocean"],
    website: "n/a",
    github: "https://github.com/DDropping/BoardRack",
    bgColor: "linear-gradient(#c2ffe1, #c2ffd3)",
  },
  {
    title: "Sort Visualizer",
    image: sortVisImg,
    description:
      "Sort Visualizer is an educational application that teaches the basics of sorting algorithms in an easy to comprehend fashion. This app shows how sorting algorithms work on a high level step by step and also provides, time complexities, space analysis, pseudocode, and the actual algorithm written in javascript.",
    motivation:
      "I created this application as a fun project to help refresh my understanding of sorting algorithms. I believe the easiest way to learn a sorting algorithm is by first, seeing what it does and how the algorithm sorts.",
    technologies: ["React", "Create-React-App", "Styled Components"],
    services: [],
    website: "https://www.sortvis.net/",
    github: "https://github.com/DDropping/SortingVisualizer",
    bgColor: "linear-gradient(#c2ffd3, #c2ffd3)",
  },
  {
    title: "Sams Designs",
    image: samsDesignsImg,
    description:
      "SamsDesigns is an ecommerce website designed to sell custom designed apparel by Sam Kerrigan. Using Gatsby to deliver blazing fast static pages ensures consistent site-wide navigation, and a positive user experience. Designed using Contentful's content management system allows for simple site modification for non-technical administrators.",
    motivation:
      "This website was created for a client who wanted to start selling clothing, though this website does not currently allow the purchase of any items, it does include Stripe's payment processing upon checkout.",
    technologies: ["Gatsby", "React", "Node", "SCSS", "GraphQL"],
    services: ["Contentful", "Stripe", "Neftlify"],
    website: "https://samsdesigns.netlify.com/",
    github: "https://github.com/DDropping/ecommerce",
    bgColor: "linear-gradient(#c2ffd3, #c2ffc3)",
  },
  {
    title: "Portfolio (previous)",
    image: portfolioImg,
    description:
      "This is the first iteration of my personal portfolio to showcase my current and previous projects.",
    motivation:
      " I used this opportunity of building my portfolio to learn some new skills. Creating a static single page app was the perfect time for me to learn the Gatsby framework to deliver lightning fast HTML, JavaScript, and CSS files straight to the user. Along with animations using Framer-motion and styling using SCSS.",
    technologies: [
      "Gatsby",
      "React",
      "Node",
      "SCSS",
      "GraphQL",
      "React Bootstrap",
      "Framer Motion",
    ],
    services: ["Netlify"],
    website: "n/a",
    github: "https://github.com/DDropping/David-Portfolio",
    bgColor: "linear-gradient(#c2ffc3, #cdffc2)",
  },
  {
    title: "SFSU Rent",
    image: sfsurentImg,
    description:
      "SFSU Rent was a school team based project where I was the front-end lead of a seven person team. We developed a classified advertisement platform for students to find housing in the SF Bay Area.",
    motivation:
      "During the development of this platform, we incorporated practical methods and tools for software engineering including: Agile development, and weekly scrum meetings.",
    technologies: ["Node", "Express", "MySQL", "HTML5", "CSS3"],
    services: ["AWS", "Google", "Maps"],
    website: "n/a",
    github: "https://github.com/DDropping/SFSURent",
    bgColor: "linear-gradient(#cdffc2, #d7ffc2)",
  },
]
