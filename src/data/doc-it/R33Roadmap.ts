import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2024;
const CURRENT_QUARTER: Quarter = "Q3";

export const roadmap: RoadmapBucket[] = [
  {
    name: "Reusable Workflows",
    description:
      "Components for implementing common workflows across applications",
    type: "development",
    framework: ["react", "react-native"],
    items: [
      {
        name: "Auth Workflow with Okta Redirect support",
        description:
          "Develop Okta authentication workflow for both React and React Native",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
      {
        name: "React User Management Workflow",
        description:
          "Develop a react user management workflow, enabling functionalities such as role based access control for adding, deleting and updating user",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Brightlayer Charts",
    description:
      "Integrating charting guidelines and reusable charting utilities from Brightlayer Charts",
    type: "development",
    framework: ["react", "react-native"],
    items: [
      {
        name: "Integration of Brightlayer Charts",
        description:
          "Migrate Brightlayer Charts Storybook to Brightlayer dev doc",
        year: 2024,
        quarter: "Q3",
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "CLI Templates",
    description:
      "To streamline project setup and enhance developer experience.",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "New Vite-based CLI Templates for React",
        description:
          "Develop a new CLI Templates for react(vite) and deprecate the existing BLUI CLI",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Miscellaneous",
    description: "Miscellaneous platform updates",
    type: "development",
    framework: ["react-native"],
    items: [
      {
        name: "React Native Dev Docs",
        description:
          "Develop a new & improved documentation site for React Native packages",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
];
