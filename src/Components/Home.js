import React, { Fragment, useState } from "react";
import HomeCard from "./home-card";

function Home() {
//     const urlPath = "https://arcane-lake-46873.herokuapp.com/students"
// const url = urlPath + `/:id`
// const [data, setData] = useState([])
// const [report, setReport] = useState([])
//     useEffect(()=>{
//         fetch(urlPath)
//         .then(res=>res.json())
//         .then(json =>{
//             setData(json)
//         })
//     }, [])
    
//     useEffect(()=>{
//         fetch(url)
//         .then(res=>res.json())
//         .then(json =>{
//             setReport(json)
//         })
//     }, []) 
const data = [{
    id: 1,
    image_url: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=",
    title: "Lorem",
    message: "Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non", 
    report_status: true
 },
 {
    id: 2,
    image_url: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=",
    title: "ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non", 
    report_status: true
 },
 {
    id: 3,
    image_url: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=",
    title: "amet",
    message: "Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non", 
    report_status: true
 }] 
 
 const report = [
    {
        id: 3,
        image_url: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=",
        title: "amet",
        message: "Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non", 
        report_status: true
    }
 ]
    return(
        <Fragment>
            <div>
            <select>
            <option>All incidences</option>
            <option>investigated</option> 
            <option>awaiting investigation</option>
            <option>investigating</option>
        </select>
        <input placeholder="Search"/> 
            </div>
            <div>
                <HomeCard data={data} report={report}/>
            </div>



        </Fragment>
    )}
    export default Home