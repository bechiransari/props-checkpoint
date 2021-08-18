import React from 'react'
import Movie from './Movie';

const MovieList = ({moviesData}) => {
    return (
        <div>
   
        {
          moviesData.map((el)=><Movie x={el.name}y={el.date}z={el.type}w={el.description}v={el.image}/>)
        }
    </div>
    )
}

export default MovieList
