//Dom Ref 에서의 타입 작성

import { useRef, useEffect } from 'react';

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
};
