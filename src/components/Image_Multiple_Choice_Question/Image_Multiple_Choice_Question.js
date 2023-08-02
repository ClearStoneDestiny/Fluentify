import React, {useState} from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types';
import Image_option from "../Image_option/Image_option";
import Button from "../Button/Button";

const Image_Multiple_Choice_Question = ({question, on_Correct, on_Wrong}) => {
    const [selected, set_selected] = useState(null);
    const onButtonPress = () => {
        if(selected.correct){
          on_Correct();
          set_selected(null);
        }else{
          on_Wrong();
        }
    };

    return(
        <>
            <Text style={styles.title}>{question.question}</Text>
            <View style={styles.options_for_all_container}>
                {question.options.map((option) => (
                <Image_option image={option.image} 
                    text={option.text} 
                    key={option.id}
                    is_Selected={selected?.id === option.id}
                    onPress={() => set_selected(option)}
                />
            ))}
            </View>
            <Button text={"Перевірити"} onPress={onButtonPress} disabled={!selected}/>
        </>
    );
};

Image_Multiple_Choice_Question.propTypes = {
    question: PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                text: PropTypes.string,
                image: PropTypes.string,
                correct: PropTypes.bool,
                type: PropTypes.string,
            })
        ).isRequired,
    }).isRequired,
};

export default Image_Multiple_Choice_Question;