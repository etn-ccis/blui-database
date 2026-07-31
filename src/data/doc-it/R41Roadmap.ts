import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2026;
const CURRENT_QUARTER: Quarter = "Q3";

export const roadmap: RoadmapBucket[] = [
  {
    name: "React Libraries",
    description: "The Brightlayer UI react libraries",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "Addition of Icons",
        description: "Adding new icons, including a progress icon, icon modifier and two tone icons",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
        framework: ["react"],
      },
      {
        name: "Addition of New Components",
        description: "Adding new components including Mapbox, Heatmap, and enhancements to the App Bar component",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
        framework: ["react"],
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
      {
        name: "Display historical versions of doc-It​",
        description: "Adding a feature to display historical versions of doc-It",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
        framework: ["react"],
      },
    ],
  },
];
