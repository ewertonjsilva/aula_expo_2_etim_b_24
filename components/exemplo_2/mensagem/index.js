import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Mensagem() {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>Olá Ewerton</Text>
        </View>
    );
}