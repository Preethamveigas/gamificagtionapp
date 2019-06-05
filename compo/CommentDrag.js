import * as React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { DangerZone } from "expo";
import { Interactable } from "react-native-redash";
import axios from "axios";
const { Animated } = DangerZone;


import { Feather } from "@expo/vector-icons";

export default class RightDrag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snapToIndex: [{ x: 50, y: -300 }],
      snapped: false,
      color: "#ffffff",
      backgroundColor: "#fe5f55",
      comment: "Comment /Off"
    };
    this.dddd = "";
    this.snapps = this.snapps.bind(this);
  }


componentWillReceiveProps(){
  const {comment} = this.state
  if(comment){
    this.props.comment = true 
  }
  this.props.comment = false
  
}
componentDidUpdate(){
  const {comment} = this.state
  if(comment){
    this.props.comment = true 
  }
  this.props.comment = false
  
}

  onButtonPress() {
    // this.refs["headInstance"].snapTo({ index: this.state.snapToIndex });
    this.setState({
      snapToIndex: (this.state.snapToIndex + 1) % 10
    });
  }
  dragged = ({ nativeEvent }) => {
    // console.log("Drags", nativeEvent.x, nativeEvent.y);

    if (nativeEvent.x < 51 && nativeEvent.y < -300) {
    }
  };

  snapps = ({ nativeEvent }) => {
    console.log(nativeEvent.x)


    
    if (nativeEvent.x === -20 && nativeEvent.y === -260) {
      if (!this.state.snapped) {
        this.setState({
          snapped: true,
          backgroundColor: "green",
          color: "white",
          comment: "Comment /On",
          commentStart:true
        });
        this.props.comment(true)

    }
  }

     else if (nativeEvent.x == -0) {
      console.log("comment return")
      if (this.state.snapped) {
        this.setState({
          snapped: false,
          backgroundColor: "#fe5f55",
          color: "#fff",
          comment: "Comment /Off",
          commentStart:false
        });

        this.props.comment(false)

      }
    }
  };

  render() {
    const { color } = this.state;
    const { size, count, x: animatedValueX } = this.props;
    // const snapPoints = new Array(count)
    //   .fill(0)
    //   .map((e, i) => ({ y: -(i * size) }));
    // const index = round(divide(animatedValueX, size));
    let snapPoints = [{ x: -0 }, { x: -20, y: -260 }];
    // console.log(snapPoints);
    // console.log(JSON.stringify(this.dddd));
    // console.log(t);

    return (
      <Interactable
        {...{ snapPoints, animatedValueX }}
        style={[
          {
            position: "absolute",
            right: 400,
            bottom: 25
          }
        ]}
        onDrag={this.dragged}
        onSnap={this.snapps}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "white",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            alignSelf: "flex-end",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: this.state.backgroundColor
          }}
        >
          {
            // For an implementation of ReText on android look at
            // https://bit.ly/2DXZFbS
            <View
              style={{
                justifyContent: "center",
                alignItems: "cent",
                paddingTop: 10
              }}
            >
              <Feather name="message-circle" size={60} color="white" />
              <Button
                title={""}
                onPress={this.onButtonPress.bind(this)}
                color={color}
              />
            </View>
          }
        </Animated.View>
      </Interactable>
    );
  }
}