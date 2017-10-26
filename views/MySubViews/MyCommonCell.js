import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';





class MyCommonCell extends Component {

    constructor(props){
        super(props);
    }


    static  defaultProps = {
        title:'',
        subTitle:'',
        subTitleTextColorIsOrange:false,
    }

    render() {
        return (
            <View style={styles.itemStyle}>
                <Image style={styles.itemHeadStyle} source={require("../../img/headImage.png")}>

                </Image>
                <Text style={styles.itemTextStyle}>{this.props.title}</Text>
                {this.renderSubTitles()}

                <Image style={styles.itemArrowStyle}>

                </Image>
                <View style={styles.linViewStyles}>

                </View>
            </View>
        )
    }

    renderSubTitles(){
        if (this.props.subTitleTextColorIsOrange){
            return(
                <Text style={styles.itemSubTextOrangeStyle}>{this.props.subTitle}</Text>
            )
        }else {
            return(
                <Text style={styles.itemSubTextGrayStyle}>{this.props.subTitle}</Text>
            )
        }
    }
}

// MyCommonCell.defaultProps = {
//     title:'555',
// }

const styles = StyleSheet.create({
    itemStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        marginBottom:1,
    },
    itemHeadStyle:{
        width:44,
        height:44,
    },
    itemTextStyle:{
        lineHeight:44,
        color:'black',
        marginLeft:13,
        fontSize:13,
    },
    itemSubTextOrangeStyle:{
        fontSize:10,
        position:'absolute',
        right:64,
        lineHeight:44,
        color:"#EE6F2D",
    },
    itemSubTextGrayStyle:{
        fontSize:10,
        position:'absolute',
        right:64,
        lineHeight:44,
        color:'#9F9F9F',
    },
    itemArrowStyle:{
        width:44,
        height:44,
        backgroundColor:'gray',
        position:'absolute',
        right:10,
    },

});

export default MyCommonCell;