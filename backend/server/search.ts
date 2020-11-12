
 let hotels_search=[]



const H= require('./hotelsearch'); 

const tr_out = require('./hotelsearch.out.ts');
const tr1 = require('./hotelsearch.ts');
const tr_all = require('./hotelsearch.all.ts');
const tr_multi = require('./hotelsearch.out.ts');
import { createModels } from '../models-ts';
const sequelizeConfig = require('../config/sequelizeConfig.json');
import fetch from 'cross-fetch';

const db = createModels(sequelizeConfig);
const agence=db.Agence;
const mappage=db.mappage
import * as processus from "child_process"
const axios = require('axios');
import 'dotenv/config'
const r = require('rethinkdb');
var requestModel = require('../models/requests');
const nbProvider = process.env.nbProvider;
const URLSEARCH= process.env.URLSEARCH;
const URLMOURADI= process.env.URLMOURADI;
const URLMEDINA= process.env.URLMEDINA;
let prox:any[]=[]
let total_search=[]
let tabmin:any[]=[]
let tabmax:any[]=[]
let tabMinMax:any[]=[]
const uuidv1 = require('uuid/v1');
    //get url cyberesa
    const getURL = (req,res,s) => {
      try {
    
       let ville=req.body.Ville!=null?req.body.Ville:null;
       let adults=req.body.adults;
       let enfants=req.body.enfants;
        let age_enfants=[[]];
       let  nb_chambre=req.body.nb_chambre;
       let end=req.body.datedepart;
      let  start=req.body.datearrive;
        let etoiles=req.body.etoiles;
        let hotelname=req.body.hotelname;
    
        if(!etoiles) etoiles=0;
    let ad="";
    let en="";
    let ag="";
    let n: number;
    let str=ville;
    var enfants_c : any[]=[]
    let enfants_o=[]
    let bebes:number[]=[]
    let pax_c : number[]=[]
    
     var age_enfants_c =[[]]
     var age_enfants_o  =[[]]
    // console.log("age enf_in",req.body.age_enfants,s)
    
    
        for (var i = 1; i <= nb_chambre; i++) {
          enfants_c[i]=req.body.enfants[i];
          enfants_o[i]=req.body.enfants[i]
          enfants[i]=req.body.enfants[i]
       //   console.log(str+"v ");
       age_enfants_c[i]=[]
       age_enfants_o[i]=[]
       age_enfants[i]=[]
       var pax=0;
       if(adults[i]!=undefined)pax=adults[i];
       if(enfants[i]!=undefined)pax=pax+enfants[i];
        pax_g+=parseInt(adults[i])+parseInt(enfants[i])/2;
        //console.log("pax",pax)
        
       
        bebes[i]=0;
        pax_c[i]=pax;
        pax_orig[i]=pax;
        let bb=0;
        
    //console.log("ee",req.body.enfants[i])
    
     
            for(var j=1;j<=enfants[i];j++)
        {   age_enfants[i][j]=req.body.age_enfants[i][j];
          age_enfants_c[i][j]=req.body.age_enfants[i][j]
          age_enfants_o[i][j]=req.body.age_enfants[i][j]
         
            if(2>age_enfants[i][j] )
        {
          
          if(bebes[i]<1)
          {
         
    
            for(var x=j+1;x<=enfants[i];x++)
        {	age_enfants_c[i][x-1]=age_enfants_c[i][x];
        }
      
        age_enfants_c[i][x]=-1;
        //console.log("age",age_enfants[i][j])
        //eiho ad." ".idreduition;
        enfants_c[i]-=1;
        //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
        bebes[i]+=1;
        bb++;
        }
        
        }	
          
                  if(8<age_enfants[i][j] &&str=="2")
        {
          
        //eiho "xx";
        //console.log("age"+age_enfants[i][j])
            for(var x=j+1;x<=enfants[i];x++)
        {	age_enfants_c[i][x-1]=age_enfants_c[i][x];
        }
        age_enfants_c[i][x]=-1;
        //eiho ad." ".idreduition;
        enfants_c[i]=enfants_c[i]-1;
        //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
        adults[i]=parseInt(adults[i])+1;
        
        
        
        
          
        
          
        
        }
        
          if(age_enfants_c[i][j]<2)pax_g-=0.5;
        //	age_enfants_c[i][j]=age_enfants[i][j];
          
        
        }
      
          for (var j = 1; j <= enfants_c[i]; j++) {
        ag+=age_enfants_c[i][j];
        if(j< enfants_c[i]){ag+="-";}
          
        }
         en+=enfants_c[i];
          if(bebes[i]==enfants[i])ag+="nan";
          if(enfants_c[i]==0&&i==nb_chambre)
          {ag+="nan";
          //console.log(i+"i");
        }
          ad+=adults[i];
        if(i< nb_chambre){ad+=",";en+=",";}
        
         if(i< nb_chambre){ag+=",";}
        
        }
       
       let cat=etoiles;
    
    if(cat==0) cat="nan";
       
     
    var keywords=s;
    //alert($cookies.get('hotelname'));
    var mou=s;
    if(hotelname!=undefined&&hotelname!="")keywords=hotelname;
    //if(keywords.indexOf("Mouradi")) 
    /*if(angular.isUndefined(keywords))keywords="Mouradi";*/
    
    console.log("--------------------*********************----yassmine"+keywords.indexOf(("Yasmine Hammamet") ))
    let nb=keywords.indexOf(("Yasmine Hammamet") )
    if(nb!=-1)
    {
      keywords=keywords.substr(0, nb-2)
    }
    var param=ville+'/'+start+'/'+end+'/'+cat+'/'+nb_chambre+'/'+ad+'/'+en+'/'+ag+'/'+keywords;
    console.log("------------nom hotel----------------------------------------------------------"+keywords)
    console.log("sc 13-02-202020 ---------ville-----------------------------------------------ville"+ville);
    console.log("sc 13-02-202020 ------------start--------------------------------------------start"+start);
    console.log("sc 13-02-202020 --------------end------------------------------------------end"+end);
    console.log("sc 13-02-202020 ---------------cat-----------------------------------------cat"+cat);
    console.log("sc 13-02-202020 -----------------nb_chambre---------------------------------------nb_chambre"+nb_chambre);
    console.log("sc 13-02-202020 ---------------------ad-----------------------------------ad"+ad);
    console.log("sc 13-02-202020 ----------------------en----------------------------------en"+en);
    console.log("sc 13-02-202020 -------------------------ag-------------------------------ag"+ag);
    console.log("sc 13-02-202020 -------------------------keywords-------------------------------keywords"+keywords);
    console.log("yassmine ")
    //console.log("sc 13-02-202020 --------------------------------------------------------param"+param);
        var URL=''
      if(s=='Mouradi')  URL=URLMOURADI+param
      else URL=URLMEDINA+param
      //console.log("url",URL)
          return URL
    
      } catch (error) {
        console.error(error)
      }
    };
   const functionverifyTerminatedTasks=(msg:any,req,res)=>{
  let   id=msg.id
    prox[id]=true
    let indicator:boolean=true
    prox.forEach(element => {if(!element) indicator=false
      
    });
    total_search=[ ...total_search, ...msg.search]
    const date = new Date()
     
   
      
    console.log("debut verifTerm",' ',id,' ',date)
    if (indicator)
    {console.log("terminated ");
    let tabMinMax=Array.from(total_search,elt=>elt.TotalPrice)
    let minVal=Math.min(...tabMinMax)
    let maxVal=Math.max(...tabMinMax)
    if(minVal>0)
    tabmin.push(minVal)
    if(maxVal>0)
    tabmax.push(maxVal)
    
    sortMe(total_search,req.body.Filter.Sort.By,req.body.Filter.Sort.Order)
   // res.send({hotels_Search:total_search,filter:{minRate:Math.min(...tabmin),maxRate:Math.max(...tabmax)},nbHotel:total_search.length})
   if(!res.headersSent)res.send({Count:total_search.length,Stay:{"CheckIn": req.body.CheckIn,
    "CheckOut":req.body.CheckOut},Availabilities:total_search,Filter:{MinRate:Math.min(...tabmin),MaxRate:Math.max(...tabmax)}})
    const date = new Date()
     
   
      
    console.log("fin Resp",' ',id,' ',date)
  tabMinMax=[]
  tabmin=[]
  tabmax=[]
  tabmax=[]
  total_search=[]
  prox=[]
  }
    else 
    console.log(" non terminated")
    
    }
    let pax_orig = {};
let pax_c = {};
let bebes = {};
let Mouradi = {};
let pax_g=0;
let h_mouradi={}
let h_mouradi_search=[]















