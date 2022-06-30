function Home(props) {
    return (
        <>
            <h2>My Home - {props.username} - {props.address}</h2>
            <p>This is the homepage!</p>
        </>
    )
}

export default Home;