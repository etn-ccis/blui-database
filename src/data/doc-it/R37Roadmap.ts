import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2025;
const CURRENT_QUARTER: Quarter = "Q3";

export const roadmap: RoadmapBucket[] = [
  {
    name: "Reusable Workflows",
    description:
      "Components for implementing common workflows across applications.",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "React User Management Workflow",
        description:
          "Extend user management workflows with adoptor and application workflows/components.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "HMI Design System POC",
    description:
      "Creation of common components and themes to be used with HMI.",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "React HMI Themes",
        description: "Creation of common themes to be used with HMI.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
      {
        name: "React HMI Components",
        description: "Creation of common comoponents to be used with HMI.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Doc-It Updates",
    description:
      "Updates to the Doc-It documentation site to improve user experience and content.",
    type: "development",
    framework: ["all"],
    items: [
      {
        name: "Updating Dependencies and Private Content Support",
        description:
          "Update dependencies to latest versions and exploring ways to support mixed content (public and private) in Doc-It.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
];
