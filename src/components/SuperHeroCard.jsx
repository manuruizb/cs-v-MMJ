import React from "react";
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/SuperHeroStyles";


export default function SuperHeroCard({ hero }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SuperHero', { id: hero.id })}>
            <Image source={{ uri: hero.images.md }} style={styles.image}/>
            <Text style={styles.textCard}>{hero.name}</Text>
        </TouchableOpacity>
    )
}