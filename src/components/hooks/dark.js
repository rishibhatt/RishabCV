import { useEffect,useState } from 'react';


export default function useDark(){

    const [theme,setTheme] = useState('dark');
    const colorBackground = theme === 'dark'?'light':'dark';
    
    useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove(colorBackground);
      root.classList.add(theme);
      
    },[theme,colorBackground]);

    return [colorBackground,setTheme];
  }
