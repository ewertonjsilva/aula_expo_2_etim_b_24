import { View, Text } from 'react-native'; 

import ListaCompras from './listaCompras';

import styles from './styles';

export default function Atividade_2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Atividade 2
            </Text> 
            <Text style={styles.subtitulo}>
                Lista de compras
            </Text> 

            <ListaCompras qtd={2} item={'Bolacha recheada'} />
            <ListaCompras qtd={1} item={'Pão de forma'} />
            <ListaCompras qtd={4} item={'Leite integral'} />
        </View>
    ); 
}