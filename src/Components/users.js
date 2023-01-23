import { useState, useEffect } from "react";

import useAxiosPrivate from "./hooks/userAxiosPrivate";

const Users =()=>{

    const [users, setUsers] = useState('')
    const axiosPrivate = useAxiosPrivate

    useEffect(()=>{
        let isMounted = true
        let controller = new AbortController()

        const getUsers = async ()=> {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                })
                console.log(response.data) 

                isMounted && setUsers(response.data)
            }catch (e) {
                console.error(e)
            }
        }

        getUsers() 

        return () => {
            isMounted = false
            controller.abort()
        }
    }, [])

    return(
        <article>
            {users?.length
            ? (
                <ul>
                    {users.map((user, index) =>
                    <li key={index}>{user?.username}</li>
                    )}
                </ul>
            ): <p>No users to display</p>
            }
        </article>
    )
}
export default Users