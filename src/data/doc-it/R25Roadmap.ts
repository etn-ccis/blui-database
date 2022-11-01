export type FrameworkFilter =
    | 'all'
    | 'angular'
    | 'react'
    | 'ionic'
    | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status =
    | 'backlog'
    | 'in-progress'
    | 'pre-release'
    | 'deferred'
    | 'finished';
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
                name: 'Icon Guidelines',
                description: 'Update information on proper usage of icons',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Design Resources',
        description: 'Resources for designers',
        type: 'design',
        items: [
            {
                name: 'Accessible themes',
                description:
                    'Audit and redesign themes to meet accessibility requirement',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Component Libraries',
        description: 'Brightlayer UI components & documentation',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Angular Component Documentation',
                description:
                    'Implement updated designs for Angular component documentation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['angular'],
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Component Documentation',
                description:
                    'Implement updated designs for React component documentation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['react'],
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Native 70 Support',
                description:
                    'Update all React Native resources to support version 0.70',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['react-native'],
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'BLUI Lab',
        description:
            'Allow external contributors to add items to Brightlayer UI in a sandbox environment',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Angular Lab',
                description:
                    'Create environment for users to contribute angular resources',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                framework: ['angular'],
                status: 'deferred',
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
                name: 'BLUI Bootcamp',
                description:
                    'Introduction to Brightlayer UI resources bootcamp',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
];
