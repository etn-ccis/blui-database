export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2020;
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
        name: 'Figma Stickersheet Components',
        description: 'Updates to the components in the designer stickersheet',
        type: 'design',
        items: [
            {
                name: 'Additional Material Components',
                description:
                    'Add components for Chips, Bottom Sheet, Cards, Sliders, Snackbar, and Tooltip',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Innersource',
            },
            {
                name: 'Info List Item',
                description: 'Add component for PX Blue Info List Item',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'List Item Tag',
                description: 'Add component for PX Blue List Item Tag',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Score Card',
                description: 'Add component for PX Blue Score Card',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add component for PX Blue User Menu',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Dropdown Toolbar',
                description: 'Add component for PX Blue Dropdown Toolbar',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Figma Design Patterns',
        description: 'Adding design pattern examples to Figma',
        type: 'design',
        items: [ ],
    },
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @pxblue/angular-components',
        type: 'development',
        framework: ['angular', 'ionic'],
        items: [
            {
                name: 'User Menu',
                description: 'Add a component for dropdown menu from avatar',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Dropdown Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Gauges and Inputs',
                description: 'Assorted input and gauge components from IPM/Genepi',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Innersource',
            },
            {
                name: 'Navigation Rail',
                description: 'Condensed navigation drawer from IPM/Genepi',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Innersource',
            },
        ],
    },
    {
        name: 'React Component Library',
        description: 'Reusable UI elements from @pxblue/react-components',
        type: 'development',
        framework: ['react'],
        items: [
            {
                name: 'Dropdown Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'React Native Component Library',
        description: 'Reusable UI elements from @pxblue/react-native-components',
        type: 'development',
        framework: ['react-native'],
        items: [
            {
                name: 'List Item Tag',
                description: 'Add support for tags',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Spacer',
                description: 'An invisible component that acts as a spacer element in various layouts.',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add a component for dropdown menu from avatar',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'pxblue.github.io',
        description: 'The PX Blue documentation site',
        type: 'design',
        items: [
            {
                name: 'Designer Documentation',
                description: 'Expanded documentation for using PX Blue as a designer',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Design Patterns',
                description: 'New format and content for design patterns',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Code Examples',
        description: 'Basic code snippets showing how to implement various design patterns',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Simplification and Consolidation',
                description: 'Consolidating code examples into a single repository',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
                framework: ['angular', 'ionic', 'react-native'],
            },
        ],
    },
    {
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'React Login & User Registration',
                description: 'Shared login and sign-up experience across applications',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
                framework: ['react'],
            },
        
        ],
    },
    {
        name: 'Utilities',
        description: 'Assorted tools for helping you work faster',
        type: 'development',
        framework: ['all'],
        items: [ ],
    },
];
