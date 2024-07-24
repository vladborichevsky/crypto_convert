
Здесь мы подключаем стороннюю библиотеку "crypto-convert".
Ссылка на неё: https://github.com/coinconvert/crypto-convert

1) прописываем в терминале: npm i crypto-convert
2) в главном компоненте App.vue подключаем его: import CryptoConvert from 'crypto-convert';
3) Далее во всё том же главном компоненте App.vue создаём объект. Но он должен создаваться 
только один раз, поэтому помещаем его после всех импортов и перед export default.
4) Далее в нужной нам функциии прописываем await convert.ready();
5) После этого можем использовать библиотеку. Каждый её вызов будет в виде: convert.BTC.USDT(1);