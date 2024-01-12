import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useState , useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import style from "../card/Card.module.css"

export default function Card({id, name, status, species, gender, origin, image, onClose}){
   
   const myFavorites = useSelector((state) => state.myFavorites);
   const { pathname } = useLocation()
   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
        setIsFav(false);
        removeFav(id);
      } else {
        setIsFav(true);
        addFav({ id, name, status, species, gender, origin, image });
      }
    }
      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);

   return (
      <div className={style.container}>
         
     <section className={style.card}>
         {
            isFav ? (
            <button className={style.btnfav} onClick={handleFavorite}>❤️</button> 
            ) : (
            <button className={style.btnfav} onClick={handleFavorite}>🤍</button>
            )
         }

         { 
            pathname === '/home' && <button className={style.btn} onClick={()=> onClose(id)}>X</button>
         }

         <Link to={`/detail/${id}`}><h2 className={style.name}>{name}</h2></Link>
         
         <img className={style.img} src={image} alt={name} />
         </section>
  
      </div>
   );
}



    