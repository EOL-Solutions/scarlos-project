
import Seo from '../../components/Seo'
import { Banner, FormSection, InputContainer, SectionAbout1 } from './styles'

const About = () => {
  return (
    <main>
      <Seo title='About' />
      <Banner>
        <h1>
          About
        </h1>
      </Banner>
      <SectionAbout1>

        <div className='custom-container text-box'>
          <h2>Title Description</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam
          </p>
        </div>
      </SectionAbout1>
      <FormSection>
        <div className='custom-container'>
          <div>
            <h2>
              GET IN TOUCH
            </h2>
            <hr />
            <p>
              Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </div>
          <div className='col-2'>
            <form >
              <InputContainer>
                <label htmlFor="">Name</label>
                <input className='custom-input' type="text" />
              </InputContainer>
              <InputContainer>
                <label htmlFor="">Email</label>
                <input className='custom-input' type="email" />
              </InputContainer>
              <InputContainer>
                <label htmlFor="">Message</label>
                <textarea className='custom-area' name="" id="" cols="30" rows="10" />
              </InputContainer>
              <button type='submit' className='transparent-btn'>
                SEND
              </button>
            </form>
            <section>
              <ul>
                <li>
                  Untitled Inc
                </li>
                <li>
                  1234 Somewhere Road Suite #2894
                </li>
                <li>
                  Nashville, TN 00000-0000
                </li>
                <li>
                  (000) 000-0000
                </li>
                <li>
                  information@untitled.tld
                </li>
                <li>
                  twitter.com/untitled-tld
                </li>
                <li>
                  facebook.com/untitled-tld
                </li>
                <li>
                  instagram.com/untitled-tld
                </li>
              </ul>
            </section>

          </div>
        </div>
      </FormSection>
    </main>
  )
}

export default About
