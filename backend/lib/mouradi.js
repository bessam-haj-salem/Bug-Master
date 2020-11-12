"use strict";
var fs = require('fs');
var formidable = require('formidable');
var axios = require('axios');
var URLMOURADI = require('./transporter.js').URLMOURADI;
var enfants_c = {};
var enfants_o = {};
var age_enfants_c = {};
var age_enfants_o = {};
var pax_org = {};
var pax_c = {};
var bebes = {};
var Mouradi = {};
var pax_g = 0;
var getURL = function (req, res) {
    try {
        var ville = req.body.Ville != null ? req.body.Ville : null;
        var adults = req.body.adults;
        var enfants = req.body.enfants;
        var age_enfants = req.body.age_enfants;
        var nb_chambre = req.body.nb_chambre;
        var end = req.body.datedepart;
        var start = req.body.datearrive;
        var etoiles = req.body.etoiles;
        var hotelname = req.body.hotelname;
        var ad = "";
        var en = "";
        var ag = "";
        var str = ville;
        var enfants_c = [];
        var enfants_o_1 = [];
        var bebes_1 = [];
        var pax_c_1 = [];
        var age_enfants_c;
        var age_enfants_o;
        enfants_c = enfants;
        enfants_o_1 = enfants;
        for (var i = 1; i <= nb_chambre; i++) {
            console.log(str + "v ");
            var pax = parseInt(adults[i]) + parseInt(enfants[i]);
            pax_g += parseInt(adults[i]) + parseInt(enfants[i]) / 2;
            bebes_1[i] = 0;
            pax_c_1[i] = pax;
            var bb = 0;
            age_enfants_c = age_enfants;
            age_enfants_o = age_enfants;
            for (var j = 1; j <= enfants[i]; j++) {
                if (2 > age_enfants[i][j]) {
                    //eiho "xx";
                    if (bebes_1[i] < 1) {
                        for (var x = j + 1; x <= enfants[i]; x++) {
                            age_enfants_c[i][x - 1] = age_enfants_c[i][x];
                        }
                        age_enfants_c[i][x] = -1;
                        //eiho ad." ".idreduition;
                        enfants_c[i] -= 1;
                        //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
                        bebes_1[i] += 1;
                        bb++;
                    }
                }
                if (8 < age_enfants[i][j] && str == "2") {
                    //eiho "xx";
                    //console.log("age"+age_enfants[i][j])
                    for (var x = j + 1; x <= enfants[i]; x++) {
                        age_enfants_c[i][x - 1] = age_enfants_c[i][x];
                    }
                    age_enfants_c[i][x] = -1;
                    //eiho ad." ".idreduition;
                    enfants_c[i] = enfants_c[i] - 1;
                    //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
                    adults[i] = parseInt(adults[i]) + 1;
                }
                if (age_enfants_c[i][j] < 2)
                    pax_g -= 0.5;
                //	age_enfants_c[i][j]=age_enfants[i][j];
            }
            for (var j = 1; j <= enfants_c[i]; j++) {
                ag += age_enfants_c[i][j];
                if (j < enfants_c[i]) {
                    ag += "-";
                }
            }
            en += enfants_c[i];
            if (bebes_1[i] == enfants[i])
                ag += "nan";
            if (enfants_c[i] == 0 && i == nb_chambre) {
                ag += "nan";
                console.log(i + "2");
            }
            ad += adults[i];
            if (i < nb_chambre) {
                ad += ",";
                en += ",";
            }
            if (i < nb_chambre) {
                ag += ",";
            }
        }
        var cat = etoiles;
        if (cat == 0)
            cat = "nan";
        var keywords = "Mouradi";
        //alert($cookies.get('hotelname'));
        var mou = "Mouradi";
        if (hotelname != undefined && hotelname != "")
            keywords = hotelname;
        /*if(angular.isUndefined(keywords))keywords="Mouradi";*/
        var param = ville + '/' + start + '/' + end + '/' + cat + '/' + nb_chambre + '/' + ad + '/' + en + '/' + ag + '/' + keywords;
        console.log(param);
        var URL = URLMOURADI + param;
        return URL;
    }
    catch (error) {
        console.error(error);
    }
};
var getMouradi = function (req, res) {
    try {
        var UUR = getURL(req, res);
        //  console.log(adults)
        return axios.get(UUR);
    }
    catch (error) {
        console.error(error);
    }
};
var traitementMouradi = function (req, res) {
    var mouradi = getMouradi(req, res);
    mouradi.then(function (result) {
        console.log(result.data);
        // console.log(result.data.MaherHotelsRES)
    });
    return mouradi;
};
module.exports = {
    //crée nouvelle banner
    create: function (req, res) {
        var Mouradi = traitementMouradi(req, res).then(function (response) {
            if (response.data) {
                console.log(" Mouradi");
                res.send(response.data);
            }
        })
            .catch(function (error) {
            console.log(error);
        })
            .catch(function (error) {
            console.log(error);
        });
    },
    //supprimer hotelsearch
    destroy: function (req, res) {
    },
};
