import styled from 'styled-components';

export const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.backgroundColor};
  transition: all ${p => p.theme.colors.transition};
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.textPrimary};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.backgrounColorAccent};
  }
`;
