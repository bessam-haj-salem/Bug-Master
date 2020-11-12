var fs = require('fs');
var formidable = require('formidable');
const axios = require('axios');
const URLMOURADI = require('./transporter.js').URLMOURADI;
let enfants_c = {};
let enfants_o = {};
let age_enfants_c = {};
let age_enfants_o = {};
let pax_org = {};
let pax_c = {};
let bebes = {};
let Mouradi = {};
let pax_g = 0;
const getURL = (req, res) => {
    try {
        let ville = req.body.Ville != null ? req.body.Ville : null;
        let adults = req.body.adults;
        let enfants = req.body.enfants;
        let age_enfants = req.body.age_enfants;
        let nb_chambre = req.body.nb_chambre;
        let end = req.body.datedepart;
        let start = req.body.datearrive;
        let etoiles = req.body.etoiles;
        let hotelname = req.body.hotelname;
        let ad = "";
        let en = "";
        let ag = "";
        let n;
        let str = ville;
        var enfants_c = [];
        let enfants_o = [];
        let bebes = [];
        let pax_c = [];
        var age_enfants_c;
        var age_enfants_o;
        enfants_c = enfants;
        enfants_o = enfants;
        for (var i = 1; i <= nb_chambre; i++) {
            console.log(str + "v ");
            var pax = parseInt(adults[i]) + parseInt(enfants[i]);
            pax_g += parseInt(adults[i]) + parseInt(enfants[i]) / 2;
            bebes[i] = 0;
            pax_c[i] = pax;
            let bb = 0;
            age_enfants_c = age_enfants;
            age_enfants_o = age_enfants;
            for (var j = 1; j <= enfants[i]; j++) {
                if (2 > age_enfants[i][j]) {
                    //eiho "xx";
                    if (bebes[i] < 1) {
                        for (var x = j + 1; x <= enfants[i]; x++) {
                            age_enfants_c[i][x - 1] = age_enfants_c[i][x];
                        }
                        age_enfants_c[i][x] = -1;
                        //eiho ad." ".idreduition;
                        enfants_c[i] -= 1;
                        //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
                        bebes[i] += 1;
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
            if (bebes[i] == enfants[i])
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
        let cat = etoiles;
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
const getMouradi = (req, res) => {
    try {
        let UUR = getURL(req, res);
        //  console.log(adults)
        return axios.get(UUR);
    }
    catch (error) {
        console.error(error);
    }
};
const traitementMouradi = (req, res) => {
    let mouradi = getMouradi(req, res);
    mouradi.then(function (result) {
        console.log(result.data);
        // console.log(result.data.MaherHotelsRES)
    });
    return mouradi;
};
module.exports = {
    //crée nouvelle banner
    create(req, res) {
        const Mouradi = traitementMouradi(req, res).then(response => {
            if (response.data) {
                console.log(` Mouradi`);
                res.send(response.data);
            }
        })
            .catch((error) => {
            console.log(error);
        })
            .catch((error) => {
            console.log(error);
        });
    },
    //supprimer hotelsearch
    destroy(req, res) {
    },
};
