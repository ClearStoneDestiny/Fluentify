import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heart: {
        width: 25,
        height: 25,
        marginHorizontal: 10,
    },
    lives: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 18,
    },
});

export default styles;