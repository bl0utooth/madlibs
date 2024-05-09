import React from "react";

function Story({ setShowStory, setStory, story }) {
    const restart = () => {
        setShowStory(false);
        setStory([])
    }
    return (
        <div className="story">
            <h1>
                Once upon a time there was a {story.color} {story.noun} who absolutely despised a {story.adjective} {story.secondNoun}.
            </h1>
            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default Story;