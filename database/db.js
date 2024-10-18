import { Sequelize } from "sequelize";

/*const db = new Sequelize('core_app', 'root', 'Bt0mmyDS', {
    host: 'localhost',
    dialect: 'mysql'
});*/

const db = new Sequelize('railway', 'root', 'qrdklQzGVwnqovUjArYkCfjUgZJYWqxn', {
    host: 'autorack.proxy.rlwy.net',
    dialect: 'mysql',
    port: 44190 // Añade el puerto de la conexión
});

export default db;