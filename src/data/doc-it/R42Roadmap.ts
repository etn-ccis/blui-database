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
        name: "Map-Related Components and Styles",
        description: "Adding a Map Pin component, Pin Cluster component, Map Buttons, and a Map Style update",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
        framework: ["react"],
      },
      {
        name: "Heatmap Enhancement",
        description: "Adding animation/motion on mount and hover interactions for the plotted graph and legends",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
        framework: ["react"],
      },
      {
        name: "DataTable Rich Menu Improvements",
        description: "Enhancing DataTable select menu options with richer content",
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
        name: "Merge Community Docs into Developer Docs",
        description: "Merging community documentation into developer documentation",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
];