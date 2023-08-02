import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.root}>
        
        <Text style={styles.title}>Будь ласка оберіть урок!</Text>

        <Pressable onPress={() => navigation.navigate('Lesson 1')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/gZbPSLL.png'}}
          resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 1</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Lesson 2')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/RZdsshk.png'}}
          resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 2</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Lesson 3')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/vrW4Alv.png'}}
          resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 3</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20200327%2Fourmid%2Fpngtree-cute-cat-cartoon-design-png-image_2165601.jpg&f=1&nofb=1&ipt=57ab47e36866afa7251a8788d1bda01d8dd6a2d3324af9f5c02c1378b17af249&ipo=images'}}
            resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 4</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/F8IjBD2.png'}}
            resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 5</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/Lbwdm6s.png'}}
            resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 6</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/gKY74F9.png'}}
            resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 7</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fvector-single-cartoon-illustration-snowflake-on-white-background-vector-id1047001668%3Fk%3D6%26m%3D1047001668%26s%3D170667a%26w%3D0%26h%3D9Djyou0MSRlprgUB7ag6Q962nMsWpoNOusnPyjU-FWE%3D&f=1&nofb=1&ipt=8a605345d1b4a1cd623e3c2acc2c95d07becdd0bf4ce3c502b1d321932c1faa7&ipo=images'}}
            resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 8</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/LRqcl0y.png'}}
            resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 9</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/Ss5fxkq.png'}}
            resizeMode='contain'/>
          </View>
          <Text style={styles.text}>Урок 10</Text>
        </Pressable>
      
      </View>
    </ScrollView>
   
  );
};

export default HomeScreen;