import React from 'react'
import { useLocation } from 'react-router-dom'
import { data } from '../Data';
import {FaCalendarDay} from 'react-icons/fa'
import Footer from './Footer';

export default function DetailsArticles() {
    const {state:{id}} = useLocation();
    const item = data.find(item=>item._id===id)
  return (
    <div className='details'>
        <h1>{item.titre}</h1>
        <img src={item.cover} alt="" srcset="" />
        <p>{item.categorie}</p>
      <p>{item.text}</p>
      <p>{item.auteur}</p>
      <p><FaCalendarDay/></p>
      <div className="comment-section">
        <h3>entrez le commentaire</h3>
        <div className="form-comment">
          <input type="text" name="user-name" id="" />
          <input type="email" name="user-mail" id="" />
          <textarea name="comment" id="" placeholder='taper votre commentaire'></textarea>
          <button>Commenter</button>
        </div>
        <div className="display-comment">
          <img src="" alt="" />
          <p>Nom</p>
          <p>Commentaire</p>
          <p>date</p>
        </div>
      </div>
      <Footer/>
    </div>

  )
}
