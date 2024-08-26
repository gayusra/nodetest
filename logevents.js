const {format} = require('date-fns');
const {v4:uuid} = require('uuid');
const fs = require('fs')
const path = require ('path');
const fsPromises = require('fs').promises

const logEvents = async(message)=>{
    const dateTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)

    try{
        //if not there in the folder means its create
        if(!fs.existsSync(path.join(__dirname,'logs'))){
           await fsPromises.mkdir(path.join(__dirname,'logs'))

        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventfile.txt'),logItem) //store the log items to file


    }catch(err){
        console.log(err)
    }
}

module.exports = logEvents;