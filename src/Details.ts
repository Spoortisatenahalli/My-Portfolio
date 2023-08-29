// Enter all your detials in this file
// Logo images
// import logogradient from "./assets/logo.svg";
const logogradient = require("./assets/logo.svg")
const logo = require("./assets/logo.png");

// Profile Image
const profile =  require("./assets/profile.png");
// Tech stack images
const html = require("./assets/techstack/html.png");
const css = require("./assets/techstack/css.png");
// const sass = require("./assets/techstack/sass.png");
const js = require("./assets/techstack/js.png");
const react = require("./assets/techstack/react.png");
// const redux = require("./assets/techstack/redux.png");
const tailwind = require("./assets/techstack/tailwind.png");
const bootstrap = require("./assets/techstack/bootstrap.png");
const vscode = require("./assets/techstack/vscode.png");
const github = require("./assets/techstack/github.png");
const git = require("./assets/techstack/git.png");
const npm = require("./assets/techstack/npm.png");
// const postman = require("./assets/techstack/postman.png");
const figma = require("./assets/techstack/figma.png");
const typescript = require("./assets/techstack/typescript.png")
const newrelic= require("./assets/techstack/new_relic.png")
// Porject Images
const projectImage1 = require("./assets/projects/project1-image.png");
const projectImage2 = require("./assets/projects/project2-image.png");
const projectImage3 = require("./assets/projects/project3-image.png");
const image = require("./assets/projects/image.png");
const Protfolio = require("./assets/projects/Protfolio.png");
// const projectImage6 = require("./assets/projects/project6.jpg");

// Logos
type Logos = {
  logogradient:string,
  logo: string,
}

export const logos:Logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
type Details = {
  name : string,
  tagline : string,
  img : string,
  about : string,
}
export const personalDetails: Details = {
  name: "Spoorti Satenahalli",
  tagline: "I build things for web",
  img: profile,
  about: `With over a year of experience as a frontend developer, I have gained my expertise in a range of essential technologies, including ReactJS, JavaScript, TypeScript, CSS, Tailwind, and HTML. I am well-versed in version control using GitHub, and proficient in project management tools such as Jira. In addition, I have experience working with performance monitoring tools like New Relic, and have even developed custom visualizations. My skills extend to serverless architecture using AWS Lambda.
Currently contributing my skills at Cloudeq, I am entrusted with the frontend responsibilities for a high-profile Informa project.  My dedication to creating seamless user interfaces drives me to excel in the UI developer role, bringing innovation and efficiency to your team.`,
};

// Enter your Social Media URLs here
type URLS = {
  linkdein : string,
  github : string,
  // twitter : string,
}
export const socialMediaUrl:URLS = {
  linkdein: "www.linkedin.com/in/spoorti-satenahalli",
  github: "https://github.com/Spoortisatenahalli",
  // twitter: "https://twitter.com/rahulyadavda",
  // instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
type WorkDetails = {
  Position : string,
  Company : string,
  Location : string,
  Type : string,
  Duration : string,
}


export const workDetails : WorkDetails[] = [
  {
    Position: "Jr.Software Engineer",
    Company: `CloudEQ`,
    Location: "Chandigarh",
    Type: "Full Time",
    Duration: "Aug 2022 - Present",
  },
  {
    Position: "Enterprise Solition Support",
    Company: `[24]7.ai`,
    Location: "Banglore",
    Type: "Full Time",
    Duration: "Oct 2020 - Jul-2022",
  },
];

// Enter your Education Details here


export const eduDetails : WorkDetails[] = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Medium",
    Location: "Online",
    Type: "Learning",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Computer Science and Engineering",
    Company: `SKSVMACET`,
    Location: "Hubli(Laxmeshwar)",
    Type: "Full Time",
    Duration:"Jul 2016 - Jun 2020",
  },
  {
    Position: "II PUC",
    Company: `Devika PU Science College`,
    Location: "Ranebennur",
    Type: "Full Time",
    Duration: "Sept 2014 - Aug 2016",
  },
];

// Tech Stack and Tools
type TechStack = {
  html : string,
  css : string,
  js : string,
  react : string,
  // redux : string,
  // sass : string,
  tailwind : string,
  bootstrap : string,
  vscode : string,
  // postman: string,
  npm: string,
  git: string,
  github: string,
  figma: string,
  typescript: string,
  newrelic:string,
  // visulisations:string
  
}
export const techStackDetails : TechStack = {
  html: html,
  css: css,
  js: js,
  react: react,
  // redux: redux,
  // sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  // postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  typescript: typescript,
  newrelic: newrelic,

};

// Enter your Project Details here
type ProjectDetails = {
  title : string,
  image : string,
  description : string,
  techstack : string,
  // previewLink : string,
  githubLink : string,
}
export const projectDetails : ProjectDetails[] = [
  {
    title: "React Facebook Demo",
    image: projectImage1,
    description: `The Project Aim is to get good grip on CSS`,
    techstack: "HTML/CSS, React, react-router-dom",
    // previewLink: "https://react-blog-app-by-rahul-yadav.netlify.app/",
    githubLink: "https://github.com/Spoortisatenahalli/Facebook",
  },
  {
    title: "Pizza Hut",
    image: projectImage2,
    description: `Project Aim is to better understand routers,Styling , Functionalities`,
    techstack: "HTML/CSS, JavaScript, React, react-router-dom",
    // previewLink: "https://electrifire-123.github.io/todo-do-app-js/",
    githubLink: "https://github.com/Spoortisatenahalli/PizzaHut",
  },
  {
    title: "Digital Clock",
    image: projectImage3,
    description: `The project is made mostly to show my CSS skills and I have build the logics with JS`,
    techstack: "HTML/CSS, JavaScript",
    // previewLink: "https://electrifire-123.github.io/digitalclock/",
    githubLink: "https://github.com/Spoortisatenahalli/DIGI",
  },
  {
    title: "Swiggy Mimic",
    image: image,
    description: `The Swiggy application built using real time data(API) Which uses TAILWIND CSS and Parcel as its Bundler`,
    techstack: "HTML/TAILWIND CSS, JavaScript, React, React-router-dom",
    // previewLink: "https://google.com",
    githubLink: "https://github.com/Spoortisatenahalli/Swiggy-NAMASTE-REACT-",
  },
  {
    title: "Protfolio",
    image: Protfolio,
    description: `This is sample project Which Describes about Myself, BUilt using TypeScript and Tailwind css`,
    techstack: "TypeScript, Tailwind CSS",
    // previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
//   {
//     title: "Project title 6",
//     image: projectImage6,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/TAILWIND CSS, JavaScript, React, React-router-dom",
//     // previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
];

// Enter your Contact Details here
type ContactType = {
  email : string,
  phone : string
}
export const contactDetails : ContactType = {
  email: "spoortisatenahalli@gmail.com",
  phone: "+916360688133",
};
