import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Slider from 'react-native-slider'
import { LinearGradient } from 'expo'

export default ({ value, disable, sliderValue }) => {
    // console.log(value,disable,sliderValue)
    return (
        <View
            style={{
                marginTop: 60,
                marginLeft: 30,
                marginRight: 30,
                position: 'absolute',
                bottom: 90,
                width: Dimensions.get('window').width - 60
            }}
        >
            <LinearGradient
                colors={["#674198", "#674198", "#674198"]}
                style={{
                    padding: 15,
                    alignItems: "center",
                    borderRadius: 10,
                    paddingLeft: 30,
                    paddingRight: 30
                }}
            >
                <Text
                    style={{
                        position: "absolute",
                        fontSize: 15,
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
                    REQUEST PER SECOND
              </Text>
                <View style={{ height: 50 }} />

                <Slider
                    disable={disable}
                    value={Number(value)}
                    minimumTrackTintColor={"#87ceeb"}
                    thumbTintColor={"#fff"}
                    minimumValue={1}
                    thumbTouchSize={{ width: 100, height: 100 }} b
                    maximumValue={1500}

                    trackStyle={customStyles4.track}
                    thumbStyle={customStyles4.thumb}
                    animateTransitions={true}
                    animationType={"timing"}
                    onValueChange={value => sliderValue(value)}
                    style={{ width: "100%", paddingLeft: 30, paddingRight: 30 }}
                />
                <Text
                    style={{
                        position: "absolute",
                        fontSize: 15,
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
                        fontSize: 15,
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
                    Users: {Math.round(value)}
                </Text>

                <Text
                    style={{
                        position: "absolute",
                        fontSize: 15,
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
                    1500
              </Text>
            </LinearGradient>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingBottom: 20,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    caption: {
        //flex: 1,
    },
    value: {
        flex: 1,
        textAlign: 'right',
        marginLeft: 10,
    }
});

var iosStyles = StyleSheet.create({
    track: {
        height: 2,
        borderRadius: 1,
    },
    thumb: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    }
});

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

var customStyles4 = StyleSheet.create({
    track: {
        height: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowOpacity: 0.15,
    },
    thumb: {
        width: 20,
        height: 20,
        backgroundColor: '#f8a1d6',
        borderColor: '#a4126e',
        borderWidth: 5,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
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

var customStyles7 = StyleSheet.create({
    track: {
        height: 1,
        backgroundColor: '#303030',
    },
    thumb: {
        width: 30,
        height: 30,
        backgroundColor: 'rgba(150, 150, 150, 0.3)',
        borderColor: 'rgba(150, 150, 150, 0.6)',
        borderWidth: 14,
        borderRadius: 15,
    }
});

var customStyles8 = StyleSheet.create({
    container: {
        height: 30,
    },
    track: {
        height: 2,
        backgroundColor: '#303030',
    },
    thumb: {
        width: 10,
        height: 10,
        backgroundColor: '#31a4db',
        borderRadius: 10 / 2,
        shadowColor: '#31a4db',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowOpacity: 1,
    }
});

var customStyles9 = StyleSheet.create({
    thumb: {
        width: 30,
        height: 30,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    }
});