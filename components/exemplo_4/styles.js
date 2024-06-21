import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#D1C4E9', 
        borderRadius: 20, 
        width: '100%', 
        alignItems: 'center', 
    }, 
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold', 
        marginVertical: 20, 
        color: '#673AB7', 
    }, 
    input: {
        fontSize: 25, 
        color: '#673AB7', 
        width: '80%', 
        marginVertical: 10, 
        borderWidth: 2, 
        borderColor: '#673AB7', 
        padding: 5, 
        borderRadius: 20, 
    }, 
    texto: {
        fontSize: 25, 
        color: '#673AB7', 
        width: '80%', 
        marginVertical: 10, 
    },
}); 

export default styles;