import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../../SideBar/SideBar";
import "./home.css"

function Home(){
    const [data, setData] = useState([])
    const [name, setName] =useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')
    const [identity, setIdentity] =useState(1)
    const url = "https://reporting-production.up.railway.app/reveals"
    const urlpath = url + "/" + identity
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json =>{
            setData(json.reverse())
            
        })
    }, [])

  
    useEffect(()=>{
        fetch(urlpath)
        .then(res=>res.json())
        .then(json =>{
            setName(json.report_title)
            setMessage(json.report_message)
            setImage(json.report_image)
            
        })
    }, [ identity ])
    // console.log(data)
    console.log(name)

    const [search, setSearch] = useState("") //controll the form

    function handleChange(e){ //should filter what we entered
      setSearch(e.target.value) //update state
      handleSearching(search)
    }
    function handleSearching(search){
        setData(info=>info.filter(info=>info.title.includes(search)))
      }
    return(
        <Fragment>
            <Sidebar/>
            <div className="ml-20">
            <input className="w-96 text-green-800 font-bold" value={search} onChange={handleChange}
        type="text"
        placeholder="filter"
      />
      <div>
      <div className="home-card ml-20">

<div className="home-row"> 
  <div>
  {data.sort((a,b) => a.id < b.id ? 1 : -1).map((reports)=>( 
          
          <div key={reports.id} className='card-home' onClick={()=>{ setIdentity(reports.id)}}>
              <div className='home-div'>
                  <img src={reports.report_image} alt="avatar"/>
              </div>
              <div className="home-content">
                  <h2>{reports.report_title}</h2>
                  <p>{reports.report_message}</p>
              </div>
          </div>

      ))}
  </div>
  </div>
  <div>
  <div className="home-row1">
      <div>
      <div>
          <img src={image} alt="image" className="home-image1" />
      </div>
      <div>
      <h4>{name}</h4>
      <p>{message}</p>
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
    export default Home