import axios from 'axios'
import React, { useEffect } from 'react'
import { IMAGE_API_URL, POKEMON_API_URL } from '../config'

export default function Dex () {
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=151").then((response) => {
      console.log(reponse.data)
    })
  }, [])

  return (
    <h1>Dex</h1>
  )
}