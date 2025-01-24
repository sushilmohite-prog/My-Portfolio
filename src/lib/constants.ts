import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/sushilmohite-prog',
  linkedin: 'https://www.linkedin.com/in/sushil-mohite/',
  mail: 'mailto:sbmohite2070@gmail.com',
  instagram: 'https://www.instagram.com/the_sushil_mohite/',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Bachelor in Computer Science',
    institution: 'North Maharashtra University',
    link: 'https://nmu.ac.in/en-us/',
    date: '2018 - 2021',
  },
  {
    title: 'Masters in Computer Application',
    institution: 'Udms, Dr Babasaheb Ambedkar Marathwada University',
    link: 'https://bamu.ac.in/',
    date: '2021 - 2023',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2025',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com',
    date: '2018 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'AuditFlo Inc',
    location: 'Baner, Pune',
    position: 'Software Developer',
    start: 'Apr - 2024',
    link: 'https://www.auditflo.com/',
    end: 'Current',
    tasks: [
      'Engineered and optimized web tools using .NET Core Web APIs, achieving a 30% system performance enhancement ⚙️',
      'Designed and implemented high-efficiency APIs leveraging Entity Framework and LINQ, reducing average response times by 25% 🚀',
      'Developed dynamic and responsive front-end components utilizing React.js, HTML, CSS, and JavaScript 🎨.',
      'Executed seamless database migrations from Azure to Google Cloud Platform (GCP) while refactoring and deploying 5 cloud functions ☁️.',
      'Transitioned 3,500+ users from Azure AD B2C to Firebase Authentication, integrating secure API authentication with Google Identities 🔐.',
      'Built a microservice for on-demand PDF report generation and zip-compressed downloads, improving processing speed and efficiency 📄.'
    ],
  },
  {
    company: 'Reflexion AI',
    location: 'Baner, Pune',
    position: 'Software Developer',
    link: 'https://reflexion.ai/',
    start: 'June - 2023',
    end: 'Apr - 2024',
    tasks: [
      'Reflexion.ai: SaaS media collaboration platform with AI 🤖',
      'Built with microservices in .NET Core, Python, NodeJS, and React ⚙️',
      'Deployed across Kubernetes, Servers, Azure Function Apps, Static Web Apps, and other Azure PaaS services ☁️',
    ],
  },
  {
    company: 'INeuron.ai',
    link: 'https://INeuron.ai/',
    location: 'bangalore, India',
    position: 'Software developer Intern',
    start: 'Feb - 2023',
    end: 'June - 2023',
    tasks: [
      'Care-Connect: Web app for online doctor appointments 💻🩺',
       'Developed with iNeuron.ai 💡',
      'Features: Doctor & Patient registration, appointment booking, payment integration, cancellation policies, and consultation history 📅💳📜',
      'Doctor portal: Provides specialties and experience for easy patient search 👨‍⚕️👩‍⚕️',
      'Patient portal: Register info & medical history for better doctor selection 🏥📝',
      'Appointments within the next 15 days, cancellations up to 2 days before 🗓️',
      'Notifications for appointment cancellations, doctor reschedules, and availability 📲',
      'Consultation history for both doctors and patients 🔍',
    ],
  },
]
