import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'

import MyForm from '../../components/MyForm'




const Home = () => {
  return (
    <>
      <section>

        <Container>
          <div className="space"></div>
          <h1>I am Mel Torres</h1>
         

          <img src="" alt="mainphoto"/>


          <div className="space"></div>

          <div className="bio">
            <h1>Bio</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur iusto assumenda quod. Sit deserunt aliquid eveniet doloribus at non debitis, aut beatae, eligendi nostrum suscipit explicabo natus? Deleniti, tenetur illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptatibus eum facilis architecto quidem. Enim, quis animi et delectus adipisci quae eius, tempora magni, molestiae hic eveniet maxime aliquid atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas tempora eligendi vitae, quia itaque quas in distinctio amet! Voluptatum fugiat accusamus deserunt eos ex sed. Odit suscipit quis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum commodi voluptas cumque deserunt, iure culpa placeat quidem perferendis itaque quasi, est nemo ab nulla hic iste quibusdam officiis eos?

            </p>
          </div>









          <a name='contact'></a>
          <div className='contact'>
            <h1 className="text-center">Contact</h1>

            <MyForm />
          </div>


          <div className="socials text-center">

            <a target="_blank" href="https://www.facebook.com/AsylusMusic/">
            <img className="icons" src="https://image.flaticon.com/icons/svg/56/56582.svg" alt="facebook"/>
            </a>
            {"  "}

            <a target="_blank" href="http://instagram.com/asylusmusic">
            <img className="icons" src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-black/512/instagram-512.png" alt="instagram"/>
            </a>
            {"  "}

            <a target="_blank" href="https://twitter.com/asylusmusic/">
            <img className="icons" src="https://image.flaticon.com/icons/png/512/23/23681.png" alt="twitter"/>
            </a>
            {"  "}

            <a target="_blank" href="https://www.youtube.com/channel/UCrG0lNbd0sBZgrIBRR9WJAg">
            <img className="icons" src="https://image.flaticon.com/icons/png/512/8/8782.png" alt="youtube"/>
            </a>
          </div>




        </Container>
      </section>
    </>
  )
}

export default Home
