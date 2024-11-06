import React from 'react'
import Navbar from "../components/Navbar"
import studylogosmaller from '../assets/studylogosmaller.png'


const Signup = () => {
  return (
    <>

    <a><img src={studylogosmaller}/></a>
    
    <Navbar/>
        <form>
        <h1>enter phone number</h1>
        <br /><input type="text" style={{fontSize: "30px" }}/>
        <h1>enter email</h1>
        <br /><input type="text" style={{fontSize: "30px" }}/>
        <h1>enter password</h1>
        <br /><input type="text" style={{fontSize: "30px" }}/>
        <h1>re-enter password</h1>
        <br /><input type="text" style={{fontSize: "30px" }}/>
        </form>
        
        </>
  )
}

export default Signup