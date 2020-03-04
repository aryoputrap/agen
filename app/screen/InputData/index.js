/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  // Alert,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import ImageEditor from '@react-native-community/image-editor';

export default class CameraScreen extends Component {
  constructor(props) {
    super();
    let {width} = Dimensions.get('window');
    this.maskLength = (width * 90) / 100;
  }

  state = {
    type: 'back',
    // ratio: '16:9',
    ratios: [],
    photoId: 1,
    photos: [],
    croppedImageURI: undefined,
    foto: '',
  };

  getRatios = async function() {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };

  setRatio(ratio) {
    this.setState({
      ratio,
    });
  }

  failure(msg) {
    const data = msg;
    const strData = JSON.stringify(data);
    console.log('failed:', strData);
  }

  newImage = newUri => {
    const data = newUri;
    const strData = JSON.stringify(data);
    this.setState({croppedImage: strData}, () => console.log(this.state));
    // console.log(croppedImage);
  };

  takePicture = async () => {
    // let {width, height} = Dimensions.get('window');
    if (this.camera) {
      const options = {quality: 0.2, base64: false};
      const fotox = await this.camera.takePictureAsync(options);
      const uri = fotox.uri;
      const cropData = {
        offset: {x: 100, y: 900},
        size: {width: 1000, height: 1000}, //bitmap height
        displaySize: {width: 5000, height: 5000},
      };
      ImageEditor.cropImage(uri, cropData).then(url => {
        console.log('Cropped image uri', url);
        this.setState({foto: url}, () => console.log(this.state));
      });
    }
  };

  renderCamera() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={this.state.type}
        ratio={this.state.ratio}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <View style={styles.overlay} />
        <View style={styles.snapText}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            SELARASKAN KTP ANDA
          </Text>
        </View>
        <View style={[styles.contentRow, {height: this.maskLength}]}>
          <View style={styles.overlay} />
          <View
            style={[
              styles.content,
              {width: this.maskLength, height: this.maskLength},
            ]}
          />
          <View style={styles.overlay} />
        </View>
        <View style={styles.snapText}>
          <TouchableOpacity
            style={[styles.flipButton, styles.picButton]}
            onPress={this.takePicture.bind(this)}>
            <Text style={styles.flipText}> SNAP </Text>
          </TouchableOpacity>
        </View>
        {/* <Image
          source={{
            uri: `data:image/png;base64,${this.state.foto}`,
          }}
          resizeMode={'stretch'}
          style={styles.fotoData}
        /> */}
        <Image
          source={{
            uri: this.state.foto,
          }}
          resizeMode={'stretch'}
          style={styles.fotoData}
        />
        <View style={styles.overlay} />
      </RNCamera>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderCamera()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    // backgroundColor: '#000',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  fotoData: {
    width: 200,
    height: 200,
    padding: 15,
    resizeMode: 'stretch',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  snap: {
    alignItems: 'center',
  },
  snapText: {
    alignItems: 'center',
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  flipButton: {
    height: 40,
    marginHorizontal: 2,
    marginBottom: 100,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picButton: {
    backgroundColor: 'blue',
  },

  row: {
    flexDirection: 'row',
  },

  preview: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  contentRow: {
    flexDirection: 'row',
  },
  content: {
    borderWidth: 5,
    borderRadius: 100,
    borderColor: 'blue',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    overlayColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
