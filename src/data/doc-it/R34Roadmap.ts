import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2024;
const CURRENT_QUARTER: Quarter = "Q4";

export const roadmap: RoadmapBucket[] = [
  {
    name: "Reusable Workflows",
    description: "Components for implementing common workflows across applications",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "React User Management Workflow",
        description:
          "Develop a user management workflow for roles and operations",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "finished",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "React Libraries",
    description:
      "The Brightlayer UI react libraries",
    type: "development",
    framework: ["react"],
    items: [
      {
          name: 'MUI 6 Support',
          description: 'Update libraries to build using MUI version 6',
          year: CURRENT_YEAR,
          quarter: CURRENT_QUARTER,
          status: 'finished',
          author: 'Brightlayer UI',
      },
  ],
  },
];