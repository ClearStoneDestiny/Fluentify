import React, {useState, useEffect} from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../Button/Button";
import Word_option from "../Word_option/Word_option";

const Fill_the_blank_multiple = ({question, on_Correct, on_Wrong}) => {
    
    const [parts, set_parts] = useState(question.parts);

    const onButtonPress = () => {
        if(check_if_correct()){
          on_Correct();
          
        }else{
          on_Wrong();
        }
        resetSelectedOptions();
    };

    const resetSelectedOptions = () => {
        const newParts = parts.map((part) => {
          if (part.isBlank) {
            return {
              ...part,
              selected: null,
            };
          }
          return part;
        });
        set_parts(newParts);
    };

    useEffect(() => {
        resetSelectedOptions();
    }, [question]);

    const check_if_correct = () => {
        return (
            parts.filter((part) => part.isBlank && part.selected !== part.text).length === 0
        );
    };

    const add_Selected_option = (option) => {

        if(is_Selected(option)){
            return;
        }
        
        const New_parts = [...parts];
        for(let i = 0; i < New_parts.length; i++){
            if(New_parts[i].isBlank && !New_parts[i].selected){
                New_parts[i].selected = option;
                break;
            }
        }
        set_parts(New_parts);
    };

    const remove_option_from_selected = (index) => {
        const New_parts = [...parts];
        New_parts[index].selected = null;
        set_parts(New_parts);
    };

    const is_Selected = (option) => {
        return (
            parts.filter((part) => part.isBlank && part.selected === option).length > 0
        );
    };

    const is_ready_to_check = () => {
        return (
            parts.filter((part) => part.isBlank && !part.selected).length > 0
        );
    };

    return(
        <>
            <Text style={styles.title}>Завершіть речення</Text>
            <View style={styles.row_upper}>
                {/*Image*/}
                <Image style={styles.character_image} source={{uri:'https://i.imgur.com/5hhtClM.png'}} 
                resizeMode='contain' />
                <View style={styles.sentence_container}>
                    <Text style={styles.sentence}>{question.question}</Text>
                </View>  
            </View>
            <View style={styles.row}>
                {parts.map((part, index) => {
                    if(part.isBlank){
                        return(
                            <View style={styles.blank}>
                            {part.selected && (
                                 <Word_option 
                                   text={part.selected} 
                                   onPress={() => remove_option_from_selected(index)}
                                  // onPress={() => remove_option_from_selected(selected[blank_index])}
                                /> 
                            )} 
                            </View> 
                        );
                    }else{
                        return(
                           <Text style={styles.text_option}>{part.text}</Text>  
                        ); 
                    }
                })}
            </View>
            <Image style={styles.fill_the_blank_image} source={{uri: question.image}} resizeMode="contain"/>
            <View style={styles.option_Container}>
                {question.options.map((option) => (
                    <Word_option
                        key={option} 
                        text={option} 
                        is_Selected={is_Selected(option)}
                        onPress={() => add_Selected_option(option)}
                    />
                ))}
            </View>
            <Button text='Перевірити' onPress={onButtonPress} disabled={is_ready_to_check()}/>
        </>
    );
};

export default Fill_the_blank_multiple;