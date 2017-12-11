import React from "react";
import {
    View,
    Text,
    FlatList,
    Button, 
} from "react-native";
import { action, observable } from "mobx";
import { observer } from "mobx-react";

// import {} from "../style";


@observer
export default class ItemDetail extends React.Component {
    onBack() {
        this.props.onBack()
    }
    
    render() {
        let infos = [
            `T{}`,
            `test2`
        ];

        return (
            <View>
                <View>
                    <View>
                        <Text>Name</Text>
                        <Text>CGXXXX</Text>
                    </View>
                    <FlatList data={infos}
                              renderItem={({item}) => <Text>{item}</Text>}
                              keyExtractor={(item, index) => index}/>
                </View>
            </View>
        )
    }
}