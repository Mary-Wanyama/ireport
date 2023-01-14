import React, { useEffect, useState } from "react";

import "./test.css"

function Test(){
    const [data, setData] = useState([])
    const [name, setName] =useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [identity, setIdentity] =useState(1)
    const url = "http://localhost:3000/restaurants"
    const urlpath = url + "/" + identity
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json =>{
            setData(json)
            setTitle(json.name)
        })
    }, [])

  
    useEffect(()=>{
        fetch(urlpath)
        .then(res=>res.json())
        .then(json =>{
            setName(json.name)
            setMessage(json.address)
            
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
        //filter
        setData(info=>info.filter(info=>info.name.includes(search)))
      }
    return(
        <div className="division">
            <h3>hello maria</h3>
            <p>am fine man</p>
            <div>
            <input value={search} onChange={handleChange}
        type="text"
        placeholder="Search your Recent Transactions"
      />
            {data.map((blogs)=>( 
                <div key={blogs.id} className='card' onClick={()=>{ setIdentity(blogs.id)}}>
                    <h1>{blogs.id}</h1>
                <h3>{blogs.name}</h3>
                <p>{blogs.address}</p>
                </div>

            ))} 
        </div>
        <div className="yellow">
            new data
            <h2>{name}</h2>
            <h5>{message}</h5>
        </div>
        </div>
    )
}
export default Test