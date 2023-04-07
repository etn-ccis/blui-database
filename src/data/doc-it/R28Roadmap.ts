import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2023;
const CURRENT_QUARTER: Quarter = 'Q2';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Design for Reusable Resources',
        description: 'Workflows and innersource marketplace to be shared across all Eaton',
        type: 'design',
        framework: ['all'],
        items: [
            {
                name: 'Device Lifecycle Management',
                description: 'Help design connected workflows for device lifecycle management',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Innersource 2.0 Portal',
                description: 'A portal to look up developer resources within Eaton',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Customizable React Authentication Workflow',
        description: 'Update React Authentication Workflows for easier customization',
        type: 'development',
        framework: ['react'],
        items: [
            {
                name: 'Screen componentization',
                description:
                    'Componentize and export screens individually to allow for better custom screen ordering and innjection',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Router support',
                description: 'React Router v6 updates and router customizability',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Internationalization',
                description: 'Better support for internationalization (NEED MORE DETAILS HERE)',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Angular Resource Updates',
        description: 'Update Angular packages',
        type: 'development',
        framework: ['angular'],
        items: [
            {
                name: 'Angular 14',
                description: 'Update platform resources to support Angular 14',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
            {
                name: 'Angular 15',
                description: 'Update platform resources to support Angular 15',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Design Guidelines',
        description: 'Adding new design guidelines',
        type: 'design',
        framework: ['all'],
        items: [
            {
                name: 'Tag Guidelines',
                description: 'New design pattern for tag usage',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Miscellaneous',
        description: 'Miscellaneous platform updates',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Reusable documentation tools',
                description: 'Extract reusable documentation components from React developer documentation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
                framework: ['react'],
            },
            {
                name: 'Documentation site bug fixes',
                description: `Fix bugs of Brightlayer UI's main documentation site`,
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'backlog',
                author: 'Brightlayer UI',
                framework: ['all'],
            },
        ],
    },
];
