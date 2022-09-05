import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  let [show, setShow] = useState();

  const generateTask = () => {
    const jsonData= require('./utils/game_questions/i18n_de.json');
    
    setShow = jsonData[0].question;
    console.log(setShow);
  }

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.topperTitle}>Welcome to</Text>
        <Text style={styles.realTitle}>THAT Party Game</Text>
      </View>

      <View style={styles.gameMenu}>
        <TouchableOpacity style={styles.casualModeButton} onPress={generateTask}>
          <Text style={styles.causalModeText}>Casual Mode</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.test} text={show}/>
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
  },
  casualModeButton:{
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
  test:{
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    paddingTop: 96,
    paddingLeft: 13,
    paddingRight:13,
    paddingBottom: 24,
  }  
});
