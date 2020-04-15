import styled from 'styled-components';

export const ProjectContainer = styled.section`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Quicksand:400,600&display=swap');
	max-width: 1200px;
	margin: 5rem 1rem;
	padding: 4rem 2rem;
	display: grid;
	place-content: center;
	background: #ffffff;
	box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.09);
	border-radius: 20px;

	@media (min-width: 850px) {
		grid-template-columns: 1fr 1fr;
		height: 400px;
	}
`;

export const ColumnText = styled.div`
	place-self: center;
	position: relative;
	@media only screen and (min-width: 850px) {
		order: ${({ order1, order2 }) => (order1 ? order1 : order2)};
	}
`;
export const ColumnMedia = styled.div`
	place-self: center;
	place-content: center;
	display: grid;
	position: relative;

	@media only screen and (min-width: 850px) {
		order: ${({ order1, order2 }) => (order1 ? order1 : order2)};
		top: 15rem;
	}
`;
export const Title = styled.h3`
	max-width: 900px;
	margin: 0 auto;
	font-size: 2.5rem;
	text-align: start;
	padding: 3rem 2rem;
	width: 100%;

	@media only screen and (min-width: 600px) {
		text-align: end;
		padding: 10rem 5rem 5rem 5rem;
	}
`;

export const ProjectTitle = styled.h4`
	font-family: 'Montserrat', sans-serif;
	font-size: 40px;
	line-height: 45px;
	text-transform: inherit;
	display: flex;
	align-items: center;
	letter-spacing: 0.05em;
	color: #3f3d56;
	font-weight: 400;
	margin: 3rem 0 1rem 0;
`;

export const ProjectNumb = styled.span`
	font-style: normal;
	font-weight: bold;
	font-size: 200px;
	line-height: 65px;
	display: flex;
	align-items: center;
	letter-spacing: 0.05em;
	color: rgba(14, 14, 14, 0.05);
`;

export const ProjectImageMobile = styled.img`
	position: relative;
	left: 12%;
	width: 80%;
	top: 3rem;
	max-width: 400px;

	/* @media (min-width: 850px) {
		width: 100%;
		transition: transform 400ms ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
	} */
`;

export const ProjectImageDesk = styled.img`
	position: relative;
	width: 100%;
	max-width: 600px;

	@media (min-width: 850px) {
		width: 100%;
		transition: transform 400ms ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
	}
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	padding-top: 1rem;

	@media only screen and (min-width: 600px) {
	}
`;

export const Tag = styled.p`
	font-family: 'Quicksand', sans-serif;
	background: #f2f3f5;
	padding: 0.1rem 1.5rem;
	margin: 0.5rem;
	font-size: 1rem;
	border-radius: 20px;
	font-weight: 400;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 45px;
	display: flex;
	align-items: center;
	text-align: center;
`;
export const SocialsContainer = styled.div`
	padding: 1rem 0;
	display: inline-flex;
	justify-content: center;
	position: relative;

	a {
		text-transform: uppercase;
		padding: .4rem 1rem;
		color: #3f3d56;
		margin: 0 10px;
		cursor: pointer;
		transition: background-color 100ms ease-in;

		&:first-of-type {
			border: 2px solid #3f3d56;
			border-radius: 15px;
		}
	}

	@media only screen and (min-width: 600px) {
		padding: 0 2rem;
	}
`;
