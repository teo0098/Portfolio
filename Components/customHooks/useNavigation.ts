import { useEffect, useState } from 'react'

const useNavigation = () => {

    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        const io = new IntersectionObserver((entries : IntersectionObserverEntry[]) => {
            if(entries[0].boundingClientRect.y < 0) setScrolled(true)
            else setScrolled(false)
        })
        io.observe(document.getElementById('navigation__point')!)
    }, [scrolled])

    return { scrolled }
}

export default useNavigation