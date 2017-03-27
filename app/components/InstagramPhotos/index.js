import React, { PureComponent } from 'react'
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
  FlatList
} from 'react-native'
import InstagramPhoto from '../InstagramPhoto'

const shows_second = [
    {
        key: 7,
        name:'Colony',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/91/229234.jpg'
    },
    {
        key: 8,
        name:'The Walking Dead',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg'
    },
    {
        key: 9,
        name:'Taken',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg'
    },
    {
        key: 10,
        name:'This is us',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg'
    },
    {
        key: 11,
        name:'Superstore',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg'
    },
    {
        key: 12,
        name:'Lethal Weapon',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg'
    },
    {
        key: 13,
        name:'The 100',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg'
    },
    {
        key: 14,
        name:'Homeland',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg'
    }
]

class InstagramPhotos extends PureComponent {

  state = {
    images: null,
  }

  async componentDidMount() {
    this._isMounted = true
    let { profile } = this.props

    if(profile) {
      let response = await fetch(`https://www.instagram.com/${profile}/media/`);
      let data = await response.json();
      if (this._isMounted) {
        let images = data.items.map(item => ({
          imageUrl: item.images.standard_resolution.url,
          width: item.images.standard_resolution.width,
          height: item.images.standard_resolution.height,
          description: item.caption && item.caption.text,
        }));
        this.setState({images: images.slice(0, 6)});
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <View>
        <View style={styles.cardLabel} collapsible={false}>
          <Text style={styles.cardLabelText}>
            Photos from Instagram
          </Text>
        </View>
        {this._renderInstagramPhotos()}
      </View>
    )
  }

  _renderInstagramPhotos() {
    let { images } = this.state;


    if (images) {
      return (
        <View style={[styles.card, styles.imageLoadingContainer]}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.list}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imageLoadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 125,
    marginVertical: 10,
  }
})

export default InstagramPhotos
