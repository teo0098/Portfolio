import ThemeInterface from '../interfaces/themeInterface'

const Theme : ThemeInterface = {
    colors: {
        light: '#F5F5F5',
        darkerLight: '#EEEEEE',
        dark: '#424242',
        darkTransparent: 'rgba(66,66,66,0.5)',
        orange: '#FFEE58',
        success: '#00E676',
        error: '#ff5252'
    },
    fonts: {
        kalam: "'Kalam', cursive",
        balsam: "'Balsamiq Sans', cursive"
    },
    heights: {
        navigation: '90px'
    },
    media: {
        laptop: '@media (min-width: 1200px)',
        desktop: '@media (min-width: 1024px)',
        tablet: '@media (min-width: 728px)'
    }
}

export default Theme