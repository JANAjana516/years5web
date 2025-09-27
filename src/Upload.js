
import Layout from "./Layout";
import './Programs.css';


import a from "./image/2.png";
import f from "./image/true.png";
import u from "./image/u.png";


export default function Upload(){
    return(
        <>
         <Layout>
           <div className="home">
               <h1 className="h1">For Organized & Well-Ordered</h1> 
               <h2 className="h2">Program</h2>
            </div>

            <div className='image'>
              <img className="programImage" src={a} alt='image1'/>
            </div>


            <div className="part1">
               <h3 className="p">GREATE A NEW PROGRAM</h3>
               <div className="br"> </div>


               
                   <h2 style={{marginTop:'30px',
                    marginLeft:'20px',

                   }} className="h1">The Creation Process Completed Successfully        
                   <img style={{marginLeft:'25px',

                   }} className="icon" src={f} alt='image1'/></h2> 

                 <button className="bb" style={{marginRight:'50px',marginLeft:'20px' ,marginTop:'-20px'}}>Upload </button>
                <img className="icon"  src={u} alt='image1' ></img>
                 
           </div>


          
         </Layout>
        </>
    )
}