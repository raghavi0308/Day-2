import React, { useState } from 'react';
import './UserDetail.css';

const UserDetail = () => {
    const [user, setUser] = useState({
        name: 'Varun',
        Dept: 'EEE',
        gender: 'Male',
        isMarried: false,
        subject: {
            Tamil: 0,
            English: 0,
            Maths: 0,
            Science: 0,
            Social: 0
        }
    });

    const [subTotal, setSubTotal] = useState(0);

    function OnChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setUser({ ...user, [e.target.name]: value });
    }

    function OnSubChange(e) {
        const value = Number(e.target.value) || 0;
        setUser({
            ...user,
            subject: {
                ...user.subject,
                [e.target.name]: value
            }
        });

        setSubTotal(subTotal - user.subject[e.target.name] + value);
    }

    return (
        <div className="container">
            {/* First Row - User Details & Subject Marks */}
            <div className="row">
                <div className="column">
                    <h2>User Details</h2>
                    <h4>Name: {user.name}</h4>
                    <h4>Department: {user.Dept}</h4>
                    <h4>Gender: {user.gender}</h4>
                    <h4>Marital Status: {user.isMarried ? 'Married' : 'Single'}</h4>
                </div>

                <div className="column">
                    <h2>Subject Marks</h2>
                    <h4>Tamil: {user.subject.Tamil}</h4>
                    <h4>English: {user.subject.English}</h4>
                    <h4>Maths: {user.subject.Maths}</h4>
                    <h4>Science: {user.subject.Science}</h4>
                    <h4>Social: {user.subject.Social}</h4>
                    <h2>Total: {subTotal}</h2>
                </div>
            </div>

            {/* Second Row - Edit Details & Update Subject Marks */}
            <div className="row">
                <div className="column">
                    <h2>Edit Details</h2>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={OnChange} value={user.name} />

                    <br/>
                    <br/>

                    <label>Department:</label>
                    <select name="Dept" onChange={OnChange} value={user.Dept}>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                    </select>

                    <br/>
                    <br/>

                    <div className="radio-group">
                        <label>Gender:</label>
                        <input type="radio" name="gender" value="Male" onChange={OnChange} checked={user.gender === 'Male'} />
                        <label>Male</label>
                        <input type="radio" name="gender" value="Female" onChange={OnChange} checked={user.gender === 'Female'} />
                        <label>Female</label>
                    </div>
                
                    <br/>

                    <label>Marital Status</label>
                    <input type="checkbox" name="isMarried" onChange={OnChange} checked={user.isMarried} />
                    
                    
                </div>

                <div className="column">
                    <h2>Update Subject Marks</h2>
                    <label>Tamil:</label>
                    <input type="number" name="Tamil" onChange={OnSubChange} value={user.subject.Tamil} />

                    <label>English:</label>
                    <input type="number" name="English" onChange={OnSubChange} value={user.subject.English} />

                    <label>Maths:</label>
                    <input type="number" name="Maths" onChange={OnSubChange} value={user.subject.Maths} />

                    <label>Science:</label>
                    <input type="number" name="Science" onChange={OnSubChange} value={user.subject.Science} />

                    <label>Social:</label>
                    <input type="number" name="Social" onChange={OnSubChange} value={user.subject.Social} />
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
