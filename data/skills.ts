export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Test Automation",
    color: "#38bdf8",
    skills: [
      { name: "Selenium WebDriver", level: 95, category: "automation", icon: "🤖" },
      { name: "Cypress", level: 90, category: "automation", icon: "🌲" },
      { name: "Playwright", level: 85, category: "automation", icon: "🎭" },
      { name: "TestNG / JUnit", level: 88, category: "automation", icon: "✅" },
      { name: "Appium (Mobile)", level: 78, category: "automation", icon: "📱" },
    ],
  },
  {
    title: "API & Performance Testing",
    color: "#818cf8",
    skills: [
      { name: "Postman", level: 95, category: "api", icon: "📮" },
      { name: "REST Assured", level: 88, category: "api", icon: "🔗" },
      { name: "JMeter", level: 82, category: "api", icon: "⚡" },
      { name: "K6", level: 75, category: "api", icon: "📊" },
      { name: "SoapUI", level: 80, category: "api", icon: "🧼" },
    ],
  },
  {
    title: "Bug Tracking & Management",
    color: "#f472b6",
    skills: [
      { name: "JIRA", level: 98, category: "tracking", icon: "🐛" },
      { name: "Bugzilla", level: 85, category: "tracking", icon: "🔍" },
      { name: "TestRail", level: 90, category: "tracking", icon: "🛤️" },
      { name: "Zephyr Scale", level: 82, category: "tracking", icon: "📋" },
      { name: "Azure DevOps", level: 88, category: "tracking", icon: "☁️" },
    ],
  },
  {
    title: "CI/CD & DevOps",
    color: "#34d399",
    skills: [
      { name: "Jenkins", level: 85, category: "cicd", icon: "🏗️" },
      { name: "GitHub Actions", level: 90, category: "cicd", icon: "⚙️" },
      { name: "Docker", level: 80, category: "cicd", icon: "🐳" },
      { name: "GitLab CI", level: 78, category: "cicd", icon: "🦊" },
      { name: "CircleCI", level: 72, category: "cicd", icon: "🔄" },
    ],
  },
  {
    title: "Programming Languages",
    color: "#fb923c",
    skills: [
      { name: "Python", level: 88, category: "programming", icon: "🐍" },
      { name: "JavaScript / TypeScript", level: 85, category: "programming", icon: "💛" },
      { name: "Java", level: 82, category: "programming", icon: "☕" },
      { name: "SQL", level: 90, category: "programming", icon: "🗄️" },
      { name: "Bash / Shell", level: 75, category: "programming", icon: "💻" },
    ],
  },
];

export const toolLogos = [
  "Selenium", "Cypress", "Playwright", "Postman", "JIRA",
  "Jenkins", "Docker", "Python", "JavaScript", "TestRail",
  "GitHub Actions", "REST Assured", "JMeter", "Appium", "Azure DevOps"
];
