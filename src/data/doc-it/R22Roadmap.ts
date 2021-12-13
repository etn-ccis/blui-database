export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2021;
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
        name: 'brightlayer-ui.github.io',
        description: 'The Brightlayer UI documentation site',
        type: 'development',
        items: [
            {
                name: 'Brightlayer UI Re-brand',
                description: 'Updating all of our documentation and resources to use the new platform name',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Code Examples',
        description: 'Basic code snippets showing how to implement various design patterns',
        type: 'development',
        framework: ['react', 'angular'],
        items: [
            {
                name: 'Updated Design Pattern Examples',
                description: 'More comprehensive examples for List patterns',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
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
                name: 'Training Material Research',
                description: 'Research and planning initiative for more comprehensive training materials',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'Brightlayer UI',
            },
        ],
    },
];
