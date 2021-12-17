import React, { Component } from 'react';

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 22.741084,
      lng: 75.902779
    },
    zoom: 11
  };

  render() {
    return (
        <div className="container">
            <div className="row">
            <div class="mapouter col-md-4 col-sm-9 ml-0 ">
              <div class="gmap_canvas">
                <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=437&amp;height=305&amp;hl=en&amp;q=Robot Chauraha Malviya Nagar, Ram Krishna Bagh, Indore, Madhya Pradesh 4520&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
              </div>
            <br />
            <div class="mapouter col-md-4 col-sm-9"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=437&amp;height=305&amp;hl=en&amp;q= Sheridan, WY 82801, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
    </div>
        </div>
    );
  }
}


export default GoogleMap;