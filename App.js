import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import GameMode from "./component/GameMode";

export default function App() {
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.topperTitle}>Welcome to</Text>
        <Text style={styles.realTitle}>THAT Party Game</Text>
      </View>

      <View style={styles.allGamesWrapper}>
        <View style={styles.gameMenuTop}>
          <GameMode text={"Casual"} />
          <GameMode text={"Fast"} />
        </View>

        <View style={styles.gameMenuBottom}>
          <GameMode text={"Spicy"} />
          <GameMode text={"Partner"} />
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
    paddingLeft: '4%',
    paddingRight: '4%',
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
  allGamesWrapper: {
    marginLeft: '4%',
    marginRight:'4%',
    marginTop: 45,
  },
  gameMenuTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gameMenuBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16+237,
  },
});
