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
          "Develop a Flexible Architecture for React Native Registration Workflow",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Figma Components",
    description: "Brightlayer Charts Figma Components",
    type: "design",
    framework: ["all"],
    items: [
      {
        name: "Brightlayer UI Component Sticker Sheet",
        description:
          "Merge Brightlayer Charts to Brightlayer UI Component Sticker Sheet(Material Design 3)",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "DERMS CoE",
      },
    ],
  },
];
