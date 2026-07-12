/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

export function useDebounceEffect( fn, waitTime, deps,) {
    useEffect(() => {
        const t = setTimeout(() => {
            fn.apply(undefined,)
        }, waitTime)

        return () => {
            clearTimeout(t)
        }
    }, deps)
}
