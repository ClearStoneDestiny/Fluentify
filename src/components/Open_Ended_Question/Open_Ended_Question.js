import React, {useState} from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";
import Button from "../Button/Button";
import PropTypes from 'prop-types';

const Open_Ended_Question = ({question, on_Correct, on_Wrong}) => {
    const [user_input, set_user_input] = useState('');
    
    const on_Button_Press = () => {
        if(question.answer.toLowerCase().trim() === user_input.toLowerCase().trim()){
            on_Correct();
        }else{
            on_Wrong();
        }
        set_user_input('');
    };
    return(
        <>
            <Text style={styles.title}>Перекладіть це речення</Text>
            <View style={styles.row}>
                {/*Image*/}
                <Image style={styles.character_image} source={{uri:'https://i.imgur.com/9NADDN9.png'}} 
                resizeMode='contain' />
                <View style={styles.sentence_container}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>  
            </View> 
            {/*Sentence*/}
            <TextInput 
            value={user_input}
            onChangeText={set_user_input}
            style={styles.text_Input} 
            placeholder="Введіть речення на українській мові"
            textAlignVertical="top"
            multiline 
            />
           <Button text='Перевірити' onPress={on_Button_Press} disabled={!user_input}/> 
        </>  
    );
};

Open_Ended_Question.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    answer: PropTypes.string,
};

export default Open_Ended_Question