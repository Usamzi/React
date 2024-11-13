import { useState } from 'react'
import './App.css'
import { Test } from './componets/Test'
import { Test2 } from './componets/Test2'
import { Test3 } from './componets/Test3'
import { Test4 } from './componets/Test4'
import { Form } from './componets/form'
import{Table} from './componets/Table'

function App() {
  return (
    <>
     {/* <div>
      <h1>Usman</h1>
      <h2>Usman</h2>
      <h3>Usman</h3>
      <h4>Usman</h4>
      <h5>Usman</h5>
     </div> */}
     <Test heading="My name is usman " detail="im a developer" color="green" colr="gray" />
     <Test heading="My name is ali" detail="im a chemist" color="red" colr="tomato"/>
     <Test heading="My name is zeshan" detail="im a doctor" color="blue" colr="orange"/>
     <Test heading="My name is haris" detail="im a SEO" color="yellow" colr="purple"/>
     {/* <Test2/>
     <Test3/>
     <Test4/> */}
     <Form/>
     <Table/>
   
    </>
  )
}
export default App
