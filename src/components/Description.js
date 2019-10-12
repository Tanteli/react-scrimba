import React from 'react'

function Description() {

    // Dynamic style
    const h3style = {
        fontSize: 30
     }

    const firstname = "Bob"
    const lastname = "Tal"
    const date = new Date() //(2018, 6, 31, 19) to test 
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
        h3style.color = "#04756F" // Dynamic style
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        h3style.color = "#2E0927"
    } else {
        timeOfDay = "night"
        h3style.color = "#D90000"
    }    

    return (
        <div>
            <p>Hello {`${firstname} it's ${lastname}`}</p>

            <h3 style={h3style}> Good {timeOfDay}</h3>

            <p>This is the description of this application</p>
            <p>This is another description of the application</p>

        </div>
    )
}

export default Description