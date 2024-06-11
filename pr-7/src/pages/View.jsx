import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const View = () => {
  const navigate = useNavigate()
  const [name,setName]=useState("")
  const [dis,setDis]=useState("")
  let data = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
  const [record,setRecord]=useState(data)
  const [mdelet,setMdelet]=useState("")

  const handleChangedelet = (id,checked)=>{
    let all = [...mdelet]
    if(checked){
      all.push(id)
    }else{
      all = all.filter(val => val != id)
    }
    setMdelet(all)
  }

  const multipleDelet = () =>{
    if(mdelet.length > 0){
        let d = record.filter(val => !mdelet.includes(val.id))
        localStorage.setItem("user",JSON.stringify(d))
        setRecord(d)
    }else{
        alert("minimum one selected ..!")
        return false
    }
  }
 
  return (
    <div className='container'>
      <div className='row'>
        <div>
          <Link to={'/'}>
           <button className="btn btn-primary">Add</button>
          </Link>
        </div>
        <div className='col-12 mt-5'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"><FaBook /></th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col"><button onClick={()=>multipleDelet()}>Delet</button></th>
              </tr>
            </thead>
            <tbody>
              {
                record.map((val)=>{
                  return(
                    <tr>
                      <td><FaBook /></td>
                      <td>{val.name}</td>
                      <td>{val.dis}</td>
                      <td>
                          <button className='border-none' onClick={()=>navigate('/edit',{state : val})}><FaEdit /></button>
                      </td>
                      <td>
                        <input type="checkbox" onChange={(e)=>handleChangedelet(val.id,e.target.checked)}/>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>  
      </div>
    </div>
  )
}

export default View