import * as React from "react";
import { StyleSheet, View, Button, Text, PanResponder, Dimensions } from "react-native";
import { DangerZone } from "expo";
import { Interactable } from "react-native-redash";
import { Toast } from "native-base";

import { Feather } from "@expo/vector-icons";
import axios from "axios";
const Like_URI = "http://35.224.245.248:1200/enablelike";

const { Animated } = DangerZone;
const { Value } = Animated;

export default class Cursor extends React.Component {
  constructor(props) {
    super(props)

    this._Cursor = React.createRef();

    this.state = {
      snapToIndex: [{ x: 50, y: -300 }],
      snapped: false,
      color: "#fff",
      backgroundColor: "#fe5f55",
      like: false,
      snapPoints: [{ y: -0 }, { x: 50, y: -260 }],
      fadeAnim: new Animated.Value(0),
      key:0, // Initial value for opacity: 0
    };
    this.snapps = this.snapps.bind(this);
  }
  setNativeProps = (nativeProps) => {
    this._Cursor.setNativeProps(nativeProps);
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.props.like !== nextProps.props.like){
  //     return true
  //   }
  //   if(this.state.like !== nextState.like){
  //     return true
  //   }
  //   return false;
  // }
  async componentDidMount() {
    setNativeProps = (nativeProps) => {
      this.panel.setNativeProps(nativeProps);
    }
  }


  componentWillReceiveProps(pre, next) {
   
     const { reset } = this.props;
     if(reset){
      console.log(reset, this.state.like)
      if(this.state.like){
        this.setState({key:this.state.key+1, like:false})
      }
      
    }


   }


  onButtonPress() {
    // this.refs["headInstance"].snapTo({ index: this.state.snapToIndex });
    this.setState({
      snapToIndex: (this.state.snapToIndex + 1) % 10
    });
  }
  // dragged = ({ nativeEvent }) => {
  //   console.log("Drags", nativeEvent.x, nativeEvent.y);

  //   // if (nativeEvent.x < 51 && nativeEvent.y < -300) {
  //   // }
  // };

  snapps = async ({ nativeEvent }) => {
    console.log("snap", nativeEvent.x, nativeEvent.y);
      

    if (nativeEvent.x === 50 && nativeEvent.y === -260) {
      if (!this.state.snapped) {
        this.setState({
          snapped: true,
          backgroundColor: "green",
          color: "white",
          like: true,
          likeStart: true,
        });
        this.props.like(true)


        // Toast.show({
        //   text: "Deployemnt Initiated",
        //   buttonText: "Okay",
        //   duration: 5000
        // });

      }
    }

    if (nativeEvent.x === undefined && nativeEvent.y === -0) {
      if (this.state.snapped) {
        this.setState({
          snapped: false,
          backgroundColor: "#fe5f55",
          color: "#fff",
          like: false,
          likeStart: false
        });
        this.props.like(false)

      }
    }
  };

  render() {
    const { color } = this.state;
    const { size, count, x: animatedValueX, reset } = this.props;
    const { snapPoints } = this.state
    // const snapPoints = new Array(count)
    //   .fill(0)
    //   .map((e, i) => ({ y: -(i * size) }));
    // const index = round(divide(animatedValueX, size));
    // console.log(snapPoints);
    // console.log("rendering");
    // console.log(t);

    return (
      <Interactable
      key={this.state.key}
         ref={this._Cursor}
        {...{ snapPoints, animatedValueX }}
        style={[
          {
            position: "absolute",
            left: 200,
            bottom: 25,

          }
        ]}
        dragWithSpring={{ tension: 2000, damping: 0.5 }}

        onDrag={this.dragged}
        onSnap={this.snapps}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            width: size,
            height: size,
            borderRadius: size / 2,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: this.state.backgroundColor,
            // transform:[
            //   { translateX: reset.reset ? '100deg' :0},
            //   { translateY:  reset.reset ? '100deg' :0},
            // ]
          }}
        >
          {
            // For an implementation of ReText on android look at
            // https://bit.ly/2DXZFbS
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 10
              }}
            >
              <Feather name="thumbs-up" size={60} color="white" />
              <Button
                title={""}
                onPress={this.onButtonPress.bind(this)}
                color={color}
                style={{ justifyContent: "center", alignItems: "cent" }}
              />
            </View>
          }
        </Animated.View>
      </Interactable>
    )
  }
}
