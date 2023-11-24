import React, { useState } from 'react'
import style from './Item.module.css'
import { MdDelete } from 'react-icons/md'
import { CiEdit, CiSaveDown2 } from "react-icons/ci"
import { FaCheck } from "react-icons/fa";


export default function Item({ todo, onDelete, onChange, onComplited }) {
  const [isEditing, setIsEdeting] = useState(false)
  const [isComplited, setIsComplited] = useState(false)

  return (
    <div className={style.container} > 
      <div className={style.content} style={(todo.done === true) ? ({textDecoration: 'line-through'}) : ({textDecoration: 'none'})}>
        <button
          className={style.buttons}
          type="checkbox" 
          onClick={e =>{setIsComplited(!isComplited); onComplited(todo, isComplited)}}
        >
          {isComplited && <FaCheck />}
        </button>
        {!isEditing && todo.title}
        {isEditing && <input
          className={style.editInput}
          value={todo.title}
          onChange={e => onChange(todo, e.target.value)}
        />}
      </div>
      <div className={style.btnBlock}>
        {isEditing ? 
          (<button className={style.buttons} onClick={() => setIsEdeting(false)}><CiSaveDown2 /></button>) : 
          (<button className={style.buttons} onClick={() => setIsEdeting(true)}><CiEdit /></button>)}
        <button 
          className={style.buttons} 
          onClick={() => onDelete(todo.key)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  )
}