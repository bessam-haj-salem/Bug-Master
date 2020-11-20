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
const usualCustomer = require('./usualCustomer');
const usualCustomerClientCompany = require('./usualCustomerClientCompany');
const rentClientCompany = require('./rentClientCompany');
const rentUsualCustomer = require('./rentUsualCustomer');
const rentWithDriverClientCompany = require('./rentWithDriverClientCompany');
const rentWithDriverUsualCustomer = require('./rentWithDriverUsualCustomer');
const rentWithDriverClientCompanyDriver = require('./rentWithDriverClientCompanyDriver');
const rentWithDriverUsualCustomerDriver = require('./rentWithDriverUsualCustomerDriver');
const stopoverTrip = require('./stopoverTrip');
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
    usualCustomer,
    usualCustomerClientCompany,
    rentClientCompany,
    rentUsualCustomer,
    rentWithDriverClientCompany,
    rentWithDriverUsualCustomer,
    rentWithDriverClientCompanyDriver,
    rentWithDriverUsualCustomerDriver,
    stopoverTrip,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNqRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6RCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDakQsTUFBTSwwQkFBMEIsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMzRSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pELE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSwyQkFBMkIsR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUM3RSxNQUFNLDJCQUEyQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQzdFLE1BQU0saUNBQWlDLEdBQUcsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDekYsTUFBTSxpQ0FBaUMsR0FBRyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUN6RixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMvQyxxREFBcUQ7QUFFckQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXZDLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsR0FBRztJQUNULE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxJQUFJLEVBQUUsYUFBYTtLQUNwQjtDQUNGLENBQUM7QUFDRixNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQzdDLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsR0FBRztJQUNULE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxJQUFJLEVBQUUsYUFBYTtLQUNwQjtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsSUFBSTtJQUNKLE1BQU07SUFDTixTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixLQUFLO0lBQ0wsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsR0FBRztJQUNILFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFFWCxhQUFhO0lBRWIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLFlBQVk7Q0FFYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zdCB2aWxsZTEgPSByZXF1aXJlKCcuL3ZpbGxlLnRzJyk7XG4vL2NvbnN0IGFnZW5jZSA9IHJlcXVpcmUoJy4vYWdlbmNlJyk7XG5jb25zdCBsaXN0ID0gcmVxdWlyZSgnLi9saXN0Q29udHJvbCcpO1xuY29uc3QgaG90ZWwxID0gcmVxdWlyZSgnLi9ob3RlbCcpO1xuY29uc3QgaW1hZ2UxID0gcmVxdWlyZSgnLi9pbWFnZScpO1xuXG5jb25zdCBhZXJvcG9ydCA9IHJlcXVpcmUoJy4vYWVyb3BvcnQnKTtcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyAqKioqKioqKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKioqKlxuY29uc3QgY2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vY2xpZW50Q29tcGFueScpO1xuY29uc3QgdHJpcCA9IHJlcXVpcmUoJy4vdHJpcCcpO1xuY29uc3QgZHJpdmVyID0gcmVxdWlyZSgnLi9kcml2ZXInKTtcbmNvbnN0IHBhc3NlcG9ydCA9IHJlcXVpcmUoJy4vcGFzc2Vwb3J0Jyk7XG5jb25zdCBwZXJzb25hbEdyb3VwID0gcmVxdWlyZSgnLi9wZXJzb25hbEdyb3VwJyk7XG5jb25zdCB2ZWhpY3VsZUZsZWV0ID0gcmVxdWlyZSgnLi92ZWhpY3VsZUZsZWV0Jyk7XG5jb25zdCBwcmljZSA9IHJlcXVpcmUoJy4vcHJpY2UnKTtcbmNvbnN0IHBhc3Nlbmdlckx1Z2dhZ2UgPSByZXF1aXJlKCcuL3Bhc3Nlbmdlckx1Z2dhZ2UnKTtcbmNvbnN0IHByb2Zvcm1hSW52b2ljZSA9IHJlcXVpcmUoJy4vcHJvZm9ybWFJbnZvaWNlJyk7XG5jb25zdCBzdG9wb3ZlciA9IHJlcXVpcmUoJy4vc3RvcG92ZXInKTtcbmNvbnN0IGluc3BlY3Rpb24gPSByZXF1aXJlKCcuL3RlY2huaWNhbEluc3BlY3Rpb24nKTtcbmNvbnN0IGluc3VyYW5jZSA9IHJlcXVpcmUoJy4vdmVoaWN1bGVJbnN1cmFuY2UnKTtcbmNvbnN0IG1haW50ZW5hbmNlID0gcmVxdWlyZSgnLi92ZWhpY3VsZU1haW50ZW5hbmNlJyk7XG5jb25zdCB0dmEgPSByZXF1aXJlKCcuL3R2YScpO1xuY29uc3QgdHJpcERyaXZlciA9IHJlcXVpcmUoJy4vdHJpcERyaXZlcicpO1xuY29uc3QgdHJpcFVzdWFsQ3VzdG9tZXIgPSByZXF1aXJlKCcuL3RyaXBVc3VhbEN1c3RvbWVyJyk7XG5jb25zdCB0cmlwQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vdHJpcENsaWVudENvbXBhbnknKTtcbmNvbnN0IHRyYWRlTWFyZ2luID0gcmVxdWlyZSgnLi90cmFkZU1hcmdpbicpO1xuY29uc3QgdXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4vdXN1YWxDdXN0b21lcicpO1xuY29uc3QgdXN1YWxDdXN0b21lckNsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuL3VzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55Jyk7XG5jb25zdCByZW50Q2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vcmVudENsaWVudENvbXBhbnknKTtcbmNvbnN0IHJlbnRVc3VhbEN1c3RvbWVyID0gcmVxdWlyZSgnLi9yZW50VXN1YWxDdXN0b21lcicpO1xuY29uc3QgcmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55ID0gcmVxdWlyZSgnLi9yZW50V2l0aERyaXZlckNsaWVudENvbXBhbnknKTtcbmNvbnN0IHJlbnRXaXRoRHJpdmVyVXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4vcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyJyk7XG5jb25zdCByZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlEcml2ZXIgPSByZXF1aXJlKCcuL3JlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlcicpO1xuY29uc3QgcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyID0gcmVxdWlyZSgnLi9yZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJEcml2ZXInKTtcbmNvbnN0IHN0b3BvdmVyVHJpcCA9IHJlcXVpcmUoJy4vc3RvcG92ZXJUcmlwJyk7XG4vLyAqKioqKioqKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKioqKlxuXG52YXIgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcblxuY29uc3QgcG9vbENvbmZpZyA9IHtcbiAgcG9vbDogdHJ1ZSxcbiAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAncmVzZXJ2YXRpb24udGFzbmltZXZveWFnZXNAZ21haWwuY29tJyxcbiAgICBwYXNzOiAnRG90Y29tMjAxNisnLFxuICB9LFxufTtcbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICBwb29sOiB0cnVlLFxuICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICBwb3J0OiA0NjUsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6ICdyZXNlcnZhdGlvbi50YXNuaW1ldm95YWdlc0BnbWFpbC5jb20nLFxuICAgIHBhc3M6ICdEb3Rjb20yMDE2KycsXG4gIH0sXG59KTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShwb29sQ29uZmlnKTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBsaXN0LFxuICBob3RlbDEsXG4gIGltYWdlMSxcbiAgYWVyb3BvcnQsXG4gIC8vKioqcmFmYWhpYSoqKioqICovXG4gIGNsaWVudENvbXBhbnksXG4gIHRyaXAsXG4gIGRyaXZlcixcbiAgcGFzc2Vwb3J0LFxuICBwZXJzb25hbEdyb3VwLFxuICB2ZWhpY3VsZUZsZWV0LFxuICBwcmljZSxcbiAgcGFzc2VuZ2VyTHVnZ2FnZSxcbiAgcHJvZm9ybWFJbnZvaWNlLFxuICBzdG9wb3ZlcixcbiAgaW5zcGVjdGlvbixcbiAgaW5zdXJhbmNlLFxuICBtYWludGVuYW5jZSxcbiAgdHZhLFxuICB0cmlwRHJpdmVyLFxuICB0cmlwVXN1YWxDdXN0b21lcixcbiAgdHJpcENsaWVudENvbXBhbnksXG4gIHRyYWRlTWFyZ2luLFxuXG4gIHVzdWFsQ3VzdG9tZXIsXG5cbiAgdXN1YWxDdXN0b21lckNsaWVudENvbXBhbnksXG4gIHJlbnRDbGllbnRDb21wYW55LFxuICByZW50VXN1YWxDdXN0b21lcixcbiAgcmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55LFxuICByZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXIsXG4gIHJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlcixcbiAgcmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyRHJpdmVyLFxuICBzdG9wb3ZlclRyaXAsXG4gIC8vKioqKnJhZmFoaWEqKioqICovXG59O1xuIl19