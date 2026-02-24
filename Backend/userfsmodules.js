const { deleteData } = require("./usefsmodule");

async function readFileasync(params) {
    

    let statusmsg=" "
    try{

        const data=await fs1.readFile('studentdata.txt',{encoding:'utf-8'})
        statusmsg=data;
    }
    catch{
        console.log(e)
        statusmsg=e;
    }
    return statusmsg
}
const obj={readData,writeData,deleteData,readFileasync}

module.exports=obj;