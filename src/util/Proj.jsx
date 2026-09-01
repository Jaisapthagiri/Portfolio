import EMP from '../assets/EMP.png'
import Freshcart from '../assets/Freshcart.png';
import Bondly from '../assets/Bondly.png';
import jai from '../assets/jai.jpeg';

const Proj = [
  {
    id: 0,
    title: "Bondly",
    description:
      "Bondly is a dynamic social media platform that empowers users to connect, share, and engage with friends and communities through a seamless and interactive experience.",
    image:
      Bondly,
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "ReactJs",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Socket.io"
    ],
    category: "Social Media App",
    member: [
      {
        name: "Jaisapthagiri",
        img: jai,
      },
    ],
    github: "https://github.com/Jaisapthagiri/Bondly",
    link: "https://bondlyfe.vercel.app/",
  },
  {
    id: 1,
    title: "WorkSync",
    description:
      "A full-stack team collaboration platform using FastAPI, React.js, PostgreSQL, and Redis, featuring task assignment, progress tracking, team communication, JWT authentication, role-based authorization, and Redis caching for improved performance.",
    image:
      EMP,
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "ReactJs",
      "FastAPI",
      "PostgreSQL"
    ],
    category: "Task App",
    member: [
      {
        name: "Jaisapthagiri",
        img: jai,
      },
    ],
    github: "https://github.com/Jaisapthagiri/emp",
    link: "https://emp-sand.vercel.app",
  },
  {
    id: 3,
    title: "Fresh Basket",
    description:
      "It is a full-featured e-commerce platform that enables users to browse, purchase, and manage products across various categories with a seamless and secure shopping experience.",
    image:
      Freshcart,
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "ReactJs",
      "FastAPI",
      "PostgreSQL"
    ],
    category: "Grocery App",
    member: [
      {
        name: "Jaisapthagiri",
        img: jai,
      },
    ],
    github: "https://github.com/Jaisapthagiri/Ecommerce",
    link: "https://ecom-fe-six.vercel.app",
  }
];


export default Proj;
