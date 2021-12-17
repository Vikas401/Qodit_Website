export const Header = (props) => {
  const {heroBox} = props;
  const heroboxImage = heroBox[0].image
  const imageUrl = new URL(heroboxImage)
  return (
    <header id='header'>
      <div className='intro' style={{background:`url(${imageUrl.href})`}}>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {heroBox ? heroBox.map (title => title.title) : 'Loading'}
                  <span></span>
                </h1>
                <p>{heroBox ? heroBox.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className=' btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
