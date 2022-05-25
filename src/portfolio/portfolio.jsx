import React from 'react'
import './portfolio.css'
import İMG4 from '../needs/tours.png'
import İMG5 from '../needs/Blink.png'
import İMG6 from '../needs/phone.png'

const data =[
  {
    id:1,
    image: İMG6,
    title:'Movies App',
    github: "https://github.com/neseilhan/MoviesMvc",
    demo: "https://github.com/neseilhan/MoviesMvc"
 },
 {
  id:2,
  image: İMG5,
  title: 'Blink App',
  github: "https://github.com/neseilhan/ETrade",
  demo: "https://github.com/neseilhan/ETrade"
},
{
  id:3,
  image: İMG4,
  title: 'Tours List',
  github: "https://github.com/neseilhan/Travel",
  demo: "https://github.com/neseilhan/Travel"
}

  ]


const portfolio = () => {
  return (
    <section id="portfolio">
     <h5> My recent work</h5>
      <h2> Portfolio </h2>
<div className='container portfolio_container'>
  {
    data.map(({id,image,title,github,demo}) => {
      return(
        <article key={id} className='portfolio_item'>

        <div className='portfolio_item-image'>
        <img src={image} />
        </div>
    
        <div  className='portfolio_item-cta'>
          <h3>{title}</h3>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn' target='_blank'>View Demo</a>
        </div>
    
      </article>

      )
    })
  }


</div>



    </section>
  )
}

export default portfolio