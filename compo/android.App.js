import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Constants, DangerZone, Font, LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import Slider from "react-native-slider";

const { Animated } = DangerZone;
const { Value } = Animated;
import { Header, Left, Right, Button, Switch, Root } from "native-base";
import Logo from "./assets/logo.png";
import anthosLogo from "./assets/anthoslogo.jpg";
import StatusContainer from "./StatusContainer";
import DragContainer from "./DragContainer";
import Draggitems from "./compo/Slider";

const { width: totalWidth, height: totalHeight } = Dimensions.get("window");
const count = 5;
const width = totalWidth / count;
const height = width;

import RightDrg from "./compo/CommentDrag";
export default class App extends React.Component {
  // Later on in your component
  state = {
    value: 1,
    loading: true
  };
  async componentDidMount() {
    await Font.loadAsync({
      Helvetica: require("./assets/fonts/Helvetica.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }

  render() {
    const x = new Value(0);
    return this.state.loading ? (
      <View>
        <Text>Loading</Text>
      </View>
    ) : (
      <Root>
        <View
          style={{
            paddingTop: Constants.statusBarHeight,
            height: totalHeight
          }}
        >
          <Header style={{ height: 90 }}>
            <Left>
              <Button transparent>
                <Image source={Logo} style={{ resizeMode: "contain" }} />
              </Button>
            </Left>
            {/* <Body>
            <Title style={{ color: "red" }}> APP NAME</Title>
          </Body> */}
            <Right>
              <Image source={anthosLogo} style={{ resizeMode: "cover" }} />
              <Button
                transparent
                style={{ alignContent: "center", alignSelf: "center" }}
              >
                <Switch value={false} />
              </Button>
            </Right>
          </Header>
          {/* <StatusContainer /> */}
          <View style={{ height: totalHeight / 2 + 50 }}>
            <LinearGradient
              colors={["#ba6698", "#ba6698", "#631f47"]}
              style={{
                padding: 30,
                alignItems: "center",
                borderRadius: 5
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  fontSize: 50,
                  fontWeight: "900",
                  fontFamily: "Helvetica",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  left: 30,
                  top: 30
                }}
              >
                Dynobuild
              </Text>
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#9fa947",
                  height: 5,
                  width: 80,
                  left: 30,
                  top: 100
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  fontFamily: "Helvetica",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  left: 30,
                  top: 105
                }}
              >
                Drag nd Drop
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  fontFamily: "Helvetica",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  left: 30,
                  top: 130
                }}
              >
                Feature
              </Text>
              <View style={{ height: 200 }} />
              <DragContainer />
            </LinearGradient>
          </View>

          <Draggitems />

          <View
            style={{
              height: 500,
              marginTop: 60
            }}
          >
            <LinearGradient
              colors={["#674198", "#674198", "#674198"]}
              style={{
                padding: 15,
                alignItems: "center",
                borderRadius: 5,
                paddingLeft: 30,
                paddingRight: 30
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  left: 0,
                  fontFamily: "Helvetica",
                  paddingLeft: 30,
                  paddingRight: 30
                }}
              >
                CONCURRENT USER
              </Text>
              <View style={{ height: 80 }} />

              <Slider
                value={this.state.value}
                minimumTrackTintColor={"#3f3f3f"}
                thumbTintColor={"#fff"}
                minimumValue={1}
                thumbTouchSize={{ width: 80, height: 80 }}
                maximumValue={200}
                trackStyle={"#fff"}
                animateTransitions={true}
                animationType={"timing"}
                onValueChange={value => this.setState({ value })}
                style={{ width: "100%", paddingLeft: 30, paddingRight: 30 }}
              />
              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  top: 40,
                  left: 10,
                  fontFamily: "Helvetica",
                  paddingLeft: 30
                }}
              >
                1
              </Text>

              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  top: 40,
                  left: "45%",
                  fontFamily: "Helvetica",
                  paddingRight: 30
                }}
              >
                Users: {Math.round(this.state.value)}
              </Text>

              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  top: 40,
                  right: 10,
                  fontFamily: "Helvetica",
                  paddingRight: 30
                }}
              >
                2000
              </Text>
            </LinearGradient>
          </View>

          {/* <RightDrg size={height} {...{ x, count }} /> */}
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});
