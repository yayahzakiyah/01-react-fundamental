//props di function menjadi sebuah param
function BodyComponentFunc(props) {
    
    return (
        <>
        <h1>Body Component function</h1>
        <p>Welcome {props.firstName}</p>
        </>
    )
}

export default BodyComponentFunc