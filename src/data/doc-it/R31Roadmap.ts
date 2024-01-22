import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2024;
const CURRENT_QUARTER: Quarter = "Q1";

export const roadmap: RoadmapBucket[] = [
  {
    name: "React Native Workflows",
    description: "Brightlayer UI React Native Workflow",
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
      {
        name: "React Native Auth Workflow",
        description:
          "Develop a Flexible Architecture for React Native Auth Workflow",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
      {
        name: "React Native Auth Workflow patch release",
        description:
          "Fix adopter-reported issues in the React Native Auth Workflow",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "API Integration",
    description:
      "Innersource Brightlayer Cloud integrations for React Auth Workflow",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "Brightlayer Cloud API auth integrations",
        description:
          "Innersource the Brightlayer Cloud API auth integrations from DERMS CoE so that new products using React can connect their Brightlayer UI Auth workflows to Brightlayer Cloud with minimal configuration",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "DERMS CoE",
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
