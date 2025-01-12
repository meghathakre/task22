import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


const Search=()=>{
    const [rollno,setRollno]=useState("");
    const [mydata,setMydata]=useState([]);
    const mySearch=()=>{
        let api=`http://localhost:3000/student/?rollno=${rollno}`
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        });
    }
    const ans=mydata.map((key)=>{

   
    return(
        <>
        <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
        </tr>
       </>
    )    
})
    return(
        <>
        <h1>Search Data</h1>
           Enter rollno:<input type="text" value={rollno}onChange={(e)=>{setRollno(e.target.value)}}/>
        <button className="btn1" onClick={mySearch}>search</button>
        <hr />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th> Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>
        </>
    )
    }
    export default Search;