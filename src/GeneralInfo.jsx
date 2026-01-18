import { useState } from "react";

function GeneralInfo(){
    const [person, setPerson] = useState({name: "",email : "", phone: ""});
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setPerson({...person, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsEditing(false);
    }

    const handleEdit = ()=>{
        setIsEditing(true);
    }

    if(isEditing){
        return (
            <div className="general-info-container">
                <form onSubmit={handleSubmit}>
                    <h2>General Information</h2>

                    <div className="input-group">
                        <label>Name: </label>
                        <input 
                            type="text" 
                            name ="name"
                            value = {person.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Email: </label>
                        <input 
                            type="text" 
                            name ="email"
                            value = {person.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Phone: </label>
                        <input 
                            type="text" 
                            name ="phone"
                            value = {person.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    return(
        <div className="general-info-container">
            <h2>{person.name}</h2>
            <p>Email: {person.email}</p>
            <p>Phone: {person.phone}</p>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
}

export default GeneralInfo;