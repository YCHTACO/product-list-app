const Header =({ title ,bg}) => {
    return (
        <header 
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover"
            }}
            className="py-5 text-white bg-dark text-center"
        >
            <h1>{title}</h1>

        </header>
    )
}

export default Header;