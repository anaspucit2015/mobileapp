import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert
} from 'react-native'
const image = require('./assets/adaptive-icon.png')
export default function App () {
  const [visible, setVisible] = useState(false)
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <ActivityIndicator size='large' />
      <ActivityIndicator size='large' color='midnightblue' />
      <ActivityIndicator size='large' color='midnightblue' animating={false} />
      <StatusBar
        backgroundColor='blue'
        barStyle='dark-content'
        hidden={false}
      />
      <ScrollView>
        <ImageBackground style={{ height: 300, width: 300 }} source={image}>
          <Button
            title='Press'
            disabled={false}
            color='midnightblue'
            onPress={() =>
              Alert.alert('HEYE WAY A KI AY!', 'WAY A TY ALERT BAN GYA A!', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed')
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
              ])
            }
          />
        </ImageBackground>
        <Pressable
          onPress={() => console.log('PRESSED')}
          onLongPress={() => setVisible(true)}
          onPressIn={() => console.log('PRESS IN')}
          onPressOut={() => console.log('PRESS OUT')}
        >
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Text>
        </Pressable>
        <ImageBackground style={{ height: 300, width: 300 }} source={image} />
      </ScrollView>
      <Modal
        visible={visible}
        onRequestClose={() => setVisible(false)}
        animationType='slide'
        presentationStyle='formSheet'
      >
        <View style={styles.modal}>
          <Text>Modal Content</Text>
          <Button title='Close' color='Red' onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: 'plum'
  },
  modal: {
    padding: 60,
    backgroundColor: 'blue'
  }
})