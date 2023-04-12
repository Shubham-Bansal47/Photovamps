import React, {useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import './Login.css';

function Login(){
    const navigate=useNavigate();
    const [user,setuser]=useState({
        email:"", password:""
    });

    let name,value;
    function clickhandler(event){ 
        name=event.target.name;
        value=event.target.value;

        setuser({...user, [name]:value});
    };

    const Posthandler = async (e) =>{
        e.preventDefault();
        const {email,password} = user;
        const res = await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });

        const data = await res.json();
        if(data.status===400 || !data){
            window.alert("Fill the fields properly");
        }
        else if(data.status===200){
            console.log(data);
            window.alert("User Matched");
            // navigate("/");
        }
        else if(data.status===406){
            window.alert("Invalid Credentials");
        }
        else{
            window.alert("Kindly Register First");
            navigate("/registration");
        }
    };

    const Resethandler = () =>{
        const {email,password}=user;
        setuser({
            email:"", 
            password:""
        });
    };

    return(
        <div className='row login-outer d-flex align-items-center justify-content-center'>
            <div className="mt-4 row login-mid d-flex flex-row align-items-center justify-content-center col-lg-8 col-sm-12">
                <form method="POST" className="row login-mid-left col-lg-6 col-sm-10 d-flex flex-column align-items-center text-center">
                    <h3 className='mt-3 col-lg-8'>Login</h3>
                    <input className="col-lg-8 col-sm-10" type="email" name='email' value={user.email} placeholder='&#9993; Email' onChange={clickhandler}/>
                    <input className="col-lg-8 col-sm-10" type="password" name='password' value={user.password} placeholder='&#x1f512; Password' onChange={clickhandler}/>
                    <button type='submit' className='margin-login-setting col-lg-6 col-sm-5 login-btn btn btn-success' onClick={Posthandler}>Login</button>
                    {/* <button type="reset" className="margin-login-setting col-lg-6 col-sm-7 btn btn-warning" onClick={Resethandler}>Reset</button> */}
                </form>
                <div className="mt-4 mb-4 row col-lg-6 col-sm-10 login-mid-image d-flex align-items-center justify-content-center text-center">
                    <img src="./images/loginimage.png" alt="_loginImage" />
                    <NavLink to='/registration' className='login-mid-nav'>
                        <span>Are you a new user?</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;