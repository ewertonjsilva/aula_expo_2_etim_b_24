import { View, Text, TextInput } from 'react-native'; 

import styles from './styles';

export default function Exemplo_4 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text> 

            <TextInput 
                placeholder='Digite seu nome...' 
                style={styles.input}
            />
            <Text style={styles.texto}>Nome digitado: </Text>
        </View>
    );
}