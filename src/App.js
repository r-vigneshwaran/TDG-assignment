
import './App.css';
import {useState} from 'react'
import DynamicForm from './Components/DynamicForm/DynamicForm'

const App=()=> {
  const [data,setData]=useState()
  console.log((/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test('vikivarun7@gmail.com'))
  return (
    <div className="App">
      <DynamicForm
      title="register"
      setData={setData}
      model={[
        {key:"name",label:"name",type:"text"},
        {key:"age",label:"age",type:"number"},
        {key:"email",label:"email",type:"email",pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/},
        {key:"phoneNo",label:"phone no",type:"number"},
        {key:"password",label:"password",type:"password" },
        {key:"gender",label:"Gender",type:"radio",value:["male","female","others"]},
        {key:"skills",label:"skills",type:"checkbox",value:["html","css","react","javascript"]},
        {key:"country",label:"country",type:"text",list:'country',value:["india","usa","china","japan"],link:'city'},
        {key:"city",label:"city",type:"text",list:'city',value:{
          "india":["chennai","mumbai","delhi","bangalore"],
          "china":["Shanghai","Beijing","Hong Kong"],
          "japan" : ["Tokyo","Osaka","Yokohama"],
          "usa":["New York","Los Angeles","Chicago","Oklahoma","Denver"]
          }
        },
      ]}
      />
      <h2 style={{marginTop:20}}>
      {JSON.stringify(data)}
      </h2>
    </div>
  );
}

export default App;
