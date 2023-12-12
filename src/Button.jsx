const Button = (props) => {
    const handleClick = props.handleClick //Pull in the left and right click handlers

    return ( //Button uses the respective click handler and text from props.
        <button onClick={props.handleClick}> 
            {props.text}
        </button>
    )
}

export default Button