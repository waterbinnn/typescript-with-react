import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import Counter from './components/state/Counter';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';

function App() {
    const personName = {
        first: 'Lee',
        last: 'subin',
    };
    const nameList = [
        {
            first: 'Ryujin',
            last: 'Shin',
        },
        {
            first: 'Shu',
            last: 'hwa',
        },
        {
            first: 'minnie',
            last: 'Kim',
        },
    ];

    return (
        <div className="App">
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>

            <Container
                styles={{
                    border: '1px solid gray',
                    padding: '5rem',
                    color: 'purple',
                }}
            >
                <Greet name="Subin" isLoggedIn={true} />
                <Person name={personName} />
                <PersonList names={nameList} />
                <Status status="success" />
                <Oscar>
                    <Heading>PineApple</Heading>
                </Oscar>
                <Button
                    handleClick={(event, id) => {
                        console.log('clicked!', event, id);
                    }}
                />
                <Input value="" handleChange={(event) => console.log(event)} />
                <Counter />
            </Container>
        </div>
    );
}

export default App;
