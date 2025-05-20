import React, { useEffect, useState } from "react";
import { Text, View, Image} from "react-native";
import { fetchHero } from "../api/superHeroApi";
import styles from "../styles/SuperHeroStyles";

export default function SuperHeroScreen({ route }){
    const { id: heroeId } = route.params;
    const [hero, setHero] = useState({});

    const loadHeroInfo = async () => {
        try{
            const data = await fetchHero(heroeId);
            setHero(data);
        }catch (error) {
            console.error(error);
        }
    }

    const getStatColor = (value) => {
        const num = parseInt(value);
        if (isNaN(num)) return '#6c757d'; // gris si no es número
      
        if (num >= 80) return '#28a745'; // verde
        if (num >= 50) return '#ffc107'; // amarillo
        return '#dc3545'; // rojo
      };

    useEffect(() => {
        loadHeroInfo();
    }, []);

    if (!hero.images) {
        return <Text>Loading image...</Text>;
      }
    

    return (
        <View style={styles.container_hero_detail}>
            <Image source={{ uri: hero.images.lg }} style={styles.image_hero_detail} />
            <Text style={styles.title_hero_detail}>{hero.name}</Text>

            <Text style={styles.sectionTitle}>Statistics:</Text>
            {Object.entries(hero.powerstats).map(([stat, value]) => (
                <Text key={stat} style={[styles.detailText, {color: getStatColor(value)}]}> 
                    {stat}: {value}
                </Text>
            ))}

            <Text style={styles.sectionTitle}>Appearance:</Text>
            {Object.entries(hero.appearance).map(([key, value]) => (
                <Text key={key} style={styles.detailText}>
                    {key}: {Array.isArray(value) ? value.join(" / ") : value}
                </Text>
            ))}
        </View>
    )
}