import {Link} from "react-router-dom"

import Users from "./users" 

const Admin = ()=>{
    return(
        <section>
            <h1>Admins Page</h1>
            <Users/>

            <div>
                <Link to="/admin">admin</Link>
            </div>
        </section>
    )
}

export default Admin