import React from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

import { observer } from "mobx-react";

import { stylesSideMenu as styles } from "../style";

@observer
export default class Menu extends React.Component {
    
    render() {
        let MenuItem = ({type, text}) => {
            return (
                <TouchableHighlight onPress={this.props.seletItem.bind(this, type)}
                                    style={styles.touchBox}
                                    underlayColor={"rgba(228, 222, 222, 0.4)"}>
                    <Text style={styles.item}>{text}</Text>
                </TouchableHighlight>
            )
        }

        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View style={styles.avatarContainer}>
                    {this.props.items.map(e => {
                        if (e.component) {
                            let CustomComponent = e.component;
                            return <CustomComponent key={e.type} />
                        } else {
                            return <MenuItem key={e.type} type={e.type} text={e.text} />
                        }
                    })}
                </View>
            </ScrollView>
        )
    }
}