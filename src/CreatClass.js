
import Layout from "./Layout";
import './Programs.css';
import a from "./image/14.png";
import b from "./image/19.png";
import c from "./image/17.png";
import d from "./image/16.png";
export default function CreatClass(){
    return(
        <>
         <Layout>
           <div className="home">
               <h1 className="h1">Big & Small Classrooms</h1> 
               <h2 className="h2">In One Place</h2>
            </div>

            <div className='image'>
              <img className='classImage' src={a} alt='image1'/>
            </div>
            <div className="part1">
              <h3 className="p">CREATE CLASSROOM</h3>
              <div className="br"> </div>
           
               <h5 className="h5" >Name Of Class</h5>
               <input className="input"  ></input>
               <div>
                 <img className="icon" src={b} alt="icon"></img>
                 <h6 className="span"> How Many Desk Could it Contain ?</h6>
                 <input type="number" className="inputNumber"></input>
               </div>

               <div>
                 <img className="icon" src={c} alt="icon"></img>
                 <h6 className="span"> How Many Student Could it Contain ?</h6>
                 <input type="number" className="inputNumber"></input>
               </div>


               
                <div className="br"> </div>
                <img className="icon" src={d} alt="icon"></img>
               <h6 className="span" style={{
                    fontSize:'1.2rem'
                }}> Location</h6>



               <h5 className="h5" style={{marginBottom:'10px'}}>Full Adress</h5>
               <input className="input"  ></input>




               <button className="button">  CREATE</button>
               <button className="button"> RESET</button>
               


            </div>

           




           
         </Layout>
        </>
    )
}