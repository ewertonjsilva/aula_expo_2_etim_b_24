import { View, Text } from 'react-native'; 

import styles from './styles';

export default function ListaCompras({qtd = 0, item = ''}) {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>{`${qtd} - ${item}`}</Text>
        </View>
    );
}