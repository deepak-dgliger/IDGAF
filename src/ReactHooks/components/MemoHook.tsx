import React, { useMemo, useState } from 'react';

const MemoHook: React.FC = () => {
    const [number, setNumber] = useState(1);

    const factorial = useMemo(() => {
        return calculateFactorial(number);
    }, [number]);

    const calculateFactorial = (num) => {
        if (num <= 0) return 1;
        return num * calculateFactorial(num - 1);
    }

    return (
        <>
            <div>
                <input type="number" value={number} onChange={e => setNumber(parseInt(e?.target?.value))} />
                <button onClick={factorial}>check Factorial</button>
            </div>
        </>
    )
}

export default MemoHook