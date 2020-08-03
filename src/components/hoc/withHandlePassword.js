import React, {Component, useState} from 'react';
import { Icon as NBIcon } from 'native-base';
import {styles} from './styles';

export default Cmp => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = ({
                isSecure: false
            })
        }ss

        render() {
            const { ...passThroughProps} = this.props;

            debugger;
            if(this.state.isSecure){
                debugger;
                return <NBIcon
                    style={styles.NBIconOff}
                    name="eye-off"
                    onPress={() => this.setState({isSecure: !this.state.isSecure})}/>
            } else {
                debugger;
                return <NBIcon
                    style={styles.NBIcon}
                    name="eye"
                    onPress={() => this.setState({isSecure: !this.state.isSecure})}/>
            }

            return <Cmp {...passThroughProps} />
        }
    };
}
