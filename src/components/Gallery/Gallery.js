import React, { useState } from 'react';

import './Gallery.css';

const GalleryComponent = props => {
  const { images, title, slidesPerView } = props.schema.metadata;
  const [state, setState] = useState({ currentPage: 0 });

  const pageCount = Math.ceil(images.length / slidesPerView);

  return (
    <div>
      <h1 className="title">{title}</h1>

      <div className="row">
        {images
          .slice(
            state.currentPage * pageCount,
            state.currentPage * pageCount + pageCount
          )
          .map((image, index) => {
            return (
              <div className="col-sm-4" key={index}>
                <div className="image">
                  <img
                    src={process.env.PUBLIC_URL + '/assets/placeholder.png'}
                    alt={image}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div className="gallery-nav">
        <button
          onClick={() => {
            setState({ currentPage: state.currentPage - 1 });
          }}
          disabled={state.currentPage > 0 ? false : true}
        >
          {'<-'}
        </button>
        {state.currentPage + 1}
        <button
          onClick={() => {
            setState({ currentPage: state.currentPage + 1 });
          }}
          disabled={state.currentPage < pageCount - 1 ? false : true}
        >
          {'->'}
        </button>
      </div>
    </div>
  );
};

export default GalleryComponent;

// {
//   "type": "GalleryComponent",
//   "metadata": {
//       "title": "Галерея",
//       "images": [
//           "url/to/img1.jpg", "url/to/img2.jpg", "url/to/img3.jpg", "url/to/img4.jpg",
//           "url/to/img5.jpg", "url/to/img6.jpg", "url/to/img7.jpg", "url/to/img8.jpg"
//       ],
//       "slidesPerView": 3
//   }
// }
