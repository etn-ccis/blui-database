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
        id: 2,
        bannerContent: "We've released updates for R25!  See our release notes for <a href='/release-notes'>details</a>.  ",
        startDate: "2022-07-01",
        endDate: "2022-07-14",
        devOnly: false
    }
};