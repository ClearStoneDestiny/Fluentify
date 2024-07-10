import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#58CC02",
        height: 50,
        marginVertical: 10,

        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',

        //borders
        borderRadius: 8,
        borderBottomWidth: 5,
        borderColor: '#57A600',
    },

    disabled_Container: {
        borderColor: 'grey',
        backgroundColor: 'lightgrey',
    },

    text: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',

        borderColor: 'white',
        borderBottomWidth: 1.5,
    },
});

export default styles;