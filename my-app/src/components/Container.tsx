type ContainerProps = {
    styles: React.CSSProperties;
    children: React.ReactNode;
};

function Container(props: ContainerProps) {
    return <div style={props.styles}>{props.children}</div>;
}

export default Container;

{
/* <Container
    styles={{
        border: '1px solid gray',
        padding: '5rem',
        color: 'purple',
    }}
></Container>; */
}
