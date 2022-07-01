export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2022;
const CURRENT_QUARTER: Quarter = 'Q4';

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
        name: 'Code Examples',
        description: 'Updating our Demo applications',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Update Design Patterns',
                description: 'Update React Demos to use emotion style engine',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
                framework: ['react'],
            },
        ],
    },
    {
        name: 'CLI Templates',
        description: 'Templates used to start new applications',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Sample Application Template',
                description: 'Create a new project with common page layouts',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
                framework: ['all'],
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
                name: 'React Native Component Documentation',
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