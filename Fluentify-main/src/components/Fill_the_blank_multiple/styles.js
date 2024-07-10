import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: 'flex-start',
    },

    row_upper: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 10,
        marginBottom: 0,
    },

    character_image: {
        width: '35%',
        aspectRatio: 1/1,
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

    row: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginVertical: 10,
        height: 70,
        flexWrap: 'wrap',
    },

    text_option:{
       alignSelf: 'flex-end', 
       fontSize: 18,
    },

    fill_the_blank_image: {
        marginVertical: 20,
        width: '70%',
        flex: 1,
    },

    blank: {
        borderBottomWidth: 2,
        borderColor: 'lightgray',
        width: 100,
    },

    option_Container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default styles;