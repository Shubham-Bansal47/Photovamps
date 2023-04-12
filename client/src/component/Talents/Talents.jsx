import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './Talents.css';

function Talents(){
    const [products,setproducts]=useState([]);
    useEffect(() => {
        const fetchdata = async ()=> {
            let recieveddata = await axios.get("/mongodatafetch");
            setproducts(recieveddata.data.data_received);
        }
        fetchdata();
    },[]);
    console.log(products);

    return(
        <div className='tal-outer row'>
            <div className="mt-5 row tal-mid row d-flex align-items-center justify-content-center">
                <div className="tal-inner row align-items-center justify-content-center flex-wrap col-lg-12 col-sm-12">
                    {
                        products && products.map((profile)=>{
                            return(
                                <div className="tal-inner-profile row d-flex flex-column col-lg-5 col-sm-12">
                                    <span>{profile.name}</span>
                                    <span>{profile.email}</span>
                                    <span>{profile.phone}</span>
                                    <span>{profile.skill}</span>
                                    <span className='col-sm-6'>{profile.work}</span>
                                </div>
                            );
                        })
                    } 
                </div>
            </div>
        </div>
    );
};

export default Talents;