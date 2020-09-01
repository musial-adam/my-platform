import Typography from 'typography'

// TODO
/* This is just basic config
   Full list of fonts should be modified
   Review vertical rhythm settings */

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  blockMarginBottom: 1,
  scaleRatio: 2.5,
  headerFontFamily: [
    'Nunito',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Nunito', 'serif'],
})
export default typography
