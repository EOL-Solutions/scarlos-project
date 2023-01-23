import Seo from '../../components/Seo'
import { Banner, ImagesContainer, TextSection } from './styles'

const Gallery = () => {
  return (
    <main>
      <Seo title='Gallery' />
      <Banner>
        <div className="custom-container">
          <h1>
          Gallery
          </h1>
        </div>
      </Banner>
      <ImagesContainer>
        <div className='custom-container images'>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map((item, index) => (
              <img key={index} src={`https://picsum.photos/700/40${item}`} alt="card image" />
            ))
          }
        </div>
      </ImagesContainer>
      <TextSection>
        <div className='custom-container'>
          <p>
            <span className='image'>
              <img src="https://picsum.photos/700/400" alt=""/>
            </span>
          Morbi mattis mi consectetur tortor elementum, varius
          pellentesque velit convallis. Aenean tincidunt lectus
          auctor mauris maximus, ac scelerisque ipsum tempor.
          Duis vulputate ex et ex tincidunt, quis lacinia velit
          aliquet. Duis non efficitur nisi, id malesuada justo.
          Maecenas sagittis felis ac sagittis semper. Curabitur
          purus leo, tempus sed finibus eget, fringilla quis risus.
          Maecenas et lorem quis sem varius sagittis et a est.
          Maecenas iaculis iaculis sem. Donec vel dolor at arcu
          tincidunt bibendum. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Fusce ut aliquet justo. Donec id
          neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
          fringilla tincidunt. Aliquam eleifend ligula non velit
          accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi
          consectetur tortor elementum, varius pellentesque velit
          convallis. Aenean tincidunt lectus auctor mauris maximus,
          ac scelerisque ipsum tempor. Duis vulputate ex et ex
          tincidunt, quis lacinia velit aliquet. Duis non efficitur
          nisi, id malesuada justo. Maecenas sagittis felis ac
          sagittis semper. Curabitur purus leo, tempus sed finibus
          eget, fringilla quis risus. Maecenas et lorem quis sem
          varius sagittis et a est. Maecenas iaculis iaculis sem.
          Donec vel dolor at arcu tincidunt bibendum. Interdum
          et malesuada fames ac ante ipsum primis in faucibus.
          Fusce ut aliquet justo. Donec id neque ipsum. Integer
          eget ultricies odio. Nam vel ex a orci fringilla
          tincidunt. Aliquam eleifend ligula non velit accumsan
          cursus. Etiam ut gravida sapien.
          </p>
          <p>
            <span className='image2'>
              <img src="https://picsum.photos/500/400" alt=""/>
            </span>
          Morbi mattis mi consectetur tortor elementum, varius
          pellentesque velit convallis. Aenean tincidunt lectus
          auctor mauris maximus, ac scelerisque ipsum tempor.
          Duis vulputate ex et ex tincidunt, quis lacinia velit
          aliquet. Duis non efficitur nisi, id malesuada justo.
          Maecenas sagittis felis ac sagittis semper. Curabitur
          purus leo, tempus sed finibus eget, fringilla quis risus.
          Maecenas et lorem quis sem varius sagittis et a est.
          Maecenas iaculis iaculis sem. Donec vel dolor at arcu
          tincidunt bibendum. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Fusce ut aliquet justo. Donec id
          neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
          fringilla tincidunt. Aliquam eleifend ligula non velit
          accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi
          consectetur tortor elementum, varius pellentesque velit
          convallis. Aenean tincidunt lectus auctor mauris maximus,
          ac scelerisque ipsum tempor. Duis vulputate ex et ex
          tincidunt, quis lacinia velit aliquet. Duis non efficitur
          nisi, id malesuada justo. Maecenas sagittis felis ac
          sagittis semper. Curabitur purus leo, tempus sed finibus
          eget, fringilla quis risus. Maecenas et lorem quis sem
          varius sagittis et a est. Maecenas iaculis iaculis sem.
          Donec vel dolor at arcu tincidunt bibendum. Interdum
          et malesuada fames ac ante ipsum primis in faucibus.
          Fusce ut aliquet justo. Donec id neque ipsum. Integer
          eget ultricies odio. Nam vel ex a orci fringilla
          tincidunt. Aliquam eleifend ligula non velit accumsan
          cursus. Etiam ut gravida sapien.
          </p>
        </div>

      </TextSection>
    </main>
  )
}

export default Gallery
