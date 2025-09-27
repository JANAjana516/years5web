
import Layout from "./Layout";
import './Programs.css';
import j from "./image/j.png";
import a from "./image/5.png";
export default function CreatProfile2(){
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
            <h3 className="p">GREATE PROFILE</h3>
               <div className="br"> </div>


               <div className="profileGRIDE">

                <div>
                  <p className="p">AT-Email</p>
                  <input className="input"  ></input>

                  <p className="p">Password</p>
                  <input className="input"  ></input>

                  <p className="p">Confirm Password</p>
                  <input className="input"  ></input>
                </div>

                <div >
                    <img className="primg" src={j} alt=".."></img>
                </div>


               </div>




               <div className="br" style={{marginTop:'60px'}}> </div>

               <button className="bb" style={{marginRight:'18px'}}>NEXT</button>
                <button className="bb" style={{marginRight:'190px'}}>RESER</button>
                <button className="bb">BACK</button>
                

                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle"></div>

                </div>
          
                      


             </div>


         </Layout>
        </>
    )
}