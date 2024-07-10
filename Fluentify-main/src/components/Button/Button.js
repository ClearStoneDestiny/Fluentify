import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types';

const Button = ({text, onPress, disabled}) => {
    return(
        <Pressable 
            onPress={onPress}
            style={[styles.container, disabled ? styles.disabled_Container : {}]}
            disabled={disabled}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onPress: () => {},
    disabled: false,
};

export default Button;