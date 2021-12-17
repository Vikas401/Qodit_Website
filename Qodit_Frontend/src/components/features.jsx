
export const Features = (props) => {
  const {dataFeatures} = props;
  const paraLength= {
    display:' -webkit-box',
    overflow: 'hidden',
    '-webkit-line-clamp': '5',
    '-webkit-box-orient': 'vertical',
  }
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {dataFeatures
            ? dataFeatures.map((d, i) => (
                <div key={`${d.id}-${i}`} className='col-xs-12 col-md-3'>
                  {' '}
                
                  <i data-aos="flip-right" data-aos-duration="1500" className={d.alt}></i>
                  <h3>{d.title}</h3>
                  <p style={paraLength}>{d.body}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
