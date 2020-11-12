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
    usualCustomer,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN2RCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNyRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDcEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDakQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDckQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDakQscURBQXFEO0FBRXJELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV2QyxNQUFNLFVBQVUsR0FBRztJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDO0FBQ0YsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUM3QyxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLElBQUk7SUFDSixNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLElBQUk7SUFDSixNQUFNO0lBQ04sU0FBUztJQUNULFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLEtBQUs7SUFDTCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxHQUFHO0lBQ0gsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLElBQUk7SUFDSixhQUFhO0NBRWQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgdmlsbGUxID0gcmVxdWlyZSgnLi92aWxsZS50cycpO1xuLy9jb25zdCBhZ2VuY2UgPSByZXF1aXJlKCcuL2FnZW5jZScpO1xuY29uc3QgbGlzdCA9IHJlcXVpcmUoJy4vbGlzdENvbnRyb2wnKTtcbmNvbnN0IGhvdGVsMSA9IHJlcXVpcmUoJy4vaG90ZWwnKTtcbmNvbnN0IGltYWdlMSA9IHJlcXVpcmUoJy4vaW1hZ2UnKTtcblxuY29uc3QgYWVyb3BvcnQgPSByZXF1aXJlKCcuL2Flcm9wb3J0Jyk7XG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gKioqKioqKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKipcbmNvbnN0IGNsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuL2NsaWVudENvbXBhbnknKTtcbmNvbnN0IHRyaXAgPSByZXF1aXJlKCcuL3RyaXAnKTtcbmNvbnN0IGRyaXZlciA9IHJlcXVpcmUoJy4vZHJpdmVyJyk7XG5jb25zdCBwYXNzZW5nZXIgPSByZXF1aXJlKCcuL3Bhc3NlbmdlcicpO1xuY29uc3QgcGFzc2Vwb3J0ID0gcmVxdWlyZSgnLi9wYXNzZXBvcnQnKTtcbmNvbnN0IHBlcnNvbmFsR3JvdXAgPSByZXF1aXJlKCcuL3BlcnNvbmFsR3JvdXAnKTtcbmNvbnN0IHZlaGljdWxlRmxlZXQgPSByZXF1aXJlKCcuL3ZlaGljdWxlRmxlZXQnKTtcbmNvbnN0IHByaWNlID0gcmVxdWlyZSgnLi9wcmljZScpO1xuY29uc3QgcGFzc2VuZ2VyTHVnZ2FnZSA9IHJlcXVpcmUoJy4vcGFzc2VuZ2VyTHVnZ2FnZScpO1xuY29uc3QgcHJvZm9ybWFJbnZvaWNlID0gcmVxdWlyZSgnLi9wcm9mb3JtYUludm9pY2UnKTtcbmNvbnN0IHN0b3BvdmVyID0gcmVxdWlyZSgnLi9zdG9wb3ZlcicpO1xuY29uc3QgaW5zcGVjdGlvbiA9IHJlcXVpcmUoJy4vdGVjaG5pY2FsSW5zcGVjdGlvbicpO1xuY29uc3QgaW5zdXJhbmNlID0gcmVxdWlyZSgnLi92ZWhpY3VsZUluc3VyYW5jZScpO1xuY29uc3QgbWFpbnRlbmFuY2UgPSByZXF1aXJlKCcuL3ZlaGljdWxlTWFpbnRlbmFuY2UnKTtcbmNvbnN0IHR2YSA9IHJlcXVpcmUoJy4vdHZhJyk7XG5jb25zdCB0cmlwRHJpdmVyID0gcmVxdWlyZSgnLi90cmlwRHJpdmVyJyk7XG5jb25zdCB0cmlwUGFzc2VuZ2VyID0gcmVxdWlyZSgnLi90cmlwUGFzc2VuZ2VyJyk7XG5jb25zdCB0cmlwQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vdHJpcENsaWVudENvbXBhbnknKTtcbmNvbnN0IHRyYWRlTWFyZ2luID0gcmVxdWlyZSgnLi90cmFkZU1hcmdpbicpO1xuY29uc3QgcmVudCA9IHJlcXVpcmUoJy4vcmVudCcpO1xuY29uc3QgdXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4vdXN1YWxDdXN0b21lcicpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKipcblxudmFyIG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJyk7XG5cbmNvbnN0IHBvb2xDb25maWcgPSB7XG4gIHBvb2w6IHRydWUsXG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLFxuICBhdXRoOiB7XG4gICAgdXNlcjogJ3Jlc2VydmF0aW9uLnRhc25pbWV2b3lhZ2VzQGdtYWlsLmNvbScsXG4gICAgcGFzczogJ0RvdGNvbTIwMTYrJyxcbiAgfSxcbn07XG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgcG9vbDogdHJ1ZSxcbiAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAncmVzZXJ2YXRpb24udGFzbmltZXZveWFnZXNAZ21haWwuY29tJyxcbiAgICBwYXNzOiAnRG90Y29tMjAxNisnLFxuICB9LFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUocG9vbENvbmZpZyk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGlzdCxcbiAgaG90ZWwxLFxuICBpbWFnZTEsXG4gIGFlcm9wb3J0LFxuICAvLyoqKnJhZmFoaWEqKioqKiAqL1xuICBjbGllbnRDb21wYW55LFxuICB0cmlwLFxuICBkcml2ZXIsXG4gIHBhc3NlbmdlcixcbiAgcGFzc2Vwb3J0LFxuICBwZXJzb25hbEdyb3VwLFxuICB2ZWhpY3VsZUZsZWV0LFxuICBwcmljZSxcbiAgcGFzc2VuZ2VyTHVnZ2FnZSxcbiAgcHJvZm9ybWFJbnZvaWNlLFxuICBzdG9wb3ZlcixcbiAgaW5zcGVjdGlvbixcbiAgaW5zdXJhbmNlLFxuICBtYWludGVuYW5jZSxcbiAgdHZhLFxuICB0cmlwRHJpdmVyLFxuICB0cmlwUGFzc2VuZ2VyLFxuICB0cmlwQ2xpZW50Q29tcGFueSxcbiAgdHJhZGVNYXJnaW4sXG4gIHJlbnQsXG4gIHVzdWFsQ3VzdG9tZXIsXG4gIC8vKioqKnJhZmFoaWEqKioqICovXG59O1xuIl19