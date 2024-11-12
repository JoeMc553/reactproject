import './App.css'
import Navbar from "./components/Navbar";
import studylogosmaller from './assets/studylogosmaller.png'
import Signupbutton from "./components/Signupbutton";
import { Button } from "@/components/ui/button"

function App() {
  return (
      <>
      <Button>asdfasd</Button>
    <a><img src={studylogosmaller}/></a>
      <Navbar/>
      <form>
    <h1>enter email</h1>
    <br /><input type="text" style={{fontSize: "30px" }}/>
    <h1>enter password</h1>
    <br /><input type="text" style={{fontSize: "30px" }}/>
    </form>
    
    <Signupbutton />
    
    </>
  )
} 

export default App
