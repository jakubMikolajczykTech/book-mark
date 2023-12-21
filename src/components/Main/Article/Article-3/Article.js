import React from 'react';

const Article3 = () => {
  return (
    <div className="article-container article-3">
       <div className="top-section">
        <div className="wrapper">
          <h1>Download the extension</h1>
          <p>We've got more browsers in the pipeline. Please do let us know 
            if you've got a favourite you'd like us to prioritize</p>
        </div>
      </div>

      <div className="bottom-section">
        <div className='section-left'>
          <img src="./images/logo-chrome.svg" alt="Chrome" />
          <h1>Add to Chrome</h1>
          <p>Minimum version 62</p>
          <img src="./images/bg-dots.svg" alt="Dots" />
          <button>Add & Install Extension</button>
        </div>

        <div className='section-middle'>
          <img src="./images/logo-firefox.svg" alt="Firefox" />
          <h1>Add to Firefox</h1>
          <p>Minimum version 55</p>
          <img src="./images/bg-dots.svg" alt="Dots" />
          <button>Add & Install Extension</button>
        </div>

        <div className='section-right'>
          <img src="./images/logo-opera.svg" alt="Opera" />
          <h1>Add to Opera</h1>
          <p>Minimum version 46</p>
          <img src="./images/bg-dots.svg" alt="Dots" />
          <button>Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default Article3;
