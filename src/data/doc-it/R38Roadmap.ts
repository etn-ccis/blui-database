import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2025;
const CURRENT_QUARTER: Quarter = "Q4";

export const roadmap: RoadmapBucket[] = [
  {
    name: "HMI Design System",
    description:
      "Implementation of common components and themes to be used with HMI.",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "React HMI Themes",
        description: "Creation of common themes to be used with HMI.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
      {
        name: "React HMI Components",
        description: "Implementation of common components to be used with HMI.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
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
        name: "Create backend services for HMI design system.",
        description:
          "Develop backend services for HMI design system and deploy it on Azure.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "in-progress",
        author: "Brightlayer UI",
      },
    ],
  },
];
