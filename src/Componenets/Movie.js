import React from 'react'

const Movie = (props) => {

    return (
        <div style={{backgroundImage:`url(${props.v})`}}>
            <a href="https://google.com" className="card">
            <div className="inner">
              <h2 className="name">{props.x}</h2> 
              <time className="date">{props.y}<time>
              <h3 className="type">{props.z}</h3>
              <p className="description">{props.w}</p>
                </time></time></div>
          </a>
        </div>
    )
}

export default Movie
