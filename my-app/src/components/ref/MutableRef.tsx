/*MutableRef 에서의 타입 작성
1. const interValRef = useRef<number | null>(null); 로 하고 
조건문 if 로 감싸주는 방식 
     const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current);
        }
    };
2. const interValRef = useRef<number | undefined>(undefined); 
undefined 로 작성하고 if 문 없이 하는 방법
    const stopTimer = () => {
          window.clearInterval(interValRef.current);
    };

*/

import { useState, useRef, useEffect } from 'react';

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current);
        }
    };
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            stopTimer();
        };
    }, []);

    return (
        <div>
            HookTmer - {timer} -
            <button onClick={() => stopTimer()}>Stop</button>
        </div>
    );
};
