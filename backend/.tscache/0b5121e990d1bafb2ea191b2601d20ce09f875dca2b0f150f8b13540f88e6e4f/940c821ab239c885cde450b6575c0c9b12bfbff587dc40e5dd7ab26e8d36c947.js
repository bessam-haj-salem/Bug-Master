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
const rentDriver = require('./rentDriver');
const usualCustomerClientCompany = require('./usualCustomerClientCompany');
const rentClientCompany = require('./rentClientCompany');
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
    rentDriver,
    usualCustomerClientCompany,
    rentClientCompany,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNqRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6RCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQyxNQUFNLDBCQUEwQixHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzNFLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQscURBQXFEO0FBRXJELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV2QyxNQUFNLFVBQVUsR0FBRztJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDO0FBQ0YsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUM3QyxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLElBQUk7SUFDSixNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLElBQUk7SUFDSixNQUFNO0lBQ04sU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0lBQ2IsS0FBSztJQUNMLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLEdBQUc7SUFDSCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsSUFBSTtJQUNKLGFBQWE7SUFDYixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGlCQUFpQjtDQUVsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zdCB2aWxsZTEgPSByZXF1aXJlKCcuL3ZpbGxlLnRzJyk7XG4vL2NvbnN0IGFnZW5jZSA9IHJlcXVpcmUoJy4vYWdlbmNlJyk7XG5jb25zdCBsaXN0ID0gcmVxdWlyZSgnLi9saXN0Q29udHJvbCcpO1xuY29uc3QgaG90ZWwxID0gcmVxdWlyZSgnLi9ob3RlbCcpO1xuY29uc3QgaW1hZ2UxID0gcmVxdWlyZSgnLi9pbWFnZScpO1xuXG5jb25zdCBhZXJvcG9ydCA9IHJlcXVpcmUoJy4vYWVyb3BvcnQnKTtcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyAqKioqKioqKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKioqKlxuY29uc3QgY2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vY2xpZW50Q29tcGFueScpO1xuY29uc3QgdHJpcCA9IHJlcXVpcmUoJy4vdHJpcCcpO1xuY29uc3QgZHJpdmVyID0gcmVxdWlyZSgnLi9kcml2ZXInKTtcbmNvbnN0IHBhc3NlcG9ydCA9IHJlcXVpcmUoJy4vcGFzc2Vwb3J0Jyk7XG5jb25zdCBwZXJzb25hbEdyb3VwID0gcmVxdWlyZSgnLi9wZXJzb25hbEdyb3VwJyk7XG5jb25zdCB2ZWhpY3VsZUZsZWV0ID0gcmVxdWlyZSgnLi92ZWhpY3VsZUZsZWV0Jyk7XG5jb25zdCBwcmljZSA9IHJlcXVpcmUoJy4vcHJpY2UnKTtcbmNvbnN0IHBhc3Nlbmdlckx1Z2dhZ2UgPSByZXF1aXJlKCcuL3Bhc3Nlbmdlckx1Z2dhZ2UnKTtcbmNvbnN0IHByb2Zvcm1hSW52b2ljZSA9IHJlcXVpcmUoJy4vcHJvZm9ybWFJbnZvaWNlJyk7XG5jb25zdCBzdG9wb3ZlciA9IHJlcXVpcmUoJy4vc3RvcG92ZXInKTtcbmNvbnN0IGluc3BlY3Rpb24gPSByZXF1aXJlKCcuL3RlY2huaWNhbEluc3BlY3Rpb24nKTtcbmNvbnN0IGluc3VyYW5jZSA9IHJlcXVpcmUoJy4vdmVoaWN1bGVJbnN1cmFuY2UnKTtcbmNvbnN0IG1haW50ZW5hbmNlID0gcmVxdWlyZSgnLi92ZWhpY3VsZU1haW50ZW5hbmNlJyk7XG5jb25zdCB0dmEgPSByZXF1aXJlKCcuL3R2YScpO1xuY29uc3QgdHJpcERyaXZlciA9IHJlcXVpcmUoJy4vdHJpcERyaXZlcicpO1xuY29uc3QgdHJpcFVzdWFsQ3VzdG9tZXIgPSByZXF1aXJlKCcuL3RyaXBVc3VhbEN1c3RvbWVyJyk7XG5jb25zdCB0cmlwQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vdHJpcENsaWVudENvbXBhbnknKTtcbmNvbnN0IHRyYWRlTWFyZ2luID0gcmVxdWlyZSgnLi90cmFkZU1hcmdpbicpO1xuY29uc3QgcmVudCA9IHJlcXVpcmUoJy4vcmVudCcpO1xuY29uc3QgdXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4vdXN1YWxDdXN0b21lcicpO1xuY29uc3QgcmVudERyaXZlciA9IHJlcXVpcmUoJy4vcmVudERyaXZlcicpO1xuY29uc3QgdXN1YWxDdXN0b21lckNsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuL3VzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55Jyk7XG5jb25zdCByZW50Q2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vcmVudENsaWVudENvbXBhbnknKTtcbi8vICoqKioqKioqKioqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKioqXG5cbnZhciBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpO1xuXG5jb25zdCBwb29sQ29uZmlnID0ge1xuICBwb29sOiB0cnVlLFxuICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICBwb3J0OiA0NjUsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6ICdyZXNlcnZhdGlvbi50YXNuaW1ldm95YWdlc0BnbWFpbC5jb20nLFxuICAgIHBhc3M6ICdEb3Rjb20yMDE2KycsXG4gIH0sXG59O1xuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIHBvb2w6IHRydWUsXG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLFxuICBhdXRoOiB7XG4gICAgdXNlcjogJ3Jlc2VydmF0aW9uLnRhc25pbWV2b3lhZ2VzQGdtYWlsLmNvbScsXG4gICAgcGFzczogJ0RvdGNvbTIwMTYrJyxcbiAgfSxcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHBvb2xDb25maWcpO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxpc3QsXG4gIGhvdGVsMSxcbiAgaW1hZ2UxLFxuICBhZXJvcG9ydCxcbiAgLy8qKipyYWZhaGlhKioqKiogKi9cbiAgY2xpZW50Q29tcGFueSxcbiAgdHJpcCxcbiAgZHJpdmVyLFxuICBwYXNzZXBvcnQsXG4gIHBlcnNvbmFsR3JvdXAsXG4gIHZlaGljdWxlRmxlZXQsXG4gIHByaWNlLFxuICBwYXNzZW5nZXJMdWdnYWdlLFxuICBwcm9mb3JtYUludm9pY2UsXG4gIHN0b3BvdmVyLFxuICBpbnNwZWN0aW9uLFxuICBpbnN1cmFuY2UsXG4gIG1haW50ZW5hbmNlLFxuICB0dmEsXG4gIHRyaXBEcml2ZXIsXG4gIHRyaXBVc3VhbEN1c3RvbWVyLFxuICB0cmlwQ2xpZW50Q29tcGFueSxcbiAgdHJhZGVNYXJnaW4sXG4gIHJlbnQsXG4gIHVzdWFsQ3VzdG9tZXIsXG4gIHJlbnREcml2ZXIsXG4gIHVzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55LFxuICByZW50Q2xpZW50Q29tcGFueSxcbiAgLy8qKioqcmFmYWhpYSoqKiogKi9cbn07XG4iXX0=