/*
 * @Author: xmgtony 
 * @Date: 2018-02-18 19:46:16 
 * @Description: 数据库配置文件
 * @Last Modified by:    
 * @Last Modified time: 
*/

const DbConfig = {
    database: "",
    username: "",
    password: "",
    host: "",
    port: 3306,
    dialect: "mysql",
    //连接池的配置
    poolConfig: {
        max: 10,
        min: 0,
        idle: 3000
    }
}

module.exports = DbConfig;