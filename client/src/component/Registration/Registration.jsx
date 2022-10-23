import React,{useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Registration.css';

function Registration(){
    const navigate=useNavigate();
    const [user,setuser]=useState({
        name:"", email:"", phone:"", work:"", skill:"", password:"", cpassword:""
    });

    let name,value;
    const clickhandler = (event) =>{
        name=event.target.name;
        value=event.target.value;

        setuser({...user, [name]:value});
    };

    const postdata = async (e) =>{
        e.preventDefault();
        const {name, email, phone, work, skill, password, cpassword}=user;
       
        const res= await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, skill, password, cpassword
            })
        });

        const data = await res.json();
        if(data.status===422 || !data){
            window.alert("Fill the fields properly");
        }
        else if(data.status===420){
            window.alert("User already registered with this Email");
            navigate("/login");
        }
        else if(data.status===200){
            window.alert("User Registered Successfully");
            navigate("/login");
        }
        else{
            window.alert("Error Registering");
        }
    };

    const Resethandler = () =>{
        const {name, email, phone, work, skill, password, cpassword}=user;
        setuser({
            name:"",
            email:"", 
            number:"", 
            work:"", 
            skill:"",
            password:"", 
            cpassword:""
        });
    };

    return(
        <div className='row reg-outer d-flex align-items-center justify-content-center'>
            <div className="mt-4 row reg-mid d-flex flex-row align-items-center justify-content-center col-lg-8 col-sm-12">
                <form method="POST" className="row reg-mid-left col-lg-6 col-sm-10 d-flex flex-column align-items-center text-center">
                    <h3 className='mt-3 col-lg-8'>Sign Up</h3>
                    <input className="col-lg-8 col-sm-10" type="text" name='name' value={user.name} placeholder='&#128100; Name' onChange={clickhandler}/>
                    <input className="col-lg-8 col-sm-10" type="email" name='email' value={user.email} placeholder='&#9993; Email' onChange={clickhandler}/>
                    <input className="col-lg-8 col-sm-10" type="text" name='phone' value={user.number} placeholder='&#128222; Mobile Number' onChange={clickhandler}/>
                    <input className="col-lg-8 col-sm-10" type="text" name='work' value={user.description} placeholder='&#9861; Your Description' onChange={clickhandler}/>
                    <input className="col-lg-8 col-sm-10" type="text" name='skill' value={user.skill} placeholder='&#x1F4BB; Skill' onChange={clickhandler}/>
                    <input className="col-lg-8 col-sm-10" type="password" name='password' value={user.password} placeholder='&#x1f512; Password' onChange={clickhandler}/>
                    <input className="col-lg-8 col-sm-10" type="password" name='cpassword' value={user.cpassword} placeholder='&#x1f512; Confirm Password' onChange={clickhandler}/>
                    <button type='submit' className='margin-reg-setting col-lg-6 col-sm-7 reg-btn btn btn-success' onClick={postdata}>Register</button>
                    <button type="reset" className="mb-3 margin-reg-setting col-lg-6 col-sm-7 btn btn-danger" onClick={Resethandler}>Reset</button>
                </form>
                <div className="row col-lg-6 col-sm-10 reg-mid-image d-flex align-items-center justify-content-center text-center">
                    <img src="./images/registrationimage.png" alt="_registrationImage" />
                    <NavLink to='/login' className='reg-mid-nav'>
                        <span>I am Already Registered</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Registration;