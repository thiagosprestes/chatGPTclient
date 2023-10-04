import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Send from '../../../assets/send.svg';
import Mic from '../../../assets/mic.svg';
import {Header} from '../../../components/Header';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const recordIconSize = 22;
  const sendIconSize = 22;

  return (
    <View style={styles.container}>
      <Header title="chatGPT" />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.message, styles.userMessage]}>
          <Text style={styles.userMessageText}>Olá mundo</Text>
        </View>
        <View style={[styles.message, styles.botMessage]}>
          <Text style={styles.botMessageText}>Olá mundo</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.record}>
            <Mic width={recordIconSize} height={recordIconSize} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Send width={sendIconSize} height={sendIconSize} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {Home};
