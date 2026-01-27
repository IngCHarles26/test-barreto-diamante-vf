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
  return Array.from({length: 1+nowYear-startYear}, (_,ix) => +ix+startYear)
}