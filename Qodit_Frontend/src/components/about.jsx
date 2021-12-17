import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const About = (props) => {
  const aboutUs =props.aboutUs[0]
  const {chooseus} = props 
  let leftSideContentCount =''
  if(chooseus) leftSideContentCount = (Math.ceil(chooseus.length/2))
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img data-aos="fade-up-right" data-aos-duration="3000" src={aboutUs.image} className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
               <h2>{aboutUs ? aboutUs.title : 'loading...'}</h2>
              <p>{aboutUs ? aboutUs.body : 'loading...'}</p>
              <h3>{aboutUs ? aboutUs.title1 : 'loading...'}</h3>
              <div className='list-style'>
              {chooseus ? chooseus.map((d, i) => {
                        if(i <= leftSideContentCount){
                        return (
                          <div className='col-lg-6 col-sm-6 col-xs-12'>
                              <ul>
                                <li key={`${d}-${i}`}>{d.title}</li>
                              </ul>
                          </div>
                          )} else { return (
                          <div className='col-lg-6 col-sm-6 col-xs-12'>
                            <ul>
                              <li key={`${d}-${i}`}> {d.title}</li>
                            </ul> 
                          </div>)
                        }}) : 'loading'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
