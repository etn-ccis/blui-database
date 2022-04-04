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
        name: 'Adopter communication',
        description: 'Improve adopter communications',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Implement milestones dashboard',
                description: 'Create a dashboard that adopters can reference to view Brightlayer-UI milestones',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Data Visualization Component Development',
        description: 'Develop data visualization components',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Visualization Components',
                description: 'Develop reusable visualization components',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Update Component Documentation',
        description: 'Implement new component documentation for Brightlayer-UI',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Component doc development',
                description: 'Create documentation for Angular components',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Component doc development',
                description: 'Create documentation for React components',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Component doc development',
                description: 'Create documentation for React Native components',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
];