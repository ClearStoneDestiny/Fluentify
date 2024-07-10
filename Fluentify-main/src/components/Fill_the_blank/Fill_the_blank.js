import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../Button/Button";
import Word_option from "../Word_option/Word_option";

const Fill_the_blank = ({question, on_Correct, on_Wrong}) => {
    
    const [selected, set_selected] = useState(null);

    const onButtonPress = () => {
        if(selected === question.correct){
          on_Correct();
          
        }else{
          on_Wrong();
        }
        set_selected(null);
    };

    return(
        <>
            <Text style={styles.title}>Завершіть речення</Text>
            <View style={styles.row}>
                {question.parts}
                <Text style={styles.text_option} numberOfLines={0}>{question.text_Pre}</Text>
                <View style={styles.blank}>
                {selected && (
                     <Word_option 
                       text={selected} 
                       onPress={() => set_selected(null)}
                    /> 
                )}
                </View>
                <Text style={styles.text_option}>{question.text_Post}</Text>
            </View>
            <Image style={styles.fill_the_blank_image} source={{uri: question.image}} resizeMode="contain"/>
            <View style={styles.option_Container}>
                {question.options.map((option) => (
                    <Word_option
                        key={option} 
                        text={option} 
                        is_Selected={selected === option}
                        onPress={() => set_selected(option)}
                    />
                ))}
            </View>
            <Button text='Перевірити' onPress={onButtonPress} disabled={!selected}/>
        </>
    );
};

export default Fill_the_blank;