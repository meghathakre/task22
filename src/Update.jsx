import { useState,useEffect } from "react";
import axios from "axios";
import edtimg from "/public/edit.png";
import delimg from "/public/delete.png";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const Update =()=>{
    const[mydata,setMydata]=useState([]);
    const myNav = useNavigate();

    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const myDel=(myid)=>{
        let api=`http://localhost:3000/student/${myid}`;
        axios.delete(api).then((res)=>{
            alert("record deleted");
            loadData();
    })
}
const myedit=(myid)=>{
    myNav(`/myedit/${myid}`)
}
const ans =mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
            
            <td>
            <a href="#">
                <img src={edtimg} width="30" height="30"   onClick={()=>{myedit(key.id)}}/>
                </a>
                <a href="#">
                    <img src={delimg} width="30" height="30" onClick={()=>{myDel(key.id)}}/>
                </a>
                
            </td>
        </tr>
        </>
    )
})
    return(
        <>
        <h1>Update Data</h1>
        


<Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th> Name</th>
          <th>City</th>
          <th>Fees</th>
          <th>Delete/Edit</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>





        </>
    );
}
    export default Update;