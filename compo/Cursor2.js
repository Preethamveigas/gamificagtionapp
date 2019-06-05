import * as React from "react";
import {
  StyleSheet, View, Button, Text, PanResponder, Dimensions, Animated,
} from "react-native";
import { DangerZone } from "expo";
import { Interactable } from "react-native-redash";
import { Toast } from "native-base";

import { Feather } from "@expo/vector-icons";


// const { Animated } = DangerZone;

export default class Cursor2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragPointone: null,
      dragPointtwo: null,
      dragPointthree: null,
      dropZoneValues: null,
      bgColor: 'green',
      pan: new Animated.ValueXY(),
      circle_size : 50,
      icon_size : 64,
    };



    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (e, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // console.log(gestureState)
        let dzPrem = this.props.dropZonePrem
        let dzOther = this.props.dropZoneOther
        let dzCloud = this.props.dropZoneGc

        let gesX = gestureState.moveX
        let gesY = gestureState.moveY

        // console.log(gesX,gesY,)
        if (gesX > 50 && gesX < 200 && gesY < 520) {
          this.setState({bgColor:'red'})
          // set onprem active
          this.props.oP(true)
          this.props.gC(false)
          this.props.oC(false)


        }
        else if (gesX > 240 && gesX < 570 && gesY < 520) {

          this.props.oP(false)
          this.props.gC(true)
          this.props.oC(false)

        }
        else if (gesX > 570 && gesX < 720 && gesY < 520) {

          this.props.oP(false)
          this.props.gC(false)
          this.props.oC(true)

        }
        else{
          this.props.oP(false)
          this.props.gC(false)
          this.props.oC(false)
        }
        // console.log(dz.y,gestureState.moveX, gestureState.moveY, dz.y + dz.height)
        Animated.event([null, { //Step 3
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }])(e, gestureState);

      },
      // onPanResponderMove: () =>Animated.event([null, { //Step 3
      //   dx: this.state.pan.x,
      //   dy: this.state.pan.y
      // }]),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (e, gesture) => {
        // let dz = this.state.dropZoneValues
        let dzPrem = this.props.dropZonePrem
        let dzOther = this.props.dropZoneOther
        let dzCloud = this.props.dropZoneGc
        
        let gesX = gesture.moveX
        let gesY = gesture.moveY
        console.log(dzPrem, gesX, gesY)

        if (gesX > 50 && gesX < 200 && gesY < 520) {
            this.setState({ bgColor: 'red',circle_size:30,icon_size:24 })
            Animated.spring(            //Step 1
              this.state.pan,         //Step 2
              { toValue: { x: -330  , y: -250 } }     //Step 3
            ).start();
            this.props.comment(true)

          }
          else if (gesX > 240 && gesX < 570 && gesY < 520) {
            this.setState({ bgColor: 'red',circle_size:50,icon_size:64 })
            Animated.spring(            //Step 1
              this.state.pan,         //Step 2
              { toValue: { x: -50, y: -270 } }     //Step 3
            ).start();
            this.props.comment(true)

          }
          else if (gesX > 570 && gesX < 720 && gesY < 520) {
            this.setState({ bgColor: 'red',circle_size:30,icon_size:24 })
            Animated.spring(            //Step 1
              this.state.pan,         //Step 2
              { toValue: { x: 200, y: -250 } }     //Step 3
            ).start();
            this.props.comment(true)

          }
          else {
            Animated.spring(            //Step 1
                this.state.pan,         //Step 2
                {toValue:{x:0,y:0}}     //Step 3
            ).start();
            this.props.comment(false)
            this.setState({circle_size:50,icon_size:64 })

          }

      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }


  componentWillReceiveProps() {
    // const { reset } = this.props.reset;
  }
  componentDidMount(){
    this.props.reset(this.reset)
  }
    reset = () => {
      Animated.spring(            //Step 1
        this.state.pan,         //Step 2
        {toValue:{x:0,y:0}}     //Step 3
    ).start();
        this.setState({
            circle_size:50,
            icon_size:64,
        })

    }
  componentDidUpdate() {
    // componet update states are held here
  }

  isDropZone(gesture) {     //Step 2
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {      //Step 1
    this.setState({
      dropZoneValues: event.nativeEvent.layout
    });
  }
  render() {
    const { color, dropZoneValues, bgColor, circle_size, icon_size } = this.state;
    // console.log(dropZoneValues)
    const { size, count, x: animatedValueX, reset } = this.props;
    return <View  style={[StyleSheet.absoluteFill,{
        left:450
      }]}>
      {/* <View
        style={[styles.dropZone, { backgroundColor: bgColor }]}>
        <Text style={styles.text}>Drop me here!</Text>
      </View> */}
      <Animated.View
        {...this._panResponder.panHandlers}                       //Step 1

        style={[this.state.pan.getLayout(), {
            backgroundColor: '#1abc9c',
          width: circle_size * 2,
          height: circle_size * 2,
          borderRadius: circle_size
        }]}
      >
        {/* <Text style={styles.text}>{color}</Text> */}
        <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 10,
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
              }}
            >
              <Feather name="message-circle" size={icon_size} color="white" style={{
             shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,

            
                
              }} />
               
            </View>


      </Animated.View>
    </View>
  }
}


let CIRCLE_RADIUS = 50;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  dropZone: {
    height: 100,
    width: 100,
    backgroundColor: '#2c3e50',
    top: -260,
    left: 40,
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff'
  },
  draggableContainer: {
    position: 'absolute',
    top: Window.height / 2 - CIRCLE_RADIUS,
    left: Window.width / 2 - CIRCLE_RADIUS,
  },
  circle: {
    backgroundColor: '#1abc9c',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});