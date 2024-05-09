import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import Story from "./MadlibStory";
import { v4 as uuid } from 'uuid'

function Madlib() {
    const [story, setStory] = useState([])
    const [showStory, setShowStory] = useState(false)
    
    const createStory = (newStory) => {
        setStory([{ ...newStory, id: uuid() }])
        setShowStory(true)
    }
    
    return (
        <div className="madlib">
            <h1>Madlibs</h1>
            {showStory ? (
                <Story 
                    setShowStory={setShowStory}
                    setStory={setStory}
                    story={story[0]}
                />
            ) : (
                <MadlibForm setShowStory={setShowStory} createStory={createStory} />
            )}
        </div>
    )
}

export default Madlib;