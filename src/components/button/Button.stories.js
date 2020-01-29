import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

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


export default {
  title: 'Buttons',
  component: Button,
};



export const DefaultButton = () => <Button  type='primary' onClick={action('clicked')}>Hello Button</Button>;
DefaultButton.story = {
  name: 'Default Button '
}

export const PrimaryButton = () => <Button type='primary' >Primary</Button>;
PrimaryButton.story = {
  name: 'Primary Button'
}

export const SecondaryButton = () => <Button type='secondary' >Secondary</Button>;
SecondaryButton.story = {
  name: 'Secondary Button'
}

export const DangerButton = () => <Button type='danger' >Danger</Button>;
DangerButton.story = {
  name: 'Danger Button'
}

export const SmallButton = () => <Button type='primary' size='small' >Small</Button>;
SmallButton.story = {
  name: 'Small Button'
}

export const MediumButton = () => <Button type='primary' size='medium' >Medium</Button>;
MediumButton.story = {
  name: 'Medium Button'
}

export const LargeButton = () => <Button type='primary' size='large' >Large</Button>;
LargeButton.story = {
  name: 'Large Button'
}

export const DisabledButton = () => <Button type='danger' size='small' disabled={true} >Disabled</Button>;
DisabledButton.story = {
  name: 'Disabled Button'
}