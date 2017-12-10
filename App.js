import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';
import SideMenu from "react-native-side-menu";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import { Main } from "./src/index";

import Header from "./src/components/Header";
import User from "./src/components/User";
import Menu from "./src/components/Menu";
import { styles as Style, commonStyle } from "./src/style";

const WarehouseItem = ({selectWarehouse}) => {
  return (
      <TouchableHighlight onPress={selectWarehouse} style={Style.warehouseSelectItem}
                          underlayColor={"#bfcdda"}>
          <View style={[commonStyle.flexRow, commonStyle.flexBewteen, Style.warehouseBox, ]}>
              <Text style={Style.warehouseSelectText}>仓库: ABC仓库</Text>
              <View style={Style.icon}>
                  <Image style={[Style.iconSize, Style.warehouseIcon]} source={require("./src/assets/images/warehouse.png")} />
              </View>
          </View>
      </TouchableHighlight>
  )
}

@observer
export default class App extends React.Component {
  @observable openMenu = false;
  @observable selectedType = 2;

  menuData = [{
      type: 0,
      component: () => <User name={"测试"} email={"test@test.com"}
                            image={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512647080325&di=6643726cd9b113d10603440962f24bbf&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fbd315c6034a85edfb4d291c943540923dc5475f9.jpg"}/>
  }, {
      type: 1,
      component: () => <WarehouseItem selectWarehouse={this.selectWarehouse.bind(this)} />
  }, {
      type: 2,
      text: "待质检任务"
  }, {
      type: 3,
      text: "已完成"
  }]

  selectWarehouse(ev) {
    console.log(ev)
  }

  selectMenu(ev) {
      console.log(`menu-type:`, ev)

      this.selectedType = ev;
  }

  @action
  changeSideMenu(isOpen) {
    this.isOpen = isOpen;
  }

  @action
  toggleMenu = () => {
    this.openMenu = !this.openMenu;
    console.log(`我被点击了`)
  }

  getTitle() {
    let obj = this.menuData.find(e => e.type === this.selectedType);

    return obj.text;
  }

  render() {
    const menu = <Menu items={this.menuData} seletItem={this.selectMenu.bind(this)} />
    return (
      <SideMenu menu={menu} isOpen={this.openMenu} onChange={this.changeSideMenu.bind(this)}>
        <View style={Style.MainContainer}>
          {/* <Button onPress={this.toggleMenu.bind(this)} title="toggle" /> */}
          <Header title={this.getTitle()} toggleMenu={this.toggleMenu}/>
          <Main />
        </View>
      </SideMenu>
    );
  }
}