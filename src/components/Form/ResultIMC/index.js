import { View, Text, TouchableOpacity, Share } from 'react-native';
import React from 'react';
import styles from './style';


export default function ResultIMC(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultIMC,
        });
    }
    return (
        <View styles={styles.contextIMC}>
            <View style={styles.boxSharebutton}>
                <Text style={styles.information}>{props.messageResultIMC}</Text>
                <Text style={styles.numberIMC}>{props.resultIMC}</Text>
                <TouchableOpacity
                    style={styles.shared}
                    onPress={onShare}
                >
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
