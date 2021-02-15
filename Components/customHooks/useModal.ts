import { useEffect, useState } from 'react'

const useModal = (timeout : number) => {

    const [show, setShow] = useState<boolean>(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, timeout)
        return () => clearTimeout(timer)
    }, [show])

    return show
}

export default useModal