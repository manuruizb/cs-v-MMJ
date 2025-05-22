import {Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        textAlign: 'center',
        margin: 'auto'
    },
    card: {
        width: 150,
        backgroundColor: '#fff',
        borderRadius: '5px',
    },
    textCard: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 10,
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: 10,
    },
    textTitle: {
        fontSize: 50,
        textAlign:'center',
        display: 'block',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 30
    },
    searchContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        margin: 16,
        paddingHorizontal: 10,
        elevation: 2,
        shadowColor: '#777',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 14,
        outlineStyle: 'none',
        placeholderTextColor: 'gray',
    },
    container_hero_detail: {
        maxWidth: width > 768 ? 500 : width > 480 ? 400 : 320, /* Mayor 768 = Pantallas grandes / 480 a 768 = Teléfono grande o tablet / Menor 480: Teléfono pequeño */
        maxHeight: height * 0.90,
        width: '90%',
        alignSelf: 'center',
        marginTop: 24,
        marginBottom: 24,
        padding: width > 768 ? 28 : width > 480 ? 24 : 20,
        borderRadius: 16,
        backgroundColor: '#f8f9fa',
        borderWidth: 2,
        borderColor: '#dee2e6',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
      },
      image_hero_detail: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 16,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 8,
        color: '#495057',
      },
      detailText: {
        fontSize: 12,
        color: '#212529',
        marginBottom: 4,
        textAlign: 'center',
      },
      title_hero_detail: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#343a40',
        textAlign: 'center',
      },

    paginationContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    paginationButtons: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 10,
    },
    pageButton: {
        color: '#007bff',
        fontWeight: 'bold',
    },
    pageText: {
        fontSize: 16,
    }
});

export default styles;