import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";
import project5 from "../assets/images/projects/project-5.jpg";
import project6 from "../assets/images/projects/project-6.jpg";
import project7 from "../assets/images/projects/project-7.jpg";
import project8 from "../assets/images/projects/project-8.webp";
import project9 from "../assets/images/projects/project-9.webp";

const projectList = [
  {
    title: "3D Restaurant Model",
    category: "others",
    image: project7,
    link: "https://github.com/taher-dev/3D-restaurant-model-AutoCAD",
    description: "Detailed 3D architectural restaurant layout designed with AutoCAD.",
    tags: ["AutoCAD", "3D Design", "CAD"],
  },
  {
    title: "Student Management System",
    category: "cli",
    image: project6,
    link: "https://github.com/taher-dev/student-management-system-C",
    description: "Console tool to manage student academic records with persistent file storage.",
    tags: ["C", "File Handling", "CLI"],
  },
  {
    title: "Tic Tac Toe",
    category: "web",
    image: project5,
    link: "https://tic-tac-toe-1bc.pages.dev/",
    description: "Interactive browser game with intelligent win detection and responsive grid.",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Employee Management System",
    category: "software",
    image: project4,
    link: "https://github.com/taher-dev/Employee-Management-System",
    description: "Desktop software to manage employee profiles, departments, and payroll.",
    tags: ["Java", "OOP", "Swing GUI"],
  },
  {
    title: "Nike - Product Landing Page",
    category: "web",
    image: project2,
    link: "https://github.com/taher-dev/nike-web-programming-project",
    description: "Modern product showcase landing page featuring fluid interactions and responsive UI.",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Virtual Dice Roller",
    category: "web",
    image: project3,
    link: "https://roll-dice-2to.pages.dev/",
    description: "Digital dice simulator with random number generation and physics animations.",
    tags: ["JavaScript", "Canvas", "CSS3"],
  },
  {
    title: "Sundown Studio",
    category: "web",
    image: project1,
    link: "https://sundown-studio-clone-bcc.pages.dev/",
    description: "Award-winning studio clone with smooth inertial scrolling and swiper effects.",
    tags: ["Locomotive Scroll", "Swiper.js", "CSS3"],
  },
  {
    title: "Culinary Canvas",
    category: "web",
    image: project8,
    link: "https://github.com/taher-dev/Culinary-Canvas",
    description: "Interactive recipe discovery and food catalog with dynamic filtering.",
    tags: ["React", "JavaScript", "CSS3"],
  },
  {
    title: "ThinkBoard - MERN",
    category: "web",
    image: project9,
    link: "https://github.com/taher-dev/thinkboard-mern/",
    description: "Full-stack collaborative digital board and task management platform.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
];

export const projects = projectList.map((project, index) => ({
  id: projectList.length - index,
  ...project,
}));
