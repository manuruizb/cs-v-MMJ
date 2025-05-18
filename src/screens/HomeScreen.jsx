import React, { useEffect, useState } from "react";
import { fetchAllHeroes } from "../api/superHeroApi";
import { ScrollView, Text, TextInput, View } from "react-native";
import SuperHeroList from "../components/SuperHeroList";
import styles from "../styles/SuperHeroStyles";
import {Ionicons} from "@expo/vector-icons";


export default function HomeScreen() {
    const [heroes, setHeroes] = useState([]);
    const [filteredHeroes, setFilteredHeroes] = useState([]);
    const [searchText, setSearchText] = useState('');

    const filterHeroes = () => {
        if(searchText) {
            const lowerCaseFilter = searchText.toLowerCase();
            const filtered = heroes.filter(hero => hero.name.toLowerCase().includes(lowerCaseFilter));
            setFilteredHeroes(filtered);
        }else{
            setFilteredHeroes(heroes);
        }
    }

    const loadHeroes = async () => {
        try {
            const data = await fetchAllHeroes();
            setHeroes(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadHeroes();
    }, []);

    useEffect(() => {
        filterHeroes();
    }, [searchText, heroes]);

    return (
        <ScrollView>
            <View style={styles.title}>
                <Text style={[styles.textTitle, { color: '#6d1419' }]}>Super</Text>
                <Text style={[styles.textTitle, { color: '#141453' }]}>Heroes</Text>
            </View>
            <View style={styles.searchContainer}>
                <Ionicons style={styles.searchIcon} name="search" size={24} color="#777"/>
                <TextInput style={styles.searchInput} placeholder="Busca por nombre..." value={searchText} onChangeText={setSearchText} clearButtonMode="while-editing"/>
            </View>
            <SuperHeroList heroesArray={filteredHeroes} />
        </ScrollView>
    )

}