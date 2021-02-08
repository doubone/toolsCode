const fs = require('fs')
fs.readFile('./dev.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        const originStr = replace(String(data))
        console.log(originStr)
        // const strList = originStr.split('!')
        // console.log(strList)
        // strList.map(ele => {
        //     let obj ={}


        // });


    }
})

function replace(data) {
    return data.replace(/Dever/g, "'Dever'").replace(/added lines/g, "'added lines'").replace(/removed lines/g, "'removed lines'").replace(/total lines/g, "'total lines'")
}