import React, { Component } from 'react';
import CheckBoxs from './common/CustomCheck'
import {View} from 'react-native'

export default CommentCheck = (props) =>  {
  
      const {checked} = props
    return (    
      <CheckBoxs checked title="Comment"/>
  )
}