
import Layout from "./Layout";
import './foot.css';


import a from "./image/foot.png";
import m from "./image/m.png";
import j from "./image/a.png";
import { Link } from "react-router-dom";
export default function Foot(){
    return(
        <>
    
           <div className="conter gr ">
            <div >
               <img className="imgFoot" src={a} alt="..." />
               {/* <h1  className="col">AUTOTASKER</h1> */}
             </div>
             <div className="grfoot">
                <div>
                    <h3>Home</h3>
                    <div>
                         <Link to='/contact' className='link ' > <span className="col">Contact</span>  </Link>
                    <img className="iconfoot" src={m} alt="..." />
                    <br></br>
                    <div style={{marginTop:'25px'}}>
                      <Link to="/about" className='link '> <span className="col">About Us</span> </Link>
                    <img className="iconfoot" src={j} alt="..." />
                    </div>
                    </div>
                </div>
                <div>
                    <h3>Services</h3>
                      <Link className="link" to='/first'>  <p className="col">Create Program</p>  </Link>
                    <p className="col">Add Profile</p>

                </div>
             </div>
            </div>

         
        </>
    )
}