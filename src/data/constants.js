export const Bio = {
  name: "Sushil Kumar",
  roles: [
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "Problem Solver",
  ],
  description:
    "I'm an MCA graduate (Class of 2026) who builds modern web applications with React, Node.js and MongoDB. My major project, ServeEase, is a full-stack home services platform with an AI-powered sentiment analysis service for customer reviews. I enjoy writing clean, efficient code and solving real-world problems through development.",
  github: "https://github.com/sushilbyte7",
  resume:
    "https://drive.google.com/file/d/1ig0GyweHe6hTy7paxnEy6XxpHezkAMiF/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/sushilbyte7",
  twitter: "",
  insta: "",
  facebook: "",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "React Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "AWS",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      {
        name: "Cloudflare",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudflare/cloudflare-original.svg",
      },
      {
        name: "VS Code",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
    ],
  },
];

// Experience section intentionally hidden: no job/internship experience yet.
// Add real entries here and re-enable the section in App.js when that changes.
export const experiences = [];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5C-POxDGtIBsUSVZ871BDFVydgMPoTILqaQ&s",
    school: "Pimpri Chinchwad University, Pune",
    date: "2024 - 2026",
    grade: "CGPA: 7.38",
    desc: "I completed my Master's in Computer Applications (MCA) at Pimpri Chinchwad University, Pune in July 2026. For my major project I built ServeEase, a full-stack home services platform with an AI-powered sentiment analysis service, which deepened my skills in full-stack web development.",
    degree: "Master of Computer Applications (MCA)",
  },
  {
    id: 1,
    img: "https://ui-avatars.com/api/?name=CC&background=1d1836&color=fff&size=128",
    school: "Cimage College, Patna (Patliputra University)",
    date: "2021 - 2024",
    grade: "63.87% (First Class)",
    desc: "I completed my Bachelor's degree in Computer Applications (BCA) at Cimage College, Patna, affiliated to Patliputra University. During this time, I built a strong foundation in programming, databases, and web development, and built the Apex Bike Rental System as my final-year project.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIo6bMcEOnpdvswa1KOxCTl0xj8Wb-HdaeWJPxCoFTnBZVPJhR_qDmxWXTVvjtojhjfug&usqp=CAU",
    school: "T.P.S College, Patna",
    date: "2017 - 2019",
    grade: "69.60%",
    desc: "I completed my class 12 (Intermediate, Science) education under the Bihar Board at T.P.S College, Patna.",
    degree: "Intermediate (XII), Science — Bihar Board",
  },
];

export const projects = [
  {
    id: 0,
    title: "A2A Job Team",
    date: "2026",
    description:
      "A two-agent job-hunting system built on the A2A protocol: Scout (LangGraph) finds and filters fresher jobs, Scribe (plain Python + Gemini) tailors the application, and a Coordinator runs the handoff between them, streamed live in a React trace UI. The agents discover each other via Agent Cards, run entirely on free tiers, and returned 5 real leads on their first test run for web developer roles in Patna.",
    image:
      "https://opengraph.githubassets.com/1/sushilbyte7/a2a-job-team",
    tags: [
      "Python",
      "LangGraph",
      "A2A Protocol",
      "Google Gemini",
      "FastAPI",
      "React",
    ],
    category: "web app",
    github: "https://github.com/sushilbyte7/a2a-job-team",
    webapp: "",
  },
  {
    id: 1,
    title: "ServeEase",
    date: "2026",
    description:
      "ServeEase is a full-stack on-demand home services booking platform, built as my MCA major project. Users can book services such as electrical, plumbing, cleaning, carpentry, painting and AC repair, with JWT + OTP authentication and Razorpay + cash payments. A Python/Flask microservice analyses customer reviews with NLP sentiment analysis and auto-updates provider ratings.",
    image:
      "https://raw.githubusercontent.com/sushilbyte7/major-project/master/client/public/hero1.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Python",
      "Flask",
    ],
    category: "web app",
    github: "https://github.com/sushilbyte7/major-project",
    webapp: "",
  },
  {
    id: 2,
    title: "Apex Bike Rental System",
    date: "2024",
    description:
      "A web-based bike rental platform built as my BCA final-year project. Users can browse and search bikes, view details and book a rental, while an admin panel manages vehicles, brands, bookings and registered users.",
    // Opengraph fallback: the repo's front-image.jpg is not uploaded yet, so the
    // raw image URL 404s. Swap back to the raw URL once the images are uploaded.
    image:
      "https://opengraph.githubassets.com/1/sushilbyte7/apex-bike-rental-system",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    category: "web app",
    github: "https://github.com/sushilbyte7/apex-bike-rental-system",
    webapp: "",
  },
  {
    id: 3,
    title: "Reels Subtitle Generator",
    date: "2026",
    description:
      "An AI-powered tool that generates one-word subtitles for viral Reels and Shorts. It uses OpenAI Whisper for transcription, runs 100% locally, and has a modern glassmorphism UI for previewing and exporting subtitles.",
    image:
      "https://raw.githubusercontent.com/sushilbyte7/reels-subtitle-generator/main/assets/dashboard-preview.png",
    tags: ["Python", "OpenAI Whisper", "AI"],
    category: "tools",
    github: "https://github.com/sushilbyte7/reels-subtitle-generator",
    webapp: "",
  },
  {
    id: 4,
    title: "College WiFi Auto-Login",
    date: "2025",
    description:
      "A smart, event-driven WiFi auto-login system for college captive-portal networks. It monitors the connection and logs in automatically when the network requires it, so you don't have to type credentials again and again.",
    image:
      "https://opengraph.githubassets.com/1/sushilbyte7/college-wifi-auto-login",
    tags: ["Python", "Automation", "Networking"],
    category: "tools",
    github: "https://github.com/sushilbyte7/college-wifi-auto-login",
    webapp: "",
  },
];
