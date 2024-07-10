import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: 'flex-start',
    },

    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 10,
        marginBottom: 0,
    },

    character_image: {
        width: '30%',
        aspectRatio:3/4,
        marginRight: 10,
    },

    sentence_container: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,

        padding: 10,
    },

    

    sentence: {
        fontSize: 16,
    },

    text_Input: {
        alignSelf: 'stretch',
        backgroundColor: '#ebebeb',
        flex: 1,

        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius:10,

        padding: 10,
        fontSize: 18,
    },
    
   

});

export default styles;