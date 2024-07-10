import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 25,   
  },

  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: 'lightgray',
    borderWidth: 1.5,
    overflow: 'hidden',
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 30,
  },

  image: {
    flex: 1,
    width: null,
    height: null,
  },

  text: {
    fontSize: 15,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center', 
    marginBottom: 25,
  },

  scrollViewContent: {
    flexGrow: 1,
  },

});

export default styles;