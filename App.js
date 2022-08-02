import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  const onPress = () => console.log("Some mode has been clicked");
  const changeColor = () => console.log("Change Color pls");

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.topperTitle}>Welcome to</Text>
        <Text style={styles.realTitle}>THAT Party Game</Text>
      </View>

      <View style={styles.gameMenu}>
        <View style={styles.casualModeBackground}>

          <TouchableOpacity style={styles.casualModeInfo} onPress={onPress}>
            <Text style={styles.causalModeText}>Casual Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.startButton} onPress={changeColor}>
            <Text style={styles.startButtonText}>Select</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fastModeBackground}>

          <TouchableOpacity style={styles.fastModeInfo} onPress={onPress}>
            <Text style={styles.fastModeText}>Fast Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.startButton} onPress={changeColor}>
            <Text style={styles.startButtonText}>Select</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    color: "#fff",
  },
  titleContainer: {
    paddingTop: 94,
    paddingLeft: 16,
    paddingRight: 16,
  },
  topperTitle: {
    fontFamily: "Montserrat",
    fontSize: 24,
    fontStyle: "normal",
  },
  realTitle: {
    fontFamily: "Montserrat",
    fontSize: 32,
    fontStyle: "normal",
  },
  gameMenu: {
    marginLeft: 16,
    marginRight: 16,
    marginTop:45,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  casualModeBackground:{
    backgroundColor: "#F4F7FB",
    borderRadius: 22,
    width:171,
    height:237,
  },
  casualModeInfo:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#8BB7F2"
  },
  causalModeText:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 96,
    paddingLeft: 13,
    paddingRight:13,
    paddingBottom: 24,
  },
  fastModeBackground:{
    backgroundColor: "#F4F7FB",
    borderRadius: 22,
    width:171,
    height:237,
    marginRight: 16,
  },
  fastModeInfo:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#8BF2E6"
  },
  fastModeText:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 96,
    paddingLeft: 13,
    paddingRight:13,
    paddingBottom: 24,
  },
  startButton:{
    backgroundColor: "#CFCFCF",
    width: 145,
    height:33,
    marginLeft:13,
    marginTop:15,
    borderRadius:30,
  },
  startButtonText:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    textAlign: 'center',
    color: "#fff",
    marginTop:3,
  }
});