const search_cyberesa_out=(res,req,Ma,s,age_enfants_o,id)=>
{
  let Rooms= [
]
 ville=req.body.Ville!=null?req.body.Ville:null;
   let adults=req.body.adults;
   let enfants=req.body.enfants;
    let age_enfants=[[]];
   let  nb_chambre=req.body.nb_chambre;
   let end=req.body.datedepart;
  let  start=req.body.datearrive;
    let etoiles=req.body.etoiles;
    let hotelname=req.body.hotelname;

let ad="";
let en="";
let ag="";
let n: number;
let str=ville;
var enfants_c : any[]=[]
let enfants_o=[]
let bebes:number[]=[]
let pax_c : number[]=[]

 var age_enfants_c =[[]]

// console.log("age enf_in",req.body.age_enfants,s)


    for (var i = 1; i <= nb_chambre; i++) {
      enfants_c[i]=req.body.enfants[i];
      enfants_o[i]=req.body.enfants[i]
      enfants[i]=req.body.enfants[i]
   //   console.log(str+"v ");
   age_enfants_c[i]=[]
  // age_enfants_o[i]=[]
   age_enfants[i]=[]
   var pax=0;
   if(adults[i]!=undefined)pax=adults[i];
   if(enfants[i]!=undefined)pax=pax+enfants[i];
    pax_g+=parseInt(adults[i])+parseInt(enfants[i])/2;
    //console.log("pax",pax)
    
   
    bebes[i]=0;
    pax_c[i]=pax;
    pax_orig[i]=pax;
    let bb=0;
    
//console.log("ee",req.body.enfants[i])

age_enfants_c[i][0]=0
        for(var j=1;j<=enfants[i];j++)
    {   age_enfants[i][j]=req.body.age_enfants[i][j];
      age_enfants_c[i][j]=req.body.age_enfants[i][j]
    //  age_enfants_o[i][j]=req.body.age_enfants[i][j]
     
        if(2>age_enfants[i][j] )
    {
      
      if(bebes[i]<1)
      {
     

        for(var x=j+1;x<=enfants[i];x++)
    {	age_enfants_c[i][x-1]=age_enfants_c[i][x];
    }
  
    age_enfants_c[i][x]=-1;
   // console.log("age",age_enfants[i][j])
    //eiho ad." ".idreduition;
    enfants_c[i]-=1;
    //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
    bebes[i]+=1;
    bb++;
    }
    
    }	
      
              if(8<age_enfants[i][j] &&str=="2")
    {
      
    //eiho "xx";
    //console.log("age"+age_enfants[i][j])
        for(var x=j+1;x<=enfants[i];x++)
    {	age_enfants_c[i][x-1]=age_enfants_c[i][x];
    }
    age_enfants_c[i][x]=-1;
    //eiho ad." ".idreduition;
    enfants_c[i]=enfants_c[i]-1;
    //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
    adults[i]=parseInt(adults[i])+1;
    
    
    
    
      
    
      
    
    }
    
      if(age_enfants_c[i][j]<2)pax_g-=0.5;
    //	age_enfants_c[i][j]=age_enfants[i][j];
      
    
    }
  
      for (var j = 1; j <= enfants_c[i]; j++) {
    ag+=age_enfants_c[i][j];
    if(j< enfants_c[i]){ag+="-";}
      
    }
     en+=enfants_c[i];
      if(bebes[i]==enfants[i])ag+="nan";
      if(enfants_c[i]==0&&i==nb_chambre)
      {ag+="nan";
      //console.log(i+"i");
    }
      ad+=adults[i];
    if(i< nb_chambre){ad+=",";en+=",";}
    
     if(i< nb_chambre){ag+=",";}
    
    }
 // console.log("Ma",Ma)
  var request_search=[];
  
  //  const Mouradi = traitementMouradi(req, res);
  let hotels_search=[]
  for(var key in Ma.MaherHotelsRES){
    let valueMaherHotelsRES=Ma.MaherHotelsRES[key]
    Rooms=[]
   var idhotel=0;
   //console.log("tesrt");
 //	alert( h_mouradi_search[i].idhotel);
   var nom="";
   var typeperiod="Simple";
   var ville=req.body.Ville;
   var ville1="";
   var h_mouradi_v;
   var price=0;
   var devise=req.body.devise;
  var etoile= 0;
  var count_h;
  var image=""
 var arrangement="";
  var dispo='Sur demande';
  var attente='';
  var nom_supp='';
 var roomid;
 var price_arrangement;
 var roomname;
 var abrroom;
 var CodeLam;
 var abr;
 var idBoarding;
 var PromotionTitle="";
  if(key=="City")
  for(var key in valueMaherHotelsRES){
    
//   console.log(value)
   if(key=="content")
   {let valueCity=valueMaherHotelsRES[key]
    //value=value[key]
      h_mouradi_v=valueCity;
//  console.log(h_mouradi_v)
    // ville= value;
  //	 alert(ville);
  ville1= valueCity;
   }
     };
    
   if(key=="nbHotels")
   {count_h=valueMaherHotelsRES;
//    console.log('nbHotel',value)
   }
  if(key=="maherHotels")
  {
   
  //  console.log(count_h)
   for(var key in valueMaherHotelsRES){
    let valuemaherHotels=valueMaherHotelsRES[key]
    // console.log(value)
 if(key=="maherHotel")
  {
    //console.log(value)
  //alert(count_h) ;
 if(count_h==1)h_mouradi[0]=valuemaherHotels;
    else h_mouradi=valuemaherHotels;
  
  
 //alert( h_mouradi);
// console.log("c"+count_h)
 for (var i=0;i<count_h;i++)
 {
//  console.log("hmmm"+h_mouradi[i])
Rooms=[]
 
   idhotel=h_mouradi[i].id;
   CodeLam=h_mouradi[i].CodeLam;  let marge_cyberesa=req.body.marge_mouradi
   if(s=="dina")marge_cyberesa=req.body.marge_medina
  
   nom=h_mouradi[i].title;
   typeperiod="Simple";


  let nb_chambre=req.body.nb_chambre
 //console.log(idhotel)
   var total=h_mouradi[i].total+(h_mouradi[i].total*marge_cyberesa)/100;
   //var total=total /taux_devise;
   total=total /req.body.taux_devise;
   if(req.body.marge)
   {
     let    marge= req.body.marge;
     let operation= req.body.operation;
     let pourcent= req.body.pourcent;
     
     
     
        if(marge>0)
      {
      if(operation==0 && pourcent==0)
      total+=parseFloat(marge);
      else if (operation==0 && pourcent==1)
      total=total*(1 +parseFloat(marge)/100);
      else if(operation==1 && pourcent==0)
      total=total -parseFloat(marge);
      else if (operation==1 && pourcent==1)
      total=total*(1 -parseFloat(marge)/100);  
      }
   }
   if(devise!="TND") total=Math.round(total*100)/100
     
       let    marge_affichage= req.body.marge_affichage;
let operation_affichage= req.body.operation_affichage;
let pourcent_affichage= req.body.pourcent_affichage;
   if(marge_affichage>0)
 {
 if(operation_affichage==0 && pourcent_affichage==0)
 total+=parseFloat(marge_affichage)*	 pax_g;
 else if (operation_affichage==0 && pourcent_affichage==1)
 total=total*(1 +parseFloat(marge_affichage)/100);
 else if(operation_affichage==1 && pourcent_affichage==0)
 total=total -parseFloat(marge_affichage)*	 pax_g;
 
 }
 
   price=Math.round(total * 100) / 100;
 //  alert(price);
 etoile= h_mouradi[i].category.id;
 
   if(h_mouradi[i].promotionTitle!="")
   {typeperiod="Promo";
 
 PromotionTitle=h_mouradi[i].promotionTitle;
 // alert( h_mouradi_search[i].PromotionTitle);
 }
let  type_period=typeperiod;
   image=h_mouradi[i].thumbImage.url;
 
      // alert( h_mouradi_search[i].typeperiod);
//console.log("hm_i"+h_mouradi[i])
     for(var key in  h_mouradi[i]){
      
 // console.log("hmouradi"+value)
 if(key=="MaherRooms")
 {let valueMaherRooms= h_mouradi[i][key]
//  console.log(value)
   for(var key in valueMaherRooms){
   //
//
  if(key=="MaherRoom"  )
 { let valueMaherRoom= valueMaherRooms[key]
  if(nb_chambre==1)  
  {var v=valueMaherRoom;
// else v=value[0];

 //alert( JSON.stringify(v))
 for(var key in v){
   // value=v[key]
   // console.log(v)
   if(key=="id")abrroom=v.Abr
 roomname=v.title
 roomid=v.id
 if(key=="boarding")
 {
 //	alert(value.Available.content);
 
 arrangement=v.boarding.Title;
 abr=v.boarding.Abr;
 idBoarding=v.boarding.id;
 price_arrangement=price
 dispo='Sur demande';
 attente='';
 nom_supp='';
 //if(value.Abr=="Disponible"   )abr=
 // if(value.Available.code="200"   )		 dispo='Disponible';
 
 // if(value.Available.code="0"   )		dispo='Disponible';
 if(v.boarding.Available.content=="Disponible"   )
 dispo="Disponible";
 else dispo="Sur demande";
 if(v.boarding.Rate.content<v.boarding.RateWithoutPromotion.content)typeperiod="Promo";
 
 }



 };
  } // fin if not is array 
 else
 //traitement dans le cas où il exist un array
 for(var indexroom=0;indexroom<valueMaherRoom.length;indexroom++)
 {
  v=valueMaherRoom[indexroom];
 //console.log("value.length : ",valueMaherRoom.length)
  for(var key in v){
  abrroom=v.Abr
 roomname=v.title
 //roomid=v.id
 roomid=v.id
 if(key=="boarding")
 {
 arrangement=v.boarding.Title;
 abr=v.boarding.Abr;
 idBoarding=v.boarding.id;
 price_arrangement=price
 dispo='Sur demande';
 attente='';
 nom_supp='';
 
 if(v.boarding.Available.content=="Disponible"   )
 dispo="Disponible";
 else dispo="Sur demande";
 if(v.boarding.Rate.content<v.boarding.RateWithoutPromotion.content)typeperiod="Promo";
 
 }
 };

 Rooms.push(    {
  "IdRoom": roomid,
  "Name": roomname,
  "Code":abrroom,
  "Boardings": {
      "IdBoarding": idBoarding,
      "Code": abr,
      "Name": arrangement,
      "Price": price_arrangement
  }
})
 }
}// fin if key == MaherRoom

 };// fin for MaherRoom

 if(nb_chambre==1)
 Rooms.push(    {
  "IdRoom": roomid,
  "Name": roomname,
  "Code":abrroom,
  "Boardings": {
      "IdBoarding": idBoarding,
      "Code": abr,
      "Name": arrangement,
      "Price": price_arrangement
  }
})
//console.log(Rooms)

}// fin for MaherRooms
 
 

 };
 
 var h = req.body.idhotel;
 //console.log(dispo)

 delete adults[0];
 delete enfants[0];
 age_enfants_c[0]=null;

 let disponible={Code:1,Centent:"On demand"}
 if(dispo=="Disponible")disponible={Code:0,Centent:"Available"}

 hotels_search.push( {"IdHotel":idhotel,"Name":nom,
"Offer":{"Name":typeperiod,"PromotionTitle":PromotionTitle},
"Extra":"","City": {
 "Id": req.body.Ville,
 "Content": h_mouradi_v
 },"Rooms":Rooms,
"ThumbImage":{"Url":image},"Category":etoile,
"Latitude": "",
"Longitude": "",
"DestinationCode":"TN",
"Available":disponible,"Currency":devise,"TotalPrice":price});


 request_search.push( {"idhotel":idhotel,"arrangement":arrangement,"nom":nom,"typeperiod":typeperiod,"PromotionTitle":PromotionTitle,"date_to":req.body.datedepart,
 "date_from":req.body.datearrive,"nbnuit":req.body.nbnuit,"nbcham":req.body.nb_chambre
 ,"CodeLam":CodeLam,idperiod:1,"nom_supp":"","adults":{ ...adults },"age_enfants":req.body.age_enfants,"age_enfants_c":age_enfants_c,"bebes":{...bebes},"pax_c":{...pax_c},"pax_orig":{...pax_orig},"pax_r":{...pax_c},
 "pax_r_global":0,"ville":h_mouradi_v,'enfants_c':{ ...enfants_c },'enfants':{ ...enfants },"price":price,"image":image,"etoile":etoile,"devise":devise,"dispo":dispo,"attente":attente,"recommender":0});




}
}
 

 };
 }
 //alert(value);
 //;
 
 
 
 
 
 
 };
 //total_search=[ ...total_search, ...hotels_search]

 return [hotels_search,request_search]
/*
nbmax++;

//let tabMinMax=Array.from(hotels_search,elt=>elt.price)
if(nbmax==nbProvider)
{
  console.log("ok")
  let tabMinMax=Array.from(total_search,elt=>elt.price)
  let minVal=Math.min(...tabMinMax)
  let maxVal=Math.max(...tabMinMax)
  if(minVal>0)
  tabmin.push(minVal)
  if(maxVal>0)
  tabmax.push(maxVal)
  
  sortMe(total_search,"price","desc")
  if(!res.headersSent) res.send({nbHotel:total_search.length,filter:{minRate:Math.min(...tabmin),maxRate:Math.max(...tabmax)},hotels_Search:total_search})
  /*if(!res.headersSent)res.send({Count:total_search.length,Stay:{"CheckIn": req.body.CheckIn,
  "CheckOut":req.body.CheckOut},Availabilities:total_search,Filter:{MinRate:Math.min(...tabmin),MaxRate:Math.max(...tabmax)}})


}
if(nbmax>=nbProvider)
{

  nbmax=0;
  tabmin=tabmax=[]
  total_search=[]
}
*/
}






const chercheville=(hotel,id)=>{
let k
for (let i=0;i<hotel.length;i++)
{
if (hotel[i].villedotcom==id)
{
k=hotel[i].villemouradi

return k
}

}
//return k
}


















const affiche1=(req,res)=>{
(async () => {
  try {
    const res = await fetch("http://localhost:4000/apiB2B/list/106");
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    const user = await res.json();
console.log("user----------------------------------------------------------------"+user)
//res.send(user)
  // console.log(req.body)
 } catch (err) {
    console.error(err);
  }
})();
}
 

const recherchenomville= (idville,hotel1)=>
{
//console.log("******############################31-04-2020#######**********************************************************************************************************************"+idville)
for(let r=0;r<hotel1.length;r++)
{
console.log("***************souhirrrrrrrr*************************31-04-2020*******rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr*************"+hotel1[6].villedotcom)
if(hotel1[r].villedotcom==idville)
{
//console.log("***********************************************rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr*************"+hotel1[r].villetitle)

return hotel1[r].villetitle
}
//else{
//return 0
//}
}
}

const rechercheidhotel=(response,hotel1,k)=>{
 //console.log("***********************************************************************************************************////////////////////////////////"+response.HotelSearchRES.Hotels.Hotel.id)

if(k==-1)
{

for(let r=0;r<hotel1.length;r++)
{
//console.log("avanttttttttttttttttttttttttttttttttttttttttttttttt"+hotel1[10].idhotelmouradi)
if (hotel1[r].idhotelmouradi==response.HotelSearchRES.Hotels.Hotel.id)
{
//console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+hotel1[r].idhotelmouradi)
return (hotel1[r].idhoteldotcom)
}
}


}
else{
for(let r=0;r<hotel1.length;r++)
{
console.log("avanttttttttttttttttttttttttttttttttttttttttttttttt"+hotel1[10].idhotelmouradi)
if (hotel1[r].idhotelmouradi==response.HotelSearchRES.Hotels.Hotel[k].id)
{
console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+hotel1[r].idhotelmouradi)
return (hotel1[r].idhoteldotcom)
}
}
}
}

const nombrebor=(response,k,nbr)=>{
if(k==-1)
{
for(let bor=0;bor<50;bor++)
{
//console.log("reppp"+response.HotelSearchRES.Hotels.Hotel.rooms.room[0].Boardings.Boarding[0].Title)
if(nbr!=0)
{
if (response.HotelSearchRES.Hotels.Hotel.rooms.room[0].Boardings.Boarding[bor]==undefined)
{
return(bor)
}


}
else{
if (response.HotelSearchRES.Hotels.Hotel.rooms.room.Boardings.Boarding[bor]==undefined)
{
return(bor)
}


}
}




}
else{
for(let bor=0;bor<50;bor++)
{
//console.log("reppp"+response.HotelSearchRES.Hotels.Hotel[0].rooms.room[0].Boardings.Boarding[0].Title)
if(nbr!=0)
{
if (response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding[bor]==undefined)
{
return(bor)
}


}
else{
if (response.HotelSearchRES.Hotels.Hotel[k].rooms.room.Boardings.Boarding[bor]==undefined)
{
return(bor)
}


}
}
}
}
const nombreromm=(response,k)=>{
if(k==-1)
{
for(let nbr=0;nbr<50;nbr++)
{
if (response.HotelSearchRES.Hotels.Hotel.rooms.room[nbr]==undefined)
{
console.log("nbrrrrrrrrrrrrrrrrrrrrrrrrrr"+nbr)
return (nbr)
}
}



}
else{
for(let nbr=0;nbr<50;nbr++)
{
if (response.HotelSearchRES.Hotels.Hotel[k].rooms.room[nbr]==undefined)
{
console.log("nbrrrrrrrrrrrrrrrrrrrrrrrrrr"+nbr)
return (nbr)
}
}
}

}

const verifierdispo=(k,response,nb_chambre)=>{
let dispo=""
let count=0
let dispocondition=""
if(k==-1)
{}
else{
for(let kc=0;kc<nb_chambre;kc++)
{
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc]!=undefined)
{

//bor !=0
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0]!=undefined)
{
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code==200||response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code==0)
{
dispo="Disponible"
dispocondition=""

}
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code==489)
{ 
dispo="Sur demande"
dispocondition="stop sale period"

}

if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code==210||response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code==2044)                                                                   
{ 
dispo="Sur demande"
dispocondition="minimal stay"


}

if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code==203)
{ 
dispo="Sur demande"
dispocondition="retrocession delay"

}
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code!=200 &&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code!=0&&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code!=489&&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code!=210&&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code!=203&&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding[0].Available.code!=2044)
{dispo="Sur demande"
dispocondition="rien"

}






