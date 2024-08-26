
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises

/*fs.readFile('./files/demo.txt' ,'utf8',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)

})


fs.appendFile('./files/demo.txt','\nHello Gayu\n',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})

fs.unlink('./files/test.txt',(err,data)=>{
    if(err){
        throw err
    }

    console.log('deleted file')
})*/



//or another way 

/*fs.readFile(path.join(__dirname,'files','demo.txt'),'utf-8',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})

fs.writeFile(path.join(__dirname,'files','text.txt'),'hi welcome',(err,data)=>{
    if(err){
        throw err
    }
    console.log('write complete')
    fs.appendFile(path.join(__dirname,'files','text.txt'),'thank you byeee',(err,data)=>{
        if(err){
            throw err
        }
        console.log('append complete')
        fs.rename(path.join(__dirname,'files','demo.txt'),(path.join(__dirname,'files','first.txt')),(err,data)=>{
            if(err){
                throw err
            }
            console.log('rename complete')
        })
    })
})*/

/*const file = async () =>{
    try{
        const data =  await fsPromises.readFile(path.join(__dirname,'files','first.txt'),'utf8')
        console.log('read complete')
         await fsPromises.writeFile(path.join(__dirname,'files','suma.txt'),'welcome Gayu')
         console.log('testing...')
         console.log('Write complete')
         await fsPromises.appendFile(path.join(__dirname,'files','suma.txt'),'\n Thank you \n')
         console.log('append complete')
         await fsPromises.rename(path.join(__dirname,'files','suma.txt'),path.join(__dirname,'files','sumaa2.txt'))
        console.log('rename complete')
        await fsPromises.unlink(path.join(__dirname,'files','first.txt'))
        console.log('delete complete')
        


    }catch(err){
        console.log(err)
    }
}
file()*/


const rs = fs.createReadStream(path.join(__dirname,'files','bigfile.txt'),{encoding:'utf-8'})
const ws = fs.createWriteStream(path.join(__dirname,'files','newbigfile.txt'))

rs.on('data',(dataChunk)=>{
    ws.write(dataChunk)
})









