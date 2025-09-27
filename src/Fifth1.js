
import Layout from "./Layout";
import Loading from "./Loading";
import './Programs.css';


import a from "./image/2.png";

export default function Fifth1(){
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


               <div className="fifth1">
                   <h1 className="h1 f1">Wait,</h1> 
                   <h2 className="h2 f2">The Program Creating</h2>
               </div>

               {/* <img className="fImage" src={f} alt='image1'/> */}
               <Loading/>
          



           </div>


          
         </Layout>
        </>
    )
}