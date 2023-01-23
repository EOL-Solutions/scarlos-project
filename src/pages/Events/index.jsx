import { Banner, Card, CardsContainer, Main } from './styles'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Seo from '../../components/Seo'
export const Events = () => {
  return (
    <Main>
      <Seo title='Events' />
      <Banner>
        <div className='custom-container'>
          <h1>Events</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Banner>
      <CardsContainer>
        <div className='custom-container grid-container'>
          <Card>
            <div>
              <img src="https://picsum.photos/700/400" alt="card image" />
            </div>
            <section className='text-box'>
              <h3>
                Subtitle
              </h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa nobis neque deleniti iure. Quisquam, velit.
                Asperiores harum atque, voluptatibus ex
              </p>
              <button className='footer'>
                <MdKeyboardArrowRight className="arrow" color="white"/>
                Read More
              </button>
            </section>
          </Card>
          <Card>
            <div>
              <img src="https://picsum.photos/700/340" alt="card image" />
            </div>
            <section className='text-box'>
              <h3>
                Subtitle
              </h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa nobis neque deleniti iure. Quisquam, velit.
                Asperiores harum atque, voluptatibus ex
              </p>
              <button className='footer'>
                <MdKeyboardArrowRight className="arrow" color="white"/>
                Read More
              </button>
            </section>
          </Card>
          <Card>
            <div>
              <img src="https://picsum.photos/700/392" alt="card image" />
            </div>
            <section className='text-box'>
              <h3>
                Subtitle
              </h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa nobis neque deleniti iure. Quisquam, velit.
                Asperiores harum atque, voluptatibus ex
              </p>
              <button className='footer'>
                <MdKeyboardArrowRight className="arrow" color="white"/>
                Read More
              </button>
            </section>
          </Card>
          <Card>
            <div>
              <img src="https://picsum.photos/700/380" alt="card image" />
            </div>
            <section className='text-box'>
              <h3>
                Subtitle
              </h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa nobis neque deleniti iure. Quisquam, velit.
                Asperiores harum atque, voluptatibus ex
              </p>
              <button className='footer'>
                <MdKeyboardArrowRight className="arrow" color="white"/>
                Read More
              </button>
            </section>
          </Card>
        </div>
      </CardsContainer>
    </Main>
  )
}
