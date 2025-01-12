import { useParams } from "react-router-dom";
import axios from "axios";
import { useState ,useEffect} from "react";

const EditData=()=>{



    const {id}=useParams();
    const[mydata, setMydata]=useState({});
    const loadData=()=>{
        let api=`http://localhost:3000/student/${id}`
        axios.get(api).then((res)=>{
            setMydata(res.data)
        });
    }
    useEffect(()=>{
        loadData();
    },[])


    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}));
    }
    const handleSubmit=()=>{
        let api=`http://localhost:3000/student/${id}`
        console.log(mydata);
        axios.put(api,mydata).then((res)=>{
            alert("data updated")
        })
    }
    return(
       <>
       <h1>Edit Student Data</h1>
       &nbsp;&nbsp;  <label className="label">Enter Rollno : </label> <input   type="text" name="rollno" value={mydata.rollno} onChange={handleInput} className="input" />
       <br /><br />
       &nbsp;&nbsp; &nbsp;&nbsp;<label className="label">Enter Name : </label>  < input type="text" name="name" value={mydata.name} onChange={handleInput} className="input"/>
       <br /><br />
       &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<label className="label">Enter City : </label>  <input type="text" name="city" value={mydata.city} onChange={handleInput} className="input"/>
       <br /><br />
       &nbsp;&nbsp; &nbsp;&nbsp; <label className="label">Enter Fees : </label> <input type="text" name="fees" value={mydata.fees} onChange={handleInput} className="input"/>
       <br /><br />
       <button className="btn" bgcolor="primary" onClick={handleSubmit}>Data Save</button>
       </>
    )
}
export default EditData;