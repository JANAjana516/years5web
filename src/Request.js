
import Layout from "./Layout";
import './Request.css';

export default function Request(){
    // const [product,setProduct] =useState([]);
    // const [effectdel,setedl]=useState(0);
    // useEffect(()=>{
    //     fetch('http://127.0.0.1:8000/api/product/show')
    //     .then(res =>res.json())
    //     .then(data =>setProduct(data));
    // },[effectdel]);

    // async function del(i){
    //     try{
    //          const res=await axios.delete(`http://127.0.0.1:8000/api/product/delete/${i}`);
    //     if( res.status===200){
    //       setedl( (j)=> {
    //           return j + 1;
    //       });}
      
    //     }
    //     catch
    //     {
    //       console.log('update');
    //     }
    
    //   }
  
    //   const showUsers = product.map((u,index) =>(
    //       <tr key={index}>    
    //           <td>{index+1}</td> 
    //           <td>{u.name}</td>
    //           <td>{u.price}</td>
    //           <td>{u.category}</td>
    //           <td>{u.imga}</td>
    //           <td>                    
    //                 <i className="fa-solid fa-trash" 
    //                     onClick={()=>del(u.id)}
    //                    style={{color:"palevioletred" ,fontSize:"20px" ,padding:"5px"}}>
  
    //                  </i> 
    //           </td>
  
    //       </tr>  ));
                              
 

        
    return(
        <>
        <Layout>
        <div style={{padding:'20px', fontSize:'15px'}}>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Day</th>
                <th>Time Start</th>
                <th>Time Finish</th>
                </tr>
            </thead>
            <tbody>
                    {/* {showUsers} */}
            </tbody>
        </table>
   
      </div>
      </Layout>
      </>
    )
}