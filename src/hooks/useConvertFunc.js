


// export async function convertFunc(fromCurrency, toCurrency, Sum) { 
//   // проверка на пустые инпуты
//   if (fromCurrency.length == 0 || toCurrency.length == 0) {
//     error = 'Введите валюту'
//     result = ''
//     resultDescr = ''
//     // благодаря setTimeout через 3 секунды ошибка исчезает
//     setTimeout( ()=> {
//       error = ''
//     }, 3000) 
//     return false
//     // проверка, чтобы нельзя было ввести одну и ту же валюту в двух инпутах
//   } else if (fromCurrency == toCurrency) {
//     error = 'Введите другую валюту'
//     result = ''
//     resultDescr = ''
//     // благодаря setTimeout через 3 секунды ошибка исчезает
//     setTimeout( ()=> {
//       error = ''
//     }, 3000) 
//     return false
//     // проверка, чтобы нельзя было ввести в инпуте с суммой число меньше 0
//   } else if (Sum <= 0) {
//     error = 'Введите сумму'
//     result = ''
//     resultDescr = ''
//     // благодаря setTimeout через 3 секунды ошибка исчезает
//     setTimeout( ()=> {
//       error = ''
//     }, 3000) 
//     return false
//   } 
//   // если все проверки пройдены, то очищаем строку с ошибкой
//   error = ''
//   try {
//     // вызываем функцию конвертации, её скачали npm-пакетом
//     await convert.ready();

//     result = convert[fromCurrency][toCurrency](Sum).toFixed(2)
//     resultDescr = `${fromCurrency} → ${toCurrency}`
//   } catch (error) {
//     // предполагается, что если конвертация не сработала, то пользователь ввёл несуществующие валюты
//     error = 'Введите другие валюты'
//     console.log(error)
//   }
// }