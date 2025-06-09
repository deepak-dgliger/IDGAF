import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCalling: React.FC = () => {

    const [userList, setuserList] = useState<any>([]);
    const [memberList, setmemberList] = useState<any>([]);
    
    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            
            let [ userRes,memberRes ] = await Promise.all([
                axios.get('https://jsonplaceholder.typicode.com/todos'),
                axios.get('https://jsonplaceholder.typicode.com/users')
            ])
           
            setuserList(userRes.data);
            setmemberList(userRes.data);
        
            // let resp = await axios.get('https://jsonplaceholder.typicode.com/todos')
            // console.log('response', resp.data);
            // setuserList(resp.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <table  style={{ border: '1px solid red', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {userList && userList?.map((item,key) => (
                        <tr style={{ border: '1px solid red', borderCollapse: 'collapse' }}>
                            <td>{item?.userId}</td>
                            <td>{item?.title}</td>
                            <td>{item?.completed ? 'yes' : 'no'}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default ApiCalling