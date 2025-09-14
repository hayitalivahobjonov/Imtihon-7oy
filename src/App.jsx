import { useState } from "react"

function App(){
  let [todo, setTodo] = useState([])
  let [m, setM] = useState("")
  let [dark, setDark] = useState(false)
  let [msg, setMsg] = useState("")

  function add(){
    if(m.trim()=="") return
    setTodo([...todo, {id:Date.now(), text:m}])
    setM("")
    setMsg("Muvaffaqiyatli qo‘shildi")
    setTimeout(()=>setMsg(""), 2000)
  }

  function del(id){
    setTodo(todo.filter(t=>t.id!==id))
    setMsg("Muvaffaqiyatli o‘chirildi")
    setTimeout(()=>setMsg(""), 2000)
  }

  function edit(id){
    let n = prompt("Yangi matn kiriting")
    if(n){
      setTodo(todo.map(t=>t.id===id?{...t, text:n}:t))
      setMsg("Muvaffaqiyatli tahrirlandi")
      setTimeout(()=>setMsg(""), 2000)
    }
  }

  return(
    <div className={dark?"dark":"light"}>
      <div className="container">
        <h1>Todo</h1>
        <button onClick={()=>setDark(!dark)}>
          {dark?"🌞":"🌙"}
        </button>
        
        {msg && <div className="alert">{msg}</div>}

        <div className="form">
          <input value={m} onChange={e=>setM(e.target.value)} placeholder="Yangi vazifa..." />
          <button onClick={add}>Qo‘shish</button>
        </div>
        <ul>
          {todo.map(t=>
            <li key={t.id}>
              <span>{t.text}</span>
              <button onClick={()=>edit(t.id)}>✏️</button>
              <button onClick={()=>del(t.id)}>🗑️</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
