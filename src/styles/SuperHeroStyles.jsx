import { StyleSheet } from "react-native";

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
    }
});

export default styles;