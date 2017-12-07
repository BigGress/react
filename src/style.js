import { StyleSheet } from "react-native";

export const borderColor = "rgba(228, 222, 222, 0.4)";

export const commonStyle = StyleSheet.create({
    circle: {
        borderRadius: 100, 
    },
    flexRow: {
        flexDirection: "row",
    }
});

export const userStyle = StyleSheet.create({
    user: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#32db64",
    },
    userImage: {
        width: 80,
        height: 80,
    },
    userName: {
        fontSize: 18,
    },
    userEmail: {
        fontSize: 14,
    },
    backgroundImage: {
        position: "absolute",
        width: "110%",
        height: "100%",
    },
    userImageBox: {
        // flex: 1,
        width: 80,
        height: 80,
        margin: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    }
}) 

export const iconStyle = StyleSheet.create({
    icon: {
        borderWidth:1,
        borderColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: 100,
    },
    iconSize: {
        width: 22, 
        height: 22,
    },
    iconTouch: {
        borderWidth: 10,
        borderColor: "transparent",
    }
})

export const headerStyle = StyleSheet.create({
    box: {
        width: "100%",
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingLeft: 8,
        paddingRight: 8,
        elevation: 3,
    },
    title: {
        width: "83%",
    },
    titleText: {
        fontSize: 20,
        textAlign: "center",
    }
});

export const styles = StyleSheet.create({
    fullModal: {
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(255, 255, 255)",
    },
    clearPaddingAndMargin: {
        padding: 0,
        margin: 0,
    },
    displayNone: {
        display: "none"
    },
    MainContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        marginTop: 20,
    },
    warehouseSelectItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: borderColor,
        backgroundColor: "#bfcdda",
    },
    warehouseSelectText: {
        fontSize: 16,
        color: "#ffffff",
    },
    warehouseBox: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconSize: {
        width: 24, 
        height: 24,
    },
    icon: {
        borderWidth:1,
        borderColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 28,
        backgroundColor: "#1aab45",
        borderRadius: 14, 
        elevation: 3,
    },
    warehouseIcon: {
        // borderRadius: 100,
    }
})

export const stylesSideMenu = StyleSheet.create({
    menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      backgroundColor: "#fff",
    },
    avatarContainer: {
      marginTop: 20,
    },
    touchBox: {
        borderBottomWidth: 1,
        borderBottomColor: borderColor,
    },
    item: {
      fontSize: 19,
      fontWeight: "300",
      padding: 10,
    },
  });

