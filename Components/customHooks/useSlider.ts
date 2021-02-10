import { useEffect, useState } from "react"

const traits = ['ambitious', 'motivated', 'hard-working']

const useSlider = () => {

    const [traitIndex, setTraitIndex] = useState<number>(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setTraitIndex(prevState => prevState >= 2 ? 0 : ++prevState)
        }, 4000)
        return () => clearTimeout(timer)
    }, [traitIndex])

    return { trait: traits[traitIndex] }
}

export default useSlider