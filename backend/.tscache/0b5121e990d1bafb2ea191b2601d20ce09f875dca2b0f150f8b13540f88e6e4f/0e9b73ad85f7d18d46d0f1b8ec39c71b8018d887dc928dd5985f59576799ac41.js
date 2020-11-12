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
const Stopover = require('../controllers').stopover;
const TechnicalInspection = require('../controllers').inspection;
const VehiculeInsurance = require('../controllers').insurance;
const VehiculeMaintenance = require('../controllers').maintenance;
const Tva = require('../controllers').tva;
const TripDriver = require('../controllers').tripDriver;
const TripUsualCustomer = require('../controllers').TripUsualCustomer;
const TripClientCompany = require('../controllers').tripClientCompany;
const TradeMargin = require('../controllers').tradeMargin;
const Rent = require('../controllers').rent;
const UsualCustomer = require('../controllers').usualCustomer;
// ***********************api rafahia:*************
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
    //**stopover* */
    app.post('/apiRF/stopover/insert', Stopover.insertStopover);
    app.put('/apiRF/stopover/update/:id', Stopover.updateStopover);
    app.get('/apiRF/stopover/read/:id', Stopover.readStopover);
    app.delete('/apiRF/stopover/delete/:id', Stopover.deleteStopover);
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
    //**Trip Driver */
    app.post('/apiRF/tripDriver/insert', TripDriver.insertTripDriver);
    app.put('/apiRF/tripDriver/update/:id', TripDriver.updateTripDriver);
    app.get('/apiRF/tripDriver/read/:id', TripDriver.readTripDriver);
    app.delete('/apiRF/tripDriver/delete/:id', TripDriver.deleteTripDriver);
    //*Trip Passenger
    app.post('/apiRF/TripUsualCustomer/insert', TripUsualCustomer.insertTripUsualCustomer);
    app.put('/apiRF/TripUsualCustomer/update/:id', TripUsualCustomer.updateTripUsualCustomer);
    app.get('/apiRF/TripUsualCustomer/read/:id', TripUsualCustomer.readTripUsualCustomer);
    app.delete('/apiRF/TripUsualCustomer/delete/:id', TripUsualCustomer.deleteTripUsualCustomer);
    //**Trip Client Company */
    app.post('/apiRF/TripClientCompany/insert', TripClientCompany.insertTripClientCompany);
    app.put('/apiRF/TripClientCompany/update/:id', TripClientCompany.updateTripClientCompany);
    app.get('/apiRF/TripClientCompany/read/:id', TripClientCompany.readTripClientCompany);
    app.delete('/apiRF/TripClientCompany/delete/:id', TripClientCompany.deleteTripClientCompany);
    //**Trade Margin */
    app.post('/apiRF/TradeMargin/insert', TradeMargin.insertTradeMargin);
    app.put('/apiRF/TradeMargin/update/:id', TradeMargin.updateTradeMargin);
    app.get('/apiRF/TradeMargin/read/:id', TradeMargin.readTradeMargin);
    app.delete('/apiRF/TradeMargin/delete/:id', TradeMargin.deleteTradeMargin);
    //**Rent */
    app.post('/apiRF/Rent/insert', Rent.insertRent);
    app.put('/apiRF/Rent/update/:id', Rent.updateRent);
    app.get('/apiRF/Rent/read/:id', Rent.readRent);
    app.delete('/apiRF/Rent/delete/:id', Rent.deleteRent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9yb3V0ZXMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSTtBQUNKLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFN0IsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3BCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDeEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9CLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtBQUNoRSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMseUJBQXlCO0FBRXJFLElBQUk7QUFFSixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFaEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ3JELCtCQUErQjtBQUUvQixtREFBbUQ7QUFDbkQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsYUFBYSxDQUFDO0FBQzlELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM1QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFaEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ3RELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUM5RCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDOUQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzlDLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDcEUsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZUFBZSxDQUFDO0FBQzNELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNwRCxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUNqRSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUM5RCxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUNsRSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDMUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ3hELE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsaUJBQWlCLENBQUM7QUFDdEUsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUN0RSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDMUQsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzVDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUM5RCxtREFBbUQ7QUFFbkQsY0FBYztBQUNkLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM3QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDL0MsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDO0FBSy9DLG1EQUFtRDtBQUNuRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbEQsa0RBQWtEO0FBQ2xELElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV2QixhQUFhO0FBRWIsdUJBQXVCO0FBRXZCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FDUiw4QkFBOEIsRUFDOUIsd0VBQXdFLENBQ3pFLENBQUM7UUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLDhCQUE4QixFQUM5QixpQ0FBaUMsQ0FDbEMsQ0FBQztRQUVGLCtDQUErQztRQUUvQyxPQUFPO1FBQ1A7Ozs7Ozs7OztXQVNHO1FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BaUVGO1FBQ0UsMkRBQTJEO1FBRTNELElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0I7Ozs7Ozs7Ozs7O0lBV0E7SUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThDQztJQUNELFNBQVM7SUFFVCxXQUFXO0lBQ1gsc0JBQXNCO0lBRXRCLHdCQUF3QjtJQUV4Qix3QkFBd0I7SUFFeEIsc0JBQXNCO0lBRXRCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBRTNCLGVBQWU7SUFFZiwyQkFBMkI7SUFFM0IsT0FBTztJQUVQLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdELEdBQUcsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hFLEdBQUcsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELEdBQUcsQ0FBQyxNQUFNLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRW5FLHlEQUF5RDtJQUN6RCxxQkFBcUI7SUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkUsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBRSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUUsYUFBYTtJQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RELGNBQWM7SUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RCxHQUFHLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxxQkFBcUI7SUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMzRSxHQUFHLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzlFLEdBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUUsR0FBRyxDQUFDLE1BQU0sQ0FDUixpQ0FBaUMsRUFDakMsYUFBYSxDQUFDLG1CQUFtQixDQUNsQyxDQUFDO0lBQ0YsaUJBQWlCO0lBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELEdBQUcsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xFLEdBQUcsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JFLG9CQUFvQjtJQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNFLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDOUUsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRSxHQUFHLENBQUMsTUFBTSxDQUNSLGlDQUFpQyxFQUNqQyxhQUFhLENBQUMsbUJBQW1CLENBQ2xDLENBQUM7SUFDRixxQkFBcUI7SUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDekUsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBRSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUUsWUFBWTtJQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELHVCQUF1QjtJQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xFLEdBQUcsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckUsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRSxHQUFHLENBQUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hFLHNCQUFzQjtJQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRSxHQUFHLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RSxHQUFHLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxHQUFHLENBQUMsTUFBTSxDQUFDLG1DQUFtQyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6RSxnQkFBZ0I7SUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0QsR0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEUsMkJBQTJCO0lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQ04sbUNBQW1DLEVBQ25DLG1CQUFtQixDQUFDLGdCQUFnQixDQUNyQyxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FDTCx1Q0FBdUMsRUFDdkMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQ3JDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUNMLHFDQUFxQyxFQUNyQyxtQkFBbUIsQ0FBQyxjQUFjLENBQ25DLENBQUM7SUFDRixHQUFHLENBQUMsTUFBTSxDQUNSLHVDQUF1QyxFQUN2QyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FDckMsQ0FBQztJQUNGLHlCQUF5QjtJQUN6QixHQUFHLENBQUMsSUFBSSxDQUNOLGlDQUFpQyxFQUNqQyxpQkFBaUIsQ0FBQyxlQUFlLENBQ2xDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUNMLHFDQUFxQyxFQUNyQyxpQkFBaUIsQ0FBQyxlQUFlLENBQ2xDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlFLEdBQUcsQ0FBQyxNQUFNLENBQ1IscUNBQXFDLEVBQ3JDLGlCQUFpQixDQUFDLGVBQWUsQ0FDbEMsQ0FBQztJQUNGLDJCQUEyQjtJQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0UsR0FBRyxDQUFDLEdBQUcsQ0FDTCwrQkFBK0IsRUFDL0IsbUJBQW1CLENBQUMsaUJBQWlCLENBQ3RDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVFLEdBQUcsQ0FBQyxNQUFNLENBQ1IsK0JBQStCLEVBQy9CLG1CQUFtQixDQUFDLGlCQUFpQixDQUN0QyxDQUFDO0lBQ0YsVUFBVTtJQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELGtCQUFrQjtJQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xFLEdBQUcsQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckUsR0FBRyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakUsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RSxpQkFBaUI7SUFDakIsR0FBRyxDQUFDLElBQUksQ0FDTixpQ0FBaUMsRUFDakMsaUJBQWlCLENBQUMsdUJBQXVCLENBQzFDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUNMLHFDQUFxQyxFQUNyQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wsbUNBQW1DLEVBQ25DLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO0lBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FDUixxQ0FBcUMsRUFDckMsaUJBQWlCLENBQUMsdUJBQXVCLENBQzFDLENBQUM7SUFDRiwwQkFBMEI7SUFDMUIsR0FBRyxDQUFDLElBQUksQ0FDTixpQ0FBaUMsRUFDakMsaUJBQWlCLENBQUMsdUJBQXVCLENBQzFDLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUNMLHFDQUFxQyxFQUNyQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FDMUMsQ0FBQztJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQ0wsbUNBQW1DLEVBQ25DLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO0lBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FDUixxQ0FBcUMsRUFDckMsaUJBQWlCLENBQUMsdUJBQXVCLENBQzFDLENBQUM7SUFDRixtQkFBbUI7SUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRSxHQUFHLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hFLEdBQUcsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQStCLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0UsV0FBVztJQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RELHlEQUF5RDtJQUV6RCx5REFBeUQ7SUFFekQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELG9CQUFvQjtJQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsbUJBQW1CO0lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxnQkFBZ0I7SUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXpDLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTNDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRW5ELEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXpELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFFbEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVqQyx5Q0FBeUM7SUFDekM7Ozs7OztNQU1FO0lBRUYsTUFBTTtJQUNOOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBOENBO0lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJCQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILFFBQVE7SUFDUjs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZCQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0JDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FzQkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNDQztJQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUNDO0lBRUQsU0FBUztJQUVULFNBQVM7SUFDVDs7Ozs7Ozs7O09BU0c7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRkM7SUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdUZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxRkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStFQztJQUNELGNBQWM7SUFDZDs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNFQTtJQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyQkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7OztLQWdCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUVIOzs7Ozs7O0lBT0E7SUFDQTs7Ozs7Ozs7Ozs7S0FXQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUZDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7S0FhQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUVILFFBQVE7SUFDUjs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUNDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNkJDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUVILE1BQU07SUFDTjs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTRCQztJQUNEOzs7Ozs7Ozs7O09BVUc7SUFDSCxPQUFPO0lBQ1AsUUFBUTtJQUNSOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvRkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0dDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBK0ZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJFQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyRUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0JDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBRUgsY0FBYztJQUNkOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5QkE7SUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVIOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNDQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyQkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOEJDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBRUg7O0tBRUM7SUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJDQztJQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQ0E7SUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBK0JDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErQkM7SUFDRDs7Ozs7Ozs7O09BU0c7SUFFSCxTQUFTO0lBQ1Q7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3Q0M7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdDQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E4QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUNBO0lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW9CQztJQUVEOzs7Ozs7OztPQVFHO0lBRUgsYUFBYTtJQUNiOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0NDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNkJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErQkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUNBO0lBQ0E7Ozs7Ozs7OztPQVNHO0lBRUgsTUFBTTtJQUNOOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXFEQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBK0JDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUVILGNBQWM7SUFDZDs7Ozs7Ozs7O09BU0c7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2QkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStCQTtJQUNBOzs7Ozs7Ozs7T0FTRztJQUNILGtCQUFrQjtJQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCQztJQUVELGFBQWE7SUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdU9DO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5RUM7SUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0VDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5RUM7SUFFRCxtQkFBbUI7SUFFbkIsbUJBQW1CO0lBRW5CLGtCQUFrQjtJQUVsQixvQkFBb0I7SUFFcEIsY0FBYztJQUVkLFlBQVk7SUFFWixZQUFZO0lBRVosZUFBZTtJQUVmLG1CQUFtQjtJQUVuQixZQUFZO0lBRVosa0JBQWtCO0lBRWxCLGFBQWE7SUFDYixFQUFFO0lBQ0Ysb0JBQW9CO0lBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUNDO0lBQ0QsbUJBQW1CO0lBRW5CLGFBQWE7SUFDYixHQUFHO0lBQ0gsb0JBQW9CO0lBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvQ0M7SUFFRCxtQkFBbUI7SUFFbkIsYUFBYTtJQUNiLEVBQUU7SUFDRixxQkFBcUI7SUFFckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQ0M7SUFFRCxhQUFhO0lBQ2IsRUFBRTtJQUNGLGFBQWE7SUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpRUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBEQztJQUNELGFBQWE7SUFDYixFQUFFO0lBQ0YsYUFBYTtJQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThEQztJQUVELE1BQU07SUFFTixjQUFjO0lBRWQsUUFBUTtJQUNSOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0VDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcURDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkRDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkRDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStEQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGVBQWU7SUFFZixTQUFTO0lBQ1Q7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3Q0M7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlDQztJQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNDQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWlFQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGFBQWE7SUFFYixPQUFPO0lBQ1A7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBGQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0ZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeUZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyRkM7SUFDRDs7Ozs7Ozs7O09BU0c7SUFFSCxrQkFBa0I7SUFFbEIsWUFBWTtJQUNaOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5REM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQ0M7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQ0M7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQ0M7SUFDRDs7Ozs7Ozs7O09BU0c7SUFFSCw2QkFBNkI7SUFFN0IsdUJBQXVCO0lBQ3ZCOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNkRDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvREM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyREM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdFQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGlCQUFpQjtJQUVqQiwyQ0FBMkM7SUFFM0MsV0FBVztJQUNYOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0REM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeURDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlEQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0REM7SUFDRDs7Ozs7Ozs7O09BU0c7SUFFSCxrQkFBa0I7SUFFbEIsWUFBWTtJQUNaOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5REM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0RDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1EQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdEQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGlCQUFpQjtJQUVqQixXQUFXO0lBQ1g7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTREQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5REM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0VDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTREQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILHdCQUF3QjtJQUV4QixrQkFBa0I7SUFDbEI7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnRUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNERDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwREM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBK0RDO0lBQ0Q7Ozs7Ozs7OztPQVNHO0lBRUgsb0JBQW9CO0lBRXBCLGNBQWM7SUFDZDs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXFDQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZCQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1DQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGtCQUFrQjtJQUVsQixrQkFBa0I7SUFFbEIsWUFBWTtJQUNaOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0NDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0NDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrQ0M7SUFDRDs7Ozs7Ozs7O09BU0c7SUFFSCxrQkFBa0I7SUFFbEIsWUFBWTtJQUNaOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3RkM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJGQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTRGQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGtCQUFrQjtJQUNsQjs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTRFQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNkRDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnRUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0VDO0lBQ0Q7Ozs7Ozs7OztPQVNHO0lBRUgsd0JBQXdCO0lBRXhCLG1CQUFtQjtJQUNuQjs7Ozs7Ozs7O09BU0c7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwRUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZEQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWlFQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUVDO0lBQ0Q7Ozs7Ozs7OztPQVNHO0lBRUgseUJBQXlCO0lBRXpCLGdCQUFnQjtJQUVoQixVQUFVO0lBQ1Y7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeUZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwR0M7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtGQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1RkM7SUFDRDs7Ozs7Ozs7O09BU0c7SUFFSCx5QkFBeUI7SUFFekIsbUJBQW1CO0lBQ25COzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVFQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUVDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBb0VDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdFQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUVILGFBQWE7SUFFYixPQUFPO0lBQ1A7Ozs7Ozs7OztPQVNHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZGQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlGQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkZDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBGQztJQUNEOzs7Ozs7Ozs7T0FTRztJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEVDO0lBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRztRQUN2QyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDbkIsU0FBUyxFQUNULFNBQVMsRUFDVCx3Q0FBd0MsQ0FDekMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkIsSUFBSSxPQUFPLEdBQUc7WUFDWixNQUFNLEVBQUUsSUFBSTtZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLEtBQUs7YUFDZDtTQUNGLENBQUM7UUFFRixJQUFJLElBQUksR0FDTixRQUFRO1lBQ1Isd0ZBQXdGO1lBQ3hGLHlCQUF5QjtZQUN6QixzQ0FBc0M7WUFDdEMsNENBQTRDO1lBQzVDLHNEQUFzRDtZQUN0RCxTQUFTO1lBQ1Qsd0JBQXdCO1lBQ3hCLDhEQUE4RDtZQUM5RCxTQUFTO1lBQ1QsU0FBUyxDQUFDO1FBRVosR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHO1lBQy9ELElBQUksR0FBRztnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7UUFDaEQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlCLDBEQUEwRDtRQUMxRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLE9BQU8sR0FBRztZQUNaLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsTUFBTTthQStCZjtTQUNGLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixHQUFHO2FBQ0EsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7YUFDckIsTUFBTSxDQUFDLDBCQUEwQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxVQUMxRCxHQUFHLEVBQ0gsR0FBRztZQUVILElBQUksR0FBRztnQkFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7UUFDekMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwQzs7O1VBR0U7UUFDRixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FDUiwwREFBMEQsRUFDMUQ7WUFDRSxJQUFJLEVBQUUsZUFBZTtZQUNyQixRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsUUFBUTtZQUNsQixtbEJBQW1sQjtZQUNubEIsSUFBSSxFQUFFLG9DQUFvQztTQUMzQyxFQUNELFVBQVUsR0FBRyxJQUFHLENBQUMsQ0FDbEIsQ0FBQztRQUNGLHFIQUFxSDtRQUNySCxNQUFNO0lBQ1IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixjQUFjO0FBRWQsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLy9zY1xubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgc3RyID0gJyc7XG52YXIgc2xlZXAgPSByZXF1aXJlKCdzbGVlcCcpO1xuXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xubGV0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xubGV0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xubGV0IHVwbG9hZCA9IG11bHRlcigpO1xubGV0IHBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7XG5jb25zdCB4bWwyanMgPSByZXF1aXJlKCd4bWwyanMnKTtcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxubGV0IHhtbFBhcnNlciA9IHJlcXVpcmUoJ3htbDJqc29uJyk7IC8vcG91ciBwYXJzZXIgZGUgeG1sLS0+anNvblxubGV0IGNvbnZlcnQgPSByZXF1aXJlKCd4bWwtanMnKTtcbnZhciBqczJ4bWxwYXJzZXIgPSByZXF1aXJlKCdqczJ4bWxwYXJzZXInKTsgLy9wb3VyIHBhcnNlciBqc29uLS0tPnhtbFxuXG4vL3NjXG5cbmNvbnN0IGFnZW5jZSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuYWdlbmNlO1xuXG5jb25zdCBhZXJvcG9ydDEgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmFlcm9wb3J0O1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKmFwaSByYWZhaGlhOioqKioqKioqKioqKipcbmNvbnN0IENsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmNsaWVudENvbXBhbnk7XG5jb25zdCBUcmlwID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS50cmlwO1xuY29uc3QgRHJpdmVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5kcml2ZXI7XG5cbmNvbnN0IFBhc3NlcG9ydCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykucGFzc2Vwb3J0O1xuY29uc3QgUGVyc29uYWxHcm91cCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykucGVyc29uYWxHcm91cDtcbmNvbnN0IFZlaGljdWxlRmxlZXQgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnZlaGljdWxlRmxlZXQ7XG5jb25zdCBQcmljZSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykucHJpY2U7XG5jb25zdCBQYXNzZW5nZXJMdWdnYWdlID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5wYXNzZW5nZXJMdWdnYWdlO1xuY29uc3QgUHJvZm9ybWEgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnByb2Zvcm1hSW52b2ljZTtcbmNvbnN0IFN0b3BvdmVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5zdG9wb3ZlcjtcbmNvbnN0IFRlY2huaWNhbEluc3BlY3Rpb24gPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmluc3BlY3Rpb247XG5jb25zdCBWZWhpY3VsZUluc3VyYW5jZSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuaW5zdXJhbmNlO1xuY29uc3QgVmVoaWN1bGVNYWludGVuYW5jZSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykubWFpbnRlbmFuY2U7XG5jb25zdCBUdmEgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnR2YTtcbmNvbnN0IFRyaXBEcml2ZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLnRyaXBEcml2ZXI7XG5jb25zdCBUcmlwVXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuVHJpcFVzdWFsQ3VzdG9tZXI7XG5jb25zdCBUcmlwQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudHJpcENsaWVudENvbXBhbnk7XG5jb25zdCBUcmFkZU1hcmdpbiA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudHJhZGVNYXJnaW47XG5jb25zdCBSZW50ID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS5yZW50O1xuY29uc3QgVXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudXN1YWxDdXN0b21lcjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqYXBpIHJhZmFoaWE6KioqKioqKioqKioqKlxuXG4vLyBURVNUIEJFU1NBTVxuY29uc3QgdGVzdDEgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmxpc3Q7XG5jb25zdCBob3RlbCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykuaG90ZWwxO1xuY29uc3QgaW1hZ2UgPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmltYWdlMTtcblxuLy9jb25zdCBhdXRoPSByZXF1aXJlKCcuLi9jb250cm9sbGVycycpLmF1dGg7XG5cbmltcG9ydCAqIGFzIHByb2Nlc3N1cyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbi8vY29uc3QgdXNlclNlcnZpY2U9cmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS51c2VyO1xuY29uc3QgdGFibGVhdSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzJykudGFibGVhdTtcbi8vY29uc3QgdmlsbGUxID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMnKS52aWxsZTE7XG5sZXQgV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZvcm1pZGFibGUgPSByZXF1aXJlKCdmb3JtaWRhYmxlJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG4vLyBhcGkgcm91dGVzXG5cbi8vIGdsb2JhbCBlcnJvciBoYW5kbGVyXG5cbm1vZHVsZS5leHBvcnRzID0gKGFwcCkgPT4ge1xuICBhcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LHVpeCxGcm9tLEF1dGhvcml6YXRpb24gJ1xuICAgICk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJyxcbiAgICAgICdQT1NULCBHRVQsIFBVVCwgREVMRVRFLCBPUFRJT05TJ1xuICAgICk7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiIG1pZGRsZXdhcmUgYXBwICMjIyMjXCIscmVxLmJvZHkpXG5cbiAgICAvL2xvZ2luXG4gICAgLyoqXG4gICAgICogQGFwaURlZmluZSBsb2dpbk5vdEZvdW5kRXJyb3JcbiAgICAgKiBAYXBpRXJyb3IgIGxvZ2luTm90Rm91bmQgIDxjb2RlPmxvZ2luPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAgICpcbiAgICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAgICogICAgIHtcbiAgICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJsb2dpbiBwYXMgdHJvdXbDqWVcIlxuICAgICAqICAgICB9XG4gICAgICovXG4gICAgLyoqXG4qIEBhcGkge3Bvc3R9IC9sb2dpbi8gIGxvZ2luXG4qIEBhcGlOYW1lIExvZ2luXG4qIEBhcGlHcm91cCAgTG9naW5cbipcblxuICogQGFwaVBhcmFtIHtTdHJpbmd9ICBsb2dpbi5cbiAqIEBhcGlQYXJhbSB7U3RyaW5nfSAgcGFzc3dvcmQgaGFzaDUxMi5cblxuKiBAYXBpU3VjY2VzcyB7dXNlcn0gdXNlci5cbiogQGFwaVN1Y2Nlc3Mge2FnZW5jZX0gYWdlbmNlICAuXG4qIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRva2VuIC5cblxuXG5cbiogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4qICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICBcInVzZXJcIjoge1xuICAgICAgICBcImlkXCI6IDQyMyxcbiAgICAgICAgXCJsb2dpblwiOiBcImRvdGNvbVwiLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGVzdC1kb3Rjb21cIixcbiAgICAgICAgXCJhZG1pblwiOiAwLFxuICAgICAgICBcInJvbGVcIjogXCJVc2VyXCJcbiAgICB9LFxuICAgIFwiYWdlbmNlXCI6IHtcbiAgICAgICAgXCJpZFwiOiA0LFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGVzdCBkb3Rjb21cIixcbiAgICAgICAgXCJsb2dvXCI6IFwiZG90Y29tLmpwZ1wiLFxuICAgICAgICBcInR2YVwiOiBcIjEyMzQ1XCIsXG4gICAgICAgIFwidGVsXCI6IFwiNzIyODMzM1wiLFxuICAgICAgICBcImZheFwiOiBcIjExMVwiLFxuICAgICAgICBcImVtYWlsXCI6IFwibWVoZXJheWVkLmRvdGNvbUBnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcInRlc3RcIixcbiAgICAgICAgXCJsb2dpblwiOiBcImRvdGNvbVwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3Jlc2VydmF0aW9uXCI6IDUwMCxcbiAgICAgICAgXCJtYXhfdG90YWxcIjogMTAwMDAwMCxcbiAgICAgICAgXCJhZG1pblwiOiAxLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IFwiNjA3NjYuOSBUTkQgPGJyIC8+IFBheWVyIDogLTExNjIuNSBUTkQgPGJyIC8+SW1wYXllciA6IDYxOTI5LjQgVE5EXCIsXG4gICAgICAgIFwibmJfcmVzZXJ2YXRpb25cIjogMjI5LFxuICAgICAgICBcInBheWVlXCI6IC0xMTYyLjUsXG4gICAgICAgIFwiaW1wYXllZVwiOiA2MTkyOS40LFxuICAgICAgICBcInJvdWdlXCI6IDEwLFxuICAgICAgICBcIm1hcmdlX21vdXJhZGlcIjogNSxcbiAgICAgICAgXCJ0b3RhbFwiOiA2MDc2Ni45LFxuICAgICAgICBcImF1dG9fZW1haWxcIjogMCxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJUTkRcIixcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAxLFxuICAgICAgICBcInRhdXhfZHpkXCI6IDAsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwicG9ydGFibGVcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ0b2tlblwiOiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNklrcFhWQ0o5LmV5SnpkV0lqUXlNeXdpY205c1pTSTZJbFZ6WlhJaUxDSnBZWFFpT2pFMU5EazJNekk1TXpSOS42aTVJSGY1Q2t1ZzNZRlltZkJ4R2dJYmVnZXJTbHF5X0J0MXB4LWJzOUFZXCJcbn1cbiogQGFwaVVzZSAgbG9naW5Ob3RGb3VuZEVycm9yXG4qL1xuICAgIC8vIGFwcC51c2UoJy91c2VycycsIHJlcXVpcmUoJy4uL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXInKSk7XG5cbiAgICBuZXh0KCk7XG4gIH0pO1xuICB2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgLypcbmNvbnN0IHIgPSByZXF1aXJlKCdyZXRoaW5rZGInKTtcbnZhciBjb25uZWN0aW9uID0gbnVsbDtcbnIuY29ubmVjdCgge2hvc3Q6ICdsb2NhbGhvc3QnLCBwb3J0OiAyODAxNX0sIGZ1bmN0aW9uKGVyciwgY29ubikge1xuICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gIGNvbm5lY3Rpb24gPSBjb25uO1xuICByLmRiKCdraGFsZWRfdGFzbmltZScpLnRhYmxlQ3JlYXRlKCdzZWFyY2hzJykucnVuKGNvbm5lY3Rpb24sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpO1xuICB9KVxufSlcbiovXG4gIC8qXG5jb25zdCB1dWlkdjEgPSByZXF1aXJlKCd1dWlkL3YxJyk7XG52YXIgV2ViU29ja2V0U2VydmVyID0gcmVxdWlyZSgnd3MnKS5TZXJ2ZXIsXG4gICAgd3NzID0gbmV3IFdlYlNvY2tldFNlcnZlcih7cG9ydDo0MDU1MH0pLFxuICAgIENMSUVOVFM9W107XG5cbndzcy5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uKHdzKSB7XG4gICBjb25zdCBuYW91ZWw9IHV1aWR2MSgpXG4gIENMSUVOVFMucHVzaCh7dXVpZDpuYW91ZWwsd3M6d3N9KTtcbiAgICB3cy5vbignbWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWNlaXZlZDogJXMnLCBtZXNzYWdlKTtcbiAgICAgIGlmICh3cy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgIC8vICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsSlNPTi5wYXJzZShtZXNzYWdlKSlcbiAgICBzZW5kQWxsKEpTT04ucGFyc2UobWVzc2FnZSkpO1xuICAgICAgfSAgXG4gICAgfSk7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgIHdzLnNlbmQobmFvdWVsKVxuICAgICAgfVxuICAgICAgIFxuICAgICAgIFxuICAgICBcbiAgXG59KTtcblxuLy9jb25zdCBjaGVyY2hlPShjb3VudCxpZGhvdGVsLGNvbnRlbnUpPT5cbi8ve1xuLy9yZXR1cm4ganNvbkNvbnRlbnQxLkhvdGVsU2VhcmNoUkVTLkhvdGVscy5Ib3RlbFswXVxuLy99XG5mdW5jdGlvbiBzZW5kQWxsIChtZXNzYWdlKSB7XG4gICAgZm9yICh2YXIgaT0wOyBpPENMSUVOVFMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImNsaWVudCBcIixDTElFTlRTW2ldLnV1aWQsXCIgXCIsbWVzc2FnZS51aXgpXG4gICAgXG4gICAgNDA1NSAgaWYoQ0xJRU5UU1tpXS51dWlkPT1tZXNzYWdlLnVpeClcbiAgICAgIHtcbiAgICAgIC8vICAgIGNvbnNvbGUubG9nKCBtZXNzYWdlLmNvbnRlbnQpXG5cbiAgbWVzc2FnZS5jb250ZW50ID0gbWVzc2FnZS5jb250ZW50LnJlcGxhY2UoL1teXFx4MDAtXFx4N0ZdL2csXCJcIik7XG4gIGlmIChDTElFTlRTW2ldLndzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gLy8gICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UuY29udGVudC50b1N0cmluZygndXRmOCcpKVxuICAgIENMSUVOVFNbaV0ud3Muc2VuZCggU3RyaW5nKG1lc3NhZ2UuY29udGVudC50b1N0cmluZygndXRmOCcpKSk7XG4gIH1cblxuICAgICAgfVxuICAgICAgICBcbiAgICB9XG59Ki9cbiAgLy8gcm91dGVzXG5cbiAgLy9wYXJhbWV0cmVcbiAgLy9tb2RpZmllciByZXNlcnZhdGlvblxuXG4gIC8vbW9kaWZpZXIgcmVzZXJ2YXRpb24vL1xuXG4gIC8vbW9kaWZpZXIgcmVzZXJ2YXRpb24vL1xuXG4gIC8vbW9kaWZpZXIgcmVzZXJ2YXRpb25cblxuICAvLyBhZG1pbiBvbmx5XG4gIC8vbW91cmFkaS1zb3VoaXJcbiAgLy9tb3VyYWRpLXNvdWhpci0wOC0wNC0yMDIwXG5cbiAgLy9zYy0wNC0wNS0yMDIwXG5cbiAgLy9tb3VyYWRpLXNvdWhpci0wOC0wNC0yMDIwXG5cbiAgLy9zYy0xOFxuXG4gIGFwcC5wb3N0KCcvYXBpUkYvYWVyb3BvcnQvaW5zZXJ0JywgYWVyb3BvcnQxLmluc2VydEFlcm9wb3J0KTtcbiAgYXBwLnB1dCgnL2FwaVJGL2Flcm9wb3J0L3VwZGF0ZS86aWQnLCBhZXJvcG9ydDEudXBkYXRlQWVyb3BvcnQpO1xuICBhcHAuZ2V0KCcvYXBpUkYvYWVyb3BvcnQvcmVhZC86aWQnLCBhZXJvcG9ydDEucmVhZEFlcm9wb3J0KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL2Flcm9wb3J0L2RlbGV0ZS86aWQnLCBhZXJvcG9ydDEuZGVsZXRlQWVyb3BvcnQpO1xuXG4gIC8vKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICAvLyoqY2xpZW50IGNvbXBhbnkgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9jbGllbnRDb21wYW55L2luc2VydCcsIENsaWVudENvbXBhbnkuaW5zZXJ0Q2xpZW50KTtcbiAgYXBwLnB1dCgnL2FwaVJGL2NsaWVudENvbXBhbnkvdXBkYXRlLzppZCcsIENsaWVudENvbXBhbnkudXBkYXRlQ2xpZW50KTtcbiAgYXBwLmdldCgnL2FwaVJGL2NsaWVudENvbXBhbnkvcmVhZC86aWQnLCBDbGllbnRDb21wYW55LnJlYWRDbGllbnQpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvY2xpZW50Q29tcGFueS9kZWxldGUvOmlkJywgQ2xpZW50Q29tcGFueS5kZWxldGVDbGllbnQpO1xuICAvLyoqdHJpcCoqICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvdHJpcC9pbnNlcnQnLCBUcmlwLmluc2VydFRyaXApO1xuICBhcHAucHV0KCcvYXBpUkYvdHJpcC91cGRhdGUvOmlkJywgVHJpcC51cGRhdGVUcmlwKTtcbiAgYXBwLmdldCgnL2FwaVJGL3RyaXAvcmVhZC86aWQnLCBUcmlwLnJlYWRUcmlwKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL3RyaXAvZGVsZXRlLzppZCcsIFRyaXAuZGVsZXRlVHJpcCk7XG4gIC8vKipkcml2ZXIqICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvZHJpdmVyL2luc2VydCcsIERyaXZlci5pbnNlcnREcml2ZXIpO1xuICBhcHAucHV0KCcvYXBpUkYvZHJpdmVyL3VwZGF0ZS86aWQnLCBEcml2ZXIudXBkYXRlRHJpdmVyKTtcbiAgYXBwLmdldCgnL2FwaVJGL2RyaXZlci9yZWFkLzppZCcsIERyaXZlci5yZWFkRHJpdmVyKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL2RyaXZlci9kZWxldGUvOmlkJywgRHJpdmVyLmRlbGV0ZURyaXZlcik7XG4gIC8vKipVc3VhbCBDdXN0b21lciAqL1xuICBhcHAucG9zdCgnL2FwaVJGL1VzdWFsQ3VzdG9tZXIvaW5zZXJ0JywgVXN1YWxDdXN0b21lci5pbnNlcnRVc3VhbEN1c3RvbWVyKTtcbiAgYXBwLnB1dCgnL2FwaVJGL1VzdWFsQ3VzdG9tZXIvdXBkYXRlLzppZCcsIFVzdWFsQ3VzdG9tZXIudXBkYXRlVXN1YWxDdXN0b21lcik7XG4gIGFwcC5nZXQoJy9hcGlSRi9Vc3VhbEN1c3RvbWVyL3JlYWQvOmlkJywgVXN1YWxDdXN0b21lci5yZWFkVXN1YWxDdXN0b21lcik7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi9Vc3VhbEN1c3RvbWVyL2RlbGV0ZS86aWQnLFxuICAgIFVzdWFsQ3VzdG9tZXIuZGVsZXRlVXN1YWxDdXN0b21lclxuICApO1xuICAvLyoqcGFzc2Vwb3J0KiAqL1xuICBhcHAucG9zdCgnL2FwaVJGL3Bhc3NlcG9ydC9pbnNlcnQnLCBQYXNzZXBvcnQuaW5zZXJ0UGFzc2Vwb3J0KTtcbiAgYXBwLnB1dCgnL2FwaVJGL3Bhc3NlcG9ydC91cGRhdGUvOmlkJywgUGFzc2Vwb3J0LnVwZGF0ZVBhc3NlcG9ydCk7XG4gIGFwcC5nZXQoJy9hcGlSRi9wYXNzZXBvcnQvcmVhZC86aWQnLCBQYXNzZXBvcnQucmVhZFBhc3NlcG9ydCk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9wYXNzZXBvcnQvZGVsZXRlLzppZCcsIFBhc3NlcG9ydC5kZWxldGVQYXNzZXBvcnQpO1xuICAvLyoqcGVyc29uYWxHcm91cCAqL1xuICBhcHAucG9zdCgnL2FwaVJGL3BlcnNvbmFsR3JvdXAvaW5zZXJ0JywgUGVyc29uYWxHcm91cC5pbnNlcnRQZXJzb25hbEdyb3VwKTtcbiAgYXBwLnB1dCgnL2FwaVJGL3BlcnNvbmFsR3JvdXAvdXBkYXRlLzppZCcsIFBlcnNvbmFsR3JvdXAudXBkYXRlUGVyc29uYWxHcm91cCk7XG4gIGFwcC5nZXQoJy9hcGlSRi9wZXJzb25hbEdyb3VwL3JlYWQvOmlkJywgUGVyc29uYWxHcm91cC5yZWFkUGVyc29uYWxHcm91cCk7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi9wZXJzb25hbEdyb3VwL2RlbGV0ZS86aWQnLFxuICAgIFBlcnNvbmFsR3JvdXAuZGVsZXRlUGVyc29uYWxHcm91cFxuICApO1xuICAvLyoqdmVoaWN1bGVGbGVldCAqKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi92ZWhpY3VsZUZsZWV0L2luc2VydCcsIFZlaGljdWxlRmxlZXQuaW5zZXJ0VmVoaWN1bGUpO1xuICBhcHAucHV0KCcvYXBpUkYvdmVoaWN1bGVGbGVldC91cGRhdGUvOmlkJywgVmVoaWN1bGVGbGVldC51cGRhdGVWZWhpY3VsZSk7XG4gIGFwcC5nZXQoJy9hcGlSRi92ZWhpY3VsZUZsZWV0L3JlYWQvOmlkJywgVmVoaWN1bGVGbGVldC5yZWFkVmVoaWN1bGUpO1xuICBhcHAuZGVsZXRlKCcvYXBpUkYvdmVoaWN1bGVGbGVldC9kZWxldGUvOmlkJywgVmVoaWN1bGVGbGVldC5kZWxldGVWZWhpY3VsZSk7XG4gIC8vKipwcmljZSAqL1xuICBhcHAucG9zdCgnL2FwaVJGL3ByaWNlL2luc2VydCcsIFByaWNlLmluc2VydFByaWNlKTtcbiAgYXBwLnB1dCgnL2FwaVJGL3ByaWNlL3VwZGF0ZS86aWQnLCBQcmljZS51cGRhdGVQcmljZSk7XG4gIGFwcC5nZXQoJy9hcGlSRi9wcmljZS9yZWFkLzppZCcsIFByaWNlLnJlYWRQcmljZSk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9wcmljZS9kZWxldGUvOmlkJywgUHJpY2UuZGVsZXRlUHJpY2UpO1xuICAvLyoqcGFzc2VuZ2VyTHVnZ2FnZSAqL1xuICBhcHAucG9zdCgnL2FwaVJGL2x1Z2dhZ2UvaW5zZXJ0JywgUGFzc2VuZ2VyTHVnZ2FnZS5pbnNlcnRMdWdnYWdlKTtcbiAgYXBwLnB1dCgnL2FwaVJGL2x1Z2dhZ2UvdXBkYXRlLzppZCcsIFBhc3Nlbmdlckx1Z2dhZ2UudXBkYXRlTHVnZ2FnZSk7XG4gIGFwcC5nZXQoJy9hcGlSRi9sdWdnYWdlL3JlYWQvOmlkJywgUGFzc2VuZ2VyTHVnZ2FnZS5yZWFkTHVnZ2FnZSk7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi9sdWdnYWdlL2RlbGV0ZS86aWQnLCBQYXNzZW5nZXJMdWdnYWdlLmRlbGV0ZUx1Z2dhZ2UpO1xuICAvLyoqcHJvZm9ybWFJbnZvaWNlICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvcHJvZm9ybWFJbnZvaWNlL2luc2VydCcsIFByb2Zvcm1hLmluc2VydFByb2Zvcm1hKTtcbiAgYXBwLnB1dCgnL2FwaVJGL3Byb2Zvcm1hSW52b2ljZS91cGRhdGUvOmlkJywgUHJvZm9ybWEudXBkYXRlUHJvZm9ybWEpO1xuICBhcHAuZ2V0KCcvYXBpUkYvcHJvZm9ybWFJbnZvaWNlL3JlYWQvOmlkJywgUHJvZm9ybWEucmVhZFByb2Zvcm1hKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL3Byb2Zvcm1hSW52b2ljZS9kZWxldGUvOmlkJywgUHJvZm9ybWEuZGVsZXRlUHJvZm9ybWEpO1xuICAvLyoqc3RvcG92ZXIqICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvc3RvcG92ZXIvaW5zZXJ0JywgU3RvcG92ZXIuaW5zZXJ0U3RvcG92ZXIpO1xuICBhcHAucHV0KCcvYXBpUkYvc3RvcG92ZXIvdXBkYXRlLzppZCcsIFN0b3BvdmVyLnVwZGF0ZVN0b3BvdmVyKTtcbiAgYXBwLmdldCgnL2FwaVJGL3N0b3BvdmVyL3JlYWQvOmlkJywgU3RvcG92ZXIucmVhZFN0b3BvdmVyKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL3N0b3BvdmVyL2RlbGV0ZS86aWQnLCBTdG9wb3Zlci5kZWxldGVTdG9wb3Zlcik7XG4gIC8vKip0ZWNobmljYWwgaW5zcGVjdGlvbiAqL1xuICBhcHAucG9zdChcbiAgICAnL2FwaVJGL3RlY2huaWNhbEluc3BlY3Rpb24vaW5zZXJ0JyxcbiAgICBUZWNobmljYWxJbnNwZWN0aW9uLmluc2VydEluc3BlY3Rpb25cbiAgKTtcbiAgYXBwLnB1dChcbiAgICAnL2FwaVJGL3RlY2huaWNhbEluc3BlY3Rpb24vdXBkYXRlLzppZCcsXG4gICAgVGVjaG5pY2FsSW5zcGVjdGlvbi51cGRhdGVJbnNwZWN0aW9uXG4gICk7XG4gIGFwcC5nZXQoXG4gICAgJy9hcGlSRi90ZWNobmljYWxJbnNwZWN0aW9uL3JlYWQvOmlkJyxcbiAgICBUZWNobmljYWxJbnNwZWN0aW9uLnJlYWRJbnNwZWN0aW9uXG4gICk7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi90ZWNobmljYWxJbnNwZWN0aW9uL2RlbGV0ZS86aWQnLFxuICAgIFRlY2huaWNhbEluc3BlY3Rpb24uZGVsZXRlSW5zcGVjdGlvblxuICApO1xuICAvLyoqdmVoaWN1bGUgaW5zdXJhbmNlICovXG4gIGFwcC5wb3N0KFxuICAgICcvYXBpUkYvdmVoaWN1bGVJbnN1cmFuY2UvaW5zZXJ0JyxcbiAgICBWZWhpY3VsZUluc3VyYW5jZS5pbnNlcnRJbnN1cmFuY2VcbiAgKTtcbiAgYXBwLnB1dChcbiAgICAnL2FwaVJGL3ZlaGljdWxlSW5zdXJhbmNlL3VwZGF0ZS86aWQnLFxuICAgIFZlaGljdWxlSW5zdXJhbmNlLnVwZGF0ZUluc3VyYW5jZVxuICApO1xuICBhcHAuZ2V0KCcvYXBpUkYvdmVoaWN1bGVJbnN1cmFuY2UvcmVhZC86aWQnLCBWZWhpY3VsZUluc3VyYW5jZS5yZWFkSW5zdXJhbmNlKTtcbiAgYXBwLmRlbGV0ZShcbiAgICAnL2FwaVJGL3ZlaGljdWxlSW5zdXJhbmNlL2RlbGV0ZS86aWQnLFxuICAgIFZlaGljdWxlSW5zdXJhbmNlLmRlbGV0ZUluc3VyYW5jZVxuICApO1xuICAvLyoqdmVoaWN1bGUgbWFpbnRlbmFuY2UgKi9cbiAgYXBwLnBvc3QoJy9hcGlSRi9tYWludGVuYW5jZS9pbnNlcnQnLCBWZWhpY3VsZU1haW50ZW5hbmNlLmluc2VydE1haW50ZW5hbmNlKTtcbiAgYXBwLnB1dChcbiAgICAnL2FwaVJGL21haW50ZW5hbmNlL3VwZGF0ZS86aWQnLFxuICAgIFZlaGljdWxlTWFpbnRlbmFuY2UudXBkYXRlTWFpbnRlbmFuY2VcbiAgKTtcbiAgYXBwLmdldCgnL2FwaVJGL21haW50ZW5hbmNlL3JlYWQvOmlkJywgVmVoaWN1bGVNYWludGVuYW5jZS5yZWFkTWFpbnRlbmFuY2UpO1xuICBhcHAuZGVsZXRlKFxuICAgICcvYXBpUkYvbWFpbnRlbmFuY2UvZGVsZXRlLzppZCcsXG4gICAgVmVoaWN1bGVNYWludGVuYW5jZS5kZWxldGVNYWludGVuYW5jZVxuICApO1xuICAvLyoqVFZBICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvdHZhL2luc2VydCcsIFR2YS5pbnNlcnRUdmEpO1xuICBhcHAucHV0KCcvYXBpUkYvdHZhL3VwZGF0ZS86aWQnLCBUdmEudXBkYXRlVHZhKTtcbiAgYXBwLmdldCgnL2FwaVJGL3R2YS9yZWFkLzppZCcsIFR2YS5yZWFkVHZhKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL3R2YS9kZWxldGUvOmlkJywgVHZhLmRlbGV0ZVR2YSk7XG4gIC8vKipUcmlwIERyaXZlciAqL1xuICBhcHAucG9zdCgnL2FwaVJGL3RyaXBEcml2ZXIvaW5zZXJ0JywgVHJpcERyaXZlci5pbnNlcnRUcmlwRHJpdmVyKTtcbiAgYXBwLnB1dCgnL2FwaVJGL3RyaXBEcml2ZXIvdXBkYXRlLzppZCcsIFRyaXBEcml2ZXIudXBkYXRlVHJpcERyaXZlcik7XG4gIGFwcC5nZXQoJy9hcGlSRi90cmlwRHJpdmVyL3JlYWQvOmlkJywgVHJpcERyaXZlci5yZWFkVHJpcERyaXZlcik7XG4gIGFwcC5kZWxldGUoJy9hcGlSRi90cmlwRHJpdmVyL2RlbGV0ZS86aWQnLCBUcmlwRHJpdmVyLmRlbGV0ZVRyaXBEcml2ZXIpO1xuICAvLypUcmlwIFBhc3NlbmdlclxuICBhcHAucG9zdChcbiAgICAnL2FwaVJGL1RyaXBVc3VhbEN1c3RvbWVyL2luc2VydCcsXG4gICAgVHJpcFVzdWFsQ3VzdG9tZXIuaW5zZXJ0VHJpcFVzdWFsQ3VzdG9tZXJcbiAgKTtcbiAgYXBwLnB1dChcbiAgICAnL2FwaVJGL1RyaXBVc3VhbEN1c3RvbWVyL3VwZGF0ZS86aWQnLFxuICAgIFRyaXBVc3VhbEN1c3RvbWVyLnVwZGF0ZVRyaXBVc3VhbEN1c3RvbWVyXG4gICk7XG4gIGFwcC5nZXQoXG4gICAgJy9hcGlSRi9UcmlwVXN1YWxDdXN0b21lci9yZWFkLzppZCcsXG4gICAgVHJpcFVzdWFsQ3VzdG9tZXIucmVhZFRyaXBVc3VhbEN1c3RvbWVyXG4gICk7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi9UcmlwVXN1YWxDdXN0b21lci9kZWxldGUvOmlkJyxcbiAgICBUcmlwVXN1YWxDdXN0b21lci5kZWxldGVUcmlwVXN1YWxDdXN0b21lclxuICApO1xuICAvLyoqVHJpcCBDbGllbnQgQ29tcGFueSAqL1xuICBhcHAucG9zdChcbiAgICAnL2FwaVJGL1RyaXBDbGllbnRDb21wYW55L2luc2VydCcsXG4gICAgVHJpcENsaWVudENvbXBhbnkuaW5zZXJ0VHJpcENsaWVudENvbXBhbnlcbiAgKTtcbiAgYXBwLnB1dChcbiAgICAnL2FwaVJGL1RyaXBDbGllbnRDb21wYW55L3VwZGF0ZS86aWQnLFxuICAgIFRyaXBDbGllbnRDb21wYW55LnVwZGF0ZVRyaXBDbGllbnRDb21wYW55XG4gICk7XG4gIGFwcC5nZXQoXG4gICAgJy9hcGlSRi9UcmlwQ2xpZW50Q29tcGFueS9yZWFkLzppZCcsXG4gICAgVHJpcENsaWVudENvbXBhbnkucmVhZFRyaXBDbGllbnRDb21wYW55XG4gICk7XG4gIGFwcC5kZWxldGUoXG4gICAgJy9hcGlSRi9UcmlwQ2xpZW50Q29tcGFueS9kZWxldGUvOmlkJyxcbiAgICBUcmlwQ2xpZW50Q29tcGFueS5kZWxldGVUcmlwQ2xpZW50Q29tcGFueVxuICApO1xuICAvLyoqVHJhZGUgTWFyZ2luICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvVHJhZGVNYXJnaW4vaW5zZXJ0JywgVHJhZGVNYXJnaW4uaW5zZXJ0VHJhZGVNYXJnaW4pO1xuICBhcHAucHV0KCcvYXBpUkYvVHJhZGVNYXJnaW4vdXBkYXRlLzppZCcsIFRyYWRlTWFyZ2luLnVwZGF0ZVRyYWRlTWFyZ2luKTtcbiAgYXBwLmdldCgnL2FwaVJGL1RyYWRlTWFyZ2luL3JlYWQvOmlkJywgVHJhZGVNYXJnaW4ucmVhZFRyYWRlTWFyZ2luKTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL1RyYWRlTWFyZ2luL2RlbGV0ZS86aWQnLCBUcmFkZU1hcmdpbi5kZWxldGVUcmFkZU1hcmdpbik7XG4gIC8vKipSZW50ICovXG4gIGFwcC5wb3N0KCcvYXBpUkYvUmVudC9pbnNlcnQnLCBSZW50Lmluc2VydFJlbnQpO1xuICBhcHAucHV0KCcvYXBpUkYvUmVudC91cGRhdGUvOmlkJywgUmVudC51cGRhdGVSZW50KTtcbiAgYXBwLmdldCgnL2FwaVJGL1JlbnQvcmVhZC86aWQnLCBSZW50LnJlYWRSZW50KTtcbiAgYXBwLmRlbGV0ZSgnL2FwaVJGL1JlbnQvZGVsZXRlLzppZCcsIFJlbnQuZGVsZXRlUmVudCk7XG4gIC8vKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4gIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4gIGFwcC5nZXQoJy9hcGkvZ2V0bGlzdCcsIHRlc3QxLmdldExpc3QpO1xuICBhcHAucG9zdCgnL2FwaS9pbnNlcnRsaXN0JywgdGVzdDEuaW5zZXJ0TGlzdCk7XG4gIGFwcC5wdXQoJy9hcGkvdXBkYXRlbGlzdCcsIHRlc3QxLnVwZGF0ZUxpc3QpO1xuICBhcHAuZGVsZXRlKCcvYXBpL2RlbGV0ZWxpc3QnLCB0ZXN0MS5kZWxldGVMaXN0KTtcbiAgLy8gSG90ZWwgdGFibGUgcm91dGVcbiAgYXBwLmdldCgnL2FwaS9nZXRob3RlbCcsIGhvdGVsLmdldEhvdGVsKTtcbiAgLy9JbWFnZSB0YWJsZSByb3V0ZVxuICBhcHAuZ2V0KCcvYXBpL2dldGltYWdlJywgaW1hZ2UuZ2V0SW1hZ2UpO1xuICAvL0ltYWdlIGpvaW50dXJlXG4gIGFwcC5nZXQoJy9hcGkvZ2V0TmFtZUltYWdlLzppZCcsIGltYWdlLmdldE5hbWVJbWcpO1xuXG4gIGFwcC5nZXQoJy9hcGkvZ2V0aG90ZWwnLCBpbWFnZS5nZXRIb3RlbCk7XG5cbiAgYXBwLmdldCgnL2FwaS9nZXRIb3RlbE5hbWUvOmlkJywgaW1hZ2UuZ2V0SG90ZWxOYW1lKTtcbiAgYXBwLmdldCgnL2FwaS9nZXRob3RlbDEnLCBob3RlbC5nZXRIb3RlbDEpO1xuXG4gIGFwcC5nZXQoJy9hcGkvZ2V0T25lSG90ZWwvOmlkJywgaG90ZWwuZ2V0T25lSG90ZWwpO1xuXG4gIGFwcC5wdXQoJy9hcGkvdXBkYXRlT25lSG90ZWwvOmlkJywgaG90ZWwudXBkYXRlT25lSG90ZWwpO1xuXG4gIC8vbW91cmFkaS1zb3VoaXJcbiAgLy9hcGlncm91cGUgc291aGlyXG5cbiAgY29uc3QgbnVtQ1BVcyA9IHJlcXVpcmUoJ29zJykuY3B1cygpLmxlbmd0aDtcbiAgY29uc29sZS5sb2coJzAwbnVtQ3B1JywgbnVtQ1BVcyk7XG5cbiAgLy9hcHAuZ2V0KCcvYXBpQjJCL3ZpbGxlMScsIHZpbGxlMS5saXN0KTtcbiAgLyphcHAuZ2V0KCcvYXBpQjJCL2N5YmVyZXNhJywocmVxLHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGF4aW9zLmdldCgnaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGwnKSkgXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgfVxufSkqL1xuXG4gIC8vbmV3c1xuICAvKipcbiAgICogQGFwaURlZmluZSBuZXdzTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIG5ld3NOb3RGb3VuZCAgPGNvZGU+bmV3czwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJuZXdzIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiogQGFwaSB7Z2V0fSAvbmV3cy8gIEFMTCBuZXdzXG4qIEBhcGlOYW1lIEdldG5ld3NcbiogQGFwaUdyb3VwICBuZXdzXG4qXG5cbipcblxuKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgbmV3cyAuXG4qIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG1lc3NhZ2UgIC5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZmxhc2ggMC8xLlxuXG5cblxuKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xue1xuXCJpZFwiOiAyLFxuXCJtZXNzYWdlXCI6IFwidGVzdHNzXCIsXG5cImZsYXNoZnVuY3Rpb24gYXV0aGVudGljYXRlKHJlcSwgcmVzLCBuZXh0KSB7OiBcIjFcIixcblwicGVyaW9mdW5jdGlvbiBhdXRoZW50aWNhdGUocmVxLCByZXMsIG5leHQpIHtfZnJvbVwiOiBudWxsLFxuXCJwZXJpb2Z1bmN0aW9uIGF1dGhlbnRpY2F0ZShyZXEsIHJlcywgbmV4dCkge190b1wiOiBudWxsLFxuXCJjcmVhdGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZShyZXEsIHJlcywgbmV4dCkge2RBdFwiOiBcIjIwMTgtMDktMjlUMDk6NTE6NTYuMDAwWlwiLFxuXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA5LTI5VDEwOjE2OjE5LjAwMFpcIlxufSxcbntcblwiaWRcIjogMyxcblwibWVzc2FnZVwiOiBcInRlc3RcIixcblwiZmxhc2hcIjogXCIxXCIsXG5cInBlcmlvZF9mcm9tXCI6IG51bGwsXG5cInBlcmlvZF90b1wiOiBudWxsLFxuXCJjcmVhdGVkQXRcIjogXCIyMDE4LTA5LTI5VDA5OjU2OjIzLjAwMFpcIixcblwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0yOVQwOTo1NjoyMy4wMDBaXCJcbn0sXG57XG5cImlkXCI6IDQsXG5cIm1lc3NhZ2VcIjogXCJtaGhcIixcblwiZmxhc2hcIjogXCJPdWlcIixcblwicGVyaW9kX2Zyb21cIjogbnVsbCxcblwicGVyaW9kX3RvXCI6IG51bGwsXG5cImNyZWF0ZWRBdFwiOiBcIjIwMTgtMDktMjlUMDk6NTY6MjcuMDAwWlwiLFxuXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA5LTI5VDA5OjU2OjI3LjAwMFpcIlxufVxuXVxuKiBAYXBpVXNlICBuZXdzTm90Rm91bmRFcnJvclxuKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL25ld3MvOmlkIEdFVCBuZXdzXG4gKiBAYXBpTmFtZSBHZXRuZXdzXG4gKiBAYXBpR3JvdXAgIG5ld3NcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gIGlkIG5ld3MgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBuZXdzIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG1lc3NhZ2UgIC5cblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZmxhc2ggICAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gIHtcbiAgICAgICAgXCJpZFwiOiA0LFxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJtaGhcIixcbiAgICAgICAgXCJmbGFzaFwiOiBcIk91aVwiLFxuICAgICAgICBcInBlcmlvZF9mcm9tXCI6IG51bGwsXG4gICAgICAgIFwicGVyaW9kX3RvXCI6IG51bGwsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0wOS0yOVQwOTo1NjoyNy4wMDBaXCIsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0yOVQwOTo1NjoyNy4wMDBaXCJcbiAgICB9XG4gKlxuICogQGFwaVVzZSAgbmV3c05vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL25ldy8gUE9TVCBuZXdzXG4gKiBAYXBpTmFtZSBQT1NUbmV3c1xuICogQGFwaUdyb3VwIG5ld3NcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICAgIHtcblxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJtaGhcIixcbiAgICAgICAgXCJmbGFzaFwiOiBcIk91aVwiXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiAge1xuICAgICAgICBcImlkXCI6IDQsXG4gICAgICAgIFwibWVzc2FnZVwiOiBcIm1oaFwiLFxuICAgICAgICBcImZsYXNoXCI6IFwiT3VpXCIsXG4gICAgICAgIFwicGVyaW9kX2Zyb21cIjogbnVsbCxcbiAgICAgICAgXCJwZXJpb2RfdG9cIjogbnVsbCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTA5LTI5VDA5OjU2OjI3LjAwMFpcIixcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA5LTI5VDA5OjU2OjI3LjAwMFpcIlxuICAgIH1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9uZXcvOmlkIFBVVCBuZXdzXG4gKiBAYXBpTmFtZSBQVVRuZXdzXG4gKiBAYXBpR3JvdXAgbmV3c1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICB7XG4gICAgICAgXG4gICAgICAgIFwibWVzc2FnZVwiOiBcIm1oaFwiLFxuICAgICAgICBcImZsYXNoXCI6IFwiT3VpXCJcbiAgICB9XG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuICB7XG4gICAgICAgIFwiaWRcIjogNCxcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwibWhoXCIsXG4gICAgICAgIFwiZmxhc2hcIjogXCJPdWlcIixcbiAgICAgICAgXCJwZXJpb2RfZnJvbVwiOiBudWxsLFxuICAgICAgICBcInBlcmlvZF90b1wiOiBudWxsLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMDktMjlUMDk6NTY6MjcuMDAwWlwiLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDktMjlUMDk6NTY6MjcuMDAwWlwiXG4gICAgfVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvbmV3LzppZCBEZWxldGUgbmV3c1xuICAgKiBAYXBpTmFtZSBERUxFVEVuZXdzXG4gICAqIEBhcGlHcm91cCBuZXdzXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBuZXdzXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2Jhbm5lclxuICAvKipcbiAgICogQGFwaURlZmluZSBiYW5uZXJOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgYmFubmVyTm90Rm91bmQgIDxjb2RlPmJhbm5lcjwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJiYW5uZXIgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYmFubmVycy8gIEFMTCBiYW5uZXJzXG4gKiBAYXBpTmFtZSBHZXRiYW5uZXJzXG4gKiBAYXBpR3JvdXAgIGJhbm5lclxuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGJhbm5lciAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cbiAqIEBhcGlTdWNjZXNzIHtkZWJ1dH0gZGF0ZSBkZWJ1dC5cbiAqIEBhcGlTdWNjZXNzIHtmaW59IGRhdGUgZmluLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgXCJpZFwiOiAxMjYsXG4gICAgXCJub21cIjogXCJzaGVsbCBiZWFjaFwiLFxuICAgIFwidXJsXCI6IFwic2hlbGxfYmVhY2guanBnXCIsXG4gICAgXCJkZWJ1dFwiOiBcIjIwMTgtMDctMDFcIixcbiAgICBcImZpblwiOiBcIjIwMTgtMDctMTVcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjAwMDAtMDAtMDBcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjAwMDAtMDAtMDBcIlxufVxuLi4uLlxuXVxuICAqIEBhcGlVc2UgIGJhbm5lck5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYmFubmVyLzppZCBHRVQgYmFubmVyXG4gKiBAYXBpTmFtZSBHZXRiYW5uZXJcbiAqIEBhcGlHcm91cCAgYmFubmVyXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9ICBpZCBiYW5uZXIgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBiYW5uZXIgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAuXG4gKiBAYXBpU3VjY2VzcyB7ZGVidXR9IGRhdGUgZGVidXQuXG4gKiBAYXBpU3VjY2VzcyB7ZmlufSBkYXRlIGZpbi5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiB7XG4gICAgXCJpZFwiOiAxMjYsXG4gICAgXCJub21cIjogXCJzaGVsbCBiZWFjaFwiLFxuICAgIFwidXJsXCI6IFwic2hlbGxfYmVhY2guanBnXCIsXG4gICAgXCJkZWJ1dFwiOiBcIjIwMTgtMDctMDFcIixcbiAgICBcImZpblwiOiBcIjIwMTgtMDctMTVcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjAwMDAtMDAtMDBcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjAwMDAtMDAtMDBcIlxufVxuICpcbiAqIEBhcGlVc2UgIGJhbm5lck5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2Jhbm5lci8gUE9TVCBiYW5uZXJcbiAqIEBhcGlOYW1lIFBPU1RiYW5uZXJcbiAqIEBhcGlHcm91cCBiYW5uZXJcbiAqXG5cbiAqIEBhcGlwYXJhbSB7RmlsZX0gdXJsIGltYWdlLlxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICAgIHtcblxuICAgICAgICBcIm5vbVwiOiBcIm1oaFwiLFxuICAgICAgICBcImRlYnV0XCI6IFwiMjAxOC0wMS0wMVwiLFxuICAgICAgICBcImZpblwiOiBcIjIwMTgtMTEtMDFcIixcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuICB7XG4gICAgXCJpZFwiOiAxMjYsXG4gICAgXCJub21cIjogXCJzaGVsbCBiZWFjaFwiLFxuICAgIFwidXJsXCI6IFwic2hlbGxfYmVhY2guanBnXCIsXG4gICAgXCJkZWJ1dFwiOiBcIjIwMTgtMDctMDFcIixcbiAgICBcImZpblwiOiBcIjIwMTgtMDctMTVcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjAwMDAtMDAtMDBcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjAwMDAtMDAtMDBcIlxufVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2Jhbm5lci86aWQgUFVUIGJhbm5lclxuICogQGFwaU5hbWUgUFVUYmFubmVyXG4gKiBAYXBpR3JvdXAgYmFubmVyXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICAgdW5pcXVlIElELlxuICogQGFwaXBhcmFtIHtGaWxlfSB1cmwgaW1hZ2UuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4ge1xuXG4gICAgXCJub21cIjogXCJzaGVsbCBiZWFjaFwiLFxuXG4gICAgXCJkZWJ1dFwiOiBcIjIwMTgtMDctMDFcIixcbiAgICBcImZpblwiOiBcIjIwMTgtMDctMTVcIlxufVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiB7XG4gICAgXCJpZFwiOiAxMjYsXG4gICAgXCJub21cIjogXCJzaGVsbCBiZWFjaFwiLFxuICAgIFwidXJsXCI6IFwic2hlbGxfYmVhY2guanBnXCIsXG4gICAgXCJkZWJ1dFwiOiBcIjIwMTgtMDctMDFcIixcbiAgICBcImZpblwiOiBcIjIwMTgtMDctMTVcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjAwMDAtMDAtMDBcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjAwMDAtMDAtMDBcIlxufVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvbmV3LzppZCBEZWxldGUgYmFubmVyXG4gICAqIEBhcGlOYW1lIERFTEVURWJhbm5lclxuICAgKiBAYXBpR3JvdXAgYmFubmVyXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBiYW5uZXJcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYWdlbmNlcy9pbmRpY2F0ZXVycyAgIEdFVCBJbmRpY2F0ZXVycyBBZ2VuY2VzXG4gKiBAYXBpTmFtZSBHZXRBZ2VuY2VzSW5kaWNhdGV1cnNcbiAqIEBhcGlHcm91cCAgQWdlbmNlc1xuICpcblxuICpcblxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZ0luc2NyaXRlcyAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWdDbGllbnRlcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZ0FjdGl2ZXMgLlxuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgIFwiYWdJbnNjcml0ZXNcIjogMjQ5LFxuICAgIFwiYWdDbGllbnRlc1wiOiAyLFxuICAgIFwiYWdBY3RpdmVzXCI6IDE5XG59XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYWdlbmNlcy9uYnJlX3Jlc2VydmF0aW9ucyAgIEdFVCBOb21icmUgcsOpc2VydmF0aW9ucyBBZ2VuY2VzXG4gKiBAYXBpTmFtZSBHZXRBZ2VuY2VzTmJyUmVzZXJ2YXRpb25zXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBBZ2VuY2VzXG4gKlxuXG4gKlxuXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IE5CUmVzZXJ2Q29uZiAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gTkJSZXNlcnZUb3QgLlxuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgXCJOQlJlc2VydkNvbmZcIjogMixcbiAgICBcIk5CUmVzZXJ2VG90XCI6IDJcbn1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9hZ2VuY2VzL2NoaWZmcmVzICAgR0VUIENoaWZmcmVzIGQnYWZmYWlyZXMgQWdlbmNlc1xuICogQGFwaU5hbWUgR2V0QWdlbmNlc0NoaWZmcmVzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBBZ2VuY2VzXG4gKlxuXG4gKlxuXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IENBTW95ICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBDQVRvdCAuXG5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICBcIkNBTW95XCI6IDgxLFxuICAgIFwiQ0FUb3RcIjogMTYyXG59XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYWdlbmNlcy9uYnJlICAgR0VUIE5vbWJyZSBBZ2VuY2VzXG4gKiBAYXBpTmFtZSBHZXRBZ2VuY2VzTm9tYnJlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBBZ2VuY2VzXG4gKlxuXG4gKlxuXG5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5hbWUgIC5cbiAqIEBhcGlTdWNjZXNzIHtBcnJheX0gc2VyaWVzIC5cblxuIFxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJzZXJpZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJlc2VydmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJlY2hlcmNoZVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbm51bGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIC4uLlxuXVxuICAqIEBhcGlVc2UgIEFnZW5jZU5vdEZvdW5kRXJyb3JcbiAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2FnZW5jZXMvYWN0aXZlICBHRVQgQWN0aXZlcyBBZ2VuY2VzXG4gKiBAYXBpTmFtZSBHZXRBZ2VuY2VzQWN0aXZlc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQWdlbmNlc1xuICpcblxuICpcblxuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBuYW1lICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2YWx1ZSBDaGlmZnJlIGQnYWZmYWlyZSAuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcInZhbHVlXCI6IDcwNzU0MFxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJUZXN0IGRvdGNvbVwiLFxuICAgICAgICBcInZhbHVlXCI6IDYwOTI4LjlcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQWdlbmNlIFRlc3QgRXVyb1wiLFxuICAgICAgICBcInZhbHVlXCI6IDk3OFxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJBZ2VuY2UgVGVzdFwiLFxuICAgICAgICBcInZhbHVlXCI6IDEzMDFcbiAgICB9XG4gICAgXG4uLi5cbl1cbiAgKiBAYXBpVXNlICBBZ2VuY2VOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvL2FnZW5jZXNcblxuICAvL2FnZW5jZXNcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgQWdlbmNlTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIEFnZW5jZU5vdEZvdW5kICA8Y29kZT5BZ2VuY2U8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiYWdlbmNlIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYWdlbmNlcy9pbXBheWVlcyAgSW1wYXllZXMgQWdlbmNlc1xuICogQGFwaU5hbWUgR2V0QWdlbmNlc0ltcGF5ZWVzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBBZ2VuY2VzXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHVzZXJuYW1lICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dvIGxvZ28gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHZhIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBmYXggLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGF5cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2aWxsZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB6aXAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWRyZXNzZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwYXNzd29yZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzYWx0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYWZmaWNoYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfcmVzZXJ2YXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3RvdGFsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkbWluIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3RhbF9yZXNlcnZhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYl9yZXNlcnZhdGlvbiBuYnJlIHJlc2VydmF0aW9uLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcGF5ZWUgbW9udGFudCBwYXnDqWUuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbXBheWVlIG1vbnRhbnQgaW1wYXnDqWUuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb3VnZSAlIGVuIHJvdWdlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG90YWwgbW9udGFudCB0b3RhbC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGF1dG9fZW1haWwgYXV0byBlbnZvaSBlbWFpbC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGRldmlzZSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgdGF1eCBkZSBkZXZpc2UuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0YXV4X2R6ZCB0YXV4IGRlIGRldmlzZSBhbGdlcmllLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwyIGVtYWlsMi5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBvcnRhYmxlIHBvcnRhYmxlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0aXZlICBhY3RpdmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfbW91cmFkaSAgbWFyZ2UgbW91cmFkaS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG4ge1xuICAgICAgICBcImlkXCI6IDEzMixcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcInRlc3RcIixcbiAgICAgICAgXCJsb2dvXCI6IG51bGwsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiZmF4XCI6IFwiXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJza3luZXQuc291c3NlQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInBheXNcIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwidmlsbGVcIjogXCJcIixcbiAgICAgICAgXCJ6aXBcIjogMCxcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwicnVlIGR1IG1zYWtlblwiLFxuICAgICAgICBcImxvZ2luXCI6IFwidGVzdFwiLFxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICAgIFwic2FsdFwiOiBcIlwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3Jlc2VydmF0aW9uXCI6IDAsXG4gICAgICAgIFwibWF4X3RvdGFsXCI6IDUwMDAsXG4gICAgICAgIFwiYWRtaW5cIjogMCxcbiAgICAgICAgXCJhY3RpdmVcIjogMCxcbiAgICAgICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiBcIjBcIixcbiAgICAgICAgXCJuYl9yZXNlcnZhdGlvblwiOiAwLFxuICAgICAgICBcInBheWVlXCI6IDAsXG4gICAgICAgIFwiaW1wYXllZVwiOiAwLFxuICAgICAgICBcInJvdWdlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfbW91cmFkaVwiOiA1LFxuICAgICAgICBcInRvdGFsXCI6IDAsXG4gICAgICAgIFwiYXV0b19lbWFpbFwiOiAwLFxuICAgICAgICBcImRldmlzZVwiOiBcIkVVUk9cIixcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAyLjg1LFxuICAgICAgICBcInRhdXhfZHpkXCI6IDEsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwicG9ydGFibGVcIjogXCJcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAgXG4uLi5cbl1cbiAgKiBAYXBpVXNlICBBZ2VuY2VOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2FnZW5jZXMvbm90X2FjdGl2ZSAgTm90QWN0aXZlcyBBZ2VuY2VzXG4gKiBAYXBpTmFtZSBHZXRBZ2VuY2VzTm90QWN0aXZlc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQWdlbmNlc1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB1c2VybmFtZSAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9nbyBsb2dvIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR2YSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZmF4IC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBheXMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gemlwIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFkcmVzc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGFzc3dvcmQgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc2FsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9hZmZpY2hhZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3Jlc2VydmF0aW9uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF90b3RhbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZG1pbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG90YWxfcmVzZXJ2YXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJfcmVzZXJ2YXRpb24gbmJyZSByZXNlcnZhdGlvbi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBheWVlIG1vbnRhbnQgcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1wYXllZSBtb250YW50IGltcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm91Z2UgJSBlbiByb3VnZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdGFsIG1vbnRhbnQgdG90YWwuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdXRvX2VtYWlsIGF1dG8gZW52b2kgZW1haWwuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBkZXZpc2UgZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZGV2aXNlIHRhdXggZGUgZGV2aXNlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kemQgdGF1eCBkZSBkZXZpc2UgYWxnZXJpZS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsMiBlbWFpbDIuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwb3J0YWJsZSBwb3J0YWJsZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdGl2ZSAgYWN0aXZlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX21vdXJhZGkgIG1hcmdlIG1vdXJhZGkuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gW1xuIHtcbiAgICAgICAgXCJpZFwiOiAxMzIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJ0ZXN0XCIsXG4gICAgICAgIFwibG9nb1wiOiBudWxsLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImZheFwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwic2t5bmV0LnNvdXNzZUBnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcInJ1ZSBkdSBtc2FrZW5cIixcbiAgICAgICAgXCJsb2dpblwiOiBcInRlc3RcIixcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxuICAgICAgICBcInNhbHRcIjogXCJcIixcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm1heF9yZXNlcnZhdGlvblwiOiAwLFxuICAgICAgICBcIm1heF90b3RhbFwiOiA1MDAwLFxuICAgICAgICBcImFkbWluXCI6IDAsXG4gICAgICAgIFwiYWN0aXZlXCI6IDAsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogXCIwXCIsXG4gICAgICAgIFwibmJfcmVzZXJ2YXRpb25cIjogMCxcbiAgICAgICAgXCJwYXllZVwiOiAwLFxuICAgICAgICBcImltcGF5ZWVcIjogMCxcbiAgICAgICAgXCJyb3VnZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX21vdXJhZGlcIjogNSxcbiAgICAgICAgXCJ0b3RhbFwiOiAwLFxuICAgICAgICBcImF1dG9fZW1haWxcIjogMCxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJFVVJPXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMi44NSxcbiAgICAgICAgXCJ0YXV4X2R6ZFwiOiAxLFxuICAgICAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgICAgICBcInBvcnRhYmxlXCI6IFwiXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIFxuLi4uXG5dXG4gICogQGFwaVVzZSAgQWdlbmNlTm90Rm91bmRFcnJvclxuICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYWdlbmNlcy8gIEFMTCBBZ2VuY2VzXG4gKiBAYXBpTmFtZSBHZXRBZ2VuY2VzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBBZ2VuY2VzXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHVzZXJuYW1lICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dvIGxvZ28gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHZhIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBmYXggLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGF5cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2aWxsZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB6aXAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWRyZXNzZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwYXNzd29yZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzYWx0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYWZmaWNoYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfcmVzZXJ2YXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3RvdGFsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkbWluIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3RhbF9yZXNlcnZhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYl9yZXNlcnZhdGlvbiBuYnJlIHJlc2VydmF0aW9uLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcGF5ZWUgbW9udGFudCBwYXnDqWUuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbXBheWVlIG1vbnRhbnQgaW1wYXnDqWUuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb3VnZSAlIGVuIHJvdWdlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG90YWwgbW9udGFudCB0b3RhbC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGF1dG9fZW1haWwgYXV0byBlbnZvaSBlbWFpbC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGRldmlzZSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgdGF1eCBkZSBkZXZpc2UuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0YXV4X2R6ZCB0YXV4IGRlIGRldmlzZSBhbGdlcmllLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwyIGVtYWlsMi5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBvcnRhYmxlIHBvcnRhYmxlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0aXZlICBhY3RpdmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfbW91cmFkaSAgbWFyZ2UgbW91cmFkaS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG57XG4gICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwibG9nb1wiOiBcImxvZ28gKDIpLmpwZ1wiLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcInRlbFwiOiBcIigwMDIxNikgNTg0MDgwNDAvOTgyMjg4NjcgLyA5ODYzNTMyMVwiLFxuICAgICAgICBcImZheFwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInBheXNcIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwidmlsbGVcIjogXCJcIixcbiAgICAgICAgXCJ6aXBcIjogMCxcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwiIEF2LiBMZXMgT3JhbmdlcnMgSW1tZXVibGUgQmlsbGFyZGlubyBBcHAuTsKwIDEgS2hlemFtYSBFc3QgLCA0MDUxIFNvdXNzZSBcIixcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcIjgwZWJkMWQ1OWE2NDBiMTZjZmQ1Y2Q1MzAwNzM0ZDExYjZiNDA2OTNhODhiY2I1YzMwYTVmZGI3NTAyOTJkZDMwMTMwNzdiOWQ5MjdjZDVkMGRlMDRmNmZlNTc1MWY5NWY1Y2YzMmM4MjUwNTFmM2I2MDg4NDJjMDVhYzgyNDg2XCIsXG4gICAgICAgIFwic2FsdFwiOiBcIjZlZDAxODliOGE4MThlNDQzOTE0YTEzNDY2MjEzYmE4OWM3MGFhYmM1ZmZjNjY2OTU4NGVhOTcwZWJmY2I1ZWM0N2I0YWFmZTJmYjUyZDAxNTMxY2M4MDM5NjZmMDE4OTY0YTYzYzZjOTM5Njg1ZjRhOGNiODZjY2U3NDEzOGZiXCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfcmVzZXJ2YXRpb25cIjogMTAwMCxcbiAgICAgICAgXCJtYXhfdG90YWxcIjogMzUwMDAwMCxcbiAgICAgICAgXCJhZG1pblwiOiAxLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IFwiNTI3MDEwIFRORCA8YnIgLz4gUGF5ZXIgOiAxMTIgVE5EIDxiciAvPkltcGF5ZXIgOiA1MjY4OTggVE5EXCIsXG4gICAgICAgIFwibmJfcmVzZXJ2YXRpb25cIjogNDg4LFxuICAgICAgICBcInBheWVlXCI6IDExMixcbiAgICAgICAgXCJpbXBheWVlXCI6IDUyNjg5OCxcbiAgICAgICAgXCJyb3VnZVwiOiAyMCxcbiAgICAgICAgXCJ0b3RhbFwiOiA1MjcwMTAsXG4gICAgICAgIFwiYXV0b19lbWFpbFwiOiAwLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwidGF1eF9kemRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9tb3VyYWRpXCI6IDAsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwicG9ydGFibGVcIjogXCJcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAgXG4uLi5cbl1cbiAgKiBAYXBpVXNlICBBZ2VuY2VOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2FnZW5jZS86aWQgR0VUIEFnZW5jZVxuICogQGFwaU5hbWUgR2V0QWdlbmNlXG4gKiBAYXBpR3JvdXAgIEFnZW5jZXNcbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHVzZXJuYW1lICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dvIGxvZ28gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHZhIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBmYXggLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGF5cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2aWxsZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB6aXAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWRyZXNzZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwYXNzd29yZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzYWx0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYWZmaWNoYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2FmZmljaGFnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfcmVzZXJ2YXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3RvdGFsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkbWluIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3RhbF9yZXNlcnZhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYl9yZXNlcnZhdGlvbiBuYnJlIHJlc2VydmF0aW9uLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcGF5ZWUgbW9udGFudCBwYXnDqWUuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbXBheWVlIG1vbnRhbnQgaW1wYXnDqWUuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb3VnZSAlIGVuIHJvdWdlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG90YWwgbW9udGFudCB0b3RhbC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGF1dG9fZW1haWwgYXV0byBlbnZvaSBlbWFpbC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGRldmlzZSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgdGF1eCBkZSBkZXZpc2UuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0YXV4X2R6ZCB0YXV4IGRlIGRldmlzZSBhbGdlcmllLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwyIGVtYWlsMi5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHBvcnRhYmxlIHBvcnRhYmxlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0aXZlICBhY3RpdmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfbW91cmFkaSAgbWFyZ2UgbW91cmFkaS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbntcbiAgIFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJsb2dvXCI6IFwibG9nbyAoMikuanBnXCIsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwidGVsXCI6IFwiKDAwMjE2KSA1ODQwODA0MC85ODIyODg2NyAvIDk4NjM1MzIxXCIsXG4gICAgICAgIFwiZmF4XCI6IFwiXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwicGF5c1wiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJ2aWxsZVwiOiBcIlwiLFxuICAgICAgICBcInppcFwiOiAwLFxuICAgICAgICBcImFkcmVzc2VcIjogXCIgQXYuIExlcyBPcmFuZ2VycyBJbW1ldWJsZSBCaWxsYXJkaW5vIEFwcC5OwrAgMSBLaGV6YW1hIEVzdCAsIDQwNTEgU291c3NlIFwiLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiODBlYmQxZDU5YTY0MGIxNmNmZDVjZDUzMDA3MzRkMTFiNmI0MDY5M2E4OGJjYjVjMzBhNWZkYjc1MDI5MmRkMzAxMzA3N2I5ZDkyN2NkNWQwZGUwNGY2ZmU1NzUxZjk1ZjVjZjMyYzgyNTA1MWYzYjYwODg0MmMwNWFjODI0ODZcIixcbiAgICAgICAgXCJzYWx0XCI6IFwiNmVkMDE4OWI4YTgxOGU0NDM5MTRhMTM0NjYyMTNiYTg5YzcwYWFiYzVmZmM2NjY5NTg0ZWE5NzBlYmZjYjVlYzQ3YjRhYWZlMmZiNTJkMDE1MzFjYzgwMzk2NmYwMTg5NjRhNjNjNmM5Mzk2ODVmNGE4Y2I4NmNjZTc0MTM4ZmJcIixcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm1heF9yZXNlcnZhdGlvblwiOiAxMDAwLFxuICAgICAgICBcIm1heF90b3RhbFwiOiAzNTAwMDAwLFxuICAgICAgICBcImFkbWluXCI6IDEsXG4gICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogXCI1MjcwMTAgVE5EIDxiciAvPiBQYXllciA6IDExMiBUTkQgPGJyIC8+SW1wYXllciA6IDUyNjg5OCBUTkRcIixcbiAgICAgICAgXCJuYl9yZXNlcnZhdGlvblwiOiA0ODgsXG4gICAgICAgIFwicGF5ZWVcIjogMTEyLFxuICAgICAgICBcImltcGF5ZWVcIjogNTI2ODk4LFxuICAgICAgICBcInJvdWdlXCI6IDIwLFxuICAgICAgICBcInRvdGFsXCI6IDUyNzAxMCxcbiAgICAgICAgXCJhdXRvX2VtYWlsXCI6IDAsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJtYXJnZV9tb3VyYWRpXCI6IDAsXG4gICAgICAgIFwidGF1eF9kemRcIjogMCxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJwb3J0YWJsZVwiOiBcIlwiXG4gICAgfSxcbiAqXG4gKiBAYXBpVXNlICBBZ2VuY2VOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9hZ2VuY2UvIFBPU1QgYWdlbmNlXG4gKiBAYXBpRGVzY3JpcHRpb24gQWpvdXQgdW4gYWdlbmNlICwgYXV0b21hdGlxdWVtZW50IHVuIG1lbWJyZSBzZXJhIGFqb3V0ZXIgYXZlYyBsb2dpbixtb3QgcGFzc2UgZXQgZW1haWwgLCBhdXNzaSBsJ2hpc3RvcmlxdWUgZFxuICogQGFwaU5hbWUgUE9TVEFnZW5jZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBBZ2VuY2VzXG4gKlxuXG4gKiBAYXBpcGFyYW0ge0ZpbGV9IEZpbGVJbWcgaW1hZ2UuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG57XG4gICAgXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImxvZ29cIjogXCJsb2dvICgyKS5qcGdcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIoMDAyMTYpIDU4NDA4MDQwLzk4MjI4ODY3IC8gOTg2MzUzMjFcIixcbiAgICAgICAgXCJmYXhcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcImFkcmVzc2VcIjogXCIgQXYuIExlcyBPcmFuZ2VycyBJbW1ldWJsZSBCaWxsYXJkaW5vIEFwcC5OwrAgMSBLaGV6YW1hIEVzdCAsIDQwNTEgU291c3NlIFwiLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3RvdGFsXCI6IDM1MDAwMDAsXG4gICAgICAgIFwicm91Z2VcIjogMjAsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJtYXJnZV9tb3VyYWRpXCI6IDAsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCJcbiAgICB9LFxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJsb2dvXCI6IFwibG9nbyAoMikuanBnXCIsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwidGVsXCI6IFwiKDAwMjE2KSA1ODQwODA0MC85ODIyODg2NyAvIDk4NjM1MzIxXCIsXG4gICAgICAgIFwiZmF4XCI6IFwiXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwicGF5c1wiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJ2aWxsZVwiOiBcIlwiLFxuICAgICAgICBcInppcFwiOiAwLFxuICAgICAgICBcImFkcmVzc2VcIjogXCIgQXYuIExlcyBPcmFuZ2VycyBJbW1ldWJsZSBCaWxsYXJkaW5vIEFwcC5OwrAgMSBLaGV6YW1hIEVzdCAsIDQwNTEgU291c3NlIFwiLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICAgIFwic2FsdFwiOiBcIlwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3Jlc2VydmF0aW9uXCI6IDEwMDAsXG4gICAgICAgIFwibWF4X3RvdGFsXCI6IDM1MDAwMDAsXG4gICAgICAgIFwiYWRtaW5cIjogMSxcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm5iX3Jlc2VydmF0aW9uXCI6IDAsXG4gICAgICAgIFwicGF5ZWVcIjogMCxcbiAgICAgICAgXCJpbXBheWVlXCI6IDAsXG4gICAgICAgIFwicm91Z2VcIjogMjAsXG4gICAgICAgIFwidG90YWxcIjogMCxcbiAgICAgICAgXCJhdXRvX2VtYWlsXCI6IDAsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJ0YXV4X2R6ZFwiOiAwLFxuICAgICAgICBcIm1hcmdlX21vdXJhZGlcIjogMCxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJwb3J0YWJsZVwiOiBcIlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAqIEBhcGlFcnJvciAgRW1haWxVc2VkICA8Y29kZT5FbWFpbDwvY29kZT4gdXRpbGlzw6kuXG4gICpcbiAqICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1FbWFpbFVzZWQ6XG4gKiAgICAgSFRUUC8xLjEgNDAyIEVtYWlsVXNlZFxuICogICAgIHtcbiAqICAgICAgIFwibWVzc2FnZVwiOiBcIkVtYWlsIHV0aWxpc8OpXCJcbiAqICAgICB9XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9hZ2VuY2UvcmVnaXN0cmUgUE9TVCBpbnNjcmlwdGlvbiBhZ2VuY2VcbiAqIEBhcGlEZXNjcmlwdGlvbiBJbnNjcmlwdGlvbiB1biBhZ2VuY2UgLCBhdXRvbWF0aXF1ZW1lbnQgdW4gbWVtYnJlIHNlcmEgYWpvdXRlciBhdmVjIGxvZ2luLG1vdCBwYXNzZSBldCBlbWFpbCAsIGF1c3NpIGwnaGlzdG9yaXF1ZSBkXG4gKiBAYXBpTmFtZSBQT1NUUmVnaXN0cmVBZ2VuY2VcbiAqIEBhcGlHcm91cCBBZ2VuY2VzXG4gKlxuXG4gKiBAYXBpcGFyYW0ge0ZpbGV9IEZpbGVJbWcgaW1hZ2UuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG57XG4gICAgXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImxvZ29cIjogXCJsb2dvICgyKS5qcGdcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIoMDAyMTYpIDU4NDA4MDQwLzk4MjI4ODY3IC8gOTg2MzUzMjFcIixcbiAgICAgICAgXCJmYXhcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwicFwiOiBcIjgwZWJkMTQ0NGE2NDBiMTZjZmQ1Y2Q1MzIxNzM0ZDExYjZiNDA2OTNhODhiY2I1YzMwYTVmZGI3NTAyOTJkZDMwMTMwNzdiOWQ5MjdjZDVkMGRlMDRmNmZlNTc1MWY5NWY1Y2YzMmM4MjUwNTFmM2I2MDg4NDJjMDVhYzgyNDg2XCIsICAgICBcdFx0XG4gICAgICAgIFwiYWRyZXNzZVwiOiBcIiBBdi4gTGVzIE9yYW5nZXJzIEltbWV1YmxlIEJpbGxhcmRpbm8gQXBwLk7CsCAxIEtoZXphbWEgRXN0ICwgNDA1MSBTb3Vzc2UgXCIsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIlxuICAgIH0sXG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImxvZ29cIjogXCJsb2dvICgyKS5qcGdcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIoMDAyMTYpIDU4NDA4MDQwLzk4MjI4ODY3IC8gOTg2MzUzMjFcIixcbiAgICAgICAgXCJmYXhcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcIiBBdi4gTGVzIE9yYW5nZXJzIEltbWV1YmxlIEJpbGxhcmRpbm8gQXBwLk7CsCAxIEtoZXphbWEgRXN0ICwgNDA1MSBTb3Vzc2UgXCIsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCI4MGViZDFkNTlhNjQwYjE2Y2ZkNWNkNTMwMDczNGQxMWI2YjQwNjkzYTg4YmNiNWMzMGE1ZmRiNzUwMjkyZGQzMDEzMDc3YjlkOTI3Y2Q1ZDBkZTA0ZjZmZTU3NTFmOTVmNWNmMzJjODI1MDUxZjNiNjA4ODQyYzA1YWM4MjQ4NlwiLFxuICAgICAgICBcInNhbHRcIjogXCI2ZWQwMTg5YjhhODE4ZTQ0MzkxNGExMzQ2NjIxM2JhODljNzBhYWJjNWZmYzY2Njk1ODRlYTk3MGViZmNiNWVjNDdiNGFhZmUyZmI1MmQwMTUzMWNjODAzOTY2ZjAxODk2NGE2M2M2YzkzOTY4NWY0YThjYjg2Y2NlNzQxMzhmYlwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X3Jlc2VydmF0aW9uXCI6IDEwMDAsXG4gICAgICAgIFwibWF4X3RvdGFsXCI6IDM1MDAwMDAsXG4gICAgICAgIFwiYWRtaW5cIjogMSxcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiBcIjUyNzAxMCBUTkQgPGJyIC8+IFBheWVyIDogMTEyIFRORCA8YnIgLz5JbXBheWVyIDogNTI2ODk4IFRORFwiLFxuICAgICAgICBcIm5iX3Jlc2VydmF0aW9uXCI6IDQ4OCxcbiAgICAgICAgXCJwYXllZVwiOiAxMTIsXG4gICAgICAgIFwiaW1wYXllZVwiOiA1MjY4OTgsXG4gICAgICAgIFwicm91Z2VcIjogMjAsXG4gICAgICAgIFwidG90YWxcIjogNTI3MDEwLFxuICAgICAgICBcImF1dG9fZW1haWxcIjogMCxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJUTkRcIixcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAxLFxuICAgICAgICBcIm1hcmdlX21vdXJhZGlcIjogMCxcbiAgICAgICAgXCJ0YXV4X2R6ZFwiOiAwLFxuICAgICAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgICAgICBcInBvcnRhYmxlXCI6IFwiXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICogQGFwaUVycm9yICBFbWFpbFVzZWQgIDxjb2RlPkVtYWlsPC9jb2RlPiB1dGlsaXPDqS5cbiAgKlxuICogKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLUVtYWlsVXNlZDpcbiAqICAgICBIVFRQLzEuMSA0MDIgRW1haWxVc2VkXG4gKiAgICAge1xuICogICAgICAgXCJtZXNzYWdlXCI6IFwiRW1haWwgdXRpbGlzw6lcIlxuICogICAgIH1cbiBcbiAqL1xuICAvL2FycmFuZ2VtZW50c1xuICAvKipcbiAgICogQGFwaURlZmluZSBhcnJhbmdlbWVudHNOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgYXJyYW5nZW1lbnRzTm90Rm91bmQgIDxjb2RlPmFycmFuZ2VtZW50czwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJhcnJhbmdlbWVudHMgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYXJyYW5nZW1lbnRzLyAgQUxMIEFycmFuZ2VtZW50c1xuICogQGFwaU5hbWUgR2V0YWxsYXJyYW5nZW1lbnRzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEFycmFuZ2VtZW50c1xuICpcblxuICpcblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJySWQgdW5pcXVlIElEIGFycmFuZ2VtZW50cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhcnJhbmdlbWVudHMgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFyciAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0IDAvMS5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcImFycklkXCI6IDEsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiTG9nZW1lbnQgU2ltcGxlXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiTFNcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgICBcImFycklkXCI6IDIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiTG9nZW1lbnQgUGV0aXQgRMOpamV1bmVyXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiTFBEXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJhcnJJZFwiOiAzLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkRlbWkgUGVuc2lvblwiLFxuICAgICAgICBcImFyclwiOiBcIkRQXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJhcnJJZFwiOiA0LFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIlBlbnNpb24gQ29tcGzDqHRlXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiUENcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgICBcImFycklkXCI6IDcsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiQWxsIEluY2x1c2l2ZVwiLFxuICAgICAgICBcImFyclwiOiBcIkFsbC1pblwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiYXJySWRcIjogNSxcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJEUCtcIixcbiAgICAgICAgXCJhcnJcIjogXCJEUCtcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gIFxuIC4uLlxuXVxuKi9cbiAgLyoqXG4gICogQGFwaVVzZSAgYXJyYW5nZW1lbnRzTm90Rm91bmRFcnJvclxuXG4gKiBAYXBpIHtnZXR9IC9hcnJhbmdlbWVudC86YXJySWQgR0VUIEFycmFuZ2VtZW50XG4gKiBAYXBpTmFtZSBHZXRhcnJhbmdlbWVudFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBBcnJhbmdlbWVudHNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gIGFycklkIGFycmFuZ2VtZW50cyB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJySWQgdW5pcXVlIElEIGFycmFuZ2VtZW50cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBtZXNzYWdlICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGZsYXNoICAgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuICAge1xuICAgICAgICBcImFycklkXCI6IDksXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiVWx0cmEgQUkgU29mdCBEcmlua1wiLFxuICAgICAgICBcImFyclwiOiBcIlVsLXNvXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG4gKlxuICogQGFwaVVzZSAgYXJyYW5nZW1lbnRzTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvYXJyYW5nZW1lbnQvIFBPU1QgQXJyYW5nZW1lbnRzXG4gKiBAYXBpTmFtZSBQT1NUYXJyYW5nZW1lbnRzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIGFycmFuZ2VtZW50c1xuICpcbi8vYXJyYW5nZW1lbnRzXG5cdC8qKlxuKiBAYXBpRGVmaW5lIGFycmFuZ2VtZW50c05vdEZvdW5kRXJyb3JcbiAqIEBhcGlFcnJvciAgYXJyYW5nZW1lbnRzTm90Rm91bmQgIDxjb2RlPmFycmFuZ2VtZW50czwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAqXG4gKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAqICAgICB7XG4gKiAgICAgICBcIm1lc3NhZ2VcIjogXCJhcnJhbmdlbWVudHMgcGFzIHRyb3V2w6llXCJcbiAqICAgICB9XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9hcnJhbmdlbWVudC8gUE9TVCBBcnJhbmdlbWVudHNcbiAqIEBhcGlOYW1lIFBPU1RhcnJhbmdlbWVudHNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgQXJyYW5nZW1lbnRzXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgIHtcbiAgICBcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJVbHRyYSBBSSBTb2Z0IERyaW5rXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiVWwtc29cIlxuICAgICAgIFxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gICAge1xuICAgICAgICBcImFycklkXCI6IDksXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiVWx0cmEgQUkgU29mdCBEcmlua1wiLFxuICAgICAgICBcImFyclwiOiBcIlVsLXNvXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvYXJyYW5nZW1lbnQvOmFycklkIFBVVCBBcnJhbmdlbWVudHNcbiAqIEBhcGlOYW1lIFBVVGFycmFuZ2VtZW50c1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBBcnJhbmdlbWVudHNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gYXJySWQgICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAge1xuICAgICAgIFxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJtaGhcIixcbiAgICAgICAgXCJmbGFzaFwiOiBcIk91aVwiXG4gICAgfVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gIHtcbiAgICAgICAgXCJhcnJJZFwiOiA5LFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIlVsdHJhIEFJIFNvZnQgRHJpbmtcIixcbiAgICAgICAgXCJhcnJcIjogXCJVbC1zb1wiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvYXJyYW5nZW1lbnQvOmFycklkIERlbGV0ZSBBcnJhbmdlbWVudHNcbiAgICogQGFwaU5hbWUgREVMRVRFYXJyYW5nZW1lbnRzXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlHcm91cCBBcnJhbmdlbWVudHNcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGFycklkIGlkIGFycmFuZ2VtZW50c1xuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLyogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICAgIHtcblxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIlVsdHJhIEFJIFNvZnQgRHJpbmtcIixcbiAgICAgICAgXCJhcnJcIjogXCJVbC1zb1wiXG4gICAgfVxuKi9cbiAgLyogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gIHtcbiAgICAgICAgXCJhcnJJZFwiOiA5LFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIlVsdHJhIEFJIFNvZnQgRHJpbmtcIixcbiAgICAgICAgXCJhcnJcIjogXCJVbC1zb1wiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2FycmFuZ2VtZW50LzphcnJJZCBQVVQgQXJyYW5nZW1lbnRzXG4gKiBAYXBpTmFtZSBQVVRhcnJhbmdlbWVudHNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgQXJyYW5nZW1lbnRzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGFycklkICAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gIHtcbiAgICAgICBcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJVbHRyYSBBSSBTb2Z0IERyaW5rXCIsXG4gICAgICAgIFwiYXJyXCI6IFwiVWwtc29cIlxuICAgIH1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4gIHtcbiAgICAgICAgXCJhcnJJZFwiOiA5LFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIlVsdHJhIEFJIFNvZnQgRHJpbmtcIixcbiAgICAgICAgXCJhcnJcIjogXCJVbC1zb1wiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvYXJyYW5nZW1lbnQvOmFycklkIERlbGV0ZSBhcnJhbmdlbWVudHNcbiAgICogQGFwaU5hbWUgREVMRVRFYXJyYW5nZW1lbnRzXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlHcm91cCBBcnJhbmdlbWVudHNcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGFycklkIGlkIGFycmFuZ2VtZW50c1xuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9hZ2VuY2UvOmlkIFBVVCBBZ2VuY2VcbiAqIEBhcGlOYW1lIFBVVEFnZW5jZVxuICogQGFwaUdyb3VwIEFnZW5jZXNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpcGFyYW0ge0ZpbGV9IEZpbGVJbWcgaW1hZ2UuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG57XG4gICAgXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImxvZ29cIjogXCJsb2dvICgyKS5qcGdcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJ0ZWxcIjogXCIoMDAyMTYpIDU4NDA4MDQwLzk4MjI4ODY3IC8gOTg2MzUzMjFcIixcbiAgICAgICAgXCJmYXhcIjogXCJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJwYXlzXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcInZpbGxlXCI6IFwiXCIsXG4gICAgICAgIFwiemlwXCI6IDAsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcIiBBdi4gTGVzIE9yYW5nZXJzIEltbWV1YmxlIEJpbGxhcmRpbm8gQXBwLk7CsCAxIEtoZXphbWEgRXN0ICwgNDA1MSBTb3Vzc2UgXCIsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwicFwiOiBcIjgwZWJkMWQ1OWE2NDBiMTZjZmQ1Y2Q1MzAwNzM0ZDExYjZiNDA2OTNhODhiY2I1YzMwYTVmZGI3NTAyOTJkZDMwMTMwNzdiOWQ5MjdjZDVkMGRlMDRmNmZlNTc1MWY5NWY1Y2YzMmM4MjUwNTFmM2I2MDg4NDJjMDVhYzgyNDg2XCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfcmVzZXJ2YXRpb25cIjogMTAwMCxcbiAgICAgICAgXCJtYXhfdG90YWxcIjogMzUwMDAwMCxcbiAgICAgICAgXCJhZG1pblwiOiAxLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcInJvdWdlXCI6IDIwLFxuICAgICAgICBcInRvdGFsXCI6IDUyNzAxMCxcbiAgICAgICAgXCJhdXRvX2VtYWlsXCI6IDAsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJwb3J0YWJsZVwiOiBcIlwiXG4gICAgfSxcblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwibG9nb1wiOiBcImxvZ28gKDIpLmpwZ1wiLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcInRlbFwiOiBcIigwMDIxNikgNTg0MDgwNDAvOTgyMjg4NjcgLyA5ODYzNTMyMVwiLFxuICAgICAgICBcImZheFwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInBheXNcIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwidmlsbGVcIjogXCJcIixcbiAgICAgICAgXCJ6aXBcIjogMCxcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwiIEF2LiBMZXMgT3JhbmdlcnMgSW1tZXVibGUgQmlsbGFyZGlubyBBcHAuTsKwIDEgS2hlemFtYSBFc3QgLCA0MDUxIFNvdXNzZSBcIixcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJwYXNzd29yZFwiOiBcIjgwZWJkMWQ1OWE2NDBiMTZjZmQ1Y2Q1MzAwNzM0ZDExYjZiNDA2OTNhODhiY2I1YzMwYTVmZGI3NTAyOTJkZDMwMTMwNzdiOWQ5MjdjZDVkMGRlMDRmNmZlNTc1MWY5NWY1Y2YzMmM4MjUwNTFmM2I2MDg4NDJjMDVhYzgyNDg2XCIsXG4gICAgICAgIFwic2FsdFwiOiBcIjZlZDAxODliOGE4MThlNDQzOTE0YTEzNDY2MjEzYmE4OWM3MGFhYmM1ZmZjNjY2OTU4NGVhOTcwZWJmY2I1ZWM0N2I0YWFmZTJmYjUyZDAxNTMxY2M4MDM5NjZmMDE4OTY0YTYzYzZjOTM5Njg1ZjRhOGNiODZjY2U3NDEzOGZiXCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2FmZmljaGFnZVwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9hZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfcmVzZXJ2YXRpb25cIjogMTAwMCxcbiAgICAgICAgXCJtYXhfdG90YWxcIjogMzUwMDAwMCxcbiAgICAgICAgXCJhZG1pblwiOiAxLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IFwiNTI3MDEwIFRORCA8YnIgLz4gUGF5ZXIgOiAxMTIgVE5EIDxiciAvPkltcGF5ZXIgOiA1MjY4OTggVE5EXCIsXG4gICAgICAgIFwibmJfcmVzZXJ2YXRpb25cIjogNDg4LFxuICAgICAgICBcInBheWVlXCI6IDExMixcbiAgICAgICAgXCJpbXBheWVlXCI6IDUyNjg5OCxcbiAgICAgICAgXCJyb3VnZVwiOiAyMCxcbiAgICAgICAgXCJ0b3RhbFwiOiA1MjcwMTAsXG4gICAgICAgIFwiYXV0b19lbWFpbFwiOiAwLFxuICAgICAgICBcImRldmlzZVwiOiBcIlRORFwiLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwidGF1eF9kemRcIjogMCxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJwb3J0YWJsZVwiOiBcIlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcblxuXG4gKi9cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9hY3RpdmVfYWdlbmNlLzppZCBQVVQgQWN0aXZlIGFnZW5jZSBcbiAqIEBhcGlOYW1lIFBVVEFjdGl2ZUFnZW5jZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBBZ2VuY2VzXG4gKlxuXG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgIFwic3VjY2Vzc1wiOiB0cnVlXG59XG4gKi9cblxuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvYWdlbmNlLzppZCBEZWxldGUgYWdlbmNlXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlHcm91cCBBZ2VuY2VzXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBhZ2VuY2VcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vdmlsbGVzXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIFZpbGxlTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIFZpbGxlTm90Rm91bmQgIDxjb2RlPlZpbGxlPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcInZpbGxlIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL3ZpbGxlcy8gIEFMTCBWaWxsZXNcbiAqIEBhcGlOYW1lIEdldFZpbGxlc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgVmlsbGVzXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2aWxsZUlkIHVuaXF1ZSBJRCB2aWxsZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2aWxsZVRpdGxlICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjb3VudHJ5SWQgcmVnaW9uIGlkIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxhbmcgbGFuZ3VhZ2UgLlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3QgIGFjdGl2ZSAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gW1xuICAgIHtcbiAgICAgICAgXCJ2aWxsZUlkXCI6IDEsXG4gICAgICAgIFwidmlsbGVUaXRsZVwiOiBcIkhhbW1hbWV0XCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiY291bnRyeUlkXCI6IDEsXG4gICAgICAgIFwibGFuZ1wiOiBcIlwiLFxuICAgICAgICBcIm9yZFwiOiA1LFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgICBcbi4uLlxuXVxuICAqIEBhcGlVc2UgIFZpbGxlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC92aWxsZXMvOnZpbGxlSWQgR0VUIFZpbGxlXG4gKiBAYXBpTmFtZSBHZXRWaWxsZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgVmlsbGVzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9ICB2aWxsZUlkIHZpbGxlIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2aWxsZUlkIHVuaXF1ZSBJRCB2aWxsZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2aWxsZVRpdGxlICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjb3VudHJ5SWQgcmVnaW9uIGlkIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxhbmcgbGFuZ3VhZ2UgLlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3QgIGFjdGl2ZSAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gICAge1xuICAgICAgICBcInZpbGxlSWRcIjogMSxcbiAgICAgICAgXCJ2aWxsZVRpdGxlXCI6IFwiSGFtbWFtZXRcIixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJjb3VudHJ5SWRcIjogMSxcbiAgICAgICAgXCJsYW5nXCI6IFwiXCIsXG4gICAgICAgIFwib3JkXCI6IDUsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG4gKlxuICogQGFwaVVzZSAgVmlsbGVOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC92aWxsZXMvIFBPU1QgdmlsbGVcbiAqIEBhcGlOYW1lIFBPU1RWaWxsZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBWaWxsZXNcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICAgIHtcblxuICAgICAgICBcInZpbGxlVGl0bGVcIjogXCJIYW1tYW1ldFwiLFxuICAgICAgICBcImFjdFwiOiAxXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICBcImNvdW50cnlJZFwiOiBcIjBcIixcbiAgICBcImxhbmdcIjogXCJcIixcbiAgICBcIm9yZFwiOiBcIjEwMFwiLFxuICAgIFwidmlsbGVJZFwiOiA0NCxcbiAgICBcInZpbGxlVGl0bGVcIjogXCJIYW1tYW1ldFwiLFxuICAgIFwiYWN0XCI6IDEsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA5LTE3VDA5OjQwOjA0LjgxOFpcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMDktMTdUMDk6NDA6MDQuODE4WlwiXG59XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvdmlsbGVzLzp2aWxsZUlkIFBVVCBWaWxsZVxuICogQGFwaU5hbWUgUFVUVmlsbGVcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgVmlsbGVzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHZpbGxlSWQgICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICB7XG5cbiAgICAgICAgXCJ2aWxsZVRpdGxlXCI6IFwiSGFtbWFtZXRcIixcbiAgICAgICAgXCJhY3RcIjogMVxuICAgIH1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4gICAge1xuICAgICAgICBcInZpbGxlSWRcIjogMSxcbiAgICAgICAgXCJ2aWxsZVRpdGxlXCI6IFwiSGFtbWFtZXRcIixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJjb3VudHJ5SWRcIjogMSxcbiAgICAgICAgXCJsYW5nXCI6IFwiXCIsXG4gICAgICAgIFwib3JkXCI6IDUsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0xN1QwOTo0MDowNC44MThaXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0wOS0xN1QwOTo0MDowNC44MThaXCJcbiAgICB9XG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC92aWxsZXMvOnZpbGxlSWQgRGVsZXRlIFZpbGxlXG4gICAqIEBhcGlOYW1lIERFTEVURVZpbGxlXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlHcm91cCBWaWxsZXNcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IHZpbGxlSWQgaWQgdmlsbGVcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vUGF5c1xuICAvKipcbiAgICogQGFwaURlZmluZSBQYXlzTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIFBheXNOb3RGb3VuZCAgPGNvZGU+UGF5czwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJQYXlzIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gLy8gIEFMTCBQYXlzXG4gKiBAYXBpTmFtZSBHZXRQYXlzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBQYXlzXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgUGF5cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY29kZSBjb2RlIC5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFtcbiAgICAge1xuICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiVHVuaXNpZVwiLFxuICAgICAgICBcImNvZGVcIjogXCJUTlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgICBcbi4uLlxuXVxuICAqIEBhcGlVc2UgIFBheXNOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL1BheXMvOmlkIEdFVCBQYXlzXG4gKiBAYXBpTmFtZSBHZXRQYXlzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBQYXlzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9ICBpZCBQYXlzIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgUGF5cyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY29kZSBjb2RlIC5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gICAgIHtcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJjb2RlXCI6IFwiVE5cIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cbiAqXG4gKiBAYXBpVXNlICBQYXlzTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvUGF5cy8gUE9TVCBQYXlzXG4gKiBAYXBpTmFtZSBQT1NUUGF5c1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBQYXlzXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICB7XG5cbiAgICAgICAgXCJub21cIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwiY29kZVwiOiBcIlROXCJcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuICB7XG4gICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwiY29kZVwiOiBcIlROXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvUGF5cy86aWQgUFVUIFBheXNcbiAqIEBhcGlOYW1lIFBVVFBheXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgUGF5c1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICAgICB7XG5cbiAgICAgICAgXCJub21cIjogXCJUdW5pc2llXCIsXG4gICAgICAgIFwiY29kZVwiOiBcIlROXCJcbiAgICB9LFxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiBcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlR1bmlzaWVcIixcbiAgICAgICAgXCJjb2RlXCI6IFwiVE5cIixcbiAgXG4gICAgXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0wOS0xN1QwOTo0MDowNC44MThaXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0wOS0xN1QwOTo0MDowNC44MThaXCJcbiAgICB9XG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9QYXlzLzppZCBEZWxldGUgUGF5c1xuICAgKiBAYXBpTmFtZSBERUxFVEVQYXlzXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlHcm91cCBQYXlzXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBQYXlzXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cbiAgLy9ob3RlbFxuICAvL2hvdGVsc1xuICAvKipcbiAgICogQGFwaURlZmluZSBIb3RlbE5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBIb3RlbE5vdEZvdW5kICA8Y29kZT5Ib3RlbDwvY29kZT4gcGFzIHRyb3V2w6kuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcImjDtHRlbCBwYXMgdHJvdXbDqVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2hvdGVscy8gIEFMTCBIb3RlbHNcbiAqIEBhcGlOYW1lIEdldEhvdGVsc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgSG90ZWxzXG4gKlxuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWR2aWxsZSB1bmlxdWUgSUQgdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAob2JsaWdhdG9pcmUpLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHZhIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFkcmVzc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaW5mbyBpbmZvcm1hdGlvbiBzdXBwbMOpbWVudGFpcmUuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsaWVuIHVybCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgaMO0dGVsIChvYmxpZ2F0b2lyZSkuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbDIgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGZheCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpY2llbCB1dGlsaXPDqWUgcGFyIGwnaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG1hcCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbWFwIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjaG9peF9lbWFpbCAgUmVzYS9HbWFpbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZfbWluICBhZ2UgZW5mYW50IG1pbiAwLzEyLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mX21heCAgYWdlIGVuZmFudCBtYXggMC8xNi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlICBtYXJnZSBwYXIgaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gIG9wZXJhdGlvbiBkZSBtYXJnZSAwLzEuQW1lbmFnZW1lbnRcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50ICBwb3VyY2VudCBkZSBtYXJnZSAwLzEuXG4gICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAgbWFyZ2UgYjJjIHBhciBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAgb3BlcmF0aW9uIGIyYyBkZSBtYXJnZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jICBwb3VyY2VudCBkZSBtYXJnZSBiMmMgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZXRvaWxlICBuYnJlIGQnw6l0b2lsZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBjYWxjdWwgIHR5cGUgZGUgY2FsY3VsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN0b3AgIHN0b3AgdmVudGUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2VsZWJhdGUgIGNlbGViYXRhaXJlIG91IG5vbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdXRvX3ZvdWNoZXIgIGVudm9pIGF1dG9tYXRpcXVlIGVtYWlsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHt2aWxsZX0gdmlsbGUgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdCAgYWN0aXZlIDAvMS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG4gICAge1xuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJpZHZpbGxlXCI6IDI2LFxuICAgICAgICBcImxvZ2luXCI6IFwiXCIsXG4gICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcImVuZl9taW5cIjogMyxcbiAgICAgICAgXCJlbmZfbWF4XCI6IDEyLFxuICAgICAgICBcImFkcmVzc2VcIjogXCI2MDAwXCIsXG4gICAgICAgIFwiaW5mb1wiOiBcIk9mZnJlIHZhbGFibGUganVzcXUnYXUgMzEvMDMvMjAxNi48YnIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRBbGwgaW5jbHVzaXZlLlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibGllblwiOiBcIm1vbmFzdGlyL2hvdGVsLW9uZS1yZXNvcnQucGhwXCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJldG9pbGVcIjogNCxcbiAgICAgICAgXCJjYWxjdWxcIjogMSxcbiAgICAgICAgXCJhdXRvX3ZvdWNoZXJcIjogMSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcImVtYWlsXCI6IFwicmVzYS5vbmVob3RlbHNhbmRyZXNvcnRzQHBsYW5ldC50blwiLFxuICAgICAgICBcImZheFwiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItdHVuaXNpZS10YXNuaW1lLXZveWFnZXNfcC5qcGdcIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJsb2dpY2llbFwiOiBcIlwiLFxuICAgICAgICBcIm1hcFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDEyOTUwLjk4MjM2NzI4MDA1NCEyZDEwLjc0NzkxNjg0ODE0MDY3ITNkMzUuNzU3MDU3MzYwNjY3MiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTMwMjBjYzNhMjkyMzc3ZCUzQTB4ZTgzNmMwMzNmZDM2OWViZSEyc09uZStSZXNvcnQrTW9uYXN0aXIhNWUwITNtMiExc2ZyITJzITR2MTQ1NzkzODhcIixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJzdG9wXCI6IDAsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogNzMsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcImNob2l4X2VtYWlsXCI6IDEsXG4gICAgICAgIFwiY2VsZWJhdGVcIjogMSxcbiAgICAgICAgXCJ2aWxsZVwiOiB7XG4gICAgICAgICAgICBcInZpbGxlVGl0bGVcIjogXCJNb25hc3RpclwiLFxuICAgICAgICAgICAgXCJ2aWxsZUlkXCI6IDI2XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuLi4uXG5dXG4gICogQGFwaVVzZSAgSG90ZWxOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2hvdGVsLzppZGhvdGVsIEdFVCBIb3RlbFxuICogQGFwaU5hbWUgR2V0SG90ZWxcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIEhvdGVsc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSAgaWRob3RlbCBob3RlbCB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWR2aWxsZSB1bmlxdWUgSUQgdmlsbGUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAob2JsaWdhdG9pcmUpLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHZhIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFkcmVzc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaW5mbyBpbmZvcm1hdGlvbiBzdXBwbMOpbWVudGFpcmUuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsaWVuIHVybCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgaMO0dGVsIChvYmxpZ2F0b2lyZSkuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbDIgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGZheCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpY2llbCB1dGlsaXPDqWUgcGFyIGwnaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG1hcCBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbWFwIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjaG9peF9lbWFpbCAgUmVzYS9HbWFpbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZfbWluICBhZ2UgZW5mYW50IG1pbiAwLzEyLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mX21heCAgYWdlIGVuZmFudCBtYXggMC8xNi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlICBtYXJnZSBwYXIgaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gIG9wZXJhdGlvbiBkZSBtYXJnZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAgcG91cmNlbnQgZGUgbWFyZ2UgMC8xLlxuICAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgIG1hcmdlIGIyYyBwYXIgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgIG9wZXJhdGlvbiBiMmMgZGUgbWFyZ2UgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAgcG91cmNlbnQgZGUgbWFyZ2UgYjJjIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGV0b2lsZSAgbmJyZSBkJ8OpdG9pbGUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2FsY3VsICB0eXBlIGRlIGNhbGN1bCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdG9wICBzdG9wIHZlbnRlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNlbGViYXRlICBjZWxlYmF0YWlyZSBvdSBub24gMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXV0b192b3VjaGVyICBlbnZvaSBhdXRvbWF0aXF1ZSBlbWFpbCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7dmlsbGV9IHZpbGxlICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3QgIGFjdGl2ZSAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgXCJpZHZpbGxlXCI6IDEsXG4gICAgXCJsb2dpblwiOiBcInJhZGlzc29uXCIsXG4gICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgXCJ0dmFcIjogXCJcIixcbiAgICBcImVuZl9taW5cIjogMixcbiAgICBcImVuZl9tYXhcIjogMTIsXG4gICAgXCJhZHJlc3NlXCI6IFwiXCIsXG4gICAgXCJpbmZvXCI6IFwiXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgIFwibGllblwiOiBcImhhbW1hbWV0L2hvdGVsLXJhZGlzc29uLWJsdS5waHBcIixcbiAgICBcIm1hcmdlXCI6IDAsXG4gICAgXCJldG9pbGVcIjogNSxcbiAgICBcImNhbGN1bFwiOiAwLFxuICAgIFwiYXV0b192b3VjaGVyXCI6IDEsXG4gICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgXCJlbWFpbFwiOiBcIm5hZGEuaGFtbWFtZXRAcmFkaXNzb25ibHUuY29tXCIsXG4gICAgXCJmYXhcIjogXCJcIixcbiAgICBcInRlbFwiOiBcIlwiLFxuICAgIFwibG9naWNpZWxcIjogXCJcIixcbiAgICBcIm1hcFwiOiBcIlwiLFxuICAgIFwiYWN0XCI6IDEsXG4gICAgXCJzdG9wXCI6IDAsXG4gICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiAwLFxuICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwiY2hvaXhfZW1haWxcIjogMCxcbiAgICBcImNlbGViYXRlXCI6IDAsXG4gICAgXCJ2aWxsZVwiOiB7XG4gICAgICAgIFwidmlsbGVUaXRsZVwiOiBcIkhhbW1hbWV0XCIsXG4gICAgICAgIFwidmlsbGVJZFwiOiAxXG4gICAgfSxcbiAgICBcImltZ1Byb2ZpbFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaG90ZWxJbWdJZFwiOiA4LFxuICAgICAgICAgICAgXCJob3RlbEltZ1wiOiBcInJhZGlzc29uLWJsdS1wLmpwZ1wiLFxuICAgICAgICAgICAgXCJob3RlbElkXCI6IDMsXG4gICAgICAgICAgICBcImltZ1Byb2ZpbFwiOiAxLFxuICAgICAgICAgICAgXCJpbWdDaGFtYnJlXCI6IDAsXG4gICAgICAgICAgICBcInBsYWNlbWVudFwiOiAwLFxuICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICAgICAgfVxuICAgIF1cbn1cbiAqXG4gKiBAYXBpVXNlICBIb3RlbE5vdEZvdW5kRXJyb3JcbiBcbiBcbiAqL1xuXG4gIC8qKiBAYXBpIHtnZXR9IC9ob3RlbHMvICBHRVQgQUxMIEhvdGVsc1xuICogQGFwaU5hbWUgR2V0SG90ZWxzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBIb3RlbHNcbiAqXG5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIHVuaXF1ZSBJRCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHZpbGxlIHVuaXF1ZSBJRCB2aWxsZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpbiAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIChvYmxpZ2F0b2lyZSkuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0dmEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWRyZXNzZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBpbmZvIGluZm9ybWF0aW9uIHN1cHBsw6ltZW50YWlyZS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxpZW4gdXJsIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbCBow7R0ZWwgKG9ibGlnYXRvaXJlKS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsMiBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZmF4IGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxvZ2ljaWVsIHV0aWxpc8OpZSBwYXIgbCdow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbWFwIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBtYXAgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNob2l4X2VtYWlsICBSZXNhL0dtYWlsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGVuZl9taW4gIGFnZSBlbmZhbnQgbWluIDAvMTIuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZfbWF4ICBhZ2UgZW5mYW50IG1heCAwLzE2LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2UgIG1hcmdlIHBhciBob3RlbC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAgb3BlcmF0aW9uIGRlIG1hcmdlIDAvMS5BbWVuYWdlbWVudFxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgIHBvdXJjZW50IGRlIG1hcmdlIDAvMS5cbiAgKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jICBtYXJnZSBiMmMgcGFyIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jICBvcGVyYXRpb24gYjJjIGRlIG1hcmdlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgIHBvdXJjZW50IGRlIG1hcmdlIGIyYyAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBldG9pbGUgIG5icmUgZCfDqXRvaWxlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGNhbGN1bCAgdHlwZSBkZSBjYWxjdWwgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3RvcCAgc3RvcCB2ZW50ZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBjZWxlYmF0ZSAgY2VsZWJhdGFpcmUgb3Ugbm9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGF1dG9fdm91Y2hlciAgZW52b2kgYXV0b21hdGlxdWUgZW1haWwgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge3ZpbGxlfSB2aWxsZSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0ICBhY3RpdmUgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFtcbntcbiAgICBcImlkaG90ZWxcIjogMyxcbiAgICBcImlkdmlsbGVcIjogMSxcbiAgICBcImxvZ2luXCI6IFwicmFkaXNzb25cIixcbiAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICBcInR2YVwiOiBcIlwiLFxuICAgIFwiZW5mX21pblwiOiAyLFxuICAgIFwiZW5mX21heFwiOiAxMixcbiAgICBcImFkcmVzc2VcIjogXCJcIixcbiAgICBcImluZm9cIjogXCJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgXCJsaWVuXCI6IFwiaGFtbWFtZXQvaG90ZWwtcmFkaXNzb24tYmx1LnBocFwiLFxuICAgIFwibWFyZ2VcIjogMCxcbiAgICBcImV0b2lsZVwiOiA1LFxuICAgIFwiY2FsY3VsXCI6IDAsXG4gICAgXCJhdXRvX3ZvdWNoZXJcIjogMSxcbiAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgIFwicG91cmNlbnRcIjogMCxcbiAgICBcImVtYWlsXCI6IFwibmFkYS5oYW1tYW1ldEByYWRpc3NvbmJsdS5jb21cIixcbiAgICBcImZheFwiOiBcIlwiLFxuICAgIFwidGVsXCI6IFwiXCIsXG4gICAgXCJsb2dpY2llbFwiOiBcIlwiLFxuICAgIFwibWFwXCI6IFwiXCIsXG4gICAgXCJhY3RcIjogMSxcbiAgICBcInN0b3BcIjogMCxcbiAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IDAsXG4gICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICBcIm1hcmdlX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgXCJjaG9peF9lbWFpbFwiOiAwLFxuICAgIFwiY2VsZWJhdGVcIjogMCxcbiAgICBcInZpbGxlXCI6IHtcbiAgICAgICAgXCJ2aWxsZVRpdGxlXCI6IFwiSGFtbWFtZXRcIixcbiAgICAgICAgXCJ2aWxsZUlkXCI6IDFcbiAgICB9LFxuICAgIFwiaW1nUHJvZmlsXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJob3RlbEltZ0lkXCI6IDgsXG4gICAgICAgICAgICBcImhvdGVsSW1nXCI6IFwicmFkaXNzb24tYmx1LXAuanBnXCIsXG4gICAgICAgICAgICBcImhvdGVsSWRcIjogMyxcbiAgICAgICAgICAgIFwiaW1nUHJvZmlsXCI6IDEsXG4gICAgICAgICAgICBcImltZ0NoYW1icmVcIjogMCxcbiAgICAgICAgICAgIFwicGxhY2VtZW50XCI6IDAsXG4gICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgICAgICB9XG4gICAgXVxufSxcbiAgICBcbi4uLlxuXVxuICAqIEBhcGlVc2UgIEhvdGVsTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvaG90ZWwvIFBPU1QgaG90ZWxcbiAqIEBhcGlOYW1lIFBPU1RIb3RlbFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBIb3RlbHNcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICAgICAgIHsgXCJpZHZpbGxlXCI6IDI2LFxuICAgICAgICBcImxvZ2luXCI6IFwiXCIsXG4gICAgICAgIFwibm9tXCI6IFwidGVzdHJcIixcbiAgICAgICAgXCJ0dmFcIjogXCJcIixcbiAgICAgICAgXCJlbmZfbWluXCI6IDMsXG4gICAgICAgIFwiZW5mX21heFwiOiAxMixcbiAgICAgICAgXCJhZHJlc3NlXCI6IFwiNjAwMFwiLFxuICAgICAgICBcImluZm9cIjogXCJPZmZyZSB2YWxhYmxlIGp1c3F1J2F1IDMxLzAzLzIwMTYuPGJyIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0QWxsIGluY2x1c2l2ZS5cIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICBcImxpZW5cIjogXCJtb25hc3Rpci9ob3RlbC1vbmUtcmVzb3J0LnBocFwiLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwiZXRvaWxlXCI6IDQsXG4gICAgICAgIFwiY2FsY3VsXCI6IDEsXG4gICAgICAgIFwiYXV0b192b3VjaGVyXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJlbWFpbFwiOiBcInJlc2Eub25laG90ZWxzYW5kcmVzb3J0c0BwbGFuZXQudG5cIixcbiAgICAgICAgXCJmYXhcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLXR1bmlzaWUtdGFzbmltZS12b3lhZ2VzX3AuanBnXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwibG9naWNpZWxcIjogXCJcIixcbiAgICAgICAgXCJtYXBcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMjk1MC45ODIzNjcyODAwNTQhMmQxMC43NDc5MTY4NDgxNDA2NyEzZDM1Ljc1NzA1NzM2MDY2NzIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDEzMDIwY2MzYTI5MjM3N2QlM0EweGU4MzZjMDMzZmQzNjllYmUhMnNPbmUrUmVzb3J0K01vbmFzdGlyITVlMCEzbTIhMXNmciEycyE0djE0NTc5Mzg4XCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwic3RvcFwiOiAwLFxuICAgICAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IDczLFxuICAgICAgICBcImVtYWlsMlwiOiBcIlwiLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJjaG9peF9lbWFpbFwiOiAxLFxuICAgICAgICBcImNlbGViYXRlXCI6IDF9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIHtcbiAgICBcImlkaG90ZWxcIjogMzMzLFxuICAgIFwiaWR2aWxsZVwiOiAyNixcbiAgICBcImxvZ2luXCI6IFwiXCIsXG4gICAgXCJub21cIjogXCJ0ZXN0clwiLFxuICAgIFwidHZhXCI6IFwiXCIsXG4gICAgXCJlbmZfbWluXCI6IDMsXG4gICAgXCJlbmZfbWF4XCI6IDEyLFxuICAgIFwiYWRyZXNzZVwiOiBcIjYwMDBcIixcbiAgICBcImluZm9cIjogXCJPZmZyZSB2YWxhYmxlIGp1c3F1J2F1IDMxLzAzLzIwMTYuPGJyIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0QWxsIGluY2x1c2l2ZS5cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgXCJsaWVuXCI6IFwibW9uYXN0aXIvaG90ZWwtb25lLXJlc29ydC5waHBcIixcbiAgICBcIm1hcmdlXCI6IDAsXG4gICAgXCJldG9pbGVcIjogNCxcbiAgICBcImNhbGN1bFwiOiAxLFxuICAgIFwiYXV0b192b3VjaGVyXCI6IDEsXG4gICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgXCJlbWFpbFwiOiBcInJlc2Eub25laG90ZWxzYW5kcmVzb3J0c0BwbGFuZXQudG5cIixcbiAgICBcImZheFwiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItdHVuaXNpZS10YXNuaW1lLXZveWFnZXNfcC5qcGdcIixcbiAgICBcInRlbFwiOiBcIlwiLFxuICAgIFwibG9naWNpZWxcIjogXCJcIixcbiAgICBcIm1hcFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDEyOTUwLjk4MjM2NzI4MDA1NCEyZDEwLjc0NzkxNjg0ODE0MDY3ITNkMzUuNzU3MDU3MzYwNjY3MiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTMwMjBjYzNhMjkyMzc3ZCUzQTB4ZTgzNmMwMzNmZDM2OWViZSEyc09uZStSZXNvcnQrTW9uYXN0aXIhNWUwITNtMiExc2ZyITJzITR2MTQ1NzkzODhcIixcbiAgICBcImFjdFwiOiAxLFxuICAgIFwic3RvcFwiOiAwLFxuICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogNzMsXG4gICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICBcIm1hcmdlX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgXCJjaG9peF9lbWFpbFwiOiAxLFxuICAgfVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2hvdGVsLzppZGhvdGVsIFBVVCBIb3RlbFxuICogQGFwaU5hbWUgUFVUSG90ZWxcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgSG90ZWxzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkaG90ZWwgICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiB7XG4gICAgXCJpZGhvdGVsXCI6IDMzMyxcbiAgICBcImlkdmlsbGVcIjogMjYsXG4gICAgXCJsb2dpblwiOiBcIlwiLFxuICAgIFwibm9tXCI6IFwidGVzdHJcIixcbiAgICBcInR2YVwiOiBcIlwiLFxuICAgIFwiZW5mX21pblwiOiAzLFxuICAgIFwiZW5mX21heFwiOiAxMixcbiAgICBcImFkcmVzc2VcIjogXCI2MDAwXCIsXG4gICAgXCJpbmZvXCI6IFwiT2ZmcmUgdmFsYWJsZSBqdXNxdSdhdSAzMS8wMy8yMDE2LjxiciAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdEFsbCBpbmNsdXNpdmUuXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgIFwibGllblwiOiBcIm1vbmFzdGlyL2hvdGVsLW9uZS1yZXNvcnQucGhwXCIsXG4gICAgXCJtYXJnZVwiOiAwLFxuICAgIFwiZXRvaWxlXCI6IDQsXG4gICAgXCJjYWxjdWxcIjogMSxcbiAgICBcImF1dG9fdm91Y2hlclwiOiAxLFxuICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgXCJwb3VyY2VudFwiOiAwLFxuICAgIFwiZW1haWxcIjogXCJyZXNhLm9uZWhvdGVsc2FuZHJlc29ydHNAcGxhbmV0LnRuXCIsXG4gICAgXCJmYXhcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLXR1bmlzaWUtdGFzbmltZS12b3lhZ2VzX3AuanBnXCIsXG4gICAgXCJ0ZWxcIjogXCJcIixcbiAgICBcImxvZ2ljaWVsXCI6IFwiXCIsXG4gICAgXCJtYXBcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMjk1MC45ODIzNjcyODAwNTQhMmQxMC43NDc5MTY4NDgxNDA2NyEzZDM1Ljc1NzA1NzM2MDY2NzIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDEzMDIwY2MzYTI5MjM3N2QlM0EweGU4MzZjMDMzZmQzNjllYmUhMnNPbmUrUmVzb3J0K01vbmFzdGlyITVlMCEzbTIhMXNmciEycyE0djE0NTc5Mzg4XCIsXG4gICAgXCJhY3RcIjogMSxcbiAgICBcInN0b3BcIjogMCxcbiAgICBcInRvdGFsX3Jlc2VydmF0aW9uXCI6IDczLFxuICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwiY2hvaXhfZW1haWxcIjogMSxcbiAgIH1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4gICAgICAgeyBcImlkdmlsbGVcIjogMjYsXG4gICAgICAgIFwibG9naW5cIjogXCJcIixcbiAgICAgICAgXCJub21cIjogXCJ0ZXN0clwiLFxuICAgICAgICBcInR2YVwiOiBcIlwiLFxuICAgICAgICBcImVuZl9taW5cIjogMyxcbiAgICAgICAgXCJlbmZfbWF4XCI6IDEyLFxuICAgICAgICBcImFkcmVzc2VcIjogXCI2MDAwXCIsXG4gICAgICAgIFwiaW5mb1wiOiBcIk9mZnJlIHZhbGFibGUganVzcXUnYXUgMzEvMDMvMjAxNi48YnIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRBbGwgaW5jbHVzaXZlLlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwibGllblwiOiBcIm1vbmFzdGlyL2hvdGVsLW9uZS1yZXNvcnQucGhwXCIsXG4gICAgICAgIFwibWFyZ2VcIjogMCxcbiAgICAgICAgXCJldG9pbGVcIjogNCxcbiAgICAgICAgXCJjYWxjdWxcIjogMSxcbiAgICAgICAgXCJhdXRvX3ZvdWNoZXJcIjogMSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcImVtYWlsXCI6IFwicmVzYS5vbmVob3RlbHNhbmRyZXNvcnRzQHBsYW5ldC50blwiLFxuICAgICAgICBcImZheFwiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItdHVuaXNpZS10YXNuaW1lLXZveWFnZXNfcC5qcGdcIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJsb2dpY2llbFwiOiBcIlwiLFxuICAgICAgICBcIm1hcFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDEyOTUwLjk4MjM2NzI4MDA1NCEyZDEwLjc0NzkxNjg0ODE0MDY3ITNkMzUuNzU3MDU3MzYwNjY3MiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTMwMjBjYzNhMjkyMzc3ZCUzQTB4ZTgzNmMwMzNmZDM2OWViZSEyc09uZStSZXNvcnQrTW9uYXN0aXIhNWUwITNtMiExc2ZyITJzITR2MTQ1NzkzODhcIixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJzdG9wXCI6IDAsXG4gICAgICAgIFwidG90YWxfcmVzZXJ2YXRpb25cIjogNzMsXG4gICAgICAgIFwiZW1haWwyXCI6IFwiXCIsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcImNob2l4X2VtYWlsXCI6IDEsXG4gICAgICAgIFwiY2VsZWJhdGVcIjogMX1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9ob3RlbHB3ZC86aWRob3RlbCBQVVQgTW90IGRlIHBhc3NlIEhvdGVsIFxuICogQGFwaU5hbWUgUFVUSG90ZWxQV0RcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgSG90ZWxzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkaG90ZWwgICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpUGFyYW0ge1N0cmluZ30gcCAgICAgICAgIG1vdCBkZSBwYXNzZSBjcnlwdMOpIHNoYTUxMi5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxue1xuXCJwXCI6XCIxMjEzMDI4NzBmNDgxOWJlMDMyMTBiNDA4ZjE4ZGZiNzFmMTkxYjUyNDgwOTc2MzM4YmY3YjEyMGJkYjJiYmFhNDZkMDk2YjUyOWVjMGNiMWRkZDQ1ZTdiMDlmNmZjMGVkMDNmYWJlY2QwODljZWU5NGMwOTFhY2MyZWY3ZjJiY1wiXG59XG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICBcInN1Y2Nlc3NcIjogdHJ1ZVxufVxuICovXG5cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2hvdGVsLzppZGhvdGVsIERlbGV0ZSBob3RlbFxuICAgKiBAYXBpR3JvdXAgSG90ZWxzXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZGhvdGVsIGlkIGhvdGVsXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2FtZW5hZ2VtZW50c1xuICAvKipcbiAgICogQGFwaURlZmluZSBBbWVuYWdlbWVudE5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBBbWVuYWdlbWVudE5vdEZvdW5kICA8Y29kZT5BbWVuYWdlbWVudDwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJBbWVuYWdlbWVudCBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9hbWVuYWdlbWVudHMvOmhvdGVsSWQgIEFMTCBBbWVuYWdlbWVudHMgcGFyIGjDtHRlbFxuICogQGFwaU5hbWUgR2V0QW1lbmFnZW1lbnRzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBBbWVuYWdlbWVudHNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaG90ZWxJZCBob3RlbCB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYW1JZCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCB1bmlxdWUgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYW1lbmFnZW1lbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0ICBhY3RpdmUgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFtcbiAgICB7XG4gICAgXCJhbUlkXCI6IDEsXG4gICAgXCJob3RlbElkXCI6IDEsXG4gICAgXCJhY3RcIjogMCxcbiAgICBcImFtZW5hZ2VtZW50XCI6IFwiU8OoY2hlLWNoZXZldXhcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbn0sXG4gICAgXG4uLi5cbl1cbiAgKiBAYXBpVXNlICBBbWVuYWdlbWVudE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYW1lbmFnZW1lbnQvOmFtSWQgR0VUIEFtZW5hZ2VtZW50XG4gKiBAYXBpTmFtZSBHZXRBbWVuYWdlbWVudFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgQW1lbmFnZW1lbnRzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGFtSWQgaG90ZWxJZCBob3RlbCB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYW1JZCB1bmlxdWUgSUQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbElkIHVuaXF1ZSBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhbWVuYWdlbWVudCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3QgIGFjdGl2ZSAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gIHtcbiAgICBcImFtSWRcIjogMSxcbiAgICBcImhvdGVsSWRcIjogMSxcbiAgICBcImFjdFwiOiAwLFxuICAgIFwiYW1lbmFnZW1lbnRcIjogXCJTw6hjaGUtY2hldmV1eFwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxufVxuICpcbiAqIEBhcGlVc2UgIEFtZW5hZ2VtZW50Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvYW1lbmFnZW1lbnQvIFBPU1QgQW1lbmFnZW1lbnRcbiAqIEBhcGlOYW1lIFBPU1RBbWVuYWdlbWVudFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBBbWVuYWdlbWVudHNcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICogICAge1xuICogICBcImhvdGVsSWRcIjoyLCBhdXRob3JpemUoKSxcbiAqICAgXCJhY3RcIjogMixcbiAqICAgXCJhbWVuYWdlbWVudCBhdXRob3JpemUoKSxldmV1eFwiXG59XG5cbiAqIEBhcGlTdWNjZXNzRXhhIGF1dGhvcml6ZSgpLC1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyIGF1dGhvcml6ZSgpLFxue1xuICAgIFwiYW1JZFwiOiA4MyxcbiAgICBcImhvdGVsSWRcIjogMiwgYXV0aG9yaXplKCksXG4gICAgXCJhY3RcIjogMixcbiAgICBcImFtZW5hZ2VtZW50XCI6IFwiU8OoY2hlLWNoZXZldXhcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMDktMTdUMDY6MjU6MTMuMDU3WlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0wOS0xN1QwNjoyNToxMy4wNTdaXCJcbn1cbiovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9hbWVuYWdlbWVudC86YW1JZCBQVVQgQW1lbmFnZW1lbnRcbiAqIEBhcGlOYW1lIFBVVEFtZW5hZ2VtZW50XG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEFtZW5hZ2VtZW50c1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhbUlkICAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG57XG5cbiAgICBcImhvdGVsSWRcIjogMixcbiAgICBcImFjdFwiOiAyLFxuICAgIFwiYW1lbmFnZW1lbnRcIjogXCJTw6hjaGUtY2hldmV1eFwiXG5cbn1cblxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvYW1lbmFnZW1lbnQvOmFtSWQgRGVsZXRlIEFtZW5hZ2VtZW50XG4gICAqIEBhcGlHcm91cCAgQW1lbmFnZW1lbnRzXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhbUlkIGlkIGFtZW5hZ2VtZW50XG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvKipcbiAgICogQGFwaURlZmluZSBSb29taW1nTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIFJvb21pbWdOb3RGb3VuZCAgPGNvZGU+cm9vbWltZzwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJyb29taW1nIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL3Jvb21pbWdzLzpob3RlbElkICBBTEwgSW1hZ2VzIGNoYW1icmVzIHBhciBow7R0ZWxcbiAqIEBhcGlOYW1lIEdldFJvb21JbWFnZXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIEltYWdlcyBjaGFtYnJlXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGhvdGVsSWQgaG90ZWwgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcm9vbWltZyB1bmlxdWUgSUQgaW1hZ2UuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIHVuaXF1ZSBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHJvb20gdW5pcXVlIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaW1nIGltYWdlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0aXZlICBhY3RpdmUgMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFtcbiAgICB7XG4gICAgICAgIFwiaWRyb29taW1nXCI6IDMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcImlkcm9vbVwiOiAyLFxuICAgICAgICBcImltZ1wiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItZG91YmxlLmpwZ1wiLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRyb29taW1nXCI6IDQsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcImlkcm9vbVwiOiAzLFxuICAgICAgICBcImltZ1wiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItdHJpcGxlLmpwZ1wiLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfSxcbi4uLlxuXVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL3Jvb21pbWcvOmlkcm9vbWltZyBHRVQgSW1hZ2UgY2hhbWJyZVxuICogQGFwaU5hbWUgR2V0Um9vbUltYWdlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBJbWFnZXMgY2hhbWJyZVxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHJvb21pbWcgcm9vbSB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRyb29taW1nIHVuaXF1ZSBJRCBpbWFnZS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgdW5pcXVlIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcm9vbSB1bmlxdWUgSUQgcm9vbSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBpbWcgaW1hZ2UuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3RpdmUgIGFjdGl2ZSAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gICAge1xuICAgICAgICBcImlkcm9vbWltZ1wiOiAzLFxuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJpZHJvb21cIjogMixcbiAgICAgICAgXCJpbWdcIjogXCJvbmUtcmVzb3J0LW1vbmFzdGlyLWRvdWJsZS5qcGdcIixcbiAgICAgICAgXCJhY3RpdmVcIjogMSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvcm9vbWltZy8gUE9TVCBJbWFnZSBjaGFtYnJlXG4gKiBAYXBpTmFtZSBQT1NUVFJvb21JbWFnZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBJbWFnZXMgY2hhbWJyZVxuICpcblxuIEBhcGlwYXJhbSB7RmlsZX0gRmlsZUltZyBpbWFnZS5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAqICAgICB7XG4gKiAgICAgICBcImltZ1wiOiBcInRlc3QuanBnXCIsXG4gKiAgICAgICBcImlkaG90ZWxcIjogMSxcbiAqICAgICAgIFwiaWRyb29tXCI6IDIsXG4gKiAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgXG4gKiAgICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICAgICAgXCJpZHJvb21pbWdcIjogMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwiaWRyb29tXCI6IDIsXG4gICAgICAgIFwiaW1nXCI6IFwib25lLXJlc29ydC1tb25hc3Rpci1kb3VibGUuanBnXCIsXG4gICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvcm9vbWltZy86aWRyb29taW1nIFBVVCBJbWFnZSBjaGFtYnJlXG4gKiBAYXBpTmFtZSBQVVRSb29tSW1hZ2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgSW1hZ2VzIGNoYW1icmVcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRyb29taW1nICAgICAgICAgIGhvdGVsIHVuaXF1ZSBJRC5cbiBAYXBpcGFyYW0ge0ZpbGV9IEZpbGVJbWcgaW1hZ2UuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG4gKiAgICAge1xuICogICAgICAgXCJpbWdcIjogXCJ0ZXN0LmpwZ1wiLFxuICogICAgICAgXCJpZGhvdGVsXCI6IDIxLFxuICogICAgICAgXCJpZHJvb21cIjogMixcbiAqICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICBcbiAqICAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4qIHtcbiAgICAgICAgXCJpZHJvb21pbWdcIjogMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwiaWRyb29tXCI6IDIsXG4gICAgICAgIFwiaW1nXCI6IFwib25lLXJlc29ydC1tb25hc3Rpci1kb3VibGUuanBnXCIsXG4gICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG5cbiAqL1xuXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9yb29taW1nLzppZHJvb21pbWcgRGVsZXRlIHJvb21pbWdcbiAgICogQGFwaUdyb3VwIEltYWdlcyBjaGFtYnJlXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHJvb21pbWcgaWQgaWRyb29taW1nXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvKipcblxuICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvaG90ZWxpbWdzLzpob3RlbElkICBBTEwgSW1hZ2VzIGhvdGVscyBwYXIgaMO0dGVsXG4gKiBAYXBpTmFtZSBHZXRIb3RlbEltYWdlc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgSW1hZ2VzIGhvdGVsXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGhvdGVsSWQgaG90ZWwgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGhvdGVsSW1nSWQgdW5pcXVlIElEIGltYWdlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCB1bmlxdWUgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1nUHJvZmlsIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbWdDaGFtYnJlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwbGFjZW1lbnQgIC5cblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gaG90ZWxJbWcgaW1hZ2UuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwiaG90ZWxJbWdJZFwiOiAyLFxuICAgICAgICBcImhvdGVsSW1nXCI6IFwibGFpY29faGFtbWFtZXQuanBnXCIsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyLFxuICAgICAgICBcImltZ1Byb2ZpbFwiOiAwLFxuICAgICAgICBcImltZ0NoYW1icmVcIjogMSxcbiAgICAgICAgXCJwbGFjZW1lbnRcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgICBcImhvdGVsSW1nSWRcIjogNSxcbiAgICAgICAgXCJob3RlbEltZ1wiOiBcImxhaWNvLWhhbW1hbWV0LWhvdGVsLmpwZ1wiLFxuICAgICAgICBcImhvdGVsSWRcIjogMixcbiAgICAgICAgXCJpbWdQcm9maWxcIjogMCxcbiAgICAgICAgXCJpbWdDaGFtYnJlXCI6IDEsXG4gICAgICAgIFwicGxhY2VtZW50XCI6IDAsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAuLi5cbl1cblxuICovXG4gIC8qKiBcblxuKiBAYXBpIHtnZXR9IC9ob3RlbGltZ3MvcHJvZmlsLzpob3RlbElkICBpbWdQcm9maWwgaG90ZWxzIHBhciBow7R0ZWxcbiogQGFwaU5hbWUgR2V0SG90ZWxJbWFnZXNQcm9maWxcbiogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiogQGFwaUdyb3VwICBJbWFnZXMgaG90ZWxcbipcbiogQGFwaVBhcmFtIHtOdW1iZXJ9IGhvdGVsSWQgaG90ZWwgdW5pcXVlIElELlxuKlxuKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbEltZ0lkIHVuaXF1ZSBJRCBpbWFnZS5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCB1bmlxdWUgSUQgaG90ZWwgLlxuKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbWdQcm9maWwgMC8xIC5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1nQ2hhbWJyZSAwLzEgLlxuKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwbGFjZW1lbnQgIC5cblxuKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBob3RlbEltZyBpbWFnZS5cblxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAge1xuICAgICAgIFwiaG90ZWxJbWdJZFwiOiAyLFxuICAgICAgIFwiaG90ZWxJbWdcIjogXCJsYWljb19oYW1tYW1ldC5qcGdcIixcbiAgICAgICBcImhvdGVsSWRcIjogMixcbiAgICAgICBcImltZ1Byb2ZpbFwiOiAwLFxuICAgICAgIFwiaW1nQ2hhbWJyZVwiOiAxLFxuICAgICAgIFwicGxhY2VtZW50XCI6IDAsXG4gICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICB9XG5dXG5cbiovXG4gIC8qKiBcbiAqIEBhcGkge2dldH0gL2hvdGVsaW1nLzpob3RlbEltZ0lkIEdFVCBJbWFnZSBob3RlbFxuICogQGFwaU5hbWUgR2V0SG90ZWxJbWFnZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgSW1hZ2VzIGhvdGVsXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkaG90ZWxpbWcgcm9vbSB1bmlxdWUgSUQuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbElkIHVuaXF1ZSBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbWdQcm9maWwgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGltZ0NoYW1icmUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBsYWNlbWVudCAgLlxuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBob3RlbEltZyBpbWFnZS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiAgICB7XG4gICAgICAgIFwiaG90ZWxJbWdJZFwiOiAzLFxuICAgICAgICBcImhvdGVsSW1nXCI6IFwibGFpY29faGFtbWFtZXQuanBnXCIsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyLFxuICAgICAgICBcImltZ1Byb2ZpbFwiOiAwLFxuICAgICAgICBcImltZ0NoYW1icmVcIjogMSxcbiAgICAgICAgXCJwbGFjZW1lbnRcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cbiAqXG49XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9ob3RlbGltZy8gUE9TVCBJbWFnZSBob3RlbFxuICogQGFwaU5hbWUgUE9TVFRIb3RlbEltYWdlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEltYWdlcyBob3RlbFxuICpcblxuIEBhcGlwYXJhbSB7RmlsZX0gZmlsZUltZyBpbWFnZS5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAqICAgICB7XG4gICAgICAgIFwiaG90ZWxJbWdcIjogXCJsYWljb19oYW1tYW1ldC5qcGdcIixcbiAgICAgICAgXCJob3RlbElkXCI6IDIsXG4gICAgICAgIFwiaW1nUHJvZmlsXCI6IDAsXG4gICAgICAgIFwiaW1nQ2hhbWJyZVwiOiAxLFxuICAgICAgICBcInBsYWNlbWVudFwiOiAwLFxuICAgICAgXG4gKiAgICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICAgICAgXCJob3RlbEltZ0lkXCI6IDMsXG4gICAgICAgIFwiaG90ZWxJbWdcIjogXCJsYWljb19oYW1tYW1ldC5qcGdcIixcbiAgICAgICAgXCJob3RlbElkXCI6IDIsXG4gICAgICAgIFwiaW1nUHJvZmlsXCI6IDAsXG4gICAgICAgIFwiaW1nQ2hhbWJyZVwiOiAxLFxuICAgICAgICBcInBsYWNlbWVudFwiOiAwLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2hvdGVsaW1nLzpob3RlbEltZ0lkIFBVVCBJbWFnZSBob3RlbFxuICogQGFwaU5hbWUgUFVUSG90ZWxJbWFnZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBJbWFnZXMgaG90ZWxcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaG90ZWxJbWdJZCAgICAgICAgICBob3RlbCB1bmlxdWUgSUQuXG4gQGFwaXBhcmFtIHtGaWxlfSBmaWxlSW1nIGltYWdlLlxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICogICAgIHtcbiAgKiAgICAgICAgXCJob3RlbEltZ1wiOiBcImxhaWNvX2hhbW1hbWV0LmpwZ1wiLFxuICAqICAgICAgICBcImhvdGVsSWRcIjogMixcbiAqICAgICAgICAgXCJpbWdQcm9maWxcIjogMCxcbiAgKiAgICAgICAgXCJpbWdDaGFtYnJlXCI6IDEsXG4gKiAgICAgICAgIFwicGxhY2VtZW50XCI6IDAsXG4gICAgICBcbiAqICAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4qIHtcbiAgICAgICAgXCJob3RlbEltZ0lkXCI6IDMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcImlkcm9vbVwiOiAyLFxuICAgICAgICBcImltZ1wiOiBcIm9uZS1yZXNvcnQtbW9uYXN0aXItZG91YmxlLmpwZ1wiLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2hvdGVsaW1nLzpob3RlbEltZ0lkIERlbGV0ZSBob3RlbGltZ1xuICAgKiBAYXBpR3JvdXAgSW1hZ2VzIGhvdGVsXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBob3RlbEltZ0lkIGlkIGhvdGVsaW1nXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL21lbWJyZXNcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgTWVtYnJlTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIE1lbWJyZU5vdEZvdW5kICA8Y29kZT5BbWVuYWdhbWVudDwvY29kZT4gcGFzIHRyb3V2w6kuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcImFnZW5jZSBwYXMgdHJvdXbDqVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL21lbWJyZXMvOmlkYWdlbmNlICBBTEwgbWVtYnJlcyBwYXIgYWdlbmNlXG4gKiBAYXBpTmFtZSBHZXRNZW1icmVzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIE1lbWJyZXNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRhZ2VuY2UgYWdlbmNlIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRhZ2VuY2UgdW5pcXVlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpbiAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB1c2VybmFtZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWRtaW4gIGFkbWluIDAvMS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG4gICAge1xuICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiYWRtaW5cIjogMVxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6IDgsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJsb2dpblwiOiBcIndhbGlkXCIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJ3YWxpZFwiLFxuICAgICAgICBcImVtYWlsXCI6IFwiZGlyZWN0aW9uQHRhc25pbWV2b3lhZ2VzLmNvbVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImFkbWluXCI6IDFcbiAgICB9LCBcbi4uLlxuXVxuICAqIEBhcGlVc2UgIE1lbWJyZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvbWVtYnJlcy86aWRhZ2VuY2UgIEFMTCBtZW1icmVzIHBhciBhZ2VuY2VcbiAqIEBhcGlOYW1lIEdldE1lbWJyZXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgTWVtYnJlc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZGFnZW5jZSBhZ2VuY2UgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSB1bmlxdWUgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxvZ2luIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHVzZXJuYW1lIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZG1pbiAgYWRtaW4gMC8xLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFtcbiAgICB7XG4gICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAxLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJhZG1pblwiOiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjogOCxcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAxLFxuICAgICAgICBcImxvZ2luXCI6IFwid2FsaWRcIixcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIndhbGlkXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJkaXJlY3Rpb25AdGFzbmltZXZveWFnZXMuY29tXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiYWRtaW5cIjogMVxuICAgIH0sIFxuLi4uXG5dXG4gICogQGFwaVVzZSAgTWVtYnJlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9tZW1icmUvOmlkIEdFVCBNZW1icmVcbiAqIEBhcGlOYW1lIEdldE1lbWJyZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBNZW1icmVzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkYWdlbmNlIGFnZW5jZSB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIHVuaXF1ZSBJRCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbG9naW4gLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdXNlcm5hbWUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkbWluICBhZG1pbiAwLzEuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4gIHtcbiAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDEsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImFkbWluXCI6IDFcbiAgICB9XG4gKlxuICogQGFwaVVzZSAgTWVtYnJlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvbWVtYnJlLyBQT1NUIE1lbWJyZVxuICogQGFwaU5hbWUgUE9TVE1lbWJyZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBNZW1icmVzXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAge1xuXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiYWRtaW5cIjogMVxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgXCJpZFwiOiA4MyxcbiAgICBcImlkYWdlbmNlXCI6IDIsXG4gICAgXCJhY3RcIjogMixcbiAgICBcImFnZW5jZVwiOiBcIlPDqGNoZS1jaGV2ZXV4XCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTA5LTE3VDA2OjI1OjEzLjA1N1pcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMDktMTdUMDY6MjU6MTMuMDU3WlwiXG59XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL21lbWJyZS86aWQgUFVUIE1lbWJyZVxuICogQGFwaU5hbWUgUFVUTWVtYnJlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIE1lbWJyZXNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiB7XG5cbiAgICAgICAgXCJpZGFnZW5jZVwiOiAxLFxuICAgICAgICBcImxvZ2luXCI6IFwidGFzbmltZVwiLFxuICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGFzbmltZSBWb3lhZ2VzICYgVG91cmlzbWVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcInRhc25pbWUudm95YWdlc0BnbWFpbC5jb21cIixcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJhZG1pblwiOiAxXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuIHtcbiAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDEsXG4gICAgICAgIFwibG9naW5cIjogXCJ0YXNuaW1lXCIsXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICBcImVtYWlsXCI6IFwidGFzbmltZS52b3lhZ2VzQGdtYWlsLmNvbVwiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImFkbWluXCI6IDFcbiAgICB9XG5cblxuKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL21lbWJyZXB3ZC86aWQgUFVUIE1vdCBkZSBwYXNzZSBNZW1icmUgXG4gKiBAYXBpTmFtZSBQVVRNZW1icmVQV0RcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgTWVtYnJlc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlCb2R5IHtTdHJpbmd9IHAgICAgICAgICBtb3QgZGUgcGFzc2UgY3J5cHTDqSBzaGE1MTIuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbntcblwicFwiOlwiMTIxMzAyODcwZjQ4MTliZTAzMjEwYjQwOGYxOGRmYjcxZjE5MWI1MjQ4MDk3NjMzOGJmN2IxMjBiZGIyYmJhYTQ2ZDA5NmI1MjllYzBjYjFkZGQ0NWU3YjA5ZjZmYzBlZDAzZmFiZWNkMDg5Y2VlOTRjMDkxYWNjMmVmN2YyYmNcIlxufVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgXCJzdWNjZXNzXCI6IHRydWVcbn1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvcHJvZmlscHdkLzppZCBQVVQgTW90IGRlIHBhc3NlIFByb2ZpbCBcbiAqIEBhcGlOYW1lIFBVVFByb2ZpbFBXRFxuICogQGFwaVBlcm1pc3Npb24gVXNlclxuICogQGFwaUdyb3VwIE1lbWJyZXNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpQm9keSB7U3RyaW5nfSBwICAgICAgICAgbW90IGRlIHBhc3NlIGNyeXB0w6kgc2hhNTEyLlxuICogQGFwaUJvZHkge1N0cmluZ30gcF9vbGQgICAgICAgICBtb3QgZGUgcGFzc2UgYW5jaWVuIGNyeXB0w6kgc2hhNTEyLlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG57XG5cInBcIjpcIjEyMTMwMjg3MGY0ODE5YmUwMzIxMGI0MDhmMThkZmI3MWYxOTFiNTI0ODA5NzYzMzhiZjdiMTIwYmRiMmJiYWE0NmQwOTZiNTI5ZWMwY2IxZGRkNDVlN2IwOWY2ZmMwZWQwM2ZhYmVjZDA4OWNlZTk0YzA5MWFjYzJlZjdmMmJjXCJcblwicF9vbGRcIjpcIjc0NTU1NTU4MTliZTAzMjEwYjQwOGYxOGRmYjcxZjE5MWI1MjQ4MDk3NjMzOGJmN2IxMjBiZGIyYmJhYTQ2ZDA5NmI1MjllYzBjYjFkZGQ0NWU3YjA5ZjZmYzBlZDAzZmFiZWNkMDg5Y2VlOTRjMDkxYWNjMmVmN2YyYmNcIlxufVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG57XG4gICAgXCJzdWNjZXNzXCI6IHRydWVcbn1cbiAqL1xuXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9tZW1icmUvOmlkIERlbGV0ZSBtZW1icmVcbiAgICogQGFwaUdyb3VwIE1lbWJyZXNcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkIG1lbWJyZXNcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vTWFyZ2UgSG90ZWxcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgbWFyZ2VfaG90ZWxOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgbWFyZ2VfaG90ZWxOb3RGb3VuZCAgPGNvZGU+bWFyZ2U8L2NvZGU+IHBhcyB0cm91dsOpLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJhZ2VuY2UgcGFzIHRyb3V2w6lcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9tYXJnZV9ob3RlbHMvOmlkYWdlbmNlICBBTEwgTWFyZ2UgSG90ZWwgcGFyIGFnZW5jZVxuICogQGFwaU5hbWUgR2V0TWFyZ2VzIEhvdGVsXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIE1hcmdlIEhvdGVsXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkYWdlbmNlIGFnZW5jZSB1bmlxdWUgSUQuXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIHVuaXF1ZSBJRCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCB1bmlxdWUgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2UgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gW1xuICAgXG4gICAge1xuICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzNixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAyMDAsXG4gICAgICAgIFwibWFyZ2VcIjogNSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuLi4uXG5dXG4gICogQGFwaVVzZSAgbWFyZ2VfaG90ZWxOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL21hcmdlX2hvdGVsLzppZCBHRVQgbWFyZ2VfaG90ZWxcbiAqIEBhcGlOYW1lIEdldG1hcmdlX2hvdGVsXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIE1hcmdlIEhvdGVsXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkbWFyZ2UgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSB1bmlxdWUgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgdW5pcXVlIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiAge1xuICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJsb2dpblwiOiBcInRhc25pbWVcIixcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJ0YXNuaW1lLnZveWFnZXNAZ21haWwuY29tXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiYWRtaW5cIjogMVxuICAgIH1cbiAqXG4gKiBAYXBpVXNlICBtYXJnZV9ob3RlbE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL21hcmdlX2hvdGVsLyBQT1NUIG1hcmdlX2hvdGVsXG4gKiBAYXBpTmFtZSBQT1NUbWFyZ2VfaG90ZWxcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgTWFyZ2UgSG90ZWxcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuIHtcbiAgICAgICBcbiAgICAgICAgXCJpZGhvdGVsXCI6IDM2LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDEsXG4gICAgICAgIFwibWFyZ2VcIjogNSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuICAgIHtcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcImlkaG90ZWxcIjogMzYsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMjAwLFxuICAgICAgICBcIm1hcmdlXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvbWFyZ2VfaG90ZWwvOmlkIFBVVCBtYXJnZV9ob3RlbFxuICogQGFwaU5hbWUgUFVUbWFyZ2VfaG90ZWxcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgTWFyZ2UgSG90ZWxcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiB7XG4gICAgICAgXG4gICAgICAgIFwiaWRob3RlbFwiOiAzNixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAxLFxuICAgICAgICBcIm1hcmdlXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMFxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cblxuICAgIHtcbiAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICBcImlkaG90ZWxcIjogMzYsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMjAwLFxuICAgICAgICBcIm1hcmdlXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH1cblxuKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL21hcmdlX2hvdGVsLzppZCBEZWxldGUgbWFyZ2VfaG90ZWxcbiAgICogQGFwaUdyb3VwIE1hcmdlIEhvdGVsXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgaWQgbWFyZ2VfaG90ZWxcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vcm9vbVxuICAvKipcbiAgICogQGFwaURlZmluZSByb29tTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIHJvb21Ob3RGb3VuZCAgPGNvZGU+Q2hhbWJyZTwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJDaGFtYnJlIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL3Jvb20vICBBTEwgQ2hhbWJyZVxuICogQGFwaU5hbWUgR2V0cm9vbXNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIENoYW1icmVcbiAqXG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCB1bmlxdWUgSUQgQ2hhbWJyZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSByb29tbmFtZSAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWJyICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3QgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX3BlcnMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X3BlcnMgLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwicm9vbWlkXCI6IDEsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwicm9vbW5hbWVcIjogXCJDaGFtYnJlIFNpbmdsZVwiLFxuICAgICAgICBcIm1pbl9wZXJzXCI6IDEsXG4gICAgICAgIFwibWF4X3BlcnNcIjogMSxcbiAgICAgICAgXCJhYnJcIjogXCJTSU5HTEVcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcInJvb21uYW1lXCI6IFwiQ2hhbWJyZSBEb3VibGVcIixcbiAgICAgICAgXCJtaW5fcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9wZXJzXCI6IDIsXG4gICAgICAgIFwiYWJyXCI6IFwiRE9VQkxFXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJyb29taWRcIjogMyxcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJyb29tbmFtZVwiOiBcIkNoYW1icmUgVHJpcGxlXCIsXG4gICAgICAgIFwibWluX3BlcnNcIjogMyxcbiAgICAgICAgXCJtYXhfcGVyc1wiOiAzLFxuICAgICAgICBcImFiclwiOiBcIlRSSVBMRVwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXHRdXG4gICogQGFwaVVzZSAgcm9vbU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcm9vbS86aWQgR0VUIENoYW1icmVcbiAqIEBhcGlOYW1lIEdldHJvb21cbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIENoYW1icmVcbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgdW5pcXVlIElEIENoYW1icmUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcm9vbW5hbWUgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFiciAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9wZXJzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9wZXJzIC5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiB7XG4gICAgXCJyb29taWRcIjogNTgsXG4gICAgXCJhY3RcIjogXCIxXCIsXG4gICAgXCJyb29tbmFtZVwiOiBcInRlc3RcIixcbiAgICBcIm1pbl9wZXJzXCI6IFwiMVwiLFxuICAgIFwibWF4X3BlcnNcIjogXCI0XCIsXG4gICAgXCJhYnJcIjogXCJycnh3XCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTAxVDEyOjQzOjM2LjAwMFpcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMDFUMTI6NDU6MzEuNDY3WlwiXG59XG4gKlxuICogQGFwaVVzZSAgcm9vbU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3Jvb20vIFBPU1QgQ2hhbWJyZVxuICogQGFwaU5hbWUgUE9TVHJvb21cbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIENoYW1icmVcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICAgIHtcblxuICAgIFwiYWN0XCI6IFwiMVwiLFxuICAgIFwicm9vbW5hbWVcIjogXCJ0ZXN0XCIsXG4gICAgXCJtaW5fcGVyc1wiOiBcIjFcIixcbiAgICBcIm1heF9wZXJzXCI6IFwiNFwiLFxuICAgIFwiYWJyXCI6IFwicnJ4d1wiXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbntcbiAgICBcInJvb21pZFwiOiA1OCxcbiAgICBcImFjdFwiOiBcIjFcIixcbiAgICBcInJvb21uYW1lXCI6IFwidGVzdFwiLFxuICAgIFwibWluX3BlcnNcIjogXCIxXCIsXG4gICAgXCJtYXhfcGVyc1wiOiBcIjRcIixcbiAgICBcImFiclwiOiBcInJyeHdcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMDFUMTI6NDM6MzYuMDAwWlwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0wMVQxMjo0NTozMS40NjdaXCJcbn1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvcm9vbS86aWQgUFVUIENoYW1icmVcbiAqIEBhcGlOYW1lIFBVVHJvb21cbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIENoYW1icmVcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gcm9vbWlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAge1xuICBcImFjdFwiOiBcIjFcIixcbiAgICBcInJvb21uYW1lXCI6IFwidGVzdFwiLFxuICAgIFwibWluX3BlcnNcIjogXCIxXCIsXG4gICAgXCJtYXhfcGVyc1wiOiBcIjRcIixcbiAgICBcImFiclwiOiBcInJyeHdcIlxuICAgIH1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG57XG4gICAgXCJyb29taWRcIjogNTgsXG4gICAgXCJhY3RcIjogXCIxXCIsXG4gICAgXCJyb29tbmFtZVwiOiBcInRlc3RcIixcbiAgICBcIm1pbl9wZXJzXCI6IFwiMVwiLFxuICAgIFwibWF4X3BlcnNcIjogXCI0XCIsXG4gICAgXCJhYnJcIjogXCJycnh3XCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTAxVDEyOjQzOjM2LjAwMFpcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMDFUMTI6NDU6MzEuNDY3WlwiXG59XG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9yb29tLzpyb29taWQgRGVsZXRlIENoYW1icmVcbiAgICogQGFwaU5hbWUgREVMRVRFcm9vbVxuICAgKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICAgKiBAYXBpR3JvdXAgIENoYW1icmVcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IHJvb21pZCBpZCBDaGFtYnJlXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL0VuY2Fpc3NlbWVudFxuICAvKipcbiAgICogQGFwaURlZmluZSBlbmNhaXNzZW1lbnROb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgZW5jYWlzc2VtZW50Tm90Rm91bmQgIDxjb2RlPm1hcmdlPC9jb2RlPiBwYXMgdHJvdXbDqS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiYWdlbmNlIHBhcyB0cm91dsOpXCJcbiAgICogICAgIH1cbiAgICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9lbmNhaXNzZW1lbnRzLzphZ2VuY2UgIEFMTCBFbmNhaXNzZW1lbnRzIHBhciBhZ2VuY2VcbiAqIEBhcGlOYW1lIEdldEVuY2Fpc3NlbWVudHNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgRW5jYWlzc2VtZW50c1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhZ2VuY2UgYWdlbmNlIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWdlbmNlIHVuaXF1ZSBJRCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCB1bmlxdWUgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBbXG4gICAgXG4gICB7XG4gICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgXCJhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJ2YWxldXJcIjogMzAwMDAsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMDctMTJUMTA6MjU6MDYuMDAwWlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuLi4uXG5dXG4gICogQGFwaVVzZSAgZW5jYWlzc2VtZW50Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9lbmNhaXNzZW1lbnQvOmlkIEdFVCBlbmNhaXNzZW1lbnRcbiAqIEBhcGlOYW1lIEdldGVuY2Fpc3NlbWVudFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBFbmNhaXNzZW1lbnRzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGFnZW5jZSBhZ2VuY2UgdW5pcXVlIElELlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZ2VuY2UgdW5pcXVlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIHVuaXF1ZSBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxuIHtcbiAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICBcImFnZW5jZVwiOiAxLFxuICAgICAgICBcInZhbGV1clwiOiAzMDAwMCxcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNy0xMlQxMDoyNTowNi4wMDBaXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG4gKlxuICogQGFwaVVzZSAgZW5jYWlzc2VtZW50Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvZW5jYWlzc2VtZW50LyBQT1NUIGVuY2Fpc3NlbWVudFxuICogQGFwaU5hbWUgUE9TVGVuY2Fpc3NlbWVudFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCBFbmNhaXNzZW1lbnRzXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiB7XG4gICAgICBcbiAgICAgICAgXCJhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJ2YWxldXJcIjogMzAwMDAsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMDctMTJUMTA6MjU6MDYuMDAwWlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuIHtcbiAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICBcImFnZW5jZVwiOiAxLFxuICAgICAgICBcInZhbGV1clwiOiAzMDAwMCxcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNy0xMlQxMDoyNTowNi4wMDBaXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2VuY2Fpc3NlbWVudC86aWQgUFVUIGVuY2Fpc3NlbWVudFxuICogQGFwaU5hbWUgUFVUZW5jYWlzc2VtZW50XG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwIEVuY2Fpc3NlbWVudHNcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiB7XG4gIFxuICAgICAgICBcImFnZW5jZVwiOiAxLFxuICAgICAgICBcInZhbGV1clwiOiAzMDAwMCxcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNy0xMlQxMDoyNTowNi4wMDBaXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGxcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5cbiB7XG4gICAgICAgIFwiaWRcIjogMixcbiAgICAgICAgXCJhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJ2YWxldXJcIjogMzAwMDAsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMDctMTJUMTA6MjU6MDYuMDAwWlwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsXG4gICAgfVxuXG4qL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvZW5jYWlzc2VtZW50LzppZCBEZWxldGUgZW5jYWlzc2VtZW50XG4gICAqIEBhcGlHcm91cCBFbmNhaXNzZW1lbnRzXG4gICAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBlbmNhaXNzZW1lbnRcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuICAvL25ldyByZXNlcnZhdGlvbnNcblxuICAvKipcbiAqIEBhcGkge2dldH0gL25ld19yZXNlcnZhdGlvbnMvIEdldCBBTEwgTm91dmVhdXggUmVzZXJ2YXRpb25zXG4gKiBAYXBpTmFtZSBHZXROb3V2ZWF1eFJlc2VydmF0aW9uc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcmVzZXJ2YXRpb25zXG4gKlxuXG4gXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgICAgICB7XG4gICAgICAgIFwicmVmZXJlbmNlXCI6IFwiMjg0NzczODIxMlwiLFxuICAgICAgICBcImNoYW1icmVcIjogXCJjaGFtYnJlMTogQ2hhbWJyZSBEb3VibGUgIERQICAyYWR1bHRlcyAwZW5mYW50cyAwYmViZXNcXG4gY2hhbWJyZTI6IENoYW1icmUgVHJpcGxlICBEUCAgM2FkdWx0ZXMgMGVuZmFudHMgMGJlYmVzXFxuIFwiLFxuICAgICAgICBcImFnZW5jZVwiOiBcIkNvdGUgZCdvclwiLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDIyNlxuICAgIH0sXG5cdF1cblxuICovXG5cbiAgLy9ib29raW5nX2IyYlxuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcmVzZXJ2YXRpb25zLyBHZXQgQUxMIHJlc2VydmF0aW9uc1xuICogQGFwaU5hbWUgR2V0cmVzZXJ2YXRpb25zXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICByZXNlcnZhdGlvbnNcbiAqXG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG51bSB1bmlxdWUgbnVtIHJlc2VydmF0aW9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSByZWZlcmVuY2UgIC5cblxuICogQGFwaVN1Y2Nlc3Mge0RhdGV0aW1lfSBkYXRlX2NtZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kX2RlYnV0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNsaWVudCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9mcm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3RvIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5ibnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZHVsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZhbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJjaGFtIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1vbnRhbnQgbW9udGFudCBkZSBsYSByw6lzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1vbnRhbnRfYSBtb250YW50IGQnYWNoYXQgbGEgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7U3RybmlnfSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gY2hhbWJyZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBhYnIgYWJyZXZpYXRpb24gZGUgbGEgY2hhbWJyZVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gb2JzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR5cGUgZGUgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbCBfZW52b3llciAwLzFcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50X2FubnVsIGQnYW5udWxhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50X25vc2hvdyBtb250YW50IG5vc2hvdyAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZnJhaXNfYW5udWxhdGlvbiAgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG9ic2VydmF0aW9uX2FubnVsYXRpb24gICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9hdmFudCAgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2FubnVsYXRpb24gICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9hbm51bGF0aW9uICAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZXRhdCAgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHN0YXR1cyAgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9jb25maXJtYXRpb24gICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwcmludCAwLzEgICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3RpdmUgMC8xICAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcm1xcyAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV0aW1lfSBkYXRlX2Vudm95ZXJfaG90ZWwgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGV0YXRfaG90ZWwgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHZ1X2hvdGVsICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2dV9ob3RlbCAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gb3JkaWRfbWQgIGlkIGN5YmVyZXNhXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBwYXNzd3NfbWQgIG1vdCBkZSBwYXNzZSBjeWJlcmVzYVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gc2lnbWEgIC5cbiAqIEBhcGlTdWNjZXNzIHthZ2VuY2V9IGFnZW5jZSAgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAgLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwibnVtXCI6IDY2LFxuICAgICAgICBcInJlZmVyZW5jZVwiOiBcIjc3OTMyMzU1ODRcIixcbiAgICAgICAgXCJkYXRlX2NtZFwiOiBcIjIwMTctMDItMjFUMTU6NDA6MzQuMDAwWlwiLFxuICAgICAgICBcImlkaG90ZWxcIjogMzMsXG4gICAgICAgIFwiaWRwZXJpb2RfZGVidXRcIjogNjQ2LFxuICAgICAgICBcImlkYWdlbmNlXCI6IDIzLFxuICAgICAgICBcImNsaWVudFwiOiBcInRlc3QgdGVzdFwiLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTctMDMtMTBcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxNy0wMy0xM1wiLFxuICAgICAgICBcIm5ibnVpdFwiOiAzLFxuICAgICAgICBcImFkdWx0XCI6IDIsXG4gICAgICAgIFwiZW5mYW50XCI6IDAsXG4gICAgICAgIFwibmJjaGFtXCI6IDEsXG4gICAgICAgIFwibW9udGFudFwiOiAzMDAsXG4gICAgICAgIFwibW9udGFudF9hXCI6IDI3MCxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJUTkRcIixcbiAgICAgICAgXCJ0YXV4X2RldmlzZVwiOiAxLFxuICAgICAgICBcImNoYW1icmVcIjogXCJjaGFtYnJlMTogQ2hhbWJyZSBEb3VibGUgIExQRCAgMmFkdWx0cyAwZW5mYW50cyAwYmViZXNcXG4gPGJyID5cIixcbiAgICAgICAgXCJhYnJcIjogXCJET1VCTEVcIixcbiAgICAgICAgXCJvYnNlcnZhdGlvblwiOiBcIk1vZGlmaWNhdGlvbiBSw6lzZXJ2YXRpb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiXCIsXG4gICAgICAgIFwiZW1haWxfZW52b3llclwiOiAxLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcIm1vbnRhbnRfYW5udWxcIjogMzAwLFxuICAgICAgICBcIm1vbnRhbnRfbm9zaG93XCI6IDMwMCxcbiAgICAgICAgXCJmcmFpc19hbm51bGF0aW9uXCI6IDMwMCxcbiAgICAgICAgXCJvYnNlcnZhdGlvbl9hbm51bGF0aW9uXCI6IFwiRnJhaXMgTm9zaG93IMOgIGZhY3R1csOpZVwiLFxuICAgICAgICBcImRhdGVfYXZhbnRcIjogXCIyMDE3LTAzLTA3XCIsXG4gICAgICAgIFwiZGF0ZV9hbm51bGF0aW9uXCI6IFwiMjAxNy0wNi0wN1QxNTozNzoxMy4wMDBaXCIsXG4gICAgICAgIFwiZXRhdFwiOiAwLFxuICAgICAgICBcInN0YXR1c1wiOiBcImJvb2tpbmdcIixcbiAgICAgICAgXCJkYXRlX2NvbmZpcm1hdGlvblwiOiBudWxsLFxuICAgICAgICBcInByaW50XCI6IDEsXG4gICAgICAgIFwiYWN0aXZlXCI6IDEsXG4gICAgICAgIFwicm1xc1wiOiBcIlwiLFxuICAgICAgICBcInNpZ21hXCI6IFwiXCIsXG4gICAgICAgIFwiZGF0ZV9lbnZveWVyX2hvdGVsXCI6IFwiMjAxNy0wMi0yMVQxNTo0MDozNC4wMDBaXCIsXG4gICAgICAgIFwiZXRhdF9ob3RlbFwiOiBcIlwiLFxuICAgICAgICBcInZ1X2hvdGVsXCI6IG51bGwsXG4gICAgICAgIFwib3JkaWRfbWRcIjogbnVsbCxcbiAgICAgICAgXCJwYXNzd3NfbWRcIjogbnVsbCxcbiAgICAgICAgXCJhZ2VuY2VcIjoge1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcIkp1c3QgRWFzeSBUcmF2ZWxcIixcbiAgICAgICAgICAgIFwiaWRcIjogMjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk1hcmhhYmEgUmVzb3J0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMzNcbiAgICAgICAgfVxuICAgIH0sXG5cdC4uLlxuICAgIF1cbiAgICBcdC8vYm9va2luZ19iMmJcblxuXHRcdC8qKlxuICogQGFwaSB7Z2V0fSAvcmVzZXJ2YXRpb25zL2FubnVsZXIgR2V0IEFMTCByZXNlcnZhdGlvbnMgYW5udWxlclxuICogQGFwaU5hbWUgR2V0cmVzZXJ2YXRpb25zQW51bGxlclxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcmVzZXJ2YXRpb25zXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBudW0gdW5pcXVlIG51bSByZXNlcnZhdGlvbnMgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcmVmZXJlbmNlICAuXG5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9jbWQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZF9kZWJ1dCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjbGllbnQgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYm51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWR1bHQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZW5mYW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iY2hhbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50IG1vbnRhbnQgZGUgbGEgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtb250YW50X2EgbW9udGFudCBkJ2FjaGF0IGxhIHLDqXNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge1N0cm5pZ30gZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRhdXhfZGV2aXNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNoYW1icmUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWJyIGFicmV2aWF0aW9uIGRlIGxhIGNoYW1icmVcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG9ic2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0eXBlIGRlIHLDqXNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgX2Vudm95ZXIgMC8xXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbW9udGFudF9hbm51bCBkJ2FubnVsYXRpb24gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbW9udGFudF9ub3Nob3cgbW9udGFudCBub3Nob3cgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGZyYWlzX2FubnVsYXRpb24gICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBvYnNlcnZhdGlvbl9hbm51bGF0aW9uICAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfYXZhbnQgICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9hbm51bGF0aW9uICAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfYW5udWxhdGlvbiAgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGV0YXQgIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzdGF0dXMgICAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZXRpbWV9IGRhdGVfY29uZmlybWF0aW9uICAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcHJpbnQgMC8xICAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0aXZlIDAvMSAgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJtcXMgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9lbnZveWVyX2hvdGVsICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBldGF0X2hvdGVsICAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB2dV9ob3RlbCAgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdnVfaG90ZWwgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG9yZGlkX21kICBpZCBjeWJlcmVzYVxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gcGFzc3dzX21kICBtb3QgZGUgcGFzc2UgY3liZXJlc2FcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHNpZ21hICAuXG4gKiBAYXBpU3VjY2VzcyB7YWdlbmNlfSBhZ2VuY2UgIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgIC5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcIm51bVwiOiA2NixcbiAgICAgICAgXCJyZWZlcmVuY2VcIjogXCI3NzkzMjM1NTg0XCIsXG4gICAgICAgIFwiZGF0ZV9jbWRcIjogXCIyMDE3LTAyLTIxVDE1OjQwOjM0LjAwMFpcIixcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMzLFxuICAgICAgICBcImlkcGVyaW9kX2RlYnV0XCI6IDY0NixcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAyMyxcbiAgICAgICAgXCJjbGllbnRcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE3LTAzLTEwXCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTctMDMtMTNcIixcbiAgICAgICAgXCJuYm51aXRcIjogMyxcbiAgICAgICAgXCJhZHVsdFwiOiAyLFxuICAgICAgICBcImVuZmFudFwiOiAwLFxuICAgICAgICBcIm5iY2hhbVwiOiAxLFxuICAgICAgICBcIm1vbnRhbnRcIjogMzAwLFxuICAgICAgICBcIm1vbnRhbnRfYVwiOiAyNzAsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJjaGFtYnJlXCI6IFwiY2hhbWJyZTE6IENoYW1icmUgRG91YmxlICBMUEQgIDJhZHVsdHMgMGVuZmFudHMgMGJlYmVzXFxuIDxiciA+XCIsXG4gICAgICAgIFwiYWJyXCI6IFwiRE9VQkxFXCIsXG4gICAgICAgIFwib2JzZXJ2YXRpb25cIjogXCJNb2RpZmljYXRpb24gUsOpc2VydmF0aW9uXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsX2Vudm95ZXJcIjogMSxcbiAgICAgICAgXCJ0ZWxcIjogXCJcIixcbiAgICAgICAgXCJtb250YW50X2FubnVsXCI6IDMwMCxcbiAgICAgICAgXCJtb250YW50X25vc2hvd1wiOiAzMDAsXG4gICAgICAgIFwiZnJhaXNfYW5udWxhdGlvblwiOiAzMDAsXG4gICAgICAgIFwib2JzZXJ2YXRpb25fYW5udWxhdGlvblwiOiBcIkZyYWlzIE5vc2hvdyDDoCBmYWN0dXLDqWVcIixcbiAgICAgICAgXCJkYXRlX2F2YW50XCI6IFwiMjAxNy0wMy0wN1wiLFxuICAgICAgICBcImRhdGVfYW5udWxhdGlvblwiOiBcIjIwMTctMDYtMDdUMTU6Mzc6MTMuMDAwWlwiLFxuICAgICAgICBcImV0YXRcIjogMCxcbiAgICAgICAgXCJzdGF0dXNcIjogXCJhbm51bGVyXCIsXG4gICAgICAgIFwiZGF0ZV9jb25maXJtYXRpb25cIjogbnVsbCxcbiAgICAgICAgXCJwcmludFwiOiAxLFxuICAgICAgICBcImFjdGl2ZVwiOiAxLFxuICAgICAgICBcInJtcXNcIjogXCJcIixcbiAgICAgICAgXCJzaWdtYVwiOiBcIlwiLFxuICAgICAgICBcImRhdGVfZW52b3llcl9ob3RlbFwiOiBcIjIwMTctMDItMjFUMTU6NDA6MzQuMDAwWlwiLFxuICAgICAgICBcImV0YXRfaG90ZWxcIjogXCJcIixcbiAgICAgICAgXCJ2dV9ob3RlbFwiOiBudWxsLFxuICAgICAgICBcIm9yZGlkX21kXCI6IG51bGwsXG4gICAgICAgIFwicGFzc3dzX21kXCI6IG51bGwsXG4gICAgICAgIFwiYWdlbmNlXCI6IHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJKdXN0IEVhc3kgVHJhdmVsXCIsXG4gICAgICAgICAgICBcImlkXCI6IDIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJNYXJoYWJhIFJlc29ydFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDMzXG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cblx0XVxuXG4gKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9yZXNlcnZhdGlvbi86aWRhZ2VuY2UgR0VUIHJlc2VydmF0aW9ucyBhZ2VuY2VcbiAqIEBhcGlOYW1lIEdldHJlc2VydmF0aW9uc0FnZW5jZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcmVzZXJ2YXRpb25zXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbnVtIHVuaXF1ZSBudW0gcmVzZXJ2YXRpb25zIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJlZmVyZW5jZSAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV0aW1lfSBkYXRlX2NtZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNsaWVudCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9mcm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3RvIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5ibnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZHVsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZhbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJjaGFtIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJuaWd9IGRldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0YXV4X2RldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjaGFtYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFiciBhYnJldmlhdGlvbiBkZSBsYSBjaGFtYnJlXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBvYnNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHlwZSBkZSByw6lzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIGRlIGNsaWVudFxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgX2Vudm95ZXIgMC8xXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuXG5cblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZXRhdCAgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHN0YXR1cyAgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJtcXMgIC5cblxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAgLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJudW1cIjogMTcyOSxcbiAgICAgICAgXCJyZWZlcmVuY2VcIjogXCIyMzYxNDExNzk4XCIsXG4gICAgICAgIFwiZGF0ZV9jbWRcIjogXCIyMDE4LTA3LTIwVDIwOjI0OjA1LjAwMFpcIixcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEzLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDQsXG4gICAgICAgIFwiY2xpZW50XCI6IFwiIHRlc3R5eSB0dFwiLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMDgtMDdcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0wOC0wOFwiLFxuICAgICAgICBcIm5ibnVpdFwiOiAxLFxuICAgICAgICBcImFkdWx0XCI6IDIsXG4gICAgICAgIFwiZW5mYW50XCI6IDAsXG4gICAgICAgIFwibmJjaGFtXCI6IDEsXG4gICAgICAgIFwibW9udGFudFwiOiA1MjQsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJjaGFtYnJlXCI6IFwiY2hhbWJyZTE6IENoYW1icmUgRG91YmxlICBBbGwtaW4gIDJhZHVsdGVzIDBlbmZhbnRzIDBiZWJlc1xcbiBcIixcbiAgICAgICAgXCJhYnJcIjogXCJET1VCTEVcIixcbiAgICAgICAgXCJvYnNlcnZhdGlvblwiOiBcIjxiciAvPlRyYW5zcG9ydCBcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiU2ltcGxlXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiZGF0ZV9hdmFudFwiOiBcIjIwMTgtMDgtMDZcIixcbiAgICAgICAgXCJkYXRlX2FubnVsYXRpb25cIjogXCIyMDE4LTA3LTIxVDEzOjEzOjMzLjAwMFpcIixcbiAgICAgICAgXCJldGF0XCI6IDAsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiYW5udWxlclwiLFxuICAgICAgICBcInJtcXNcIjogXCJ4eHh4eHh4eHhcIixcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9jZWFuYVwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDEzXG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cblx0XVxuICpcbiAqL1xuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9yZXNlcnZhdGlvbi9ham91dCBQT1NUIEFqb3V0IFJlc2VydmF0aW9uXG4gKiBAYXBpTmFtZSBBam91dFJlc2VydmF0aW9uXG4gKiBAYXBpUGVybWlzc2lvbiBVc2VyXG4gKiBAYXBpR3JvdXAgIHJlc2VydmF0aW9uc1xuICpcbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICAgXG57XG4gICAgXCJDb2RlTGFtXCI6XCJEb3QxNTdDb20xNTUyNzI2MTY3ODg1XCIsXG4gICAgXCJhcnJpZHNcIjpbXCIzXCJdLFxuICAgIFwibm9tX3N1cHBcIjpcIlwiLFxuICAgIFwibm9tc1wiOltudWxsLFtudWxsLFwiIHNzc1wiLFwiIHd3d3dcIl1dLFxuICAgIFwicHJlbm9tc1wiOltudWxsLFtudWxsLFwiY2NjXCIsXCJzc1wiXV0sXG4gICAgXCJ0aXRyZXNcIjpbbnVsbCxbbnVsbCxcIk1yXCIsXCJNbWVcIl1dLFxuICAgIFwibm9tc19lXCI6W10sXG4gICAgXCJwcmVub21zX2VcIjpbXSxcbiAgICBcInZpbGxlXCI6XCJIYW1tYW1ldFwiLFxuICAgIFwiaWR2aWxsZVwiOlwiMzVcIixcbiAgICBcImlkaG90ZWxcIjoxNTcsXG4gICAgXCJyZWZcIjpcIjU1MjcyNjE2NzhcIixcbiAgICBcInJvb21zXCI6W251bGwsXCJDaGFtYnJlIERvdWJsZVwiXSxcbiAgICBcIm9ic2VydmF0aW9uXCI6XCJUcmFuc3BvcnQ8YnIvPlwiLFxuICAgIFwiZGV2aXNlXCI6XCJUTkRcIixcbiAgICBcInR5cGVfcGVyaW9kXCI6XCJQcm9tb1wiLFxuICAgIFwiaWRfdXNlclwiOjEsXG4gICAgXCJpZGFnZW5jZVwiOjQsXG4gICAgXCJzdXBwbGVtZW50X25vbVwiOltdLFxuICAgIFwiZW5mYW50c1wiOltudWxsLFwiMFwiXSxcbiAgICBcImVuZmFudHNfb1wiOltudWxsLFwiMFwiXSxcbiAgICBcImFnZV9lbmZhbnRzX29cIjpbbnVsbCxudWxsXSxcbiAgICBcImJlYmVzXCI6W251bGxdLFwiYWR1bHRzXCI6W251bGwsXCIyXCJdLFxuICAgIFwic3VyZGVtYW5kZVwiOjAsXG4gICAgXCJ0eXBlc19hYnJcIjpbbnVsbCxcIkRPVUJMRVwiXSxcbiAgICBcImRhdGVkZXBhcnRcIjpcIjE3LzA1LzIwMTlcIixcbiAgICBcImRhdGVhcnJpdmVcIjpcIjE2LzA1LzIwMTlcIixcbiAgICBcIm1vbnRhbnRcIjo4OS41LFxuICAgIFwibW9udGFudF9hXCI6ODUuMjQsXG4gICAgXCJhcnJhbmdfcm9vbXNcIjpbbnVsbCxcIkRQXCJdLFxuICAgIFwicGVyaW9kc1wiOltudWxsLFwiMVwiXSxcbiAgICBcInJvb21zaWRcIjpbbnVsbCwyXSxcbiAgICBcIm5iY2hhbVwiOjEsXG4gICAgXCJuYm51aXRcIjoxLFxuICAgIFwibnVpdHNfcmVzdlwiOltudWxsLG51bGxdLFxuICAgIFwicHJpeGNoc1wiOltudWxsLDg5LjVdLFxuICAgIFwicHJpeGNoc19hXCI6W251bGwsODUuMjRdLFxuICAgIFwic3VwcGxlbWVudFwiOltdLFxuICAgIFwic3VwcGxlbWVudF9hXCI6W10sXG4gICAgXCJyZWZlcmVuY2VcIjpcIjU1MjcyNjE2NzhcIixcbiAgICBcInVzZXJuYW1lXCI6XCJkb3Rjb20xXCJcbiAgICB9XG4gICAgICAgIFxuICAgICpcblxuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzdWNjZXNzICAuXG5cblxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuICAgIHtcbiAgICAgICAgXCJzdWNjZXNzXCI6IFwidHJ1ZVwiLFxuICAgICAgICBcImlkXCI6MVxuICAgICAgXG4gICAgfSxcblxuXHRcblxuICovXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvcmVzZXJ2YXRpb24vYW5udWxhdGlvbi86cmVmIFBVVCBBbm51bGF0aW9uIFJlc2VydmF0aW9uXG4gKiBAYXBpTmFtZSBBbm51bGF0aW9uUmVzZXJ2YXRpb25cbiAqIEBhcGlQZXJtaXNzaW9uIFVzZXJcbiAqIEBhcGlHcm91cCAgcmVzZXJ2YXRpb25zXG4gKlxuICoqQGFwaVBhcmFtIHtOdW1iZXJ9IHJlZiAgICAgICAgcmVmZXJlbmNlIElELiAgICAgIFxuICAgICpcblxuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzdWNjZXNzICAuYW5udWxhdGlvblxuXG5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiAgICB7XG4gICAgICAgIFwic3VjY2Vzc1wiOiBcInRydWVcIlxuICAgICAgXG4gICAgfSxcblxuXHRcblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9yZXNlcnZhdGlvbi9jb25maXJtZS86cmVmIFBVVCBDb25maXJtZSBSZXNlcnZhdGlvblxuICogQGFwaU5hbWUgQ29uZmlybWVSZXNlcnZhdGlvblxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcmVzZXJ2YXRpb25zXG4gKlxuICoqQGFwaVBhcmFtIHtOdW1iZXJ9IHJlZiAgICAgICAgcmVmZXJlbmNlIElELiAgICAgIFxuICAgICpcblxuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBzdWNjZXNzICAuYW5udWxhdGlvblxuXG5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiAgICB7XG4gICAgICAgIFwic3VjY2Vzc1wiOiBcInRydWVcIlxuICAgICAgXG4gICAgfSxcblxuXHRcblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9yZXNlcnZhdGlvbi86aWRhZ2VuY2UgR0VUIHJlc2VydmF0aW9ucyBhZ2VuY2VcbiAqIEBhcGlOYW1lIEdldHJlc2VydmF0aW9uc0FnZW5jZVxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcmVzZXJ2YXRpb25zXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbnVtIHVuaXF1ZSBudW0gcmVzZXJ2YXRpb25zIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJlZmVyZW5jZSAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV0aW1lfSBkYXRlX2NtZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNsaWVudCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9mcm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3RvIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5ibnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZHVsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZhbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJjaGFtIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJuaWd9IGRldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0YXV4X2RldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjaGFtYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGFiciBhYnJldmlhdGlvbiBkZSBsYSBjaGFtYnJlXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBvYnNlcnZhdGlvblxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gdHlwZSBkZSByw6lzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsIGRlIGNsaWVudFxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZW1haWwgX2Vudm95ZXIgMC8xXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgLlxuXG5cblxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZXRhdCAgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHN0YXR1cyAgIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJtcXMgIC5cblxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAgLlxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJudW1cIjogMTcyOSxcbiAgICAgICAgXCJyZWZlcmVuY2VcIjogXCIyMzYxNDExNzk4XCIsXG4gICAgICAgIFwiZGF0ZV9jbWRcIjogXCIyMDE4LTA3LTIwVDIwOjI0OjA1LjAwMFpcIixcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEzLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDQsXG4gICAgICAgIFwiY2xpZW50XCI6IFwiIHRlc3R5eSB0dFwiLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMDgtMDdcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0wOC0wOFwiLFxuICAgICAgICBcIm5ibnVpdFwiOiAxLFxuICAgICAgICBcImFkdWx0XCI6IDIsXG4gICAgICAgIFwiZW5mYW50XCI6IDAsXG4gICAgICAgIFwibmJjaGFtXCI6IDEsXG4gICAgICAgIFwibW9udGFudFwiOiA1MjQsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJjaGFtYnJlXCI6IFwiY2hhbWJyZTE6IENoYW1icmUgRG91YmxlICBBbGwtaW4gIDJhZHVsdGVzIDBlbmZhbnRzIDBiZWJlc1xcbiBcIixcbiAgICAgICAgXCJhYnJcIjogXCJET1VCTEVcIixcbiAgICAgICAgXCJvYnNlcnZhdGlvblwiOiBcIjxiciAvPlRyYW5zcG9ydCBcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiU2ltcGxlXCIsXG4gICAgICAgIFwidGVsXCI6IFwiXCIsXG4gICAgICAgIFwiZGF0ZV9hdmFudFwiOiBcIjIwMTgtMDgtMDZcIixcbiAgICAgICAgXCJkYXRlX2FubnVsYXRpb25cIjogXCIyMDE4LTA3LTIxVDEzOjEzOjMzLjAwMFpcIixcbiAgICAgICAgXCJldGF0XCI6IDAsXG4gICAgICAgIFwic3RhdHVzXCI6IFwiYW5udWxlclwiLFxuICAgICAgICBcInJtcXNcIjogXCJ4eHh4eHh4eHhcIixcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9jZWFuYVwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDEzXG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cblx0XVxuICpcbiAqL1xuXG4gIC8vY3J1ZGUgaGlzdF9jYWlzc2VcblxuICAvL2NydWRlIG1hcmdlX2hvdGVsXG5cbiAgLy9jcnVkZSBhbWVuYWdtZW50XG5cbiAgLy9jcnVkZSBhcnJhbmdlbWVudHNcblxuICAvL2NydWRlIGJhbm5lclxuXG4gIC8vY3J1ZGUgbmV3c1xuXG4gIC8vY3J1ZGUgcm9vbVxuXG4gIC8vY3J1ZGUgY291bnRyeVxuXG4gIC8vY3J1ZGUgcmVzZXJ2YXRpb25cblxuICAvL3NjLTA2LTIwMjBcblxuICAvL0dldCBsaXN0IGFsZ2VyaWVcblxuICAvL1N0YXRpc3RpcXVlXG4gIC8vXG4gIC8vc3RhdGlzdGlxdWUgSG90ZWxzXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdGF0aXN0aXF1ZS9ob3RlbHMgR0VUIFNUQVQgSE9URUxcbiAqIEBhcGlOYW1lIEdldFN0YXRIb3RlbFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgc3RhdGlzdGlxdWVzXG5cblxuXG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtpZGhvdGVsfSBpZEhvdGVsIHVuaXF1ZSBpZCBIb3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY2hhdCBtb250YW50IGFjaGF0ICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpbXBheWVlIG1vbnRhbnQgaW1wYXnDqWUuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwYXllZSBtb250YW50IHBhecOpZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBob3RlbCBub20gSG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2hpZmZyZSBjaGlmZnJlIGQnYWZmYWlyZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBnYWluIGdhaW4gZW4gJSAuXG5cblxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJhY2hhdFwiOiA1MDE3OTAuNTUzLFxuICAgICAgICBcImltcGF5ZWVcIjogNTU0NTE2LjY4NSxcbiAgICAgICAgXCJwYXllZVwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IFwiT25lIFJlc29ydCBBcXVhIFBhcmtcIixcbiAgICAgICAgXCJjaGlmZnJlXCI6IDU1NDUxNi42ODUsXG4gICAgICAgIFwiZ2FpblwiOiAxMC41MDhcbiAgICB9LFxuXHQuLi5cblx0XVxuXG4gKi9cbiAgLy9jcnVkZSBTdGF0aXN0aXF1ZVxuXG4gIC8vU3RhdGlzdGlxdWVcbiAgLy8vXG4gIC8vc3RhdGlzdGlxdWUgSG90ZWxzXG5cbiAgLyoqXG4qIEBhcGkge2dldH0gL3N0YXRpc3RpcXVlL2hvdGVscy86aWQgR0VUIFNUQVQgSE9URUwgcGFyIEFnZW5jZVxuKiBAYXBpTmFtZSBHZXRTdGF0SG90ZWxzQWdlbmNlXG4qIEBhcGlHcm91cCAgc3RhdGlzdGlxdWVzXG5cblxuXG5cbipcblxuKiBAYXBpU3VjY2VzcyB7aWRob3RlbH0gaWRIb3RlbCB1bmlxdWUgaWQgSG90ZWwgLlxuKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY2hhdCBtb250YW50IGFjaGF0ICAuXG4qIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGltcGF5ZWUgbW9udGFudCBpbXBhecOpZS5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcGF5ZWUgbW9udGFudCBwYXnDqWUgLlxuKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBob3RlbCBub20gSG90ZWwgLlxuKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBjaGlmZnJlIGNoaWZmcmUgZCdhZmZhaXJlIC5cbiogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZ2FpbiBnYWluIGVuICUgLlxuXG5cblxuXG4qIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG57XG4gICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgXCJhY2hhdFwiOiA1MDE3OTAuNTUzLFxuICAgIFwiaW1wYXllZVwiOiA1NTQ1MTYuNjg1LFxuICAgIFwicGF5ZWVcIjogMCxcbiAgICBcImhvdGVsXCI6IFwiT25lIFJlc29ydCBBcXVhIFBhcmtcIixcbiAgICBcImNoaWZmcmVcIjogNTU0NTE2LjY4NSxcbiAgICBcImdhaW5cIjogMTAuNTA4XG59LFxuLi4uXG5dXG5cbiAqL1xuXG4gIC8vY3J1ZGUgU3RhdGlzdGlxdWVcblxuICAvL1N0YXRpc3RpcXVlXG4gIC8vXG4gIC8vc3RhdGlzdGlxdWUgQWdlbmNlc1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3RhdGlzdGlxdWUvYWdlbmNlcyBHRVQgU1RBVCBBR0VOQ0VcbiAqIEBhcGlOYW1lIEdldFN0YXRBZ2VuY2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIHN0YXRpc3RpcXVlc1xuXG5cblxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7aWRhZ2VuY2V9IGlkYWdlbmNlIHVuaXF1ZSBpZCBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWNoYXQgbW9udGFudCBhY2hhdCAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1wYXllZSBtb250YW50IGltcGF5w6llLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcGF5ZWUgbW9udGFudCBwYXnDqWUgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWdlbmNlIHVzZXJuYW1lIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBjaGlmZnJlIGNoaWZmcmUgZCdhZmZhaXJlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGdhaW4gZ2FpbiBlbiAlIC5cblxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMSxcbiAgICAgICAgXCJhY2hhdFwiOiA1MDE3OTAuNTUzLFxuICAgICAgICBcImltcGF5ZWVcIjogNTU0NTE2LjY4NSxcbiAgICAgICAgXCJwYXllZVwiOiAwLFxuICAgICAgICBcImFnZW5jZVwiOiBcIlRhc25pbWUgVm95YWdlcyAmIFRvdXJpc21lXCIsXG4gICAgICAgIFwiY2hpZmZyZVwiOiA1NTQ1MTYuNjg1LFxuICAgICAgICBcImdhaW5cIjogMTAuNTA4XG4gICAgfSxcblx0Li4uXG5cdF1cblxuICovXG5cbiAgLy9mYWN0dXJhdGlvblxuICAvL1xuICAvL2Jvb2tpbmdfYjJiXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvZmFjdHVyYXRpb25zLyBQb3N0IEFMTCBmYWN0dXJhdGlvbnNcbiAqIEBhcGlOYW1lIFBvc3RmYWN0dXJhdGlvbnNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIGZhY3R1cmF0aW9uc1xuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAge1xuICAgICAgIFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0xMFwiLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDEwMCBvdSAwIChhbGxhZ2VuY2UpXG5cdFx0XCJpZGhvdGVsXCI6IDI2NiBvdSAwIChhbGxob3RlbClcbiAgICB9XG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG51bSB1bmlxdWUgbnVtIGZhY3R1cmF0aW9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSByZWZlcmVuY2UgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9jbWQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjbGllbnQgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYm51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJjaGFtIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1vbnRhbnQgbW9udGFudCBkZSBsYSByw6lzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1vbnRhbnRfYSBtb250YW50IGQnYWNoYXQgbGEgcsOpc2VydmF0aW9uXG4gKiBAYXBpU3VjY2VzcyB7U3RybmlnfSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge2FnZW5jZX0gYWdlbmNlICAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsICAuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgIHtcbiAgICAgICAgXCJudW1cIjogMzA2NyxcbiAgICAgICAgXCJyZWZlcmVuY2VcIjogXCI5MTg5MDgzODYwXCIsXG4gICAgICAgIFwiaWRob3RlbFwiOiAyMjcsXG4gICAgICAgIFwiZGF0ZV9jbWRcIjogXCIyMDE4LTA5LTE1VDE2OjUzOjA0LjAwMFpcIixcbiAgICAgICAgXCJjbGllbnRcIjogXCIgREpFTExPVVQgREpBTUlMQVwiLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0wOFwiLFxuICAgICAgICBcIm5ibnVpdFwiOiA3LFxuICAgICAgICBcIm5iY2hhbVwiOiAxLFxuICAgICAgICBcIm1vbnRhbnRcIjogMTAzNixcbiAgICAgICAgXCJtb250YW50X2FcIjogOTUyLFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwiYWdlbmNlXCI6IHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJmaWRlbGlhIHRvdXJzXCIsXG4gICAgICAgICAgICBcImlkXCI6IDMwXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJNRU5JTlhcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAyMjdcbiAgICAgICAgfVxuICAgIH0sXG5cdC4uLlxuXHRdXG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2ZhY3R1cmF0aW9uLzppZGFnZW5jZSBQb3N0IGZhY3R1cmF0aW9ucyBhZ2VuY2VcbiAqIEBhcGlOYW1lIFBvc3RmYWN0dXJhdGlvbnNBZ2VuY2VcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIGZhY3R1cmF0aW9uc1xuICpcbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAge1xuICAgICAgIFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0xMFwiLFxuICAgICAgICBcImlkaG90ZWxcIjogMjY2IG91IDAgKGFsbGhvdGVsKVxuICAgIH1cblxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG51bSB1bmlxdWUgbnVtIGZhY3R1cmF0aW9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSByZWZlcmVuY2UgIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRldGltZX0gZGF0ZV9jbWQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBjbGllbnQgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYm51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJjaGFtIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1vbnRhbnQgbW9udGFudCBkZSBsYSByw6lzZXJ2YXRpb25cbiAqIEBhcGlTdWNjZXNzIHtTdHJuaWd9IGRldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0YXV4X2RldmlzZSAuXG4gKiBAYXBpU3VjY2VzcyB7YWdlbmNlfSBhZ2VuY2UgIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgIC5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICAge1xuICAgICAgICBcIm51bVwiOiAzMTcyLFxuICAgICAgICBcInJlZmVyZW5jZVwiOiBcIjg1NzgyNDYyMzJcIixcbiAgICAgICAgXCJpZGhvdGVsXCI6IDI2NixcbiAgICAgICAgXCJkYXRlX2NtZFwiOiBcIjIwMTgtMDktMjRUMTM6MjY6MjguMDAwWlwiLFxuICAgICAgICBcImNsaWVudFwiOiBcIiBXQUhJRCBTQUlESVwiLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMTAtMDJcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0wNFwiLFxuICAgICAgICBcIm5ibnVpdFwiOiAyLFxuICAgICAgICBcIm5iY2hhbVwiOiAxLFxuICAgICAgICBcIm1vbnRhbnRcIjogMTQ0LFxuICAgICAgICBcInRhdXhfZGV2aXNlXCI6IDEsXG4gICAgICAgIFwiZGV2aXNlXCI6IFwiVE5EXCIsXG4gICAgICAgIFwiYWdlbmNlXCI6IHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJUYXNuaW1lIFZveWFnZXMgJiBUb3VyaXNtZVwiLFxuICAgICAgICAgICAgXCJpZFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJIZWx5YSBCZWFjaCAmIFNwYVwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDI2NlxuICAgICAgICB9XG4gICAgfSxcblx0Li4uXG5cdF1cbiAqXG4gKi9cbiAgLy9mYWN0dXJhdGlvblxuICAvL1xuICAvL2Jvb2tpbmdfYjJiXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvZXRhdHMvIFBvc3QgQUxMIGV0YXRzXG4gKiBAYXBpTmFtZSBQb3N0ZXRhdHNcbiAqIEBhcGlQZXJtaXNzaW9uIEFkbWluXG4gKiBAYXBpR3JvdXAgIGV0YXRzXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuICB7XG4gICAgICAgXG4gICAgICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0xMC0wMVwiLFxuICAgICAgICBcImRhdGVfdG9cIjogXCIyMDE4LTEwLTEwXCIsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMTAwIG91IDAgKGFsbGFnZW5jZSksXG5cdFx0XCJpZGhvdGVsXCI6IDI2NiBvdSAwIChhbGxob3RlbClcbiAgICB9XG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG51bSB1bmlxdWUgbnVtIGV0YXRzIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHJlZmVyZW5jZSAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV0aW1lfSBkYXRlX2NtZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNsaWVudCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9mcm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3RvIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5ibnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYmNoYW0gLlxuXG4gKiBAYXBpU3VjY2VzcyB7U3RybmlnfSBkZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdGF1eF9kZXZpc2UgLlxuICogQGFwaVN1Y2Nlc3Mge2FnZW5jZX0gYWdlbmNlICAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsICAuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgICAge1xuICAgICAgICBcIm51bVwiOiAzMDY3LFxuICAgICAgICBcInJlZmVyZW5jZVwiOiBcIjkxODkwODM4NjBcIixcbiAgICAgICAgXCJpZGhvdGVsXCI6IDIyNyxcbiAgICAgICAgXCJkYXRlX2NtZFwiOiBcIjIwMTgtMDktMTVUMTY6NTM6MDQuMDAwWlwiLFxuICAgICAgICBcImNsaWVudFwiOiBcIiBESkVMTE9VVCBESkFNSUxBXCIsXG4gICAgICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0xMC0wMVwiLFxuICAgICAgICBcImRhdGVfdG9cIjogXCIyMDE4LTEwLTA4XCIsXG4gICAgICAgIFwibmJudWl0XCI6IDcsXG4gICAgICAgIFwibmJjaGFtXCI6IDEsXG4gICAgICAgIFwidGF1eF9kZXZpc2VcIjogMSxcbiAgICAgICAgXCJkZXZpc2VcIjogXCJUTkRcIixcbiAgICAgICAgXCJhZ2VuY2VcIjoge1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcImZpZGVsaWEgdG91cnNcIixcbiAgICAgICAgICAgIFwiaWRcIjogMzBcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk1FTklOWFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDIyN1xuICAgICAgICB9XG4gICAgfSxcblx0Li4uXG5cdF1cblxuICovXG5cbiAgLy9ldGF0XG5cbiAgLy9jcnVkZSBwZXJpb2RcblxuICAvL3BlcmlvZFxuICAvKipcbiAgICogQGFwaURlZmluZSBwZXJpb2ROb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgcGVyaW9kTm90Rm91bmQgIDxjb2RlPnBlcmlvZDwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJwZXJpb2QgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcGVyaW9kcy86aWRjb250cmF0ICBBTEwgcGVyaW9kc1xuICogQGFwaU5hbWUgR2V0cGVyaW9kc1xuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcGVyaW9kXG4gKlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIHVuaXF1ZSBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGNvbnRyYXQgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR5cGUgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iX2pvdXIgbmIgam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fbnVpdCAgbWluIG51aXQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfbnVpdCAgbWF4X251aXQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBib25wbGFuICBib25wbGFuLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2UgIG1hcmdlIGIyYi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvc2l0aW9uICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jICBtYXJnZSBiMmMuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IHBlcmlvZF9mcm9tIGRhdGUgZGVidXQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBwZXJpb2RfdG8gZGF0ZSBmaW4gcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBlYXJseV9ib29raW5nIGRhdGUgZWFybHlib29raW5nIHBlcmlvZCAuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgIFxuICAge1xuICAgICAgICBcImlkcGVyaW9kXCI6IDEzLFxuICAgICAgICBcImlkaG90ZWxcIjogMTQsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDE0LFxuICAgICAgICBcIm5vbVwiOiBcIlNhaXNvbiAxXCIsXG4gICAgICAgIFwicGVyaW9kX2Zyb21cIjogXCIyMDE2LTExLTAxXCIsXG4gICAgICAgIFwicGVyaW9kX3RvXCI6IFwiMjAxNi0xMS0yNVwiLFxuICAgICAgICBcImVhcmx5X2Jvb2tpbmdcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwibmJfam91clwiOiAwLFxuICAgICAgICBcInR5cGVcIjogXCJTaW1wbGVcIixcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwiYm9ucGxhblwiOiAwLFxuICAgICAgICBcInJldHJvc2Vzc2lvblwiOiBudWxsLFxuICAgICAgICBcIm1hcmdlXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwicG9zaXRpb25cIjogMSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcInN0ZWlnZW5iZXJnZXIgbWFyaGFiYSB0aGFsYXNzbyBoYW1tYW1ldCBcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAxNFxuICAgICAgICB9XG5cdFx0XG4gIH0sXG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIHBlcmlvZE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcGVyaW9kLzppZHBlcmlvZCBHRVQgcGVyaW9kXG4gKiBAYXBpTmFtZSBHZXRwZXJpb2RcbiAqIEBhcGlHcm91cCAgcGVyaW9kXG4gKlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIHVuaXF1ZSBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGNvbnRyYXQgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR5cGUgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5iX2pvdXIgbmIgam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fbnVpdCAgbWluIG51aXQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfbnVpdCAgbWF4X251aXQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBib25wbGFuICBib25wbGFuLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2UgIG1hcmdlIGIyYi5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvc2l0aW9uICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jICBtYXJnZSBiMmMuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IHBlcmlvZF9mcm9tIGRhdGUgZGVidXQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBwZXJpb2RfdG8gZGF0ZSBmaW4gcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBlYXJseV9ib29raW5nIGRhdGUgZWFybHlib29raW5nIHBlcmlvZCAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG5cbiAgIHtcbiAgIFwiaWRwZXJpb2RcIjogNjA0OCxcbiAgICBcIm5vbVwiOiBcInAxXCIsXG4gICAgXCJpZGhvdGVsXCI6IFwiM1wiLFxuICAgIFwiaWRjb250cmF0XCI6IFwiM1wiLFxuICAgIFwicGVyaW9kX2Zyb21cIjogXCIyMDE4LTEwLTAxXCIsXG4gICAgXCJwZXJpb2RfdG9cIjogXCIyMDE4LTEwLTEwXCIsXG4gICAgXCJuYl9qb3VyXCI6IFwiMFwiLFxuICAgIFwidHlwZVwiOiBcIlByb21vXCIsXG4gICAgXCJtaW5fbnVpdFwiOiBcIjRcIixcbiAgICBcIm1heF9udWl0XCI6IFwiMFwiLFxuICAgIFwiYm9ucGxhblwiOiBcIjFcIixcbiAgICBcIm1hcmdlXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIwXCIsXG4gICAgXCJtYXJnZV9jXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2NcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9jXCI6IFwiMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCIxXCIsXG5cdH1cblxuICpcbiAqIEBhcGlVc2UgIHBlcmlvZE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3BlcmlvZC8gUE9TVCBwZXJpb2RcbiAqIEBhcGlEZXNjcmlwdGlvbiBBam91dCB1bmUgcMOpcmlvZGUgLCBhdXRvbWF0aXF1ZW1lbnQgZGV1eCB0eXBlcyB0YXJpZnMgYXZlYyByb29taWQ9Miwgcm9vbWlkPTMgc29udCBham91dGVyXG4gKiBAYXBpTmFtZSBQT1NUcGVyaW9kXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBwZXJpb2RcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuXG4gICAgICAge1xuICAgIFwibm9tXCI6IFwicDFcIixcbiAgICBcImlkaG90ZWxcIjogXCIzXCIsXG4gICAgXCJpZGNvbnRyYXRcIjogXCIzXCIsXG4gICAgXCJwZXJpb2RfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICBcInBlcmlvZF90b1wiOiBcIjIwMTgtMTAtMTBcIixcbiAgICBcIm5iX2pvdXJcIjogXCIwXCIsXG4gICAgXCJ0eXBlXCI6IFwiUHJvbW9cIixcbiAgICBcIm1pbl9udWl0XCI6IFwiNFwiLFxuICAgIFwibWF4X251aXRcIjogXCIwXCIsXG4gICAgXCJib25wbGFuXCI6IFwiMVwiLFxuICAgIFwibWFyZ2VcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudFwiOiBcIjBcIixcbiAgICBcIm1hcmdlX2NcIjogXCIwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIjFcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIlxuICAgICBcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG4gICAgICB7XG4gICAgXCJlYXJseV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwiaWRwZXJpb2RcIjogNjA0OCxcbiAgICBcIm5vbVwiOiBcInAxXCIsXG4gICAgXCJpZGhvdGVsXCI6IFwiM1wiLFxuICAgIFwiaWRjb250cmF0XCI6IFwiM1wiLFxuICAgIFwicGVyaW9kX2Zyb21cIjogXCIyMDE4LTEwLTAxXCIsXG4gICAgXCJwZXJpb2RfdG9cIjogXCIyMDE4LTEwLTEwXCIsXG4gICAgXCJuYl9qb3VyXCI6IFwiMFwiLFxuICAgIFwidHlwZVwiOiBcIlByb21vXCIsXG4gICAgXCJtaW5fbnVpdFwiOiBcIjRcIixcbiAgICBcIm1heF9udWl0XCI6IFwiMFwiLFxuICAgIFwiYm9ucGxhblwiOiBcIjFcIixcbiAgICBcIm1hcmdlXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIwXCIsXG4gICAgXCJtYXJnZV9jXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2NcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9jXCI6IFwiMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCIxXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEzOjU1OjM3LjQxOFpcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTM6NTU6MzcuNDE4WlwiXG59XG5cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3BlcmlvZC9kdXAgRFVQTElRVUUgcGVyaW9kXG4gKiBAYXBpRGVzY3JpcHRpb24gZHVwbGlxdcOpIHVuZSBww6lyaW9kZSBhcGFydGlyIGQndW5lIGF1dHJlIHDDqXJpb2RlXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBwZXJpb2RcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuXG4gICAgICAge1xuICAgIFwiaWRwZXJpb2RvbGRcIjogXCIzMzE0XCIsXG4gICAgXCJub21cIjogXCJwMVwiLFxuICAgIFwiaWRob3RlbFwiOiBcIjNcIixcbiAgICBcImlkY29udHJhdFwiOiBcIjNcIixcbiAgICBcInBlcmlvZF9mcm9tXCI6IFwiMjAxOC0xMC0wMVwiLFxuICAgIFwicGVyaW9kX3RvXCI6IFwiMjAxOC0xMC0xMFwiLFxuICAgIFwibmJfam91clwiOiBcIjBcIixcbiAgICBcInR5cGVcIjogXCJQcm9tb1wiLFxuICAgIFwibWluX251aXRcIjogXCI0XCIsXG4gICAgXCJtYXhfbnVpdFwiOiBcIjBcIixcbiAgICBcImJvbnBsYW5cIjogXCIxXCIsXG4gICAgXCJtYXJnZVwiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMFwiLFxuICAgIFwibWFyZ2VfY1wiOiBcIjBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiMVwiLFxuICAgIFwib3BlcmF0aW9uX2NcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9jXCI6IFwiMFwiXG4gICAgIFxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbiAgICAgIHtcbiAgICBcImVhcmx5X2Jvb2tpbmdcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgXCJpZHBlcmlvZFwiOiA2MDQ4LFxuICAgIFwibm9tXCI6IFwicDFcIixcbiAgICBcImlkaG90ZWxcIjogXCIzXCIsXG4gICAgXCJpZGNvbnRyYXRcIjogXCIzXCIsXG4gICAgXCJwZXJpb2RfZnJvbVwiOiBcIjIwMTgtMTAtMDFcIixcbiAgICBcInBlcmlvZF90b1wiOiBcIjIwMTgtMTAtMTBcIixcbiAgICBcIm5iX2pvdXJcIjogXCIwXCIsXG4gICAgXCJ0eXBlXCI6IFwiUHJvbW9cIixcbiAgICBcIm1pbl9udWl0XCI6IFwiNFwiLFxuICAgIFwibWF4X251aXRcIjogXCIwXCIsXG4gICAgXCJib25wbGFuXCI6IFwiMVwiLFxuICAgIFwibWFyZ2VcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudFwiOiBcIjBcIixcbiAgICBcIm1hcmdlX2NcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25fY1wiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X2NcIjogXCIwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIjFcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTM6NTU6MzcuNDE4WlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMzo1NTozNy40MThaXCJcbn1cblxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9wZXJpb2QvOmlkcGVyaW9kIFBVVCBwZXJpb2RcbiAqIEBhcGlOYW1lIFBVVHBlcmlvZFxuICogQGFwaVBlcm1pc3Npb24gQWRtaW5cbiAqIEBhcGlHcm91cCAgcGVyaW9kXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcblxuICAgIHtcblxuICAgICAgICBcImVhcmx5X2Jvb2tpbmdcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgXCJub21cIjogXCJwMVwiLFxuICAgIFwiaWRob3RlbFwiOiBcIjNcIixcbiAgICBcImlkY29udHJhdFwiOiBcIjNcIixcbiAgICBcInBlcmlvZF9mcm9tXCI6IFwiMjAxOC0xMC0wMVwiLFxuICAgIFwicGVyaW9kX3RvXCI6IFwiMjAxOC0xMC0xMFwiLFxuICAgIFwibmJfam91clwiOiBcIjBcIixcbiAgICBcInR5cGVcIjogXCJQcm9tb1wiLFxuICAgIFwibWluX251aXRcIjogXCI0XCIsXG4gICAgXCJtYXhfbnVpdFwiOiBcIjBcIixcbiAgICBcImJvbnBsYW5cIjogXCIxXCIsXG4gICAgXCJtYXJnZVwiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMFwiLFxuICAgIFwibWFyZ2VfY1wiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiMVwiXG5cdH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiAgICAgICAge1xuICAgICAgICAgXCJlYXJseV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwiaWRwZXJpb2RcIjogNjA0OCxcbiAgICBcIm5vbVwiOiBcInAxXCIsXG4gICAgXCJpZGhvdGVsXCI6IFwiM1wiLFxuICAgIFwiaWRjb250cmF0XCI6IFwiM1wiLFxuICAgIFwicGVyaW9kX2Zyb21cIjogXCIyMDE4LTEwLTAxXCIsXG4gICAgXCJwZXJpb2RfdG9cIjogXCIyMDE4LTEwLTEwXCIsXG4gICAgXCJuYl9qb3VyXCI6IFwiMFwiLFxuICAgIFwidHlwZVwiOiBcIlByb21vXCIsXG4gICAgXCJtaW5fbnVpdFwiOiBcIjRcIixcbiAgICBcIm1heF9udWl0XCI6IFwiMFwiLFxuICAgIFwiYm9ucGxhblwiOiBcIjFcIixcbiAgICBcIm1hcmdlXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIwXCIsXG4gICAgXCJtYXJnZV9jXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2NcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9jXCI6IFwiMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCIxXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEzOjU1OjM3LjQxOFpcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTM6NTU6MzcuNDE4WlwiXG4gXG4gICAgfSxcbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL3BlcmlvZC86aWRwZXJpb2QgRGVsZXRlIHBlcmlvZFxuICAgKiBAYXBpTmFtZSBERUxFVEVwZXJpb2RcbiAgICogQGFwaUdyb3VwICBwZXJpb2RcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkIHBlcmlvZFxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBjb250cmF0XG5cbiAgLy9jb250cmF0XG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIGNvbnRyYXROb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgY29udHJhdE5vdEZvdW5kICA8Y29kZT5jb250cmF0PC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcImNvbnRyYXQgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvY29udHJhdHMvICBBTEwgY29udHJhdHNcbiAqIEBhcGlOYW1lIEdldGNvbnRyYXRzXG4gKiBAYXBpUGVybWlzc2lvbiBBZG1pblxuICogQGFwaUdyb3VwICBDb250cmF0XG4gKlxuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhY3QgYWN0aXZlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFmZmljaGFnZSAgMCAobGVzIGRldXgpLzEgKEIyQikvMihCMkMpLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcmVjb21tZW5kZXIgIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBiZWdpbiBkYXRlIGRlYnV0IGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGVuZCBkYXRlIGZpbiBjb250cmF0IC5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgXG4gICAge1xuICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcIm5vbVwiOiBcIkNvbnRyYXQgIFJhZGlzc29uIEJsdSBSZXNvcnQgJiBUaGFsYXNzYVwiLFxuICAgICAgICBcImJlZ2luXCI6IFwiMjAxNi0xMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjIwMTctMTAtMzFcIixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJyZWNvbW1lbmRlclwiOiAwLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiIFJhZGlzc29uIEJsdSBIYW1tYW1ldFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDNcbiAgICAgICAgfVxuICAgIH0sXG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIGNvbnRyYXROb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2NvbnRyYXQvOmlkIEdFVCBjb250cmF0XG4gKiBAYXBpTmFtZSBHZXRjb250cmF0XG4gKiBAYXBpR3JvdXAgIENvbnRyYXRcbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWN0IGFjdGl2ZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhZmZpY2hhZ2UgIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJlY29tbWVuZGVyICAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gYmVnaW4gZGF0ZSBkZWJ1dCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBlbmQgZGF0ZSBmaW4gY29udHJhdCAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG5cbiAgICB7XG4gXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInJlY29tbWVuZGVyXCI6IDAsXG4gICAgICAgIFwiYWZmaWNoYWdlXCI6IDEsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImFjdFwiOiAxXG4gICAgIFxuICAgIH1cblxuICpcbiAqIEBhcGlVc2UgIGNvbnRyYXROb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9jb250cmF0LyBQT1NUIGNvbnRyYXRcbiAqIEBhcGlOYW1lIFBPU1Rjb250cmF0XG4gKiBAYXBpR3JvdXAgIENvbnRyYXRcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuXG4gICAgICAge1xuXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcIm5vbVwiOiBcIkNvbnRyYXQgIFJhZGlzc29uIEJsdSBSZXNvcnQgJiBUaGFsYXNzYVwiLFxuICAgICAgICBcImJlZ2luXCI6IFwiMjAxNi0xMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjIwMTctMTAtMzFcIixcbiAgICAgICAgXCJhY3RcIjogMSxcbiAgICAgICAgXCJhZmZpY2hhZ2VcIjogMCxcbiAgICAgICAgXCJyZWNvbW1lbmRlclwiOiAwLFxuICAgICBcbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJub21cIjogXCJDb250cmF0ICBSYWRpc3NvbiBCbHUgUmVzb3J0ICYgVGhhbGFzc2FcIixcbiAgICAgICAgXCJiZWdpblwiOiBcIjIwMTYtMTEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIyMDE3LTEwLTMxXCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicmVjb21tZW5kZXJcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzXG4gICAgICAgIH1cbiAgICB9LFxuXVxuICovXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL2NvbnRyYXQvZHVwIER1cGxpcXVlIGNvbnRyYXRcbiAqIEBhcGlOYW1lIER1cGxpcXVlY29udHJhdFxuICogQGFwaUdyb3VwICBDb250cmF0XG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcblxuICAgICAgIHtcblxuICAgICAgICBcImlkY29udHJhdG9sZFwiOiAzLFxuICAgICAgICBcImlkaG90ZWxcIjogNyxcbiAgICAgICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgICAgIFwiYmVnaW5cIjogXCIyMDE2LTExLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMjAxNy0xMC0zMVwiLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcImFmZmljaGFnZVwiOiAwLFxuICAgICAgICBcInJlY29tbWVuZGVyXCI6IDAsXG4gICAgIFxuICAgIH1cblxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gIHtcbiAgICBcImlkXCI6IDU4MSxcbiAgICBcIm5vbVwiOiBcInRlc3RcIixcbiAgICBcImFjdFwiOiBcIjFcIixcbiAgICBcImlkaG90ZWxcIjogXCI3XCIsXG4gICAgXCJhZmZpY2hhZ2VcIjogXCIwXCIsXG4gICAgXCJiZWdpblwiOiBcIjIwMTgtMTItMjRcIixcbiAgICBcImVuZFwiOiBcIjIwMTgtMTItMjZcIixcbiAgICBcInJlY29tbWVuZGVyXCI6IFwiMFwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMi0yNVQwOTo0OTozNC41MDhaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEyLTI1VDA5OjQ5OjM0LjUwOFpcIlxufVxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9jb250cmF0LzppZCBQVVQgY29udHJhdFxuICogQGFwaU5hbWUgUFVUY29udHJhdFxuICogQGFwaUdyb3VwICBDb250cmF0XG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbiAgICB7XG5cbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwibmJfam91clwiOiAwLFxuICAgICAgICBcImNvbnRyYXRfYm9va2luZ1wiOiBudWxsLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjAwMDAtMDAtMDBcIlxuICAgIH1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG4gICAgICAgIHtcbiAgICAgICAgXCJpZFwiOiAzLFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJub21cIjogXCJDb250cmF0ICBSYWRpc3NvbiBCbHUgUmVzb3J0ICYgVGhhbGFzc2FcIixcbiAgICAgICAgXCJiZWdpblwiOiBcIjIwMTYtMTEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIyMDE3LTEwLTMxXCIsXG4gICAgICAgIFwiYWN0XCI6IDEsXG4gICAgICAgIFwiYWZmaWNoYWdlXCI6IDAsXG4gICAgICAgIFwicmVjb21tZW5kZXJcIjogMCxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzXG4gICAgICAgIH1cbiAgICB9LFxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvY29udHJhdC86aWQgRGVsZXRlIGNvbnRyYXRcbiAgICogQGFwaU5hbWUgREVMRVRFY29udHJhdFxuICAgKiBAYXBpR3JvdXAgIENvbnRyYXRcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkIGNvbnRyYXRcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vY3J1ZGUgZWFybHlcblxuICAvL2Vhcmx5XG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIGVhcmx5Tm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIGVhcmx5Tm90Rm91bmQgIDxjb2RlPmVhcmx5PC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcImVhcmx5IHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2Vhcmx5cy8gIEFMTCBlYXJseXNcbiAqIEBhcGlOYW1lIEdldGVhcmx5c1xuICogQGFwaUdyb3VwICBFYXJseSBCb29raW5nXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgZWFybHkgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIHZhbGV1ciBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfc2luZ2xlIHZhbGV1ciBzaW5nbGUgZGUgZWFybHkuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIG1hcmdlIGIyYiBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyBtYXJnZSBiMmMgZGUgZWFybHkuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IgbWFyZ2Ugc2luZ2xlIGIyYiBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX3NfYyBtYXJnZSBzaW5nbGUgYjJjIGRlIGVhcmx5LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgbWluIGRlIG51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X251aXQgbWF4IGRlIG51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgYXJyYW5nZW1lbnQgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2FsY3VsX3N1cHAgY2FsY3VsIHN1cHBsZW1lbnQgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJfam91ciBub21icmUgZGVzIGpvdXJzLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBtb2RlbGUgaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gbW9kZWxlIHJvb20uXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nZW1lbnR9IG1vZGVsZSBhcnJhbmdlbWVudHMuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gYmVnaW4gZGF0ZSBkZWJ1dCBlYXJseSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZW5kIGRhdGUgZmluIGVhcmx5IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Jvb2tpbmcgZGF0ZSBhdmFudCBlYXJseSAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcImlkXCI6IDcsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDAsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwibmJfam91clwiOiAwLFxuICAgICAgICBcImVhcmx5X2Jvb2tpbmdcIjogbnVsbCxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMSxcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIwMDAwLTAwLTAwXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMDoyNToyMC4wMDBaXCIsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMDoyNToyMC4wMDBaXCIsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjogbnVsbCxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiBudWxsXG4gICAgfVxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBlYXJseU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvZWFybHkvOmlkIEdFVCBlYXJseVxuICogQGFwaU5hbWUgR2V0ZWFybHlcbiAqIEBhcGlHcm91cCAgRWFybHkgQm9va2luZ1xuICpcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBlYXJseSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGNvbnRyYXQgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tICAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgdmFsZXVyIGRlIGVhcmx5LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1cl9zaW5nbGUgdmFsZXVyIHNpbmdsZSBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgbWFyZ2UgYjJiIGRlIGVhcmx5LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIG1hcmdlIGIyYyBkZSBlYXJseS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLiBcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX3NfYiBtYXJnZSBzaW5nbGUgYjJiIGRlIGVhcmx5LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19jIG1hcmdlIHNpbmdsZSBiMmMgZGUgZWFybHkuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fbnVpdCBtaW4gZGUgbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfbnVpdCBtYXggZGUgbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgSUQgcm9vbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCBhcnJhbmdlbWVudCBJRCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBjYWxjdWxfc3VwcCBjYWxjdWwgc3VwcGxlbWVudCAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYl9qb3VyIG5vbWJyZSBkZXMgam91cnMuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IG1vZGVsZSBob3RlbC5cbiAqIEBhcGlTdWNjZXNzIHtyb29tfSBtb2RlbGUgcm9vbS5cbiAqIEBhcGlTdWNjZXNzIHthcnJhbmdlbWVudH0gbW9kZWxlIGFycmFuZ2VtZW50cy5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBiZWdpbiBkYXRlIGRlYnV0IGVhcmx5IC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBlbmQgZGF0ZSBmaW4gZWFybHkgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfYm9va2luZyBkYXRlIGF2YW50IGVhcmx5IC5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcblxuICAgIHtcbiAgICAgICAgXCJpZFwiOiA3LFxuICAgICAgICBcImlkY29udHJhdFwiOiAwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDAsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcIm5iX2pvdXJcIjogMCxcbiAgICAgICAgXCJlYXJseV9ib29raW5nXCI6IG51bGwsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImNhbGN1bF9zdXBwXCI6IDEsXG4gICAgICAgIFwiZGF0ZV9ib29raW5nXCI6IFwiMDAwMC0wMC0wMFwiLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTA6MjU6MjAuMDAwWlwiLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMTJUMTA6MjU6MjAuMDAwWlwiLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiIFJhZGlzc29uIEJsdSBIYW1tYW1ldFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IG51bGwsXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjogbnVsbFxuICAgIH1cblxuICpcbiAqIEBhcGlVc2UgIGVhcmx5Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvZWFybHkvIFBPU1QgZWFybHlcbiAqIEBhcGlOYW1lIFBPU1RlYXJseVxuICogQGFwaUdyb3VwICBFYXJseSBCb29raW5nXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbiAgICB7XG4gICAgICAgXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcIm5iX2pvdXJcIjogMCxcbiAgICAgICAgXCJlYXJseV9ib29raW5nXCI6IG51bGwsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImNhbGN1bF9zdXBwXCI6IDEsXG4gICAgICAgIFwiZGF0ZV9ib29raW5nXCI6IFwiMDAwMC0wMC0wMFwiXG5cbiAgICB9XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgICB7XG4gICAgICAgIFwiaWRcIjogNyxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAwLFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJcIixcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMyxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJuYl9qb3VyXCI6IDAsXG4gICAgICAgIFwiZWFybHlfYm9va2luZ1wiOiBudWxsLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjAwMDAtMDAtMDBcIixcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEwOjI1OjIwLjAwMFpcIixcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTEyVDEwOjI1OjIwLjAwMFpcIixcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiBudWxsLFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IG51bGxcbiAgICB9XG5dXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2Vhcmx5LzppZCBQVVQgZWFybHlcbiAqIEBhcGlOYW1lIFBVVGVhcmx5XG4gKiBAYXBpR3JvdXAgIEVhcmx5IEJvb2tpbmdcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xuICAgIHtcblxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJcIixcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMyxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJuYl9qb3VyXCI6IDAsXG4gICAgICAgIFwiZWFybHlfYm9va2luZ1wiOiBudWxsLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjAwMDAtMDAtMDBcIlxuICAgIH1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG4gICAge1xuICAgICAgICBcImlkXCI6IDcsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDAsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwibmJfam91clwiOiAwLFxuICAgICAgICBcImVhcmx5X2Jvb2tpbmdcIjogbnVsbCxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMSxcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIwMDAwLTAwLTAwXCIsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMDoyNToyMC4wMDBaXCIsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0xMlQxMDoyNToyMC4wMDBaXCIsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjogbnVsbCxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiBudWxsXG4gICAgfVxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvZWFybHkvOmlkIERlbGV0ZSBlYXJseVxuICAgKiBAYXBpTmFtZSBERUxFVEVlYXJseVxuICAgKiBAYXBpR3JvdXAgIEVhcmx5IEJvb2tpbmdcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkIGVhcmx5XG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIHN0b3BfaG90ZWxcblxuICAvL3N0b3BfaG90ZWxcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgc3RvcF9ob3RlbE5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBzdG9wX2hvdGVsTm90Rm91bmQgIDxjb2RlPnN0b3BfaG90ZWw8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwic3RvcF9ob3RlbCBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdG9wX2hvdGVscy8gIEFMTCBzdG9wX2hvdGVsc1xuICogQGFwaU5hbWUgR2V0c3RvcF9ob3RlbHNcbiAqIEBhcGlHcm91cCAgc3RvcF9ob3RlbCBcbiAqXG5cbiAqXG5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBzdG9wX2hvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgSUQgcm9vbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cblxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZnJvbSBkYXRlIGRlYnV0IHN0b3BfaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfdG8gZGF0ZSBmaW4gc3RvcF9ob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7YWdlbmNlfSBhZ2VuY2UgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gcm9vbSAuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAge1xuICAgICAgICBcImlkXCI6IDQyLFxuICAgICAgICBcImlkaG90ZWxcIjogMTMsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA4LTE0XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMDgtMTdcIixcbiAgICAgICAgXCJhZ2VuY2VcIjogbnVsbCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9jZWFuYVwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDEzXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjogNDMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAwLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDQsXG4gICAgICAgIFwicm9vbWlkXCI6IDI3LFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMTAtMTZcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0xN1wiLFxuICAgICAgICBcImFnZW5jZVwiOiB7XG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwiVGVzdC1kb3Rjb21cIixcbiAgICAgICAgICAgIFwiaWRcIjogNFxuICAgICAgICB9LFxuICAgICAgICBcImhvdGVsXCI6IG51bGwsXG4gICAgICAgIFwicm9vbVwiOiB7XG4gICAgICAgICAgICBcInJvb21uYW1lXCI6IFwiQnVuZ2Fsb3cgRmFtaWxpYWxcIixcbiAgICAgICAgICAgIFwicm9vbWlkXCI6IDI3XG4gICAgICAgIH1cbiAgICB9XG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIHN0b3BfaG90ZWxOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL3N0b3BfaG90ZWwvOmlkIEdFVCBzdG9wX2hvdGVsXG4gKiBAYXBpTmFtZSBHZXRzdG9wX2hvdGVsXG4gKiBAYXBpR3JvdXAgIHN0b3BfaG90ZWwgXG4gKlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIHN0b3BfaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRhZ2VuY2UgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9mcm9tIGRhdGUgZGVidXQgc3RvcF9ob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV90byBkYXRlIGZpbiBzdG9wX2hvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHthZ2VuY2V9IGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtyb29tfSByb29tIC4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICAgXCJpZFwiOiA0NCxcbiAgICBcImlkaG90ZWxcIjogXCIyNjBcIixcbiAgICBcImlkYWdlbmNlXCI6IFwiMFwiLFxuICAgIFwicm9vbWlkXCI6IFwiMlwiLFxuICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wNS0wM1wiLFxuICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMTAtMDVcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMTZUMDc6NDg6NTcuNDU3WlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0xNlQwNzo0ODo1Ny40NTdaXCJcbn1cblxuICpcbiAqIEBhcGlVc2UgIHN0b3BfaG90ZWxOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9zdG9wX2hvdGVsLyBQT1NUIHN0b3BfaG90ZWxcbiAqIEBhcGlOYW1lIFBPU1RzdG9wX2hvdGVsXG4gKiBAYXBpR3JvdXAgIHN0b3BfaG90ZWwgXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcblxuICAgIFwiaWRob3RlbFwiOiBcIjI2MFwiLFxuICAgIFwiaWRhZ2VuY2VcIjogXCIwXCIsXG4gICAgXCJyb29taWRcIjogXCIyXCIsXG4gICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA1LTAzXCIsXG4gICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0wNVwiXG59XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAgIHtcbiAgICBcImlkXCI6IDQ0LFxuICAgIFwiaWRob3RlbFwiOiBcIjI2MFwiLFxuICAgIFwiaWRhZ2VuY2VcIjogXCIwXCIsXG4gICAgXCJyb29taWRcIjogXCIyXCIsXG4gICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA1LTAzXCIsXG4gICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0wNVwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0xNlQwNzo0ODo1Ny40NTdaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTE2VDA3OjQ4OjU3LjQ1N1pcIlxufVxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9zdG9wX2hvdGVsLzppZCBQVVQgc3RvcF9ob3RlbFxuICogQGFwaU5hbWUgUFVUc3RvcF9ob3RlbFxuICogQGFwaUdyb3VwICBzdG9wX2hvdGVsIFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4gIHtcblxuICAgIFwiaWRob3RlbFwiOiBcIjI2MFwiLFxuICAgIFwiaWRhZ2VuY2VcIjogXCIwXCIsXG4gICAgXCJyb29taWRcIjogXCIyXCIsXG4gICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA1LTAzXCIsXG4gICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0wNVwiXG59XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xuICAgIHtcbiAgICBcImlkXCI6IDQ0LFxuICAgIFwiaWRob3RlbFwiOiBcIjI2MFwiLFxuICAgIFwiaWRhZ2VuY2VcIjogXCIwXCIsXG4gICAgXCJyb29taWRcIjogXCIyXCIsXG4gICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA1LTAzXCIsXG4gICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0xMC0wNVwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0xNlQwNzo0ODo1Ny40NTdaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTE2VDA3OjQ4OjU3LjQ1N1pcIlxufVxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvc3RvcF9ob3RlbC86aWQgRGVsZXRlIHN0b3BfaG90ZWxcbiAgICogQGFwaU5hbWUgREVMRVRFc3RvcF9ob3RlbFxuICAgKiBAYXBpR3JvdXAgIHN0b3BfaG90ZWxcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkIHN0b3BfaG90ZWxcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vY3J1ZGUgY29uZGl0aW9uc19hbm51bGF0aW9uXG5cbiAgLy9jb25kaXRpb25zX2FubnVsYXRpb25cbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgY29uZGl0aW9uc19hbm51bGF0aW9uTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIGNvbmRpdGlvbnNfYW5udWxhdGlvbk5vdEZvdW5kICA8Y29kZT5jb25kaXRpb25zX2FubnVsYXRpb248L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiY29uZGl0aW9uc19hbm51bGF0aW9uIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2NvbmRpdGlvbnNfYW5udWxhdGlvbnMvOmlkcGVyaW9kICBBTEwgY29uZGl0aW9uc19hbm51bGF0aW9uc1xuICogQGFwaU5hbWUgR2V0Y29uZGl0aW9uc19hbm51bGF0aW9uc1xuICogQGFwaUdyb3VwICBjb25kaXRpb25zX2FubnVsYXRpb24gXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgY29uZGl0aW9uc19hbm51bGF0aW9uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIElEIGFycmFuZ2VtZW50cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbElkIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkY29udHJhdCBJRCBjb250cmF0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIElEIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGF2YW50IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdXRfc2Fpc29uIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHNlam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBub3Nob3cgMC8xIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYm51aXRfbnMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyX25zIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X25zIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1cl9udWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9udWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5icmVfbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ2VtZW50c30gYXJyYW5nZW1lbnRzLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJob3RlbElkXCI6IDIyNSxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMzExLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDE0MTAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcIm5icmVfbnVpdFwiOiAwLFxuICAgICAgICBcImF2YW50XCI6IDEsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJzZWpvdXJcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vc2hvd1wiOiAxLFxuICAgICAgICBcIm5ibnVpdF9uc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9uc1wiOiA0NSxcbiAgICAgICAgXCJwb3VyY2VudF9uc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9udWl0XCI6IDEwMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk1FTkFSQVwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDIyNVxuICAgICAgICB9LFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IG51bGxcbiAgICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBjb25kaXRpb25zX2FubnVsYXRpb25Ob3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge2dldH0gL2NvbmRpdGlvbnNfYW5udWxhdGlvbi86aWQgR0VUIGNvbmRpdGlvbnNfYW5udWxhdGlvblxuICogQGFwaU5hbWUgR2V0Y29uZGl0aW9uc19hbm51bGF0aW9uXG4gKiBAYXBpR3JvdXAgIGNvbmRpdGlvbnNfYW5udWxhdGlvbiBcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgdW5pcXVlIElELlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWQgdW5pcXVlIElEIGNvbmRpdGlvbnNfYW5udWxhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCBJRCBhcnJhbmdlbWVudHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGNvbnRyYXQgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdmFudCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3V0X3NhaXNvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzZWpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbm9zaG93IDAvMSAuIFxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJudWl0X25zIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1cl9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9ucyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfbnVpdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYnJlX251aXQgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbC5cbiAqIEBhcGlTdWNjZXNzIHthcnJhbmdlbWVudHN9IGFycmFuZ2VtZW50cy5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiAge1xuICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJob3RlbElkXCI6IDIyNSxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMzExLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDE0MTAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcIm5icmVfbnVpdFwiOiAwLFxuICAgICAgICBcImF2YW50XCI6IDEsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJzZWpvdXJcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vc2hvd1wiOiAxLFxuICAgICAgICBcIm5ibnVpdF9uc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9uc1wiOiA0NSxcbiAgICAgICAgXCJwb3VyY2VudF9uc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9udWl0XCI6IDEwMFxuICAgIH0sXG5cbiAqXG4gKiBAYXBpVXNlICBjb25kaXRpb25zX2FubnVsYXRpb25Ob3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9jb25kaXRpb25zX2FubnVsYXRpb24vIFBPU1QgY29uZGl0aW9uc19hbm51bGF0aW9uXG4gKiBAYXBpTmFtZSBQT1NUY29uZGl0aW9uc19hbm51bGF0aW9uXG4gKiBAYXBpR3JvdXAgIGNvbmRpdGlvbnNfYW5udWxhdGlvbiBcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xuICB7XG4gICAgIFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyMjUsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDMxMSxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxNDEwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJuYnJlX251aXRcIjogMCxcbiAgICAgICAgXCJhdmFudFwiOiAxLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgICAgIFwic2Vqb3VyXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub3Nob3dcIjogMSxcbiAgICAgICAgXCJuYm51aXRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnNcIjogNDUsXG4gICAgICAgIFwicG91cmNlbnRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnVpdFwiOiAxMDBcbiAgICB9XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAge1xuICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJob3RlbElkXCI6IDIyNSxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMzExLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDE0MTAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcIm5icmVfbnVpdFwiOiAwLFxuICAgICAgICBcImF2YW50XCI6IDEsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJzZWpvdXJcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vc2hvd1wiOiAxLFxuICAgICAgICBcIm5ibnVpdF9uc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9uc1wiOiA0NSxcbiAgICAgICAgXCJwb3VyY2VudF9uc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9udWl0XCI6IDEwMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk1FTkFSQVwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDIyNVxuICAgICAgICB9LFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IG51bGxcbiAgICB9XG5cdF1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvY29uZGl0aW9uc19hbm51bGF0aW9uLzppZCBQVVQgY29uZGl0aW9uc19hbm51bGF0aW9uXG4gKiBAYXBpTmFtZSBQVVRjb25kaXRpb25zX2FubnVsYXRpb25cbiAqIEBhcGlHcm91cCAgY29uZGl0aW9uc19hbm51bGF0aW9uIFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4gIHtcblxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAyMjUsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDMxMSxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxNDEwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJuYnJlX251aXRcIjogMCxcbiAgICAgICAgXCJhdmFudFwiOiAxLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgICAgIFwic2Vqb3VyXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub3Nob3dcIjogMSxcbiAgICAgICAgXCJuYm51aXRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnNcIjogNDUsXG4gICAgICAgIFwicG91cmNlbnRfbnNcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfbnVpdFwiOiAxMDBcbiAgICAgICBcbiAgICB9XG4gICAgIFxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiAgICB7XG4gICAgICAgIFwiaWRcIjogMyxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcImhvdGVsSWRcIjogMjI1LFxuICAgICAgICBcImlkY29udHJhdFwiOiAzMTEsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTQxMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAwLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwibmJyZV9udWl0XCI6IDAsXG4gICAgICAgIFwiYXZhbnRcIjogMSxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcInNlam91clwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibm9zaG93XCI6IDEsXG4gICAgICAgIFwibmJudWl0X25zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX25zXCI6IDQ1LFxuICAgICAgICBcInBvdXJjZW50X25zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX251aXRcIjogMTAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiTUVOQVJBXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMjI1XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjogbnVsbFxuICAgIH1cbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL2NvbmRpdGlvbnNfYW5udWxhdGlvbi86aWQgRGVsZXRlIGNvbmRpdGlvbnNfYW5udWxhdGlvblxuICAgKiBAYXBpTmFtZSBERUxFVEVjb25kaXRpb25zX2FubnVsYXRpb25cbiAgICogQGFwaUdyb3VwICBjb25kaXRpb25zX2FubnVsYXRpb25cbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkIGNvbmRpdGlvbnNfYW5udWxhdGlvblxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBhcnJfdGFyaWZcblxuICAvL3NvdWhpci1DSEFCQUFOLTEzLTAyLTIwMjAgYXBpLWdldCB2b3VjaGVyXG5cbiAgLy9hcnJfdGFyaWZcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgYXJyX3RhcmlmTm90Rm91bmRFcnJvclxuICAgKiBAYXBpRXJyb3IgIGFycl90YXJpZk5vdEZvdW5kICA8Y29kZT5hcnJfdGFyaWY8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwiYXJyX3RhcmlmIHBhcyB0cm91dsOpZVwiXG4gICAqICAgICB9XG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2Fycl90YXJpZnMvOmlkcGVyaW9kICBBTEwgYXJyX3Rhcmlmc1xuICogQGFwaU5hbWUgR2V0YXJyX3Rhcmlmc1xuICogQGFwaUdyb3VwICBhcnJfdGFyaWYgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJ0YXJpZmlkIHVuaXF1ZSBJRCBhcnJfdGFyaWYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaG90ZWxJZCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCBJRCBhcnJhbmdlbWVudHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgLiBcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdHlwZV9jYWxjdWwgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbC5cbiAqIEBhcGlTdWNjZXNzIHtyb29tfSByb29tLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ2VtZW50c30gYXJyYW5nZW1lbnRzLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4ge1xuICAgICAgICBcImFycnRhcmlmaWRcIjogMSxcbiAgICAgICAgXCJhcnJpZFwiOiA3LFxuICAgICAgICBcImhvdGVsSWRcIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiA3MyxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICAgICAgXCJob3RlbElkXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiB7XG4gICAgICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkFsbCBJbmNsdXNpdmVcIixcbiAgICAgICAgICAgIFwiYXJySWRcIjogN1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjogbnVsbFxuICAgIH0sXG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIGFycl90YXJpZk5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvYXJyX3RhcmlmLzphcnJ0YXJpZmlkIEdFVCBhcnJfdGFyaWZcbiAqIEBhcGlOYW1lIEdldGFycl90YXJpZlxuICogQGFwaUdyb3VwICBhcnJfdGFyaWYgXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gYXJydGFyaWZpZCAgICAgICAgdW5pcXVlIElELlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJydGFyaWZpZCB1bmlxdWUgSUQgYXJyX3RhcmlmIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGhvdGVsSWQgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgSUQgYXJyYW5nZW1lbnRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9udWl0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHR5cGVfY2FsY3VsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gcm9vbS5cbiAqIEBhcGlTdWNjZXNzIHthcnJhbmdlbWVudHN9IGFycmFuZ2VtZW50cy5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbntcbiAgICAgICAgXCJhcnJ0YXJpZmlkXCI6IDEsXG4gICAgICAgIFwiYXJyaWRcIjogNyxcbiAgICAgICAgXCJob3RlbElkXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogNzMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIk9uZSBSZXNvcnQgTW9uYXN0aXJcIixcbiAgICAgICAgICAgIFwiaG90ZWxJZFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJBbGwgSW5jbHVzaXZlXCIsXG4gICAgICAgICAgICBcImFycklkXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IG51bGxcbiAgICB9LFxuXG4gKlxuICogQGFwaVVzZSAgYXJyX3RhcmlmTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvYXJyX3RhcmlmLyBQT1NUIGFycl90YXJpZlxuICogQGFwaU5hbWUgUE9TVGFycl90YXJpZlxuICogQGFwaUdyb3VwICBhcnJfdGFyaWYgXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcbiBcbiAgICAgICAgXCJhcnJpZFwiOiA3LFxuICAgICAgICBcImhvdGVsSWRcIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiA3MyxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwXG4gICAgfSxcbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xue1xuICAgICAgICBcImFycnRhcmlmaWRcIjogMSxcbiAgICAgICAgXCJhcnJpZFwiOiA3LFxuICAgICAgICBcImhvdGVsSWRcIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiA3MyxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICAgICAgXCJob3RlbElkXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiB7XG4gICAgICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkFsbCBJbmNsdXNpdmVcIixcbiAgICAgICAgICAgIFwiYXJySWRcIjogN1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjogbnVsbFxuICAgIH0sXG5dXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL2Fycl90YXJpZi86YXJydGFyaWZpZCBQVVQgYXJyX3RhcmlmXG4gKiBAYXBpTmFtZSBQVVRhcnJfdGFyaWZcbiAqIEBhcGlHcm91cCAgYXJyX3RhcmlmIFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBhcnJ0YXJpZmlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcbiAgICAgICAgXCJhcnJpZFwiOiA3LFxuICAgICAgICBcImhvdGVsSWRcIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiA3MyxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwXG4gICAgfSxcbiAgICAgXG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xuICAge1xuICAgICAgICBcImFycnRhcmlmaWRcIjogMSxcbiAgICAgICAgXCJhcnJpZFwiOiA3LFxuICAgICAgICBcImhvdGVsSWRcIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiA3MyxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICAgICAgXCJob3RlbElkXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiB7XG4gICAgICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkFsbCBJbmNsdXNpdmVcIixcbiAgICAgICAgICAgIFwiYXJySWRcIjogN1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjogbnVsbFxuICAgIH0sXG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9hcnJfdGFyaWYvOmFycnRhcmlmaWQgRGVsZXRlIGFycl90YXJpZlxuICAgKiBAYXBpTmFtZSBERUxFVEVhcnJfdGFyaWZcbiAgICogQGFwaUdyb3VwICBhcnJfdGFyaWZcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGFycnRhcmlmaWQgaWQgYXJyX3RhcmlmXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIHN1cHBsZW1lbnRcblxuICAvL3N1cHBsZW1lbnRcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgc3VwcGxlbWVudE5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBzdXBwbGVtZW50Tm90Rm91bmQgIDxjb2RlPnN1cHBsZW1lbnQ8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwic3VwcGxlbWVudCBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdXBwbGVtZW50cy86aWRwZXJpb2QgIEFMTCBzdXBwbGVtZW50c1xuICogQGFwaU5hbWUgR2V0c3VwcGxlbWVudHNcbiAqIEBhcGlHcm91cCAgc3VwcGxlbWVudCBcbiAqXG5cbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRwZXJpb2QgICAgICAgIHVuaXF1ZSBJRFBlcmlvZC5cbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZGhvdGVsICAgICAgICB1bmlxdWUgSURob3RlbC5cbiAqIEBhcGlQYXJhbSB7cm9vbWlkfSByb29taWQgICAgICAgIHVuaXF1ZSByb29tLlxuICogQGFwaVBhcmFtIHtTdHJpbmd9IG5vbSAgICAgICBub20uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwaWQgdW5pcXVlIElEIHN1cHBsZW1lbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgLiBcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdHlwZV9jYWxjdWwgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG91c19zYWlzb24gMC8xLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbntcbiAgICAgICAge1xuICAgICAgICBcInN1cHBpZFwiOiA0OTU4LFxuICAgICAgICBcImlkcGVyaW9kXCI6IDYyNzIsXG4gICAgICAgIFwiaWRob3RlbFwiOiAyMzIsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDI0LFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiA1LFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogNixcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vbVwiOiBcIlZ1ZSBNZXJcIixcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcImlkY29udHJhdFwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiTEEgQ0lHQUxFXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMjMyXG4gICAgICAgIH1cbiAgICB9XG4gICBcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgc3VwcGxlbWVudE5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcGxlbWVudC86c3VwcGlkIEdFVCBzdXBwbGVtZW50XG4gKiBAYXBpTmFtZSBHZXRzdXBwbGVtZW50XG4gKiBAYXBpR3JvdXAgIHN1cHBsZW1lbnQgXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRwZXJpb2QgICAgICAgIHVuaXF1ZSBJRFBlcmlvZC5cbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZGhvdGVsICAgICAgICB1bmlxdWUgSURob3RlbC5cbiAqIEBhcGlQYXJhbSB7cm9vbWlkfSByb29taWQgICAgICAgIHVuaXF1ZSByb29tLlxuICogQGFwaVBhcmFtIHtTdHJpbmd9IG5vbSAgICAgICBub20uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwaWQgdW5pcXVlIElEIHN1cHBsZW1lbnQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgLiBcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdHlwZV9jYWxjdWwgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG91c19zYWlzb24gMC8xLlxuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICAgICAgIFwic3VwcGlkXCI6IDMwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDExMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDM0LFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAyLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vbVwiOiBcIlZ1ZSBNZXJcIixcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcImlkY29udHJhdFwiOiAwXG4gICAgfSxcblxuICpcbiAqIEBhcGlVc2UgIHN1cHBsZW1lbnROb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9zdXBwbGVtZW50LyBQT1NUIHN1cHBsZW1lbnRcbiAqIEBhcGlOYW1lIFBPU1RzdXBwbGVtZW50XG4gKiBAYXBpR3JvdXAgIHN1cHBsZW1lbnQgXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMTMsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzNCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMixcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJub21cIjogXCJWdWUgTWVyXCIsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMFxuICAgIH0sXG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbntcbiAgICAgICAgXCJzdXBwaWRcIjogMzAsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTEzLFxuICAgICAgICBcImlkaG90ZWxcIjogMzQsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDIsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiVnVlIE1lclwiLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDBcbiAgICB9LFxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9zdXBwbGVtZW50LzpzdXBwaWQgUFVUIHN1cHBsZW1lbnRcbiAqIEBhcGlOYW1lIFBVVHN1cHBsZW1lbnRcbiAqIEBhcGlHcm91cCAgc3VwcGxlbWVudCBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gc3VwcGlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcblxuICAgICAgICBcImlkcGVyaW9kXCI6IDExMyxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDM0LFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAyLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm5vbVwiOiBcIlZ1ZSBNZXJcIixcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcImlkY29udHJhdFwiOiAwXG4gICAgfSxcbiAgICAgXG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xuIHtcbiAgICAgICAgXCJzdXBwaWRcIjogMzAsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTEzLFxuICAgICAgICBcImlkaG90ZWxcIjogMzQsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDIsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJ0eXBlX2NhbGN1bFwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiVnVlIE1lclwiLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDBcbiAgICB9LFxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvc3VwcGxlbWVudC86c3VwcGlkIERlbGV0ZSBzdXBwbGVtZW50XG4gICAqIEBhcGlOYW1lIERFTEVURXN1cHBsZW1lbnRcbiAgICogQGFwaUdyb3VwICBzdXBwbGVtZW50XG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBzdXBwaWQgaWQgc3VwcGxlbWVudFxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBzdXBwX2pvdXJcblxuICAvL3N1cHBfam91clxuICAvKipcbiAgICogQGFwaURlZmluZSBzdXBwX2pvdXJOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgc3VwcF9qb3VyTm90Rm91bmQgIDxjb2RlPnN1cHBfam91cjwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKiBAYXBpRGVzY3JpcHRpb24gU3VwcGzDqW1lbnQgSm91clxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJzdXBwX2pvdXIgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcF9qb3Vycy86aWRwZXJpb2QgIEFMTCBzdXBwX2pvdXJzXG4gKiBAYXBpTmFtZSBHZXRzdXBwX2pvdXJzXG4gKiBAYXBpR3JvdXAgIHN1cHBfam91ciBcbiAqXG5cbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRwZXJpb2QgICAgICAgIHVuaXF1ZSBJRFBlcmlvZC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN1cHBpZCB1bmlxdWUgSUQgc3VwcF9qb3VyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfc3VwcCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9maW4gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0eXBlX2NhbGN1bCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3VwcF93ZWVrZW5kIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwX3NpbmdsZSB2YWxldXIgc2luZ2xlXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xue1xuICAgIFwib2JsaWdhdG9pcmVcIjogXCIwXCIsXG4gICAgXCJzdXBwaWRcIjogMTg0MCxcbiAgICBcImlkaG90ZWxcIjogXCIxMDBcIixcbiAgICBcImlkcGVyaW9kXCI6IFwiNzAwXCIsXG4gICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIxXCIsXG4gICAgXCJ2YWxldXJcIjogXCIyMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIxXCIsXG4gICAgXCJkYXRlX3N1cHBcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgXCJkYXRlX2ZpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICBcIm1hcmdlX2JcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25fYlwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X2JcIjogXCIwXCIsXG4gICAgXCJtYXJnZV9jXCI6IFwiNVwiLFxuICAgIFwicG91cmNlbnRfY1wiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9jXCI6IFwiMFwiLFxuICAgIFwic3VwcF9zaW5nbGVcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9zXCI6IFwiXCIsXG4gICAgXCJqb3VyXCI6IFwiNFwiLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yOVQxMToxNjo1NS42MTVaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTI5VDExOjE2OjU1LjYxNVpcIlxufSxcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgc3VwcF9qb3VyTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdXBwX2pvdXIvOnN1cHBpZCBHRVQgc3VwcF9qb3VyXG4gKiBAYXBpTmFtZSBHZXRzdXBwX2pvdXJcbiAqIEBhcGlHcm91cCAgc3VwcF9qb3VyIFxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHN1cHBpZCAgICAgICAgdW5pcXVlIElELlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElEIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGpvdXIgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3N1cHAgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfZmluIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdHlwZV9jYWxjdWwgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN1cHBfd2Vla2VuZCAwLzEgLlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gcm9vbS5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbntcbiAgICBcIm9ibGlnYXRvaXJlXCI6IFwiMFwiLFxuICAgIFwic3VwcGlkXCI6IDE4NDAsXG4gICAgXCJpZGhvdGVsXCI6IFwiMTAwXCIsXG4gICAgXCJpZHBlcmlvZFwiOiBcIjcwMFwiLFxuICAgIFwibm9tXCI6IFwidGVzdFwiLFxuICAgIFwib3BlcmF0aW9uXCI6IFwiMVwiLFxuICAgIFwidmFsZXVyXCI6IFwiMjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMVwiLFxuICAgIFwiZGF0ZV9zdXBwXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwiZGF0ZV9maW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgXCJtYXJnZV9iXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2JcIjogXCIwXCIsXG4gICAgXCJwb3VyY2VudF9iXCI6IFwiMFwiLFxuICAgIFwibWFyZ2VfY1wiOiBcIjVcIixcbiAgICBcInBvdXJjZW50X2NcIjogXCIwXCIsXG4gICAgXCJvcGVyYXRpb25fY1wiOiBcIjBcIixcbiAgICBcInN1cHBfc2luZ2xlXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfc1wiOiBcIlwiLFxuICAgIFwiam91clwiOiBcIjRcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMjlUMTE6MTY6NTUuNjE1WlwiLFxuICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOC0xMC0yOVQxMToxNjo1NS42MTVaXCJcbn0sXG5cbiAqXG4gKiBAYXBpVXNlICBzdXBwX2pvdXJOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9zdXBwX2pvdXIvIFBPU1Qgc3VwcF9qb3VyXG4gKiBAYXBpTmFtZSBQT1NUc3VwcF9qb3VyXG4gKiBAYXBpR3JvdXAgIHN1cHBfam91ciBcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG5cbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJqb3VyXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJzdXBwX3dlZWtlbmRcIjogMCxcdFx0XG4gICAgICAgIFwibHVuZGlcIjogMCwgLy9zaSBzdXBwX3dlZWtlbmQ9MSYmIGx1bmRpPT0xID0+am91cj0yLlxuICAgICAgICBcIm1hcmRpXCI6IDAsIC8vc2kgc3VwcF93ZWVrZW5kPTEmJiBtYXJkaT09MSA9PmpvdXI9My5cbiAgICAgICAgXCJtZXJjcmVkaVwiOiAwLCAvL3NpIHN1cHBfd2Vla2VuZD0xICYmIG1lcmNyZWRpPT0xID0+am91cj00LlxuICAgICAgICBcImpldWRpXCI6IDAsIC8vc2kgc3VwcF93ZWVrZW5kPTEgJiYgamV1ZGk9PTEgPT5qb3VyPTUuXG4gICAgICAgIFwidmVuZHJlZGlcIjogMCwgLy9zaSBzdXBwX3dlZWtlbmQ9MSAmJiB2ZW5kcmVkaT09MSA9PmpvdXI9Ni5cbiAgICAgICAgXCJzYW1lZGlcIjogMCwgLy8gc2kgc3VwcF93ZWVrZW5kPTEgJiYgc2FtZWRpPT0xID0+am91cj03LlxuICAgICAgICBcImRpbWFuY2hlXCI6IDAsIC8vc2kgc3VwcF93ZWVrZW5kPTEgJiYgZGltYW5jaGU9PTEgPT5qb3VyPTEuXG4gICAgICAgIFwic3V1cF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG5cblxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gXG57XG4gICAgXCJvYmxpZ2F0b2lyZVwiOiBcIjBcIixcbiAgICBcInN1cHBpZFwiOiAxODQwLFxuICAgIFwiaWRob3RlbFwiOiBcIjEwMFwiLFxuICAgIFwiaWRwZXJpb2RcIjogXCI3MDBcIixcbiAgICBcIm5vbVwiOiBcInRlc3RcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjFcIixcbiAgICBcInZhbGV1clwiOiBcIjIwXCIsXG4gICAgXCJwb3VyY2VudFwiOiBcIjFcIixcbiAgICBcImRhdGVfc3VwcFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICBcImRhdGVfZmluXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwibWFyZ2VfYlwiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9iXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfYlwiOiBcIjBcIixcbiAgICBcIm1hcmdlX2NcIjogXCI1XCIsXG4gICAgXCJwb3VyY2VudF9jXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2NcIjogXCIwXCIsXG4gICAgXCJzdXBwX3NpbmdsZVwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X3NcIjogXCJcIixcbiAgICBcImpvdXJcIjogXCI0XCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTI5VDExOjE2OjU1LjYxNVpcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMjlUMTE6MTY6NTUuNjE1WlwiXG59XG5cbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvc3VwcF9qb3VyLzpzdXBwaWQgUFVUIHN1cHBfam91clxuICogQGFwaU5hbWUgUFVUc3VwcF9qb3VyXG4gKiBAYXBpR3JvdXAgIHN1cHBfam91ciBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gc3VwcGlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbntcblxuICAgICAgICBcImlkcGVyaW9kXCI6IDEsXG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcImpvdXJcIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcInRlc3RcIixcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInN1dXBfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgIFxuXG59XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xuICB7XG4gICAgXCJvYmxpZ2F0b2lyZVwiOiBcIjBcIixcbiAgICBcInN1cHBpZFwiOiAxODQwLFxuICAgIFwiaWRob3RlbFwiOiBcIjEwMFwiLFxuICAgIFwiaWRwZXJpb2RcIjogXCI3MDBcIixcbiAgICBcIm5vbVwiOiBcInRlc3RcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjFcIixcbiAgICBcInZhbGV1clwiOiBcIjIwXCIsXG4gICAgXCJwb3VyY2VudFwiOiBcIjFcIixcbiAgICBcImRhdGVfc3VwcFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICBcImRhdGVfZmluXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgIFwibWFyZ2VfYlwiOiBcIjBcIixcbiAgICBcIm9wZXJhdGlvbl9iXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRfYlwiOiBcIjBcIixcbiAgICBcIm1hcmdlX2NcIjogXCI1XCIsXG4gICAgXCJwb3VyY2VudF9jXCI6IFwiMFwiLFxuICAgIFwib3BlcmF0aW9uX2NcIjogXCIwXCIsXG4gICAgXCJzdXBwX3NpbmdsZVwiOiBcIjBcIixcbiAgICBcInBvdXJjZW50X3NcIjogXCJcIixcbiAgICBcImpvdXJcIjogXCI0XCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTI5VDExOjE2OjU1LjYxNVpcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMjlUMTE6MTY6NTUuNjE1WlwiXG59XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9zdXBwX2pvdXIvOnN1cHBpZCBEZWxldGUgc3VwcF9qb3VyXG4gICAqIEBhcGlOYW1lIERFTEVURXN1cHBfam91clxuICAgKiBAYXBpR3JvdXAgIHN1cHBfam91clxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gc3VwcGlkIGlkIHN1cHBfam91clxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9jcnVkZSBzdXBwX2pvdXJfZGlubmVyXG5cbiAgLy9zdXBwX2pvdXJfZGlubmVyXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIHN1cHBfam91cl9kaW5uZXJOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgc3VwcF9qb3VyX2Rpbm5lck5vdEZvdW5kICA8Y29kZT5zdXBwX2pvdXJfZGlubmVyPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqIEBhcGlEZXNjcmlwdGlvbiBTdXBwbMOpbWVudCBKb3VyXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcInN1cHBfam91cl9kaW5uZXIgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcF9qb3VyX2Rpbm5lcnMvOmlkcGVyaW9kICBBTEwgc3VwcF9qb3VyX2Rpbm5lcnNcbiAqIEBhcGlOYW1lIEdldHN1cHBfam91cl9kaW5uZXJzXG4gKiBAYXBpR3JvdXAgIHN1cHBfam91cl9kaW5uZXIgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwaWQgdW5pcXVlIElEIHN1cHBfam91cl9kaW5uZXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfc3VwcCAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9maW4gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvYmxpZ2F0b2lyZSAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzdXBwX3NpbmdsZSB2YWxldXIgc2luZ2xlXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zIC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiB7XG4gICAgICAgIFwic3VwcGlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMzM4NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEwMixcbiAgICAgICAgXCJqb3VyXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDExMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm9ibGlnYXRvaXJlXCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiRGlubmVyIEdhbGFcIixcbiAgICAgICAgXCJkYXRlX3N1cHBcIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9maW5cIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDE0LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInN1cHBfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbF9lbmZcIjogNTAsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgWm9kaWFjXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMTAyXG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBzdXBwX2pvdXJfZGlubmVyTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdXBwX2pvdXJfZGlubmVyLzpzdXBwaWQgR0VUIHN1cHBfam91cl9kaW5uZXJcbiAqIEBhcGlOYW1lIEdldHN1cHBfam91cl9kaW5uZXJcbiAqIEBhcGlHcm91cCAgc3VwcF9qb3VyX2Rpbm5lciBcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN1cHBpZCB1bmlxdWUgSUQgc3VwcF9qb3VyX2Rpbm5lciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIElEIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBqb3VyIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9zdXBwIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2ZpbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9ibGlnYXRvaXJlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxfZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN1cHBfc2luZ2xlIHZhbGV1ciBzaW5nbGVcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3MgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAuXG5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiB7XG4gICAgICAgIFwic3VwcGlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMzM4NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEwMixcbiAgICAgICAgXCJqb3VyXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDExMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm9ibGlnYXRvaXJlXCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiRGlubmVyIEdhbGFcIixcbiAgICAgICAgXCJkYXRlX3N1cHBcIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9maW5cIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDE0LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInN1cHBfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbF9lbmZcIjogNTAsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgWm9kaWFjXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMTAyXG4gICAgICAgIH1cbiAgICB9XG5cbiAqXG4gKiBAYXBpVXNlICBzdXBwX2pvdXJfZGlubmVyTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvc3VwcF9qb3VyX2Rpbm5lci8gUE9TVCBzdXBwX2pvdXJfZGlubmVyXG4gKiBAYXBpTmFtZSBQT1NUc3VwcF9qb3VyX2Rpbm5lclxuICogQGFwaUdyb3VwICBzdXBwX2pvdXJfZGlubmVyIFxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbiB7XG5cbiAgICAgICAgXCJpZHBlcmlvZFwiOiAzMzg0LFxuICAgICAgICBcImlkaG90ZWxcIjogMTAyLFxuICAgICAgICBcImpvdXJcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMTEwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwib2JsaWdhdG9pcmVcIjogMCxcbiAgICAgICAgXCJub21cIjogXCJEaW5uZXIgR2FsYVwiLFxuICAgICAgICBcImRhdGVfc3VwcFwiOiBcIjIwMTctMTItMzFcIixcbiAgICAgICAgXCJkYXRlX2ZpblwiOiBcIjIwMTctMTItMzFcIixcbiAgICAgICAgXCJtYXJnZV9iXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMTQsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwic3VwcF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsX2VuZlwiOiA1MFxuICAgIH1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuIFxuIHtcbiAgICAgICAgXCJzdXBwaWRcIjogMixcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAzMzg0LFxuICAgICAgICBcImlkaG90ZWxcIjogMTAyLFxuICAgICAgICBcImpvdXJcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMTEwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwib2JsaWdhdG9pcmVcIjogMCxcbiAgICAgICAgXCJub21cIjogXCJEaW5uZXIgR2FsYVwiLFxuICAgICAgICBcImRhdGVfc3VwcFwiOiBcIjIwMTctMTItMzFcIixcbiAgICAgICAgXCJkYXRlX2ZpblwiOiBcIjIwMTctMTItMzFcIixcbiAgICAgICAgXCJtYXJnZV9iXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMTQsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwic3VwcF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsX2VuZlwiOiA1MFxufVxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9zdXBwX2pvdXJfZGlubmVyLzpzdXBwaWQgUFVUIHN1cHBfam91cl9kaW5uZXJcbiAqIEBhcGlOYW1lIFBVVHN1cHBfam91cl9kaW5uZXJcbiAqIEBhcGlHcm91cCAgc3VwcF9qb3VyX2Rpbm5lciBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gc3VwcGlkICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbiB7XG5cbiAgICAgICAgXCJpZHBlcmlvZFwiOiAzMzg0LFxuICAgICAgICBcImlkaG90ZWxcIjogMTAyLFxuICAgICAgICBcImpvdXJcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMTEwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwib2JsaWdhdG9pcmVcIjogMCxcbiAgICAgICAgXCJub21cIjogXCJEaW5uZXIgR2FsYVwiLFxuICAgICAgICBcImRhdGVfc3VwcFwiOiBcIjIwMTctMTItMzFcIixcbiAgICAgICAgXCJkYXRlX2ZpblwiOiBcIjIwMTctMTItMzFcIixcbiAgICAgICAgXCJtYXJnZV9iXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMTQsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwic3VwcF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsX2VuZlwiOiA1MFxuICAgIH1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG4gICB7XG4gICAgICAgIFwic3VwcGlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMzM4NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEwMixcbiAgICAgICAgXCJqb3VyXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDExMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcIm9ibGlnYXRvaXJlXCI6IDAsXG4gICAgICAgIFwibm9tXCI6IFwiRGlubmVyIEdhbGFcIixcbiAgICAgICAgXCJkYXRlX3N1cHBcIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9maW5cIjogXCIyMDE3LTEyLTMxXCIsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDE0LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcInN1cHBfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbF9lbmZcIjogNTBcblxuXG59XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9zdXBwX2pvdXJfZGlubmVyLzpzdXBwaWQgRGVsZXRlIHN1cHBfam91cl9kaW5uZXJcbiAgICogQGFwaU5hbWUgREVMRVRFc3VwcF9qb3VyX2Rpbm5lclxuICAgKiBAYXBpR3JvdXAgIHN1cHBfam91cl9kaW5uZXJcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IHN1cHBpZCBpZCBzdXBwX2pvdXJfZGlubmVyXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIG5icmVfY2hhbWJyZVxuXG4gIC8vbmJyZV9jaGFtYnJlXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIG5icmVfY2hhbWJyZU5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBuYnJlX2NoYW1icmVOb3RGb3VuZCAgPGNvZGU+bmJyZV9jaGFtYnJlPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcIm5icmVfY2hhbWJyZSBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9uYnJlX2NoYW1icmVzLzppZHBlcmlvZCAgQUxMIG5icmVfY2hhbWJyZXNcbiAqIEBhcGlOYW1lIEdldG5icmVfY2hhbWJyZXNcbiAqIEBhcGlHcm91cCAgbmJyZV9jaGFtYnJlIFxuICpcblxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHBlcmlvZCAgICAgICAgdW5pcXVlIElEUGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRuYnJlIHVuaXF1ZSBJRCBuYnJlX2NoYW1icmUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElEIHBlcmlvZCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByb29taWQgSUQgcm9vbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYnJlLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZGVsYXkgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGJlZ2luIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBlbmQgLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IHJvb20uXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiB7XG4gICAgICAgIFwiaWRuYnJlXCI6IDIzLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEwOCxcbiAgICAgICAgXCJuYnJlXCI6IDUsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiZGVsYXlcIjogMCxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwicm9vbVwiOiB7XG4gICAgICAgICAgICBcInJvb21uYW1lXCI6IFwiQ2hhbWJyZSBEb3VibGVcIixcbiAgICAgICAgICAgIFwicm9vbWlkXCI6IDJcbiAgICAgICAgfVxuICAgIH0sXG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIG5icmVfY2hhbWJyZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvbmJyZV9jaGFtYnJlLzppZG5icmUgR0VUIG5icmVfY2hhbWJyZVxuICogQGFwaU5hbWUgR2V0bmJyZV9jaGFtYnJlXG4gKiBAYXBpR3JvdXAgIG5icmVfY2hhbWJyZSBcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZG5icmUgICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkbmJyZSB1bmlxdWUgSUQgbmJyZV9jaGFtYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkbmJyZSB1bmlxdWUgSUQgbmJyZV9jaGFtYnJlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG5icmUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZGVsYXkgLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGJlZ2luIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBlbmQgLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG4ge1xuICAgICAgICBcImlkbmJyZVwiOiAyMyxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMDgsXG4gICAgICAgIFwibmJyZVwiOiA1LFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImRlbGF5XCI6IDAsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiXG4gICAgfSxcblxuICpcbiAqIEBhcGlVc2UgIG5icmVfY2hhbWJyZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL25icmVfY2hhbWJyZS8gUE9TVCBuYnJlX2NoYW1icmVcbiAqIEBhcGlOYW1lIFBPU1RuYnJlX2NoYW1icmVcbiAqIEBhcGlHcm91cCAgbmJyZV9jaGFtYnJlIFxuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4ge1xuICAgICBcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMDgsXG4gICAgICAgIFwibmJyZVwiOiA1LFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImRlbGF5XCI6IDAsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiXG4gICAgfVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gIHtcbiAgICAgICAgXCJpZG5icmVcIjogMjMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTA4LFxuICAgICAgICBcIm5icmVcIjogNSxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJkZWxheVwiOiAwLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIlxuICAgIH1cbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvbmJyZV9jaGFtYnJlLzppZG5icmUgUFVUIG5icmVfY2hhbWJyZVxuICogQGFwaU5hbWUgUFVUbmJyZV9jaGFtYnJlXG4gKiBAYXBpR3JvdXAgIG5icmVfY2hhbWJyZSBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRuYnJlICAgICAgICB1bmlxdWUgSUQuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbltcbiB7XG5cbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMDgsXG4gICAgICAgIFwibmJyZVwiOiA1LFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImRlbGF5XCI6IDAsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiXG4gICAgfVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiAgIHtcbiAgICAgICAgXCJpZG5icmVcIjogMjMsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTA4LFxuICAgICAgICBcIm5icmVcIjogNSxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJkZWxheVwiOiAwLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIlxuICAgIH1cbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL25icmVfY2hhbWJyZS86aWRuYnJlIERlbGV0ZSBuYnJlX2NoYW1icmVcbiAgICogQGFwaU5hbWUgREVMRVRFbmJyZV9jaGFtYnJlXG4gICAqIEBhcGlHcm91cCAgbmJyZV9jaGFtYnJlXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZG5icmUgaWQgbmJyZV9jaGFtYnJlXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIHN0b3BfdmVudGVcblxuICAvL2NydWRlIHN0b3BfdmVudGVcblxuICAvL3N0b3BfdmVudGVcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgc3RvcF92ZW50ZU5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBzdG9wX3ZlbnRlTm90Rm91bmQgIDxjb2RlPnN0b3BfdmVudGU8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwic3RvcF92ZW50ZSBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdG9wX3ZlbnRlcy86aWRwZXJpb2QgIEFMTCBzdG9wX3ZlbnRlc1xuICogQGFwaU5hbWUgR2V0c3RvcF92ZW50ZXNcbiAqIEBhcGlHcm91cCAgc3RvcF92ZW50ZSBcbiAqXG5cbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRwZXJpb2QgICAgICAgIHVuaXF1ZSBJRFBlcmlvZC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBzdG9wX3ZlbnRlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcGVyaW9kIHVuaXF1ZSBJRCBwZXJpb2QgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRhZ2VuY2UgSUQgYWdlbmNlIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Zyb20gLlxuICogQGFwaVN1Y2Nlc3Mge0RhdGV9IGRhdGVfdG8gLlxuICogQGFwaVN1Y2Nlc3Mge3Jvb219IHJvb20uXG4gKiBAYXBpU3VjY2VzcyB7YWdlbmNlfSBhZ2VuY2UuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiB7XG4gICAgICAgIFwiaWRcIjogNTA0LFxuICAgICAgICBcImlkcGVyaW9kXCI6IDYyNjMsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA2LTE1XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMDYtMTZcIixcbiAgICAgICAgXCJyb29tXCI6IG51bGwsXG4gICAgICAgIFwiYWdlbmNlXCI6IG51bGxcbiAgICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBzdG9wX3ZlbnRlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdG9wX3ZlbnRlLzppZCBHRVQgc3RvcF92ZW50ZVxuICogQGFwaU5hbWUgR2V0c3RvcF92ZW50ZVxuICogQGFwaUdyb3VwICBzdG9wX3ZlbnRlIFxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgc3RvcF92ZW50ZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkYWdlbmNlIElEIGFnZW5jZSAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZGF0ZV9mcm9tIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX3RvIC5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuIFxue1xuICAgICAgICBcImlkXCI6IDUwNCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiA2MjYzLFxuICAgICAgICBcImlkYWdlbmNlXCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDAsXG4gICAgICAgIFwiZGF0ZV9mcm9tXCI6IFwiMjAxOC0wNi0xNVwiLFxuICAgICAgICBcImRhdGVfdG9cIjogXCIyMDE4LTA2LTE2XCJcbiAgICB9XG4gKlxuICogQGFwaVVzZSAgc3RvcF92ZW50ZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3N0b3BfdmVudGUvIFBPU1Qgc3RvcF92ZW50ZVxuICogQGFwaU5hbWUgUE9TVHN0b3BfdmVudGVcbiAqIEBhcGlHcm91cCAgc3RvcF92ZW50ZSBcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuIFxuICAgICAgICBcImlkcGVyaW9kXCI6IDYyNjMsXG4gICAgICAgIFwiaWRhZ2VuY2VcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMCxcbiAgICAgICAgXCJkYXRlX2Zyb21cIjogXCIyMDE4LTA2LTE1XCIsXG4gICAgICAgIFwiZGF0ZV90b1wiOiBcIjIwMTgtMDYtMTZcIixcbiAgICAgICAgXCJyb29tXCI6IG51bGwsXG4gICAgICAgIFwiYWdlbmNlXCI6IG51bGxcbiAgICB9XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbntcbiAgICAgICAgXCJpZFwiOiA1MDQsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogNjI2MyxcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMDYtMTVcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0wNi0xNlwiXG4gICAgfVxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9zdG9wX3ZlbnRlLzppZCBQVVQgc3RvcF92ZW50ZVxuICogQGFwaU5hbWUgUFVUc3RvcF92ZW50ZVxuICogQGFwaUdyb3VwICBzdG9wX3ZlbnRlIFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG4gICAgICAgIFwiaWRwZXJpb2RcIjogNjI2MyxcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMDYtMTVcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0wNi0xNlwiXG4gICAgfVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbiAgIHtcbiAgICAgICAgXCJpZFwiOiA1MDQsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogNjI2MyxcbiAgICAgICAgXCJpZGFnZW5jZVwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAwLFxuICAgICAgICBcImRhdGVfZnJvbVwiOiBcIjIwMTgtMDYtMTVcIixcbiAgICAgICAgXCJkYXRlX3RvXCI6IFwiMjAxOC0wNi0xNlwiLFxuICAgICAgICBcInJvb21cIjogbnVsbCxcbiAgICAgICAgXCJhZ2VuY2VcIjogbnVsbFxuICAgIH1cbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL3N0b3BfdmVudGUvOmlkIERlbGV0ZSBzdG9wX3ZlbnRlXG4gICAqIEBhcGlOYW1lIERFTEVURXN0b3BfdmVudGVcbiAgICogQGFwaUdyb3VwICBzdG9wX3ZlbnRlXG4gICAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCBpZCBzdG9wX3ZlbnRlXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIHR5cGVfdGFyaWZcblxuICAvL3R5cGVfdGFyaWZcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgdHlwZV90YXJpZk5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICB0eXBlX3RhcmlmTm90Rm91bmQgIDxjb2RlPnR5cGVfdGFyaWY8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwidHlwZV90YXJpZiBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC90eXBlX3Rhcmlmcy86aWRwZXJpb2QgIEFMTCB0eXBlX3Rhcmlmc1xuICogQGFwaU5hbWUgR2V0dHlwZV90YXJpZnNcbiAqIEBhcGlHcm91cCAgdHlwZV90YXJpZiBcbiAqXG5cbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRwZXJpb2QgICAgICAgIHVuaXF1ZSBJRFBlcmlvZC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHR5cGV0YXJpZmlkIHVuaXF1ZSBJRCB0eXBlX3RhcmlmIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJvb21pZCBJRCByb29tIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkaG90ZWwgSUQgaG90ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcmFuZyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fcGVycyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfcGVycyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYWR1bHRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdHlwZV9jYWxjdWwgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN1cHBfd2Vla2VuZF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGx1bmRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1lcmNyZWRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGpldWRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZlbmRyZWRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHNhbWVkaSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBkaW1hbmNoZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfcyB2YWxldXIgc2luZ2xlXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHNpbmdsZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7aG90ZWx9IGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtyb29tfSByb29tLlxuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4ge1xuICAgICAgICBcInR5cGV0YXJpZmlkXCI6IDEsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJyYW5nXCI6IDAsXG4gICAgICAgIFwibWluX3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwibHVuZGlcIjogMCxcbiAgICAgICAgXCJtYXJkaVwiOiAwLFxuICAgICAgICBcIm1lcmNyZWRpXCI6IDAsXG4gICAgICAgIFwiamV1ZGlcIjogMCxcbiAgICAgICAgXCJ2ZW5kcmVkaVwiOiAwLFxuICAgICAgICBcInNhbWVkaVwiOiAwLFxuICAgICAgICBcImRpbWFuY2hlXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwic2luZ2xlXCI6IDAsXG4gICAgICAgIFwic3VwcF93ZWVrZW5kX3NpbmdsZVwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IHtcbiAgICAgICAgICAgIFwicm9vbW5hbWVcIjogXCJDaGFtYnJlIERvdWJsZVwiLFxuICAgICAgICAgICAgXCJyb29taWRcIjogMlxuICAgICAgICB9XG4gICAgfSxcblx0Li4uXG5dXG4gICogQGFwaVVzZSAgdHlwZV90YXJpZk5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvdHlwZV90YXJpZi86dHlwZXRhcmlmaWQgR0VUIHR5cGVfdGFyaWZcbiAqIEBhcGlOYW1lIEdldHR5cGVfdGFyaWZcbiAqIEBhcGlHcm91cCAgdHlwZV90YXJpZiBcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSB0eXBldGFyaWZpZCAgICAgICAgdW5pcXVlIElELlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdHlwZXRhcmlmaWQgdW5pcXVlIElEIHR5cGVfdGFyaWYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb24gMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByYW5nIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9wZXJzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9wZXJzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FkdWx0cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9lbmYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0eXBlX2NhbGN1bCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc3VwcF93ZWVrZW5kX3NpbmdsZSAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbHVuZGkgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZGkgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWVyY3JlZGkgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gamV1ZGkgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmVuZHJlZGkgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gc2FtZWRpIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGRpbWFuY2hlIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfcyB2YWxldXIgc2luZ2xlXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHNpbmdsZSAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gcm9vbS5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiB7XG4gICAgICAgIFwidHlwZXRhcmlmaWRcIjogMSxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcInJhbmdcIjogMCxcbiAgICAgICAgXCJtaW5fcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9wZXJzXCI6IDIsXG4gICAgICAgIFwibWF4X2FkdWx0c1wiOiAwLFxuICAgICAgICBcIm1pbl9hZHVsdHNcIjogMCxcbiAgICAgICAgXCJtaW5fZW5mXCI6IDAsXG4gICAgICAgIFwibWF4X2VuZlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJsdW5kaVwiOiAwLFxuICAgICAgICBcIm1hcmRpXCI6IDAsXG4gICAgICAgIFwibWVyY3JlZGlcIjogMCxcbiAgICAgICAgXCJqZXVkaVwiOiAwLFxuICAgICAgICBcInZlbmRyZWRpXCI6IDAsXG4gICAgICAgIFwic2FtZWRpXCI6IDAsXG4gICAgICAgIFwiZGltYW5jaGVcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJzaW5nbGVcIjogMCxcbiAgICAgICAgXCJzdXBwX3dlZWtlbmRfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJPbmUgUmVzb3J0IE1vbmFzdGlyXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjoge1xuICAgICAgICAgICAgXCJyb29tbmFtZVwiOiBcIkNoYW1icmUgRG91YmxlXCIsXG4gICAgICAgICAgICBcInJvb21pZFwiOiAyXG4gICAgICAgIH1cbiAgICB9LFxuXG4gKlxuICogQGFwaVVzZSAgdHlwZV90YXJpZk5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3R5cGVfdGFyaWYvIFBPU1QgdHlwZV90YXJpZlxuICogQGFwaU5hbWUgUE9TVHR5cGVfdGFyaWZcbiAqIEBhcGlHcm91cCAgdHlwZV90YXJpZiBcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJyYW5nXCI6IDAsXG4gICAgICAgIFwibWluX3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwibHVuZGlcIjogMCxcbiAgICAgICAgXCJtYXJkaVwiOiAwLFxuICAgICAgICBcIm1lcmNyZWRpXCI6IDAsXG4gICAgICAgIFwiamV1ZGlcIjogMCxcbiAgICAgICAgXCJ2ZW5kcmVkaVwiOiAwLFxuICAgICAgICBcInNhbWVkaVwiOiAwLFxuICAgICAgICBcImRpbWFuY2hlXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwic2luZ2xlXCI6IDAsXG4gICAgICAgIFwic3VwcF93ZWVrZW5kX3NpbmdsZVwiOiAwLFxuXG59XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiB7XG4gICAgICAgIFwidHlwZXRhcmlmaWRcIjogMSxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxLFxuICAgICAgICBcImlkaG90ZWxcIjogMSxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcInJhbmdcIjogMCxcbiAgICAgICAgXCJtaW5fcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9wZXJzXCI6IDIsXG4gICAgICAgIFwibWF4X2FkdWx0c1wiOiAwLFxuICAgICAgICBcIm1pbl9hZHVsdHNcIjogMCxcbiAgICAgICAgXCJtaW5fZW5mXCI6IDAsXG4gICAgICAgIFwibWF4X2VuZlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwidHlwZV9jYWxjdWxcIjogMCxcbiAgICAgICAgXCJsdW5kaVwiOiAwLFxuICAgICAgICBcIm1hcmRpXCI6IDAsXG4gICAgICAgIFwibWVyY3JlZGlcIjogMCxcbiAgICAgICAgXCJqZXVkaVwiOiAwLFxuICAgICAgICBcInZlbmRyZWRpXCI6IDAsXG4gICAgICAgIFwic2FtZWRpXCI6IDAsXG4gICAgICAgIFwiZGltYW5jaGVcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJzaW5nbGVcIjogMCxcbiAgICAgICAgXCJzdXBwX3dlZWtlbmRfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCJPbmUgUmVzb3J0IE1vbmFzdGlyXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjoge1xuICAgICAgICAgICAgXCJyb29tbmFtZVwiOiBcIkNoYW1icmUgRG91YmxlXCIsXG4gICAgICAgICAgICBcInJvb21pZFwiOiAyXG4gICAgICAgIH1cbn1cbl1cbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cHV0fSAvdHlwZV90YXJpZi86dHlwZXRhcmlmaWQgUFVUIHR5cGVfdGFyaWZcbiAqIEBhcGlOYW1lIFBVVHR5cGVfdGFyaWZcbiAqIEBhcGlHcm91cCAgdHlwZV90YXJpZiBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gdHlwZXRhcmlmaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJyYW5nXCI6IDAsXG4gICAgICAgIFwibWluX3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwibHVuZGlcIjogMCxcbiAgICAgICAgXCJtYXJkaVwiOiAwLFxuICAgICAgICBcIm1lcmNyZWRpXCI6IDAsXG4gICAgICAgIFwiamV1ZGlcIjogMCxcbiAgICAgICAgXCJ2ZW5kcmVkaVwiOiAwLFxuICAgICAgICBcInNhbWVkaVwiOiAwLFxuICAgICAgICBcImRpbWFuY2hlXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwic2luZ2xlXCI6IDAsXG4gICAgICAgIFwic3VwcF93ZWVrZW5kX3NpbmdsZVwiOiAwLFxuICAgICB9XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xuICAge1xuICAgICAgICBcInR5cGV0YXJpZmlkXCI6IDEsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMSxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDEsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJyYW5nXCI6IDAsXG4gICAgICAgIFwibWluX3BlcnNcIjogMixcbiAgICAgICAgXCJtYXhfcGVyc1wiOiAyLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInR5cGVfY2FsY3VsXCI6IDAsXG4gICAgICAgIFwibHVuZGlcIjogMCxcbiAgICAgICAgXCJtYXJkaVwiOiAwLFxuICAgICAgICBcIm1lcmNyZWRpXCI6IDAsXG4gICAgICAgIFwiamV1ZGlcIjogMCxcbiAgICAgICAgXCJ2ZW5kcmVkaVwiOiAwLFxuICAgICAgICBcInNhbWVkaVwiOiAwLFxuICAgICAgICBcImRpbWFuY2hlXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwic2luZ2xlXCI6IDAsXG4gICAgICAgIFwic3VwcF93ZWVrZW5kX3NpbmdsZVwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiT25lIFJlc29ydCBNb25hc3RpclwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IHtcbiAgICAgICAgICAgIFwicm9vbW5hbWVcIjogXCJDaGFtYnJlIERvdWJsZVwiLFxuICAgICAgICAgICAgXCJyb29taWRcIjogMlxuICAgICAgICB9XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC90eXBlX3RhcmlmLzp0eXBldGFyaWZpZCBEZWxldGUgdHlwZV90YXJpZlxuICAgKiBAYXBpTmFtZSBERUxFVEV0eXBlX3RhcmlmXG4gICAqIEBhcGlHcm91cCAgdHlwZV90YXJpZlxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gdHlwZXRhcmlmaWQgaWQgdHlwZV90YXJpZlxuICAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUge2pzb259IFN1Y2Nlc3NcbiAgICogICAgW11cbiAgICogQGFwaUVycm9yRXhhbXBsZSB7anNvbn0gRGVsZXRlIGVycm9yXG4gICAqICAgIEhUVFAvMS4xIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG5cbiAgLy9yZWR1Y3Rpb25fc2Vqb3VyXG4gIC8qKlxuICAgKiBAYXBpRGVmaW5lIHJlZHVjdGlvbl9zZWpvdXJOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgcmVkdWN0aW9uX3Nlam91ck5vdEZvdW5kICA8Y29kZT5yZWR1Y3Rpb25fc2Vqb3VyPC9jb2RlPiBwYXMgdHJvdXbDqWUuXG4gICAqXG4gICAqIEBhcGlFcnJvckV4YW1wbGUgRXJyb3ItUmVzcG9uc2U6XG4gICAqICAgICBIVFRQLzEuMSA0MDQgTm90IEZvdW5kXG4gICAqICAgICB7XG4gICAqICAgICAgIFwibWVzc2FnZVwiOiBcInJlZHVjdGlvbl9zZWpvdXIgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcmVkdWN0aW9uX3Nlam91cnMvOmlkcGVyaW9kICBBTEwgcmVkdWN0aW9uX3Nlam91cnNcbiAqIEBhcGlOYW1lIEdldHJlZHVjdGlvbl9zZWpvdXJzXG4gKiBAYXBpR3JvdXAgIHJlZHVjdGlvbl9zZWpvdXIgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzZWpvdXJpZCB1bmlxdWUgSUQgcmVkdWN0aW9uX3Nlam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSWRwZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbElkIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfc2luZ2xlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2IuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9udWl0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nZW1lbnR9IGFycmFuZ2VtZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgLlxuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuIHtcbiAgICAgICAgXCJzZWpvdXJpZFwiOiAyMjQzLFxuICAgICAgICBcImFycmlkXCI6IDIsXG4gICAgICAgIFwiaG90ZWxJZFwiOiAxMDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDIsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDYxODYsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDUsXG4gICAgICAgIFwibWF4X251aXRcIjogNixcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIkNoaWNoIEtoYW5cIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAxMDBcbiAgICAgICAgfSxcdFx0XG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJMb2dlbWVudCBQZXRpdCBEw6lqZXVuZXJcIixcbiAgICAgICAgICAgIFwiYXJyaWRcIjogMlxuICAgICAgICB9XG59LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICByZWR1Y3Rpb25fc2Vqb3VyTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9yZWR1Y3Rpb25fc2Vqb3VyLzpzZWpvdXJpZCBHRVQgcmVkdWN0aW9uX3Nlam91clxuICogQGFwaU5hbWUgR2V0cmVkdWN0aW9uX3Nlam91clxuICogQGFwaUdyb3VwICByZWR1Y3Rpb25fc2Vqb3VyIFxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IHNlam91cmlkICAgICAgICB1bmlxdWUgSUQuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBzZWpvdXJpZCB1bmlxdWUgSUQgcmVkdWN0aW9uX3Nlam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSWRwZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbElkIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfc2luZ2xlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2IuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9udWl0IDAvMSAuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICAgXCJzZWpvdXJpZFwiOiAyMjQzLFxuICAgIFwiYXJyaWRcIjogXCIyXCIsXG4gICAgXCJob3RlbElkXCI6IFwiMTAwXCIsXG4gICAgXCJwb3VyY2VudFwiOiAwLFxuICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgIFwidmFsZXVyXCI6IDIsXG4gICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgXCJpZHBlcmlvZFwiOiA2MTg2LFxuICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICBcIm1hcmdlX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICBcIm1pbl9udWl0XCI6IDUsXG4gICAgXCJtYXhfbnVpdFwiOiA2XG59XG5cbiAqXG4gKiBAYXBpVXNlICByZWR1Y3Rpb25fc2Vqb3VyTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvcmVkdWN0aW9uX3Nlam91ci8gUE9TVCByZWR1Y3Rpb25fc2Vqb3VyXG4gKiBAYXBpTmFtZSBQT1NUcmVkdWN0aW9uX3Nlam91clxuICogQGFwaUdyb3VwICByZWR1Y3Rpb25fc2Vqb3VyIFxuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4gXG57XG5cbiAgICBcImFycmlkXCI6IFwiMlwiLFxuICAgIFwiaG90ZWxJZFwiOiBcIjEwMFwiLFxuICAgIFwicG91cmNlbnRcIjogMCxcbiAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICBcInZhbGV1clwiOiAyLFxuICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgIFwiaWRwZXJpb2RcIjogNjE4NixcbiAgICBcIm1hcmdlX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgXCJtaW5fbnVpdFwiOiA1LFxuICAgIFwibWF4X251aXRcIjogNlxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gXG4gICAgXCJzZWpvdXJpZFwiOiAyMjQzLFxuICAgIFwiYXJyaWRcIjogXCIyXCIsXG4gICAgXCJob3RlbElkXCI6IFwiMTAwXCIsXG4gICAgXCJwb3VyY2VudFwiOiAwLFxuICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgIFwidmFsZXVyXCI6IDIsXG4gICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgXCJpZHBlcmlvZFwiOiA2MTg2LFxuICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICBcIm1hcmdlX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICBcIm1pbl9udWl0XCI6IDUsXG4gICAgXCJtYXhfbnVpdFwiOiA2LFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yM1QxNDoyNDo0My41NTNaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI0OjQzLjU1M1pcIlxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9yZWR1Y3Rpb25fc2Vqb3VyLzpzZWpvdXJpZCBQVVQgcmVkdWN0aW9uX3Nlam91clxuICogQGFwaU5hbWUgUFVUcmVkdWN0aW9uX3Nlam91clxuICogQGFwaUdyb3VwICByZWR1Y3Rpb25fc2Vqb3VyIFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBzZWpvdXJpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG5cbiAgICBcImFycmlkXCI6IFwiMlwiLFxuICAgIFwiaG90ZWxJZFwiOiBcIjEwMFwiLFxuICAgIFwicG91cmNlbnRcIjogMCxcbiAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICBcInZhbGV1clwiOiAyLFxuICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgIFwiaWRwZXJpb2RcIjogNjE4NixcbiAgICBcIm1hcmdlX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgXCJtaW5fbnVpdFwiOiA1LFxuICAgIFwibWF4X251aXRcIjogNlxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbntcbiAgICBcInNlam91cmlkXCI6IDIyNDMsXG4gICAgXCJhcnJpZFwiOiBcIjJcIixcbiAgICBcImhvdGVsSWRcIjogXCIxMDBcIixcbiAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgXCJ2YWxldXJcIjogMixcbiAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICBcImlkcGVyaW9kXCI6IDYxODYsXG4gICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgIFwibWluX251aXRcIjogNSxcbiAgICBcIm1heF9udWl0XCI6IDYsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI0OjQzLjU1M1pcIlxufVxuXVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvcmVkdWN0aW9uX3Nlam91ci86c2Vqb3VyaWQgRGVsZXRlIHJlZHVjdGlvbl9zZWpvdXJcbiAgICogQGFwaU5hbWUgREVMRVRFcmVkdWN0aW9uX3Nlam91clxuICAgKiBAYXBpR3JvdXAgIHJlZHVjdGlvbl9zZWpvdXJcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IHNlam91cmlkIGlkIHJlZHVjdGlvbl9zZWpvdXJcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vY3J1ZGUgcmVkdWN0aW9uX3Nlam91clxuXG4gIC8vc3VwcGxlbWVudF9zZWpvdXJcbiAgLyoqXG4gICAqIEBhcGlEZWZpbmUgc3VwcGxlbWVudF9zZWpvdXJOb3RGb3VuZEVycm9yXG4gICAqIEBhcGlFcnJvciAgc3VwcGxlbWVudF9zZWpvdXJOb3RGb3VuZCAgPGNvZGU+c3VwcGxlbWVudF9zZWpvdXI8L2NvZGU+IHBhcyB0cm91dsOpZS5cbiAgICpcbiAgICogQGFwaUVycm9yRXhhbXBsZSBFcnJvci1SZXNwb25zZTpcbiAgICogICAgIEhUVFAvMS4xIDQwNCBOb3QgRm91bmRcbiAgICogICAgIHtcbiAgICogICAgICAgXCJtZXNzYWdlXCI6IFwic3VwcGxlbWVudF9zZWpvdXIgcGFzIHRyb3V2w6llXCJcbiAgICogICAgIH1cbiAgICovXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcGxlbWVudF9zZWpvdXIvOmlkcGVyaW9kICBBTEwgc3VwcGxlbWVudF9zZWpvdXJcbiAqIEBhcGlOYW1lIEdldHN1cHBsZW1lbnRfc2Vqb3Vyc1xuICogQGFwaUdyb3VwICBzdXBwbGVtZW50X3Nlam91ciBcbiAqXG5cbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRwZXJpb2QgICAgICAgIHVuaXF1ZSBJRFBlcmlvZC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHNlam91cmlkIHVuaXF1ZSBJRCBzdXBwbGVtZW50X3Nlam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSWRwZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbElkIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfc2luZ2xlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2Vfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fc19jIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fbnVpdCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X251aXQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHthcnJhbmdlbWVudH0gYXJyYW5nZW1lbnQgLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBob3RlbCAgLlxuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xue1xuICAgICAgICBcInNlam91cmlkXCI6IDEsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJob3RlbElkXCI6IDM3LFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMjA4MCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMixcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiVGhhbGFzc2EgUmVzb3J0ICYgQXF1YXBhcmtcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzN1xuICAgICAgICB9LFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IG51bGxcbiAgICB9XG59LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICBzdXBwbGVtZW50X3Nlam91ck5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvc3VwcGxlbWVudF9zZWpvdXIvOnNlam91cmlkIEdFVCBzdXBwbGVtZW50X3Nlam91clxuICogQGFwaU5hbWUgR2V0c3VwcGxlbWVudF9zZWpvdXJcbiAqIEBhcGlHcm91cCAgc3VwcGxlbWVudF9zZWpvdXIgXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gc2Vqb3VyaWQgICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHNlam91cmlkIHVuaXF1ZSBJRCBzdXBwbGVtZW50X3Nlam91ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSWRwZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBob3RlbElkIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHZhbGV1ciAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfc2luZ2xlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfcyAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2MgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2IuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9udWl0IDAvMSAuXG4gXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICAgXCJzZWpvdXJpZFwiOiAxLFxuICAgIFwiYXJyaWRcIjogMCxcbiAgICBcImhvdGVsSWRcIjogMzcsXG4gICAgXCJwb3VyY2VudFwiOiAxLFxuICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgIFwidmFsZXVyXCI6IDEwLFxuICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgIFwiaWRwZXJpb2RcIjogMjA4MCxcbiAgICBcIm1hcmdlX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgXCJtaW5fbnVpdFwiOiAyLFxuICAgIFwibWF4X251aXRcIjogMFxufVxuXG4gKlxuICogQGFwaVVzZSAgc3VwcGxlbWVudF9zZWpvdXJOb3RGb3VuZEVycm9yXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3Bvc3R9IC9zdXBwbGVtZW50X3Nlam91ci8gUE9TVCBzdXBwbGVtZW50X3Nlam91clxuICogQGFwaU5hbWUgUE9TVHN1cHBsZW1lbnRfc2Vqb3VyXG4gKiBAYXBpR3JvdXAgIHN1cHBsZW1lbnRfc2Vqb3VyIFxuICpcblxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG4gXG57XG5cbiAgICBcImFycmlkXCI6IFwiMlwiLFxuICAgIFwiaG90ZWxJZFwiOiBcIjEwMFwiLFxuICAgIFwicG91cmNlbnRcIjogMCxcbiAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICBcInZhbGV1clwiOiAyLFxuICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgIFwiaWRwZXJpb2RcIjogNjE4NixcbiAgICBcIm1hcmdlX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgXCJtaW5fbnVpdFwiOiA1LFxuICAgIFwibWF4X251aXRcIjogNlxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gXG5cbiAgICBcInNlam91cmlkXCI6IDEsXG4gICAgXCJhcnJpZFwiOiAwLFxuICAgIFwiaG90ZWxJZFwiOiAzNyxcbiAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgXCJ2YWxldXJcIjogMTAsXG4gICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgXCJpZHBlcmlvZFwiOiAyMDgwLFxuICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICBcIm1hcmdlX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICBcIm1pbl9udWl0XCI6IDIsXG4gICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yM1QxNDoyNDo0My41NTNaXCIsXG4gICAgXCJjcmVhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI0OjQzLjU1M1pcIlxuXVxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwdXR9IC9zdXBwbGVtZW50X3Nlam91ci86c2Vqb3VyaWQgUFVUIHN1cHBsZW1lbnRfc2Vqb3VyXG4gKiBAYXBpTmFtZSBQVVRzdXBwbGVtZW50X3Nlam91clxuICogQGFwaUdyb3VwICBzdXBwbGVtZW50X3Nlam91ciBcbiAqXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gc2Vqb3VyaWQgICAgICAgIHVuaXF1ZSBJRC5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG4gICAgXCJhcnJpZFwiOiBcIjJcIixcbiAgICBcImhvdGVsSWRcIjogXCIxMDBcIixcbiAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgXCJ2YWxldXJcIjogMixcbiAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICBcImlkcGVyaW9kXCI6IDYxODYsXG4gICAgXCJtYXJnZV9iXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgIFwibWFyZ2VfY1wiOiAwLFxuICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgIFwibWluX251aXRcIjogNSxcbiAgICBcIm1heF9udWl0XCI6IDZcbn1cbl1cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuXG5bXG57XG5cbiAgICBcInNlam91cmlkXCI6IDEsXG4gICAgXCJhcnJpZFwiOiAwLFxuICAgIFwiaG90ZWxJZFwiOiAzNyxcbiAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgXCJ2YWxldXJcIjogMTAsXG4gICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgXCJpZHBlcmlvZFwiOiAyMDgwLFxuICAgIFwibWFyZ2VfYlwiOiAwLFxuICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICBcIm1hcmdlX2NcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICBcIm1pbl9udWl0XCI6IDIsXG4gICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgIFwidXBkYXRlZEF0XCI6IFwiMjAxOC0xMC0yM1QxNDoyNDo0My41NTNaXCJcbn1cbl1cblxuXG4gKi9cbiAgLyoqXG4gICAqIEBhcGkge2RlbGV0ZX0gL3N1cHBsZW1lbnRfc2Vqb3VyLzpzZWpvdXJpZCBEZWxldGUgc3VwcGxlbWVudF9zZWpvdXJcbiAgICogQGFwaU5hbWUgREVMRVRFc3VwcGxlbWVudF9zZWpvdXJcbiAgICogQGFwaUdyb3VwICBzdXBwbGVtZW50X3Nlam91clxuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gc2Vqb3VyaWQgaWQgc3VwcGxlbWVudF9zZWpvdXJcbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuXG4gIC8vY3J1ZGUgc3VwcGxlbWVudF9zZWpvdXJcblxuICAvL2NydWRlIHN1cHBfcGF4XG5cbiAgLy9zdXBwX3BheFxuICAvKipcbiAgICogQGFwaURlZmluZSBzdXBwX3BheE5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBzdXBwX3BheE5vdEZvdW5kICA8Y29kZT5zdXBwX3BheDwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJzdXBwX3BheCBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdXBwX3BheHMvOmlkcGVyaW9kICBBTEwgc3VwcF9wYXhzXG4gKiBAYXBpTmFtZSBHZXRzdXBwX3BheHNcbiAqIEBhcGlHcm91cCAgc3VwcF9wYXggXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgc3VwcF9wYXggLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJhZHVsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByYW5nIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGJlYmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2JlYmVzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FkdWx0cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZhbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkdWx0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBncmF0dWl0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIDAvMSAuXG4gICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkZF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdXRfc2Fpc29uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB0b3V0X2FkdWx0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nbWVudHN9IGFycmFuZ2VtZW50IC5cbiAqIEBhcGlTdWNjZXNzIHtob3RlbH0gaG90ZWwgLlxuXG5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbltcbiAge1xuICAgICAgICBcImlkXCI6IDYsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTI3NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDIwNyxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMjk0LFxuICAgICAgICBcIm5vbVwiOiBcIkFkdWx0ZXNcIixcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMTQwLFxuICAgICAgICBcIm5iYWR1bHRcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDMsXG4gICAgICAgIFwibWF4X2FkdWx0c1wiOiAzLFxuICAgICAgICBcInJhbmdcIjogMyxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcImJlYmVcIjogMCxcbiAgICAgICAgXCJtYXhfYmViZXNcIjogMSxcbiAgICAgICAgXCJlbmZhbnRcIjogMCxcbiAgICAgICAgXCJhZHVsdFwiOiAxLFxuICAgICAgICBcIm1pbl9hZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfYWdlXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJhZGRfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMSxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZ3JhdHVpdFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAxMixcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiTU9WRU5QSUNLIEdhbW1hcnRoXCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogMjA3XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjogbnVsbFxuICAgIH0sXG5cdC4uLlxuXVxuICAqIEBhcGlVc2UgIHN1cHBfcGF4Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9zdXBwX3BheC86aWQgR0VUIHN1cHBfcGF4XG4gKiBAYXBpTmFtZSBHZXRzdXBwX3BheFxuICogQGFwaUdyb3VwICBzdXBwX3BheCBcbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkIHVuaXF1ZSBJRCBzdXBwX3BheCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSWRwZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGNvbnRyYXQgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIC4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgc3VwcF9wYXggLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJhZHVsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByYW5nIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGJlYmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2JlYmVzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FkdWx0cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZhbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkdWx0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBncmF0dWl0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIDAvMSAuXG4gICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkZF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdXRfc2Fpc29uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJhZHVsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByYW5nIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGJlYmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2JlYmVzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FkdWx0cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZhbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkdWx0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBncmF0dWl0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX2IgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9iIDAvMSAuXG4gICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2MgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkZF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdXRfc2Fpc29uIDAvMSAuXG5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiB7XG4gICAgICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMjc0LFxuICAgICAgICBcImlkaG90ZWxcIjogMjA3LFxuICAgICAgICBcImlkY29udHJhdFwiOiAyOTQsXG4gICAgICAgIFwibm9tXCI6IFwiQWR1bHRlc1wiLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAxNDAsXG4gICAgICAgIFwibmJhZHVsdFwiOiAwLFxuICAgICAgICBcIm1pbl9hZHVsdHNcIjogMyxcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDMsXG4gICAgICAgIFwicmFuZ1wiOiAzLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwiYmViZVwiOiAwLFxuICAgICAgICBcIm1heF9iZWJlc1wiOiAxLFxuICAgICAgICBcImVuZmFudFwiOiAwLFxuICAgICAgICBcImFkdWx0XCI6IDEsXG4gICAgICAgIFwibWluX2FnZVwiOiAwLFxuICAgICAgICBcIm1heF9hZ2VcIjogMCxcbiAgICAgICAgXCJtaW5fZW5mXCI6IDAsXG4gICAgICAgIFwibWF4X2VuZlwiOiAwLFxuICAgICAgICBcImFkZF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAxLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJncmF0dWl0XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDEyLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDBcbn1cblxuICpcbiAqIEBhcGlVc2UgIHN1cHBfcGF4Tm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvc3VwcF9wYXgvIFBPU1Qgc3VwcF9wYXhcbiAqIEBhcGlOYW1lIFBPU1RzdXBwX3BheFxuICogQGFwaUdyb3VwICBzdXBwX3BheCBcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMTI3NCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDIwNyxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMjk0LFxuICAgICAgICBcIm5vbVwiOiBcIkFkdWx0ZXNcIixcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMCxcbiAgICAgICAgXCJ2YWxldXJcIjogMTQwLFxuICAgICAgICBcIm5iYWR1bHRcIjogMCxcbiAgICAgICAgXCJtaW5fYWR1bHRzXCI6IDMsXG4gICAgICAgIFwibWF4X2FkdWx0c1wiOiAzLFxuICAgICAgICBcInJhbmdcIjogMyxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAwLFxuICAgICAgICBcImJlYmVcIjogMCxcbiAgICAgICAgXCJtYXhfYmViZXNcIjogMSxcbiAgICAgICAgXCJlbmZhbnRcIjogMCxcbiAgICAgICAgXCJhZHVsdFwiOiAxLFxuICAgICAgICBcIm1pbl9hZ2VcIjogMCxcbiAgICAgICAgXCJtYXhfYWdlXCI6IDAsXG4gICAgICAgIFwibWluX2VuZlwiOiAwLFxuICAgICAgICBcIm1heF9lbmZcIjogMCxcbiAgICAgICAgXCJhZGRfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwidG91dF9zYWlzb25cIjogMSxcbiAgICAgICAgXCJiZWdpblwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZ3JhdHVpdFwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiAxMixcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJhcnJpZFwiOiAwLFxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMjc0LFxuICAgICAgICBcImlkaG90ZWxcIjogMjA3LFxuICAgICAgICBcImlkY29udHJhdFwiOiAyOTQsXG4gICAgICAgIFwibm9tXCI6IFwiQWR1bHRlc1wiLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInZhbGV1clwiOiAxNDAsXG4gICAgICAgIFwibmJhZHVsdFwiOiAwLFxuICAgICAgICBcIm1pbl9hZHVsdHNcIjogMyxcbiAgICAgICAgXCJtYXhfYWR1bHRzXCI6IDMsXG4gICAgICAgIFwicmFuZ1wiOiAzLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwiYmViZVwiOiAwLFxuICAgICAgICBcIm1heF9iZWJlc1wiOiAxLFxuICAgICAgICBcImVuZmFudFwiOiAwLFxuICAgICAgICBcImFkdWx0XCI6IDEsXG4gICAgICAgIFwibWluX2FnZVwiOiAwLFxuICAgICAgICBcIm1heF9hZ2VcIjogMCxcbiAgICAgICAgXCJtaW5fZW5mXCI6IDAsXG4gICAgICAgIFwibWF4X2VuZlwiOiAwLFxuICAgICAgICBcImFkZF9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAxLFxuICAgICAgICBcImJlZ2luXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJncmF0dWl0XCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDEyLFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcImFycmlkXCI6IDAsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI0OjQzLjU1M1pcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMjNUMTQ6MjQ6NDMuNTUzWlwiXG5dXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3N1cHBfcGF4LzppZCBQVVQgc3VwcF9wYXhcbiAqIEBhcGlOYW1lIFBVVHN1cHBfcGF4XG4gKiBAYXBpR3JvdXAgIHN1cHBfcGF4IFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG5cblxuICAgICAgICBcImlkcGVyaW9kXCI6IDEyNzQsXG4gICAgICAgIFwiaWRob3RlbFwiOiAyMDcsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDI5NCxcbiAgICAgICAgXCJub21cIjogXCJBZHVsdGVzXCIsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDE0MCxcbiAgICAgICAgXCJuYmFkdWx0XCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAzLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMyxcbiAgICAgICAgXCJyYW5nXCI6IDMsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJiZWJlXCI6IDAsXG4gICAgICAgIFwibWF4X2JlYmVzXCI6IDEsXG4gICAgICAgIFwiZW5mYW50XCI6IDAsXG4gICAgICAgIFwiYWR1bHRcIjogMSxcbiAgICAgICAgXCJtaW5fYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X2FnZVwiOiAwLFxuICAgICAgICBcIm1pbl9lbmZcIjogMCxcbiAgICAgICAgXCJtYXhfZW5mXCI6IDAsXG4gICAgICAgIFwiYWRkX3NpbmdsZVwiOiAwLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDEsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImdyYXR1aXRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMTIsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwiYXJyaWRcIjogMFxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbltcbntcbiAgICAgICAgXCJpZFwiOiA2LFxuICAgICAgICBcImlkcGVyaW9kXCI6IDEyNzQsXG4gICAgICAgIFwiaWRob3RlbFwiOiAyMDcsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDI5NCxcbiAgICAgICAgXCJub21cIjogXCJBZHVsdGVzXCIsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDAsXG4gICAgICAgIFwidmFsZXVyXCI6IDE0MCxcbiAgICAgICAgXCJuYmFkdWx0XCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAzLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMyxcbiAgICAgICAgXCJyYW5nXCI6IDMsXG4gICAgICAgIFwicG91cmNlbnRcIjogMCxcbiAgICAgICAgXCJiZWJlXCI6IDAsXG4gICAgICAgIFwibWF4X2JlYmVzXCI6IDEsXG4gICAgICAgIFwiZW5mYW50XCI6IDAsXG4gICAgICAgIFwiYWR1bHRcIjogMSxcbiAgICAgICAgXCJtaW5fYWdlXCI6IDAsXG4gICAgICAgIFwibWF4X2FnZVwiOiAwLFxuICAgICAgICBcIm1pbl9lbmZcIjogMCxcbiAgICAgICAgXCJtYXhfZW5mXCI6IDAsXG4gICAgICAgIFwiYWRkX3NpbmdsZVwiOiAwLFxuICAgICAgICBcInRvdXRfc2Fpc29uXCI6IDEsXG4gICAgICAgIFwiYmVnaW5cIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImdyYXR1aXRcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogMTIsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMjNUMTQ6MjY6NDAuNzMzWlwiXG59XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9zdXBwX3BheC86aWQgRGVsZXRlIHN1cHBfcGF4XG4gICAqIEBhcGlOYW1lIERFTEVURXN1cHBfcGF4XG4gICAqIEBhcGlHcm91cCAgc3VwcF9wYXhcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkIGlkIHN1cHBfcGF4XG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIHJlZHVjdGlvbl9jaGFtYnJlXG5cbiAgLy9yZWR1Y3Rpb25fY2hhbWJyZVxuICAvKipcbiAgICogQGFwaURlZmluZSByZWR1Y3Rpb25fY2hhbWJyZU5vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICByZWR1Y3Rpb25fY2hhbWJyZU5vdEZvdW5kICA8Y29kZT5yZWR1Y3Rpb25fY2hhbWJyZTwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJyZWR1Y3Rpb25fY2hhbWJyZSBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9yZWR1Y3Rpb25fY2hhbWJyZXMvOmlkcGVyaW9kICBBTEwgcmVkdWN0aW9uX2NoYW1icmVzXG4gKiBAYXBpTmFtZSBHZXRyZWR1Y3Rpb25fY2hhbWJyZXNcbiAqIEBhcGlHcm91cCAgcmVkdWN0aW9uX2NoYW1icmUgXG4gKlxuXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcGVyaW9kICAgICAgICB1bmlxdWUgSURQZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHJlZHVjdGlvbiB1bmlxdWUgSUQgcmVkdWN0aW9uX2NoYW1icmUgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgdW5pcXVlIElkcGVyaW9kLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRob3RlbCBJRCBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhcnJpZCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbmJhZHVsdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSByYW5nIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50IDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGJlYmUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2JlYmVzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZHVsdHMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2FkdWx0cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZhbnQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkdWx0IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fYWdlIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9hZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX2VuZiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFkZF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHRvdXRfc2Fpc29uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhbm51bF9zaW5nbGUgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGltcG9ydGFudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge2FycmFuZ21lbnRzfSBhcnJhbmdlbWVudCAuXG5cblxuIFxuICAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xuW1xuICB7XG4gICAgICAgIFwiaWRyZWR1Y3Rpb25cIjogNDYwMixcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAxMDAsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzMSxcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMzEsXG4gICAgICAgIFwiYXJyaWRcIjogMCxcbiAgICAgICAgXCJub21cIjogXCJFbmZhbnQgMiDDoCAxMiBhbnMgKyAxIGFkdWx0ZVwiLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInZhbGV1clwiOiAzMCxcbiAgICAgICAgXCJuYmFkdWx0XCI6IDAsXG4gICAgICAgIFwibWluX2FkdWx0c1wiOiAxLFxuICAgICAgICBcIm1heF9hZHVsdHNcIjogMSxcbiAgICAgICAgXCJyYW5nXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJiZWJlXCI6IDAsXG4gICAgICAgIFwibWF4X2JlYmVzXCI6IDEsXG4gICAgICAgIFwiZW5mYW50XCI6IDEsXG4gICAgICAgIFwiYWR1bHRcIjogMCxcbiAgICAgICAgXCJtaW5fYWdlXCI6IDIsXG4gICAgICAgIFwibWF4X2FnZVwiOiAxMixcbiAgICAgICAgXCJtaW5fZW5mXCI6IDEsXG4gICAgICAgIFwibWF4X2VuZlwiOiAyLFxuICAgICAgICBcImFkZF9zaW5nbGVcIjogMSxcbiAgICAgICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgICAgICBcImFubnVsX3NpbmdsZVwiOiAwLFxuICAgICAgICBcImltcG9ydGFudFwiOiAwLFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IG51bGxcbiAgICB9LFxuXHQuLi5cbl1cbiAgKiBAYXBpVXNlICByZWR1Y3Rpb25fY2hhbWJyZU5vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7Z2V0fSAvcmVkdWN0aW9uX2NoYW1icmUvOmlkcmVkdWN0aW9uIEdFVCByZWR1Y3Rpb25fY2hhbWJyZVxuICogQGFwaU5hbWUgR2V0cmVkdWN0aW9uX2NoYW1icmVcbiAqIEBhcGlHcm91cCAgcmVkdWN0aW9uX2NoYW1icmUgXG4gKiBAYXBpUGFyYW0ge051bWJlcn0gaWRyZWR1Y3Rpb24gICAgICAgIHVuaXF1ZSBJRC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGlkcmVkdWN0aW9uIHVuaXF1ZSBJRCByZWR1Y3Rpb25fY2hhbWJyZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHBlcmlvZCB1bmlxdWUgSWRwZXJpb2QuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGNvbnRyYXQgSUQgY29udHJhdCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIElEIGhvdGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFycmlkIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXIgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uIDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBuYmFkdWx0IC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHJhbmcgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnQgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYmViZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXhfYmViZXMgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2FkdWx0cyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fYWR1bHRzIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGVuZmFudCAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWR1bHQgMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1pbl9hZ2UgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X2FnZSAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtaW5fZW5mIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1heF9lbmYgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYWRkX3NpbmdsZSAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdG91dF9zYWlzb24gMC8xIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFubnVsX3NpbmdsZSAwLzEgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaW1wb3J0YW50IDAvMSAuXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nbWVudHN9IGFycmFuZ2VtZW50IC5cbiBcbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiB7XG4gICAgXCJpZHJlZHVjdGlvblwiOiA0NjAyLFxuICAgIFwiaWRwZXJpb2RcIjogMTAwLFxuICAgIFwiaWRob3RlbFwiOiAzMSxcbiAgICBcImlkY29udHJhdFwiOiAzMSxcbiAgICBcImFycmlkXCI6IDAsXG4gICAgXCJub21cIjogXCJFbmZhbnQgMiDDoCAxMiBhbnMgKyAxIGFkdWx0ZVwiLFxuICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgXCJ2YWxldXJcIjogMzAsXG4gICAgXCJuYmFkdWx0XCI6IDAsXG4gICAgXCJtaW5fYWR1bHRzXCI6IDEsXG4gICAgXCJtYXhfYWR1bHRzXCI6IDEsXG4gICAgXCJyYW5nXCI6IDAsXG4gICAgXCJwb3VyY2VudFwiOiAxLFxuICAgIFwiYmViZVwiOiAwLFxuICAgIFwibWF4X2JlYmVzXCI6IDEsXG4gICAgXCJlbmZhbnRcIjogMSxcbiAgICBcImFkdWx0XCI6IDAsXG4gICAgXCJtaW5fYWdlXCI6IDIsXG4gICAgXCJtYXhfYWdlXCI6IDEyLFxuICAgIFwibWluX2VuZlwiOiAxLFxuICAgIFwibWF4X2VuZlwiOiAyLFxuICAgIFwiYWRkX3NpbmdsZVwiOiAxLFxuICAgIFwiYWRkX2RvdWJsZVwiOiBudWxsLFxuICAgIFwidG91dF9zYWlzb25cIjogMCxcbiAgICBcImFubnVsX3NpbmdsZVwiOiAwLFxuICAgIFwiaW1wb3J0YW50XCI6IDBcbn1cblxuICpcbiAqIEBhcGlVc2UgIHJlZHVjdGlvbl9jaGFtYnJlTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtwb3N0fSAvcmVkdWN0aW9uX2NoYW1icmUvIFBPU1QgcmVkdWN0aW9uX2NoYW1icmVcbiAqIEBhcGlOYW1lIFBPU1RyZWR1Y3Rpb25fY2hhbWJyZVxuICogQGFwaUdyb3VwICByZWR1Y3Rpb25fY2hhbWJyZSBcbiAqXG5cblxuICogQGFwaVBhcmFtRXhhbXBsZSB7anNvbn0gUmVxdWVzdC1FeGFtcGxlOlxuW1xue1xuXG4gICAgXCJpZHBlcmlvZFwiOiAxMDAsXG4gICAgXCJpZGhvdGVsXCI6IDMxLFxuICAgIFwiaWRjb250cmF0XCI6IDMxLFxuICAgIFwiYXJyaWRcIjogMCxcbiAgICBcIm5vbVwiOiBcIkVuZmFudCAyIMOgIDEyIGFucyArIDEgYWR1bHRlXCIsXG4gICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICBcInZhbGV1clwiOiAzMCxcbiAgICBcIm5iYWR1bHRcIjogMCxcbiAgICBcIm1pbl9hZHVsdHNcIjogMSxcbiAgICBcIm1heF9hZHVsdHNcIjogMSxcbiAgICBcInJhbmdcIjogMCxcbiAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgXCJiZWJlXCI6IDAsXG4gICAgXCJtYXhfYmViZXNcIjogMSxcbiAgICBcImVuZmFudFwiOiAxLFxuICAgIFwiYWR1bHRcIjogMCxcbiAgICBcIm1pbl9hZ2VcIjogMixcbiAgICBcIm1heF9hZ2VcIjogMTIsXG4gICAgXCJtaW5fZW5mXCI6IDEsXG4gICAgXCJtYXhfZW5mXCI6IDIsXG4gICAgXCJhZGRfc2luZ2xlXCI6IDEsXG4gICAgXCJ0b3V0X3NhaXNvblwiOiAwLFxuICAgIFwiYW5udWxfc2luZ2xlXCI6IDAsXG4gICAgXCJpbXBvcnRhbnRcIjogMFxufVxuXVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gIFwiaWRjb250cmF0XCI6IFwiMFwiLFxuICAgIFwiaWRyZWR1Y3Rpb25cIjogMTg4NzIsXG4gICAgXCJpZGhvdGVsXCI6IFwiMzNcIixcbiAgICBcImlkcGVyaW9kXCI6IFwiNVwiLFxuICAgIFwiYXJyaWRcIjogXCIyXCIsXG4gICAgXCJub21cIjogXCJ0ZXN0XCIsXG4gICAgXCJvcGVyYXRpb25cIjogXCIxXCIsXG4gICAgXCJ2YWxldXJcIjogXCIzMFwiLFxuICAgIFwibmJhZHVsdFwiOiBcIjBcIixcbiAgICBcIm1pbl9hZHVsdHNcIjogXCIxXCIsXG4gICAgXCJtYXhfYWR1bHRzXCI6IFwiMVwiLFxuICAgIFwicmFuZ1wiOiBcIjBcIixcbiAgICBcInBvdXJjZW50XCI6IFwiMVwiLFxuICAgIFwiYmViZVwiOiBcIjBcIixcbiAgICBcIm1heF9iZWJlc1wiOiBcIjFcIixcbiAgICBcImVuZmFudFwiOiBcIjFcIixcbiAgICBcImFkdWx0XCI6IFwiMFwiLFxuICAgIFwibWluX2FnZVwiOiBcIjJcIixcbiAgICBcIm1heF9hZ2VcIjogXCIxMlwiLFxuICAgIFwibWluX2VuZlwiOiBcIjFcIixcbiAgICBcIm1heF9lbmZcIjogXCIyXCIsXG4gICAgXCJhZGRfc2luZ2xlXCI6IFwiMVwiLFxuICAgIFwidG91dF9zYWlzb25cIjogXCIwXCIsXG4gICAgXCJhbm51bF9zaW5nbGVcIjogXCIwXCIsXG4gICAgXCJpbXBvcnRhbnRcIjogXCIwXCIsXG4gICAgXCJ1cGRhdGVkQXRcIjogXCIyMDE4LTEwLTIzVDE0OjI0OjQzLjU1M1pcIixcbiAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTgtMTAtMjNUMTQ6MjQ6NDMuNTUzWlwiXG5dXG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3JlZHVjdGlvbl9jaGFtYnJlLzppZHJlZHVjdGlvbiBQVVQgcmVkdWN0aW9uX2NoYW1icmVcbiAqIEBhcGlOYW1lIFBVVHJlZHVjdGlvbl9jaGFtYnJlXG4gKiBAYXBpR3JvdXAgIHJlZHVjdGlvbl9jaGFtYnJlIFxuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZHJlZHVjdGlvbiAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG5bXG57XG5cbiAgICBcImlkcGVyaW9kXCI6IDEwMCxcbiAgICBcImlkaG90ZWxcIjogMzEsXG4gICAgXCJpZGNvbnRyYXRcIjogMzEsXG4gICAgXCJhcnJpZFwiOiAwLFxuICAgIFwibm9tXCI6IFwiRW5mYW50IDIgw6AgMTIgYW5zICsgMSBhZHVsdGVcIixcbiAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgIFwidmFsZXVyXCI6IDMwLFxuICAgIFwibmJhZHVsdFwiOiAwLFxuICAgIFwibWluX2FkdWx0c1wiOiAxLFxuICAgIFwibWF4X2FkdWx0c1wiOiAxLFxuICAgIFwicmFuZ1wiOiAwLFxuICAgIFwicG91cmNlbnRcIjogMSxcbiAgICBcImJlYmVcIjogMCxcbiAgICBcIm1heF9iZWJlc1wiOiAxLFxuICAgIFwiZW5mYW50XCI6IDEsXG4gICAgXCJhZHVsdFwiOiAwLFxuICAgIFwibWluX2FnZVwiOiAyLFxuICAgIFwibWF4X2FnZVwiOiAxMixcbiAgICBcIm1pbl9lbmZcIjogMSxcbiAgICBcIm1heF9lbmZcIjogMixcbiAgICBcImFkZF9zaW5nbGVcIjogMSxcbiAgICBcInRvdXRfc2Fpc29uXCI6IDAsXG4gICAgXCJhbm51bF9zaW5nbGVcIjogMCxcbiAgICBcImltcG9ydGFudFwiOiAwXG59XG5dXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcblxuW1xue1xuICAgIFwiaWRyZWR1Y3Rpb25cIjogMTg4NzIsXG4gICAgXCJpZHBlcmlvZFwiOiBcIjVcIixcbiAgICBcImlkaG90ZWxcIjogXCIzM1wiLFxuICAgIFwiaWRjb250cmF0XCI6IDAsXG4gICAgXCJhcnJpZFwiOiBcIjJcIixcbiAgICBcIm5vbVwiOiBcInRlc3RcIixcbiAgICBcIm9wZXJhdGlvblwiOiBcIjFcIixcbiAgICBcInZhbGV1clwiOiBcIjMwXCIsXG4gICAgXCJuYmFkdWx0XCI6IFwiMFwiLFxuICAgIFwibWluX2FkdWx0c1wiOiBcIjFcIixcbiAgICBcIm1heF9hZHVsdHNcIjogXCIxXCIsXG4gICAgXCJyYW5nXCI6IFwiMFwiLFxuICAgIFwicG91cmNlbnRcIjogXCIxXCIsXG4gICAgXCJiZWJlXCI6IFwiMFwiLFxuICAgIFwibWF4X2JlYmVzXCI6IFwiMVwiLFxuICAgIFwiZW5mYW50XCI6IFwiMVwiLFxuICAgIFwiYWR1bHRcIjogXCIwXCIsXG4gICAgXCJtaW5fYWdlXCI6IFwiMlwiLFxuICAgIFwibWF4X2FnZVwiOiBcIjEyXCIsXG4gICAgXCJtaW5fZW5mXCI6IFwiMVwiLFxuICAgIFwibWF4X2VuZlwiOiBcIjJcIixcbiAgICBcImFkZF9zaW5nbGVcIjogXCIxXCIsXG4gICAgXCJ0b3V0X3NhaXNvblwiOiBcIjBcIixcbiAgICBcImFubnVsX3NpbmdsZVwiOiBcIjBcIixcbiAgICBcImltcG9ydGFudFwiOiBcIjBcIixcbiAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMTgtMTAtMjNUMTQ6MjY6NDAuNzMzWlwiXG59XG5dXG5cblxuICovXG4gIC8qKlxuICAgKiBAYXBpIHtkZWxldGV9IC9yZWR1Y3Rpb25fY2hhbWJyZS86aWRyZWR1Y3Rpb24gRGVsZXRlIHJlZHVjdGlvbl9jaGFtYnJlXG4gICAqIEBhcGlOYW1lIERFTEVURXJlZHVjdGlvbl9jaGFtYnJlXG4gICAqIEBhcGlHcm91cCAgcmVkdWN0aW9uX2NoYW1icmVcbiAgICogQGFwaVBhcmFtIHtOdW1iZXJ9IGlkcmVkdWN0aW9uIGlkIHJlZHVjdGlvbl9jaGFtYnJlXG4gICAqIEBhcGlTdWNjZXNzRXhhbXBsZSB7anNvbn0gU3VjY2Vzc1xuICAgKiAgICBbXVxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIHtqc29ufSBEZWxldGUgZXJyb3JcbiAgICogICAgSFRUUC8xLjEgNTAwIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cblxuICAvL2NydWRlIHByb21vXG5cbiAgLy9wcm9tb1xuICAvKipcbiAgICogQGFwaURlZmluZSBwcm9tb05vdEZvdW5kRXJyb3JcbiAgICogQGFwaUVycm9yICBwcm9tb05vdEZvdW5kICA8Y29kZT5Qcm9tbzwvY29kZT4gcGFzIHRyb3V2w6llLlxuICAgKlxuICAgKiBAYXBpRXJyb3JFeGFtcGxlIEVycm9yLVJlc3BvbnNlOlxuICAgKiAgICAgSFRUUC8xLjEgNDA0IE5vdCBGb3VuZFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIm1lc3NhZ2VcIjogXCJQcm9tbyBwYXMgdHJvdXbDqWVcIlxuICAgKiAgICAgfVxuICAgKi9cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9wcm9tb3MvICBBTEwgUHJvbW9zXG4gKiBAYXBpTmFtZSBHZXRwcm9tb3NcbiAqIEBhcGlHcm91cCAgUHJvbW9zXG4gKlxuXG4gKlxuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgUHJvbW8gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIHZhbGV1ciBkZSBwcm9tby5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfc2luZ2xlIHZhbGV1ciBzaW5nbGUgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIG1hcmdlIGIyYiBkZSBwcm9tby5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyBtYXJnZSBiMmMgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IgbWFyZ2Ugc2luZ2xlIGIyYiBkZSBwcm9tby5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX3NfYyBtYXJnZSBzaW5nbGUgYjJjIGRlIHByb21vLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgbWluIGRlIG51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X251aXQgbWF4IGRlIG51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgYXJyYW5nZW1lbnQgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2FsY3VsX3N1cHAgY2FsY3VsIHN1cHBsZW1lbnQgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBtb2RlbGUgaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gbW9kZWxlIHJvb20uXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nZW1lbnR9IG1vZGVsZSBhcnJhbmdlbWVudHMuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gYmVnaW4gZGF0ZSBkZWJ1dCBwcm9tbyAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZW5kIGRhdGUgZmluIHByb21vIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Jvb2tpbmcgZGF0ZSBhdmFudCBwcm9tbyAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5bXG4gICAge1xuICAgICAgICBcImlkXCI6IDI2LFxuICAgICAgICBcImlkY29udHJhdFwiOiAwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDAsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogNSxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJhcnJpZFwiOiAzLFxuICAgICAgICBcImJlZ2luXCI6IFwiMjAxNy0xMC0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjIwMTctMTAtMzFcIixcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiB7XG4gICAgICAgICAgICBcInJvb21uYW1lXCI6IFwiQ2hhbWJyZSBEb3VibGVcIixcbiAgICAgICAgICAgIFwicm9vbWlkXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiB7XG4gICAgICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkRlbWkgUGVuc2lvblwiLFxuICAgICAgICAgICAgXCJhcnJJZFwiOiAzXG4gICAgICAgIH1cbiAgICB9LFxuXHQuLi5cblx0XVxuICAqIEBhcGlVc2UgIHByb21vTm90Rm91bmRFcnJvclxuICovXG5cbiAgLyoqXG4gKiBAYXBpIHtnZXR9IC9wcm9tby86aWQgR0VUIFByb21vXG4gKiBAYXBpTmFtZSBHZXRwcm9tb1xuICogQGFwaUdyb3VwICBQcm9tb3NcbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZCB1bmlxdWUgSUQgUHJvbW8gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRjb250cmF0IElEIGNvbnRyYXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gaWRwZXJpb2QgSUQgcGVyaW9kIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IG5vbSAgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gdmFsZXVyIHZhbGV1ciBkZSBwcm9tby5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSB2YWxldXJfc2luZ2xlIHZhbGV1ciBzaW5nbGUgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fcyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9iIG1hcmdlIGIyYiBkZSBwcm9tby5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50X2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyBtYXJnZSBiMmMgZGUgcHJvbW8uXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jIC4gXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBtYXJnZV9zX2IgbWFyZ2Ugc2luZ2xlIGIyYiBkZSBwcm9tby5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbl9zX2IgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcG91cmNlbnRfc19iIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG1hcmdlX3NfYyBtYXJnZSBzaW5nbGUgYjJjIGRlIHByb21vLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gb3BlcmF0aW9uX3NfYyAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9zX2MgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWluX251aXQgbWluIGRlIG51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWF4X251aXQgbWF4IGRlIG51aXQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gcm9vbWlkIElEIHJvb20gLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gYXJyaWQgYXJyYW5nZW1lbnQgSUQgLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2FsY3VsX3N1cHAgY2FsY3VsIHN1cHBsZW1lbnQgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge2hvdGVsfSBtb2RlbGUgaG90ZWwuXG4gKiBAYXBpU3VjY2VzcyB7cm9vbX0gbW9kZWxlIHJvb20uXG4gKiBAYXBpU3VjY2VzcyB7YXJyYW5nZW1lbnR9IG1vZGVsZSBhcnJhbmdlbWVudHMuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gYmVnaW4gZGF0ZSBkZWJ1dCBwcm9tbyAuXG4gKiBAYXBpU3VjY2VzcyB7RGF0ZX0gZW5kIGRhdGUgZmluIHByb21vIC5cbiAqIEBhcGlTdWNjZXNzIHtEYXRlfSBkYXRlX2Jvb2tpbmcgZGF0ZSBhdmFudCBwcm9tbyAuXG4gXG4gICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG4gXG57XG4gICAgICAgIFwiaWRcIjogMjYsXG4gICAgICAgIFwiaWRjb250cmF0XCI6IDAsXG4gICAgICAgIFwiaWRwZXJpb2RcIjogMCxcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiA1LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImFycmlkXCI6IDMsXG4gICAgICAgIFwiYmVnaW5cIjogXCIyMDE3LTEwLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMjAxNy0xMC0zMVwiLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxLFxuICAgICAgICBcImNyZWF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcInVwZGF0ZWRBdFwiOiBudWxsLFxuICAgICAgICBcImhvdGVsXCI6IHtcbiAgICAgICAgICAgIFwibm9tXCI6IFwiIFJhZGlzc29uIEJsdSBIYW1tYW1ldFwiLFxuICAgICAgICAgICAgXCJpZGhvdGVsXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb29tXCI6IHtcbiAgICAgICAgICAgIFwicm9vbW5hbWVcIjogXCJDaGFtYnJlIERvdWJsZVwiLFxuICAgICAgICAgICAgXCJyb29taWRcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImFycmFuZ2VtZW50XCI6IHtcbiAgICAgICAgICAgIFwiYXJyYW5nZW1lbnRzXCI6IFwiRGVtaSBQZW5zaW9uXCIsXG4gICAgICAgICAgICBcImFycklkXCI6IDNcbiAgICAgICAgfVxuICAgIH1cbiAqXG4gKiBAYXBpVXNlICBwcm9tb05vdEZvdW5kRXJyb3JcbiAqL1xuXG4gIC8qKlxuICogQGFwaSB7cG9zdH0gL3Byb21vLyBQT1NUIFByb21vXG4gKiBAYXBpTmFtZSBQT1NUcHJvbW9cbiAqIEBhcGlHcm91cCAgUHJvbW9zXG4gKlxuXG5cbiAqIEBhcGlQYXJhbUV4YW1wbGUge2pzb259IFJlcXVlc3QtRXhhbXBsZTpcbiAgICB7XG5cbntcblxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJcIixcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMyxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiYXJyaWRcIjogMyxcbiAgICAgICAgXCJiZWdpblwiOiBcIjIwMTctMTAtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIyMDE3LTEwLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImNhbGN1bF9zdXBwXCI6IDFcblxuICAgIH1cbiAgICB9XG5cbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzLVJlc3BvbnNlOlxuICogICAgIEhUVFAvMS4xIDIwMCBPS1xue1xuICAgICAgICBcImlkXCI6IDI2LFxuICAgICAgICBcImlkY29udHJhdFwiOiAwLFxuICAgICAgICBcImlkcGVyaW9kXCI6IDAsXG4gICAgICAgIFwiaWRob3RlbFwiOiAzLFxuICAgICAgICBcInZhbGV1clwiOiAxMCxcbiAgICAgICAgXCJvcGVyYXRpb25cIjogMSxcbiAgICAgICAgXCJwb3VyY2VudFwiOiAxLFxuICAgICAgICBcIm5vbVwiOiBcIlwiLFxuICAgICAgICBcInBvdXJjZW50X3NcIjogMCxcbiAgICAgICAgXCJ2YWxldXJfc2luZ2xlXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfYlwiOiAzLFxuICAgICAgICBcIm9wZXJhdGlvbl9iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX2NcIjogNSxcbiAgICAgICAgXCJvcGVyYXRpb25fY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2NcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2JcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19iXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19iXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfY1wiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfY1wiOiAwLFxuICAgICAgICBcIm1pbl9udWl0XCI6IDEsXG4gICAgICAgIFwibWF4X251aXRcIjogMCxcbiAgICAgICAgXCJyb29taWRcIjogMixcbiAgICAgICAgXCJhcnJpZFwiOiAzLFxuICAgICAgICBcImJlZ2luXCI6IFwiMjAxNy0xMC0wMVwiLFxuICAgICAgICBcImVuZFwiOiBcIjIwMTctMTAtMzFcIixcbiAgICAgICAgXCJkYXRlX2Jvb2tpbmdcIjogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgIFwiY2FsY3VsX3N1cHBcIjogMSxcbiAgICAgICAgXCJjcmVhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJ1cGRhdGVkQXRcIjogbnVsbCxcbiAgICAgICAgXCJob3RlbFwiOiB7XG4gICAgICAgICAgICBcIm5vbVwiOiBcIiBSYWRpc3NvbiBCbHUgSGFtbWFtZXRcIixcbiAgICAgICAgICAgIFwiaWRob3RlbFwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vbVwiOiB7XG4gICAgICAgICAgICBcInJvb21uYW1lXCI6IFwiQ2hhbWJyZSBEb3VibGVcIixcbiAgICAgICAgICAgIFwicm9vbWlkXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcnJhbmdlbWVudFwiOiB7XG4gICAgICAgICAgICBcImFycmFuZ2VtZW50c1wiOiBcIkRlbWkgUGVuc2lvblwiLFxuICAgICAgICAgICAgXCJhcnJJZFwiOiAzXG4gICAgICAgIH1cbiAgICB9XG4gKi9cblxuICAvKipcbiAqIEBhcGkge3B1dH0gL3Byb21vLzppZCBQVVQgUHJvbW9cbiAqIEBhcGlOYW1lIFBVVHByb21vXG4gKiBAYXBpR3JvdXAgIFByb21vc1xuICpcbiAqIEBhcGlQYXJhbSB7TnVtYmVyfSBpZCAgICAgICAgdW5pcXVlIElELlxuXG4gKiBAYXBpUGFyYW1FeGFtcGxlIHtqc29ufSBSZXF1ZXN0LUV4YW1wbGU6XG57XG4gICAgICBcbiAgICAgICAgXCJpZGhvdGVsXCI6IDMsXG4gICAgICAgIFwidmFsZXVyXCI6IDEwLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAxLFxuICAgICAgICBcInBvdXJjZW50XCI6IDEsXG4gICAgICAgIFwibm9tXCI6IFwiXCIsXG4gICAgICAgIFwicG91cmNlbnRfc1wiOiAwLFxuICAgICAgICBcInZhbGV1cl9zaW5nbGVcIjogMCxcbiAgICAgICAgXCJtYXJnZV9iXCI6IDMsXG4gICAgICAgIFwib3BlcmF0aW9uX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9iXCI6IDAsXG4gICAgICAgIFwibWFyZ2VfY1wiOiA1LFxuICAgICAgICBcIm9wZXJhdGlvbl9jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfY1wiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfYlwiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2JcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9zX2NcIjogMCxcbiAgICAgICAgXCJvcGVyYXRpb25fc19jXCI6IDAsXG4gICAgICAgIFwicG91cmNlbnRfc19jXCI6IDAsXG4gICAgICAgIFwibWluX251aXRcIjogMSxcbiAgICAgICAgXCJtYXhfbnVpdFwiOiAwLFxuICAgICAgICBcInJvb21pZFwiOiAyLFxuICAgICAgICBcImFycmlkXCI6IDMsXG4gICAgICAgIFwiYmVnaW5cIjogXCIyMDE3LTEwLTAxXCIsXG4gICAgICAgIFwiZW5kXCI6IFwiMjAxNy0xMC0zMVwiLFxuICAgICAgICBcImRhdGVfYm9va2luZ1wiOiBcIjE5NzAtMDEtMDFcIixcbiAgICAgICAgXCJjYWxjdWxfc3VwcFwiOiAxXG4gICAgICBcbiAgICB9LFxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MtUmVzcG9uc2U6XG4gKiAgICAgSFRUUC8xLjEgMjAwIE9LXG5cbntcbiAgICAgICAgXCJpZFwiOiAyNixcbiAgICAgICAgXCJpZGNvbnRyYXRcIjogMCxcbiAgICAgICAgXCJpZHBlcmlvZFwiOiAwLFxuICAgICAgICBcImlkaG90ZWxcIjogMyxcbiAgICAgICAgXCJ2YWxldXJcIjogMTAsXG4gICAgICAgIFwib3BlcmF0aW9uXCI6IDEsXG4gICAgICAgIFwicG91cmNlbnRcIjogMSxcbiAgICAgICAgXCJub21cIjogXCJcIixcbiAgICAgICAgXCJwb3VyY2VudF9zXCI6IDAsXG4gICAgICAgIFwidmFsZXVyX3NpbmdsZVwiOiAwLFxuICAgICAgICBcIm1hcmdlX2JcIjogMyxcbiAgICAgICAgXCJvcGVyYXRpb25fYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X2JcIjogMCxcbiAgICAgICAgXCJtYXJnZV9jXCI6IDUsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwibWFyZ2Vfc19iXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX3NfYlwiOiAwLFxuICAgICAgICBcInBvdXJjZW50X3NfYlwiOiAwLFxuICAgICAgICBcIm1hcmdlX3NfY1wiOiAwLFxuICAgICAgICBcIm9wZXJhdGlvbl9zX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9zX2NcIjogMCxcbiAgICAgICAgXCJtaW5fbnVpdFwiOiAxLFxuICAgICAgICBcIm1heF9udWl0XCI6IDAsXG4gICAgICAgIFwicm9vbWlkXCI6IDIsXG4gICAgICAgIFwiYXJyaWRcIjogMyxcbiAgICAgICAgXCJiZWdpblwiOiBcIjIwMTctMTAtMDFcIixcbiAgICAgICAgXCJlbmRcIjogXCIyMDE3LTEwLTMxXCIsXG4gICAgICAgIFwiZGF0ZV9ib29raW5nXCI6IFwiMTk3MC0wMS0wMVwiLFxuICAgICAgICBcImNhbGN1bF9zdXBwXCI6IDEsXG4gICAgICAgIFwiY3JlYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwidXBkYXRlZEF0XCI6IG51bGwsXG4gICAgICAgIFwiaG90ZWxcIjoge1xuICAgICAgICAgICAgXCJub21cIjogXCIgUmFkaXNzb24gQmx1IEhhbW1hbWV0XCIsXG4gICAgICAgICAgICBcImlkaG90ZWxcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInJvb21cIjoge1xuICAgICAgICAgICAgXCJyb29tbmFtZVwiOiBcIkNoYW1icmUgRG91YmxlXCIsXG4gICAgICAgICAgICBcInJvb21pZFwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJyYW5nZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJhcnJhbmdlbWVudHNcIjogXCJEZW1pIFBlbnNpb25cIixcbiAgICAgICAgICAgIFwiYXJySWRcIjogM1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAqL1xuICAvKipcbiAgICogQGFwaSB7ZGVsZXRlfSAvcHJvbW8vOmlkIERlbGV0ZSBQcm9tb1xuICAgKiBAYXBpTmFtZSBERUxFVEVwcm9tb1xuICAgKiBAYXBpR3JvdXAgIFByb21vc1xuICAgKiBAYXBpUGFyYW0ge051bWJlcn0gaWQgaWQgUHJvbW9cbiAgICogQGFwaVN1Y2Nlc3NFeGFtcGxlIHtqc29ufSBTdWNjZXNzXG4gICAqICAgIFtdXG4gICAqIEBhcGlFcnJvckV4YW1wbGUge2pzb259IERlbGV0ZSBlcnJvclxuICAgKiAgICBIVFRQLzEuMSA1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuICAvKipcbiAqIEBhcGkge2dldH0gL2hvdGVsL3ZpbGxlcy86aWR2aWxsZSBHRVQgSG90ZWxzVmlsbGVcbiAqIEBhcGlOYW1lIEdldEhvdGVsVmlsbGVcbiAqIEBhcGlHcm91cCAgSG90ZWxzXG4gKlxuICogQGFwaVBhcmFtIHtOdW1iZXJ9ICBpZHZpbGxlIHZpbGxlIHVuaXF1ZSBJRC5cbiAqXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZGhvdGVsIHVuaXF1ZSBJRCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBpZHZpbGxlIHVuaXF1ZSBJRCB2aWxsZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBsb2dpbiAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBub20gIChvYmxpZ2F0b2lyZSkuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0dmEgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gYWRyZXNzZSAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBpbmZvIGluZm9ybWF0aW9uIHN1cHBsw6ltZW50YWlyZS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxpZW4gdXJsIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBlbWFpbCBow7R0ZWwgKG9ibGlnYXRvaXJlKS5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGVtYWlsMiBow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gZmF4IGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSB0ZWwgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGxvZ2ljaWVsIHV0aWxpc8OpZSBwYXIgbCdow7R0ZWwgLlxuICogQGFwaVN1Y2Nlc3Mge1N0cmluZ30gbWFwIGjDtHRlbCAuXG4gKiBAYXBpU3VjY2VzcyB7U3RyaW5nfSBtYXAgaMO0dGVsIC5cbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IGNob2l4X2VtYWlsICBSZXNhL0dtYWlsIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGVuZl9taW4gIGFnZSBlbmZhbnQgbWluIDAvMTIuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBlbmZfbWF4ICBhZ2UgZW5mYW50IG1heCAwLzE2LlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2UgIG1hcmdlIHBhciBob3RlbC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IG9wZXJhdGlvbiAgb3BlcmF0aW9uIGRlIG1hcmdlIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHBvdXJjZW50ICBwb3VyY2VudCBkZSBtYXJnZSAwLzEuXG4gICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gbWFyZ2VfYyAgbWFyZ2UgYjJjIHBhciBob3RlbCAuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBvcGVyYXRpb25fYyAgb3BlcmF0aW9uIGIyYyBkZSBtYXJnZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBwb3VyY2VudF9jICBwb3VyY2VudCBkZSBtYXJnZSBiMmMgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gZXRvaWxlICBuYnJlIGQnw6l0b2lsZSAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBjYWxjdWwgIHR5cGUgZGUgY2FsY3VsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IHN0b3AgIHN0b3AgdmVudGUgMC8xLlxuICogQGFwaVN1Y2Nlc3Mge051bWJlcn0gY2VsZWJhdGUgIGNlbGViYXRhaXJlIG91IG5vbiAwLzEuXG4gKiBAYXBpU3VjY2VzcyB7TnVtYmVyfSBhdXRvX3ZvdWNoZXIgIGVudm9pIGF1dG9tYXRpcXVlIGVtYWlsIDAvMS5cbiAqIEBhcGlTdWNjZXNzIHt2aWxsZX0gdmlsbGUgIC5cbiAqIEBhcGlTdWNjZXNzIHtOdW1iZXJ9IGFjdCAgYWN0aXZlIDAvMS5cbiBcbiAgKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2Vzcy1SZXNwb25zZTpcbiAqICAgICBIVFRQLzEuMSAyMDAgT0tcbiBcbiAgICB7XG4gICAgICAgIFwiaWRob3RlbFwiOiAxLFxuICAgICAgICBcImlkdmlsbGVcIjogMjYsXG4gICAgICAgIFwibG9naW5cIjogXCJcIixcbiAgICAgICAgXCJub21cIjogXCJPbmUgUmVzb3J0IE1vbmFzdGlyXCIsXG4gICAgICAgIFwidHZhXCI6IFwiXCIsXG4gICAgICAgIFwiZW5mX21pblwiOiAzLFxuICAgICAgICBcImVuZl9tYXhcIjogMTIsXG4gICAgICAgIFwiYWRyZXNzZVwiOiBcIjYwMDBcIixcbiAgICAgICAgXCJpbmZvXCI6IFwiT2ZmcmUgdmFsYWJsZSBqdXNxdSdhdSAzMS8wMy8yMDE2LjxiciAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdEFsbCBpbmNsdXNpdmUuXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJsaWVuXCI6IFwibW9uYXN0aXIvaG90ZWwtb25lLXJlc29ydC5waHBcIixcbiAgICAgICAgXCJtYXJnZVwiOiAwLFxuICAgICAgICBcImV0b2lsZVwiOiA0LFxuICAgICAgICBcImNhbGN1bFwiOiAxLFxuICAgICAgICBcImF1dG9fdm91Y2hlclwiOiAxLFxuICAgICAgICBcIm9wZXJhdGlvblwiOiAwLFxuICAgICAgICBcInBvdXJjZW50XCI6IDAsXG4gICAgICAgIFwiZW1haWxcIjogXCJyZXNhLm9uZWhvdGVsc2FuZHJlc29ydHNAcGxhbmV0LnRuXCIsXG4gICAgICAgIFwiZmF4XCI6IFwib25lLXJlc29ydC1tb25hc3Rpci10dW5pc2llLXRhc25pbWUtdm95YWdlc19wLmpwZ1wiLFxuICAgICAgICBcInRlbFwiOiBcIlwiLFxuICAgICAgICBcImxvZ2ljaWVsXCI6IFwiXCIsXG4gICAgICAgIFwibWFwXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTI5NTAuOTgyMzY3MjgwMDU0ITJkMTAuNzQ3OTE2ODQ4MTQwNjchM2QzNS43NTcwNTczNjA2NjcyITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgxMzAyMGNjM2EyOTIzNzdkJTNBMHhlODM2YzAzM2ZkMzY5ZWJlITJzT25lK1Jlc29ydCtNb25hc3RpciE1ZTAhM20yITFzZnIhMnMhNHYxNDU3OTM4OFwiLFxuICAgICAgICBcImFjdFwiOiAxLFxuICAgICAgICBcInN0b3BcIjogMCxcbiAgICAgICAgXCJ0b3RhbF9yZXNlcnZhdGlvblwiOiA3MyxcbiAgICAgICAgXCJlbWFpbDJcIjogXCJcIixcbiAgICAgICAgXCJtYXJnZV9jXCI6IDAsXG4gICAgICAgIFwib3BlcmF0aW9uX2NcIjogMCxcbiAgICAgICAgXCJwb3VyY2VudF9jXCI6IDAsXG4gICAgICAgIFwiY2hvaXhfZW1haWxcIjogMSxcbiAgICAgICAgXCJjZWxlYmF0ZVwiOiAxXG4gICAgfSxcbiAgKiBAYXBpVXNlICBIb3RlbE5vdEZvdW5kRXJyb3JcbiAqL1xuICBhcHAuZ2V0KCcvYXBpQjJCL3BkZicsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIHZhciBwZGYgPSByZXF1aXJlKCdodG1sLXBkZicpO1xuICAgIHZhciBpbWFnZSA9IHBhdGguam9pbihcbiAgICAgICdmaWxlOi8vJyxcbiAgICAgIF9fZGlybmFtZSxcbiAgICAgICcvdXBsb2FkL2xvZ29zL2xvZ29fdGFzbmltZV92b3lhZ2VzLnBuZydcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGltYWdlKTtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgZm9ybWF0OiAnQTQnLFxuICAgICAgYm9yZGVyOiAnMWNtJyxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBoZWlnaHQ6ICc1Y20nLFxuICAgICAgfSxcbiAgICAgIGZvb3Rlcjoge1xuICAgICAgICBmb290ZXI6ICc1Y20nLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdmFyIGh0bWwgPVxuICAgICAgJzxib2R5PicgK1xuICAgICAgJ1x0PGRpdiBpZD1cInBhZ2VIZWFkZXJcIj48aW1nIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL3NycHIvbG9nbzExdy5wbmdcIj48L2Rpdj4nICtcbiAgICAgICdcdDxkaXYgaWQ9XCJwYWdlQ29udGVudFwiPicgK1xuICAgICAgJ1x0XHR0aGlzIGlzIHRoZSBtYWluIGNvbnRlbnQgb24gcGFnZSAxJyArXG4gICAgICAnXHRcdDxwIHN0eWxlPVwicGFnZS1icmVhay1hZnRlcjphbHdheXM7XCI+PC9wPicgK1xuICAgICAgJyBcdFx0dGhpcyBjb250ZW50IGdvZXMgb24gcGFnZSAyIHRvIHRlc3QgaGVhZGVyL2Zvb3RlcicgK1xuICAgICAgJ1x0PC9kaXY+JyArXG4gICAgICAnXHQ8ZGl2IGlkPVwicGFnZUZvb3RlclwiPicgK1xuICAgICAgJ1x0XHQ8aW1nIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL3NycHIvbG9nbzExdy5wbmdcIj4nICtcbiAgICAgICdcdDwvZGl2PicgK1xuICAgICAgJzwvYm9keT4nO1xuXG4gICAgcGRmLmNyZWF0ZShodG1sLCBvcHRpb25zKS50b0ZpbGUoJy4vaHRtbC5wZGYnLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgY29uc29sZS5sb2cocmVzKTsgLy8geyBmaWxlbmFtZTogJy9hcHAvYnVzaW5lc3NjYXJkLnBkZicgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgYXBwLnBvc3QoJy9hcGlCMkIvdm91Y2hlcl9wZGYnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICB2YXIgcGRmID0gcmVxdWlyZSgnaHRtbC1wZGYnKTtcblxuICAgIC8vICB2YXIgaHRtbCA9ZnMucmVhZEZpbGVTeW5jKCcuL3Rlc3QvNDQzOC5odG1sJywgJ3V0ZjgnKTtcbiAgICB2YXIgaHRtbCA9IHJlcS5ib2R5Lmh0bWw7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBmb3JtYXQ6ICdsZXR0cmUnLFxuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIGhlaWdodDogJzUwbW0nLFxuICAgICAgICAvKlxuICAgIFwiY29udGVudHNcIjoge1xuIC8vIEFueSBwYWdlIG51bWJlciBpcyB3b3JraW5nLiAxLWJhc2VkIGluZGV4XG4gICAgICBkZWZhdWx0OiBgXHQgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnRcIj4gPHAgc3R5bGU9XCJmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6IDIwcHg7XCI+XG4gICAgICA8c3Ryb25nPiBBIG5vdGVyIDo8L3N0cm9uZz48YnI+XG4gICAgICAgLSBBcnJpdsOpZSDDoCBwYXJ0aXIgZGUgMTRoMDAsIGTDqXBhcnQgYXZhbnQgMTJoMDBcbiAgICAgICA8YnI+IC0gQmVzb2luIGTCtGFpZGUgNy83IDogNTggNDAgODAgNDBcbiAgICAgICA8YnIgLz48YnIgLz48c3Ryb25nPipDZXR0ZSByw6lzZXJ2YXRpb24gZXN0IHByaXNlIGVuIGNoYXJnZSBwYXIgVGFzbmltZSBWb3lhZ2VzIC5cbiAgICAgICA8L3N0cm9uZz5cbiAgICAgICA8L3A+PC9kaXY+XG4gICAgICAgPGhyPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiICA+XG5cbjxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiIHN0eWxlPVwiZmxvYXQ6bGVmdDtcIj5cbiAgICA8aW1nIHdpZHRoOjEwMHB4OyBzcmM9XCJodHRwOi8vd3d3LnR1bmlzaWFiZWRzLmNvbS9iMmIvbG9nb3MvbG9nb190YXNuaW1lX3ZveWFnZXMucG5nXCI+XG4gICAgICBcbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICA8cCAgc3R5bGU9XCJmb250LXNpemU6OHB4OyBcIj5cbiAgICAgXG4gICAgXG5BViwgTGVzIE9yYW5nZXJzIEltbS4gQmlsbGFyZGlubyBBcHAgTsKwMSA8YnIvPktoZXphbWEgRXN0IC0gNDA1MSBTb3Vzc2UgLSBUVU5JU0lFXG48YnI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1ay10ZXh0LW11dGVkIHVrLXRleHQtc21hbGwgdWstdGV4dC1pdGFsaWNcIj5Uw6lsLjo8L3NwYW4+KCsyMTYpIDU4IDQwIDgwIDQwJm5ic3A7Jm5ic3A7KCsyMTYpIDczIDI3MCA1NDImbmJzcDsmbmJzcDsoKzIxNikgNzMgMjQwIDExOVxuPGJyPiA8c3BhbiBjbGFzcz1cInVrLXRleHQtbXV0ZWQgdWstdGV4dC1zbWFsbCB1ay10ZXh0LWl0YWxpY1wiPkVtYWlsLjogZGlyZWN0aW9uQHRhc25pbWV2b3lhZ2VzLmNvbTwvc3Bhbj5cbiAgICAgICAgIDwvcD4gICAgIFxuICAgICAgICAgICAgPC9kaXY+XG48L2Rpdj5gLCAvLyBmYWxsYmFjayB2YWx1ZVxuICAgIFxuICAgIH0gKi9cbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gICAgcGRmXG4gICAgICAuY3JlYXRlKGh0bWwsIG9wdGlvbnMpXG4gICAgICAudG9GaWxlKCcuL3ZvdWNoZXJfcGRmL1RCX3ZvdWNoZXInICsgcmVxLmJvZHkubnVtICsgJy5wZGYnLCBmdW5jdGlvbiAoXG4gICAgICAgIGVycixcbiAgICAgICAgcmVzXG4gICAgICApIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7IC8vIHsgZmlsZW5hbWU6ICcvYXBwL2J1c2luZXNzY2FyZC5wZGYnIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiByZXMuc2VuZCh7IHN1Y2Nlc3M6IHRydWUsIGlkOiByZXEuYm9keS5udW0gfSk7XG4gIH0pO1xuXG4gIGFwcC5wb3N0KCcvYXBpQjJCL2ZpbGUnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICB2YXIgY2xpZW50ID0gcmVxdWlyZSgnc2NwMicpO1xuICAgIGNvbnNvbGUubG9nKCdkYXRlIHNjcCcsIG5ldyBEYXRlKCkpO1xuICAgIC8qICBjbGllbnQuc2NwKCcvdmFyL3d3dy9odG1sL3R1bmlzaWFiZWRzL3ZvdWNoZXJfcGRmL1RCX3ZvdWNoZXI0NTAyLnBkZicsICcvdmFyL3d3dy9odG1sL2FwaS1qd3Qvdm91Y2hlcl9wZGYvJywgZnVuY3Rpb24oZXJyKSBcbiAgICB7XG4gIGNvbnNvbGUubG9nKFwiZXJyXCIsZXJyKVxuICB9KSovXG4gICAgdmFyIGNsaWVudCA9IHJlcXVpcmUoJ3NjcDInKTtcbiAgICBjbGllbnQuc2NwKFxuICAgICAgJy92YXIvd3d3L2h0bWwvdHVuaXNpYWJlZHMvdm91Y2hlcl9wZGYvVEJfdm91Y2hlcjQ1MDIucGRmJyxcbiAgICAgIHtcbiAgICAgICAgaG9zdDogJzE5Mi4xNjguMS4yMzcnLFxuICAgICAgICB1c2VybmFtZTogJ3Jvb3QnLFxuICAgICAgICBwYXNzd29yZDogJ3RnYnlobicsXG4gICAgICAgIC8vcHJpdmF0ZUtleTpgQUFBQUIzTnphQzFrYzNNQUFBQ0JBTWNBZDlXM0JoK1FrSWxMVGVjamlyZVRWcTJrNXBtRU5OSVV0RGozMFAxVzBVdzJ4a2JIajFseDVnQVBYWGl6Zys2T2RGZHQ3R2swbmlKcGxXclFUQ3VjTjFEY0ZSUEFvMnNibGlHdnFGcjEyenJYM29NVjh4YUtzOWoxaEFoN2d6aFlkWXlVN014MjVzb3htUmg2cXIwSEF6amJlQlRyc1VUclRwR2xtL285QUFBQUZRREZUNlVQSVB1VjdHeTNwVmFMYldNcTNXVWlNd0FBQUlCMyt3QlhYZTltVDhkY2QvR1BSU1hHMk5IazEzQ3h5TkkvR01PZ2hGT24yejRXc3FBSExDRG91Wk8xODl4L3l5dEs2dmpycTJrUUY3RURacEtQc21qOThzSXphdFQrbXJVZ0xwc3J2U3UvZkNSdzRJWnB4NStPeWpOanZMczlZTmJyZ3ByV1pyeDU0dkdxSU04RWMrUkJzRVZUcUlqLzNjSXlaTjBVSlU0amJBQUFBSUVBbDh6Q21jTGRLcktxZXpoOWlwTHhRSXM2WlQyMUFHUCt6aVlrYnArMnVoNW02VjMvM1JwUzREdHUzbnkxdnM2Z08vd0VmdmpjUkRENmtueGNQSnNvMkV6dTVtbmRNM3NQMng4MXlGUWhla1lOSHNGM2Rpd2JRM0tKUWdMVjMyVVo1RkVMMnVQMUhqNEJXS3Y0b3dDTUwzYXB4Rm8xY0hTZHFrc21hTkVCSFdvYCxcbiAgICAgICAgcGF0aDogJy92YXIvd3d3L2h0bWwvYXBpLWp3dC92b3VjaGVyX3BkZi8nLFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHt9XG4gICAgKTtcbiAgICAvLyAgY2xpZW50LnNjcCgnbWVoZXI6dGdieWhuNTUrK0AxOTIuMTY4LjEuMzovaG9tZS9tZWhlci9Eb2N1bWVudHMvVEJfdm91Y2hlcjQwNTEucGRmJywgJy4vYm9uX3BkZi8nLCBmdW5jdGlvbihlcnIpIHtcbiAgICAvLyAgfSlcbiAgfSk7XG59O1xuXG4vLyBURVNUIEJFU1NBTVxuXG4vLyBUZXN0IGZ1bmN0aW9uIGluIHRoZSBjb250cm9sbGVyXG4iXX0=