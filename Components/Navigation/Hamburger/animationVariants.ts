const logoVariants = {
    hidden: {
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 0.3,
        }
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.3,
            delay: 0.3,
        }
    }
}

export default logoVariants