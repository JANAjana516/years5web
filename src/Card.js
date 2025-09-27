import { Link } from 'react-router-dom';
import './Card.css';
import a from "./image/1.png";
import b from "./image/2.png";
import c from "./image/3.png";
import d from "./image/4.png";
import f from "./image/6.png";
export default function Card(){
    return(
        <>
           <div className="home">
	            <h1 className="h1">WELCOME TO AUTOTASKER </h1>
                <h1 className="h2">LET`S START</h1>
                
            </div>

            <div className='image'>
              <img className='center' src={a} alt='image1'/>
            </div>
            

         <div className='container'>
            <div className='card'>
                <figure>
                    <img src={f} alt='image1'/>
                </figure>
                <h2 className='first'>CLASSROOMS</h2>
                <Link  className='link' to='/classrooms'><h4>Explore The Available Classrooms</h4></Link>
                <Link className='link' to='/creatclass'><h4>Add A New Classrooms</h4></Link>
                {/* <Link className='link'><h4>Edit The Info Of Classrooms</h4></Link> */}
            </div>

            <div className='card'>
                <figure>
                    <img src={b} alt='image1'/>
                </figure>
                <h2 className='first'>PROGRAMS</h2>
                <Link className='link' to='/programs'><h4>Explore The Examples Of Programs</h4></Link>
                <Link className='link'  to='/first'><h4>Create A New Program</h4></Link>
                {/* <Link className='link'><h4>Edit An Existent Program</h4></Link> */}
            </div>


            <div className='card'>
                <figure>
                    <img className='photo' src={c} alt='image1'/>
                </figure>
                <h2 className='first'>Profiles</h2>
               <Link className='link' to='/profiles'><h4>Search For A Profile</h4></Link> 
               <Link className='link'><h4>Create A New Profile</h4></Link> 
               {/* <Link className='link'><h4>Edit An Existent Profile</h4></Link>   */}
            </div>


            <div className='card '>
                <figure>
                    <img src={d} alt='image1'/>
                </figure>
                <h2 className='first'>Subjects</h2>
                <Link className='link' to='/subjects'><h4>Search For A Subject</h4></Link>
                <Link className='link ' to='/addsubject'><h4>Add A New Subjects</h4></Link>
                
                {/* <Link className='link'><h4>Edit An Existent Subject</h4></Link> */}
            </div>


         </div>
         
        </>
    )
}