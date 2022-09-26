//Polymorhic 다형성 타입 선언

import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
    // as?: React.ElementType; 이것만 선언해주면 태그 속성값을 넣어줄 수가 없다. 그래서 제너릭으로 선언해주는 것.
    as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = 'div'>({
    size,
    color,
    children,
    as,
}: TextProps<E>) => {
    const Component = as || 'div';

    return (
        <Component className={`class-with-${size}-${color}`}>
            {children}
        </Component>
    );
};

{
    /* 
<Text as="h1" size="lg">
  Heading
</Text>
<Text as="h3" size="md">
  Paragraph
</Text>
<Text as="label" htmlFor="name" size="sm" color="secondary">
  Label
</Text> */
}
