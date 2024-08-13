import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles";
import NFT from "../images/nft.png";
import oval from "../images/Oval.svg";
import { IoEyeSharp as Eye } from "react-icons/io5";
import { FaEthereum as ETH } from "react-icons/fa";
import { HiClock as Clock } from "react-icons/hi2";
import { motion } from "framer-motion";

const StyledCard = styled.article`
  background-color: ${colors.cardBg};
  display: flex;
  flex-direction: column;
  height: 596px;
  width: 100%;
  max-width: 350px;
  border-radius: 16px;
  padding: 24px;
  gap: 24px;

  .img-container {
    background-image: url(${NFT});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    max-height: 278px;
    .hover-effect {
      cursor: pointer;
      height: 100%;
      width: 100%;
      display: grid;
      place-items: center;
      font-size: 48px;
      color: white;
      background-color: rgba(0, 255, 248, 0.7);
      border-radius: 8px;
      transition: all 0.2s ease;
    }
  }

  .title,
  #name {
    color: ${colors.title};
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${colors.cyan};
    }
  }

  .title {
    font-weight: 700;
    font-size: 22px;
  }

  .desc {
    color: ${colors.regularText};
  }

  .desc {
    font-weight: 300;
    font-size: 18px;
  }

  .pricing {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .currency {
      color: ${colors.cyan};
      font-weight: 600;
      font-size: 20px;
      gap: 4px;
    }
    .time {
      color: ${colors.regularText};
      font-weight: 500;
      font-size: 18px;
      gap: 8px;
    }

    .currency,
    .time {
      display: flex;
      align-items: center;
    }
  }

  hr {
    height: 1px;
    border: solid 1px ${colors.line};
    margin-top: 8px;
  }

  .creator {
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${colors.regularText};
  }
`;

const effectVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  rest: {
    opacity: 0,
  },
};

export default function Card() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <StyledCard>
      <section
        className="img-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovering && (
          <motion.span
            variants={effectVariants}
            initial="rest"
            animate="hover"
            className="hover-effect"
          >
            <Eye aria-label="an eye icon" />
          </motion.span>
        )}
      </section>
      <h1 className="title" aria-label="name of the NFT">
        Equilibirum #3429
      </h1>
      <p className="desc">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <section className="pricing">
        <span className="currency">
          <ETH id="eth" /> 0.041 ETH
        </span>
        <span className="time">
          <Clock /> 3 Days Left
        </span>
      </section>
      <hr />
      <section className="creator">
        <img src={oval} alt="" />
        <p>
          Creation by{" "}
          <span id="name" aria-label="creator">
            Jules Wyvern
          </span>
        </p>
      </section>
    </StyledCard>
  );
}
