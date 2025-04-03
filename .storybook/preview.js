import '../resources/css/app.css'; // Adjust to the correct path of your Tailwind CSS file
import 'tailwindcss/tailwind.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;