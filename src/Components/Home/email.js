import React, { Fragment, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

 
export const Email = () => {
 const form = useRef();
 const [ids, setIds] = useState(1)
 const url = "https://reporting-production.up.railway.app/users"
 const urlpath = url + "/" + ids
 const [email, setEmail] = useState('')
 const [data, setData] = useState([])

 useEffect(()=>{
     fetch(url)
     .then(res=>res.json())
     .then(json =>{
         setData(json.reports)
         
     })
 }, [])

 useEffect(()=>{
    fetch(urlpath)
    .then(res=>res.json())
    .then(json =>{
        setEmail(json.email)
        console.log(json.id)
    })
}, [ids])

 const sendEmail = (e) => {
   e.preventDefault();
 
   emailjs.sendForm(process.env.REACT_APP_EMAIL_KEY_ID,
     process.env.REACT_APP_TEMPLATE_ID,
     form.current,
     process.env.REACT_APP_USER_ID)
     .then((result) => {
         console.log(result.text);
         alert("message sent successfully")
     }, (error) => {
         console.log(error.text);
     });
     e.reset()
 };
 
 return (
   <Fragment>
    <div  className="emailus"> 
<div>
{data.map((reports)=>( 
         
         <div key={reports.id} className='card-home' onClick={()=>{ setIds(reports.id)}}>
             <div className="home-content">
                 <h2>{reports.email}</h2>
             </div>
         </div>

     ))}
 </div>
    <form ref={form} onSubmit={sendEmail} id="emailform">
     
     <input type="email" name="user_email" id='email' placeholder='email' value={email}/>
     <br/>
     <label>status:</label>
     <select name='message'>
        <option value="rejected" />
        <option value="investigating" />
        <option value="resolved" />
     </select>
     <input type="submit" value="Send" className='submitMessage'/>
   </form>
  
   </div>
   </Fragment>
 
 );
};
 
export default Email