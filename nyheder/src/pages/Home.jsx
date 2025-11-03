import { useState } from "react"
import logo from "../components/assets/Group (1).png"
import AnimatedDetails from "../components/AnimatedDetails"

export default function Home () {

  const [search, setSearch] = useState("");
  
  return (
 
    <>
      <header className="home_header">
      <div className="logo_wrap">
        <img src={logo} alt="Newsify logo" className="logo"/> 
        <h1>Newsify</h1>
        <input type="text" placeholder="Search news"
        value={search} onChange={(e) => setSearch(e.target.value)}
        className="searchbar"/>
      </div>
      
      </header>

      <AnimatedDetails title="Health" name="news">
        <h2>Hello world</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </AnimatedDetails>
      
      <AnimatedDetails title="Sport">
        <h2>Hello world</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </AnimatedDetails>
        
      <AnimatedDetails title="Travel">
        <h2>Hello world</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </AnimatedDetails>  
    
      
      
    </>

  )

}