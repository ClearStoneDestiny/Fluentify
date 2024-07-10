import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const Word_option = ({text, onPress, is_Selected}) => {
    return(
        <Pressable 
            onPress={onPress} 
            style={[styles.root, {backgroundColor: is_Selected ? 'lightgrey' : 'white'}]}
        >
            <Text style={[styles.text, {color: is_Selected ? 'lightgrey' : 'black'}]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        borderWidth: 2,
        borderColor: 'lightgray',
        padding: 10,
        paddingHorizontal: 15,
        margin: 10,
        borderRadius: 14,
        borderBottomWidth: 4,
    },

    text: {},
});

export default Word_option;