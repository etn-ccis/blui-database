import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2022;
const CURRENT_QUARTER: Quarter = 'Q1';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @brightlayer-ui/angular-components',
        type: 'development',
        framework: ['angular'],
        items: [
            {
                name: 'Angular 13 Support',
                description: 'Update component library to build using Angular version 13',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
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
                name: 'Visualization Guidelines',
                description: 'Initial guidelines for basic chart usage',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
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
                status: 'finished',
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
                name: 'Table Design Patterns',
                description: 'Expanded documentation on how and when to use tables',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Mobile Charting Exploration',
                description: 'Begin research regarding charting on mobile devices',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
];
