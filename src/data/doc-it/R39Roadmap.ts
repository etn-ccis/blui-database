import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2026;
const CURRENT_QUARTER: Quarter = "Q1";

export const roadmap: RoadmapBucket[] = [
  {
    name: "React Libraries",
    description: "The Brightlayer UI react libraries",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "Addition of Icons",
        description: "Adding new icons and progress icons",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
        framework: ["react"],
      },
      {
        name: "Addition of New Components",
        description: "Adding a new editable Datatable desktop component",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
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
        name: "React Native 84 Support",
        description: "Update all React Native resources to support version 0.84",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        framework: ["react-native"],
        status: "finished",
        author: "Brightlayer UI",
      },
    ],
  }
];
