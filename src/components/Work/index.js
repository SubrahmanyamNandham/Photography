import { useState } from "react"

import "./index.css"

import About from "../About"
const imagesList = [
    {
      appId: 0,
     
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684603439/DSC_3685_1_dmru1s.jpg',
      
    },
    {
      appId: 1,
     
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684603347/DSC_1488_xur2bt.jpg',
      
    },
    {
      appId: 2,
      
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684603347/DSC_8280_q6mq2f.jpg',
     
    },
    {
      appId: 3,
   
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684603516/IMG_20230125_100852_0762_jfqflx.jpg',
     
    },
    {
      appId: 4,
      
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684756507/DSC_5154_wqbojp.jpg',
      
    },
    {
      appId: 5,
      
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684756128/Picsart_23-02-11_23-21-44-850_o1yrdd.jpg',
  
    },
    {
      appId: 6,
   
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684603304/DSC_1477_1_zh89ot.jpg',
     
    },
    {
      appId: 7,
      
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684756730/DSC_9635_aod7kw.jpg',
      
    },
    {
      appId: 8,
     
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684756996/DSC_8324_3_bqmxpd.jpg',
    
    },
    {
      appId: 9,
      
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684757687/null_wokhoa.jpg',
    
    },
    {
      appId: 10,
   
      imageUrl:
      "https://res.cloudinary.com/dvco5xnoe/image/upload/v1684756954/DSC_7802_msy7se.jpg",
     
    },
    {
      appId: 11,
    
      imageUrl:
        'https://res.cloudinary.com/dvco5xnoe/image/upload/v1684756080/IMG-20230205-WA0010_dokgak.jpg',
     
    },
 
    
  ]
  

const Work=()=>{
   
    const [aboutData,SetAboutData]=useState(false)
    
   

    const onAbout=()=>{
      SetAboutData(prevState=>!prevState)
    }

 

    return(
        <div className="work-container">
        <div className="work-tabs">
        <p  type="button" className="tab-name" >My Photography</p>
        <p type="button" className="tab-name" onClick={onAbout}>About me</p>
      
        <p  className="tab-name">Contact</p>
        
        </div>
     

        {aboutData?<About/>:  <div>
            
            {imagesList.map((each)=>(
                
                  <img src={each.imageUrl} alt="img" className="image"/>
                 
            ))}
        </div>}

       
       </div>
    )
}

export default Work