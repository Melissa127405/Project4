import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axius from 'axios'


function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    })

     function handleSubmit(event) {
        inputName = event.target.name
        inputValue = event.target.value
        // setFormData ({...formData, [inputName]: inputValue })
     }

return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupusername">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
 }

   
export default Login;