"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModels = void 0;
const sequelize_1 = require("sequelize");
const Test_1 = require("./Test");
const Hotel_1 = require("./Hotel");
const Image_1 = require("./Image");
const Aeroport_1 = require("./Aeroport");
const Vehicule_1 = require("./Vehicule");
const Prix_1 = require("./Prix");
//************api rafahia*****************
const ClientCompany_1 = require("./ClientCompany");
const Trip_1 = require("./Trip");
const Driver_1 = require("./Driver");
const UsualCustomer_1 = require("./UsualCustomer");
const Passeport_1 = require("./Passeport");
const PersonalGroup_1 = require("./PersonalGroup");
const Price_1 = require("./Price");
const VehiculeFleet_1 = require("./VehiculeFleet");
const PassengerLuggage_1 = require("./PassengerLuggage");
const ProformaInvoice_1 = require("./ProformaInvoice");
const Stopover_1 = require("./Stopover");
const TechnicalInspection_1 = require("./TechnicalInspection");
const VehiculeInsurance_1 = require("./VehiculeInsurance");
const VehiculeMaintenance_1 = require("./VehiculeMaintenance");
const Tva_1 = require("./Tva");
const TripDriver_1 = require("./TripDriver");
const TripUsualCustomer_1 = require("./TripUsualCustomer");
const TripClientCompany_1 = require("./TripClientCompany");
const TradeMargin_1 = require("./TradeMargin");
const RentWithDriver_1 = require("./RentWithDriver");
const RentWithDriverDriver_1 = require("./RentWithDriverDriver");
const UsualCustomerClientCompany_1 = require("./UsualCustomerClientCompany");
//********************************************************* */
//sc-26-2020
//mappage
//mappage
//scsc-26-03-2020
exports.createModels = (sequelizeConfig) => {
    const { database, username, password, params } = sequelizeConfig;
    const sequelize = new sequelize_1.Sequelize(database, username, password, params);
    const db = {
        sequelize,
        Sequelize: sequelize_1.Sequelize,
        //Agence: AgenceFactory(sequelize, Sequelize),
        Test: Test_1.TestFactory(sequelize, sequelize_1.Sequelize),
        Hotel: Hotel_1.HotelFactory(sequelize, sequelize_1.Sequelize),
        Image: Image_1.ImageFactory(sequelize, sequelize_1.Sequelize),
        Aeroport: Aeroport_1.AeroportFactory(sequelize, sequelize_1.Sequelize),
        Vehicule: Vehicule_1.VehiculeFactory(sequelize, sequelize_1.Sequelize),
        Prix: Prix_1.PrixFactory(sequelize, sequelize_1.Sequelize),
        //***************api rafahia**************** */
        ClientCompany: ClientCompany_1.ClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        Trip: Trip_1.TripFactory(sequelize, sequelize_1.Sequelize),
        Driver: Driver_1.DriverFactory(sequelize, sequelize_1.Sequelize),
        UsualCustomer: UsualCustomer_1.UsualCustomerFactory(sequelize, sequelize_1.Sequelize),
        Passeport: Passeport_1.PasseportFactory(sequelize, sequelize_1.Sequelize),
        PersonalGroup: PersonalGroup_1.PersonalGroupFactory(sequelize, sequelize_1.Sequelize),
        Price: Price_1.PriceFactory(sequelize, sequelize_1.Sequelize),
        VehiculeFleet: VehiculeFleet_1.VehiculeFleetFactory(sequelize, sequelize_1.Sequelize),
        PassengerLuggage: PassengerLuggage_1.PassengerLuggageFactory(sequelize, sequelize_1.Sequelize),
        ProformaInvoice: ProformaInvoice_1.ProformaInvoiceFactory(sequelize, sequelize_1.Sequelize),
        Stopover: Stopover_1.StopoverFactory(sequelize, sequelize_1.Sequelize),
        TechnicalInspection: TechnicalInspection_1.TechnicalInspectionFactory(sequelize, sequelize_1.Sequelize),
        VehiculeInsurance: VehiculeInsurance_1.VehiculeInsuranceFactory(sequelize, sequelize_1.Sequelize),
        VehiculeMaintenance: VehiculeMaintenance_1.VehiculeMaintenanceFactory(sequelize, sequelize_1.Sequelize),
        Tva: Tva_1.TvaFactory(sequelize, sequelize_1.Sequelize),
        TripDriver: TripDriver_1.TripDriverFactory(sequelize, sequelize_1.Sequelize),
        TripUsualCustomer: TripUsualCustomer_1.TripUsualCustomerFactory(sequelize, sequelize_1.Sequelize),
        TripClientCompany: TripClientCompany_1.TripClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        TradeMargin: TradeMargin_1.TradeMarginFactory(sequelize, sequelize_1.Sequelize),
        RentWithDriver: RentWithDriver_1.RentWithDriverFactory(sequelize, sequelize_1.Sequelize),
        RentDriver: RentWithDriverDriver_1.RentDriverFactory(sequelize, sequelize_1.Sequelize),
        UsualCustomerClientCompany: UsualCustomerClientCompany_1.UsualCustomerClientCompanyFactory(sequelize, sequelize_1.Sequelize),
    };
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvbW9kZWxzLXRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUl0QyxpQ0FBcUM7QUFDckMsbUNBQXVDO0FBQ3ZDLG1DQUF1QztBQUV2Qyx5Q0FBNkM7QUFDN0MseUNBQTZDO0FBQzdDLGlDQUFxQztBQUVyQywwQ0FBMEM7QUFDMUMsbURBQXVEO0FBQ3ZELGlDQUFxQztBQUNyQyxxQ0FBeUM7QUFDekMsbURBQXVEO0FBQ3ZELDJDQUErQztBQUMvQyxtREFBdUQ7QUFDdkQsbUNBQXVDO0FBQ3ZDLG1EQUF1RDtBQUN2RCx5REFBNkQ7QUFDN0QsdURBQTJEO0FBQzNELHlDQUE2QztBQUM3QywrREFBbUU7QUFDbkUsMkRBQStEO0FBQy9ELCtEQUFtRTtBQUNuRSwrQkFBbUM7QUFDbkMsNkNBQWlEO0FBQ2pELDJEQUErRDtBQUMvRCwyREFBK0Q7QUFDL0QsK0NBQW1EO0FBQ25ELHFEQUF5RDtBQUN6RCxpRUFBMkQ7QUFDM0QsNkVBQWlGO0FBQ2pGLDhEQUE4RDtBQUM5RCxZQUFZO0FBRVosU0FBUztBQUNULFNBQVM7QUFDVCxpQkFBaUI7QUFFSixRQUFBLFlBQVksR0FBRyxDQUFDLGVBQW9CLEVBQWUsRUFBRTtJQUNoRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ2pFLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV0RSxNQUFNLEVBQUUsR0FBZ0I7UUFDdEIsU0FBUztRQUNULFNBQVMsRUFBVCxxQkFBUztRQUVULDhDQUE4QztRQUM5QyxJQUFJLEVBQUUsa0JBQVcsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUN2QyxLQUFLLEVBQUUsb0JBQVksQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUN6QyxLQUFLLEVBQUUsb0JBQVksQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUV6QyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUMvQyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUMvQyxJQUFJLEVBQUUsa0JBQVcsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUV2QywrQ0FBK0M7UUFDL0MsYUFBYSxFQUFFLG9DQUFvQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pELElBQUksRUFBRSxrQkFBVyxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3ZDLE1BQU0sRUFBRSxzQkFBYSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQzNDLGFBQWEsRUFBRSxvQ0FBb0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUN6RCxTQUFTLEVBQUUsNEJBQWdCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDakQsYUFBYSxFQUFFLG9DQUFvQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pELEtBQUssRUFBRSxvQkFBWSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pDLGFBQWEsRUFBRSxvQ0FBb0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUN6RCxnQkFBZ0IsRUFBRSwwQ0FBdUIsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUMvRCxlQUFlLEVBQUUsd0NBQXNCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDN0QsUUFBUSxFQUFFLDBCQUFlLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDL0MsbUJBQW1CLEVBQUUsZ0RBQTBCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDckUsaUJBQWlCLEVBQUUsNENBQXdCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDakUsbUJBQW1CLEVBQUUsZ0RBQTBCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDckUsR0FBRyxFQUFFLGdCQUFVLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDckMsVUFBVSxFQUFFLDhCQUFpQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ25ELGlCQUFpQixFQUFFLDRDQUF3QixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ2pFLGlCQUFpQixFQUFFLDRDQUF3QixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ2pFLFdBQVcsRUFBRSxnQ0FBa0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNyRCxjQUFjLEVBQUUsc0NBQXFCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDM0QsVUFBVSxFQUFFLHdDQUFpQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ25ELDBCQUEwQixFQUFFLDhEQUFpQyxDQUMzRCxTQUFTLEVBQ1QscUJBQVMsQ0FDVjtLQUVGLENBQUM7SUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ3BDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBEYkludGVyZmFjZSB9IGZyb20gJy4uL3R5cGluZ3MvRGJJbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBBZ2VuY2VGYWN0b3J5IH0gZnJvbSAnLi9BZ2VuY2UnO1xuaW1wb3J0IHsgVGVzdEZhY3RvcnkgfSBmcm9tICcuL1Rlc3QnO1xuaW1wb3J0IHsgSG90ZWxGYWN0b3J5IH0gZnJvbSAnLi9Ib3RlbCc7XG5pbXBvcnQgeyBJbWFnZUZhY3RvcnkgfSBmcm9tICcuL0ltYWdlJztcblxuaW1wb3J0IHsgQWVyb3BvcnRGYWN0b3J5IH0gZnJvbSAnLi9BZXJvcG9ydCc7XG5pbXBvcnQgeyBWZWhpY3VsZUZhY3RvcnkgfSBmcm9tICcuL1ZlaGljdWxlJztcbmltcG9ydCB7IFByaXhGYWN0b3J5IH0gZnJvbSAnLi9Qcml4JztcblxuLy8qKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKioqXG5pbXBvcnQgeyBDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4vQ2xpZW50Q29tcGFueSc7XG5pbXBvcnQgeyBUcmlwRmFjdG9yeSB9IGZyb20gJy4vVHJpcCc7XG5pbXBvcnQgeyBEcml2ZXJGYWN0b3J5IH0gZnJvbSAnLi9Ecml2ZXInO1xuaW1wb3J0IHsgVXN1YWxDdXN0b21lckZhY3RvcnkgfSBmcm9tICcuL1VzdWFsQ3VzdG9tZXInO1xuaW1wb3J0IHsgUGFzc2Vwb3J0RmFjdG9yeSB9IGZyb20gJy4vUGFzc2Vwb3J0JztcbmltcG9ydCB7IFBlcnNvbmFsR3JvdXBGYWN0b3J5IH0gZnJvbSAnLi9QZXJzb25hbEdyb3VwJztcbmltcG9ydCB7IFByaWNlRmFjdG9yeSB9IGZyb20gJy4vUHJpY2UnO1xuaW1wb3J0IHsgVmVoaWN1bGVGbGVldEZhY3RvcnkgfSBmcm9tICcuL1ZlaGljdWxlRmxlZXQnO1xuaW1wb3J0IHsgUGFzc2VuZ2VyTHVnZ2FnZUZhY3RvcnkgfSBmcm9tICcuL1Bhc3Nlbmdlckx1Z2dhZ2UnO1xuaW1wb3J0IHsgUHJvZm9ybWFJbnZvaWNlRmFjdG9yeSB9IGZyb20gJy4vUHJvZm9ybWFJbnZvaWNlJztcbmltcG9ydCB7IFN0b3BvdmVyRmFjdG9yeSB9IGZyb20gJy4vU3RvcG92ZXInO1xuaW1wb3J0IHsgVGVjaG5pY2FsSW5zcGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL1RlY2huaWNhbEluc3BlY3Rpb24nO1xuaW1wb3J0IHsgVmVoaWN1bGVJbnN1cmFuY2VGYWN0b3J5IH0gZnJvbSAnLi9WZWhpY3VsZUluc3VyYW5jZSc7XG5pbXBvcnQgeyBWZWhpY3VsZU1haW50ZW5hbmNlRmFjdG9yeSB9IGZyb20gJy4vVmVoaWN1bGVNYWludGVuYW5jZSc7XG5pbXBvcnQgeyBUdmFGYWN0b3J5IH0gZnJvbSAnLi9UdmEnO1xuaW1wb3J0IHsgVHJpcERyaXZlckZhY3RvcnkgfSBmcm9tICcuL1RyaXBEcml2ZXInO1xuaW1wb3J0IHsgVHJpcFVzdWFsQ3VzdG9tZXJGYWN0b3J5IH0gZnJvbSAnLi9UcmlwVXN1YWxDdXN0b21lcic7XG5pbXBvcnQgeyBUcmlwQ2xpZW50Q29tcGFueUZhY3RvcnkgfSBmcm9tICcuL1RyaXBDbGllbnRDb21wYW55JztcbmltcG9ydCB7IFRyYWRlTWFyZ2luRmFjdG9yeSB9IGZyb20gJy4vVHJhZGVNYXJnaW4nO1xuaW1wb3J0IHsgUmVudFdpdGhEcml2ZXJGYWN0b3J5IH0gZnJvbSAnLi9SZW50V2l0aERyaXZlcic7XG5pbXBvcnQgeyBSZW50RHJpdmVyRmFjdG9yeSB9IGZyb20gJy4vUmVudFdpdGhEcml2ZXJEcml2ZXInO1xuaW1wb3J0IHsgVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnlGYWN0b3J5IH0gZnJvbSAnLi9Vc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueSc7XG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLy9zYy0yNi0yMDIwXG5cbi8vbWFwcGFnZVxuLy9tYXBwYWdlXG4vL3Njc2MtMjYtMDMtMjAyMFxuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kZWxzID0gKHNlcXVlbGl6ZUNvbmZpZzogYW55KTogRGJJbnRlcmZhY2UgPT4ge1xuICBjb25zdCB7IGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHBhcmFtcyB9ID0gc2VxdWVsaXplQ29uZmlnO1xuICBjb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIHBhcmFtcyk7XG5cbiAgY29uc3QgZGI6IERiSW50ZXJmYWNlID0ge1xuICAgIHNlcXVlbGl6ZSxcbiAgICBTZXF1ZWxpemUsXG5cbiAgICAvL0FnZW5jZTogQWdlbmNlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVGVzdDogVGVzdEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIEhvdGVsOiBIb3RlbEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIEltYWdlOiBJbWFnZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuXG4gICAgQWVyb3BvcnQ6IEFlcm9wb3J0RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVmVoaWN1bGU6IFZlaGljdWxlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUHJpeDogUHJpeEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuXG4gICAgLy8qKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKiogKi9cbiAgICBDbGllbnRDb21wYW55OiBDbGllbnRDb21wYW55RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVHJpcDogVHJpcEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIERyaXZlcjogRHJpdmVyRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVXN1YWxDdXN0b21lcjogVXN1YWxDdXN0b21lckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFBhc3NlcG9ydDogUGFzc2Vwb3J0RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUGVyc29uYWxHcm91cDogUGVyc29uYWxHcm91cEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFByaWNlOiBQcmljZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFZlaGljdWxlRmxlZXQ6IFZlaGljdWxlRmxlZXRGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBQYXNzZW5nZXJMdWdnYWdlOiBQYXNzZW5nZXJMdWdnYWdlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUHJvZm9ybWFJbnZvaWNlOiBQcm9mb3JtYUludm9pY2VGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBTdG9wb3ZlcjogU3RvcG92ZXJGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUZWNobmljYWxJbnNwZWN0aW9uOiBUZWNobmljYWxJbnNwZWN0aW9uRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVmVoaWN1bGVJbnN1cmFuY2U6IFZlaGljdWxlSW5zdXJhbmNlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVmVoaWN1bGVNYWludGVuYW5jZTogVmVoaWN1bGVNYWludGVuYW5jZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFR2YTogVHZhRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVHJpcERyaXZlcjogVHJpcERyaXZlckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyaXBVc3VhbEN1c3RvbWVyOiBUcmlwVXN1YWxDdXN0b21lckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyaXBDbGllbnRDb21wYW55OiBUcmlwQ2xpZW50Q29tcGFueUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyYWRlTWFyZ2luOiBUcmFkZU1hcmdpbkZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFJlbnRXaXRoRHJpdmVyOiBSZW50V2l0aERyaXZlckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFJlbnREcml2ZXI6IFJlbnREcml2ZXJGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBVc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueTogVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnlGYWN0b3J5KFxuICAgICAgc2VxdWVsaXplLFxuICAgICAgU2VxdWVsaXplXG4gICAgKSxcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgfTtcblxuICBPYmplY3Qua2V5cyhkYikuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XG4gICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGI7XG59O1xuIl19