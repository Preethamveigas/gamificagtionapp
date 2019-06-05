import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class CustomCheck extends Component {
  render() {
      const {title, checked} = this.props
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox checked={checked} />
            <Body>
              <Text>{title}</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}