import { useColorScheme } from 'react-native';

export const lightModeColors = {
    color: '#222',
    background: '#fff'
  }
  
  export const darkModeColors = {
    color: '#fff',
    background: '#222'
  }

function useColors() {
  const colorTheme = useColorScheme();

  return colorTheme === 'dark' ? darkModeColors : lightModeColors;
}

export default useColors