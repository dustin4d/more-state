const Button = (props) => {
    return ( //Button uses the respective click handler and text from props.
        <button onClick={props.handleClick}> 
            {props.text}
        </button>
    )
}

export default Button