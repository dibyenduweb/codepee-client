import PropTypes from 'prop-types';
const Container = ({children}) => {
    return(
        <div >
             {children}
        </div>
    )}

    Container.propTypes = {
        children: PropTypes.node,
        otherProp: PropTypes.any,
      };
export default Container;