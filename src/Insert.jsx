
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Insert=()=>{
    const[input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput((values)=>({...values, [name]:value}))
        console.log(input)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
        let api="http://localhost:3000/student";
        axios.post(api,input).then((res)=>{
            console.log(res);
            alert ("data save")
        })
    }
    return(
        <>
        <img src='/src/profile.png' width="150px" height="150px"/>
        <h1>Insert Data</h1>
        <Form style={{width:"65%",height:"500px"}} >
      <Form.Group  className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Enter rollno </Form.Label>
        
          <Form.Control  className="form" type="text"  name="rollno" value={input.rollno} onChange={handleInput}/>
       </Form.Group>

       <Form.Group  className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Enter name </Form.Label>
        
          <Form.Control  type="text"  name="name" value={input.name} onChange={handleInput}/>
       </Form.Group>
      
       <Form.Group  className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Enter City </Form.Label>
        
          <Form.Control type="text"  name="city" value={input.city} onChange={handleInput}/>
       </Form.Group>
       <Form.Group  className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Enter fees </Form.Label>
        
          <Form.Control type="text"  name="fees" value={input.fees} onChange={handleInput}/>
       </Form.Group>
       <Button variant=" rgb(21, 6, 21)"  onClick={handleSubmit}>submit</Button>
    </Form>
    
        </>
    )
    }
    export default Insert;