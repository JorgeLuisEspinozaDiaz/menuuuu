/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#2B50D4',
            brown: '#A47C68',
            blacks: '#3C3531',
            green: '#09B472',
            green1: '#09873B',
            green2: '#039434',
            celestial: '#C5DCF6',
            lightgreen: '#0B8A75',
            withes: '#FFFFFF',
            browns: '#6B4938',
            textp: '#606060',
            crem: '#FEF3DD',
         },
         fontFamily: {
            rubick: ['var(--font-rubick)'],
            roboto: ['var(--font-roboto)'],
            Newsreader: ['var(--font-Newsreader)'],
         },
         screens: {
            phone: '414px',
            phonelg: '568px',
            tablet: '768px',
            tabletlg: '960px',
            tabletxl: '1024px',
            laptop: '1200px',
            laptoplg: '1400px',
            desktop: '1700px',
         },
      },
   },
   plugins: [],
}
