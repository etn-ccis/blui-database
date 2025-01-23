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
          "Developed a user management workflow for sites and add RBAC controls to the workflows",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Community Packages",
    description: " Shared UI components and resources",
    type: "development",
    framework: ["react", "react-native"],
    items: [
      {
        name: "Brightlayer Charts",
        description:
          "Enhance BL Charts Playground",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
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
        description:"Documentation site for Community Package will be available",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      }
    ],
  },
];