import React, { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import { AuthProvider } from './src/context/authContext'
import Navigation from './src/navigation'
import firebase from '@react-native-firebase/app';

export default function App() {


  const credentials = {
    projectId: "eximhub-lnsel",
    appId: "1:57101272321:android:5f3a714bda7ede720a4700"
  };

  const config = {
    name: 'Exim',
  };
  useEffect(() => (async () => await firebase.initializeApp(credentials, config)),[])


  return (
    <AuthProvider>
      <Navigation />
      <Toast />
    </AuthProvider>
  )
}