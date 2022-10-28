import styled from 'styled-components';

export const SuccessContainer = styled.main`
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.gray100};
  display: flex;
  gap: 6.375rem;
  justify-content: space-between;
  margin: 0 auto;
  max-width: calc(100vw - 20rem);
  padding-top: 5rem;
  width: 100%;

  & > img {
    width: 30.75rem;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.color.brown500};
  font-size: ${(props) => props.theme.font.text['2xl']};
  line-height: 1.3;
  margin-top: 0.25rem;
`;

export const PurchaseInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  border-radius: ${(props) =>
    `${props.theme.border.radius.md} ${props.theme.border.radius.lg}`};
  padding: 2.5rem;
  background: ${(props) => props.theme.color.gray100};
  background-clip: padding-box;
  border: solid 1px transparent;

  & > div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`;

export const PurchaseInfoBorder = styled.div`
  margin-top: 2.5rem;
  border-radius: ${(props) =>
    `${props.theme.border.radius.md} ${props.theme.border.radius.lg}`};
  background: ${(props) =>
    `linear-gradient(102deg, ${props.theme.color.yellow700}, ${props.theme.color.purple700})`};
`;
