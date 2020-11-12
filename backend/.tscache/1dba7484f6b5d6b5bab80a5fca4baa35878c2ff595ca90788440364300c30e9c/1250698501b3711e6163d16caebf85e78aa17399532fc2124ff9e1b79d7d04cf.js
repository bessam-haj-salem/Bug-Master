"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//sc
let express = require('express');
var str = '';
var sleep = require('sleep');
var Sequelize = require('sequelize');
let app = express();
// var fs = require('fs');
// let bodyParser = require('body-parser');
// let multer = require('multer');
// let upload = multer();
// let parser = require('xml2json');
// const xml2js = require('xml2js');
// const axios = require('axios');
// let xmlParser = require('xml2json'); //pour parser de xml-->json
// let convert = require('xml-js');
// var js2xmlparser = require('js2xmlparser'); //pour parser json--->xml
const Project = require('../controllers').project;
const Issues = require('../controllers').issues;
const Members = require('../controllers').members;
const MembersProject = require('../controllers').membersProject;
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
        next();
    });
    var path = require('path');
    //**Project */
    app.post('/apiRF/Project/insert', Project.insertProject);
    app.put('/apiRF/Project/update/:id', Project.updateProject);
    app.get('/apiRF/Project/read/:id', Project.readProject);
    app.delete('/apiRF/Project/delete/:id', Project.deleteProject);
    app.post('/apiRF/Project/readPage', Project.readProjectChunk);
    //**Issues */
    app.post('/apiRF/Issues/insert', Issues.insertIssues);
    app.put('/apiRF/Issues/update/:id', Issues.updateIssues);
    app.get('/apiRF/Issues/read/:id', Issues.readIssues);
    app.delete('/apiRF/Issues/delete/:id', Issues.deleteIssues);
    app.post('/apiRF/Issues/readPage', Issues.readIssuesChunk);
    //**Members */
    app.post('/apiRF/Members/insert', Members.insertMembers);
    app.put('/apiRF/Members/update/:id', Members.updateMembers);
    app.get('/apiRF/Members/read/:id', Members.readMembers);
    app.delete('/apiRF/Members/delete/:id', Members.deleteMembers);
    app.post('/apiRF/Members/readPage', Members.readMembersChunk);
    //**MembersProject */
    app.post('/apiRF/MembersProject/insert', MembersProject.insertMembersProject);
    app.put('/apiRF/MembersProject/update/:id', MembersProject.updateMembersProject);
    app.get('/apiRF/MembersProject/read/:id', MembersProject.readMembersProject);
    app.delete('/apiRF/MembersProject/delete/:id', MembersProject.deleteMembersProject);
    app.post('/apiRF/MembersProject/readPage', MembersProject.readMembersProjectChunk);
    //**IssuesMembers */
    app.post('/apiRF/MembersProject/insert', MembersProject.insertMembersProject);
    app.put('/apiRF/MembersProject/update/:id', MembersProject.updateMembersProject);
    app.get('/apiRF/MembersProject/read/:id', MembersProject.readMembersProject);
    app.delete('/apiRF/MembersProject/delete/:id', MembersProject.deleteMembersProject);
    app.post('/apiRF/MembersProject/readPage', MembersProject.readMembersProjectChunk);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUk7QUFDSixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVyQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUNwQiwwQkFBMEI7QUFDMUIsMkNBQTJDO0FBQzNDLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekIsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFFbEMsbUVBQW1FO0FBQ25FLG1DQUFtQztBQUNuQyx3RUFBd0U7QUFFeEUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2xELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNoRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbEQsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsY0FBYyxDQUFDO0FBS2hFLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0Is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QUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDOUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNqRixHQUFHLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdFLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0NBQWtDLEVBQUUsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEYsR0FBRyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3NjXG5sZXQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBzdHIgPSAnJztcbnZhciBzbGVlcCA9IHJlcXVpcmUoJ3NsZWVwJyk7XG5cbnZhciBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcblxubGV0IGFwcCA9IGV4cHJlc3MoKTtcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4vLyBsZXQgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG4vLyBsZXQgbXVsdGVyID0gcmVxdWlyZSgnbXVsdGVyJyk7XG4vLyBsZXQgdXBsb2FkID0gbXVsdGVyKCk7XG4vLyBsZXQgcGFyc2VyID0gcmVxdWlyZSgneG1sMmpzb24nKTtcbi8vIGNvbnN0IHhtbDJqcyA9IHJlcXVpcmUoJ3htbDJqcycpO1xuLy8gY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG4vLyBsZXQgeG1sUGFyc2VyID0gcmVxdWlyZSgneG1sMmpzb24nKTsgLy9wb3VyIHBhcnNlciBkZSB4bWwtLT5qc29uXG4vLyBsZXQgY29udmVydCA9IHJlcXVpcmUoJ3htbC1qcycpO1xuLy8gdmFyIGpzMnhtbHBhcnNlciA9IHJlcXVpcmUoJ2pzMnhtbHBhcnNlcicpOyAvL3BvdXIgcGFyc2VyIGpzb24tLS0+eG1sXG5cbmNvbnN0IFByb2plY3QgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnByb2plY3Q7XG5jb25zdCBJc3N1ZXMgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmlzc3VlcztcbmNvbnN0IE1lbWJlcnMgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLm1lbWJlcnM7XG5jb25zdCBNZW1iZXJzUHJvamVjdCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykubWVtYmVyc1Byb2plY3Q7XG4vL2NvbnN0IGF1dGg9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuYXV0aDtcblxuaW1wb3J0ICogYXMgcHJvY2Vzc3VzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5sZXQgV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZvcm1pZGFibGUgPSByZXF1aXJlKCdmb3JtaWRhYmxlJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG4vLyBhcGkgcm91dGVzXG5cbi8vIGdsb2JhbCBlcnJvciBoYW5kbGVyXG5cbm1vZHVsZS5leHBvcnRzID0gKGFwcCkgPT4ge1xuICBhcHAudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsdWl4LEZyb20sQXV0aG9yaXphdGlvbiAnXG4gICAgKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxuICAgICAgJ1BPU1QsIEdFVCwgUFVULCBERUxFVEUsIE9QVElPTlMnXG4gICAgKTtcblxuICAgIG5leHQoKTtcbiAgfSk7XG4gIHZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4gIC8vKipQcm9qZWN0ICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvUHJvamVjdC9pbnNlcnQnLCBQcm9qZWN0Lmluc2VydFByb2plY3QpO1xuICBhcHAucHV0KCcvYXBpUkYvUHJvamVjdC91cGRhdGUvOmlkJywgUHJvamVjdC51cGRhdGVQcm9qZWN0KTtcbiAgYXBwLmdldCgnL2FwaVJGL1Byb2plY3QvcmVhZC86aWQnLCBQcm9qZWN0LnJlYWRQcm9qZWN0KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL1Byb2plY3QvZGVsZXRlLzppZCcsIFByb2plY3QuZGVsZXRlUHJvamVjdCk7XG4gIGFwcC5wb3N0KCcvYXBpUkYvUHJvamVjdC9yZWFkUGFnZScsIFByb2plY3QucmVhZFByb2plY3RDaHVuayk7XG4gIC8vKipJc3N1ZXMgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9Jc3N1ZXMvaW5zZXJ0JywgSXNzdWVzLmluc2VydElzc3Vlcyk7XG4gIGFwcC5wdXQoJy9hcGlSRi9Jc3N1ZXMvdXBkYXRlLzppZCcsIElzc3Vlcy51cGRhdGVJc3N1ZXMpO1xuICBhcHAuZ2V0KCcvYXBpUkYvSXNzdWVzL3JlYWQvOmlkJywgSXNzdWVzLnJlYWRJc3N1ZXMpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvSXNzdWVzL2RlbGV0ZS86aWQnLCBJc3N1ZXMuZGVsZXRlSXNzdWVzKTtcbiAgYXBwLnBvc3QoJy9hcGlSRi9Jc3N1ZXMvcmVhZFBhZ2UnLCBJc3N1ZXMucmVhZElzc3Vlc0NodW5rKTtcbiAgLy8qKk1lbWJlcnMgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9NZW1iZXJzL2luc2VydCcsIE1lbWJlcnMuaW5zZXJ0TWVtYmVycyk7XG4gIGFwcC5wdXQoJy9hcGlSRi9NZW1iZXJzL3VwZGF0ZS86aWQnLCBNZW1iZXJzLnVwZGF0ZU1lbWJlcnMpO1xuICBhcHAuZ2V0KCcvYXBpUkYvTWVtYmVycy9yZWFkLzppZCcsIE1lbWJlcnMucmVhZE1lbWJlcnMpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvTWVtYmVycy9kZWxldGUvOmlkJywgTWVtYmVycy5kZWxldGVNZW1iZXJzKTtcbiAgYXBwLnBvc3QoJy9hcGlSRi9NZW1iZXJzL3JlYWRQYWdlJywgTWVtYmVycy5yZWFkTWVtYmVyc0NodW5rKTtcbiAgLy8qKk1lbWJlcnNQcm9qZWN0ICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvaW5zZXJ0JywgTWVtYmVyc1Byb2plY3QuaW5zZXJ0TWVtYmVyc1Byb2plY3QpO1xuICBhcHAucHV0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvdXBkYXRlLzppZCcsIE1lbWJlcnNQcm9qZWN0LnVwZGF0ZU1lbWJlcnNQcm9qZWN0KTtcbiAgYXBwLmdldCgnL2FwaVJGL01lbWJlcnNQcm9qZWN0L3JlYWQvOmlkJywgTWVtYmVyc1Byb2plY3QucmVhZE1lbWJlcnNQcm9qZWN0KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL01lbWJlcnNQcm9qZWN0L2RlbGV0ZS86aWQnLCBNZW1iZXJzUHJvamVjdC5kZWxldGVNZW1iZXJzUHJvamVjdCk7XG4gIGFwcC5wb3N0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvcmVhZFBhZ2UnLCBNZW1iZXJzUHJvamVjdC5yZWFkTWVtYmVyc1Byb2plY3RDaHVuayk7XG4gIC8vKipJc3N1ZXNNZW1iZXJzICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvaW5zZXJ0JywgTWVtYmVyc1Byb2plY3QuaW5zZXJ0TWVtYmVyc1Byb2plY3QpO1xuICBhcHAucHV0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvdXBkYXRlLzppZCcsIE1lbWJlcnNQcm9qZWN0LnVwZGF0ZU1lbWJlcnNQcm9qZWN0KTtcbiAgYXBwLmdldCgnL2FwaVJGL01lbWJlcnNQcm9qZWN0L3JlYWQvOmlkJywgTWVtYmVyc1Byb2plY3QucmVhZE1lbWJlcnNQcm9qZWN0KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL01lbWJlcnNQcm9qZWN0L2RlbGV0ZS86aWQnLCBNZW1iZXJzUHJvamVjdC5kZWxldGVNZW1iZXJzUHJvamVjdCk7XG4gIGFwcC5wb3N0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvcmVhZFBhZ2UnLCBNZW1iZXJzUHJvamVjdC5yZWFkTWVtYmVyc1Byb2plY3RDaHVuayk7XG59O1xuIl19