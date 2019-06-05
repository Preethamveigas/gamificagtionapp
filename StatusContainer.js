import React from "react";
import { View, StyleSheet } from "react-native";
import Like from "./compo/LikeCheck";
import Comment from "./compo/CommentCheck";
export default class StatusContainer extends React.Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          height: 200
        }}
      >
        <Like checked={true} />
        <Comment checked={true} />
      </View>
    );
  }
}
