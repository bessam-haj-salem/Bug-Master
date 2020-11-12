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
//sc
const agence = require('../controllers').agence;
const aeroport1 = require('../controllers').aeroport;
//*****************************
// ***********************api rafahia:*************
const ClientCompany = require('../controllers').clientCompany;
const Trip = require('../controllers').trip;
const Driver = require('../controllers').driver;
const Passeport = require('../controllers').passeport;
const PersonalGroup = require('../controllers').personalGroup;
const VehiculeFleet = require('../controllers').vehiculeFleet;
const Price = require('../controllers').price;
const PassengerLuggage = require('../controllers').passengerLuggage;
const Proforma = require('../controllers').proformaInvoice;
const TechnicalInspection = require('../controllers').inspection;
const VehiculeInsurance = require('../controllers').insurance;
const VehiculeMaintenance = require('../controllers').maintenance;
const Tva = require('../controllers').tva;
const TripDriver = require('../controllers').tripDriver;
const TripUsualCustomer = require('../controllers').tripUsualCustomer;
const TripClientCompany = require('../controllers').tripClientCompany;
const TradeMargin = require('../controllers').tradeMargin;
const UsualCustomer = require('../controllers').usualCustomer;
const UsualCustomerClientCompany = require('../controllers')
    .usualCustomerClientCompany;
const RentClientCompany = require('../controllers').rentClientCompany;
const RentUsualCustomer = require('../controllers').rentUsualCustomer;
const RentWithDriverClientCompany = require('../controllers')
    .rentWithDriverClientCompany;
const RentWithDriverUsualCustomer = require('../controllers')
    .rentWithDriverUsualCustomer;
const RentWithDriverClientCompanyDriver = require('../controllers')
    .rentWithDriverClientCompanyDriver;
const RentWithDriverUsualCustomerDriver = require('../controllers')
    .rentWithDriverUsualCustomerDriver;
const StopoverTrip = require('../controllers').stopoverTrip;
const StopoverUsualCustomer = require('../controllers').stopoverUsualCustomer;
const UsualCustomerPersonalGroup = require('../controllers')
    .usualCustomerPersonalGroup; // ***********************api rafahia:*************
// TEST BESSAM
const test1 = require('../controllers').list;
const hotel = require('../controllers').hotel1;
const image = require('../controllers').image1;
//const userService=require('../controllers').user;
const tableau = require('../controllers').tableau;
//const ville1 = require('../controllers').ville1;
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
    /*
  const r = require('rethinkdb');
  var connection = null;
  r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
    r.db('khaled_tasnime').tableCreate('searchs').run(connection, function(err, result) {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2));
    })
  })
  */
    /*
  const uuidv1 = require('uuid/v1');
  var WebSocketServer = require('ws').Server,
      wss = new WebSocketServer({port:40550}),
      CLIENTS=[];
  
  wss.on('connection', function(ws) {
     const naouel= uuidv1()
    CLIENTS.push({uuid:naouel,ws:ws});
      ws.on('message', function(message) {
        // console.log('received: %s', message);
        if (ws.readyState === WebSocket.OPEN) {
         //   console.log("message",JSON.parse(message))
      sendAll(JSON.parse(message));
        }
      });
      if (ws.readyState === WebSocket.OPEN) {
          ws.send(naouel)
        }
         
         
       
    
  });
  
  //const cherche=(count,idhotel,contenu)=>
  //{
  //return jsonContent1.HotelSearchRES.Hotels.Hotel[0]
  //}
  function sendAll (message) {
      for (var i=0; i<CLIENTS.length; i++) {
      //    console.log("client ",CLIENTS[i].uuid," ",message.uix)
      
      4055  if(CLIENTS[i].uuid==message.uix)
        {
        //    console.log( message.content)
  
    message.content = message.content.replace(/[^\x00-\x7F]/g,"");
    if (CLIENTS[i].ws.readyState === WebSocket.OPEN) {
   //     console.log(message.content.toString('utf8'))
      CLIENTS[i].ws.send( String(message.content.toString('utf8')));
    }
  
        }
          
      }
  }*/
    // routes
    //parametre
    //modifier reservation
    //modifier reservation//
    //modifier reservation//
    //modifier reservation
    // admin only
    //mouradi-souhir
    //mouradi-souhir-08-04-2020
    //sc-04-05-2020
    //mouradi-souhir-08-04-2020
    //sc-18
    app.post('/apiRF/aeroport/insert', aeroport1.insertAeroport);
    app.put('/apiRF/aeroport/update/:id', aeroport1.updateAeroport);
    app.get('/apiRF/aeroport/read/:id', aeroport1.readAeroport);
    app.delete('/apiRF/aeroport/delete/:id', aeroport1.deleteAeroport);
    //***************api rafahia************************** */
    //**client company */
    app.post('/apiRF/clientCompany/insert', ClientCompany.insertClient);
    app.put('/apiRF/clientCompany/update/:id', ClientCompany.updateClient);
    app.get('/apiRF/clientCompany/read/:id', ClientCompany.readClient);
    app.delete('/apiRF/clientCompany/delete/:id', ClientCompany.deleteClient);
    app.post('/apiRF/clientCompany/readPage', ClientCompany.readClientChunk);
    //**TVA */
    app.post('/apiRF/tva/insert', Tva.insertTva);
    app.put('/apiRF/tva/update/:id', Tva.updateTva);
    app.get('/apiRF/tva/read/:id', Tva.readTva);
    app.delete('/apiRF/tva/delete/:id', Tva.deleteTva);
    //**trip** */
    app.post('/apiRF/trip/insert', Trip.insertTrip);
    app.put('/apiRF/trip/update/:id', Trip.updateTrip);
    app.get('/apiRF/trip/read/:id', Trip.readTrip);
    app.delete('/apiRF/trip/delete/:id', Trip.deleteTrip);
    //**driver* */
    app.post('/apiRF/driver/insert', Driver.insertDriver);
    app.put('/apiRF/driver/update/:id', Driver.updateDriver);
    app.get('/apiRF/driver/read/:id', Driver.readDriver);
    app.delete('/apiRF/driver/delete/:id', Driver.deleteDriver);
    app.post('/apiRF/driver/readPage', Driver.readDriverChunk);
    //**Usual Customer */
    app.post('/apiRF/UsualCustomer/insert', UsualCustomer.insertUsualCustomer);
    app.put('/apiRF/UsualCustomer/update/:id', UsualCustomer.updateUsualCustomer);
    app.get('/apiRF/UsualCustomer/read/:id', UsualCustomer.readUsualCustomer);
    app.delete('/apiRF/UsualCustomer/delete/:id', UsualCustomer.deleteUsualCustomer);
    //**passeport* */
    app.post('/apiRF/passeport/insert', Passeport.insertPasseport);
    app.put('/apiRF/passeport/update/:id', Passeport.updatePasseport);
    app.get('/apiRF/passeport/read/:id', Passeport.readPasseport);
    app.delete('/apiRF/passeport/delete/:id', Passeport.deletePasseport);
    //**personalGroup */
    app.post('/apiRF/personalGroup/insert', PersonalGroup.insertPersonalGroup);
    app.put('/apiRF/personalGroup/update/:id', PersonalGroup.updatePersonalGroup);
    app.get('/apiRF/personalGroup/read/:id', PersonalGroup.readPersonalGroup);
    app.delete('/apiRF/personalGroup/delete/:id', PersonalGroup.deletePersonalGroup);
    //**vehiculeFleet **/
    app.post('/apiRF/vehiculeFleet/insert', VehiculeFleet.insertVehicule);
    app.put('/apiRF/vehiculeFleet/update/:id', VehiculeFleet.updateVehicule);
    app.get('/apiRF/vehiculeFleet/read/:id', VehiculeFleet.readVehicule);
    app.delete('/apiRF/vehiculeFleet/delete/:id', VehiculeFleet.deleteVehicule);
    //**price */
    app.post('/apiRF/price/insert', Price.insertPrice);
    app.put('/apiRF/price/update/:id', Price.updatePrice);
    app.get('/apiRF/price/read/:id', Price.readPrice);
    app.delete('/apiRF/price/delete/:id', Price.deletePrice);
    //**passengerLuggage */
    app.post('/apiRF/luggage/insert', PassengerLuggage.insertLuggage);
    app.put('/apiRF/luggage/update/:id', PassengerLuggage.updateLuggage);
    app.get('/apiRF/luggage/read/:id', PassengerLuggage.readLuggage);
    app.delete('/apiRF/luggage/delete/:id', PassengerLuggage.deleteLuggage);
    //**proformaInvoice */
    app.post('/apiRF/proformaInvoice/insert', Proforma.insertProforma);
    app.put('/apiRF/proformaInvoice/update/:id', Proforma.updateProforma);
    app.get('/apiRF/proformaInvoice/read/:id', Proforma.readProforma);
    app.delete('/apiRF/proformaInvoice/delete/:id', Proforma.deleteProforma);
    //**technical inspection */
    app.post('/apiRF/technicalInspection/insert', TechnicalInspection.insertInspection);
    app.put('/apiRF/technicalInspection/update/:id', TechnicalInspection.updateInspection);
    app.get('/apiRF/technicalInspection/read/:id', TechnicalInspection.readInspection);
    app.delete('/apiRF/technicalInspection/delete/:id', TechnicalInspection.deleteInspection);
    //**vehicule insurance */
    app.post('/apiRF/vehiculeInsurance/insert', VehiculeInsurance.insertInsurance);
    app.put('/apiRF/vehiculeInsurance/update/:id', VehiculeInsurance.updateInsurance);
    app.get('/apiRF/vehiculeInsurance/read/:id', VehiculeInsurance.readInsurance);
    app.delete('/apiRF/vehiculeInsurance/delete/:id', VehiculeInsurance.deleteInsurance);
    //**vehicule maintenance */
    app.post('/apiRF/maintenance/insert', VehiculeMaintenance.insertMaintenance);
    app.put('/apiRF/maintenance/update/:id', VehiculeMaintenance.updateMaintenance);
    app.get('/apiRF/maintenance/read/:id', VehiculeMaintenance.readMaintenance);
    app.delete('/apiRF/maintenance/delete/:id', VehiculeMaintenance.deleteMaintenance);
    //**TVA */
    app.post('/apiRF/tva/insert', Tva.insertTva);
    app.put('/apiRF/tva/update/:id', Tva.updateTva);
    app.get('/apiRF/tva/read/:id', Tva.readTva);
    app.delete('/apiRF/tva/delete/:id', Tva.deleteTva);
    //**Trip-Driver */
    app.post('/apiRF/tripDriver/insert', TripDriver.insertTripDriver);
    app.put('/apiRF/tripDriver/update/:id', TripDriver.updateTripDriver);
    app.get('/apiRF/tripDriver/read/:id', TripDriver.readTripDriver);
    app.delete('/apiRF/tripDriver/delete/:id', TripDriver.deleteTripDriver);
    //*Trip-UsualCustomer
    app.post('/apiRF/TripUsualCustomer/insert', TripUsualCustomer.insertTripUsualCustomer);
    app.put('/apiRF/TripUsualCustomer/update/:id', TripUsualCustomer.updateTripUsualCustomer);
    app.get('/apiRF/TripUsualCustomer/read/:id', TripUsualCustomer.readTripUsualCustomer);
    app.delete('/apiRF/TripUsualCustomer/delete/:id', TripUsualCustomer.deleteTripUsualCustomer);
    //**Trip-ClientCompany */
    app.post('/apiRF/TripClientCompany/insert', TripClientCompany.insertTripClientCompany);
    app.put('/apiRF/TripClientCompany/update/:id', TripClientCompany.updateTripClientCompany);
    app.get('/apiRF/TripClientCompany/read/:id', TripClientCompany.readTripClientCompany);
    app.delete('/apiRF/TripClientCompany/delete/:id', TripClientCompany.deleteTripClientCompany);
    //**Trade Margin */
    app.post('/apiRF/TradeMargin/insert', TradeMargin.insertTradeMargin);
    app.put('/apiRF/TradeMargin/update/:id', TradeMargin.updateTradeMargin);
    app.get('/apiRF/TradeMargin/read/:id', TradeMargin.readTradeMargin);
    app.delete('/apiRF/TradeMargin/delete/:id', TradeMargin.deleteTradeMargin);
    //**UsualCustomer-CLientCompany* */
    app.post('/apiRF/UsualCustomerClientCompany/insert', UsualCustomerClientCompany.insertUsualCustomerClientCompany);
    app.put('/apiRF/UsualCustomerClientCompany/update/:id', UsualCustomerClientCompany.updateUsualCustomerClientCompany);
    app.get('/apiRF/UsualCustomerClientCompany/read/:id', UsualCustomerClientCompany.readUsualCustomerClientCompany);
    app.delete('/apiRF/UsualCustomerClientCompany/delete/:id', UsualCustomerClientCompany.deleteUsualCustomerClientCompany);
    //**Rent client company* */
    app.post('/apiRF/RentClientCompany/insert', RentClientCompany.insertRentClientCompany);
    app.put('/apiRF/RentClientCompany/update/:id', RentClientCompany.updateRentClientCompany);
    app.get('/apiRF/RentClientCompany/read/:id', RentClientCompany.readRentClientCompany);
    app.delete('/apiRF/RentClientCompany/delete/:id', RentClientCompany.deleteRentClientCompany);
    //**Rent usual customer* */
    app.post('/apiRF/RentUsualCustomer/insert', RentUsualCustomer.insertRentUsualCustomer);
    app.put('/apiRF/RentUsualCustomer/update/:id', RentUsualCustomer.updateRentUsualCustomer);
    app.get('/apiRF/RentUsualCustomer/read/:id', RentUsualCustomer.readRentUsualCustomer);
    app.delete('/apiRF/RentUsualCustomer/delete/:id', RentUsualCustomer.deleteRentUsualCustomer);
    //**Rent with driver client company* */
    app.post('/apiRF/RentWithDriverClientCompany/insert', RentWithDriverClientCompany.insertRentWithDriverClientCompany);
    app.put('/apiRF/RentWithDriverClientCompany/update/:id', RentWithDriverClientCompany.updateRentWithDriverClientCompany);
    app.get('/apiRF/RentWithDriverClientCompany/read/:id', RentWithDriverClientCompany.readRentWithDriverClientCompany);
    app.delete('/apiRF/RentWithDriverClientCompany/delete/:id', RentWithDriverClientCompany.deleteRentWithDriverClientCompany);
    //**Rent with driver usual Customer* */
    app.post('/apiRF/RentWithDriverUsualCustomer/insert', RentWithDriverUsualCustomer.insertRentWithDriverUsualCustomer);
    app.put('/apiRF/RentWithDriverUsualCustomer/update/:id', RentWithDriverUsualCustomer.updateRentWithDriverUsualCustomer);
    app.get('/apiRF/RentWithDriverUsualCustomer/read/:id', RentWithDriverUsualCustomer.readRentWithDriverUsualCustomer);
    app.delete('/apiRF/RentWithDriverUsualCustomer/delete/:id', RentWithDriverUsualCustomer.deleteRentWithDriverUsualCustomer);
    //**Rent with driver client company driver* */
    app.post('/apiRF/RentWithDriverClientCompanyDriver/insert', RentWithDriverClientCompanyDriver.insertRentWithDriverClientCompanyDriver);
    app.put('/apiRF/RentWithDriverClientCompanyDriver/update/:id', RentWithDriverClientCompanyDriver.updateRentWithDriverClientCompanyDriver);
    app.get('/apiRF/RentWithDriverClientCompanyDriver/read/:id', RentWithDriverClientCompanyDriver.readRentWithDriverClientCompanyDriver);
    app.delete('/apiRF/RentWithDriverClientCompanyDriver/delete/:id', RentWithDriverClientCompanyDriver.deleteRentWithDriverClientCompanyDriver);
    //**Rent with driver usual customer driver* */
    app.post('/apiRF/RentWithDriverUsualCustomerDriver/insert', RentWithDriverUsualCustomerDriver.insertRentWithDriverUsualCustomerDriver);
    app.put('/apiRF/RentWithDriverUsualCustomerDriver/update/:id', RentWithDriverUsualCustomerDriver.updateRentWithDriverUsualCustomerDriver);
    app.get('/apiRF/RentWithDriverUsualCustomerDriver/read/:id', RentWithDriverUsualCustomerDriver.readRentWithDriverUsualCustomerDriver);
    app.delete('/apiRF/RentWithDriverUsualCustomerDriver/delete/:id', RentWithDriverUsualCustomerDriver.deleteRentWithDriverUsualCustomerDriver);
    //**stop over trip */
    app.post('/apiRF/StopoverTrip/insert', StopoverTrip.insertStopoverTrip);
    app.put('/apiRF/StopoverTrip/update/:id', StopoverTrip.updateStopoverTrip);
    app.get('/apiRF/StopoverTrip/read/:id', StopoverTrip.readStopoverTrip);
    app.delete('/apiRF/StopoverTrip/delete/:id', StopoverTrip.deleteStopoverTrip);
    //**stop over usual customer */
    app.post('/apiRF/StopoverUsualCustomer/insert', StopoverUsualCustomer.insertStopoverUsualCustomer);
    app.put('/apiRF/StopoverUsualCustomer/update/:id', StopoverUsualCustomer.updateStopoverUsualCustomer);
    app.get('/apiRF/StopoverUsualCustomer/read/:id', StopoverUsualCustomer.readStopoverUsualCustomer);
    app.delete('/apiRF/StopoverUsualCustomer/delete/:id', StopoverUsualCustomer.deleteStopoverUsualCustomer);
    //**TVA */
    app.post('/apiRF/UsualCustomerPersonalGroup/insert', UsualCustomerPersonalGroup.insertUsualCustomerPersonalGroup);
    app.put('/apiRF/UsualCustomerPersonalGroup/update/:id', UsualCustomerPersonalGroup.updateUsualCustomerPersonalGroup);
    app.get('/apiRF/UsualCustomerPersonalGroup/read/:id', UsualCustomerPersonalGroup.readUsualCustomerPersonalGroup);
    app.delete('/apiRF/UsualCustomerPersonalGroup/delete/:id', UsualCustomerPersonalGroup.deleteUsualCustomerPersonalGroup);
    //***************api rafahia************************** */
    //**************************************************** */
    app.get('/api/getlist', test1.getList);
    app.post('/api/insertlist', test1.insertList);
    app.put('/api/updatelist', test1.updateList);
    app.delete('/api/deletelist', test1.deleteList);
    // Hotel table route
    app.get('/api/gethotel', hotel.getHotel);
    //Image table route
    app.get('/api/getimage', image.getImage);
    //Image jointure
    app.get('/api/getNameImage/:id', image.getNameImg);
    app.get('/api/gethotel', image.getHotel);
    app.get('/api/getHotelName/:id', image.getHotelName);
    app.get('/api/gethotel1', hotel.getHotel1);
    app.get('/api/getOneHotel/:id', hotel.getOneHotel);
    app.put('/api/updateOneHotel/:id', hotel.updateOneHotel);
    //mouradi-souhir
    //apigroupe souhir
    const numCPUs = require('os').cpus().length;
    console.log('00numCpu', numCPUs);
    //app.get('/apiB2B/ville1', ville1.list);
    /*app.get('/apiB2B/cyberesa',(req,res) => {
      try {
          console.log(axios.get('https://dog.ceo/api/breeds/list/all'))
        } catch (error) {
          console.error(error)
        }
  })*/
    //news
    /**
     * @apiDefine newsNotFoundError
     * @apiError  newsNotFound  <code>news</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "news pas trouvée"
     *     }
     */
    /**
  * @api {get} /news/  ALL news
  * @apiName Getnews
  * @apiGroup  news
  *
  
  *
  
  * @apiSuccess {Number} id unique ID news .
  * @apiSuccess {String} message  .
  * @apiSuccess {Number} flash 0/1.
  
  
  
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  [
  {
  "id": 2,
  "message": "testss",
  "flashfunction authenticate(req, res, next) {: "1",
  "periofunction authenticate(req, res, next) {_from": null,
  "periofunction authenticate(req, res, next) {_to": null,
  "creatfunction authenticate(req, res, next) {dAt": "2018-09-29T09:51:56.000Z",
  "updatedAt": "2018-09-29T10:16:19.000Z"
  },
  {
  "id": 3,
  "message": "test",
  "flash": "1",
  "period_from": null,
  "period_to": null,
  "createdAt": "2018-09-29T09:56:23.000Z",
  "updatedAt": "2018-09-29T09:56:23.000Z"
  },
  {
  "id": 4,
  "message": "mhh",
  "flash": "Oui",
  "period_from": null,
  "period_to": null,
  "createdAt": "2018-09-29T09:56:27.000Z",
  "updatedAt": "2018-09-29T09:56:27.000Z"
  }
  ]
  * @apiUse  newsNotFoundError
  */
    /**
   * @api {get} /news/:id GET news
   * @apiName Getnews
   * @apiGroup  news
   *
   * @apiParam {Number}  id news unique ID.
   *
   * @apiSuccess {Number} id unique ID news .
   * @apiSuccess {String} message  .
  
   * @apiSuccess {Number} flash   0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
    {
          "id": 4,
          "message": "mhh",
          "flash": "Oui",
          "period_from": null,
          "period_to": null,
          "createdAt": "2018-09-29T09:56:27.000Z",
          "updatedAt": "2018-09-29T09:56:27.000Z"
      }
   *
   * @apiUse  newsNotFoundError
   */
    /**
   * @api {post} /new/ POST news
   * @apiName POSTnews
   * @apiGroup news
   *
  
  
   * @apiParamExample {json} Request-Example:
      {
  
          "message": "mhh",
          "flash": "Oui"
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
    {
          "id": 4,
          "message": "mhh",
          "flash": "Oui",
          "period_from": null,
          "period_to": null,
          "createdAt": "2018-09-29T09:56:27.000Z",
          "updatedAt": "2018-09-29T09:56:27.000Z"
      }
  
   */
    /**
   * @api {put} /new/:id PUT news
   * @apiName PUTnews
   * @apiGroup news
   *
   * @apiParam {Number} id         unique ID.
  
   * @apiParamExample {json} Request-Example:
    {
         
          "message": "mhh",
          "flash": "Oui"
      }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
    {
          "id": 4,
          "message": "mhh",
          "flash": "Oui",
          "period_from": null,
          "period_to": null,
          "createdAt": "2018-09-29T09:56:27.000Z",
          "updatedAt": "2018-09-29T09:56:27.000Z"
      }
  
  
   */
    /**
     * @api {delete} /new/:id Delete news
     * @apiName DELETEnews
     * @apiGroup news
     * @apiParam {Number} id id news
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //banner
    /**
     * @apiDefine bannerNotFoundError
     * @apiError  bannerNotFound  <code>banner</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "banner pas trouvée"
     *     }
     */
    /**
   * @api {get} /banners/  ALL banners
   * @apiName Getbanners
   * @apiGroup  banner
   *
  
   *
  
   * @apiSuccess {Number} id unique ID banner .
   * @apiSuccess {String} nom  .
   * @apiSuccess {debut} date debut.
   * @apiSuccess {fin} date fin.
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
      "id": 126,
      "nom": "shell beach",
      "url": "shell_beach.jpg",
      "debut": "2018-07-01",
      "fin": "2018-07-15",
      "createdAt": "0000-00-00",
      "updatedAt": "0000-00-00"
  }
  ....
  ]
    * @apiUse  bannerNotFoundError
   */
    /**
   * @api {get} /banner/:id GET banner
   * @apiName Getbanner
   * @apiGroup  banner
   *
   * @apiParam {Number}  id banner unique ID.
   *
   * @apiSuccess {Number} id unique ID banner .
   * @apiSuccess {String} nom  .
   * @apiSuccess {debut} date debut.
   * @apiSuccess {fin} date fin.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
   {
      "id": 126,
      "nom": "shell beach",
      "url": "shell_beach.jpg",
      "debut": "2018-07-01",
      "fin": "2018-07-15",
      "createdAt": "0000-00-00",
      "updatedAt": "0000-00-00"
  }
   *
   * @apiUse  bannerNotFoundError
   */
    /**
   * @api {post} /banner/ POST banner
   * @apiName POSTbanner
   * @apiGroup banner
   *
  
   * @apiparam {File} url image.
   * @apiParamExample {json} Request-Example:
      {
  
          "nom": "mhh",
          "debut": "2018-01-01",
          "fin": "2018-11-01",
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
    {
      "id": 126,
      "nom": "shell beach",
      "url": "shell_beach.jpg",
      "debut": "2018-07-01",
      "fin": "2018-07-15",
      "createdAt": "0000-00-00",
      "updatedAt": "0000-00-00"
  }
  
   */
    /**
   * @api {put} /banner/:id PUT banner
   * @apiName PUTbanner
   * @apiGroup banner
   *
   * @apiParam {Number} id         unique ID.
   * @apiparam {File} url image.
   * @apiParamExample {json} Request-Example:
   {
  
      "nom": "shell beach",
  
      "debut": "2018-07-01",
      "fin": "2018-07-15"
  }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
   {
      "id": 126,
      "nom": "shell beach",
      "url": "shell_beach.jpg",
      "debut": "2018-07-01",
      "fin": "2018-07-15",
      "createdAt": "0000-00-00",
      "updatedAt": "0000-00-00"
  }
  
  
   */
    /**
     * @api {delete} /new/:id Delete banner
     * @apiName DELETEbanner
     * @apiGroup banner
     * @apiParam {Number} id id banner
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    /**
   * @api {get} /agences/indicateurs   GET Indicateurs Agences
   * @apiName GetAgencesIndicateurs
   * @apiGroup  Agences
   *
  
   *
  
  
   * @apiSuccess {Number} agInscrites  .
   * @apiSuccess {Number} agClientes .
   * @apiSuccess {Number} agActives .
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "agInscrites": 249,
      "agClientes": 2,
      "agActives": 19
  }
  
   */
    /**
   * @api {get} /agences/nbre_reservations   GET Nombre réservations Agences
   * @apiName GetAgencesNbrReservations
   * @apiPermission Admin
   * @apiGroup  Agences
   *
  
   *
  
  
   * @apiSuccess {Number} NBReservConf  .
   * @apiSuccess {Number} NBReservTot .
  
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "NBReservConf": 2,
      "NBReservTot": 2
  }
  
   */
    /**
   * @api {get} /agences/chiffres   GET Chiffres d'affaires Agences
   * @apiName GetAgencesChiffres
   * @apiPermission Admin
   * @apiGroup  Agences
   *
  
   *
  
  
   * @apiSuccess {Number} CAMoy  .
   * @apiSuccess {Number} CATot .
  
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "CAMoy": 81,
      "CATot": 162
  }
  
   */
    /**
   * @api {get} /agences/nbre   GET Nombre Agences
   * @apiName GetAgencesNombre
   * @apiPermission Admin
   * @apiGroup  Agences
   *
  
   *
  
  
   * @apiSuccess {String} name  .
   * @apiSuccess {Array} series .
  
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "name": "Tasnime Voyages & Tourisme",
          "series": [
              {
                  "name": "reservation",
                  "value": 6
              },
              {
                  "name": "recherche",
                  "value": 1
              },
              {
                  "name": "annulation",
                  "value": 9
              }
          ]
      },
      ...
  ]
    * @apiUse  AgenceNotFoundError
   */
    /**
   * @api {get} /agences/active  GET Actives Agences
   * @apiName GetAgencesActives
   * @apiPermission Admin
   * @apiGroup  Agences
   *
  
   *
  
  
   * @apiSuccess {String} name  .
   * @apiSuccess {String} value Chiffre d'affaire .
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "name": "Tasnime Voyages & Tourisme",
          "value": 707540
      },
      {
          "name": "Test dotcom",
          "value": 60928.9
      },
      {
          "name": "Agence Test Euro",
          "value": 978
      },
      {
          "name": "Agence Test",
          "value": 1301
      }
      
  ...
  ]
    * @apiUse  AgenceNotFoundError
   */
    //agences
    //agences
    /**
     * @apiDefine AgenceNotFoundError
     * @apiError  AgenceNotFound  <code>Agence</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "agence pas trouvée"
     *     }
     */
    /**
   * @api {get} /agences/impayees  Impayees Agences
   * @apiName GetAgencesImpayees
   * @apiPermission Admin
   * @apiGroup  Agences
   *
  
   *
  
   * @apiSuccess {Number} id unique ID agence .
   * @apiSuccess {String} username  .
   * @apiSuccess {String} logo logo .
   * @apiSuccess {String} tva .
   * @apiSuccess {String} tel .
   * @apiSuccess {String} fax .
   * @apiSuccess {String} email .
   * @apiSuccess {String} pays .
   * @apiSuccess {String} ville .
   * @apiSuccess {Number} zip .
   * @apiSuccess {String} adresse .
   * @apiSuccess {String} login .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {String} password .
   * @apiSuccess {String} salt .
   * @apiSuccess {Number} marge .
   * @apiSuccess {Number} marge_affichage .
   * @apiSuccess {Number} operation_affichage .
   * @apiSuccess {Number} pourcent_affichage .
   * @apiSuccess {Number} max_reservation .
   * @apiSuccess {Number} max_total .
   * @apiSuccess {Number} admin 0/1 .
   * @apiSuccess {Number} total_reservation .
   * @apiSuccess {Number} nb_reservation nbre reservation.
   * @apiSuccess {Number} payee montant payée.
   * @apiSuccess {Number} impayee montant impayée.
   * @apiSuccess {Number} rouge % en rouge.
   * @apiSuccess {Number} total montant total.
   * @apiSuccess {Number} auto_email auto envoi email.
   * @apiSuccess {String} devise devise .
   * @apiSuccess {Number} taux_devise taux de devise.
   * @apiSuccess {Number} taux_dzd taux de devise algerie.
   * @apiSuccess {String} email2 email2.
   * @apiSuccess {String} portable portable.
   * @apiSuccess {Number} active  active 0/1.
   * @apiSuccess {Number} marge_mouradi  marge mouradi.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
   {
          "id": 132,
          "username": "test",
          "logo": null,
          "tva": "",
          "tel": "",
          "fax": "",
          "email": "skynet.sousse@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "adresse": "rue du msaken",
          "login": "test",
          "password": "",
          "salt": "",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_reservation": 0,
          "max_total": 5000,
          "admin": 0,
          "active": 0,
          "total_reservation": "0",
          "nb_reservation": 0,
          "payee": 0,
          "impayee": 0,
          "rouge": 0,
          "marge_mouradi": 5,
          "total": 0,
          "auto_email": 0,
          "devise": "EURO",
          "taux_devise": 2.85,
          "taux_dzd": 1,
          "email2": "",
          "portable": "",
          "createdAt": null,
          "updatedAt": null
      },
      
  ...
  ]
    * @apiUse  AgenceNotFoundError
   */
    /**
   * @api {get} /agences/not_active  NotActives Agences
   * @apiName GetAgencesNotActives
   * @apiPermission Admin
   * @apiGroup  Agences
   *
  
   *
  
   * @apiSuccess {Number} id unique ID agence .
   * @apiSuccess {String} username  .
   * @apiSuccess {String} logo logo .
   * @apiSuccess {String} tva .
   * @apiSuccess {String} tel .
   * @apiSuccess {String} fax .
   * @apiSuccess {String} email .
   * @apiSuccess {String} pays .
   * @apiSuccess {String} ville .
   * @apiSuccess {Number} zip .
   * @apiSuccess {String} adresse .
   * @apiSuccess {String} login .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {String} password .
   * @apiSuccess {String} salt .
   * @apiSuccess {Number} marge .
   * @apiSuccess {Number} marge_affichage .
   * @apiSuccess {Number} operation_affichage .
   * @apiSuccess {Number} pourcent_affichage .
   * @apiSuccess {Number} max_reservation .
   * @apiSuccess {Number} max_total .
   * @apiSuccess {Number} admin 0/1 .
   * @apiSuccess {Number} total_reservation .
   * @apiSuccess {Number} nb_reservation nbre reservation.
   * @apiSuccess {Number} payee montant payée.
   * @apiSuccess {Number} impayee montant impayée.
   * @apiSuccess {Number} rouge % en rouge.
   * @apiSuccess {Number} total montant total.
   * @apiSuccess {Number} auto_email auto envoi email.
   * @apiSuccess {String} devise devise .
   * @apiSuccess {Number} taux_devise taux de devise.
   * @apiSuccess {Number} taux_dzd taux de devise algerie.
   * @apiSuccess {String} email2 email2.
   * @apiSuccess {String} portable portable.
   * @apiSuccess {Number} active  active 0/1.
   * @apiSuccess {Number} marge_mouradi  marge mouradi.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
   {
          "id": 132,
          "username": "test",
          "logo": null,
          "tva": "",
          "tel": "",
          "fax": "",
          "email": "skynet.sousse@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "adresse": "rue du msaken",
          "login": "test",
          "password": "",
          "salt": "",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_reservation": 0,
          "max_total": 5000,
          "admin": 0,
          "active": 0,
          "total_reservation": "0",
          "nb_reservation": 0,
          "payee": 0,
          "impayee": 0,
          "rouge": 0,
          "marge_mouradi": 5,
          "total": 0,
          "auto_email": 0,
          "devise": "EURO",
          "taux_devise": 2.85,
          "taux_dzd": 1,
          "email2": "",
          "portable": "",
          "createdAt": null,
          "updatedAt": null
      },
      
  ...
  ]
    * @apiUse  AgenceNotFoundError
   */
    /**
   * @api {get} /agences/  ALL Agences
   * @apiName GetAgences
   * @apiPermission Admin
   * @apiGroup  Agences
   *
  
   *
  
   * @apiSuccess {Number} id unique ID agence .
   * @apiSuccess {String} username  .
   * @apiSuccess {String} logo logo .
   * @apiSuccess {String} tva .
   * @apiSuccess {String} tel .
   * @apiSuccess {String} fax .
   * @apiSuccess {String} email .
   * @apiSuccess {String} pays .
   * @apiSuccess {String} ville .
   * @apiSuccess {Number} zip .
   * @apiSuccess {String} adresse .
   * @apiSuccess {String} login .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {String} password .
   * @apiSuccess {String} salt .
   * @apiSuccess {Number} marge .
   * @apiSuccess {Number} marge_affichage .
   * @apiSuccess {Number} operation_affichage .
   * @apiSuccess {Number} pourcent_affichage .
   * @apiSuccess {Number} max_reservation .
   * @apiSuccess {Number} max_total .
   * @apiSuccess {Number} admin 0/1 .
   * @apiSuccess {Number} total_reservation .
   * @apiSuccess {Number} nb_reservation nbre reservation.
   * @apiSuccess {Number} payee montant payée.
   * @apiSuccess {Number} impayee montant impayée.
   * @apiSuccess {Number} rouge % en rouge.
   * @apiSuccess {Number} total montant total.
   * @apiSuccess {Number} auto_email auto envoi email.
   * @apiSuccess {String} devise devise .
   * @apiSuccess {Number} taux_devise taux de devise.
   * @apiSuccess {Number} taux_dzd taux de devise algerie.
   * @apiSuccess {String} email2 email2.
   * @apiSuccess {String} portable portable.
   * @apiSuccess {Number} active  active 0/1.
   * @apiSuccess {Number} marge_mouradi  marge mouradi.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
  {
          "id": 1,
          "username": "Tasnime Voyages & Tourisme",
          "logo": "logo (2).jpg",
          "tva": "",
          "tel": "(00216) 58408040/98228867 / 98635321",
          "fax": "",
          "email": "tasnime.voyages@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "adresse": " Av. Les Orangers Immeuble Billardino App.N° 1 Khezama Est , 4051 Sousse ",
          "login": "tasnime",
          "password": "80ebd1d59a640b16cfd5cd5300734d11b6b40693a88bcb5c30a5fdb750292dd3013077b9d927cd5d0de04f6fe5751f95f5cf32c825051f3b608842c05ac82486",
          "salt": "6ed0189b8a818e443914a13466213ba89c70aabc5ffc6669584ea970ebfcb5ec47b4aafe2fb52d01531cc803966f018964a63c6c939685f4a8cb86cce74138fb",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_reservation": 1000,
          "max_total": 3500000,
          "admin": 1,
          "active": 1,
          "total_reservation": "527010 TND <br /> Payer : 112 TND <br />Impayer : 526898 TND",
          "nb_reservation": 488,
          "payee": 112,
          "impayee": 526898,
          "rouge": 20,
          "total": 527010,
          "auto_email": 0,
          "devise": "TND",
          "taux_devise": 1,
          "taux_dzd": 0,
          "marge_mouradi": 0,
          "email2": "",
          "portable": "",
          "createdAt": null,
          "updatedAt": null
      },
      
  ...
  ]
    * @apiUse  AgenceNotFoundError
   */
    /**
   * @api {get} /agence/:id GET Agence
   * @apiName GetAgence
   * @apiGroup  Agences
   *
   * @apiSuccess {Number} id unique ID agence .
   * @apiSuccess {String} username  .
   * @apiSuccess {String} logo logo .
   * @apiSuccess {String} tva .
   * @apiSuccess {String} tel .
   * @apiSuccess {String} fax .
   * @apiSuccess {String} email .
   * @apiSuccess {String} pays .
   * @apiSuccess {String} ville .
   * @apiSuccess {Number} zip .
   * @apiSuccess {String} adresse .
   * @apiSuccess {String} login .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {String} password .
   * @apiSuccess {String} salt .
   * @apiSuccess {Number} marge .
   * @apiSuccess {Number} marge_affichage .
   * @apiSuccess {Number} operation_affichage .
   * @apiSuccess {Number} pourcent_affichage .
   * @apiSuccess {Number} max_reservation .
   * @apiSuccess {Number} max_total .
   * @apiSuccess {Number} admin 0/1 .
   * @apiSuccess {Number} total_reservation .
   * @apiSuccess {Number} nb_reservation nbre reservation.
   * @apiSuccess {Number} payee montant payée.
   * @apiSuccess {Number} impayee montant impayée.
   * @apiSuccess {Number} rouge % en rouge.
   * @apiSuccess {Number} total montant total.
   * @apiSuccess {Number} auto_email auto envoi email.
   * @apiSuccess {String} devise devise .
   * @apiSuccess {Number} taux_devise taux de devise.
   * @apiSuccess {Number} taux_dzd taux de devise algerie.
   * @apiSuccess {String} email2 email2.
   * @apiSuccess {String} portable portable.
   * @apiSuccess {Number} active  active 0/1.
   * @apiSuccess {Number} marge_mouradi  marge mouradi.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
     
          "username": "Tasnime Voyages & Tourisme",
          "logo": "logo (2).jpg",
          "tva": "",
          "tel": "(00216) 58408040/98228867 / 98635321",
          "fax": "",
          "email": "tasnime.voyages@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "adresse": " Av. Les Orangers Immeuble Billardino App.N° 1 Khezama Est , 4051 Sousse ",
          "login": "tasnime",
          "password": "80ebd1d59a640b16cfd5cd5300734d11b6b40693a88bcb5c30a5fdb750292dd3013077b9d927cd5d0de04f6fe5751f95f5cf32c825051f3b608842c05ac82486",
          "salt": "6ed0189b8a818e443914a13466213ba89c70aabc5ffc6669584ea970ebfcb5ec47b4aafe2fb52d01531cc803966f018964a63c6c939685f4a8cb86cce74138fb",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_reservation": 1000,
          "max_total": 3500000,
          "admin": 1,
          "active": 1,
          "total_reservation": "527010 TND <br /> Payer : 112 TND <br />Impayer : 526898 TND",
          "nb_reservation": 488,
          "payee": 112,
          "impayee": 526898,
          "rouge": 20,
          "total": 527010,
          "auto_email": 0,
          "devise": "TND",
          "taux_devise": 1,
          "marge_mouradi": 0,
          "taux_dzd": 0,
          "email2": "",
          "portable": ""
      },
   *
   * @apiUse  AgenceNotFoundError
   */
    /**
   * @api {post} /agence/ POST agence
   * @apiDescription Ajout un agence , automatiquement un membre sera ajouter avec login,mot passe et email , aussi l'historique d
   * @apiName POSTAgence
   * @apiPermission Admin
   * @apiGroup Agences
   *
  
   * @apiparam {File} FileImg image.
   * @apiParamExample {json} Request-Example:
  {
      
          "username": "Tasnime Voyages & Tourisme",
          "logo": "logo (2).jpg",
          "tva": "",
          "tel": "(00216) 58408040/98228867 / 98635321",
          "fax": "",
          "email": "tasnime.voyages@gmail.com",
          "pays": "Tunisie",
          "adresse": " Av. Les Orangers Immeuble Billardino App.N° 1 Khezama Est , 4051 Sousse ",
          "login": "tasnime",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_total": 3500000,
          "rouge": 20,
          "devise": "TND",
          "taux_devise": 1,
          "marge_mouradi": 0,
          "email2": ""
      },
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
          "id": 1,
          "username": "Tasnime Voyages & Tourisme",
          "logo": "logo (2).jpg",
          "tva": "",
          "tel": "(00216) 58408040/98228867 / 98635321",
          "fax": "",
          "email": "tasnime.voyages@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "adresse": " Av. Les Orangers Immeuble Billardino App.N° 1 Khezama Est , 4051 Sousse ",
          "login": "tasnime",
          "password": "",
          "salt": "",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_reservation": 1000,
          "max_total": 3500000,
          "admin": 1,
          "active": 1,
          "total_reservation": "",
          "nb_reservation": 0,
          "payee": 0,
          "impayee": 0,
          "rouge": 20,
          "total": 0,
          "auto_email": 0,
          "devise": "TND",
          "taux_devise": 1,
          "taux_dzd": 0,
          "marge_mouradi": 0,
          "email2": "",
          "portable": "",
          "createdAt": null,
          "updatedAt": null
      },
   * @apiError  EmailUsed  <code>Email</code> utilisé.
    *
   * * @apiErrorExample Error-EmailUsed:
   *     HTTP/1.1 402 EmailUsed
   *     {
   *       "message": "Email utilisé"
   *     }
   */
    /**
   * @api {post} /agence/registre POST inscription agence
   * @apiDescription Inscription un agence , automatiquement un membre sera ajouter avec login,mot passe et email , aussi l'historique d
   * @apiName POSTRegistreAgence
   * @apiGroup Agences
   *
  
   * @apiparam {File} FileImg image.
   * @apiParamExample {json} Request-Example:
  {
      
          "username": "Tasnime Voyages & Tourisme",
          "logo": "logo (2).jpg",
          "tva": "",
          "tel": "(00216) 58408040/98228867 / 98635321",
          "fax": "",
          "email": "tasnime.voyages@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "p": "80ebd1444a640b16cfd5cd5321734d11b6b40693a88bcb5c30a5fdb750292dd3013077b9d927cd5d0de04f6fe5751f95f5cf32c825051f3b608842c05ac82486",
          "adresse": " Av. Les Orangers Immeuble Billardino App.N° 1 Khezama Est , 4051 Sousse ",
          "login": "tasnime",
          "devise": "TND",
          "taux_devise": 1,
          "email2": ""
      },
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
          "id": 1,
          "username": "Tasnime Voyages & Tourisme",
          "logo": "logo (2).jpg",
          "tva": "",
          "tel": "(00216) 58408040/98228867 / 98635321",
          "fax": "",
          "email": "tasnime.voyages@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "adresse": " Av. Les Orangers Immeuble Billardino App.N° 1 Khezama Est , 4051 Sousse ",
          "login": "tasnime",
          "password": "80ebd1d59a640b16cfd5cd5300734d11b6b40693a88bcb5c30a5fdb750292dd3013077b9d927cd5d0de04f6fe5751f95f5cf32c825051f3b608842c05ac82486",
          "salt": "6ed0189b8a818e443914a13466213ba89c70aabc5ffc6669584ea970ebfcb5ec47b4aafe2fb52d01531cc803966f018964a63c6c939685f4a8cb86cce74138fb",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_reservation": 1000,
          "max_total": 3500000,
          "admin": 1,
          "active": 1,
          "total_reservation": "527010 TND <br /> Payer : 112 TND <br />Impayer : 526898 TND",
          "nb_reservation": 488,
          "payee": 112,
          "impayee": 526898,
          "rouge": 20,
          "total": 527010,
          "auto_email": 0,
          "devise": "TND",
          "taux_devise": 1,
          "marge_mouradi": 0,
          "taux_dzd": 0,
          "email2": "",
          "portable": "",
          "createdAt": null,
          "updatedAt": null
      },
   * @apiError  EmailUsed  <code>Email</code> utilisé.
    *
   * * @apiErrorExample Error-EmailUsed:
   *     HTTP/1.1 402 EmailUsed
   *     {
   *       "message": "Email utilisé"
   *     }
   
   */
    //arrangements
    /**
     * @apiDefine arrangementsNotFoundError
     * @apiError  arrangementsNotFound  <code>arrangements</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "arrangements pas trouvée"
     *     }
     */
    /**
   * @api {get} /arrangements/  ALL Arrangements
   * @apiName Getallarrangements
   * @apiPermission Admin
   * @apiGroup Arrangements
   *
  
   *
  
   * @apiSuccess {Number} arrId unique ID arrangements .
   * @apiSuccess {String} arrangements  .
   * @apiSuccess {String} arr  .
   * @apiSuccess {Number} act 0/1.
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "arrId": 1,
          "act": 1,
          "arrangements": "Logement Simple",
          "arr": "LS",
          "createdAt": null,
          "updatedAt": null
      },
      {
          "arrId": 2,
          "act": 1,
          "arrangements": "Logement Petit Déjeuner",
          "arr": "LPD",
          "createdAt": null,
          "updatedAt": null
      },
      {
          "arrId": 3,
          "act": 1,
          "arrangements": "Demi Pension",
          "arr": "DP",
          "createdAt": null,
          "updatedAt": null
      },
      {
          "arrId": 4,
          "act": 1,
          "arrangements": "Pension Complète",
          "arr": "PC",
          "createdAt": null,
          "updatedAt": null
      },
      {
          "arrId": 7,
          "act": 1,
          "arrangements": "All Inclusive",
          "arr": "All-in",
          "createdAt": null,
          "updatedAt": null
      },
      {
          "arrId": 5,
          "act": 1,
          "arrangements": "DP+",
          "arr": "DP+",
          "createdAt": null,
          "updatedAt": null
      },
    
   ...
  ]
  */
    /**
    * @apiUse  arrangementsNotFoundError
  
   * @api {get} /arrangement/:arrId GET Arrangement
   * @apiName Getarrangement
   * @apiPermission Admin
   * @apiGroup Arrangements
   *
   * @apiParam {Number}  arrId arrangements unique ID.
   *
   * @apiSuccess {Number} arrId unique ID arrangements .
   * @apiSuccess {String} message  .
  
   * @apiSuccess {Number} flash   0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
     {
          "arrId": 9,
          "act": 1,
          "arrangements": "Ultra AI Soft Drink",
          "arr": "Ul-so",
          "createdAt": null,
          "updatedAt": null
      }
   *
   * @apiUse  arrangementsNotFoundError
   */
    /**
   * @api {post} /arrangement/ POST Arrangements
   * @apiName POSTarrangements
   * @apiPermission Admin
   * @apiGroup arrangements
   *
  //arrangements
      /**
  * @apiDefine arrangementsNotFoundError
   * @apiError  arrangementsNotFound  <code>arrangements</code> pas trouvée.
    *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "message": "arrangements pas trouvée"
   *     }
   */
    /**
   * @api {post} /arrangement/ POST Arrangements
   * @apiName POSTarrangements
   * @apiPermission Admin
   * @apiGroup Arrangements
   *
  
  
   * @apiParamExample {json} Request-Example:
     {
      
          "act": 1,
          "arrangements": "Ultra AI Soft Drink",
          "arr": "Ul-so"
         
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
      {
          "arrId": 9,
          "act": 1,
          "arrangements": "Ultra AI Soft Drink",
          "arr": "Ul-so",
          "createdAt": null,
          "updatedAt": null
      }
  
   */
    /**
   * @api {put} /arrangement/:arrId PUT Arrangements
   * @apiName PUTarrangements
   * @apiPermission Admin
   * @apiGroup Arrangements
   *
   * @apiParam {Number} arrId         unique ID.
  
   * @apiParamExample {json} Request-Example:
    {
         
          "message": "mhh",
          "flash": "Oui"
      }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
    {
          "arrId": 9,
          "act": 1,
          "arrangements": "Ultra AI Soft Drink",
          "arr": "Ul-so",
          "createdAt": null,
          "updatedAt": null
      }
  
  
   */
    /**
     * @api {delete} /arrangement/:arrId Delete Arrangements
     * @apiName DELETEarrangements
     * @apiPermission Admin
     * @apiGroup Arrangements
     * @apiParam {Number} arrId id arrangements
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    /* @apiParamExample {json} Request-Example:
      {
  
          "act": 1,
          "arrangements": "Ultra AI Soft Drink",
          "arr": "Ul-so"
      }
  */
    /* @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
    {
          "arrId": 9,
          "act": 1,
          "arrangements": "Ultra AI Soft Drink",
          "arr": "Ul-so",
          "createdAt": null,
          "updatedAt": null
      }
  
   */
    /**
   * @api {put} /arrangement/:arrId PUT Arrangements
   * @apiName PUTarrangements
   * @apiPermission Admin
   * @apiGroup Arrangements
   *
   * @apiParam {Number} arrId         unique ID.
  
   * @apiParamExample {json} Request-Example:
    {
         
          "act": 1,
          "arrangements": "Ultra AI Soft Drink",
          "arr": "Ul-so"
      }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
    {
          "arrId": 9,
          "act": 1,
          "arrangements": "Ultra AI Soft Drink",
          "arr": "Ul-so",
          "createdAt": null,
          "updatedAt": null
      }
  
  
   */
    /**
     * @api {delete} /arrangement/:arrId Delete arrangements
     * @apiName DELETEarrangements
     * @apiPermission Admin
     * @apiGroup Arrangements
     * @apiParam {Number} arrId id arrangements
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    /**
   * @api {put} /agence/:id PUT Agence
   * @apiName PUTAgence
   * @apiGroup Agences
   *
   * @apiParam {Number} id         unique ID.
   * @apiparam {File} FileImg image.
   * @apiParamExample {json} Request-Example:
  {
      
          "username": "Tasnime Voyages & Tourisme",
          "logo": "logo (2).jpg",
          "tva": "",
          "tel": "(00216) 58408040/98228867 / 98635321",
          "fax": "",
          "email": "tasnime.voyages@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "adresse": " Av. Les Orangers Immeuble Billardino App.N° 1 Khezama Est , 4051 Sousse ",
          "login": "tasnime",
          "p": "80ebd1d59a640b16cfd5cd5300734d11b6b40693a88bcb5c30a5fdb750292dd3013077b9d927cd5d0de04f6fe5751f95f5cf32c825051f3b608842c05ac82486",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_reservation": 1000,
          "max_total": 3500000,
          "admin": 1,
          "active": 1,
          "rouge": 20,
          "total": 527010,
          "auto_email": 0,
          "devise": "TND",
          "taux_devise": 1,
          "email2": "",
          "portable": ""
      },
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
          "id": 1,
          "username": "Tasnime Voyages & Tourisme",
          "logo": "logo (2).jpg",
          "tva": "",
          "tel": "(00216) 58408040/98228867 / 98635321",
          "fax": "",
          "email": "tasnime.voyages@gmail.com",
          "pays": "Tunisie",
          "ville": "",
          "zip": 0,
          "adresse": " Av. Les Orangers Immeuble Billardino App.N° 1 Khezama Est , 4051 Sousse ",
          "login": "tasnime",
          "password": "80ebd1d59a640b16cfd5cd5300734d11b6b40693a88bcb5c30a5fdb750292dd3013077b9d927cd5d0de04f6fe5751f95f5cf32c825051f3b608842c05ac82486",
          "salt": "6ed0189b8a818e443914a13466213ba89c70aabc5ffc6669584ea970ebfcb5ec47b4aafe2fb52d01531cc803966f018964a63c6c939685f4a8cb86cce74138fb",
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_affichage": 0,
          "pourcent_affichage": 0,
          "operation_affichage": 0,
          "max_reservation": 1000,
          "max_total": 3500000,
          "admin": 1,
          "active": 1,
          "total_reservation": "527010 TND <br /> Payer : 112 TND <br />Impayer : 526898 TND",
          "nb_reservation": 488,
          "payee": 112,
          "impayee": 526898,
          "rouge": 20,
          "total": 527010,
          "auto_email": 0,
          "devise": "TND",
          "taux_devise": 1,
          "taux_dzd": 0,
          "email2": "",
          "portable": "",
          "createdAt": null,
          "updatedAt": null
      },
  
  
   */
    /**
   * @api {put} /active_agence/:id PUT Active agence
   * @apiName PUTActiveAgence
   * @apiPermission Admin
   * @apiGroup Agences
   *
  
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "success": true
  }
   */
    /**
     * @api {delete} /agence/:id Delete agence
     * @apiPermission Admin
     * @apiGroup Agences
     * @apiParam {Number} id id agence
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //villes
    /**
     * @apiDefine VilleNotFoundError
     * @apiError  VilleNotFound  <code>Ville</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "ville pas trouvée"
     *     }
     */
    /**
   * @api {get} /villes/  ALL Villes
   * @apiName GetVilles
   * @apiPermission Admin
   * @apiGroup  Villes
   *
  
   *
  
   * @apiSuccess {Number} villeId unique ID ville .
   * @apiSuccess {String} villeTitle  .
   * @apiSuccess {String} countryId region id .
   * @apiSuccess {String} lang language .
  
   * @apiSuccess {Number} act  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
      {
          "villeId": 1,
          "villeTitle": "Hammamet",
          "act": 1,
          "countryId": 1,
          "lang": "",
          "ord": 5,
          "createdAt": null,
          "updatedAt": null
      },
      
  ...
  ]
    * @apiUse  VilleNotFoundError
   */
    /**
   * @api {get} /villes/:villeId GET Ville
   * @apiName GetVille
   * @apiPermission Admin
   * @apiGroup  Villes
   *
   * @apiParam {Number}  villeId ville unique ID.
   *
   * @apiSuccess {Number} villeId unique ID ville .
   * @apiSuccess {String} villeTitle  .
   * @apiSuccess {String} countryId region id .
   * @apiSuccess {String} lang language .
  
   * @apiSuccess {Number} act  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
      {
          "villeId": 1,
          "villeTitle": "Hammamet",
          "act": 1,
          "countryId": 1,
          "lang": "",
          "ord": 5,
          "createdAt": null,
          "updatedAt": null
      }
   *
   * @apiUse  VilleNotFoundError
   */
    /**
   * @api {post} /villes/ POST ville
   * @apiName POSTVille
   * @apiPermission Admin
   * @apiGroup Villes
   *
  
  
   * @apiParamExample {json} Request-Example:
      {
  
          "villeTitle": "Hammamet",
          "act": 1
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "countryId": "0",
      "lang": "",
      "ord": "100",
      "villeId": 44,
      "villeTitle": "Hammamet",
      "act": 1,
      "updatedAt": "2018-09-17T09:40:04.818Z",
      "createdAt": "2018-09-17T09:40:04.818Z"
  }
  
   */
    /**
   * @api {put} /villes/:villeId PUT Ville
   * @apiName PUTVille
   * @apiPermission Admin
   * @apiGroup Villes
   *
   * @apiParam {Number} villeId         unique ID.
  
   * @apiParamExample {json} Request-Example:
      {
  
          "villeTitle": "Hammamet",
          "act": 1
      }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
      {
          "villeId": 1,
          "villeTitle": "Hammamet",
          "act": 1,
          "countryId": 1,
          "lang": "",
          "ord": 5,
          "updatedAt": "2018-09-17T09:40:04.818Z",
          "createdAt": "2018-09-17T09:40:04.818Z"
      }
  
  
   */
    /**
     * @api {delete} /villes/:villeId Delete Ville
     * @apiName DELETEVille
     * @apiPermission Admin
     * @apiGroup Villes
     * @apiParam {Number} villeId id ville
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //Pays
    /**
     * @apiDefine PaysNotFoundError
     * @apiError  PaysNotFound  <code>Pays</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "Pays pas trouvée"
     *     }
     */
    /**
   * @api {get} //  ALL Pays
   * @apiName GetPays
   * @apiPermission Admin
   * @apiGroup  Pays
   *
  
   *
  
   * @apiSuccess {Number} id unique ID Pays .
   * @apiSuccess {String} nom  .
  
   * @apiSuccess {String} code code .
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
       {
          "id": 1,
          "nom": "Tunisie",
          "code": "TN",
          "createdAt": null,
          "updatedAt": null
      },
      
  ...
  ]
    * @apiUse  PaysNotFoundError
   */
    /**
   * @api {get} /Pays/:id GET Pays
   * @apiName GetPays
   * @apiPermission Admin
   * @apiGroup  Pays
   *
   * @apiParam {Number}  id Pays unique ID.
   *
   * @apiSuccess {Number} id unique ID Pays .
   * @apiSuccess {String} nom  .
  
   * @apiSuccess {String} code code .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
       {
          "id": 1,
          "nom": "Tunisie",
          "code": "TN",
          "createdAt": null,
          "updatedAt": null
      }
   *
   * @apiUse  PaysNotFoundError
   */
    /**
   * @api {post} /Pays/ POST Pays
   * @apiName POSTPays
   * @apiPermission Admin
   * @apiGroup Pays
   *
  
  
   * @apiParamExample {json} Request-Example:
      {
  
          "nom": "Tunisie",
          "code": "TN"
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
    {
          "id": 1,
          "nom": "Tunisie",
          "code": "TN",
          "createdAt": null,
          "updatedAt": null
      }
  
   */
    /**
   * @api {put} /Pays/:id PUT Pays
   * @apiName PUTPays
   * @apiPermission Admin
   * @apiGroup Pays
   *
   * @apiParam {Number} id         unique ID.
  
   * @apiParamExample {json} Request-Example:
       {
  
          "nom": "Tunisie",
          "code": "TN"
      },
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
   
          "id": 1,
          "nom": "Tunisie",
          "code": "TN",
    
      
          "updatedAt": "2018-09-17T09:40:04.818Z",
          "createdAt": "2018-09-17T09:40:04.818Z"
      }
  
  
   */
    /**
     * @api {delete} /Pays/:id Delete Pays
     * @apiName DELETEPays
     * @apiPermission Admin
     * @apiGroup Pays
     * @apiParam {Number} id id Pays
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //hotel
    //hotels
    /**
     * @apiDefine HotelNotFoundError
     * @apiError  HotelNotFound  <code>Hotel</code> pas trouvé.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "hôtel pas trouvé"
     *     }
     */
    /**
   * @api {get} /hotels/  ALL Hotels
   * @apiName GetHotels
   * @apiPermission Admin
   * @apiGroup  Hotels
   *
  
   *
   * @apiSuccess {Number} idhotel unique ID .
   * @apiSuccess {Number} idville unique ID ville .
   * @apiSuccess {String} login .
   * @apiSuccess {String} nom  (obligatoire).
   * @apiSuccess {String} tva .
   * @apiSuccess {String} adresse .
   * @apiSuccess {String} info information supplémentaire.
   * @apiSuccess {String} lien url hôtel .
   * @apiSuccess {String} email hôtel (obligatoire).
   * @apiSuccess {String} email2 hôtel .
   * @apiSuccess {String} fax hôtel .
   * @apiSuccess {String} tel hôtel .
   * @apiSuccess {String} logiciel utilisée par l'hôtel .
   * @apiSuccess {String} map hôtel .
   * @apiSuccess {String} map hôtel .
   * @apiSuccess {String} choix_email  Resa/Gmail .
   * @apiSuccess {Number} enf_min  age enfant min 0/12.
   * @apiSuccess {Number} enf_max  age enfant max 0/16.
   * @apiSuccess {Number} marge  marge par hotel.
   * @apiSuccess {Number} operation  operation de marge 0/1.Amenagement
   * @apiSuccess {Number} pourcent  pourcent de marge 0/1.
    * @apiSuccess {Number} marge_c  marge b2c par hotel .
   * @apiSuccess {Number} operation_c  operation b2c de marge 0/1.
   * @apiSuccess {Number} pourcent_c  pourcent de marge b2c 0/1.
   * @apiSuccess {Number} etoile  nbre d'étoile 0/1.
   * @apiSuccess {Number} calcul  type de calcul 0/1.
   * @apiSuccess {Number} stop  stop vente 0/1.
   * @apiSuccess {Number} celebate  celebataire ou non 0/1.
   * @apiSuccess {Number} auto_voucher  envoi automatique email 0/1.
   * @apiSuccess {ville} ville  .
   * @apiSuccess {Number} act  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
      {
          "idhotel": 1,
          "idville": 26,
          "login": "",
          "nom": "One Resort Monastir",
          "tva": "",
          "enf_min": 3,
          "enf_max": 12,
          "adresse": "6000",
          "info": "Offre valable jusqu'au 31/03/2016.<br />\r\n\t\t\t\t\t\t\t\t\t\tAll inclusive.",
          "description": "",
          "lien": "monastir/hotel-one-resort.php",
          "marge": 0,
          "etoile": 4,
          "calcul": 1,
          "auto_voucher": 1,
          "operation": 0,
          "pourcent": 0,
          "email": "resa.onehotelsandresorts@planet.tn",
          "fax": "one-resort-monastir-tunisie-tasnime-voyages_p.jpg",
          "tel": "",
          "logiciel": "",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12950.982367280054!2d10.74791684814067!3d35.7570573606672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020cc3a292377d%3A0xe836c033fd369ebe!2sOne+Resort+Monastir!5e0!3m2!1sfr!2s!4v14579388",
          "act": 1,
          "stop": 0,
          "total_reservation": 73,
          "email2": "",
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "choix_email": 1,
          "celebate": 1,
          "ville": {
              "villeTitle": "Monastir",
              "villeId": 26
          }
      },
      
  ...
  ]
    * @apiUse  HotelNotFoundError
   */
    /**
   * @api {get} /hotel/:idhotel GET Hotel
   * @apiName GetHotel
   * @apiPermission Admin
   * @apiGroup  Hotels
   *
   * @apiParam {Number}  idhotel hotel unique ID.
   *
   * @apiSuccess {Number} idhotel unique ID .
   * @apiSuccess {Number} idville unique ID ville .
   * @apiSuccess {String} login .
   * @apiSuccess {String} nom  (obligatoire).
   * @apiSuccess {String} tva .
   * @apiSuccess {String} adresse .
   * @apiSuccess {String} info information supplémentaire.
   * @apiSuccess {String} lien url hôtel .
   * @apiSuccess {String} email hôtel (obligatoire).
   * @apiSuccess {String} email2 hôtel .
   * @apiSuccess {String} fax hôtel .
   * @apiSuccess {String} tel hôtel .
   * @apiSuccess {String} logiciel utilisée par l'hôtel .
   * @apiSuccess {String} map hôtel .
   * @apiSuccess {String} map hôtel .
   * @apiSuccess {String} choix_email  Resa/Gmail .
   * @apiSuccess {Number} enf_min  age enfant min 0/12.
   * @apiSuccess {Number} enf_max  age enfant max 0/16.
   * @apiSuccess {Number} marge  marge par hotel.
   * @apiSuccess {Number} operation  operation de marge 0/1.
   * @apiSuccess {Number} pourcent  pourcent de marge 0/1.
    * @apiSuccess {Number} marge_c  marge b2c par hotel .
   * @apiSuccess {Number} operation_c  operation b2c de marge 0/1.
   * @apiSuccess {Number} pourcent_c  pourcent de marge b2c 0/1.
   * @apiSuccess {Number} etoile  nbre d'étoile 0/1.
   * @apiSuccess {Number} calcul  type de calcul 0/1.
   * @apiSuccess {Number} stop  stop vente 0/1.
   * @apiSuccess {Number} celebate  celebataire ou non 0/1.
   * @apiSuccess {Number} auto_voucher  envoi automatique email 0/1.
   * @apiSuccess {ville} ville  .
   * @apiSuccess {Number} act  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
      "idhotel": 3,
      "idville": 1,
      "login": "radisson",
      "nom": " Radisson Blu Hammamet",
      "tva": "",
      "enf_min": 2,
      "enf_max": 12,
      "adresse": "",
      "info": "",
      "description": "",
      "lien": "hammamet/hotel-radisson-blu.php",
      "marge": 0,
      "etoile": 5,
      "calcul": 0,
      "auto_voucher": 1,
      "operation": 0,
      "pourcent": 0,
      "email": "nada.hammamet@radissonblu.com",
      "fax": "",
      "tel": "",
      "logiciel": "",
      "map": "",
      "act": 1,
      "stop": 0,
      "total_reservation": 0,
      "email2": "",
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "choix_email": 0,
      "celebate": 0,
      "ville": {
          "villeTitle": "Hammamet",
          "villeId": 1
      },
      "imgProfil": [
          {
              "hotelImgId": 8,
              "hotelImg": "radisson-blu-p.jpg",
              "hotelId": 3,
              "imgProfil": 1,
              "imgChambre": 0,
              "placement": 0,
              "createdAt": null,
              "updatedAt": null
          }
      ]
  }
   *
   * @apiUse  HotelNotFoundError
   
   
   */
    /** @api {get} /hotels/  GET ALL Hotels
   * @apiName GetHotels
   * @apiPermission Admin
   * @apiGroup  Hotels
   *
  
   *
   * @apiSuccess {Number} idhotel unique ID .
   * @apiSuccess {Number} idville unique ID ville .
   * @apiSuccess {String} login .
   * @apiSuccess {String} nom  (obligatoire).
   * @apiSuccess {String} tva .
   * @apiSuccess {String} adresse .
   * @apiSuccess {String} info information supplémentaire.
   * @apiSuccess {String} lien url hôtel .
   * @apiSuccess {String} email hôtel (obligatoire).
   * @apiSuccess {String} email2 hôtel .
   * @apiSuccess {String} fax hôtel .
   * @apiSuccess {String} tel hôtel .
   * @apiSuccess {String} logiciel utilisée par l'hôtel .
   * @apiSuccess {String} map hôtel .
   * @apiSuccess {String} map hôtel .
   * @apiSuccess {String} choix_email  Resa/Gmail .
   * @apiSuccess {Number} enf_min  age enfant min 0/12.
   * @apiSuccess {Number} enf_max  age enfant max 0/16.
   * @apiSuccess {Number} marge  marge par hotel.
   * @apiSuccess {Number} operation  operation de marge 0/1.Amenagement
   * @apiSuccess {Number} pourcent  pourcent de marge 0/1.
    * @apiSuccess {Number} marge_c  marge b2c par hotel .
   * @apiSuccess {Number} operation_c  operation b2c de marge 0/1.
   * @apiSuccess {Number} pourcent_c  pourcent de marge b2c 0/1.
   * @apiSuccess {Number} etoile  nbre d'étoile 0/1.
   * @apiSuccess {Number} calcul  type de calcul 0/1.
   * @apiSuccess {Number} stop  stop vente 0/1.
   * @apiSuccess {Number} celebate  celebataire ou non 0/1.
   * @apiSuccess {Number} auto_voucher  envoi automatique email 0/1.
   * @apiSuccess {ville} ville  .
   * @apiSuccess {Number} act  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
  {
      "idhotel": 3,
      "idville": 1,
      "login": "radisson",
      "nom": " Radisson Blu Hammamet",
      "tva": "",
      "enf_min": 2,
      "enf_max": 12,
      "adresse": "",
      "info": "",
      "description": "",
      "lien": "hammamet/hotel-radisson-blu.php",
      "marge": 0,
      "etoile": 5,
      "calcul": 0,
      "auto_voucher": 1,
      "operation": 0,
      "pourcent": 0,
      "email": "nada.hammamet@radissonblu.com",
      "fax": "",
      "tel": "",
      "logiciel": "",
      "map": "",
      "act": 1,
      "stop": 0,
      "total_reservation": 0,
      "email2": "",
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "choix_email": 0,
      "celebate": 0,
      "ville": {
          "villeTitle": "Hammamet",
          "villeId": 1
      },
      "imgProfil": [
          {
              "hotelImgId": 8,
              "hotelImg": "radisson-blu-p.jpg",
              "hotelId": 3,
              "imgProfil": 1,
              "imgChambre": 0,
              "placement": 0,
              "createdAt": null,
              "updatedAt": null
          }
      ]
  },
      
  ...
  ]
    * @apiUse  HotelNotFoundError
   */
    /**
   * @api {post} /hotel/ POST hotel
   * @apiName POSTHotel
   * @apiPermission Admin
   * @apiGroup Hotels
   *
  
  
   * @apiParamExample {json} Request-Example:
         { "idville": 26,
          "login": "",
          "nom": "testr",
          "tva": "",
          "enf_min": 3,
          "enf_max": 12,
          "adresse": "6000",
          "info": "Offre valable jusqu'au 31/03/2016.<br />\r\n\t\t\t\t\t\t\t\t\t\tAll inclusive.",
          "description": "",
          "lien": "monastir/hotel-one-resort.php",
          "marge": 0,
          "etoile": 4,
          "calcul": 1,
          "auto_voucher": 1,
          "operation": 0,
          "pourcent": 0,
          "email": "resa.onehotelsandresorts@planet.tn",
          "fax": "one-resort-monastir-tunisie-tasnime-voyages_p.jpg",
          "tel": "",
          "logiciel": "",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12950.982367280054!2d10.74791684814067!3d35.7570573606672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020cc3a292377d%3A0xe836c033fd369ebe!2sOne+Resort+Monastir!5e0!3m2!1sfr!2s!4v14579388",
          "act": 1,
          "stop": 0,
          "total_reservation": 73,
          "email2": "",
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "choix_email": 1,
          "celebate": 1}
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   {
      "idhotel": 333,
      "idville": 26,
      "login": "",
      "nom": "testr",
      "tva": "",
      "enf_min": 3,
      "enf_max": 12,
      "adresse": "6000",
      "info": "Offre valable jusqu'au 31/03/2016.<br />\r\n\t\t\t\t\t\t\t\t\t\tAll inclusive.",
      "description": "",
      "lien": "monastir/hotel-one-resort.php",
      "marge": 0,
      "etoile": 4,
      "calcul": 1,
      "auto_voucher": 1,
      "operation": 0,
      "pourcent": 0,
      "email": "resa.onehotelsandresorts@planet.tn",
      "fax": "one-resort-monastir-tunisie-tasnime-voyages_p.jpg",
      "tel": "",
      "logiciel": "",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12950.982367280054!2d10.74791684814067!3d35.7570573606672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020cc3a292377d%3A0xe836c033fd369ebe!2sOne+Resort+Monastir!5e0!3m2!1sfr!2s!4v14579388",
      "act": 1,
      "stop": 0,
      "total_reservation": 73,
      "email2": "",
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "choix_email": 1,
     }
  
   */
    /**
   * @api {put} /hotel/:idhotel PUT Hotel
   * @apiName PUTHotel
   * @apiPermission Admin
   * @apiGroup Hotels
   *
   * @apiParam {Number} idhotel         unique ID.
  
   * @apiParamExample {json} Request-Example:
   {
      "idhotel": 333,
      "idville": 26,
      "login": "",
      "nom": "testr",
      "tva": "",
      "enf_min": 3,
      "enf_max": 12,
      "adresse": "6000",
      "info": "Offre valable jusqu'au 31/03/2016.<br />\r\n\t\t\t\t\t\t\t\t\t\tAll inclusive.",
      "description": "",
      "lien": "monastir/hotel-one-resort.php",
      "marge": 0,
      "etoile": 4,
      "calcul": 1,
      "auto_voucher": 1,
      "operation": 0,
      "pourcent": 0,
      "email": "resa.onehotelsandresorts@planet.tn",
      "fax": "one-resort-monastir-tunisie-tasnime-voyages_p.jpg",
      "tel": "",
      "logiciel": "",
      "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12950.982367280054!2d10.74791684814067!3d35.7570573606672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020cc3a292377d%3A0xe836c033fd369ebe!2sOne+Resort+Monastir!5e0!3m2!1sfr!2s!4v14579388",
      "act": 1,
      "stop": 0,
      "total_reservation": 73,
      "email2": "",
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "choix_email": 1,
     }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
         { "idville": 26,
          "login": "",
          "nom": "testr",
          "tva": "",
          "enf_min": 3,
          "enf_max": 12,
          "adresse": "6000",
          "info": "Offre valable jusqu'au 31/03/2016.<br />\r\n\t\t\t\t\t\t\t\t\t\tAll inclusive.",
          "description": "",
          "lien": "monastir/hotel-one-resort.php",
          "marge": 0,
          "etoile": 4,
          "calcul": 1,
          "auto_voucher": 1,
          "operation": 0,
          "pourcent": 0,
          "email": "resa.onehotelsandresorts@planet.tn",
          "fax": "one-resort-monastir-tunisie-tasnime-voyages_p.jpg",
          "tel": "",
          "logiciel": "",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12950.982367280054!2d10.74791684814067!3d35.7570573606672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020cc3a292377d%3A0xe836c033fd369ebe!2sOne+Resort+Monastir!5e0!3m2!1sfr!2s!4v14579388",
          "act": 1,
          "stop": 0,
          "total_reservation": 73,
          "email2": "",
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "choix_email": 1,
          "celebate": 1}
  
   */
    /**
   * @api {put} /hotelpwd/:idhotel PUT Mot de passe Hotel
   * @apiName PUTHotelPWD
   * @apiPermission Admin
   * @apiGroup Hotels
   *
   * @apiParam {Number} idhotel         unique ID.
   * @apiParam {String} p         mot de passe crypté sha512.
  
   * @apiParamExample {json} Request-Example:
  {
  "p":"121302870f4819be03210b408f18dfb71f191b52480976338bf7b120bdb2bbaa46d096b529ec0cb1ddd45e7b09f6fc0ed03fabecd089cee94c091acc2ef7f2bc"
  }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "success": true
  }
   */
    /**
     * @api {delete} /hotel/:idhotel Delete hotel
     * @apiGroup Hotels
     * @apiPermission Admin
     * @apiParam {Number} idhotel id hotel
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //amenagements
    /**
     * @apiDefine AmenagementNotFoundError
     * @apiError  AmenagementNotFound  <code>Amenagement</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "Amenagement pas trouvée"
     *     }
     */
    /**
   * @api {get} /amenagements/:hotelId  ALL Amenagements par hôtel
   * @apiName GetAmenagements
   * @apiPermission Admin
   * @apiGroup  Amenagements
   *
   * @apiParam {Number} hotelId hotel unique ID.
   *
   * @apiSuccess {Number} amId unique ID .
   * @apiSuccess {Number} hotelId unique ID hotel .
   * @apiSuccess {String} amenagement .
   * @apiSuccess {Number} act  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
      {
      "amId": 1,
      "hotelId": 1,
      "act": 0,
      "amenagement": "Sèche-cheveux",
      "createdAt": null,
      "updatedAt": null
  },
      
  ...
  ]
    * @apiUse  AmenagementNotFoundError
   */
    /**
   * @api {get} /amenagement/:amId GET Amenagement
   * @apiName GetAmenagement
   * @apiPermission Admin
   * @apiGroup  Amenagements
   *
   * @apiParam {Number} amId hotelId hotel unique ID.
   *
   * @apiSuccess {Number} amId unique ID.
   * @apiSuccess {Number} hotelId unique ID hotel .
   * @apiSuccess {String} amenagement .
   * @apiSuccess {Number} act  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
    {
      "amId": 1,
      "hotelId": 1,
      "act": 0,
      "amenagement": "Sèche-cheveux",
      "createdAt": null,
      "updatedAt": null
  }
   *
   * @apiUse  AmenagementNotFoundError
   */
    /**
   * @api {post} /amenagement/ POST Amenagement
   * @apiName POSTAmenagement
   * @apiPermission Admin
   * @apiGroup Amenagements
   *
  
  
   * @apiParamExample {json} Request-Example:
   *    {
   *   "hotelId":2, authorize(),
   *   "act": 2,
   *   "amenagement authorize(),eveux"
  }
  
   * @apiSuccessExa authorize(),-Response:
   *     HTTP/1.1 2 authorize(),
  {
      "amId": 83,
      "hotelId": 2, authorize(),
      "act": 2,
      "amenagement": "Sèche-cheveux",
      "updatedAt": "2018-09-17T06:25:13.057Z",
      "createdAt": "2018-09-17T06:25:13.057Z"
  }
  */
    /**
   * @api {put} /amenagement/:amId PUT Amenagement
   * @apiName PUTAmenagement
   * @apiPermission Admin
   * @apiGroup Amenagements
   *
   * @apiParam {Number} amId         unique ID.
  
   * @apiParamExample {json} Request-Example:
  {
  
      "hotelId": 2,
      "act": 2,
      "amenagement": "Sèche-cheveux"
  
  }
  
  
  
   */
    /**
     * @api {delete} /amenagement/:amId Delete Amenagement
     * @apiGroup  Amenagements
     * @apiPermission Admin
     * @apiParam {Number} amId id amenagement
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    /**
     * @apiDefine RoomimgNotFoundError
     * @apiError  RoomimgNotFound  <code>roomimg</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "roomimg pas trouvée"
     *     }
     */
    /**
   * @api {get} /roomimgs/:hotelId  ALL Images chambres par hôtel
   * @apiName GetRoomImages
   * @apiPermission Admin
   * @apiGroup  Images chambre
   *
   * @apiParam {Number} hotelId hotel unique ID.
   *
   * @apiSuccess {Number} idroomimg unique ID image.
   * @apiSuccess {Number} idhotel unique ID hotel .
   * @apiSuccess {Number} idroom unique ID room .
   * @apiSuccess {String} img image.
   * @apiSuccess {Number} active  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
      {
          "idroomimg": 3,
          "idhotel": 1,
          "idroom": 2,
          "img": "one-resort-monastir-double.jpg",
          "active": 1,
          "createdAt": null,
          "updatedAt": null
      },
      {
          "idroomimg": 4,
          "idhotel": 1,
          "idroom": 3,
          "img": "one-resort-monastir-triple.jpg",
          "active": 1,
          "createdAt": null,
          "updatedAt": null
      },
  ...
  ]
  
   */
    /**
   * @api {get} /roomimg/:idroomimg GET Image chambre
   * @apiName GetRoomImage
   * @apiPermission Admin
   * @apiGroup  Images chambre
   *
   * @apiParam {Number} idroomimg room unique ID.
   *
   * @apiSuccess {Number} idroomimg unique ID image.
   * @apiSuccess {Number} idhotel unique ID hotel .
   * @apiSuccess {Number} idroom unique ID room .
   * @apiSuccess {String} img image.
   * @apiSuccess {Number} active  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
      {
          "idroomimg": 3,
          "idhotel": 1,
          "idroom": 2,
          "img": "one-resort-monastir-double.jpg",
          "active": 1,
          "createdAt": null,
          "updatedAt": null
      }
  
   */
    /**
   * @api {post} /roomimg/ POST Image chambre
   * @apiName POSTTRoomImage
   * @apiPermission Admin
   * @apiGroup Images chambre
   *
  
   @apiparam {File} FileImg image.
   * @apiParamExample {json} Request-Example:
   *     {
   *       "img": "test.jpg",
   *       "idhotel": 1,
   *       "idroom": 2,
   *       "active": 1,
        
   *     }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
          "idroomimg": 3,
          "idhotel": 1,
          "idroom": 2,
          "img": "one-resort-monastir-double.jpg",
          "active": 1,
          "createdAt": null,
          "updatedAt": null
      }
  
   */
    /**
   * @api {put} /roomimg/:idroomimg PUT Image chambre
   * @apiName PUTRoomImage
   * @apiPermission Admin
   * @apiGroup Images chambre
   *
   * @apiParam {Number} idroomimg          hotel unique ID.
   @apiparam {File} FileImg image.
   * @apiParamExample {json} Request-Example:
   *     {
   *       "img": "test.jpg",
   *       "idhotel": 21,
   *       "idroom": 2,
   *       "active": 1,
        
   *     }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  * {
          "idroomimg": 3,
          "idhotel": 1,
          "idroom": 2,
          "img": "one-resort-monastir-double.jpg",
          "active": 1,
          "createdAt": null,
          "updatedAt": null
      }
  
   */
    /**
     * @api {delete} /roomimg/:idroomimg Delete roomimg
     * @apiGroup Images chambre
     * @apiPermission Admin
     * @apiParam {Number} idroomimg id idroomimg
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    /**
  
   */
    /**
   * @api {get} /hotelimgs/:hotelId  ALL Images hotels par hôtel
   * @apiName GetHotelImages
   * @apiPermission Admin
   * @apiGroup  Images hotel
   *
   * @apiParam {Number} hotelId hotel unique ID.
   *
   * @apiSuccess {Number} hotelImgId unique ID image.
   * @apiSuccess {Number} hotelId unique ID hotel .
   * @apiSuccess {Number} imgProfil 0/1 .
   * @apiSuccess {Number} imgChambre 0/1 .
   * @apiSuccess {Number} placement  .
  
   * @apiSuccess {String} hotelImg image.
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "hotelImgId": 2,
          "hotelImg": "laico_hammamet.jpg",
          "hotelId": 2,
          "imgProfil": 0,
          "imgChambre": 1,
          "placement": 0,
          "createdAt": null,
          "updatedAt": null
      },
      {
          "hotelImgId": 5,
          "hotelImg": "laico-hammamet-hotel.jpg",
          "hotelId": 2,
          "imgProfil": 0,
          "imgChambre": 1,
          "placement": 0,
          "createdAt": null,
          "updatedAt": null
      },
    ...
  ]
  
   */
    /**
  
  * @api {get} /hotelimgs/profil/:hotelId  imgProfil hotels par hôtel
  * @apiName GetHotelImagesProfil
  * @apiPermission Admin
  * @apiGroup  Images hotel
  *
  * @apiParam {Number} hotelId hotel unique ID.
  *
  * @apiSuccess {Number} hotelImgId unique ID image.
  * @apiSuccess {Number} hotelId unique ID hotel .
  * @apiSuccess {Number} imgProfil 0/1 .
  * @apiSuccess {Number} imgChambre 0/1 .
  * @apiSuccess {Number} placement  .
  
  * @apiSuccess {String} hotelImg image.
  
  
   * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  [
     {
         "hotelImgId": 2,
         "hotelImg": "laico_hammamet.jpg",
         "hotelId": 2,
         "imgProfil": 0,
         "imgChambre": 1,
         "placement": 0,
         "createdAt": null,
         "updatedAt": null
     }
  ]
  
  */
    /**
   * @api {get} /hotelimg/:hotelImgId GET Image hotel
   * @apiName GetHotelImage
   * @apiPermission Admin
   * @apiGroup  Images hotel
   *
   * @apiParam {Number} idhotelimg room unique ID.
   *
  
   * @apiSuccess {Number} hotelId unique ID hotel .
   * @apiSuccess {Number} imgProfil 0/1 .
   * @apiSuccess {Number} imgChambre 0/1 .
   * @apiSuccess {Number} placement  .
  
   * @apiSuccess {String} hotelImg image.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
      {
          "hotelImgId": 3,
          "hotelImg": "laico_hammamet.jpg",
          "hotelId": 2,
          "imgProfil": 0,
          "imgChambre": 1,
          "placement": 0,
          "createdAt": null,
          "updatedAt": null
      }
   *
  =
   */
    /**
   * @api {post} /hotelimg/ POST Image hotel
   * @apiName POSTTHotelImage
   * @apiPermission Admin
   * @apiGroup Images hotel
   *
  
   @apiparam {File} fileImg image.
   * @apiParamExample {json} Request-Example:
   *     {
          "hotelImg": "laico_hammamet.jpg",
          "hotelId": 2,
          "imgProfil": 0,
          "imgChambre": 1,
          "placement": 0,
        
   *     }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
          "hotelImgId": 3,
          "hotelImg": "laico_hammamet.jpg",
          "hotelId": 2,
          "imgProfil": 0,
          "imgChambre": 1,
          "placement": 0,
          "createdAt": null,
          "updatedAt": null
      }
  
   */
    /**
   * @api {put} /hotelimg/:hotelImgId PUT Image hotel
   * @apiName PUTHotelImage
   * @apiPermission Admin
   * @apiGroup Images hotel
   *
   * @apiParam {Number} hotelImgId          hotel unique ID.
   @apiparam {File} fileImg image.
   * @apiParamExample {json} Request-Example:
   *     {
    *        "hotelImg": "laico_hammamet.jpg",
    *        "hotelId": 2,
   *         "imgProfil": 0,
    *        "imgChambre": 1,
   *         "placement": 0,
        
   *     }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  * {
          "hotelImgId": 3,
          "idhotel": 1,
          "idroom": 2,
          "img": "one-resort-monastir-double.jpg",
          "active": 1,
          "createdAt": null,
          "updatedAt": null
      }
  
   */
    /**
     * @api {delete} /hotelimg/:hotelImgId Delete hotelimg
     * @apiGroup Images hotel
     * @apiPermission Admin
     * @apiParam {Number} hotelImgId id hotelimg
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //membres
    /**
     * @apiDefine MembreNotFoundError
     * @apiError  MembreNotFound  <code>Amenagament</code> pas trouvé.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "agence pas trouvé"
     *     }
     */
    /**
   * @api {get} /membres/:idagence  ALL membres par agence
   * @apiName GetMembres
   * @apiPermission Admin
   * @apiGroup Membres
   *
   * @apiParam {Number} idagence agence unique ID.
   *
   * @apiSuccess {Number} id unique ID .
   * @apiSuccess {Number} idagence unique ID agence .
   * @apiSuccess {String} login .
   * @apiSuccess {String} username .
   * @apiSuccess {String} email .
   * @apiSuccess {String} tel .
   * @apiSuccess {Number} admin  admin 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
      {
          "id": 6,
          "idagence": 1,
          "login": "tasnime",
          "username": "Tasnime Voyages & Tourisme",
          "email": "tasnime.voyages@gmail.com",
          "tel": "",
          "admin": 1
      },
      {
          "id": 8,
          "idagence": 1,
          "login": "walid",
          "username": "walid",
          "email": "direction@tasnimevoyages.com",
          "tel": "",
          "admin": 1
      },
  ...
  ]
    * @apiUse  MembreNotFoundError
   */
    /**
   * @api {get} /membres/:idagence  ALL membres par agence
   * @apiName GetMembres
   * @apiPermission Admin
   * @apiGroup Membres
   *
   * @apiParam {Number} idagence agence unique ID.
   *
   * @apiSuccess {Number} id unique ID .
   * @apiSuccess {Number} idagence unique ID agence .
   * @apiSuccess {String} login .
   * @apiSuccess {String} username .
   * @apiSuccess {String} email .
   * @apiSuccess {String} tel .
   * @apiSuccess {Number} admin  admin 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
      {
          "id": 6,
          "idagence": 1,
          "login": "tasnime",
          "username": "Tasnime Voyages & Tourisme",
          "email": "tasnime.voyages@gmail.com",
          "tel": "",
          "admin": 1
      },
      {
          "id": 8,
          "idagence": 1,
          "login": "walid",
          "username": "walid",
          "email": "direction@tasnimevoyages.com",
          "tel": "",
          "admin": 1
      },
  ...
  ]
    * @apiUse  MembreNotFoundError
   */
    /**
   * @api {get} /membre/:id GET Membre
   * @apiName GetMembre
   * @apiPermission Admin
   * @apiGroup Membres
   *
   * @apiParam {Number} id idagence agence unique ID.
   *
   * @apiSuccess {Number} id unique ID .
   * @apiSuccess {Number} idagence unique ID agence .
   * @apiSuccess {String} login .
   * @apiSuccess {String} username .
   * @apiSuccess {String} email .
   * @apiSuccess {String} tel .
   * @apiSuccess {Number} admin  admin 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
    {
          "id": 6,
          "idagence": 1,
          "login": "tasnime",
          "username": "Tasnime Voyages & Tourisme",
          "email": "tasnime.voyages@gmail.com",
          "tel": "",
          "admin": 1
      }
   *
   * @apiUse  MembreNotFoundError
   */
    /**
   * @api {post} /membre/ POST Membre
   * @apiName POSTMembre
   * @apiPermission Admin
   * @apiGroup Membres
   *
  
  
   * @apiParamExample {json} Request-Example:
    {
  
          "idagence": 1,
          "login": "tasnime",
          "username": "Tasnime Voyages & Tourisme",
          "email": "tasnime.voyages@gmail.com",
          "tel": "",
          "admin": 1
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "id": 83,
      "idagence": 2,
      "act": 2,
      "agence": "Sèche-cheveux",
      "updatedAt": "2018-09-17T06:25:13.057Z",
      "createdAt": "2018-09-17T06:25:13.057Z"
  }
   */
    /**
   * @api {put} /membre/:id PUT Membre
   * @apiName PUTMembre
   * @apiPermission Admin
   * @apiGroup Membres
   *
   * @apiParam {Number} id         unique ID.
  
   * @apiParamExample {json} Request-Example:
   {
  
          "idagence": 1,
          "login": "tasnime",
          "username": "Tasnime Voyages & Tourisme",
          "email": "tasnime.voyages@gmail.com",
          "tel": "",
          "admin": 1
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
   {
          "id": 6,
          "idagence": 1,
          "login": "tasnime",
          "username": "Tasnime Voyages & Tourisme",
          "email": "tasnime.voyages@gmail.com",
          "tel": "",
          "admin": 1
      }
  
  
  */
    /**
   * @api {put} /membrepwd/:id PUT Mot de passe Membre
   * @apiName PUTMembrePWD
   * @apiPermission Admin
   * @apiGroup Membres
   *
   * @apiParam {Number} id         unique ID.
   * @apiBody {String} p         mot de passe crypté sha512.
  
   * @apiParamExample {json} Request-Example:
  {
  "p":"121302870f4819be03210b408f18dfb71f191b52480976338bf7b120bdb2bbaa46d096b529ec0cb1ddd45e7b09f6fc0ed03fabecd089cee94c091acc2ef7f2bc"
  }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "success": true
  }
   */
    /**
   * @api {put} /profilpwd/:id PUT Mot de passe Profil
   * @apiName PUTProfilPWD
   * @apiPermission User
   * @apiGroup Membres
   *
   * @apiParam {Number} id         unique ID.
   * @apiBody {String} p         mot de passe crypté sha512.
   * @apiBody {String} p_old         mot de passe ancien crypté sha512.
  
   * @apiParamExample {json} Request-Example:
  {
  "p":"121302870f4819be03210b408f18dfb71f191b52480976338bf7b120bdb2bbaa46d096b529ec0cb1ddd45e7b09f6fc0ed03fabecd089cee94c091acc2ef7f2bc"
  "p_old":"7455555819be03210b408f18dfb71f191b52480976338bf7b120bdb2bbaa46d096b529ec0cb1ddd45e7b09f6fc0ed03fabecd089cee94c091acc2ef7f2bc"
  }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "success": true
  }
   */
    /**
     * @api {delete} /membre/:id Delete membre
     * @apiGroup Membres
     * @apiParam {Number} id id membres
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //Marge Hotel
    /**
     * @apiDefine marge_hotelNotFoundError
     * @apiError  marge_hotelNotFound  <code>marge</code> pas trouvé.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "agence pas trouvé"
     *     }
     */
    /**
   * @api {get} /marge_hotels/:idagence  ALL Marge Hotel par agence
   * @apiName GetMarges Hotel
   * @apiPermission Admin
   * @apiGroup Marge Hotel
   *
   * @apiParam {Number} idagence agence unique ID.
   *
   * @apiSuccess {Number} id unique ID .
   * @apiSuccess {Number} idagence unique ID agence .
   * @apiSuccess {Number} idhotel unique ID hotel .
   * @apiSuccess {Number} marge hotel .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent 0/1 .
  
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
     
      {
          "id": 1,
          "idhotel": 36,
          "idagence": 200,
          "marge": 5,
          "operation": 1,
          "pourcent": 0,
          "createdAt": null,
          "updatedAt": null
      }
  ...
  ]
    * @apiUse  marge_hotelNotFoundError
   */
    /**
   * @api {get} /marge_hotel/:id GET marge_hotel
   * @apiName Getmarge_hotel
   * @apiPermission Admin
   * @apiGroup Marge Hotel
   *
   * @apiParam {Number} id idmarge unique ID.
   *
   * @apiSuccess {Number} id unique ID .
   * @apiSuccess {Number} idagence unique ID agence .
   * @apiSuccess {Number} idhotel unique ID hotel .
   * @apiSuccess {Number} marge hotel .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent 0/1 .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
    {
          "id": 6,
          "idagence": 1,
          "login": "tasnime",
          "username": "Tasnime Voyages & Tourisme",
          "email": "tasnime.voyages@gmail.com",
          "tel": "",
          "admin": 1
      }
   *
   * @apiUse  marge_hotelNotFoundError
   */
    /**
   * @api {post} /marge_hotel/ POST marge_hotel
   * @apiName POSTmarge_hotel
   * @apiPermission Admin
   * @apiGroup Marge Hotel
   *
  
  
   * @apiParamExample {json} Request-Example:
   {
         
          "idhotel": 36,
          "idagence": 1,
          "marge": 5,
          "operation": 1,
          "pourcent": 0
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
      {
          "id": 1,
          "idhotel": 36,
          "idagence": 200,
          "marge": 5,
          "operation": 1,
          "pourcent": 0,
          "createdAt": null,
          "updatedAt": null
      }
   */
    /**
   * @api {put} /marge_hotel/:id PUT marge_hotel
   * @apiName PUTmarge_hotel
   * @apiPermission Admin
   * @apiGroup Marge Hotel
   *
   * @apiParam {Number} id         unique ID.
  
   * @apiParamExample {json} Request-Example:
   {
         
          "idhotel": 36,
          "idagence": 1,
          "marge": 5,
          "operation": 1,
          "pourcent": 0
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  
      {
          "id": 1,
          "idhotel": 36,
          "idagence": 200,
          "marge": 5,
          "operation": 1,
          "pourcent": 0,
          "createdAt": null,
          "updatedAt": null
      }
  
  */
    /**
     * @api {delete} /marge_hotel/:id Delete marge_hotel
     * @apiGroup Marge Hotel
     * @apiPermission Admin
     * @apiParam {Number} id  id marge_hotel
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //room
    /**
     * @apiDefine roomNotFoundError
     * @apiError  roomNotFound  <code>Chambre</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "Chambre pas trouvée"
     *     }
     */
    /**
   * @api {get} /room/  ALL Chambre
   * @apiName Getrooms
   * @apiPermission Admin
   * @apiGroup  Chambre
   *
  
   *
  
   * @apiSuccess {Number} roomid unique ID Chambre .
   * @apiSuccess {String} roomname  .
   * @apiSuccess {String} abr  .
   * @apiSuccess {Number} act 0/1.
   * @apiSuccess {Number} min_pers .
   * @apiSuccess {Number} max_pers .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "roomid": 1,
          "act": 1,
          "roomname": "Chambre Single",
          "min_pers": 1,
          "max_pers": 1,
          "abr": "SINGLE",
          "createdAt": null,
          "updatedAt": null
      },
      {
          "roomid": 2,
          "act": 1,
          "roomname": "Chambre Double",
          "min_pers": 2,
          "max_pers": 2,
          "abr": "DOUBLE",
          "createdAt": null,
          "updatedAt": null
      },
      {
          "roomid": 3,
          "act": 1,
          "roomname": "Chambre Triple",
          "min_pers": 3,
          "max_pers": 3,
          "abr": "TRIPLE",
          "createdAt": null,
          "updatedAt": null
      }
      ]
    * @apiUse  roomNotFoundError
   */
    /**
   * @api {get} /room/:id GET Chambre
   * @apiName Getroom
   * @apiPermission Admin
   * @apiGroup  Chambre
   *
   * @apiSuccess {Number} roomid unique ID Chambre .
   * @apiSuccess {String} roomname  .
   * @apiSuccess {String} abr  .
   * @apiSuccess {Number} act 0/1.
   * @apiSuccess {Number} min_pers .
   * @apiSuccess {Number} max_pers .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
   {
      "roomid": 58,
      "act": "1",
      "roomname": "test",
      "min_pers": "1",
      "max_pers": "4",
      "abr": "rrxw",
      "createdAt": "2018-10-01T12:43:36.000Z",
      "updatedAt": "2018-10-01T12:45:31.467Z"
  }
   *
   * @apiUse  roomNotFoundError
   */
    /**
   * @api {post} /room/ POST Chambre
   * @apiName POSTroom
   * @apiPermission Admin
   * @apiGroup  Chambre
   *
  
  
   * @apiParamExample {json} Request-Example:
      {
  
      "act": "1",
      "roomname": "test",
      "min_pers": "1",
      "max_pers": "4",
      "abr": "rrxw"
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
      "roomid": 58,
      "act": "1",
      "roomname": "test",
      "min_pers": "1",
      "max_pers": "4",
      "abr": "rrxw",
      "createdAt": "2018-10-01T12:43:36.000Z",
      "updatedAt": "2018-10-01T12:45:31.467Z"
  }
   */
    /**
   * @api {put} /room/:id PUT Chambre
   * @apiName PUTroom
   * @apiPermission Admin
   * @apiGroup  Chambre
   *
   * @apiParam {Number} roomid        unique ID.
  
   * @apiParamExample {json} Request-Example:
    {
    "act": "1",
      "roomname": "test",
      "min_pers": "1",
      "max_pers": "4",
      "abr": "rrxw"
      }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  {
      "roomid": 58,
      "act": "1",
      "roomname": "test",
      "min_pers": "1",
      "max_pers": "4",
      "abr": "rrxw",
      "createdAt": "2018-10-01T12:43:36.000Z",
      "updatedAt": "2018-10-01T12:45:31.467Z"
  }
  
  
   */
    /**
     * @api {delete} /room/:roomid Delete Chambre
     * @apiName DELETEroom
     * @apiPermission Admin
     * @apiGroup  Chambre
     * @apiParam {Number} roomid id Chambre
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //Encaissement
    /**
     * @apiDefine encaissementNotFoundError
     * @apiError  encaissementNotFound  <code>marge</code> pas trouvé.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "agence pas trouvé"
     *     }
     */
    /**
   * @api {get} /encaissements/:agence  ALL Encaissements par agence
   * @apiName GetEncaissements
   * @apiPermission Admin
   * @apiGroup Encaissements
   *
   * @apiParam {Number} agence agence unique ID.
   *
   * @apiSuccess {Number} id unique ID .
   * @apiSuccess {Number} agence unique ID agence .
   * @apiSuccess {Number} idhotel unique ID hotel .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent 0/1 .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   [
      
     {
          "id": 2,
          "agence": 1,
          "valeur": 30000,
          "date": "2016-07-12T10:25:06.000Z",
          "createdAt": null,
          "updatedAt": null
      }
  ...
  ]
    * @apiUse  encaissementNotFoundError
   */
    /**
   * @api {get} /encaissement/:id GET encaissement
   * @apiName Getencaissement
   * @apiPermission Admin
   * @apiGroup Encaissements
   *
   * @apiParam {Number} id agence agence unique ID.
   *
   * @apiSuccess {Number} id unique ID .
   * @apiSuccess {Number} agence unique ID agence .
   * @apiSuccess {Number} idhotel unique ID hotel .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent 0/1 .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
   {
          "id": 2,
          "agence": 1,
          "valeur": 30000,
          "date": "2016-07-12T10:25:06.000Z",
          "createdAt": null,
          "updatedAt": null
      }
   *
   * @apiUse  encaissementNotFoundError
   */
    /**
   * @api {post} /encaissement/ POST encaissement
   * @apiName POSTencaissement
   * @apiPermission Admin
   * @apiGroup Encaissements
   *
  
  
   * @apiParamExample {json} Request-Example:
   {
        
          "agence": 1,
          "valeur": 30000,
          "date": "2016-07-12T10:25:06.000Z",
          "createdAt": null,
          "updatedAt": null
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
   {
          "id": 2,
          "agence": 1,
          "valeur": 30000,
          "date": "2016-07-12T10:25:06.000Z",
          "createdAt": null,
          "updatedAt": null
      }
   */
    /**
   * @api {put} /encaissement/:id PUT encaissement
   * @apiName PUTencaissement
   * @apiPermission Admin
   * @apiGroup Encaissements
   *
   * @apiParam {Number} id         unique ID.
  
   * @apiParamExample {json} Request-Example:
   {
    
          "agence": 1,
          "valeur": 30000,
          "date": "2016-07-12T10:25:06.000Z",
          "createdAt": null,
          "updatedAt": null
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  
   {
          "id": 2,
          "agence": 1,
          "valeur": 30000,
          "date": "2016-07-12T10:25:06.000Z",
          "createdAt": null,
          "updatedAt": null
      }
  
  */
    /**
     * @api {delete} /encaissement/:id Delete encaissement
     * @apiGroup Encaissements
     * @apiPermission Admin
     * @apiParam {Number} id id encaissement
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //new reservations
    /**
   * @api {get} /new_reservations/ Get ALL Nouveaux Reservations
   * @apiName GetNouveauxReservations
   * @apiPermission Admin
   * @apiGroup  reservations
   *
  
   
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
          {
          "reference": "2847738212",
          "chambre": "chambre1: Chambre Double  DP  2adultes 0enfants 0bebes\n chambre2: Chambre Triple  DP  3adultes 0enfants 0bebes\n ",
          "agence": "Cote d'or",
          "idagence": 226
      },
      ]
  
   */
    //booking_b2b
    /**
   * @api {get} /reservations/ Get ALL reservations
   * @apiName Getreservations
   * @apiPermission Admin
   * @apiGroup  reservations
   *
  
   *
  
   * @apiSuccess {Number} num unique num reservations .
   * @apiSuccess {String} reference  .
  
   * @apiSuccess {Datetime} date_cmd .
   * @apiSuccess {Number} idhotel .
   * @apiSuccess {Number} idperiod_debut .
   * @apiSuccess {Number} idagence .
   * @apiSuccess {String} client .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
   * @apiSuccess {Number} nbnuit .
   * @apiSuccess {Number} adult .
   * @apiSuccess {Number} enfant .
   * @apiSuccess {Number} nbcham .
   * @apiSuccess {Number} montant montant de la réservation
   * @apiSuccess {Number} montant_a montant d'achat la réservation
   * @apiSuccess {Strnig} devise .
   * @apiSuccess {Number} taux_devise .
   * @apiSuccess {String} chambre .
   * @apiSuccess {String} abr abreviation de la chambre
   * @apiSuccess {String} observation
   * @apiSuccess {String} type de réservation
   * @apiSuccess {String} email _envoyer 0/1
   * @apiSuccess {String} tel .
   * @apiSuccess {Number} montant_annul d'annulation .
   * @apiSuccess {Number} montant_noshow montant noshow  .
   * @apiSuccess {Number} frais_annulation   .
   * @apiSuccess {String} observation_annulation   .
   * @apiSuccess {Date} date_avant   .
   * @apiSuccess {Date} date_annulation   .
   * @apiSuccess {Date} date_annulation   .
   * @apiSuccess {Number} etat  0/1 .
   * @apiSuccess {String} status   .
   * @apiSuccess {Datetime} date_confirmation   .
   * @apiSuccess {Number} print 0/1   .
   * @apiSuccess {Number} active 0/1   .
   * @apiSuccess {String} rmqs  .
   * @apiSuccess {Datetime} date_envoyer_hotel  .
   * @apiSuccess {String} etat_hotel  .
   * @apiSuccess {String} vu_hotel  .
   * @apiSuccess {String} vu_hotel  .
   * @apiSuccess {String} ordid_md  id cyberesa
   * @apiSuccess {String} passws_md  mot de passe cyberesa
   * @apiSuccess {String} sigma  .
   * @apiSuccess {agence} agence  .
   * @apiSuccess {hotel} hotel  .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "num": 66,
          "reference": "7793235584",
          "date_cmd": "2017-02-21T15:40:34.000Z",
          "idhotel": 33,
          "idperiod_debut": 646,
          "idagence": 23,
          "client": "test test",
          "date_from": "2017-03-10",
          "date_to": "2017-03-13",
          "nbnuit": 3,
          "adult": 2,
          "enfant": 0,
          "nbcham": 1,
          "montant": 300,
          "montant_a": 270,
          "devise": "TND",
          "taux_devise": 1,
          "chambre": "chambre1: Chambre Double  LPD  2adults 0enfants 0bebes\n <br >",
          "abr": "DOUBLE",
          "observation": "Modification Réservation",
          "type": "",
          "email_envoyer": 1,
          "tel": "",
          "montant_annul": 300,
          "montant_noshow": 300,
          "frais_annulation": 300,
          "observation_annulation": "Frais Noshow à facturée",
          "date_avant": "2017-03-07",
          "date_annulation": "2017-06-07T15:37:13.000Z",
          "etat": 0,
          "status": "booking",
          "date_confirmation": null,
          "print": 1,
          "active": 1,
          "rmqs": "",
          "sigma": "",
          "date_envoyer_hotel": "2017-02-21T15:40:34.000Z",
          "etat_hotel": "",
          "vu_hotel": null,
          "ordid_md": null,
          "passws_md": null,
          "agence": {
              "username": "Just Easy Travel",
              "id": 23
          },
          "hotel": {
              "nom": "Marhaba Resort",
              "idhotel": 33
          }
      },
      ...
      ]
          //booking_b2b
  
          /**
   * @api {get} /reservations/annuler Get ALL reservations annuler
   * @apiName GetreservationsAnuller
   * @apiPermission Admin
   * @apiGroup  reservations
   *
  
   *
  
   * @apiSuccess {Number} num unique num reservations .
   * @apiSuccess {String} reference  .
  
   * @apiSuccess {Datetime} date_cmd .
   * @apiSuccess {Number} idhotel .
   * @apiSuccess {Number} idperiod_debut .
   * @apiSuccess {Number} idagence .
   * @apiSuccess {String} client .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
   * @apiSuccess {Number} nbnuit .
   * @apiSuccess {Number} adult .
   * @apiSuccess {Number} enfant .
   * @apiSuccess {Number} nbcham .
   * @apiSuccess {Number} montant montant de la réservation
   * @apiSuccess {Number} montant_a montant d'achat la réservation
   * @apiSuccess {Strnig} devise .
   * @apiSuccess {Number} taux_devise .
   * @apiSuccess {String} chambre .
   * @apiSuccess {String} abr abreviation de la chambre
   * @apiSuccess {String} observation
   * @apiSuccess {String} type de réservation
   * @apiSuccess {String} email _envoyer 0/1
   * @apiSuccess {String} tel .
   * @apiSuccess {Number} montant_annul d'annulation .
   * @apiSuccess {Number} montant_noshow montant noshow  .
   * @apiSuccess {Number} frais_annulation   .
   * @apiSuccess {String} observation_annulation   .
   * @apiSuccess {Date} date_avant   .
   * @apiSuccess {Date} date_annulation   .
   * @apiSuccess {Date} date_annulation   .
   * @apiSuccess {Number} etat  0/1 .
   * @apiSuccess {String} status   .
   * @apiSuccess {Datetime} date_confirmation   .
   * @apiSuccess {Number} print 0/1   .
   * @apiSuccess {Number} active 0/1   .
   * @apiSuccess {String} rmqs  .
   * @apiSuccess {Datetime} date_envoyer_hotel  .
   * @apiSuccess {String} etat_hotel  .
   * @apiSuccess {String} vu_hotel  .
   * @apiSuccess {String} vu_hotel  .
   * @apiSuccess {String} ordid_md  id cyberesa
   * @apiSuccess {String} passws_md  mot de passe cyberesa
   * @apiSuccess {String} sigma  .
   * @apiSuccess {agence} agence  .
   * @apiSuccess {hotel} hotel  .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "num": 66,
          "reference": "7793235584",
          "date_cmd": "2017-02-21T15:40:34.000Z",
          "idhotel": 33,
          "idperiod_debut": 646,
          "idagence": 23,
          "client": "test test",
          "date_from": "2017-03-10",
          "date_to": "2017-03-13",
          "nbnuit": 3,
          "adult": 2,
          "enfant": 0,
          "nbcham": 1,
          "montant": 300,
          "montant_a": 270,
          "devise": "TND",
          "taux_devise": 1,
          "chambre": "chambre1: Chambre Double  LPD  2adults 0enfants 0bebes\n <br >",
          "abr": "DOUBLE",
          "observation": "Modification Réservation",
          "type": "",
          "email_envoyer": 1,
          "tel": "",
          "montant_annul": 300,
          "montant_noshow": 300,
          "frais_annulation": 300,
          "observation_annulation": "Frais Noshow à facturée",
          "date_avant": "2017-03-07",
          "date_annulation": "2017-06-07T15:37:13.000Z",
          "etat": 0,
          "status": "annuler",
          "date_confirmation": null,
          "print": 1,
          "active": 1,
          "rmqs": "",
          "sigma": "",
          "date_envoyer_hotel": "2017-02-21T15:40:34.000Z",
          "etat_hotel": "",
          "vu_hotel": null,
          "ordid_md": null,
          "passws_md": null,
          "agence": {
              "username": "Just Easy Travel",
              "id": 23
          },
          "hotel": {
              "nom": "Marhaba Resort",
              "idhotel": 33
          }
      },
      ...
      ]
  
   */
    /**
   * @api {get} /reservation/:idagence GET reservations agence
   * @apiName GetreservationsAgence
   * @apiPermission Admin
   * @apiGroup  reservations
   *
   * @apiSuccess {Number} num unique num reservations .
   * @apiSuccess {String} reference  .
   * @apiSuccess {Datetime} date_cmd .
   * @apiSuccess {Number} idhotel .
   * @apiSuccess {Number} idagence .
   * @apiSuccess {String} client .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
   * @apiSuccess {Number} nbnuit .
   * @apiSuccess {Number} adult .
   * @apiSuccess {Number} enfant .
   * @apiSuccess {Number} nbcham .
   * @apiSuccess {Strnig} devise .
   * @apiSuccess {Number} taux_devise .
   * @apiSuccess {String} chambre .
   * @apiSuccess {String} abr abreviation de la chambre
   * @apiSuccess {String} observation
   * @apiSuccess {String} type de réservation
   * @apiSuccess {String} email de client
   * @apiSuccess {String} email _envoyer 0/1
   * @apiSuccess {String} tel .
  
  
  
   * @apiSuccess {Number} etat  0/1 .
   * @apiSuccess {String} status   .
   * @apiSuccess {String} rmqs  .
  
   * @apiSuccess {hotel} hotel  .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "num": 1729,
          "reference": "2361411798",
          "date_cmd": "2018-07-20T20:24:05.000Z",
          "idhotel": 13,
          "idagence": 4,
          "client": " testyy tt",
          "date_from": "2018-08-07",
          "date_to": "2018-08-08",
          "nbnuit": 1,
          "adult": 2,
          "enfant": 0,
          "nbcham": 1,
          "montant": 524,
          "devise": "TND",
          "taux_devise": 1,
          "chambre": "chambre1: Chambre Double  All-in  2adultes 0enfants 0bebes\n ",
          "abr": "DOUBLE",
          "observation": "<br />Transport ",
          "type": "Simple",
          "tel": "",
          "date_avant": "2018-08-06",
          "date_annulation": "2018-07-21T13:13:33.000Z",
          "etat": 0,
          "status": "annuler",
          "rmqs": "xxxxxxxxx",
          "hotel": {
              "nom": "Oceana",
              "idhotel": 13
          }
      },
      ...
      ]
   *
   */
    /**
   * @api {post} /reservation/ajout POST Ajout Reservation
   * @apiName AjoutReservation
   * @apiPermission User
   * @apiGroup  reservations
   *
   * @apiParamExample {json} Request-Example:
       
  {
      "CodeLam":"Dot157Com1552726167885",
      "arrids":["3"],
      "nom_supp":"",
      "noms":[null,[null," sss"," wwww"]],
      "prenoms":[null,[null,"ccc","ss"]],
      "titres":[null,[null,"Mr","Mme"]],
      "noms_e":[],
      "prenoms_e":[],
      "ville":"Hammamet",
      "idville":"35",
      "idhotel":157,
      "ref":"5527261678",
      "rooms":[null,"Chambre Double"],
      "observation":"Transport<br/>",
      "devise":"TND",
      "type_period":"Promo",
      "id_user":1,
      "idagence":4,
      "supplement_nom":[],
      "enfants":[null,"0"],
      "enfants_o":[null,"0"],
      "age_enfants_o":[null,null],
      "bebes":[null],"adults":[null,"2"],
      "surdemande":0,
      "types_abr":[null,"DOUBLE"],
      "datedepart":"17/05/2019",
      "datearrive":"16/05/2019",
      "montant":89.5,
      "montant_a":85.24,
      "arrang_rooms":[null,"DP"],
      "periods":[null,"1"],
      "roomsid":[null,2],
      "nbcham":1,
      "nbnuit":1,
      "nuits_resv":[null,null],
      "prixchs":[null,89.5],
      "prixchs_a":[null,85.24],
      "supplement":[],
      "supplement_a":[],
      "reference":"5527261678",
      "username":"dotcom1"
      }
          
      *
  
  
   * @apiSuccess {String} success  .
  
  
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
      {
          "success": "true",
          "id":1
        
      },
  
      
  
   */
    /**
   * @api {put} /reservation/annulation/:ref PUT Annulation Reservation
   * @apiName AnnulationReservation
   * @apiPermission User
   * @apiGroup  reservations
   *
   **@apiParam {Number} ref        reference ID.
      *
  
  
   * @apiSuccess {String} success  .annulation
  
  
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
      {
          "success": "true"
        
      },
  
      
  
   */
    /**
   * @api {put} /reservation/confirme/:ref PUT Confirme Reservation
   * @apiName ConfirmeReservation
   * @apiPermission Admin
   * @apiGroup  reservations
   *
   **@apiParam {Number} ref        reference ID.
      *
  
  
   * @apiSuccess {String} success  .annulation
  
  
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
      {
          "success": "true"
        
      },
  
      
  
   */
    /**
   * @api {get} /reservation/:idagence GET reservations agence
   * @apiName GetreservationsAgence
   * @apiPermission Admin
   * @apiGroup  reservations
   *
   * @apiSuccess {Number} num unique num reservations .
   * @apiSuccess {String} reference  .
   * @apiSuccess {Datetime} date_cmd .
   * @apiSuccess {Number} idhotel .
   * @apiSuccess {Number} idagence .
   * @apiSuccess {String} client .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
   * @apiSuccess {Number} nbnuit .
   * @apiSuccess {Number} adult .
   * @apiSuccess {Number} enfant .
   * @apiSuccess {Number} nbcham .
   * @apiSuccess {Strnig} devise .
   * @apiSuccess {Number} taux_devise .
   * @apiSuccess {String} chambre .
   * @apiSuccess {String} abr abreviation de la chambre
   * @apiSuccess {String} observation
   * @apiSuccess {String} type de réservation
   * @apiSuccess {String} email de client
   * @apiSuccess {String} email _envoyer 0/1
   * @apiSuccess {String} tel .
  
  
  
   * @apiSuccess {Number} etat  0/1 .
   * @apiSuccess {String} status   .
   * @apiSuccess {String} rmqs  .
  
   * @apiSuccess {hotel} hotel  .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "num": 1729,
          "reference": "2361411798",
          "date_cmd": "2018-07-20T20:24:05.000Z",
          "idhotel": 13,
          "idagence": 4,
          "client": " testyy tt",
          "date_from": "2018-08-07",
          "date_to": "2018-08-08",
          "nbnuit": 1,
          "adult": 2,
          "enfant": 0,
          "nbcham": 1,
          "montant": 524,
          "devise": "TND",
          "taux_devise": 1,
          "chambre": "chambre1: Chambre Double  All-in  2adultes 0enfants 0bebes\n ",
          "abr": "DOUBLE",
          "observation": "<br />Transport ",
          "type": "Simple",
          "tel": "",
          "date_avant": "2018-08-06",
          "date_annulation": "2018-07-21T13:13:33.000Z",
          "etat": 0,
          "status": "annuler",
          "rmqs": "xxxxxxxxx",
          "hotel": {
              "nom": "Oceana",
              "idhotel": 13
          }
      },
      ...
      ]
   *
   */
    //crude hist_caisse
    //crude marge_hotel
    //crude amenagment
    //crude arrangements
    //crude banner
    //crude news
    //crude room
    //crude country
    //crude reservation
    //sc-06-2020
    //Get list algerie
    //Statistique
    //
    //statistique Hotels
    /**
   * @api {get} /statistique/hotels GET STAT HOTEL
   * @apiName GetStatHotel
   * @apiPermission Admin
   * @apiGroup  statistiques
  
  
  
  
   *
  
   * @apiSuccess {idhotel} idHotel unique id Hotel .
   * @apiSuccess {Number} achat montant achat  .
   * @apiSuccess {Number} impayee montant impayée.
   * @apiSuccess {Number} payee montant payée .
   * @apiSuccess {String} hotel nom Hotel .
   * @apiSuccess {Number} chiffre chiffre d'affaire .
   * @apiSuccess {Number} gain gain en % .
  
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "idhotel": 1,
          "achat": 501790.553,
          "impayee": 554516.685,
          "payee": 0,
          "hotel": "One Resort Aqua Park",
          "chiffre": 554516.685,
          "gain": 10.508
      },
      ...
      ]
  
   */
    //crude Statistique
    //Statistique
    ///
    //statistique Hotels
    /**
  * @api {get} /statistique/hotels/:id GET STAT HOTEL par Agence
  * @apiName GetStatHotelsAgence
  * @apiGroup  statistiques
  
  
  
  
  *
  
  * @apiSuccess {idhotel} idHotel unique id Hotel .
  * @apiSuccess {Number} achat montant achat  .
  * @apiSuccess {Number} impayee montant impayée.
  * @apiSuccess {Number} payee montant payée .
  * @apiSuccess {String} hotel nom Hotel .
  * @apiSuccess {Number} chiffre chiffre d'affaire .
  * @apiSuccess {Number} gain gain en % .
  
  
  
  
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  [
  {
      "idhotel": 1,
      "achat": 501790.553,
      "impayee": 554516.685,
      "payee": 0,
      "hotel": "One Resort Aqua Park",
      "chiffre": 554516.685,
      "gain": 10.508
  },
  ...
  ]
  
   */
    //crude Statistique
    //Statistique
    //
    //statistique Agences
    /**
   * @api {get} /statistique/agences GET STAT AGENCE
   * @apiName GetStatAgence
   * @apiPermission Admin
   * @apiGroup  statistiques
  
  
  
  
   *
  
   * @apiSuccess {idagence} idagence unique id agence .
   * @apiSuccess {Number} achat montant achat  .
   * @apiSuccess {Number} impayee montant impayée.
   * @apiSuccess {Number} payee montant payée .
   * @apiSuccess {String} agence username agence .
   * @apiSuccess {Number} chiffre chiffre d'affaire .
   * @apiSuccess {Number} gain gain en % .
  
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "idagence": 1,
          "achat": 501790.553,
          "impayee": 554516.685,
          "payee": 0,
          "agence": "Tasnime Voyages & Tourisme",
          "chiffre": 554516.685,
          "gain": 10.508
      },
      ...
      ]
  
   */
    //facturation
    //
    //booking_b2b
    /**
   * @api {post} /facturations/ Post ALL facturations
   * @apiName Postfacturations
   * @apiPermission Admin
   * @apiGroup  facturations
  
  
   * @apiParamExample {json} Request-Example:
    {
         
          "date_from": "2018-10-01",
          "date_to": "2018-10-10",
          "idagence": 100 ou 0 (allagence)
          "idhotel": 266 ou 0 (allhotel)
      }
  
   *
  
   * @apiSuccess {Number} num unique num facturations .
   * @apiSuccess {String} reference  .
   * @apiSuccess {Datetime} date_cmd .
   * @apiSuccess {Number} idhotel .
   * @apiSuccess {String} client .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
   * @apiSuccess {Number} nbnuit .
   * @apiSuccess {Number} nbcham .
   * @apiSuccess {Number} montant montant de la réservation
   * @apiSuccess {Number} montant_a montant d'achat la réservation
   * @apiSuccess {Strnig} devise .
   * @apiSuccess {Number} taux_devise .
   * @apiSuccess {agence} agence  .
   * @apiSuccess {hotel} hotel  .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "num": 3067,
          "reference": "9189083860",
          "idhotel": 227,
          "date_cmd": "2018-09-15T16:53:04.000Z",
          "client": " DJELLOUT DJAMILA",
          "date_from": "2018-10-01",
          "date_to": "2018-10-08",
          "nbnuit": 7,
          "nbcham": 1,
          "montant": 1036,
          "montant_a": 952,
          "taux_devise": 1,
          "devise": "TND",
          "agence": {
              "username": "fidelia tours",
              "id": 30
          },
          "hotel": {
              "nom": "MENINX",
              "idhotel": 227
          }
      },
      ...
      ]
  
   */
    /**
   * @api {post} /facturation/:idagence Post facturations agence
   * @apiName PostfacturationsAgence
   * @apiPermission Admin
   * @apiGroup  facturations
   *
   * @apiParamExample {json} Request-Example:
    {
         
          "date_from": "2018-10-01",
          "date_to": "2018-10-10",
          "idhotel": 266 ou 0 (allhotel)
      }
  
   *
   * @apiSuccess {Number} num unique num facturations .
   * @apiSuccess {String} reference  .
   * @apiSuccess {Datetime} date_cmd .
   * @apiSuccess {Number} idhotel .
   * @apiSuccess {String} client .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
   * @apiSuccess {Number} nbnuit .
   * @apiSuccess {Number} nbcham .
   * @apiSuccess {Number} montant montant de la réservation
   * @apiSuccess {Strnig} devise .
   * @apiSuccess {Number} taux_devise .
   * @apiSuccess {agence} agence  .
   * @apiSuccess {hotel} hotel  .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
       {
          "num": 3172,
          "reference": "8578246232",
          "idhotel": 266,
          "date_cmd": "2018-09-24T13:26:28.000Z",
          "client": " WAHID SAIDI",
          "date_from": "2018-10-02",
          "date_to": "2018-10-04",
          "nbnuit": 2,
          "nbcham": 1,
          "montant": 144,
          "taux_devise": 1,
          "devise": "TND",
          "agence": {
              "username": "Tasnime Voyages & Tourisme",
              "id": 1
          },
          "hotel": {
              "nom": "Helya Beach & Spa",
              "idhotel": 266
          }
      },
      ...
      ]
   *
   */
    //facturation
    //
    //booking_b2b
    /**
   * @api {post} /etats/ Post ALL etats
   * @apiName Postetats
   * @apiPermission Admin
   * @apiGroup  etats
  
  
   * @apiParamExample {json} Request-Example:
    {
         
          "date_from": "2018-10-01",
          "date_to": "2018-10-10",
          "idagence": 100 ou 0 (allagence),
          "idhotel": 266 ou 0 (allhotel)
      }
  
   *
  
   * @apiSuccess {Number} num unique num etats .
   * @apiSuccess {String} reference  .
   * @apiSuccess {Datetime} date_cmd .
   * @apiSuccess {Number} idhotel .
   * @apiSuccess {String} client .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
   * @apiSuccess {Number} nbnuit .
   * @apiSuccess {Number} nbcham .
  
   * @apiSuccess {Strnig} devise .
   * @apiSuccess {Number} taux_devise .
   * @apiSuccess {agence} agence  .
   * @apiSuccess {hotel} hotel  .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
        {
          "num": 3067,
          "reference": "9189083860",
          "idhotel": 227,
          "date_cmd": "2018-09-15T16:53:04.000Z",
          "client": " DJELLOUT DJAMILA",
          "date_from": "2018-10-01",
          "date_to": "2018-10-08",
          "nbnuit": 7,
          "nbcham": 1,
          "taux_devise": 1,
          "devise": "TND",
          "agence": {
              "username": "fidelia tours",
              "id": 30
          },
          "hotel": {
              "nom": "MENINX",
              "idhotel": 227
          }
      },
      ...
      ]
  
   */
    //etat
    //crude period
    //period
    /**
     * @apiDefine periodNotFoundError
     * @apiError  periodNotFound  <code>period</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "period pas trouvée"
     *     }
     */
    /**
   * @api {get} /periods/:idcontrat  ALL periods
   * @apiName Getperiods
   * @apiPermission Admin
   * @apiGroup  period
   *
   *
   * @apiSuccess {Number} idperiod unique ID period .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {String} nom  .
   * @apiSuccess {String} type  .
   * @apiSuccess {Number} nb_jour nb jour .
   * @apiSuccess {Number} min_nuit  min nuit.
   * @apiSuccess {Number} max_nuit  max_nuit.
   * @apiSuccess {Number} bonplan  bonplan.
   * @apiSuccess {Number} marge  marge b2b.
   * @apiSuccess {Number} operation  0/1.
   * @apiSuccess {Number} pourcent  0/1.
   * @apiSuccess {Number} position  .
   * @apiSuccess {Number} marge_c  marge b2c.
   * @apiSuccess {Number} operation_c  0/1.
   * @apiSuccess {Number} pourcent_c  0/1.
   * @apiSuccess {Date} period_from date debut period .
   * @apiSuccess {Date} period_to date fin period .
   * @apiSuccess {Date} early_booking date earlybooking period .
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
     
     {
          "idperiod": 13,
          "idhotel": 14,
          "idcontrat": 14,
          "nom": "Saison 1",
          "period_from": "2016-11-01",
          "period_to": "2016-11-25",
          "early_booking": "1970-01-01",
          "nb_jour": 0,
          "type": "Simple",
          "min_nuit": 1,
          "max_nuit": 0,
          "bonplan": 0,
          "retrosession": null,
          "marge": 0,
          "operation": 0,
          "pourcent": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "position": 1,
          "createdAt": null,
          "updatedAt": null,
          "hotel": {
              "nom": "steigenberger marhaba thalasso hammamet ",
              "idhotel": 14
          }
          
    },
      ...
  ]
    * @apiUse  periodNotFoundError
   */
    /**
   * @api {get} /period/:idperiod GET period
   * @apiName Getperiod
   * @apiGroup  period
   *
   *
   * @apiSuccess {Number} idperiod unique ID period .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {String} nom  .
   * @apiSuccess {String} type  .
   * @apiSuccess {Number} nb_jour nb jour .
   * @apiSuccess {Number} min_nuit  min nuit.
   * @apiSuccess {Number} max_nuit  max_nuit.
   * @apiSuccess {Number} bonplan  bonplan.
   * @apiSuccess {Number} marge  marge b2b.
   * @apiSuccess {Number} operation  0/1.
   * @apiSuccess {Number} pourcent  0/1.
   * @apiSuccess {Number} position  .
   * @apiSuccess {Number} marge_c  marge b2c.
   * @apiSuccess {Number} operation_c  0/1.
   * @apiSuccess {Number} pourcent_c  0/1.
   * @apiSuccess {Date} period_from date debut period .
   * @apiSuccess {Date} period_to date fin period .
   * @apiSuccess {Date} early_booking date earlybooking period .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  
     {
     "idperiod": 6048,
      "nom": "p1",
      "idhotel": "3",
      "idcontrat": "3",
      "period_from": "2018-10-01",
      "period_to": "2018-10-10",
      "nb_jour": "0",
      "type": "Promo",
      "min_nuit": "4",
      "max_nuit": "0",
      "bonplan": "1",
      "marge": "0",
      "operation": "0",
      "pourcent": "0",
      "marge_c": "0",
      "operation_c": "0",
      "pourcent_c": "0",
      "position": "1",
      }
  
   *
   * @apiUse  periodNotFoundError
   */
    /**
   * @api {post} /period/ POST period
   * @apiDescription Ajout une période , automatiquement deux types tarifs avec roomid=2, roomid=3 sont ajouter
   * @apiName POSTperiod
   * @apiPermission Admin
   * @apiGroup  period
   *
  
  
   * @apiParamExample {json} Request-Example:
  
         {
      "nom": "p1",
      "idhotel": "3",
      "idcontrat": "3",
      "period_from": "2018-10-01",
      "period_to": "2018-10-10",
      "nb_jour": "0",
      "type": "Promo",
      "min_nuit": "4",
      "max_nuit": "0",
      "bonplan": "1",
      "marge": "0",
      "operation": "0",
      "pourcent": "0",
      "marge_c": "0",
      "position": "1",
      "operation_c": "0",
      "pourcent_c": "0"
       
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
        {
      "early_booking": "1970-01-01",
      "idperiod": 6048,
      "nom": "p1",
      "idhotel": "3",
      "idcontrat": "3",
      "period_from": "2018-10-01",
      "period_to": "2018-10-10",
      "nb_jour": "0",
      "type": "Promo",
      "min_nuit": "4",
      "max_nuit": "0",
      "bonplan": "1",
      "marge": "0",
      "operation": "0",
      "pourcent": "0",
      "marge_c": "0",
      "operation_c": "0",
      "pourcent_c": "0",
      "position": "1",
      "updatedAt": "2018-10-12T13:55:37.418Z",
      "createdAt": "2018-10-12T13:55:37.418Z"
  }
  
   */
    /**
   * @api {post} /period/dup DUPLIQUE period
   * @apiDescription dupliqué une période apartir d'une autre période
   * @apiPermission Admin
   * @apiGroup  period
   *
  
  
   * @apiParamExample {json} Request-Example:
  
         {
      "idperiodold": "3314",
      "nom": "p1",
      "idhotel": "3",
      "idcontrat": "3",
      "period_from": "2018-10-01",
      "period_to": "2018-10-10",
      "nb_jour": "0",
      "type": "Promo",
      "min_nuit": "4",
      "max_nuit": "0",
      "bonplan": "1",
      "marge": "0",
      "operation": "0",
      "pourcent": "0",
      "marge_c": "0",
      "position": "1",
      "operation_c": "0",
      "pourcent_c": "0"
       
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
        {
      "early_booking": "1970-01-01",
      "idperiod": 6048,
      "nom": "p1",
      "idhotel": "3",
      "idcontrat": "3",
      "period_from": "2018-10-01",
      "period_to": "2018-10-10",
      "nb_jour": "0",
      "type": "Promo",
      "min_nuit": "4",
      "max_nuit": "0",
      "bonplan": "1",
      "marge": "0",
      "operation": "0",
      "pourcent": "0",
      "marge_c": "0",
      "operation_c": "0",
      "pourcent_c": "0",
      "position": "1",
      "updatedAt": "2018-10-12T13:55:37.418Z",
      "createdAt": "2018-10-12T13:55:37.418Z"
  }
  
   */
    /**
   * @api {put} /period/:idperiod PUT period
   * @apiName PUTperiod
   * @apiPermission Admin
   * @apiGroup  period
   *
   * @apiParam {Number} idperiod        unique ID.
  
   * @apiParamExample {json} Request-Example:
  
      {
  
          "early_booking": "1970-01-01",
      "nom": "p1",
      "idhotel": "3",
      "idcontrat": "3",
      "period_from": "2018-10-01",
      "period_to": "2018-10-10",
      "nb_jour": "0",
      "type": "Promo",
      "min_nuit": "4",
      "max_nuit": "0",
      "bonplan": "1",
      "marge": "0",
      "operation": "0",
      "pourcent": "0",
      "marge_c": "0",
      "operation_c": "0",
      "pourcent_c": "0",
      "position": "1"
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
          {
           "early_booking": "1970-01-01",
      "idperiod": 6048,
      "nom": "p1",
      "idhotel": "3",
      "idcontrat": "3",
      "period_from": "2018-10-01",
      "period_to": "2018-10-10",
      "nb_jour": "0",
      "type": "Promo",
      "min_nuit": "4",
      "max_nuit": "0",
      "bonplan": "1",
      "marge": "0",
      "operation": "0",
      "pourcent": "0",
      "marge_c": "0",
      "operation_c": "0",
      "pourcent_c": "0",
      "position": "1",
      "updatedAt": "2018-10-12T13:55:37.418Z",
      "createdAt": "2018-10-12T13:55:37.418Z"
   
      },
  ]
  
  
   */
    /**
     * @api {delete} /period/:idperiod Delete period
     * @apiName DELETEperiod
     * @apiGroup  period
     * @apiParam {Number} id id period
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude contrat
    //contrat
    /**
     * @apiDefine contratNotFoundError
     * @apiError  contratNotFound  <code>contrat</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "contrat pas trouvée"
     *     }
     */
    /**
   * @api {get} /contrats/  ALL contrats
   * @apiName Getcontrats
   * @apiPermission Admin
   * @apiGroup  Contrat
   *
   *
   * @apiSuccess {Number} id unique ID contrat .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {String} nom  .
   * @apiSuccess {Number} act active 0/1.
   * @apiSuccess {Number} affichage  0 (les deux)/1 (B2B)/2(B2C).
   * @apiSuccess {Number} recommender  0/1.
   * @apiSuccess {Date} begin date debut contrat .
   * @apiSuccess {Date} end date fin contrat .
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
     
      {
          "id": 3,
          "idhotel": 3,
          "nom": "Contrat  Radisson Blu Resort & Thalassa",
          "begin": "2016-11-01",
          "end": "2017-10-31",
          "act": 1,
          "affichage": 0,
          "recommender": 0,
          "createdAt": null,
          "updatedAt": null,
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          }
      },
      ...
  ]
    * @apiUse  contratNotFoundError
   */
    /**
   * @api {get} /contrat/:id GET contrat
   * @apiName Getcontrat
   * @apiGroup  Contrat
   *
   * @apiSuccess {Number} id unique ID contrat .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {String} nom  .
   * @apiSuccess {Number} act active 0/1.
   * @apiSuccess {Number} affichage  0/1.
   * @apiSuccess {Number} recommender  0/1.
   * @apiSuccess {Date} begin date debut contrat .
   * @apiSuccess {Date} end date fin contrat .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  
      {
   
          "idhotel": 3,
          "recommender": 0,
          "affichage": 1,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "act": 1
       
      }
  
   *
   * @apiUse  contratNotFoundError
   */
    /**
   * @api {post} /contrat/ POST contrat
   * @apiName POSTcontrat
   * @apiGroup  Contrat
   *
  
  
   * @apiParamExample {json} Request-Example:
  
         {
  
          "idhotel": 3,
          "nom": "Contrat  Radisson Blu Resort & Thalassa",
          "begin": "2016-11-01",
          "end": "2017-10-31",
          "act": 1,
          "affichage": 0,
          "recommender": 0,
       
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
         {
          "id": 3,
          "idhotel": 3,
          "nom": "Contrat  Radisson Blu Resort & Thalassa",
          "begin": "2016-11-01",
          "end": "2017-10-31",
          "act": 1,
          "affichage": 0,
          "recommender": 0,
          "createdAt": null,
          "updatedAt": null,
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          }
      },
  ]
   */
    /**
   * @api {post} /contrat/dup Duplique contrat
   * @apiName Dupliquecontrat
   * @apiGroup  Contrat
   *
  
  
   * @apiParamExample {json} Request-Example:
  
         {
  
          "idcontratold": 3,
          "idhotel": 7,
          "nom": "test",
          "begin": "2016-11-01",
          "end": "2017-10-31",
          "act": 1,
          "affichage": 0,
          "recommender": 0,
       
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
    {
      "id": 581,
      "nom": "test",
      "act": "1",
      "idhotel": "7",
      "affichage": "0",
      "begin": "2018-12-24",
      "end": "2018-12-26",
      "recommender": "0",
      "updatedAt": "2018-12-25T09:49:34.508Z",
      "createdAt": "2018-12-25T09:49:34.508Z"
  }
  ]
   */
    /**
   * @api {put} /contrat/:id PUT contrat
   * @apiName PUTcontrat
   * @apiGroup  Contrat
   *
   * @apiParam {Number} id        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
      {
  
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 0,
          "arrid": 0,
          "nb_jour": 0,
          "contrat_booking": null,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "calcul_supp": 1,
          "date_booking": "0000-00-00"
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
          {
          "id": 3,
          "idhotel": 3,
          "nom": "Contrat  Radisson Blu Resort & Thalassa",
          "begin": "2016-11-01",
          "end": "2017-10-31",
          "act": 1,
          "affichage": 0,
          "recommender": 0,
          "createdAt": null,
          "updatedAt": null,
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          }
      },
  ]
  
  
   */
    /**
     * @api {delete} /contrat/:id Delete contrat
     * @apiName DELETEcontrat
     * @apiGroup  Contrat
     * @apiParam {Number} id id contrat
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude early
    //early
    /**
     * @apiDefine earlyNotFoundError
     * @apiError  earlyNotFound  <code>early</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "early pas trouvée"
     *     }
     */
    /**
   * @api {get} /earlys/  ALL earlys
   * @apiName Getearlys
   * @apiGroup  Early Booking
   *
  
   *
  
   * @apiSuccess {Number} id unique ID early .
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idperiod ID period .
   * @apiSuccess {String} nom  .
   * @apiSuccess {Number} valeur valeur de early.
   * @apiSuccess {Number} operation .
   * @apiSuccess {Number} pourcent .
   * @apiSuccess {Number} valeur_single valeur single de early.
   * @apiSuccess {Number} operation_s .
   * @apiSuccess {Number} marge_b marge b2b de early.
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} marge_c marge b2c de early.
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} marge_s_b marge single b2b de early.
   * @apiSuccess {Number} operation_s_b .
   * @apiSuccess {Number} pourcent_s_b .
   * @apiSuccess {Number} marge_s_c marge single b2c de early.
   * @apiSuccess {Number} operation_s_c .
   * @apiSuccess {Number} pourcent_s_c .
   * @apiSuccess {Number} min_nuit min de nuit .
   * @apiSuccess {Number} max_nuit max de nuit .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} arrid arrangement ID .
   * @apiSuccess {Number} calcul_supp calcul supplement 0/1.
   * @apiSuccess {Number} nb_jour nombre des jours.
   * @apiSuccess {hotel} modele hotel.
   * @apiSuccess {room} modele room.
   * @apiSuccess {arrangement} modele arrangements.
   * @apiSuccess {Date} begin date debut early .
   * @apiSuccess {Date} end date fin early .
   * @apiSuccess {Date} date_booking date avant early .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "id": 7,
          "idcontrat": 0,
          "idperiod": 0,
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 0,
          "arrid": 0,
          "nb_jour": 0,
          "early_booking": null,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "calcul_supp": 1,
          "date_booking": "0000-00-00",
          "createdAt": "2018-10-12T10:25:20.000Z",
          "updatedAt": "2018-10-12T10:25:20.000Z",
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          },
          "room": null,
          "arrangement": null
      }
      ...
  ]
    * @apiUse  earlyNotFoundError
   */
    /**
   * @api {get} /early/:id GET early
   * @apiName Getearly
   * @apiGroup  Early Booking
   *
   * @apiSuccess {Number} id unique ID early .
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idperiod ID period .
   * @apiSuccess {String} nom  .
   * @apiSuccess {Number} valeur valeur de early.
   * @apiSuccess {Number} operation .
   * @apiSuccess {Number} pourcent .
   * @apiSuccess {Number} valeur_single valeur single de early.
   * @apiSuccess {Number} operation_s .
   * @apiSuccess {Number} marge_b marge b2b de early.
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} marge_c marge b2c de early.
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} marge_s_b marge single b2b de early.
   * @apiSuccess {Number} operation_s_b .
   * @apiSuccess {Number} pourcent_s_b .
   * @apiSuccess {Number} marge_s_c marge single b2c de early.
   * @apiSuccess {Number} operation_s_c .
   * @apiSuccess {Number} pourcent_s_c .
   * @apiSuccess {Number} min_nuit min de nuit .
   * @apiSuccess {Number} max_nuit max de nuit .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} arrid arrangement ID .
   * @apiSuccess {Number} calcul_supp calcul supplement 0/1.
   * @apiSuccess {Number} nb_jour nombre des jours.
   * @apiSuccess {hotel} modele hotel.
   * @apiSuccess {room} modele room.
   * @apiSuccess {arrangement} modele arrangements.
   * @apiSuccess {Date} begin date debut early .
   * @apiSuccess {Date} end date fin early .
   * @apiSuccess {Date} date_booking date avant early .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  
      {
          "id": 7,
          "idcontrat": 0,
          "idperiod": 0,
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 0,
          "arrid": 0,
          "nb_jour": 0,
          "early_booking": null,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "calcul_supp": 1,
          "date_booking": "0000-00-00",
          "createdAt": "2018-10-12T10:25:20.000Z",
          "updatedAt": "2018-10-12T10:25:20.000Z",
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          },
          "room": null,
          "arrangement": null
      }
  
   *
   * @apiUse  earlyNotFoundError
   */
    /**
   * @api {post} /early/ POST early
   * @apiName POSTearly
   * @apiGroup  Early Booking
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
      {
         
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 0,
          "arrid": 0,
          "nb_jour": 0,
          "early_booking": null,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "calcul_supp": 1,
          "date_booking": "0000-00-00"
  
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "id": 7,
          "idcontrat": 0,
          "idperiod": 0,
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 0,
          "arrid": 0,
          "nb_jour": 0,
          "early_booking": null,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "calcul_supp": 1,
          "date_booking": "0000-00-00",
          "createdAt": "2018-10-12T10:25:20.000Z",
          "updatedAt": "2018-10-12T10:25:20.000Z",
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          },
          "room": null,
          "arrangement": null
      }
  ]
   */
    /**
   * @api {put} /early/:id PUT early
   * @apiName PUTearly
   * @apiGroup  Early Booking
   *
   * @apiParam {Number} id        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
      {
  
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 0,
          "arrid": 0,
          "nb_jour": 0,
          "early_booking": null,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "calcul_supp": 1,
          "date_booking": "0000-00-00"
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
      {
          "id": 7,
          "idcontrat": 0,
          "idperiod": 0,
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 0,
          "arrid": 0,
          "nb_jour": 0,
          "early_booking": null,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "calcul_supp": 1,
          "date_booking": "0000-00-00",
          "createdAt": "2018-10-12T10:25:20.000Z",
          "updatedAt": "2018-10-12T10:25:20.000Z",
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          },
          "room": null,
          "arrangement": null
      }
  ]
  
  
   */
    /**
     * @api {delete} /early/:id Delete early
     * @apiName DELETEearly
     * @apiGroup  Early Booking
     * @apiParam {Number} id id early
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude stop_hotel
    //stop_hotel
    /**
     * @apiDefine stop_hotelNotFoundError
     * @apiError  stop_hotelNotFound  <code>stop_hotel</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "stop_hotel pas trouvée"
     *     }
     */
    /**
   * @api {get} /stop_hotels/  ALL stop_hotels
   * @apiName Getstop_hotels
   * @apiGroup  stop_hotel
   *
  
   *
  
   * @apiSuccess {Number} id unique ID stop_hotel .
   * @apiSuccess {Number} idagence ID agence .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} idhotel ID hotel .
  
   * @apiSuccess {Date} date_from date debut stop_hotel .
   * @apiSuccess {Date} date_to date fin stop_hotel .
   * @apiSuccess {agence} agence .
   * @apiSuccess {hotel} hotel .
   * @apiSuccess {room} room .
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
    {
          "id": 42,
          "idhotel": 13,
          "idagence": 0,
          "roomid": 0,
          "date_from": "2018-08-14",
          "date_to": "2018-08-17",
          "agence": null,
          "hotel": {
              "nom": "Oceana",
              "idhotel": 13
          },
          "room": null
      },
      {
          "id": 43,
          "idhotel": 0,
          "idagence": 4,
          "roomid": 27,
          "date_from": "2018-10-16",
          "date_to": "2018-10-17",
          "agence": {
              "username": "Test-dotcom",
              "id": 4
          },
          "hotel": null,
          "room": {
              "roomname": "Bungalow Familial",
              "roomid": 27
          }
      }
      ...
  ]
    * @apiUse  stop_hotelNotFoundError
   */
    /**
   * @api {get} /stop_hotel/:id GET stop_hotel
   * @apiName Getstop_hotel
   * @apiGroup  stop_hotel
   *
   * @apiSuccess {Number} id unique ID stop_hotel .
   * @apiSuccess {Number} idagence ID agence .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} roomid ID room .
  
   * @apiSuccess {Date} date_from date debut stop_hotel .
   * @apiSuccess {Date} date_to date fin stop_hotel .
   * @apiSuccess {agence} agence .
   * @apiSuccess {hotel} hotel .
   * @apiSuccess {room} room .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
      "id": 44,
      "idhotel": "260",
      "idagence": "0",
      "roomid": "2",
      "date_from": "2018-05-03",
      "date_to": "2018-10-05",
      "updatedAt": "2018-10-16T07:48:57.457Z",
      "createdAt": "2018-10-16T07:48:57.457Z"
  }
  
   *
   * @apiUse  stop_hotelNotFoundError
   */
    /**
   * @api {post} /stop_hotel/ POST stop_hotel
   * @apiName POSTstop_hotel
   * @apiGroup  stop_hotel
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
      "idhotel": "260",
      "idagence": "0",
      "roomid": "2",
      "date_from": "2018-05-03",
      "date_to": "2018-10-05"
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
     {
      "id": 44,
      "idhotel": "260",
      "idagence": "0",
      "roomid": "2",
      "date_from": "2018-05-03",
      "date_to": "2018-10-05",
      "updatedAt": "2018-10-16T07:48:57.457Z",
      "createdAt": "2018-10-16T07:48:57.457Z"
  }
  ]
   */
    /**
   * @api {put} /stop_hotel/:id PUT stop_hotel
   * @apiName PUTstop_hotel
   * @apiGroup  stop_hotel
   *
   * @apiParam {Number} id        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
    {
  
      "idhotel": "260",
      "idagence": "0",
      "roomid": "2",
      "date_from": "2018-05-03",
      "date_to": "2018-10-05"
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
      {
      "id": 44,
      "idhotel": "260",
      "idagence": "0",
      "roomid": "2",
      "date_from": "2018-05-03",
      "date_to": "2018-10-05",
      "updatedAt": "2018-10-16T07:48:57.457Z",
      "createdAt": "2018-10-16T07:48:57.457Z"
  }
  ]
  
  
   */
    /**
     * @api {delete} /stop_hotel/:id Delete stop_hotel
     * @apiName DELETEstop_hotel
     * @apiGroup  stop_hotel
     * @apiParam {Number} id id stop_hotel
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude conditions_annulation
    //conditions_annulation
    /**
     * @apiDefine conditions_annulationNotFoundError
     * @apiError  conditions_annulationNotFound  <code>conditions_annulation</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "conditions_annulation pas trouvée"
     *     }
     */
    /**
   * @api {get} /conditions_annulations/:idperiod  ALL conditions_annulations
   * @apiName Getconditions_annulations
   * @apiGroup  conditions_annulation
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} id unique ID conditions_annulation .
   * @apiSuccess {Number} arrid ID arrangements .
   * @apiSuccess {Number} hotelId ID hotel .
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idperiod ID period .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} avant .
   * @apiSuccess {Number} tout_saison .
   * @apiSuccess {Number} sejour .
   * @apiSuccess {Number} noshow 0/1 .
   * @apiSuccess {Number} nbnuit_ns .
   * @apiSuccess {Number} valeur_ns .
   * @apiSuccess {Number} pourcent_ns .
   * @apiSuccess {Number} valeur_nuit .
   * @apiSuccess {Number} min_nuit .
   * @apiSuccess {Number} max_nuit .
   * @apiSuccess {Number} nbre_nuit .
   * @apiSuccess {hotel} hotel.
   * @apiSuccess {arrangements} arrangements.
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "id": 3,
          "arrid": 0,
          "hotelId": 225,
          "idcontrat": 311,
          "idperiod": 1410,
          "min_nuit": 0,
          "max_nuit": 0,
          "nbre_nuit": 0,
          "avant": 1,
          "tout_saison": 0,
          "sejour": 0,
          "valeur": 0,
          "pourcent": 0,
          "noshow": 1,
          "nbnuit_ns": 0,
          "valeur_ns": 45,
          "pourcent_ns": 0,
          "valeur_nuit": 100,
          "hotel": {
              "nom": "MENARA",
              "idhotel": 225
          },
          "arrangement": null
      },
      ...
  ]
    * @apiUse  conditions_annulationNotFoundError
   */
    /**
   * @api {get} /conditions_annulation/:id GET conditions_annulation
   * @apiName Getconditions_annulation
   * @apiGroup  conditions_annulation
   * @apiParam {Number} id        unique ID.
   * @apiSuccess {Number} id unique ID conditions_annulation .
   * @apiSuccess {Number} arrid ID arrangements .
   * @apiSuccess {Number} hotelId ID hotel .
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idperiod ID period .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} avant .
   * @apiSuccess {Number} tout_saison .
   * @apiSuccess {Number} sejour .
   * @apiSuccess {Number} noshow 0/1 .
   * @apiSuccess {Number} nbnuit_ns .
   * @apiSuccess {Number} valeur_ns .
   * @apiSuccess {Number} pourcent_ns .
   * @apiSuccess {Number} valeur_nuit .
   * @apiSuccess {Number} min_nuit .
   * @apiSuccess {Number} max_nuit .
   * @apiSuccess {Number} nbre_nuit .
   * @apiSuccess {hotel} hotel.
   * @apiSuccess {arrangements} arrangements.
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
    {
          "id": 3,
          "arrid": 0,
          "hotelId": 225,
          "idcontrat": 311,
          "idperiod": 1410,
          "min_nuit": 0,
          "max_nuit": 0,
          "nbre_nuit": 0,
          "avant": 1,
          "tout_saison": 0,
          "sejour": 0,
          "valeur": 0,
          "pourcent": 0,
          "noshow": 1,
          "nbnuit_ns": 0,
          "valeur_ns": 45,
          "pourcent_ns": 0,
          "valeur_nuit": 100
      },
  
   *
   * @apiUse  conditions_annulationNotFoundError
   */
    /**
   * @api {post} /conditions_annulation/ POST conditions_annulation
   * @apiName POSTconditions_annulation
   * @apiGroup  conditions_annulation
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
    {
       
          "arrid": 0,
          "hotelId": 225,
          "idcontrat": 311,
          "idperiod": 1410,
          "min_nuit": 0,
          "max_nuit": 0,
          "nbre_nuit": 0,
          "avant": 1,
          "tout_saison": 0,
          "sejour": 0,
          "valeur": 0,
          "pourcent": 0,
          "noshow": 1,
          "nbnuit_ns": 0,
          "valeur_ns": 45,
          "pourcent_ns": 0,
          "valeur_nuit": 100
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
    {
          "id": 3,
          "arrid": 0,
          "hotelId": 225,
          "idcontrat": 311,
          "idperiod": 1410,
          "min_nuit": 0,
          "max_nuit": 0,
          "nbre_nuit": 0,
          "avant": 1,
          "tout_saison": 0,
          "sejour": 0,
          "valeur": 0,
          "pourcent": 0,
          "noshow": 1,
          "nbnuit_ns": 0,
          "valeur_ns": 45,
          "pourcent_ns": 0,
          "valeur_nuit": 100,
          "hotel": {
              "nom": "MENARA",
              "idhotel": 225
          },
          "arrangement": null
      }
      ]
   */
    /**
   * @api {put} /conditions_annulation/:id PUT conditions_annulation
   * @apiName PUTconditions_annulation
   * @apiGroup  conditions_annulation
   *
   * @apiParam {Number} id        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
    {
  
          "arrid": 0,
          "hotelId": 225,
          "idcontrat": 311,
          "idperiod": 1410,
          "min_nuit": 0,
          "max_nuit": 0,
          "nbre_nuit": 0,
          "avant": 1,
          "tout_saison": 0,
          "sejour": 0,
          "valeur": 0,
          "pourcent": 0,
          "noshow": 1,
          "nbnuit_ns": 0,
          "valeur_ns": 45,
          "pourcent_ns": 0,
          "valeur_nuit": 100
         
      }
       
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
      {
          "id": 3,
          "arrid": 0,
          "hotelId": 225,
          "idcontrat": 311,
          "idperiod": 1410,
          "min_nuit": 0,
          "max_nuit": 0,
          "nbre_nuit": 0,
          "avant": 1,
          "tout_saison": 0,
          "sejour": 0,
          "valeur": 0,
          "pourcent": 0,
          "noshow": 1,
          "nbnuit_ns": 0,
          "valeur_ns": 45,
          "pourcent_ns": 0,
          "valeur_nuit": 100,
          "hotel": {
              "nom": "MENARA",
              "idhotel": 225
          },
          "arrangement": null
      }
  ]
  
  
   */
    /**
     * @api {delete} /conditions_annulation/:id Delete conditions_annulation
     * @apiName DELETEconditions_annulation
     * @apiGroup  conditions_annulation
     * @apiParam {Number} id id conditions_annulation
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude arr_tarif
    //souhir-CHABAAN-13-02-2020 api-get voucher
    //arr_tarif
    /**
     * @apiDefine arr_tarifNotFoundError
     * @apiError  arr_tarifNotFound  <code>arr_tarif</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "arr_tarif pas trouvée"
     *     }
     */
    /**
   * @api {get} /arr_tarifs/:idperiod  ALL arr_tarifs
   * @apiName Getarr_tarifs
   * @apiGroup  arr_tarif
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} arrtarifid unique ID arr_tarif .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} hotelId ID hotel .
   * @apiSuccess {Number} arrid ID arrangements .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} min_nuit .
   * @apiSuccess {Number} type_calcul 0/1.
   * @apiSuccess {hotel} hotel.
   * @apiSuccess {room} room.
   * @apiSuccess {arrangements} arrangements.
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   {
          "arrtarifid": 1,
          "arrid": 7,
          "hotelId": 1,
          "pourcent": 0,
          "valeur": 73,
          "idperiod": 1,
          "marge_b": 0,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "min_nuit": 0,
          "type_calcul": 0,
          "roomid": 0,
          "hotel": {
              "nom": "One Resort Monastir",
              "hotelId": 1
          },
          "arrangement": {
              "arrangements": "All Inclusive",
              "arrId": 7
          },
          "room": null
      },
      ...
  ]
    * @apiUse  arr_tarifNotFoundError
   */
    /**
   * @api {get} /arr_tarif/:arrtarifid GET arr_tarif
   * @apiName Getarr_tarif
   * @apiGroup  arr_tarif
   * @apiParam {Number} arrtarifid        unique ID.
   * @apiSuccess {Number} arrtarifid unique ID arr_tarif .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} hotelId ID hotel .
   * @apiSuccess {Number} arrid ID arrangements .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} min_nuit .
   * @apiSuccess {Number} type_calcul 0/1.
   * @apiSuccess {hotel} hotel.
   * @apiSuccess {room} room.
   * @apiSuccess {arrangements} arrangements.
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
          "arrtarifid": 1,
          "arrid": 7,
          "hotelId": 1,
          "pourcent": 0,
          "valeur": 73,
          "idperiod": 1,
          "marge_b": 0,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "min_nuit": 0,
          "type_calcul": 0,
          "roomid": 0,
          "hotel": {
              "nom": "One Resort Monastir",
              "hotelId": 1
          },
          "arrangement": {
              "arrangements": "All Inclusive",
              "arrId": 7
          },
          "room": null
      },
  
   *
   * @apiUse  arr_tarifNotFoundError
   */
    /**
   * @api {post} /arr_tarif/ POST arr_tarif
   * @apiName POSTarr_tarif
   * @apiGroup  arr_tarif
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
  {
   
          "arrid": 7,
          "hotelId": 1,
          "pourcent": 0,
          "valeur": 73,
          "idperiod": 1,
          "marge_b": 0,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "min_nuit": 0,
          "type_calcul": 0,
          "roomid": 0
      },
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
  {
          "arrtarifid": 1,
          "arrid": 7,
          "hotelId": 1,
          "pourcent": 0,
          "valeur": 73,
          "idperiod": 1,
          "marge_b": 0,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "min_nuit": 0,
          "type_calcul": 0,
          "roomid": 0,
          "hotel": {
              "nom": "One Resort Monastir",
              "hotelId": 1
          },
          "arrangement": {
              "arrangements": "All Inclusive",
              "arrId": 7
          },
          "room": null
      },
  ]
   */
    /**
   * @api {put} /arr_tarif/:arrtarifid PUT arr_tarif
   * @apiName PUTarr_tarif
   * @apiGroup  arr_tarif
   *
   * @apiParam {Number} arrtarifid        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
          "arrid": 7,
          "hotelId": 1,
          "pourcent": 0,
          "valeur": 73,
          "idperiod": 1,
          "marge_b": 0,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "min_nuit": 0,
          "type_calcul": 0,
          "roomid": 0
      },
       
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
     {
          "arrtarifid": 1,
          "arrid": 7,
          "hotelId": 1,
          "pourcent": 0,
          "valeur": 73,
          "idperiod": 1,
          "marge_b": 0,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "min_nuit": 0,
          "type_calcul": 0,
          "roomid": 0,
          "hotel": {
              "nom": "One Resort Monastir",
              "hotelId": 1
          },
          "arrangement": {
              "arrangements": "All Inclusive",
              "arrId": 7
          },
          "room": null
      },
  ]
  
  
   */
    /**
     * @api {delete} /arr_tarif/:arrtarifid Delete arr_tarif
     * @apiName DELETEarr_tarif
     * @apiGroup  arr_tarif
     * @apiParam {Number} arrtarifid id arr_tarif
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude supplement
    //supplement
    /**
     * @apiDefine supplementNotFoundError
     * @apiError  supplementNotFound  <code>supplement</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "supplement pas trouvée"
     *     }
     */
    /**
   * @api {get} /supplements/:idperiod  ALL supplements
   * @apiName Getsupplements
   * @apiGroup  supplement
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiParam {Number} idhotel        unique IDhotel.
   * @apiParam {roomid} roomid        unique room.
   * @apiParam {String} nom       nom.
   * @apiSuccess {Number} suppid unique ID supplement .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} type_calcul 0/1.
   * @apiSuccess {Number} tous_saison 0/1.
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
  {
          {
          "suppid": 4958,
          "idperiod": 6272,
          "idhotel": 232,
          "operation": 0,
          "valeur": 24,
          "operation_b": 0,
          "marge_b": 5,
          "pourcent_b": 0,
          "operation_c": 0,
          "marge_c": 6,
          "pourcent_c": 0,
          "type_calcul": 0,
          "pourcent": 0,
          "nom": "Vue Mer",
          "roomid": 0,
          "tout_saison": 0,
          "idcontrat": 0,
          "hotel": {
              "nom": "LA CIGALE",
              "idhotel": 232
          }
      }
     
      ...
  ]
    * @apiUse  supplementNotFoundError
   */
    /**
   * @api {get} /supplement/:suppid GET supplement
   * @apiName Getsupplement
   * @apiGroup  supplement
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiParam {Number} idhotel        unique IDhotel.
   * @apiParam {roomid} roomid        unique room.
   * @apiParam {String} nom       nom.
   * @apiSuccess {Number} suppid unique ID supplement .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} type_calcul 0/1.
   * @apiSuccess {Number} tous_saison 0/1.
  
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
          "suppid": 30,
          "idperiod": 113,
          "idhotel": 34,
          "operation": 0,
          "valeur": 2,
          "operation_b": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_c": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "type_calcul": 0,
          "pourcent": 0,
          "nom": "Vue Mer",
          "roomid": 0,
          "tout_saison": 0,
          "idcontrat": 0
      },
  
   *
   * @apiUse  supplementNotFoundError
   */
    /**
   * @api {post} /supplement/ POST supplement
   * @apiName POSTsupplement
   * @apiGroup  supplement
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
  {
          "idperiod": 113,
          "idhotel": 34,
          "operation": 0,
          "valeur": 2,
          "operation_b": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_c": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "type_calcul": 0,
          "pourcent": 0,
          "nom": "Vue Mer",
          "roomid": 0,
          "tout_saison": 0,
          "idcontrat": 0
      },
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
  {
          "suppid": 30,
          "idperiod": 113,
          "idhotel": 34,
          "operation": 0,
          "valeur": 2,
          "operation_b": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_c": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "type_calcul": 0,
          "pourcent": 0,
          "nom": "Vue Mer",
          "roomid": 0,
          "tout_saison": 0,
          "idcontrat": 0
      },
  ]
   */
    /**
   * @api {put} /supplement/:suppid PUT supplement
   * @apiName PUTsupplement
   * @apiGroup  supplement
   *
   * @apiParam {Number} suppid        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
          "idperiod": 113,
          "idhotel": 34,
          "operation": 0,
          "valeur": 2,
          "operation_b": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_c": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "type_calcul": 0,
          "pourcent": 0,
          "nom": "Vue Mer",
          "roomid": 0,
          "tout_saison": 0,
          "idcontrat": 0
      },
       
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
   {
          "suppid": 30,
          "idperiod": 113,
          "idhotel": 34,
          "operation": 0,
          "valeur": 2,
          "operation_b": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_c": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "type_calcul": 0,
          "pourcent": 0,
          "nom": "Vue Mer",
          "roomid": 0,
          "tout_saison": 0,
          "idcontrat": 0
      },
  ]
  
  
   */
    /**
     * @api {delete} /supplement/:suppid Delete supplement
     * @apiName DELETEsupplement
     * @apiGroup  supplement
     * @apiParam {Number} suppid id supplement
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude supp_jour
    //supp_jour
    /**
     * @apiDefine supp_jourNotFoundError
     * @apiError  supp_jourNotFound  <code>supp_jour</code> pas trouvée.
     * @apiDescription Supplément Jour
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "supp_jour pas trouvée"
     *     }
     */
    /**
   * @api {get} /supp_jours/:idperiod  ALL supp_jours
   * @apiName Getsupp_jours
   * @apiGroup  supp_jour
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} suppid unique ID supp_jour .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} jour .
   * @apiSuccess {String} nom .
   * @apiSuccess {Date} date_supp .
   * @apiSuccess {Date} date_fin .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} type_calcul 0/1 .
   * @apiSuccess {Number} supp_weekend 0/1 .
   * @apiSuccess {Number} supp_single valeur single
   * @apiSuccess {Number} pourcent_s .
   * @apiSuccess {hotel} hotel.
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
  {
      "obligatoire": "0",
      "suppid": 1840,
      "idhotel": "100",
      "idperiod": "700",
      "nom": "test",
      "operation": "1",
      "valeur": "20",
      "pourcent": "1",
      "date_supp": "1970-01-01",
      "date_fin": "1970-01-01",
      "marge_b": "0",
      "operation_b": "0",
      "pourcent_b": "0",
      "marge_c": "5",
      "pourcent_c": "0",
      "operation_c": "0",
      "supp_single": "0",
      "pourcent_s": "",
      "jour": "4",
      "updatedAt": "2018-10-29T11:16:55.615Z",
      "createdAt": "2018-10-29T11:16:55.615Z"
  },
      ...
  ]
    * @apiUse  supp_jourNotFoundError
   */
    /**
   * @api {get} /supp_jour/:suppid GET supp_jour
   * @apiName Getsupp_jour
   * @apiGroup  supp_jour
   * @apiParam {Number} suppid        unique ID.
   * @apiSuccess {Number} idperiod unique ID period .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} jour .
   * @apiSuccess {String} nom .
   * @apiSuccess {Date} date_supp .
   * @apiSuccess {Date} date_fin .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} type_calcul 0/1 .
   * @apiSuccess {Number} supp_weekend 0/1 .
  
   * @apiSuccess {Number} pourcent_s .
   * @apiSuccess {hotel} hotel.
   * @apiSuccess {room} room.
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
      "obligatoire": "0",
      "suppid": 1840,
      "idhotel": "100",
      "idperiod": "700",
      "nom": "test",
      "operation": "1",
      "valeur": "20",
      "pourcent": "1",
      "date_supp": "1970-01-01",
      "date_fin": "1970-01-01",
      "marge_b": "0",
      "operation_b": "0",
      "pourcent_b": "0",
      "marge_c": "5",
      "pourcent_c": "0",
      "operation_c": "0",
      "supp_single": "0",
      "pourcent_s": "",
      "jour": "4",
      "updatedAt": "2018-10-29T11:16:55.615Z",
      "createdAt": "2018-10-29T11:16:55.615Z"
  },
  
   *
   * @apiUse  supp_jourNotFoundError
   */
    /**
   * @api {post} /supp_jour/ POST supp_jour
   * @apiName POSTsupp_jour
   * @apiGroup  supp_jour
  
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
          "idperiod": 1,
          "idhotel": 1,
          "operation": 0,
          "jour": 0,
          "valeur": 0,
          "pourcent": 1,
          "nom": "test",
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_b": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "operation_c": 0,
          "supp_weekend": 0,
          "lundi": 0, //si supp_weekend=1&& lundi==1 =>jour=2.
          "mardi": 0, //si supp_weekend=1&& mardi==1 =>jour=3.
          "mercredi": 0, //si supp_weekend=1 && mercredi==1 =>jour=4.
          "jeudi": 0, //si supp_weekend=1 && jeudi==1 =>jour=5.
          "vendredi": 0, //si supp_weekend=1 && vendredi==1 =>jour=6.
          "samedi": 0, // si supp_weekend=1 && samedi==1 =>jour=7.
          "dimanche": 0, //si supp_weekend=1 && dimanche==1 =>jour=1.
          "suup_single": 0,
          "pourcent_s": 0,
  
  
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   
  {
      "obligatoire": "0",
      "suppid": 1840,
      "idhotel": "100",
      "idperiod": "700",
      "nom": "test",
      "operation": "1",
      "valeur": "20",
      "pourcent": "1",
      "date_supp": "1970-01-01",
      "date_fin": "1970-01-01",
      "marge_b": "0",
      "operation_b": "0",
      "pourcent_b": "0",
      "marge_c": "5",
      "pourcent_c": "0",
      "operation_c": "0",
      "supp_single": "0",
      "pourcent_s": "",
      "jour": "4",
      "updatedAt": "2018-10-29T11:16:55.615Z",
      "createdAt": "2018-10-29T11:16:55.615Z"
  }
  
  ]
   */
    /**
   * @api {put} /supp_jour/:suppid PUT supp_jour
   * @apiName PUTsupp_jour
   * @apiGroup  supp_jour
   *
   * @apiParam {Number} suppid        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
          "idperiod": 1,
          "idhotel": 1,
          "operation": 0,
          "jour": 0,
          "valeur": 0,
          "pourcent": 1,
          "nom": "test",
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_b": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "operation_c": 0,
          "suup_single": 0,
          "pourcent_s": 0,
      
  
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
    {
      "obligatoire": "0",
      "suppid": 1840,
      "idhotel": "100",
      "idperiod": "700",
      "nom": "test",
      "operation": "1",
      "valeur": "20",
      "pourcent": "1",
      "date_supp": "1970-01-01",
      "date_fin": "1970-01-01",
      "marge_b": "0",
      "operation_b": "0",
      "pourcent_b": "0",
      "marge_c": "5",
      "pourcent_c": "0",
      "operation_c": "0",
      "supp_single": "0",
      "pourcent_s": "",
      "jour": "4",
      "updatedAt": "2018-10-29T11:16:55.615Z",
      "createdAt": "2018-10-29T11:16:55.615Z"
  }
  ]
  
  
   */
    /**
     * @api {delete} /supp_jour/:suppid Delete supp_jour
     * @apiName DELETEsupp_jour
     * @apiGroup  supp_jour
     * @apiParam {Number} suppid id supp_jour
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude supp_jour_dinner
    //supp_jour_dinner
    /**
     * @apiDefine supp_jour_dinnerNotFoundError
     * @apiError  supp_jour_dinnerNotFound  <code>supp_jour_dinner</code> pas trouvée.
     * @apiDescription Supplément Jour
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "supp_jour_dinner pas trouvée"
     *     }
     */
    /**
   * @api {get} /supp_jour_dinners/:idperiod  ALL supp_jour_dinners
   * @apiName Getsupp_jour_dinners
   * @apiGroup  supp_jour_dinner
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} suppid unique ID supp_jour_dinner .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} idperiod ID period .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} jour .
   * @apiSuccess {String} nom .
   * @apiSuccess {Date} date_supp .
   * @apiSuccess {Date} date_fin .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} obligatoire 0/1 .
   * @apiSuccess {Number} val_enf .
   * @apiSuccess {Number} supp_single valeur single
   * @apiSuccess {Number} pourcent_s .
   * @apiSuccess {hotel} hotel .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   {
          "suppid": 2,
          "idperiod": 3384,
          "idhotel": 102,
          "jour": 0,
          "operation": 0,
          "valeur": 110,
          "pourcent": 0,
          "obligatoire": 0,
          "nom": "Dinner Gala",
          "date_supp": "2017-12-31",
          "date_fin": "2017-12-31",
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 14,
          "operation_c": 0,
          "pourcent_c": 0,
          "supp_single": 0,
          "pourcent_s": 0,
          "val_enf": 50,
          "hotel": {
              "nom": " Zodiac",
              "idhotel": 102
          }
      },
      ...
  ]
    * @apiUse  supp_jour_dinnerNotFoundError
   */
    /**
   * @api {get} /supp_jour_dinner/:suppid GET supp_jour_dinner
   * @apiName Getsupp_jour_dinner
   * @apiGroup  supp_jour_dinner
   * @apiSuccess {Number} suppid unique ID supp_jour_dinner .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} idperiod ID period .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} jour .
   * @apiSuccess {String} nom .
   * @apiSuccess {Date} date_supp .
   * @apiSuccess {Date} date_fin .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} obligatoire 0/1 .
   * @apiSuccess {Number} val_enf .
   * @apiSuccess {Number} supp_single valeur single
   * @apiSuccess {Number} pourcent_s .
   * @apiSuccess {hotel} hotel .
  
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
   {
          "suppid": 2,
          "idperiod": 3384,
          "idhotel": 102,
          "jour": 0,
          "operation": 0,
          "valeur": 110,
          "pourcent": 0,
          "obligatoire": 0,
          "nom": "Dinner Gala",
          "date_supp": "2017-12-31",
          "date_fin": "2017-12-31",
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 14,
          "operation_c": 0,
          "pourcent_c": 0,
          "supp_single": 0,
          "pourcent_s": 0,
          "val_enf": 50,
          "hotel": {
              "nom": " Zodiac",
              "idhotel": 102
          }
      }
  
   *
   * @apiUse  supp_jour_dinnerNotFoundError
   */
    /**
   * @api {post} /supp_jour_dinner/ POST supp_jour_dinner
   * @apiName POSTsupp_jour_dinner
   * @apiGroup  supp_jour_dinner
  
  
   * @apiParamExample {json} Request-Example:
  [
   {
  
          "idperiod": 3384,
          "idhotel": 102,
          "jour": 0,
          "operation": 0,
          "valeur": 110,
          "pourcent": 0,
          "obligatoire": 0,
          "nom": "Dinner Gala",
          "date_supp": "2017-12-31",
          "date_fin": "2017-12-31",
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 14,
          "operation_c": 0,
          "pourcent_c": 0,
          "supp_single": 0,
          "pourcent_s": 0,
          "val_enf": 50
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   
   {
          "suppid": 2,
          "idperiod": 3384,
          "idhotel": 102,
          "jour": 0,
          "operation": 0,
          "valeur": 110,
          "pourcent": 0,
          "obligatoire": 0,
          "nom": "Dinner Gala",
          "date_supp": "2017-12-31",
          "date_fin": "2017-12-31",
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 14,
          "operation_c": 0,
          "pourcent_c": 0,
          "supp_single": 0,
          "pourcent_s": 0,
          "val_enf": 50
  }
  ]
   */
    /**
   * @api {put} /supp_jour_dinner/:suppid PUT supp_jour_dinner
   * @apiName PUTsupp_jour_dinner
   * @apiGroup  supp_jour_dinner
   *
   * @apiParam {Number} suppid        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
   {
  
          "idperiod": 3384,
          "idhotel": 102,
          "jour": 0,
          "operation": 0,
          "valeur": 110,
          "pourcent": 0,
          "obligatoire": 0,
          "nom": "Dinner Gala",
          "date_supp": "2017-12-31",
          "date_fin": "2017-12-31",
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 14,
          "operation_c": 0,
          "pourcent_c": 0,
          "supp_single": 0,
          "pourcent_s": 0,
          "val_enf": 50
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
     {
          "suppid": 2,
          "idperiod": 3384,
          "idhotel": 102,
          "jour": 0,
          "operation": 0,
          "valeur": 110,
          "pourcent": 0,
          "obligatoire": 0,
          "nom": "Dinner Gala",
          "date_supp": "2017-12-31",
          "date_fin": "2017-12-31",
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 14,
          "operation_c": 0,
          "pourcent_c": 0,
          "supp_single": 0,
          "pourcent_s": 0,
          "val_enf": 50
  
  
  }
  ]
  
  
   */
    /**
     * @api {delete} /supp_jour_dinner/:suppid Delete supp_jour_dinner
     * @apiName DELETEsupp_jour_dinner
     * @apiGroup  supp_jour_dinner
     * @apiParam {Number} suppid id supp_jour_dinner
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude nbre_chambre
    //nbre_chambre
    /**
     * @apiDefine nbre_chambreNotFoundError
     * @apiError  nbre_chambreNotFound  <code>nbre_chambre</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "nbre_chambre pas trouvée"
     *     }
     */
    /**
   * @api {get} /nbre_chambres/:idperiod  ALL nbre_chambres
   * @apiName Getnbre_chambres
   * @apiGroup  nbre_chambre
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} idnbre unique ID nbre_chambre .
   * @apiSuccess {Number} idperiod unique ID period .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} nbre.
   * @apiSuccess {Number} delay .
   * @apiSuccess {Date} begin .
   * @apiSuccess {Date} end .
   * @apiSuccess {room} room.
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   {
          "idnbre": 23,
          "idperiod": 108,
          "nbre": 5,
          "roomid": 2,
          "delay": 0,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          }
      },
      ...
  ]
    * @apiUse  nbre_chambreNotFoundError
   */
    /**
   * @api {get} /nbre_chambre/:idnbre GET nbre_chambre
   * @apiName Getnbre_chambre
   * @apiGroup  nbre_chambre
   * @apiParam {Number} idnbre        unique ID.
   * @apiSuccess {Number} idnbre unique ID nbre_chambre .
   * @apiSuccess {Number} idnbre unique ID nbre_chambre .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} nbre .
   * @apiSuccess {Number} delay .
   * @apiSuccess {Date} begin .
   * @apiSuccess {Date} end .
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
   {
          "idnbre": 23,
          "idperiod": 108,
          "nbre": 5,
          "roomid": 2,
          "delay": 0,
          "begin": "1970-01-01",
          "end": "1970-01-01"
      },
  
   *
   * @apiUse  nbre_chambreNotFoundError
   */
    /**
   * @api {post} /nbre_chambre/ POST nbre_chambre
   * @apiName POSTnbre_chambre
   * @apiGroup  nbre_chambre
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
   {
       
          "idperiod": 108,
          "nbre": 5,
          "roomid": 2,
          "delay": 0,
          "begin": "1970-01-01",
          "end": "1970-01-01"
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
    {
          "idnbre": 23,
          "idperiod": 108,
          "nbre": 5,
          "roomid": 2,
          "delay": 0,
          "begin": "1970-01-01",
          "end": "1970-01-01"
      }
  ]
   */
    /**
   * @api {put} /nbre_chambre/:idnbre PUT nbre_chambre
   * @apiName PUTnbre_chambre
   * @apiGroup  nbre_chambre
   *
   * @apiParam {Number} idnbre        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
   {
  
          "idperiod": 108,
          "nbre": 5,
          "roomid": 2,
          "delay": 0,
          "begin": "1970-01-01",
          "end": "1970-01-01"
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
     {
          "idnbre": 23,
          "idperiod": 108,
          "nbre": 5,
          "roomid": 2,
          "delay": 0,
          "begin": "1970-01-01",
          "end": "1970-01-01"
      }
  ]
  
  
   */
    /**
     * @api {delete} /nbre_chambre/:idnbre Delete nbre_chambre
     * @apiName DELETEnbre_chambre
     * @apiGroup  nbre_chambre
     * @apiParam {Number} idnbre id nbre_chambre
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude stop_vente
    //crude stop_vente
    //stop_vente
    /**
     * @apiDefine stop_venteNotFoundError
     * @apiError  stop_venteNotFound  <code>stop_vente</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "stop_vente pas trouvée"
     *     }
     */
    /**
   * @api {get} /stop_ventes/:idperiod  ALL stop_ventes
   * @apiName Getstop_ventes
   * @apiGroup  stop_vente
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} id unique ID stop_vente .
   * @apiSuccess {Number} idperiod unique ID period .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} idagence ID agence .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
   * @apiSuccess {room} room.
   * @apiSuccess {agence} agence.
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   {
          "id": 504,
          "idperiod": 6263,
          "idagence": 0,
          "roomid": 0,
          "date_from": "2018-06-15",
          "date_to": "2018-06-16",
          "room": null,
          "agence": null
      },
      ...
  ]
    * @apiUse  stop_venteNotFoundError
   */
    /**
   * @api {get} /stop_vente/:id GET stop_vente
   * @apiName Getstop_vente
   * @apiGroup  stop_vente
   * @apiParam {Number} id        unique ID.
   * @apiSuccess {Number} id unique ID stop_vente .
   * @apiSuccess {Number} idperiod unique ID period .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} idagence ID agence .
   * @apiSuccess {Date} date_from .
   * @apiSuccess {Date} date_to .
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
          "id": 504,
          "idperiod": 6263,
          "idagence": 0,
          "roomid": 0,
          "date_from": "2018-06-15",
          "date_to": "2018-06-16"
      }
   *
   * @apiUse  stop_venteNotFoundError
   */
    /**
   * @api {post} /stop_vente/ POST stop_vente
   * @apiName POSTstop_vente
   * @apiGroup  stop_vente
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
  {
   
          "idperiod": 6263,
          "idagence": 0,
          "roomid": 0,
          "date_from": "2018-06-15",
          "date_to": "2018-06-16",
          "room": null,
          "agence": null
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
  {
          "id": 504,
          "idperiod": 6263,
          "idagence": 0,
          "roomid": 0,
          "date_from": "2018-06-15",
          "date_to": "2018-06-16"
      }
  ]
   */
    /**
   * @api {put} /stop_vente/:id PUT stop_vente
   * @apiName PUTstop_vente
   * @apiGroup  stop_vente
   *
   * @apiParam {Number} id        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
          "idperiod": 6263,
          "idagence": 0,
          "roomid": 0,
          "date_from": "2018-06-15",
          "date_to": "2018-06-16"
      }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
     {
          "id": 504,
          "idperiod": 6263,
          "idagence": 0,
          "roomid": 0,
          "date_from": "2018-06-15",
          "date_to": "2018-06-16",
          "room": null,
          "agence": null
      }
  ]
  
  
   */
    /**
     * @api {delete} /stop_vente/:id Delete stop_vente
     * @apiName DELETEstop_vente
     * @apiGroup  stop_vente
     * @apiParam {Number} id id stop_vente
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude type_tarif
    //type_tarif
    /**
     * @apiDefine type_tarifNotFoundError
     * @apiError  type_tarifNotFound  <code>type_tarif</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "type_tarif pas trouvée"
     *     }
     */
    /**
   * @api {get} /type_tarifs/:idperiod  ALL type_tarifs
   * @apiName Gettype_tarifs
   * @apiGroup  type_tarif
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} typetarifid unique ID type_tarif .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} rang .
   * @apiSuccess {Number} min_pers .
   * @apiSuccess {Number} max_pers .
   * @apiSuccess {Number} max_adults .
   * @apiSuccess {Number} min_adults .
   * @apiSuccess {Number} min_enf .
   * @apiSuccess {Number} max_enf .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} type_calcul 0/1 .
   * @apiSuccess {Number} supp_weekend_single 0/1 .
   * @apiSuccess {Number} lundi 0/1.
   * @apiSuccess {Number} mardi 0/1.
   * @apiSuccess {Number} mercredi 0/1.
   * @apiSuccess {Number} jeudi 0/1.
   * @apiSuccess {Number} vendredi 0/1.
   * @apiSuccess {Number} samedi 0/1.
   * @apiSuccess {Number} dimanche 0/1.
   * @apiSuccess {Number} valeur_s valeur single
   * @apiSuccess {Number} pourcent_s .
   * @apiSuccess {Number} single 0/1.
   * @apiSuccess {hotel} hotel .
   * @apiSuccess {room} room.
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   {
          "typetarifid": 1,
          "roomid": 2,
          "idperiod": 1,
          "idhotel": 1,
          "operation": 0,
          "valeur": 0,
          "pourcent": 1,
          "rang": 0,
          "min_pers": 2,
          "max_pers": 2,
          "max_adults": 0,
          "min_adults": 0,
          "min_enf": 0,
          "max_enf": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_b": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "operation_c": 0,
          "type_calcul": 0,
          "lundi": 0,
          "mardi": 0,
          "mercredi": 0,
          "jeudi": 0,
          "vendredi": 0,
          "samedi": 0,
          "dimanche": 0,
          "valeur_s": 0,
          "pourcent_s": 0,
          "single": 0,
          "supp_weekend_single": 0,
          "hotel": {
              "nom": "One Resort Monastir",
              "idhotel": 1
          },
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          }
      },
      ...
  ]
    * @apiUse  type_tarifNotFoundError
   */
    /**
   * @api {get} /type_tarif/:typetarifid GET type_tarif
   * @apiName Gettype_tarif
   * @apiGroup  type_tarif
   * @apiParam {Number} typetarifid        unique ID.
   * @apiSuccess {Number} typetarifid unique ID type_tarif .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} operation 0/1.
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} pourcent 0/1 .
   * @apiSuccess {Number} rang .
   * @apiSuccess {Number} min_pers .
   * @apiSuccess {Number} max_pers .
   * @apiSuccess {Number} max_adults .
   * @apiSuccess {Number} min_adults .
   * @apiSuccess {Number} min_enf .
   * @apiSuccess {Number} max_enf .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} marge_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} type_calcul 0/1 .
   * @apiSuccess {Number} supp_weekend_single 0/1 .
   * @apiSuccess {Number} lundi 0/1.
   * @apiSuccess {Number} mardi 0/1.
   * @apiSuccess {Number} mercredi 0/1.
   * @apiSuccess {Number} jeudi 0/1.
   * @apiSuccess {Number} vendredi 0/1.
   * @apiSuccess {Number} samedi 0/1.
   * @apiSuccess {Number} dimanche 0/1 .
   * @apiSuccess {Number} valeur_s valeur single
   * @apiSuccess {Number} pourcent_s .
   * @apiSuccess {Number} single 0/1 .
   * @apiSuccess {hotel} hotel .
   * @apiSuccess {room} room.
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
   {
          "typetarifid": 1,
          "roomid": 2,
          "idperiod": 1,
          "idhotel": 1,
          "operation": 0,
          "valeur": 0,
          "pourcent": 1,
          "rang": 0,
          "min_pers": 2,
          "max_pers": 2,
          "max_adults": 0,
          "min_adults": 0,
          "min_enf": 0,
          "max_enf": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_b": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "operation_c": 0,
          "type_calcul": 0,
          "lundi": 0,
          "mardi": 0,
          "mercredi": 0,
          "jeudi": 0,
          "vendredi": 0,
          "samedi": 0,
          "dimanche": 0,
          "valeur_s": 0,
          "pourcent_s": 0,
          "single": 0,
          "supp_weekend_single": 0,
          "hotel": {
              "nom": "One Resort Monastir",
              "idhotel": 1
          },
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          }
      },
  
   *
   * @apiUse  type_tarifNotFoundError
   */
    /**
   * @api {post} /type_tarif/ POST type_tarif
   * @apiName POSTtype_tarif
   * @apiGroup  type_tarif
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
          "roomid": 2,
          "idperiod": 1,
          "idhotel": 1,
          "operation": 0,
          "valeur": 0,
          "pourcent": 1,
          "rang": 0,
          "min_pers": 2,
          "max_pers": 2,
          "max_adults": 0,
          "min_adults": 0,
          "min_enf": 0,
          "max_enf": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_b": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "operation_c": 0,
          "type_calcul": 0,
          "lundi": 0,
          "mardi": 0,
          "mercredi": 0,
          "jeudi": 0,
          "vendredi": 0,
          "samedi": 0,
          "dimanche": 0,
          "valeur_s": 0,
          "pourcent_s": 0,
          "single": 0,
          "supp_weekend_single": 0,
  
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   {
          "typetarifid": 1,
          "roomid": 2,
          "idperiod": 1,
          "idhotel": 1,
          "operation": 0,
          "valeur": 0,
          "pourcent": 1,
          "rang": 0,
          "min_pers": 2,
          "max_pers": 2,
          "max_adults": 0,
          "min_adults": 0,
          "min_enf": 0,
          "max_enf": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_b": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "operation_c": 0,
          "type_calcul": 0,
          "lundi": 0,
          "mardi": 0,
          "mercredi": 0,
          "jeudi": 0,
          "vendredi": 0,
          "samedi": 0,
          "dimanche": 0,
          "valeur_s": 0,
          "pourcent_s": 0,
          "single": 0,
          "supp_weekend_single": 0,
          "hotel": {
              "nom": "One Resort Monastir",
              "idhotel": 1
          },
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          }
  }
  ]
   */
    /**
   * @api {put} /type_tarif/:typetarifid PUT type_tarif
   * @apiName PUTtype_tarif
   * @apiGroup  type_tarif
   *
   * @apiParam {Number} typetarifid        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
          "roomid": 2,
          "idperiod": 1,
          "idhotel": 1,
          "operation": 0,
          "valeur": 0,
          "pourcent": 1,
          "rang": 0,
          "min_pers": 2,
          "max_pers": 2,
          "max_adults": 0,
          "min_adults": 0,
          "min_enf": 0,
          "max_enf": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_b": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "operation_c": 0,
          "type_calcul": 0,
          "lundi": 0,
          "mardi": 0,
          "mercredi": 0,
          "jeudi": 0,
          "vendredi": 0,
          "samedi": 0,
          "dimanche": 0,
          "valeur_s": 0,
          "pourcent_s": 0,
          "single": 0,
          "supp_weekend_single": 0,
       }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
     {
          "typetarifid": 1,
          "roomid": 2,
          "idperiod": 1,
          "idhotel": 1,
          "operation": 0,
          "valeur": 0,
          "pourcent": 1,
          "rang": 0,
          "min_pers": 2,
          "max_pers": 2,
          "max_adults": 0,
          "min_adults": 0,
          "min_enf": 0,
          "max_enf": 0,
          "marge_b": 0,
          "pourcent_b": 0,
          "operation_b": 0,
          "marge_c": 0,
          "pourcent_c": 0,
          "operation_c": 0,
          "type_calcul": 0,
          "lundi": 0,
          "mardi": 0,
          "mercredi": 0,
          "jeudi": 0,
          "vendredi": 0,
          "samedi": 0,
          "dimanche": 0,
          "valeur_s": 0,
          "pourcent_s": 0,
          "single": 0,
          "supp_weekend_single": 0,
          "hotel": {
              "nom": "One Resort Monastir",
              "idhotel": 1
          },
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          }
  ]
  
  
   */
    /**
     * @api {delete} /type_tarif/:typetarifid Delete type_tarif
     * @apiName DELETEtype_tarif
     * @apiGroup  type_tarif
     * @apiParam {Number} typetarifid id type_tarif
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //reduction_sejour
    /**
     * @apiDefine reduction_sejourNotFoundError
     * @apiError  reduction_sejourNotFound  <code>reduction_sejour</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "reduction_sejour pas trouvée"
     *     }
     */
    /**
   * @api {get} /reduction_sejours/:idperiod  ALL reduction_sejours
   * @apiName Getreduction_sejours
   * @apiGroup  reduction_sejour
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} sejourid unique ID reduction_sejour .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} hotelId ID hotel .
   * @apiSuccess {Number} arrid .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} valeur_single .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent_s 0/1 .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} marge_c 0/1.
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} marge_s_b .
   * @apiSuccess {Number} operation_s_b .
   * @apiSuccess {Number} pourcent_s_b.
   * @apiSuccess {Number} marge_s_b.
   * @apiSuccess {Number} marge_s_c .
   * @apiSuccess {Number} operation_s_c .
   * @apiSuccess {Number} pourcent_s_c .
   * @apiSuccess {Number} min_nuit 0/1 .
   * @apiSuccess {Number} max_nuit 0/1 .
   * @apiSuccess {arrangement} arrangement .
   * @apiSuccess {hotel} hotel .
  
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   {
          "sejourid": 2243,
          "arrid": 2,
          "hotelId": 100,
          "pourcent": 0,
          "pourcent_s": 0,
          "valeur": 2,
          "valeur_single": 0,
          "idperiod": 6186,
          "marge_b": 0,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 5,
          "max_nuit": 6,
          "hotel": {
              "nom": "Chich Khan",
              "idhotel": 100
          },
          "arrangement": {
              "arrangements": "Logement Petit Déjeuner",
              "arrid": 2
          }
  },
      ...
  ]
    * @apiUse  reduction_sejourNotFoundError
   */
    /**
   * @api {get} /reduction_sejour/:sejourid GET reduction_sejour
   * @apiName Getreduction_sejour
   * @apiGroup  reduction_sejour
   * @apiParam {Number} sejourid        unique ID.
   * @apiSuccess {Number} sejourid unique ID reduction_sejour .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} hotelId ID hotel .
   * @apiSuccess {Number} arrid .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} valeur_single .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent_s 0/1 .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} marge_c 0/1.
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} marge_s_b .
   * @apiSuccess {Number} operation_s_b .
   * @apiSuccess {Number} pourcent_s_b.
   * @apiSuccess {Number} marge_s_b.
   * @apiSuccess {Number} marge_s_c .
   * @apiSuccess {Number} operation_s_c .
   * @apiSuccess {Number} pourcent_s_c .
   * @apiSuccess {Number} min_nuit 0/1 .
   * @apiSuccess {Number} max_nuit 0/1 .
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
      "sejourid": 2243,
      "arrid": "2",
      "hotelId": "100",
      "pourcent": 0,
      "pourcent_s": 0,
      "valeur": 2,
      "valeur_single": 0,
      "idperiod": 6186,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 5,
      "max_nuit": 6
  }
  
   *
   * @apiUse  reduction_sejourNotFoundError
   */
    /**
   * @api {post} /reduction_sejour/ POST reduction_sejour
   * @apiName POSTreduction_sejour
   * @apiGroup  reduction_sejour
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
   
  {
  
      "arrid": "2",
      "hotelId": "100",
      "pourcent": 0,
      "pourcent_s": 0,
      "valeur": 2,
      "valeur_single": 0,
      "idperiod": 6186,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 5,
      "max_nuit": 6
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   
      "sejourid": 2243,
      "arrid": "2",
      "hotelId": "100",
      "pourcent": 0,
      "pourcent_s": 0,
      "valeur": 2,
      "valeur_single": 0,
      "idperiod": 6186,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 5,
      "max_nuit": 6,
      "updatedAt": "2018-10-23T14:24:43.553Z",
      "createdAt": "2018-10-23T14:24:43.553Z"
  ]
   */
    /**
   * @api {put} /reduction_sejour/:sejourid PUT reduction_sejour
   * @apiName PUTreduction_sejour
   * @apiGroup  reduction_sejour
   *
   * @apiParam {Number} sejourid        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
      "arrid": "2",
      "hotelId": "100",
      "pourcent": 0,
      "pourcent_s": 0,
      "valeur": 2,
      "valeur_single": 0,
      "idperiod": 6186,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 5,
      "max_nuit": 6
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
  {
      "sejourid": 2243,
      "arrid": "2",
      "hotelId": "100",
      "pourcent": 0,
      "pourcent_s": 0,
      "valeur": 2,
      "valeur_single": 0,
      "idperiod": 6186,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 5,
      "max_nuit": 6,
      "updatedAt": "2018-10-23T14:24:43.553Z"
  }
  ]
  
  
   */
    /**
     * @api {delete} /reduction_sejour/:sejourid Delete reduction_sejour
     * @apiName DELETEreduction_sejour
     * @apiGroup  reduction_sejour
     * @apiParam {Number} sejourid id reduction_sejour
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude reduction_sejour
    //supplement_sejour
    /**
     * @apiDefine supplement_sejourNotFoundError
     * @apiError  supplement_sejourNotFound  <code>supplement_sejour</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "supplement_sejour pas trouvée"
     *     }
     */
    /**
   * @api {get} /supplement_sejour/:idperiod  ALL supplement_sejour
   * @apiName Getsupplement_sejours
   * @apiGroup  supplement_sejour
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} sejourid unique ID supplement_sejour .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} hotelId ID hotel .
   * @apiSuccess {Number} arrid .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} valeur_single .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent_s 0/1 .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} marge_c 0/1.
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} marge_s_b .
   * @apiSuccess {Number} operation_s_b .
   * @apiSuccess {Number} pourcent_s_b .
   * @apiSuccess {Number} marge_s_b .
   * @apiSuccess {Number} marge_s_c .
   * @apiSuccess {Number} operation_s_c .
   * @apiSuccess {Number} pourcent_s_c .
   * @apiSuccess {Number} min_nuit 0/1 .
   * @apiSuccess {Number} max_nuit 0/1 .
   * @apiSuccess {arrangement} arrangement .
   * @apiSuccess {hotel} hotel  .
  
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
  {
          "sejourid": 1,
          "arrid": 0,
          "hotelId": 37,
          "pourcent": 1,
          "pourcent_s": 0,
          "valeur": 10,
          "valeur_single": 0,
          "idperiod": 2080,
          "marge_b": 0,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 2,
          "max_nuit": 0,
          "hotel": {
              "nom": "Thalassa Resort & Aquapark",
              "idhotel": 37
          },
          "arrangement": null
      }
  },
      ...
  ]
    * @apiUse  supplement_sejourNotFoundError
   */
    /**
   * @api {get} /supplement_sejour/:sejourid GET supplement_sejour
   * @apiName Getsupplement_sejour
   * @apiGroup  supplement_sejour
   * @apiParam {Number} sejourid        unique ID.
   * @apiSuccess {Number} sejourid unique ID supplement_sejour .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} hotelId ID hotel .
   * @apiSuccess {Number} arrid .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} valeur_single .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} pourcent_s 0/1 .
   * @apiSuccess {Number} marge_b .
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} marge_c 0/1.
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} marge_s_b .
   * @apiSuccess {Number} operation_s_b .
   * @apiSuccess {Number} pourcent_s_b.
   * @apiSuccess {Number} marge_s_b.
   * @apiSuccess {Number} marge_s_c .
   * @apiSuccess {Number} operation_s_c .
   * @apiSuccess {Number} pourcent_s_c .
   * @apiSuccess {Number} min_nuit 0/1 .
   * @apiSuccess {Number} max_nuit 0/1 .
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
      "sejourid": 1,
      "arrid": 0,
      "hotelId": 37,
      "pourcent": 1,
      "pourcent_s": 0,
      "valeur": 10,
      "valeur_single": 0,
      "idperiod": 2080,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 2,
      "max_nuit": 0
  }
  
   *
   * @apiUse  supplement_sejourNotFoundError
   */
    /**
   * @api {post} /supplement_sejour/ POST supplement_sejour
   * @apiName POSTsupplement_sejour
   * @apiGroup  supplement_sejour
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
   
  {
  
      "arrid": "2",
      "hotelId": "100",
      "pourcent": 0,
      "pourcent_s": 0,
      "valeur": 2,
      "valeur_single": 0,
      "idperiod": 6186,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 5,
      "max_nuit": 6
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
   
  
      "sejourid": 1,
      "arrid": 0,
      "hotelId": 37,
      "pourcent": 1,
      "pourcent_s": 0,
      "valeur": 10,
      "valeur_single": 0,
      "idperiod": 2080,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 2,
      "max_nuit": 0,
      "updatedAt": "2018-10-23T14:24:43.553Z",
      "createdAt": "2018-10-23T14:24:43.553Z"
  ]
   */
    /**
   * @api {put} /supplement_sejour/:sejourid PUT supplement_sejour
   * @apiName PUTsupplement_sejour
   * @apiGroup  supplement_sejour
   *
   * @apiParam {Number} sejourid        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
      "arrid": "2",
      "hotelId": "100",
      "pourcent": 0,
      "pourcent_s": 0,
      "valeur": 2,
      "valeur_single": 0,
      "idperiod": 6186,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 5,
      "max_nuit": 6
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
  {
  
      "sejourid": 1,
      "arrid": 0,
      "hotelId": 37,
      "pourcent": 1,
      "pourcent_s": 0,
      "valeur": 10,
      "valeur_single": 0,
      "idperiod": 2080,
      "marge_b": 0,
      "operation_b": 0,
      "pourcent_b": 0,
      "marge_c": 0,
      "operation_c": 0,
      "pourcent_c": 0,
      "marge_s_b": 0,
      "operation_s_b": 0,
      "pourcent_s_b": 0,
      "marge_s_c": 0,
      "operation_s_c": 0,
      "pourcent_s_c": 0,
      "min_nuit": 2,
      "max_nuit": 0,
      "updatedAt": "2018-10-23T14:24:43.553Z"
  }
  ]
  
  
   */
    /**
     * @api {delete} /supplement_sejour/:sejourid Delete supplement_sejour
     * @apiName DELETEsupplement_sejour
     * @apiGroup  supplement_sejour
     * @apiParam {Number} sejourid id supplement_sejour
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude supplement_sejour
    //crude supp_pax
    //supp_pax
    /**
     * @apiDefine supp_paxNotFoundError
     * @apiError  supp_paxNotFound  <code>supp_pax</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "supp_pax pas trouvée"
     *     }
     */
    /**
   * @api {get} /supp_paxs/:idperiod  ALL supp_paxs
   * @apiName Getsupp_paxs
   * @apiGroup  supp_pax
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} id unique ID supp_pax .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} arrid .
   * @apiSuccess {String} nom .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} nbadult .
   * @apiSuccess {Number} rang .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} bebe 0/1.
   * @apiSuccess {Number} max_bebes .
   * @apiSuccess {Number} max_adults .
   * @apiSuccess {Number} min_adults .
   * @apiSuccess {Number} enfant 0/1 .
   * @apiSuccess {Number} adult 0/1 .
   * @apiSuccess {Number} gratuit 0/1 .
   * @apiSuccess {Number} min_age .
   * @apiSuccess {Number} max_age .
   * @apiSuccess {Number} min_enf .
   * @apiSuccess {Number} max_enf .
   * @apiSuccess {Number} marge_b 0/1 .
   * @apiSuccess {Number} operation_b 0/1 .
   * @apiSuccess {Number} pourcent_b 0/1 .
    * @apiSuccess {Number} marge_c 0/1 .
   * @apiSuccess {Number} operation_c 0/1 .
   * @apiSuccess {Number} pourcent_c 0/1 .
   * @apiSuccess {Number} add_single 0/1 .
   * @apiSuccess {Number} tout_saison 0/1 .
   * @apiSuccess {Number} tout_adult 0/1 .
   * @apiSuccess {arrangments} arrangement .
   * @apiSuccess {hotel} hotel .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
    {
          "id": 6,
          "idperiod": 1274,
          "idhotel": 207,
          "idcontrat": 294,
          "nom": "Adultes",
          "operation": 0,
          "valeur": 140,
          "nbadult": 0,
          "min_adults": 3,
          "max_adults": 3,
          "rang": 3,
          "pourcent": 0,
          "bebe": 0,
          "max_bebes": 1,
          "enfant": 0,
          "adult": 1,
          "min_age": 0,
          "max_age": 0,
          "min_enf": 0,
          "max_enf": 0,
          "add_single": 0,
          "tout_saison": 1,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "gratuit": 0,
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 12,
          "operation_c": 0,
          "pourcent_c": 0,
          "arrid": 0,
          "hotel": {
              "nom": "MOVENPICK Gammarth",
              "idhotel": 207
          },
          "arrangement": null
      },
      ...
  ]
    * @apiUse  supp_paxNotFoundError
   */
    /**
   * @api {get} /supp_pax/:id GET supp_pax
   * @apiName Getsupp_pax
   * @apiGroup  supp_pax
   * @apiSuccess {Number} id unique ID supp_pax .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} arrid . * @apiSuccess {Number} id unique ID supp_pax .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} arrid .
   * @apiSuccess {String} nom .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} nbadult .
   * @apiSuccess {Number} rang .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} bebe 0/1.
   * @apiSuccess {Number} max_bebes .
   * @apiSuccess {Number} max_adults .
   * @apiSuccess {Number} min_adults .
   * @apiSuccess {Number} enfant 0/1 .
   * @apiSuccess {Number} adult 0/1 .
   * @apiSuccess {Number} gratuit 0/1 .
   * @apiSuccess {Number} min_age .
   * @apiSuccess {Number} max_age .
   * @apiSuccess {Number} min_enf .
   * @apiSuccess {Number} max_enf .
   * @apiSuccess {Number} marge_b 0/1 .
   * @apiSuccess {Number} operation_b 0/1 .
   * @apiSuccess {Number} pourcent_b 0/1 .
    * @apiSuccess {Number} marge_c 0/1 .
   * @apiSuccess {Number} operation_c 0/1 .
   * @apiSuccess {Number} pourcent_c 0/1 .
   * @apiSuccess {Number} add_single 0/1 .
   * @apiSuccess {Number} tout_saison 0/1 .
   * @apiSuccess {String} nom .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} nbadult .
   * @apiSuccess {Number} rang .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} bebe 0/1.
   * @apiSuccess {Number} max_bebes .
   * @apiSuccess {Number} max_adults .
   * @apiSuccess {Number} min_adults .
   * @apiSuccess {Number} enfant 0/1 .
   * @apiSuccess {Number} adult 0/1 .
   * @apiSuccess {Number} gratuit 0/1 .
   * @apiSuccess {Number} min_age .
   * @apiSuccess {Number} max_age .
   * @apiSuccess {Number} min_enf .
   * @apiSuccess {Number} max_enf .
   * @apiSuccess {Number} marge_b 0/1 .
   * @apiSuccess {Number} operation_b 0/1 .
   * @apiSuccess {Number} pourcent_b 0/1 .
    * @apiSuccess {Number} marge_c 0/1 .
   * @apiSuccess {Number} operation_c 0/1 .
   * @apiSuccess {Number} pourcent_c 0/1 .
   * @apiSuccess {Number} add_single 0/1 .
   * @apiSuccess {Number} tout_saison 0/1 .
  
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
   {
             "id": 6,
          "idperiod": 1274,
          "idhotel": 207,
          "idcontrat": 294,
          "nom": "Adultes",
          "operation": 0,
          "valeur": 140,
          "nbadult": 0,
          "min_adults": 3,
          "max_adults": 3,
          "rang": 3,
          "pourcent": 0,
          "bebe": 0,
          "max_bebes": 1,
          "enfant": 0,
          "adult": 1,
          "min_age": 0,
          "max_age": 0,
          "min_enf": 0,
          "max_enf": 0,
          "add_single": 0,
          "tout_saison": 1,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "gratuit": 0,
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 12,
          "operation_c": 0,
          "pourcent_c": 0,
          "arrid": 0
  }
  
   *
   * @apiUse  supp_paxNotFoundError
   */
    /**
   * @api {post} /supp_pax/ POST supp_pax
   * @apiName POSTsupp_pax
   * @apiGroup  supp_pax
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
          "idperiod": 1274,
          "idhotel": 207,
          "idcontrat": 294,
          "nom": "Adultes",
          "operation": 0,
          "valeur": 140,
          "nbadult": 0,
          "min_adults": 3,
          "max_adults": 3,
          "rang": 3,
          "pourcent": 0,
          "bebe": 0,
          "max_bebes": 1,
          "enfant": 0,
          "adult": 1,
          "min_age": 0,
          "max_age": 0,
          "min_enf": 0,
          "max_enf": 0,
          "add_single": 0,
          "tout_saison": 1,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "gratuit": 0,
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 12,
          "operation_c": 0,
          "pourcent_c": 0,
          "arrid": 0,
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
          "id": 6,
          "idperiod": 1274,
          "idhotel": 207,
          "idcontrat": 294,
          "nom": "Adultes",
          "operation": 0,
          "valeur": 140,
          "nbadult": 0,
          "min_adults": 3,
          "max_adults": 3,
          "rang": 3,
          "pourcent": 0,
          "bebe": 0,
          "max_bebes": 1,
          "enfant": 0,
          "adult": 1,
          "min_age": 0,
          "max_age": 0,
          "min_enf": 0,
          "max_enf": 0,
          "add_single": 0,
          "tout_saison": 1,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "gratuit": 0,
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 12,
          "operation_c": 0,
          "pourcent_c": 0,
          "arrid": 0,
      "updatedAt": "2018-10-23T14:24:43.553Z",
      "createdAt": "2018-10-23T14:24:43.553Z"
  ]
   */
    /**
   * @api {put} /supp_pax/:id PUT supp_pax
   * @apiName PUTsupp_pax
   * @apiGroup  supp_pax
   *
   * @apiParam {Number} id        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
  
          "idperiod": 1274,
          "idhotel": 207,
          "idcontrat": 294,
          "nom": "Adultes",
          "operation": 0,
          "valeur": 140,
          "nbadult": 0,
          "min_adults": 3,
          "max_adults": 3,
          "rang": 3,
          "pourcent": 0,
          "bebe": 0,
          "max_bebes": 1,
          "enfant": 0,
          "adult": 1,
          "min_age": 0,
          "max_age": 0,
          "min_enf": 0,
          "max_enf": 0,
          "add_single": 0,
          "tout_saison": 1,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "gratuit": 0,
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 12,
          "operation_c": 0,
          "pourcent_c": 0,
          "arrid": 0
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
  {
          "id": 6,
          "idperiod": 1274,
          "idhotel": 207,
          "idcontrat": 294,
          "nom": "Adultes",
          "operation": 0,
          "valeur": 140,
          "nbadult": 0,
          "min_adults": 3,
          "max_adults": 3,
          "rang": 3,
          "pourcent": 0,
          "bebe": 0,
          "max_bebes": 1,
          "enfant": 0,
          "adult": 1,
          "min_age": 0,
          "max_age": 0,
          "min_enf": 0,
          "max_enf": 0,
          "add_single": 0,
          "tout_saison": 1,
          "begin": "1970-01-01",
          "end": "1970-01-01",
          "gratuit": 0,
          "marge_b": 10,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 12,
          "operation_c": 0,
          "pourcent_c": 0,
          "arrid": 0,
      "updatedAt": "2018-10-23T14:26:40.733Z"
  }
  ]
  
  
   */
    /**
     * @api {delete} /supp_pax/:id Delete supp_pax
     * @apiName DELETEsupp_pax
     * @apiGroup  supp_pax
     * @apiParam {Number} id id supp_pax
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude reduction_chambre
    //reduction_chambre
    /**
     * @apiDefine reduction_chambreNotFoundError
     * @apiError  reduction_chambreNotFound  <code>reduction_chambre</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "reduction_chambre pas trouvée"
     *     }
     */
    /**
   * @api {get} /reduction_chambres/:idperiod  ALL reduction_chambres
   * @apiName Getreduction_chambres
   * @apiGroup  reduction_chambre
   *
  
   *
   * @apiParam {Number} idperiod        unique IDPeriod.
   * @apiSuccess {Number} idreduction unique ID reduction_chambre .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} arrid .
   * @apiSuccess {String} nom .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} nbadult .
   * @apiSuccess {Number} rang .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} bebe 0/1.
   * @apiSuccess {Number} max_bebes .
   * @apiSuccess {Number} max_adults .
   * @apiSuccess {Number} min_adults .
   * @apiSuccess {Number} enfant 0/1 .
   * @apiSuccess {Number} adult 0/1 .
   * @apiSuccess {Number} min_age .
   * @apiSuccess {Number} max_age .
   * @apiSuccess {Number} min_enf .
   * @apiSuccess {Number} max_enf .
   * @apiSuccess {Number} add_single 0/1 .
   * @apiSuccess {Number} tout_saison 0/1 .
   * @apiSuccess {Number} annul_single 0/1 .
   * @apiSuccess {Number} important 0/1 .
   * @apiSuccess {arrangments} arrangement .
  
  
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
    {
          "idreduction": 4602,
          "idperiod": 100,
          "idhotel": 31,
          "idcontrat": 31,
          "arrid": 0,
          "nom": "Enfant 2 à 12 ans + 1 adulte",
          "operation": 1,
          "valeur": 30,
          "nbadult": 0,
          "min_adults": 1,
          "max_adults": 1,
          "rang": 0,
          "pourcent": 1,
          "bebe": 0,
          "max_bebes": 1,
          "enfant": 1,
          "adult": 0,
          "min_age": 2,
          "max_age": 12,
          "min_enf": 1,
          "max_enf": 2,
          "add_single": 1,
          "tout_saison": 0,
          "annul_single": 0,
          "important": 0,
          "arrangement": null
      },
      ...
  ]
    * @apiUse  reduction_chambreNotFoundError
   */
    /**
   * @api {get} /reduction_chambre/:idreduction GET reduction_chambre
   * @apiName Getreduction_chambre
   * @apiGroup  reduction_chambre
   * @apiParam {Number} idreduction        unique ID.
   * @apiSuccess {Number} idreduction unique ID reduction_chambre .
   * @apiSuccess {Number} idperiod unique Idperiod.
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idhotel ID hotel .
   * @apiSuccess {Number} arrid .
   * @apiSuccess {String} nom .
   * @apiSuccess {Number} valeur .
   * @apiSuccess {Number} operation 0/1 .
   * @apiSuccess {Number} nbadult .
   * @apiSuccess {Number} rang .
   * @apiSuccess {Number} pourcent 0/1.
   * @apiSuccess {Number} bebe 0/1.
   * @apiSuccess {Number} max_bebes .
   * @apiSuccess {Number} max_adults .
   * @apiSuccess {Number} min_adults .
   * @apiSuccess {Number} enfant 0/1 .
   * @apiSuccess {Number} adult 0/1 .
   * @apiSuccess {Number} min_age .
   * @apiSuccess {Number} max_age .
   * @apiSuccess {Number} min_enf .
   * @apiSuccess {Number} max_enf .
   * @apiSuccess {Number} add_single 0/1 .
   * @apiSuccess {Number} tout_saison 0/1 .
   * @apiSuccess {Number} annul_single 0/1 .
   * @apiSuccess {Number} important 0/1 .
   * @apiSuccess {arrangments} arrangement .
   
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
   {
      "idreduction": 4602,
      "idperiod": 100,
      "idhotel": 31,
      "idcontrat": 31,
      "arrid": 0,
      "nom": "Enfant 2 à 12 ans + 1 adulte",
      "operation": 1,
      "valeur": 30,
      "nbadult": 0,
      "min_adults": 1,
      "max_adults": 1,
      "rang": 0,
      "pourcent": 1,
      "bebe": 0,
      "max_bebes": 1,
      "enfant": 1,
      "adult": 0,
      "min_age": 2,
      "max_age": 12,
      "min_enf": 1,
      "max_enf": 2,
      "add_single": 1,
      "add_double": null,
      "tout_saison": 0,
      "annul_single": 0,
      "important": 0
  }
  
   *
   * @apiUse  reduction_chambreNotFoundError
   */
    /**
   * @api {post} /reduction_chambre/ POST reduction_chambre
   * @apiName POSTreduction_chambre
   * @apiGroup  reduction_chambre
   *
  
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
      "idperiod": 100,
      "idhotel": 31,
      "idcontrat": 31,
      "arrid": 0,
      "nom": "Enfant 2 à 12 ans + 1 adulte",
      "operation": 1,
      "valeur": 30,
      "nbadult": 0,
      "min_adults": 1,
      "max_adults": 1,
      "rang": 0,
      "pourcent": 1,
      "bebe": 0,
      "max_bebes": 1,
      "enfant": 1,
      "adult": 0,
      "min_age": 2,
      "max_age": 12,
      "min_enf": 1,
      "max_enf": 2,
      "add_single": 1,
      "tout_saison": 0,
      "annul_single": 0,
      "important": 0
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
    "idcontrat": "0",
      "idreduction": 18872,
      "idhotel": "33",
      "idperiod": "5",
      "arrid": "2",
      "nom": "test",
      "operation": "1",
      "valeur": "30",
      "nbadult": "0",
      "min_adults": "1",
      "max_adults": "1",
      "rang": "0",
      "pourcent": "1",
      "bebe": "0",
      "max_bebes": "1",
      "enfant": "1",
      "adult": "0",
      "min_age": "2",
      "max_age": "12",
      "min_enf": "1",
      "max_enf": "2",
      "add_single": "1",
      "tout_saison": "0",
      "annul_single": "0",
      "important": "0",
      "updatedAt": "2018-10-23T14:24:43.553Z",
      "createdAt": "2018-10-23T14:24:43.553Z"
  ]
   */
    /**
   * @api {put} /reduction_chambre/:idreduction PUT reduction_chambre
   * @apiName PUTreduction_chambre
   * @apiGroup  reduction_chambre
   *
   * @apiParam {Number} idreduction        unique ID.
  
   * @apiParamExample {json} Request-Example:
  [
  {
  
      "idperiod": 100,
      "idhotel": 31,
      "idcontrat": 31,
      "arrid": 0,
      "nom": "Enfant 2 à 12 ans + 1 adulte",
      "operation": 1,
      "valeur": 30,
      "nbadult": 0,
      "min_adults": 1,
      "max_adults": 1,
      "rang": 0,
      "pourcent": 1,
      "bebe": 0,
      "max_bebes": 1,
      "enfant": 1,
      "adult": 0,
      "min_age": 2,
      "max_age": 12,
      "min_enf": 1,
      "max_enf": 2,
      "add_single": 1,
      "tout_saison": 0,
      "annul_single": 0,
      "important": 0
  }
  ]
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  [
  {
      "idreduction": 18872,
      "idperiod": "5",
      "idhotel": "33",
      "idcontrat": 0,
      "arrid": "2",
      "nom": "test",
      "operation": "1",
      "valeur": "30",
      "nbadult": "0",
      "min_adults": "1",
      "max_adults": "1",
      "rang": "0",
      "pourcent": "1",
      "bebe": "0",
      "max_bebes": "1",
      "enfant": "1",
      "adult": "0",
      "min_age": "2",
      "max_age": "12",
      "min_enf": "1",
      "max_enf": "2",
      "add_single": "1",
      "tout_saison": "0",
      "annul_single": "0",
      "important": "0",
      "updatedAt": "2018-10-23T14:26:40.733Z"
  }
  ]
  
  
   */
    /**
     * @api {delete} /reduction_chambre/:idreduction Delete reduction_chambre
     * @apiName DELETEreduction_chambre
     * @apiGroup  reduction_chambre
     * @apiParam {Number} idreduction id reduction_chambre
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    //crude promo
    //promo
    /**
     * @apiDefine promoNotFoundError
     * @apiError  promoNotFound  <code>Promo</code> pas trouvée.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "Promo pas trouvée"
     *     }
     */
    /**
   * @api {get} /promos/  ALL Promos
   * @apiName Getpromos
   * @apiGroup  Promos
   *
  
   *
  
   * @apiSuccess {Number} id unique ID Promo .
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idperiod ID period .
   * @apiSuccess {String} nom  .
   * @apiSuccess {Number} valeur valeur de promo.
   * @apiSuccess {Number} operation .
   * @apiSuccess {Number} pourcent .
   * @apiSuccess {Number} valeur_single valeur single de promo.
   * @apiSuccess {Number} operation_s .
   * @apiSuccess {Number} marge_b marge b2b de promo.
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} marge_c marge b2c de promo.
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} marge_s_b marge single b2b de promo.
   * @apiSuccess {Number} operation_s_b .
   * @apiSuccess {Number} pourcent_s_b .
   * @apiSuccess {Number} marge_s_c marge single b2c de promo.
   * @apiSuccess {Number} operation_s_c .
   * @apiSuccess {Number} pourcent_s_c .
   * @apiSuccess {Number} min_nuit min de nuit .
   * @apiSuccess {Number} max_nuit max de nuit .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} arrid arrangement ID .
   * @apiSuccess {Number} calcul_supp calcul supplement 0/1.
   * @apiSuccess {hotel} modele hotel.
   * @apiSuccess {room} modele room.
   * @apiSuccess {arrangement} modele arrangements.
   * @apiSuccess {Date} begin date debut promo .
   * @apiSuccess {Date} end date fin promo .
   * @apiSuccess {Date} date_booking date avant promo .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  [
      {
          "id": 26,
          "idcontrat": 0,
          "idperiod": 0,
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 5,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 2,
          "arrid": 3,
          "begin": "2017-10-01",
          "end": "2017-10-31",
          "date_booking": "1970-01-01",
          "calcul_supp": 1,
          "createdAt": null,
          "updatedAt": null,
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          },
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          },
          "arrangement": {
              "arrangements": "Demi Pension",
              "arrId": 3
          }
      },
      ...
      ]
    * @apiUse  promoNotFoundError
   */
    /**
   * @api {get} /promo/:id GET Promo
   * @apiName Getpromo
   * @apiGroup  Promos
   *
   * @apiSuccess {Number} id unique ID Promo .
   * @apiSuccess {Number} idcontrat ID contrat .
   * @apiSuccess {Number} idperiod ID period .
   * @apiSuccess {String} nom  .
   * @apiSuccess {Number} valeur valeur de promo.
   * @apiSuccess {Number} operation .
   * @apiSuccess {Number} pourcent .
   * @apiSuccess {Number} valeur_single valeur single de promo.
   * @apiSuccess {Number} operation_s .
   * @apiSuccess {Number} marge_b marge b2b de promo.
   * @apiSuccess {Number} operation_b .
   * @apiSuccess {Number} pourcent_b .
   * @apiSuccess {Number} marge_c marge b2c de promo.
   * @apiSuccess {Number} operation_c .
   * @apiSuccess {Number} pourcent_c .
   * @apiSuccess {Number} marge_s_b marge single b2b de promo.
   * @apiSuccess {Number} operation_s_b .
   * @apiSuccess {Number} pourcent_s_b .
   * @apiSuccess {Number} marge_s_c marge single b2c de promo.
   * @apiSuccess {Number} operation_s_c .
   * @apiSuccess {Number} pourcent_s_c .
   * @apiSuccess {Number} min_nuit min de nuit .
   * @apiSuccess {Number} max_nuit max de nuit .
   * @apiSuccess {Number} roomid ID room .
   * @apiSuccess {Number} arrid arrangement ID .
   * @apiSuccess {Number} calcul_supp calcul supplement 0/1.
   * @apiSuccess {hotel} modele hotel.
   * @apiSuccess {room} modele room.
   * @apiSuccess {arrangement} modele arrangements.
   * @apiSuccess {Date} begin date debut promo .
   * @apiSuccess {Date} end date fin promo .
   * @apiSuccess {Date} date_booking date avant promo .
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
  {
          "id": 26,
          "idcontrat": 0,
          "idperiod": 0,
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 5,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 2,
          "arrid": 3,
          "begin": "2017-10-01",
          "end": "2017-10-31",
          "date_booking": "1970-01-01",
          "calcul_supp": 1,
          "createdAt": null,
          "updatedAt": null,
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          },
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          },
          "arrangement": {
              "arrangements": "Demi Pension",
              "arrId": 3
          }
      }
   *
   * @apiUse  promoNotFoundError
   */
    /**
   * @api {post} /promo/ POST Promo
   * @apiName POSTpromo
   * @apiGroup  Promos
   *
  
  
   * @apiParamExample {json} Request-Example:
      {
  
  {
  
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 5,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 2,
          "arrid": 3,
          "begin": "2017-10-01",
          "end": "2017-10-31",
          "date_booking": "1970-01-01",
          "calcul_supp": 1
  
      }
      }
  
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  {
          "id": 26,
          "idcontrat": 0,
          "idperiod": 0,
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 5,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 2,
          "arrid": 3,
          "begin": "2017-10-01",
          "end": "2017-10-31",
          "date_booking": "1970-01-01",
          "calcul_supp": 1,
          "createdAt": null,
          "updatedAt": null,
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          },
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          },
          "arrangement": {
              "arrangements": "Demi Pension",
              "arrId": 3
          }
      }
   */
    /**
   * @api {put} /promo/:id PUT Promo
   * @apiName PUTpromo
   * @apiGroup  Promos
   *
   * @apiParam {Number} id        unique ID.
  
   * @apiParamExample {json} Request-Example:
  {
        
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 5,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 2,
          "arrid": 3,
          "begin": "2017-10-01",
          "end": "2017-10-31",
          "date_booking": "1970-01-01",
          "calcul_supp": 1
        
      },
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
  
  {
          "id": 26,
          "idcontrat": 0,
          "idperiod": 0,
          "idhotel": 3,
          "valeur": 10,
          "operation": 1,
          "pourcent": 1,
          "nom": "",
          "pourcent_s": 0,
          "valeur_single": 0,
          "marge_b": 3,
          "operation_b": 0,
          "pourcent_b": 0,
          "marge_c": 5,
          "operation_c": 0,
          "pourcent_c": 0,
          "marge_s_b": 0,
          "operation_s_b": 0,
          "pourcent_s_b": 0,
          "marge_s_c": 0,
          "operation_s_c": 0,
          "pourcent_s_c": 0,
          "min_nuit": 1,
          "max_nuit": 0,
          "roomid": 2,
          "arrid": 3,
          "begin": "2017-10-01",
          "end": "2017-10-31",
          "date_booking": "1970-01-01",
          "calcul_supp": 1,
          "createdAt": null,
          "updatedAt": null,
          "hotel": {
              "nom": " Radisson Blu Hammamet",
              "idhotel": 3
          },
          "room": {
              "roomname": "Chambre Double",
              "roomid": 2
          },
          "arrangement": {
              "arrangements": "Demi Pension",
              "arrId": 3
          }
      }
  
  
   */
    /**
     * @api {delete} /promo/:id Delete Promo
     * @apiName DELETEpromo
     * @apiGroup  Promos
     * @apiParam {Number} id id Promo
     * @apiSuccessExample {json} Success
     *    []
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    /**
   * @api {get} /hotel/villes/:idville GET HotelsVille
   * @apiName GetHotelVille
   * @apiGroup  Hotels
   *
   * @apiParam {Number}  idville ville unique ID.
   *
   * @apiSuccess {Number} idhotel unique ID .
   * @apiSuccess {Number} idville unique ID ville .
   * @apiSuccess {String} login .
   * @apiSuccess {String} nom  (obligatoire).
   * @apiSuccess {String} tva .
   * @apiSuccess {String} adresse .
   * @apiSuccess {String} info information supplémentaire.
   * @apiSuccess {String} lien url hôtel .
   * @apiSuccess {String} email hôtel (obligatoire).
   * @apiSuccess {String} email2 hôtel .
   * @apiSuccess {String} fax hôtel .
   * @apiSuccess {String} tel hôtel .
   * @apiSuccess {String} logiciel utilisée par l'hôtel .
   * @apiSuccess {String} map hôtel .
   * @apiSuccess {String} map hôtel .
   * @apiSuccess {String} choix_email  Resa/Gmail .
   * @apiSuccess {Number} enf_min  age enfant min 0/12.
   * @apiSuccess {Number} enf_max  age enfant max 0/16.
   * @apiSuccess {Number} marge  marge par hotel.
   * @apiSuccess {Number} operation  operation de marge 0/1.
   * @apiSuccess {Number} pourcent  pourcent de marge 0/1.
    * @apiSuccess {Number} marge_c  marge b2c par hotel .
   * @apiSuccess {Number} operation_c  operation b2c de marge 0/1.
   * @apiSuccess {Number} pourcent_c  pourcent de marge b2c 0/1.
   * @apiSuccess {Number} etoile  nbre d'étoile 0/1.
   * @apiSuccess {Number} calcul  type de calcul 0/1.
   * @apiSuccess {Number} stop  stop vente 0/1.
   * @apiSuccess {Number} celebate  celebataire ou non 0/1.
   * @apiSuccess {Number} auto_voucher  envoi automatique email 0/1.
   * @apiSuccess {ville} ville  .
   * @apiSuccess {Number} act  active 0/1.
   
    * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   
      {
          "idhotel": 1,
          "idville": 26,
          "login": "",
          "nom": "One Resort Monastir",
          "tva": "",
          "enf_min": 3,
          "enf_max": 12,
          "adresse": "6000",
          "info": "Offre valable jusqu'au 31/03/2016.<br />\r\n\t\t\t\t\t\t\t\t\t\tAll inclusive.",
          "description": "",
          "lien": "monastir/hotel-one-resort.php",
          "marge": 0,
          "etoile": 4,
          "calcul": 1,
          "auto_voucher": 1,
          "operation": 0,
          "pourcent": 0,
          "email": "resa.onehotelsandresorts@planet.tn",
          "fax": "one-resort-monastir-tunisie-tasnime-voyages_p.jpg",
          "tel": "",
          "logiciel": "",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12950.982367280054!2d10.74791684814067!3d35.7570573606672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020cc3a292377d%3A0xe836c033fd369ebe!2sOne+Resort+Monastir!5e0!3m2!1sfr!2s!4v14579388",
          "act": 1,
          "stop": 0,
          "total_reservation": 73,
          "email2": "",
          "marge_c": 0,
          "operation_c": 0,
          "pourcent_c": 0,
          "choix_email": 1,
          "celebate": 1
      },
    * @apiUse  HotelNotFoundError
   */
    app.get('/apiB2B/pdf', function (req, res) {
        var pdf = require('html-pdf');
        var image = path.join('file://', __dirname, '/upload/logos/logo_tasnime_voyages.png');
        console.log(image);
        var options = {
            format: 'A4',
            border: '1cm',
            header: {
                height: '5cm',
            },
            footer: {
                footer: '5cm',
            },
        };
        var html = '<body>' +
            '	<div id="pageHeader"><img src="https://www.google.com/images/srpr/logo11w.png"></div>' +
            '	<div id="pageContent">' +
            '		this is the main content on page 1' +
            '		<p style="page-break-after:always;"></p>' +
            ' 		this content goes on page 2 to test header/footer' +
            '	</div>' +
            '	<div id="pageFooter">' +
            '		<img src="https://www.google.com/images/srpr/logo11w.png">' +
            '	</div>' +
            '</body>';
        pdf.create(html, options).toFile('./html.pdf', function (err, res) {
            if (err)
                return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
        });
        return true;
    });
    app.post('/apiB2B/voucher_pdf', function (req, res) {
        var pdf = require('html-pdf');
        //  var html =fs.readFileSync('./test/4438.html', 'utf8');
        var html = req.body.html;
        var options = {
            format: 'lettre',
            footer: {
                height: '50mm',
            },
        };
        console.log(req.body);
        pdf
            .create(html, options)
            .toFile('./voucher_pdf/TB_voucher' + req.body.num + '.pdf', function (err, res) {
            if (err)
                return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
        });
        return res.send({ success: true, id: req.body.num });
    });
    app.post('/apiB2B/file', function (req, res) {
        var client = require('scp2');
        console.log('date scp', new Date());
        /*  client.scp('/var/www/html/tunisiabeds/voucher_pdf/TB_voucher4502.pdf', '/var/www/html/api-jwt/voucher_pdf/', function(err)
        {
      console.log("err",err)
      })*/
        var client = require('scp2');
        client.scp('/var/www/html/tunisiabeds/voucher_pdf/TB_voucher4502.pdf', {
            host: '192.168.1.237',
            username: 'root',
            password: 'tgbyhn',
            //privateKey:`AAAAB3NzaC1kc3MAAACBAMcAd9W3Bh+QkIlLTecjireTVq2k5pmENNIUtDj30P1W0Uw2xkbHj1lx5gAPXXizg+6OdFdt7Gk0niJplWrQTCucN1DcFRPAo2sbliGvqFr12zrX3oMV8xaKs9j1hAh7gzhYdYyU7Mx25soxmRh6qr0HAzjbeBTrsUTrTpGlm/o9AAAAFQDFT6UPIPuV7Gy3pVaLbWMq3WUiMwAAAIB3+wBXXe9mT8dcd/GPRSXG2NHk13CxyNI/GMOghFOn2z4WsqAHLCDouZO189x/yytK6vjrq2kQF7EDZpKPsmj98sIzatT+mrUgLpsrvSu/fCRw4IZpx5+OyjNjvLs9YNbrgprWZrx54vGqIM8Ec+RBsEVTqIj/3cIyZN0UJU4jbAAAAIEAl8zCmcLdKrKqezh9ipLxQIs6ZT21AGP+ziYkbp+2uh5m6V3/3RpS4Dtu3ny1vs6gO/wEfvjcRDD6knxcPJso2Ezu5mndM3sP2x81yFQhekYNHsF3diwbQ3KJQgLV32UZ5FEL2uP1Hj4BWKv4owCML3apxFo1cHSdqksmaNEBHWo`,
            path: '/var/www/html/api-jwt/voucher_pdf/',
        }, function (err) { });
        //  client.scp('meher:tgbyhn55++@192.168.1.3:/home/meher/Documents/TB_voucher4051.pdf', './bon_pdf/', function(err) {
        //  })
    });
};
// TEST BESSAM
// Test function in the controller
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9yb3V0ZXMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSTtBQUNKLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFN0IsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3BCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDeEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9CLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtBQUNoRSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMseUJBQXlCO0FBRXJFLElBQUk7QUFFSixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFaEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ3JELCtCQUErQjtBQUUvQixtREFBbUQ7QUFDbkQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsYUFBYSxDQUFDO0FBQzlELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM1QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFaEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ3RELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUM5RCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDOUQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzlDLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDcEUsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZUFBZSxDQUFDO0FBQzNELE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ2pFLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDO0FBQzlELE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVyxDQUFDO0FBQ2xFLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUMxQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDeEQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUN0RSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0FBQ3RFLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUUxRCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDOUQsTUFBTSwwQkFBMEIsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDekQsMEJBQTBCLENBQUM7QUFDOUIsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUN0RSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0FBQ3RFLE1BQU0sMkJBQTJCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0tBQzFELDJCQUEyQixDQUFDO0FBQy9CLE1BQU0sMkJBQTJCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0tBQzFELDJCQUEyQixDQUFDO0FBQy9CLE1BQU0saUNBQWlDLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0tBQ2hFLGlDQUFpQyxDQUFDO0FBQ3JDLE1BQU0saUNBQWlDLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0tBQ2hFLGlDQUFpQyxDQUFDO0FBQ3JDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUM1RCxNQUFNLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO0FBQzlFLE1BQU0sMEJBQTBCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0tBQ3pELDBCQUEwQixDQUFDLENBQUMsbURBQW1EO0FBRWxGLGNBQWM7QUFDZCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDN0MsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDO0FBQy9DLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUsvQyxtREFBbUQ7QUFDbkQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2xELGtEQUFrRDtBQUNsRCxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFdkIsYUFBYTtBQUViLHVCQUF1QjtBQUV2QixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQ1IsOEJBQThCLEVBQzlCLHdFQUF3RSxDQUN6RSxDQUFDO1FBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FDUiw4QkFBOEIsRUFDOUIsaUNBQWlDLENBQ2xDLENBQUM7UUFFRiwrQ0FBK0M7UUFFL0MsT0FBTztRQUNQOzs7Ozs7Ozs7V0FTRztRQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWlFRjtRQUNFLDJEQUEyRDtRQUUzRCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCOzs7Ozs7Ozs7OztJQVdBO0lBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E4Q0M7SUFDRCxTQUFTO0lBRVQsV0FBVztJQUNYLHNCQUFzQjtJQUV0Qix3QkFBd0I7SUFFeEIsd0JBQXdCO0lBRXhCLHNCQUFzQjtJQUV0QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUUzQixlQUFlO0lBRWYsMkJBQTJCO0lBRTNCLE9BQU87SUFFUCxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxHQUFHLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRSxHQUFHLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxHQUFHLENBQUMsTUFBTSxDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVuRSx5REFBeUQ7SUFDekQscUJBQXFCO0lBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BFLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZFLEdBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25FLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUNBQWlDLEVBQUUsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pFLFVBQVU7SUFDVixHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxHQUFHLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxhQUFhO0lBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEQsY0FBYztJQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELEdBQUcsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELEdBQUcsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNELHFCQUFxQjtJQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNFLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDOUUsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRSxHQUFHLENBQUMsTUFBTSxDQUNSLGlDQUFpQyxFQUNqQyxhQUFhLENBQUMsbUJBQW1CLENBQ2xDLENBQUM7SUFDRixpQkFBaUI7SUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDckUsb0JBQW9CO0lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDM0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM5RSxHQUFHLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFFLEdBQUcsQ0FBQyxNQUFNLENBQ1IsaUNBQWlDLEVBQ2pDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FDbEMsQ0FBQztJQUNGLHFCQUFxQjtJQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RSxHQUFHLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6RSxHQUFHLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RSxZQUFZO0lBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsdUJBQXVCO0lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEUsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRSxHQUFHLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEUsc0JBQXNCO0lBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25FLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUNBQW1DLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXpFLDJCQUEyQjtJQUMzQixHQUFHLENBQUMsSUFBSSxDQUNOLG1DQUFtQyxFQUNuQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FDckMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wsdUNBQXVDLEVBQ3ZDLG1CQUFtQixDQUFDLGdCQUFnQixDQUNyQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCxxQ0FBcUMsRUFDckMsbUJBQW1CLENBQUMsY0FBYyxDQUNuQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FDUix1Q0FBdUMsRUFDdkMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQ3JDLENBQUM7SUFDRix5QkFBeUI7SUFDekIsR0FBRyxDQUFDLElBQUksQ0FDTixpQ0FBaUMsRUFDakMsaUJBQWlCLENBQUMsZUFBZSxDQUNsQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCxxQ0FBcUMsRUFDckMsaUJBQWlCLENBQUMsZUFBZSxDQUNsQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RSxHQUFHLENBQUMsTUFBTSxDQUNSLHFDQUFxQyxFQUNyQyxpQkFBaUIsQ0FBQyxlQUFlLENBQ2xDLENBQUM7SUFDRiwyQkFBMkI7SUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdFLEdBQUcsQ0FBQyxHQUFHLENBQ0wsK0JBQStCLEVBQy9CLG1CQUFtQixDQUFDLGlCQUFpQixDQUN0QyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RSxHQUFHLENBQUMsTUFBTSxDQUNSLCtCQUErQixFQUMvQixtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FDdEMsQ0FBQztJQUNGLFVBQVU7SUFDVixHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxHQUFHLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxrQkFBa0I7SUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRSxHQUFHLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JFLEdBQUcsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEUscUJBQXFCO0lBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQ04saUNBQWlDLEVBQ2pDLGlCQUFpQixDQUFDLHVCQUF1QixDQUMxQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCxxQ0FBcUMsRUFDckMsaUJBQWlCLENBQUMsdUJBQXVCLENBQzFDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUNMLG1DQUFtQyxFQUNuQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxNQUFNLENBQ1IscUNBQXFDLEVBQ3JDLGlCQUFpQixDQUFDLHVCQUF1QixDQUMxQyxDQUFDO0lBQ0YseUJBQXlCO0lBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQ04saUNBQWlDLEVBQ2pDLGlCQUFpQixDQUFDLHVCQUF1QixDQUMxQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCxxQ0FBcUMsRUFDckMsaUJBQWlCLENBQUMsdUJBQXVCLENBQzFDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUNMLG1DQUFtQyxFQUNuQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxNQUFNLENBQ1IscUNBQXFDLEVBQ3JDLGlCQUFpQixDQUFDLHVCQUF1QixDQUMxQyxDQUFDO0lBQ0YsbUJBQW1CO0lBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckUsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4RSxHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUErQixFQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRTNFLG1DQUFtQztJQUNuQyxHQUFHLENBQUMsSUFBSSxDQUNOLDBDQUEwQyxFQUMxQywwQkFBMEIsQ0FBQyxnQ0FBZ0MsQ0FDNUQsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wsOENBQThDLEVBQzlDLDBCQUEwQixDQUFDLGdDQUFnQyxDQUM1RCxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCw0Q0FBNEMsRUFDNUMsMEJBQTBCLENBQUMsOEJBQThCLENBQzFELENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLDhDQUE4QyxFQUM5QywwQkFBMEIsQ0FBQyxnQ0FBZ0MsQ0FDNUQsQ0FBQztJQUNGLDJCQUEyQjtJQUMzQixHQUFHLENBQUMsSUFBSSxDQUNOLGlDQUFpQyxFQUNqQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wscUNBQXFDLEVBQ3JDLGlCQUFpQixDQUFDLHVCQUF1QixDQUMxQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCxtQ0FBbUMsRUFDbkMsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLHFDQUFxQyxFQUNyQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztJQUNGLDJCQUEyQjtJQUMzQixHQUFHLENBQUMsSUFBSSxDQUNOLGlDQUFpQyxFQUNqQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wscUNBQXFDLEVBQ3JDLGlCQUFpQixDQUFDLHVCQUF1QixDQUMxQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCxtQ0FBbUMsRUFDbkMsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLHFDQUFxQyxFQUNyQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztJQUNGLHVDQUF1QztJQUN2QyxHQUFHLENBQUMsSUFBSSxDQUNOLDJDQUEyQyxFQUMzQywyQkFBMkIsQ0FBQyxpQ0FBaUMsQ0FDOUQsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wsK0NBQStDLEVBQy9DLDJCQUEyQixDQUFDLGlDQUFpQyxDQUM5RCxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCw2Q0FBNkMsRUFDN0MsMkJBQTJCLENBQUMsK0JBQStCLENBQzVELENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLCtDQUErQyxFQUMvQywyQkFBMkIsQ0FBQyxpQ0FBaUMsQ0FDOUQsQ0FBQztJQUNGLHVDQUF1QztJQUN2QyxHQUFHLENBQUMsSUFBSSxDQUNOLDJDQUEyQyxFQUMzQywyQkFBMkIsQ0FBQyxpQ0FBaUMsQ0FDOUQsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wsK0NBQStDLEVBQy9DLDJCQUEyQixDQUFDLGlDQUFpQyxDQUM5RCxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCw2Q0FBNkMsRUFDN0MsMkJBQTJCLENBQUMsK0JBQStCLENBQzVELENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLCtDQUErQyxFQUMvQywyQkFBMkIsQ0FBQyxpQ0FBaUMsQ0FDOUQsQ0FBQztJQUNGLDhDQUE4QztJQUM5QyxHQUFHLENBQUMsSUFBSSxDQUNOLGlEQUFpRCxFQUNqRCxpQ0FBaUMsQ0FBQyx1Q0FBdUMsQ0FDMUUsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wscURBQXFELEVBQ3JELGlDQUFpQyxDQUFDLHVDQUF1QyxDQUMxRSxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCxtREFBbUQsRUFDbkQsaUNBQWlDLENBQUMscUNBQXFDLENBQ3hFLENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLHFEQUFxRCxFQUNyRCxpQ0FBaUMsQ0FBQyx1Q0FBdUMsQ0FDMUUsQ0FBQztJQUNGLDhDQUE4QztJQUM5QyxHQUFHLENBQUMsSUFBSSxDQUNOLGlEQUFpRCxFQUNqRCxpQ0FBaUMsQ0FBQyx1Q0FBdUMsQ0FDMUUsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wscURBQXFELEVBQ3JELGlDQUFpQyxDQUFDLHVDQUF1QyxDQUMxRSxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCxtREFBbUQsRUFDbkQsaUNBQWlDLENBQUMscUNBQXFDLENBQ3hFLENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLHFEQUFxRCxFQUNyRCxpQ0FBaUMsQ0FBQyx1Q0FBdUMsQ0FDMUUsQ0FBQztJQUNGLHFCQUFxQjtJQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hFLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN2RSxHQUFHLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlFLCtCQUErQjtJQUMvQixHQUFHLENBQUMsSUFBSSxDQUNOLHFDQUFxQyxFQUNyQyxxQkFBcUIsQ0FBQywyQkFBMkIsQ0FDbEQsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wseUNBQXlDLEVBQ3pDLHFCQUFxQixDQUFDLDJCQUEyQixDQUNsRCxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCx1Q0FBdUMsRUFDdkMscUJBQXFCLENBQUMseUJBQXlCLENBQ2hELENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLHlDQUF5QyxFQUN6QyxxQkFBcUIsQ0FBQywyQkFBMkIsQ0FDbEQsQ0FBQztJQUNGLFVBQVU7SUFDVixHQUFHLENBQUMsSUFBSSxDQUNOLDBDQUEwQyxFQUMxQywwQkFBMEIsQ0FBQyxnQ0FBZ0MsQ0FDNUQsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wsOENBQThDLEVBQzlDLDBCQUEwQixDQUFDLGdDQUFnQyxDQUM1RCxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCw0Q0FBNEMsRUFDNUMsMEJBQTBCLENBQUMsOEJBQThCLENBQzFELENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLDhDQUE4QyxFQUM5QywwQkFBMEIsQ0FBQyxnQ0FBZ0MsQ0FDNUQsQ0FBQztJQUNGLHlEQUF5RDtJQUV6RCx5REFBeUQ7SUFFekQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELG9CQUFvQjtJQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsbUJBQW1CO0lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxnQkFBZ0I7SUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXpDLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTNDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRW5ELEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXpELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFFbEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVqQyx5Q0FBeUM7SUFDekM7Ozs7OztNQU1FO0lBRUYsTUFBTTtJQUNOOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBOENBO0lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJCQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILFFBQVE7SUFDUjs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZCQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0JDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FzQkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNDQztJQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUNDO0lBRUQsU0FBUztJQUVULFNBQVM7SUFDVDs7Ozs7Ozs7O09BU0c7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRkM7SUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdUZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxRkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStFQztJQUNELGNBQWM7SUFDZDs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNFQTtJQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyQkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7OztLQWdCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUVIOzs7Ozs7O0lBT0E7SUFDQTs7Ozs7Ozs7Ozs7S0FXQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUZDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7S0FhQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUVILFFBQVE7SUFDUjs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUNDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNkJDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUVILE1BQU07SUFDTjs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5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QUNOOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXFEQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBK0JDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUVILGNBQWM7SUFDZDs7Ozs7Ozs7O09BU0c7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStCQTtJQUNBOzs7Ozs7Ozs7T0FTRztJQUNILGtCQUFrQjtJQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCQztJQUVELGFBQWE7SUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdU9DO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5RUM7SUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0VDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5RUM7SUFFRCxtQkFBbUI7SUFFbkIsbUJBQW1CO0lBRW5CLGtCQUFrQjtJQUVsQixvQkFBb0I7SUFFcEIsY0FBYztJQUVkLFlBQVk7SUFFWixZQUFZO0lBRVosZUFBZTtJQUVmLG1CQUFtQjtJQUVuQixZQUFZO0lBRVosa0JBQWtCO0lBRWxCLGFBQWE7SUFDYixFQUFFO0lBQ0Ysb0JBQW9CO0lBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUNDO0lBQ0QsbUJBQW1CO0lBRW5CLGFBQWE7SUFDYixHQUFHO0lBQ0gsb0JBQW9CO0lBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvQ0M7SUFFRCxtQkFBbUI7SUFFbkIsYUFBYTtJQUNiLEVBQUU7SUFDRixxQkFBcUI7SUFFckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQ0M7SUFFRCxhQUFhO0lBQ2IsRUFBRTtJQUNGLGFBQWE7SUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpRUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBEQztJQUNELGFBQWE7SUFDYixFQUFFO0lBQ0YsYUFBYTtJQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThEQztJQUVELE1BQU07SUFFTixjQUFjO0lBRWQsUUFBUTtJQUNSOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0VDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcURDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkRDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkRDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStEQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGVBQWU7SUFFZixTQUFTO0lBQ1Q7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3Q0M7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlDQztJQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNDQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWlFQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGFBQWE7SUFFYixPQUFPO0lBQ1A7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBGQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0ZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgc3RyID0gJyc7XG52YXIgc2xlZXAgPSByZXF1aXJlKCdzbGVlcCcpO1xuXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xubGV0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xubGV0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xubGV0IHVwbG9hZCA9IG11bHRlcigpO1xubGV0IHBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7XG5jb25zdCB4bWwyanMgPSByZXF1aXJlKCd4bWwyanMnKTtcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxubGV0IHhtbFBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7IC8vcG91ciBwYXJzZXIgZGUgeG1sLS0+anNvblxubGV0IGNvbnZlcnQgPSByZXF1aXJlKCd4bWwtanMnKTtcbnZhciBqczJ4bWxwYXJzZXIgPSByZXF1aXJlKCdqczJ4bWxwYXJzZXInKTsgLy9wb3VyIHBhcnNlciBqc29uLS0tPnhtbFxuXG4vL3NjXG5cbmNvbnN0IGFnZW5jZSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuYWdlbmNlO1xuXG5jb25zdCBhZXJvcG9ydDEgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmFlcm9wb3J0O1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKmFwaSByYWZhaGlhOioqKioqKioqKioqKipcbmNvbnN0IENsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmNsaWVudENvbXBhbnk7XG5jb25zdCBUcmlwID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS50cmlwO1xuY29uc3QgRHJpdmVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5kcml2ZXI7XG5cbmNvbnN0IFBhc3NlcG9ydCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykucGFzc2Vwb3J0O1xuY29uc3QgUGVyc29uYWxHcm91cCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykucGVyc29uYWxHcm91cDtcbmNvbnN0IFZlaGljdWxlRmxlZXQgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnZlaGljdWxlRmxlZXQ7XG5jb25zdCBQcmljZSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykucHJpY2U7XG5jb25zdCBQYXNzZW5nZXJMdWdnYWdlID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5wYXNzZW5nZXJMdWdnYWdlO1xuY29uc3QgUHJvZm9ybWEgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnByb2Zvcm1hSW52b2ljZTtcbmNvbnN0IFRlY2huaWNhbEluc3BlY3Rpb24gPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmluc3BlY3Rpb247XG5jb25zdCBWZWhpY3VsZUluc3VyYW5jZSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuaW5zdXJhbmNlO1xuY29uc3QgVmVoaWN1bGVNYWludGVuYW5jZSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykubWFpbnRlbmFuY2U7XG5jb25zdCBUdmEgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnR2YTtcbmNvbnN0IFRyaXBEcml2ZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnRyaXBEcml2ZXI7XG5jb25zdCBUcmlwVXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudHJpcFVzdWFsQ3VzdG9tZXI7XG5jb25zdCBUcmlwQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudHJpcENsaWVudENvbXBhbnk7XG5jb25zdCBUcmFkZU1hcmdpbiA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudHJhZGVNYXJnaW47XG5cbmNvbnN0IFVzdWFsQ3VzdG9tZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnVzdWFsQ3VzdG9tZXI7XG5jb25zdCBVc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJylcbiAgLnVzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55O1xuY29uc3QgUmVudENsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnJlbnRDbGllbnRDb21wYW55O1xuY29uc3QgUmVudFVzdWFsQ3VzdG9tZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnJlbnRVc3VhbEN1c3RvbWVyO1xuY29uc3QgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55ID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKVxuICAucmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55O1xuY29uc3QgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKVxuICAucmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyO1xuY29uc3QgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKVxuICAucmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyO1xuY29uc3QgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKVxuICAucmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyO1xuY29uc3QgU3RvcG92ZXJUcmlwID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5zdG9wb3ZlclRyaXA7XG5jb25zdCBTdG9wb3ZlclVzdWFsQ3VzdG9tZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnN0b3BvdmVyVXN1YWxDdXN0b21lcjtcbmNvbnN0IFVzdWFsQ3VzdG9tZXJQZXJzb25hbEdyb3VwID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKVxuICAudXN1YWxDdXN0b21lclBlcnNvbmFsR3JvdXA7IC8vICoqKioqKioqKioqKioqKioqKioqKioqYXBpIHJhZmFoaWE6KioqKioqKioqKioqKlxuXG4vLyBURVNUIEJFU1NBTVxuY29uc3QgdGVzdDEgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmxpc3Q7XG5jb25zdCBob3RlbCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuaG90ZWwxO1xuY29uc3QgaW1hZ2UgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmltYWdlMTtcblxuLy9jb25zdCBhdXRoPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmF1dGg7XG5cbmltcG9ydCAqIGFzIHByb2Nlc3N1cyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbi8vY29uc3QgdXNlclNlcnZpY2U9cmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS51c2VyO1xuY29uc3QgdGFibGVhdSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudGFibGVhdTtcbi8vY29uc3QgdmlsbGUxID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS52aWxsZTE7XG5sZXQgV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZvcm1pZGFibGUgPSByZXF1aXJlKCdmb3JtaWRhYmxlJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG4vLyBhcGkgcm91dGVzXG5cbi8vIGdsb2JhbCBlcnJvciBoYW5kbGVyXG5cbm1vZHVsZS5leHBvcnRzID0gKGFwcCkgPT4ge1xuICBhcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LHVpeCxGcm9tLEF1dGhvcml6YXRpb24gJ1xuICAgICk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJyxcbiAgICAgICdQT1NULCBHRVQsIFBVVCwgREVMRVRFLCBPUFRJT05TJ1xuICAgICk7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiIG1pZGRsZXdhcmUgYXBwICMjIyMjXCIscmVxLmJvZHkpXG5cbiAgICAvL2xvZ2luXG4gICAgLyoqXG4gICAgICogQGFwaURlZmluZSBsb2dpbk5vdEZvdW5kRXJyb3JcbiAgICAgKiBAYXBpRXJyb3IgIGxvZ2luTm90Rm91bmQgIDxjb2RlPmxvZ2luPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAgICpcbiAgICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAgICogICAgIHtcbiAgICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJsb2dpbiBwYXMgdHJvdXbDqWVcIlxuICAgICAqICAgICB9XG4gICAgICovXG4gICAgLyoqXG4qIEBhcGkge3Bvc3R9IC9sb2dpbi8gIGxvZ2luXG4qIEBhcGlOYW1lIExvZ2luXG4qIEBhcGlHcm91cCAgTG9naW5cbipcblxuICogQGFwaVBhcmFtIHtTdHJpbmd9ICBsb2dpbi5cbiAqIEBhcGlQYXJhbSB7U3RyaW5nfSAgcGFzc3dvcmQgaGFzaDUxMi5cblxuKiBAYXBpU3VjY2VzcyB7dXNlcn0gdXNlci5cbiogQGFwaVN1Y2Nlc3Mge2FnZW5jZX0gYWdlbmNlICAuXG4qIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRva2VuIC5cblxuXG5cbiogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4qICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICBcInVzZXJcIjoge1xuICAgICAgICBcImlkXCI6IDQyMyxcbiAgICAgICAgXCJsb2dpblwiOiBcImRvdGNvbVwiLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGVzdC1kb3Rjb21cIixcbiAgICAgICAgXCJhZG1pblwiOiAwLFxuICAgICAgICBcInJvbGVcIjogXCJVc2VyXCJcbiAgICB9LFxuICAgIFwiYWdlbmNlXCI6IHtcbiAgICAgICAgXCJpZFwiOiA0LFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGVzdCBkb3Rjb21cIixcbiAgICAgICAgXCJsb2dvXCI6IFwiZG90Y29tLmpwZ1wiLFxuICAgICAgICBcInR2YVwiOiBcIjEyMzQ1XCIsXG4gICAgICAgIFwidGVsXCI6IFwiNzIyODMzM1wiLFxuICAgICAgICBcImZheFwiOiBcIjExMVwiLFxuICAgICAgICBcImVtYWlsXCI6IFwibWVoZXJheWVkLmRvdGNvbUBnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcInRlc3RcIixcbiAgICAgICAgXCJsb2dpblwiOiBcImRvdGNvbVwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3Jlc2VydmF0aW9uXCI6IDUwMCxcbiAgICAgICAgXCJtYXhfdG90YWxcIjogMTAwMDAwMCxcbiAgICAgICAgXCJhZG1pblwiOiAxLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IFwiNjA3NjYuOSBUTkQgPGJyIC8+IFBheWVyIDogLTExNjIuNSBUTkQgPGJyIC8+SW1wYXllciA6IDYxOTI5LjQgVE5EXCIsXG4gICAgICAgIFwibmJfcmVzZXJ2YXRpb25cIjogMjI5LFxuICAgICAgICBcInBheWVlXCI6IC0xMTYyLjUsXG4gICAgICAgIFwiaW1wYXllZVwiOiA2MTkyOS40LFxuICAgICAgICBcInJvdWdlXCI6IDEwLFxuICAgICAgICBcIm1hcmdlX21vdXJhZGlcIjogNSxcbiAgICAgICAgXCJ0b3RhbFwiOiA2MDc2Ni45LFxuICAgICAgICBcImF1dG9fZW1haWxcIjogMCxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJUTkRcIixcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAxLFxuICAgICAgICBcInRhdXhfZHpkXCI6IDAsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwicG9ydGFibGVcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ0b2tlblwiOiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNklrcFhWQ0o5LmV5SnpkV0lqUXlNeXdpY205c1pTSTZJbFZ6WlhJaUxDSnBZWFFpT2pFMU5EazJNekk1TXpSOS42aTVJSGY1Q2t1ZzNZRlltZkJ4R2dJYmVnZXJTbHF5X0J0MXB4LWJzOUFZXCJcbn1cbiogQGFwaVVzZSAgbG9naW5Ob3RGb3VuZEVycm9yXG4qL1xuICAgIC8vIGFwcC51c2UoJy91c2VycycsIHJlcXVpcmUoJy4uL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXInKSk7XG5cbiAgICBuZXh0KCk7XG4gIH0pO1xuICB2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgLypcbmNvbnN0IHIgPSByZXF1aXJlKCdyZXRoaW5rZGInKTtcbnZhciBjb25uZWN0aW9uID0gbnVsbDtcbnIuY29ubmVjdCgge2hvc3Q6ICdsb2NhbGhvc3QnLCBwb3J0OiAyODAxNX0sIGZ1bmN0aW9uKGVyciwgY29ubikge1xuICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gIGNvbm5lY3Rpb24gPSBjb25uO1xuICByLmRiKCdraGFsZWRfdGFzbmltZScpLnRhYmxlQ3JlYXRlKCdzZWFyY2hzJykucnVuKGNvbm5lY3Rpb24sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpO1xuICB9KVxufSlcbiovXG4gIC8qXG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKCd1dWlkL3YxJyk7XG52YXIgV2ViU29ja2V0U2VydmVyID0gcmVxdWlyZSgnd3MnKS5TZXJ2ZXIsXG4gICAgd3NzID0gbmV3IFdlYlNvY2tldFNlcnZlcih7cG9ydDo0MDU1MH0pLFxuICAgIENMSUVOVFM9W107XG5cbndzcy5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uKHdzKSB7XG4gICBjb25zdCBuYW91ZWw9IHV1aWR2MSgpXG4gIENMSUVOVFMucHVzaCh7dXVpZDpuYW91ZWwsd3M6d3N9KTtcbiAgICB3cy5vbignbWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgIGlmICh3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgIC8vICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsSlNPTi5wYXJzZShtZXNzYWdlKSlcbiAgICBzZW5kQWxsKEpTT04ucGFyc2UobWVzc2FnZSkpO1xuICAgICAgfSAgXG4gICAgfSk7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgIHdzLnNlbmQobmFvdWVsKVxuICAgICAgfVxuICAgICAgIFxuICAgICAgIFxuICAgICBcbiAgXG59KTtcblxuLy9jb25zdCBjaGVyY2hlPShjb3VudCxpZGhvdGVsLGNvbnRlbnUpPT5cbi8ve1xuLy9yZXR1cm4ganNvbkNvbnRlbnQxLkhvdGVsU2VhcmNoUkVTLkhvdGVscy5Ib3RlbFswXVxuLy99XG5mdW5jdGlvbiBzZW5kQWxsIChtZXNzYWdlKSB7XG4gICAgZm9yICh2YXIgaT0wOyBpPENMSUVOVFMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImNsaWVudCBcIixDTElFTlRTW2ldLnV1aWQsXCIgXCIsbWVzc2FnZS51aXgpXG4gICAgXG4gICAgNDA1NSAgaWYoQ0xJRU5UU1tpXS51dWlkPT1tZXNzYWdlLnVpeClcbiAgICAgIHtcbiAgICAgIC8vICAgIGNvbnNvbGUubG9nKCBtZXNzYWdlLmNvbnRlbnQpXG5cbiAgbWVzc2FnZS5jb250ZW50ID0gbWVzc2FnZS5jb250ZW50LnJlcGxhY2UoL1teXFx4MDAtXFx4N0ZdL2csXCJcIik7XG4gIGlmIChDTElFTlRTW2ldLndzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gLy8gICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UuY29udGVudC50b1N0cmluZygndXRmOCcpKVxuICAgIENMSUVOVFNbaV0ud3Muc2VuZCggU3RyaW5nKG1lc3NhZ2UuY29udGVudC50b1N0cmluZygndXRmOCcpKSk7XG4gIH1cblxuICAgICAgfVxuICAgICAgICBcbiAgICB9XG59Ki9cbiAgLy8gcm91dGVzXG5cbiAgLy9wYXJhbWV0cmVcbiAgLy9tb2RpZmllciByZXNlcnZhdGlvblxuXG4gIC8vbW9kaWZpZXIgcmVzZXJ2YXRpb24vL1xuXG4gIC8vbW9kaWZpZXIgcmVzZXJ2YXRpb24vL1xuXG4gIC8vbW9kaWZpZXIgcmVzZXJ2YXRpb25cblxuICAvLyBhZG1pbiBvbmx5XG4gIC8vbW91cmFkaS1zb3VoaXJcbiAgLy9tb3VyYWRpLXNvdWhpci0wOC0wNC0yMDIwXG5cbiAgLy9zYy0wNC0wNS0yMDIwXG5cbiAgLy9tb3VyYWRpLXNvdWhpci0wOC0wNC0yMDIwXG5cbiAgLy9zYy0xOFxuXG4gIGFwcC5wb3N0KCcvYXBpUkYvYWVyb3BvcnQvaW5zZXJ0JywgYWVyb3BvcnQxLmluc2VydEFlcm9wb3J0KTtcbiAgYXBwLnB1dCgnL2FwaVJGL2Flcm9wb3J0L3VwZGF0ZS86aWQnLCBhZXJvcG9ydDEudXBkYXRlQWVyb3BvcnQpO1xuICBhcHAuZ2V0KCcvYXBpUkYvYWVyb3BvcnQvcmVhZC86aWQnLCBhZXJvcG9ydDEucmVhZEFlcm9wb3J0KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL2Flcm9wb3J0L2RlbGV0ZS86aWQnLCBhZXJvcG9ydDEuZGVsZXRlQWVyb3BvcnQpO1xuXG4gIC8vKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICAvLyoqY2xpZW50IGNvbXBhbnkgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9jbGllbnRDb21wYW55L2luc2VydCcsIENsaWVudENvbXBhbnkuaW5zZXJ0Q2xpZW50KTtcbiAgYXBwLnB1dCgnL2FwaVJGL2NsaWVudENvbXBhbnkvdXBkYXRlLzppZCcsIENsaWVudENvbXBhbnkudXBkYXRlQ2xpZW50KTtcbiAgYXBwLmdldCgnL2FwaVJGL2NsaWVudENvbXBhbnkvcmVhZC86aWQnLCBDbGllbnRDb21wYW55LnJlYWRDbGllbnQpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvY2xpZW50Q29tcGFueS9kZWxldGUvOmlkJywgQ2xpZW50Q29tcGFueS5kZWxldGVDbGllbnQpO1xuICBhcHAucG9zdCgnL2FwaVJGL2NsaWVudENvbXBhbnkvcmVhZFBhZ2UnLCBDbGllbnRDb21wYW55LnJlYWRDbGllbnRDaHVuayk7XG4gIC8vKipUVkEgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi90dmEvaW5zZXJ0JywgVHZhLmluc2VydFR2YSk7XG4gIGFwcC5wdXQoJy9hcGlSRi90dmEvdXBkYXRlLzppZCcsIFR2YS51cGRhdGVUdmEpO1xuICBhcHAuZ2V0KCcvYXBpUkYvdHZhL3JlYWQvOmlkJywgVHZhLnJlYWRUdmEpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvdHZhL2RlbGV0ZS86aWQnLCBUdmEuZGVsZXRlVHZhKTtcbiAgLy8qKnRyaXAqKiAqL1xuICBhcHAucG9zdCgnL2FwaVJGL3RyaXAvaW5zZXJ0JywgVHJpcC5pbnNlcnRUcmlwKTtcbiAgYXBwLnB1dCgnL2FwaVJGL3RyaXAvdXBkYXRlLzppZCcsIFRyaXAudXBkYXRlVHJpcCk7XG4gIGFwcC5nZXQoJy9hcGlSRi90cmlwL3JlYWQvOmlkJywgVHJpcC5yZWFkVHJpcCk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi90cmlwL2RlbGV0ZS86aWQnLCBUcmlwLmRlbGV0ZVRyaXApO1xuICAvLyoqZHJpdmVyKiAqL1xuICBhcHAucG9zdCgnL2FwaVJGL2RyaXZlci9pbnNlcnQnLCBEcml2ZXIuaW5zZXJ0RHJpdmVyKTtcbiAgYXBwLnB1dCgnL2FwaVJGL2RyaXZlci91cGRhdGUvOmlkJywgRHJpdmVyLnVwZGF0ZURyaXZlcik7XG4gIGFwcC5nZXQoJy9hcGlSRi9kcml2ZXIvcmVhZC86aWQnLCBEcml2ZXIucmVhZERyaXZlcik7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9kcml2ZXIvZGVsZXRlLzppZCcsIERyaXZlci5kZWxldGVEcml2ZXIpO1xuICBhcHAucG9zdCgnL2FwaVJGL2RyaXZlci9yZWFkUGFnZScsIERyaXZlci5yZWFkRHJpdmVyQ2h1bmspO1xuICAvLyoqVXN1YWwgQ3VzdG9tZXIgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9Vc3VhbEN1c3RvbWVyL2luc2VydCcsIFVzdWFsQ3VzdG9tZXIuaW5zZXJ0VXN1YWxDdXN0b21lcik7XG4gIGFwcC5wdXQoJy9hcGlSRi9Vc3VhbEN1c3RvbWVyL3VwZGF0ZS86aWQnLCBVc3VhbEN1c3RvbWVyLnVwZGF0ZVVzdWFsQ3VzdG9tZXIpO1xuICBhcHAuZ2V0KCcvYXBpUkYvVXN1YWxDdXN0b21lci9yZWFkLzppZCcsIFVzdWFsQ3VzdG9tZXIucmVhZFVzdWFsQ3VzdG9tZXIpO1xuICBhcHAuZGVsZXRlKFxuICAgICcvYXBpUkYvVXN1YWxDdXN0b21lci9kZWxldGUvOmlkJyxcbiAgICBVc3VhbEN1c3RvbWVyLmRlbGV0ZVVzdWFsQ3VzdG9tZXJcbiAgKTtcbiAgLy8qKnBhc3NlcG9ydCogKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9wYXNzZXBvcnQvaW5zZXJ0JywgUGFzc2Vwb3J0Lmluc2VydFBhc3NlcG9ydCk7XG4gIGFwcC5wdXQoJy9hcGlSRi9wYXNzZXBvcnQvdXBkYXRlLzppZCcsIFBhc3NlcG9ydC51cGRhdGVQYXNzZXBvcnQpO1xuICBhcHAuZ2V0KCcvYXBpUkYvcGFzc2Vwb3J0L3JlYWQvOmlkJywgUGFzc2Vwb3J0LnJlYWRQYXNzZXBvcnQpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvcGFzc2Vwb3J0L2RlbGV0ZS86aWQnLCBQYXNzZXBvcnQuZGVsZXRlUGFzc2Vwb3J0KTtcbiAgLy8qKnBlcnNvbmFsR3JvdXAgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9wZXJzb25hbEdyb3VwL2luc2VydCcsIFBlcnNvbmFsR3JvdXAuaW5zZXJ0UGVyc29uYWxHcm91cCk7XG4gIGFwcC5wdXQoJy9hcGlSRi9wZXJzb25hbEdyb3VwL3VwZGF0ZS86aWQnLCBQZXJzb25hbEdyb3VwLnVwZGF0ZVBlcnNvbmFsR3JvdXApO1xuICBhcHAuZ2V0KCcvYXBpUkYvcGVyc29uYWxHcm91cC9yZWFkLzppZCcsIFBlcnNvbmFsR3JvdXAucmVhZFBlcnNvbmFsR3JvdXApO1xuICBhcHAuZGVsZXRlKFxuICAgICcvYXBpUkYvcGVyc29uYWxHcm91cC9kZWxldGUvOmlkJyxcbiAgICBQZXJzb25hbEdyb3VwLmRlbGV0ZVBlcnNvbmFsR3JvdXBcbiAgKTtcbiAgLy8qKnZlaGljdWxlRmxlZXQgKiovXG4gIGFwcC5wb3N0KCcvYXBpUkYvdmVoaWN1bGVGbGVldC9pbnNlcnQnLCBWZWhpY3VsZUZsZWV0Lmluc2VydFZlaGljdWxlKTtcbiAgYXBwLnB1dCgnL2FwaVJGL3ZlaGljdWxlRmxlZXQvdXBkYXRlLzppZCcsIFZlaGljdWxlRmxlZXQudXBkYXRlVmVoaWN1bGUpO1xuICBhcHAuZ2V0KCcvYXBpUkYvdmVoaWN1bGVGbGVldC9yZWFkLzppZCcsIFZlaGljdWxlRmxlZXQucmVhZFZlaGljdWxlKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL3ZlaGljdWxlRmxlZXQvZGVsZXRlLzppZCcsIFZlaGljdWxlRmxlZXQuZGVsZXRlVmVoaWN1bGUpO1xuICAvLyoqcHJpY2UgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9wcmljZS9pbnNlcnQnLCBQcmljZS5pbnNlcnRQcmljZSk7XG4gIGFwcC5wdXQoJy9hcGlSRi9wcmljZS91cGRhdGUvOmlkJywgUHJpY2UudXBkYXRlUHJpY2UpO1xuICBhcHAuZ2V0KCcvYXBpUkYvcHJpY2UvcmVhZC86aWQnLCBQcmljZS5yZWFkUHJpY2UpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvcHJpY2UvZGVsZXRlLzppZCcsIFByaWNlLmRlbGV0ZVByaWNlKTtcbiAgLy8qKnBhc3Nlbmdlckx1Z2dhZ2UgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9sdWdnYWdlL2luc2VydCcsIFBhc3Nlbmdlckx1Z2dhZ2UuaW5zZXJ0THVnZ2FnZSk7XG4gIGFwcC5wdXQoJy9hcGlSRi9sdWdnYWdlL3VwZGF0ZS86aWQnLCBQYXNzZW5nZXJMdWdnYWdlLnVwZGF0ZUx1Z2dhZ2UpO1xuICBhcHAuZ2V0KCcvYXBpUkYvbHVnZ2FnZS9yZWFkLzppZCcsIFBhc3Nlbmdlckx1Z2dhZ2UucmVhZEx1Z2dhZ2UpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvbHVnZ2FnZS9kZWxldGUvOmlkJywgUGFzc2VuZ2VyTHVnZ2FnZS5kZWxldGVMdWdnYWdlKTtcbiAgLy8qKnByb2Zvcm1hSW52b2ljZSAqL1xuICBhcHAucG9zdCgnL2FwaVJGL3Byb2Zvcm1hSW52b2ljZS9pbnNlcnQnLCBQcm9mb3JtYS5pbnNlcnRQcm9mb3JtYSk7XG4gIGFwcC5wdXQoJy9hcGlSRi9wcm9mb3JtYUludm9pY2UvdXBkYXRlLzppZCcsIFByb2Zvcm1hLnVwZGF0ZVByb2Zvcm1hKTtcbiAgYXBwLmdldCgnL2FwaVJGL3Byb2Zvcm1hSW52b2ljZS9yZWFkLzppZCcsIFByb2Zvcm1hLnJlYWRQcm9mb3JtYSk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9wcm9mb3JtYUludm9pY2UvZGVsZXRlLzppZCcsIFByb2Zvcm1hLmRlbGV0ZVByb2Zvcm1hKTtcblxuICAvLyoqdGVjaG5pY2FsIGluc3BlY3Rpb24gKi9cbiAgYXBwLnBvc3QoXG4gICAgJy9hcGlSRi90ZWNobmljYWxJbnNwZWN0aW9uL2luc2VydCcsXG4gICAgVGVjaG5pY2FsSW5zcGVjdGlvbi5pbnNlcnRJbnNwZWN0aW9uXG4gICk7XG4gIGFwcC5wdXQoXG4gICAgJy9hcGlSRi90ZWNobmljYWxJbnNwZWN0aW9uL3VwZGF0ZS86aWQnLFxuICAgIFRlY2huaWNhbEluc3BlY3Rpb24udXBkYXRlSW5zcGVjdGlvblxuICApO1xuICBhcHAuZ2V0KFxuICAgICcvYXBpUkYvdGVjaG5pY2FsSW5zcGVjdGlvbi9yZWFkLzppZCcsXG4gICAgVGVjaG5pY2FsSW5zcGVjdGlvbi5yZWFkSW5zcGVjdGlvblxuICApO1xuICBhcHAuZGVsZXRlKFxuICAgICcvYXBpUkYvdGVjaG5pY2FsSW5zcGVjdGlvbi9kZWxldGUvOmlkJyxcbiAgICBUZWNobmljYWxJbnNwZWN0aW9uLmRlbGV0ZUluc3BlY3Rpb25cbiAgKTtcbiAgLy8qKnZlaGljdWxlIGluc3VyYW5jZSAqL1xuICBhcHAucG9zdChcbiAgICAnL2FwaVJGL3ZlaGljdWxlSW5zdXJhbmNlL2luc2VydCcsXG4gICAgVmVoaWN1bGVJbnN1cmFuY2UuaW5zZXJ0SW5zdXJhbmNlXG4gICk7XG4gIGFwcC5wdXQoXG4gICAgJy9hcGlSRi92ZWhpY3VsZUluc3VyYW5jZS91cGRhdGUvOmlkJyxcbiAgICBWZWhpY3VsZUluc3VyYW5jZS51cGRhdGVJbnN1cmFuY2VcbiAgKTtcbiAgYXBwLmdldCgnL2FwaVJGL3ZlaGljdWxlSW5zdXJhbmNlL3JlYWQvOmlkJywgVmVoaWN1bGVJbnN1cmFuY2UucmVhZEluc3VyYW5jZSk7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi92ZWhpY3VsZUluc3VyYW5jZS9kZWxldGUvOmlkJyxcbiAgICBWZWhpY3VsZUluc3VyYW5jZS5kZWxldGVJbnN1cmFuY2VcbiAgKTtcbiAgLy8qKnZlaGljdWxlIG1haW50ZW5hbmNlICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvbWFpbnRlbmFuY2UvaW5zZXJ0JywgVmVoaWN1bGVNYWludGVuYW5jZS5pbnNlcnRNYWludGVuYW5jZSk7XG4gIGFwcC5wdXQoXG4gICAgJy9hcGlSRi9tYWludGVuYW5jZS91cGRhdGUvOmlkJyxcbiAgICBWZWhpY3VsZU1haW50ZW5hbmNlLnVwZGF0ZU1haW50ZW5hbmNlXG4gICk7XG4gIGFwcC5nZXQoJy9hcGlSRi9tYWludGVuYW5jZS9yZWFkLzppZCcsIFZlaGljdWxlTWFpbnRlbmFuY2UucmVhZE1haW50ZW5hbmNlKTtcbiAgYXBwLmRlbGV0ZShcbiAgICAnL2FwaVJGL21haW50ZW5hbmNlL2RlbGV0ZS86aWQnLFxuICAgIFZlaGljdWxlTWFpbnRlbmFuY2UuZGVsZXRlTWFpbnRlbmFuY2VcbiAgKTtcbiAgLy8qKlRWQSAqL1xuICBhcHAucG9zdCgnL2FwaVJGL3R2YS9pbnNlcnQnLCBUdmEuaW5zZXJ0VHZhKTtcbiAgYXBwLnB1dCgnL2FwaVJGL3R2YS91cGRhdGUvOmlkJywgVHZhLnVwZGF0ZVR2YSk7XG4gIGFwcC5nZXQoJy9hcGlSRi90dmEvcmVhZC86aWQnLCBUdmEucmVhZFR2YSk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi90dmEvZGVsZXRlLzppZCcsIFR2YS5kZWxldGVUdmEpO1xuICAvLyoqVHJpcC1Ecml2ZXIgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi90cmlwRHJpdmVyL2luc2VydCcsIFRyaXBEcml2ZXIuaW5zZXJ0VHJpcERyaXZlcik7XG4gIGFwcC5wdXQoJy9hcGlSRi90cmlwRHJpdmVyL3VwZGF0ZS86aWQnLCBUcmlwRHJpdmVyLnVwZGF0ZVRyaXBEcml2ZXIpO1xuICBhcHAuZ2V0KCcvYXBpUkYvdHJpcERyaXZlci9yZWFkLzppZCcsIFRyaXBEcml2ZXIucmVhZFRyaXBEcml2ZXIpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvdHJpcERyaXZlci9kZWxldGUvOmlkJywgVHJpcERyaXZlci5kZWxldGVUcmlwRHJpdmVyKTtcbiAgLy8qVHJpcC1Vc3VhbEN1c3RvbWVyXG4gIGFwcC5wb3N0KFxuICAgICcvYXBpUkYvVHJpcFVzdWFsQ3VzdG9tZXIvaW5zZXJ0JyxcbiAgICBUcmlwVXN1YWxDdXN0b21lci5pbnNlcnRUcmlwVXN1YWxDdXN0b21lclxuICApO1xuICBhcHAucHV0KFxuICAgICcvYXBpUkYvVHJpcFVzdWFsQ3VzdG9tZXIvdXBkYXRlLzppZCcsXG4gICAgVHJpcFVzdWFsQ3VzdG9tZXIudXBkYXRlVHJpcFVzdWFsQ3VzdG9tZXJcbiAgKTtcbiAgYXBwLmdldChcbiAgICAnL2FwaVJGL1RyaXBVc3VhbEN1c3RvbWVyL3JlYWQvOmlkJyxcbiAgICBUcmlwVXN1YWxDdXN0b21lci5yZWFkVHJpcFVzdWFsQ3VzdG9tZXJcbiAgKTtcbiAgYXBwLmRlbGV0ZShcbiAgICAnL2FwaVJGL1RyaXBVc3VhbEN1c3RvbWVyL2RlbGV0ZS86aWQnLFxuICAgIFRyaXBVc3VhbEN1c3RvbWVyLmRlbGV0ZVRyaXBVc3VhbEN1c3RvbWVyXG4gICk7XG4gIC8vKipUcmlwLUNsaWVudENvbXBhbnkgKi9cbiAgYXBwLnBvc3QoXG4gICAgJy9hcGlSRi9UcmlwQ2xpZW50Q29tcGFueS9pbnNlcnQnLFxuICAgIFRyaXBDbGllbnRDb21wYW55Lmluc2VydFRyaXBDbGllbnRDb21wYW55XG4gICk7XG4gIGFwcC5wdXQoXG4gICAgJy9hcGlSRi9UcmlwQ2xpZW50Q29tcGFueS91cGRhdGUvOmlkJyxcbiAgICBUcmlwQ2xpZW50Q29tcGFueS51cGRhdGVUcmlwQ2xpZW50Q29tcGFueVxuICApO1xuICBhcHAuZ2V0KFxuICAgICcvYXBpUkYvVHJpcENsaWVudENvbXBhbnkvcmVhZC86aWQnLFxuICAgIFRyaXBDbGllbnRDb21wYW55LnJlYWRUcmlwQ2xpZW50Q29tcGFueVxuICApO1xuICBhcHAuZGVsZXRlKFxuICAgICcvYXBpUkYvVHJpcENsaWVudENvbXBhbnkvZGVsZXRlLzppZCcsXG4gICAgVHJpcENsaWVudENvbXBhbnkuZGVsZXRlVHJpcENsaWVudENvbXBhbnlcbiAgKTtcbiAgLy8qKlRyYWRlIE1hcmdpbiAqL1xuICBhcHAucG9zdCgnL2FwaVJGL1RyYWRlTWFyZ2luL2luc2VydCcsIFRyYWRlTWFyZ2luLmluc2VydFRyYWRlTWFyZ2luKTtcbiAgYXBwLnB1dCgnL2FwaVJGL1RyYWRlTWFyZ2luL3VwZGF0ZS86aWQnLCBUcmFkZU1hcmdpbi51cGRhdGVUcmFkZU1hcmdpbik7XG4gIGFwcC5nZXQoJy9hcGlSRi9UcmFkZU1hcmdpbi9yZWFkLzppZCcsIFRyYWRlTWFyZ2luLnJlYWRUcmFkZU1hcmdpbik7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9UcmFkZU1hcmdpbi9kZWxldGUvOmlkJywgVHJhZGVNYXJnaW4uZGVsZXRlVHJhZGVNYXJnaW4pO1xuXG4gIC8vKipVc3VhbEN1c3RvbWVyLUNMaWVudENvbXBhbnkqICovXG4gIGFwcC5wb3N0KFxuICAgICcvYXBpUkYvVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnkvaW5zZXJ0JyxcbiAgICBVc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueS5pbnNlcnRVc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueVxuICApO1xuICBhcHAucHV0KFxuICAgICcvYXBpUkYvVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnkvdXBkYXRlLzppZCcsXG4gICAgVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnkudXBkYXRlVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnlcbiAgKTtcbiAgYXBwLmdldChcbiAgICAnL2FwaVJGL1VzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55L3JlYWQvOmlkJyxcbiAgICBVc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueS5yZWFkVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnlcbiAgKTtcbiAgYXBwLmRlbGV0ZShcbiAgICAnL2FwaVJGL1VzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55L2RlbGV0ZS86aWQnLFxuICAgIFVzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55LmRlbGV0ZVVzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55XG4gICk7XG4gIC8vKipSZW50IGNsaWVudCBjb21wYW55KiAqL1xuICBhcHAucG9zdChcbiAgICAnL2FwaVJGL1JlbnRDbGllbnRDb21wYW55L2luc2VydCcsXG4gICAgUmVudENsaWVudENvbXBhbnkuaW5zZXJ0UmVudENsaWVudENvbXBhbnlcbiAgKTtcbiAgYXBwLnB1dChcbiAgICAnL2FwaVJGL1JlbnRDbGllbnRDb21wYW55L3VwZGF0ZS86aWQnLFxuICAgIFJlbnRDbGllbnRDb21wYW55LnVwZGF0ZVJlbnRDbGllbnRDb21wYW55XG4gICk7XG4gIGFwcC5nZXQoXG4gICAgJy9hcGlSRi9SZW50Q2xpZW50Q29tcGFueS9yZWFkLzppZCcsXG4gICAgUmVudENsaWVudENvbXBhbnkucmVhZFJlbnRDbGllbnRDb21wYW55XG4gICk7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi9SZW50Q2xpZW50Q29tcGFueS9kZWxldGUvOmlkJyxcbiAgICBSZW50Q2xpZW50Q29tcGFueS5kZWxldGVSZW50Q2xpZW50Q29tcGFueVxuICApO1xuICAvLyoqUmVudCB1c3VhbCBjdXN0b21lciogKi9cbiAgYXBwLnBvc3QoXG4gICAgJy9hcGlSRi9SZW50VXN1YWxDdXN0b21lci9pbnNlcnQnLFxuICAgIFJlbnRVc3VhbEN1c3RvbWVyLmluc2VydFJlbnRVc3VhbEN1c3RvbWVyXG4gICk7XG4gIGFwcC5wdXQoXG4gICAgJy9hcGlSRi9SZW50VXN1YWxDdXN0b21lci91cGRhdGUvOmlkJyxcbiAgICBSZW50VXN1YWxDdXN0b21lci51cGRhdGVSZW50VXN1YWxDdXN0b21lclxuICApO1xuICBhcHAuZ2V0KFxuICAgICcvYXBpUkYvUmVudFVzdWFsQ3VzdG9tZXIvcmVhZC86aWQnLFxuICAgIFJlbnRVc3VhbEN1c3RvbWVyLnJlYWRSZW50VXN1YWxDdXN0b21lclxuICApO1xuICBhcHAuZGVsZXRlKFxuICAgICcvYXBpUkYvUmVudFVzdWFsQ3VzdG9tZXIvZGVsZXRlLzppZCcsXG4gICAgUmVudFVzdWFsQ3VzdG9tZXIuZGVsZXRlUmVudFVzdWFsQ3VzdG9tZXJcbiAgKTtcbiAgLy8qKlJlbnQgd2l0aCBkcml2ZXIgY2xpZW50IGNvbXBhbnkqICovXG4gIGFwcC5wb3N0KFxuICAgICcvYXBpUkYvUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55L2luc2VydCcsXG4gICAgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55Lmluc2VydFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueVxuICApO1xuICBhcHAucHV0KFxuICAgICcvYXBpUkYvUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55L3VwZGF0ZS86aWQnLFxuICAgIFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueS51cGRhdGVSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlcbiAgKTtcbiAgYXBwLmdldChcbiAgICAnL2FwaVJGL1JlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueS9yZWFkLzppZCcsXG4gICAgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55LnJlYWRSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlcbiAgKTtcbiAgYXBwLmRlbGV0ZShcbiAgICAnL2FwaVJGL1JlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueS9kZWxldGUvOmlkJyxcbiAgICBSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnkuZGVsZXRlUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55XG4gICk7XG4gIC8vKipSZW50IHdpdGggZHJpdmVyIHVzdWFsIEN1c3RvbWVyKiAqL1xuICBhcHAucG9zdChcbiAgICAnL2FwaVJGL1JlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lci9pbnNlcnQnLFxuICAgIFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lci5pbnNlcnRSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJcbiAgKTtcbiAgYXBwLnB1dChcbiAgICAnL2FwaVJGL1JlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lci91cGRhdGUvOmlkJyxcbiAgICBSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIudXBkYXRlUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyXG4gICk7XG4gIGFwcC5nZXQoXG4gICAgJy9hcGlSRi9SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIvcmVhZC86aWQnLFxuICAgIFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lci5yZWFkUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyXG4gICk7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi9SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIvZGVsZXRlLzppZCcsXG4gICAgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyLmRlbGV0ZVJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lclxuICApO1xuICAvLyoqUmVudCB3aXRoIGRyaXZlciBjbGllbnQgY29tcGFueSBkcml2ZXIqICovXG4gIGFwcC5wb3N0KFxuICAgICcvYXBpUkYvUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyL2luc2VydCcsXG4gICAgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyLmluc2VydFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlclxuICApO1xuICBhcHAucHV0KFxuICAgICcvYXBpUkYvUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyL3VwZGF0ZS86aWQnLFxuICAgIFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlci51cGRhdGVSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlEcml2ZXJcbiAgKTtcbiAgYXBwLmdldChcbiAgICAnL2FwaVJGL1JlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlci9yZWFkLzppZCcsXG4gICAgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyLnJlYWRSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlEcml2ZXJcbiAgKTtcbiAgYXBwLmRlbGV0ZShcbiAgICAnL2FwaVJGL1JlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlci9kZWxldGUvOmlkJyxcbiAgICBSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlEcml2ZXIuZGVsZXRlUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyXG4gICk7XG4gIC8vKipSZW50IHdpdGggZHJpdmVyIHVzdWFsIGN1c3RvbWVyIGRyaXZlciogKi9cbiAgYXBwLnBvc3QoXG4gICAgJy9hcGlSRi9SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIvaW5zZXJ0JyxcbiAgICBSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIuaW5zZXJ0UmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyXG4gICk7XG4gIGFwcC5wdXQoXG4gICAgJy9hcGlSRi9SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIvdXBkYXRlLzppZCcsXG4gICAgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyLnVwZGF0ZVJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlclxuICApO1xuICBhcHAuZ2V0KFxuICAgICcvYXBpUkYvUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyL3JlYWQvOmlkJyxcbiAgICBSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXIucmVhZFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlclxuICApO1xuICBhcHAuZGVsZXRlKFxuICAgICcvYXBpUkYvUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyL2RlbGV0ZS86aWQnLFxuICAgIFJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lckRyaXZlci5kZWxldGVSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXJcbiAgKTtcbiAgLy8qKnN0b3Agb3ZlciB0cmlwICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvU3RvcG92ZXJUcmlwL2luc2VydCcsIFN0b3BvdmVyVHJpcC5pbnNlcnRTdG9wb3ZlclRyaXApO1xuICBhcHAucHV0KCcvYXBpUkYvU3RvcG92ZXJUcmlwL3VwZGF0ZS86aWQnLCBTdG9wb3ZlclRyaXAudXBkYXRlU3RvcG92ZXJUcmlwKTtcbiAgYXBwLmdldCgnL2FwaVJGL1N0b3BvdmVyVHJpcC9yZWFkLzppZCcsIFN0b3BvdmVyVHJpcC5yZWFkU3RvcG92ZXJUcmlwKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL1N0b3BvdmVyVHJpcC9kZWxldGUvOmlkJywgU3RvcG92ZXJUcmlwLmRlbGV0ZVN0b3BvdmVyVHJpcCk7XG4gIC8vKipzdG9wIG92ZXIgdXN1YWwgY3VzdG9tZXIgKi9cbiAgYXBwLnBvc3QoXG4gICAgJy9hcGlSRi9TdG9wb3ZlclVzdWFsQ3VzdG9tZXIvaW5zZXJ0JyxcbiAgICBTdG9wb3ZlclVzdWFsQ3VzdG9tZXIuaW5zZXJ0U3RvcG92ZXJVc3VhbEN1c3RvbWVyXG4gICk7XG4gIGFwcC5wdXQoXG4gICAgJy9hcGlSRi9TdG9wb3ZlclVzdWFsQ3VzdG9tZXIvdXBkYXRlLzppZCcsXG4gICAgU3RvcG92ZXJVc3VhbEN1c3RvbWVyLnVwZGF0ZVN0b3BvdmVyVXN1YWxDdXN0b21lclxuICApO1xuICBhcHAuZ2V0KFxuICAgICcvYXBpUkYvU3RvcG92ZXJVc3VhbEN1c3RvbWVyL3JlYWQvOmlkJyxcbiAgICBTdG9wb3ZlclVzdWFsQ3VzdG9tZXIucmVhZFN0b3BvdmVyVXN1YWxDdXN0b21lclxuICApO1xuICBhcHAuZGVsZXRlKFxuICAgICcvYXBpUkYvU3RvcG92ZXJVc3VhbEN1c3RvbWVyL2RlbGV0ZS86aWQnLFxuICAgIFN0b3BvdmVyVXN1YWxDdXN0b21lci5kZWxldGVTdG9wb3ZlclVzdWFsQ3VzdG9tZXJcbiAgKTtcbiAgLy8qKlRWQSAqL1xuICBhcHAucG9zdChcbiAgICAnL2FwaVJGL1VzdWFsQ3VzdG9tZXJQZXJzb25hbEdyb3VwL2luc2VydCcsXG4gICAgVXN1YWxDdXN0b21lclBlcnNvbmFsR3JvdXAuaW5zZXJ0VXN1YWxDdXN0b21lclBlcnNvbmFsR3JvdXBcbiAgKTtcbiAgYXBwLnB1dChcbiAgICAnL2FwaVJGL1VzdWFsQ3VzdG9tZXJQZXJzb25hbEdyb3VwL3VwZGF0ZS86aWQnLFxuICAgIFVzdWFsQ3VzdG9tZXJQZXJzb25hbEdyb3VwLnVwZGF0ZVVzdWFsQ3VzdG9tZXJQZXJzb25hbEdyb3VwXG4gICk7XG4gIGFwcC5nZXQoXG4gICAgJy9hcGlSRi9Vc3VhbEN1c3RvbWVyUGVyc29uYWxHcm91cC9yZWFkLzppZCcsXG4gICAgVXN1YWxDdXN0b21lclBlcnNvbmFsR3JvdXAucmVhZFVzdWFsQ3VzdG9tZXJQZXJzb25hbEdyb3VwXG4gICk7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi9Vc3VhbEN1c3RvbWVyUGVyc29uYWxHcm91cC9kZWxldGUvOmlkJyxcbiAgICBVc3VhbEN1c3RvbWVyUGVyc29uYWxHcm91cC5kZWxldGVVc3VhbEN1c3RvbWVyUGVyc29uYWxHcm91cFxuICApO1xuICAvLyoqKioqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuICBhcHAuZ2V0KCcvYXBpL2dldGxpc3QnLCB0ZXN0MS5nZXRMaXN0KTtcbiAgYXBwLnBvc3QoJy9hcGkvaW5zZXJ0bGlzdCcsIHRlc3QxLmluc2VydExpc3QpO1xuICBhcHAucHV0KCcvYXBpL3VwZGF0ZWxpc3QnLCB0ZXN0MS51cGRhdGVMaXN0KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaS9kZWxldGVsaXN0JywgdGVzdDEuZGVsZXRlTGlzdCk7XG4gIC8vIEhvdGVsIHRhYmxlIHJvdXRlXG4gIGFwcC5nZXQoJy9hcGkvZ2V0aG90ZWwnLCBob3RlbC5nZXRIb3RlbCk7XG4gIC8vSW1hZ2UgdGFibGUgcm91dGVcbiAgYXBwLmdldCgnL2FwaS9nZXRpbWFnZScsIGltYWdlLmdldEltYWdlKTtcbiAgLy9JbWFnZSBqb2ludHVyZVxuICBhcHAuZ2V0KCcvYXBpL2dldE5hbWVJbWFnZS86aWQnLCBpbWFnZS5nZXROYW1lSW1nKTtcblxuICBhcHAuZ2V0KCcvYXBpL2dldGhvdGVsJywgaW1hZ2UuZ2V0SG90ZWwpO1xuXG4gIGFwcC5nZXQoJy9hcGkvZ2V0SG90ZWxOYW1lLzppZCcsIGltYWdlLmdldEhvdGVsTmFtZSk7XG4gIGFwcC5nZXQoJy9hcGkvZ2V0aG90ZWwxJywgaG90ZWwuZ2V0SG90ZWwxKTtcblxuICBhcHAuZ2V0KCcvYXBpL2dldE9uZUhvdGVsLzppZCcsIGhvdGVsLmdldE9uZUhvdGVsKTtcblxuICBhcHAucHV0KCcvYXBpL3VwZGF0ZU9uZUhvdGVsLzppZCcsIGhvdGVsLnVwZGF0ZU9uZUhvdGVsKTtcblxuICAvL21vdXJhZGktc291aGlyXG4gIC8vYXBpZ3JvdXBlIHNvdWhpclxuXG4gIGNvbnN0IG51bUNQVXMgPSByZXF1aXJlKCdvcycpLmNwdXMoKS5sZW5ndGg7XG4gIGNvbnNvbGUubG9nKCcwMG51bUNwdScsIG51bUNQVXMpO1xuXG4gIC8vYXBwLmdldCgnL2FwaUIyQi92aWxsZTEnLCB2aWxsZTEubGlzdCk7XG4gIC8qYXBwLmdldCgnL2FwaUIyQi9jeWJlcmVzYScsKHJlcSxyZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhheGlvcy5nZXQoJ2h0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsJykpIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIH1cbn0pKi9cblxuICAvL25ld3NcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgbmV3c05vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBuZXdzTm90Rm91bmQgIDxjb2RlPm5ld3M8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwibmV3cyBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4qIEBhcGkge2dldH0gL25ld3MvICBBTEwgbmV3c1xuKiBAYXBpTmFtZSBHZXRuZXdzXG4qIEBhcGlHcm91cCAgbmV3c1xuKlxuXG4qXG5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIG5ld3MgLlxuKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBtZXNzYWdlICAuXG4qIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGZsYXNoIDAvMS5cblxuXG5cbiogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4qICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbntcblwiaWRcIjogMixcblwibWVzc2FnZVwiOiBcInRlc3Rzc1wiLFxuXCJmbGFzaGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZShyZXEsIHJlcywgbmV4dCkgezogXCIxXCIsXG5cInBlcmlvZnVuY3Rpb24gYXV0aGVudGljYXRlKHJlcSwgcmVzLCBuZXh0KSB7X2Zyb21cIjogbnVsbCxcblwicGVyaW9mdW5jdGlvbiBhdXRoZW50aWNhdGUocmVxLCByZXMsIG5leHQpIHtfdG9cIjogbnVsbCxcblwiY3JlYXRmdW5jdGlvbiBhdXRoZW50aWNhdGUocmVxLCByZXMsIG5leHQpIHtkQXRcIjogXCIyMDE4LTA5LTI5VDA5OjUxOjU2LjAwMFpcIixcblwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0yOVQxMDoxNjoxOS4wMDBaXCJcbn0sXG57XG5cImlkXCI6IDMsXG5cIm1lc3NhZ2VcIjogXCJ0ZXN0XCIsXG5cImZsYXNoXCI6IFwiMVwiLFxuXCJwZXJpb2RfZnJvbVwiOiBudWxsLFxuXCJwZXJpb2RfdG9cIjogbnVsbCxcblwiY3JlYXRlZEF0XCI6IFwiMjAxOC0wOS0yOVQwOTo1NjoyMy4wMDBaXCIsXG5cInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDktMjlUMDk6NTY6MjMuMDAwWlwiXG59LFxue1xuXCJpZFwiOiA0LFxuXCJtZXNzYWdlXCI6IFwibWhoXCIsXG5cImZsYXNoXCI6IFwiT3VpXCIsXG5cInBlcmlvZF9mcm9tXCI6IG51bGwsXG5cInBlcmlvZF90b1wiOiBudWxsLFxuXCJjcmVhdGVkQXRcIjogXCIyMDE4LTA5LTI5VDA5OjU2OjI3LjAwMFpcIixcblwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0yOVQwOTo1NjoyNy4wMDBaXCJcbn1cbl1cbiogQGFwaVVzZSAgbmV3c05vdEZvdW5kRXJyb3JcbiovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9uZXdzLzppZCBHRVQgbmV3c1xuICogQGFwaU5hbWUgR2V0bmV3c1xuICogQGFwaUdyb3VwICBuZXdzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9ICBpZCBuZXdzIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgbmV3cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBtZXNzYWdlICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGZsYXNoICAgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuICB7XG4gICAgICAgIFwiaWRcIjogNCxcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwibWhoXCIsXG4gICAgICAgIFwiZmxhc2hcIjogXCJPdWlcIixcbiAgICAgICAgXCJwZXJpb2RfZnJvbVwiOiBudWxsLFxuICAgICAgICBcInBlcmlvZF90b1wiOiBudWxsLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMDktMjlUMDk6NTY6MjcuMDAwWlwiLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDktMjlUMDk6NTY6MjcuMDAwWlwiXG4gICAgfVxuICpcbiAqIEBhcGlVc2UgIG5ld3NOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9uZXcvIFBPU1QgbmV3c1xuICogQGFwaU5hbWUgUE9TVG5ld3NcbiAqIEBhcGlHcm91cCBuZXdzXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICB7XG5cbiAgICAgICAgXCJtZXNzYWdlXCI6IFwibWhoXCIsXG4gICAgICAgIFwiZmxhc2hcIjogXCJPdWlcIlxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gIHtcbiAgICAgICAgXCJpZFwiOiA0LFxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJtaGhcIixcbiAgICAgICAgXCJmbGFzaFwiOiBcIk91aVwiLFxuICAgICAgICBcInBlcmlvZF9mcm9tXCI6IG51bGwsXG4gICAgICAgIFwicGVyaW9kX3RvXCI6IG51bGwsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0wOS0yOVQwOTo1NjoyNy4wMDBaXCIsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0yOVQwOTo1NjoyNy4wMDBaXCJcbiAgICB9XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvbmV3LzppZCBQVVQgbmV3c1xuICogQGFwaU5hbWUgUFVUbmV3c1xuICogQGFwaUdyb3VwIG5ld3NcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAge1xuICAgICAgIFxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJtaGhcIixcbiAgICAgICAgXCJmbGFzaFwiOiBcIk91aVwiXG4gICAgfVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiAge1xuICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgIFwibWVzc2FnZVwiOiBcIm1oaFwiLFxuICAgICAgICBcImZsYXNoXCI6IFwiT3VpXCIsXG4gICAgICAgIFwicGVyaW9kX2Zyb21cIjogbnVsbCxcbiAgICAgICAgXCJwZXJpb2RfdG9cIjogbnVsbCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTA5LTI5VDA5OjU2OjI3LjAwMFpcIixcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA5LTI5VDA5OjU2OjI3LjAwMFpcIlxuICAgIH1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL25ldy86aWQgRGVsZXRlIG5ld3NcbiAgICogQGFwaU5hbWUgREVMRVRFbmV3c1xuICAgKiBAYXBpR3JvdXAgbmV3c1xuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgaWQgbmV3c1xuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9iYW5uZXJcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgYmFubmVyTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIGJhbm5lck5vdEZvdW5kICA8Y29kZT5iYW5uZXI8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiYmFubmVyIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2Jhbm5lcnMvICBBTEwgYmFubmVyc1xuICogQGFwaU5hbWUgR2V0YmFubmVyc1xuICogQGFwaUdyb3VwICBiYW5uZXJcbiAqXG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBiYW5uZXIgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAuXG4gKiBAYXBpU3VjY2VzcyB7ZGVidXR9IGRhdGUgZGVidXQuXG4gKiBAYXBpU3VjY2VzcyB7ZmlufSBkYXRlIGZpbi5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgIFwiaWRcIjogMTI2LFxuICAgIFwibm9tXCI6IFwic2hlbGwgYmVhY2hcIixcbiAgICBcInVybFwiOiBcInNoZWxsX2JlYWNoLmpwZ1wiLFxuICAgIFwiZGVidXRcIjogXCIyMDE4LTA3LTAxXCIsXG4gICAgXCJmaW5cIjogXCIyMDE4LTA3LTE1XCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIwMDAwLTAwLTAwXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIwMDAwLTAwLTAwXCJcbn1cbi4uLi5cbl1cbiAgKiBAYXBpVXNlICBiYW5uZXJOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2Jhbm5lci86aWQgR0VUIGJhbm5lclxuICogQGFwaU5hbWUgR2V0YmFubmVyXG4gKiBAYXBpR3JvdXAgIGJhbm5lclxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSAgaWQgYmFubmVyIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgYmFubmVyIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgLlxuICogQGFwaVN1Y2Nlc3Mge2RlYnV0fSBkYXRlIGRlYnV0LlxuICogQGFwaVN1Y2Nlc3Mge2Zpbn0gZGF0ZSBmaW4uXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4ge1xuICAgIFwiaWRcIjogMTI2LFxuICAgIFwibm9tXCI6IFwic2hlbGwgYmVhY2hcIixcbiAgICBcInVybFwiOiBcInNoZWxsX2JlYWNoLmpwZ1wiLFxuICAgIFwiZGVidXRcIjogXCIyMDE4LTA3LTAxXCIsXG4gICAgXCJmaW5cIjogXCIyMDE4LTA3LTE1XCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIwMDAwLTAwLTAwXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIwMDAwLTAwLTAwXCJcbn1cbiAqXG4gKiBAYXBpVXNlICBiYW5uZXJOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9iYW5uZXIvIFBPU1QgYmFubmVyXG4gKiBAYXBpTmFtZSBQT1NUYmFubmVyXG4gKiBAYXBpR3JvdXAgYmFubmVyXG4gKlxuXG4gKiBAYXBpcGFyYW0ge0ZpbGV9IHVybCBpbWFnZS5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICB7XG5cbiAgICAgICAgXCJub21cIjogXCJtaGhcIixcbiAgICAgICAgXCJkZWJ1dFwiOiBcIjIwMTgtMDEtMDFcIixcbiAgICAgICAgXCJmaW5cIjogXCIyMDE4LTExLTAxXCIsXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiAge1xuICAgIFwiaWRcIjogMTI2LFxuICAgIFwibm9tXCI6IFwic2hlbGwgYmVhY2hcIixcbiAgICBcInVybFwiOiBcInNoZWxsX2JlYWNoLmpwZ1wiLFxuICAgIFwiZGVidXRcIjogXCIyMDE4LTA3LTAxXCIsXG4gICAgXCJmaW5cIjogXCIyMDE4LTA3LTE1XCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIwMDAwLTAwLTAwXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIwMDAwLTAwLTAwXCJcbn1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9iYW5uZXIvOmlkIFBVVCBiYW5uZXJcbiAqIEBhcGlOYW1lIFBVVGJhbm5lclxuICogQGFwaUdyb3VwIGJhbm5lclxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlwYXJhbSB7RmlsZX0gdXJsIGltYWdlLlxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuIHtcblxuICAgIFwibm9tXCI6IFwic2hlbGwgYmVhY2hcIixcblxuICAgIFwiZGVidXRcIjogXCIyMDE4LTA3LTAxXCIsXG4gICAgXCJmaW5cIjogXCIyMDE4LTA3LTE1XCJcbn1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4ge1xuICAgIFwiaWRcIjogMTI2LFxuICAgIFwibm9tXCI6IFwic2hlbGwgYmVhY2hcIixcbiAgICBcInVybFwiOiBcInNoZWxsX2JlYWNoLmpwZ1wiLFxuICAgIFwiZGVidXRcIjogXCIyMDE4LTA3LTAxXCIsXG4gICAgXCJmaW5cIjogXCIyMDE4LTA3LTE1XCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIwMDAwLTAwLTAwXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIwMDAwLTAwLTAwXCJcbn1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL25ldy86aWQgRGVsZXRlIGJhbm5lclxuICAgKiBAYXBpTmFtZSBERUxFVEViYW5uZXJcbiAgICogQGFwaUdyb3VwIGJhbm5lclxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgaWQgYmFubmVyXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2FnZW5jZXMvaW5kaWNhdGV1cnMgICBHRVQgSW5kaWNhdGV1cnMgQWdlbmNlc1xuICogQGFwaU5hbWUgR2V0QWdlbmNlc0luZGljYXRldXJzXG4gKiBAYXBpR3JvdXAgIEFnZW5jZXNcbiAqXG5cbiAqXG5cblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWdJbnNjcml0ZXMgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFnQ2xpZW50ZXMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWdBY3RpdmVzIC5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICBcImFnSW5zY3JpdGVzXCI6IDI0OSxcbiAgICBcImFnQ2xpZW50ZXNcIjogMixcbiAgICBcImFnQWN0aXZlc1wiOiAxOVxufVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2FnZW5jZXMvbmJyZV9yZXNlcnZhdGlvbnMgICBHRVQgTm9tYnJlIHLDqXNlcnZhdGlvbnMgQWdlbmNlc1xuICogQGFwaU5hbWUgR2V0QWdlbmNlc05iclJlc2VydmF0aW9uc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQWdlbmNlc1xuICpcblxuICpcblxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBOQlJlc2VydkNvbmYgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IE5CUmVzZXJ2VG90IC5cblxuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgIFwiTkJSZXNlcnZDb25mXCI6IDIsXG4gICAgXCJOQlJlc2VydlRvdFwiOiAyXG59XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYWdlbmNlcy9jaGlmZnJlcyAgIEdFVCBDaGlmZnJlcyBkJ2FmZmFpcmVzIEFnZW5jZXNcbiAqIEBhcGlOYW1lIEdldEFnZW5jZXNDaGlmZnJlc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQWdlbmNlc1xuICpcblxuICpcblxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBDQU1veSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gQ0FUb3QgLlxuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgXCJDQU1veVwiOiA4MSxcbiAgICBcIkNBVG90XCI6IDE2MlxufVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2FnZW5jZXMvbmJyZSAgIEdFVCBOb21icmUgQWdlbmNlc1xuICogQGFwaU5hbWUgR2V0QWdlbmNlc05vbWJyZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQWdlbmNlc1xuICpcblxuICpcblxuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBuYW1lICAuXG4gKiBAYXBpU3VjY2VzcyB7QXJyYXl9IHNlcmllcyAuXG5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwic2VyaWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyZXNlcnZhdGlvblwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyZWNoZXJjaGVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5udWxhdGlvblwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICAuLi5cbl1cbiAgKiBAYXBpVXNlICBBZ2VuY2VOb3RGb3VuZEVycm9yXG4gKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9hZ2VuY2VzL2FjdGl2ZSAgR0VUIEFjdGl2ZXMgQWdlbmNlc1xuICogQGFwaU5hbWUgR2V0QWdlbmNlc0FjdGl2ZXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIEFnZW5jZXNcbiAqXG5cbiAqXG5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbmFtZSAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdmFsdWUgQ2hpZmZyZSBkJ2FmZmFpcmUgLlxuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiA3MDc1NDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiVGVzdCBkb3Rjb21cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiA2MDkyOC45XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkFnZW5jZSBUZXN0IEV1cm9cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiA5NzhcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQWdlbmNlIFRlc3RcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiAxMzAxXG4gICAgfVxuICAgIFxuLi4uXG5dXG4gICogQGFwaVVzZSAgQWdlbmNlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLy9hZ2VuY2VzXG5cbiAgLy9hZ2VuY2VzXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIEFnZW5jZU5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBBZ2VuY2VOb3RGb3VuZCAgPGNvZGU+QWdlbmNlPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcImFnZW5jZSBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2FnZW5jZXMvaW1wYXllZXMgIEltcGF5ZWVzIEFnZW5jZXNcbiAqIEBhcGlOYW1lIEdldEFnZW5jZXNJbXBheWVlc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQWdlbmNlc1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB1c2VybmFtZSAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9nbyBsb2dvIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR2YSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZmF4IC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBheXMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gemlwIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFkcmVzc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGFzc3dvcmQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc2FsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3Jlc2VydmF0aW9uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF90b3RhbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZG1pbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG90YWxfcmVzZXJ2YXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJfcmVzZXJ2YXRpb24gbmJyZSByZXNlcnZhdGlvbi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBheWVlIG1vbnRhbnQgcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1wYXllZSBtb250YW50IGltcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm91Z2UgJSBlbiByb3VnZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdGFsIG1vbnRhbnQgdG90YWwuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdXRvX2VtYWlsIGF1dG8gZW52b2kgZW1haWwuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBkZXZpc2UgZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZGV2aXNlIHRhdXggZGUgZGV2aXNlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kemQgdGF1eCBkZSBkZXZpc2UgYWxnZXJpZS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsMiBlbWFpbDIuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwb3J0YWJsZSBwb3J0YWJsZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdGl2ZSAgYWN0aXZlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX21vdXJhZGkgIG1hcmdlIG1vdXJhZGkuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gW1xuIHtcbiAgICAgICAgXCJpZFwiOiAxMzIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJ0ZXN0XCIsXG4gICAgICAgIFwibG9nb1wiOiBudWxsLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImZheFwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwic2t5bmV0LnNvdXNzZUBnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcInJ1ZSBkdSBtc2FrZW5cIixcbiAgICAgICAgXCJsb2dpblwiOiBcInRlc3RcIixcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxuICAgICAgICBcInNhbHRcIjogXCJcIixcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm1heF9yZXNlcnZhdGlvblwiOiAwLFxuICAgICAgICBcIm1heF90b3RhbFwiOiA1MDAwLFxuICAgICAgICBcImFkbWluXCI6IDAsXG4gICAgICAgIFwiYWN0aXZlXCI6IDAsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogXCIwXCIsXG4gICAgICAgIFwibmJfcmVzZXJ2YXRpb25cIjogMCxcbiAgICAgICAgXCJwYXllZVwiOiAwLFxuICAgICAgICBcImltcGF5ZWVcIjogMCxcbiAgICAgICAgXCJyb3VnZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX21vdXJhZGlcIjogNSxcbiAgICAgICAgXCJ0b3RhbFwiOiAwLFxuICAgICAgICBcImF1dG9fZW1haWxcIjogMCxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJFVVJPXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMi44NSxcbiAgICAgICAgXCJ0YXV4X2R6ZFwiOiAxLFxuICAgICAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgICAgICBcInBvcnRhYmxlXCI6IFwiXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIFxuLi4uXG5dXG4gICogQGFwaVVzZSAgQWdlbmNlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9hZ2VuY2VzL25vdF9hY3RpdmUgIE5vdEFjdGl2ZXMgQWdlbmNlc1xuICogQGFwaU5hbWUgR2V0QWdlbmNlc05vdEFjdGl2ZXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIEFnZW5jZXNcbiAqXG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdXNlcm5hbWUgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxvZ28gbG9nbyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0dmEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGZheCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwYXlzIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHZpbGxlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHppcCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhZHJlc3NlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxvZ2luIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBhc3N3b3JkIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHNhbHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYWZmaWNoYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYWZmaWNoYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9yZXNlcnZhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfdG90YWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWRtaW4gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdGFsX3Jlc2VydmF0aW9uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iX3Jlc2VydmF0aW9uIG5icmUgcmVzZXJ2YXRpb24uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwYXllZSBtb250YW50IHBhecOpZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGltcGF5ZWUgbW9udGFudCBpbXBhecOpZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvdWdlICUgZW4gcm91Z2UuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3RhbCBtb250YW50IHRvdGFsLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXV0b19lbWFpbCBhdXRvIGVudm9pIGVtYWlsLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZGV2aXNlIGRldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0YXV4X2RldmlzZSB0YXV4IGRlIGRldmlzZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZHpkIHRhdXggZGUgZGV2aXNlIGFsZ2VyaWUuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbDIgZW1haWwyLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcG9ydGFibGUgcG9ydGFibGUuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3RpdmUgIGFjdGl2ZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9tb3VyYWRpICBtYXJnZSBtb3VyYWRpLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFtcbiB7XG4gICAgICAgIFwiaWRcIjogMTMyLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwidGVzdFwiLFxuICAgICAgICBcImxvZ29cIjogbnVsbCxcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJmYXhcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInNreW5ldC5zb3Vzc2VAZ21haWwuY29tXCIsXG4gICAgICAgIFwicGF5c1wiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJ2aWxsZVwiOiBcIlwiLFxuICAgICAgICBcInppcFwiOiAwLFxuICAgICAgICBcImFkcmVzc2VcIjogXCJydWUgZHUgbXNha2VuXCIsXG4gICAgICAgIFwibG9naW5cIjogXCJ0ZXN0XCIsXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCJcIixcbiAgICAgICAgXCJzYWx0XCI6IFwiXCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfcmVzZXJ2YXRpb25cIjogMCxcbiAgICAgICAgXCJtYXhfdG90YWxcIjogNTAwMCxcbiAgICAgICAgXCJhZG1pblwiOiAwLFxuICAgICAgICBcImFjdGl2ZVwiOiAwLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IFwiMFwiLFxuICAgICAgICBcIm5iX3Jlc2VydmF0aW9uXCI6IDAsXG4gICAgICAgIFwicGF5ZWVcIjogMCxcbiAgICAgICAgXCJpbXBheWVlXCI6IDAsXG4gICAgICAgIFwicm91Z2VcIjogMCxcbiAgICAgICAgXCJtYXJnZV9tb3VyYWRpXCI6IDUsXG4gICAgICAgIFwidG90YWxcIjogMCxcbiAgICAgICAgXCJhdXRvX2VtYWlsXCI6IDAsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiRVVST1wiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDIuODUsXG4gICAgICAgIFwidGF1eF9kemRcIjogMSxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJwb3J0YWJsZVwiOiBcIlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgICBcbi4uLlxuXVxuICAqIEBhcGlVc2UgIEFnZW5jZU5vdEZvdW5kRXJyb3JcbiAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2FnZW5jZXMvICBBTEwgQWdlbmNlc1xuICogQGFwaU5hbWUgR2V0QWdlbmNlc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQWdlbmNlc1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB1c2VybmFtZSAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9nbyBsb2dvIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR2YSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZmF4IC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBheXMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gemlwIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFkcmVzc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGFzc3dvcmQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc2FsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3Jlc2VydmF0aW9uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF90b3RhbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZG1pbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG90YWxfcmVzZXJ2YXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJfcmVzZXJ2YXRpb24gbmJyZSByZXNlcnZhdGlvbi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBheWVlIG1vbnRhbnQgcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1wYXllZSBtb250YW50IGltcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm91Z2UgJSBlbiByb3VnZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdGFsIG1vbnRhbnQgdG90YWwuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdXRvX2VtYWlsIGF1dG8gZW52b2kgZW1haWwuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBkZXZpc2UgZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZGV2aXNlIHRhdXggZGUgZGV2aXNlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kemQgdGF1eCBkZSBkZXZpc2UgYWxnZXJpZS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsMiBlbWFpbDIuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwb3J0YWJsZSBwb3J0YWJsZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdGl2ZSAgYWN0aXZlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX21vdXJhZGkgIG1hcmdlIG1vdXJhZGkuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gW1xue1xuICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImxvZ29cIjogXCJsb2dvICgyKS5qcGdcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIoMDAyMTYpIDU4NDA4MDQwLzk4MjI4ODY3IC8gOTg2MzUzMjFcIixcbiAgICAgICAgXCJmYXhcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcIiBBdi4gTGVzIE9yYW5nZXJzIEltbWV1YmxlIEJpbGxhcmRpbm8gQXBwLk7CsCAxIEtoZXphbWEgRXN0ICwgNDA1MSBTb3Vzc2UgXCIsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCI4MGViZDFkNTlhNjQwYjE2Y2ZkNWNkNTMwMDczNGQxMWI2YjQwNjkzYTg4YmNiNWMzMGE1ZmRiNzUwMjkyZGQzMDEzMDc3YjlkOTI3Y2Q1ZDBkZTA0ZjZmZTU3NTFmOTVmNWNmMzJjODI1MDUxZjNiNjA4ODQyYzA1YWM4MjQ4NlwiLFxuICAgICAgICBcInNhbHRcIjogXCI2ZWQwMTg5YjhhODE4ZTQ0MzkxNGExMzQ2NjIxM2JhODljNzBhYWJjNWZmYzY2Njk1ODRlYTk3MGViZmNiNWVjNDdiNGFhZmUyZmI1MmQwMTUzMWNjODAzOTY2ZjAxODk2NGE2M2M2YzkzOTY4NWY0YThjYjg2Y2NlNzQxMzhmYlwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3Jlc2VydmF0aW9uXCI6IDEwMDAsXG4gICAgICAgIFwibWF4X3RvdGFsXCI6IDM1MDAwMDAsXG4gICAgICAgIFwiYWRtaW5cIjogMSxcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiBcIjUyNzAxMCBUTkQgPGJyIC8+IFBheWVyIDogMTEyIFRORCA8YnIgLz5JbXBheWVyIDogNTI2ODk4IFRORFwiLFxuICAgICAgICBcIm5iX3Jlc2VydmF0aW9uXCI6IDQ4OCxcbiAgICAgICAgXCJwYXllZVwiOiAxMTIsXG4gICAgICAgIFwiaW1wYXllZVwiOiA1MjY4OTgsXG4gICAgICAgIFwicm91Z2VcIjogMjAsXG4gICAgICAgIFwidG90YWxcIjogNTI3MDEwLFxuICAgICAgICBcImF1dG9fZW1haWxcIjogMCxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJUTkRcIixcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAxLFxuICAgICAgICBcInRhdXhfZHpkXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfbW91cmFkaVwiOiAwLFxuICAgICAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgICAgICBcInBvcnRhYmxlXCI6IFwiXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIFxuLi4uXG5dXG4gICogQGFwaVVzZSAgQWdlbmNlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9hZ2VuY2UvOmlkIEdFVCBBZ2VuY2VcbiAqIEBhcGlOYW1lIEdldEFnZW5jZVxuICogQGFwaUdyb3VwICBBZ2VuY2VzXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB1c2VybmFtZSAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9nbyBsb2dvIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR2YSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZmF4IC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBheXMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gemlwIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFkcmVzc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGFzc3dvcmQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc2FsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3Jlc2VydmF0aW9uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF90b3RhbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZG1pbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG90YWxfcmVzZXJ2YXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJfcmVzZXJ2YXRpb24gbmJyZSByZXNlcnZhdGlvbi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBheWVlIG1vbnRhbnQgcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1wYXllZSBtb250YW50IGltcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm91Z2UgJSBlbiByb3VnZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdGFsIG1vbnRhbnQgdG90YWwuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdXRvX2VtYWlsIGF1dG8gZW52b2kgZW1haWwuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBkZXZpc2UgZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZGV2aXNlIHRhdXggZGUgZGV2aXNlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kemQgdGF1eCBkZSBkZXZpc2UgYWxnZXJpZS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsMiBlbWFpbDIuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwb3J0YWJsZSBwb3J0YWJsZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdGl2ZSAgYWN0aXZlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX21vdXJhZGkgIG1hcmdlIG1vdXJhZGkuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICBcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwibG9nb1wiOiBcImxvZ28gKDIpLmpwZ1wiLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcInRlbFwiOiBcIigwMDIxNikgNTg0MDgwNDAvOTgyMjg4NjcgLyA5ODYzNTMyMVwiLFxuICAgICAgICBcImZheFwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInBheXNcIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwidmlsbGVcIjogXCJcIixcbiAgICAgICAgXCJ6aXBcIjogMCxcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwiIEF2LiBMZXMgT3JhbmdlcnMgSW1tZXVibGUgQmlsbGFyZGlubyBBcHAuTsKwIDEgS2hlemFtYSBFc3QgLCA0MDUxIFNvdXNzZSBcIixcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcIjgwZWJkMWQ1OWE2NDBiMTZjZmQ1Y2Q1MzAwNzM0ZDExYjZiNDA2OTNhODhiY2I1YzMwYTVmZGI3NTAyOTJkZDMwMTMwNzdiOWQ5MjdjZDVkMGRlMDRmNmZlNTc1MWY5NWY1Y2YzMmM4MjUwNTFmM2I2MDg4NDJjMDVhYzgyNDg2XCIsXG4gICAgICAgIFwic2FsdFwiOiBcIjZlZDAxODliOGE4MThlNDQzOTE0YTEzNDY2MjEzYmE4OWM3MGFhYmM1ZmZjNjY2OTU4NGVhOTcwZWJmY2I1ZWM0N2I0YWFmZTJmYjUyZDAxNTMxY2M4MDM5NjZmMDE4OTY0YTYzYzZjOTM5Njg1ZjRhOGNiODZjY2U3NDEzOGZiXCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfcmVzZXJ2YXRpb25cIjogMTAwMCxcbiAgICAgICAgXCJtYXhfdG90YWxcIjogMzUwMDAwMCxcbiAgICAgICAgXCJhZG1pblwiOiAxLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IFwiNTI3MDEwIFRORCA8YnIgLz4gUGF5ZXIgOiAxMTIgVE5EIDxiciAvPkltcGF5ZXIgOiA1MjY4OTggVE5EXCIsXG4gICAgICAgIFwibmJfcmVzZXJ2YXRpb25cIjogNDg4LFxuICAgICAgICBcInBheWVlXCI6IDExMixcbiAgICAgICAgXCJpbXBheWVlXCI6IDUyNjg5OCxcbiAgICAgICAgXCJyb3VnZVwiOiAyMCxcbiAgICAgICAgXCJ0b3RhbFwiOiA1MjcwMTAsXG4gICAgICAgIFwiYXV0b19lbWFpbFwiOiAwLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwibWFyZ2VfbW91cmFkaVwiOiAwLFxuICAgICAgICBcInRhdXhfZHpkXCI6IDAsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwicG9ydGFibGVcIjogXCJcIlxuICAgIH0sXG4gKlxuICogQGFwaVVzZSAgQWdlbmNlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvYWdlbmNlLyBQT1NUIGFnZW5jZVxuICogQGFwaURlc2NyaXB0aW9uIEFqb3V0IHVuIGFnZW5jZSAsIGF1dG9tYXRpcXVlbWVudCB1biBtZW1icmUgc2VyYSBham91dGVyIGF2ZWMgbG9naW4sbW90IHBhc3NlIGV0IGVtYWlsICwgYXVzc2kgbCdoaXN0b3JpcXVlIGRcbiAqIEBhcGlOYW1lIFBPU1RBZ2VuY2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgQWdlbmNlc1xuICpcblxuICogQGFwaXBhcmFtIHtGaWxlfSBGaWxlSW1nIGltYWdlLlxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxue1xuICAgIFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJsb2dvXCI6IFwibG9nbyAoMikuanBnXCIsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwidGVsXCI6IFwiKDAwMjE2KSA1ODQwODA0MC85ODIyODg2NyAvIDk4NjM1MzIxXCIsXG4gICAgICAgIFwiZmF4XCI6IFwiXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwicGF5c1wiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwiIEF2LiBMZXMgT3JhbmdlcnMgSW1tZXVibGUgQmlsbGFyZGlubyBBcHAuTsKwIDEgS2hlemFtYSBFc3QgLCA0MDUxIFNvdXNzZSBcIixcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm1heF90b3RhbFwiOiAzNTAwMDAwLFxuICAgICAgICBcInJvdWdlXCI6IDIwLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwibWFyZ2VfbW91cmFkaVwiOiAwLFxuICAgICAgICBcImVtYWlsMlwiOiBcIlwiXG4gICAgfSxcblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwibG9nb1wiOiBcImxvZ28gKDIpLmpwZ1wiLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcInRlbFwiOiBcIigwMDIxNikgNTg0MDgwNDAvOTgyMjg4NjcgLyA5ODYzNTMyMVwiLFxuICAgICAgICBcImZheFwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInBheXNcIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwidmlsbGVcIjogXCJcIixcbiAgICAgICAgXCJ6aXBcIjogMCxcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwiIEF2LiBMZXMgT3JhbmdlcnMgSW1tZXVibGUgQmlsbGFyZGlubyBBcHAuTsKwIDEgS2hlemFtYSBFc3QgLCA0MDUxIFNvdXNzZSBcIixcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxuICAgICAgICBcInNhbHRcIjogXCJcIixcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm1heF9yZXNlcnZhdGlvblwiOiAxMDAwLFxuICAgICAgICBcIm1heF90b3RhbFwiOiAzNTAwMDAwLFxuICAgICAgICBcImFkbWluXCI6IDEsXG4gICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogXCJcIixcbiAgICAgICAgXCJuYl9yZXNlcnZhdGlvblwiOiAwLFxuICAgICAgICBcInBheWVlXCI6IDAsXG4gICAgICAgIFwiaW1wYXllZVwiOiAwLFxuICAgICAgICBcInJvdWdlXCI6IDIwLFxuICAgICAgICBcInRvdGFsXCI6IDAsXG4gICAgICAgIFwiYXV0b19lbWFpbFwiOiAwLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwidGF1eF9kemRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9tb3VyYWRpXCI6IDAsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwicG9ydGFibGVcIjogXCJcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gKiBAYXBpRXJyb3IgIEVtYWlsVXNlZCAgPGNvZGU+RW1haWw8L2NvZGU+IHV0aWxpc8OpLlxuICAqXG4gKiAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItRW1haWxVc2VkOlxuICogICAgIEhUVFAvMS4xIDQwMiBFbWFpbFVzZWRcbiAqICAgICB7XG4gKiAgICAgICBcIm1lc3NhZ2VcIjogXCJFbWFpbCB1dGlsaXPDqVwiXG4gKiAgICAgfVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvYWdlbmNlL3JlZ2lzdHJlIFBPU1QgaW5zY3JpcHRpb24gYWdlbmNlXG4gKiBAYXBpRGVzY3JpcHRpb24gSW5zY3JpcHRpb24gdW4gYWdlbmNlICwgYXV0b21hdGlxdWVtZW50IHVuIG1lbWJyZSBzZXJhIGFqb3V0ZXIgYXZlYyBsb2dpbixtb3QgcGFzc2UgZXQgZW1haWwgLCBhdXNzaSBsJ2hpc3RvcmlxdWUgZFxuICogQGFwaU5hbWUgUE9TVFJlZ2lzdHJlQWdlbmNlXG4gKiBAYXBpR3JvdXAgQWdlbmNlc1xuICpcblxuICogQGFwaXBhcmFtIHtGaWxlfSBGaWxlSW1nIGltYWdlLlxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxue1xuICAgIFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJsb2dvXCI6IFwibG9nbyAoMikuanBnXCIsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwidGVsXCI6IFwiKDAwMjE2KSA1ODQwODA0MC85ODIyODg2NyAvIDk4NjM1MzIxXCIsXG4gICAgICAgIFwiZmF4XCI6IFwiXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwicGF5c1wiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJ2aWxsZVwiOiBcIlwiLFxuICAgICAgICBcInppcFwiOiAwLFxuICAgICAgICBcInBcIjogXCI4MGViZDE0NDRhNjQwYjE2Y2ZkNWNkNTMyMTczNGQxMWI2YjQwNjkzYTg4YmNiNWMzMGE1ZmRiNzUwMjkyZGQzMDEzMDc3YjlkOTI3Y2Q1ZDBkZTA0ZjZmZTU3NTFmOTVmNWNmMzJjODI1MDUxZjNiNjA4ODQyYzA1YWM4MjQ4NlwiLCAgICAgXHRcdFxuICAgICAgICBcImFkcmVzc2VcIjogXCIgQXYuIExlcyBPcmFuZ2VycyBJbW1ldWJsZSBCaWxsYXJkaW5vIEFwcC5OwrAgMSBLaGV6YW1hIEVzdCAsIDQwNTEgU291c3NlIFwiLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCJcbiAgICB9LFxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJsb2dvXCI6IFwibG9nbyAoMikuanBnXCIsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwidGVsXCI6IFwiKDAwMjE2KSA1ODQwODA0MC85ODIyODg2NyAvIDk4NjM1MzIxXCIsXG4gICAgICAgIFwiZmF4XCI6IFwiXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwicGF5c1wiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJ2aWxsZVwiOiBcIlwiLFxuICAgICAgICBcInppcFwiOiAwLFxuICAgICAgICBcImFkcmVzc2VcIjogXCIgQXYuIExlcyBPcmFuZ2VycyBJbW1ldWJsZSBCaWxsYXJkaW5vIEFwcC5OwrAgMSBLaGV6YW1hIEVzdCAsIDQwNTEgU291c3NlIFwiLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiODBlYmQxZDU5YTY0MGIxNmNmZDVjZDUzMDA3MzRkMTFiNmI0MDY5M2E4OGJjYjVjMzBhNWZkYjc1MDI5MmRkMzAxMzA3N2I5ZDkyN2NkNWQwZGUwNGY2ZmU1NzUxZjk1ZjVjZjMyYzgyNTA1MWYzYjYwODg0MmMwNWFjODI0ODZcIixcbiAgICAgICAgXCJzYWx0XCI6IFwiNmVkMDE4OWI4YTgxOGU0NDM5MTRhMTM0NjYyMTNiYTg5YzcwYWFiYzVmZmM2NjY5NTg0ZWE5NzBlYmZjYjVlYzQ3YjRhYWZlMmZiNTJkMDE1MzFjYzgwMzk2NmYwMTg5NjRhNjNjNmM5Mzk2ODVmNGE4Y2I4NmNjZTc0MTM4ZmJcIixcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm1heF9yZXNlcnZhdGlvblwiOiAxMDAwLFxuICAgICAgICBcIm1heF90b3RhbFwiOiAzNTAwMDAwLFxuICAgICAgICBcImFkbWluXCI6IDEsXG4gICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogXCI1MjcwMTAgVE5EIDxiciAvPiBQYXllciA6IDExMiBUTkQgPGJyIC8+SW1wYXllciA6IDUyNjg5OCBUTkRcIixcbiAgICAgICAgXCJuYl9yZXNlcnZhdGlvblwiOiA0ODgsXG4gICAgICAgIFwicGF5ZWVcIjogMTEyLFxuICAgICAgICBcImltcGF5ZWVcIjogNTI2ODk4LFxuICAgICAgICBcInJvdWdlXCI6IDIwLFxuICAgICAgICBcInRvdGFsXCI6IDUyNzAxMCxcbiAgICAgICAgXCJhdXRvX2VtYWlsXCI6IDAsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJtYXJnZV9tb3VyYWRpXCI6IDAsXG4gICAgICAgIFwidGF1eF9kemRcIjogMCxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJwb3J0YWJsZVwiOiBcIlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAqIEBhcGlFcnJvciAgRW1haWxVc2VkICA8Y29kZT5FbWFpbDwvY29kZT4gdXRpbGlzw6kuXG4gICpcbiAqICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1FbWFpbFVzZWQ6XG4gKiAgICAgSFRUUC8xLjEgNDAyIEVtYWlsVXNlZFxuICogICAgIHtcbiAqICAgICAgIFwibWVzc2FnZVwiOiBcIkVtYWlsIHV0aWxpc8OpXCJcbiAqICAgICB9XG4gXG4gKi9cbiAgLy9hcnJhbmdlbWVudHNcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgYXJyYW5nZW1lbnRzTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIGFycmFuZ2VtZW50c05vdEZvdW5kICA8Y29kZT5hcnJhbmdlbWVudHM8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiYXJyYW5nZW1lbnRzIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2FycmFuZ2VtZW50cy8gIEFMTCBBcnJhbmdlbWVudHNcbiAqIEBhcGlOYW1lIEdldGFsbGFycmFuZ2VtZW50c1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBBcnJhbmdlbWVudHNcbiAqXG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycklkIHVuaXF1ZSBJRCBhcnJhbmdlbWVudHMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYXJyYW5nZW1lbnRzICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhcnIgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdCAwLzEuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJhcnJJZFwiOiAxLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkxvZ2VtZW50IFNpbXBsZVwiLFxuICAgICAgICBcImFyclwiOiBcIkxTXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJhcnJJZFwiOiAyLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkxvZ2VtZW50IFBldGl0IETDqWpldW5lclwiLFxuICAgICAgICBcImFyclwiOiBcIkxQRFwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiYXJySWRcIjogMyxcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJEZW1pIFBlbnNpb25cIixcbiAgICAgICAgXCJhcnJcIjogXCJEUFwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiYXJySWRcIjogNCxcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJQZW5zaW9uIENvbXBsw6h0ZVwiLFxuICAgICAgICBcImFyclwiOiBcIlBDXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJhcnJJZFwiOiA3LFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkFsbCBJbmNsdXNpdmVcIixcbiAgICAgICAgXCJhcnJcIjogXCJBbGwtaW5cIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgICBcImFycklkXCI6IDUsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiRFArXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiRFArXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICBcbiAuLi5cbl1cbiovXG4gIC8qKlxuICAqIEBhcGlVc2UgIGFycmFuZ2VtZW50c05vdEZvdW5kRXJyb3JcblxuICogQGFwaSB7Z2V0fSAvYXJyYW5nZW1lbnQvOmFycklkIEdFVCBBcnJhbmdlbWVudFxuICogQGFwaU5hbWUgR2V0YXJyYW5nZW1lbnRcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgQXJyYW5nZW1lbnRzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9ICBhcnJJZCBhcnJhbmdlbWVudHMgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycklkIHVuaXF1ZSBJRCBhcnJhbmdlbWVudHMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbWVzc2FnZSAgLlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBmbGFzaCAgIDAvMS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiAgIHtcbiAgICAgICAgXCJhcnJJZFwiOiA5LFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIlVsdHJhIEFJIFNvZnQgRHJpbmtcIixcbiAgICAgICAgXCJhcnJcIjogXCJVbC1zb1wiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuICpcbiAqIEBhcGlVc2UgIGFycmFuZ2VtZW50c05vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2FycmFuZ2VtZW50LyBQT1NUIEFycmFuZ2VtZW50c1xuICogQGFwaU5hbWUgUE9TVGFycmFuZ2VtZW50c1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBhcnJhbmdlbWVudHNcbiAqXG4vL2FycmFuZ2VtZW50c1xuXHQvKipcbiogQGFwaURlZmluZSBhcnJhbmdlbWVudHNOb3RGb3VuZEVycm9yXG4gKiBAYXBpRXJyb3IgIGFycmFuZ2VtZW50c05vdEZvdW5kICA8Y29kZT5hcnJhbmdlbWVudHM8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgKlxuICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gKiAgICAge1xuICogICAgICAgXCJtZXNzYWdlXCI6IFwiYXJyYW5nZW1lbnRzIHBhcyB0cm91dsOpZVwiXG4gKiAgICAgfVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvYXJyYW5nZW1lbnQvIFBPU1QgQXJyYW5nZW1lbnRzXG4gKiBAYXBpTmFtZSBQT1NUYXJyYW5nZW1lbnRzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEFycmFuZ2VtZW50c1xuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gICB7XG4gICAgXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiVWx0cmEgQUkgU29mdCBEcmlua1wiLFxuICAgICAgICBcImFyclwiOiBcIlVsLXNvXCJcbiAgICAgICBcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuICAgIHtcbiAgICAgICAgXCJhcnJJZFwiOiA5LFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIlVsdHJhIEFJIFNvZnQgRHJpbmtcIixcbiAgICAgICAgXCJhcnJcIjogXCJVbC1zb1wiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2FycmFuZ2VtZW50LzphcnJJZCBQVVQgQXJyYW5nZW1lbnRzXG4gKiBAYXBpTmFtZSBQVVRhcnJhbmdlbWVudHNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgQXJyYW5nZW1lbnRzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGFycklkICAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gIHtcbiAgICAgICBcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwibWhoXCIsXG4gICAgICAgIFwiZmxhc2hcIjogXCJPdWlcIlxuICAgIH1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuICB7XG4gICAgICAgIFwiYXJySWRcIjogOSxcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJVbHRyYSBBSSBTb2Z0IERyaW5rXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiVWwtc29cIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2FycmFuZ2VtZW50LzphcnJJZCBEZWxldGUgQXJyYW5nZW1lbnRzXG4gICAqIEBhcGlOYW1lIERFTEVURWFycmFuZ2VtZW50c1xuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpR3JvdXAgQXJyYW5nZW1lbnRzXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhcnJJZCBpZCBhcnJhbmdlbWVudHNcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8qIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICB7XG5cbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJVbHRyYSBBSSBTb2Z0IERyaW5rXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiVWwtc29cIlxuICAgIH1cbiovXG4gIC8qIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuICB7XG4gICAgICAgIFwiYXJySWRcIjogOSxcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJVbHRyYSBBSSBTb2Z0IERyaW5rXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiVWwtc29cIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9hcnJhbmdlbWVudC86YXJySWQgUFVUIEFycmFuZ2VtZW50c1xuICogQGFwaU5hbWUgUFVUYXJyYW5nZW1lbnRzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEFycmFuZ2VtZW50c1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhcnJJZCAgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICB7XG4gICAgICAgXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiVWx0cmEgQUkgU29mdCBEcmlua1wiLFxuICAgICAgICBcImFyclwiOiBcIlVsLXNvXCJcbiAgICB9XG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuICB7XG4gICAgICAgIFwiYXJySWRcIjogOSxcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJVbHRyYSBBSSBTb2Z0IERyaW5rXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiVWwtc29cIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2FycmFuZ2VtZW50LzphcnJJZCBEZWxldGUgYXJyYW5nZW1lbnRzXG4gICAqIEBhcGlOYW1lIERFTEVURWFycmFuZ2VtZW50c1xuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpR3JvdXAgQXJyYW5nZW1lbnRzXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhcnJJZCBpZCBhcnJhbmdlbWVudHNcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvYWdlbmNlLzppZCBQVVQgQWdlbmNlXG4gKiBAYXBpTmFtZSBQVVRBZ2VuY2VcbiAqIEBhcGlHcm91cCBBZ2VuY2VzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICAgdW5pcXVlIElELlxuICogQGFwaXBhcmFtIHtGaWxlfSBGaWxlSW1nIGltYWdlLlxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxue1xuICAgIFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJsb2dvXCI6IFwibG9nbyAoMikuanBnXCIsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwidGVsXCI6IFwiKDAwMjE2KSA1ODQwODA0MC85ODIyODg2NyAvIDk4NjM1MzIxXCIsXG4gICAgICAgIFwiZmF4XCI6IFwiXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwicGF5c1wiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJ2aWxsZVwiOiBcIlwiLFxuICAgICAgICBcInppcFwiOiAwLFxuICAgICAgICBcImFkcmVzc2VcIjogXCIgQXYuIExlcyBPcmFuZ2VycyBJbW1ldWJsZSBCaWxsYXJkaW5vIEFwcC5OwrAgMSBLaGV6YW1hIEVzdCAsIDQwNTEgU291c3NlIFwiLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcInBcIjogXCI4MGViZDFkNTlhNjQwYjE2Y2ZkNWNkNTMwMDczNGQxMWI2YjQwNjkzYTg4YmNiNWMzMGE1ZmRiNzUwMjkyZGQzMDEzMDc3YjlkOTI3Y2Q1ZDBkZTA0ZjZmZTU3NTFmOTVmNWNmMzJjODI1MDUxZjNiNjA4ODQyYzA1YWM4MjQ4NlwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3Jlc2VydmF0aW9uXCI6IDEwMDAsXG4gICAgICAgIFwibWF4X3RvdGFsXCI6IDM1MDAwMDAsXG4gICAgICAgIFwiYWRtaW5cIjogMSxcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJyb3VnZVwiOiAyMCxcbiAgICAgICAgXCJ0b3RhbFwiOiA1MjcwMTAsXG4gICAgICAgIFwiYXV0b19lbWFpbFwiOiAwLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwicG9ydGFibGVcIjogXCJcIlxuICAgIH0sXG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImxvZ29cIjogXCJsb2dvICgyKS5qcGdcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIoMDAyMTYpIDU4NDA4MDQwLzk4MjI4ODY3IC8gOTg2MzUzMjFcIixcbiAgICAgICAgXCJmYXhcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcIiBBdi4gTGVzIE9yYW5nZXJzIEltbWV1YmxlIEJpbGxhcmRpbm8gQXBwLk7CsCAxIEtoZXphbWEgRXN0ICwgNDA1MSBTb3Vzc2UgXCIsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCI4MGViZDFkNTlhNjQwYjE2Y2ZkNWNkNTMwMDczNGQxMWI2YjQwNjkzYTg4YmNiNWMzMGE1ZmRiNzUwMjkyZGQzMDEzMDc3YjlkOTI3Y2Q1ZDBkZTA0ZjZmZTU3NTFmOTVmNWNmMzJjODI1MDUxZjNiNjA4ODQyYzA1YWM4MjQ4NlwiLFxuICAgICAgICBcInNhbHRcIjogXCI2ZWQwMTg5YjhhODE4ZTQ0MzkxNGExMzQ2NjIxM2JhODljNzBhYWJjNWZmYzY2Njk1ODRlYTk3MGViZmNiNWVjNDdiNGFhZmUyZmI1MmQwMTUzMWNjODAzOTY2ZjAxODk2NGE2M2M2YzkzOTY4NWY0YThjYjg2Y2NlNzQxMzhmYlwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3Jlc2VydmF0aW9uXCI6IDEwMDAsXG4gICAgICAgIFwibWF4X3RvdGFsXCI6IDM1MDAwMDAsXG4gICAgICAgIFwiYWRtaW5cIjogMSxcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiBcIjUyNzAxMCBUTkQgPGJyIC8+IFBheWVyIDogMTEyIFRORCA8YnIgLz5JbXBheWVyIDogNTI2ODk4IFRORFwiLFxuICAgICAgICBcIm5iX3Jlc2VydmF0aW9uXCI6IDQ4OCxcbiAgICAgICAgXCJwYXllZVwiOiAxMTIsXG4gICAgICAgIFwiaW1wYXllZVwiOiA1MjY4OTgsXG4gICAgICAgIFwicm91Z2VcIjogMjAsXG4gICAgICAgIFwidG90YWxcIjogNTI3MDEwLFxuICAgICAgICBcImF1dG9fZW1haWxcIjogMCxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJUTkRcIixcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAxLFxuICAgICAgICBcInRhdXhfZHpkXCI6IDAsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwicG9ydGFibGVcIjogXCJcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG5cblxuICovXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvYWN0aXZlX2FnZW5jZS86aWQgUFVUIEFjdGl2ZSBhZ2VuY2UgXG4gKiBAYXBpTmFtZSBQVVRBY3RpdmVBZ2VuY2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgQWdlbmNlc1xuICpcblxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICBcInN1Y2Nlc3NcIjogdHJ1ZVxufVxuICovXG5cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2FnZW5jZS86aWQgRGVsZXRlIGFnZW5jZVxuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpR3JvdXAgQWdlbmNlc1xuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgaWQgYWdlbmNlXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL3ZpbGxlc1xuICAvKipcbiAgICogQGFwaURlZmluZSBWaWxsZU5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBWaWxsZU5vdEZvdW5kICA8Y29kZT5WaWxsZTwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJ2aWxsZSBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC92aWxsZXMvICBBTEwgVmlsbGVzXG4gKiBAYXBpTmFtZSBHZXRWaWxsZXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIFZpbGxlc1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmlsbGVJZCB1bmlxdWUgSUQgdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdmlsbGVUaXRsZSAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY291bnRyeUlkIHJlZ2lvbiBpZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsYW5nIGxhbmd1YWdlIC5cblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0ICBhY3RpdmUgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFtcbiAgICB7XG4gICAgICAgIFwidmlsbGVJZFwiOiAxLFxuICAgICAgICBcInZpbGxlVGl0bGVcIjogXCJIYW1tYW1ldFwiLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImNvdW50cnlJZFwiOiAxLFxuICAgICAgICBcImxhbmdcIjogXCJcIixcbiAgICAgICAgXCJvcmRcIjogNSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAgXG4uLi5cbl1cbiAgKiBAYXBpVXNlICBWaWxsZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvdmlsbGVzLzp2aWxsZUlkIEdFVCBWaWxsZVxuICogQGFwaU5hbWUgR2V0VmlsbGVcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIFZpbGxlc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSAgdmlsbGVJZCB2aWxsZSB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmlsbGVJZCB1bmlxdWUgSUQgdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdmlsbGVUaXRsZSAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY291bnRyeUlkIHJlZ2lvbiBpZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsYW5nIGxhbmd1YWdlIC5cblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0ICBhY3RpdmUgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuICAgIHtcbiAgICAgICAgXCJ2aWxsZUlkXCI6IDEsXG4gICAgICAgIFwidmlsbGVUaXRsZVwiOiBcIkhhbW1hbWV0XCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiY291bnRyeUlkXCI6IDEsXG4gICAgICAgIFwibGFuZ1wiOiBcIlwiLFxuICAgICAgICBcIm9yZFwiOiA1LFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuICpcbiAqIEBhcGlVc2UgIFZpbGxlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvdmlsbGVzLyBQT1NUIHZpbGxlXG4gKiBAYXBpTmFtZSBQT1NUVmlsbGVcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgVmlsbGVzXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICB7XG5cbiAgICAgICAgXCJ2aWxsZVRpdGxlXCI6IFwiSGFtbWFtZXRcIixcbiAgICAgICAgXCJhY3RcIjogMVxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgXCJjb3VudHJ5SWRcIjogXCIwXCIsXG4gICAgXCJsYW5nXCI6IFwiXCIsXG4gICAgXCJvcmRcIjogXCIxMDBcIixcbiAgICBcInZpbGxlSWRcIjogNDQsXG4gICAgXCJ2aWxsZVRpdGxlXCI6IFwiSGFtbWFtZXRcIixcbiAgICBcImFjdFwiOiAxLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0xN1QwOTo0MDowNC44MThaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTA5LTE3VDA5OjQwOjA0LjgxOFpcIlxufVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3ZpbGxlcy86dmlsbGVJZCBQVVQgVmlsbGVcbiAqIEBhcGlOYW1lIFBVVFZpbGxlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIFZpbGxlc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSB2aWxsZUlkICAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gICAge1xuXG4gICAgICAgIFwidmlsbGVUaXRsZVwiOiBcIkhhbW1hbWV0XCIsXG4gICAgICAgIFwiYWN0XCI6IDFcbiAgICB9XG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuICAgIHtcbiAgICAgICAgXCJ2aWxsZUlkXCI6IDEsXG4gICAgICAgIFwidmlsbGVUaXRsZVwiOiBcIkhhbW1hbWV0XCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiY291bnRyeUlkXCI6IDEsXG4gICAgICAgIFwibGFuZ1wiOiBcIlwiLFxuICAgICAgICBcIm9yZFwiOiA1LFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDktMTdUMDk6NDA6MDQuODE4WlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMDktMTdUMDk6NDA6MDQuODE4WlwiXG4gICAgfVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvdmlsbGVzLzp2aWxsZUlkIERlbGV0ZSBWaWxsZVxuICAgKiBAYXBpTmFtZSBERUxFVEVWaWxsZVxuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpR3JvdXAgVmlsbGVzXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSB2aWxsZUlkIGlkIHZpbGxlXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL1BheXNcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgUGF5c05vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBQYXlzTm90Rm91bmQgIDxjb2RlPlBheXM8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiUGF5cyBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC8vICBBTEwgUGF5c1xuICogQGFwaU5hbWUgR2V0UGF5c1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgUGF5c1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIFBheXMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNvZGUgY29kZSAuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG4gICAgIHtcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJjb2RlXCI6IFwiVE5cIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAgXG4uLi5cbl1cbiAgKiBAYXBpVXNlICBQYXlzTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9QYXlzLzppZCBHRVQgUGF5c1xuICogQGFwaU5hbWUgR2V0UGF5c1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgUGF5c1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSAgaWQgUGF5cyB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIFBheXMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNvZGUgY29kZSAuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuICAgICB7XG4gICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwiY29kZVwiOiBcIlROXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG4gKlxuICogQGFwaVVzZSAgUGF5c05vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL1BheXMvIFBPU1QgUGF5c1xuICogQGFwaU5hbWUgUE9TVFBheXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgUGF5c1xuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gICAge1xuXG4gICAgICAgIFwibm9tXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcImNvZGVcIjogXCJUTlwiXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiAge1xuICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcImNvZGVcIjogXCJUTlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL1BheXMvOmlkIFBVVCBQYXlzXG4gKiBAYXBpTmFtZSBQVVRQYXlzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIFBheXNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICAge1xuXG4gICAgICAgIFwibm9tXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcImNvZGVcIjogXCJUTlwiXG4gICAgfSxcbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4gXG4gICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwiY29kZVwiOiBcIlROXCIsXG4gIFxuICAgIFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDktMTdUMDk6NDA6MDQuODE4WlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMDktMTdUMDk6NDA6MDQuODE4WlwiXG4gICAgfVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvUGF5cy86aWQgRGVsZXRlIFBheXNcbiAgICogQGFwaU5hbWUgREVMRVRFUGF5c1xuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpR3JvdXAgUGF5c1xuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgaWQgUGF5c1xuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG4gIC8vaG90ZWxcbiAgLy9ob3RlbHNcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgSG90ZWxOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgSG90ZWxOb3RGb3VuZCAgPGNvZGU+SG90ZWw8L2NvZGU+IHBhcyB0cm91dsOpLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJow7R0ZWwgcGFzIHRyb3V2w6lcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9ob3RlbHMvICBBTEwgSG90ZWxzXG4gKiBAYXBpTmFtZSBHZXRIb3RlbHNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIEhvdGVsc1xuICpcblxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgdW5pcXVlIElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkdmlsbGUgdW5pcXVlIElEIHZpbGxlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxvZ2luIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgKG9ibGlnYXRvaXJlKS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR2YSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhZHJlc3NlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGluZm8gaW5mb3JtYXRpb24gc3VwcGzDqW1lbnRhaXJlLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbGllbiB1cmwgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIGjDtHRlbCAob2JsaWdhdG9pcmUpLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwyIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBmYXggaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRlbCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naWNpZWwgdXRpbGlzw6llIHBhciBsJ2jDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBtYXAgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG1hcCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY2hvaXhfZW1haWwgIFJlc2EvR21haWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mX21pbiAgYWdlIGVuZmFudCBtaW4gMC8xMi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGVuZl9tYXggIGFnZSBlbmZhbnQgbWF4IDAvMTYuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZSAgbWFyZ2UgcGFyIGhvdGVsLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uICBvcGVyYXRpb24gZGUgbWFyZ2UgMC8xLkFtZW5hZ2VtZW50XG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAgcG91cmNlbnQgZGUgbWFyZ2UgMC8xLlxuICAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgIG1hcmdlIGIyYyBwYXIgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgIG9wZXJhdGlvbiBiMmMgZGUgbWFyZ2UgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAgcG91cmNlbnQgZGUgbWFyZ2UgYjJjIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGV0b2lsZSAgbmJyZSBkJ8OpdG9pbGUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2FsY3VsICB0eXBlIGRlIGNhbGN1bCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdG9wICBzdG9wIHZlbnRlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNlbGViYXRlICBjZWxlYmF0YWlyZSBvdSBub24gMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXV0b192b3VjaGVyICBlbnZvaSBhdXRvbWF0aXF1ZSBlbWFpbCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7dmlsbGV9IHZpbGxlICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3QgIGFjdGl2ZSAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gW1xuICAgIHtcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwiaWR2aWxsZVwiOiAyNixcbiAgICAgICAgXCJsb2dpblwiOiBcIlwiLFxuICAgICAgICBcIm5vbVwiOiBcIk9uZSBSZXNvcnQgTW9uYXN0aXJcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJlbmZfbWluXCI6IDMsXG4gICAgICAgIFwiZW5mX21heFwiOiAxMixcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwiNjAwMFwiLFxuICAgICAgICBcImluZm9cIjogXCJPZmZyZSB2YWxhYmxlIGp1c3F1J2F1IDMxLzAzLzIwMTYuPGJyIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0QWxsIGluY2x1c2l2ZS5cIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcImxpZW5cIjogXCJtb25hc3Rpci9ob3RlbC1vbmUtcmVzb3J0LnBocFwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwiZXRvaWxlXCI6IDQsXG4gICAgICAgIFwiY2FsY3VsXCI6IDEsXG4gICAgICAgIFwiYXV0b192b3VjaGVyXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJlbWFpbFwiOiBcInJlc2Eub25laG90ZWxzYW5kcmVzb3J0c0BwbGFuZXQudG5cIixcbiAgICAgICAgXCJmYXhcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLXR1bmlzaWUtdGFzbmltZS12b3lhZ2VzX3AuanBnXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwibG9naWNpZWxcIjogXCJcIixcbiAgICAgICAgXCJtYXBcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMjk1MC45ODIzNjcyODAwNTQhMmQxMC43NDc5MTY4NDgxNDA2NyEzZDM1Ljc1NzA1NzM2MDY2NzIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDEzMDIwY2MzYTI5MjM3N2QlM0EweGU4MzZjMDMzZmQzNjllYmUhMnNPbmUrUmVzb3J0K01vbmFzdGlyITVlMCEzbTIhMXNmciEycyE0djE0NTc5Mzg4XCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwic3RvcFwiOiAwLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IDczLFxuICAgICAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJjaG9peF9lbWFpbFwiOiAxLFxuICAgICAgICBcImNlbGViYXRlXCI6IDEsXG4gICAgICAgIFwidmlsbGVcIjoge1xuICAgICAgICAgICAgXCJ2aWxsZVRpdGxlXCI6IFwiTW9uYXN0aXJcIixcbiAgICAgICAgICAgIFwidmlsbGVJZFwiOiAyNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbi4uLlxuXVxuICAqIEBhcGlVc2UgIEhvdGVsTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9ob3RlbC86aWRob3RlbCBHRVQgSG90ZWxcbiAqIEBhcGlOYW1lIEdldEhvdGVsXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBIb3RlbHNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gIGlkaG90ZWwgaG90ZWwgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgdW5pcXVlIElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkdmlsbGUgdW5pcXVlIElEIHZpbGxlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxvZ2luIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgKG9ibGlnYXRvaXJlKS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR2YSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhZHJlc3NlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGluZm8gaW5mb3JtYXRpb24gc3VwcGzDqW1lbnRhaXJlLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbGllbiB1cmwgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIGjDtHRlbCAob2JsaWdhdG9pcmUpLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwyIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBmYXggaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRlbCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naWNpZWwgdXRpbGlzw6llIHBhciBsJ2jDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBtYXAgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG1hcCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY2hvaXhfZW1haWwgIFJlc2EvR21haWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mX21pbiAgYWdlIGVuZmFudCBtaW4gMC8xMi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGVuZl9tYXggIGFnZSBlbmZhbnQgbWF4IDAvMTYuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZSAgbWFyZ2UgcGFyIGhvdGVsLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uICBvcGVyYXRpb24gZGUgbWFyZ2UgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgIHBvdXJjZW50IGRlIG1hcmdlIDAvMS5cbiAgKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jICBtYXJnZSBiMmMgcGFyIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jICBvcGVyYXRpb24gYjJjIGRlIG1hcmdlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgIHBvdXJjZW50IGRlIG1hcmdlIGIyYyAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBldG9pbGUgIG5icmUgZCfDqXRvaWxlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNhbGN1bCAgdHlwZSBkZSBjYWxjdWwgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3RvcCAgc3RvcCB2ZW50ZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBjZWxlYmF0ZSAgY2VsZWJhdGFpcmUgb3Ugbm9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGF1dG9fdm91Y2hlciAgZW52b2kgYXV0b21hdGlxdWUgZW1haWwgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge3ZpbGxlfSB2aWxsZSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0ICBhY3RpdmUgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxue1xuICAgIFwiaWRob3RlbFwiOiAzLFxuICAgIFwiaWR2aWxsZVwiOiAxLFxuICAgIFwibG9naW5cIjogXCJyYWRpc3NvblwiLFxuICAgIFwibm9tXCI6IFwiIFJhZGlzc29uIEJsdSBIYW1tYW1ldFwiLFxuICAgIFwidHZhXCI6IFwiXCIsXG4gICAgXCJlbmZfbWluXCI6IDIsXG4gICAgXCJlbmZfbWF4XCI6IDEyLFxuICAgIFwiYWRyZXNzZVwiOiBcIlwiLFxuICAgIFwiaW5mb1wiOiBcIlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICBcImxpZW5cIjogXCJoYW1tYW1ldC9ob3RlbC1yYWRpc3Nvbi1ibHUucGhwXCIsXG4gICAgXCJtYXJnZVwiOiAwLFxuICAgIFwiZXRvaWxlXCI6IDUsXG4gICAgXCJjYWxjdWxcIjogMCxcbiAgICBcImF1dG9fdm91Y2hlclwiOiAxLFxuICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgXCJwb3VyY2VudFwiOiAwLFxuICAgIFwiZW1haWxcIjogXCJuYWRhLmhhbW1hbWV0QHJhZGlzc29uYmx1LmNvbVwiLFxuICAgIFwiZmF4XCI6IFwiXCIsXG4gICAgXCJ0ZWxcIjogXCJcIixcbiAgICBcImxvZ2ljaWVsXCI6IFwiXCIsXG4gICAgXCJtYXBcIjogXCJcIixcbiAgICBcImFjdFwiOiAxLFxuICAgIFwic3RvcFwiOiAwLFxuICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogMCxcbiAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICBcImNob2l4X2VtYWlsXCI6IDAsXG4gICAgXCJjZWxlYmF0ZVwiOiAwLFxuICAgIFwidmlsbGVcIjoge1xuICAgICAgICBcInZpbGxlVGl0bGVcIjogXCJIYW1tYW1ldFwiLFxuICAgICAgICBcInZpbGxlSWRcIjogMVxuICAgIH0sXG4gICAgXCJpbWdQcm9maWxcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImhvdGVsSW1nSWRcIjogOCxcbiAgICAgICAgICAgIFwiaG90ZWxJbWdcIjogXCJyYWRpc3Nvbi1ibHUtcC5qcGdcIixcbiAgICAgICAgICAgIFwiaG90ZWxJZFwiOiAzLFxuICAgICAgICAgICAgXCJpbWdQcm9maWxcIjogMSxcbiAgICAgICAgICAgIFwiaW1nQ2hhbWJyZVwiOiAwLFxuICAgICAgICAgICAgXCJwbGFjZW1lbnRcIjogMCxcbiAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgICAgIH1cbiAgICBdXG59XG4gKlxuICogQGFwaVVzZSAgSG90ZWxOb3RGb3VuZEVycm9yXG4gXG4gXG4gKi9cblxuICAvKiogQGFwaSB7Z2V0fSAvaG90ZWxzLyAgR0VUIEFMTCBIb3RlbHNcbiAqIEBhcGlOYW1lIEdldEhvdGVsc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgSG90ZWxzXG4gKlxuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWR2aWxsZSB1bmlxdWUgSUQgdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAob2JsaWdhdG9pcmUpLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHZhIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFkcmVzc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaW5mbyBpbmZvcm1hdGlvbiBzdXBwbMOpbWVudGFpcmUuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsaWVuIHVybCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgaMO0dGVsIChvYmxpZ2F0b2lyZSkuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbDIgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGZheCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpY2llbCB1dGlsaXPDqWUgcGFyIGwnaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG1hcCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbWFwIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjaG9peF9lbWFpbCAgUmVzYS9HbWFpbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZfbWluICBhZ2UgZW5mYW50IG1pbiAwLzEyLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mX21heCAgYWdlIGVuZmFudCBtYXggMC8xNi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlICBtYXJnZSBwYXIgaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gIG9wZXJhdGlvbiBkZSBtYXJnZSAwLzEuQW1lbmFnZW1lbnRcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50ICBwb3VyY2VudCBkZSBtYXJnZSAwLzEuXG4gICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAgbWFyZ2UgYjJjIHBhciBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAgb3BlcmF0aW9uIGIyYyBkZSBtYXJnZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jICBwb3VyY2VudCBkZSBtYXJnZSBiMmMgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZXRvaWxlICBuYnJlIGQnw6l0b2lsZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBjYWxjdWwgIHR5cGUgZGUgY2FsY3VsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN0b3AgIHN0b3AgdmVudGUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2VsZWJhdGUgIGNlbGViYXRhaXJlIG91IG5vbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdXRvX3ZvdWNoZXIgIGVudm9pIGF1dG9tYXRpcXVlIGVtYWlsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHt2aWxsZX0gdmlsbGUgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdCAgYWN0aXZlIDAvMS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG57XG4gICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgXCJpZHZpbGxlXCI6IDEsXG4gICAgXCJsb2dpblwiOiBcInJhZGlzc29uXCIsXG4gICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgXCJ0dmFcIjogXCJcIixcbiAgICBcImVuZl9taW5cIjogMixcbiAgICBcImVuZl9tYXhcIjogMTIsXG4gICAgXCJhZHJlc3NlXCI6IFwiXCIsXG4gICAgXCJpbmZvXCI6IFwiXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgIFwibGllblwiOiBcImhhbW1hbWV0L2hvdGVsLXJhZGlzc29uLWJsdS5waHBcIixcbiAgICBcIm1hcmdlXCI6IDAsXG4gICAgXCJldG9pbGVcIjogNSxcbiAgICBcImNhbGN1bFwiOiAwLFxuICAgIFwiYXV0b192b3VjaGVyXCI6IDEsXG4gICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgXCJlbWFpbFwiOiBcIm5hZGEuaGFtbWFtZXRAcmFkaXNzb25ibHUuY29tXCIsXG4gICAgXCJmYXhcIjogXCJcIixcbiAgICBcInRlbFwiOiBcIlwiLFxuICAgIFwibG9naWNpZWxcIjogXCJcIixcbiAgICBcIm1hcFwiOiBcIlwiLFxuICAgIFwiYWN0XCI6IDEsXG4gICAgXCJzdG9wXCI6IDAsXG4gICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiAwLFxuICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwiY2hvaXhfZW1haWxcIjogMCxcbiAgICBcImNlbGViYXRlXCI6IDAsXG4gICAgXCJ2aWxsZVwiOiB7XG4gICAgICAgIFwidmlsbGVUaXRsZVwiOiBcIkhhbW1hbWV0XCIsXG4gICAgICAgIFwidmlsbGVJZFwiOiAxXG4gICAgfSxcbiAgICBcImltZ1Byb2ZpbFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaG90ZWxJbWdJZFwiOiA4LFxuICAgICAgICAgICAgXCJob3RlbEltZ1wiOiBcInJhZGlzc29uLWJsdS1wLmpwZ1wiLFxuICAgICAgICAgICAgXCJob3RlbElkXCI6IDMsXG4gICAgICAgICAgICBcImltZ1Byb2ZpbFwiOiAxLFxuICAgICAgICAgICAgXCJpbWdDaGFtYnJlXCI6IDAsXG4gICAgICAgICAgICBcInBsYWNlbWVudFwiOiAwLFxuICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICAgICAgfVxuICAgIF1cbn0sXG4gICAgXG4uLi5cbl1cbiAgKiBAYXBpVXNlICBIb3RlbE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2hvdGVsLyBQT1NUIGhvdGVsXG4gKiBAYXBpTmFtZSBQT1NUSG90ZWxcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgSG90ZWxzXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICAgICB7IFwiaWR2aWxsZVwiOiAyNixcbiAgICAgICAgXCJsb2dpblwiOiBcIlwiLFxuICAgICAgICBcIm5vbVwiOiBcInRlc3RyXCIsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwiZW5mX21pblwiOiAzLFxuICAgICAgICBcImVuZl9tYXhcIjogMTIsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcIjYwMDBcIixcbiAgICAgICAgXCJpbmZvXCI6IFwiT2ZmcmUgdmFsYWJsZSBqdXNxdSdhdSAzMS8wMy8yMDE2LjxiciAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdEFsbCBpbmNsdXNpdmUuXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJsaWVuXCI6IFwibW9uYXN0aXIvaG90ZWwtb25lLXJlc29ydC5waHBcIixcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcImV0b2lsZVwiOiA0LFxuICAgICAgICBcImNhbGN1bFwiOiAxLFxuICAgICAgICBcImF1dG9fdm91Y2hlclwiOiAxLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwiZW1haWxcIjogXCJyZXNhLm9uZWhvdGVsc2FuZHJlc29ydHNAcGxhbmV0LnRuXCIsXG4gICAgICAgIFwiZmF4XCI6IFwib25lLXJlc29ydC1tb25hc3Rpci10dW5pc2llLXRhc25pbWUtdm95YWdlc19wLmpwZ1wiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImxvZ2ljaWVsXCI6IFwiXCIsXG4gICAgICAgIFwibWFwXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTI5NTAuOTgyMzY3MjgwMDU0ITJkMTAuNzQ3OTE2ODQ4MTQwNjchM2QzNS43NTcwNTczNjA2NjcyITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgxMzAyMGNjM2EyOTIzNzdkJTNBMHhlODM2YzAzM2ZkMzY5ZWJlITJzT25lK1Jlc29ydCtNb25hc3RpciE1ZTAhM20yITFzZnIhMnMhNHYxNDU3OTM4OFwiLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcInN0b3BcIjogMCxcbiAgICAgICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiA3MyxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwiY2hvaXhfZW1haWxcIjogMSxcbiAgICAgICAgXCJjZWxlYmF0ZVwiOiAxfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiB7XG4gICAgXCJpZGhvdGVsXCI6IDMzMyxcbiAgICBcImlkdmlsbGVcIjogMjYsXG4gICAgXCJsb2dpblwiOiBcIlwiLFxuICAgIFwibm9tXCI6IFwidGVzdHJcIixcbiAgICBcInR2YVwiOiBcIlwiLFxuICAgIFwiZW5mX21pblwiOiAzLFxuICAgIFwiZW5mX21heFwiOiAxMixcbiAgICBcImFkcmVzc2VcIjogXCI2MDAwXCIsXG4gICAgXCJpbmZvXCI6IFwiT2ZmcmUgdmFsYWJsZSBqdXNxdSdhdSAzMS8wMy8yMDE2LjxiciAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdEFsbCBpbmNsdXNpdmUuXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgIFwibGllblwiOiBcIm1vbmFzdGlyL2hvdGVsLW9uZS1yZXNvcnQucGhwXCIsXG4gICAgXCJtYXJnZVwiOiAwLFxuICAgIFwiZXRvaWxlXCI6IDQsXG4gICAgXCJjYWxjdWxcIjogMSxcbiAgICBcImF1dG9fdm91Y2hlclwiOiAxLFxuICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgXCJwb3VyY2VudFwiOiAwLFxuICAgIFwiZW1haWxcIjogXCJyZXNhLm9uZWhvdGVsc2FuZHJlc29ydHNAcGxhbmV0LnRuXCIsXG4gICAgXCJmYXhcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLXR1bmlzaWUtdGFzbmltZS12b3lhZ2VzX3AuanBnXCIsXG4gICAgXCJ0ZWxcIjogXCJcIixcbiAgICBcImxvZ2ljaWVsXCI6IFwiXCIsXG4gICAgXCJtYXBcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMjk1MC45ODIzNjcyODAwNTQhMmQxMC43NDc5MTY4NDgxNDA2NyEzZDM1Ljc1NzA1NzM2MDY2NzIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDEzMDIwY2MzYTI5MjM3N2QlM0EweGU4MzZjMDMzZmQzNjllYmUhMnNPbmUrUmVzb3J0K01vbmFzdGlyITVlMCEzbTIhMXNmciEycyE0djE0NTc5Mzg4XCIsXG4gICAgXCJhY3RcIjogMSxcbiAgICBcInN0b3BcIjogMCxcbiAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IDczLFxuICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwiY2hvaXhfZW1haWxcIjogMSxcbiAgIH1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9ob3RlbC86aWRob3RlbCBQVVQgSG90ZWxcbiAqIEBhcGlOYW1lIFBVVEhvdGVsXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEhvdGVsc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZGhvdGVsICAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4ge1xuICAgIFwiaWRob3RlbFwiOiAzMzMsXG4gICAgXCJpZHZpbGxlXCI6IDI2LFxuICAgIFwibG9naW5cIjogXCJcIixcbiAgICBcIm5vbVwiOiBcInRlc3RyXCIsXG4gICAgXCJ0dmFcIjogXCJcIixcbiAgICBcImVuZl9taW5cIjogMyxcbiAgICBcImVuZl9tYXhcIjogMTIsXG4gICAgXCJhZHJlc3NlXCI6IFwiNjAwMFwiLFxuICAgIFwiaW5mb1wiOiBcIk9mZnJlIHZhbGFibGUganVzcXUnYXUgMzEvMDMvMjAxNi48YnIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRBbGwgaW5jbHVzaXZlLlwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICBcImxpZW5cIjogXCJtb25hc3Rpci9ob3RlbC1vbmUtcmVzb3J0LnBocFwiLFxuICAgIFwibWFyZ2VcIjogMCxcbiAgICBcImV0b2lsZVwiOiA0LFxuICAgIFwiY2FsY3VsXCI6IDEsXG4gICAgXCJhdXRvX3ZvdWNoZXJcIjogMSxcbiAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgIFwicG91cmNlbnRcIjogMCxcbiAgICBcImVtYWlsXCI6IFwicmVzYS5vbmVob3RlbHNhbmRyZXNvcnRzQHBsYW5ldC50blwiLFxuICAgIFwiZmF4XCI6IFwib25lLXJlc29ydC1tb25hc3Rpci10dW5pc2llLXRhc25pbWUtdm95YWdlc19wLmpwZ1wiLFxuICAgIFwidGVsXCI6IFwiXCIsXG4gICAgXCJsb2dpY2llbFwiOiBcIlwiLFxuICAgIFwibWFwXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTI5NTAuOTgyMzY3MjgwMDU0ITJkMTAuNzQ3OTE2ODQ4MTQwNjchM2QzNS43NTcwNTczNjA2NjcyITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgxMzAyMGNjM2EyOTIzNzdkJTNBMHhlODM2YzAzM2ZkMzY5ZWJlITJzT25lK1Jlc29ydCtNb25hc3RpciE1ZTAhM20yITFzZnIhMnMhNHYxNDU3OTM4OFwiLFxuICAgIFwiYWN0XCI6IDEsXG4gICAgXCJzdG9wXCI6IDAsXG4gICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiA3MyxcbiAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICBcImNob2l4X2VtYWlsXCI6IDEsXG4gICB9XG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuICAgICAgIHsgXCJpZHZpbGxlXCI6IDI2LFxuICAgICAgICBcImxvZ2luXCI6IFwiXCIsXG4gICAgICAgIFwibm9tXCI6IFwidGVzdHJcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJlbmZfbWluXCI6IDMsXG4gICAgICAgIFwiZW5mX21heFwiOiAxMixcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwiNjAwMFwiLFxuICAgICAgICBcImluZm9cIjogXCJPZmZyZSB2YWxhYmxlIGp1c3F1J2F1IDMxLzAzLzIwMTYuPGJyIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0QWxsIGluY2x1c2l2ZS5cIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcImxpZW5cIjogXCJtb25hc3Rpci9ob3RlbC1vbmUtcmVzb3J0LnBocFwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwiZXRvaWxlXCI6IDQsXG4gICAgICAgIFwiY2FsY3VsXCI6IDEsXG4gICAgICAgIFwiYXV0b192b3VjaGVyXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJlbWFpbFwiOiBcInJlc2Eub25laG90ZWxzYW5kcmVzb3J0c0BwbGFuZXQudG5cIixcbiAgICAgICAgXCJmYXhcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLXR1bmlzaWUtdGFzbmltZS12b3lhZ2VzX3AuanBnXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwibG9naWNpZWxcIjogXCJcIixcbiAgICAgICAgXCJtYXBcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMjk1MC45ODIzNjcyODAwNTQhMmQxMC43NDc5MTY4NDgxNDA2NyEzZDM1Ljc1NzA1NzM2MDY2NzIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDEzMDIwY2MzYTI5MjM3N2QlM0EweGU4MzZjMDMzZmQzNjllYmUhMnNPbmUrUmVzb3J0K01vbmFzdGlyITVlMCEzbTIhMXNmciEycyE0djE0NTc5Mzg4XCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwic3RvcFwiOiAwLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IDczLFxuICAgICAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJjaG9peF9lbWFpbFwiOiAxLFxuICAgICAgICBcImNlbGViYXRlXCI6IDF9XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvaG90ZWxwd2QvOmlkaG90ZWwgUFVUIE1vdCBkZSBwYXNzZSBIb3RlbCBcbiAqIEBhcGlOYW1lIFBVVEhvdGVsUFdEXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEhvdGVsc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZGhvdGVsICAgICAgICAgdW5pcXVlIElELlxuICogQGFwaVBhcmFtIHtTdHJpbmd9IHAgICAgICAgICBtb3QgZGUgcGFzc2UgY3J5cHTDqSBzaGE1MTIuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbntcblwicFwiOlwiMTIxMzAyODcwZjQ4MTliZTAzMjEwYjQwOGYxOGRmYjcxZjE5MWI1MjQ4MDk3NjMzOGJmN2IxMjBiZGIyYmJhYTQ2ZDA5NmI1MjllYzBjYjFkZGQ0NWU3YjA5ZjZmYzBlZDAzZmFiZWNkMDg5Y2VlOTRjMDkxYWNjMmVmN2YyYmNcIlxufVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgXCJzdWNjZXNzXCI6IHRydWVcbn1cbiAqL1xuXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9ob3RlbC86aWRob3RlbCBEZWxldGUgaG90ZWxcbiAgICogQGFwaUdyb3VwIEhvdGVsc1xuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWRob3RlbCBpZCBob3RlbFxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9hbWVuYWdlbWVudHNcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgQW1lbmFnZW1lbnROb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgQW1lbmFnZW1lbnROb3RGb3VuZCAgPGNvZGU+QW1lbmFnZW1lbnQ8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiQW1lbmFnZW1lbnQgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYW1lbmFnZW1lbnRzLzpob3RlbElkICBBTEwgQW1lbmFnZW1lbnRzIHBhciBow7R0ZWxcbiAqIEBhcGlOYW1lIEdldEFtZW5hZ2VtZW50c1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQW1lbmFnZW1lbnRzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGhvdGVsSWQgaG90ZWwgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFtSWQgdW5pcXVlIElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGhvdGVsSWQgdW5pcXVlIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFtZW5hZ2VtZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdCAgYWN0aXZlIDAvMS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG4gICAge1xuICAgIFwiYW1JZFwiOiAxLFxuICAgIFwiaG90ZWxJZFwiOiAxLFxuICAgIFwiYWN0XCI6IDAsXG4gICAgXCJhbWVuYWdlbWVudFwiOiBcIlPDqGNoZS1jaGV2ZXV4XCIsXG4gICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG59LFxuICAgIFxuLi4uXG5dXG4gICogQGFwaVVzZSAgQW1lbmFnZW1lbnROb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2FtZW5hZ2VtZW50LzphbUlkIEdFVCBBbWVuYWdlbWVudFxuICogQGFwaU5hbWUgR2V0QW1lbmFnZW1lbnRcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIEFtZW5hZ2VtZW50c1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhbUlkIGhvdGVsSWQgaG90ZWwgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFtSWQgdW5pcXVlIElELlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCB1bmlxdWUgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYW1lbmFnZW1lbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0ICBhY3RpdmUgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuICB7XG4gICAgXCJhbUlkXCI6IDEsXG4gICAgXCJob3RlbElkXCI6IDEsXG4gICAgXCJhY3RcIjogMCxcbiAgICBcImFtZW5hZ2VtZW50XCI6IFwiU8OoY2hlLWNoZXZldXhcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbn1cbiAqXG4gKiBAYXBpVXNlICBBbWVuYWdlbWVudE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2FtZW5hZ2VtZW50LyBQT1NUIEFtZW5hZ2VtZW50XG4gKiBAYXBpTmFtZSBQT1NUQW1lbmFnZW1lbnRcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgQW1lbmFnZW1lbnRzXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAqICAgIHtcbiAqICAgXCJob3RlbElkXCI6MiwgYXV0aG9yaXplKCksXG4gKiAgIFwiYWN0XCI6IDIsXG4gKiAgIFwiYW1lbmFnZW1lbnQgYXV0aG9yaXplKCksZXZldXhcIlxufVxuXG4gKiBAYXBpU3VjY2Vzc0V4YSBhdXRob3JpemUoKSwtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMiBhdXRob3JpemUoKSxcbntcbiAgICBcImFtSWRcIjogODMsXG4gICAgXCJob3RlbElkXCI6IDIsIGF1dGhvcml6ZSgpLFxuICAgIFwiYWN0XCI6IDIsXG4gICAgXCJhbWVuYWdlbWVudFwiOiBcIlPDqGNoZS1jaGV2ZXV4XCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA5LTE3VDA2OjI1OjEzLjA1N1pcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMDktMTdUMDY6MjU6MTMuMDU3WlwiXG59XG4qL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvYW1lbmFnZW1lbnQvOmFtSWQgUFVUIEFtZW5hZ2VtZW50XG4gKiBAYXBpTmFtZSBQVVRBbWVuYWdlbWVudFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBBbWVuYWdlbWVudHNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gYW1JZCAgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxue1xuXG4gICAgXCJob3RlbElkXCI6IDIsXG4gICAgXCJhY3RcIjogMixcbiAgICBcImFtZW5hZ2VtZW50XCI6IFwiU8OoY2hlLWNoZXZldXhcIlxuXG59XG5cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2FtZW5hZ2VtZW50LzphbUlkIERlbGV0ZSBBbWVuYWdlbWVudFxuICAgKiBAYXBpR3JvdXAgIEFtZW5hZ2VtZW50c1xuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gYW1JZCBpZCBhbWVuYWdlbWVudFxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgUm9vbWltZ05vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBSb29taW1nTm90Rm91bmQgIDxjb2RlPnJvb21pbWc8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwicm9vbWltZyBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9yb29taW1ncy86aG90ZWxJZCAgQUxMIEltYWdlcyBjaGFtYnJlcyBwYXIgaMO0dGVsXG4gKiBAYXBpTmFtZSBHZXRSb29tSW1hZ2VzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBJbWFnZXMgY2hhbWJyZVxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBob3RlbElkIGhvdGVsIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHJvb21pbWcgdW5pcXVlIElEIGltYWdlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCB1bmlxdWUgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRyb29tIHVuaXF1ZSBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGltZyBpbWFnZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdGl2ZSAgYWN0aXZlIDAvMS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG4gICAge1xuICAgICAgICBcImlkcm9vbWltZ1wiOiAzLFxuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJpZHJvb21cIjogMixcbiAgICAgICAgXCJpbWdcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLWRvdWJsZS5qcGdcIixcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkcm9vbWltZ1wiOiA0LFxuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJpZHJvb21cIjogMyxcbiAgICAgICAgXCJpbWdcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLXRyaXBsZS5qcGdcIixcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4uLi5cbl1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9yb29taW1nLzppZHJvb21pbWcgR0VUIEltYWdlIGNoYW1icmVcbiAqIEBhcGlOYW1lIEdldFJvb21JbWFnZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgSW1hZ2VzIGNoYW1icmVcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRyb29taW1nIHJvb20gdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcm9vbWltZyB1bmlxdWUgSUQgaW1hZ2UuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIHVuaXF1ZSBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHJvb20gdW5pcXVlIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaW1nIGltYWdlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0aXZlICBhY3RpdmUgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuICAgIHtcbiAgICAgICAgXCJpZHJvb21pbWdcIjogMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwiaWRyb29tXCI6IDIsXG4gICAgICAgIFwiaW1nXCI6IFwib25lLXJlc29ydC1tb25hc3Rpci1kb3VibGUuanBnXCIsXG4gICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3Jvb21pbWcvIFBPU1QgSW1hZ2UgY2hhbWJyZVxuICogQGFwaU5hbWUgUE9TVFRSb29tSW1hZ2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgSW1hZ2VzIGNoYW1icmVcbiAqXG5cbiBAYXBpcGFyYW0ge0ZpbGV9IEZpbGVJbWcgaW1hZ2UuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gKiAgICAge1xuICogICAgICAgXCJpbWdcIjogXCJ0ZXN0LmpwZ1wiLFxuICogICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gKiAgICAgICBcImlkcm9vbVwiOiAyLFxuICogICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgIFxuICogICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgICAgIFwiaWRyb29taW1nXCI6IDMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcImlkcm9vbVwiOiAyLFxuICAgICAgICBcImltZ1wiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItZG91YmxlLmpwZ1wiLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3Jvb21pbWcvOmlkcm9vbWltZyBQVVQgSW1hZ2UgY2hhbWJyZVxuICogQGFwaU5hbWUgUFVUUm9vbUltYWdlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEltYWdlcyBjaGFtYnJlXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcm9vbWltZyAgICAgICAgICBob3RlbCB1bmlxdWUgSUQuXG4gQGFwaXBhcmFtIHtGaWxlfSBGaWxlSW1nIGltYWdlLlxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICogICAgIHtcbiAqICAgICAgIFwiaW1nXCI6IFwidGVzdC5qcGdcIixcbiAqICAgICAgIFwiaWRob3RlbFwiOiAyMSxcbiAqICAgICAgIFwiaWRyb29tXCI6IDIsXG4gKiAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgXG4gKiAgICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuKiB7XG4gICAgICAgIFwiaWRyb29taW1nXCI6IDMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcImlkcm9vbVwiOiAyLFxuICAgICAgICBcImltZ1wiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItZG91YmxlLmpwZ1wiLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKi9cblxuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvcm9vbWltZy86aWRyb29taW1nIERlbGV0ZSByb29taW1nXG4gICAqIEBhcGlHcm91cCBJbWFnZXMgY2hhbWJyZVxuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWRyb29taW1nIGlkIGlkcm9vbWltZ1xuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLyoqXG5cbiAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2hvdGVsaW1ncy86aG90ZWxJZCAgQUxMIEltYWdlcyBob3RlbHMgcGFyIGjDtHRlbFxuICogQGFwaU5hbWUgR2V0SG90ZWxJbWFnZXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIEltYWdlcyBob3RlbFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBob3RlbElkIGhvdGVsIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbEltZ0lkIHVuaXF1ZSBJRCBpbWFnZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGhvdGVsSWQgdW5pcXVlIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGltZ1Byb2ZpbCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1nQ2hhbWJyZSAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcGxhY2VtZW50ICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGhvdGVsSW1nIGltYWdlLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcImhvdGVsSW1nSWRcIjogMixcbiAgICAgICAgXCJob3RlbEltZ1wiOiBcImxhaWNvX2hhbW1hbWV0LmpwZ1wiLFxuICAgICAgICBcImhvdGVsSWRcIjogMixcbiAgICAgICAgXCJpbWdQcm9maWxcIjogMCxcbiAgICAgICAgXCJpbWdDaGFtYnJlXCI6IDEsXG4gICAgICAgIFwicGxhY2VtZW50XCI6IDAsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJob3RlbEltZ0lkXCI6IDUsXG4gICAgICAgIFwiaG90ZWxJbWdcIjogXCJsYWljby1oYW1tYW1ldC1ob3RlbC5qcGdcIixcbiAgICAgICAgXCJob3RlbElkXCI6IDIsXG4gICAgICAgIFwiaW1nUHJvZmlsXCI6IDAsXG4gICAgICAgIFwiaW1nQ2hhbWJyZVwiOiAxLFxuICAgICAgICBcInBsYWNlbWVudFwiOiAwLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgLi4uXG5dXG5cbiAqL1xuICAvKiogXG5cbiogQGFwaSB7Z2V0fSAvaG90ZWxpbWdzL3Byb2ZpbC86aG90ZWxJZCAgaW1nUHJvZmlsIGhvdGVscyBwYXIgaMO0dGVsXG4qIEBhcGlOYW1lIEdldEhvdGVsSW1hZ2VzUHJvZmlsXG4qIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4qIEBhcGlHcm91cCAgSW1hZ2VzIGhvdGVsXG4qXG4qIEBhcGlQYXJhbSB7TnVtYmVyfSBob3RlbElkIGhvdGVsIHVuaXF1ZSBJRC5cbipcbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJbWdJZCB1bmlxdWUgSUQgaW1hZ2UuXG4qIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGhvdGVsSWQgdW5pcXVlIElEIGhvdGVsIC5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1nUHJvZmlsIDAvMSAuXG4qIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGltZ0NoYW1icmUgMC8xIC5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcGxhY2VtZW50ICAuXG5cbiogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaG90ZWxJbWcgaW1hZ2UuXG5cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4qICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgIHtcbiAgICAgICBcImhvdGVsSW1nSWRcIjogMixcbiAgICAgICBcImhvdGVsSW1nXCI6IFwibGFpY29faGFtbWFtZXQuanBnXCIsXG4gICAgICAgXCJob3RlbElkXCI6IDIsXG4gICAgICAgXCJpbWdQcm9maWxcIjogMCxcbiAgICAgICBcImltZ0NoYW1icmVcIjogMSxcbiAgICAgICBcInBsYWNlbWVudFwiOiAwLFxuICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgfVxuXVxuXG4qL1xuICAvKiogXG4gKiBAYXBpIHtnZXR9IC9ob3RlbGltZy86aG90ZWxJbWdJZCBHRVQgSW1hZ2UgaG90ZWxcbiAqIEBhcGlOYW1lIEdldEhvdGVsSW1hZ2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIEltYWdlcyBob3RlbFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZGhvdGVsaW1nIHJvb20gdW5pcXVlIElELlxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCB1bmlxdWUgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1nUHJvZmlsIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbWdDaGFtYnJlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwbGFjZW1lbnQgIC5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaG90ZWxJbWcgaW1hZ2UuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gICAge1xuICAgICAgICBcImhvdGVsSW1nSWRcIjogMyxcbiAgICAgICAgXCJob3RlbEltZ1wiOiBcImxhaWNvX2hhbW1hbWV0LmpwZ1wiLFxuICAgICAgICBcImhvdGVsSWRcIjogMixcbiAgICAgICAgXCJpbWdQcm9maWxcIjogMCxcbiAgICAgICAgXCJpbWdDaGFtYnJlXCI6IDEsXG4gICAgICAgIFwicGxhY2VtZW50XCI6IDAsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG4gKlxuPVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvaG90ZWxpbWcvIFBPU1QgSW1hZ2UgaG90ZWxcbiAqIEBhcGlOYW1lIFBPU1RUSG90ZWxJbWFnZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBJbWFnZXMgaG90ZWxcbiAqXG5cbiBAYXBpcGFyYW0ge0ZpbGV9IGZpbGVJbWcgaW1hZ2UuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gKiAgICAge1xuICAgICAgICBcImhvdGVsSW1nXCI6IFwibGFpY29faGFtbWFtZXQuanBnXCIsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyLFxuICAgICAgICBcImltZ1Byb2ZpbFwiOiAwLFxuICAgICAgICBcImltZ0NoYW1icmVcIjogMSxcbiAgICAgICAgXCJwbGFjZW1lbnRcIjogMCxcbiAgICAgIFxuICogICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgICAgIFwiaG90ZWxJbWdJZFwiOiAzLFxuICAgICAgICBcImhvdGVsSW1nXCI6IFwibGFpY29faGFtbWFtZXQuanBnXCIsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyLFxuICAgICAgICBcImltZ1Byb2ZpbFwiOiAwLFxuICAgICAgICBcImltZ0NoYW1icmVcIjogMSxcbiAgICAgICAgXCJwbGFjZW1lbnRcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9ob3RlbGltZy86aG90ZWxJbWdJZCBQVVQgSW1hZ2UgaG90ZWxcbiAqIEBhcGlOYW1lIFBVVEhvdGVsSW1hZ2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgSW1hZ2VzIGhvdGVsXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGhvdGVsSW1nSWQgICAgICAgICAgaG90ZWwgdW5pcXVlIElELlxuIEBhcGlwYXJhbSB7RmlsZX0gZmlsZUltZyBpbWFnZS5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAqICAgICB7XG4gICogICAgICAgIFwiaG90ZWxJbWdcIjogXCJsYWljb19oYW1tYW1ldC5qcGdcIixcbiAgKiAgICAgICAgXCJob3RlbElkXCI6IDIsXG4gKiAgICAgICAgIFwiaW1nUHJvZmlsXCI6IDAsXG4gICogICAgICAgIFwiaW1nQ2hhbWJyZVwiOiAxLFxuICogICAgICAgICBcInBsYWNlbWVudFwiOiAwLFxuICAgICAgXG4gKiAgICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuKiB7XG4gICAgICAgIFwiaG90ZWxJbWdJZFwiOiAzLFxuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJpZHJvb21cIjogMixcbiAgICAgICAgXCJpbWdcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLWRvdWJsZS5qcGdcIixcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9ob3RlbGltZy86aG90ZWxJbWdJZCBEZWxldGUgaG90ZWxpbWdcbiAgICogQGFwaUdyb3VwIEltYWdlcyBob3RlbFxuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaG90ZWxJbWdJZCBpZCBob3RlbGltZ1xuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9tZW1icmVzXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIE1lbWJyZU5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBNZW1icmVOb3RGb3VuZCAgPGNvZGU+QW1lbmFnYW1lbnQ8L2NvZGU+IHBhcyB0cm91dsOpLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJhZ2VuY2UgcGFzIHRyb3V2w6lcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9tZW1icmVzLzppZGFnZW5jZSAgQUxMIG1lbWJyZXMgcGFyIGFnZW5jZVxuICogQGFwaU5hbWUgR2V0TWVtYnJlc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBNZW1icmVzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkYWdlbmNlIGFnZW5jZSB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIHVuaXF1ZSBJRCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdXNlcm5hbWUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkbWluICBhZG1pbiAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDEsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImFkbWluXCI6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOiA4LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDEsXG4gICAgICAgIFwibG9naW5cIjogXCJ3YWxpZFwiLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwid2FsaWRcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcImRpcmVjdGlvbkB0YXNuaW1ldm95YWdlcy5jb21cIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJhZG1pblwiOiAxXG4gICAgfSwgXG4uLi5cbl1cbiAgKiBAYXBpVXNlICBNZW1icmVOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL21lbWJyZXMvOmlkYWdlbmNlICBBTEwgbWVtYnJlcyBwYXIgYWdlbmNlXG4gKiBAYXBpTmFtZSBHZXRNZW1icmVzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIE1lbWJyZXNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRhZ2VuY2UgYWdlbmNlIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRhZ2VuY2UgdW5pcXVlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpbiAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB1c2VybmFtZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWRtaW4gIGFkbWluIDAvMS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG4gICAge1xuICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiYWRtaW5cIjogMVxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6IDgsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJsb2dpblwiOiBcIndhbGlkXCIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJ3YWxpZFwiLFxuICAgICAgICBcImVtYWlsXCI6IFwiZGlyZWN0aW9uQHRhc25pbWV2b3lhZ2VzLmNvbVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImFkbWluXCI6IDFcbiAgICB9LCBcbi4uLlxuXVxuICAqIEBhcGlVc2UgIE1lbWJyZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvbWVtYnJlLzppZCBHRVQgTWVtYnJlXG4gKiBAYXBpTmFtZSBHZXRNZW1icmVcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgTWVtYnJlc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZGFnZW5jZSBhZ2VuY2UgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSB1bmlxdWUgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxvZ2luIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHVzZXJuYW1lIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZG1pbiAgYWRtaW4gMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuICB7XG4gICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAxLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJhZG1pblwiOiAxXG4gICAgfVxuICpcbiAqIEBhcGlVc2UgIE1lbWJyZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL21lbWJyZS8gUE9TVCBNZW1icmVcbiAqIEBhcGlOYW1lIFBPU1RNZW1icmVcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgTWVtYnJlc1xuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gIHtcblxuICAgICAgICBcImlkYWdlbmNlXCI6IDEsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImFkbWluXCI6IDFcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgIFwiaWRcIjogODMsXG4gICAgXCJpZGFnZW5jZVwiOiAyLFxuICAgIFwiYWN0XCI6IDIsXG4gICAgXCJhZ2VuY2VcIjogXCJTw6hjaGUtY2hldmV1eFwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0xN1QwNjoyNToxMy4wNTdaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTA5LTE3VDA2OjI1OjEzLjA1N1pcIlxufVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9tZW1icmUvOmlkIFBVVCBNZW1icmVcbiAqIEBhcGlOYW1lIFBVVE1lbWJyZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBNZW1icmVzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4ge1xuXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiYWRtaW5cIjogMVxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiB7XG4gICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAxLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJhZG1pblwiOiAxXG4gICAgfVxuXG5cbiovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9tZW1icmVwd2QvOmlkIFBVVCBNb3QgZGUgcGFzc2UgTWVtYnJlIFxuICogQGFwaU5hbWUgUFVUTWVtYnJlUFdEXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIE1lbWJyZXNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpQm9keSB7U3RyaW5nfSBwICAgICAgICAgbW90IGRlIHBhc3NlIGNyeXB0w6kgc2hhNTEyLlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG57XG5cInBcIjpcIjEyMTMwMjg3MGY0ODE5YmUwMzIxMGI0MDhmMThkZmI3MWYxOTFiNTI0ODA5NzYzMzhiZjdiMTIwYmRiMmJiYWE0NmQwOTZiNTI5ZWMwY2IxZGRkNDVlN2IwOWY2ZmMwZWQwM2ZhYmVjZDA4OWNlZTk0YzA5MWFjYzJlZjdmMmJjXCJcbn1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgIFwic3VjY2Vzc1wiOiB0cnVlXG59XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3Byb2ZpbHB3ZC86aWQgUFVUIE1vdCBkZSBwYXNzZSBQcm9maWwgXG4gKiBAYXBpTmFtZSBQVVRQcm9maWxQV0RcbiAqIEBhcGlQZXJtaXNzaW9uIFVzZXJcbiAqIEBhcGlHcm91cCBNZW1icmVzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICAgdW5pcXVlIElELlxuICogQGFwaUJvZHkge1N0cmluZ30gcCAgICAgICAgIG1vdCBkZSBwYXNzZSBjcnlwdMOpIHNoYTUxMi5cbiAqIEBhcGlCb2R5IHtTdHJpbmd9IHBfb2xkICAgICAgICAgbW90IGRlIHBhc3NlIGFuY2llbiBjcnlwdMOpIHNoYTUxMi5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxue1xuXCJwXCI6XCIxMjEzMDI4NzBmNDgxOWJlMDMyMTBiNDA4ZjE4ZGZiNzFmMTkxYjUyNDgwOTc2MzM4YmY3YjEyMGJkYjJiYmFhNDZkMDk2YjUyOWVjMGNiMWRkZDQ1ZTdiMDlmNmZjMGVkMDNmYWJlY2QwODljZWU5NGMwOTFhY2MyZWY3ZjJiY1wiXG5cInBfb2xkXCI6XCI3NDU1NTU1ODE5YmUwMzIxMGI0MDhmMThkZmI3MWYxOTFiNTI0ODA5NzYzMzhiZjdiMTIwYmRiMmJiYWE0NmQwOTZiNTI5ZWMwY2IxZGRkNDVlN2IwOWY2ZmMwZWQwM2ZhYmVjZDA4OWNlZTk0YzA5MWFjYzJlZjdmMmJjXCJcbn1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgIFwic3VjY2Vzc1wiOiB0cnVlXG59XG4gKi9cblxuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvbWVtYnJlLzppZCBEZWxldGUgbWVtYnJlXG4gICAqIEBhcGlHcm91cCBNZW1icmVzXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBtZW1icmVzXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL01hcmdlIEhvdGVsXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIG1hcmdlX2hvdGVsTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIG1hcmdlX2hvdGVsTm90Rm91bmQgIDxjb2RlPm1hcmdlPC9jb2RlPiBwYXMgdHJvdXbDqS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiYWdlbmNlIHBhcyB0cm91dsOpXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvbWFyZ2VfaG90ZWxzLzppZGFnZW5jZSAgQUxMIE1hcmdlIEhvdGVsIHBhciBhZ2VuY2VcbiAqIEBhcGlOYW1lIEdldE1hcmdlcyBIb3RlbFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBNYXJnZSBIb3RlbFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZGFnZW5jZSBhZ2VuY2UgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSB1bmlxdWUgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgdW5pcXVlIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cblxuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFtcbiAgIFxuICAgIHtcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcImlkaG90ZWxcIjogMzYsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMjAwLFxuICAgICAgICBcIm1hcmdlXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cbi4uLlxuXVxuICAqIEBhcGlVc2UgIG1hcmdlX2hvdGVsTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9tYXJnZV9ob3RlbC86aWQgR0VUIG1hcmdlX2hvdGVsXG4gKiBAYXBpTmFtZSBHZXRtYXJnZV9ob3RlbFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBNYXJnZSBIb3RlbFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZG1hcmdlIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRhZ2VuY2UgdW5pcXVlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIHVuaXF1ZSBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZSBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gIHtcbiAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDEsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImFkbWluXCI6IDFcbiAgICB9XG4gKlxuICogQGFwaVVzZSAgbWFyZ2VfaG90ZWxOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9tYXJnZV9ob3RlbC8gUE9TVCBtYXJnZV9ob3RlbFxuICogQGFwaU5hbWUgUE9TVG1hcmdlX2hvdGVsXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIE1hcmdlIEhvdGVsXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiB7XG4gICAgICAgXG4gICAgICAgIFwiaWRob3RlbFwiOiAzNixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAxLFxuICAgICAgICBcIm1hcmdlXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMFxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiAgICB7XG4gICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDM2LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDIwMCxcbiAgICAgICAgXCJtYXJnZVwiOiA1LFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL21hcmdlX2hvdGVsLzppZCBQVVQgbWFyZ2VfaG90ZWxcbiAqIEBhcGlOYW1lIFBVVG1hcmdlX2hvdGVsXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIE1hcmdlIEhvdGVsXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4ge1xuICAgICAgIFxuICAgICAgICBcImlkaG90ZWxcIjogMzYsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJtYXJnZVwiOiA1LFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDBcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5cbiAgICB7XG4gICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDM2LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDIwMCxcbiAgICAgICAgXCJtYXJnZVwiOiA1LFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG5cbiovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9tYXJnZV9ob3RlbC86aWQgRGVsZXRlIG1hcmdlX2hvdGVsXG4gICAqIEBhcGlHcm91cCBNYXJnZSBIb3RlbFxuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgIGlkIG1hcmdlX2hvdGVsXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL3Jvb21cbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgcm9vbU5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICByb29tTm90Rm91bmQgIDxjb2RlPkNoYW1icmU8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiQ2hhbWJyZSBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9yb29tLyAgQUxMIENoYW1icmVcbiAqIEBhcGlOYW1lIEdldHJvb21zXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBDaGFtYnJlXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgdW5pcXVlIElEIENoYW1icmUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcm9vbW5hbWUgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFiciAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9wZXJzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9wZXJzIC5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcInJvb21pZFwiOiAxLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcInJvb21uYW1lXCI6IFwiQ2hhbWJyZSBTaW5nbGVcIixcbiAgICAgICAgXCJtaW5fcGVyc1wiOiAxLFxuICAgICAgICBcIm1heF9wZXJzXCI6IDEsXG4gICAgICAgIFwiYWJyXCI6IFwiU0lOR0xFXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJyb29tbmFtZVwiOiBcIkNoYW1icmUgRG91YmxlXCIsXG4gICAgICAgIFwibWluX3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfcGVyc1wiOiAyLFxuICAgICAgICBcImFiclwiOiBcIkRPVUJMRVwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicm9vbWlkXCI6IDMsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwicm9vbW5hbWVcIjogXCJDaGFtYnJlIFRyaXBsZVwiLFxuICAgICAgICBcIm1pbl9wZXJzXCI6IDMsXG4gICAgICAgIFwibWF4X3BlcnNcIjogMyxcbiAgICAgICAgXCJhYnJcIjogXCJUUklQTEVcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblx0XVxuICAqIEBhcGlVc2UgIHJvb21Ob3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL3Jvb20vOmlkIEdFVCBDaGFtYnJlXG4gKiBAYXBpTmFtZSBHZXRyb29tXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBDaGFtYnJlXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIHVuaXF1ZSBJRCBDaGFtYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJvb21uYW1lICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhYnIgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fcGVycyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfcGVycyAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4ge1xuICAgIFwicm9vbWlkXCI6IDU4LFxuICAgIFwiYWN0XCI6IFwiMVwiLFxuICAgIFwicm9vbW5hbWVcIjogXCJ0ZXN0XCIsXG4gICAgXCJtaW5fcGVyc1wiOiBcIjFcIixcbiAgICBcIm1heF9wZXJzXCI6IFwiNFwiLFxuICAgIFwiYWJyXCI6IFwicnJ4d1wiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0wMVQxMjo0MzozNi4wMDBaXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTAxVDEyOjQ1OjMxLjQ2N1pcIlxufVxuICpcbiAqIEBhcGlVc2UgIHJvb21Ob3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9yb29tLyBQT1NUIENoYW1icmVcbiAqIEBhcGlOYW1lIFBPU1Ryb29tXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBDaGFtYnJlXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICB7XG5cbiAgICBcImFjdFwiOiBcIjFcIixcbiAgICBcInJvb21uYW1lXCI6IFwidGVzdFwiLFxuICAgIFwibWluX3BlcnNcIjogXCIxXCIsXG4gICAgXCJtYXhfcGVyc1wiOiBcIjRcIixcbiAgICBcImFiclwiOiBcInJyeHdcIlxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgXCJyb29taWRcIjogNTgsXG4gICAgXCJhY3RcIjogXCIxXCIsXG4gICAgXCJyb29tbmFtZVwiOiBcInRlc3RcIixcbiAgICBcIm1pbl9wZXJzXCI6IFwiMVwiLFxuICAgIFwibWF4X3BlcnNcIjogXCI0XCIsXG4gICAgXCJhYnJcIjogXCJycnh3XCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTAxVDEyOjQzOjM2LjAwMFpcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMDFUMTI6NDU6MzEuNDY3WlwiXG59XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3Jvb20vOmlkIFBVVCBDaGFtYnJlXG4gKiBAYXBpTmFtZSBQVVRyb29tXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBDaGFtYnJlXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHJvb21pZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gIHtcbiAgXCJhY3RcIjogXCIxXCIsXG4gICAgXCJyb29tbmFtZVwiOiBcInRlc3RcIixcbiAgICBcIm1pbl9wZXJzXCI6IFwiMVwiLFxuICAgIFwibWF4X3BlcnNcIjogXCI0XCIsXG4gICAgXCJhYnJcIjogXCJycnh3XCJcbiAgICB9XG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxue1xuICAgIFwicm9vbWlkXCI6IDU4LFxuICAgIFwiYWN0XCI6IFwiMVwiLFxuICAgIFwicm9vbW5hbWVcIjogXCJ0ZXN0XCIsXG4gICAgXCJtaW5fcGVyc1wiOiBcIjFcIixcbiAgICBcIm1heF9wZXJzXCI6IFwiNFwiLFxuICAgIFwiYWJyXCI6IFwicnJ4d1wiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0wMVQxMjo0MzozNi4wMDBaXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTAxVDEyOjQ1OjMxLjQ2N1pcIlxufVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvcm9vbS86cm9vbWlkIERlbGV0ZSBDaGFtYnJlXG4gICAqIEBhcGlOYW1lIERFTEVURXJvb21cbiAgICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAgICogQGFwaUdyb3VwICBDaGFtYnJlXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSByb29taWQgaWQgQ2hhbWJyZVxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9FbmNhaXNzZW1lbnRcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgZW5jYWlzc2VtZW50Tm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIGVuY2Fpc3NlbWVudE5vdEZvdW5kICA8Y29kZT5tYXJnZTwvY29kZT4gcGFzIHRyb3V2w6kuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcImFnZW5jZSBwYXMgdHJvdXbDqVwiXG4gICAqICAgICB9XG4gICAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvZW5jYWlzc2VtZW50cy86YWdlbmNlICBBTEwgRW5jYWlzc2VtZW50cyBwYXIgYWdlbmNlXG4gKiBAYXBpTmFtZSBHZXRFbmNhaXNzZW1lbnRzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEVuY2Fpc3NlbWVudHNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gYWdlbmNlIGFnZW5jZSB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFnZW5jZSB1bmlxdWUgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgdW5pcXVlIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gW1xuICAgIFxuICAge1xuICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgIFwiYWdlbmNlXCI6IDEsXG4gICAgICAgIFwidmFsZXVyXCI6IDMwMDAwLFxuICAgICAgICBcImRhdGVcIjogXCIyMDE2LTA3LTEyVDEwOjI1OjA2LjAwMFpcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cbi4uLlxuXVxuICAqIEBhcGlVc2UgIGVuY2Fpc3NlbWVudE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvZW5jYWlzc2VtZW50LzppZCBHRVQgZW5jYWlzc2VtZW50XG4gKiBAYXBpTmFtZSBHZXRlbmNhaXNzZW1lbnRcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgRW5jYWlzc2VtZW50c1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBhZ2VuY2UgYWdlbmNlIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWdlbmNlIHVuaXF1ZSBJRCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCB1bmlxdWUgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiB7XG4gICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgXCJhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJ2YWxldXJcIjogMzAwMDAsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMDctMTJUMTA6MjU6MDYuMDAwWlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuICpcbiAqIEBhcGlVc2UgIGVuY2Fpc3NlbWVudE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2VuY2Fpc3NlbWVudC8gUE9TVCBlbmNhaXNzZW1lbnRcbiAqIEBhcGlOYW1lIFBPU1RlbmNhaXNzZW1lbnRcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgRW5jYWlzc2VtZW50c1xuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4ge1xuICAgICAgXG4gICAgICAgIFwiYWdlbmNlXCI6IDEsXG4gICAgICAgIFwidmFsZXVyXCI6IDMwMDAwLFxuICAgICAgICBcImRhdGVcIjogXCIyMDE2LTA3LTEyVDEwOjI1OjA2LjAwMFpcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiB7XG4gICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgXCJhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJ2YWxldXJcIjogMzAwMDAsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMDctMTJUMTA6MjU6MDYuMDAwWlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9lbmNhaXNzZW1lbnQvOmlkIFBVVCBlbmNhaXNzZW1lbnRcbiAqIEBhcGlOYW1lIFBVVGVuY2Fpc3NlbWVudFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBFbmNhaXNzZW1lbnRzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4ge1xuICBcbiAgICAgICAgXCJhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJ2YWxldXJcIjogMzAwMDAsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMDctMTJUMTA6MjU6MDYuMDAwWlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuXG4ge1xuICAgICAgICBcImlkXCI6IDIsXG4gICAgICAgIFwiYWdlbmNlXCI6IDEsXG4gICAgICAgIFwidmFsZXVyXCI6IDMwMDAwLFxuICAgICAgICBcImRhdGVcIjogXCIyMDE2LTA3LTEyVDEwOjI1OjA2LjAwMFpcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2VuY2Fpc3NlbWVudC86aWQgRGVsZXRlIGVuY2Fpc3NlbWVudFxuICAgKiBAYXBpR3JvdXAgRW5jYWlzc2VtZW50c1xuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgaWQgZW5jYWlzc2VtZW50XG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cbiAgLy9uZXcgcmVzZXJ2YXRpb25zXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9uZXdfcmVzZXJ2YXRpb25zLyBHZXQgQUxMIE5vdXZlYXV4IFJlc2VydmF0aW9uc1xuICogQGFwaU5hbWUgR2V0Tm91dmVhdXhSZXNlcnZhdGlvbnNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHJlc2VydmF0aW9uc1xuICpcblxuIFxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICAgICAge1xuICAgICAgICBcInJlZmVyZW5jZVwiOiBcIjI4NDc3MzgyMTJcIixcbiAgICAgICAgXCJjaGFtYnJlXCI6IFwiY2hhbWJyZTE6IENoYW1icmUgRG91YmxlICBEUCAgMmFkdWx0ZXMgMGVuZmFudHMgMGJlYmVzXFxuIGNoYW1icmUyOiBDaGFtYnJlIFRyaXBsZSAgRFAgIDNhZHVsdGVzIDBlbmZhbnRzIDBiZWJlc1xcbiBcIixcbiAgICAgICAgXCJhZ2VuY2VcIjogXCJDb3RlIGQnb3JcIixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAyMjZcbiAgICB9LFxuXHRdXG5cbiAqL1xuXG4gIC8vYm9va2luZ19iMmJcblxuICAvKipcbiAqIEBhcGkge2dldH0gL3Jlc2VydmF0aW9ucy8gR2V0IEFMTCByZXNlcnZhdGlvbnNcbiAqIEBhcGlOYW1lIEdldHJlc2VydmF0aW9uc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcmVzZXJ2YXRpb25zXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBudW0gdW5pcXVlIG51bSByZXNlcnZhdGlvbnMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcmVmZXJlbmNlICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9jbWQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZF9kZWJ1dCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjbGllbnQgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYm51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWR1bHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mYW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iY2hhbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50IG1vbnRhbnQgZGUgbGEgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50X2EgbW9udGFudCBkJ2FjaGF0IGxhIHLDqXNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge1N0cm5pZ30gZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNoYW1icmUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWJyIGFicmV2aWF0aW9uIGRlIGxhIGNoYW1icmVcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG9ic2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0eXBlIGRlIHLDqXNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgX2Vudm95ZXIgMC8xXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbW9udGFudF9hbm51bCBkJ2FubnVsYXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbW9udGFudF9ub3Nob3cgbW9udGFudCBub3Nob3cgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGZyYWlzX2FubnVsYXRpb24gICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBvYnNlcnZhdGlvbl9hbm51bGF0aW9uICAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfYXZhbnQgICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9hbm51bGF0aW9uICAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfYW5udWxhdGlvbiAgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGV0YXQgIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzdGF0dXMgICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZXRpbWV9IGRhdGVfY29uZmlybWF0aW9uICAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcHJpbnQgMC8xICAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0aXZlIDAvMSAgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJtcXMgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9lbnZveWVyX2hvdGVsICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBldGF0X2hvdGVsICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2dV9ob3RlbCAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdnVfaG90ZWwgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG9yZGlkX21kICBpZCBjeWJlcmVzYVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGFzc3dzX21kICBtb3QgZGUgcGFzc2UgY3liZXJlc2FcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHNpZ21hICAuXG4gKiBAYXBpU3VjY2VzcyB7YWdlbmNlfSBhZ2VuY2UgIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgIC5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcIm51bVwiOiA2NixcbiAgICAgICAgXCJyZWZlcmVuY2VcIjogXCI3NzkzMjM1NTg0XCIsXG4gICAgICAgIFwiZGF0ZV9jbWRcIjogXCIyMDE3LTAyLTIxVDE1OjQwOjM0LjAwMFpcIixcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMzLFxuICAgICAgICBcImlkcGVyaW9kX2RlYnV0XCI6IDY0NixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAyMyxcbiAgICAgICAgXCJjbGllbnRcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE3LTAzLTEwXCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTctMDMtMTNcIixcbiAgICAgICAgXCJuYm51aXRcIjogMyxcbiAgICAgICAgXCJhZHVsdFwiOiAyLFxuICAgICAgICBcImVuZmFudFwiOiAwLFxuICAgICAgICBcIm5iY2hhbVwiOiAxLFxuICAgICAgICBcIm1vbnRhbnRcIjogMzAwLFxuICAgICAgICBcIm1vbnRhbnRfYVwiOiAyNzAsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJjaGFtYnJlXCI6IFwiY2hhbWJyZTE6IENoYW1icmUgRG91YmxlICBMUEQgIDJhZHVsdHMgMGVuZmFudHMgMGJlYmVzXFxuIDxiciA+XCIsXG4gICAgICAgIFwiYWJyXCI6IFwiRE9VQkxFXCIsXG4gICAgICAgIFwib2JzZXJ2YXRpb25cIjogXCJNb2RpZmljYXRpb24gUsOpc2VydmF0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsX2Vudm95ZXJcIjogMSxcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJtb250YW50X2FubnVsXCI6IDMwMCxcbiAgICAgICAgXCJtb250YW50X25vc2hvd1wiOiAzMDAsXG4gICAgICAgIFwiZnJhaXNfYW5udWxhdGlvblwiOiAzMDAsXG4gICAgICAgIFwib2JzZXJ2YXRpb25fYW5udWxhdGlvblwiOiBcIkZyYWlzIE5vc2hvdyDDoCBmYWN0dXLDqWVcIixcbiAgICAgICAgXCJkYXRlX2F2YW50XCI6IFwiMjAxNy0wMy0wN1wiLFxuICAgICAgICBcImRhdGVfYW5udWxhdGlvblwiOiBcIjIwMTctMDYtMDdUMTU6Mzc6MTMuMDAwWlwiLFxuICAgICAgICBcImV0YXRcIjogMCxcbiAgICAgICAgXCJzdGF0dXNcIjogXCJib29raW5nXCIsXG4gICAgICAgIFwiZGF0ZV9jb25maXJtYXRpb25cIjogbnVsbCxcbiAgICAgICAgXCJwcmludFwiOiAxLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcInJtcXNcIjogXCJcIixcbiAgICAgICAgXCJzaWdtYVwiOiBcIlwiLFxuICAgICAgICBcImRhdGVfZW52b3llcl9ob3RlbFwiOiBcIjIwMTctMDItMjFUMTU6NDA6MzQuMDAwWlwiLFxuICAgICAgICBcImV0YXRfaG90ZWxcIjogXCJcIixcbiAgICAgICAgXCJ2dV9ob3RlbFwiOiBudWxsLFxuICAgICAgICBcIm9yZGlkX21kXCI6IG51bGwsXG4gICAgICAgIFwicGFzc3dzX21kXCI6IG51bGwsXG4gICAgICAgIFwiYWdlbmNlXCI6IHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJKdXN0IEVhc3kgVHJhdmVsXCIsXG4gICAgICAgICAgICBcImlkXCI6IDIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJNYXJoYWJhIFJlc29ydFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDMzXG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cbiAgICBdXG4gICAgXHQvL2Jvb2tpbmdfYjJiXG5cblx0XHQvKipcbiAqIEBhcGkge2dldH0gL3Jlc2VydmF0aW9ucy9hbm51bGVyIEdldCBBTEwgcmVzZXJ2YXRpb25zIGFubnVsZXJcbiAqIEBhcGlOYW1lIEdldHJlc2VydmF0aW9uc0FudWxsZXJcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHJlc2VydmF0aW9uc1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbnVtIHVuaXF1ZSBudW0gcmVzZXJ2YXRpb25zIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJlZmVyZW5jZSAgLlxuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZXRpbWV9IGRhdGVfY21kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2RfZGVidXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY2xpZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Zyb20gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfdG8gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkdWx0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGVuZmFudCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYmNoYW0gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbW9udGFudCBtb250YW50IGRlIGxhIHLDqXNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbW9udGFudF9hIG1vbnRhbnQgZCdhY2hhdCBsYSByw6lzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtTdHJuaWd9IGRldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0YXV4X2RldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjaGFtYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFiciBhYnJldmlhdGlvbiBkZSBsYSBjaGFtYnJlXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBvYnNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHlwZSBkZSByw6lzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIF9lbnZveWVyIDAvMVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1vbnRhbnRfYW5udWwgZCdhbm51bGF0aW9uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1vbnRhbnRfbm9zaG93IG1vbnRhbnQgbm9zaG93ICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBmcmFpc19hbm51bGF0aW9uICAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gb2JzZXJ2YXRpb25fYW5udWxhdGlvbiAgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2F2YW50ICAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfYW5udWxhdGlvbiAgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2FubnVsYXRpb24gICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBldGF0ICAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc3RhdHVzICAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV0aW1lfSBkYXRlX2NvbmZpcm1hdGlvbiAgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHByaW50IDAvMSAgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdGl2ZSAwLzEgICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBybXFzICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZXRpbWV9IGRhdGVfZW52b3llcl9ob3RlbCAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZXRhdF9ob3RlbCAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdnVfaG90ZWwgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHZ1X2hvdGVsICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBvcmRpZF9tZCAgaWQgY3liZXJlc2FcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBhc3N3c19tZCAgbW90IGRlIHBhc3NlIGN5YmVyZXNhXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzaWdtYSAgLlxuICogQGFwaVN1Y2Nlc3Mge2FnZW5jZX0gYWdlbmNlICAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsICAuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJudW1cIjogNjYsXG4gICAgICAgIFwicmVmZXJlbmNlXCI6IFwiNzc5MzIzNTU4NFwiLFxuICAgICAgICBcImRhdGVfY21kXCI6IFwiMjAxNy0wMi0yMVQxNTo0MDozNC4wMDBaXCIsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzMyxcbiAgICAgICAgXCJpZHBlcmlvZF9kZWJ1dFwiOiA2NDYsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMjMsXG4gICAgICAgIFwiY2xpZW50XCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxNy0wMy0xMFwiLFxuICAgICAgICBcImRhdGVfdG9cIjogXCIyMDE3LTAzLTEzXCIsXG4gICAgICAgIFwibmJudWl0XCI6IDMsXG4gICAgICAgIFwiYWR1bHRcIjogMixcbiAgICAgICAgXCJlbmZhbnRcIjogMCxcbiAgICAgICAgXCJuYmNoYW1cIjogMSxcbiAgICAgICAgXCJtb250YW50XCI6IDMwMCxcbiAgICAgICAgXCJtb250YW50X2FcIjogMjcwLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwiY2hhbWJyZVwiOiBcImNoYW1icmUxOiBDaGFtYnJlIERvdWJsZSAgTFBEICAyYWR1bHRzIDBlbmZhbnRzIDBiZWJlc1xcbiA8YnIgPlwiLFxuICAgICAgICBcImFiclwiOiBcIkRPVUJMRVwiLFxuICAgICAgICBcIm9ic2VydmF0aW9uXCI6IFwiTW9kaWZpY2F0aW9uIFLDqXNlcnZhdGlvblwiLFxuICAgICAgICBcInR5cGVcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbF9lbnZveWVyXCI6IDEsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwibW9udGFudF9hbm51bFwiOiAzMDAsXG4gICAgICAgIFwibW9udGFudF9ub3Nob3dcIjogMzAwLFxuICAgICAgICBcImZyYWlzX2FubnVsYXRpb25cIjogMzAwLFxuICAgICAgICBcIm9ic2VydmF0aW9uX2FubnVsYXRpb25cIjogXCJGcmFpcyBOb3Nob3cgw6AgZmFjdHVyw6llXCIsXG4gICAgICAgIFwiZGF0ZV9hdmFudFwiOiBcIjIwMTctMDMtMDdcIixcbiAgICAgICAgXCJkYXRlX2FubnVsYXRpb25cIjogXCIyMDE3LTA2LTA3VDE1OjM3OjEzLjAwMFpcIixcbiAgICAgICAgXCJldGF0XCI6IDAsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiYW5udWxlclwiLFxuICAgICAgICBcImRhdGVfY29uZmlybWF0aW9uXCI6IG51bGwsXG4gICAgICAgIFwicHJpbnRcIjogMSxcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJybXFzXCI6IFwiXCIsXG4gICAgICAgIFwic2lnbWFcIjogXCJcIixcbiAgICAgICAgXCJkYXRlX2Vudm95ZXJfaG90ZWxcIjogXCIyMDE3LTAyLTIxVDE1OjQwOjM0LjAwMFpcIixcbiAgICAgICAgXCJldGF0X2hvdGVsXCI6IFwiXCIsXG4gICAgICAgIFwidnVfaG90ZWxcIjogbnVsbCxcbiAgICAgICAgXCJvcmRpZF9tZFwiOiBudWxsLFxuICAgICAgICBcInBhc3N3c19tZFwiOiBudWxsLFxuICAgICAgICBcImFnZW5jZVwiOiB7XG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwiSnVzdCBFYXN5IFRyYXZlbFwiLFxuICAgICAgICAgICAgXCJpZFwiOiAyM1xuICAgICAgICB9LFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiTWFyaGFiYSBSZXNvcnRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzM1xuICAgICAgICB9XG4gICAgfSxcblx0Li4uXG5cdF1cblxuICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcmVzZXJ2YXRpb24vOmlkYWdlbmNlIEdFVCByZXNlcnZhdGlvbnMgYWdlbmNlXG4gKiBAYXBpTmFtZSBHZXRyZXNlcnZhdGlvbnNBZ2VuY2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHJlc2VydmF0aW9uc1xuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG51bSB1bmlxdWUgbnVtIHJlc2VydmF0aW9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSByZWZlcmVuY2UgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9jbWQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjbGllbnQgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYm51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWR1bHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mYW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iY2hhbSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RybmlnfSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY2hhbWJyZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhYnIgYWJyZXZpYXRpb24gZGUgbGEgY2hhbWJyZVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gb2JzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR5cGUgZGUgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbCBkZSBjbGllbnRcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIF9lbnZveWVyIDAvMVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIC5cblxuXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGV0YXQgIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzdGF0dXMgICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBybXFzICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgIC5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwibnVtXCI6IDE3MjksXG4gICAgICAgIFwicmVmZXJlbmNlXCI6IFwiMjM2MTQxMTc5OFwiLFxuICAgICAgICBcImRhdGVfY21kXCI6IFwiMjAxOC0wNy0yMFQyMDoyNDowNS4wMDBaXCIsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxMyxcbiAgICAgICAgXCJpZGFnZW5jZVwiOiA0LFxuICAgICAgICBcImNsaWVudFwiOiBcIiB0ZXN0eXkgdHRcIixcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA4LTA3XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMDgtMDhcIixcbiAgICAgICAgXCJuYm51aXRcIjogMSxcbiAgICAgICAgXCJhZHVsdFwiOiAyLFxuICAgICAgICBcImVuZmFudFwiOiAwLFxuICAgICAgICBcIm5iY2hhbVwiOiAxLFxuICAgICAgICBcIm1vbnRhbnRcIjogNTI0LFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwiY2hhbWJyZVwiOiBcImNoYW1icmUxOiBDaGFtYnJlIERvdWJsZSAgQWxsLWluICAyYWR1bHRlcyAwZW5mYW50cyAwYmViZXNcXG4gXCIsXG4gICAgICAgIFwiYWJyXCI6IFwiRE9VQkxFXCIsXG4gICAgICAgIFwib2JzZXJ2YXRpb25cIjogXCI8YnIgLz5UcmFuc3BvcnQgXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIlNpbXBsZVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImRhdGVfYXZhbnRcIjogXCIyMDE4LTA4LTA2XCIsXG4gICAgICAgIFwiZGF0ZV9hbm51bGF0aW9uXCI6IFwiMjAxOC0wNy0yMVQxMzoxMzozMy4wMDBaXCIsXG4gICAgICAgIFwiZXRhdFwiOiAwLFxuICAgICAgICBcInN0YXR1c1wiOiBcImFubnVsZXJcIixcbiAgICAgICAgXCJybXFzXCI6IFwieHh4eHh4eHh4XCIsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJPY2VhbmFcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAxM1xuICAgICAgICB9XG4gICAgfSxcblx0Li4uXG5cdF1cbiAqXG4gKi9cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvcmVzZXJ2YXRpb24vYWpvdXQgUE9TVCBBam91dCBSZXNlcnZhdGlvblxuICogQGFwaU5hbWUgQWpvdXRSZXNlcnZhdGlvblxuICogQGFwaVBlcm1pc3Npb24gVXNlclxuICogQGFwaUdyb3VwICByZXNlcnZhdGlvbnNcbiAqXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gICAgIFxue1xuICAgIFwiQ29kZUxhbVwiOlwiRG90MTU3Q29tMTU1MjcyNjE2Nzg4NVwiLFxuICAgIFwiYXJyaWRzXCI6W1wiM1wiXSxcbiAgICBcIm5vbV9zdXBwXCI6XCJcIixcbiAgICBcIm5vbXNcIjpbbnVsbCxbbnVsbCxcIiBzc3NcIixcIiB3d3d3XCJdXSxcbiAgICBcInByZW5vbXNcIjpbbnVsbCxbbnVsbCxcImNjY1wiLFwic3NcIl1dLFxuICAgIFwidGl0cmVzXCI6W251bGwsW251bGwsXCJNclwiLFwiTW1lXCJdXSxcbiAgICBcIm5vbXNfZVwiOltdLFxuICAgIFwicHJlbm9tc19lXCI6W10sXG4gICAgXCJ2aWxsZVwiOlwiSGFtbWFtZXRcIixcbiAgICBcImlkdmlsbGVcIjpcIjM1XCIsXG4gICAgXCJpZGhvdGVsXCI6MTU3LFxuICAgIFwicmVmXCI6XCI1NTI3MjYxNjc4XCIsXG4gICAgXCJyb29tc1wiOltudWxsLFwiQ2hhbWJyZSBEb3VibGVcIl0sXG4gICAgXCJvYnNlcnZhdGlvblwiOlwiVHJhbnNwb3J0PGJyLz5cIixcbiAgICBcImRldmlzZVwiOlwiVE5EXCIsXG4gICAgXCJ0eXBlX3BlcmlvZFwiOlwiUHJvbW9cIixcbiAgICBcImlkX3VzZXJcIjoxLFxuICAgIFwiaWRhZ2VuY2VcIjo0LFxuICAgIFwic3VwcGxlbWVudF9ub21cIjpbXSxcbiAgICBcImVuZmFudHNcIjpbbnVsbCxcIjBcIl0sXG4gICAgXCJlbmZhbnRzX29cIjpbbnVsbCxcIjBcIl0sXG4gICAgXCJhZ2VfZW5mYW50c19vXCI6W251bGwsbnVsbF0sXG4gICAgXCJiZWJlc1wiOltudWxsXSxcImFkdWx0c1wiOltudWxsLFwiMlwiXSxcbiAgICBcInN1cmRlbWFuZGVcIjowLFxuICAgIFwidHlwZXNfYWJyXCI6W251bGwsXCJET1VCTEVcIl0sXG4gICAgXCJkYXRlZGVwYXJ0XCI6XCIxNy8wNS8yMDE5XCIsXG4gICAgXCJkYXRlYXJyaXZlXCI6XCIxNi8wNS8yMDE5XCIsXG4gICAgXCJtb250YW50XCI6ODkuNSxcbiAgICBcIm1vbnRhbnRfYVwiOjg1LjI0LFxuICAgIFwiYXJyYW5nX3Jvb21zXCI6W251bGwsXCJEUFwiXSxcbiAgICBcInBlcmlvZHNcIjpbbnVsbCxcIjFcIl0sXG4gICAgXCJyb29tc2lkXCI6W251bGwsMl0sXG4gICAgXCJuYmNoYW1cIjoxLFxuICAgIFwibmJudWl0XCI6MSxcbiAgICBcIm51aXRzX3Jlc3ZcIjpbbnVsbCxudWxsXSxcbiAgICBcInByaXhjaHNcIjpbbnVsbCw4OS41XSxcbiAgICBcInByaXhjaHNfYVwiOltudWxsLDg1LjI0XSxcbiAgICBcInN1cHBsZW1lbnRcIjpbXSxcbiAgICBcInN1cHBsZW1lbnRfYVwiOltdLFxuICAgIFwicmVmZXJlbmNlXCI6XCI1NTI3MjYxNjc4XCIsXG4gICAgXCJ1c2VybmFtZVwiOlwiZG90Y29tMVwiXG4gICAgfVxuICAgICAgICBcbiAgICAqXG5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc3VjY2VzcyAgLlxuXG5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiAgICB7XG4gICAgICAgIFwic3VjY2Vzc1wiOiBcInRydWVcIixcbiAgICAgICAgXCJpZFwiOjFcbiAgICAgIFxuICAgIH0sXG5cblx0XG5cbiAqL1xuICAvKipcbiAqIEBhcGkge3B1dH0gL3Jlc2VydmF0aW9uL2FubnVsYXRpb24vOnJlZiBQVVQgQW5udWxhdGlvbiBSZXNlcnZhdGlvblxuICogQGFwaU5hbWUgQW5udWxhdGlvblJlc2VydmF0aW9uXG4gKiBAYXBpUGVybWlzc2lvbiBVc2VyXG4gKiBAYXBpR3JvdXAgIHJlc2VydmF0aW9uc1xuICpcbiAqKkBhcGlQYXJhbSB7TnVtYmVyfSByZWYgICAgICAgIHJlZmVyZW5jZSBJRC4gICAgICBcbiAgICAqXG5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc3VjY2VzcyAgLmFubnVsYXRpb25cblxuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4gICAge1xuICAgICAgICBcInN1Y2Nlc3NcIjogXCJ0cnVlXCJcbiAgICAgIFxuICAgIH0sXG5cblx0XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvcmVzZXJ2YXRpb24vY29uZmlybWUvOnJlZiBQVVQgQ29uZmlybWUgUmVzZXJ2YXRpb25cbiAqIEBhcGlOYW1lIENvbmZpcm1lUmVzZXJ2YXRpb25cbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHJlc2VydmF0aW9uc1xuICpcbiAqKkBhcGlQYXJhbSB7TnVtYmVyfSByZWYgICAgICAgIHJlZmVyZW5jZSBJRC4gICAgICBcbiAgICAqXG5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc3VjY2VzcyAgLmFubnVsYXRpb25cblxuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4gICAge1xuICAgICAgICBcInN1Y2Nlc3NcIjogXCJ0cnVlXCJcbiAgICAgIFxuICAgIH0sXG5cblx0XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcmVzZXJ2YXRpb24vOmlkYWdlbmNlIEdFVCByZXNlcnZhdGlvbnMgYWdlbmNlXG4gKiBAYXBpTmFtZSBHZXRyZXNlcnZhdGlvbnNBZ2VuY2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHJlc2VydmF0aW9uc1xuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG51bSB1bmlxdWUgbnVtIHJlc2VydmF0aW9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSByZWZlcmVuY2UgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9jbWQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjbGllbnQgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYm51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWR1bHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mYW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iY2hhbSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RybmlnfSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY2hhbWJyZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhYnIgYWJyZXZpYXRpb24gZGUgbGEgY2hhbWJyZVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gb2JzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR5cGUgZGUgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbCBkZSBjbGllbnRcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIF9lbnZveWVyIDAvMVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIC5cblxuXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGV0YXQgIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzdGF0dXMgICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBybXFzICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgIC5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwibnVtXCI6IDE3MjksXG4gICAgICAgIFwicmVmZXJlbmNlXCI6IFwiMjM2MTQxMTc5OFwiLFxuICAgICAgICBcImRhdGVfY21kXCI6IFwiMjAxOC0wNy0yMFQyMDoyNDowNS4wMDBaXCIsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxMyxcbiAgICAgICAgXCJpZGFnZW5jZVwiOiA0LFxuICAgICAgICBcImNsaWVudFwiOiBcIiB0ZXN0eXkgdHRcIixcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA4LTA3XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMDgtMDhcIixcbiAgICAgICAgXCJuYm51aXRcIjogMSxcbiAgICAgICAgXCJhZHVsdFwiOiAyLFxuICAgICAgICBcImVuZmFudFwiOiAwLFxuICAgICAgICBcIm5iY2hhbVwiOiAxLFxuICAgICAgICBcIm1vbnRhbnRcIjogNTI0LFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwiY2hhbWJyZVwiOiBcImNoYW1icmUxOiBDaGFtYnJlIERvdWJsZSAgQWxsLWluICAyYWR1bHRlcyAwZW5mYW50cyAwYmViZXNcXG4gXCIsXG4gICAgICAgIFwiYWJyXCI6IFwiRE9VQkxFXCIsXG4gICAgICAgIFwib2JzZXJ2YXRpb25cIjogXCI8YnIgLz5UcmFuc3BvcnQgXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIlNpbXBsZVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImRhdGVfYXZhbnRcIjogXCIyMDE4LTA4LTA2XCIsXG4gICAgICAgIFwiZGF0ZV9hbm51bGF0aW9uXCI6IFwiMjAxOC0wNy0yMVQxMzoxMzozMy4wMDBaXCIsXG4gICAgICAgIFwiZXRhdFwiOiAwLFxuICAgICAgICBcInN0YXR1c1wiOiBcImFubnVsZXJcIixcbiAgICAgICAgXCJybXFzXCI6IFwieHh4eHh4eHh4XCIsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJPY2VhbmFcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAxM1xuICAgICAgICB9XG4gICAgfSxcblx0Li4uXG5cdF1cbiAqXG4gKi9cblxuICAvL2NydWRlIGhpc3RfY2Fpc3NlXG5cbiAgLy9jcnVkZSBtYXJnZV9ob3RlbFxuXG4gIC8vY3J1ZGUgYW1lbmFnbWVudFxuXG4gIC8vY3J1ZGUgYXJyYW5nZW1lbnRzXG5cbiAgLy9jcnVkZSBiYW5uZXJcblxuICAvL2NydWRlIG5ld3NcblxuICAvL2NydWRlIHJvb21cblxuICAvL2NydWRlIGNvdW50cnlcblxuICAvL2NydWRlIHJlc2VydmF0aW9uXG5cbiAgLy9zYy0wNi0yMDIwXG5cbiAgLy9HZXQgbGlzdCBhbGdlcmllXG5cbiAgLy9TdGF0aXN0aXF1ZVxuICAvL1xuICAvL3N0YXRpc3RpcXVlIEhvdGVsc1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3RhdGlzdGlxdWUvaG90ZWxzIEdFVCBTVEFUIEhPVEVMXG4gKiBAYXBpTmFtZSBHZXRTdGF0SG90ZWxcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHN0YXRpc3RpcXVlc1xuXG5cblxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7aWRob3RlbH0gaWRIb3RlbCB1bmlxdWUgaWQgSG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWNoYXQgbW9udGFudCBhY2hhdCAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1wYXllZSBtb250YW50IGltcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcGF5ZWUgbW9udGFudCBwYXnDqWUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaG90ZWwgbm9tIEhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNoaWZmcmUgY2hpZmZyZSBkJ2FmZmFpcmUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZ2FpbiBnYWluIGVuICUgLlxuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwiYWNoYXRcIjogNTAxNzkwLjU1MyxcbiAgICAgICAgXCJpbXBheWVlXCI6IDU1NDUxNi42ODUsXG4gICAgICAgIFwicGF5ZWVcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiBcIk9uZSBSZXNvcnQgQXF1YSBQYXJrXCIsXG4gICAgICAgIFwiY2hpZmZyZVwiOiA1NTQ1MTYuNjg1LFxuICAgICAgICBcImdhaW5cIjogMTAuNTA4XG4gICAgfSxcblx0Li4uXG5cdF1cblxuICovXG4gIC8vY3J1ZGUgU3RhdGlzdGlxdWVcblxuICAvL1N0YXRpc3RpcXVlXG4gIC8vL1xuICAvL3N0YXRpc3RpcXVlIEhvdGVsc1xuXG4gIC8qKlxuKiBAYXBpIHtnZXR9IC9zdGF0aXN0aXF1ZS9ob3RlbHMvOmlkIEdFVCBTVEFUIEhPVEVMIHBhciBBZ2VuY2VcbiogQGFwaU5hbWUgR2V0U3RhdEhvdGVsc0FnZW5jZVxuKiBAYXBpR3JvdXAgIHN0YXRpc3RpcXVlc1xuXG5cblxuXG4qXG5cbiogQGFwaVN1Y2Nlc3Mge2lkaG90ZWx9IGlkSG90ZWwgdW5pcXVlIGlkIEhvdGVsIC5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWNoYXQgbW9udGFudCBhY2hhdCAgLlxuKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbXBheWVlIG1vbnRhbnQgaW1wYXnDqWUuXG4qIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBheWVlIG1vbnRhbnQgcGF5w6llIC5cbiogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaG90ZWwgbm9tIEhvdGVsIC5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2hpZmZyZSBjaGlmZnJlIGQnYWZmYWlyZSAuXG4qIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGdhaW4gZ2FpbiBlbiAlIC5cblxuXG5cblxuKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xue1xuICAgIFwiaWRob3RlbFwiOiAxLFxuICAgIFwiYWNoYXRcIjogNTAxNzkwLjU1MyxcbiAgICBcImltcGF5ZWVcIjogNTU0NTE2LjY4NSxcbiAgICBcInBheWVlXCI6IDAsXG4gICAgXCJob3RlbFwiOiBcIk9uZSBSZXNvcnQgQXF1YSBQYXJrXCIsXG4gICAgXCJjaGlmZnJlXCI6IDU1NDUxNi42ODUsXG4gICAgXCJnYWluXCI6IDEwLjUwOFxufSxcbi4uLlxuXVxuXG4gKi9cblxuICAvL2NydWRlIFN0YXRpc3RpcXVlXG5cbiAgLy9TdGF0aXN0aXF1ZVxuICAvL1xuICAvL3N0YXRpc3RpcXVlIEFnZW5jZXNcblxuICAvKipcbiAqIEBhcGkge2dldH0gL3N0YXRpc3RpcXVlL2FnZW5jZXMgR0VUIFNUQVQgQUdFTkNFXG4gKiBAYXBpTmFtZSBHZXRTdGF0QWdlbmNlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBzdGF0aXN0aXF1ZXNcblxuXG5cblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge2lkYWdlbmNlfSBpZGFnZW5jZSB1bmlxdWUgaWQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjaGF0IG1vbnRhbnQgYWNoYXQgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGltcGF5ZWUgbW9udGFudCBpbXBhecOpZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBheWVlIG1vbnRhbnQgcGF5w6llIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFnZW5jZSB1c2VybmFtZSBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2hpZmZyZSBjaGlmZnJlIGQnYWZmYWlyZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBnYWluIGdhaW4gZW4gJSAuXG5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcImlkYWdlbmNlXCI6IDEsXG4gICAgICAgIFwiYWNoYXRcIjogNTAxNzkwLjU1MyxcbiAgICAgICAgXCJpbXBheWVlXCI6IDU1NDUxNi42ODUsXG4gICAgICAgIFwicGF5ZWVcIjogMCxcbiAgICAgICAgXCJhZ2VuY2VcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImNoaWZmcmVcIjogNTU0NTE2LjY4NSxcbiAgICAgICAgXCJnYWluXCI6IDEwLjUwOFxuICAgIH0sXG5cdC4uLlxuXHRdXG5cbiAqL1xuXG4gIC8vZmFjdHVyYXRpb25cbiAgLy9cbiAgLy9ib29raW5nX2IyYlxuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2ZhY3R1cmF0aW9ucy8gUG9zdCBBTEwgZmFjdHVyYXRpb25zXG4gKiBAYXBpTmFtZSBQb3N0ZmFjdHVyYXRpb25zXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBmYWN0dXJhdGlvbnNcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gIHtcbiAgICAgICBcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTEwLTAxXCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMTBcIixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAxMDAgb3UgMCAoYWxsYWdlbmNlKVxuXHRcdFwiaWRob3RlbFwiOiAyNjYgb3UgMCAoYWxsaG90ZWwpXG4gICAgfVxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBudW0gdW5pcXVlIG51bSBmYWN0dXJhdGlvbnMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcmVmZXJlbmNlICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZXRpbWV9IGRhdGVfY21kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY2xpZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Zyb20gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfdG8gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iY2hhbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50IG1vbnRhbnQgZGUgbGEgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50X2EgbW9udGFudCBkJ2FjaGF0IGxhIHLDqXNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge1N0cm5pZ30gZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHthZ2VuY2V9IGFnZW5jZSAgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAgLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwibnVtXCI6IDMwNjcsXG4gICAgICAgIFwicmVmZXJlbmNlXCI6IFwiOTE4OTA4Mzg2MFwiLFxuICAgICAgICBcImlkaG90ZWxcIjogMjI3LFxuICAgICAgICBcImRhdGVfY21kXCI6IFwiMjAxOC0wOS0xNVQxNjo1MzowNC4wMDBaXCIsXG4gICAgICAgIFwiY2xpZW50XCI6IFwiIERKRUxMT1VUIERKQU1JTEFcIixcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTEwLTAxXCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMDhcIixcbiAgICAgICAgXCJuYm51aXRcIjogNyxcbiAgICAgICAgXCJuYmNoYW1cIjogMSxcbiAgICAgICAgXCJtb250YW50XCI6IDEwMzYsXG4gICAgICAgIFwibW9udGFudF9hXCI6IDk1MixcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAxLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcImFnZW5jZVwiOiB7XG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwiZmlkZWxpYSB0b3Vyc1wiLFxuICAgICAgICAgICAgXCJpZFwiOiAzMFxuICAgICAgICB9LFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiTUVOSU5YXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMjI3XG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cblx0XVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9mYWN0dXJhdGlvbi86aWRhZ2VuY2UgUG9zdCBmYWN0dXJhdGlvbnMgYWdlbmNlXG4gKiBAYXBpTmFtZSBQb3N0ZmFjdHVyYXRpb25zQWdlbmNlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBmYWN0dXJhdGlvbnNcbiAqXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gIHtcbiAgICAgICBcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTEwLTAxXCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMTBcIixcbiAgICAgICAgXCJpZGhvdGVsXCI6IDI2NiBvdSAwIChhbGxob3RlbClcbiAgICB9XG5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBudW0gdW5pcXVlIG51bSBmYWN0dXJhdGlvbnMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcmVmZXJlbmNlICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZXRpbWV9IGRhdGVfY21kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY2xpZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Zyb20gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfdG8gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iY2hhbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50IG1vbnRhbnQgZGUgbGEgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7U3RybmlnfSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge2FnZW5jZX0gYWdlbmNlICAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsICAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAgIHtcbiAgICAgICAgXCJudW1cIjogMzE3MixcbiAgICAgICAgXCJyZWZlcmVuY2VcIjogXCI4NTc4MjQ2MjMyXCIsXG4gICAgICAgIFwiaWRob3RlbFwiOiAyNjYsXG4gICAgICAgIFwiZGF0ZV9jbWRcIjogXCIyMDE4LTA5LTI0VDEzOjI2OjI4LjAwMFpcIixcbiAgICAgICAgXCJjbGllbnRcIjogXCIgV0FISUQgU0FJRElcIixcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTEwLTAyXCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMDRcIixcbiAgICAgICAgXCJuYm51aXRcIjogMixcbiAgICAgICAgXCJuYmNoYW1cIjogMSxcbiAgICAgICAgXCJtb250YW50XCI6IDE0NCxcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAxLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcImFnZW5jZVwiOiB7XG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgICAgIFwiaWRcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiSGVseWEgQmVhY2ggJiBTcGFcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAyNjZcbiAgICAgICAgfVxuICAgIH0sXG5cdC4uLlxuXHRdXG4gKlxuICovXG4gIC8vZmFjdHVyYXRpb25cbiAgLy9cbiAgLy9ib29raW5nX2IyYlxuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2V0YXRzLyBQb3N0IEFMTCBldGF0c1xuICogQGFwaU5hbWUgUG9zdGV0YXRzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBldGF0c1xuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAge1xuICAgICAgIFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0xMFwiLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDEwMCBvdSAwIChhbGxhZ2VuY2UpLFxuXHRcdFwiaWRob3RlbFwiOiAyNjYgb3UgMCAoYWxsaG90ZWwpXG4gICAgfVxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBudW0gdW5pcXVlIG51bSBldGF0cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSByZWZlcmVuY2UgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9jbWQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjbGllbnQgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYm51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJjaGFtIC5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cm5pZ30gZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHthZ2VuY2V9IGFnZW5jZSAgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAgLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICAgIHtcbiAgICAgICAgXCJudW1cIjogMzA2NyxcbiAgICAgICAgXCJyZWZlcmVuY2VcIjogXCI5MTg5MDgzODYwXCIsXG4gICAgICAgIFwiaWRob3RlbFwiOiAyMjcsXG4gICAgICAgIFwiZGF0ZV9jbWRcIjogXCIyMDE4LTA5LTE1VDE2OjUzOjA0LjAwMFpcIixcbiAgICAgICAgXCJjbGllbnRcIjogXCIgREpFTExPVVQgREpBTUlMQVwiLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0wOFwiLFxuICAgICAgICBcIm5ibnVpdFwiOiA3LFxuICAgICAgICBcIm5iY2hhbVwiOiAxLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwiYWdlbmNlXCI6IHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJmaWRlbGlhIHRvdXJzXCIsXG4gICAgICAgICAgICBcImlkXCI6IDMwXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJNRU5JTlhcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAyMjdcbiAgICAgICAgfVxuICAgIH0sXG5cdC4uLlxuXHRdXG5cbiAqL1xuXG4gIC8vZXRhdFxuXG4gIC8vY3J1ZGUgcGVyaW9kXG5cbiAgLy9wZXJpb2RcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgcGVyaW9kTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIHBlcmlvZE5vdEZvdW5kICA8Y29kZT5wZXJpb2Q8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwicGVyaW9kIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL3BlcmlvZHMvOmlkY29udHJhdCAgQUxMIHBlcmlvZHNcbiAqIEBhcGlOYW1lIEdldHBlcmlvZHNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHBlcmlvZFxuICpcbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0eXBlICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYl9qb3VyIG5iIGpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgIG1pbiBudWl0LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X251aXQgIG1heF9udWl0LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYm9ucGxhbiAgYm9ucGxhbi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlICBtYXJnZSBiMmIuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50ICAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3NpdGlvbiAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAgbWFyZ2UgYjJjLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBwZXJpb2RfZnJvbSBkYXRlIGRlYnV0IHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gcGVyaW9kX3RvIGRhdGUgZmluIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZWFybHlfYm9va2luZyBkYXRlIGVhcmx5Ym9va2luZyBwZXJpb2QgLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICBcbiAgIHtcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDE0LFxuICAgICAgICBcImlkY29udHJhdFwiOiAxNCxcbiAgICAgICAgXCJub21cIjogXCJTYWlzb24gMVwiLFxuICAgICAgICBcInBlcmlvZF9mcm9tXCI6IFwiMjAxNi0xMS0wMVwiLFxuICAgICAgICBcInBlcmlvZF90b1wiOiBcIjIwMTYtMTEtMjVcIixcbiAgICAgICAgXCJlYXJseV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcIm5iX2pvdXJcIjogMCxcbiAgICAgICAgXCJ0eXBlXCI6IFwiU2ltcGxlXCIsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcImJvbnBsYW5cIjogMCxcbiAgICAgICAgXCJyZXRyb3Nlc3Npb25cIjogbnVsbCxcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJzdGVpZ2VuYmVyZ2VyIG1hcmhhYmEgdGhhbGFzc28gaGFtbWFtZXQgXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMTRcbiAgICAgICAgfVxuXHRcdFxuICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBwZXJpb2ROb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL3BlcmlvZC86aWRwZXJpb2QgR0VUIHBlcmlvZFxuICogQGFwaU5hbWUgR2V0cGVyaW9kXG4gKiBAYXBpR3JvdXAgIHBlcmlvZFxuICpcbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0eXBlICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYl9qb3VyIG5iIGpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgIG1pbiBudWl0LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X251aXQgIG1heF9udWl0LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYm9ucGxhbiAgYm9ucGxhbi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlICBtYXJnZSBiMmIuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50ICAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3NpdGlvbiAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAgbWFyZ2UgYjJjLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBwZXJpb2RfZnJvbSBkYXRlIGRlYnV0IHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gcGVyaW9kX3RvIGRhdGUgZmluIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZWFybHlfYm9va2luZyBkYXRlIGVhcmx5Ym9va2luZyBwZXJpb2QgLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuXG4gICB7XG4gICBcImlkcGVyaW9kXCI6IDYwNDgsXG4gICAgXCJub21cIjogXCJwMVwiLFxuICAgIFwiaWRob3RlbFwiOiBcIjNcIixcbiAgICBcImlkY29udHJhdFwiOiBcIjNcIixcbiAgICBcInBlcmlvZF9mcm9tXCI6IFwiMjAxOC0xMC0wMVwiLFxuICAgIFwicGVyaW9kX3RvXCI6IFwiMjAxOC0xMC0xMFwiLFxuICAgIFwibmJfam91clwiOiBcIjBcIixcbiAgICBcInR5cGVcIjogXCJQcm9tb1wiLFxuICAgIFwibWluX251aXRcIjogXCI0XCIsXG4gICAgXCJtYXhfbnVpdFwiOiBcIjBcIixcbiAgICBcImJvbnBsYW5cIjogXCIxXCIsXG4gICAgXCJtYXJnZVwiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMFwiLFxuICAgIFwibWFyZ2VfY1wiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiMVwiLFxuXHR9XG5cbiAqXG4gKiBAYXBpVXNlICBwZXJpb2ROb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9wZXJpb2QvIFBPU1QgcGVyaW9kXG4gKiBAYXBpRGVzY3JpcHRpb24gQWpvdXQgdW5lIHDDqXJpb2RlICwgYXV0b21hdGlxdWVtZW50IGRldXggdHlwZXMgdGFyaWZzIGF2ZWMgcm9vbWlkPTIsIHJvb21pZD0zIHNvbnQgYWpvdXRlclxuICogQGFwaU5hbWUgUE9TVHBlcmlvZFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcGVyaW9kXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcblxuICAgICAgIHtcbiAgICBcIm5vbVwiOiBcInAxXCIsXG4gICAgXCJpZGhvdGVsXCI6IFwiM1wiLFxuICAgIFwiaWRjb250cmF0XCI6IFwiM1wiLFxuICAgIFwicGVyaW9kX2Zyb21cIjogXCIyMDE4LTEwLTAxXCIsXG4gICAgXCJwZXJpb2RfdG9cIjogXCIyMDE4LTEwLTEwXCIsXG4gICAgXCJuYl9qb3VyXCI6IFwiMFwiLFxuICAgIFwidHlwZVwiOiBcIlByb21vXCIsXG4gICAgXCJtaW5fbnVpdFwiOiBcIjRcIixcbiAgICBcIm1heF9udWl0XCI6IFwiMFwiLFxuICAgIFwiYm9ucGxhblwiOiBcIjFcIixcbiAgICBcIm1hcmdlXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIwXCIsXG4gICAgXCJtYXJnZV9jXCI6IFwiMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCIxXCIsXG4gICAgXCJvcGVyYXRpb25fY1wiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X2NcIjogXCIwXCJcbiAgICAgXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuICAgICAge1xuICAgIFwiZWFybHlfYm9va2luZ1wiOiBcIjE5NzAtMDEtMDFcIixcbiAgICBcImlkcGVyaW9kXCI6IDYwNDgsXG4gICAgXCJub21cIjogXCJwMVwiLFxuICAgIFwiaWRob3RlbFwiOiBcIjNcIixcbiAgICBcImlkY29udHJhdFwiOiBcIjNcIixcbiAgICBcInBlcmlvZF9mcm9tXCI6IFwiMjAxOC0xMC0wMVwiLFxuICAgIFwicGVyaW9kX3RvXCI6IFwiMjAxOC0xMC0xMFwiLFxuICAgIFwibmJfam91clwiOiBcIjBcIixcbiAgICBcInR5cGVcIjogXCJQcm9tb1wiLFxuICAgIFwibWluX251aXRcIjogXCI0XCIsXG4gICAgXCJtYXhfbnVpdFwiOiBcIjBcIixcbiAgICBcImJvbnBsYW5cIjogXCIxXCIsXG4gICAgXCJtYXJnZVwiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMFwiLFxuICAgIFwibWFyZ2VfY1wiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiMVwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMzo1NTozNy40MThaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEzOjU1OjM3LjQxOFpcIlxufVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9wZXJpb2QvZHVwIERVUExJUVVFIHBlcmlvZFxuICogQGFwaURlc2NyaXB0aW9uIGR1cGxpcXXDqSB1bmUgcMOpcmlvZGUgYXBhcnRpciBkJ3VuZSBhdXRyZSBww6lyaW9kZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcGVyaW9kXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcblxuICAgICAgIHtcbiAgICBcImlkcGVyaW9kb2xkXCI6IFwiMzMxNFwiLFxuICAgIFwibm9tXCI6IFwicDFcIixcbiAgICBcImlkaG90ZWxcIjogXCIzXCIsXG4gICAgXCJpZGNvbnRyYXRcIjogXCIzXCIsXG4gICAgXCJwZXJpb2RfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICBcInBlcmlvZF90b1wiOiBcIjIwMTgtMTAtMTBcIixcbiAgICBcIm5iX2pvdXJcIjogXCIwXCIsXG4gICAgXCJ0eXBlXCI6IFwiUHJvbW9cIixcbiAgICBcIm1pbl9udWl0XCI6IFwiNFwiLFxuICAgIFwibWF4X251aXRcIjogXCIwXCIsXG4gICAgXCJib25wbGFuXCI6IFwiMVwiLFxuICAgIFwibWFyZ2VcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudFwiOiBcIjBcIixcbiAgICBcIm1hcmdlX2NcIjogXCIwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIjFcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIlxuICAgICBcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4gICAgICB7XG4gICAgXCJlYXJseV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwiaWRwZXJpb2RcIjogNjA0OCxcbiAgICBcIm5vbVwiOiBcInAxXCIsXG4gICAgXCJpZGhvdGVsXCI6IFwiM1wiLFxuICAgIFwiaWRjb250cmF0XCI6IFwiM1wiLFxuICAgIFwicGVyaW9kX2Zyb21cIjogXCIyMDE4LTEwLTAxXCIsXG4gICAgXCJwZXJpb2RfdG9cIjogXCIyMDE4LTEwLTEwXCIsXG4gICAgXCJuYl9qb3VyXCI6IFwiMFwiLFxuICAgIFwidHlwZVwiOiBcIlByb21vXCIsXG4gICAgXCJtaW5fbnVpdFwiOiBcIjRcIixcbiAgICBcIm1heF9udWl0XCI6IFwiMFwiLFxuICAgIFwiYm9ucGxhblwiOiBcIjFcIixcbiAgICBcIm1hcmdlXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIwXCIsXG4gICAgXCJtYXJnZV9jXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2NcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9jXCI6IFwiMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCIxXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEzOjU1OjM3LjQxOFpcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTM6NTU6MzcuNDE4WlwiXG59XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvcGVyaW9kLzppZHBlcmlvZCBQVVQgcGVyaW9kXG4gKiBAYXBpTmFtZSBQVVRwZXJpb2RcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHBlcmlvZFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHBlcmlvZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5cbiAgICB7XG5cbiAgICAgICAgXCJlYXJseV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwibm9tXCI6IFwicDFcIixcbiAgICBcImlkaG90ZWxcIjogXCIzXCIsXG4gICAgXCJpZGNvbnRyYXRcIjogXCIzXCIsXG4gICAgXCJwZXJpb2RfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICBcInBlcmlvZF90b1wiOiBcIjIwMTgtMTAtMTBcIixcbiAgICBcIm5iX2pvdXJcIjogXCIwXCIsXG4gICAgXCJ0eXBlXCI6IFwiUHJvbW9cIixcbiAgICBcIm1pbl9udWl0XCI6IFwiNFwiLFxuICAgIFwibWF4X251aXRcIjogXCIwXCIsXG4gICAgXCJib25wbGFuXCI6IFwiMVwiLFxuICAgIFwibWFyZ2VcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudFwiOiBcIjBcIixcbiAgICBcIm1hcmdlX2NcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25fY1wiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X2NcIjogXCIwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIjFcIlxuXHR9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG4gICAgICAgIHtcbiAgICAgICAgIFwiZWFybHlfYm9va2luZ1wiOiBcIjE5NzAtMDEtMDFcIixcbiAgICBcImlkcGVyaW9kXCI6IDYwNDgsXG4gICAgXCJub21cIjogXCJwMVwiLFxuICAgIFwiaWRob3RlbFwiOiBcIjNcIixcbiAgICBcImlkY29udHJhdFwiOiBcIjNcIixcbiAgICBcInBlcmlvZF9mcm9tXCI6IFwiMjAxOC0xMC0wMVwiLFxuICAgIFwicGVyaW9kX3RvXCI6IFwiMjAxOC0xMC0xMFwiLFxuICAgIFwibmJfam91clwiOiBcIjBcIixcbiAgICBcInR5cGVcIjogXCJQcm9tb1wiLFxuICAgIFwibWluX251aXRcIjogXCI0XCIsXG4gICAgXCJtYXhfbnVpdFwiOiBcIjBcIixcbiAgICBcImJvbnBsYW5cIjogXCIxXCIsXG4gICAgXCJtYXJnZVwiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMFwiLFxuICAgIFwibWFyZ2VfY1wiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiMVwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMzo1NTozNy40MThaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEzOjU1OjM3LjQxOFpcIlxuIFxuICAgIH0sXG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9wZXJpb2QvOmlkcGVyaW9kIERlbGV0ZSBwZXJpb2RcbiAgICogQGFwaU5hbWUgREVMRVRFcGVyaW9kXG4gICAqIEBhcGlHcm91cCAgcGVyaW9kXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBwZXJpb2RcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vY3J1ZGUgY29udHJhdFxuXG4gIC8vY29udHJhdFxuICAvKipcbiAgICogQGFwaURlZmluZSBjb250cmF0Tm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIGNvbnRyYXROb3RGb3VuZCAgPGNvZGU+Y29udHJhdDwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJjb250cmF0IHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2NvbnRyYXRzLyAgQUxMIGNvbnRyYXRzXG4gKiBAYXBpTmFtZSBHZXRjb250cmF0c1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQ29udHJhdFxuICpcbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0IGFjdGl2ZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZmZpY2hhZ2UgIDAgKGxlcyBkZXV4KS8xIChCMkIpLzIoQjJDKS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJlY29tbWVuZGVyICAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gYmVnaW4gZGF0ZSBkZWJ1dCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBlbmQgZGF0ZSBmaW4gY29udHJhdCAuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgIFxuICAgIHtcbiAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJub21cIjogXCJDb250cmF0ICBSYWRpc3NvbiBCbHUgUmVzb3J0ICYgVGhhbGFzc2FcIixcbiAgICAgICAgXCJiZWdpblwiOiBcIjIwMTYtMTEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIyMDE3LTEwLTMxXCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicmVjb21tZW5kZXJcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzXG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBjb250cmF0Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9jb250cmF0LzppZCBHRVQgY29udHJhdFxuICogQGFwaU5hbWUgR2V0Y29udHJhdFxuICogQGFwaUdyb3VwICBDb250cmF0XG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdCBhY3RpdmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWZmaWNoYWdlICAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByZWNvbW1lbmRlciAgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGJlZ2luIGRhdGUgZGVidXQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZW5kIGRhdGUgZmluIGNvbnRyYXQgLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuXG4gICAge1xuIFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJyZWNvbW1lbmRlclwiOiAwLFxuICAgICAgICBcImFmZmljaGFnZVwiOiAxLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJhY3RcIjogMVxuICAgICBcbiAgICB9XG5cbiAqXG4gKiBAYXBpVXNlICBjb250cmF0Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvY29udHJhdC8gUE9TVCBjb250cmF0XG4gKiBAYXBpTmFtZSBQT1NUY29udHJhdFxuICogQGFwaUdyb3VwICBDb250cmF0XG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcblxuICAgICAgIHtcblxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJub21cIjogXCJDb250cmF0ICBSYWRpc3NvbiBCbHUgUmVzb3J0ICYgVGhhbGFzc2FcIixcbiAgICAgICAgXCJiZWdpblwiOiBcIjIwMTYtMTEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIyMDE3LTEwLTMxXCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicmVjb21tZW5kZXJcIjogMCxcbiAgICAgXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICAgICB7XG4gICAgICAgIFwiaWRcIjogMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwibm9tXCI6IFwiQ29udHJhdCAgUmFkaXNzb24gQmx1IFJlc29ydCAmIFRoYWxhc3NhXCIsXG4gICAgICAgIFwiYmVnaW5cIjogXCIyMDE2LTExLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMjAxNy0xMC0zMVwiLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInJlY29tbWVuZGVyXCI6IDAsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogM1xuICAgICAgICB9XG4gICAgfSxcbl1cbiAqL1xuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9jb250cmF0L2R1cCBEdXBsaXF1ZSBjb250cmF0XG4gKiBAYXBpTmFtZSBEdXBsaXF1ZWNvbnRyYXRcbiAqIEBhcGlHcm91cCAgQ29udHJhdFxuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5cbiAgICAgICB7XG5cbiAgICAgICAgXCJpZGNvbnRyYXRvbGRcIjogMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDcsXG4gICAgICAgIFwibm9tXCI6IFwidGVzdFwiLFxuICAgICAgICBcImJlZ2luXCI6IFwiMjAxNi0xMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjIwMTctMTAtMzFcIixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJyZWNvbW1lbmRlclwiOiAwLFxuICAgICBcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICB7XG4gICAgXCJpZFwiOiA1ODEsXG4gICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgXCJhY3RcIjogXCIxXCIsXG4gICAgXCJpZGhvdGVsXCI6IFwiN1wiLFxuICAgIFwiYWZmaWNoYWdlXCI6IFwiMFwiLFxuICAgIFwiYmVnaW5cIjogXCIyMDE4LTEyLTI0XCIsXG4gICAgXCJlbmRcIjogXCIyMDE4LTEyLTI2XCIsXG4gICAgXCJyZWNvbW1lbmRlclwiOiBcIjBcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTItMjVUMDk6NDk6MzQuNTA4WlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMi0yNVQwOTo0OTozNC41MDhaXCJcbn1cbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvY29udHJhdC86aWQgUFVUIGNvbnRyYXRcbiAqIEBhcGlOYW1lIFBVVGNvbnRyYXRcbiAqIEBhcGlHcm91cCAgQ29udHJhdFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4gICAge1xuXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcIm5iX2pvdXJcIjogMCxcbiAgICAgICAgXCJjb250cmF0X2Jvb2tpbmdcIjogbnVsbCxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMSxcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIwMDAwLTAwLTAwXCJcbiAgICB9XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xuICAgICAgICB7XG4gICAgICAgIFwiaWRcIjogMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwibm9tXCI6IFwiQ29udHJhdCAgUmFkaXNzb24gQmx1IFJlc29ydCAmIFRoYWxhc3NhXCIsXG4gICAgICAgIFwiYmVnaW5cIjogXCIyMDE2LTExLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMjAxNy0xMC0zMVwiLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInJlY29tbWVuZGVyXCI6IDAsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogM1xuICAgICAgICB9XG4gICAgfSxcbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2NvbnRyYXQvOmlkIERlbGV0ZSBjb250cmF0XG4gICAqIEBhcGlOYW1lIERFTEVURWNvbnRyYXRcbiAgICogQGFwaUdyb3VwICBDb250cmF0XG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBjb250cmF0XG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIGVhcmx5XG5cbiAgLy9lYXJseVxuICAvKipcbiAgICogQGFwaURlZmluZSBlYXJseU5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBlYXJseU5vdEZvdW5kICA8Y29kZT5lYXJseTwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJlYXJseSBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9lYXJseXMvICBBTEwgZWFybHlzXG4gKiBAYXBpTmFtZSBHZXRlYXJseXNcbiAqIEBhcGlHcm91cCAgRWFybHkgQm9va2luZ1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGVhcmx5IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkY29udHJhdCBJRCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIElEIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciB2YWxldXIgZGUgZWFybHkuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3NpbmdsZSB2YWxldXIgc2luZ2xlIGRlIGVhcmx5LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiBtYXJnZSBiMmIgZGUgZWFybHkuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgbWFyZ2UgYjJjIGRlIGVhcmx5LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuIFxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iIG1hcmdlIHNpbmdsZSBiMmIgZGUgZWFybHkuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2MgbWFyZ2Ugc2luZ2xlIGIyYyBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IG1pbiBkZSBudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9udWl0IG1heCBkZSBudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIGFycmFuZ2VtZW50IElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNhbGN1bF9zdXBwIGNhbGN1bCBzdXBwbGVtZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iX2pvdXIgbm9tYnJlIGRlcyBqb3Vycy5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gbW9kZWxlIGhvdGVsLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IG1vZGVsZSByb29tLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ2VtZW50fSBtb2RlbGUgYXJyYW5nZW1lbnRzLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGJlZ2luIGRhdGUgZGVidXQgZWFybHkgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGVuZCBkYXRlIGZpbiBlYXJseSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9ib29raW5nIGRhdGUgYXZhbnQgZWFybHkgLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiA3LFxuICAgICAgICBcImlkY29udHJhdFwiOiAwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDAsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcIm5iX2pvdXJcIjogMCxcbiAgICAgICAgXCJlYXJseV9ib29raW5nXCI6IG51bGwsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImNhbGN1bF9zdXBwXCI6IDEsXG4gICAgICAgIFwiZGF0ZV9ib29raW5nXCI6IFwiMDAwMC0wMC0wMFwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTA6MjU6MjAuMDAwWlwiLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTA6MjU6MjAuMDAwWlwiLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiIFJhZGlzc29uIEJsdSBIYW1tYW1ldFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IG51bGwsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjogbnVsbFxuICAgIH1cblx0Li4uXG5dXG4gICogQGFwaVVzZSAgZWFybHlOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2Vhcmx5LzppZCBHRVQgZWFybHlcbiAqIEBhcGlOYW1lIEdldGVhcmx5XG4gKiBAYXBpR3JvdXAgIEVhcmx5IEJvb2tpbmdcbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgZWFybHkgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIHZhbGV1ciBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfc2luZ2xlIHZhbGV1ciBzaW5nbGUgZGUgZWFybHkuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIG1hcmdlIGIyYiBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyBtYXJnZSBiMmMgZGUgZWFybHkuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IgbWFyZ2Ugc2luZ2xlIGIyYiBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX3NfYyBtYXJnZSBzaW5nbGUgYjJjIGRlIGVhcmx5LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgbWluIGRlIG51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X251aXQgbWF4IGRlIG51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgYXJyYW5nZW1lbnQgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2FsY3VsX3N1cHAgY2FsY3VsIHN1cHBsZW1lbnQgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJfam91ciBub21icmUgZGVzIGpvdXJzLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBtb2RlbGUgaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gbW9kZWxlIHJvb20uXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nZW1lbnR9IG1vZGVsZSBhcnJhbmdlbWVudHMuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gYmVnaW4gZGF0ZSBkZWJ1dCBlYXJseSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZW5kIGRhdGUgZmluIGVhcmx5IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Jvb2tpbmcgZGF0ZSBhdmFudCBlYXJseSAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG5cbiAgICB7XG4gICAgICAgIFwiaWRcIjogNyxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAwLFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJcIixcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMyxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJuYl9qb3VyXCI6IDAsXG4gICAgICAgIFwiZWFybHlfYm9va2luZ1wiOiBudWxsLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjAwMDAtMDAtMDBcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEwOjI1OjIwLjAwMFpcIixcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEwOjI1OjIwLjAwMFpcIixcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiBudWxsLFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IG51bGxcbiAgICB9XG5cbiAqXG4gKiBAYXBpVXNlICBlYXJseU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2Vhcmx5LyBQT1NUIGVhcmx5XG4gKiBAYXBpTmFtZSBQT1NUZWFybHlcbiAqIEBhcGlHcm91cCAgRWFybHkgQm9va2luZ1xuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4gICAge1xuICAgICAgIFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJcIixcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMyxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJuYl9qb3VyXCI6IDAsXG4gICAgICAgIFwiZWFybHlfYm9va2luZ1wiOiBudWxsLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjAwMDAtMDAtMDBcIlxuXG4gICAgfVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcImlkXCI6IDcsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDAsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwibmJfam91clwiOiAwLFxuICAgICAgICBcImVhcmx5X2Jvb2tpbmdcIjogbnVsbCxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMSxcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIwMDAwLTAwLTAwXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMDoyNToyMC4wMDBaXCIsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMDoyNToyMC4wMDBaXCIsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjogbnVsbCxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiBudWxsXG4gICAgfVxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9lYXJseS86aWQgUFVUIGVhcmx5XG4gKiBAYXBpTmFtZSBQVVRlYXJseVxuICogQGFwaUdyb3VwICBFYXJseSBCb29raW5nXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbiAgICB7XG5cbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwibmJfam91clwiOiAwLFxuICAgICAgICBcImVhcmx5X2Jvb2tpbmdcIjogbnVsbCxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMSxcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIwMDAwLTAwLTAwXCJcbiAgICB9XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiA3LFxuICAgICAgICBcImlkY29udHJhdFwiOiAwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDAsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcIm5iX2pvdXJcIjogMCxcbiAgICAgICAgXCJlYXJseV9ib29raW5nXCI6IG51bGwsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImNhbGN1bF9zdXBwXCI6IDEsXG4gICAgICAgIFwiZGF0ZV9ib29raW5nXCI6IFwiMDAwMC0wMC0wMFwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTA6MjU6MjAuMDAwWlwiLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTA6MjU6MjAuMDAwWlwiLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiIFJhZGlzc29uIEJsdSBIYW1tYW1ldFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IG51bGwsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjogbnVsbFxuICAgIH1cbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2Vhcmx5LzppZCBEZWxldGUgZWFybHlcbiAgICogQGFwaU5hbWUgREVMRVRFZWFybHlcbiAgICogQGFwaUdyb3VwICBFYXJseSBCb29raW5nXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBlYXJseVxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBzdG9wX2hvdGVsXG5cbiAgLy9zdG9wX2hvdGVsXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIHN0b3BfaG90ZWxOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgc3RvcF9ob3RlbE5vdEZvdW5kICA8Y29kZT5zdG9wX2hvdGVsPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcInN0b3BfaG90ZWwgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3RvcF9ob3RlbHMvICBBTEwgc3RvcF9ob3RlbHNcbiAqIEBhcGlOYW1lIEdldHN0b3BfaG90ZWxzXG4gKiBAYXBpR3JvdXAgIHN0b3BfaG90ZWwgXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgc3RvcF9ob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSBJRCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Zyb20gZGF0ZSBkZWJ1dCBzdG9wX2hvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3RvIGRhdGUgZmluIHN0b3BfaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge2FnZW5jZX0gYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IHJvb20gLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gIHtcbiAgICAgICAgXCJpZFwiOiA0MixcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEzLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wOC0xNFwiLFxuICAgICAgICBcImRhdGVfdG9cIjogXCIyMDE4LTA4LTE3XCIsXG4gICAgICAgIFwiYWdlbmNlXCI6IG51bGwsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJPY2VhbmFcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAxM1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6IDQzLFxuICAgICAgICBcImlkaG90ZWxcIjogMCxcbiAgICAgICAgXCJpZGFnZW5jZVwiOiA0LFxuICAgICAgICBcInJvb21pZFwiOiAyNyxcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTEwLTE2XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMTdcIixcbiAgICAgICAgXCJhZ2VuY2VcIjoge1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRlc3QtZG90Y29tXCIsXG4gICAgICAgICAgICBcImlkXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3RlbFwiOiBudWxsLFxuICAgICAgICBcInJvb21cIjoge1xuICAgICAgICAgICAgXCJyb29tbmFtZVwiOiBcIkJ1bmdhbG93IEZhbWlsaWFsXCIsXG4gICAgICAgICAgICBcInJvb21pZFwiOiAyN1xuICAgICAgICB9XG4gICAgfVxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBzdG9wX2hvdGVsTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdG9wX2hvdGVsLzppZCBHRVQgc3RvcF9ob3RlbFxuICogQGFwaU5hbWUgR2V0c3RvcF9ob3RlbFxuICogQGFwaUdyb3VwICBzdG9wX2hvdGVsIFxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBzdG9wX2hvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cblxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSBkYXRlIGRlYnV0IHN0b3BfaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfdG8gZGF0ZSBmaW4gc3RvcF9ob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7YWdlbmNlfSBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gcm9vbSAuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxue1xuICAgIFwiaWRcIjogNDQsXG4gICAgXCJpZGhvdGVsXCI6IFwiMjYwXCIsXG4gICAgXCJpZGFnZW5jZVwiOiBcIjBcIixcbiAgICBcInJvb21pZFwiOiBcIjJcIixcbiAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMDUtMDNcIixcbiAgICBcImRhdGVfdG9cIjogXCIyMDE4LTEwLTA1XCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTE2VDA3OjQ4OjU3LjQ1N1pcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMTZUMDc6NDg6NTcuNDU3WlwiXG59XG5cbiAqXG4gKiBAYXBpVXNlICBzdG9wX2hvdGVsTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvc3RvcF9ob3RlbC8gUE9TVCBzdG9wX2hvdGVsXG4gKiBAYXBpTmFtZSBQT1NUc3RvcF9ob3RlbFxuICogQGFwaUdyb3VwICBzdG9wX2hvdGVsIFxuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG5cbiAgICBcImlkaG90ZWxcIjogXCIyNjBcIixcbiAgICBcImlkYWdlbmNlXCI6IFwiMFwiLFxuICAgIFwicm9vbWlkXCI6IFwiMlwiLFxuICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wNS0wM1wiLFxuICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMDVcIlxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICB7XG4gICAgXCJpZFwiOiA0NCxcbiAgICBcImlkaG90ZWxcIjogXCIyNjBcIixcbiAgICBcImlkYWdlbmNlXCI6IFwiMFwiLFxuICAgIFwicm9vbWlkXCI6IFwiMlwiLFxuICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wNS0wM1wiLFxuICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMDVcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMTZUMDc6NDg6NTcuNDU3WlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0xNlQwNzo0ODo1Ny40NTdaXCJcbn1cbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvc3RvcF9ob3RlbC86aWQgUFVUIHN0b3BfaG90ZWxcbiAqIEBhcGlOYW1lIFBVVHN0b3BfaG90ZWxcbiAqIEBhcGlHcm91cCAgc3RvcF9ob3RlbCBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xuICB7XG5cbiAgICBcImlkaG90ZWxcIjogXCIyNjBcIixcbiAgICBcImlkYWdlbmNlXCI6IFwiMFwiLFxuICAgIFwicm9vbWlkXCI6IFwiMlwiLFxuICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wNS0wM1wiLFxuICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMDVcIlxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiAgICB7XG4gICAgXCJpZFwiOiA0NCxcbiAgICBcImlkaG90ZWxcIjogXCIyNjBcIixcbiAgICBcImlkYWdlbmNlXCI6IFwiMFwiLFxuICAgIFwicm9vbWlkXCI6IFwiMlwiLFxuICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wNS0wM1wiLFxuICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMDVcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMTZUMDc6NDg6NTcuNDU3WlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0xNlQwNzo0ODo1Ny40NTdaXCJcbn1cbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL3N0b3BfaG90ZWwvOmlkIERlbGV0ZSBzdG9wX2hvdGVsXG4gICAqIEBhcGlOYW1lIERFTEVURXN0b3BfaG90ZWxcbiAgICogQGFwaUdyb3VwICBzdG9wX2hvdGVsXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBzdG9wX2hvdGVsXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIGNvbmRpdGlvbnNfYW5udWxhdGlvblxuXG4gIC8vY29uZGl0aW9uc19hbm51bGF0aW9uXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIGNvbmRpdGlvbnNfYW5udWxhdGlvbk5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBjb25kaXRpb25zX2FubnVsYXRpb25Ob3RGb3VuZCAgPGNvZGU+Y29uZGl0aW9uc19hbm51bGF0aW9uPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcImNvbmRpdGlvbnNfYW5udWxhdGlvbiBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9jb25kaXRpb25zX2FubnVsYXRpb25zLzppZHBlcmlvZCAgQUxMIGNvbmRpdGlvbnNfYW5udWxhdGlvbnNcbiAqIEBhcGlOYW1lIEdldGNvbmRpdGlvbnNfYW5udWxhdGlvbnNcbiAqIEBhcGlHcm91cCAgY29uZGl0aW9uc19hbm51bGF0aW9uIFxuICpcblxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHBlcmlvZCAgICAgICAgdW5pcXVlIElEUGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGNvbmRpdGlvbnNfYW5udWxhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCBJRCBhcnJhbmdlbWVudHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGNvbnRyYXQgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdmFudCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3V0X3NhaXNvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzZWpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbm9zaG93IDAvMSAuIFxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJudWl0X25zIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1cl9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYnJlX251aXQgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbC5cbiAqIEBhcGlTdWNjZXNzIHthcnJhbmdlbWVudHN9IGFycmFuZ2VtZW50cy5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyMjUsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDMxMSxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxNDEwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJuYnJlX251aXRcIjogMCxcbiAgICAgICAgXCJhdmFudFwiOiAxLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgICAgIFwic2Vqb3VyXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub3Nob3dcIjogMSxcbiAgICAgICAgXCJuYm51aXRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnNcIjogNDUsXG4gICAgICAgIFwicG91cmNlbnRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnVpdFwiOiAxMDAsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJNRU5BUkFcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAyMjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiBudWxsXG4gICAgfSxcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgY29uZGl0aW9uc19hbm51bGF0aW9uTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9jb25kaXRpb25zX2FubnVsYXRpb24vOmlkIEdFVCBjb25kaXRpb25zX2FubnVsYXRpb25cbiAqIEBhcGlOYW1lIEdldGNvbmRpdGlvbnNfYW5udWxhdGlvblxuICogQGFwaUdyb3VwICBjb25kaXRpb25zX2FubnVsYXRpb24gXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBjb25kaXRpb25zX2FubnVsYXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgSUQgYXJyYW5nZW1lbnRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGhvdGVsSWQgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXZhbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG91dF9zYWlzb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc2Vqb3VyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5vc2hvdyAwLzEgLiBcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5ibnVpdF9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfbnMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfbnMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX251aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X251aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJyZV9udWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nZW1lbnRzfSBhcnJhbmdlbWVudHMuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gIHtcbiAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyMjUsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDMxMSxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxNDEwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJuYnJlX251aXRcIjogMCxcbiAgICAgICAgXCJhdmFudFwiOiAxLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgICAgIFwic2Vqb3VyXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub3Nob3dcIjogMSxcbiAgICAgICAgXCJuYm51aXRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnNcIjogNDUsXG4gICAgICAgIFwicG91cmNlbnRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnVpdFwiOiAxMDBcbiAgICB9LFxuXG4gKlxuICogQGFwaVVzZSAgY29uZGl0aW9uc19hbm51bGF0aW9uTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvY29uZGl0aW9uc19hbm51bGF0aW9uLyBQT1NUIGNvbmRpdGlvbnNfYW5udWxhdGlvblxuICogQGFwaU5hbWUgUE9TVGNvbmRpdGlvbnNfYW5udWxhdGlvblxuICogQGFwaUdyb3VwICBjb25kaXRpb25zX2FubnVsYXRpb24gXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbiAge1xuICAgICBcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcImhvdGVsSWRcIjogMjI1LFxuICAgICAgICBcImlkY29udHJhdFwiOiAzMTEsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTQxMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAwLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwibmJyZV9udWl0XCI6IDAsXG4gICAgICAgIFwiYXZhbnRcIjogMSxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcInNlam91clwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibm9zaG93XCI6IDEsXG4gICAgICAgIFwibmJudWl0X25zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX25zXCI6IDQ1LFxuICAgICAgICBcInBvdXJjZW50X25zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX251aXRcIjogMTAwXG4gICAgfVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gIHtcbiAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyMjUsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDMxMSxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxNDEwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJuYnJlX251aXRcIjogMCxcbiAgICAgICAgXCJhdmFudFwiOiAxLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgICAgIFwic2Vqb3VyXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub3Nob3dcIjogMSxcbiAgICAgICAgXCJuYm51aXRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnNcIjogNDUsXG4gICAgICAgIFwicG91cmNlbnRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnVpdFwiOiAxMDAsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJNRU5BUkFcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAyMjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiBudWxsXG4gICAgfVxuXHRdXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2NvbmRpdGlvbnNfYW5udWxhdGlvbi86aWQgUFVUIGNvbmRpdGlvbnNfYW5udWxhdGlvblxuICogQGFwaU5hbWUgUFVUY29uZGl0aW9uc19hbm51bGF0aW9uXG4gKiBAYXBpR3JvdXAgIGNvbmRpdGlvbnNfYW5udWxhdGlvbiBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xuICB7XG5cbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcImhvdGVsSWRcIjogMjI1LFxuICAgICAgICBcImlkY29udHJhdFwiOiAzMTEsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTQxMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAwLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwibmJyZV9udWl0XCI6IDAsXG4gICAgICAgIFwiYXZhbnRcIjogMSxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcInNlam91clwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibm9zaG93XCI6IDEsXG4gICAgICAgIFwibmJudWl0X25zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX25zXCI6IDQ1LFxuICAgICAgICBcInBvdXJjZW50X25zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX251aXRcIjogMTAwXG4gICAgICAgXG4gICAgfVxuICAgICBcbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG4gICAge1xuICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJob3RlbElkXCI6IDIyNSxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMzExLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDE0MTAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcIm5icmVfbnVpdFwiOiAwLFxuICAgICAgICBcImF2YW50XCI6IDEsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJzZWpvdXJcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vc2hvd1wiOiAxLFxuICAgICAgICBcIm5ibnVpdF9uc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9uc1wiOiA0NSxcbiAgICAgICAgXCJwb3VyY2VudF9uc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9udWl0XCI6IDEwMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk1FTkFSQVwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDIyNVxuICAgICAgICB9LFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IG51bGxcbiAgICB9XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9jb25kaXRpb25zX2FubnVsYXRpb24vOmlkIERlbGV0ZSBjb25kaXRpb25zX2FubnVsYXRpb25cbiAgICogQGFwaU5hbWUgREVMRVRFY29uZGl0aW9uc19hbm51bGF0aW9uXG4gICAqIEBhcGlHcm91cCAgY29uZGl0aW9uc19hbm51bGF0aW9uXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBjb25kaXRpb25zX2FubnVsYXRpb25cbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vY3J1ZGUgYXJyX3RhcmlmXG5cbiAgLy9zb3VoaXItQ0hBQkFBTi0xMy0wMi0yMDIwIGFwaS1nZXQgdm91Y2hlclxuXG4gIC8vYXJyX3RhcmlmXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIGFycl90YXJpZk5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBhcnJfdGFyaWZOb3RGb3VuZCAgPGNvZGU+YXJyX3RhcmlmPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcImFycl90YXJpZiBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9hcnJfdGFyaWZzLzppZHBlcmlvZCAgQUxMIGFycl90YXJpZnNcbiAqIEBhcGlOYW1lIEdldGFycl90YXJpZnNcbiAqIEBhcGlHcm91cCAgYXJyX3RhcmlmIFxuICpcblxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHBlcmlvZCAgICAgICAgdW5pcXVlIElEUGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJydGFyaWZpZCB1bmlxdWUgSUQgYXJyX3RhcmlmIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGhvdGVsSWQgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgSUQgYXJyYW5nZW1lbnRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHR5cGVfY2FsY3VsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gcm9vbS5cbiAqIEBhcGlTdWNjZXNzIHthcnJhbmdlbWVudHN9IGFycmFuZ2VtZW50cy5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuIHtcbiAgICAgICAgXCJhcnJ0YXJpZmlkXCI6IDEsXG4gICAgICAgIFwiYXJyaWRcIjogNyxcbiAgICAgICAgXCJob3RlbElkXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogNzMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9uZSBSZXNvcnQgTW9uYXN0aXJcIixcbiAgICAgICAgICAgIFwiaG90ZWxJZFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJBbGwgSW5jbHVzaXZlXCIsXG4gICAgICAgICAgICBcImFycklkXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IG51bGxcbiAgICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBhcnJfdGFyaWZOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2Fycl90YXJpZi86YXJydGFyaWZpZCBHRVQgYXJyX3RhcmlmXG4gKiBAYXBpTmFtZSBHZXRhcnJfdGFyaWZcbiAqIEBhcGlHcm91cCAgYXJyX3RhcmlmIFxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGFycnRhcmlmaWQgICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycnRhcmlmaWQgdW5pcXVlIElEIGFycl90YXJpZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgSUQgcm9vbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbElkIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIElEIGFycmFuZ2VtZW50cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAuIFxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0eXBlX2NhbGN1bCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IHJvb20uXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nZW1lbnRzfSBhcnJhbmdlbWVudHMuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICAgICAgIFwiYXJydGFyaWZpZFwiOiAxLFxuICAgICAgICBcImFycmlkXCI6IDcsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDczLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJPbmUgUmVzb3J0IE1vbmFzdGlyXCIsXG4gICAgICAgICAgICBcImhvdGVsSWRcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IHtcbiAgICAgICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiQWxsIEluY2x1c2l2ZVwiLFxuICAgICAgICAgICAgXCJhcnJJZFwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiBudWxsXG4gICAgfSxcblxuICpcbiAqIEBhcGlVc2UgIGFycl90YXJpZk5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2Fycl90YXJpZi8gUE9TVCBhcnJfdGFyaWZcbiAqIEBhcGlOYW1lIFBPU1RhcnJfdGFyaWZcbiAqIEBhcGlHcm91cCAgYXJyX3RhcmlmIFxuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG4gXG4gICAgICAgIFwiYXJyaWRcIjogNyxcbiAgICAgICAgXCJob3RlbElkXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogNzMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMFxuICAgIH0sXG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbntcbiAgICAgICAgXCJhcnJ0YXJpZmlkXCI6IDEsXG4gICAgICAgIFwiYXJyaWRcIjogNyxcbiAgICAgICAgXCJob3RlbElkXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogNzMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9uZSBSZXNvcnQgTW9uYXN0aXJcIixcbiAgICAgICAgICAgIFwiaG90ZWxJZFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJBbGwgSW5jbHVzaXZlXCIsXG4gICAgICAgICAgICBcImFycklkXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IG51bGxcbiAgICB9LFxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9hcnJfdGFyaWYvOmFycnRhcmlmaWQgUFVUIGFycl90YXJpZlxuICogQGFwaU5hbWUgUFVUYXJyX3RhcmlmXG4gKiBAYXBpR3JvdXAgIGFycl90YXJpZiBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gYXJydGFyaWZpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG4gICAgICAgIFwiYXJyaWRcIjogNyxcbiAgICAgICAgXCJob3RlbElkXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogNzMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMFxuICAgIH0sXG4gICAgIFxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiAgIHtcbiAgICAgICAgXCJhcnJ0YXJpZmlkXCI6IDEsXG4gICAgICAgIFwiYXJyaWRcIjogNyxcbiAgICAgICAgXCJob3RlbElkXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogNzMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9uZSBSZXNvcnQgTW9uYXN0aXJcIixcbiAgICAgICAgICAgIFwiaG90ZWxJZFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJBbGwgSW5jbHVzaXZlXCIsXG4gICAgICAgICAgICBcImFycklkXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IG51bGxcbiAgICB9LFxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvYXJyX3RhcmlmLzphcnJ0YXJpZmlkIERlbGV0ZSBhcnJfdGFyaWZcbiAgICogQGFwaU5hbWUgREVMRVRFYXJyX3RhcmlmXG4gICAqIEBhcGlHcm91cCAgYXJyX3RhcmlmXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhcnJ0YXJpZmlkIGlkIGFycl90YXJpZlxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBzdXBwbGVtZW50XG5cbiAgLy9zdXBwbGVtZW50XG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIHN1cHBsZW1lbnROb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgc3VwcGxlbWVudE5vdEZvdW5kICA8Y29kZT5zdXBwbGVtZW50PC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcInN1cHBsZW1lbnQgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcGxlbWVudHMvOmlkcGVyaW9kICBBTEwgc3VwcGxlbWVudHNcbiAqIEBhcGlOYW1lIEdldHN1cHBsZW1lbnRzXG4gKiBAYXBpR3JvdXAgIHN1cHBsZW1lbnQgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRob3RlbCAgICAgICAgdW5pcXVlIElEaG90ZWwuXG4gKiBAYXBpUGFyYW0ge3Jvb21pZH0gcm9vbWlkICAgICAgICB1bmlxdWUgcm9vbS5cbiAqIEBhcGlQYXJhbSB7U3RyaW5nfSBub20gICAgICAgbm9tLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3VwcGlkIHVuaXF1ZSBJRCBzdXBwbGVtZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHR5cGVfY2FsY3VsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdXNfc2Fpc29uIDAvMS5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG57XG4gICAgICAgIHtcbiAgICAgICAgXCJzdXBwaWRcIjogNDk1OCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiA2MjcyLFxuICAgICAgICBcImlkaG90ZWxcIjogMjMyLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAyNCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogNSxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDYsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub21cIjogXCJWdWUgTWVyXCIsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIkxBIENJR0FMRVwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDIzMlxuICAgICAgICB9XG4gICAgfVxuICAgXG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIHN1cHBsZW1lbnROb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL3N1cHBsZW1lbnQvOnN1cHBpZCBHRVQgc3VwcGxlbWVudFxuICogQGFwaU5hbWUgR2V0c3VwcGxlbWVudFxuICogQGFwaUdyb3VwICBzdXBwbGVtZW50IFxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRob3RlbCAgICAgICAgdW5pcXVlIElEaG90ZWwuXG4gKiBAYXBpUGFyYW0ge3Jvb21pZH0gcm9vbWlkICAgICAgICB1bmlxdWUgcm9vbS5cbiAqIEBhcGlQYXJhbSB7U3RyaW5nfSBub20gICAgICAgbm9tLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3VwcGlkIHVuaXF1ZSBJRCBzdXBwbGVtZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHR5cGVfY2FsY3VsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdXNfc2Fpc29uIDAvMS5cblxuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxue1xuICAgICAgICBcInN1cHBpZFwiOiAzMCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMTMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzNCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMixcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub21cIjogXCJWdWUgTWVyXCIsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMFxuICAgIH0sXG5cbiAqXG4gKiBAYXBpVXNlICBzdXBwbGVtZW50Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvc3VwcGxlbWVudC8gUE9TVCBzdXBwbGVtZW50XG4gKiBAYXBpTmFtZSBQT1NUc3VwcGxlbWVudFxuICogQGFwaUdyb3VwICBzdXBwbGVtZW50IFxuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTEzLFxuICAgICAgICBcImlkaG90ZWxcIjogMzQsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDIsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiVnVlIE1lclwiLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDBcbiAgICB9LFxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG57XG4gICAgICAgIFwic3VwcGlkXCI6IDMwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDExMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDM0LFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAyLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vbVwiOiBcIlZ1ZSBNZXJcIixcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcImlkY29udHJhdFwiOiAwXG4gICAgfSxcbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvc3VwcGxlbWVudC86c3VwcGlkIFBVVCBzdXBwbGVtZW50XG4gKiBAYXBpTmFtZSBQVVRzdXBwbGVtZW50XG4gKiBAYXBpR3JvdXAgIHN1cHBsZW1lbnQgXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHN1cHBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG5cbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMTMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzNCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMixcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub21cIjogXCJWdWUgTWVyXCIsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMFxuICAgIH0sXG4gICAgIFxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiB7XG4gICAgICAgIFwic3VwcGlkXCI6IDMwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDExMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDM0LFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAyLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vbVwiOiBcIlZ1ZSBNZXJcIixcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcImlkY29udHJhdFwiOiAwXG4gICAgfSxcbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL3N1cHBsZW1lbnQvOnN1cHBpZCBEZWxldGUgc3VwcGxlbWVudFxuICAgKiBAYXBpTmFtZSBERUxFVEVzdXBwbGVtZW50XG4gICAqIEBhcGlHcm91cCAgc3VwcGxlbWVudFxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gc3VwcGlkIGlkIHN1cHBsZW1lbnRcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vY3J1ZGUgc3VwcF9qb3VyXG5cbiAgLy9zdXBwX2pvdXJcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgc3VwcF9qb3VyTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIHN1cHBfam91ck5vdEZvdW5kICA8Y29kZT5zdXBwX2pvdXI8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICogQGFwaURlc2NyaXB0aW9uIFN1cHBsw6ltZW50IEpvdXJcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwic3VwcF9qb3VyIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL3N1cHBfam91cnMvOmlkcGVyaW9kICBBTEwgc3VwcF9qb3Vyc1xuICogQGFwaU5hbWUgR2V0c3VwcF9qb3Vyc1xuICogQGFwaUdyb3VwICBzdXBwX2pvdXIgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwaWQgdW5pcXVlIElEIHN1cHBfam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3N1cHAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZmluIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdHlwZV9jYWxjdWwgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN1cHBfd2Vla2VuZCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3VwcF9zaW5nbGUgdmFsZXVyIHNpbmdsZVxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbntcbiAgICBcIm9ibGlnYXRvaXJlXCI6IFwiMFwiLFxuICAgIFwic3VwcGlkXCI6IDE4NDAsXG4gICAgXCJpZGhvdGVsXCI6IFwiMTAwXCIsXG4gICAgXCJpZHBlcmlvZFwiOiBcIjcwMFwiLFxuICAgIFwibm9tXCI6IFwidGVzdFwiLFxuICAgIFwib3BlcmF0aW9uXCI6IFwiMVwiLFxuICAgIFwidmFsZXVyXCI6IFwiMjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMVwiLFxuICAgIFwiZGF0ZV9zdXBwXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwiZGF0ZV9maW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgXCJtYXJnZV9iXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2JcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9iXCI6IFwiMFwiLFxuICAgIFwibWFyZ2VfY1wiOiBcIjVcIixcbiAgICBcInBvdXJjZW50X2NcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25fY1wiOiBcIjBcIixcbiAgICBcInN1cHBfc2luZ2xlXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfc1wiOiBcIlwiLFxuICAgIFwiam91clwiOiBcIjRcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMjlUMTE6MTY6NTUuNjE1WlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0yOVQxMToxNjo1NS42MTVaXCJcbn0sXG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIHN1cHBfam91ck5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcF9qb3VyLzpzdXBwaWQgR0VUIHN1cHBfam91clxuICogQGFwaU5hbWUgR2V0c3VwcF9qb3VyXG4gKiBAYXBpR3JvdXAgIHN1cHBfam91ciBcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBzdXBwaWQgICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIHVuaXF1ZSBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBqb3VyIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9zdXBwIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2ZpbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHR5cGVfY2FsY3VsIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwX3dlZWtlbmQgMC8xIC5cblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IHJvb20uXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICAgXCJvYmxpZ2F0b2lyZVwiOiBcIjBcIixcbiAgICBcInN1cHBpZFwiOiAxODQwLFxuICAgIFwiaWRob3RlbFwiOiBcIjEwMFwiLFxuICAgIFwiaWRwZXJpb2RcIjogXCI3MDBcIixcbiAgICBcIm5vbVwiOiBcInRlc3RcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjFcIixcbiAgICBcInZhbGV1clwiOiBcIjIwXCIsXG4gICAgXCJwb3VyY2VudFwiOiBcIjFcIixcbiAgICBcImRhdGVfc3VwcFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICBcImRhdGVfZmluXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwibWFyZ2VfYlwiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9iXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfYlwiOiBcIjBcIixcbiAgICBcIm1hcmdlX2NcIjogXCI1XCIsXG4gICAgXCJwb3VyY2VudF9jXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2NcIjogXCIwXCIsXG4gICAgXCJzdXBwX3NpbmdsZVwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X3NcIjogXCJcIixcbiAgICBcImpvdXJcIjogXCI0XCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTI5VDExOjE2OjU1LjYxNVpcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMjlUMTE6MTY6NTUuNjE1WlwiXG59LFxuXG4gKlxuICogQGFwaVVzZSAgc3VwcF9qb3VyTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvc3VwcF9qb3VyLyBQT1NUIHN1cHBfam91clxuICogQGFwaU5hbWUgUE9TVHN1cHBfam91clxuICogQGFwaUdyb3VwICBzdXBwX2pvdXIgXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwiam91clwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwidGVzdFwiLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwic3VwcF93ZWVrZW5kXCI6IDAsXHRcdFxuICAgICAgICBcImx1bmRpXCI6IDAsIC8vc2kgc3VwcF93ZWVrZW5kPTEmJiBsdW5kaT09MSA9PmpvdXI9Mi5cbiAgICAgICAgXCJtYXJkaVwiOiAwLCAvL3NpIHN1cHBfd2Vla2VuZD0xJiYgbWFyZGk9PTEgPT5qb3VyPTMuXG4gICAgICAgIFwibWVyY3JlZGlcIjogMCwgLy9zaSBzdXBwX3dlZWtlbmQ9MSAmJiBtZXJjcmVkaT09MSA9PmpvdXI9NC5cbiAgICAgICAgXCJqZXVkaVwiOiAwLCAvL3NpIHN1cHBfd2Vla2VuZD0xICYmIGpldWRpPT0xID0+am91cj01LlxuICAgICAgICBcInZlbmRyZWRpXCI6IDAsIC8vc2kgc3VwcF93ZWVrZW5kPTEgJiYgdmVuZHJlZGk9PTEgPT5qb3VyPTYuXG4gICAgICAgIFwic2FtZWRpXCI6IDAsIC8vIHNpIHN1cHBfd2Vla2VuZD0xICYmIHNhbWVkaT09MSA9PmpvdXI9Ny5cbiAgICAgICAgXCJkaW1hbmNoZVwiOiAwLCAvL3NpIHN1cHBfd2Vla2VuZD0xICYmIGRpbWFuY2hlPT0xID0+am91cj0xLlxuICAgICAgICBcInN1dXBfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuXG5cbn1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuIFxue1xuICAgIFwib2JsaWdhdG9pcmVcIjogXCIwXCIsXG4gICAgXCJzdXBwaWRcIjogMTg0MCxcbiAgICBcImlkaG90ZWxcIjogXCIxMDBcIixcbiAgICBcImlkcGVyaW9kXCI6IFwiNzAwXCIsXG4gICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIxXCIsXG4gICAgXCJ2YWxldXJcIjogXCIyMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIxXCIsXG4gICAgXCJkYXRlX3N1cHBcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgXCJkYXRlX2ZpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICBcIm1hcmdlX2JcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25fYlwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X2JcIjogXCIwXCIsXG4gICAgXCJtYXJnZV9jXCI6IFwiNVwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwic3VwcF9zaW5nbGVcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9zXCI6IFwiXCIsXG4gICAgXCJqb3VyXCI6IFwiNFwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yOVQxMToxNjo1NS42MTVaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTI5VDExOjE2OjU1LjYxNVpcIlxufVxuXG5dXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3N1cHBfam91ci86c3VwcGlkIFBVVCBzdXBwX2pvdXJcbiAqIEBhcGlOYW1lIFBVVHN1cHBfam91clxuICogQGFwaUdyb3VwICBzdXBwX2pvdXIgXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHN1cHBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG5cbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJqb3VyXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJzdXVwX3NpbmdsZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICBcblxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiAge1xuICAgIFwib2JsaWdhdG9pcmVcIjogXCIwXCIsXG4gICAgXCJzdXBwaWRcIjogMTg0MCxcbiAgICBcImlkaG90ZWxcIjogXCIxMDBcIixcbiAgICBcImlkcGVyaW9kXCI6IFwiNzAwXCIsXG4gICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIxXCIsXG4gICAgXCJ2YWxldXJcIjogXCIyMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIxXCIsXG4gICAgXCJkYXRlX3N1cHBcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgXCJkYXRlX2ZpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICBcIm1hcmdlX2JcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25fYlwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X2JcIjogXCIwXCIsXG4gICAgXCJtYXJnZV9jXCI6IFwiNVwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwic3VwcF9zaW5nbGVcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9zXCI6IFwiXCIsXG4gICAgXCJqb3VyXCI6IFwiNFwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yOVQxMToxNjo1NS42MTVaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTI5VDExOjE2OjU1LjYxNVpcIlxufVxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvc3VwcF9qb3VyLzpzdXBwaWQgRGVsZXRlIHN1cHBfam91clxuICAgKiBAYXBpTmFtZSBERUxFVEVzdXBwX2pvdXJcbiAgICogQGFwaUdyb3VwICBzdXBwX2pvdXJcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IHN1cHBpZCBpZCBzdXBwX2pvdXJcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vY3J1ZGUgc3VwcF9qb3VyX2Rpbm5lclxuXG4gIC8vc3VwcF9qb3VyX2Rpbm5lclxuICAvKipcbiAgICogQGFwaURlZmluZSBzdXBwX2pvdXJfZGlubmVyTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIHN1cHBfam91cl9kaW5uZXJOb3RGb3VuZCAgPGNvZGU+c3VwcF9qb3VyX2Rpbm5lcjwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKiBAYXBpRGVzY3JpcHRpb24gU3VwcGzDqW1lbnQgSm91clxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJzdXBwX2pvdXJfZGlubmVyIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL3N1cHBfam91cl9kaW5uZXJzLzppZHBlcmlvZCAgQUxMIHN1cHBfam91cl9kaW5uZXJzXG4gKiBAYXBpTmFtZSBHZXRzdXBwX2pvdXJfZGlubmVyc1xuICogQGFwaUdyb3VwICBzdXBwX2pvdXJfZGlubmVyIFxuICpcblxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHBlcmlvZCAgICAgICAgdW5pcXVlIElEUGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3VwcGlkIHVuaXF1ZSBJRCBzdXBwX2pvdXJfZGlubmVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3N1cHAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZmluIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb2JsaWdhdG9pcmUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbF9lbmYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3VwcF9zaW5nbGUgdmFsZXVyIHNpbmdsZVxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsIC5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4ge1xuICAgICAgICBcInN1cHBpZFwiOiAyLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDMzODQsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxMDIsXG4gICAgICAgIFwiam91clwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAxMTAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJvYmxpZ2F0b2lyZVwiOiAwLFxuICAgICAgICBcIm5vbVwiOiBcIkRpbm5lciBHYWxhXCIsXG4gICAgICAgIFwiZGF0ZV9zdXBwXCI6IFwiMjAxNy0xMi0zMVwiLFxuICAgICAgICBcImRhdGVfZmluXCI6IFwiMjAxNy0xMi0zMVwiLFxuICAgICAgICBcIm1hcmdlX2JcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAxNCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJzdXBwX3NpbmdsZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxfZW5mXCI6IDUwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiIFpvZGlhY1wiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDEwMlxuICAgICAgICB9XG4gICAgfSxcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgc3VwcF9qb3VyX2Rpbm5lck5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcF9qb3VyX2Rpbm5lci86c3VwcGlkIEdFVCBzdXBwX2pvdXJfZGlubmVyXG4gKiBAYXBpTmFtZSBHZXRzdXBwX2pvdXJfZGlubmVyXG4gKiBAYXBpR3JvdXAgIHN1cHBfam91cl9kaW5uZXIgXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwaWQgdW5pcXVlIElEIHN1cHBfam91cl9kaW5uZXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfc3VwcCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9maW4gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvYmxpZ2F0b2lyZSAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwX3NpbmdsZSB2YWxldXIgc2luZ2xlXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgLlxuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4ge1xuICAgICAgICBcInN1cHBpZFwiOiAyLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDMzODQsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxMDIsXG4gICAgICAgIFwiam91clwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAxMTAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJvYmxpZ2F0b2lyZVwiOiAwLFxuICAgICAgICBcIm5vbVwiOiBcIkRpbm5lciBHYWxhXCIsXG4gICAgICAgIFwiZGF0ZV9zdXBwXCI6IFwiMjAxNy0xMi0zMVwiLFxuICAgICAgICBcImRhdGVfZmluXCI6IFwiMjAxNy0xMi0zMVwiLFxuICAgICAgICBcIm1hcmdlX2JcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAxNCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJzdXBwX3NpbmdsZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxfZW5mXCI6IDUwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiIFpvZGlhY1wiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDEwMlxuICAgICAgICB9XG4gICAgfVxuXG4gKlxuICogQGFwaVVzZSAgc3VwcF9qb3VyX2Rpbm5lck5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3N1cHBfam91cl9kaW5uZXIvIFBPU1Qgc3VwcF9qb3VyX2Rpbm5lclxuICogQGFwaU5hbWUgUE9TVHN1cHBfam91cl9kaW5uZXJcbiAqIEBhcGlHcm91cCAgc3VwcF9qb3VyX2Rpbm5lciBcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4ge1xuXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMzM4NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEwMixcbiAgICAgICAgXCJqb3VyXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDExMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm9ibGlnYXRvaXJlXCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiRGlubmVyIEdhbGFcIixcbiAgICAgICAgXCJkYXRlX3N1cHBcIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9maW5cIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDE0LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInN1cHBfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbF9lbmZcIjogNTBcbiAgICB9XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiBcbiB7XG4gICAgICAgIFwic3VwcGlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMzM4NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEwMixcbiAgICAgICAgXCJqb3VyXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDExMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm9ibGlnYXRvaXJlXCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiRGlubmVyIEdhbGFcIixcbiAgICAgICAgXCJkYXRlX3N1cHBcIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9maW5cIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDE0LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInN1cHBfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbF9lbmZcIjogNTBcbn1cbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvc3VwcF9qb3VyX2Rpbm5lci86c3VwcGlkIFBVVCBzdXBwX2pvdXJfZGlubmVyXG4gKiBAYXBpTmFtZSBQVVRzdXBwX2pvdXJfZGlubmVyXG4gKiBAYXBpR3JvdXAgIHN1cHBfam91cl9kaW5uZXIgXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHN1cHBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4ge1xuXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMzM4NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEwMixcbiAgICAgICAgXCJqb3VyXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDExMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm9ibGlnYXRvaXJlXCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiRGlubmVyIEdhbGFcIixcbiAgICAgICAgXCJkYXRlX3N1cHBcIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9maW5cIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDE0LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInN1cHBfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbF9lbmZcIjogNTBcbiAgICB9XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xuICAge1xuICAgICAgICBcInN1cHBpZFwiOiAyLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDMzODQsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxMDIsXG4gICAgICAgIFwiam91clwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAxMTAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJvYmxpZ2F0b2lyZVwiOiAwLFxuICAgICAgICBcIm5vbVwiOiBcIkRpbm5lciBHYWxhXCIsXG4gICAgICAgIFwiZGF0ZV9zdXBwXCI6IFwiMjAxNy0xMi0zMVwiLFxuICAgICAgICBcImRhdGVfZmluXCI6IFwiMjAxNy0xMi0zMVwiLFxuICAgICAgICBcIm1hcmdlX2JcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAxNCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJzdXBwX3NpbmdsZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxfZW5mXCI6IDUwXG5cblxufVxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvc3VwcF9qb3VyX2Rpbm5lci86c3VwcGlkIERlbGV0ZSBzdXBwX2pvdXJfZGlubmVyXG4gICAqIEBhcGlOYW1lIERFTEVURXN1cHBfam91cl9kaW5uZXJcbiAgICogQGFwaUdyb3VwICBzdXBwX2pvdXJfZGlubmVyXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBzdXBwaWQgaWQgc3VwcF9qb3VyX2Rpbm5lclxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBuYnJlX2NoYW1icmVcblxuICAvL25icmVfY2hhbWJyZVxuICAvKipcbiAgICogQGFwaURlZmluZSBuYnJlX2NoYW1icmVOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgbmJyZV9jaGFtYnJlTm90Rm91bmQgIDxjb2RlPm5icmVfY2hhbWJyZTwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJuYnJlX2NoYW1icmUgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvbmJyZV9jaGFtYnJlcy86aWRwZXJpb2QgIEFMTCBuYnJlX2NoYW1icmVzXG4gKiBAYXBpTmFtZSBHZXRuYnJlX2NoYW1icmVzXG4gKiBAYXBpR3JvdXAgIG5icmVfY2hhbWJyZSBcbiAqXG5cbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRwZXJpb2QgICAgICAgIHVuaXF1ZSBJRFBlcmlvZC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkbmJyZSB1bmlxdWUgSUQgbmJyZV9jaGFtYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIHVuaXF1ZSBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJyZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGRlbGF5IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBiZWdpbiAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZW5kIC5cbiAqIEBhcGlTdWNjZXNzIHtyb29tfSByb29tLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4ge1xuICAgICAgICBcImlkbmJyZVwiOiAyMyxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMDgsXG4gICAgICAgIFwibmJyZVwiOiA1LFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImRlbGF5XCI6IDAsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcInJvb21cIjoge1xuICAgICAgICAgICAgXCJyb29tbmFtZVwiOiBcIkNoYW1icmUgRG91YmxlXCIsXG4gICAgICAgICAgICBcInJvb21pZFwiOiAyXG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBuYnJlX2NoYW1icmVOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL25icmVfY2hhbWJyZS86aWRuYnJlIEdFVCBuYnJlX2NoYW1icmVcbiAqIEBhcGlOYW1lIEdldG5icmVfY2hhbWJyZVxuICogQGFwaUdyb3VwICBuYnJlX2NoYW1icmUgXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRuYnJlICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZG5icmUgdW5pcXVlIElEIG5icmVfY2hhbWJyZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZG5icmUgdW5pcXVlIElEIG5icmVfY2hhbWJyZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgSUQgcm9vbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGRlbGF5IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBiZWdpbiAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZW5kIC5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuIHtcbiAgICAgICAgXCJpZG5icmVcIjogMjMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTA4LFxuICAgICAgICBcIm5icmVcIjogNSxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJkZWxheVwiOiAwLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIlxuICAgIH0sXG5cbiAqXG4gKiBAYXBpVXNlICBuYnJlX2NoYW1icmVOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9uYnJlX2NoYW1icmUvIFBPU1QgbmJyZV9jaGFtYnJlXG4gKiBAYXBpTmFtZSBQT1NUbmJyZV9jaGFtYnJlXG4gKiBAYXBpR3JvdXAgIG5icmVfY2hhbWJyZSBcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xuIHtcbiAgICAgXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTA4LFxuICAgICAgICBcIm5icmVcIjogNSxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJkZWxheVwiOiAwLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIlxuICAgIH1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICB7XG4gICAgICAgIFwiaWRuYnJlXCI6IDIzLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEwOCxcbiAgICAgICAgXCJuYnJlXCI6IDUsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiZGVsYXlcIjogMCxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCJcbiAgICB9XG5dXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL25icmVfY2hhbWJyZS86aWRuYnJlIFBVVCBuYnJlX2NoYW1icmVcbiAqIEBhcGlOYW1lIFBVVG5icmVfY2hhbWJyZVxuICogQGFwaUdyb3VwICBuYnJlX2NoYW1icmUgXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkbmJyZSAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4ge1xuXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTA4LFxuICAgICAgICBcIm5icmVcIjogNSxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJkZWxheVwiOiAwLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIlxuICAgIH1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG4gICB7XG4gICAgICAgIFwiaWRuYnJlXCI6IDIzLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEwOCxcbiAgICAgICAgXCJuYnJlXCI6IDUsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiZGVsYXlcIjogMCxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCJcbiAgICB9XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9uYnJlX2NoYW1icmUvOmlkbmJyZSBEZWxldGUgbmJyZV9jaGFtYnJlXG4gICAqIEBhcGlOYW1lIERFTEVURW5icmVfY2hhbWJyZVxuICAgKiBAYXBpR3JvdXAgIG5icmVfY2hhbWJyZVxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWRuYnJlIGlkIG5icmVfY2hhbWJyZVxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBzdG9wX3ZlbnRlXG5cbiAgLy9jcnVkZSBzdG9wX3ZlbnRlXG5cbiAgLy9zdG9wX3ZlbnRlXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIHN0b3BfdmVudGVOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgc3RvcF92ZW50ZU5vdEZvdW5kICA8Y29kZT5zdG9wX3ZlbnRlPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcInN0b3BfdmVudGUgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3RvcF92ZW50ZXMvOmlkcGVyaW9kICBBTEwgc3RvcF92ZW50ZXNcbiAqIEBhcGlOYW1lIEdldHN0b3BfdmVudGVzXG4gKiBAYXBpR3JvdXAgIHN0b3BfdmVudGUgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgc3RvcF92ZW50ZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9mcm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3RvIC5cbiAqIEBhcGlTdWNjZXNzIHtyb29tfSByb29tLlxuICogQGFwaVN1Y2Nlc3Mge2FnZW5jZX0gYWdlbmNlLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4ge1xuICAgICAgICBcImlkXCI6IDUwNCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiA2MjYzLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wNi0xNVwiLFxuICAgICAgICBcImRhdGVfdG9cIjogXCIyMDE4LTA2LTE2XCIsXG4gICAgICAgIFwicm9vbVwiOiBudWxsLFxuICAgICAgICBcImFnZW5jZVwiOiBudWxsXG4gICAgfSxcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgc3RvcF92ZW50ZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3RvcF92ZW50ZS86aWQgR0VUIHN0b3BfdmVudGVcbiAqIEBhcGlOYW1lIEdldHN0b3BfdmVudGVcbiAqIEBhcGlHcm91cCAgc3RvcF92ZW50ZSBcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgdW5pcXVlIElELlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIHN0b3BfdmVudGUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElEIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgSUQgcm9vbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSBJRCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byAuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbntcbiAgICAgICAgXCJpZFwiOiA1MDQsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogNjI2MyxcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMDYtMTVcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0wNi0xNlwiXG4gICAgfVxuICpcbiAqIEBhcGlVc2UgIHN0b3BfdmVudGVOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9zdG9wX3ZlbnRlLyBQT1NUIHN0b3BfdmVudGVcbiAqIEBhcGlOYW1lIFBPU1RzdG9wX3ZlbnRlXG4gKiBAYXBpR3JvdXAgIHN0b3BfdmVudGUgXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcbiBcbiAgICAgICAgXCJpZHBlcmlvZFwiOiA2MjYzLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wNi0xNVwiLFxuICAgICAgICBcImRhdGVfdG9cIjogXCIyMDE4LTA2LTE2XCIsXG4gICAgICAgIFwicm9vbVwiOiBudWxsLFxuICAgICAgICBcImFnZW5jZVwiOiBudWxsXG4gICAgfVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG57XG4gICAgICAgIFwiaWRcIjogNTA0LFxuICAgICAgICBcImlkcGVyaW9kXCI6IDYyNjMsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA2LTE1XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMDYtMTZcIlxuICAgIH1cbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvc3RvcF92ZW50ZS86aWQgUFVUIHN0b3BfdmVudGVcbiAqIEBhcGlOYW1lIFBVVHN0b3BfdmVudGVcbiAqIEBhcGlHcm91cCAgc3RvcF92ZW50ZSBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuICAgICAgICBcImlkcGVyaW9kXCI6IDYyNjMsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA2LTE1XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMDYtMTZcIlxuICAgIH1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG4gICB7XG4gICAgICAgIFwiaWRcIjogNTA0LFxuICAgICAgICBcImlkcGVyaW9kXCI6IDYyNjMsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA2LTE1XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMDYtMTZcIixcbiAgICAgICAgXCJyb29tXCI6IG51bGwsXG4gICAgICAgIFwiYWdlbmNlXCI6IG51bGxcbiAgICB9XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9zdG9wX3ZlbnRlLzppZCBEZWxldGUgc3RvcF92ZW50ZVxuICAgKiBAYXBpTmFtZSBERUxFVEVzdG9wX3ZlbnRlXG4gICAqIEBhcGlHcm91cCAgc3RvcF92ZW50ZVxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgaWQgc3RvcF92ZW50ZVxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSB0eXBlX3RhcmlmXG5cbiAgLy90eXBlX3RhcmlmXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIHR5cGVfdGFyaWZOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgdHlwZV90YXJpZk5vdEZvdW5kICA8Y29kZT50eXBlX3RhcmlmPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcInR5cGVfdGFyaWYgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvdHlwZV90YXJpZnMvOmlkcGVyaW9kICBBTEwgdHlwZV90YXJpZnNcbiAqIEBhcGlOYW1lIEdldHR5cGVfdGFyaWZzXG4gKiBAYXBpR3JvdXAgIHR5cGVfdGFyaWYgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0eXBldGFyaWZpZCB1bmlxdWUgSUQgdHlwZV90YXJpZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgSUQgcm9vbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJhbmcgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX3BlcnMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3BlcnMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2FkdWx0cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fYWR1bHRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9lbmYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHR5cGVfY2FsY3VsIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwX3dlZWtlbmRfc2luZ2xlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBsdW5kaSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJkaSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtZXJjcmVkaSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBqZXVkaSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2ZW5kcmVkaSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzYW1lZGkgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZGltYW5jaGUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3MgdmFsZXVyIHNpbmdsZVxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzaW5nbGUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gcm9vbS5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuIHtcbiAgICAgICAgXCJ0eXBldGFyaWZpZFwiOiAxLFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwicmFuZ1wiOiAwLFxuICAgICAgICBcIm1pbl9wZXJzXCI6IDIsXG4gICAgICAgIFwibWF4X3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAwLFxuICAgICAgICBcIm1pbl9lbmZcIjogMCxcbiAgICAgICAgXCJtYXhfZW5mXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcImx1bmRpXCI6IDAsXG4gICAgICAgIFwibWFyZGlcIjogMCxcbiAgICAgICAgXCJtZXJjcmVkaVwiOiAwLFxuICAgICAgICBcImpldWRpXCI6IDAsXG4gICAgICAgIFwidmVuZHJlZGlcIjogMCxcbiAgICAgICAgXCJzYW1lZGlcIjogMCxcbiAgICAgICAgXCJkaW1hbmNoZVwiOiAwLFxuICAgICAgICBcInZhbGV1cl9zXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInNpbmdsZVwiOiAwLFxuICAgICAgICBcInN1cHBfd2Vla2VuZF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9uZSBSZXNvcnQgTW9uYXN0aXJcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiB7XG4gICAgICAgICAgICBcInJvb21uYW1lXCI6IFwiQ2hhbWJyZSBEb3VibGVcIixcbiAgICAgICAgICAgIFwicm9vbWlkXCI6IDJcbiAgICAgICAgfVxuICAgIH0sXG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIHR5cGVfdGFyaWZOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL3R5cGVfdGFyaWYvOnR5cGV0YXJpZmlkIEdFVCB0eXBlX3RhcmlmXG4gKiBAYXBpTmFtZSBHZXR0eXBlX3RhcmlmXG4gKiBAYXBpR3JvdXAgIHR5cGVfdGFyaWYgXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gdHlwZXRhcmlmaWQgICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHR5cGV0YXJpZmlkIHVuaXF1ZSBJRCB0eXBlX3RhcmlmIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcmFuZyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fcGVycyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfcGVycyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWR1bHRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdHlwZV9jYWxjdWwgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN1cHBfd2Vla2VuZF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGx1bmRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1lcmNyZWRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGpldWRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZlbmRyZWRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHNhbWVkaSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBkaW1hbmNoZSAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3MgdmFsZXVyIHNpbmdsZVxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IHJvb20uXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4ge1xuICAgICAgICBcInR5cGV0YXJpZmlkXCI6IDEsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJyYW5nXCI6IDAsXG4gICAgICAgIFwibWluX3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwibHVuZGlcIjogMCxcbiAgICAgICAgXCJtYXJkaVwiOiAwLFxuICAgICAgICBcIm1lcmNyZWRpXCI6IDAsXG4gICAgICAgIFwiamV1ZGlcIjogMCxcbiAgICAgICAgXCJ2ZW5kcmVkaVwiOiAwLFxuICAgICAgICBcInNhbWVkaVwiOiAwLFxuICAgICAgICBcImRpbWFuY2hlXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwic2luZ2xlXCI6IDAsXG4gICAgICAgIFwic3VwcF93ZWVrZW5kX3NpbmdsZVwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IHtcbiAgICAgICAgICAgIFwicm9vbW5hbWVcIjogXCJDaGFtYnJlIERvdWJsZVwiLFxuICAgICAgICAgICAgXCJyb29taWRcIjogMlxuICAgICAgICB9XG4gICAgfSxcblxuICpcbiAqIEBhcGlVc2UgIHR5cGVfdGFyaWZOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC90eXBlX3RhcmlmLyBQT1NUIHR5cGVfdGFyaWZcbiAqIEBhcGlOYW1lIFBPU1R0eXBlX3RhcmlmXG4gKiBAYXBpR3JvdXAgIHR5cGVfdGFyaWYgXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcblxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwicmFuZ1wiOiAwLFxuICAgICAgICBcIm1pbl9wZXJzXCI6IDIsXG4gICAgICAgIFwibWF4X3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAwLFxuICAgICAgICBcIm1pbl9lbmZcIjogMCxcbiAgICAgICAgXCJtYXhfZW5mXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcImx1bmRpXCI6IDAsXG4gICAgICAgIFwibWFyZGlcIjogMCxcbiAgICAgICAgXCJtZXJjcmVkaVwiOiAwLFxuICAgICAgICBcImpldWRpXCI6IDAsXG4gICAgICAgIFwidmVuZHJlZGlcIjogMCxcbiAgICAgICAgXCJzYW1lZGlcIjogMCxcbiAgICAgICAgXCJkaW1hbmNoZVwiOiAwLFxuICAgICAgICBcInZhbGV1cl9zXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInNpbmdsZVwiOiAwLFxuICAgICAgICBcInN1cHBfd2Vla2VuZF9zaW5nbGVcIjogMCxcblxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4ge1xuICAgICAgICBcInR5cGV0YXJpZmlkXCI6IDEsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJyYW5nXCI6IDAsXG4gICAgICAgIFwibWluX3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwibHVuZGlcIjogMCxcbiAgICAgICAgXCJtYXJkaVwiOiAwLFxuICAgICAgICBcIm1lcmNyZWRpXCI6IDAsXG4gICAgICAgIFwiamV1ZGlcIjogMCxcbiAgICAgICAgXCJ2ZW5kcmVkaVwiOiAwLFxuICAgICAgICBcInNhbWVkaVwiOiAwLFxuICAgICAgICBcImRpbWFuY2hlXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwic2luZ2xlXCI6IDAsXG4gICAgICAgIFwic3VwcF93ZWVrZW5kX3NpbmdsZVwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IHtcbiAgICAgICAgICAgIFwicm9vbW5hbWVcIjogXCJDaGFtYnJlIERvdWJsZVwiLFxuICAgICAgICAgICAgXCJyb29taWRcIjogMlxuICAgICAgICB9XG59XG5dXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3R5cGVfdGFyaWYvOnR5cGV0YXJpZmlkIFBVVCB0eXBlX3RhcmlmXG4gKiBAYXBpTmFtZSBQVVR0eXBlX3RhcmlmXG4gKiBAYXBpR3JvdXAgIHR5cGVfdGFyaWYgXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHR5cGV0YXJpZmlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcblxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwicmFuZ1wiOiAwLFxuICAgICAgICBcIm1pbl9wZXJzXCI6IDIsXG4gICAgICAgIFwibWF4X3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAwLFxuICAgICAgICBcIm1pbl9lbmZcIjogMCxcbiAgICAgICAgXCJtYXhfZW5mXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcImx1bmRpXCI6IDAsXG4gICAgICAgIFwibWFyZGlcIjogMCxcbiAgICAgICAgXCJtZXJjcmVkaVwiOiAwLFxuICAgICAgICBcImpldWRpXCI6IDAsXG4gICAgICAgIFwidmVuZHJlZGlcIjogMCxcbiAgICAgICAgXCJzYW1lZGlcIjogMCxcbiAgICAgICAgXCJkaW1hbmNoZVwiOiAwLFxuICAgICAgICBcInZhbGV1cl9zXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInNpbmdsZVwiOiAwLFxuICAgICAgICBcInN1cHBfd2Vla2VuZF9zaW5nbGVcIjogMCxcbiAgICAgfVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiAgIHtcbiAgICAgICAgXCJ0eXBldGFyaWZpZFwiOiAxLFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwicmFuZ1wiOiAwLFxuICAgICAgICBcIm1pbl9wZXJzXCI6IDIsXG4gICAgICAgIFwibWF4X3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAwLFxuICAgICAgICBcIm1pbl9lbmZcIjogMCxcbiAgICAgICAgXCJtYXhfZW5mXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcImx1bmRpXCI6IDAsXG4gICAgICAgIFwibWFyZGlcIjogMCxcbiAgICAgICAgXCJtZXJjcmVkaVwiOiAwLFxuICAgICAgICBcImpldWRpXCI6IDAsXG4gICAgICAgIFwidmVuZHJlZGlcIjogMCxcbiAgICAgICAgXCJzYW1lZGlcIjogMCxcbiAgICAgICAgXCJkaW1hbmNoZVwiOiAwLFxuICAgICAgICBcInZhbGV1cl9zXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInNpbmdsZVwiOiAwLFxuICAgICAgICBcInN1cHBfd2Vla2VuZF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9uZSBSZXNvcnQgTW9uYXN0aXJcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiB7XG4gICAgICAgICAgICBcInJvb21uYW1lXCI6IFwiQ2hhbWJyZSBEb3VibGVcIixcbiAgICAgICAgICAgIFwicm9vbWlkXCI6IDJcbiAgICAgICAgfVxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvdHlwZV90YXJpZi86dHlwZXRhcmlmaWQgRGVsZXRlIHR5cGVfdGFyaWZcbiAgICogQGFwaU5hbWUgREVMRVRFdHlwZV90YXJpZlxuICAgKiBAYXBpR3JvdXAgIHR5cGVfdGFyaWZcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IHR5cGV0YXJpZmlkIGlkIHR5cGVfdGFyaWZcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vcmVkdWN0aW9uX3Nlam91clxuICAvKipcbiAgICogQGFwaURlZmluZSByZWR1Y3Rpb25fc2Vqb3VyTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIHJlZHVjdGlvbl9zZWpvdXJOb3RGb3VuZCAgPGNvZGU+cmVkdWN0aW9uX3Nlam91cjwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJyZWR1Y3Rpb25fc2Vqb3VyIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL3JlZHVjdGlvbl9zZWpvdXJzLzppZHBlcmlvZCAgQUxMIHJlZHVjdGlvbl9zZWpvdXJzXG4gKiBAYXBpTmFtZSBHZXRyZWR1Y3Rpb25fc2Vqb3Vyc1xuICogQGFwaUdyb3VwICByZWR1Y3Rpb25fc2Vqb3VyIFxuICpcblxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHBlcmlvZCAgICAgICAgdW5pcXVlIElEUGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc2Vqb3VyaWQgdW5pcXVlIElEIHJlZHVjdGlvbl9zZWpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3NpbmdsZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19iLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfbnVpdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ2VtZW50fSBhcnJhbmdlbWVudCAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsIC5cblxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiB7XG4gICAgICAgIFwic2Vqb3VyaWRcIjogMjI0MyxcbiAgICAgICAgXCJhcnJpZFwiOiAyLFxuICAgICAgICBcImhvdGVsSWRcIjogMTAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAyLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiA2MTg2LFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiA1LFxuICAgICAgICBcIm1heF9udWl0XCI6IDYsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJDaGljaCBLaGFuXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMTAwXG4gICAgICAgIH0sXHRcdFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IHtcbiAgICAgICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiTG9nZW1lbnQgUGV0aXQgRMOpamV1bmVyXCIsXG4gICAgICAgICAgICBcImFycmlkXCI6IDJcbiAgICAgICAgfVxufSxcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgcmVkdWN0aW9uX3Nlam91ck5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcmVkdWN0aW9uX3Nlam91ci86c2Vqb3VyaWQgR0VUIHJlZHVjdGlvbl9zZWpvdXJcbiAqIEBhcGlOYW1lIEdldHJlZHVjdGlvbl9zZWpvdXJcbiAqIEBhcGlHcm91cCAgcmVkdWN0aW9uX3Nlam91ciBcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBzZWpvdXJpZCAgICAgICAgdW5pcXVlIElELlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc2Vqb3VyaWQgdW5pcXVlIElEIHJlZHVjdGlvbl9zZWpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3NpbmdsZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19iLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfbnVpdCAwLzEgLlxuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxue1xuICAgIFwic2Vqb3VyaWRcIjogMjI0MyxcbiAgICBcImFycmlkXCI6IFwiMlwiLFxuICAgIFwiaG90ZWxJZFwiOiBcIjEwMFwiLFxuICAgIFwicG91cmNlbnRcIjogMCxcbiAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICBcInZhbGV1clwiOiAyLFxuICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgIFwiaWRwZXJpb2RcIjogNjE4NixcbiAgICBcIm1hcmdlX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgXCJtaW5fbnVpdFwiOiA1LFxuICAgIFwibWF4X251aXRcIjogNlxufVxuXG4gKlxuICogQGFwaVVzZSAgcmVkdWN0aW9uX3Nlam91ck5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3JlZHVjdGlvbl9zZWpvdXIvIFBPU1QgcmVkdWN0aW9uX3Nlam91clxuICogQGFwaU5hbWUgUE9TVHJlZHVjdGlvbl9zZWpvdXJcbiAqIEBhcGlHcm91cCAgcmVkdWN0aW9uX3Nlam91ciBcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xuIFxue1xuXG4gICAgXCJhcnJpZFwiOiBcIjJcIixcbiAgICBcImhvdGVsSWRcIjogXCIxMDBcIixcbiAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgXCJ2YWxldXJcIjogMixcbiAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICBcImlkcGVyaW9kXCI6IDYxODYsXG4gICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgIFwibWluX251aXRcIjogNSxcbiAgICBcIm1heF9udWl0XCI6IDZcbn1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuIFxuICAgIFwic2Vqb3VyaWRcIjogMjI0MyxcbiAgICBcImFycmlkXCI6IFwiMlwiLFxuICAgIFwiaG90ZWxJZFwiOiBcIjEwMFwiLFxuICAgIFwicG91cmNlbnRcIjogMCxcbiAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICBcInZhbGV1clwiOiAyLFxuICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgIFwiaWRwZXJpb2RcIjogNjE4NixcbiAgICBcIm1hcmdlX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgXCJtaW5fbnVpdFwiOiA1LFxuICAgIFwibWF4X251aXRcIjogNixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMjNUMTQ6MjQ6NDMuNTUzWlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0yM1QxNDoyNDo0My41NTNaXCJcbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvcmVkdWN0aW9uX3Nlam91ci86c2Vqb3VyaWQgUFVUIHJlZHVjdGlvbl9zZWpvdXJcbiAqIEBhcGlOYW1lIFBVVHJlZHVjdGlvbl9zZWpvdXJcbiAqIEBhcGlHcm91cCAgcmVkdWN0aW9uX3Nlam91ciBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gc2Vqb3VyaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG4gICAgXCJhcnJpZFwiOiBcIjJcIixcbiAgICBcImhvdGVsSWRcIjogXCIxMDBcIixcbiAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgXCJ2YWxldXJcIjogMixcbiAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICBcImlkcGVyaW9kXCI6IDYxODYsXG4gICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgIFwibWluX251aXRcIjogNSxcbiAgICBcIm1heF9udWl0XCI6IDZcbn1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG57XG4gICAgXCJzZWpvdXJpZFwiOiAyMjQzLFxuICAgIFwiYXJyaWRcIjogXCIyXCIsXG4gICAgXCJob3RlbElkXCI6IFwiMTAwXCIsXG4gICAgXCJwb3VyY2VudFwiOiAwLFxuICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgIFwidmFsZXVyXCI6IDIsXG4gICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgXCJpZHBlcmlvZFwiOiA2MTg2LFxuICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICBcIm1hcmdlX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICBcIm1pbl9udWl0XCI6IDUsXG4gICAgXCJtYXhfbnVpdFwiOiA2LFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yM1QxNDoyNDo0My41NTNaXCJcbn1cbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL3JlZHVjdGlvbl9zZWpvdXIvOnNlam91cmlkIERlbGV0ZSByZWR1Y3Rpb25fc2Vqb3VyXG4gICAqIEBhcGlOYW1lIERFTEVURXJlZHVjdGlvbl9zZWpvdXJcbiAgICogQGFwaUdyb3VwICByZWR1Y3Rpb25fc2Vqb3VyXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBzZWpvdXJpZCBpZCByZWR1Y3Rpb25fc2Vqb3VyXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIHJlZHVjdGlvbl9zZWpvdXJcblxuICAvL3N1cHBsZW1lbnRfc2Vqb3VyXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIHN1cHBsZW1lbnRfc2Vqb3VyTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIHN1cHBsZW1lbnRfc2Vqb3VyTm90Rm91bmQgIDxjb2RlPnN1cHBsZW1lbnRfc2Vqb3VyPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcInN1cHBsZW1lbnRfc2Vqb3VyIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL3N1cHBsZW1lbnRfc2Vqb3VyLzppZHBlcmlvZCAgQUxMIHN1cHBsZW1lbnRfc2Vqb3VyXG4gKiBAYXBpTmFtZSBHZXRzdXBwbGVtZW50X3Nlam91cnNcbiAqIEBhcGlHcm91cCAgc3VwcGxlbWVudF9zZWpvdXIgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzZWpvdXJpZCB1bmlxdWUgSUQgc3VwcGxlbWVudF9zZWpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3NpbmdsZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9udWl0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nZW1lbnR9IGFycmFuZ2VtZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgIC5cblxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbntcbiAgICAgICAgXCJzZWpvdXJpZFwiOiAxLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAzNyxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDIwODAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDIsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIlRoYWxhc3NhIFJlc29ydCAmIEFxdWFwYXJrXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMzdcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiBudWxsXG4gICAgfVxufSxcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgc3VwcGxlbWVudF9zZWpvdXJOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL3N1cHBsZW1lbnRfc2Vqb3VyLzpzZWpvdXJpZCBHRVQgc3VwcGxlbWVudF9zZWpvdXJcbiAqIEBhcGlOYW1lIEdldHN1cHBsZW1lbnRfc2Vqb3VyXG4gKiBAYXBpR3JvdXAgIHN1cHBsZW1lbnRfc2Vqb3VyIFxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHNlam91cmlkICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzZWpvdXJpZCB1bmlxdWUgSUQgc3VwcGxlbWVudF9zZWpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3NpbmdsZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19iLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfbnVpdCAwLzEgLlxuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxue1xuICAgIFwic2Vqb3VyaWRcIjogMSxcbiAgICBcImFycmlkXCI6IDAsXG4gICAgXCJob3RlbElkXCI6IDM3LFxuICAgIFwicG91cmNlbnRcIjogMSxcbiAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICBcInZhbGV1clwiOiAxMCxcbiAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICBcImlkcGVyaW9kXCI6IDIwODAsXG4gICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgIFwibWluX251aXRcIjogMixcbiAgICBcIm1heF9udWl0XCI6IDBcbn1cblxuICpcbiAqIEBhcGlVc2UgIHN1cHBsZW1lbnRfc2Vqb3VyTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvc3VwcGxlbWVudF9zZWpvdXIvIFBPU1Qgc3VwcGxlbWVudF9zZWpvdXJcbiAqIEBhcGlOYW1lIFBPU1RzdXBwbGVtZW50X3Nlam91clxuICogQGFwaUdyb3VwICBzdXBwbGVtZW50X3Nlam91ciBcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xuIFxue1xuXG4gICAgXCJhcnJpZFwiOiBcIjJcIixcbiAgICBcImhvdGVsSWRcIjogXCIxMDBcIixcbiAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgXCJ2YWxldXJcIjogMixcbiAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICBcImlkcGVyaW9kXCI6IDYxODYsXG4gICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgIFwibWluX251aXRcIjogNSxcbiAgICBcIm1heF9udWl0XCI6IDZcbn1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuIFxuXG4gICAgXCJzZWpvdXJpZFwiOiAxLFxuICAgIFwiYXJyaWRcIjogMCxcbiAgICBcImhvdGVsSWRcIjogMzcsXG4gICAgXCJwb3VyY2VudFwiOiAxLFxuICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgIFwidmFsZXVyXCI6IDEwLFxuICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgIFwiaWRwZXJpb2RcIjogMjA4MCxcbiAgICBcIm1hcmdlX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgXCJtaW5fbnVpdFwiOiAyLFxuICAgIFwibWF4X251aXRcIjogMCxcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMjNUMTQ6MjQ6NDMuNTUzWlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0yM1QxNDoyNDo0My41NTNaXCJcbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvc3VwcGxlbWVudF9zZWpvdXIvOnNlam91cmlkIFBVVCBzdXBwbGVtZW50X3Nlam91clxuICogQGFwaU5hbWUgUFVUc3VwcGxlbWVudF9zZWpvdXJcbiAqIEBhcGlHcm91cCAgc3VwcGxlbWVudF9zZWpvdXIgXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHNlam91cmlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcblxuICAgIFwiYXJyaWRcIjogXCIyXCIsXG4gICAgXCJob3RlbElkXCI6IFwiMTAwXCIsXG4gICAgXCJwb3VyY2VudFwiOiAwLFxuICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgIFwidmFsZXVyXCI6IDIsXG4gICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgXCJpZHBlcmlvZFwiOiA2MTg2LFxuICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICBcIm1hcmdlX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICBcIm1pbl9udWl0XCI6IDUsXG4gICAgXCJtYXhfbnVpdFwiOiA2XG59XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xue1xuXG4gICAgXCJzZWpvdXJpZFwiOiAxLFxuICAgIFwiYXJyaWRcIjogMCxcbiAgICBcImhvdGVsSWRcIjogMzcsXG4gICAgXCJwb3VyY2VudFwiOiAxLFxuICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgIFwidmFsZXVyXCI6IDEwLFxuICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgIFwiaWRwZXJpb2RcIjogMjA4MCxcbiAgICBcIm1hcmdlX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgXCJtaW5fbnVpdFwiOiAyLFxuICAgIFwibWF4X251aXRcIjogMCxcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMjNUMTQ6MjQ6NDMuNTUzWlwiXG59XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9zdXBwbGVtZW50X3Nlam91ci86c2Vqb3VyaWQgRGVsZXRlIHN1cHBsZW1lbnRfc2Vqb3VyXG4gICAqIEBhcGlOYW1lIERFTEVURXN1cHBsZW1lbnRfc2Vqb3VyXG4gICAqIEBhcGlHcm91cCAgc3VwcGxlbWVudF9zZWpvdXJcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IHNlam91cmlkIGlkIHN1cHBsZW1lbnRfc2Vqb3VyXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIHN1cHBsZW1lbnRfc2Vqb3VyXG5cbiAgLy9jcnVkZSBzdXBwX3BheFxuXG4gIC8vc3VwcF9wYXhcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgc3VwcF9wYXhOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgc3VwcF9wYXhOb3RGb3VuZCAgPGNvZGU+c3VwcF9wYXg8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwic3VwcF9wYXggcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcF9wYXhzLzppZHBlcmlvZCAgQUxMIHN1cHBfcGF4c1xuICogQGFwaU5hbWUgR2V0c3VwcF9wYXhzXG4gKiBAYXBpR3JvdXAgIHN1cHBfcGF4IFxuICpcblxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHBlcmlvZCAgICAgICAgdW5pcXVlIElEUGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIHN1cHBfcGF4IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIHVuaXF1ZSBJZHBlcmlvZC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkY29udHJhdCBJRCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iYWR1bHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcmFuZyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBiZWJlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9iZWJlcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWR1bHRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mYW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZHVsdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZ3JhdHVpdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9lbmYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAwLzEgLlxuICAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZGRfc2luZ2xlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3V0X3NhaXNvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG91dF9hZHVsdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ21lbnRzfSBhcnJhbmdlbWVudCAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsIC5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gIHtcbiAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEyNzQsXG4gICAgICAgIFwiaWRob3RlbFwiOiAyMDcsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDI5NCxcbiAgICAgICAgXCJub21cIjogXCJBZHVsdGVzXCIsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDE0MCxcbiAgICAgICAgXCJuYmFkdWx0XCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAzLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMyxcbiAgICAgICAgXCJyYW5nXCI6IDMsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJiZWJlXCI6IDAsXG4gICAgICAgIFwibWF4X2JlYmVzXCI6IDEsXG4gICAgICAgIFwiZW5mYW50XCI6IDAsXG4gICAgICAgIFwiYWR1bHRcIjogMSxcbiAgICAgICAgXCJtaW5fYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X2FnZVwiOiAwLFxuICAgICAgICBcIm1pbl9lbmZcIjogMCxcbiAgICAgICAgXCJtYXhfZW5mXCI6IDAsXG4gICAgICAgIFwiYWRkX3NpbmdsZVwiOiAwLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDEsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImdyYXR1aXRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMTIsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk1PVkVOUElDSyBHYW1tYXJ0aFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDIwN1xuICAgICAgICB9LFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IG51bGxcbiAgICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBzdXBwX3BheE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcF9wYXgvOmlkIEdFVCBzdXBwX3BheFxuICogQGFwaU5hbWUgR2V0c3VwcF9wYXhcbiAqIEBhcGlHcm91cCAgc3VwcF9wYXggXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgc3VwcF9wYXggLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIHN1cHBfcGF4IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIHVuaXF1ZSBJZHBlcmlvZC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkY29udHJhdCBJRCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iYWR1bHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcmFuZyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBiZWJlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9iZWJlcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWR1bHRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mYW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZHVsdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZ3JhdHVpdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9lbmYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAwLzEgLlxuICAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZGRfc2luZ2xlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3V0X3NhaXNvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iYWR1bHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcmFuZyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBiZWJlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9iZWJlcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWR1bHRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mYW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZHVsdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZ3JhdHVpdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9lbmYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAwLzEgLlxuICAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZGRfc2luZ2xlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3V0X3NhaXNvbiAwLzEgLlxuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4ge1xuICAgICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTI3NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDIwNyxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMjk0LFxuICAgICAgICBcIm5vbVwiOiBcIkFkdWx0ZXNcIixcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMTQwLFxuICAgICAgICBcIm5iYWR1bHRcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDMsXG4gICAgICAgIFwibWF4X2FkdWx0c1wiOiAzLFxuICAgICAgICBcInJhbmdcIjogMyxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcImJlYmVcIjogMCxcbiAgICAgICAgXCJtYXhfYmViZXNcIjogMSxcbiAgICAgICAgXCJlbmZhbnRcIjogMCxcbiAgICAgICAgXCJhZHVsdFwiOiAxLFxuICAgICAgICBcIm1pbl9hZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfYWdlXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJhZGRfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMSxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZ3JhdHVpdFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAxMixcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwXG59XG5cbiAqXG4gKiBAYXBpVXNlICBzdXBwX3BheE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3N1cHBfcGF4LyBQT1NUIHN1cHBfcGF4XG4gKiBAYXBpTmFtZSBQT1NUc3VwcF9wYXhcbiAqIEBhcGlHcm91cCAgc3VwcF9wYXggXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcblxuICAgICAgICBcImlkcGVyaW9kXCI6IDEyNzQsXG4gICAgICAgIFwiaWRob3RlbFwiOiAyMDcsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDI5NCxcbiAgICAgICAgXCJub21cIjogXCJBZHVsdGVzXCIsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDE0MCxcbiAgICAgICAgXCJuYmFkdWx0XCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAzLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMyxcbiAgICAgICAgXCJyYW5nXCI6IDMsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJiZWJlXCI6IDAsXG4gICAgICAgIFwibWF4X2JlYmVzXCI6IDEsXG4gICAgICAgIFwiZW5mYW50XCI6IDAsXG4gICAgICAgIFwiYWR1bHRcIjogMSxcbiAgICAgICAgXCJtaW5fYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X2FnZVwiOiAwLFxuICAgICAgICBcIm1pbl9lbmZcIjogMCxcbiAgICAgICAgXCJtYXhfZW5mXCI6IDAsXG4gICAgICAgIFwiYWRkX3NpbmdsZVwiOiAwLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDEsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImdyYXR1aXRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMTIsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbn1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTI3NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDIwNyxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMjk0LFxuICAgICAgICBcIm5vbVwiOiBcIkFkdWx0ZXNcIixcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMTQwLFxuICAgICAgICBcIm5iYWR1bHRcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDMsXG4gICAgICAgIFwibWF4X2FkdWx0c1wiOiAzLFxuICAgICAgICBcInJhbmdcIjogMyxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcImJlYmVcIjogMCxcbiAgICAgICAgXCJtYXhfYmViZXNcIjogMSxcbiAgICAgICAgXCJlbmZhbnRcIjogMCxcbiAgICAgICAgXCJhZHVsdFwiOiAxLFxuICAgICAgICBcIm1pbl9hZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfYWdlXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJhZGRfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMSxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZ3JhdHVpdFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAxMixcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yM1QxNDoyNDo0My41NTNaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI0OjQzLjU1M1pcIlxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9zdXBwX3BheC86aWQgUFVUIHN1cHBfcGF4XG4gKiBAYXBpTmFtZSBQVVRzdXBwX3BheFxuICogQGFwaUdyb3VwICBzdXBwX3BheCBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG5cbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMjc0LFxuICAgICAgICBcImlkaG90ZWxcIjogMjA3LFxuICAgICAgICBcImlkY29udHJhdFwiOiAyOTQsXG4gICAgICAgIFwibm9tXCI6IFwiQWR1bHRlc1wiLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAxNDAsXG4gICAgICAgIFwibmJhZHVsdFwiOiAwLFxuICAgICAgICBcIm1pbl9hZHVsdHNcIjogMyxcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDMsXG4gICAgICAgIFwicmFuZ1wiOiAzLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwiYmViZVwiOiAwLFxuICAgICAgICBcIm1heF9iZWJlc1wiOiAxLFxuICAgICAgICBcImVuZmFudFwiOiAwLFxuICAgICAgICBcImFkdWx0XCI6IDEsXG4gICAgICAgIFwibWluX2FnZVwiOiAwLFxuICAgICAgICBcIm1heF9hZ2VcIjogMCxcbiAgICAgICAgXCJtaW5fZW5mXCI6IDAsXG4gICAgICAgIFwibWF4X2VuZlwiOiAwLFxuICAgICAgICBcImFkZF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAxLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJncmF0dWl0XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDEyLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDBcbn1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG57XG4gICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMjc0LFxuICAgICAgICBcImlkaG90ZWxcIjogMjA3LFxuICAgICAgICBcImlkY29udHJhdFwiOiAyOTQsXG4gICAgICAgIFwibm9tXCI6IFwiQWR1bHRlc1wiLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAxNDAsXG4gICAgICAgIFwibmJhZHVsdFwiOiAwLFxuICAgICAgICBcIm1pbl9hZHVsdHNcIjogMyxcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDMsXG4gICAgICAgIFwicmFuZ1wiOiAzLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwiYmViZVwiOiAwLFxuICAgICAgICBcIm1heF9iZWJlc1wiOiAxLFxuICAgICAgICBcImVuZmFudFwiOiAwLFxuICAgICAgICBcImFkdWx0XCI6IDEsXG4gICAgICAgIFwibWluX2FnZVwiOiAwLFxuICAgICAgICBcIm1heF9hZ2VcIjogMCxcbiAgICAgICAgXCJtaW5fZW5mXCI6IDAsXG4gICAgICAgIFwibWF4X2VuZlwiOiAwLFxuICAgICAgICBcImFkZF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAxLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJncmF0dWl0XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDEyLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI2OjQwLjczM1pcIlxufVxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvc3VwcF9wYXgvOmlkIERlbGV0ZSBzdXBwX3BheFxuICAgKiBAYXBpTmFtZSBERUxFVEVzdXBwX3BheFxuICAgKiBAYXBpR3JvdXAgIHN1cHBfcGF4XG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBzdXBwX3BheFxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSByZWR1Y3Rpb25fY2hhbWJyZVxuXG4gIC8vcmVkdWN0aW9uX2NoYW1icmVcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgcmVkdWN0aW9uX2NoYW1icmVOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgcmVkdWN0aW9uX2NoYW1icmVOb3RGb3VuZCAgPGNvZGU+cmVkdWN0aW9uX2NoYW1icmU8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwicmVkdWN0aW9uX2NoYW1icmUgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcmVkdWN0aW9uX2NoYW1icmVzLzppZHBlcmlvZCAgQUxMIHJlZHVjdGlvbl9jaGFtYnJlc1xuICogQGFwaU5hbWUgR2V0cmVkdWN0aW9uX2NoYW1icmVzXG4gKiBAYXBpR3JvdXAgIHJlZHVjdGlvbl9jaGFtYnJlIFxuICpcblxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHBlcmlvZCAgICAgICAgdW5pcXVlIElEUGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRyZWR1Y3Rpb24gdW5pcXVlIElEIHJlZHVjdGlvbl9jaGFtYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIHVuaXF1ZSBJZHBlcmlvZC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkY29udHJhdCBJRCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iYWR1bHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcmFuZyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBiZWJlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9iZWJlcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWR1bHRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mYW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZHVsdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9lbmYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZGRfc2luZ2xlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3V0X3NhaXNvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYW5udWxfc2luZ2xlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbXBvcnRhbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHthcnJhbmdtZW50c30gYXJyYW5nZW1lbnQgLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAge1xuICAgICAgICBcImlkcmVkdWN0aW9uXCI6IDQ2MDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTAwLFxuICAgICAgICBcImlkaG90ZWxcIjogMzEsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDMxLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiRW5mYW50IDIgw6AgMTIgYW5zICsgMSBhZHVsdGVcIixcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJ2YWxldXJcIjogMzAsXG4gICAgICAgIFwibmJhZHVsdFwiOiAwLFxuICAgICAgICBcIm1pbl9hZHVsdHNcIjogMSxcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDEsXG4gICAgICAgIFwicmFuZ1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwiYmViZVwiOiAwLFxuICAgICAgICBcIm1heF9iZWJlc1wiOiAxLFxuICAgICAgICBcImVuZmFudFwiOiAxLFxuICAgICAgICBcImFkdWx0XCI6IDAsXG4gICAgICAgIFwibWluX2FnZVwiOiAyLFxuICAgICAgICBcIm1heF9hZ2VcIjogMTIsXG4gICAgICAgIFwibWluX2VuZlwiOiAxLFxuICAgICAgICBcIm1heF9lbmZcIjogMixcbiAgICAgICAgXCJhZGRfc2luZ2xlXCI6IDEsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJhbm51bF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJpbXBvcnRhbnRcIjogMCxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiBudWxsXG4gICAgfSxcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgcmVkdWN0aW9uX2NoYW1icmVOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL3JlZHVjdGlvbl9jaGFtYnJlLzppZHJlZHVjdGlvbiBHRVQgcmVkdWN0aW9uX2NoYW1icmVcbiAqIEBhcGlOYW1lIEdldHJlZHVjdGlvbl9jaGFtYnJlXG4gKiBAYXBpR3JvdXAgIHJlZHVjdGlvbl9jaGFtYnJlIFxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcmVkdWN0aW9uICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHJlZHVjdGlvbiB1bmlxdWUgSUQgcmVkdWN0aW9uX2NoYW1icmUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJhZHVsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByYW5nIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGJlYmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2JlYmVzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FkdWx0cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZhbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkdWx0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkZF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdXRfc2Fpc29uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhbm51bF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGltcG9ydGFudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ21lbnRzfSBhcnJhbmdlbWVudCAuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4ge1xuICAgIFwiaWRyZWR1Y3Rpb25cIjogNDYwMixcbiAgICBcImlkcGVyaW9kXCI6IDEwMCxcbiAgICBcImlkaG90ZWxcIjogMzEsXG4gICAgXCJpZGNvbnRyYXRcIjogMzEsXG4gICAgXCJhcnJpZFwiOiAwLFxuICAgIFwibm9tXCI6IFwiRW5mYW50IDIgw6AgMTIgYW5zICsgMSBhZHVsdGVcIixcbiAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgIFwidmFsZXVyXCI6IDMwLFxuICAgIFwibmJhZHVsdFwiOiAwLFxuICAgIFwibWluX2FkdWx0c1wiOiAxLFxuICAgIFwibWF4X2FkdWx0c1wiOiAxLFxuICAgIFwicmFuZ1wiOiAwLFxuICAgIFwicG91cmNlbnRcIjogMSxcbiAgICBcImJlYmVcIjogMCxcbiAgICBcIm1heF9iZWJlc1wiOiAxLFxuICAgIFwiZW5mYW50XCI6IDEsXG4gICAgXCJhZHVsdFwiOiAwLFxuICAgIFwibWluX2FnZVwiOiAyLFxuICAgIFwibWF4X2FnZVwiOiAxMixcbiAgICBcIm1pbl9lbmZcIjogMSxcbiAgICBcIm1heF9lbmZcIjogMixcbiAgICBcImFkZF9zaW5nbGVcIjogMSxcbiAgICBcImFkZF9kb3VibGVcIjogbnVsbCxcbiAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgXCJhbm51bF9zaW5nbGVcIjogMCxcbiAgICBcImltcG9ydGFudFwiOiAwXG59XG5cbiAqXG4gKiBAYXBpVXNlICByZWR1Y3Rpb25fY2hhbWJyZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3JlZHVjdGlvbl9jaGFtYnJlLyBQT1NUIHJlZHVjdGlvbl9jaGFtYnJlXG4gKiBAYXBpTmFtZSBQT1NUcmVkdWN0aW9uX2NoYW1icmVcbiAqIEBhcGlHcm91cCAgcmVkdWN0aW9uX2NoYW1icmUgXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcblxuICAgIFwiaWRwZXJpb2RcIjogMTAwLFxuICAgIFwiaWRob3RlbFwiOiAzMSxcbiAgICBcImlkY29udHJhdFwiOiAzMSxcbiAgICBcImFycmlkXCI6IDAsXG4gICAgXCJub21cIjogXCJFbmZhbnQgMiDDoCAxMiBhbnMgKyAxIGFkdWx0ZVwiLFxuICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgXCJ2YWxldXJcIjogMzAsXG4gICAgXCJuYmFkdWx0XCI6IDAsXG4gICAgXCJtaW5fYWR1bHRzXCI6IDEsXG4gICAgXCJtYXhfYWR1bHRzXCI6IDEsXG4gICAgXCJyYW5nXCI6IDAsXG4gICAgXCJwb3VyY2VudFwiOiAxLFxuICAgIFwiYmViZVwiOiAwLFxuICAgIFwibWF4X2JlYmVzXCI6IDEsXG4gICAgXCJlbmZhbnRcIjogMSxcbiAgICBcImFkdWx0XCI6IDAsXG4gICAgXCJtaW5fYWdlXCI6IDIsXG4gICAgXCJtYXhfYWdlXCI6IDEyLFxuICAgIFwibWluX2VuZlwiOiAxLFxuICAgIFwibWF4X2VuZlwiOiAyLFxuICAgIFwiYWRkX3NpbmdsZVwiOiAxLFxuICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICBcImFubnVsX3NpbmdsZVwiOiAwLFxuICAgIFwiaW1wb3J0YW50XCI6IDBcbn1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICBcImlkY29udHJhdFwiOiBcIjBcIixcbiAgICBcImlkcmVkdWN0aW9uXCI6IDE4ODcyLFxuICAgIFwiaWRob3RlbFwiOiBcIjMzXCIsXG4gICAgXCJpZHBlcmlvZFwiOiBcIjVcIixcbiAgICBcImFycmlkXCI6IFwiMlwiLFxuICAgIFwibm9tXCI6IFwidGVzdFwiLFxuICAgIFwib3BlcmF0aW9uXCI6IFwiMVwiLFxuICAgIFwidmFsZXVyXCI6IFwiMzBcIixcbiAgICBcIm5iYWR1bHRcIjogXCIwXCIsXG4gICAgXCJtaW5fYWR1bHRzXCI6IFwiMVwiLFxuICAgIFwibWF4X2FkdWx0c1wiOiBcIjFcIixcbiAgICBcInJhbmdcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudFwiOiBcIjFcIixcbiAgICBcImJlYmVcIjogXCIwXCIsXG4gICAgXCJtYXhfYmViZXNcIjogXCIxXCIsXG4gICAgXCJlbmZhbnRcIjogXCIxXCIsXG4gICAgXCJhZHVsdFwiOiBcIjBcIixcbiAgICBcIm1pbl9hZ2VcIjogXCIyXCIsXG4gICAgXCJtYXhfYWdlXCI6IFwiMTJcIixcbiAgICBcIm1pbl9lbmZcIjogXCIxXCIsXG4gICAgXCJtYXhfZW5mXCI6IFwiMlwiLFxuICAgIFwiYWRkX3NpbmdsZVwiOiBcIjFcIixcbiAgICBcInRvdXRfc2Fpc29uXCI6IFwiMFwiLFxuICAgIFwiYW5udWxfc2luZ2xlXCI6IFwiMFwiLFxuICAgIFwiaW1wb3J0YW50XCI6IFwiMFwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yM1QxNDoyNDo0My41NTNaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI0OjQzLjU1M1pcIlxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9yZWR1Y3Rpb25fY2hhbWJyZS86aWRyZWR1Y3Rpb24gUFVUIHJlZHVjdGlvbl9jaGFtYnJlXG4gKiBAYXBpTmFtZSBQVVRyZWR1Y3Rpb25fY2hhbWJyZVxuICogQGFwaUdyb3VwICByZWR1Y3Rpb25fY2hhbWJyZSBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRyZWR1Y3Rpb24gICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG4gICAgXCJpZHBlcmlvZFwiOiAxMDAsXG4gICAgXCJpZGhvdGVsXCI6IDMxLFxuICAgIFwiaWRjb250cmF0XCI6IDMxLFxuICAgIFwiYXJyaWRcIjogMCxcbiAgICBcIm5vbVwiOiBcIkVuZmFudCAyIMOgIDEyIGFucyArIDEgYWR1bHRlXCIsXG4gICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICBcInZhbGV1clwiOiAzMCxcbiAgICBcIm5iYWR1bHRcIjogMCxcbiAgICBcIm1pbl9hZHVsdHNcIjogMSxcbiAgICBcIm1heF9hZHVsdHNcIjogMSxcbiAgICBcInJhbmdcIjogMCxcbiAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgXCJiZWJlXCI6IDAsXG4gICAgXCJtYXhfYmViZXNcIjogMSxcbiAgICBcImVuZmFudFwiOiAxLFxuICAgIFwiYWR1bHRcIjogMCxcbiAgICBcIm1pbl9hZ2VcIjogMixcbiAgICBcIm1heF9hZ2VcIjogMTIsXG4gICAgXCJtaW5fZW5mXCI6IDEsXG4gICAgXCJtYXhfZW5mXCI6IDIsXG4gICAgXCJhZGRfc2luZ2xlXCI6IDEsXG4gICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgIFwiYW5udWxfc2luZ2xlXCI6IDAsXG4gICAgXCJpbXBvcnRhbnRcIjogMFxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbntcbiAgICBcImlkcmVkdWN0aW9uXCI6IDE4ODcyLFxuICAgIFwiaWRwZXJpb2RcIjogXCI1XCIsXG4gICAgXCJpZGhvdGVsXCI6IFwiMzNcIixcbiAgICBcImlkY29udHJhdFwiOiAwLFxuICAgIFwiYXJyaWRcIjogXCIyXCIsXG4gICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIxXCIsXG4gICAgXCJ2YWxldXJcIjogXCIzMFwiLFxuICAgIFwibmJhZHVsdFwiOiBcIjBcIixcbiAgICBcIm1pbl9hZHVsdHNcIjogXCIxXCIsXG4gICAgXCJtYXhfYWR1bHRzXCI6IFwiMVwiLFxuICAgIFwicmFuZ1wiOiBcIjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMVwiLFxuICAgIFwiYmViZVwiOiBcIjBcIixcbiAgICBcIm1heF9iZWJlc1wiOiBcIjFcIixcbiAgICBcImVuZmFudFwiOiBcIjFcIixcbiAgICBcImFkdWx0XCI6IFwiMFwiLFxuICAgIFwibWluX2FnZVwiOiBcIjJcIixcbiAgICBcIm1heF9hZ2VcIjogXCIxMlwiLFxuICAgIFwibWluX2VuZlwiOiBcIjFcIixcbiAgICBcIm1heF9lbmZcIjogXCIyXCIsXG4gICAgXCJhZGRfc2luZ2xlXCI6IFwiMVwiLFxuICAgIFwidG91dF9zYWlzb25cIjogXCIwXCIsXG4gICAgXCJhbm51bF9zaW5nbGVcIjogXCIwXCIsXG4gICAgXCJpbXBvcnRhbnRcIjogXCIwXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI2OjQwLjczM1pcIlxufVxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvcmVkdWN0aW9uX2NoYW1icmUvOmlkcmVkdWN0aW9uIERlbGV0ZSByZWR1Y3Rpb25fY2hhbWJyZVxuICAgKiBAYXBpTmFtZSBERUxFVEVyZWR1Y3Rpb25fY2hhbWJyZVxuICAgKiBAYXBpR3JvdXAgIHJlZHVjdGlvbl9jaGFtYnJlXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHJlZHVjdGlvbiBpZCByZWR1Y3Rpb25fY2hhbWJyZVxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBwcm9tb1xuXG4gIC8vcHJvbW9cbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgcHJvbW9Ob3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgcHJvbW9Ob3RGb3VuZCAgPGNvZGU+UHJvbW88L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiUHJvbW8gcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcHJvbW9zLyAgQUxMIFByb21vc1xuICogQGFwaU5hbWUgR2V0cHJvbW9zXG4gKiBAYXBpR3JvdXAgIFByb21vc1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIFByb21vIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkY29udHJhdCBJRCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIElEIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciB2YWxldXIgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3NpbmdsZSB2YWxldXIgc2luZ2xlIGRlIHByb21vLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiBtYXJnZSBiMmIgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgbWFyZ2UgYjJjIGRlIHByb21vLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuIFxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iIG1hcmdlIHNpbmdsZSBiMmIgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2MgbWFyZ2Ugc2luZ2xlIGIyYyBkZSBwcm9tby5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IG1pbiBkZSBudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9udWl0IG1heCBkZSBudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIGFycmFuZ2VtZW50IElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNhbGN1bF9zdXBwIGNhbGN1bCBzdXBwbGVtZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gbW9kZWxlIGhvdGVsLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IG1vZGVsZSByb29tLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ2VtZW50fSBtb2RlbGUgYXJyYW5nZW1lbnRzLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGJlZ2luIGRhdGUgZGVidXQgcHJvbW8gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGVuZCBkYXRlIGZpbiBwcm9tbyAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9ib29raW5nIGRhdGUgYXZhbnQgcHJvbW8gLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiAyNixcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAwLFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJcIixcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMyxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiYXJyaWRcIjogMyxcbiAgICAgICAgXCJiZWdpblwiOiBcIjIwMTctMTAtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIyMDE3LTEwLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImNhbGN1bF9zdXBwXCI6IDEsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjoge1xuICAgICAgICAgICAgXCJyb29tbmFtZVwiOiBcIkNoYW1icmUgRG91YmxlXCIsXG4gICAgICAgICAgICBcInJvb21pZFwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJEZW1pIFBlbnNpb25cIixcbiAgICAgICAgICAgIFwiYXJySWRcIjogM1xuICAgICAgICB9XG4gICAgfSxcblx0Li4uXG5cdF1cbiAgKiBAYXBpVXNlICBwcm9tb05vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcHJvbW8vOmlkIEdFVCBQcm9tb1xuICogQGFwaU5hbWUgR2V0cHJvbW9cbiAqIEBhcGlHcm91cCAgUHJvbW9zXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIFByb21vIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkY29udHJhdCBJRCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIElEIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciB2YWxldXIgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX3NpbmdsZSB2YWxldXIgc2luZ2xlIGRlIHByb21vLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiBtYXJnZSBiMmIgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgbWFyZ2UgYjJjIGRlIHByb21vLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuIFxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iIG1hcmdlIHNpbmdsZSBiMmIgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2MgbWFyZ2Ugc2luZ2xlIGIyYyBkZSBwcm9tby5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IG1pbiBkZSBudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9udWl0IG1heCBkZSBudWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIGFycmFuZ2VtZW50IElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNhbGN1bF9zdXBwIGNhbGN1bCBzdXBwbGVtZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gbW9kZWxlIGhvdGVsLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IG1vZGVsZSByb29tLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ2VtZW50fSBtb2RlbGUgYXJyYW5nZW1lbnRzLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGJlZ2luIGRhdGUgZGVidXQgcHJvbW8gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGVuZCBkYXRlIGZpbiBwcm9tbyAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9ib29raW5nIGRhdGUgYXZhbnQgcHJvbW8gLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxue1xuICAgICAgICBcImlkXCI6IDI2LFxuICAgICAgICBcImlkY29udHJhdFwiOiAwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDAsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogNSxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJhcnJpZFwiOiAzLFxuICAgICAgICBcImJlZ2luXCI6IFwiMjAxNy0xMC0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjIwMTctMTAtMzFcIixcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiB7XG4gICAgICAgICAgICBcInJvb21uYW1lXCI6IFwiQ2hhbWJyZSBEb3VibGVcIixcbiAgICAgICAgICAgIFwicm9vbWlkXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiB7XG4gICAgICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkRlbWkgUGVuc2lvblwiLFxuICAgICAgICAgICAgXCJhcnJJZFwiOiAzXG4gICAgICAgIH1cbiAgICB9XG4gKlxuICogQGFwaVVzZSAgcHJvbW9Ob3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9wcm9tby8gUE9TVCBQcm9tb1xuICogQGFwaU5hbWUgUE9TVHByb21vXG4gKiBAYXBpR3JvdXAgIFByb21vc1xuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gICAge1xuXG57XG5cbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiA1LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImFycmlkXCI6IDMsXG4gICAgICAgIFwiYmVnaW5cIjogXCIyMDE3LTEwLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMjAxNy0xMC0zMVwiLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxXG5cbiAgICB9XG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICAgICAgXCJpZFwiOiAyNixcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAwLFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJcIixcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMyxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiYXJyaWRcIjogMyxcbiAgICAgICAgXCJiZWdpblwiOiBcIjIwMTctMTAtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIyMDE3LTEwLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImNhbGN1bF9zdXBwXCI6IDEsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjoge1xuICAgICAgICAgICAgXCJyb29tbmFtZVwiOiBcIkNoYW1icmUgRG91YmxlXCIsXG4gICAgICAgICAgICBcInJvb21pZFwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJEZW1pIFBlbnNpb25cIixcbiAgICAgICAgICAgIFwiYXJySWRcIjogM1xuICAgICAgICB9XG4gICAgfVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9wcm9tby86aWQgUFVUIFByb21vXG4gKiBAYXBpTmFtZSBQVVRwcm9tb1xuICogQGFwaUdyb3VwICBQcm9tb3NcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxue1xuICAgICAgXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogNSxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJhcnJpZFwiOiAzLFxuICAgICAgICBcImJlZ2luXCI6IFwiMjAxNy0xMC0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjIwMTctMTAtMzFcIixcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMVxuICAgICAgXG4gICAgfSxcbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG57XG4gICAgICAgIFwiaWRcIjogMjYsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDAsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiA1LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImFycmlkXCI6IDMsXG4gICAgICAgIFwiYmVnaW5cIjogXCIyMDE3LTEwLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMjAxNy0xMC0zMVwiLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiIFJhZGlzc29uIEJsdSBIYW1tYW1ldFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IHtcbiAgICAgICAgICAgIFwicm9vbW5hbWVcIjogXCJDaGFtYnJlIERvdWJsZVwiLFxuICAgICAgICAgICAgXCJyb29taWRcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IHtcbiAgICAgICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiRGVtaSBQZW5zaW9uXCIsXG4gICAgICAgICAgICBcImFycklkXCI6IDNcbiAgICAgICAgfVxuICAgIH1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL3Byb21vLzppZCBEZWxldGUgUHJvbW9cbiAgICogQGFwaU5hbWUgREVMRVRFcHJvbW9cbiAgICogQGFwaUdyb3VwICBQcm9tb3NcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkIFByb21vXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9ob3RlbC92aWxsZXMvOmlkdmlsbGUgR0VUIEhvdGVsc1ZpbGxlXG4gKiBAYXBpTmFtZSBHZXRIb3RlbFZpbGxlXG4gKiBAYXBpR3JvdXAgIEhvdGVsc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSAgaWR2aWxsZSB2aWxsZSB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWR2aWxsZSB1bmlxdWUgSUQgdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAob2JsaWdhdG9pcmUpLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHZhIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFkcmVzc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaW5mbyBpbmZvcm1hdGlvbiBzdXBwbMOpbWVudGFpcmUuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsaWVuIHVybCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgaMO0dGVsIChvYmxpZ2F0b2lyZSkuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbDIgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGZheCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpY2llbCB1dGlsaXPDqWUgcGFyIGwnaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG1hcCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbWFwIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjaG9peF9lbWFpbCAgUmVzYS9HbWFpbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZfbWluICBhZ2UgZW5mYW50IG1pbiAwLzEyLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mX21heCAgYWdlIGVuZmFudCBtYXggMC8xNi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlICBtYXJnZSBwYXIgaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gIG9wZXJhdGlvbiBkZSBtYXJnZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAgcG91cmNlbnQgZGUgbWFyZ2UgMC8xLlxuICAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgIG1hcmdlIGIyYyBwYXIgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgIG9wZXJhdGlvbiBiMmMgZGUgbWFyZ2UgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAgcG91cmNlbnQgZGUgbWFyZ2UgYjJjIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGV0b2lsZSAgbmJyZSBkJ8OpdG9pbGUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2FsY3VsICB0eXBlIGRlIGNhbGN1bCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdG9wICBzdG9wIHZlbnRlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNlbGViYXRlICBjZWxlYmF0YWlyZSBvdSBub24gMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXV0b192b3VjaGVyICBlbnZvaSBhdXRvbWF0aXF1ZSBlbWFpbCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7dmlsbGV9IHZpbGxlICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3QgIGFjdGl2ZSAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gICAge1xuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJpZHZpbGxlXCI6IDI2LFxuICAgICAgICBcImxvZ2luXCI6IFwiXCIsXG4gICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcImVuZl9taW5cIjogMyxcbiAgICAgICAgXCJlbmZfbWF4XCI6IDEyLFxuICAgICAgICBcImFkcmVzc2VcIjogXCI2MDAwXCIsXG4gICAgICAgIFwiaW5mb1wiOiBcIk9mZnJlIHZhbGFibGUganVzcXUnYXUgMzEvMDMvMjAxNi48YnIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRBbGwgaW5jbHVzaXZlLlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibGllblwiOiBcIm1vbmFzdGlyL2hvdGVsLW9uZS1yZXNvcnQucGhwXCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJldG9pbGVcIjogNCxcbiAgICAgICAgXCJjYWxjdWxcIjogMSxcbiAgICAgICAgXCJhdXRvX3ZvdWNoZXJcIjogMSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcImVtYWlsXCI6IFwicmVzYS5vbmVob3RlbHNhbmRyZXNvcnRzQHBsYW5ldC50blwiLFxuICAgICAgICBcImZheFwiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItdHVuaXNpZS10YXNuaW1lLXZveWFnZXNfcC5qcGdcIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJsb2dpY2llbFwiOiBcIlwiLFxuICAgICAgICBcIm1hcFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDEyOTUwLjk4MjM2NzI4MDA1NCEyZDEwLjc0NzkxNjg0ODE0MDY3ITNkMzUuNzU3MDU3MzYwNjY3MiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTMwMjBjYzNhMjkyMzc3ZCUzQTB4ZTgzNmMwMzNmZDM2OWViZSEyc09uZStSZXNvcnQrTW9uYXN0aXIhNWUwITNtMiExc2ZyITJzITR2MTQ1NzkzODhcIixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJzdG9wXCI6IDAsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogNzMsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcImNob2l4X2VtYWlsXCI6IDEsXG4gICAgICAgIFwiY2VsZWJhdGVcIjogMVxuICAgIH0sXG4gICogQGFwaVVzZSAgSG90ZWxOb3RGb3VuZEVycm9yXG4gKi9cbiAgYXBwLmdldCgnL2FwaUIyQi9wZGYnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICB2YXIgcGRmID0gcmVxdWlyZSgnaHRtbC1wZGYnKTtcbiAgICB2YXIgaW1hZ2UgPSBwYXRoLmpvaW4oXG4gICAgICAnZmlsZTovLycsXG4gICAgICBfX2Rpcm5hbWUsXG4gICAgICAnL3VwbG9hZC9sb2dvcy9sb2dvX3Rhc25pbWVfdm95YWdlcy5wbmcnXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhpbWFnZSk7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIGZvcm1hdDogJ0E0JyxcbiAgICAgIGJvcmRlcjogJzFjbScsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgaGVpZ2h0OiAnNWNtJyxcbiAgICAgIH0sXG4gICAgICBmb290ZXI6IHtcbiAgICAgICAgZm9vdGVyOiAnNWNtJyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHZhciBodG1sID1cbiAgICAgICc8Ym9keT4nICtcbiAgICAgICdcdDxkaXYgaWQ9XCJwYWdlSGVhZGVyXCI+PGltZyBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL2ltYWdlcy9zcnByL2xvZ28xMXcucG5nXCI+PC9kaXY+JyArXG4gICAgICAnXHQ8ZGl2IGlkPVwicGFnZUNvbnRlbnRcIj4nICtcbiAgICAgICdcdFx0dGhpcyBpcyB0aGUgbWFpbiBjb250ZW50IG9uIHBhZ2UgMScgK1xuICAgICAgJ1x0XHQ8cCBzdHlsZT1cInBhZ2UtYnJlYWstYWZ0ZXI6YWx3YXlzO1wiPjwvcD4nICtcbiAgICAgICcgXHRcdHRoaXMgY29udGVudCBnb2VzIG9uIHBhZ2UgMiB0byB0ZXN0IGhlYWRlci9mb290ZXInICtcbiAgICAgICdcdDwvZGl2PicgK1xuICAgICAgJ1x0PGRpdiBpZD1cInBhZ2VGb290ZXJcIj4nICtcbiAgICAgICdcdFx0PGltZyBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL2ltYWdlcy9zcnByL2xvZ28xMXcucG5nXCI+JyArXG4gICAgICAnXHQ8L2Rpdj4nICtcbiAgICAgICc8L2JvZHk+JztcblxuICAgIHBkZi5jcmVhdGUoaHRtbCwgb3B0aW9ucykudG9GaWxlKCcuL2h0bWwucGRmJywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7IC8vIHsgZmlsZW5hbWU6ICcvYXBwL2J1c2luZXNzY2FyZC5wZGYnIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG4gIGFwcC5wb3N0KCcvYXBpQjJCL3ZvdWNoZXJfcGRmJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgdmFyIHBkZiA9IHJlcXVpcmUoJ2h0bWwtcGRmJyk7XG5cbiAgICAvLyAgdmFyIGh0bWwgPWZzLnJlYWRGaWxlU3luYygnLi90ZXN0LzQ0MzguaHRtbCcsICd1dGY4Jyk7XG4gICAgdmFyIGh0bWwgPSByZXEuYm9keS5odG1sO1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgZm9ybWF0OiAnbGV0dHJlJyxcbiAgICAgIGZvb3Rlcjoge1xuICAgICAgICBoZWlnaHQ6ICc1MG1tJyxcbiAgICAgICAgLypcbiAgICBcImNvbnRlbnRzXCI6IHtcbiAvLyBBbnkgcGFnZSBudW1iZXIgaXMgd29ya2luZy4gMS1iYXNlZCBpbmRleFxuICAgICAgZGVmYXVsdDogYFx0ICA8ZGl2IGNsYXNzPVwidGV4dC1sZWZ0XCI+IDxwIHN0eWxlPVwiZm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuICAgICAgPHN0cm9uZz4gQSBub3RlciA6PC9zdHJvbmc+PGJyPlxuICAgICAgIC0gQXJyaXbDqWUgw6AgcGFydGlyIGRlIDE0aDAwLCBkw6lwYXJ0IGF2YW50IDEyaDAwXG4gICAgICAgPGJyPiAtIEJlc29pbiBkwrRhaWRlIDcvNyA6IDU4IDQwIDgwIDQwXG4gICAgICAgPGJyIC8+PGJyIC8+PHN0cm9uZz4qQ2V0dGUgcsOpc2VydmF0aW9uIGVzdCBwcmlzZSBlbiBjaGFyZ2UgcGFyIFRhc25pbWUgVm95YWdlcyAuXG4gICAgICAgPC9zdHJvbmc+XG4gICAgICAgPC9wPjwvZGl2PlxuICAgICAgIDxocj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIiAgPlxuXG48ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiBzdHlsZT1cImZsb2F0OmxlZnQ7XCI+XG4gICAgPGltZyB3aWR0aDoxMDBweDsgc3JjPVwiaHR0cDovL3d3dy50dW5pc2lhYmVkcy5jb20vYjJiL2xvZ29zL2xvZ29fdGFzbmltZV92b3lhZ2VzLnBuZ1wiPlxuICAgICAgXG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05IHRleHQtY2VudGVyXCI+XG4gICAgICAgPHAgIHN0eWxlPVwiZm9udC1zaXplOjhweDsgXCI+XG4gICAgIFxuICAgIFxuQVYsIExlcyBPcmFuZ2VycyBJbW0uIEJpbGxhcmRpbm8gQXBwIE7CsDEgPGJyLz5LaGV6YW1hIEVzdCAtIDQwNTEgU291c3NlIC0gVFVOSVNJRVxuPGJyPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWstdGV4dC1tdXRlZCB1ay10ZXh0LXNtYWxsIHVrLXRleHQtaXRhbGljXCI+VMOpbC46PC9zcGFuPigrMjE2KSA1OCA0MCA4MCA0MCZuYnNwOyZuYnNwOygrMjE2KSA3MyAyNzAgNTQyJm5ic3A7Jm5ic3A7KCsyMTYpIDczIDI0MCAxMTlcbjxicj4gPHNwYW4gY2xhc3M9XCJ1ay10ZXh0LW11dGVkIHVrLXRleHQtc21hbGwgdWstdGV4dC1pdGFsaWNcIj5FbWFpbC46IGRpcmVjdGlvbkB0YXNuaW1ldm95YWdlcy5jb208L3NwYW4+XG4gICAgICAgICA8L3A+ICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuPC9kaXY+YCwgLy8gZmFsbGJhY2sgdmFsdWVcbiAgICBcbiAgICB9ICovXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuICAgIHBkZlxuICAgICAgLmNyZWF0ZShodG1sLCBvcHRpb25zKVxuICAgICAgLnRvRmlsZSgnLi92b3VjaGVyX3BkZi9UQl92b3VjaGVyJyArIHJlcS5ib2R5Lm51bSArICcucGRmJywgZnVuY3Rpb24gKFxuICAgICAgICBlcnIsXG4gICAgICAgIHJlc1xuICAgICAgKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpOyAvLyB7IGZpbGVuYW1lOiAnL2FwcC9idXNpbmVzc2NhcmQucGRmJyB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmVzLnNlbmQoeyBzdWNjZXNzOiB0cnVlLCBpZDogcmVxLmJvZHkubnVtIH0pO1xuICB9KTtcblxuICBhcHAucG9zdCgnL2FwaUIyQi9maWxlJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgdmFyIGNsaWVudCA9IHJlcXVpcmUoJ3NjcDInKTtcbiAgICBjb25zb2xlLmxvZygnZGF0ZSBzY3AnLCBuZXcgRGF0ZSgpKTtcbiAgICAvKiAgY2xpZW50LnNjcCgnL3Zhci93d3cvaHRtbC90dW5pc2lhYmVkcy92b3VjaGVyX3BkZi9UQl92b3VjaGVyNDUwMi5wZGYnLCAnL3Zhci93d3cvaHRtbC9hcGktand0L3ZvdWNoZXJfcGRmLycsIGZ1bmN0aW9uKGVycikgXG4gICAge1xuICBjb25zb2xlLmxvZyhcImVyclwiLGVycilcbiAgfSkqL1xuICAgIHZhciBjbGllbnQgPSByZXF1aXJlKCdzY3AyJyk7XG4gICAgY2xpZW50LnNjcChcbiAgICAgICcvdmFyL3d3dy9odG1sL3R1bmlzaWFiZWRzL3ZvdWNoZXJfcGRmL1RCX3ZvdWNoZXI0NTAyLnBkZicsXG4gICAgICB7XG4gICAgICAgIGhvc3Q6ICcxOTIuMTY4LjEuMjM3JyxcbiAgICAgICAgdXNlcm5hbWU6ICdyb290JyxcbiAgICAgICAgcGFzc3dvcmQ6ICd0Z2J5aG4nLFxuICAgICAgICAvL3ByaXZhdGVLZXk6YEFBQUFCM056YUMxa2MzTUFBQUNCQU1jQWQ5VzNCaCtRa0lsTFRlY2ppcmVUVnEyazVwbUVOTklVdERqMzBQMVcwVXcyeGtiSGoxbHg1Z0FQWFhpemcrNk9kRmR0N0drMG5pSnBsV3JRVEN1Y04xRGNGUlBBbzJzYmxpR3ZxRnIxMnpyWDNvTVY4eGFLczlqMWhBaDdnemhZZFl5VTdNeDI1c294bVJoNnFyMEhBempiZUJUcnNVVHJUcEdsbS9vOUFBQUFGUURGVDZVUElQdVY3R3kzcFZhTGJXTXEzV1VpTXdBQUFJQjMrd0JYWGU5bVQ4ZGNkL0dQUlNYRzJOSGsxM0N4eU5JL0dNT2doRk9uMno0V3NxQUhMQ0RvdVpPMTg5eC95eXRLNnZqcnEya1FGN0VEWnBLUHNtajk4c0l6YXRUK21yVWdMcHNydlN1L2ZDUnc0SVpweDUrT3lqTmp2THM5WU5icmdwcldacng1NHZHcUlNOEVjK1JCc0VWVHFJai8zY0l5Wk4wVUpVNGpiQUFBQUlFQWw4ekNtY0xkS3JLcWV6aDlpcEx4UUlzNlpUMjFBR1AremlZa2JwKzJ1aDVtNlYzLzNScFM0RHR1M255MXZzNmdPL3dFZnZqY1JERDZrbnhjUEpzbzJFenU1bW5kTTNzUDJ4ODF5RlFoZWtZTkhzRjNkaXdiUTNLSlFnTFYzMlVaNUZFTDJ1UDFIajRCV0t2NG93Q01MM2FweEZvMWNIU2Rxa3NtYU5FQkhXb2AsXG4gICAgICAgIHBhdGg6ICcvdmFyL3d3dy9odG1sL2FwaS1qd3Qvdm91Y2hlcl9wZGYvJyxcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7fVxuICAgICk7XG4gICAgLy8gIGNsaWVudC5zY3AoJ21laGVyOnRnYnlobjU1KytAMTkyLjE2OC4xLjM6L2hvbWUvbWVoZXIvRG9jdW1lbnRzL1RCX3ZvdWNoZXI0MDUxLnBkZicsICcuL2Jvbl9wZGYvJywgZnVuY3Rpb24oZXJyKSB7XG4gICAgLy8gIH0pXG4gIH0pO1xufTtcblxuLy8gVEVTVCBCRVNTQU1cblxuLy8gVGVzdCBmdW5jdGlvbiBpbiB0aGUgY29udHJvbGxlclxuIl19