/*Babel*/

//Compilador (transforma código novo em código antigo. Ex: const nome = 'Marcos'; vira var nome = 'Marcos')

//Browser Suporte (para que um browser possa suportar algo novo de JavaScript é preciso que ele esteja atualizado, mas nem todo usuário possui a última versão do browser instalda)

//Can I Use (o site https://caniuse.com/ mostra quais browsers a novidade está disponível ou não)

/*Polyfill vs Transpiler*/

//Polyfill (cria métodos / funções como o mesmo nome das atuais, porém utilizando código antigo para permitir o uso em browsers que não possuem API)

//Transpiler (transforma código novo em código antigo. Ou seja, transforma const em var)

/*Instalar Babel*/

//https://babeljs.io/docs/en/usage

//$ npm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader

//instala o Babel, as configurações padrões e o loader para o Webpack