const winston = require('winston');
const winformat = winston.format


const customlog = winformat.combine(winformat.colorize(),winformat.timestamp({format:'YYYY-MM-DD HH:mm:ss '}), winformat.printf((info)=>{
        return `${info.timestamp} => { ${info.level } } => message: ${info.message}`
}))

const logger = winston.createLogger({
    format : customlog,
    level:"debug",  
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename:'levels.log'}),
    ]
});


// export logger 
module.exports = logger;
