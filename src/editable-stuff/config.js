// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Min-Sheng",
  middleName: "",
  lastName: "Wu",
  message: " Data Scientist X Biomedical Engineer X Photographer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/min-sheng",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/vincent.wu.929",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/vsheng_vision/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/min-sheng-wu/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/VincentWu929/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://min-sheng.github.io/blog/assets/images/avatar5.jpg",
  imageSize: 375,
  message:
    "My name is Min-Sheng Wu. I’m a data scientist working at aetherAI. I graduated from National Taiwan University with a degree in Computer Science. My interest is in the research about the technology of ML, DL, AI in the applications of Computer Vision (CV).",
  resume: require("../editable-stuff/resume_2022-04-13.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Min-Sheng", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["CA_FSIS_Cell", "cfisDemo"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: "https://min-sheng.github.io/blog/assets/images/avatar5.jpg", 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: "https://min-sheng.github.io/blog/assets/images/avatar5.jpg", 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Deep learning", value: 90 },
    { name: "Computer Vision", value: 90 },
    { name: "Medical Image Analysis", value: 95 },
    { name: "C/C++", value: 70 },
    { name: "JavaScript (React)", value: 65 },
    { name: "HTML/CSS", value: 60 },
    { name: "Linux", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 95 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 75 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mason840929@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Data Scientist',
      companyname: 'aetherAI',
      companylogo: "https://static.wixstatic.com/media/e2eac7_1fe4dd082bb94806a7e399f5b81bd10c~mv2.png/v1/fill/w_318,h_80,al_c,q_85,usm_0.66_1.00_0.01/aetherai_logo(blue).webp",
      date: 'Oct 2020 – Present',
    },
    {
      role: 'Intern',
      companyname: 'aetherAI',
      companylogo: "https://static.wixstatic.com/media/e2eac7_1fe4dd082bb94806a7e399f5b81bd10c~mv2.png/v1/fill/w_318,h_80,al_c,q_85,usm_0.66_1.00_0.01/aetherai_logo(blue).webp",
      date: 'May 2018 – Aug 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
