import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native'; 
import { AuthContext } from '../../Context/Context';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
  const { listaUsuarios, setListaUsuarios, logado, setLogado } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation(); 

  useEffect(() => {
    listaUsuarios 
  }, []); 

  const adicionarNovo = () => {
    if(nome !== "" && email !== "" && senha !== ""){
      setListaUsuarios([...listaUsuarios,{id:listaUsuarios.length,nome:nome,senha:senha,email:email}])
      Alert.alert("Login efetuado com sucesso, retornando a pagina de login")
      navigation.navigate('home' as never);
    }else{
      Alert.alert("Dados Invalidos")
    }
  };

  const limpar = () => {
    setNome('')
    setEmail('')
    setSenha('')
  };

  const sair = () => {
    setLogado(false)
  };

  return (
    <>
      <View style={Style.container}>
        {logado ? (
          <View>
            <Text style={Style.text}>Saia para poder fazer o cadastro de um novo usuario</Text>
            <Button title="Sair" onPress={() => sair()} />
          </View>
        ) : (
          <View style={Style.containerForm}>
            <Text style={Style.text}>Faça seu cadastro</Text>
            <TextInput
              style={Style.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Insira seu nome"
            />
            <TextInput
              style={Style.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Insira o email"
            />
            <TextInput
              style={Style.input}
              value={senha}
              onChangeText={(text) => setSenha(text)}
              placeholder="Insira a senha"
              secureTextEntry
            />
            <View style={Style.buttonContainer}>
              <Button color={"#8B0000"}  title="Cadastrar" onPress={adicionarNovo} />
              <Button color={"#8B0000"} title="Limpar" onPress={() => limpar()} />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Cadastro;
