
import Layout from "./Layout";
import './Programs.css';
import j from "./image/j.png";
import a from "./image/5.png";
export default function CreatProfile3(){
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
                    <h2 className="h22" > All Of Entries Had Completed!</h2>

                <button className="bb" style={{marginRight:'18px'}}>FINISH</button>
                <button className="bb" style={{marginRight:'190px'}}>BACK</button>
                </div>

                <div >
                    <img className="primg" src={j} alt=".."></img>
                </div>


               </div>




               <div className="br" style={{marginTop:'60px',marginBottom:'70px'}}> </div>


                
                

                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>

                </div>
          
                      


             </div>
         </Layout>
        </>
    )
}