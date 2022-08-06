import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";
import { useFonts, Montserrat_300Light, Montserrat_400Regular, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat";

export default function App() {
  const onPress = () => console.log("Casual mode has been clicked");
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold
  })

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.topperTitle}>Welcome to</Text>
        <Text style={styles.realTitle}>THAT Party Game</Text>
      </View>

      <View style={styles.gameMenu}>
        <TouchableOpacity style={styles.casualModeButton} onPress={onPress}>
          <Text style={styles.causalModeText}>Casual Mode</Text>
        </TouchableOpacity>
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
    fontFamily: "Montserrat_300Light",
    fontSize: 24,
  },
  realTitle: {
    fontFamily: "Montserrat_600SemiBold",
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
});
