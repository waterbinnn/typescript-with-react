import { useReducer, useState } from 'react';

type CounterState = {
    count: number;
};

// useReducer Strict Action Types
// 같은 건데 한쪽엔 값이 있고 다른 한쪽엔 없을때 이렇게 작성해줄 수 있다.
type UpdateAction = {
    type: 'increment' | 'decrement';
    payload: number;
};
type ResetAction = {
    type: 'reset';
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({ type: 'increment', payload: 10 })}
            >
                Increment 10
            </button>
            <button
                onClick={() => dispatch({ type: 'decrement', payload: 10 })}
            >
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    );
}

export default Counter;
