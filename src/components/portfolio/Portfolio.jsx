import React from 'react'
import "./portfolio.css"
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/5.jpg'
import IMG6 from '../../assets/6.jpg'
import IMG7 from '../../assets/7.jpg'
import IMG2 from '../../assets/2.jpg'

const data = [
  {
    id: 1,
    image: IMG3,
    title: 'Jambu mede berhasiat dan masih sekali',
    github: 'htpps://github.com',
    demo: 'https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG4,
    title: 'Jambu mede berhasiat dan masih sekali',
    github: 'htpps://github.com',
    demo: 'https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 3,
    image: IMG5,
    title: 'Jambu mede berhasiat dan masih sekali',
    github: 'htpps://github.com',
    demo: 'https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 4,
    image: IMG6,
    title: 'Jambu mede berhasiat dan masih sekali',
    github: 'htpps://github.com',
    demo: 'https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 5,
    image: IMG7,
    title: 'Jambu mede berhasiat dan masih sekali',
    github: 'htpps://github.com',
    demo: 'https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 6,
    image: IMG2,
    title: 'Jambu mede berhasiat dan masih sekali',
    github: 'htpps://github.com',
    demo: 'https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio