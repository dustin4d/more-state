const Button = (props) => {
    const handleClick = props.handleClick

    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

export default Button