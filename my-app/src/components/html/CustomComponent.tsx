// Extracting a Component Prop types
//Greet 의 타입을 가져와서 쓰기 - 자주 사용하는 방법은 아님 

import React from 'react';
import Greet from '../Greet';

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return <div>{props.name}</div>;
};
