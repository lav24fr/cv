import { useState } from "react";

function Eduction(){
    const [education,setEducation] = useState({
        schoolName: "",
        titleOfStud: "",
        dateOfStudy: "",
    });

    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setEducation({...education,[name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () =>{
        setIsEditing(true);
    };



    if(isEditing){
        return (
            <div className="education-container">
                <h2>Education</h2>
                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>School Name: </label>
                        <input 
                            type="text"
                            name="schoolName"
                            value={education.schoolName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Title of Study: </label>
                        <input 
                            type="text"
                            name="titleOfStud"
                            value={education.titleOfStud}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Date of Study: </label>
                        <input 
                            type="text"
                            name="dateOfStudy"
                            value={education.dateOfStudy}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    return(
        <div className="education-container">
            <h2>Education</h2>
            <p><strong>School: </strong>{education.schoolName}</p>
            <p><strong>Title: </strong>{education.titleOfStud}</p>
            <p><strong>Date: </strong>{education.dateOfStudy}</p>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default Eduction;