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
    rent,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN2RCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNyRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDcEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDakQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDckQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDakQscURBQXFEO0FBRXJELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV2QyxNQUFNLFVBQVUsR0FBRztJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDO0FBQ0YsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUM3QyxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLElBQUk7SUFDSixNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLElBQUk7SUFDSixNQUFNO0lBQ04sU0FBUztJQUNULFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLEtBQUs7SUFDTCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxHQUFHO0lBQ0gsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLElBQUk7Q0FFTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zdCB2aWxsZTEgPSByZXF1aXJlKCcuL3ZpbGxlLnRzJyk7XG4vL2NvbnN0IGFnZW5jZSA9IHJlcXVpcmUoJy4vYWdlbmNlJyk7XG5jb25zdCBsaXN0ID0gcmVxdWlyZSgnLi9saXN0Q29udHJvbCcpO1xuY29uc3QgaG90ZWwxID0gcmVxdWlyZSgnLi9ob3RlbCcpO1xuY29uc3QgaW1hZ2UxID0gcmVxdWlyZSgnLi9pbWFnZScpO1xuXG5jb25zdCBhZXJvcG9ydCA9IHJlcXVpcmUoJy4vYWVyb3BvcnQnKTtcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyAqKioqKioqKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKioqKlxuY29uc3QgY2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vY2xpZW50Q29tcGFueScpO1xuY29uc3QgdHJpcCA9IHJlcXVpcmUoJy4vdHJpcCcpO1xuY29uc3QgZHJpdmVyID0gcmVxdWlyZSgnLi9kcml2ZXInKTtcbmNvbnN0IHBhc3NlbmdlciA9IHJlcXVpcmUoJy4vcGFzc2VuZ2VyJyk7XG5jb25zdCBwYXNzZXBvcnQgPSByZXF1aXJlKCcuL3Bhc3NlcG9ydCcpO1xuY29uc3QgcGVyc29uYWxHcm91cCA9IHJlcXVpcmUoJy4vcGVyc29uYWxHcm91cCcpO1xuY29uc3QgdmVoaWN1bGVGbGVldCA9IHJlcXVpcmUoJy4vdmVoaWN1bGVGbGVldCcpO1xuY29uc3QgcHJpY2UgPSByZXF1aXJlKCcuL3ByaWNlJyk7XG5jb25zdCBwYXNzZW5nZXJMdWdnYWdlID0gcmVxdWlyZSgnLi9wYXNzZW5nZXJMdWdnYWdlJyk7XG5jb25zdCBwcm9mb3JtYUludm9pY2UgPSByZXF1aXJlKCcuL3Byb2Zvcm1hSW52b2ljZScpO1xuY29uc3Qgc3RvcG92ZXIgPSByZXF1aXJlKCcuL3N0b3BvdmVyJyk7XG5jb25zdCBpbnNwZWN0aW9uID0gcmVxdWlyZSgnLi90ZWNobmljYWxJbnNwZWN0aW9uJyk7XG5jb25zdCBpbnN1cmFuY2UgPSByZXF1aXJlKCcuL3ZlaGljdWxlSW5zdXJhbmNlJyk7XG5jb25zdCBtYWludGVuYW5jZSA9IHJlcXVpcmUoJy4vdmVoaWN1bGVNYWludGVuYW5jZScpO1xuY29uc3QgdHZhID0gcmVxdWlyZSgnLi90dmEnKTtcbmNvbnN0IHRyaXBEcml2ZXIgPSByZXF1aXJlKCcuL3RyaXBEcml2ZXInKTtcbmNvbnN0IHRyaXBQYXNzZW5nZXIgPSByZXF1aXJlKCcuL3RyaXBQYXNzZW5nZXInKTtcbmNvbnN0IHRyaXBDbGllbnRDb21wYW55ID0gcmVxdWlyZSgnLi90cmlwQ2xpZW50Q29tcGFueScpO1xuY29uc3QgdHJhZGVNYXJnaW4gPSByZXF1aXJlKCcuL3RyYWRlTWFyZ2luJyk7XG5jb25zdCByZW50ID0gcmVxdWlyZSgnLi9yZW50Jyk7XG5jb25zdCB1c3VhbEN1c3RvbWVyID0gcmVxdWlyZSgnLi91c3VhbEN1c3RvbWVyJyk7XG4vLyAqKioqKioqKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKioqKlxuXG52YXIgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcblxuY29uc3QgcG9vbENvbmZpZyA9IHtcbiAgcG9vbDogdHJ1ZSxcbiAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAncmVzZXJ2YXRpb24udGFzbmltZXZveWFnZXNAZ21haWwuY29tJyxcbiAgICBwYXNzOiAnRG90Y29tMjAxNisnLFxuICB9LFxufTtcbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICBwb29sOiB0cnVlLFxuICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICBwb3J0OiA0NjUsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6ICdyZXNlcnZhdGlvbi50YXNuaW1ldm95YWdlc0BnbWFpbC5jb20nLFxuICAgIHBhc3M6ICdEb3Rjb20yMDE2KycsXG4gIH0sXG59KTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShwb29sQ29uZmlnKTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBsaXN0LFxuICBob3RlbDEsXG4gIGltYWdlMSxcbiAgYWVyb3BvcnQsXG4gIC8vKioqcmFmYWhpYSoqKioqICovXG4gIGNsaWVudENvbXBhbnksXG4gIHRyaXAsXG4gIGRyaXZlcixcbiAgcGFzc2VuZ2VyLFxuICBwYXNzZXBvcnQsXG4gIHBlcnNvbmFsR3JvdXAsXG4gIHZlaGljdWxlRmxlZXQsXG4gIHByaWNlLFxuICBwYXNzZW5nZXJMdWdnYWdlLFxuICBwcm9mb3JtYUludm9pY2UsXG4gIHN0b3BvdmVyLFxuICBpbnNwZWN0aW9uLFxuICBpbnN1cmFuY2UsXG4gIG1haW50ZW5hbmNlLFxuICB0dmEsXG4gIHRyaXBEcml2ZXIsXG4gIHRyaXBQYXNzZW5nZXIsXG4gIHRyaXBDbGllbnRDb21wYW55LFxuICB0cmFkZU1hcmdpbixcbiAgcmVudCxcbiAgLy8qKioqcmFmYWhpYSoqKiogKi9cbn07XG4iXX0=