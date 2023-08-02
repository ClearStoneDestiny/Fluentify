import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,  
  },
 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch',
  },

  option_for_all_container: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },


  selected_Container: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },

  selected_Text: {
    color: "#40BEF7",
    fontWeight: 'bold',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '70%', 
  },

  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  closeButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#58CC02',
    borderBottomWidth: 4,
    borderBottomColor: '#57A600',
    alignSelf: 'stretch',
    alignItems: 'center',
  },

  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  restart_image: {
    height: 130,
    width: '100%',
    marginBottom: 10,  
  },


});

export default styles;