return dispocondition
}
else{
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code==200||response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code==0)
{
dispo="Disponible"
dispocondition=""

}
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code==489)
{ 
dispo="Sur demande"
dispocondition="stop sale period"

}
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code==203)
{ 
dispo="Sur demande"
dispocondition="retrocession delay"

}
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code!=200 &&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code!=0&&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code!=489&&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code!=210&&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code!=203&&response.HotelSearchRES.Hotels.Hotel[k].rooms.room[kc].Boardings.Boarding.Available.code!=2044)
{dispo="Sur demande"
dispocondition="rien"

}


return dispocondition

}
}
}
}
}

const calculprix=(k,response,nbchambre)=>
{

let c=0
let x=0
let prix=0





for(let knb=0;knb<nbchambre;knb++)
{



if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb]!=undefined)
{
console.log("--------------------------------"+response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb])
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb].Boardings.Boarding[0]==undefined){

 x=parseInt(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb].count)

//console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-09-04-2020-count"+x)
c=c+1
prix=parseFloat(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb].Boardings.Boarding.Rate.$t)+prix

if (c==nbchambre)
{
return prix
}

}
//sc-06
else{


 x=parseInt(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb].count)

//console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-09-04-2020-count"+x)
c=c+1
prix=parseFloat(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb].Boardings.Boarding[0].Rate.$t)+prix

if (c==nbchambre)
{
return prix
}





}
}
else{
if(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb]!=undefined)
{

 x=parseInt(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb].count)

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-09-04-2020-count"+x)
c=c+1
prix=parseFloat(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb].Boardings.Boarding[0].Rate.$t)+prix

//console.log("-----------*******************************************************************************************************************************************---------------------------------------------------------------------------nbchaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"+response.HotelSearchRES.Hotels.Hotel[k].rooms.room[knb].Boardings.Boarding[0].Rate.$t)
if (c==nbchambre)
{
console.log("prixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx************************************************************************"+prix)
return prix
}
//sc-06-05-2020
//else{
//return prix

//}
}
}
}


}

