import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'
import { Auth, getAuth, initializeAuth } from 'firebase/auth'
import { getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firebaseConfig from './firebase-config.json'

let app: FirebaseApp
export let auth: Auth

if (getApps().length < 1) {
    app = initializeApp(firebaseConfig)
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    })
} else {
    app = getApp()
    auth = getAuth()
}
