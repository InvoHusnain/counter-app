import React, { useState } from "react";
import Slider from "react-slick";
import "../../App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabs = [
  {
    title: "Tab 1",
    content: [
      {
        id: 1,
        imageSrc: "https://picsum.photos/id/1003/600/400",
      },
      {
        id: 2,
        imageSrc: "https://picsum.photos/id/1015/600/400",
      },
    ],
  },
  {
    title: "Tab 2",
    content: [
      {
        id: 1,
        Text: "HEllo",
      },
      {
        id: 2,
        imageSrc: "https://picsum.photos/id/103/600/400",
      },
    ],
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function MyComponent() {
  const [currentTab, setCurrentTab] = useState(0);
  function handleTabChange(index) {
    setCurrentTab(index);
  }
  return (
    <>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={index === currentTab ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="slider">
        <Slider {...settings}>
          {tabs[currentTab].content.map((item) => (
            <>
              {item.imageSrc ? (
                <div key={item.id}>
                  <img src={item.imageSrc} alt={item.id} />
                </div>
              ) : (
                <div key={item.id}>
                  <p>{item.Text} </p>
                </div>
              )}
            </>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default MyComponent;
