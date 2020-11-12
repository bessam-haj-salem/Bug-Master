//const ville1 = require('./ville.ts');
//const agence = require('./agence');
const list = require('./listControl');
const hotel1 = require('./hotel');
const image1 = require('./image');
const aeroport = require('./aeroport');
//*************************************************
// *********************api rafahia******************
const clientCompany = require('./clientCompany');
const trip = require('./trip');
const driver = require('./driver');
const passeport = require('./passeport');
const personalGroup = require('./personalGroup');
const vehiculeFleet = require('./vehiculeFleet');
const price = require('./price');
const passengerLuggage = require('./passengerLuggage');
const proformaInvoice = require('./proformaInvoice');
const stopover = require('./stopover');
const inspection = require('./technicalInspection');
const insurance = require('./vehiculeInsurance');
const maintenance = require('./vehiculeMaintenance');
const tva = require('./tva');
const tripDriver = require('./tripDriver');
const tripUsualCustomer = require('./tripUsualCustomer');
const tripClientCompany = require('./tripClientCompany');
const tradeMargin = require('./tradeMargin');
const rent = require('./rent');
const usualCustomer = require('./usualCustomer');
// *********************api rafahia******************
var nodemailer = require('nodemailer');
const poolConfig = {
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'reservation.tasnimevoyages@gmail.com',
        pass: 'Dotcom2016+',
    },
};
const transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'reservation.tasnimevoyages@gmail.com',
        pass: 'Dotcom2016+',
    },
});
module.exports = Object.freeze(poolConfig);
module.exports = {
    list,
    hotel1,
    image1,
    aeroport,
    //***rafahia***** */
    clientCompany,
    trip,
    driver,
    passeport,
    personalGroup,
    vehiculeFleet,
    price,
    passengerLuggage,
    proformaInvoice,
    stopover,
    inspection,
    insurance,
    maintenance,
    tva,
    tripDriver,
    tripUsualCustomer,
    tripClientCompany,
    tradeMargin,
    rent,
    usualCustomer,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNqRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6RCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELHFEQUFxRDtBQUVyRCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFdkMsTUFBTSxVQUFVLEdBQUc7SUFDakIsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLElBQUksRUFBRSxHQUFHO0lBQ1QsTUFBTSxFQUFFLElBQUk7SUFDWixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsc0NBQXNDO1FBQzVDLElBQUksRUFBRSxhQUFhO0tBQ3BCO0NBQ0YsQ0FBQztBQUNGLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDN0MsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLElBQUksRUFBRSxHQUFHO0lBQ1QsTUFBTSxFQUFFLElBQUk7SUFDWixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsc0NBQXNDO1FBQzVDLElBQUksRUFBRSxhQUFhO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixJQUFJO0lBQ0osTUFBTTtJQUNOLE1BQU07SUFDTixRQUFRO0lBQ1Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixJQUFJO0lBQ0osTUFBTTtJQUVOLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLEtBQUs7SUFDTCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxHQUFHO0lBQ0gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLElBQUk7SUFDSixhQUFhO0NBRWQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgdmlsbGUxID0gcmVxdWlyZSgnLi92aWxsZS50cycpO1xuLy9jb25zdCBhZ2VuY2UgPSByZXF1aXJlKCcuL2FnZW5jZScpO1xuY29uc3QgbGlzdCA9IHJlcXVpcmUoJy4vbGlzdENvbnRyb2wnKTtcbmNvbnN0IGhvdGVsMSA9IHJlcXVpcmUoJy4vaG90ZWwnKTtcbmNvbnN0IGltYWdlMSA9IHJlcXVpcmUoJy4vaW1hZ2UnKTtcblxuY29uc3QgYWVyb3BvcnQgPSByZXF1aXJlKCcuL2Flcm9wb3J0Jyk7XG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gKioqKioqKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKipcbmNvbnN0IGNsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuL2NsaWVudENvbXBhbnknKTtcbmNvbnN0IHRyaXAgPSByZXF1aXJlKCcuL3RyaXAnKTtcbmNvbnN0IGRyaXZlciA9IHJlcXVpcmUoJy4vZHJpdmVyJyk7XG5jb25zdCBwYXNzZXBvcnQgPSByZXF1aXJlKCcuL3Bhc3NlcG9ydCcpO1xuY29uc3QgcGVyc29uYWxHcm91cCA9IHJlcXVpcmUoJy4vcGVyc29uYWxHcm91cCcpO1xuY29uc3QgdmVoaWN1bGVGbGVldCA9IHJlcXVpcmUoJy4vdmVoaWN1bGVGbGVldCcpO1xuY29uc3QgcHJpY2UgPSByZXF1aXJlKCcuL3ByaWNlJyk7XG5jb25zdCBwYXNzZW5nZXJMdWdnYWdlID0gcmVxdWlyZSgnLi9wYXNzZW5nZXJMdWdnYWdlJyk7XG5jb25zdCBwcm9mb3JtYUludm9pY2UgPSByZXF1aXJlKCcuL3Byb2Zvcm1hSW52b2ljZScpO1xuY29uc3Qgc3RvcG92ZXIgPSByZXF1aXJlKCcuL3N0b3BvdmVyJyk7XG5jb25zdCBpbnNwZWN0aW9uID0gcmVxdWlyZSgnLi90ZWNobmljYWxJbnNwZWN0aW9uJyk7XG5jb25zdCBpbnN1cmFuY2UgPSByZXF1aXJlKCcuL3ZlaGljdWxlSW5zdXJhbmNlJyk7XG5jb25zdCBtYWludGVuYW5jZSA9IHJlcXVpcmUoJy4vdmVoaWN1bGVNYWludGVuYW5jZScpO1xuY29uc3QgdHZhID0gcmVxdWlyZSgnLi90dmEnKTtcbmNvbnN0IHRyaXBEcml2ZXIgPSByZXF1aXJlKCcuL3RyaXBEcml2ZXInKTtcbmNvbnN0IHRyaXBVc3VhbEN1c3RvbWVyID0gcmVxdWlyZSgnLi90cmlwVXN1YWxDdXN0b21lcicpO1xuY29uc3QgdHJpcENsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuL3RyaXBDbGllbnRDb21wYW55Jyk7XG5jb25zdCB0cmFkZU1hcmdpbiA9IHJlcXVpcmUoJy4vdHJhZGVNYXJnaW4nKTtcbmNvbnN0IHJlbnQgPSByZXF1aXJlKCcuL3JlbnQnKTtcbmNvbnN0IHVzdWFsQ3VzdG9tZXIgPSByZXF1aXJlKCcuL3VzdWFsQ3VzdG9tZXInKTtcbi8vICoqKioqKioqKioqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKioqXG5cbnZhciBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpO1xuXG5jb25zdCBwb29sQ29uZmlnID0ge1xuICBwb29sOiB0cnVlLFxuICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICBwb3J0OiA0NjUsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6ICdyZXNlcnZhdGlvbi50YXNuaW1ldm95YWdlc0BnbWFpbC5jb20nLFxuICAgIHBhc3M6ICdEb3Rjb20yMDE2KycsXG4gIH0sXG59O1xuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIHBvb2w6IHRydWUsXG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLFxuICBhdXRoOiB7XG4gICAgdXNlcjogJ3Jlc2VydmF0aW9uLnRhc25pbWV2b3lhZ2VzQGdtYWlsLmNvbScsXG4gICAgcGFzczogJ0RvdGNvbTIwMTYrJyxcbiAgfSxcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHBvb2xDb25maWcpO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxpc3QsXG4gIGhvdGVsMSxcbiAgaW1hZ2UxLFxuICBhZXJvcG9ydCxcbiAgLy8qKipyYWZhaGlhKioqKiogKi9cbiAgY2xpZW50Q29tcGFueSxcbiAgdHJpcCxcbiAgZHJpdmVyLFxuXG4gIHBhc3NlcG9ydCxcbiAgcGVyc29uYWxHcm91cCxcbiAgdmVoaWN1bGVGbGVldCxcbiAgcHJpY2UsXG4gIHBhc3Nlbmdlckx1Z2dhZ2UsXG4gIHByb2Zvcm1hSW52b2ljZSxcbiAgc3RvcG92ZXIsXG4gIGluc3BlY3Rpb24sXG4gIGluc3VyYW5jZSxcbiAgbWFpbnRlbmFuY2UsXG4gIHR2YSxcbiAgdHJpcERyaXZlcixcbiAgdHJpcFVzdWFsQ3VzdG9tZXIsXG4gIHRyaXBDbGllbnRDb21wYW55LFxuICB0cmFkZU1hcmdpbixcbiAgcmVudCxcbiAgdXN1YWxDdXN0b21lcixcbiAgLy8qKioqcmFmYWhpYSoqKiogKi9cbn07XG4iXX0=