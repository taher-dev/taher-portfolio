import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";
import project5 from "../assets/images/projects/project-5.jpg";
import project6 from "../assets/images/projects/project-6.jpg";
import project7 from "../assets/images/projects/project-7.jpg";
import project8 from "../assets/images/projects/project-8.webp";

const projectList = [
  {
    title: "3D Restaurant Model",
    category: "others",
    image: project7,
    link: "https://github.com/taher-dev/3D-restaurant-model-AutoCAD",
  },
  {
    title: "Student Management System",
    category: "cli",
    image: project6,
    link: "https://github.com/taher-dev/student-management-system-C",
  },
  {
    title: "Tic Tac Toe",
    category: "web",
    image: project5,
    link: "https://tic-tac-toe-1bc.pages.dev/",
  },
  {
    title: "Employee Management System",
    category: "software",
    image: project4,
    link: "https://github.com/taher-dev/Employee-Management-System",
  },
  {
    title: "Nike - Product Landing Page",
    category: "web",
    image: project2,
    link: "https://github.com/taher-dev/nike-web-programming-project",
  },
  {
    title: "Virtual Dice Roller",
    category: "web",
    image: project3,
    link: "https://roll-dice-2to.pages.dev/",
  },
  {
    title: "Sundown Studio",
    category: "web",
    image: project1,
    link: "https://sundown-studio-clone-bcc.pages.dev/",
  },
  {
    title: "Culinary Canvas",
    category: "web",
    image: project8,
    link: "https://github.com/taher-dev/Culinary-Canvas",
  },
  {
    title: "ThinkBoard",
    category: "web",
    image: project8,
    link: "https://github.com/taher-dev/Culinary-Canvas",
  },
];

export const projects = projectList.map((project, index) => ({
  id: projectList.length - index,
  ...project,
}));
