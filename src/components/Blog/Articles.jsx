import { data } from "../../Data";
import "../Blog/styleArticle.css";
import { Link } from "react-router-dom";
import {FaRegComment} from "react-icons/fa";
//gere le badge en fonction des couleur
let switchC = (classI) => {
  if (classI === "Programmation") {
    classI = "badge blue-";
  } else if (classI === "Motivation") {
    classI = "badge red-";
  } else {
    classI = "badge green-";
  }
  return classI;
};

export const listItems = data.map((article) => (
  <Link
  className="articleLink"
  style={{ textDecoration: "none" }}
  to={`post/${article.titre.split(" ").join("_")}`}
  state={{ id: article._id }}
>
  <div key={article.id}>
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <img src={article.cover} alt="card__image" className="card__image" />
        </div>
        <div className="card-body">
          <span className={switchC(article.categorie)}>
            {article.categorie}
          </span>

          <h4>
           
              {article.titre}
            
          </h4>
          <p>{`${article.text.substring(0, 50)} ...`} </p>
        </div>
        <div className="card-footer">
          <div className="user">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className="user__image"
            />
            <FaRegComment/>
            <div className="user__info">
              <h5>{article.auteur}</h5>
              
              <small>Poster il y a 2h</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
));
