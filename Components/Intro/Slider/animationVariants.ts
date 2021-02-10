const sliderVariants = {
    hidden: {
        opacity: 0,
        y: '-100%',
        transition: {
            type: 'tween',
            duration: 0.4
        }
    },
    visible: {
        opacity: 1,
        y: '0',
        transition: {
            type: 'tween',
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        y: '100%',
        transition: {
            type: 'tween',
            duration: 0.4
        }
    }
}

export default sliderVariants