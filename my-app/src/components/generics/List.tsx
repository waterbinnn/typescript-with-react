//Genergic type

type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
};

// <T extends string | number>
//제네릭에서 오브젝트 특정 key의 value 타입 지정-> 이 키는 무조건 들어가야 함
// <T extends { id: number }>
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => {
                return (
                    // <div key={item.id} onClick={() => onClick(item)}>
                    <div key={index} onClick={() => onClick(item)}>
                        {JSON.stringify(item)}
                    </div>
                );
            })}
        </div>
    );
};

/**
<List items={['Batman', 'Superman', 'Wonder Woman']}
onClick={(item) => console.log(item)}/>
<List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
<List items={[
{ id: 1, first: 'Ryujin', last: 'Shin' },
{ id: 2, first: 'Shu', last: 'hwa' },
{ id: 3, first: 'minnie', last: 'Kim' }]}
onClick={(item) => console.log(item)}/>
 */
