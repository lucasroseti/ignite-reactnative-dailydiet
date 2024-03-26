import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { Loading } from '@components/Loading'

// import { Home } from './src/screens/Home'
// import { Statistics } from '@screens/Statistics'
// import { NewMeal } from '@screens/NewMeal'
// import { Feedback } from '@screens/Feedback'
import { Meal } from '@screens/Meal'
import theme from 'src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Meal /> : <Loading />}
    </ThemeProvider>
  )
}