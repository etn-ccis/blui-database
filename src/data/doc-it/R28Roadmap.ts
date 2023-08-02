import { Quarter, RoadmapBucket } from './_types';

const CURRENT_YEAR = 2023;
const CURRENT_QUARTER: Quarter = 'Q2';

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Innersource 2.0',
        description: 'Resources to help Eaton teams share reusable assets',
        type: 'all',
        framework: ['all'],
        items: [
            {
                name: 'MVP Release of Innersource Portal',
                description: 'Initial release of an innersource marketplace with resources shared across all Eaton',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        type: 'development',
        framework: ['react'],
        items: [
            {
                name: 'React Auth Workflow Screen Componentization',
                description:
                    'Componentize and export screens individually to allow for better custom screen ordering and injection',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Auth Workflow Router Support',
                description: 'React Router v6 updates and router customizability',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
            {
                name: 'React Auth Workflow Internationalization',
                description: 'Support for the latest versions of i18n and react-i18n',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @brightlayer-ui/angular-components',
        type: 'development',
        framework: ['angular'],
        items: [
            {
                name: 'Angular 15',
                description: 'Update platform resources to support Angular 15',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
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
                name: 'Device Lifecycle Management',
                description: 'Help design connected workflows for device lifecycle management',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Tag Guidelines',
                description: 'New design pattern for tag usage',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
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
                name: 'Reusable Documentation Tools',
                description: 'Extract reusable documentation components from React developer documentation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
                framework: ['react'],
            },
        ],
    },
];
