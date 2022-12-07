import React from 'react'
import "./Form-Sass/Form.css"
import {Button} from "../../Button"
import {useState} from 'react'

function Form() {
    const [email, setEmail] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        setEmail("")
        console.log("Submitted")
    }
    return (
        <section className='form-section'>
            <div className='subscribe-heading'>
                <h4>Subscribe to our newsletter</h4>
            </div>
            <form action='GET' className='form-container' onSubmit={handleSubmit}>
                <label htmlFor="subscribe">E-mail</label>
                <input value={email} type="email" id='subscribe' name='subscribe' placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)}></input>
                <Button disabled={!email} buttonStyle='btn-tertiary' buttonSize='btn-submit' type='submit'>Submit</Button>
            </form>
        </section>
    )
}

export default Form