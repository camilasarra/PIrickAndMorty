import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import style from './Detail.module.css'

export default function Detail() {

  const { id } = useParams();
  const [character, setCharacter]= useState({});


  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data })=> setCharacter(data) 
    )
    return setCharacter({})
},[id])

  return (
    <div className={style.container}>
      {
         character ? (
          
            <div>
              <div className={style.cardfront}>
              <h2>Name : {character.name}</h2>
              <img src={character.image} alt={character.name}></img>
              </div>
              
              <div className={style.cardback}>
              <h2 >Id:{character.id}</h2>
              <h4>Status: {character.status}</h4>
              <h4>Species: {character.species}</h4>
              <h4>Gender:{character.gender}</h4>
              <h4>Origin: {character.origin?.name}</h4>
              <h4>Type: {character.type}</h4>
              </div>
              
              </div>
          ) : ""
      }
    </div>
  )
    }
