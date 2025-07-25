type Announcement = {
  announcement: {
    id: number;
    bannerContent: string;
    startDate: string;
    endDate: string;
    devOnly: boolean;
  };
};

export const announcement: Announcement = {
  announcement: {
    id: 3,
    bannerContent:
      "R25 has been released — see the <a href='/release-notes'>release notes</a>! Check out our new component documentation for <a href='https://brightlayer-ui-components.github.io/angular/'>Angular</a> and <a href='https://brightlayer-ui-components.github.io/react/'>React</a>.",
    startDate: "2022-11-01",
    endDate: "2022-11-15",
    devOnly: false,
  },
};
