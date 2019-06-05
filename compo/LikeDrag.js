import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  TouchableOpacity
} from "react-native";
// import console = require("console");
import { DangerZone, GestureHandler } from "expo";

export default class LikeDrag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      inArea: false,
      reset: false
    };

    this._val = { x: 10, y: 20 };
    this.state.pan.addListener(value => (this._val = value));

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan.setOffset({
          x: this._val.x,
          y: this._val.y
        });
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.state.inArea) {
          Animated.timing(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start();
        }
        if (this.isDropArea(gesture)) {
          // Animated.timing(this.state.pan, {
          //   toValue: { x: 10, y: 10 },
          //   friction: 5
          // }).start();
        } else {
          Animated.timing(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start();
        }
      }
    });
  }

  componentDidMount() {}

  reset = () => {
    Animated.timing(this.state.pan, {
      toValue: { x: 10, y: 10 },
      friction: 5
    }).start();

    this.setState({
      inArea: false
    });
  };

  isDropArea(gesture) {
    console.log(gesture);
    if (gesture.dy < -30) {
      if (gesture.moveY < 780 && gesture.moveY > 140) {
        // trigger callbacks
        this.setState({
          inArea: true
        });

        return true;
      }
    }

    // if(gesture < 350 ){return false}
    // if(gesture < 350 ){return false}

    // return gesture.moveY < 350;
  }

  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    };
    if (this.state.showDraggable) {
      return (
        <TouchableOpacity style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, { opacity: this.state.opacity }]}
          >
            {/* <Text
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                textAlign: "center"
              }}
            >
              Like
            </Text> */}
            {this.state.inArea ? (
              <TouchableOpacity onPress={this.reset}>
                <Text>Reset</Text>
              </TouchableOpacity>
            ) : null}
          </Animated.View>
        </TouchableOpacity>
      );
    }
  }
}

let CIRCLE_RADIUS = 40;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height: 200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: 10,
    textAlign: "center"
  },
  row: {
    flexDirection: "row"
  },
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});
