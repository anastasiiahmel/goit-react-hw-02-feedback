import { styled } from 'styled-components';

export const ButtonsStyle = styled.div`
  display: flex;
  gap: 20px;
  .button {
    cursor: pointer;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
    color: #ffffff;
    background-color: #add8e6;
    font-family: 'Times New Roman', Times, serif;
  }
  .button:hover,
  .button:focus,
  .button:active {
    font-size: 15px;
    background-color: #c0c0c0;
  }
`;
