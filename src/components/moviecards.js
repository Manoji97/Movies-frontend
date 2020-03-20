import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const bigcard = {
  card_height: "300px",
  card_width: "220px",
  card_font_size: "1.5rem",
  cardhover_wrap: "-130px",
  image_height: "320px",
  wrap_height: "500px",
  rating_top: "300px"
};

const minicard = {
  card_height: "230px",
  card_width: "170px",
  card_font_size: "1rem",
  cardhover_wrap: "-100px",
  image_height: "250px",
  wrap_height: "430px",
  rating_top: "230px"
};

const Card = styled.div`
  margin: 20px auto;
  position: relative;
  height: ${props =>
    props.small ? minicard.card_height : bigcard.card_height};
  width: ${props => (props.small ? minicard.card_width : bigcard.card_width)};
  background: #2196f378;
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;
  font-size: ${props =>
    props.small ? minicard.card_font_size : bigcard.card_font_size};
  border-radius: 5px;
  border: 3px solid rgb(222, 222, 222);
  box-shadow: 0 5px 10px rgb(47, 39, 46);

  &:hover {
    border: 3px solid #73ad21;
  }
`;

{
  /* #73AD21 */
}

const Image = styled.div`
  height: ${props =>
    props.small ? minicard.image_height : bigcard.image_height};
  width: 100%;
`;
const Image_img = styled.img`
  height: auto;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.5s ease;

  ${Card}:hover & {
    top: -10px;
    filter: blur(5px);
    transform: scale(1.1);
  }
`;
const Wrap = styled.div`
  background: linear-gradient(0deg, black 40%, transparent);
  position: absolute;
  height: ${props =>
    props.small ? minicard.wrap_height : bigcard.wrap_height};
  width: 100%;
  top: 0;
  transition: all 0.5s ease;

  ${Card}:hover & {
    top: ${props =>
      props.small ? minicard.cardhover_wrap : bigcard.cardhover_wrap};
  }
`;
const Title = styled.div`
  padding: 10px 20px;
  position: absolute;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 200px;
  height: auto;
`;
const Rating = styled.div`
  padding: 10px 20px;
  position: absolute;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  top: ${props => (props.small ? minicard.rating_top : bigcard.rating_top)};
  height: 100px;
  align-items: center;
`;

const Span = styled.span`
  text-align: center;
`;

export const MiniMovieCard = props => {
  return (
    <Card small>
      <Image small>
        <Image_img src={props.image_link} alt="" />
        <Wrap small>
          <Title>
            <Span>{props.movie_name}</Span>
          </Title>
          <Rating small>
            <Span>{props.movie_rating}</Span>
          </Rating>
        </Wrap>
      </Image>
    </Card>
  );
};

export const MovieCard = props => {
  return (
    <Card>
      <Link to={props.detail_link}>
        <Image>
          <Image_img src={props.image_link} alt="" />
          <Wrap>
            <Title>
              <Span>{props.movie_name}</Span>
            </Title>
            <Rating>
              <Span>{props.movie_rating}</Span>
            </Rating>
          </Wrap>
        </Image>
      </Link>
    </Card>
  );
};
