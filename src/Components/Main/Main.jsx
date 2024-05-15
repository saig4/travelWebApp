import React, { useEffect } from 'react'
import "./main.css";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuClipboardCheck } from 'react-icons/lu';
import paris from "../../Assets/paris.jpg"
import rome from "../../Assets/rome.jpg"
import tokyo from "../../Assets/tokyo.jpg"
import barcelona from "../../Assets/barcelona.jpg"
import newyork from "../../Assets/newyork.jpg"
import sydney from "../../Assets/sydney.jpg"
import bangkok from "../../Assets/bangkok.jpg"
import santorini from "../../Assets/santorini.jpg"
import dubai from "../../Assets/dubai.jpg"
import amsterdam from "../../Assets/amsterdam.jpg"

import Aos from 'aos';
import 'aos/dist/aos.css'

const Data=[
  {
    "rank": 1,
    "country": "France",
    "fee":"5000RS/-",
    "city": "Paris",
    "grade":"Cultural Relax",
    "description": "Known as the City of Love, Paris offers iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and Louvre Museum. Visitors can stroll along the Seine River, indulge in French cuisine, and explore charming neighborhoods like Montmartre.",
    "image":paris
  },
  {
    "rank": 2,
    "country": "Italy",
    "fee":"4500RS/-",
    "city": "Rome",
    "grade":"Cultural Relax",
    "description": "Rome, the Eternal City, is a treasure trove of ancient history and architecture. Highlights include the Colosseum, Roman Forum, Vatican City, and the Pantheon. Visitors can also enjoy authentic Italian cuisine and vibrant street life.",
    "image": rome
  },
  {
    "rank": 3,
    "country": "Japan",
    "fee":"3000RS/-",
    "city": "Tokyo",
    "grade":"Cultural Relax",
    "description": "Tokyo is a bustling metropolis blending traditional culture with modern innovation. Visitors can explore historic temples like Senso-ji, indulge in sushi and ramen, shop in trendy districts like Shibuya, and experience vibrant nightlife.",
    "image": tokyo
  },
  {
    "rank": 4,
    "country": "Spain",
    "fee":"4000RS/-",
    "city": "Barcelona",
    "grade":"Cultural Relax",
    "description": "Barcelona is renowned for its unique architecture, including the famous Sagrada Familia and Park Güell designed by Antoni Gaudí. Visitors can also enjoy beautiful beaches, delicious Catalan cuisine, and a lively atmosphere.",
    "image": barcelona
  },
  {
    "rank": 5,
    "country": "USA",
    "fee":"5000/-",
    "city": "New York City",
    "grade":"Cultural Relax",
    "description": "New York City, the Big Apple, is a global hub of culture, commerce, and entertainment. Highlights include Times Square, Central Park, Broadway shows, world-class museums like the MET, and diverse culinary experiences.",
    "image": newyork
  },
  {
    "rank": 6,
    "country": "Australia",
    "fee":"5000RS/-",
    "city": "Sydney",
    "grade":"Cultural Relax",
    "description": "Sydney boasts iconic landmarks such as the Sydney Opera House and Sydney Harbour Bridge. Visitors can relax on beautiful beaches, explore the historic Rocks district, and enjoy a vibrant arts and dining scene.",
    "image": sydney
  },
  {
    "rank": 7,
    "country": "Thailand",
    "fee":"4000RS/-",
    "city": "Bangkok",
    "grade":"Cultural Relax",
    "description": "Bangkok, the City of Angels, is a vibrant metropolis known for its ornate temples, bustling street markets, and lively nightlife. Visitors can explore the Grand Palace, Wat Arun, enjoy delicious Thai street food, and cruise along the Chao Phraya River.",
    "image": bangkok
  },
  {
    "rank": 8,
    "country": "Greece",
    "fee":"2000/-",
    "city": "Santorini",
    "grade":"Cultural Relax",
    "description": "Santorini is famous for its stunning sunsets, whitewashed buildings, and crystal-clear waters. Visitors can explore picturesque villages like Oia and Fira, relax on volcanic beaches, and indulge in fresh Mediterranean cuisine.",
    "image": santorini
  },
  {
    "rank": 9,
    "country": "United Arab Emirates",
    "fee":"5000/-",
    "city": "Dubai",
    "grade":"Cultural Relax",
    "description": "Dubai is known for its futuristic skyline, luxury shopping malls, and extravagant attractions like the Burj Khalifa and Palm Jumeirah. Visitors can also explore traditional souks, enjoy desert safaris, and experience world-class entertainment.",
    "image": dubai
  },
  {
    "rank": 10,
    "country": "Netherlands",
    "fee":"3000/-",
    "city": "Amsterdam",
    "grade":"Cultural Relax",
    "description": "Amsterdam is famous for its picturesque canals, historic architecture, and vibrant cultural scene. Visitors can explore museums like the Rijksmuseum and Van Gogh Museum, stroll through scenic parks, and experience the city's unique atmosphere.",
    "image": amsterdam
  }
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="main container section">

      <div data-aos="fade-right" className="secTitle">
        <h3 className="title">
          Most visited destinatios
        </h3>
      </div>

      <div className="secContent grid">

        {
          Data.map(({rank,country,fee,city,grade,description,image})=>{
                  return(
                    <div key={rank}
                    data-aos="fade-up"
                       className="singleDestination">

                       <div className="imageDiv">
                        <img src={image} alt={city} />
                       </div>

                       <div className="cardInfo">
                        <h4 className='desTitle' >{country}</h4>
                        <span className="continent flex">
                        <HiOutlineLocationMarker className="icon"/>
                        <span className="name">{city}</span>
                        </span>

                        <div className="fees flex">
                          <div className="grade">
                            <span>{grade} <small> +1</small></span>
                          </div>
                          <div className="price">
                            <h5>{fee}</h5>
                          </div>
                        </div>
                          
                          <div className="desc">
                            <p>{description}</p>
                          </div>

                          <button className="btn flex">
                            DETAILS
                            <LuClipboardCheck className="icon"/>
                          </button>
                       </div>
                      </div>
                  )
          })
        }

      </div>
    </section>
  )
}

export default Main