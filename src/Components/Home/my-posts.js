import React from "react"; 
import HomeCard from "./home-card";
import Avatar from "./avatar";

function MyPosts() {
//         const urlPath = "https://arcane-lake-46873.herokuapp.com/students"
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
const datas = [{
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
 },
 {
    id: 4,
    image_url: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=",
    title: "Lorem",
    message: "Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non", 
    report_status: true
 },
 {
    id: 5,
    image_url: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=",
    title: "ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non", 
    report_status: true
 },
 {
    id: 6,
    image_url: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=",
    title: "amet",
    message: "Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non", 
    report_status: true
 }] 
 
 const reports = [
    {
        id: 3,
        image_url: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M=",
        title: "amet",
        message: "Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam non lorem, sed diam nonlorem, sed diam non lorem, sed diam non lorem, sed diam nonlorem, sed diam nonlorem, sed diam non", 
        report_status: true
    }
 ]
    return(
        <fragment>
            <div className="post-div">
            <h3>My Posts</h3> 
            <Avatar />
            </div>
            
            <form className="post-div2">
            <input type='text' placeholder="filter"/> 
            <input type="submit"/>
            </form>
            <HomeCard data={datas} report={reports}/>
        </fragment>
    )
}
 export default MyPosts