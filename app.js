const fs = require('fs')
fs.readFile('./dev.text', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        const originStr = replace(data)
        const originArray = originStr.slice(0,originStr.length-1).split("!")
        const array = originArray.map(ele => JSON.parse(ele));
        
        fs.writeFile('sum.xlsx','1234',function(error){
            console.log(error)
        })
    }
})

function replace(data) {
    return data.replace(/Dever/g, '"Dever"').replace(/added lines/g, '"added lines"').replace(/removed lines/g, '"removed lines"').replace(/total lines/g, '"total lines"').replace(/\\n/g,'},').replace(/\\t/g,"").replace(/'/g,'"')
}

// git log --since=2020-12-01 --until="2020-12-31 23:59:59" --format='%aN' | sort -u | while read name; do echo -en "{Dever: '"$name"',"; git log --since=2020-12-01 --until="2020-12-31 23:59:59"  --author="$name" --pretty=tformat: --numstat | awk '{ add += $1;subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s}!", +add, +subs, +loc }' -; done  >> ./codeSum.text

