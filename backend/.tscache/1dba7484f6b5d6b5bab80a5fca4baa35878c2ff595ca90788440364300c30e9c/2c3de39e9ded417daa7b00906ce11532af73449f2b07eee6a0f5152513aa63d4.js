"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//sc
let express = require('express');
var str = '';
var sleep = require('sleep');
var Sequelize = require('sequelize');
let app = express();
var fs = require('fs');
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();
let parser = require('xml2json');
const xml2js = require('xml2js');
const axios = require('axios');
let xmlParser = require('xml2json'); //pour parser de xml-->json
let convert = require('xml-js');
var js2xmlparser = require('js2xmlparser'); //pour parser json--->xml
const Project = require('../controllers').project;
let WebSocket = require('ws');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
// api routes
// global error handler
module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,uix,From,Authorization ');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        //console.log(" middleware app #####",req.body)
        //login
        /**
         * @apiDefine loginNotFoundError
         * @apiError  loginNotFound  <code>login</code> pas trouvée.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "message": "login pas trouvée"
         *     }
         */
        /**
    * @api {post} /login/  login
    * @apiName Login
    * @apiGroup  Login
    *
    
     * @apiParam {String}  login.
     * @apiParam {String}  password hash512.
    
    * @apiSuccess {user} user.
    * @apiSuccess {agence} agence  .
    * @apiSuccess {String} token .
    
    
    
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    {
        "user": {
            "id": 423,
            "login": "dotcom",
            "username": "Test-dotcom",
            "admin": 0,
            "role": "User"
        },
        "agence": {
            "id": 4,
            "username": "Test dotcom",
            "logo": "dotcom.jpg",
            "tva": "12345",
            "tel": "7228333",
            "fax": "111",
            "email": "meherayed.dotcom@gmail.com",
            "pays": "Tunisie",
            "ville": "",
            "zip": 0,
            "adresse": "test",
            "login": "dotcom",
            "marge": 0,
            "operation": 0,
            "pourcent": 0,
            "marge_affichage": 0,
            "pourcent_affichage": 0,
            "operation_affichage": 0,
            "max_reservation": 500,
            "max_total": 1000000,
            "admin": 1,
            "active": 1,
            "total_reservation": "60766.9 TND <br /> Payer : -1162.5 TND <br />Impayer : 61929.4 TND",
            "nb_reservation": 229,
            "payee": -1162.5,
            "impayee": 61929.4,
            "rouge": 10,
            "marge_mouradi": 5,
            "total": 60766.9,
            "auto_email": 0,
            "devise": "TND",
            "taux_devise": 1,
            "taux_dzd": 0,
            "email2": "",
            "portable": ""
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR6IkpXVCJ9.eyJzdWIjQyMywicm9sZSI6IlVzZXIiLCJpYXQiOjE1NDk2MzI5MzR9.6i5IHf5Ckug3YFYmfBxGgIbegerSlqy_Bt1px-bs9AY"
    }
    * @apiUse  loginNotFoundError
    */
        // app.use('/users', require('../users/users.controller'));
        next();
    });
    var path = require('path');
    //**Project */
    app.post('/apiRF/Project/insert', Project.insertProject);
    app.put('/apiRF/Project/update/:id', Project.updateProject);
    app.get('/apiRF/Project/read/:id', Project.readProject);
    app.delete('/apiRF/Project/delete/:id', Project.deleteProject);
    app.post('/apiRF/Project/readPage', Project.readProjectChunk);
};
// TEST BESSAM
// Test function in the controller
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUk7QUFDSixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVyQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUNwQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3hDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUN0QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQywyQkFBMkI7QUFDaEUsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtBQUVyRSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFNbEQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZCLGFBQWE7QUFFYix1QkFBdUI7QUFFdkIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsTUFBTSxDQUNSLDhCQUE4QixFQUM5Qix3RUFBd0UsQ0FDekUsQ0FBQztRQUNGLEdBQUcsQ0FBQyxNQUFNLENBQ1IsOEJBQThCLEVBQzlCLGlDQUFpQyxDQUNsQyxDQUFDO1FBRUYsK0NBQStDO1FBRS9DLE9BQU87UUFDUDs7Ozs7Ozs7O1dBU0c7UUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFpRUY7UUFDRSwyREFBMkQ7UUFFM0QsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUNILElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUczQixjQUFjO0lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsR0FBRyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0QsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUdoRSxDQUFDLENBQUM7QUFFRixjQUFjO0FBRWQsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLy9zY1xubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgc3RyID0gJyc7XG52YXIgc2xlZXAgPSByZXF1aXJlKCdzbGVlcCcpO1xuXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xubGV0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xubGV0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xubGV0IHVwbG9hZCA9IG11bHRlcigpO1xubGV0IHBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7XG5jb25zdCB4bWwyanMgPSByZXF1aXJlKCd4bWwyanMnKTtcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxubGV0IHhtbFBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7IC8vcG91ciBwYXJzZXIgZGUgeG1sLS0+anNvblxubGV0IGNvbnZlcnQgPSByZXF1aXJlKCd4bWwtanMnKTtcbnZhciBqczJ4bWxwYXJzZXIgPSByZXF1aXJlKCdqczJ4bWxwYXJzZXInKTsgLy9wb3VyIHBhcnNlciBqc29uLS0tPnhtbFxuXG5jb25zdCBQcm9qZWN0ID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5wcm9qZWN0O1xuXG4vL2NvbnN0IGF1dGg9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuYXV0aDtcblxuaW1wb3J0ICogYXMgcHJvY2Vzc3VzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5sZXQgV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZvcm1pZGFibGUgPSByZXF1aXJlKCdmb3JtaWRhYmxlJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG4vLyBhcGkgcm91dGVzXG5cbi8vIGdsb2JhbCBlcnJvciBoYW5kbGVyXG5cbm1vZHVsZS5leHBvcnRzID0gKGFwcCkgPT4ge1xuICBhcHAudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsdWl4LEZyb20sQXV0aG9yaXphdGlvbiAnXG4gICAgKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxuICAgICAgJ1BPU1QsIEdFVCwgUFVULCBERUxFVEUsIE9QVElPTlMnXG4gICAgKTtcblxuICAgIC8vY29uc29sZS5sb2coXCIgbWlkZGxld2FyZSBhcHAgIyMjIyNcIixyZXEuYm9keSlcblxuICAgIC8vbG9naW5cbiAgICAvKipcbiAgICAgKiBAYXBpRGVmaW5lIGxvZ2luTm90Rm91bmRFcnJvclxuICAgICAqIEBhcGlFcnJvciAgbG9naW5Ob3RGb3VuZCAgPGNvZGU+bG9naW48L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICAgKlxuICAgICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICAgKiAgICAge1xuICAgICAqICAgICAgIFwibWVzc2FnZVwiOiBcImxvZ2luIHBhcyB0cm91dsOpZVwiXG4gICAgICogICAgIH1cbiAgICAgKi9cbiAgICAvKipcbiogQGFwaSB7cG9zdH0gL2xvZ2luLyAgbG9naW5cbiogQGFwaU5hbWUgTG9naW5cbiogQGFwaUdyb3VwICBMb2dpblxuKlxuXG4gKiBAYXBpUGFyYW0ge1N0cmluZ30gIGxvZ2luLlxuICogQGFwaVBhcmFtIHtTdHJpbmd9ICBwYXNzd29yZCBoYXNoNTEyLlxuXG4qIEBhcGlTdWNjZXNzIHt1c2VyfSB1c2VyLlxuKiBAYXBpU3VjY2VzcyB7YWdlbmNlfSBhZ2VuY2UgIC5cbiogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdG9rZW4gLlxuXG5cblxuKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgIFwidXNlclwiOiB7XG4gICAgICAgIFwiaWRcIjogNDIzLFxuICAgICAgICBcImxvZ2luXCI6IFwiZG90Y29tXCIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUZXN0LWRvdGNvbVwiLFxuICAgICAgICBcImFkbWluXCI6IDAsXG4gICAgICAgIFwicm9sZVwiOiBcIlVzZXJcIlxuICAgIH0sXG4gICAgXCJhZ2VuY2VcIjoge1xuICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUZXN0IGRvdGNvbVwiLFxuICAgICAgICBcImxvZ29cIjogXCJkb3Rjb20uanBnXCIsXG4gICAgICAgIFwidHZhXCI6IFwiMTIzNDVcIixcbiAgICAgICAgXCJ0ZWxcIjogXCI3MjI4MzMzXCIsXG4gICAgICAgIFwiZmF4XCI6IFwiMTExXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJtZWhlcmF5ZWQuZG90Y29tQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInBheXNcIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwidmlsbGVcIjogXCJcIixcbiAgICAgICAgXCJ6aXBcIjogMCxcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwidGVzdFwiLFxuICAgICAgICBcImxvZ2luXCI6IFwiZG90Y29tXCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfcmVzZXJ2YXRpb25cIjogNTAwLFxuICAgICAgICBcIm1heF90b3RhbFwiOiAxMDAwMDAwLFxuICAgICAgICBcImFkbWluXCI6IDEsXG4gICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogXCI2MDc2Ni45IFRORCA8YnIgLz4gUGF5ZXIgOiAtMTE2Mi41IFRORCA8YnIgLz5JbXBheWVyIDogNjE5MjkuNCBUTkRcIixcbiAgICAgICAgXCJuYl9yZXNlcnZhdGlvblwiOiAyMjksXG4gICAgICAgIFwicGF5ZWVcIjogLTExNjIuNSxcbiAgICAgICAgXCJpbXBheWVlXCI6IDYxOTI5LjQsXG4gICAgICAgIFwicm91Z2VcIjogMTAsXG4gICAgICAgIFwibWFyZ2VfbW91cmFkaVwiOiA1LFxuICAgICAgICBcInRvdGFsXCI6IDYwNzY2LjksXG4gICAgICAgIFwiYXV0b19lbWFpbFwiOiAwLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwidGF1eF9kemRcIjogMCxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJwb3J0YWJsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBcInRva2VuXCI6IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI2SWtwWFZDSjkuZXlKemRXSWpReU15d2ljbTlzWlNJNklsVnpaWElpTENKcFlYUWlPakUxTkRrMk16STVNelI5LjZpNUlIZjVDa3VnM1lGWW1mQnhHZ0liZWdlclNscXlfQnQxcHgtYnM5QVlcIlxufVxuKiBAYXBpVXNlICBsb2dpbk5vdEZvdW5kRXJyb3JcbiovXG4gICAgLy8gYXBwLnVzZSgnL3VzZXJzJywgcmVxdWlyZSgnLi4vdXNlcnMvdXNlcnMuY29udHJvbGxlcicpKTtcblxuICAgIG5leHQoKTtcbiAgfSk7XG4gIHZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuICBcblxuICAvLyoqUHJvamVjdCAqL1xuICBhcHAucG9zdCgnL2FwaVJGL1Byb2plY3QvaW5zZXJ0JywgUHJvamVjdC5pbnNlcnRQcm9qZWN0KTtcbiAgYXBwLnB1dCgnL2FwaVJGL1Byb2plY3QvdXBkYXRlLzppZCcsIFByb2plY3QudXBkYXRlUHJvamVjdCk7XG4gIGFwcC5nZXQoJy9hcGlSRi9Qcm9qZWN0L3JlYWQvOmlkJywgUHJvamVjdC5yZWFkUHJvamVjdCk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9Qcm9qZWN0L2RlbGV0ZS86aWQnLCBQcm9qZWN0LmRlbGV0ZVByb2plY3QpO1xuICBhcHAucG9zdCgnL2FwaVJGL1Byb2plY3QvcmVhZFBhZ2UnLCBQcm9qZWN0LnJlYWRQcm9qZWN0Q2h1bmspO1xuXG4gXG59O1xuXG4vLyBURVNUIEJFU1NBTVxuXG4vLyBUZXN0IGZ1bmN0aW9uIGluIHRoZSBjb250cm9sbGVyXG4iXX0=