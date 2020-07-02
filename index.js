import {AppRegistry} from 'react-native'
import App from './src/index'
import {expo as appName} from './app.json'

console.log('Twitter-clone: ',appName)

AppRegistry.registerComponent(appName.name, () => App)