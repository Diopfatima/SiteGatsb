import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import  Capture from "../images/Capture.png"
import styles from "../components/layout.module.css"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: ``,
      marginBottom: ``,
      backgroundImage: 'capture'
     
    }}
  >
    <img  id="header-image"src={Capture}>
    </img>
       
    <nav class="navbar" id = "nav-bar">
        <div
     id="conteneur" class="nav-center">
        
          <div id={styles.navbarLinkContainer}>
        <ul id="navigation"> 
         
         
                 
       <section> < div> <Link className={styles.navLink}  to="#presentation">
               Présentation
                </Link></div> 
                
               < div><Link className={styles.navLink} to={"#vision"}>
                Vision
                </Link> </div>
                <Link className={styles.navLink}  to="#contact">
              CONTACT
                </Link>
                </section>  </ul>      
 </div></div></nav>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
