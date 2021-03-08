export const ulVariant = {
    hidden: {
        transition: {
            type: 'tween',
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    },
    visible: {
        transition: {
            type: 'tween',
            delayChildren: 0.3,
            staggerChildren: 0.1
        }
    }
}

export const liVariant = {
    hidden: {
        opacity: 0,
        x: '-50%',
        transition: {
            type: 'tween',
            duration: 0.3
        }
    },
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'tween',
            duration: 0.3
        }
    }
}