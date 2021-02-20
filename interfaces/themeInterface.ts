export default interface ThemeInterface {
    colors: {
        light: string;
        darkerLight: string;
        dark: string;
        darkTransparent: string;
        orange: string;
        success: string;
        error: string;
    };
    fonts: {
        kalam: string;
        balsam: string;
    };
    heights: {
        navigation: string;
    };
    media: {
        laptop: string;
        desktop: string;
        tablet: string;
        smallDevices: string;
        handWatches: string;
    };
}