
import Layout from "./Layout";
import './Programs.css';
import p from "./image/6.png";
import a from "./image/14.png";
export default function Classrooms(){
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
               <h3 className="p">EXPLORE CLASSROOMS</h3>
               <div className="br"> </div>
               <div className="contain">
               <label htmlFor="name">Enter The Classroom</label>
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
               }}>The Latest Classrooms</p>



               <div className="continerprograms">
                    <div className="nameProfiles">
                        <img src={p} alt='image1' style={{
                           width:'90px',
                           height:'90px',
                           transform:'translateY(-20px)',
                           marginLeft:'-20px'
                         }}/>
                          <div style={{
                            height:'40px',
                            marginTop:'-30px'
                          }}>

                          </div>
                         <div
                          style={{
                            width:'130px',
                            height:'30px',
                            border:'1px solid black',
                            borderRadius:'5px',
                            backgroundColor:'white',
                            color:'#5063DC',
                            transform:'translate(60px)',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontWeight:'bold'
                        
                         }}>
                             <span>Classroom 7</span>

                         </div>
                    </div>

               </div>

            </div>
         </Layout>
        </>
    )
}