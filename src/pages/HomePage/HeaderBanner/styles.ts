import styled from 'styled-components';

export const BannerContainer = styled.section`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 3.5rem;
  justify-content: space-between;

  & h2 {
    color: ${(props) => props.theme.color.brown500};
    font-size: ${(props) => props.theme.font.text['2xl']};
    font-weight: 400;
    line-height: 1.3;
    margin-top: 1rem;
  }

  & > img {
    width: 30rem;
  }
`;
