import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { withRouter } from "react-router";


export const SideBar = withRouter(({ location }) => {
  // if (location.pathname.match(/admin/)) {
  //   return null;
  // }
  function checkRouter(){
    if(location){
      switch (location.pathname){
        case '/login':
          return true
        case '/admin/dashboard':
          return true;
        case '/hr/dashboard':
          return true;
        case '/sales/dashboard':
          return true;
        default :
          return false;
      }
    }
  }

  if (checkRouter()){
    return null;
  } return (
    <div className="icon-bar">
      <a
        href="https://www.facebook.com/Qodit-solution-106661398372713"
        className="facebook"
      >
        <FontAwesomeIcon className="icon_resize" icon={faFacebook} />
      </a>
      <a href="https://twitter.com/QODIT2" className="twitter">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/qodit18/" className="google">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com/company/qodit-solutions-private-limited/"
        className="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://www.youtube.com/channel/UC62l3r1suf0n8jAK_ZRdmaw"
        className="youtube"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
}
)