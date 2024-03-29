import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { PaperProvider } from 'react-native-paper'

import { Provider } from 'react-redux'
import store from './redux/store'

import Home from './pages/home'
import Search from './pages/search'
import About from './pages/about'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <AppStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#34314f',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                flex: 1,
                fontWeight: 'bold',
                color: '#fff',
                marginTop: 15
              },
              cardStyle: {
                backgroundColor: '#34314f'
              }
            }}>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Search" component={Search} />
            <AppStack.Screen name="About" component={About} />
          </AppStack.Navigator>
        </NavigationContainer>

      </PaperProvider>
    </Provider>
  )

}

export default Routes