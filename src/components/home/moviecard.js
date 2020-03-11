import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 20px auto;
  position: relative;
  height: 300px;
  width: 220px;
  background: #2196f378;
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgb(47, 39, 46);
`;

const Image = styled.div`
  height: 320px;
  width: 100%;
`;
const Image_img = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  width: auto;
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
  height: 500px;
  width: 100%;
  top: 0;
  transition: all 0.5s ease;

  ${Card}:hover & {
    top: -130px;
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
  top: 300px;
  height: 100px;
  align-items: center;
`;

const Span = styled.span`
  text-align: center;
`;

const MovieCard = props => {
  return (
    <Card>
      <Image>
        <Image_img src={props.image_link} alt=""/>
        <Wrap>
          <Title>
            <Span>{props.movie_name}</Span>
          </Title>
          <Rating>
            <Span>{props.movie_rating}</Span>
          </Rating>
        </Wrap>
      </Image>
    </Card>
  );
};

export default MovieCard;
