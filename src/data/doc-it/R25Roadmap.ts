export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2022;
const CURRENT_QUARTER: Quarter = 'Q3';

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
        name: 'brightlayer-ui.github.io',
        description: 'The Brightlayer UI documentation site',
        type: 'all',
        items: [
            {
                name: 'Updated Doc Sites',
                description: 'Implement updated designs for main documentation site',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Icon Guidelines',
                description: 'Updated information on proper usage of icons',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Component Libraries',
        description: 'Re-usable UI elements for Brightlayer applications',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Dashboard Data Viz Components',
                description: 'Develop reusable visualization components for embedding in dashboards',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },

    {
        name: 'Component Documentation',
        description: 'Documentation for the Brightlayer UI component libraries',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Component Documentation Development',
                description: 'Implement updated designs for Angular component documentation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['angular'],
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Component Documentation Development',
                description: 'Implement updated designs for React component documentation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['react'],
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Component Documentation Development',
                description: 'Implement updated designs for React Native component documentation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['react-native'],
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
];