import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'lightgrey',
        height: 20,
        flex: 1,
        borderRadius: 10,
    },

    foreground: {
        flex: 1,
        backgroundColor: '#FAC800',
        borderRadius: 10,
    },

    highlight: {
        backgroundColor: '#FAD131',
        width: '90%',
        height: 5,
        marginTop: 5,
        borderRadius: 5,
        alignSelf: 'center',
    },
});

export default styles;