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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNqRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxxREFBcUQ7QUFFckQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXZDLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsR0FBRztJQUNULE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxJQUFJLEVBQUUsYUFBYTtLQUNwQjtDQUNGLENBQUM7QUFDRixNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQzdDLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsR0FBRztJQUNULE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxJQUFJLEVBQUUsYUFBYTtLQUNwQjtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsSUFBSTtJQUNKLE1BQU07SUFFTixTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixLQUFLO0lBQ0wsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsR0FBRztJQUNILFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxJQUFJO0lBQ0osYUFBYTtDQUVkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IHZpbGxlMSA9IHJlcXVpcmUoJy4vdmlsbGUudHMnKTtcbi8vY29uc3QgYWdlbmNlID0gcmVxdWlyZSgnLi9hZ2VuY2UnKTtcbmNvbnN0IGxpc3QgPSByZXF1aXJlKCcuL2xpc3RDb250cm9sJyk7XG5jb25zdCBob3RlbDEgPSByZXF1aXJlKCcuL2hvdGVsJyk7XG5jb25zdCBpbWFnZTEgPSByZXF1aXJlKCcuL2ltYWdlJyk7XG5cbmNvbnN0IGFlcm9wb3J0ID0gcmVxdWlyZSgnLi9hZXJvcG9ydCcpO1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKioqXG5jb25zdCBjbGllbnRDb21wYW55ID0gcmVxdWlyZSgnLi9jbGllbnRDb21wYW55Jyk7XG5jb25zdCB0cmlwID0gcmVxdWlyZSgnLi90cmlwJyk7XG5jb25zdCBkcml2ZXIgPSByZXF1aXJlKCcuL2RyaXZlcicpO1xuY29uc3QgcGFzc2Vwb3J0ID0gcmVxdWlyZSgnLi9wYXNzZXBvcnQnKTtcbmNvbnN0IHBlcnNvbmFsR3JvdXAgPSByZXF1aXJlKCcuL3BlcnNvbmFsR3JvdXAnKTtcbmNvbnN0IHZlaGljdWxlRmxlZXQgPSByZXF1aXJlKCcuL3ZlaGljdWxlRmxlZXQnKTtcbmNvbnN0IHByaWNlID0gcmVxdWlyZSgnLi9wcmljZScpO1xuY29uc3QgcGFzc2VuZ2VyTHVnZ2FnZSA9IHJlcXVpcmUoJy4vcGFzc2VuZ2VyTHVnZ2FnZScpO1xuY29uc3QgcHJvZm9ybWFJbnZvaWNlID0gcmVxdWlyZSgnLi9wcm9mb3JtYUludm9pY2UnKTtcbmNvbnN0IHN0b3BvdmVyID0gcmVxdWlyZSgnLi9zdG9wb3ZlcicpO1xuY29uc3QgaW5zcGVjdGlvbiA9IHJlcXVpcmUoJy4vdGVjaG5pY2FsSW5zcGVjdGlvbicpO1xuY29uc3QgaW5zdXJhbmNlID0gcmVxdWlyZSgnLi92ZWhpY3VsZUluc3VyYW5jZScpO1xuY29uc3QgbWFpbnRlbmFuY2UgPSByZXF1aXJlKCcuL3ZlaGljdWxlTWFpbnRlbmFuY2UnKTtcbmNvbnN0IHR2YSA9IHJlcXVpcmUoJy4vdHZhJyk7XG5jb25zdCB0cmlwRHJpdmVyID0gcmVxdWlyZSgnLi90cmlwRHJpdmVyJyk7XG5jb25zdCB0cmlwUGFzc2VuZ2VyID0gcmVxdWlyZSgnLi90cmlwUGFzc2VuZ2VyJyk7XG5jb25zdCB0cmlwQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vdHJpcENsaWVudENvbXBhbnknKTtcbmNvbnN0IHRyYWRlTWFyZ2luID0gcmVxdWlyZSgnLi90cmFkZU1hcmdpbicpO1xuY29uc3QgcmVudCA9IHJlcXVpcmUoJy4vcmVudCcpO1xuY29uc3QgdXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4vdXN1YWxDdXN0b21lcicpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKipcblxudmFyIG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJyk7XG5cbmNvbnN0IHBvb2xDb25maWcgPSB7XG4gIHBvb2w6IHRydWUsXG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLFxuICBhdXRoOiB7XG4gICAgdXNlcjogJ3Jlc2VydmF0aW9uLnRhc25pbWV2b3lhZ2VzQGdtYWlsLmNvbScsXG4gICAgcGFzczogJ0RvdGNvbTIwMTYrJyxcbiAgfSxcbn07XG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgcG9vbDogdHJ1ZSxcbiAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAncmVzZXJ2YXRpb24udGFzbmltZXZveWFnZXNAZ21haWwuY29tJyxcbiAgICBwYXNzOiAnRG90Y29tMjAxNisnLFxuICB9LFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUocG9vbENvbmZpZyk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGlzdCxcbiAgaG90ZWwxLFxuICBpbWFnZTEsXG4gIGFlcm9wb3J0LFxuICAvLyoqKnJhZmFoaWEqKioqKiAqL1xuICBjbGllbnRDb21wYW55LFxuICB0cmlwLFxuICBkcml2ZXIsXG5cbiAgcGFzc2Vwb3J0LFxuICBwZXJzb25hbEdyb3VwLFxuICB2ZWhpY3VsZUZsZWV0LFxuICBwcmljZSxcbiAgcGFzc2VuZ2VyTHVnZ2FnZSxcbiAgcHJvZm9ybWFJbnZvaWNlLFxuICBzdG9wb3ZlcixcbiAgaW5zcGVjdGlvbixcbiAgaW5zdXJhbmNlLFxuICBtYWludGVuYW5jZSxcbiAgdHZhLFxuICB0cmlwRHJpdmVyLFxuICB0cmlwUGFzc2VuZ2VyLFxuICB0cmlwQ2xpZW50Q29tcGFueSxcbiAgdHJhZGVNYXJnaW4sXG4gIHJlbnQsXG4gIHVzdWFsQ3VzdG9tZXIsXG4gIC8vKioqKnJhZmFoaWEqKioqICovXG59O1xuIl19