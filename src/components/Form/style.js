import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    FormContext: {
        flex:1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        paddingTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    form: {
        width: "100%",
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft:20
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft:10
    },
    textButtonCalculator: {
        fontSize: 20,
        color:"#ffffff"
    },
    buttonCalculator: {
        borderRadius:50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin:30
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    },
    resultIMC: {},
    boxSharebutton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    shared: {},
    sharedText: {},
    exhibitionResultImc: {
        width: "100%",
        height:"50%"
    }
});

export default styles
