function downloadExcell(data) {
    //输出base64编码
    function base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
    }
    //列标题
    let str =
        '<tr><td>高校名称</td><td>高校英文名称</td><td>国家地区</td><td>国家地区英文</td></tr>'
    //循环遍历，每行加入tr标签，每个单元格加td标签
    for (let i = 0; i < data.length; i++) {
        str += '<tr>'
        str += `<td>${data[i]['universityNameZN'] + '\t'}</td><td>${data[i][
            'universityNameEN'
        ] + '\t'}</td><td>${data[i]['regionNameZN'] + '\t'}</td><td>${data[i][
            'regionNameEN'
        ] + '\t'}</td>`
        str += '</tr>'
    }
    //Worksheet名
    let worksheet = 'Sheet1'
    let uri = 'data:application/vnd.ms-excel;base64,'

    //下载的表格模板数据
    let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset='UTF-8'><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
<x:Name>${worksheet}</x:Name>
<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
</head><body><table>${str}</table></body></html>`
    //下载模板
    window.location.href = uri + base64(template)
}

