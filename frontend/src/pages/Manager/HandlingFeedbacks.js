import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HandlingFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/feedbacks'); // Adjust the endpoint URL if needed
        setFeedbacks(response.data);
      } catch (error) {
        console.error('There was an error fetching the feedbacks!', error);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleApproval = async (feedbackId, decision) => {
    try {
      const response = await axios.post(`http://localhost:3001/feedbacks/${feedbackId}/decision`, {
        decision: decision
      });
      console.log('Decision sent:', response.data);

      // Remove the feedback from the list after the decision
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== feedbackId));

      // Adjust the index if it goes out of bounds
      if (index >= feedbacks.length - 1) {
        setIndex(feedbacks.length - 2);
      }
    } catch (error) {
      console.error('There was an error sending the decision!', error);
    }
  };

  const nextFrame = () => {
    if (index < feedbacks.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevFrame = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const gotoFrame = (gotoIndex) => {
    if (gotoIndex >= 0 && gotoIndex < feedbacks.length) {
      setIndex(gotoIndex);
    } else if (gotoIndex === 'end') {
      setIndex(feedbacks.length - 1);
    }
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 39 && index < feedbacks.length - 1) {
        nextFrame();
      }
      if (e.keyCode === 37 && index > 0) {
        prevFrame();
      }
    };

    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [index, feedbacks.length]);

  if (feedbacks.length === 0) {
    return <div>Loading feedbacks...</div>;
  }

  return (
    <div className="HandlingFeedbacks-container">
      <div className="text-xl font-bold m-5 text-center">Use Keyboard Arrow Keys To Go Left And Right</div>
      <div className="HandlingFeedbacks border-2 rounded mx-auto m-5 bg-white" style={{ width: '750px' }}>
        <div className="top flex p-2 border-b select-none">
          <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto">{feedbacks[index].product.name}</div>
          <div className="buttons ml-auto flex text-gray-600 mr-1">
            <svg onClick={prevFrame} className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <svg onClick={nextFrame} className="w-7 border-2 rounded-r-lg p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
        <div className="content-area w-full h-96 overflow-hidden">
          <div className="platform shadow-xl h-full flex" style={{ transform: `translateX(-${index * 750}px)`, transition: 'transform 0.3s' }}>
            {feedbacks.map((feedback, idx) => (
              <div key={idx} className="each-frame border-box flex-none h-full" style={{ width: '750px' }}>
                <div className="main flex w-full p-8">
                  <div className="sub w-4/6 my-auto">
                    <img className="w-full p-8" src={feedback.product.image} alt={feedback.product.name} />
                  </div>
                  <div className="sub w-full my-auto">
                    <div className="head text-3xl font-bold mb-4">{feedback.product.name}</div>
                    <div className="text-xl font-semibold mb-2">Chef: {feedback.product.chef}</div>
                    <div className="long-text text-lg">{feedback.product.description}</div>
                    <div className="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer" onClick={() => handleApproval(feedback.id, 1)}>Approve</div>
                    <div className="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer" onClick={() => handleApproval(feedback.id, 0)}>Disapprove</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandlingFeedbacks;
