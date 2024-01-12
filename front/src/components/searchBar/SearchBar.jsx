import { useState } from "react";
import style from "./SearchBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchBar({onSearch}) {
   // console.log(onSearch);
   const [id, setId] = useState('')

   const handleChange = (evento) => {
      // console.log(evento);
      setId(evento.target.value)
   }

   const search = ()=>{
      onSearch(id)
      setId('')
   }

   return (
      <div className={style.container}>
         <input  className={style.input} type='search' value={id} onChange={handleChange}/>
         
         <button className={style.btn} onClick={search}>Agregar</button>
      </div>
   );
}

