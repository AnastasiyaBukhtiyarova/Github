import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import { toggleOption } from './options.actions.js';
import Options  from './Options.jsx';

const mapState = (state) => {
  return {
    options: selectedOptionsSelector(state),
  };
};
const mapDispatch = {
  moveOption: toggleOption,
};
export default connect(mapState, mapDispatch)(Options);
