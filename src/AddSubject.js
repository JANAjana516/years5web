
import Layout from "./Layout";
import './Programs.css';


import a from "./image/8.png";

export default function AddSubject(){
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
               <h3 className="p">GREATE SUBJECT</h3>
               <div className="br"> </div>

             <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Full Name</p>
               <input className="input"></input>



                <span className="p">Year</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px' ,marginRight:'50px'  }}></input>
                <span className="p">Semester</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px' }}></input>
               



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Professor</p>
               <input className="input"></input>


               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Assistant</p>
               <input className="input"></input>


               
                <span className="p">HoursPerDay</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px'}}></input>

                <div className="br" style={{marginTop:'20px'}}> </div>
                
                <button className="bb" style={{marginRight:'30px'}}>NEXT</button>
                <button className="bb" >RESER</button>
                



            </div>
         </Layout>
        </>
    )
}