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

      <View style={styles.gameMenuTop}>
        <View style={styles.casualModeBackground}>

          <TouchableOpacity style={styles.casualModeInfo} onPress={onPress}>
            <Text style={styles.causalModeText}>Casual</Text>
            <Text style={styles.textPartNamedMode}>Mode</Text>
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

      <View style={styles.gameMenuBottom}>
        <View style={styles.spicyModeBackground}>

          <TouchableOpacity style={styles.spicyModeInfo} onPress={onPress}>
            <Text style={styles.spicyModeText}>Spicy Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.startButton} onPress={changeColor}>
            <Text style={styles.startButtonText}>Select</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.partnerModeBackground}>

          <TouchableOpacity style={styles.partnerModeInfo} onPress={onPress}>
            <Text style={styles.partnerModeText}>Partner Mode</Text>
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
    fontFamily: "SF Pro",
    fontSize: 24,
    fontStyle: "regular",
  },
  realTitle: {
    fontFamily: "SF Pro",
    fontSize: 32,
    fontStyle: "bold",
  },

  // game menu top

  gameMenuTop: {
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
  textPartNamedMode:{
fontFamily
  },
  fastModeBackground:{
    backgroundColor: "#F4F7FB",
    borderRadius: 22,
    width:171,
    height:237,
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
  },

  //bottom game menu

  gameMenuBottom:{
    paddingTop: 16,
    marginLeft:16,
    marginRight: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spicyModeBackground:{
    backgroundColor: "#F4F7FB",
    borderRadius: 22,
    width:171,
    height:237,
  },
  spicyModeInfo:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#E4F28B"
  },
  spicyModeText:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 96,
    paddingLeft: 13,
    paddingRight:13,
    paddingBottom: 24,
  },
  partnerModeBackground:{
    backgroundColor: "#F4F7FB",
    borderRadius: 22,
    width:171,
    height:237,
  },
  partnerModeInfo:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#F28B8B"
  },
  partnerModeText:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 96,
    paddingLeft: 13,
    paddingRight:13,
    paddingBottom: 24,
  },
});
