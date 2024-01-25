import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2024;
const CURRENT_QUARTER: Quarter = "Q1";

export const roadmap: RoadmapBucket[] = [
  {
    name: "Reusable Workflows",
    description:
      "Components for implementing common workflows across applications",
    type: "development",
    framework: ["react-native"],
    items: [
      {
        name: "React Native Registration Workflow",
        description:
          "Develop a flexible architecture for React Native registration workflow",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Figma Component Library",
    description: "Updates to the components in the designer sticker sheet",
    type: "design",
    items: [
      {
        name: "Data Visualization Components For Dashboards",
        description:
          "Add new data visualization components designed to embed in dashboards",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
];
