import { StyleSheet } from "react-native";

export const borderColor = "rgba(228, 222, 222, 0.4)";

export const commonStyle = StyleSheet.create({
    circle: {
        borderRadius: 100, 
    },
    flexRow: {
        flexDirection: "row",
    },
    flexBewteen: {
        justifyContent: "space-between",
    },
    fullBox: {
        width: "100%",
    },
    padding: {
        padding: 8,
    },
    border: {
        elevation: 3,
    },
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

export const itemBox = StyleSheet.create({
    viewBox: {
        marginTop: 12,
        borderRadius: 2,
    },
    viewBoxContent: {
        backgroundColor: "#fff",
        padding: 8,
        margin: 3,
    },
    titleBox: {
        paddingBottom: 8,
    },
    titleText: {
        fontSize: 24,
    },
    contentText: {
        fontSize: 15,
    },
    baseInfoBox: {
        borderBottomWidth: 1,
        borderBottomColor: borderColor,
        marginBottom: 4,
        paddingBottom: 8,
    },
    statusBox: {
        alignItems: "center",
    },
    bottomView: {
        marginLeft: 3,
    },
    childViewBox: {
        width: "100%",
        flex: 1,
        height: 26,
        alignItems: "center",
        paddingRight: 8,
        // justifyContent: "center",
    },
    childIndexBox: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
    childIndexBoxBackground: {
        position: "absolute",
        top: -3,
        width: 18, 
        height: 18,
        backgroundColor: "red",
        borderRadius: 100,
    },
    childIndexBoxLine: {
        width: 1,
        height: 26,
        // backgroundColor: borderColor,
        backgroundColor: "rgba(180, 180, 180, 1)",
        position: "absolute",
        top: -6,
        left: "50%",
        marginLeft: -.5,
    },
    childContentText: {
        lineHeight: 11,
        color: "#fff",
    }
})

export const modal = StyleSheet.create({
    header: {
        width: "100%",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 20,
    },
    headerBtn: {
        backgroundColor: "transparent",
        color: "#ff0",
        elevation: 0,
    },
    content: {
        
    }
})

export const itemDetail = StyleSheet.create({

})