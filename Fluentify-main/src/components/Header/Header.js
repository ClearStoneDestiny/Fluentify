import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Progress_bar from "../Progress_bar/Progress_bar";

const Header = ({progress, lives}) => {
    return(
        <View style={styles.root}>
            <Progress_bar progress={progress}/>
            <Image style={styles.heart} source={{uri: 'https://i.imgur.com/we0QN85.png'}}
            resizeMode="contain"/>
            <Text style={styles.lives}>{lives}</Text>
        </View>
    );
};

export default Header;