import React, { useState } from 'react';

const Article2 = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const featuresData = [
    {
      title: 'Bookmark in One Click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      imageUrl: './images/illustration-features-tab-1.svg',
    },
    {
      title: 'Speedy Searching',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks',
      imageUrl: './images/illustration-features-tab-2.svg',
    },
    {
      title: 'Easy Sharing',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that tou can send at the click of a button.',
      imageUrl: './images/illustration-features-tab-3.svg',
    },
  ];

  const selectedFeature = featuresData[selectedButton];

  return (
    <div className="article-container article-2">
      <div className="top-section">
        <div className="wrapper">
          <h1>Features</h1>
          <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
          <nav>
            {featuresData.map((feature, index) => (
              <button
                key={index}
                className={selectedButton === index ? 'active' : ''}
                onClick={() => handleButtonClick(index)}
              >
                {feature.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="bottom-section">
        <div className="left-section">
          <div className="wrapper">
            <img src={selectedFeature.imageUrl} alt="Bookmark Illustration" />
          </div>
          <div className="overlay"></div>
        </div>
        
        <div className="right-section">
          <div className="wrapper">
            <h1>{selectedFeature.title}</h1>
            <p>{selectedFeature.description}</p>
            <button className="button">More info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article2;
