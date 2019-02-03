import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dismiss from './dismiss.svg';

const GridItem = styled.div`
  flex-basis: 25%;
  padding-right: .5rem;
  padding-left: .5rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
	background: gray;
	@media (max-width: 700px) {
		flex-basis: 100%;
	}
  a {
  	text-decoration: none;
  	color: black;
  }
`;

const Img = styled.img`
  display: block;
  max-height: 200px;
  width: auto;
  margin: 0 auto 1em;
`;

const Box = styled.div`
	background: #00BCD4;
	padding: 2rem 1rem;
	height: 350px;
	box-sizing: border-box;
	position: relative;
	.dismiss {
		position: absolute;
		width: 12px;
		display: none;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
	&:hover {
	  z-index: 10;
	  .dismiss {
	    display: block;
	  }
	}
`;

const Sauce = (props) => (
  <GridItem>
  	<Box>
	    <Link to={`/hotsauce/${props.id}`}>
	      <Img src={props.imageURL} alt={props.title} />
	      <p>{props.title}</p>
	      <p>{props.subtitle}</p>
	    </Link>
	    <img src={dismiss} className="dismiss" alt="logo" onClick={() => props.removeHotSauce(props.id)} />
  	</Box>
  </GridItem>
);

Sauce.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Sauce;
