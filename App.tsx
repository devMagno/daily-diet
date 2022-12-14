import { ThemeProvider } from "styled-components/native"
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans"
import { StatusBar } from "expo-status-bar"

import { Routes } from "./src/routes"

import { Loading } from "./src/components/Loading"

import theme from "./src/theme/index"

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
