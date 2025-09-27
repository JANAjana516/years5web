// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Programs from './Programs';
import Profiles from './Profiles';
import Subjects from './Subjects';
import Classrooms from './Classrooms';
import CreatClass from './CreatClass';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Contact from './Contact';
import About from './About';
import AddSubject from './AddSubject';
import CreatProfile from './CreatProfile1';
import CreatProfile2 from './CreatProfile2';
import CreatProfile3 from './CreatProfile3';


function App() {
  return (
    <div className="App">
    <Routes>
   
      <Route path='/' element={<Home />}></Route>
      <Route path='/programs' element={<Programs />}></Route>
      <Route path='/profiles' element={<Profiles />}></Route>
      <Route path='/subjects' element={<Subjects />}></Route>
      <Route path='/classrooms' element={<Classrooms />}></Route>
      <Route path='/creatclass' element={<CreatClass />}></Route>
      <Route path='/first' element={<First />}></Route>
      <Route path='/second' element={<Second />}></Route>
      <Route path='/third' element={<Third />}></Route>
      <Route path='/fourth' element={<Fourth />}></Route>
      <Route path='/fifth' element={<Fifth />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/addsubject' element={<AddSubject />}></Route>
      <Route path='/createprofile1' element={<CreatProfile />}></Route>
      <Route path='/createprofile2' element={<CreatProfile2 />}></Route>
      <Route path='/createprofile3' element={<CreatProfile3 />}></Route>

    </Routes>    
    
   
    </div>
  );
}

export default App;
