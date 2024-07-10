import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Progress_bar = ({progress}) => {
    return(
        <View style={styles.background}>
            <View style={[styles.foreground, {width:`${progress * 100}%`}]}>
                <View style={styles.highlight}/>
            </View>
        </View>
    );
};

export default Progress_bar;