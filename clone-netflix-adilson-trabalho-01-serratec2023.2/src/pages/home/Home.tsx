import NavBar from "../../components/navBar/NavBar"
import React, { useContext } from 'react';
import { View, Text, Button, ScrollView } from 'react-native'; 
import { AuthContext } from '../../Context/Context';
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import CarroselFilmes from "../../components/carroselFilmes/carroselFilmes";

const Login = () => {
  const {logado} = useContext(AuthContext);
  const navigation = useNavigation(); 

  const pageLogin = () => {
    navigation.navigate('login' as never);
  };

  return (
    <>
     <ScrollView style={Style.container}>
        {logado ? (
          <View style={Style.containerCarrosseus}>
            <NavBar/>
            <CarroselFilmes categoria="trending"/>
            <CarroselFilmes categoria="originals"/>
            <CarroselFilmes categoria="rated"/>
            <CarroselFilmes categoria="comedy"/>
            <CarroselFilmes categoria="romances"/>
            <CarroselFilmes categoria="documentaries"/>
          </View>
        ) : (
        <View>
          <Text style={Style.text}>O usuário já está logado.</Text>
          <Button color={"#8B0000"} title="Retorna pagina de login" onPress={() => pageLogin()} />
        </View>
        )}
    </ScrollView>
    </>
  );
};

export default Login;
