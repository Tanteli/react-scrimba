import React from 'react'

function TodoItems() {

    const styles = {
        color: "#c92637",
        marginLeft: 50
    }

    return (

        <div style={styles}>
            <input type="checkbox" />
            <p >Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>


        </div>
    )
}

export default TodoItems