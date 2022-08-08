import React from "react";

export default function Card({ images }) {
  return (
    <>
      {images.map((img) => (
        <div key={img.id} className="card">
          <a href={img.largeImageURL} target="_blank" rel="noopener noreferer">
            <img src={img.webformatURL} alt="image" className="cardImage" />
            <div className="cardInfo">
              <p className="user">Photo by {img.user}</p>
              <p>
                <i className="fas fa-eye"></i>
                <span>Views: {img.views}</span>
              </p>
              <p>
                <i className="fas fa-download"></i>
                <span>Downloads: {img.downloads}</span>
              </p>
              <p>
                <i className="fas fa-heart"></i>
                <span>Likes: {img.likes}</span>
              </p>
              <p>
                <i className="fas fa-comments"></i>
                <span>Comments: {img.comments}</span>
              </p>
              <div className="tags">
                {img.tags
                  .split(",")
                  .map((tag, idx) =>
                    tag.length >= 11 ? "" : <span key={idx}>#{tag}</span>
                  )}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
