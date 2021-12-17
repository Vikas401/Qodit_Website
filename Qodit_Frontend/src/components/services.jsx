export const Services = (props) => {
  const {showServices} =props
  const paraLength= {
    display:' -webkit-box',
    overflow: 'hidden',
    '-webkit-line-clamp': '5',
    '-webkit-box-orient': 'vertical',
  }
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
        </div>
        <div className='row'>
          {showServices
            ? showServices.map((d, i) => (
                <div key={`${d.id}-${i}`} className='col-md-4'>
                  {' '}
                  <i data-aos="flip-up"  data-aos-duration="1500" className={`${d.alt}`}>
                   </i>
                  <div className='service-desc'>
                    <h3>{d.title}</h3>
                    <p style={paraLength} >{d.body}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
