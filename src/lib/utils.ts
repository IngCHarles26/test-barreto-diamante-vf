export const formatDate = (date:Date) => {
  return date.toLocaleString('es-ES', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).split(','); 
}

export const months = () => ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','setiembre','octubre','noviembre','diciembre']

export const years = () => {
  const startYear = 2026
  const nowYear = (new Date()).getFullYear()
  return Array.from({length: 1+nowYear-startYear}, (_,ix) => `${+ix+startYear}`)
}



export const genRandomColor = () => {
  const colors = [
    '#1A237E', '#283593', '#303F9F', '#3949AB', '#3F51B5',
    '#1976D2', '#1E88E5', '#2196F3', '#0288D1', '#0277BD',
    '#00838F', '#0097A7', '#00ACC1', '#00BCD4', '#0097A7',
    '#00796B', '#00897B', '#009688', '#00695C', '#004D40',
    '#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#388E3C',
    '#558B2F', '#689F38', '#7CB342', '#8BC34A', '#689F38',
    '#9E9D24', '#AFB42B', '#C0CA33', '#827717', '#9E9D24',
    '#F57F17', '#F9A825', '#FBC02D', '#F57F17', '#E65100',
    '#EF6C00', '#F57C00', '#FB8C00', '#FF9800', '#EF6C00',
    '#E64A19', '#F4511E', '#FF5722', '#D84315', '#BF360C',
    '#6D4C41', '#795548', '#8D6E63', '#5D4037', '#4E342E',
    '#455A64', '#546E7A', '#607D8B', '#37474F', '#263238',
    '#424242', '#616161', '#757575', '#424242', '#212121',
    '#880E4F', '#AD1457', '#C2185B', '#D81B60', '#E91E63',
    '#6A1B9A', '#7B1FA2', '#8E24AA', '#9C27B0', '#AB47BC',
    '#4A148C', '#6A1B9A', '#7B1FA2', '#8E24AA', '#9C27B0',
    '#311B92', '#4527A0', '#512DA8', '#5E35B1', '#673AB7',
    '#1A237E', '#283593', '#303F9F', '#3949AB', '#5C6BC0',
    '#0D47A1', '#1565C0', '#1976D2', '#1E88E5', '#2196F3',
    '#01579B', '#0277BD', '#0288D1', '#039BE5', '#03A9F4'
  ];
  const len = colors.length
  
  const {floor,random} = Math
  const ix = floor(random() * len);
  return colors[ix];
}

export function format0(number:number,zeros=2){
    const len = `${+number}`.length
    const _0 = '0'.repeat(zeros-len)

    return `${_0}${number}` 
  }