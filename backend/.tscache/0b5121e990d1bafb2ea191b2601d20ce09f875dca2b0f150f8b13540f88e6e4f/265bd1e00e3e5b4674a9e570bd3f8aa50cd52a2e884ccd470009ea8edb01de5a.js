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
const passenger = require('./passenger');
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
const tripPassenger = require('./tripPassenger');
const tripClientCompany = require('./tripClientCompany');
const tradeMargin = require('./tradeMargin');
const rent = require('./rent');
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
    passenger,
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
    tripPassenger,
    tripClientCompany,
    tradeMargin,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN2RCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNyRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDcEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDakQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDckQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IscURBQXFEO0FBRXJELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV2QyxNQUFNLFVBQVUsR0FBRztJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDO0FBQ0YsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUM3QyxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLElBQUk7SUFDSixNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLElBQUk7SUFDSixNQUFNO0lBQ04sU0FBUztJQUNULFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLEtBQUs7SUFDTCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxHQUFHO0lBQ0gsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztDQUVaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IHZpbGxlMSA9IHJlcXVpcmUoJy4vdmlsbGUudHMnKTtcbi8vY29uc3QgYWdlbmNlID0gcmVxdWlyZSgnLi9hZ2VuY2UnKTtcbmNvbnN0IGxpc3QgPSByZXF1aXJlKCcuL2xpc3RDb250cm9sJyk7XG5jb25zdCBob3RlbDEgPSByZXF1aXJlKCcuL2hvdGVsJyk7XG5jb25zdCBpbWFnZTEgPSByZXF1aXJlKCcuL2ltYWdlJyk7XG5cbmNvbnN0IGFlcm9wb3J0ID0gcmVxdWlyZSgnLi9hZXJvcG9ydCcpO1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKioqXG5jb25zdCBjbGllbnRDb21wYW55ID0gcmVxdWlyZSgnLi9jbGllbnRDb21wYW55Jyk7XG5jb25zdCB0cmlwID0gcmVxdWlyZSgnLi90cmlwJyk7XG5jb25zdCBkcml2ZXIgPSByZXF1aXJlKCcuL2RyaXZlcicpO1xuY29uc3QgcGFzc2VuZ2VyID0gcmVxdWlyZSgnLi9wYXNzZW5nZXInKTtcbmNvbnN0IHBhc3NlcG9ydCA9IHJlcXVpcmUoJy4vcGFzc2Vwb3J0Jyk7XG5jb25zdCBwZXJzb25hbEdyb3VwID0gcmVxdWlyZSgnLi9wZXJzb25hbEdyb3VwJyk7XG5jb25zdCB2ZWhpY3VsZUZsZWV0ID0gcmVxdWlyZSgnLi92ZWhpY3VsZUZsZWV0Jyk7XG5jb25zdCBwcmljZSA9IHJlcXVpcmUoJy4vcHJpY2UnKTtcbmNvbnN0IHBhc3Nlbmdlckx1Z2dhZ2UgPSByZXF1aXJlKCcuL3Bhc3Nlbmdlckx1Z2dhZ2UnKTtcbmNvbnN0IHByb2Zvcm1hSW52b2ljZSA9IHJlcXVpcmUoJy4vcHJvZm9ybWFJbnZvaWNlJyk7XG5jb25zdCBzdG9wb3ZlciA9IHJlcXVpcmUoJy4vc3RvcG92ZXInKTtcbmNvbnN0IGluc3BlY3Rpb24gPSByZXF1aXJlKCcuL3RlY2huaWNhbEluc3BlY3Rpb24nKTtcbmNvbnN0IGluc3VyYW5jZSA9IHJlcXVpcmUoJy4vdmVoaWN1bGVJbnN1cmFuY2UnKTtcbmNvbnN0IG1haW50ZW5hbmNlID0gcmVxdWlyZSgnLi92ZWhpY3VsZU1haW50ZW5hbmNlJyk7XG5jb25zdCB0dmEgPSByZXF1aXJlKCcuL3R2YScpO1xuY29uc3QgdHJpcERyaXZlciA9IHJlcXVpcmUoJy4vdHJpcERyaXZlcicpO1xuY29uc3QgdHJpcFBhc3NlbmdlciA9IHJlcXVpcmUoJy4vdHJpcFBhc3NlbmdlcicpO1xuY29uc3QgdHJpcENsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuL3RyaXBDbGllbnRDb21wYW55Jyk7XG5jb25zdCB0cmFkZU1hcmdpbiA9IHJlcXVpcmUoJy4vdHJhZGVNYXJnaW4nKTtcbmNvbnN0IHJlbnQgPSByZXF1aXJlKCcuL3JlbnQnKTtcbi8vICoqKioqKioqKioqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKioqXG5cbnZhciBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpO1xuXG5jb25zdCBwb29sQ29uZmlnID0ge1xuICBwb29sOiB0cnVlLFxuICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICBwb3J0OiA0NjUsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6ICdyZXNlcnZhdGlvbi50YXNuaW1ldm95YWdlc0BnbWFpbC5jb20nLFxuICAgIHBhc3M6ICdEb3Rjb20yMDE2KycsXG4gIH0sXG59O1xuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIHBvb2w6IHRydWUsXG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLFxuICBhdXRoOiB7XG4gICAgdXNlcjogJ3Jlc2VydmF0aW9uLnRhc25pbWV2b3lhZ2VzQGdtYWlsLmNvbScsXG4gICAgcGFzczogJ0RvdGNvbTIwMTYrJyxcbiAgfSxcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHBvb2xDb25maWcpO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxpc3QsXG4gIGhvdGVsMSxcbiAgaW1hZ2UxLFxuICBhZXJvcG9ydCxcbiAgLy8qKipyYWZhaGlhKioqKiogKi9cbiAgY2xpZW50Q29tcGFueSxcbiAgdHJpcCxcbiAgZHJpdmVyLFxuICBwYXNzZW5nZXIsXG4gIHBhc3NlcG9ydCxcbiAgcGVyc29uYWxHcm91cCxcbiAgdmVoaWN1bGVGbGVldCxcbiAgcHJpY2UsXG4gIHBhc3Nlbmdlckx1Z2dhZ2UsXG4gIHByb2Zvcm1hSW52b2ljZSxcbiAgc3RvcG92ZXIsXG4gIGluc3BlY3Rpb24sXG4gIGluc3VyYW5jZSxcbiAgbWFpbnRlbmFuY2UsXG4gIHR2YSxcbiAgdHJpcERyaXZlcixcbiAgdHJpcFBhc3NlbmdlcixcbiAgdHJpcENsaWVudENvbXBhbnksXG4gIHRyYWRlTWFyZ2luLFxuICAvLyoqKipyYWZhaGlhKioqKiAqL1xufTtcbiJdfQ==