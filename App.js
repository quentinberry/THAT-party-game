import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";
import { useFonts} from 'expo-font';
import MenuIcon from './media/landingpage-icons/hamburger-menu.svg';
import InfoIcon from './media/landingpage-icons/question.svg';
import CasualIcon from './media/landingpage-icons/casual-mode-icon.svg';
import FastIcon from './media/landingpage-icons/fast-mode-icon.svg';
import SpicyIcon from './media/landingpage-icons/spicy-mode-icon.svg';
import PartnerIcon from './media/landingpage-icons/partner-mode.icon.svg';
                

export default function App() {
  const onPressMenu = () => console.log("Casual mode has been clicked");
  const onPressInfo = () => console.log("Casual mode has been clicked");
  const onPressCasual = () => console.log("Casual mode has been clicked");
  const onPressFast = () => console.log("Fast mode has been clicked");
  const onPressSpicy = () => console.log("Spicy mode has been clicked");
  const onPressPartner = () => console.log("Partner mode has been clicked");

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />

      <View style={styles.menuImageContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={onPressMenu}>
          <View style={styles.menuContainer}>
            <MenuIcon width={120} height={40}/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.infoImageContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={onPressInfo}>
          <View style={styles.menuContainer}>
            <InfoIcon width={120} height={40}/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.topperTitle}>Welcome to</Text>
        <Text style={styles.realTitle}>THAT Party Game</Text>
      </View>

      <View style={styles.casualGameMenu}>
        <TouchableOpacity style={styles.casualModeButton} onPress={onPressCasual}>
          <View style={styles.imageContainer}>
				    <CasualIcon />
			    </View>
          <Text style={styles.causalModeText}>Casual Mode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fastGameMenu}>
        <TouchableOpacity style={styles.fastModeButton} onPress={onPressFast}>
          <View style={styles.imageContainer}>
				    <FastIcon />
			    </View>
          <Text style={styles.fastModeText}>Fast Mode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.spicyGameMenu}>
        <TouchableOpacity style={styles.spicyModeButton} onPress={onPressSpicy}>
          <View style={styles.imageContainer}>
				    <SpicyIcon />
			    </View>
          <Text style={styles.spicyModeText}>Spicy Mode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.partnerGameMenu}>
        <TouchableOpacity style={styles.partnerModeButton} onPress={onPressPartner}>
          <View style={styles.imageContainer}>
				    <PartnerIcon />
			    </View>
          <Text style={styles.partnerModeText}>Partner Mode</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    color: "#E8EAED",
  },
  titleContainer: {
    paddingTop: 94,
    paddingLeft: 16,
    paddingRight: 16,
  },
  topperTitle: {
    //fontFamily: "Montserrat",
    fontSize: 24,
    fontStyle: "normal",
  },
  realTitle: {
    //fontFamily: "Montserrat",
    fontSize: 32,
    fontStyle: "normal",
  },
//-------------------------------------------------------------------
  casualGameMenu: {
    flex:1,
    flexDirection:'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop:45,
  },
  fastGameMenu: {
    flex:1,
    flexDirection:'row',
    marginLeft: 200,
    marginRight: 16,
    marginTop: 0,
  },
  spicyGameMenu: {
    flex:1,
    flexDirection:'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop:200,
  },
  partnerGameMenu: {
    flex:1,
    flexDirection:'row',
    marginLeft: 200,
    marginRight: 16,
    marginTop: 0,
  },
//-------------------------------------------------------------------
  casualModeButton:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#8BB7F2"
  },
  causalModeText:{
    //fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 90,
    paddingBottom: 24,
    color: "#000000",
  },  
//-------------------------------------------------------------------
  fastModeButton:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#8BF2E6"
  },
  fastModeText:{
    //fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 90,
    paddingBottom: 24,
    color: "#000000",
  },  
  //-------------------------------------------------------------------
  spicyModeButton:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#E4F28B"
  },
  spicyModeText:{
    //fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 90,
    paddingBottom: 24,
    color: "#000000",
  },  
  //-------------------------------------------------------------------
  partnerModeButton:{
    width:171,
    height:171,
    borderRadius:22,
    backgroundColor:"#F28B8B"
  },
  partnerModeText:{
    //fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 90,
    paddingBottom: 24,
    color: "#000000",
  },  
  //-------------------------------------------------------------------
  menuButton:{
    width:45,
    height:45,
    borderRadius:3,
    backgroundColor:"#ffffff"
  },
  //-------------------------------------------------------------------
  imageContainer: {
		flex: 1,
    marginTop: 40,
		alignSelf: 'center',
	},
  //-------------------------------------------------------------------
  menuImageContainer: {
    flex: 1,
    flexDirection:'row',
    marginTop: 40,
    marginRight: 16,
    marginLeft: 16,
	},
  //-------------------------------------------------------------------
  infoImageContainer: {
    flex:1,
    flexDirection:'row',
    marginLeft: 330,
    marginRight: 16,
    marginTop: 0,
	},
  //-------------------------------------------------------------------
  menuContainer: {
		flex: 1,
    marginTop: 0,
		alignSelf: 'center',
	},
});
