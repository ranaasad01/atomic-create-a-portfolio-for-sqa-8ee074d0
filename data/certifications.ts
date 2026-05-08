export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  color: string;
  badge: string;
  verifyUrl: string;
  featured: boolean;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "ISTQB Certified Tester — Advanced Level Test Automation Engineer",
    issuer: "ISTQB",
    date: "March 2023",
    credentialId: "ISTQB-CTAL-TAE-2023-0847",
    description:
      "Advanced certification covering test automation architecture, framework design, and continuous testing in CI/CD pipelines.",
    color: "#38bdf8",
    badge: "🏆",
    verifyUrl: "https://www.istqb.org/certifications/verify",
    featured: true,
  },
  {
    id: 2,
    name: "ISTQB Certified Tester — Foundation Level",
    issuer: "ISTQB",
    date: "June 2019",
    credentialId: "ISTQB-CTFL-2019-3421",
    description:
      "Foundation certification covering software testing fundamentals, test design techniques, and test management principles.",
    color: "#818cf8",
    badge: "📜",
    verifyUrl: "https://www.istqb.org/certifications/verify",
    featured: true,
  },
  {
    id: 3,
    name: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
    date: "November 2022",
    credentialId: "AWS-CDA-2022-7X9K2M",
    description:
      "Validates proficiency in developing, deploying, and debugging cloud-based applications using AWS services.",
    color: "#fb923c",
    badge: "☁️",
    verifyUrl: "https://aws.amazon.com/verification",
    featured: true,
  },
  {
    id: 4,
    name: "Certified Selenium Professional",
    issuer: "Selenium Academy",
    date: "August 2021",
    credentialId: "SEL-PRO-2021-5523",
    description:
      "Professional certification in Selenium WebDriver automation, covering advanced locator strategies, framework design, and cross-browser testing.",
    color: "#34d399",
    badge: "🤖",
    verifyUrl: "https://seleniumacademy.com/verify",
    featured: false,
  },
  {
    id: 5,
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "January 2022",
    credentialId: "POSTMAN-AFSE-2022-1189",
    description:
      "Demonstrates expertise in API testing, collection design, environment management, and automated API validation using Postman.",
    color: "#f472b6",
    badge: "📮",
    verifyUrl: "https://badgr.com/public/assertions",
    featured: false,
  },
  {
    id: 6,
    name: "Cypress.io Certified Professional",
    issuer: "Cypress.io",
    date: "May 2023",
    credentialId: "CYP-CERT-2023-0234",
    description:
      "Advanced certification in Cypress test automation covering component testing, E2E testing, and CI/CD integration.",
    color: "#a78bfa",
    badge: "🌲",
    verifyUrl: "https://cypress.io/certifications",
    featured: false,
  },
];
