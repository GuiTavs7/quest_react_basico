import './paragrafo.css'
import PropTypes from 'prop-types';

const Paragrafo = ({label, color}) => {
    return (
     <>
        <div className='container'>
            <p style={{color: color}}>
            {label.toUpperCase()}
            </p>
        </div>     
     </>
    )
}

Paragrafo.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};


Paragrafo.defaultProps = {
    color: 'blue'
};

export default Paragrafo;