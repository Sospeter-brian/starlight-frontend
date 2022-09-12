import React from 'react';
import {Link} from 'react-router-dom'
import './Home.style.css'

//import { FaCat, FaChevronCircleRight, FaCircle, FaDog, FaStethoscope } from "react-icons/fa";

const Home = () =>
{
  // const [ submit, onSubmit ] = useState(e.target.value )
  
  // function onHandleSubmit (e)
  // {
  //   onSubmit((submit)=> submit)
  // }
  return (
    <div className="home-page">
      <div className="home-sec1">
        <h3 id="descr">Give until it pains.</h3>
        <Link to="/about">
          <button className="info-btn">LEARN MORE</button>
        </Link>
      </div>
     </div>
  );
}

export default Home