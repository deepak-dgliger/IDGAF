import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../AppConstant';

const JsonServer:React.FC=()=>{


  const [ userData , setUserData ] = useState<any>([]);

  useEffect(()=>{
    getData()
  },[])

  const getData=async ()=>{
    try{
      console.log('data',API_BASE_URL);
      
    let response = await axios.get(`${API_BASE_URL}/Cheeku`);
    console.log('response',response?.data);
    setUserData(response?.data)
    }catch(err){
      console.log(err.message);
    }
  }


  const action=(type,item)=>{
    type == "delete" && deleteUser(item);
    type == "edit" && editUser(item);
  }

  const deleteUser = async (item) => {
    try {
        await axios.delete(`http://localhost:5000/Cheeku/${item?.id}`);
        getData()
    } catch (err) {
      console.log(err.message);
    }
  }

  
  const editUser = async (item) => {
    let payload={
      "name": "Poppo", "email": "Poppo@gmail.com" 
    }
    try {
      let response = await axios.put(`http://localhost:5000/Cheeku/${item?.id}`,payload);
      getData()
    } catch (err) {
      console.log(err.message);
    }
  }


  return (
    <>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {userData && userData?.map((item,key)=>(
        <tr key={key}>
          <td>{item?.name}</td>
          <td>{item?.email}</td>
          <td onClick={()=>action('edit',item)}>Edit</td>
          <td onClick={()=>action('delete',item)}>Delete</td>
        </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default JsonServer;