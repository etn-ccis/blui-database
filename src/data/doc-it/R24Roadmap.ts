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
        name: 'Redesign Development Component Documentation',
        description: 'Redesigning brightlayer-ui-components.github.io',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Component Documentation',
                description: 'Create new component documentation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Figma Components',
        description: 'Add new components for Figma component sticker sheet',
        type: 'design',
        items: [
            {
                name: 'Data Visualization Components For Dashboards',
                description: 'Add new data visualization components designed to embed in dashboards',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Data Visualization Components For Charts',
                description: 'Add new data visualization components for charts and diagrams',
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
                name: 'Training Materials',
                description: 'More substantial training materials that show you how to use Brightlayer UI resources effectively',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
];