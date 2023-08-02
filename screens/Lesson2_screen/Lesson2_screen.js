import React, {useState, useEffect} from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Questions_2 from "../../assets/Questions_2";
import Open_Ended_Question from "../../src/components/Open_Ended_Question/Open_Ended_Question";
import Image_Multiple_Choice_Question from "../../src/components/Image_Multiple_Choice_Question/Image_Multiple_Choice_Question";
import Header from "../../src/components/Header/Header";
import Fill_the_blank from "../../src/components/Fill_the_blank/Fill_the_blank";
import Fill_the_blank_multiple from "../../src/components/Fill_the_blank_multiple/Fill_the_blank_multiple";
import Fill_the_blank_only from "../../src/components/Fill_the_blank_only/Fill_the_blank_only";

const Lesson2_screen = ({ navigation }) => {

    const [current_Question_Number, set_current_Question_Number] = useState(0);
    const [current_Question, set_current_Question] = useState(Questions_2[current_Question_Number]);
  
    const [modal_Visible, set_Modal_Visible] = useState(false);
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [showWinningModal, setShowWinningModal] = useState(false);
  
    const [lives, set_lives] = useState(5);

    useEffect(() => {
        if (current_Question_Number >= Questions_2.length) {
          if (lives < 1) {
            set_Modal_Visible(true);
          } else {
            setShowWinningModal(true);
          }
        } else {
          set_current_Question(Questions_2[current_Question_Number]);
        }
      }, [current_Question_Number]);
    
    
      const on_Correct = () => {
        setAnswerCorrect(true);
        set_Modal_Visible(true);
        set_current_Question_Number(current_Question_Number + 1);
      };
    
      const restart = () => {
        set_lives(5);
        set_current_Question_Number(0);
      };
    
      const go_Home = () => {
        navigation.navigate('Home');
      };
    
      const on_Wrong = () => {
        if(lives < 1){
          setAnswerCorrect(false);
          set_Modal_Visible(true);
        }else{
          set_lives(lives - 1);
          setAnswerCorrect(false);
          set_Modal_Visible(true);
        }  
      };
    
      const closeModal = () => {
        if(lives < 1) {
          closeModal_restart();
        } else {
          set_Modal_Visible(false);
        }
      };
    
      const closeModal_restart = () => {
        set_Modal_Visible(false);
        restart();
      };
    
      const WinningModal = () => {
        setShowWinningModal(false);
        go_Home();
      };

    return(
        <View style={styles.root}>

        <Header 
          progress={current_Question_Number / Questions_2.length} 
          lives={lives}
        />
    
          {current_Question.type  === 'Image_Multiple_Choice_Question' && (
            <Image_Multiple_Choice_Question 
              question={current_Question}
              on_Correct={on_Correct}
              on_Wrong={on_Wrong}
            />
          )}
    
          {current_Question.type  === 'OPEN_ENDED' && (
            <Open_Ended_Question
              question={current_Question}
              on_Correct={on_Correct}
              on_Wrong={on_Wrong}
            />
          )}

          {current_Question.type === 'Fill_the_blank_only_question' && (
              <Fill_the_blank_only 
                question={current_Question}
                on_Correct={on_Correct}
                on_Wrong={on_Wrong}
              />
          )}

          {current_Question.type === 'Fill_the_blank_question' && (
              <Fill_the_blank 
                question={current_Question}
                on_Correct={on_Correct}
                on_Wrong={on_Wrong}
              />
          )}

          {current_Question.type === 'Fill_the_blank_multiple_question' && (
              <Fill_the_blank_multiple
                question={current_Question}
                on_Correct={on_Correct}
                on_Wrong={on_Wrong}
              />
          )}
    
        <Modal visible={modal_Visible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
              {lives < 1 ? 
                (<Image style={styles.restart_image} 
                source={{uri : 'https://i.imgur.com/LtoMreX.jpeg'}}
                resizeMode='contain' />) : ('')
              }
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  {answerCorrect ? 'Відповідь вірна!' : lives < 1 ? ('Закінчились життя') : ('Відповідь не вірна :(')}
                </Text>
                {lives < 1 ? (
                  <TouchableOpacity onPress={closeModal_restart} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Спробувати знову</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Закрити</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </Modal>
    
          <Modal visible={showWinningModal} animationType="slide" transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Ви відповіли на всі питання правильно!</Text>
                <TouchableOpacity onPress={WinningModal} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>На головну</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          
        </View>
    );
};

export default Lesson2_screen;