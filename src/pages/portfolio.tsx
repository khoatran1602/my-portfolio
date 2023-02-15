import React from "react";
import Image from "next/image";

const PortfolioPage = () => {
  return (
    <div className="grid grid-flow-row grid-rows-2 ml-40 mr-10">
      <h2>Portfolio</h2>
      <div className="grid">
        <div className="grid-item">
          <a href="#" target="_blank">
            <div className="portfolio-image">
              <Image
                src="https://assets.codepen.io/9277864/schedule-milestone-2.svg"
                alt="Project 1"
                width="200"
                height="200"
              />
            </div>
            <div className="portfolio-description">
              <h3>Portfolio Item 1</h3>
              <p>Project Explanation</p>
            </div>
          </a>
        </div>

        <div className="grid-item">
          <a href="#" target="_blank">
            <div className="portfolio-image">
              <Image
                src="https://assets.codepen.io/9277864/designer-desk-1.svg"
                alt="Project 2"
                width="200"
                height="200"
              />
            </div>
            <div className="portfolio-description">
              <h3>Portfolio Item 1</h3>
              <p>Project Explanation</p>
            </div>
          </a>
        </div>
        <div className="grid-item">
          <a href="#" target="_blank">
            <div className="portfolio-image">
              <Image
                src="https://assets.codepen.io/9277864/project-timeline-2.svg"
                alt="Project 3"
                width="200"
                height="200"
              />
            </div>
            <div className="portfolio-description">
              <h3>Portfolio Item 1</h3>
              <p>Project Explanation</p>
            </div>
          </a>
        </div>
        <div className="grid-item">
          <a href="#" target="_blank">
            <div className="portfolio-image">
              <Image
                src="https://assets.codepen.io/9277864/business-presentation-1.svg"
                alt="Project 4"
                width="200"
                height="200"
              />
            </div>
            <div className="portfolio-description">
              <h3>Portfolio Item 1</h3>
              <p>Project Explanation</p>
            </div>
          </a>
        </div>

        <div className="grid-item">
          <a href="#" target="_blank">
            <div className="portfolio-image">
              <Image
                src="https://assets.codepen.io/9277864/product-development-1.svg"
                alt="Project 5"
                width="200"
                height="200"
              />
            </div>
            <div className="portfolio-description">
              <h3>Portfolio Item 1</h3>
              <p>Project Explanation</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
