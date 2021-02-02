import React from "react"
 import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import  Capture from "../images/Capture.png"
import Video from "../components/video"
import ContactForm from '../components/ContactForm'
import styles from "../components/layout.module.css"





const test = () => (
    <Layout >
       
    <SEO title="Page d'acceuil" />
    <header id="header"> 
        
      <nav class="navbar">
        <div  id="conteneur" class="nav-center">
        
          <div id={styles.navbarLinkContainer}>
        <ul id="navigation"> <img src={Capture} style={{ maxWidth: '2000px' }} alt="logo"/>
         
         
         
                 
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
 </div></div></nav> </header>
 <h1 id="presentation">Presentation</h1>
<p>Sur la base de votre Nutrinome®, nous vous proposons des recommandations de recettes adaptées à vos goûts, vos habitudes et vos préférences...

​

Chaque semaine vous recevez des conseils personnalisés et vous établissez votre planning de repas en sélectionnant des suggestions de recettes qui vous font plaisir.
 

Si nécessaire, pour assurer votre équilibre nutritionnel, nous vous proposerons une supplémentation adaptée.
</p>

                <section>
      
      <Video id="video"
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
    </section>
    <h1 id="vision">vision</h1>
<p>“

Nous connaissons déjà l’importance de la qualité de notre alimentation et son impact sur notre santé, et en particulier son rôle dans la prévention de certaines maladies.

 

La révolution d’aujourd’hui, c’est la prise de conscience que nous sommes tous différents, que nos besoins sont différents et que rien ne sera réellement efficace si l’on ne tient pas compte de notre singularité“.</p>
    <section id="contactUs" className="main special">
    <header className="major">
        <h2 id="contact">Contact Us</h2>
        <ContactForm></ContactForm>
    </header>
</section>

    

    
    
  </Layout>
)

export default test