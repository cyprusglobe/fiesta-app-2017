/**
 * @flow
 */

import React, { Component } from 'react'
import {
    TouchableOpacity,
    Image,
} from 'react-native'

import imageAddProfile from '../../images/add_profile.png'
import imageSettings from '../../images/extra.png'

export default class MenuButton extends Component {


    render() {
        let image;

        switch(this.props.image)
        {
            case 'add_profile':
                image = imageAddProfile;
                break;

            case 'settings':
                image = imageSettings;
                break;
        }

        return (
            <TouchableOpacity onPress={this.props.action}>
                <Image
                    style={this.props.style}
                    source={image}
                />
            </TouchableOpacity>
        )
    }
}
