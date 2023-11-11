import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Style from './Style';
import NetflixLogo from '../../assets/NetflixLogo.png';
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
    const navigation = useNavigation(); 

  const retornaPageHome = () => {
    navigation.navigate('home' as never);
  };
  
  return (
    <ScrollView>
      <View style={Style.conteineirBarraNav}>
        <TouchableOpacity onPress={() => retornaPageHome()}>
          <Image
            style={Style.logoBarraNav}
            source={NetflixLogo}
            alt="Netflix"
          />
        </TouchableOpacity>
        <Image
          style={Style.avatarBarraNav}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU',
          }}
          alt="avatar"
        />
      </View>
    </ScrollView>
  );
}
