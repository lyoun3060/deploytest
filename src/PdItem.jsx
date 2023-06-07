import React from "react";
import styled from "styled-components";

const PdItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;


const PdItem = ({ article }) => {
  const { MAIN_TITLE, MAIN_IMG_NORMAL, ITEMCNTNTS } = article;
  return (
    <PdItemBlock>
      {MAIN_IMG_NORMAL && (
        <div className="thumbnail">
          <a href="MAIN_IMG_NORMAL" target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_NORMAL} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>{MAIN_TITLE}</h2>
        <p>{ITEMCNTNTS}</p>
      </div>
    </PdItemBlock>
  );
};

export default PdItem;
