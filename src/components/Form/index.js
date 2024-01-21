import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(props) {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        let heightFormt = height.replace(",", ".")
        return setImc((weight / (heightFormt * heightFormt)).toFixed(2))
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        }
        else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o seu peso e altura")
        }
    }

    return (
        <View style={styles.FormContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="1.75"
                        keyboardType="numeric"
                    />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="75.58"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        onPress={() => validationImc()}
                        title={textButton}
                        style={styles.buttonCalculator}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exhibitionResultImc}>
                    <ResultIMC messageResultIMC={messageImc} resultIMC={imc} />
                    <TouchableOpacity
                        onPress={() => validationImc()}
                        title={textButton}
                        style={styles.buttonCalculator}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}
