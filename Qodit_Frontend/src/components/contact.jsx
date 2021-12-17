import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('') 
  const handleChange = (e) => {
    const { name, value } = e.target
    if(name === 'name') setName(value)
      else if(name === 'email') setEmail(value)
        else setMessage(value)
  }
  const data = {name, email, message}
  const handleSubmit = async (e) => {
    e.preventDefault()
    const API = 'https://qoditdev.herokuapp.com';
    const res = await axios.post(`${API}/contactus/`, data).then(res=> res.data === 'Email sent successfully' ? toast.success('Email sent successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }  ):null );
  }
  const whiteText = {
    color:'white'
  }
  return (
    <div>
      <div id='contact_us'>
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2 style={whiteText}>Get In Touch</h2>
                <p style={whiteText}>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' action="mailto:sales@therapidhire.com" validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control contactFormStyle'
                    rows='4'
                    placeholder='Message'
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
           <div className='col-md-4 justify-content-center contact-info'>
          <img src="./img/Contact_us.png" width='100%' alt="" />
          </div>
        </div>
      </div> 
    </div>
  )
}
