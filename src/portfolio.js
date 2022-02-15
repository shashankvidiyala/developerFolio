/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shashank Vidiyala",
  title: "Namaste I am Shashank Vidiyala, you can also call me Shanks",
  subTitle: emoji(
    "I am currently a Grad student at Virginia Tech, I love and I am heavily passionate in Fullstack development 🌐  and Deep Learning 🧠 also I love coffee ☕ and One Piece ☠️"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XOD-V9puVXlfqKnN31thM4s5zlHB8M5I/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shashankvidiyala/",
  linkedin: "https://www.linkedin.com/in/shashankvidiyala/",
  gmail: "s19v1997@gmail.com@gmail.com",
  // instagram:"",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I am Good at",
  subTitle: "I love Full Stack development and keenly interested in the designs of very complex large systems, I am also currently working on Social Media Analytics with emphasis on CNN's and sentiment analysis",
  skills: [
    emoji(
      "🌟 I have worked as a founding software engineer in many projects, I am profiecient in creating and developing new modules and features from scratch "
    ),
    emoji("🌟 Love to solve problems with the application of new technologies, I actively sovlve problems on Kaggle and participate weekly codeForces competitions"),
    emoji(
        `Other Technologies -: Redux, Nomad, DropWizard, Pytourch, Oracle CC&B, Angular and Django`
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "AI & Deep Learning",
      fontAwesomeClassname:"fas fa-robot"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname:"fab fa-jenkins"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Virginia Polytechnic Institute and State University (Virginia Tech)",
      id:'vt',
      logo: require("./assets/images/virginiatechseal.png"),
      subHeader: "Master of Engineering in Computer Science",
      duration: "August 2021 -  December 2022",
      desc: "GPA 4.0/4.0, Specialization in AI and Machine Learning",
      descBullets: [
        "Notable Courses : Deep Learning, Advanced Machine Learning and Software Engineering",
        "Research : Sentiment Analysis and Polarized groups detection in social media using Convolutional Neural Networks",
        "Extra-Curricular Activities : Substitute Player for VT E-Sports Dota 2 Team"
      ]
    },
    {
      schoolName: "Chaitanya Bharathi Institute of Technology",
      id:'cbit',
      logo: require("./assets/images/cbitlogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2015 - June 2019",
      desc: "GPA 8.7/10, Was awarded best major project for the year 2019",
      descBullets: [
        "Graduated by being top 5% of the whole class",
        "Executive Board member of Information Security Club and Opensource Software contribution club",
        "Was Teaching Assitant for Data Structures and Algorithms for two semesters",
        "Deputy Head of Design for Universty Model United Nations",
        "Head of Project Tic Tac Toe for college's Technical Fest Sudhee"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning and Data Mining", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming and Problem Solving",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Oracle",
      companylogo: require("./assets/images/oracleLogo.png"),
      date: "June 2019 – July 2021",
      desc: "Founding Software Engineer For Product DSS (Digital Self Service)",
      descBullets: [
        "Worked as a Full Stack Developer with Tech Stack as React--Java(DropWizard)--Oracle CC&B--Nomad",
        "Developed several react components and widgets for the project including taking complete ownership for Payment Plans, Invite Guest User and Billing and Payment Programs",
        "Created and Designed REST API's for Payment Plans and Charity Payments API's",
        "Worked in a Scrum Team, also took the responsibility of being secondary scrum master",
        "Specialized in writing generic and highly customizable software compoents"
      ]
    },
    {
      role: "Android Development Intern",
      company: "DBS (Development Bank of Singapore)",
      companylogo: require("./assets/images/dbsLogo.png"),
      date: "June 2018 – Aug 2018",
      desc: "Android Developer for Mobile Banking App",
      descBullets: [
        "Worked on Carousel Component for mobile banking application which is used to display promotions of interest to the user",
        "Developed various UI screens for the onboarding module (the flow when user tries to create account/link account first time)",
        "Developed and Designed package for validation of user fields (PAN number validation, Credit Card Validation, Name validation etc.)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "My Projects and Projects that I have worked on",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Oracle Utilities Digital Self Service",
      projectDesc: "Digital Self Service - Transactions includes a suite of digital experiences that empowers customers to perform self-service transactions on any desktop or mobile device and reduces cost to serve. The responsive design allows customers to complete all transactions on any device or screen size and orientation and ensures a consistent brand experience across access channels",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://docs.oracle.com/en/industries/utilities/digital-self-service/dss-t-index.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Sentiment Classification using Convolutional Neural Network",
      projectDesc: ` Current Research Project, Aim of the research is to tag a social media post as either
       hateful,neutral and positive using varoius post features like media (image,gif,video etc.), title,usename,karma,
       likes dislikes, comments etc. The current deep learning model is being trained using Reddit Posts data fetched 
       using Reddit open AI and manually labelled by 6 fellow researchers and volutneers. The media classification is
       done with the help of CNN more particularly the CNN which used VGG19 architecture. `,
      
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Automatic Grading of Computer Programs with use of Semantic Analysis",
      projectDesc: ` Major Research for my bachelor's degree. The aim of the research was to create an AI which grades computer programs
      (particularly for Data Structures and C Programming course) just like how an instructor grades i.e focus on the logic of the code
      rather than the checking whether a code passes few test cases. To perform this an AI program in python was written which compares the
      Program Definition Graph of a correct program (instructor's program) and students program and focus on the different blocks of code which
      constitute a logic and grade the program and gives feedback after grading just like an instructor`,
      footerLink: [
        {
          name: "White Paper",
          url: "http://stradresearch.org/Volume-8-Issue-6-2021/"
        }
        //  you can add extra buttons here.
      ]
      
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am currently looking for summer internship and Full time Sofware Engineering and Data Scientist roles",
  number: "+1-540-824-8709",
  email_address: "s19v1997@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Shanks__56", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
