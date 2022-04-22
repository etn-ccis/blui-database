type Announcement = {
    announcement: {
        id: number;
        bannerContent: string;
        startDate: string;
        endDate: string;
        devOnly: boolean;
    }  
};

export const announcement: Announcement = {
    announcement: {
        id: 1,
        bannerContent: "We've related updated to <a href='/release-notes'> R24 </a>! Checkout our release presentation on <a href='https://www.youtube.com/watch?v=jFbutosoJ3Q' target='_blank'> Youtube </a>",
        startDate: "2022-04-15",
        endDate: "2022-04-25",
        devOnly: true
    }
};