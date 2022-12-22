import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2021;
const CURRENT_QUARTER: Quarter = 'Q3';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Figma Component Library',
        description: 'Updates to the components in the designer sticker sheet',
        type: 'design',
        items: [
            {
                name: 'System Components',
                description: 'Updated system components for keyboards, cursors, notifications, etc.',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
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
                status: 'deferred',
                author: 'Innersource',
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
                name: 'Themed RNP Components',
                description: 'Improved theming support via pre-styled wrapper components for React Native Paper',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Progress Icons',
                description: 'Dynamically filled SVG progress icons',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
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
                name: 'Device / Network Commissioning',
                description: 'New design patterns for setting up a hardware device',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
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
                name: 'Updated Design Pattern Examples',
                description: 'More comprehensive examples implementing the different elements of our design patterns',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
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
                name: 'Authentication Workflow',
                description: 'Add support for username-based login in the authentication workflows ',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Icons',
        description: 'Components for implementing common workflows across applications',
        type: 'all',
        framework: ['all'],
        items: [
            {
                name: 'Device & Channel Icons',
                description: 'New icons to represent more electrical devices and channels',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
        ],
    },
];
