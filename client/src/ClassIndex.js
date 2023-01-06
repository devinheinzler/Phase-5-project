import React from "react"
import ClassCard from "./ClassCard"
import DatabaseNav from "./DatabaseNav"

function ClassIndex({classes}) {
console.log(classes)

    return(
        classes ?
        <>
        <DatabaseNav/>
        <header>Select a class below!</header>
        {classes.results.map(eachClass => <ClassCard key={eachClass.id} eachClass={eachClass} />)}
        </>
        :
        <p>Loading...</p>
    )
}

export default ClassIndex