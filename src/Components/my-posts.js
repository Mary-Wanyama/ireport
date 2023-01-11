import React from "react"; 
import HomeCard from "./home-card";

function MyPosts() {
        const urlPath = "https://arcane-lake-46873.herokuapp.com/students"
const url = urlPath + `/:id`
const [data, setData] = useState([])
const [report, setReport] = useState([])
    useEffect(()=>{
        fetch(urlPath)
        .then(res=>res.json())
        .then(json =>{
            setData(json)
        })
    }, [])
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json =>{
            setReport(json)
        })
    }, []) 
    return(
        <fragment>
            <h3>My Posts</h3>
            <form>
            <input type='text' /> 
            <input type="submit"/>
            </form>
            <HomeCard data={data} report={report}/>
        </fragment>
    )
}
 export default MyPosts