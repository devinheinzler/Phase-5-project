import React from "react"
import ClassCard from "./ClassCard"

function ClassIndex({classes}) {
console.log(classes)

    return(
        classes ?
        <>
        <header>Select a class below!</header>
        {classes.results.map(eachClass => <ClassCard key={eachClass.id} eachClass={eachClass} />)}
        </>
        :
        <p>Loading...</p>
    )
}

export default ClassIndex