export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2022;
const CURRENT_QUARTER: Quarter = 'Q2';

export type RoadmapItem = {
    name: string;
    description: string;
    year: string | number;
    quarter: Quarter;
    status: Status;
    author?: string;
    type?: ItemTypeFilter;
    framework?: FrameworkFilter[];
};
type RoadmapBucket = {
    name: string;
    description: string;
    type: ItemTypeFilter;
    framework?: FrameworkFilter[];
    items: RoadmapItem[];
};

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Update Component Documentation',
        description: 'Design new component documentation for Brightlayer-UI',
        type: 'design',
        framework: ['all'],
        items: [
            {
                name: 'Component doc design',
                description: 'Create component documentation in Figma',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Data Visualization Component Designs',
        description: 'Adding data visualization designs to Figma',
        type: 'design',
        items: [
            {
                name: 'Visualization Components',
                description: 'Design reusable visualization components',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Icon Usage Guidelines',
        description: 'Adding usage guidelines to documentation',
        type: 'design',
        items: [
            {
                name: 'Icon Guidelines',
                description: 'Add updated iconography documentation on doc site',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Utilities',
        description: 'Assorted tools for helping you work faster',
        type: 'all',
        framework: ['all'],
        items: [
            {
                name: 'Bootcamp Training Materials',
                description: 'More substantial training materials that show you how to use Brightlayer UI resources effectively',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
];