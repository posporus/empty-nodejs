import { defineConfig } from 'vite-plugin-windicss';
import plugin from 'windicss/plugin';

const MyPlugin = plugin(({ addComponents, addBase }) => {
  addComponents({
    '.square': {
      width: '100px',
      height: '100px',
      border: '1px solid #ccc',
      '> *': {
        fontWeight: 'bold',
        margin: '10px',
        border: '2px solid black',
      },
    },

    '.not-nested': {
      backgroundColor: 'red',
    },
    '.not-nested > *': {
      color: 'blue',
    },

    '.nested': {
      backgroundColor: 'green',
      '> *': {
        color: 'yellow',
      },
    },
  });
  addBase({
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  });
});

export default defineConfig({
  plugins: [MyPlugin],
});
