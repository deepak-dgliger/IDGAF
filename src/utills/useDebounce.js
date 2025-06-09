import { useEffect, useState } from "react"

export function useDebounce(value, delay) {
    const [debounceText, setdebounceText] = useState('');

    useEffect(() => {
        let handler = setTimeout(() => {
            setdebounceText(value);
        }, delay)

        return (()=>{
            clearTimeout(handler)
        })
        
    }, [value, delay])



    return debounceText;
}