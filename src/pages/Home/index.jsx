
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useAnimationObserve } from '../../hooks/useAnimationObserve'
import { Banner, BaseLeft, Section1, BaseRight, Section2 } from './styles'

const Home = () => {
  const [refSec2, showSec2] = useAnimationObserve()
  const [refSec, showSec] = useAnimationObserve()
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
      <Section1 ref={refSec}>
        {showSec && <>
          <BaseLeft />
          <section className='custom-container grid-2'>
            <div>
              <h2>
                Title
              </h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor pariatur aspernatur neque dolores doloribus in molestias similique, veniam itaque harum laudantium iste quidem eos et veritatis, quasi suscipit velit.
              </p>
            </div>
            <img className='image' src="https://picsum.photos/220/300/" alt="" />
          </section>
        </> }
      </Section1>
      <Section2 ref={refSec2}>
        {showSec2 && <>
          <BaseRight />
          <div className='custom-container grid-2'>
            <img className='image' src="https://picsum.photos/210/300/" alt="" />
            <div>
              <h2>
                  Title
              </h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor pariatur aspernatur neque dolores doloribus in molestias similique, veniam itaque harum laudantium iste quidem eos et veritatis, quasi suscipit velit.
              </p>
            </div>
          </div>
        </>
        }

      </Section2>
    </main>
  )
}
export default Home
