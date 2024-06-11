import React, { useEffect } from 'react'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Edit = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [name,setName]=useState("")
  const [dis,setDis]=useState("")
  let data = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
  const [record,setRecord] = useState(data)
const editdata = location.state
  useEffect(()=>{
    if(location?.state?.id === null || location?.state?.id == undefined){
      navigate('/view')
    }
    if(editdata)
      {
        setName(editdata.name)
        setDis(editdata.dis)
      }
  },[editdata])

  const handleSubmit =(e)=>{
    e.preventDefault()

    let obj = record.map((val)=>{
      if(val.id === location.state.id){
        val.name = name,
        val.dis = dis
      }
      return val
    })

    localStorage.setItem("user",JSON.stringify(obj))
    setRecord(obj)
    setName("")
    setDis("")
  }

  return (
    <div className='container'>
      <div className='row'>
        <div>
          <Link to={'/view'}>
           <button className="btn btn-primary">View</button>
          </Link>
        </div>
        <div className='col-6 mt-5'>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Course Name</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e)=> setName(e.target.value)} value={name}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Discription</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e)=> setDis(e.target.value)} value={dis}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit