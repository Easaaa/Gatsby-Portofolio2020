import styled from 'styled-components';

export const ContactContainer = styled.section`
	padding: 2rem;
	display: grid;
	place-items: center;
	max-width: 900px;
	margin: 0 auto;

	p {
		color: #61626d;
		padding-bottom: 2rem;
		text-align: end;
		font-weight: 200;
		line-height: 35px;
		font-size: 1.3rem;

		@media (min-width: 600px) {
			line-height: 2.7rem;
		}
	}
`;

export const Title = styled.h3`
	font-size: 2.5rem;
	text-align: end;
	padding: 1rem;
	width: 100%;
`;

export const SocialLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;

	@media (min-width: 600px) {
		flex-direction: row;
	}
`;

export const SocialLink = styled.div`
	max-width: 300px;
	width: 100%;
	padding: 1.5rem;
	font-size: 1.3rem;
	display: grid;
	place-content: center;
	margin: 1.3rem 0;
	background-color: #f3f3f3;
	border-radius: 10px;

	@media (min-width: 600px) {
		margin: 1.3rem;
	}
`;
