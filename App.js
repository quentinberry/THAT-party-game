import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const onPress = () => console.log("Casual mode has been clicked");
  const onButtonPress = () => console.log("Select button ahs been pressed");

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.topperTitle}>Welcome to</Text>
        <Text style={styles.realTitle}>THAT Party Game</Text>
      </View>

      <View style={styles.allGamesWrapper}>


      <View style={styles.gameMenuTop}>
        <View style={styles.gameMenuBackground}>

          <TouchableOpacity style={styles.casualModeBackground} onPress={onPress}>
           <Text style={styles.modeText}>Casual</Text>
           <Text style={styles.modeTextPart}>Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.selectButton} onPress={onButtonPress}>
            <Text style={styles.selection}>Select</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.gameMenuBackground}>

          <TouchableOpacity style={styles.fastModeBackground} onPress={onPress}>
           <Text style={styles.modeText}>Fast</Text>
           <Text style={styles.modeTextPart}>Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.selectButton} onPress={onButtonPress}>
            <Text style={styles.selection}>Select</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.gameMenuBottom}>
        <View style={styles.gameMenuBackground}>

          <TouchableOpacity style={styles.spicyModeBackground} onPress={onPress}>
           <Text style={styles.modeText}>Spicy</Text>
           <Text style={styles.modeTextPart}>Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.selectButton} onPress={onButtonPress}>
            <Text style={styles.selection}>Select</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.gameMenuBackground}>

          <TouchableOpacity style={styles.partnerModeBackground} onPress={onPress}>
           <Text style={styles.modeText}>Partner</Text>
           <Text style={styles.modeTextPart}>Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.selectButton} onPress={onButtonPress}>
            <Text style={styles.selection}>Select</Text>
          </TouchableOpacity>

        </View>
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
  allGamesWrapper:{
    marginLeft: 16,
    marginRight: 16,
    marginTop:45,
  },
  gameMenuTop: {
    
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gameMenuBackground: {
    backgroundColor: "#f4f7fb",
    borderRadius: 22,
    width:171,
    height:237,
  },
  casualModeBackground:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#8BB7F2",
  },
  modeText:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 96,
    paddingLeft: 13,
    paddingRight:13,
  },
  modeTextPart:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize:24,
    paddingRight:13,
    paddingLeft: 13,
  },
  selectButton:{
    width: 145,
    height: 33,
    backgroundColor: "#cfcfcf",
    borderRadius: 22,
    marginLeft:13,
    marginTop: 15,
  },
  selection:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize:24,
    width:91,
    color: '#fff',
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    marginLeft:27,
    height: 33,
  },
  fastModeBackground:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#8BF2E6",
  },
  gameMenuBottom:{
    marginTop: 298-32,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spicyModeBackground:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#E4F28B",
  },
  partnerModeBackground:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#F28B8B",
  },
});
