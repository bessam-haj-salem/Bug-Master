//sc
let express = require('express');
var str = '';
var sleep = require('sleep');
var Sequelize = require('sequelize');
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
//sc
//*****************************
// const VehiculeFleet = require('../controllers').vehiculeFleet;
const Project = require('../controllers').
    module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,uix,From,Authorization ');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    }
    //**vehiculeFleet **/
    // app.post('/apiRF/vehiculeFleet/insert', VehiculeFleet.insertVehicule);
    // app.put('/apiRF/vehiculeFleet/update/:id', VehiculeFleet.updateVehicule);
    // app.get('/apiRF/vehiculeFleet/read/:id', VehiculeFleet.readVehicule);
    // app.delete('/apiRF/vehiculeFleet/delete/:id', VehiculeFleet.deleteVehicule);
    // app.post('/apiRF/vehiculeFleet/readPage', VehiculeFleet.readVehiculeChunk);
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJO0FBQ0osSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFHckMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN4QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDdEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFL0IsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO0FBQ2hFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7QUFFckUsSUFBSTtBQUdKLCtCQUErQjtBQUcvQixpRUFBaUU7QUFDakUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBRXpDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FDUiw4QkFBOEIsRUFDOUIsd0VBQXdFLENBQ3pFLENBQUM7UUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLDhCQUE4QixFQUM5QixpQ0FBaUMsQ0FDbEMsQ0FBQztJQUVGLENBQUM7SUFJSCxxQkFBcUI7SUFDckIseUVBQXlFO0lBQ3pFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsK0VBQStFO0lBQy9FLDhFQUE4RTtLQUU3RSxDQUFBO0FBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9zY1xubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgc3RyID0gJyc7XG52YXIgc2xlZXAgPSByZXF1aXJlKCdzbGVlcCcpO1xuXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5cblxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcbmxldCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmxldCBtdWx0ZXIgPSByZXF1aXJlKCdtdWx0ZXInKTtcbmxldCB1cGxvYWQgPSBtdWx0ZXIoKTtcbmxldCBwYXJzZXIgPSByZXF1aXJlKCd4bWwyanNvbicpO1xuY29uc3QgeG1sMmpzID0gcmVxdWlyZSgneG1sMmpzJyk7XG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbmxldCB4bWxQYXJzZXIgPSByZXF1aXJlKCd4bWwyanNvbicpOyAvL3BvdXIgcGFyc2VyIGRlIHhtbC0tPmpzb25cbmxldCBjb252ZXJ0ID0gcmVxdWlyZSgneG1sLWpzJyk7XG52YXIganMyeG1scGFyc2VyID0gcmVxdWlyZSgnanMyeG1scGFyc2VyJyk7IC8vcG91ciBwYXJzZXIganNvbi0tLT54bWxcblxuLy9zY1xuXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuXG4vLyBjb25zdCBWZWhpY3VsZUZsZWV0ID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS52ZWhpY3VsZUZsZWV0O1xuY29uc3QgUHJvamVjdCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuXG5cbm1vZHVsZS5leHBvcnRzID0gKGFwcCkgPT4ge1xuICBhcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LHVpeCxGcm9tLEF1dGhvcml6YXRpb24gJ1xuICAgICk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJyxcbiAgICAgICdQT1NULCBHRVQsIFBVVCwgREVMRVRFLCBPUFRJT05TJ1xuICAgICk7XG5cbiAgICB9XG5cblxuICBcbiAgLy8qKnZlaGljdWxlRmxlZXQgKiovXG4gIC8vIGFwcC5wb3N0KCcvYXBpUkYvdmVoaWN1bGVGbGVldC9pbnNlcnQnLCBWZWhpY3VsZUZsZWV0Lmluc2VydFZlaGljdWxlKTtcbiAgLy8gYXBwLnB1dCgnL2FwaVJGL3ZlaGljdWxlRmxlZXQvdXBkYXRlLzppZCcsIFZlaGljdWxlRmxlZXQudXBkYXRlVmVoaWN1bGUpO1xuICAvLyBhcHAuZ2V0KCcvYXBpUkYvdmVoaWN1bGVGbGVldC9yZWFkLzppZCcsIFZlaGljdWxlRmxlZXQucmVhZFZlaGljdWxlKTtcbiAgLy8gYXBwLmRlbGV0ZSgnL2FwaVJGL3ZlaGljdWxlRmxlZXQvZGVsZXRlLzppZCcsIFZlaGljdWxlRmxlZXQuZGVsZXRlVmVoaWN1bGUpO1xuICAvLyBhcHAucG9zdCgnL2FwaVJGL3ZlaGljdWxlRmxlZXQvcmVhZFBhZ2UnLCBWZWhpY3VsZUZsZWV0LnJlYWRWZWhpY3VsZUNodW5rKTtcblxuICApIH1cbiJdfQ==