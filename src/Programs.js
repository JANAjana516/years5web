
import Layout from "./Layout";
import './Programs.css';
import p from "./image/p.jpg";

import a from "./image/2.png";

export default function Programs(){
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
               <h3 className="p">EXPLORE PREVIOUS PROGRAMS</h3>
               <div className="br"> </div>
               <div className="contain">
               <label htmlFor="name">Enter The Academic Year</label>
               {/* <input className="input"  ></input> */}
               </div>
               <div className="search">
                <p style={{
                    marginLeft:'15px'
                }}>Search</p>
               </div>

               
               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1.2rem',
                fontWeight:'bolder',
               }}>Explore The Latest Programs</p>

               <h3 style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
               }}>YEAR 1</h3>

               <div className="continerprograms">
                 <div>
                   <img src={p} alt='image1' style={{
                    width:'300px',
                    height:'200px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
        
                   }}
                   >2018/2019</p>
                 </div>

                 <div>
                   <img src={p} alt='image1' style={{
                    width:'300px',
                    height:'200px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
        
                   }}
                   >2018/2019</p>
                 </div>



                 <div>
                   <img src={p} alt='image1' style={{
                    width:'300px',
                    height:'200px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
        
                   }}
                   >2018/2019</p>
                 </div>



                 <div>
                   <img src={p} alt='image1' style={{
                    width:'300px',
                    height:'200px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
        
                   }}
                   >2018/2019</p>
                 </div>



                 <div>
                   <img src={p} alt='image1' style={{
                    width:'300px',
                    height:'200px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
        
                   }}
                   >2018/2019</p>
                 </div>



                 <div>
                   <img src={p} alt='image1' style={{
                    width:'300px',
                    height:'200px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
        
                   }}
                   >2018/2019</p>
                 </div>
               </div>

            </div>
         </Layout>
        </>
    )
}