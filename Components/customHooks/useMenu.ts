import { useEffect, useState } from 'react'

const useMenu = () => {

    const [active, setActive] = useState<number>(0)

    const animateOnScroll = () => {
        if (window.pageYOffset >= (document.getElementById('Home')?.offsetTop as number) - 200) setActive(0)
        if (window.pageYOffset >= (document.getElementById('Abilities')?.offsetTop as number) - 200) setActive(1)
        if (window.pageYOffset >= (document.getElementById('Projects')?.offsetTop as number) - 200) setActive(2)
        if (window.pageYOffset >= (document.getElementById('Contact')?.offsetTop as number) - 200) setActive(3)
    }

    useEffect(() => {
        window.addEventListener('scroll', animateOnScroll)
        return () => window.removeEventListener('scroll', animateOnScroll)
    }, [])

    return { active }
}

export default useMenu