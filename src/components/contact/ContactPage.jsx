import React from "react";
import { Footer } from "../common/footer";
import { Header } from "../common/Header";
import './contact.css'
import { useState } from "react";

export function ContactPage() {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    const submitForm = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Header />
            <div class="formcontainer">
                <form class="form" onSubmit={submitForm}>
                    <input placeholder="Name" class="formcontent" value={formInput.name} onChange={(e) => setFormInput({...formInput, name: e.target.value})}/>
                    <input placeholder="Email" class="formcontent" value={formInput.email} onChange={(e) => setFormInput({...formInput, email: e.target.value})}/>
                    <textarea placeholder="Message" class="formcontent" value={formInput.message} onChange={(e) => setFormInput({...formInput, message: e.target.value})}/>
                    <button type="submit" class="formcontent" id="subbtn">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}