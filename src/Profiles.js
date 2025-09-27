
import Layout from "./Layout";
import './Programs.css';
import p from "./image/7.png";
import a from "./image/5.png";
export default function Profiles(){
    return(
        <>
         <Layout>
           <div className="home">
               <h1 className="h1">Professors & Assistants</h1> 
               <h2 className="h2"
                   style={{
                    transform:'translateX(40px)'
                 }}
               >All Is Here</h2>
            </div>

            <div className='image'>
              <img className='center' src={a} alt='image1'/>
            </div>

            <div className="part1">
               <h3 className="p">EXPLORE PROFILES</h3>
               <div className="br"> </div>
               <div className="contain">
               <label htmlFor="name">Enter The Full Name</label>
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
               }}>The Latest Profiles</p>



               <div className="continerprograms">
                    <div className="nameProfiles">
                        <img src={p} alt='image1' style={{
                           width:'100px',
                           height:'100px',
                           transform:'translateY(-30px)',
                           marginLeft:'-30px'
                         }}/>
                          <div style={{
                            height:'40px',
                            marginTop:'-40px'

                          }}>

                          </div>
                         <div
                          style={{
                            width:'130px',
                            height:'30px',
                            border:'1px solid black',
                            borderRadius:'5px',
                            backgroundColor:'white',
                            transform:'translate(60px)',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontWeight:'bold',
                            color:'#5063DC',
                        
                         }}>
                             <span>jana aldaboos</span>

                         </div>
                    </div>

                    <div className="nameProfiles">
                        <img src={p} alt='image1' style={{
                           width:'100px',
                           height:'100px',
                           transform:'translateY(-30px)',
                           marginLeft:'-30px'
                         }}/>
                          <div style={{
                            height:'40px',
                            marginTop:'-40px'

                          }}>

                          </div>
                         <div
                          style={{
                            width:'130px',
                            height:'30px',
                            border:'1px solid black',
                            borderRadius:'5px',
                            backgroundColor:'white',
                            transform:'translate(60px)',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontWeight:'bold',
                            color:'#5063DC',
                        
                         }}>
                             <span>jana aldaboos</span>

                         </div>
                    </div>


                    <div className="nameProfiles">
                        <img src={p} alt='image1' style={{
                           width:'100px',
                           height:'100px',
                           transform:'translateY(-30px)',
                           marginLeft:'-30px'
                         }}/>
                          <div style={{
                            height:'40px',
                            marginTop:'-40px'

                          }}>

                          </div>
                         <div
                          style={{
                            width:'130px',
                            height:'30px',
                            border:'1px solid black',
                            borderRadius:'5px',
                            backgroundColor:'white',
                            transform:'translate(60px)',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontWeight:'bold',
                            color:'#5063DC',
                        
                         }}>
                             <span>jana aldaboos</span>

                         </div>
                    </div>


                    <div className="nameProfiles">
                        <img src={p} alt='image1' style={{
                           width:'100px',
                           height:'100px',
                           transform:'translateY(-30px)',
                           marginLeft:'-30px'
                         }}/>
                          <div style={{
                            height:'40px',
                            marginTop:'-40px'

                          }}>

                          </div>
                         <div
                          style={{
                            width:'130px',
                            height:'30px',
                            border:'1px solid black',
                            borderRadius:'5px',
                            backgroundColor:'white',
                            transform:'translate(60px)',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontWeight:'bold',
                            color:'#5063DC',
                        
                         }}>
                             <span>jana aldaboos</span>

                         </div>
                    </div>


                    <div className="nameProfiles">
                        <img src={p} alt='image1' style={{
                           width:'100px',
                           height:'100px',
                           transform:'translateY(-30px)',
                           marginLeft:'-30px'
                         }}/>
                          <div style={{
                            height:'40px',
                            marginTop:'-40px'

                          }}>

                          </div>
                         <div
                          style={{
                            width:'130px',
                            height:'30px',
                            border:'1px solid black',
                            borderRadius:'5px',
                            backgroundColor:'white',
                            transform:'translate(60px)',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontWeight:'bold',
                            color:'#5063DC',
                        
                         }}>
                             <span>jana aldaboos</span>

                         </div>
                    </div>


                    <div className="nameProfiles">
                        <img src={p} alt='image1' style={{
                           width:'100px',
                           height:'100px',
                           transform:'translateY(-30px)',
                           marginLeft:'-30px'
                         }}/>
                          <div style={{
                            height:'40px',
                            marginTop:'-40px'

                          }}>

                          </div>
                         <div
                          style={{
                            width:'130px',
                            height:'30px',
                            border:'1px solid black',
                            borderRadius:'5px',
                            backgroundColor:'white',
                            transform:'translate(60px)',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontWeight:'bold',
                            color:'#5063DC',
                        
                         }}>
                             <span>jana aldaboos</span>

                         </div>
                    </div>

               </div>

            </div>
         </Layout>
        </>
    )
}