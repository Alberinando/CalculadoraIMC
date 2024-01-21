import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
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
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormt = height.replace(",", ".");
        let totalImc = (weight / (heightFormt * heightFormt)).toFixed(2);
        setImc(totalImc);
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validationImc() {
        console.log(imcList)
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
            <FlatList
                style={styles.listIMCs}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                            {item.imc}
                            </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id.toString()
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
