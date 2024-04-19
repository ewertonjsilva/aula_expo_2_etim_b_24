import { View, Text } from 'react-native'; 

import Mensagem from './mensagem';

import styles from './styles';

function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text> 

            <Mensagem nome='Ewerton' sobrenome='Silva' />
            <Mensagem nome='Ana' idade={23} />
            <Mensagem sobrenome='Santos' />

        </View>
    );
}

export default Exemplo2;