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
    botao: {
        borderWidth: 3, 
        padding: 10, 
        width: '80%', 
        borderRadius: 20, 
        alignItems: 'center', 
        borderColor: '#673AB7', 
        marginVertical: 10, 
    }, 
    txtBotao: {
        fontSize: 25, 
        color: '#673AB7', 
    }, 
    botaoPress: {
        backgroundColor: '#673AB7', 
    }, 
    txtNumero: {
        fontSize: 35, 
        color: '#673AB7', 
        marginVertical: 10, 
    }, 
    ladolado: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        // borderWidth: 2, 
        width: '80%', 
    }, 
    btnPequeno: {
        width: '40%', 
    },
}); 

export default styles;