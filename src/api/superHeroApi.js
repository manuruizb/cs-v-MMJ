export const BASE_URL = 'https://akabab.github.io/superhero-api/api'

export async function fetchAllHeroes() {
    try {
        let url = `${BASE_URL}/all.json`;

        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error al obtener los super heroes:', error);
        throw error;
    }
}

export async function fetchHero(id) {
    try {
        let url = `${BASE_URL}/id/${id}.json`;
        console.log(url)

        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(`Error al obtener el superheroe con id ${id} -> `, error);
        throw error;
    }
}