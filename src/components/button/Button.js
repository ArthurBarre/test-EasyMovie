import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const config = {
  colors:{
    primary: {
      default :'#007bff',
      hover:  '#0069d9'
    },
    secondary: {
      default:'#6c757d',
      hover:'#5a6268'
    },
    danger:{
      default:'#dc3545',
      hover:'#c82333'
    },
    disabled:{
      default:'#E7E7E7'
    }
  },
  sizes: {
    small:'8px',
    medium:'12px',
    large:'16px',
  }
};

let {colors} = config;
let {sizes} = config;

const StyledButton = styled.button`
  background-color: ${(props) => props.conf.colors[props.type].default};
  font-size: 16px;
  width: min-width;
  font-size: ${(props) =>  props.conf.sizes[props.size]};
  border: 1px solid #E7E7E7;
  color: white;
  padding: 12px 12px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
    :hover  {
      background-color:${(props) => props.conf.colors[props.type].hover};
    };
    
    :disabled {
      background-color:${(props) => props.conf.colors['disabled'].default};
    }
`;



const Button = ({ children, onClick, type, size, disabled}) => {
  
  return(
    <StyledButton conf={config}
    type={type}
    size={size}
    disabled={disabled}
    onClick={onClick}>
      {children}
    </StyledButton>
  )
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onclick: PropTypes.func,
  conf: PropTypes.object
}
Button.defaultProps = {
  type: 'primary',
  size: 'small',
  disabled: false,
  conf:{
    colors:{
      primary: {
        default :'#007bff',
        hover:  '#0069d9'
      },
      secondary: {
        default:'#6c757d',
        hover:'#5a6268'
      },
      danger:{
        default:'#dc3545',
        hover:'#c82333'
      },
      disabled:{
        default:'#E7E7E7'
      }
    },
    sizes: {
      small:'8px',
      medium:'12px',
      large:'16px',
    }
  }
};

export default Button;