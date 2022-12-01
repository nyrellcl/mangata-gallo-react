import React from 'react'
import "./Form-Sass/Form.css"
import {Button} from "../../Button"

function Form() {
    return (
        <section className='form-section'>
            <div className='subscribe-heading'>
                <h4>Subscribe to our newsletter</h4>
            </div>
            <form action='GET' className='form-container'>
                <label htmlFor="subscribe">E-mail</label>
                <input type="email" id='subscribe' name='subscribe' placeholder='Enter your email...'></input>
                <Button buttonStyle='btn-tertiary' buttonSize='btn-submit' type='submit'>Submit</Button>
            </form>
        </section>
    )
}

export default Form