import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="footer-content">
            
                <p>Designed and built by Rachel McMinn, 2026. All Rights Reserved.</p>

                <a href="mailto:racminn@gmail.com" className="footer-contact-link"> Say Hi 
                </a>
           </div>
          
           
        </div>
    )


}