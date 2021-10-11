import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, NativeAppEventEmitter , KeyboardAvoidingView} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');


  const cadastro = () => {
    if(cadastro != null){
      alert("preencha os campos");
    }
    
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
      
      <StatusBar hidden/>

      <Image style={{width: 100, height: 100}}  source={require('./assets/images.png')} />
      <Text style={{paddingRight: 250, fontSize: 20}}>nome</Text>
      <TextInput placeholder="digite seu nome.." style={styles.textInput} onChangeText={text=>setNome(text)} />

      <Text style={{paddingRight: 260, fontSize: 25}}>cpf</Text>
      <TextInput placeholder="digite seu cpf.." style={styles.textInput} onChangeText={text=>setCpf(text)} />


      <Text style={{paddingRight: 250, fontSize: 20}}>email</Text>
      <TextInput   placeholder="digite seu email.." style={styles.textInput} onChangeText={text=>setEmail(text)} />

      <TouchableOpacity onPress={()=>cadastro()}>
        <Text style={styles.botaoSalvar}>Salvar</Text>
        
      </TouchableOpacity>

      

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdab9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },

  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 0,
    paddingLeft: 10,
    marginBottom: 5
  },
  botaoSalvar:{
    borderRadius: 4,
    margin: 10,
    backgroundColor: '#00ffff',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: 220,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'sans-serif-light',
    fontStyle: 'italic',
    fontWeight: '900'
  },
  bemVindo: {
    fontSize: 30,
    backgroundColor: '#98fb98',
    margin: 10,
    borderRadius: 20,
    padding: 11
  }


});
