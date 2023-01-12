import { RiLogoutCircleRLine } from 'react-icons/ri'
import { Banner, BaseLeft, Section1, BaseRight, Section2  } from './styles'

const Home = () => {
  return (
    <main>
      <Banner>
        <div className='custom-container'>
          <RiLogoutCircleRLine color='white' size={40}/>
          <h1>THIS IS A PRINCIPAL TITLE</h1>
          <hr />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste.
          </h4>
        </div>
      </Banner>
      <Section1>
        <BaseLeft />
        <div className='custom-container'>
          <h2>
            Title
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor pariatur aspernatur neque dolores doloribus in molestias similique, veniam itaque harum laudantium iste quidem eos et veritatis, quasi suscipit velit.
          </p>
        </div>
      </Section1>
      <Section2>
        <BaseRight />
        <div className='custom-container'>
          <h2>
            Title
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor pariatur aspernatur neque dolores doloribus in molestias similique, veniam itaque harum laudantium iste quidem eos et veritatis, quasi suscipit velit.
          </p>
        </div>
      </Section2>

    </main>
  )
}
export default Home
