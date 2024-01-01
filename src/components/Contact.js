import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact() {
    const[userInfo, setUserInfo] = useState({
        email:"",
        msg:""
    });

    function submitInfo(){
        console.log(userInfo);
    }
return (
<div> 
<Form className=' pb-5' style={{marginLeft:"10rem" , marginTop:"5rem"}}>
       <h1 className='mb-5'>Contact Us</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Email address</Form.Label>
        <Form.Control required value={userInfo.email} onChange={(e => setUserInfo({...userInfo, email: e.target.value}))} type="email" placeholder="name@example.com" style={{ width: '50rem' }} rows={4} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control required value={userInfo.msg} onChange={(e) => setUserInfo({...setUserInfo, msg: e.target.value}) } as="textarea" style={{ width: '50rem' }} rows={4}  />
      </Form.Group>
      <Button onClick={submitInfo} variant="primary" type="submit" className='mb-5'>
        Submit
      </Button>
    </Form>
</div>
)
}

export default Contact