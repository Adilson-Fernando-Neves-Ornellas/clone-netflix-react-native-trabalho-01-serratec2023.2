import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native'; 
import { AuthContext } from '../../Context/Context';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { listaUsuarios, setListaUsuarios, logado, setLogado } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation(); 

  const usuarios = [
    { id: 1, nome: 'admin', email: 'admin@hotmail.com',senha: '12345678' }
  ];

  useEffect(() => {
    setListaUsuarios([...listaUsuarios, ...usuarios]); 
  }, []); 

  const verificarLogin = () => {
    const usuarioEncontrado = listaUsuarios.find((usuario) => usuario.email==email && usuario.senha==senha)
    if(usuarioEncontrado){
      Alert.alert("Login efetuado com sucesso!")
      setLogado(true)
      setEmail('')
      setSenha('')
      navigation.navigate('home' as never);
    }else{
      Alert.alert("Dados Invalidos, tente novamente.")
    }
  };

  const irPaginaCadastro = () => {
    navigation.navigate('cadastro' as never);
  };

  const sair = () => {
    setLogado(false)
  };

  return (
    <>
      <View style={Style.container}>
        {logado ? (
          <View>
            <Text style={Style.text}>O usuário já está logado.</Text>
            <Button color={"#8B0000"} title="Sair" onPress={() => sair()} />
          </View>
        ) : (
          <View style={Style.containerForm}>
            <Text style={Style.text}>Faça seu Login</Text>
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
              <Button color={"#8B0000"}  title="Entrar" onPress={verificarLogin} />
              <Button color={"#8B0000"} title="Cadastrar-se" onPress={() => irPaginaCadastro()} />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Login;
