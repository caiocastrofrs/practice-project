import React, { useState } from 'react';
import './form.sass';


const Form = (props) => {
    
    const [user, setUser] = useState({name: '', age: 0})

    const dataHandler = (e) => {
        e.preventDefault();
        props.getData(user)
    }
    
    return(
        <form className="form">
            <label>Name:</label>
            <input type="text" onInput={e => setUser({...user, name: e.target.value})}/>
            <label>Age:</label>
            <input type="text" onInput={e => setUser({...user, age: e.target.value})}/>
            <button onClick={dataHandler}>Add User</button>
        </form>
    );
}

export default Form;