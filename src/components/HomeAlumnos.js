import React from 'react'
import {Card,Alert} from 'antd'

function Alumno({obj}){
  return(
    <Alert type="success" message={`${obj.name} tiene ${obj.age}`} /> 
  )
}

const HomeAlumnos = props => {
  return (
    <div>
      { props.alumnos.map((alumno,i)=>(
          <Card key={i} style={{width:'100vw'}}>
            <Alumno  obj={alumno}/>  
          </Card>
          ))}

    </div>
  )
  }
  

export default HomeAlumnos
