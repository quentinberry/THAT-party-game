import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const onPress = (mode) => console.log(`${mode} mode has been clicked`);
const onButtonPress = () => console.log("Select button ahs been pressed");

const GameMode = (props) => {

    //change background color based on name whats been call

  return (
    <View style={styles.gameMenuBackground}>
      <TouchableOpacity style={styles.casualModeBackground} onPress={onPress(props.text)}>
        <Text style={styles.modeText}>{props.text}</Text>
        <Text style={styles.modeTextPart}>Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.selectButton} onPress={onButtonPress}>
        <Text style={styles.selection}>Select</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  gameMenuBackground: {
    backgroundColor: "#f4f7fb",
    borderRadius: 22,
    width: '48%',
    height: 237,
  },
  casualModeBackground: {
    width: '100%',
    height: '72%',
    borderRadius: 22,
    backgroundColor: "#8BB7F2",
  },
  modeText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 96,
    paddingLeft: '7,6%',
    paddingRight: '7,6%',
  },
  modeTextPart: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    paddingRight: '7,6%',
    paddingLeft: '7,6%',
  },
  selectButton: {
    width: 145,
    height: 33,
    backgroundColor: "#cfcfcf",
    borderRadius: 22,
    marginLeft: '7,6%',
    marginTop: 15,
  },
  selection: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    width: '63%',
    color: "#fff",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    marginLeft: '18,6%',
    height: '100%',
  },
});

export default GameMode;