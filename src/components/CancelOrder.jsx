import React, { useState } from "react";
import styled from "styled-components";
import databaseService from "../Firebase/Services/database";
const CancelOrder = ({ orderId,updateOrderStatus,setLoading}) => {
  const [showPopup, setShowPopup] = useState(false);
  async function CancelOrder(orderId) {
    setLoading(true);
    const response = await databaseService.updateAttribute(orderId,"status","cancelled");
    const response2 = await databaseService.updateAttribute(orderId,"isCancelled",true);
    const response3 = await databaseService.updateAttribute(orderId,"cancelledDate",new Date().toISOString());
    updateOrderStatus("cancelled");
    setLoading(false);
  }
  const handleCancelClick = () => {
    setShowPopup(true);
  };

  const handleConfirm = (confirm) => {
    if (confirm) {
      CancelOrder(orderId);
    }
    setShowPopup(false);
  };

  return (
    <StyledWrapper>
      <button onClick={handleCancelClick}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 122.879 122.879"
              enableBackground="new 0 0 122.879 122.879"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#FF4141"
                  d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                />
              </g>
            </svg>
          </div>
        </div>
        <span>Cancel Order</span>
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content text-xl font-semibold">
            <h2 className="text-xl font-semibold">
              Are you sure you want to cancel this order?
            </h2>
            <div className="buttons">
              <button className="confirm" onClick={() => handleConfirm(true)}>
                Yes
              </button>
              <button className="cancel" onClick={() => handleConfirm(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;

  button {
    font-family: inherit;
    font-size: 18px;
    font-weight: 600;
    background: #e4e4e4;
    color: black;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 50px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(3.2em) rotate(180deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(8em);
  }

  button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .popup-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    margin: 1rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .popup h2 {
    margin-bottom: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .buttons button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .confirm {
    background-color: #ff4141;
    color: white;
  }

  .cancel {
    background-color: #e4e4e4;
  }

  .confirm:hover {
    background-color: #d63838;
  }

  .cancel:hover {
    background-color: #ccc;
  }
`;

export default CancelOrder;
