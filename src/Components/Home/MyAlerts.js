import React, {Fragment, useState, useEffect} from "react"; 
import Avatar from "./avatar";

function MyAlerts() {
   const [data, setData] = useState([])
   const [name, setName] =useState('')
   const [image, setImage] = useState('')
   const [message, setMessage] = useState('')
   const [identity, setIdentity] =useState(1)
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

   
 
   useEffect(()=>{
       fetch(urlpath)
       .then(res=>res.json())
       .then(json =>{
           setName(json.title)
           setMessage(json.message)
           setImage(json.image)
           
       })
   }, [ identity ])
   // console.log(data)


   const [lat, setLat] = useState("")
   const [lng, setLng] = useState("")
   function getpost() {
    fetch(urlpath).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
       setLat(resp.lat)
       setLng(resp.lng)
      })
    })
  }




   function handleUpdate()
   {
     let item={lat, lng}
     console.warn("item",item)
     fetch(urlpath, {
       method: 'PUT',
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json'
       },
       body:JSON.stringify(item)
     }).then((result) => {
       result.json().then((resp) => {
         console.warn(resp)
         getpost()
       })
     })
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
     </div>
     <button onClick={handleDelete} className="home-btn">Delete Post</button>
     
     <div className="flex-alerts">
        <div>
            <h3>Latitude</h3>
            <input type="number" value={lat} onChange={(e)=>{setLat(e.target.value)}}/>
        </div>
        <div>
            <h3>longitude</h3>
            <input type="number" value={lng} onChange={(e)=>{setLng(e.target.value)}} />
            <button onClick={handleUpdate} className="home-btn">Update</button>
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
 export default MyAlerts