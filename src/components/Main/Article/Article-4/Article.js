import React, { useState } from 'react';

const Article4 = () => {
  const [expandedAnswers, setExpandedAnswers] = useState({});

  const toggleAnswer = (id) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="article-container article-4">
      <div className="wrapper">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like answered,
          please feel free to email us.
        </p>

        <div className="faq-item">
          <hr />
          <div
            className={`question ${expandedAnswers['answer1'] ? 'expanded' : ''}`}
            onClick={() => toggleAnswer('answer1')}
          >
            What is Bookmark?
            <img
              src="./images/icon-arrow.svg"
              alt="Arrow Icon"
              className={`${expandedAnswers['answer1'] ? 'rotated' : ''}`}
              style={{ filter: expandedAnswers['answer1'] ? 'invert(45%)' : '' }}
            />
          </div>
          <div
            id="answer1"
            className={`answer ${expandedAnswers['answer1'] ? 'expanded' : ''}`}
            style={{ display: expandedAnswers['answer1'] ? 'block' : 'none' }}
          >
            Bookmark is a web application that helps you organize and sync your bookmarks across
            devices. It provides a simple and intuitive interface for managing your favorite websites.
          </div>
          <hr />
        </div>

        <div className="faq-item">
          <div
            className={`question ${expandedAnswers['answer2'] ? 'expanded' : ''}`}
            onClick={() => toggleAnswer('answer2')}
          >
            How can I request a new browser?
            <img
              src="./images/icon-arrow.svg"
              alt="Arrow Icon"
              className={`${expandedAnswers['answer2'] ? 'rotated' : ''}`}
              style={{ filter: expandedAnswers['answer2'] ? 'invert(45%)' : '' }}
            />
          </div>
          <div
            id="answer2"
            className={`answer ${expandedAnswers['answer2'] ? 'expanded' : ''}`}
            style={{ display: expandedAnswers['answer2'] ? 'block' : 'none' }}
          >
            Currently, we only support the major browsers like Chrome, Firefox, and Safari. However,
            we appreciate your feedback and may consider adding support for new browsers in the future.
          </div>
          <hr />
        </div>

        <div className="faq-item">
          <div
            className={`question ${expandedAnswers['answer3'] ? 'expanded' : ''}`}
            onClick={() => toggleAnswer('answer3')}
          >
            Is there a mobile app?
            <img
              src="./images/icon-arrow.svg"
              alt="Arrow Icon"
              className={`${expandedAnswers['answer3'] ? 'rotated' : ''}`}
              style={{ filter: expandedAnswers['answer3'] ? 'invert(45%)' : '' }}
            />
          </div>
          <div
            id="answer3"
            className={`answer ${expandedAnswers['answer3'] ? 'expanded' : ''}`}
            style={{ display: expandedAnswers['answer3'] ? 'block' : 'none' }}
          >
            Yes, we have a mobile app available for both iOS and Android. You can download it from the
            App Store or Google Play Store and easily sync your bookmarks across devices.
          </div>
          <hr />
        </div>

        <div className="faq-item">
          <div
            className={`question ${expandedAnswers['answer4'] ? 'expanded' : ''}`}
            onClick={() => toggleAnswer('answer4')}
          >
            What about other Chromium browsers?
            <img
              src="./images/icon-arrow.svg"
              alt="Arrow Icon"
              className={`${expandedAnswers['answer4'] ? 'rotated' : ''}`}
              style={{ filter: expandedAnswers['answer4'] ? 'invert(45%)' : '' }}
            />
          </div>
          <div
            id="answer4"
            className={`answer ${expandedAnswers['answer4'] ? 'expanded' : ''}`}
            style={{ display: expandedAnswers['answer4'] ? 'block' : 'none' }}
          >
            Currently, Bookmark is optimized for the major browsers like Chrome. While it may work on
            other Chromium-based browsers, we recommend using the officially supported ones for the best experience.
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Article4;
