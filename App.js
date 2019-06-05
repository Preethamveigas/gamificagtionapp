import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { Constants, DangerZone, Font, LinearGradient } from "expo";
import {
  Ionicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";

import LoadBalancer from './compo/LoadBalancer'

import Slider from 'react-native-slider'


const { Animated } = DangerZone;
const { Value } = Animated;
const x = new Value(0);

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Switch,
  Root,
  CardItem,
  Card,
  CheckBox,
  ListItem,
  Toast,
  Footer
} from "native-base";
import Logo from "./assets/logo.png";
import anthosLogo from "./assets/anthoss.png";
import StatusContainer from "./StatusContainer";
import DragContainer from "./DragContainer";
import axios from "axios";
import * as Progress from 'react-native-progress';

import RightSlide from "./compo/CommentDrag";
import Cursor from "./compo/Cursor";
import Cursor1 from "./compo/Cursor1";
import Cursor2 from "./compo/Cursor2";



const { width: totalWidth, height: totalHeight } = Dimensions.get("window");
const count = 6;
const width = totalWidth / count;
const height = width;
const HALFHEIGHT = totalHeight / 2
const HEIGHTBYTHREE = totalHeight / 3




const LOAD_TEST = "http://35.224.245.248:1200/loadtest?value=";
const Like_URI = "http://35.224.245.248:1200/enablelike";
const COM_URI = "http://35.224.245.248:1200/enableecomment";
const DISCOM_URI = "http://35.224.245.248:1200/disablecomment";
const DISLike_URI = "http://35.224.245.248:1200/disablelike";
const LIKEEND = "http://35.192.232.226/backend-like";
const COMMENTEND = "http://35.192.232.226/backend-comment";


const CanaryLikeURI = "http://35.224.245.248:1200/enablelikeAll"
const CanaryCommentURI = "http://35.224.245.248:1200/enableecommentAll"
const CanaryLikDiseURI = "http://35.224.245.248:1200/disablelikeAll"
const CanaryCommentDisURI = "http://35.224.245.248:1200/disablecommentAll"




export default class App extends React.Component {
  // Later on in your component
  state = {
    value: 500,
    loading: true,
    comment: false,
    like: false,
    dislike: false,
    discomm: false,
    reset: false,
    delpoy: false,
    progress: 0.2,
    gC: false,
    oC: false,
    oP: false,
    dropZoneValuesPrem: null,
    dropZoneValuesOther: null,
    dropZoneValuesGc: null,
    animateDrag: true,
    stageone: false,
    stagetwo: false,
    statethree: false
  };

