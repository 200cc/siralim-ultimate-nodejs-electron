var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./siralim-ultimate-sqlite.db');
var app = express();
var PORT = 37201;

// 设置body解析中间件
app.use(express.urlencoded())

// 这段代码用来测试 SQLite
// db.serialize(function() {
//   db.each("SELECT realm, god FROM realm", function(err, row) {
//       console.log(row.realm + " <=> " + row.god);
//   });
// });

// 这段代码用来测试 server 创建是否成功
app.post('/table', (req, res) => {
    var params = req.body
    var table = params.table
    var sql = ' select * from ' + table + ' where 1=1 ';
    Object.keys(params).forEach(k => {
        if (k != 'table' && params[k]) {
            sql += (" and " + k + " like '%" + (params[k]+'').trim() + "%' ")
        }
    })
    // console.log('trait sql => ', sql);
    // res.json([])
    db.all(sql, (err, rows) => {
        res.json(rows)
    })
});

// var btn = document.getElementById('btn')
// btn.onclick = function() {
//     var server = app.listen(PORT, function() {
//         var host = server.address().address
//         var port = server.address().port
//         console.log('Example app listening at http://%s:%s', host, port)
//     })
// }

var server = app.listen(PORT, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
});
