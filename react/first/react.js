
import React from "react"
import ReactDOM from 'react-dom'
ReactDOM.render(
< App value = 'first react code' />,
document.getElementById('root')
)

//creating navbar

const data = <div style={{display :'flex'}}>
    <h1>Aswin Sandeep</h1>
    <ul style ={{display: 'flex'}}>
        <li>manoj</li>
        <li>sirah</li>
        <li>ramesh</li>
        <li>kumar</li>

    </ul>
</div>

ReactDOM.render(data,document.getElementById('navbar'))

ReactDOM.render(< List />,document.getElementById('root2'))

const page= <div>
    <p>helow to everyone</p>
    <p>not helow to everyone</p>
</div>

ReactDOM.render(page , document.getElementById('root3'))



function App({ value }){
   return <h1>{value}</h1>
}

function List(){
    return  <ul><li>hi</li><li>helo</li></ul>
}

// const element = document.createElement('h1');
// element.textContent='aswin sandeep'
// element.className='name'
// document.getElementById('root2').append(element)