import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextIMC: {
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        alignItems: "center",
        width: "100%",
    },
    resultIMC: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#FF0043",
    },
    numberIMC: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold", 
    },
    boxSharebutton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
        alignItems: "center"
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal:30
    }
});

export default styles
