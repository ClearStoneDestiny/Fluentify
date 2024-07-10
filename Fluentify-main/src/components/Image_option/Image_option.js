import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types';

const Image_option = ({image, text, is_Selected, onPress}) => {
    return(
      <Pressable 
        style={[styles.option_container, is_Selected ? styles.selected_Container : {}]}
        onPress={onPress}
      >
          <Image 
            style={styles.option_image} 
            source={{uri: image}}
            resizeMode='contain'
          />
          <Text style={is_Selected ? styles.selected_Text : styles.option_text}>{text}</Text>
      </Pressable>
    );
  };

Image_option.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    is_Selected: PropTypes.bool,
    onPress: PropTypes.func,
};
  
Image_option.defaulProps = {
    text: "You haven't send any text :(",
    is_Selected: false,
    onPress: () => {},
};

export default Image_option;