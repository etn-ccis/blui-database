import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2025;
const CURRENT_QUARTER: Quarter = "Q1";

export const roadmap: RoadmapBucket[] = [
  {
    name: "Reusable Workflows",
    description: "Components for implementing common workflows across applications",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "React User Management Workflow",
        description:
          "Extend user management workflows with Sites components and RBAC controls",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "React Native Library",
    description: "Consolidate all disparate React Native repositories and examples into a single monorepo.",
    type: "development",
    framework: [
      "react-native"
    ],
    items: [
      {
        name: "React Native Library",
        description: "Consolidate all disparate React Native repositories and examples into a single monorepo.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI"
      },
      {
        name: "React Native Library",
        description: "add the authentication workflow in React Native example for secure user login experience.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI"
      }
    ]
  },
  {
    name: "Community Packages",
    description: "Shared UI components and resources",
    type: "development",
    framework: ["react", "react-native"],
    items: [
      {
        name: "Email Templates",
        description: "Innersource Email Templates from Predict Pulse",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
      },
      {
        name: "Community Docs",
        description:"Deploy documentation site for Community Packages and enhance tooling for future package additions",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
      }
    ],
  },
];