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
const IssuesMembers = require('../controllers').issuesMembers; //const auth= require('../controllers').auth;
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
    app.post('/apiRF/IssuesMembers/insert', IssuesMembers.insertIssuesMembers);
    app.put('/apiRF/IssuesMembers/update/:id', IssuesMembers.updateIssuesMembers);
    app.get('/apiRF/IssuesMembers/read/:id', IssuesMembers.readIssuesMembers);
    app.delete('/apiRF/IssuesMembers/delete/:id', IssuesMembers.deleteIssuesMembers);
    app.post('/apiRF/IssuesMembers/readPage', IssuesMembers.readIssuesMembersChunk);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUk7QUFDSixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVyQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUNwQiwwQkFBMEI7QUFDMUIsMkNBQTJDO0FBQzNDLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekIsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFFbEMsbUVBQW1FO0FBQ25FLG1DQUFtQztBQUNuQyx3RUFBd0U7QUFFeEUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2xELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNoRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbEQsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsY0FBYyxDQUFDO0FBQ2hFLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQSxDQUFBLDZDQUE2QztBQUkxRyxJQUFJLFNBQVMsR0FBRyxPQUFPLENB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SUFBSSxDQUFDLGdDQUFnQyxFQUFFLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25GLG9CQUFvQjtJQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNFLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDOUUsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRSxHQUFHLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pGLEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDbEYsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9zY1xubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgc3RyID0gJyc7XG52YXIgc2xlZXAgPSByZXF1aXJlKCdzbGVlcCcpO1xuXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG4vLyB2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuLy8gbGV0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuLy8gbGV0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xuLy8gbGV0IHVwbG9hZCA9IG11bHRlcigpO1xuLy8gbGV0IHBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7XG4vLyBjb25zdCB4bWwyanMgPSByZXF1aXJlKCd4bWwyanMnKTtcbi8vIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuLy8gbGV0IHhtbFBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7IC8vcG91ciBwYXJzZXIgZGUgeG1sLS0+anNvblxuLy8gbGV0IGNvbnZlcnQgPSByZXF1aXJlKCd4bWwtanMnKTtcbi8vIHZhciBqczJ4bWxwYXJzZXIgPSByZXF1aXJlKCdqczJ4bWxwYXJzZXInKTsgLy9wb3VyIHBhcnNlciBqc29uLS0tPnhtbFxuXG5jb25zdCBQcm9qZWN0ID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5wcm9qZWN0O1xuY29uc3QgSXNzdWVzID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5pc3N1ZXM7XG5jb25zdCBNZW1iZXJzID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5tZW1iZXJzO1xuY29uc3QgTWVtYmVyc1Byb2plY3QgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLm1lbWJlcnNQcm9qZWN0O1xuY29uc3QgSXNzdWVzTWVtYmVycyA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuaXNzdWVzTWVtYmVycy8vY29uc3QgYXV0aD0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5hdXRoO1xuXG5pbXBvcnQgKiBhcyBwcm9jZXNzdXMgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmxldCBXZWJTb2NrZXQgPSByZXF1aXJlKCd3cycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgZm9ybWlkYWJsZSA9IHJlcXVpcmUoJ2Zvcm1pZGFibGUnKTtcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbi8vIGFwaSByb3V0ZXNcblxuLy8gZ2xvYmFsIGVycm9yIGhhbmRsZXJcblxubW9kdWxlLmV4cG9ydHMgPSAoYXBwKSA9PiB7XG4gIGFwcC51c2UoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCx1aXgsRnJvbSxBdXRob3JpemF0aW9uICdcbiAgICApO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsXG4gICAgICAnUE9TVCwgR0VULCBQVVQsIERFTEVURSwgT1BUSU9OUydcbiAgICApO1xuXG4gICAgbmV4dCgpO1xuICB9KTtcbiAgdmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbiAgLy8qKlByb2plY3QgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9Qcm9qZWN0L2luc2VydCcsIFByb2plY3QuaW5zZXJ0UHJvamVjdCk7XG4gIGFwcC5wdXQoJy9hcGlSRi9Qcm9qZWN0L3VwZGF0ZS86aWQnLCBQcm9qZWN0LnVwZGF0ZVByb2plY3QpO1xuICBhcHAuZ2V0KCcvYXBpUkYvUHJvamVjdC9yZWFkLzppZCcsIFByb2plY3QucmVhZFByb2plY3QpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvUHJvamVjdC9kZWxldGUvOmlkJywgUHJvamVjdC5kZWxldGVQcm9qZWN0KTtcbiAgYXBwLnBvc3QoJy9hcGlSRi9Qcm9qZWN0L3JlYWRQYWdlJywgUHJvamVjdC5yZWFkUHJvamVjdENodW5rKTtcbiAgLy8qKklzc3VlcyAqL1xuICBhcHAucG9zdCgnL2FwaVJGL0lzc3Vlcy9pbnNlcnQnLCBJc3N1ZXMuaW5zZXJ0SXNzdWVzKTtcbiAgYXBwLnB1dCgnL2FwaVJGL0lzc3Vlcy91cGRhdGUvOmlkJywgSXNzdWVzLnVwZGF0ZUlzc3Vlcyk7XG4gIGFwcC5nZXQoJy9hcGlSRi9Jc3N1ZXMvcmVhZC86aWQnLCBJc3N1ZXMucmVhZElzc3Vlcyk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9Jc3N1ZXMvZGVsZXRlLzppZCcsIElzc3Vlcy5kZWxldGVJc3N1ZXMpO1xuICBhcHAucG9zdCgnL2FwaVJGL0lzc3Vlcy9yZWFkUGFnZScsIElzc3Vlcy5yZWFkSXNzdWVzQ2h1bmspO1xuICAvLyoqTWVtYmVycyAqL1xuICBhcHAucG9zdCgnL2FwaVJGL01lbWJlcnMvaW5zZXJ0JywgTWVtYmVycy5pbnNlcnRNZW1iZXJzKTtcbiAgYXBwLnB1dCgnL2FwaVJGL01lbWJlcnMvdXBkYXRlLzppZCcsIE1lbWJlcnMudXBkYXRlTWVtYmVycyk7XG4gIGFwcC5nZXQoJy9hcGlSRi9NZW1iZXJzL3JlYWQvOmlkJywgTWVtYmVycy5yZWFkTWVtYmVycyk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9NZW1iZXJzL2RlbGV0ZS86aWQnLCBNZW1iZXJzLmRlbGV0ZU1lbWJlcnMpO1xuICBhcHAucG9zdCgnL2FwaVJGL01lbWJlcnMvcmVhZFBhZ2UnLCBNZW1iZXJzLnJlYWRNZW1iZXJzQ2h1bmspO1xuICAvLyoqTWVtYmVyc1Byb2plY3QgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9NZW1iZXJzUHJvamVjdC9pbnNlcnQnLCBNZW1iZXJzUHJvamVjdC5pbnNlcnRNZW1iZXJzUHJvamVjdCk7XG4gIGFwcC5wdXQoJy9hcGlSRi9NZW1iZXJzUHJvamVjdC91cGRhdGUvOmlkJywgTWVtYmVyc1Byb2plY3QudXBkYXRlTWVtYmVyc1Byb2plY3QpO1xuICBhcHAuZ2V0KCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvcmVhZC86aWQnLCBNZW1iZXJzUHJvamVjdC5yZWFkTWVtYmVyc1Byb2plY3QpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvTWVtYmVyc1Byb2plY3QvZGVsZXRlLzppZCcsIE1lbWJlcnNQcm9qZWN0LmRlbGV0ZU1lbWJlcnNQcm9qZWN0KTtcbiAgYXBwLnBvc3QoJy9hcGlSRi9NZW1iZXJzUHJvamVjdC9yZWFkUGFnZScsIE1lbWJlcnNQcm9qZWN0LnJlYWRNZW1iZXJzUHJvamVjdENodW5rKTtcbiAgLy8qKklzc3Vlc01lbWJlcnMgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9Jc3N1ZXNNZW1iZXJzL2luc2VydCcsIElzc3Vlc01lbWJlcnMuaW5zZXJ0SXNzdWVzTWVtYmVycyk7XG4gIGFwcC5wdXQoJy9hcGlSRi9Jc3N1ZXNNZW1iZXJzL3VwZGF0ZS86aWQnLCBJc3N1ZXNNZW1iZXJzLnVwZGF0ZUlzc3Vlc01lbWJlcnMpO1xuICBhcHAuZ2V0KCcvYXBpUkYvSXNzdWVzTWVtYmVycy9yZWFkLzppZCcsIElzc3Vlc01lbWJlcnMucmVhZElzc3Vlc01lbWJlcnMpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvSXNzdWVzTWVtYmVycy9kZWxldGUvOmlkJywgSXNzdWVzTWVtYmVycy5kZWxldGVJc3N1ZXNNZW1iZXJzKTtcbiAgYXBwLnBvc3QoJy9hcGlSRi9Jc3N1ZXNNZW1iZXJzL3JlYWRQYWdlJywgSXNzdWVzTWVtYmVycy5yZWFkSXNzdWVzTWVtYmVyc0NodW5rKTtcbn07XG4iXX0=