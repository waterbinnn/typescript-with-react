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
// import Counter from './components/state/Counter';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { MutableRef } from './components/ref/MutableRef';
import { DomRef } from './components/ref/DomRef';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';

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
            <div>
                <Text as="h1" size="lg">
                    Heading
                </Text>
                <Text as="h3" size="md">
                    Paragraph
                </Text>
                <Text as="label" htmlFor="name" size="sm" color="secondary">
                    Label
                </Text>
            </div>

            <CustomButton
                variant="primary"
                onClick={() => console.log('button')}
            >
                primary button
            </CustomButton>

            <Toast position="center" />

            <RandomNumber value={10} isPositive />

            <List
                items={['Batman', 'Superman', 'Wonder Woman']}
                onClick={(item) => console.log(item)}
            />
            <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
            <List
                items={[
                    { id: 1, first: 'Ryujin', last: 'Shin' },
                    { id: 2, first: 'Shu', last: 'hwa' },
                    { id: 3, first: 'minnie', last: 'Kim' },
                ]}
                onClick={(item) => console.log(item)}
            />

            <Private isLoggedIn={false} component={Profile} />

            <Counter message="message" />

            <DomRef />
            <MutableRef />

            <UserContextProvider>
                <User />
            </UserContextProvider>
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
            </Container>
        </div>
    );
}

export default App;
