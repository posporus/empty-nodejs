import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

const MyPlugin = plugin(({ addComponents }) => {
    addComponents({
        '.circle':{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            border: '1px solid #ccc',
        },

        
        '.not-nested': {
            backgroundColor: 'red',
        },
        '.not-nested > *': {
            backgroundColor: 'blue',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
        },


        '.nested': {
            backgroundColor: 'green',
            '> *': {
                backgroundColor: 'yellow',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
            }
        },
    })	
})

export default defineConfig({
    plugins: [MyPlugin]
})