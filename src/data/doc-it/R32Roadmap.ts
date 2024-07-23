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
        status: "finished",
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
          "Explore available tools and provide recommendations for usage/integration",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "all",
      },
    ],
  },
  {
    name: "Framework Agnostic Components",
    description:
      "Components that can be used in multiple frameworks",
    type: "development",
    framework: ["react", "angular"],
    items: [
      {
        name: "Lit component library",
        description:
          "Implement BLUI component library using Lit",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Miscellaneous",
    description:
      "Miscellaneous platform updates",
    type: "development",
    framework: ["react-native"],
    items: [
      {
        name: "React Native Dev Docs",
        description:
          "Develop a new & improved documentation site for React Native packages",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
      },
    ],
  },
];
