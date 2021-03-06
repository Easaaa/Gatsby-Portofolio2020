import styled from 'styled-components';
import Background from '../../assets/PlayBG.png';

export const StyledHeader = styled.header`
	@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap');

	height: 80vh;
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
	display: grid;
	place-content: center;
	background: rgba(220, 219, 234, 0.4);

	@media (min-width: 900px) {
		height: 60vh;
		padding: 10rem;
		justify-content: start;
		align-content: center;
	}

	h5 {
		text-transform: uppercase;
		color: ${({ theme }) => theme.mint};
		opacity: 0.5;
		font-weight: 400;
		font-size: .9rem;
		letter-spacing: 0.08em;

		@media (min-width: 600px) {
			font-size: 1.2rem;
			margin: 0;
		}
	}

	h1 {
		margin: 0.2em 0;
		font-size: 4rem;
		letter-spacing: 0.05em;

		@media (min-width: 600px) {
			font-size: 6rem;
		}
	}
`;

export const Tags = styled.div`display: flex;`;

export const Tag = styled.div`
	padding: .1rem .5rem;
	background: ${(props) => (props.coding ? '#5DCC7C' : '#5DB8CC')};
	border-radius: 5px;
	margin: 1rem .2rem;
	font-size: .9rem;
`;