  async componentDidMount() {
    // this.animate()
    await Font.loadAsync({
      Helvetica: require("./assets/fonts/Helvetica.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
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
  AlDone = () => {
    alert("Deployee is Complete");
    clearInterval(this._ProgrssInt)
    clearTimeout(this._stage1Time)
    clearTimeout(this._stage2Time)
    clearTimeout(this._stage3Time)
    this.setState({ progress: 0, stageone: false, stagetwo: false, stagethree: false })
  }

  animate() {
    let progress = 0;
    this.setState({ progress });

    this._ProgrssInt = setInterval(() => {
      progress += 0.040;
      if (progress > 1) {
        progress = 1;
      }
      this.setState({ progress });
    }, 3000);

    this.setState({ animateDrag: true })
  }

  SetStatusCheck = () => {
    this._stage1Time = setTimeout(() => {
      this.setState({ stageone: true })
    }, 30000);
    this._stage2Time =  setTimeout(() => {
      this.setState({ stagetwo: true })
    }, 50000);
    this._stage3Time = setTimeout(() => {
      this.setState({ stagethree: true })
    }, 70000);
  }

  resetProgess = () => {
    let progress = 0.1;
    this.setState({ progress });

    // setInterval(() => {
    //   progress += Math.random() / 0.6;
    //   if (progress > 1) {
    //     progress = 0.3;
    //   }
    // }, 500);
  }

  render() {
    const x = new Value(0);
    return (
      <Root>
        <Container
          style={{
            paddingTop: Constants.statusBarHeight
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
              <Image source={anthosLogo} style={{ resizeMode: "cover", width: 50, height: 50 }} />
              <TouchableOpacity
                style={{
                  padding: 30,
                  paddingRight: 60,
                  alignContent: "center",
                  alignSelf: "center"
                }}
                onPress={() => {
                  Toast.show({
                    text: "Feature is not enabled",
                    buttonText: "Okay",
                    duration: 5000
                  });
                }}
              >
                <Switch
                  value={false}
                  style={{ backgroundColor: "red", width: 0 }}
                />
              </TouchableOpacity>
            </Right>
          </Header>

          {/* <StatusContainer /> */}
          <View style={{ height: HEIGHTBYTHREE, }}>
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

              <View style={{ height: 200 }} />


              <DragContainer
                oP={this.state.oP}
                gC={this.state.gC}
                oC={this.state.oC}
                dragAnimate={this.state.animateDrag}
                Prem={(e) => {
                  this.setState({
                    dropZoneValuesPrem: e
                  })
                }}
                Gcloud={(e) => {
                  this.setState({
                    dropZoneValuesGc: e
                  })
                }}
                Other={(e) => {
                  this.setState({
                    dropZoneValuesOther: e
                  })
                }
                }
              />
            </LinearGradient>
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
          </View>
          <View style={{
            position: 'absolute',
            top: totalHeight / 2 + 100,
            width: '100%',

          }}>
            <Progress.Bar progress={this.state.progress} width={null} />
            {/* <Progress.Pie progress={this.state.progress} size={50} />
          <Progress.Circle size={30} indeterminate={true} /> */}



          </View >

          <View
            style={{
              flexDirection: 'row',
              top: 180,
              justifyContent: 'space-around',

            }}
          >
            <ListItem>
              <CheckBox checked={this.state.stageone} />
              <Body >
                <Text style={{
                  color: '#000',
                  paddingLeft: 5,
                  width: 150
                }}>Containerization</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={this.state.stagetwo} />
              <Body>
                <Text style={{
                  color: '#000',
                  width: 150,
                  paddingLeft: 5,
                }}>Deployee to GCR</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={this.state.stagethree} color="green" />
              <Body>
                <Text style={{
                  color: '#000',
                  paddingLeft: 5,
                  width: 100
                }}>Deployee</Text>
              </Body>
            </ListItem>
          </View>
          <View
            style={{ display: 'flex', height: 40, top: 180, paddingLeft: 30, paddingRight: 30 }}
          >

            <Text
              style={{
                fontSize: 20,
                fontWeight: "900",
                fontFamily: "Helvetica",
                lineHeight: 50,
                color: "#fff",
                textAlign: "left",
                color: "#000"
              }}
            >
              New Features
              </Text>

          </View>


          <View
            style={{
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "row",
              padding: 20,
              marginTop: 170,

            }}
          >

            {/* <Cursor size={120} {...{ x, count }} reset={this.state.reset} like={(e) => this.setState({ like: e })} />
            <RightSlide size={120} {...{ x, count }} reset={this.state.reset} comment={(e) => this.setState({ comment: e })} /> */}

            <Cursor1
              oC={(e) => this.setState({ oC: e })}
              gC={(e) => this.setState({ gC: e })}
              oP={(e) => this.setState({ oP: e })}
              dropZonePrem={this.state.dropZoneValuesPrem}
              dropZoneGc={this.state.dropZoneValuesGc}
              dropZoneOther={this.state.dropZoneValuesOther}

              like={(e) => this.setState({ like: e })}
              resetLike={reset => this.resetLike = reset}
            />
            <Cursor2
              oC={(e) => this.setState({ oC: e })}
              gC={(e) => this.setState({ gC: e })}
              oP={(e) => this.setState({ oP: e })}
              comment={(e) => this.setState({ comment: e })}
              reset={reset => this.reset = reset}

              dropZonePrem={this.state.dropZoneValuesPrem}
              dropZoneGc={this.state.dropZoneValuesGc}
              dropZoneOther={this.state.dropZoneValuesOther}


            />

          </View>

          <LoadBalancer value={this.state.value} disable={false} sliderValue={(val) => this.setState({ value: val })} />






          <Footer
            style={{
              position: "absolute",
              bottom: 0,
              height: 80,
              backgroundColor: "#006400"
            }}
          >

            <Body>
              <Right style={{ borderColor: "white", borderRightWidth: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    const { like, comment, discomm, dislike } = this.state;
                    this.setState({
                      reset: true,
                      progress: 0,
                      stageone: true,
                      stagetwo: false,
                      stagethree: false
                    });
                    this.reset()
                    this.resetLike()
                    this.resetProgess()
                  }}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: "red",
                    height: 80
                  }}
                >
                  <SimpleLineIcons
                    name="reload"
                    size={25}
                    color="#fff"
                    style={{
                      position: "absolute",
                      left: "30%",
                      top: 25
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      lineHeight: 50,
                      color: "#fff",
                      textAlign: "left",
                      fontFamily: "Helvetica",
                      paddingLeft: 30,
                      paddingRight: 30
                    }}
                  >
                    Reset
                  </Text>
                </TouchableOpacity>
              </Right>
              <Right style={{ borderColor: "white", borderRightWidth: 1 }}>
                <TouchableOpacity
                  onPress={async () => {
                    const { like, comment, discomm, dislike } = this.state;
                    // this.setState({ reset: true, });
                    let likeRes, commentRes;
                    console.log("clicked")
                    alert("Deployment will be initiated")

                    // const CanaryLikeURI = "http://35.224.245.248:1200/enablelikeAll"
                    // const CanaryCommentURI = "http://35.224.245.248:1200/enableecommentAll"
                    // const CanaryLikDiseURI = "http://35.224.245.248:1200/enablelikeAll"
                    // const CanaryCommentDisURI = "http://35.224.245.248:1200/enableecommentAll"

                    await axios.get(`${LIKEEND}`, { headers: { "x-username": "test" } }).then(res => {

                      likeRes = true
                    })
                      .catch(err => {
                        likeRes = false
                      })
                    await axios.get(`${COMMENTEND}`, { headers: { "x-username": "test" } })
                      .then(res => {
                        return commentRes = true
                      })
                      .catch(err => {
                       return commentRes = false
                      })


                    let appProp = []
                    console.log(likeRes, commentRes)

                    if (commentRes) {
                      let commentPromise = axios.get(`${CanaryCommentURI}`);
                      appProp.push(commentPromise)
                    }
                    if(likeRes){
                      let likePromise = axios.get(`${CanaryLikeURI}`);
                      appProp.push(likePromise)
                    }
                    // else if (!likeRes && !commentRes) {
                    //   let commentDisPromise = axios.get(`${CanaryCommentDisURI}`);
                    //   let likeDisPromise = axios.get(`${CanaryLikDiseURI}`);
                    //   appProp.push(commentDisPromise)
                    //   appProp.push(likeDisPromise)

                    // }
                     if (!likeRes) {
                      let likeDisPromise = axios.get(`${CanaryLikDiseURI}`);
                      appProp.push(likeDisPromise)
                    }
                     if (!commentRes) {
                      let commentDisPromise = axios.get(`${CanaryCommentDisURI}`);
                      appProp.push(commentDisPromise)
                    }

                    Promise.all(appProp).then(res => {
                      axios
                        .get(`${LOAD_TEST}` + this.state.value)
                        .then(res => {
                          console.log(JSON.stringify(res))
                          this.AlDone()
                        })
                        .catch(err => console.log(JSON.stringify(err)));
                    }).catch(err => console.log(JSON.stringify(err)))
                    this.animate();
                    this.SetStatusCheck();
                    this.setState({ animateDrag: false })

                  }}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: "#fd6a02",
                    height: 80
                  }}
                >
                  <Ionicons
                    name="md-rocket"
                    size={25}
                    color="#fff"
                    style={{
                      position: "absolute",
                      left: "20%",
                      top: 25
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "900",
                      lineHeight: 50,
                      color: "#fff",
                      textAlign: "left",
                      fontFamily: "Helvetica",
                      paddingLeft: 30,
                      paddingRight: 30
                    }}
                  >
                    Canary Deploy
                  </Text>
                </TouchableOpacity>
              </Right>
              <Left>
                <TouchableOpacity
                  onPress={() => {

                    const { like, comment, discomm, dislike } = this.state;

                    alert("Deployment will be initiated")


                    this.setState({
                      delpoy: true
                    })

                    console.log(like, comment)
                    let appProp = []

                    // if (comment && like) {
                    //   // case for both are true
                    //   let commentPromise = axios.get(`${COM_URI}`);
                    //   let likePromise = axios.get(`${Like_URI}`);
                    //   appProp.push(commentPromise)
                    //   appProp.push(likePromise)
                    // }
                    // else if (!comment && !like) {
                    //   // case for both are true
                    //   let disCommentPromise = axios.get(`${DISCOM_URI}`);
                    //   let dislikePromise = axios.get(`${DISLike_URI}`);
                    //   appProp.push(disCommentPromise)
                    //   appProp.push(dislikePromise)
                    // }
                     if (comment) {
                      // case for one is true
                      let commentPromise = axios.get(`${COM_URI}`);
                      appProp.push(commentPromise)

                    }
                     if (like) {
                      // case for one is true
                      let likePromise = axios.get(`${Like_URI}`);
                      appProp.push(likePromise)

                    }
                    if (!comment) {
                      // case for one is true
                      let disCommentPromise = axios.get(`${DISCOM_URI}`)
                      appProp.push(disCommentPromise)

                    } if (!like) {
                      // case for one is true
                      let dislikePromise = axios.get(`${DISLike_URI}`);
                      appProp.push(dislikePromise)

                    }



                    Promise.all(appProp).then(res => {
                      axios
                        .get(`${LOAD_TEST}` + this.state.value)
                        .then(res => {
                          console.log(JSON.stringify(res))
                          this.AlDone()
                        }
                        )
                        .catch(err => console.log(JSON.stringify(err)));
                    }).catch(err => console.log(JSON.stringify(err)))
                    this.animate();
                    this.SetStatusCheck();

                    this.setState({ animateDrag: false })


                  }
                  }
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    height: 80
                  }}
                >
                  <AntDesign
                    name="rocket1"
                    size={25}
                    color="#fff"
                    style={{
                      position: "absolute",
                      left: "20%",
                      top: 25
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "900",
                      lineHeight: 50,
                      color: "#fff",
                      textAlign: "left",
                      fontFamily: "Helvetica",
                      paddingLeft: 30,
                      paddingRight: 30
                    }}
                  >
                    Deploy
                  </Text>
                </TouchableOpacity>
              </Left>
            </Body>
          </Footer>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


/// 45 sec 98% loading progress slider
/// if res < 45 sec load 100% the progrw=ess bar

// chage concurrenct user to req per sec
// disable the load per sec when deploy it on loading
// deployee∂∂∂dddeerr


var customStyles2 = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#30a935',
    borderWidth: 2,
  }
});

var customStyles3 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  thumb: {
    width: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#eb6e1b',
  }
});

var customStyles5 = StyleSheet.create({
  track: {
    height: 18,
    borderRadius: 1,
    backgroundColor: '#d5d8e8',
  },
  thumb: {
    width: 20,
    height: 30,
    borderRadius: 1,
    backgroundColor: '#838486',
  }
});

var customStyles6 = StyleSheet.create({
  track: {
    height: 14,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#eaeaea',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  }
});



