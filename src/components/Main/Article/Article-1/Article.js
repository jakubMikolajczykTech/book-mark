import React from 'react';


const Article1 = ({ title, content }) => {
  return (
    <article className="article-container article-1">
      <div className="left-section">
        <div className="wrapper">
          <h1>A Simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
          <div className="buttons-container">
            <button className="button button-1">Get it on Chrome</button>
            <button className="button button-2">Get it on Firefox</button>
          </div>
        </div>
      </div>
      
      <div className="right-section">
        <div className="wrapper">
          <img src=".\images\illustration-hero.svg" alt="Illustration" />
          <div className="overlay"></div>
        </div>
      </div>
    </article>
  );
};

export default Article1;
