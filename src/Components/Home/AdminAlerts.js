import React, {Fragment, useState, useEffect, useRef} from "react"; 
import Avatar from "./avatar";
import emailjs from "@emailjs/browser"

function AdminAlerts() {
   const [data, setData] = useState([])
   const [name, setName] =useState('')
   const [image, setImage] = useState('')
   const [message, setMessage] = useState('')
   const [change, setChange] = useState('')
   const [identity, setIdentity] =useState(1)
   const [email, setEmail] = useState()
//    const [address, setAddress] = useState([
//     lat, 
//     lon
//    ])

 
   const url = "https://reporting-production.up.railway.app/alerts"
   const urlpath = url + "/" + identity
   useEffect(()=>{
       fetch(url)
       .then(res=>res.json())
       .then(json =>{
           setData(json)
           
       })
   }, [])

   const form = useRef();

   const sendEmail = () => {
    
  
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
      
  };
 
const [status, setStatus] = useState('')

   useEffect(()=>{
       fetch(urlpath)
       .then(res=>res.json())
       .then(json =>{
           setName(json.title)
           setMessage(json.message)
           setImage(json.image)
           setStatus(json.status)
           setEmail(json.email)
       })
   }, [ identity ])
   // console.log(data)

   
   function handleUpdate(e){
    e.preventDefault();
    fetch(urlpath, {
      method: 'PATCH',
      headers: { "content-type": "application/json" 
                
    },
      body: JSON.stringify({
        status: change 
      })
      .then(res => {
        console.log(res)
      })
    })
    sendEmail()
    e.reset()
  }

   const [search, setSearch] = useState("") //controll the form

   function handleChange(e){ //should filter what we entered
     setSearch(e.target.value) //update state
     handleSearching(search)
   }
   function handleSearching(search){
       setData(info=>info.filter(info=>info.title.includes(search)))
     }
     function handleDelete(id) {
      setData(data.filter(dat=> id !== dat.id))
    }
   return(
       <Fragment>
            <div className="post-div">
            <h3>My Posts</h3> 
            <Avatar />
            </div>
           <div>
            <div className="post-div2">
            <input value={search} onChange={handleChange}
             type="text"
             placeholder="filter"
              />
            </div>

    
     <div>
     <div className="home-card">

<div className="home-row"> 
 <div>
 {data.map((reports)=>( 
         
         <div key={reports.id} className='card-home' onClick={()=>{ setIdentity(reports.id)}}>
             <div className='home-div'>
                 <img src={reports.image} alt="avatar"/>
             </div>
             <div className="home-content">
                 <h2>{reports.title}</h2>
                 <p>{reports.message}</p>
                 <button onClick={(e)=>{
                  e.stopPropagation()
                  handleDelete(reports.id)
                 }} className="home-btn">Delete</button>
             </div>
         </div>

     ))}
 </div>
 </div>
 <div>
 <div className="home-row1">
     <div className="alert-display">
     <div>
         <img src={image} alt="image" className="home-image1" />
     </div>
     <div>
     <h4>{name}</h4>
     <p>{message}</p>
     <em>{status}</em>
     </div>
     <button onClick={handleDelete} className="home-btn">Delete Post</button>
     
     <div className="alerts">
        <div>
            <h3>Status</h3>

            <input type="email" name="user_email" id='email' onchange={setEmail} value={email}/>
            <textarea name="message" id='title' value="The status update is successful"/>
            <input type="text" onBlur={(e)=>{setChange(e.target.value)}} />
            <button ref={form} id="emailform"  onClick={handleUpdate} className="home-btn">Update</button>


          </div>
     </div>
     </div>


 </div>
 </div>


</div>
     </div>



       </div>
       



       </Fragment>
   )
}
 export default AdminAlerts