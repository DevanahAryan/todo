import React from 'react'

export const Footer = ({statusOfTodo,setStatusOfTodo}) => {
    const handleFooter=(value)=>{
        setStatusOfTodo(value);
      }
  return (
      <div className='footer'>
        <button style={{color:statusOfTodo==="Inprogress"?"blue":""}} onClick={()=>handleFooter("Inprogress")}>In Progress</button>
        <button style={{color:statusOfTodo==="Complete"?"blue":""}} onClick={()=>handleFooter("Complete")}>Completed</button>
        <button style={{color:statusOfTodo==="Backlog"?"blue":""}} onClick={()=>handleFooter("Backlog")}>Backlog</button>
    </div>
  )
}
