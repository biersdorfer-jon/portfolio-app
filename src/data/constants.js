import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaPython, FaPhp, FaJava, FaNode, FaFigma, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { BiLogoNetlify } from "react-icons/bi";
import { SiAdobe } from "react-icons/si";


export const Bio = {
    name: "Jon Biersdorfer 😁",

    roles: [
        "Front End Developer",
        "Back End Developer",
        "Web Designer",
        "Graphic Designer",
    ],

    description: "In recent years, I've been dedicated to evolving my developer skills. This portfolio showcases the various expertise I've cultivated and features projects I've independently created. If you're left with questions about my developer journey, click the buttons below for more insights and a deeper understanding of who I am!",
    github: "https://github.com/biersdorfer-jon",
    insta: "https://www.instagram.com/biersdorfer.jon",
    linkedin: "https://www.linkedin.com/in/jon-biersdorfer/",
    subtitle: "A responsive portflio website showcasing the advanced skill set I have developed over recent years.",
    title: "Jon Biersdorfer",
    image: "portfolio.png",
    path: "https://biersdorfer-jon.com",
};

export const skills = [
    {
      title: "Front End",
      skills: [
        {
          name: "React Js",
            icon: FaReact, 
          },
        {
          name: "HTML",
          icon: FaHtml5, 
        },
        {
          name: "CSS",
            icon: FaCss3Alt, 
        },
        {
          name: "JavaScript",
            icon: IoLogoJavascript, 
        },
        {
          name: "Sass",
            icon: FaSass, 
        },
      {
        name: "Next Js",
        icon: TbBrandNextjs, 
        },
      ],
    },
    {
      title: "Back End",
      skills: [
        {
          name: "Python",
            icon: FaPython, 
        },
        {
          name: "MySQL",
            icon: GrMysql, 
        },
        {
            name: "PHP",
            icon: FaPhp, 
        },
        {
          name: "Node Js",
          icon: FaNode, 
        },
        {
          name: "Java",
            icon: FaJava, 
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "GitHub",
            icon: FaGithub, 
        },
        {
          name: "Adobe Suite",
          icon: SiAdobe, 
        },
        {
          name: "Figma",
            icon: FaFigma, 
          },
          {
            name: "VS Code",
              icon: TbBrandVscode, 
          },
          {
            name: "Netlify",
              icon: BiLogoNetlify, 
          },
      ],
    },
  ];
  

  export const projects = [
    {
      id: 1,
      title: "Portfolio",
      date: "Dec 2023",
      description: "A fully responsive portfolio website introducing myself while showcasing several of my skill sets and my various projects.",
      image: "portfolio.png",
      tags: [
        "React Js",
        "JavaScript",
        "HTML",
        "CSS",
        "Next Js",
        "GSAP",
      ],

      category: "frontend",
      github: "https://github.com/biersdorfer-jon/portfolio-app",
      web: "https://biersdorfer-jon.com",
    },

    {
      id: 2,
      title:"Real Estate Page",
      date: "Jan 2024",
      description: "A smooth landing page built for a team of agents showcasing their accolades and providing easily accessible contact methods.",
      image: "logoBlackRed2.png",
      tags: [
        "React Js",
        "JavaScript",
        "HTML",
        "CSS",
        "Next Js",
        "Email Js",
        "GSAP",
      ],

      category: "frontend",
      github: "https://github.com/biersdorfer-jon/emma",
      web: "https://biersdorfer-mccoy.com",
    },

    {
      id: 3,
      title:"College Registration Portal",
      date: "Oct 2023",
      description: "A comprehensive college registration platform allowing users have the ability to effortlessly manage their class schedules.",
      image: "college.png",
      tags: [
        "React Js",
        "JavaScript",
        "HTML",
        "CSS",
        "Next Js",
        "MySQL",
        "PHP",
      ],

      category: "backend",
      github: "https://github.com/biersdorfer-jon/Login",
      web: "",
    },
    {
      id: 4,
      title:"Honors Class Page",
      date: "Coming Soon",
      description: "A full-stack honors class website with student biographies offering a detailed glimpse into their achievements and aspirations.",
      image: "Honors.png",
      tags: [
        "React Js",
        "JavaScript",
        "HTML",
        "CSS",
        "Next Js",
        "MySQL",
        "PHP",
      ],

      category: "backend",
      github: "",
      web: "",
      progress: "https://github.com/biersdorfer-jon",
    },

     {
       id: 5,
       title:"Apparel Ecommerce Site",
       date: "Coming Soon",
       description: "A full-stack athletic apparel store, optimizing database performance for a seamless and dynamic eCommerce experience.",
       image: "RTG1.png",
       tags: [
         "React Js",
         "JavaScript",
         "HTML",
         "CSS",
         "Next Js",
         "MySQL",
         "Prisma",
         "Stripe",
       ],

       category: "backend",
       github: "",
       web: "",
       progress: "https://github.com/biersdorfer-jon/RTGadmin",
     },


    {
      id: 6,
      title:"Merch Design",
      date: "Jan 2024",
      description: "A collection showcasing  a diverse array of clothing designs and mockups featuring logos across various apparel styles.",
      image: "squad2.jpg",
      tags: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Lightroom",
      ],

      category: "design",
      github: "",
      web: "",
      see: "Merch.pdf",
    },

  ];


export const education = [
  {
    id: 0,
    img: "https://reachhigherok.org/wp-content/uploads/2018/11/logo-rogers-state.jpg",
    school: "Rogers State University",
    date: "Aug 2020 - May 2024",
    gpa: 3.87,
    major: "Bachelor of Science - Business IT: Software Development and Multimedia",
    description: "The Software Development and Multimedia Option focuses on object-oriented technology, software engineering, multimedia and web development, and emerging technologies. These concepts have enabled me to craft an advanced skill set that is instrumental in navigating the ever-evolving landscape of software development and multimedia.",
    minor:"Honors",




  }
];