import React,{useState} from 'react'
import './styles.css'
const DynamicForm = ({model,title,setData}) => {
    const [city,setCity]=useState()
    const [form,setForm]=useState([])
    const [flag,setFlag]=useState(false)

    const validate= (regex,text)=> {
        setFlag((regex).test(text));
        console.log(flag)
    }
      
   const HandleOnBlur=(value) =>{
    if(value==="" || form.includes(value) ) return null;
       setForm((prevData)=>{
           return [...prevData,value]
       })
       console.log(form)
   }
   const handleSubmit=(value)=>{
       if(flag){
           setData(value)
       }
   }
    return (
        <div className="dynamic-form">
        <h1 className="center">{title}</h1>
            {model.map((input)=>(
                <div key={input.key} className="form-control">
                    <label htmlFor={input.key} key={input.key} className="label" >
                        {input.label}
                    </label>
                    <div className="input-field">
                        {input.list ? (
                            <div>
                               {Array.isArray(input.value) ? (
                                <div>
                                
                                <input type={input.type} name={input.label} list={input.list} onBlur={(e)=>HandleOnBlur(e.target.value)} onChange={(e)=>setCity(e.target.value)}/>
                                <datalist id={input.list}>
                                
                                    { input.value.map((val)=>(
                                        <option key={val} value={val}/>
                                    ))}
                                </datalist>
                                </div>   
                                )

                               : (
                                <div>
                                
                                <input type={input.type} name={input.label} list="city" onBlur={(e)=>HandleOnBlur(e.target.value)} />
                                    <datalist id="city">
                                    
                                    { Object.entries(input.value).map((val)=>{
                                        if(val[0]=== city){
                                            let cities = val[1];
                                            return cities.map(c =>(<option key={val} value={c}/>))
                                        }
                                    })}
                                    </datalist>
                                </div>  
                                 )}
                             
                              
                            </div>
                        ):(
                            <div>
                                {Array.isArray(input.value) ?(
                                    <div className="box">
                                    {input.value.map((val)=>(
                                        <div key={val} >
                                            <input  type={input.type} id={input.label} name={input.label} list={input.list} value={val} onBlur={(e)=>HandleOnBlur(e.target.value)} />
                                            <label htmlFor={input.label}>{val}</label><br></br>
                                        </div>
                                      ))} 
                                      </div>
                                     ): (
                                        <div>
                                        {input.pattern ?(
                                            <div>
                                                <input onChange={(e)=>validate(input.pattern,e.target.value)} onBlur={(e)=>HandleOnBlur(e.target.value)} type={input.type} name={input.label} list={input.list} className="text-input" />
                                            </div>
                                            ) :(
                                            <input onBlur={(e)=>HandleOnBlur(e.target.value)} type={input.type} name={input.label} list={input.list} className="text-input" />
                                        )}
                                        </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
            
            <button type="submit" onClick={()=>handleSubmit(form)} >submit</button>
            <button type="submit" onClick={()=>setForm('')} >cleat</button>
        </div>
    )
}

export default DynamicForm
