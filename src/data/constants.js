import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaPython, FaPhp, FaJava, FaNode, FaFigma, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

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
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
            icon: FaReact, 
          },
        {
            name: "Sass",
            image:
              "https://raw.githubusercontent.com/gilbarbara/logos/f133ea921b012052000964e3feb023b57146895b/logos/sass.svg",
              icon: FaSass, 
          },
        {
          name: "Next Js",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
          icon: TbBrandNextjs, 
          },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
          icon: FaHtml5, 
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
            icon: FaCss3Alt, 
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            icon: IoLogoJavascript, 
        },
      ],
    },
    {
      title: "Back End",
      skills: [
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
          icon: FaNode, 
        },
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            icon: FaPython, 
        },
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
            icon: GrMysql, 
        },
        {
            name: "PHP",
            image:"//www.php.net/images/logos/new-php-logo.svg",
            icon: FaPhp, 
        },
        {
          name: "Java",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
            icon: FaJava, 
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            icon: FaGithub, 
        },
        {
          name: "Netlify",
          image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
            icon: BiLogoNetlify, 
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
            icon: TbBrandVscode, 
        },
        {
          name: "Photoshop",
          image:
          "https://raw.githubusercontent.com/gilbarbara/logos/f133ea921b012052000964e3feb023b57146895b/logos/adobe-photoshop.svg",
          icon: SiAdobephotoshop, 
        },
        {
          name: "Premier Pro",
          image:
            "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
            icon: SiAdobepremierepro, 
          },
    
        {
          name: "Figma",
          image:
            "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
            icon: FaFigma, 
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
      progress: "https://github.com/biersdorfer-jon.com",
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
      image: "merch1.png",
      tags: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Fonts",
      ],

      category: "design",
      github: "",
      web: "",
      see: "biersdorfer-jon.com",
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