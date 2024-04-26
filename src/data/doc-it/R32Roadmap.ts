import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2024;
const CURRENT_QUARTER: Quarter = "Q2";

export const roadmap: RoadmapBucket[] = [
  {
    name: "Reusable Workflows",
    description:
      "Components for implementing common workflows across applications",
    type: "development",
    framework: ["react-native"],
    items: [
      {
        name: "React Native Authentication Workflow",
        description:
          "Develop a flexible architecture for React Native authentication workflow",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "UI Code Generation",
    description:
      "Automatic code generation tools to accelerate UI development",
    type: "all",
    framework: ["all"],
    items: [
      {
        name: "UI Code Generation tools",
        description:
          "Explore a tool that automatically generates UI code",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "all",
      },
    ],
  },
  {
    name: "Lit framework",
    description:
      "Implement framework agnostic component library using Lit",
    type: "development",
    framework: ["react", "angular"],
    items: [
      {
        name: "Lit framework component library",
        description:
          "Implement a framework-independent component library using Lit framework",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "React Native Dev Docs Site",
    description:
      "Develop a new documentation site for React Native components",
    type: "development",
    framework: ["react-native"],
    items: [
      {
        name: "React Native Dev Docs",
        description:
          "Develop a new React Native documentation site to provide adopters working on mobile applications",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
];
