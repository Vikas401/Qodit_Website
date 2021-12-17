import React from 'react';
import Carousel from 'react-elastic-carousel';

export const Testimonials = (props) => {
  const carouselRef = React.useRef(null);
const onNextStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
    // we hit the last item, go to first item
    carouselRef.current.goTo(0);
  }
};
const onPrevStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
    // we hit the first item, go to last item
    carouselRef.current.goTo(props.data.length);
  }
};
      return (
        <div id='testimonials' style={{marginTop:'40px'}}>
          <div className="container">
            <div className="row ">
          <div className='col-md-12  section-title' style={{textAlign: 'center'}}>
          <h2>WHAT OUR CLIENTS SAY</h2>
        </div>
        <Carousel 
        enableAutoPlay
      showArrows={true}
      pagination={false}
      autoPlaySpeed={4000}
      ref={carouselRef}
      onPrevStart={onPrevStart}
      onNextStart={onNextStart}
      disableArrowsOnEnd={false}
        className='container justify-content-center'
        >
          {props.data ? props.data.map(item =>
          <div className='row testimonialsCenter' >
          <img style={{
            borderRadius:'50%',
          }} height='100px' src={item.image} alt={item.alt} />
            <h3 style={{color:'white'}} id='testimonialH3'>{item.title}</h3>
            <h4 id='testimonialH3'>{item.subtitle}</h4>
            <p>{item.body}</p>
            </div>
            )  : <h1> loading</h1>}
        </Carousel>
        </div>
        </div>
          </div>
)}

