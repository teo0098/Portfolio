import ThemeInterface from '../interfaces/themeInterface'

const Theme : ThemeInterface = {
    colors: {
        light: '#F5F5F5',
        dark: '#424242',
        orange: '#FFD740'
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