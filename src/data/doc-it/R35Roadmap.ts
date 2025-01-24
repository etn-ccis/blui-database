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
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
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
        status: "backlog",
        author: "Brightlayer UI",
      },
      {
        name: "Community Docs",
        description:"Deploy documentation site for Community Packages and enhance tooling for future package additions",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      }
    ],
  },
];