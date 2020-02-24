import React from 'react';
import {View} from 'react-native';
import {SCLAlert, SCLAlertButton} from '../../../../../component/Alert';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageApp = props => {
  const {show, oke, batal} = props;
  return (
    <View>
      <View>
        <SCLAlert
          show={show}
          theme="info"
          title="Informasi"
          subtitle="LE Code belum Install dan Aktivasi."
          subtitle2="Install dan aktivasi sekarang ?"
          headerIconComponent={<Icon name="edit" size={50} color="white" />}>
          <SCLAlertButton theme="info" onPress={oke}>
            OKE
          </SCLAlertButton>
          <SCLAlertButton theme="default" onPress={batal}>
            BATAL
          </SCLAlertButton>
        </SCLAlert>
      </View>
    </View>
  );
};

export default ImageApp;
