import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
