import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2022;
const CURRENT_QUARTER: Quarter = 'Q2';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'brightlayer-ui.github.io',
        description: 'The Brightlayer UI documentation site',
        type: 'all',
        items: [
            {
                name: 'Updated Doc Site Designs',
                description: 'Update designs for main documentation site and component library documentation',
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
                name: 'MUI 5 Style Engine Update',
                description: 'Update component library to use new Emotion style engine',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Figma Component Library',
        description: 'Updates to the components in the designer sticker sheet',
        type: 'design',
        items: [
            {
                name: 'Data Visualization Components For Dashboards',
                description: 'Add new data visualization components designed to embed in dashboards',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
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
                description: 'Introduction to Brightlayer UI resources bootcamp',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
        ],
    },
];
