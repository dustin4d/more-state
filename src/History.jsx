const History = (props) => {
    if (props.allClicks.length === 0) { // If there isn't any clicks in the array,
        return ( // render this stuff
            <div>
                The app is used by pressing the buttons.
            </div>
        )
    }

    return ( // Or, if there ARE items in the array, join them into a string, with spaces.
        <div>
            History: {props.allClicks.join(' ')}
        </div>
    )
}

export default History