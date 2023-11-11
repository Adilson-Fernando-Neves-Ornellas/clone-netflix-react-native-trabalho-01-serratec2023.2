import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image,Alert, ScrollView } from 'react-native'; 
import { api } from "../../api/api";
import { chaveApi } from "../../api/api";
import Style from './Style';

interface CarroselFilmesProps {
    categoria: string;
}

interface Filme {
    poster_path: string;
    backdrop_path: string;
    name: string; 
}

interface Filmes {
    results: Filme[];
}

const CarroselFilmes: React.FC<CarroselFilmesProps> = ({ categoria }) => {
    const [listaFilmes, setListaFilmes] = useState<Filme[]>([]);

    const urlImg = "https://image.tmdb.org/t/p/original"

    const getFilmes = async () => {
        if(categoria=="trending"){
            const response = await api.get<Filmes>(`/${categoria}/all/week?api_key=${chaveApi}&language=pt-BR`);
            setListaFilmes(response.data.results);
        }else if(categoria=="rated"){
            const response = await api.get<Filmes>(`/movie/top_${categoria}?api_key=${chaveApi}&language=pt-BR`);
            setListaFilmes(response.data.results);
        }else if(categoria=="originals"){
            const response = await api.get<Filmes>(`/discover/tv?api_key=${chaveApi}&with_networks=213`);
            setListaFilmes(response.data.results);
        }else if(categoria=="comedy"){
            const response = await api.get<Filmes>(`/discover/tv?api_key=${chaveApi}&with_genres=35`);
            setListaFilmes(response.data.results);
        }else if(categoria=="romances"){
            const response = await api.get<Filmes>(`/discover/tv?api_key=${chaveApi}&with_genres=10749`);
            setListaFilmes(response.data.results);
        }else if(categoria=="documentaries"){
            const response = await api.get<Filmes>(`/discover/tv?api_key=${chaveApi}&with_genres=99`);
            setListaFilmes(response.data.results);
        }
    };

    useEffect(() => {
        getFilmes();
    }, [categoria]); 

    return (
        <FlatList
            style={Style.cardCarrosel}
            horizontal={true}
            data={listaFilmes}
            renderItem={({ item }) => (
                <View style={Style.div}>
                    <Image source={{uri: urlImg + item.poster_path }}  style={{ width: 100, height: 150}} />
                </View>
            )}
        />
    );
};

export default CarroselFilmes;
 