
import{useState} from "react";
const About=()=>{
// let firstName='Mo';
const [firstName, setFirstName]=useState('Mohamad');
 const[secondName, setSecondName]=useState('King');
const [age, setAge]=useState(28);
 const changeName = ()=>{

    //firstName="ahmad";
     setFirstName('Ahmad');
     setSecondName('ملك');
     setAge(22);

  //  console.log(firstName)
 }
    return( <div className="container">

            <h1>About page</h1>
            <h1>{firstName}</h1>
            <h1>{secondName}</h1>
            <h1>{age}</h1>
            <button onClick={changeName} type="button" className="btn btn-warning">Warning</button>
            {/*// door deze code in dit bestend worden de gegevens vervangen.*/}
    </div>



    );


}
export default About;