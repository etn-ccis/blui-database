import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2026;
const CURRENT_QUARTER: Quarter = "Q2";

export const roadmap: RoadmapBucket[] = [
  {
    name: "React Libraries",
    description: "The Brightlayer UI react libraries",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "React Drag & Drop Upload Component",
        description: "Adding a new Drag & Drop Upload React component",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
        framework: ["react"],
      },
      {
        name: "React Horizontal Stacked Bar Component",
        description: "Adding a new Horizontal Stacked Bar React component",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
        framework: ["react"],
      },
      {
        name: "Addition of Icons",
        description: "Adding new icons",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
        framework: ["react"],
      },
    ],
  },
  {
    name: "React Native Libraries",
    description: "The Brightlayer UI react native libraries",
    type: "development",
    framework: ["react-native"],
    items: [
      {
        name: "React Native Horizontal Stacked Bar Component",
        description: "Adding a new Horizontal Stacked Bar React Native component",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
        framework: ["react-native"],
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
        name: "Figma Code Connect Docs",
        description: "Figma code connect documentation",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
];
