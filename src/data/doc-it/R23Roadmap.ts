export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2022;
const CURRENT_QUARTER: Quarter = 'Q1';

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
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @brightlayer-ui/angular-components',
        type: 'development',
        framework: ['angular', 'ionic'],
        items: [
            {
                name: 'Angular 13 Support',
                description: 'Update component library to build using Angular version 13',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Figma Design Patterns',
        description: 'Adding design pattern examples to Figma',
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
        name: 'React Component Library',
        description: 'Reusable UI elements from @brightlayer-ui/react-components',
        type: 'development',
        framework: ['react'],
        items: [ 
            {
                name: 'MUI 5 Support',
                description: 'Update component library to build using MUI version 5',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'brightlayer-ui.github.io',
        description: 'The Brightlayer UI documentation site',
        type: 'design',
        items: [
            {
                name: 'Device / Network Commissioning',
                description: 'New design patterns for setting up a hardware device',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Mobile Charting Guidelines',
                description: 'New design patterns for charting on mobile devices',
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
        type: 'development',
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