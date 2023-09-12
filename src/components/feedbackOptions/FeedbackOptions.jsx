import { nanoid } from 'nanoid';

import { ButtonsStyle } from './FeedbackOption.styled';

export const FeedbackOptions  = ({ onLeaveFeedback, option }) => {
  return ( 
    <ButtonsStyle>
    {option.map(feedback => (
        <button className="button"
          type="button"
          key={nanoid()}
              onClick={() => onLeaveFeedback(feedback)} >{feedback}</button>
              ))}
              </ButtonsStyle>
  )
 };

