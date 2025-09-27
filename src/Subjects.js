
import Layout from "./Layout";
import './Programs.css';
import p from "./image/15.png";
import a from "./image/8.png";
export default function Subjects(){
    return(
        <>
         <Layout>
           <div className="home">
               <h1 className="h1">All Of Subjects</h1> 
               <h2 className="h2"
                style={{
                  transform:'translateX(30px)'
               }}>In Ordered Structure</h2>
            </div>
          

            <div className='image'>
              <img className='centerSubjects' src={a} alt='image1'/>
            </div>


            <div className="part1">
               <h3 className="p">EXPLORE SUBJECTS</h3>
               <div className="br"> </div>
               <div className="contain">
               <label htmlFor="name">Enter The Subject</label>
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
               }}>The Latest Subjects</p>


              <h3 style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
               }}>YEAR 1</h3>



               <div className="continerprograms">
                    <div className="nameProfiles">
                        <img src={p} alt='image1' style={{
                           width:'100px',
                           height:'100px',
                           transform:'translateY(-20px)',
                           marginLeft:'-30px'
                         }}/>
                          <div style={{
                            height:'40px'
                          }}>

                          </div>
                         <div
                          style={{
                            width:'130px',
                            height:'30px',
                            border:'1px solid black',
                            borderRadius:'5px',
                            backgroundColor:'white',
                            transform:'translate(50px)',
                            color:'#5063DC',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontWeight:'bold',
                            marginTop:'-30px'
                          
                        
                         }}>
                             <span>Bioinformatic</span>

                         </div>
                    </div>

               </div>

            </div>
         </Layout>
        </>
    )
}