const recherchecybersa=(response,req,hotel1)=>
{

let villenom=recherchenomville(req.Ville,hotel1)
let dispo1
//console.log("hotellllllllllllllllppppppppppppppppppppppppppp*************************************************************************************************************************************************************************************************************************************************llllll1"+hotel1)
//console.log("hotelsssssssssssssssssssssssssssssssssssspri"+response.HotelSearchRES.Hotels.Hotel[0].rooms.room[0].Boardings.Boarding[0].Rate.$t)
var hotels=response;
var nbhotels=[];
var hotels_search=[];
let arrangements
let Rooms=[]
let typeperiod
let promo
let prix
  let nb_chambre=req.nb_chambre

let ad="";
let en="";
let ag="";
let n: number;
let str=req.Ville;
let dispo=""
let adults=req.adults;
console.log("mouuuuuuuuuuuuuuuuuuuuuuraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"+req.marge_mouradi)
//let pax_c=["1":"20"]
   pax_c[1]=20;
  pax_c[1]=20;
//adults[1]=2;
 let  bebes={}
//let adultss : number[]=[]
let adultss = {};
let  enfants   ={}
 let enfants_c={}


//let bebes[1]:0;
//let enfants[1]:0;
//let enfants_c[1]:0;
 //pax_orig[1]=20
//pax_r[1]=20
 adultss[1]=2;
 adultss[2]=3
 bebes[1]=0;
 bebes[2]=0;

enfants[1]=0;
enfants[2]=0;
 enfants_c[1]=0;
 enfants_c[2]=0;

 var  age_enfants_c =[[]]
 var age_enfants_o=[[]]
 let age_enfants=[[]];
var enf_c : any[]=[]
    let enfants_o=[]
let enf=req.enfants
let pax_g=0;
var paxorig=[]

let bebe:number[]=[]

let paxc : number[]=[]
//sc chab

for (var i = 1; i <=req.nb_chambre; i++) {
    enf_c[i]=req.enfants[i];
    enfants_o[i]=req.enfants[i]
    enf[i]=req.enfants[i]
 //   console.log(str+"v ");
 age_enfants_c[i]=[]
 age_enfants_o[i]=[]
 age_enfants[i]=[]
 var pax=0;
//var paxorig=[]

//let bebe:number[]=[]

//let paxc : number[]=[]

  if(adults[i]!=undefined)pax=adults[i];
       if(enf[i]!=undefined)pax=pax+enf[i];
        pax_g+=parseInt(adults[i])+parseInt(enf[i])/2;


bebe[i]=0;
    paxc[i]=pax;
    paxorig[i]=pax;
    let bb=0;

age_enfants_c[i][0]=0
//sc

   for(var j=1;j<=enf[i];j++)
    {   age_enfants[i][j]=req.age_enfants[i][j];
      age_enfants_c[i][j]=req.age_enfants[i][j]
    //  age_enfants_o[i][j]=req.body.age_enfants[i][j]
     
        if(2>age_enfants[i][j] )
    {
      
      if(bebes[i]<1)
      {
     

        for(var x=j+1;x<=enf[i];x++)
    {	age_enfants_c[i][x-1]=age_enfants_c[i][x];
    }
  
    age_enfants_c[i][x]=-1;
   // console.log("age",age_enfants[i][j])
    //eiho ad." ".idreduition;
    enfants_c[i]-=1;
    //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
    bebes[i]+=1;
    bb++;
    }
    
    }	
      
              if(8<age_enfants[i][j] &&str=="2")
    {
      
    //eiho "xx";
    //console.log("age"+age_enfants[i][j])
        for(var x=j+1;x<=enf[i];x++)
    {	age_enfants_c[i][x-1]=age_enfants_c[i][x];
    }
    age_enfants_c[i][x]=-1;
    //eiho ad." ".idreduition;
    enfants_c[i]=enfants_c[i]-1;
    //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
    adults[i]=parseInt(adults[i])+1;
    
    
    
    
      
    
      
    
    }
    
      if(age_enfants_c[i][j]<2)pax_g-=0.5;
    //	age_enfants_c[i][j]=age_enfants[i][j];
      
    
    }
  
      for (var j = 1; j <= enfants_c[i]; j++) {
    ag+=age_enfants_c[i][j];
    if(j< enfants_c[i]){ag+="-";}
      
    }
     en+=enfants_c[i];
      if(bebes[i]==enf[i])ag+="nan";
      if(enfants_c[i]==0&&i==nb_chambre)
      {ag+="nan";
      //console.log(i+"i");
    }
//sc
}
console.log("-----------------------------------------enfants_c"+ enf_c)
console.log("----------------------------------------enfants_o"+enfants_o)
console.log("---------------------------------------enfants"+ enf)
console.log("-------------------------------------------------------------------------------------------adultes"+{ ...adults })
//sc






 //delete adultss[0];

//Rooms=[
 // {
   //   "IdRoom": "2",
     // "Name": "Chambre Double",
      //"Code": "DOUBLE",
      //"Boardings": {
        //  "IdBoarding": "3",
         // "Code": "DP",
          //"Name": "Demi Pension",
         // "Price": 116.48
     // }
 // }
//]
 delete adults[0];
  delete enf[0];


//console.log("hotellllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllcount1"+response.HotelSearchRES.Hotels.Hotel[0].id)
if(response.HotelSearchRES.Hotels.count>1)
{
//console.log("idddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"+response.HotelSearchRES.Hotels.count)
//let nbr=nombreromm(
for (let k=0;k<response.HotelSearchRES.Hotels.count;k++)
{
if (req.etoiles==0 ||req.etoiles==response.HotelSearchRES.Hotels.Hotel[k].Category.id)
{
//prix=Math.round(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding[0].Rate.$t+((response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].
//Boardings.Boarding[0].Rate.$t)/100))
if(response.HotelSearchRES.Hotels.Hotel[k].PromotionTitle!="")
{
promo=response.HotelSearchRES.Hotels.Hotel[k].PromotionTitle
typeperiod="promo"
}
else{
promo=""
typeperiod="Simple"

}

let nbr=nombreromm(response,k)

console.log("--------------------------------------------------------------------------------------------------------------------------nombreromm"+nbr)
if(nbr!=0)
{
let bor=nombrebor(response,k,1)
console.log("--------------------------------------------------------------------------------------------------------------------------bor"+bor)

if(bor!=0)
{
//response.HotelSearchRES.Hotels.Hotel[0].rooms.room[0].Boardings.Boarding[0].Title
arrangements=response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding[0].Title
let prixfloat=parseFloat(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding[0].Rate.$t)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prixfloat+((prixfloat*margemouradiint)/100)
prix = Math.round(x * 100) / 100
}
else{
arrangements=response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding.Title
let prixfloat=parseFloat(response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding.Rate.$t)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prixfloat+((prixfloat*margemouradiint)/100)
prix = Math.round(x * 100) / 100


}
console.log("borrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+bor)
}
//nombrerommdifffernt0
else
{
console.log("rommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmde0")
let bor=nombrebor(response,k,0)

if(bor!=0)
{
arrangements=response.HotelSearchRES.Hotels.Hotel[k].rooms.room.Boardings.Boarding[0].Title


let prixfloat=parseFloat(response.HotelSearchRES.Hotels.Hotel[k].rooms.room.Boardings.Boarding[0].Rate.$t)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prixfloat+((prixfloat*margemouradiint)/100)
prix = Math.round(x * 100) / 100
//dispo=response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding[0].Available.$t  


}
else{ 
arrangements=response.HotelSearchRES.Hotels.Hotel[k].rooms.room.Boardings.Boarding.Title

let prixfloat=parseFloat(response.HotelSearchRES.Hotels.Hotel[k].rooms.room.Boardings.Boarding.Rate.$t)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prixfloat+((prixfloat*margemouradiint)/100)
prix = Math.round(x * 100) / 100

//dispo=response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding[0].Available.$t  

}

}
//}
//else{
//schab
console.log("okkkkkkkkkkkkkkkkkkk")

dispo1=verifierdispo(k,response,req.nb_chambre)
if(dispo1=="")
{
dispo="Disponible"
}
else{
if(dispo1=="rien")
{
dispo="Sur demande",
dispo1=""
}
else{
dispo="Sur demande"

}

}
//if(arrangements=response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding[0]!=undefined)
//{
//arrangements=response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding[0].Title
//}
//else{
//arrangements=response.HotelSearchRES.Hotels.Hotel[k].rooms.room[0].Boardings.Boarding.Title

//}
if (req.nb_chambre>=2){
let prix2=calculprix(k,response,req.nb_chambre)
console.log("-------------------------------------------------------------------------------------------------------------------------------prixx2"+prix2)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prix2+((prix2*margemouradiint)/100)
prix = Math.round(x * 100) / 100




}
console.log("prixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//}

//fin
let idhotel;
//let villenom;
idhotel=rechercheidhotel(response,hotel1,k)
//villenom=recherchenomville(req.Ville,hotel1)
console.log("iddddddddddddddddddddddddddddddddddddddddddddhotellllllllllllllllllllllllllllllllllllllllllllllll"+villenom)
hotels_search.push( {"idhotel":idhotel,"arrangement":arrangements,"nom":response.HotelSearchRES.Hotels.Hotel[k].Title,"typeperiod":"Promo","promotionTitle":promo
,"date_to":req.datedepart,
 "date_from":req.datearrive,"nbnuit":req.nbnuit,"nbcham":req.nb_chambre
 ,"CodeLam":"code",idperiod:1,"nom_supp":"","adults":{ ...adults },"age_enfants":req.age_enfants,"age_enfants_c":req.age_enfants,"bebes":{...bebe},"pax_c":{...paxc},
"pax_orig":{...paxorig},"pax_r":{...paxc},
 "pax_r_global":0,"ville":villenom,'enfants_c': { ...enf },
'enfants':{ ...enf },"price":prix,"image":"https://www.elmouradi.com:444/cr27.fwk/images/hotels/Hotel-579-20141125-031517.JPG","etoile":response.HotelSearchRES.Hotels.Hotel[k].Category.id,
"devise":"TND","dispo":dispo,"attente":"","recommender":0,"dispocondition":dispo1})

//nbhotels.push("nbHotel":"1", "uuid": "b5702e60-6dce-11ea-a0dd-f12a9bdc6d1b");
//filter.push( "minRate":"37.8", "maxRate": "6163.2");
//hotels.push(nbhotels,filter);
console.log(hotels_search)
}
}
}
else{
if (req.etoiles==0 ||req.etoiles==response.HotelSearchRES.Hotels.Hotel.Category.id)
{

if(response.HotelSearchRES.Hotels.Hotel.PromotionTitle!="")
{
promo=response.HotelSearchRES.Hotels.Hotel.PromotionTitle
typeperiod="promo"
}
else{
promo=""
typeperiod="Simple"

}
let nbr=nombreromm(response,-1)
if(nbr!=0)
{
let bor=nombrebor(response,-1,1)
if(bor!=0)
{
//response.HotelSearchRES.Hotels.Hotel[0].rooms.room[0].Boardings.Boarding[0].Title
arrangements=response.HotelSearchRES.Hotels.Hotel.rooms.room[0].Boardings.Boarding[0].Title

let prixfloat=parseFloat(response.HotelSearchRES.Hotels.Hotel.rooms.room[0].Boardings.Boarding[0].Rate.$t)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prixfloat+((prixfloat*margemouradiint)/100)
prix = Math.round(x * 100) / 100

}
else{
arrangements=response.HotelSearchRES.Hotels.Hotel.rooms.room[0].Boardings.Boarding.Title
let prixfloat=parseFloat(response.HotelSearchRES.Hotels.Hotel.rooms.room[0].Boardings.Boarding.Rate.$t)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prixfloat+((prixfloat*margemouradiint)/100)
prix = Math.round(x * 100) / 100

}
console.log("borrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+bor)
}
else
{
  let bor=nombrebor(response,-1,0)

  if(bor!=0)
  {
  arrangements=response.HotelSearchRES.Hotels.Hotel.rooms.room.Boardings.Boarding[0].Title

let prixfloat=parseFloat(response.HotelSearchRES.Hotels.Hotel.rooms.room.Boardings.Boarding[0].Rate.$t)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prixfloat+((prixfloat*margemouradiint)/100)
prix = Math.round(x * 100) / 100

  }
  else{
  arrangements=response.HotelSearchRES.Hotels.Hotel.rooms.room.Boardings.Boarding.Title
let prixfloat=parseFloat(response.HotelSearchRES.Hotels.Hotel.rooms.room.Boardings.Boarding.Rate.$t)
let margemouradiint=parseInt(req.marge_mouradi)
let x=prixfloat+((prixfloat*margemouradiint)/100)
prix = Math.round(x * 100) / 100

  
  }
  
  }
  let idhotel;

idhotel=rechercheidhotel(response,hotel1,-1)
console.log("*******************************************iddddddddddddddddddddddddddddddddddddddddddddhotellllllllllllllllllllllllllllllllllllllllllllllll"+idhotel)
hotels_search.push( {"idhotel":idhotel,"arrangement":arrangements,"nom":response.HotelSearchRES.Hotels.Hotel.Title,"typeperiod":typeperiod,"PromotionTitle":promo
,"date_to":req.datedepart,
 "date_from":req.datearrive,"nbnuit":req.nbnuit,"nbcham":req.nb_chambre
 ,"CodeLam":"code",idperiod:1,"nom_supp":"","adults":adultss,"age_enfants":req.age_enfants,"age_enfants_c":req.age_enfants,"bebes":bebes,"pax_c":pax_c,
"pax_orig":pax_c,"pax_r":pax_c,
 "pax_r_global":0,"ville":villenom,'enfants_c':enfants_c,
'enfants':enfants,"price":prix,"image":"https://www.elmouradi.com:444/cr27.fwk/images/hotels/Hotel-579-20141125-031517.JPG","etoile":response.HotelSearchRES.Hotels.Hotel.Category.id,
"devise":"TND","dispo":"en attente","attente":"","recommender":0})

//nbhotels.push("nbHotel":"1", "uuid": "b5702e60-6dce-11ea-a0dd-f12a9bdc6d1b");
//filter.push( "minRate":"37.8", "maxRate": "6163.2");
//hotels.push(nbhotels,filter);
console.log(hotels_search)
}


}


return(hotels_search)
}
//
//affiche1

//affiche1


 // traitement cyberesa multi
const search_cyberesa_multi=(res,req,Ma,s,age_enfants_o,id)=>
{
  console.log("--------------------------------------------------------------------searcggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg")
  let Rooms= [
]
 ville=req.body.Ville!=null?req.body.Ville:null;
   let adults=req.body.adults;
   let enfants=req.body.enfants;
    let age_enfants=[[]];
   let  nb_chambre=req.body.nb_chambre;
   let end=req.body.datedepart;
  let  start=req.body.datearrive;
    let etoiles=req.body.etoiles;
    let hotelname=req.body.hotelname;

let ad="";
let en="";
let ag="";
let n: number;
let str=ville;
var enfants_c : any[]=[]
let enfants_o=[]
let bebes:number[]=[]
let pax_c : number[]=[]

 var age_enfants_c =[[]]

// console.log("age enf_in",req.body.age_enfants,s)


    for (var i = 1; i <= nb_chambre; i++) {
      enfants_c[i]=req.body.enfants[i];
      enfants_o[i]=req.body.enfants[i]
      enfants[i]=req.body.enfants[i]
   //   console.log(str+"v ");
   age_enfants_c[i]=[]
  // age_enfants_o[i]=[]
   age_enfants[i]=[]
   var pax=0;
   if(adults[i]!=undefined)pax=adults[i];
   if(enfants[i]!=undefined)pax=pax+enfants[i];
    pax_g+=parseInt(adults[i])+parseInt(enfants[i])/2;
    //console.log("pax",pax)
    
   
    bebes[i]=0;
    pax_c[i]=pax;
    pax_orig[i]=pax;
    let bb=0;
    
//console.log("ee",req.body.enfants[i])

age_enfants_c[i][0]=0
        for(var j=1;j<=enfants[i];j++)
    {   age_enfants[i][j]=req.body.age_enfants[i][j];
      age_enfants_c[i][j]=req.body.age_enfants[i][j]
    //  age_enfants_o[i][j]=req.body.age_enfants[i][j]
     
        if(2>age_enfants[i][j] )
    {
      
      if(bebes[i]<1)
      {
     

        for(var x=j+1;x<=enfants[i];x++)
    {	age_enfants_c[i][x-1]=age_enfants_c[i][x];
    }
  
    age_enfants_c[i][x]=-1;
   // console.log("age",age_enfants[i][j])
    //eiho ad." ".idreduition;
    enfants_c[i]-=1;
    //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
    bebes[i]+=1;
    bb++;
    }
    
    }	
      
              if(8<age_enfants[i][j] &&str=="2")
    {
      
    //eiho "xx";
    //console.log("age"+age_enfants[i][j])
        for(var x=j+1;x<=enfants[i];x++)
    {	age_enfants_c[i][x-1]=age_enfants_c[i][x];
    }
    age_enfants_c[i][x]=-1;
    //eiho ad." ".idreduition;
    enfants_c[i]=enfants_c[i]-1;
    //if(j>1)age_enfants[i][j-1]=age_enfants[i][j];
    adults[i]=parseInt(adults[i])+1;
    
    
    
    
      
    
      
    
    }
    
      if(age_enfants_c[i][j]<2)pax_g-=0.5;
    //	age_enfants_c[i][j]=age_enfants[i][j];
      
    
    }
  
      for (var j = 1; j <= enfants_c[i]; j++) {
    ag+=age_enfants_c[i][j];
    if(j< enfants_c[i]){ag+="-";}
      
    }
     en+=enfants_c[i];
      if(bebes[i]==enfants[i])ag+="nan";
      if(enfants_c[i]==0&&i==nb_chambre)
      {ag+="nan";
      //console.log(i+"i");
    }
      ad+=adults[i];
    if(i< nb_chambre){ad+=",";en+=",";}
    
     if(i< nb_chambre){ag+=",";}
    
    }
 // console.log("Ma",Ma)
  var res_mouradi=[];
  
  //  const Mouradi = traitementMouradi(req, res);
  let hotels_search=[]
  for(var key in Ma.MaherHotelsRES){
    let valueMaherHotelsRES=Ma.MaherHotelsRES[key]
    Rooms=[]
   var idhotel=0;
   //console.log("tesrt");
 //	alert( h_mouradi_search[i].idhotel);
   var nom="";
   var typeperiod="Simple";
   var ville=req.body.Ville;
   var ville1="";
   var h_mouradi_v;
   var price=0;
   var devise=req.body.devise;
  var etoile= 0;
  var count_h;
  var image=""
 var arrangement="";
  var dispo='Sur demande';
  var attente='';
  var nom_supp='';
 var roomid;
 var price_arrangement;
 var roomname;
 var abrroom;
 var CodeLam;
 var abr;
 var idBoarding;
 var PromotionTitle="";
  if(key=="City")
  for(var key in valueMaherHotelsRES){
    
//   console.log(value)
   if(key=="content")
   {let valueCity=valueMaherHotelsRES[key]
    //value=value[key]
      h_mouradi_v=valueCity;
//  console.log(h_mouradi_v)
    // ville= value;
  //	 alert(ville);
  ville1= valueCity;
   }
     };
    
   if(key=="nbHotels")
   {count_h=valueMaherHotelsRES;
//    console.log('nbHotel',value)
   }
  if(key=="maherHotels")
  {
   
  //  console.log(count_h)
   for(var key in valueMaherHotelsRES){
    let valuemaherHotels=valueMaherHotelsRES[key]
    // console.log(value)
 if(key=="maherHotel")
  {
    //console.log(value)
  //alert(count_h) ;
 if(count_h==1)h_mouradi[0]=valuemaherHotels;
    else h_mouradi=valuemaherHotels;
  
  
 //alert( h_mouradi);
// console.log("c"+count_h)
 for (var i=0;i<count_h;i++)
 {
//  console.log("hmmm"+h_mouradi[i])
Rooms=[]
 
   idhotel=h_mouradi[i].id;
   CodeLam=h_mouradi[i].CodeLam;  let marge_cyberesa=req.body.marge_mouradi
   if(s=="dina")marge_cyberesa=req.body.marge_medina
  
   nom=h_mouradi[i].title;
   typeperiod="Simple";


  let nb_chambre=req.body.nb_chambre
 //console.log(idhotel)
   var total=h_mouradi[i].total+(h_mouradi[i].total*marge_cyberesa)/100;
   var total=total /req.body.taux_devise;
   if(req.body.marge)
   {
     let    marge= req.body.marge;
     let operation= req.body.operation;
     let pourcent= req.body.pourcent;
     
     
     
        if(marge>0)
      {
      if(operation==0 && pourcent==0)
      total+=parseFloat(marge);
      else if (operation==0 && pourcent==1)
      total=total*(1 +parseFloat(marge)/100);
      else if(operation==1 && pourcent==0)
      total=total -parseFloat(marge);
      else if (operation==1 && pourcent==1)
      total=total*(1 -parseFloat(marge)/100);  
      }
   }
   if(devise!="TND") total=Math.round(total*100)/100



    

       let    marge_affichage= req.body.marge_affichage;
let operation_affichage= req.body.operation_affichage;
let pourcent_affichage= req.body.pourcent_affichage;



   if(marge_affichage>0)
 {
 if(operation_affichage==0 && pourcent_affichage==0)
 total+=parseFloat(marge_affichage)*	 pax_g;
 else if (operation_affichage==0 && pourcent_affichage==1)
 total=total*(1 +parseFloat(marge_affichage)/100);
 else if(operation_affichage==1 && pourcent_affichage==0)
 total=total -parseFloat(marge_affichage)*	 pax_g;
 
 }
 
   price=Math.round(total * 100) / 100;
 //  alert(price);
 etoile= h_mouradi[i].category.id;
 
   if(h_mouradi[i].promotionTitle!="")
   {typeperiod="Promo";
 
 PromotionTitle=h_mouradi[i].promotionTitle;
 // alert( h_mouradi_search[i].PromotionTitle);
 }
let  type_period=typeperiod;
   image=h_mouradi[i].thumbImage.url;
 
      // alert( h_mouradi_search[i].typeperiod);
//console.log("hm_i"+h_mouradi[i])
     for(var key in  h_mouradi[i]){
      
 // console.log("hmouradi"+value)
 if(key=="MaherRooms")
 {let valueMaherRooms= h_mouradi[i][key]
//  console.log(value)
   for(var key in valueMaherRooms){
   //
//
  if(key=="MaherRoom"  )
 { let valueMaherRoom= valueMaherRooms[key]
  if(nb_chambre==1)  
  {var v=valueMaherRoom;
// else v=value[0];

 //alert( JSON.stringify(v))
 for(var key in v){
   // value=v[key]
   // console.log(v)
   if(key=="id")abrroom=v.Abr
 roomname=v.title
 roomid=v.id
 if(key=="boarding")
 {
 //	alert(value.Available.content);
 
 arrangement=v.boarding.Title;
 abr=v.boarding.Abr;
 idBoarding=v.boarding.id;
 price_arrangement=price
 dispo='Sur demande';
 attente='';
 nom_supp='';
 //if(value.Abr=="Disponible"   )abr=
 // if(value.Available.code="200"   )		 dispo='Disponible';
 
 // if(value.Available.code="0"   )		dispo='Disponible';
 if(v.boarding.Available.content=="Disponible"   )
 dispo="Disponible";
 else dispo="Sur demande";
 if(v.boarding.Rate.content<v.boarding.RateWithoutPromotion.content)typeperiod="Promo";
 
 }



 };
  } // fin if not is array 
 else
 //traitement dans le cas où il exist un array
 for(var indexroom=0;indexroom<valueMaherRoom.length;indexroom++)
 {
  v=valueMaherRoom[indexroom];
 //console.log("value.length : ",valueMaherRoom.length)
  for(var key in v){
  abrroom=v.Abr
 roomname=v.title
 //roomid=v.id
 roomid=v.id
 if(key=="boarding")
 {
 arrangement=v.boarding.Title;
 abr=v.boarding.Abr;
 idBoarding=v.boarding.id;
 price_arrangement=price
 dispo='Sur demande';
 attente='';
 nom_supp='';
 
 if(v.boarding.Available.content=="Disponible"   )
 dispo="Disponible";
 else dispo="Sur demande";
 if(v.boarding.Rate.content<v.boarding.RateWithoutPromotion.content)typeperiod="Promo";
 
 }
 };
/*
 Rooms.push(    {
  "IdRoom": roomid,
  "Name": roomname,
  "Code":abrroom,
  "Boardings": {
      "IdBoarding": idBoarding,
      "Code": abr,
      "Name": arrangement,
      "Price": price_arrangement
  }
})*/
 }
}// fin if key == MaherRoom

 };// fin for MaherRoom
/*
 if(nb_chambre==1)
 Rooms.push(    {
  "IdRoom": roomid,
  "Name": roomname,
  "Code":abrroom,
  "Boardings": {
      "IdBoarding": idBoarding,
      "Code": abr,
      "Name": arrangement,
      "Price": price_arrangement
  }
})*/
//console.log(Rooms)

}// fin for MaherRooms
 
 

 };
 
 var h = req.body.idhotel;
 //console.log(dispo)

 delete adults[0];
 delete enfants[0];
 age_enfants_c[0]=null;

 let disponible={Code:1,Centent:"On demand"}
 if(dispo=="Disponible")disponible={Code:0,Centent:"Available"}
/*
 hotels_search.push( {"IdHotel":idhotel,"Name":nom,
"Offers":{"Name":typeperiod,"PromotionTitle":PromotionTitle},
"Extra":"","City": {
 "Id": req.body.Ville,
 "Content": h_mouradi_v
 },"Rooms":Rooms,
"ThumbImage":{"Url":image},"Category":etoile,
"Latitude": "",
"Longitude": "",
"DestinationCode":"TN",
"Available":disponible,"Currency":devise,price:price});
*/

 hotels_search.push( {"idhotel":idhotel,"arrangement":arrangement,"nom":nom,"typeperiod":typeperiod,"PromotionTitle":PromotionTitle,"date_to":req.body.datedepart,
 "date_from":req.body.datearrive,"nbnuit":req.body.nbnuit,"nbcham":req.body.nb_chambre
 ,"CodeLam":CodeLam,idperiod:1,"nom_supp":"","adults":{ ...adults },"age_enfants":req.body.age_enfants,"age_enfants_c":age_enfants_c,"bebes":{...bebes},"pax_c":{...pax_c},"pax_orig":{...pax_orig},"pax_r":{...pax_c},
 "pax_r_global":0,"ville":h_mouradi_v,'enfants_c':{ ...enfants_c },'enfants':{ ...enfants },"price":price,"image":image,"etoile":etoile,"devise":devise,"dispo":dispo,"attente":attente,"recommender":0});




}
}
 

 };
 }
 //alert(value);
 //;
 
 
 
 
 
 
 };
 //total_search=[ ...total_search, ...hotels_search]
 console.log("r",s," ",hotels_search)
return hotels_search
/*
nbmax++;

//let tabMinMax=Array.from(hotels_search,elt=>elt.price)
if(nbmax==nbProvider)
{
  console.log("ok")
  let tabMinMax=Array.from(total_search,elt=>elt.price)
  let minVal=Math.min(...tabMinMax)
  let maxVal=Math.max(...tabMinMax)
  if(minVal>0)
  tabmin.push(minVal)
  if(maxVal>0)
  tabmax.push(maxVal)
  
  sortMe(total_search,"price","desc")
  if(!res.headersSent) res.send({nbHotel:total_search.length,filter:{minRate:Math.min(...tabmin),maxRate:Math.max(...tabmax)},hotels_Search:total_search})
  /*if(!res.headersSent)res.send({Count:total_search.length,Stay:{"CheckIn": req.body.CheckIn,
  "CheckOut":req.body.CheckOut},Availabilities:total_search,Filter:{MinRate:Math.min(...tabmin),MaxRate:Math.max(...tabmax)}})


}
if(nbmax>=nbProvider)
{

  nbmax=0;
  tabmin=tabmax=[]
  total_search=[]
}
*/
}
    const  sortMe=(table: any[], key: string, direction: string)=> {

      table.sort((a, b) => {
          let genreA: string = "", genreB: string = ""
    
          genreA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key]
          genreB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key]
    
    
          let comparaison = 0;
          if (genreA > genreB) {
              comparaison = 1;
          } else if (genreA < genreB) {
              comparaison = -1;
          }
          return direction === 'asc' ? comparaison * -1 : comparaison;
      })
    
    }
module.exports = {
  //crée nouvelle banner
		

  create(req, res) {
    const axios = require('axios');
    const WebSocket = require('ws');
    const URLSEARCH= require('./transporter.js').URLSEARCH; 
 var   maher=req.headers.uix
   console.log(JSON.stringify(req.body.age_enfants))
   let age_enfants=[[]]
   let age_enfants_o=req.body.age_enfants

   for (var i = 1; i <= req.body.nb_chambre; i++) {
    if(parseInt(req.body.enfants[i])>0)
    { age_enfants[i]=[]
      for(var j=1;j<=req.body.enfants[i];j++)
    {  
     // console.log(i, "j",j)
     if(parseInt(req.body.age_enfants[i][j-1])>0) 
  
   age_enfants[i][j]=req.body.age_enfants[i][j-1];
  
  
  
  
    //	age_enfants_c[i][j]=age_enfants[i][j];
      
    
    }
    }}
    //console.log(age_enfants);




    req.body.age_enfants=age_enfants;
   tr1.traitement(req,res,1,age_enfants_o)
   tr1.traitement(req,res,0,age_enfants_o)

//tr1.create(req,res,"Mouradi",age_enfants_o)
//tr1.create(req,res,"dina",age_enfants_o)
 //  H.nonRecommender(req,res)
//   H.recommender(req,res)


  /* sequelize.query("INSERT into khaled_log.reservation (idsession,user_id,idagence,date_from,date_to,nbnuit,enfant,taux_devise,devise,ville) ('" + maher + "','" + req.body.user_id + "','" + req.body.idagence + "','" + req.body.date_from + "','" + req.body.date_to + "','" + req.body.nbnuit + "','" + req.body.enfant + "','" + req.body.taux_devise + "','" + req.body.devise + "','" + req.body.ville + "')'"
   , { type: sequelize.QueryTypes.INSERT}	    )

     .then(console.log("log ok"))
     .catch(error => res.status(400).send(error));*/
   res.json(maher)
   
  }, 
  create_all(req, res,next) {
   
console.log(req.connection.remoteAddress)
 //  console.log(JSON.stringify(req.body.age_enfants))
   let age_enfants=[[]]
   let age_enfants_o=req.body.age_enfants

   for (var i = 1; i <= req.body.nb_chambre; i++) {
    if(parseInt(req.body.enfants[i])>0)
    { age_enfants[i]=[]
      for(var j=1;j<=req.body.enfants[i];j++)
    {  
     // console.log(i, "j",j)
     if(parseInt(req.body.age_enfants[i][j-1])>0) 
  
   age_enfants[i][j]=req.body.age_enfants[i][j-1];
  
  
  
  
    //	age_enfants_c[i][j]=age_enfants[i][j];
      
    
    }
    }}
    //console.log(age_enfants);
    const sequelize=db.sequelize;
    sequelize.query("select a.id as idagence,marge,operation,pourcent,	marge_affichage,pourcent_affichage,operation_affichage,	marge_mouradi,	marge_medina,taux_devise,devise from agence a,members_btb m where a.id=m.idagence  and m.id="+req.body.user_id 
    , { type: sequelize.QueryTypes.SELECT}	, {	
            }		   
             )
  
      .then(agence =>{ 
    //console.log(agence);
  
    req.body.id_agence=agence[0].idagence
    req.body.marge=agence[0].marge
    req.body.pourcent=agence[0].pourcent
    req.body.operation=agence[0].operation
    req.body.marge_affichage=agence[0].marge_affichage
    req.body.pourcent_affichage=agence[0].pourcent_affichage
    req.body.operation_affichage=agence[0].operation_affichage
    req.body.marge_mouradi=agence[0].marge_mouradi
    req.body.marge_medina=agence[0].marge_medina
    req.body.taux_devise=agence[0].taux_devise
    req.body.devise=agence[0].devise
    //req.body.etoile=agence[0].Category[0]
  
  
    tr_all.reset()

    req.body.age_enfants=age_enfants;
   tr_all.traitement(req,res,1,age_enfants_o,0)
   tr_all.traitement(req,res,0,age_enfants_o,1)

//tr_all.create(req,res,"Mouradi",2)
//if(req.body.Ville==1)tr_all.create(req,res,"dina",3)

tr_all.verify_send(req,res,next)
    
       
     
    
   
               
     
              
              })


/*
 let child1=processus.fork('./server/controllers/proc.ts');
 child1.send({"req":req,"res":res,"recommender":1});
 child1.on('message',function(msg){
   console.log("message processus1",msg)
 })

 let child2=processus.fork('./server/controllers/proc.ts');
 child2.send({"req":req,"res":res,"recommender":0});
 child2.on('message',function(msg){
   console.log("message processus2",msg)
 })*/

 //  H.nonRecommender(req,res)
//   H.recommender(req,res)


  /* sequelize.query("INSERT into khaled_log.reservation (idsession,user_id,idagence,date_from,date_to,nbnuit,enfant,taux_devise,devise,ville) ('" + maher + "','" + req.body.user_id + "','" + req.body.idagence + "','" + req.body.date_from + "','" + req.body.date_to + "','" + req.body.nbnuit + "','" + req.body.enfant + "','" + req.body.taux_devise + "','" + req.body.devise + "','" + req.body.ville + "')'"
   , { type: sequelize.QueryTypes.INSERT}	    )

     .then(console.log("log ok"))
     .catch(error => res.status(400).send(error));*/

  }, 
  create_out(req, res,next) {
    
    const axios = require('axios');
    const WebSocket = require('ws');
    const URLSEARCH= require('./transporter.js').URLSEARCH; 
 var   maher=req.headers.uix
 let age_enfants=[[]]

 let enfants=[]
 let adults=[]
 let Occupancies=req.body.Occupancies
for(var indexRoom=0;indexRoom<Occupancies.length;indexRoom++)
{
  adults[indexRoom+1]=Occupancies[indexRoom].Adults
  enfants[indexRoom+1]=Occupancies[indexRoom].Children.Count
  let Ages=Occupancies[indexRoom].Children.Ages
  let SplitAges=Ages.split("-")
  if(enfants[indexRoom+1]>0){
    age_enfants[indexRoom+1]=[]
    age_enfants[indexRoom+1][0]=0
  for (var indexAge=0;indexAge<SplitAges.length;indexAge++)
  {
    age_enfants[indexRoom+1][indexAge+1]=SplitAges[indexAge]

  }//fin for age
}// fin if enfant
} // fin rooms
console.log("Ad",adults,"Enf",enfants,'Age',age_enfants)




 let arrival = req.body.CheckIn.split ("-");
 let date_from=arrival[2]+"/"+arrival[1]+'/'+arrival[0]

 let depart = req.body.CheckOut.split ("-");
 let date_to=depart[2]+"/"+depart[1]+'/'+depart[0]
 req.body.datearrive=date_from
 req.body.datedepart=date_to
 req.body.Ville=req.body.CityID



  


  req.body.user_id=req.body.UserID
  req.body.KeyWords=req.body.Filter.KeyWords
  req.body.hotelname=req.body.KeyWords
let Category=req.body.Filter.Category
let where_etoile="";
if(Category.length==1)
    where_etoile= " and h.etoile="+Category[0]+" "
else if(Category.length>1) 
{
  for(var indexCategory=0;indexCategory<Category.length;indexCategory++)
  {
    if(indexCategory==0)
    where_etoile= " and (h.etoile="+Category[0]+" " 
   else if(indexCategory<Category.length-1)
    where_etoile+= " or h.etoile="+Category[indexCategory]+" " 
   else  if(indexCategory==Category.length-1)
    where_etoile+= " or h.etoile="+Category[indexCategory]+") " 
  }
  
}

console.log(where_etoile)
req.body.etoiles=req.body.Filter.Category[0]
if(!req.body.etoiles)req.body.etoiles=0;
console.log("etoiles",req.body.etoiles)
  req.body.Category=where_etoile
  req.body.age_enfants=age_enfants
  req.body.enfants=enfants
  req.body.adults=adults
  req.body.nb_chambre=req.body.Occupancies.length
if(!req.body.Filter.Sort)
{
  req.body.Filter.Sort={"By":"TotalPrice","Order":"desc"}
}
  const sequelize=db.sequelize;

  sequelize.query("select a.id as idagence,marge,operation,pourcent,	marge_affichage,pourcent_affichage,operation_affichage,	marge_mouradi,	marge_medina,taux_devise,devise from agence a,members_btb m where a.id=m.idagence  and m.id="+req.body.user_id 
  , { type: sequelize.QueryTypes.SELECT}	, {	
          }		   
           )

    .then(agence =>{ 
  //console.log(agence);

  req.body.id_agence=agence[0].idagence
  req.body.marge=agence[0].marge
  req.body.pourcent=agence[0].pourcent
  req.body.operation=agence[0].operation
  req.body.marge_affichage=agence[0].marge_affichage
  req.body.pourcent_affichage=agence[0].pourcent_affichage
  req.body.operation_affichage=agence[0].operation_affichage
  req.body.marge_mouradi=agence[0].marge_mouradi
  req.body.marge_medina=agence[0].marge_medina
  req.body.taux_devise=agence[0].taux_devise
  req.body.devise=agence[0].devise
  //req.body.etoile=agence[0].Category[0]

/*
  tr_out.reset()

  let age_enfants_o=req.body.age_enfants
 tr_out.traitement(req,res,1,age_enfants_o,0)
 tr_out.traitement(req,res,0,age_enfants_o,1)

tr_out.create(req,res,"Mouradi",2)
if(req.body.Ville==1)tr_out.create(req,res,"dina",3)

tr_out.verify_send(req,res,next)
  */
     
   
  
 let promises = [];


 for (let i = 0; i < 2; i++) {
 let requestSearch= {

    "datearrive":req.body.datearrive,"datedepart":req.body.datedepart,"Ville":req.body.Ville,
    "user_id":req.body.user_id,"hotelname":req.body.hotelname,"etoiles":req.body.etoiles,
    "age_enfants":req.body.age_enfants,"adults":req.body.adults,
    "enfants":req.body.enfants,"nb_chambre":req.body.nb_chambre,"id_agence":req.body.id_agence,
    "marge_affichage":req.body.marge_affichage,
    "pourcent_affichage":req.body.pourcent_affichage,"operation_affichage":req.body.operation_affichage,
    "marge_mouradi":req.body.marge_mouradi,"marge_medina":req.body.marge_medina,
    "taux_devise":req.body.taux_devise,"devise":req.body.devise,"recommender":i}
     promises.push(axios.post(URLSEARCH,requestSearch ));
 }
    let UUR=getURL(req,res,"Mouradi");
console.log(UUR)
promises.push(axios.get(UUR));
UUR=getURL(req,res,"dina");
if(req.body.Ville==1) promises.push(axios.get(UUR));
 axios.all(promises)
 .then(axios.spread((...args) => {
 total_search=[]
 let total_search_request=[]
     for (let i = 0; i < 2; i++) 
     {
      let hotels_search=[]
      let data:any[]=args[i].data.hotels_search
    


   
   
     
//console.log(request_search)
if(args[i].data!=undefined )
{


for(var h=0;h<data.length;h++)
{
let disponible={Code:1,Centent:"On demand"}
if(data[h].dispo=="Disponibles")disponible={Code:0,Centent:"Available"}
hotels_search.push( {"IdHotel":data[h].idhotel,"Name":data[h].nom,
"Offer":{"Name":data[h].typeperiod,"PromotionTitle":data[h].PromotionTitle},
"Extra":"","City": {
"Id": req.body.Ville,
"Content": data[h].villeTitle
},"Rooms":data[h].Rooms,
"ThumbImage":{"Url":data[h].image},"Category":data[h].etoile,
"Latitude": "",
"Longitude": "",
"DestinationCode":"TN",
"Available":disponible,"Currency":data[h].devise,TotalPrice:data[h].price});

}
      //  console.log(" affichage pour i == ",i,"  " ,args[i].data);
      if(hotels_search!=undefined)      total_search=[ ...total_search, ...hotels_search]
  
      if(hotels_search!=undefined)   total_search_request=[ ...total_search_request, ...data]
    }
  } // fin for i
/*
  if(args.length>2) 
    for (let i = 2; i < args.length; i++)
  if(args[i].data!=undefined) 
    {
      let search_cyberesa:any[]
      let request_search:any[]
      let hotels_search:any[]
    if (i==2) search_cyberesa= search_cyberesa_out(res,req,args[i].data,"Mouradi",req.body.age_enfants,0)
  else  search_cyberesa=search_cyberesa_out(res,req,args[i].data,"dina",req.body.age_enfants,1)
    //  console.log(" affichage pour i == ",i,"  " ,args[i].data);
      
    total_search=[ ...total_search, ...search_cyberesa[0]]
    total_search_request=[ ...total_search_request, ...search_cyberesa[1]]
     } // fin for i >2
     */
     const uuid= uuidv1()
     sortMe(total_search,"price","desc")
     let tabMinMax=Array.from(total_search,elt=>elt.TotalPrice)
     let minVal=Math.min(...tabMinMax)
     let maxVal=Math.max(...tabMinMax)
     if(minVal>0)
     tabmin.push(minVal)
     if(maxVal>0)
     tabmax.push(maxVal)
     if(!res.headersSent) res.send({NbHotel:total_search.length,Uuid:uuid,Filter:{MinRate:Math.min(...tabmin),MaxRate:Math.max(...tabmax)},HotelsSearch:total_search})
  var pollObject = new requestModel();
   // Calling our model function.
   // We nee to validate our payload here.
   for(var indexTotal=0;indexTotal<total_search_request.length;indexTotal++)
   {
    //console.log(indexTotal,"enfant_c",total_search_request[indexTotal].age_enfants_c);
     var obj = total_search_request[indexTotal].enfants_c
     var enfants_c=[]
     Object.keys(obj).map(function(personNamedIndex){
       enfants_c[personNamedIndex] = obj[personNamedIndex];
       // do something with person

   });
   var obj = total_search_request[indexTotal].adults
   var adults=[]
   Object.keys(obj).map(function(personNamedIndex){
     adults[personNamedIndex] = obj[personNamedIndex];
     // do something with person

 });
 var obj = total_search_request[indexTotal].bebes
 var bebes=[]
 Object.keys(obj).map(function(personNamedIndex){
   bebes[personNamedIndex] = obj[personNamedIndex];
   // do something with person

});


var obj = total_search_request[indexTotal].pax_c
var pax_c=[]
Object.keys(obj).map(function(personNamedIndex){
 pax_c[personNamedIndex] = obj[personNamedIndex];
 // do something with person

});
var obj = total_search_request[indexTotal].pax_orig
var pax_orig=[]
Object.keys(obj).map(function(personNamedIndex){
 pax_orig[personNamedIndex] = obj[personNamedIndex];
 // do something with person

});
var obj = total_search_request[indexTotal].pax_r
var pax_r=[]
Object.keys(obj).map(function(personNamedIndex){
 pax_r[personNamedIndex] = obj[personNamedIndex];
 // do something with person

});

adults[0]=0;
enfants_c[0]=0;
bebes[0]=0;
pax_c[0]=0;
pax_orig[0]=0;
pax_r[0]=0;

//console.log(total_search_request[indexTotal].adults," xx ",adults);

     var request={"Uuid":uuid,"Idhotel":total_search_request[indexTotal].idhotel,
     "request":{"CodeLam":total_search_request[indexTotal].CodeLam,
     "pax_r_global":total_search_request[indexTotal].pax_r_global,
     "taux_devise":req.body.taux_devise,"devise":req.body.devise,"nom":total_search_request[indexTotal].nom,
     "ville":total_search_request[indexTotal].ville,
     "bebes":bebes,"min_nuit":1,"idperiod":total_search_request[indexTotal].idperiod,
     "user_id":req.body.id_agence,"id_agence":req.body.id_agence,
     "idhotel":total_search_request[indexTotal].idhotel,"nbcham":total_search_request[indexTotal].nbcham,
     "adults":adults,"enfants":enfants_c,"datearrive":req.body.datearrive,
     "datedepart":req.body.datedepart,
     "pax_c":pax_c,
     "pax_orig":pax_orig,
     "marge_affichage":req.body.marge_affichage,"operation_affichage":req.body.operation_affichage,
     "pourcent_affichage":req.body.pourcent_affichage,
     "marge":req.body.marge,"pourcent":req.body.pourcent,"operation":req.body.operation,
     "age_enfants":total_search_request[indexTotal].age_enfants_c,
     "marge_mouradi":req.body.marge_mouradi,"marge_medina":req.body.marge_medina}}
     pollObject.addNewRequest(request, function (err, pollResponse) {
       if (err) {
        console.log({ "responseCode": 1, "responseDesc": pollResponse });
       }
 console.log("search1",pollResponse );
     });
     
   //  console.log(total_search [indexTotal].pax_c)
   }




 }))
             
   
            
            })
    .catch(error => res.status(200).send({"Success":false,"Message": "Error in request"}));


   
  }, 




affiche(req,res){
(async () => {
  try {
    const res = await fetch("http://localhost:4000/apiB2B/list/"+req.body.villemouradi);
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    const user = await res.json();
  // console.log(req.body)
 } catch (err) {
    console.error(err);
  }
})();
},
























list(req, res) {
    console.log("--------------------okkkkkkkkkkkkkkkkk----------------------------------okkkk"+req.body.ville)
       return mappage
    .findAll({
      where: {villedotcom: req.params.Ville},
            
        
    })
          .then(hotel => {
            if (!hotel) {
              return res.status(404).send({
                message: 'hotel pas trouvée',
              });
            }
           // console.log(hotel.dataValues)
res.json(hotel)
           // return(hotel);
          })
          .catch(error => res.status(400).send(error));
      },



//sc-21-04-2020








//sc-21-04-2020























  create_multi(req, res,next) {
  //sc-27-04-2020 

    let age_enfants=[[]]
    let age_enfants_o=req.body.age_enfants
 
    for (var i = 1; i <= req.body.nb_chambre; i++) {
     if(parseInt(req.body.enfants[i])>0)
     { age_enfants[i]=[]
       for(var j=1;j<=req.body.enfants[i];j++)
     {  
      if(parseInt(req.body.age_enfants[i][j-1])>0) 
   
    age_enfants[i][j]=req.body.age_enfants[i][j-1];
   
   
   
   
     //	age_enfants_c[i][j]=age_enfants[i][j];
       
     
     }
     }
}
     //console.log(age_enfants);
     const sequelize=db.sequelize;
     sequelize.query("select p.taux_dzd as taux_dzd,  a.id as idagence,marge,operation,pourcent,	marge_affichage,pourcent_affichage,operation_affichage,	marge_mouradi,	marge_medina,taux_devise,devise from agence a,parametre p,members_btb m where  p.id=1 and a.id=m.idagence  and m.id="+req.body.user_id 
     , { type: sequelize.QueryTypes.SELECT}	, {	
             }		   
              )
   
       .then(agence =>{ 
     //console.log(agence);
   console.log("tauxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+agence[0].taux_dzd)
     req.body.id_agence=agence[0].idagence
     req.body.marge=agence[0].marge
     req.body.pourcent=agence[0].pourcent
     req.body.operation=agence[0].operation
     req.body.marge_affichage=agence[0].marge_affichage
     req.body.pourcent_affichage=agence[0].pourcent_affichage
     req.body.operation_affichage=agence[0].operation_affichage
     req.body.marge_mouradi=agence[0].marge_mouradi
     req.body.marge_medina=agence[0].marge_medina
     req.body.taux_devise=agence[0].taux_devise
     req.body.devise=agence[0].devise
   let hn=req.body.hotelname
     let promises = [];
   console.log  ("--------------------------"+hn.indexOf("dina"))

     for (let i = 0; i < 2; i++) {
     let requestSearch= {

        "datearrive":req.body.datearrive,"datedepart":req.body.datedepart,"Ville":req.body.Ville,
        "user_id":req.body.user_id,"hotelname":req.body.hotelname,"etoiles":req.body.etoiles,
        "age_enfants":req.body.age_enfants,"adults":req.body.adults,
        "enfants":req.body.enfants,"nb_chambre":req.body.nb_chambre,"id_agence":req.body.id_agence,
        "marge_affichage":req.body.marge_affichage,
        "pourcent_affichage":req.body.pourcent_affichage,"operation_affichage":req.body.operation_affichage,
        "marge_mouradi":req.body.marge_mouradi,"marge_medina":req.body.marge_medina,
        "taux_devise":req.body.taux_devise,"devise":req.body.devise,"recommender":i}
         promises.push(axios.post(URLSEARCH,requestSearch ));
     }



     axios.all(promises)
     .then(axios.spread((...args) => {
     total_search=[]
         for (let i = 0; i < 2; i++) {
          let hotels_search:any[]= args[i].data.hotels_search

  if(hotels_search!=undefined)      for(var h=0;h<hotels_search.length;h++)
         {hotels_search[h].age_enfants=req.body.age_enfants}
       if(hotels_search!=undefined)      total_search=[ ...total_search, ...hotels_search]
         }
        
for (let i = 2; i <= args.length; i++) {

          let hotels_search:any[]
 req.body.Login="49clUslO5LKIN2aGTM9Csw=="
 req.body.Password="dl6cOpQSBLy44wfMLVkINjUKV1ikYhgZ"
 req.body.User="3132"
 req.body.Language= "1"
 req.body.FromDate=req.body.datearrive
 req.body.ToDate=req.body.datedepart
 //req.body.IdCity="106"
 req.body.Adult=req.body.adults[1]
// req.body.NumChild=req.body.enfants[1]
req.body.ageChild=req.body.age_enfants[1][0]
for(let child=0;child<req.body.nb_chambre;child++)
{
console.log("adiltesssssssssssssssssssssssssssssssss"+req.body.adults[child+1])
console.log("enfantsssssssssssssssssssssssssss"+req.body.enfants[child+1])
//console.log("ageeeeeeeeeeeenfants"+req.body.age_enfants[child,child+1])
}
console.log("agechilddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"+req.body.age_enfants[1][0])
if (req.body.ageChild <2)
{console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkage")
 req.body.NumChild=0
req.body.ageChild =0

}
else{
req.body.NumChild=req.body.enfants[1]                  
req.body.ageChild =req.body.age_enfants[1]
}
 req.body.ItemsPerPage="50"
 req.body.PageNumber="1"
 req.body.Keywords="Mouradi"
 req.body.Title="Tunisie"
//console.log("ressssssssssssssssssssssssssssssssssssss---------------------adullllllllllllllllllllllllll-----------"+req.body.adults[1])
//axios.post("http://10.10.20.88:4000/apiB2B/list ",req.body).then(response=>{console.log("---------------------rech--------"+ Object.entries(response))})


  return mappage
  .findAll({
    //where: {villedotcom: req.params.Ville},
})          .then(hotel => {
          if (!hotel) {
            return res.status(404).send({
              message: 'hotel pas trouv  e',
            });
          }
//console.log("hotellllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"+hotel)
        

let idcity;
idcity=chercheville(hotel,req.body.Ville)
//sc-22-04-2020
console.log("------------------------------------------------------------------------------------------------------***************---------"+req.body.Ville)
 req.body.IdCity=idcity
//sc-22-04-2020
//req.body.IdCity="106"
//req.body.username="dotcom"
//req.body.userid=
  axios.post("http://10.10.20.23:4000/HotelSearch ",req.body).then(response=>{
console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+response.data)
if(response.data!="error")
{

        hotels_search= recherchecybersa(response.data,req.body,hotel)
}

console.log("-----------------------22-04-2020******************************************************************************************-------------------------------------------------------------------------------------------------------------"+hotels_search)

        if (i==2)
{
if(response.data!="error")
{

          total_search=[ ...total_search, ...hotels_search]

}
else{
 total_search=[ ...total_search]}
}
         const uuid= uuidv1()
         sortMe(total_search,"price","desc")
         let tabMinMax=Array.from(total_search,elt=>elt.price)
         let minVal=Math.min(...tabMinMax)
         let maxVal=Math.max(...tabMinMax)
         if(minVal>0)
         tabmin.push(minVal)
         if(maxVal>0)
         tabmax.push(maxVal)


    

  
  if(req.body.devise1=="TND")
{
  for(let i=0;i<total_search.length;i++)
  {
    console.log("-----------------------------------------------27-02-2020"+total_search[i].pricedzd)
    total_search[i].pricedzd=0
  }
}

  
       res.status(200).send({nbHotel:total_search.length,uuid:uuid,filter:{minRate:Math.min(...tabmin),maxRate:Math.max(...tabmax)},hotels_Search:total_search})


//schh

 var pollObject = new requestModel();
       // Calling our model function.
       // We nee to validate our payload here.
       
    
       for(var indexTotal=0;indexTotal<total_search.length;indexTotal++)
       {

 var obj = total_search[indexTotal].enfants_c
         var enfants_c=[]
         Object.keys(obj).map(function(personNamedIndex){
           enfants_c[personNamedIndex] = obj[personNamedIndex];
           // do something with person
   
       });




 var obj = total_search[indexTotal].adults
       var adults=[]
       Object.keys(obj).map(function(personNamedIndex){
         adults[personNamedIndex] = obj[personNamedIndex];
         // do something with person
   
     });


var obj = total_search[indexTotal].bebes
     var bebes=[]
     Object.keys(obj).map(function(personNamedIndex){
       bebes[personNamedIndex] = obj[personNamedIndex];
       // do something with person
   
   });
   
   
   var obj = total_search[indexTotal].pax_c
   var pax_c=[]
   Object.keys(obj).map(function(personNamedIndex){
     pax_c[personNamedIndex] = obj[personNamedIndex];
     // do something with person
   
   });
   var obj = total_search[indexTotal].pax_orig
   var pax_orig=[]
   Object.keys(obj).map(function(personNamedIndex){
     pax_orig[personNamedIndex] = obj[personNamedIndex];
     // do something with person
   
   });
   var obj = total_search[indexTotal].pax_r
   var pax_r=[]
   Object.keys(obj).map(function(personNamedIndex){
     pax_r[personNamedIndex] = obj[personNamedIndex];
     // do something with person
   
   });



adults[0]=0;
   enfants_c[0]=0;
   bebes[0]=0;
   pax_c[0]=0;
   pax_orig[0]=0;
   pax_r[0]=0;


   var request={"Uuid":uuid,"Idhotel":total_search[indexTotal].idhotel,
   "request":{"CodeLam":total_search[indexTotal].CodeLam,
   "pax_r_global":total_search[indexTotal].pax_r_global,
   "taux_devise":req.body.taux_devise,"devise":req.body.devise,"nom":total_search[indexTotal].nom,
   "ville":total_search[indexTotal].ville,
   "bebes":bebes,"min_nuit":1,"idperiod":total_search[indexTotal].idperiod,
   "user_id":req.body.id_agence,"id_agence":req.body.id_agence,
   "idhotel":total_search[indexTotal].idhotel,"nbcham":total_search[indexTotal].nbcham,
   "adults":adults,"enfants":enfants_c,"datearrive":req.body.datearrive,
   "datedepart":req.body.datedepart,
   "pax_c":pax_c,
   "pax_orig":pax_orig,
   "marge_affichage":req.body.marge_affichage,"operation_affichage":req.body.operation_affichage,
   "pourcent_affichage":req.body.pourcent_affichage,
   "marge":req.body.marge,"pourcent":req.body.pourcent,"operation":req.body.operation,
   "age_enfants":total_search[indexTotal].age_enfants_c,
   "marge_mouradi":req.body.marge_mouradi,"marge_medina":req.body.marge_medina}}




  pollObject.addNewRequest(request, function (err, pollResponse) {
           if (err) {
            console.log("benzoooo",{ "responseCode": 1, "responseDesc": pollResponse });
           }

});





}
//schh






})  })}
















       var pollObject = new requestModel();
       // Calling our model function.
       // We nee to validate our payload here.
       
    
       for(var indexTotal=0;indexTotal<total_search.length;indexTotal++)
       {
       //  console.log(Object.values(total_search[indexTotal].age_enfants_c));
         var obj = total_search[indexTotal].enfants_c
         var enfants_c=[]
         Object.keys(obj).map(function(personNamedIndex){
           enfants_c[personNamedIndex] = obj[personNamedIndex];
           // do something with person
   
       });
       var obj = total_search[indexTotal].adults
       var adults=[]
       Object.keys(obj).map(function(personNamedIndex){
         adults[personNamedIndex] = obj[personNamedIndex];
         // do something with person
   
     });
     var obj = total_search[indexTotal].bebes
     var bebes=[]
     Object.keys(obj).map(function(personNamedIndex){
       bebes[personNamedIndex] = obj[personNamedIndex];
       // do something with person
   
   });
   
   
   var obj = total_search[indexTotal].pax_c
   var pax_c=[]
   Object.keys(obj).map(function(personNamedIndex){
     pax_c[personNamedIndex] = obj[personNamedIndex];
     // do something with person
   
   });
   var obj = total_search[indexTotal].pax_orig
   var pax_orig=[]
   Object.keys(obj).map(function(personNamedIndex){
     pax_orig[personNamedIndex] = obj[personNamedIndex];
     // do something with person
   
   });
   var obj = total_search[indexTotal].pax_r
   var pax_r=[]
   Object.keys(obj).map(function(personNamedIndex){
     pax_r[personNamedIndex] = obj[personNamedIndex];
     // do something with person
   
   });
   
   adults[0]=0;
   enfants_c[0]=0;
   bebes[0]=0;
   pax_c[0]=0;
   pax_orig[0]=0;
   pax_r[0]=0;
   
   //console.log(total_search[indexTotal].adults," xx ",adults);
   console.log("/////////////////////////////////////////////////////////////////////////////////")
         
        console.log(total_search[indexTotal].age_enfants_c)
       }
    
     }))
     
        
      
     
    
                
      
               
               })
   /*
    let child1=processus.fork('./server/controllers/proc.ts');
    child1.send({"req":req,"res":res,"recommender":1});
    child1.on('message',function(msg){
      console.log("message processus1",msg)
    })
   
    let child2=processus.fork('./server/controllers/proc.ts');
    child2.send({"req":req,"res":res,"recommender":0});
    child2.on('message',function(msg){
      console.log("message processus2",msg)
    })*/
   
    //  H.nonRecommender(req,res)
   //   H.recommender(req,res)
   
   
     /* sequelize.query("INSERT into khaled_log.reservation (idsession,user_id,idagence,date_from,date_to,nbnuit,enfant,taux_devise,devise,ville) ('" + maher + "','" + req.body.user_id + "','" + req.body.idagence + "','" + req.body.date_from + "','" + req.body.date_to + "','" + req.body.nbnuit + "','" + req.body.enfant + "','" + req.body.taux_devise + "','" + req.body.devise + "','" + req.body.ville + "')'"
      , { type: sequelize.QueryTypes.INSERT}	    )
   
        .then(console.log("log ok"))
        .catch(error => res.status(400).send(error));*/
   
     },




searchxmlxml(req,res)
{
  console.log("ok")


  //192.168.42.110:4000/apiB2B/xmlsearch
  //
 axios.post("http://10.10.20.21:3000/HotelSearch ",req.body).then(response=>{
   console.log(response.data)
//HotelSearchRES
let hotel_search;
console.log("-----------------------------------------------------------------------souhir24-03-2020---------------------"+req.body)
hotel_search
//recherchecybersa(response.data,req.body,hotel)
 //res.send(response.data.HotelSearchRES.Hotels.Hotel[0])
console.log("*******************************************************************************************length************"+hotel_search.length)
res.send(hotel_search)

 })
 //axios.put("http://10.10.20.92:4001/apiB2B/annuler/"+req.params.ref, req.params.ref).then(response_booking => {

},
searchxml(req,res){
/* let xml2js = require('xml2js');
//let xmlParser = require('xml2json');//pour parser de xml-->json
var js2xmlparser = require("js2xmlparser"); //pour parser json--->xml

  var request = require('request');
  var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}
let h=js2xmlparser.parse( "HotelDetailRQ", {
        "Credential": {
            "Login": "49clUslO5LKIN2aGTM9Csw==",
            "Password": "dl6cOpQSBLy44wfMLVkINjUKV1ikYhgZ"
        },
        "User": "3132",
        "Ilng": "1",
"HotelID": "713",
       // "WithHotelMap": "True",
       // "WithHotelAdvancedDetail": "True",
       // "WithHotelSections": "True",
       // "WithHotelReviews": "True",
       // "WithHotelImages": "True",
       "WithTravellersReviews": "True",
       // "Source": "True"
    }
)

let xmlMouradiRequest =h
// `<HotelDetailRQ> <Credential><Login>49clUslO5LKIN2aGTM9Csw==</Login><Password>dl6cOpQSBLy44wfMLVkINjUKV1ikYhgZ</Password></Credential><Ilng>1</Ilng><User>3132</User>$

// let xmlMouradiRequest ={"StaticDataRQ":{"Credential":{"Login":"49clUslO5LKIN2aGTM9Csw==","Password":"dl6cOpQSBLy44wfMLVkINjUKV1ikYhgZ"},"Ilng":"1", "User":"3132"}}

let options = {
    url:'http://www.elmouradi.com/cr.ws/hotel.asmx/WebServiceRQ',
    method: 'POST',
    headers: headers,
    form: { "strRQ":xmlMouradiRequest}

}
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
    //  console.log(body)
       // res.send(body)
    //res.json(body)
    // console.log(SHA256('15550&422&10000006&01999131&dotcomtunisia.com/&TEST'));
     // 'Signature':'SHA256(15550&422&10000006&01999131&www.dotcomtunisia.com/&TEST)'
       res.send(body)
      // let a= sha256('hello')
          }
})
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();
//xhr.open('POST', 'https://www.netcommercepay.com/iPAY/');
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//xhr.send('payment_mode=' + "test" + '&txtAmount=' + 2225.00+'&txtCurrency=' + 840+'&txtIndex=' + 21111+    '&txtMerchNum=' + 21111+ '&txthttp=' + 21111+          $
*/



//res.send("ok")
console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

res.send('bad');


return ("ok")



},















 
  create2(req, res,next) {
    
    const axios = require('axios');
    const WebSocket = require('ws');
    const URLSEARCH= require('./transporter.js').URLSEARCH; 
 var   maher=req.headers.uix
 let age_enfants=[[]]
 let enfants=[]
 let adults=[]
 let Occupancies=req.body.Occupancies
for(var indexRoom=0;indexRoom<Occupancies.length;indexRoom++)
{
  adults[indexRoom+1]=Occupancies[indexRoom].Adults
  enfants[indexRoom+1]=Occupancies[indexRoom].Children.Count
  let Ages=Occupancies[indexRoom].Children.Ages
  let SplitAges=Ages.split("-")
  if(enfants[indexRoom+1]>0){
    age_enfants[indexRoom+1]=[]
  for (var indexAge=0;indexAge<SplitAges.length;indexAge++)
  {
    age_enfants[indexRoom+1][indexAge+1]=SplitAges[indexAge]

  }//fin for age
}// fin if enfant
} // fin rooms
console.log("Ad",adults,"Enf",enfants,'Age',age_enfants)




 let arrival = req.body.CheckIn.split ("-");
 let date_from=arrival[2]+"/"+arrival[1]+'/'+arrival[0]

 let depart = req.body.CheckOut.split ("-");
 let date_to=depart[2]+"/"+depart[1]+'/'+depart[0]
 req.body.datearrive=date_from
 req.body.datedepart=date_to
 req.body.Ville=req.body.CityID
// console.log(date_from,date_to)

/*
  req.body.datearrive=date_from
  req.body.datedepart=date_to
  req.body.Ville=req.body.CityID
 for (var i = 1; i <= req.body.nb_chambre; i++) {
  if(parseInt(req.body.enfants[i-1])>0)
  { age_enfants[i]=[]
    for(var j=1;j<=req.body.enfants[i-1];j++)
  {  
   // console.log(i, "j",j)
   if(parseInt(req.body.age_enfants[i-1][j-1])>0) 

 age_enfants[i][j]=req.body.age_enfants[i-1][j-1];




  //	age_enfants_c[i][j]=age_enfants[i][j];
    
  
  }
  }
  
 



 .catch(error => res.status(400).send(error));
 .catch(error => res.status(400).send(error));
 .catch(error => res.status(400).send(error));
 .catch(error => res.status(400).send(error));




}
  for (var i:number = req.body.nb_chambre; i >=1; i--) {
    req.body.adults[i]=req.body.adults[i-1]

    req.body.enfants[i]=req.body.enfants[i-1]

  
  
 

  




  
  
  }
  req.body.age_enfants=age_enfants*/

 // console.log("age enfaa",req.body.age_enfants)
  //console.log("enf xx ", req.body.age_enfants)

  req.body.user_id=req.body.UserID
  req.body.KeyWords=req.body.Filter.KeyWords
  req.body.hotelname=req.body.KeyWords
let Category=req.body.Filter.Category
let where_etoile="";
if(Category.length==1)
    where_etoile= " and h.etoile="+Category[0]+" "
else if(Category.length>1) 
{
  for(var indexCategory=0;indexCategory<Category.length;indexCategory++)
  {
    if(indexCategory==0)
    where_etoile= " and (h.etoile="+Category[0]+" " 
   else if(indexCategory<Category.length-1)
    where_etoile+= " or h.etoile="+Category[indexCategory]+" " 
   else  if(indexCategory==Category.length-1)
    where_etoile+= " or h.etoile="+Category[indexCategory]+") " 
  }
  
}

console.log(where_etoile)
req.body.etoiles=req.body.Filter.Category[0]
if(!req.body.etoiles)req.body.etoiles=0;
console.log("etoiles",req.body.etoiles)
  req.body.Category=where_etoile
  req.body.age_enfants=age_enfants
  req.body.enfants=enfants
  req.body.adults=adults
  req.body.nb_chambre=req.body.Occupancies.length
if(!req.body.Filter.Sort)
{
  req.body.Filter.Sort={"By":"TotalPrice","Order":"desc"}
}
  const sequelize=db.sequelize;
  sequelize.query("select a.id as idagence,	marge_affichage,pourcent_affichage,operation_affichage,	marge_mouradi,	marge_medina,taux_devise,devise from agence a,members_btb m where a.id=m.idagence  and m.id="+req.body.user_id 
  , { type: sequelize.QueryTypes.SELECT}	, {	
          }		   
           )

    .then(agence =>{ 
  //console.log(agence);

  req.body.id_agence=agence[0].idagence
  req.body.marge_affichage=agence[0].marge_affichage
  req.body.pourcent_affichage=agence[0].pourcent_affichage
  req.body.operation_affichage=agence[0].operation_affichage
  req.body.marge_mouradi=agence[0].marge_mouradi
  req.body.marge_medina=agence[0].marge_medina
  req.body.taux_devise=agence[0].taux_devise
  req.body.devise=agence[0].devise
  //req.body.etoile=agence[0].Category[0]
  tr_out.reset()
  tr_out.create(req,res,"Mouradi")
  tr_out.create(req,res,"dina")
  /*
   let child1=processus.fork('./server/controllers/proc.ts');
   child1.send({"req":req,"res":res,"recommender":1});
   child1.on('message',function(msg){
     console.log("message processus1",msg)
   })

   let child2=processus.fork('./server/controllers/proc.ts');
   child2.send({"req":req,"res":res,"recommender":0});
   child2.on('message',function(msg){
     console.log("message processus2",msg)
   })*/
  tr_out.traitement(req,res,1)
  tr_out.traitement(req,res,0)
  tr_out.verify_send(req,res,next)

  
     
   
  
  //res.status(200).send(agence)
            
 // console.log(req.body)
             
   
            
            })
    .catch(error => res.status(400).send(error));

  /*  tr_out.traitement(req,res,1)
    tr_out.traitement(req,res,0)
     
    tr_out.create(req,res,"Mouradi")
    tr_out.create(req,res,"dina")*/
   /*setTimeout(function(){  
  
    console.log(agence.idagence);
    
    }, 100);*/
 //  H.nonRecommender(req,res)
//   H.recommender(req,res)


  /* sequelize.query("INSERT into khaled_log.reservation (idsession,user_id,idagence,date_from,date_to,nbnuit,enfant,taux_devise,devise,ville) ('" + maher + "','" + req.body.user_id + "','" + req.body.idagence + "','" + req.body.date_from + "','" + req.body.date_to + "','" + req.body.nbnuit + "','" + req.body.enfant + "','" + req.body.taux_devise + "','" + req.body.devise + "','" + req.body.ville + "')'"
   , { type: sequelize.QueryTypes.INSERT}	    )

     .then(console.log("log ok"))
     .catch(error => res.status(400).send(error));*/
   //res.json(maher)
   
  }, 
  create3(req, res) {



    
    let date = new Date()
     
   
      
    console.log("debut request"," ",date)
    const axios = require('axios');
    const WebSocket = require('ws');
    const URLSEARCH= require('./transporter.js').URLSEARCH; 
 
 let age_enfants=[[]]
 let enfants=[]
 let adults=[]
 let Occupancies=req.body.Occupancies
for(var indexRoom=0;indexRoom<Occupancies.length;indexRoom++)
{

  adults[indexRoom+1]=Occupancies[indexRoom].Adults
  enfants[indexRoom+1]=Occupancies[indexRoom].Children.Count
  let Ages=Occupancies[indexRoom].Children.Ages
  let SplitAges=Ages.split("-")
  if(enfants[indexRoom+1]>0){
    age_enfants[indexRoom+1]=[]
  for (var indexAge=0;indexAge<SplitAges.length;indexAge++)
  {
    age_enfants[indexRoom+1][indexAge+1]=SplitAges[indexAge]

  }//fin for age
}// fin if enfant
} // fin rooms





 let arrival = req.body.CheckIn.split ("-");
 let date_from=arrival[2]+"/"+arrival[1]+'/'+arrival[0]

 let depart = req.body.CheckOut.split ("-");
 let date_to=depart[2]+"/"+depart[1]+'/'+depart[0]
 req.body.datearrive=date_from
 req.body.datedepart=date_to
 req.body.Ville=req.body.CityID


  req.body.user_id=req.body.UserID
  req.body.KeyWords=req.body.Filter.KeyWords
  req.body.hotelname=req.body.KeyWords
let Category=req.body.Filter.Category
let where_etoile="";
if(Category.length==1)
    where_etoile= " and h.etoile="+Category[0]+" "
else if(Category.length>1) 
{
  for(var indexCategory=0;indexCategory<Category.length;indexCategory++)
  {
    if(indexCategory==0)
    where_etoile= " and (h.etoile="+Category[0]+" " 
   else if(indexCategory<Category.length-1)
    where_etoile+= " or h.etoile="+Category[indexCategory]+" " 
   else  if(indexCategory==Category.length-1)
    where_etoile+= " or h.etoile="+Category[indexCategory]+") " 
  }
  
}


req.body.etoiles=req.body.Filter.Category[0]

if(!req.body.etoiles)req.body.etoiles=0;

console.log("etoiles",req.body.etoiles)
  req.body.Category=where_etoile
  req.body.age_enfants=age_enfants
  req.body.enfants=enfants
  req.body.adults=adults
  req.body.nb_chambre=req.body.Occupancies.length
if(!req.body.Filter.Sort)
{
  req.body.Filter.Sort={"By":"TotalPrice","Order":"desc"}
}
  const sequelize=db.sequelize;
  sequelize.query("select a.id as idagence,	marge_affichage,pourcent_affichage,operation_affichage,	marge_mouradi,	marge_medina,taux_devise,devise from agence a,members_btb m where a.id=m.idagence  and m.id="+req.body.user_id 
  , { type: sequelize.QueryTypes.SELECT}	, {	
          }		   
           )

    .then(agence =>{ 
  //console.log(agence);

  req.body.id_agence=agence[0].idagence
  req.body.marge_affichage=agence[0].marge_affichage
  req.body.pourcent_affichage=agence[0].pourcent_affichage
  req.body.operation_affichage=agence[0].operation_affichage
  req.body.marge_mouradi=agence[0].marge_mouradi
  req.body.marge_medina=agence[0].marge_medina
  req.body.taux_devise=agence[0].taux_devise
  req.body.devise=agence[0].devise
  //req.body.etoile=agence[0].Category[0]
  //tr_out.reset()
            

  let date = new Date()
     
   
      
  console.log("debut prox1"," ",date)
  let child1=processus.fork('./server/controllers/proc.ts');
   
   prox.push(false)

   /*let child2=processus.fork('./server/controllers/proc.ts');
   prox.push(false)*/
    date = new Date()
     
   
      
   console.log("debut prox2"," ",date)
   let child3=processus.fork('./server/controllers/proc.ts');
   prox.push(false)
   /*let child4=processus.fork('./server/controllers/proc.ts');
   prox.push(false)*/
   child1.send( {"req":{
    "Category":req.body.Category,
    "datearrive":req.body.datearrive,"datedepart":req.body.datedepart,"Ville":req.body.Ville,
    "user_id":req.body.user_id,"hotelname":req.body.hotelname,"etoiles":req.body.etoiles,
    "age_enfants":req.body.age_enfants,"adults":req.body.adults,
    "enfants":req.body.enfants,"nb_chambre":req.body.nb_chambre,"id_agence":req.body.id_agence,
    "marge_affichage":req.body.marge_affichage,
    "pourcent_affichage":req.body.pourcent_affichage,"operation_affichage":req.body.operation_affichage,
    "marge_mouradi":req.body.marge_mouradi,"marge_medina":req.body.marge_medina,
    "taux_devise":req.body.taux_devise,"devise":req.body.devise,"recommender":0},"id":0,"Provider":"Dotcom"});
   child1.on('message',function(msg){
  //   console.log("message processus1",msg)
     functionverifyTerminatedTasks(msg,req,res)
   });
/*
   child2.send( {"req":{
    "Category":req.body.Category,
    "datearrive":req.body.datearrive,"datedepart":req.body.datedepart,"Ville":req.body.Ville,
    "user_id":req.body.user_id,"hotelname":req.body.hotelname,"etoiles":req.body.etoiles,
    "age_enfants":req.body.age_enfants,"adults":req.body.adults,
    "enfants":req.body.enfants,"nb_chambre":req.body.nb_chambre,"id_agence":req.body.id_agence,
    "marge_affichage":req.body.marge_affichage,
    "pourcent_affichage":req.body.pourcent_affichage,"operation_affichage":req.body.operation_affichage,
    "marge_mouradi":req.body.marge_mouradi,"marge_medina":req.body.marge_medina,
    "taux_devise":req.body.taux_devise,"devise":req.body.devise,"recommender":1},"id":1,"Provider":"Dotcom"});
   child2.on('message',function(msg){
   //  console.log("message processus2",msg)
     functionverifyTerminatedTasks(msg,req,res)
   });
*/
   child3.send( {"req":{
    "Category":req.body.Category,
    "datearrive":req.body.datearrive,"datedepart":req.body.datedepart,"Ville":req.body.Ville,
    "user_id":req.body.user_id,"hotelname":req.body.hotelname,"etoiles":req.body.etoiles,
    "age_enfants":req.body.age_enfants,"adults":req.body.adults,
    "enfants":req.body.enfants,"nb_chambre":req.body.nb_chambre,"id_agence":req.body.id_agence,
    "marge_affichage":req.body.marge_affichage,
    "pourcent_affichage":req.body.pourcent_affichage,"operation_affichage":req.body.operation_affichage,
    "marge_mouradi":req.body.marge_mouradi,"marge_medina":req.body.marge_medina,
    "taux_devise":req.body.taux_devise,"devise":req.body.devise},"id":1,"Provider":"Mouradi"});
   child3.on('message',function(msg){
   //  console.log("message processus2",msg)
     functionverifyTerminatedTasks(msg,req,res)
   });
  /* child4.send( {"req":{
    "Category":req.body.Category,
    "datearrive":req.body.datearrive,"datedepart":req.body.datedepart,"Ville":req.body.Ville,
    "user_id":req.body.user_id,"hotelname":req.body.hotelname,"etoiles":req.body.etoiles,
    "age_enfants":req.body.age_enfants,"adults":req.body.adults,
    "enfants":req.body.enfants,"nb_chambre":req.body.nb_chambre,"id_agence":req.body.id_agence,
    "marge_affichage":req.body.marge_affichage,
    "pourcent_affichage":req.body.pourcent_affichage,"operation_affichage":req.body.operation_affichage,
    "marge_mouradi":req.body.marge_mouradi,"marge_medina":req.body.marge_medina,
    "taux_devise":req.body.taux_devise,"devise":req.body.devise,"recommender":1},"id":3,"Provider":"dina"});
   child4.on('message',function(msg){
   //  console.log("message processus2",msg)
     functionverifyTerminatedTasks(msg,req,res)
   });*/
  // console.log(req.body)
//  tr_out.traitement(req,res,1)
//  tr_out.traitement(req,res,0)
  //tr_out.verify_send(req,res,next)

  
     
   
  
  //res.status(200).send(agence)

             
   
            
            })
    

  /*  tr_out.traitement(req,res,1)
    tr_out.traitement(req,res,0)
     
    tr_out.create(req,res,"Mouradi")
    tr_out.create(req,res,"dina")*/
   /*setTimeout(function(){  
  
    console.log(agence.idagence);
    
    }, 100);*/
 //  H.nonRecommender(req,res)
//   H.recommender(req,res)


  /* sequelize.query("INSERT into khaled_log.reservation (idsession,user_id,idagence,date_from,date_to,nbnuit,enfant,taux_devise,devise,ville) ('" + maher + "','" + req.body.user_id + "','" + req.body.idagence + "','" + req.body.date_from + "','" + req.body.date_to + "','" + req.body.nbnuit + "','" + req.body.enfant + "','" + req.body.taux_devise + "','" + req.body.devise + "','" + req.body.ville + "')'"
   , { type: sequelize.QueryTypes.INSERT}	    )

     .then(console.log("log ok"))
     .catch(error => res.status(400).send(error));*/
   //res.json(maher)
   
  }, 
  //supprimer hotelsearch

  destroy(req, res) {

  },
};
