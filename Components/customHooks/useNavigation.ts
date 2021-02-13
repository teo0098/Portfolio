import { useEffect, useState } from 'react'

const useNavigation = () => {

    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset !== undefined) {
                if (window.pageYOffset >= 50) setScrolled(true)
                else setScrolled(false)
            } 
            else {
               setScrolled(true)
            }
        })
    }, [scrolled])

    return { scrolled }
}

export default useNavigation