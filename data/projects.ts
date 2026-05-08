export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  stats: { label: string; value: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E2E Automation Framework — Cypress + TypeScript",
    description:
      "Production-grade end-to-end test automation framework for a SaaS e-commerce platform with 1,200+ test cases, CI/CD integration, and Allure reporting.",
    longDescription:
      "Architected a scalable Cypress + TypeScript automation framework using the Page Object Model pattern. Integrated with GitHub Actions for continuous testing on every PR, with Allure reports published to GitHub Pages. Covers checkout flows, payment processing, user management, and API contract testing.",
    category: "automation",
    tags: ["Featured", "Automation"],
    techStack: ["Cypress", "TypeScript", "GitHub Actions", "Allure", "Docker"],
    highlights: [
      "1,200+ automated test cases with 94% pass rate",
      "Parallel execution across 4 browser configurations",
      "Custom commands library with 60+ reusable utilities",
      "Automated visual regression testing with Percy",
      "Slack notifications on test failures",
    ],
    githubUrl: "https://github.com/alexmorgan/cypress-ecommerce-framework",
    image: "https://tryqa.com/wp-content/uploads/2017/07/Test_case.png",
    stats: [
      { label: "Test Cases", value: "1,200+" },
      { label: "Coverage", value: "94%" },
      { label: "Execution Time", value: "18 min" },
      { label: "Defects Found", value: "340+" },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "API Testing Suite — Postman + Newman",
    description:
      "Comprehensive REST API test collection for a microservices architecture with 200+ endpoints, automated contract validation, and performance benchmarks.",
    longDescription:
      "Built a complete Postman collection covering all REST API endpoints of a fintech microservices platform. Includes pre-request scripts for dynamic auth token generation, response schema validation with JSON Schema, and Newman integration for CI/CD pipeline execution.",
    category: "api",
    tags: ["API Testing"],
    techStack: ["Postman", "Newman", "JavaScript", "Jenkins", "JSON Schema"],
    highlights: [
      "200+ API test cases covering CRUD operations and edge cases",
      "Automated OAuth 2.0 token refresh in pre-request scripts",
      "JSON Schema validation for all response payloads",
      "Environment-based configuration for dev/staging/prod",
      "HTML reports generated on every Jenkins build",
    ],
    githubUrl: "https://github.com/alexmorgan/api-testing-suite",
    image: "https://i.ytimg.com/vi/7TJF8_kvJWI/maxresdefault.jpg",
    stats: [
      { label: "Endpoints", value: "200+" },
      { label: "Environments", value: "3" },
      { label: "Avg Response", value: "< 200ms" },
      { label: "Bugs Found", value: "85" },
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Performance Testing — JMeter Load Suite",
    description:
      "Load and stress testing suite for a high-traffic web application, identifying bottlenecks and validating SLA compliance under 10,000 concurrent users.",
    longDescription:
      "Designed and executed comprehensive performance tests using Apache JMeter for a B2B SaaS platform. Identified 3 critical database bottlenecks and 2 memory leak issues that were causing production slowdowns. Validated system performance against SLA requirements of 99.9% uptime and sub-2s response times.",
    category: "performance",
    tags: ["Performance"],
    techStack: ["JMeter", "Grafana", "InfluxDB", "AWS", "Python"],
    highlights: [
      "Simulated 10,000 concurrent users with realistic user journeys",
      "Identified 3 critical DB bottlenecks causing 8s response spikes",
      "Real-time metrics dashboard with Grafana + InfluxDB",
      "Automated ramp-up scenarios for stress and soak testing",
      "Reduced p95 response time from 4.2s to 1.1s after optimizations",
    ],
    githubUrl: "https://github.com/alexmorgan/jmeter-performance-suite",
    image: "https://www.inflectra.com/GraphicsViewer.aspx?url=~/Ideas/Whitepapers/The-Value-of-Concurrent-User-Licensing.doc&name=wordml://03000002.png",
    stats: [
      { label: "Concurrent Users", value: "10,000" },
      { label: "Response Time", value: "< 1.1s" },
      { label: "Uptime", value: "99.9%" },
      { label: "Bottlenecks Found", value: "5" },
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Mobile Test Automation — Appium + Python",
    description:
      "Cross-platform mobile automation framework for iOS and Android apps using Appium and Python, integrated with BrowserStack for real device testing.",
    longDescription:
      "Developed a robust mobile test automation framework using Appium + Python for a fintech mobile application. Supports both iOS and Android platforms with a shared test logic layer. Integrated with BrowserStack for testing on 50+ real device configurations.",
    category: "mobile",
    tags: ["Mobile", "Automation"],
    techStack: ["Appium", "Python", "pytest", "BrowserStack", "Allure"],
    highlights: [
      "Shared test logic for iOS and Android (80% code reuse)",
      "450+ mobile test scenarios covering critical user flows",
      "BrowserStack integration for 50+ real device configurations",
      "Screenshot capture and video recording on failures",
      "Parallel execution reducing suite runtime by 60%",
    ],
    githubUrl: "https://github.com/alexmorgan/appium-mobile-framework",
    image: "https://tryqa.com/wp-content/uploads/2017/07/Test_case.png",
    stats: [
      { label: "Test Cases", value: "450+" },
      { label: "Devices", value: "50+" },
      { label: "Code Reuse", value: "80%" },
      { label: "Platforms", value: "iOS + Android" },
    ],
    featured: false,
  },
  {
    id: 5,
    title: "BDD Framework — Cucumber + Selenium",
    description:
      "Behavior-Driven Development test framework using Cucumber and Selenium WebDriver, enabling non-technical stakeholders to contribute to test scenarios.",
    longDescription:
      "Implemented a BDD framework using Cucumber + Selenium WebDriver + Java that allows business analysts and product owners to write test scenarios in plain English (Gherkin). Integrated with JIRA for automatic test result reporting and traceability.",
    category: "automation",
    tags: ["BDD", "Automation"],
    techStack: ["Cucumber", "Selenium", "Java", "Maven", "JIRA"],
    highlights: [
      "300+ Gherkin scenarios written by QA and business analysts",
      "Step definitions library with 150+ reusable steps",
      "Automatic JIRA ticket creation on test failures",
      "Living documentation generated from test results",
      "Reduced test case review time by 40% with plain-English specs",
    ],
    githubUrl: "https://github.com/alexmorgan/bdd-cucumber-framework",
    image: "https://www.investopedia.com/thmb/A7oYpBrp-Goy73LE3mXhJdiO7dg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/scenario_analysis.asp-final-05e46539a6dd4b1082886ace17c7dc55.png",
    stats: [
      { label: "Scenarios", value: "300+" },
      { label: "Step Defs", value: "150+" },
      { label: "Languages", value: "Gherkin" },
      { label: "Stakeholders", value: "12" },
    ],
    featured: false,
  },
  {
    id: 6,
    title: "QA Dashboard — Test Metrics & Reporting",
    description:
      "Real-time QA metrics dashboard built with Python and Grafana, aggregating test results from multiple frameworks into a single executive-level view.",
    longDescription:
      "Built a centralized QA metrics dashboard that aggregates test results from Cypress, JMeter, and Postman Newman runs into a unified Grafana dashboard. Provides real-time visibility into test pass rates, defect trends, and coverage metrics for engineering leadership.",
    category: "tooling",
    tags: ["Tooling", "Dashboard"],
    techStack: ["Python", "Grafana", "PostgreSQL", "FastAPI", "Docker"],
    highlights: [
      "Aggregates data from 4 different test frameworks",
      "Real-time defect trend analysis and burn-down charts",
      "Automated weekly QA health reports via email",
      "Role-based access for engineers, managers, and executives",
      "Reduced reporting overhead by 5 hours/week",
    ],
    githubUrl: "https://github.com/alexmorgan/qa-metrics-dashboard",
    image: "https://images.spiceworks.com/wp-content/uploads/2023/10/31034438/types-of-frameworks.png",
    stats: [
      { label: "Frameworks", value: "4" },
      { label: "Metrics", value: "25+" },
      { label: "Time Saved", value: "5 hrs/wk" },
      { label: "Users", value: "30+" },
    ],
    featured: false,
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "automation", label: "Automation" },
  { id: "api", label: "API Testing" },
  { id: "performance", label: "Performance" },
  { id: "mobile", label: "Mobile" },
  { id: "tooling", label: "Tooling" },
];
