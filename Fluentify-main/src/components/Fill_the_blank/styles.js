import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: 'flex-start',
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