import { useEffect, useState } from 'react'

const useMenu = () => {

    const [active, setActive] = useState<number>(0)

    useEffect(() => {
        const targets : NodeListOf<Element> = document.querySelectorAll('.scroll__point')
        const io = new IntersectionObserver((entries : IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const entryIndex : number = Number(entry.target.getAttribute('data-index'))
                    setActive(entryIndex)
                }
            })
        }, { rootMargin: '-50%' })
        targets.forEach(target => io.observe(target))
        return () => targets.forEach(target => io.unobserve(target))
    }, [active])

    return { active }
}

export default useMenu