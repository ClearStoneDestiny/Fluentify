import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  option_container: {
    //border
    borderColor: 'lightgrey',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 8,

    //size
    width: '48%',
    height: '48%',

    //spacing
    padding: 10,

    alignItems: 'center',
  },

  option_image: {
    width: '100%',
    flex: 1,
  },

  selected_Container: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },

  selected_Text: {
    color: "#40BEF7",
    fontWeight: 'bold',
  },

  option_text: {
    fontWeight: 'bold',
  },

});

export default styles;