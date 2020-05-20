import React from 'react';

export default function NewMember(props){
    const {value, onInputChange, onSubmit}= props;

    return(
        <div style={{border: '1px solid red'}}>
            <h3>Add new Team Member</h3>
            <form>
            <label>
                Username:&nbsp; <input type='text' 
                placeholder='Enter New Username' 
                value={value.username} 
                name='username' 
                onChange={onInputChange}
                />
            </label>
            <br />
            <label>
                Email:&nbsp; <input type='text' 
                name='email' 
                placeholder='Enter new email' 
                value={value.email} 
                onChange={onInputChange}
                 />
            </label>
            <br />
            <label>
                Choose a Role: &nbsp;
                <select name='role' 
                value={value.role} 
                onChange={onInputChange}>
                    <option value=''>Choose a Role</option>
                    <option value='FrontEnd Engineer'>FrontEnd Engineer</option>
                    <option value='BackEnd Engineer'>BackEnd Engineer</option>
                    <option value='UX Designer'>UX Designer</option>
                </select>
            </label>
            <br />
            <button onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}