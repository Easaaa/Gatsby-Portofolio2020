import styled from 'styled-components';

export const ArticleContainer = styled.article`
	position: relative;
	max-width: 1000px;
	padding: 6rem 2rem;
	border-radius: 20px;
	display: grid;
	grid-gap: 1rem;
	justify-content: start;
	align-content: center;
	align-items: center;
	grid-template-areas: "img" "header" "sub";

	@media only screen and (min-width: 800px) {
		grid-template-areas: "img header header" "img sub sub";
		height: 40vh;
	}

	img {
		grid-area: img;
		width: 200px;
		height: 200px;
		position: absolute;
		bottom: -2.5rem;
		left: 2rem;

		@media only screen and (min-width: 800px) {
			position: initial;
		}
	}

	header {
		grid-area: header;

		@media only screen and (min-width: 800px) {
			padding-left: 2rem;
		}

		h3 {
			font-family: "Playfair Display";
			font-weight: bold;
			font-size: 3rem;
			letter-spacing: 0.05em;
			color: #3f3d56;
		}
		small {
			font-weight: normal;
			line-height: 3rem;
			font-size: 1rem;
			letter-spacing: 0.05em;
			color: rgba(63, 61, 86, 0.6);
		}
	}

	section {
		grid-area: sub;
		padding: 2rem;

		@media only screen and (min-width: 800px) {
			padding-left: 2rem;
		}

		h1,
		h2,
		h3,
		h4,
		h5 {
			font-family: "Playfair Display";
		}

		h2 {
			line-height: 3rem;
			font-size: 2.5rem;
		}
		h3 {
			line-height: 2.5rem;
			font-size: 2rem;
		}

		p {
			font-size: 1.4rem;
			letter-spacing: 0.05em;
			color: rgba(63, 61, 86, 0.6);
			padding: 3rem 0;
		}

		li {
			font-size: 1.4rem;
			letter-spacing: 0.05em;
			color: rgba(63, 61, 86, 0.9);
			font-weight: bold;
		}
		blockquote {
			background: #f9f9f9;
			border-left: 10px solid #ccc;
			margin: 1.5em 10px;
			padding: 0.5em 10px;
			quotes: "\201C""\201D""\2018""\2019";

			&:before {
				color: #ccc;
				content: open-quote;
				font-size: 4em;
				line-height: 0.1em;
				margin-right: 0.25em;
				vertical-align: -0.4em;
			}
		}

		blockquote p {
			display: inline;
		}

		/* 	blockquote {
			background: whitesmoke;
			p {
				padding-left: 2rem;
				line-height: 2rem;
				font-size: 1.6rem;
				color: rgba(63, 61, 86, 0.8);
			}
		} */
	
`;

export const ArticleStyled = styled.section`
	p {
		font-size: 1.4rem;
		letter-spacing: 0.05em;
		color: rgba(63, 61, 86, 0.85);
	}
`;
