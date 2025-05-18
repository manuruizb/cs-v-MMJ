import React from 'react';
import { View } from 'react-native';
import SuperHeroCard from './SuperHeroCard';
import styles from '../styles/SuperHeroStyles';


export default function SuperHeroList({ heroesArray }) {
    return (
        <View style={styles.list}>
            {
                heroesArray.map(item => (
                    <SuperHeroCard key={item.id} hero={item} />
                ))
            }
        </View>
    );
}