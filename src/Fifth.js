
import Layout from "./Layout";
import './Programs.css';


import a from "./image/2.png";

export default function Fifth(){
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
          
               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1.3rem',
                fontWeight:'bolder',
               }}>Second Year Information</p>

       
                <span className="p">Number Of Days</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px' ,marginRight:'50px' }}></input>
                <span className="p">Periods Per Day</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px' }}></input>
           



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>First Division</p>

                <span className="p">Students</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px' ,marginRight:'50px'  }}></input>
                <span className="p">Number Of Categories</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px' }}></input>
               



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Second Division</p>


                <span className="p">Students</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px',marginRight:'50px'  }}></input>
                <span className="p">Number Of Categories</span>
                <input style={{width:'40px' , backgroundColor:'#50DCCA' ,height:'20px'}}></input>

                <div className="br" style={{marginTop:'20px'}}> </div>

               
               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Select The Weekend</p>
             <input className="input" ></input>

                <div className="br" style={{marginTop:'20px'}}> </div>
                <button className="bb" style={{marginRight:'18px'}}>NEXT</button>
                <button className="bb" style={{marginRight:'190px'}}>RESER</button>
                <button className="bb">BACK</button>

                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}} ></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                </div>


 

            </div>
         </Layout>
        </>
    )
}