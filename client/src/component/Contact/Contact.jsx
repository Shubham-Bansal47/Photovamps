import React,{useState,useRef,useEffect} from 'react';
// import emailjs from '@emailjs/browser';
import axios from 'axios';
import './Contact.css';

function Contact(){
    const form=useRef();
    const [products,setproducts]=useState([]);
    const [user,setuser]=useState({
        Name:"",Email:"",Number:"",Message:""
    });
    useEffect(() => {
        const fetchdata = async ()=> {
            let recieveddata = await axios.get("/signin");
            if(recieveddata.data.status===200){
                setproducts(recieveddata.data.data_received);
            }else{
                setproducts([]);
            }
        }
        fetchdata();
    },[]);

    let key,value;
    const clickhandler = (event) =>{
        key=event.target.name;
        value=event.target.value;
        setuser({...user,[key]:value});
    };

    const posthandler = (e) => {
        // e.preventDefault();
        // const {Name, Email, Number, Message}=user;
        // emailjs.sendForm('service_kpbdieg', 'template_drzcgmg', form.current, 'P_XpSHga7WmT8np9K')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      };

    return(
        <div className="contact-outer row d-flex flex-column align-items-center justify-content-center">
            <div className="mt-4 contact-top row d-flex flex-row justify-content-around align-items-center">
                <div className="row margin-setting contact-left col-lg-3 col-sm-7">
                    <div className="contact-top-left">
                        <h5 className='contact-top-heading'>&#9742; Phone Number</h5>
                        <span className='contact-top-heading'>+91{products.phone}</span>
                    </div>
                </div>
                <div className="margin-setting contact-mid col-lg-3 col-sm-7">
                    <div className="contact-top-mid">
                        <h5 className='contact-top-heading'>&#x1F4E7; Email Address</h5>
                        <span className='contact-top-heading'>Hey</span>
                    </div>
                </div>
                <div className="margin-setting contact-right col-lg-3 col-sm-7">
                    <div className="contact-top-right">
                        <h5 className='contact-top-heading'>&#128205; Skill</h5>
                        <span className='contact-top-heading'>Pending</span>
                    </div>
                </div>
            </div>
            <div className="contact-bottom row d-flex flex-column justify-content-around align-items-center col-lg-8 col-sm-12">
                <h2 className='contact-bottom-heading col-lg-12'>&#128222; Get in Touch</h2>
                <form ref={form} action="/" className='contact-form row d-flex flex-column justify-content-around align-items-center col-lg-12'>
                    <div className="row d-flex flex-row justify-content-around align-items-centercol-lg-12 col-sm-12">
                        <input className="margin-setting col-lg-3 col-sm-7" type="text" name="Name" value={user.Name} placeholder='Your Name' onChange={clickhandler}/>
                        <input className="margin-setting col-lg-3 col-sm-7" type="text" name="Email" value={user.Email} placeholder='Your Email' onChange={clickhandler} />
                        <input className="margin-setting col-lg-3 col-sm-7" type="text" name="Number" value={user.Number} placeholder='Your Phone Number' onChange={clickhandler}/>
                    </div>
                    <input className="contact-message col-lg-8 col-sm-8" type="text" name="Message" value={user.Message} placeholder='Type your message here' onChange={clickhandler}/>
                    <button className="mt-4 btn btn-success col-lg-3 col-sm-4" type="button" onClick={posthandler}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;