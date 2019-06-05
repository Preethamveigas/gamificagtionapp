import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body
} from "native-base";
import { DangerZone, GestureHandler } from "expo";

const { RectButton } = GestureHandler;
console.log(GestureHandler);

export default class CheckBoxExample extends Component {
  render() {
    const { title, checked } = this.props;
    return <RectButton />;
  }
}
