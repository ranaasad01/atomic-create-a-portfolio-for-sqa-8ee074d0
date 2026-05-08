export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior SQA Engineer",
    company: "TechNova Solutions",
    location: "San Francisco, CA",
    duration: "2 years 3 months",
    startDate: "Jan 2023",
    endDate: "Present",
    current: true,
    description:
      "Lead QA engineer for a SaaS platform serving 500K+ users. Architected and maintained the end-to-end test automation framework, reducing regression testing time by 70%.",
    achievements: [
      "Reduced regression cycle from 5 days to 8 hours via Cypress + GitHub Actions pipeline",
      "Achieved 94% test coverage across 3 microservices with 1,200+ automated test cases",
      "Identified and resolved 340+ critical defects before production releases",
      "Mentored a team of 4 junior QA engineers on automation best practices",
      "Implemented shift-left testing strategy, catching 60% more bugs in early dev stages",
    ],
    technologies: ["Cypress", "TypeScript", "GitHub Actions", "JIRA", "Postman", "Docker"],
    logo: "TN",
  },
  {
    id: 2,
    role: "QA Automation Engineer",
    company: "DataStream Inc.",
    location: "Austin, TX",
    duration: "2 years 1 month",
    startDate: "Dec 2020",
    endDate: "Jan 2023",
    current: false,
    description:
      "Developed and maintained Selenium-based automation framework for a fintech application. Collaborated with cross-functional teams to define acceptance criteria and test strategies.",
    achievements: [
      "Built a Selenium + Java + TestNG framework from scratch, automating 800+ test scenarios",
      "Reduced manual testing effort by 65% through strategic automation coverage",
      "Performed API testing with REST Assured, validating 200+ endpoints",
      "Integrated automated tests into Jenkins CI/CD pipeline with daily execution reports",
      "Improved defect detection rate by 45% through exploratory testing sessions",
    ],
    technologies: ["Selenium", "Java", "TestNG", "Jenkins", "REST Assured", "MySQL"],
    logo: "DS",
  },
  {
    id: 3,
    role: "QA Engineer",
    company: "Pixel Labs",
    location: "Remote",
    duration: "1 year 8 months",
    startDate: "Apr 2019",
    endDate: "Dec 2020",
    current: false,
    description:
      "Performed manual and automated testing for web and mobile applications. Wrote comprehensive test plans, test cases, and bug reports for Agile sprint cycles.",
    achievements: [
      "Wrote 600+ detailed test cases covering functional, regression, and edge-case scenarios",
      "Executed mobile testing using Appium for iOS and Android platforms",
      "Maintained 98% on-time test execution rate across 24 sprint cycles",
      "Collaborated with developers to reproduce and resolve 180+ bugs",
      "Introduced performance testing with JMeter, identifying 3 critical bottlenecks",
    ],
    technologies: ["Appium", "Python", "JIRA", "JMeter", "Postman", "Bugzilla"],
    logo: "PL",
  },
  {
    id: 4,
    role: "Junior QA Analyst",
    company: "WebCraft Agency",
    location: "New York, NY",
    duration: "1 year 2 months",
    startDate: "Feb 2018",
    endDate: "Apr 2019",
    current: false,
    description:
      "Entry-level QA role focused on manual testing of client web projects. Gained foundational experience in test case design, defect lifecycle management, and Agile methodologies.",
    achievements: [
      "Executed 300+ manual test cases per sprint for 8 client projects",
      "Documented 150+ bug reports with detailed reproduction steps and screenshots",
      "Participated in daily standups and sprint retrospectives as QA representative",
      "Learned and applied ISTQB testing principles to improve test design quality",
    ],
    technologies: ["JIRA", "Bugzilla", "Selenium (basic)", "SQL", "Postman"],
    logo: "WC",
  },
];
