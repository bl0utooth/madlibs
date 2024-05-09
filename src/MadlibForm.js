import React, { useState } from "react";

function MadlibForm({ setShowStory, createStory }) {
    const INITIAL_STATE = { noun: '', secondNoun: '', adjective: '', color: ''};
    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }))
    }
        const handleSubmit = (e) => {
            e.preventDefault();
            createStory({ ...formData })
            setFormData(INITIAL_STATE);
            setShowStory(true);
        }
        return (
            <div className="madlib-form">
                <form onSubmit={handleSubmit}>
                    <input
                        required
                        id="noun"
                        type="text"
                        name="noun"
                        placeholder="First Noun"
                        value={formData.noun}
                        onChange={handleChange}
                    />
                    <input
                        required
                        id="secondNoun"
                        type="text"
                        name="secondNoun"
                        placeholder="Second Noun"
                        value={formData.secondNoun}
                        onChange={handleChange}
                    />
                    <input
                        required
                        id="adjective"
                        type="text"
                        name="adjective"
                        placeholder="Adjective"
                        value={formData.adjective}
                        onChange={handleChange}
                    />
                    <input
                        required
                        id="color"
                        type="text"
                        name="color"
                        placeholder="Color"
                        value={formData.color}
                        onChange={handleChange}
                    />
                    <button type="submit">Create Story</button>
                </form>
            </div>
        )
}

export default MadlibForm;