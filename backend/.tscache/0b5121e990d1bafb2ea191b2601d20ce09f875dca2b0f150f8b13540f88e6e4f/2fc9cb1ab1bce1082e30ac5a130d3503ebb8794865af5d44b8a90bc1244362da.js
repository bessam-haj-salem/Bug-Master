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
const Rent_1 = require("./Rent");
const RentDriver_1 = require("./RentDriver");
const UsualCustomerClientCompany_1 = require("./UsualCustomerClientCompany");
const RentClientCompany_1 = require("./RentClientCompany");
const RentUsualCustomer_1 = require("./RentUsualCustomer");
const RentWithDriverClientCompany_1 = require("./RentWithDriverClientCompany");
const RentWithDriverUsualCustomer_1 = require("./RentWithDriverUsualCustomer");
const RentWithDriverClientCompanyDriver_1 = require("./RentWithDriverClientCompanyDriver");
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
        Rent: Rent_1.RentFactory(sequelize, sequelize_1.Sequelize),
        RentDriver: RentDriver_1.RentDriverFactory(sequelize, sequelize_1.Sequelize),
        UsualCustomerClientCompany: UsualCustomerClientCompany_1.UsualCustomerClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        RentClientCompany: RentClientCompany_1.RentClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        RentUsualCustomer: RentUsualCustomer_1.RentUsualCustomerFactory(sequelize, sequelize_1.Sequelize),
        RentWithDriverClientCompany: RentWithDriverClientCompany_1.RentWithDriverClientCompanyFactory(sequelize, sequelize_1.Sequelize),
        RentWithDriverUsualCustomer: RentWithDriverUsualCustomer_1.RentWithDriverUsualCustomerFactory(sequelize, sequelize_1.Sequelize),
        RentWithDriverClientCompanyDriver: RentWithDriverClientCompanyDriver_1.RentWithDriverClientCompanyDriverFactory(sequelize, sequelize_1.Sequelize),
    };
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvbW9kZWxzLXRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUl0QyxpQ0FBcUM7QUFDckMsbUNBQXVDO0FBQ3ZDLG1DQUF1QztBQUV2Qyx5Q0FBNkM7QUFDN0MseUNBQTZDO0FBQzdDLGlDQUFxQztBQUVyQywwQ0FBMEM7QUFDMUMsbURBQXVEO0FBQ3ZELGlDQUFxQztBQUNyQyxxQ0FBeUM7QUFDekMsbURBQXVEO0FBQ3ZELDJDQUErQztBQUMvQyxtREFBdUQ7QUFDdkQsbUNBQXVDO0FBQ3ZDLG1EQUF1RDtBQUN2RCx5REFBNkQ7QUFDN0QsdURBQTJEO0FBQzNELHlDQUE2QztBQUM3QywrREFBbUU7QUFDbkUsMkRBQStEO0FBQy9ELCtEQUFtRTtBQUNuRSwrQkFBbUM7QUFDbkMsNkNBQWlEO0FBQ2pELDJEQUErRDtBQUMvRCwyREFBK0Q7QUFDL0QsK0NBQW1EO0FBQ25ELGlDQUFxQztBQUNyQyw2Q0FBaUQ7QUFDakQsNkVBQWlGO0FBQ2pGLDJEQUErRDtBQUMvRCwyREFBK0Q7QUFDL0QsK0VBQW1GO0FBQ25GLCtFQUFtRjtBQUNuRiwyRkFBK0Y7QUFFL0YsOERBQThEO0FBQzlELFlBQVk7QUFFWixTQUFTO0FBQ1QsU0FBUztBQUNULGlCQUFpQjtBQUVKLFFBQUEsWUFBWSxHQUFHLENBQUMsZUFBb0IsRUFBZSxFQUFFO0lBQ2hFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUM7SUFDakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXRFLE1BQU0sRUFBRSxHQUFnQjtRQUN0QixTQUFTO1FBQ1QsU0FBUyxFQUFULHFCQUFTO1FBRVQsOENBQThDO1FBQzlDLElBQUksRUFBRSxrQkFBVyxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3ZDLEtBQUssRUFBRSxvQkFBWSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxvQkFBWSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBRXpDLFFBQVEsRUFBRSwwQkFBZSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQy9DLFFBQVEsRUFBRSwwQkFBZSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQy9DLElBQUksRUFBRSxrQkFBVyxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBRXZDLCtDQUErQztRQUMvQyxhQUFhLEVBQUUsb0NBQW9CLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDekQsSUFBSSxFQUFFLGtCQUFXLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDdkMsTUFBTSxFQUFFLHNCQUFhLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDM0MsYUFBYSxFQUFFLG9DQUFvQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pELFNBQVMsRUFBRSw0QkFBZ0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNqRCxhQUFhLEVBQUUsb0NBQW9CLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDekQsS0FBSyxFQUFFLG9CQUFZLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDekMsYUFBYSxFQUFFLG9DQUFvQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3pELGdCQUFnQixFQUFFLDBDQUF1QixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQy9ELGVBQWUsRUFBRSx3Q0FBc0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUM3RCxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUMvQyxtQkFBbUIsRUFBRSxnREFBMEIsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNyRSxpQkFBaUIsRUFBRSw0Q0FBd0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNqRSxtQkFBbUIsRUFBRSxnREFBMEIsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNyRSxHQUFHLEVBQUUsZ0JBQVUsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNyQyxVQUFVLEVBQUUsOEJBQWlCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDbkQsaUJBQWlCLEVBQUUsNENBQXdCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDakUsaUJBQWlCLEVBQUUsNENBQXdCLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDakUsV0FBVyxFQUFFLGdDQUFrQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3JELElBQUksRUFBRSxrQkFBVyxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQ3ZDLFVBQVUsRUFBRSw4QkFBaUIsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNuRCwwQkFBMEIsRUFBRSw4REFBaUMsQ0FDM0QsU0FBUyxFQUNULHFCQUFTLENBQ1Y7UUFDRCxpQkFBaUIsRUFBRSw0Q0FBd0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNqRSxpQkFBaUIsRUFBRSw0Q0FBd0IsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQztRQUNqRSwyQkFBMkIsRUFBRSxnRUFBa0MsQ0FDN0QsU0FBUyxFQUNULHFCQUFTLENBQ1Y7UUFDRCwyQkFBMkIsRUFBRSxnRUFBa0MsQ0FDN0QsU0FBUyxFQUNULHFCQUFTLENBQ1Y7UUFDRCxpQ0FBaUMsRUFBRSw0RUFBd0MsQ0FDekUsU0FBUyxFQUNULHFCQUFTLENBQ1Y7S0FFRixDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUNwQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IHsgRGJJbnRlcmZhY2UgfSBmcm9tICcuLi90eXBpbmdzL0RiSW50ZXJmYWNlJztcblxuaW1wb3J0IHsgQWdlbmNlRmFjdG9yeSB9IGZyb20gJy4vQWdlbmNlJztcbmltcG9ydCB7IFRlc3RGYWN0b3J5IH0gZnJvbSAnLi9UZXN0JztcbmltcG9ydCB7IEhvdGVsRmFjdG9yeSB9IGZyb20gJy4vSG90ZWwnO1xuaW1wb3J0IHsgSW1hZ2VGYWN0b3J5IH0gZnJvbSAnLi9JbWFnZSc7XG5cbmltcG9ydCB7IEFlcm9wb3J0RmFjdG9yeSB9IGZyb20gJy4vQWVyb3BvcnQnO1xuaW1wb3J0IHsgVmVoaWN1bGVGYWN0b3J5IH0gZnJvbSAnLi9WZWhpY3VsZSc7XG5pbXBvcnQgeyBQcml4RmFjdG9yeSB9IGZyb20gJy4vUHJpeCc7XG5cbi8vKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKlxuaW1wb3J0IHsgQ2xpZW50Q29tcGFueUZhY3RvcnkgfSBmcm9tICcuL0NsaWVudENvbXBhbnknO1xuaW1wb3J0IHsgVHJpcEZhY3RvcnkgfSBmcm9tICcuL1RyaXAnO1xuaW1wb3J0IHsgRHJpdmVyRmFjdG9yeSB9IGZyb20gJy4vRHJpdmVyJztcbmltcG9ydCB7IFVzdWFsQ3VzdG9tZXJGYWN0b3J5IH0gZnJvbSAnLi9Vc3VhbEN1c3RvbWVyJztcbmltcG9ydCB7IFBhc3NlcG9ydEZhY3RvcnkgfSBmcm9tICcuL1Bhc3NlcG9ydCc7XG5pbXBvcnQgeyBQZXJzb25hbEdyb3VwRmFjdG9yeSB9IGZyb20gJy4vUGVyc29uYWxHcm91cCc7XG5pbXBvcnQgeyBQcmljZUZhY3RvcnkgfSBmcm9tICcuL1ByaWNlJztcbmltcG9ydCB7IFZlaGljdWxlRmxlZXRGYWN0b3J5IH0gZnJvbSAnLi9WZWhpY3VsZUZsZWV0JztcbmltcG9ydCB7IFBhc3Nlbmdlckx1Z2dhZ2VGYWN0b3J5IH0gZnJvbSAnLi9QYXNzZW5nZXJMdWdnYWdlJztcbmltcG9ydCB7IFByb2Zvcm1hSW52b2ljZUZhY3RvcnkgfSBmcm9tICcuL1Byb2Zvcm1hSW52b2ljZSc7XG5pbXBvcnQgeyBTdG9wb3ZlckZhY3RvcnkgfSBmcm9tICcuL1N0b3BvdmVyJztcbmltcG9ydCB7IFRlY2huaWNhbEluc3BlY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi9UZWNobmljYWxJbnNwZWN0aW9uJztcbmltcG9ydCB7IFZlaGljdWxlSW5zdXJhbmNlRmFjdG9yeSB9IGZyb20gJy4vVmVoaWN1bGVJbnN1cmFuY2UnO1xuaW1wb3J0IHsgVmVoaWN1bGVNYWludGVuYW5jZUZhY3RvcnkgfSBmcm9tICcuL1ZlaGljdWxlTWFpbnRlbmFuY2UnO1xuaW1wb3J0IHsgVHZhRmFjdG9yeSB9IGZyb20gJy4vVHZhJztcbmltcG9ydCB7IFRyaXBEcml2ZXJGYWN0b3J5IH0gZnJvbSAnLi9UcmlwRHJpdmVyJztcbmltcG9ydCB7IFRyaXBVc3VhbEN1c3RvbWVyRmFjdG9yeSB9IGZyb20gJy4vVHJpcFVzdWFsQ3VzdG9tZXInO1xuaW1wb3J0IHsgVHJpcENsaWVudENvbXBhbnlGYWN0b3J5IH0gZnJvbSAnLi9UcmlwQ2xpZW50Q29tcGFueSc7XG5pbXBvcnQgeyBUcmFkZU1hcmdpbkZhY3RvcnkgfSBmcm9tICcuL1RyYWRlTWFyZ2luJztcbmltcG9ydCB7IFJlbnRGYWN0b3J5IH0gZnJvbSAnLi9SZW50JztcbmltcG9ydCB7IFJlbnREcml2ZXJGYWN0b3J5IH0gZnJvbSAnLi9SZW50RHJpdmVyJztcbmltcG9ydCB7IFVzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55RmFjdG9yeSB9IGZyb20gJy4vVXN1YWxDdXN0b21lckNsaWVudENvbXBhbnknO1xuaW1wb3J0IHsgUmVudENsaWVudENvbXBhbnlGYWN0b3J5IH0gZnJvbSAnLi9SZW50Q2xpZW50Q29tcGFueSc7XG5pbXBvcnQgeyBSZW50VXN1YWxDdXN0b21lckZhY3RvcnkgfSBmcm9tICcuL1JlbnRVc3VhbEN1c3RvbWVyJztcbmltcG9ydCB7IFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueUZhY3RvcnkgfSBmcm9tICcuL1JlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueSc7XG5pbXBvcnQgeyBSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJGYWN0b3J5IH0gZnJvbSAnLi9SZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXInO1xuaW1wb3J0IHsgUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyRmFjdG9yeSB9IGZyb20gJy4vUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RHJpdmVyJztcblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8vc2MtMjYtMjAyMFxuXG4vL21hcHBhZ2Vcbi8vbWFwcGFnZVxuLy9zY3NjLTI2LTAzLTIwMjBcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vZGVscyA9IChzZXF1ZWxpemVDb25maWc6IGFueSk6IERiSW50ZXJmYWNlID0+IHtcbiAgY29uc3QgeyBkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXJhbXMgfSA9IHNlcXVlbGl6ZUNvbmZpZztcbiAgY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXJhbXMpO1xuXG4gIGNvbnN0IGRiOiBEYkludGVyZmFjZSA9IHtcbiAgICBzZXF1ZWxpemUsXG4gICAgU2VxdWVsaXplLFxuXG4gICAgLy9BZ2VuY2U6IEFnZW5jZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRlc3Q6IFRlc3RGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBIb3RlbDogSG90ZWxGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBJbWFnZTogSW1hZ2VGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcblxuICAgIEFlcm9wb3J0OiBBZXJvcG9ydEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFZlaGljdWxlOiBWZWhpY3VsZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFByaXg6IFByaXhGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcblxuICAgIC8vKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqICovXG4gICAgQ2xpZW50Q29tcGFueTogQ2xpZW50Q29tcGFueUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyaXA6IFRyaXBGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBEcml2ZXI6IERyaXZlckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFVzdWFsQ3VzdG9tZXI6IFVzdWFsQ3VzdG9tZXJGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBQYXNzZXBvcnQ6IFBhc3NlcG9ydEZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFBlcnNvbmFsR3JvdXA6IFBlcnNvbmFsR3JvdXBGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBQcmljZTogUHJpY2VGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBWZWhpY3VsZUZsZWV0OiBWZWhpY3VsZUZsZWV0RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUGFzc2VuZ2VyTHVnZ2FnZTogUGFzc2VuZ2VyTHVnZ2FnZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFByb2Zvcm1hSW52b2ljZTogUHJvZm9ybWFJbnZvaWNlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgU3RvcG92ZXI6IFN0b3BvdmVyRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgVGVjaG5pY2FsSW5zcGVjdGlvbjogVGVjaG5pY2FsSW5zcGVjdGlvbkZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFZlaGljdWxlSW5zdXJhbmNlOiBWZWhpY3VsZUluc3VyYW5jZUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFZlaGljdWxlTWFpbnRlbmFuY2U6IFZlaGljdWxlTWFpbnRlbmFuY2VGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUdmE6IFR2YUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFRyaXBEcml2ZXI6IFRyaXBEcml2ZXJGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUcmlwVXN1YWxDdXN0b21lcjogVHJpcFVzdWFsQ3VzdG9tZXJGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUcmlwQ2xpZW50Q29tcGFueTogVHJpcENsaWVudENvbXBhbnlGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBUcmFkZU1hcmdpbjogVHJhZGVNYXJnaW5GYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBSZW50OiBSZW50RmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgUmVudERyaXZlcjogUmVudERyaXZlckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFVzdWFsQ3VzdG9tZXJDbGllbnRDb21wYW55OiBVc3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueUZhY3RvcnkoXG4gICAgICBzZXF1ZWxpemUsXG4gICAgICBTZXF1ZWxpemVcbiAgICApLFxuICAgIFJlbnRDbGllbnRDb21wYW55OiBSZW50Q2xpZW50Q29tcGFueUZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFJlbnRVc3VhbEN1c3RvbWVyOiBSZW50VXN1YWxDdXN0b21lckZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueTogUmVudFdpdGhEcml2ZXJDbGllbnRDb21wYW55RmFjdG9yeShcbiAgICAgIHNlcXVlbGl6ZSxcbiAgICAgIFNlcXVlbGl6ZVxuICAgICksXG4gICAgUmVudFdpdGhEcml2ZXJVc3VhbEN1c3RvbWVyOiBSZW50V2l0aERyaXZlclVzdWFsQ3VzdG9tZXJGYWN0b3J5KFxuICAgICAgc2VxdWVsaXplLFxuICAgICAgU2VxdWVsaXplXG4gICAgKSxcbiAgICBSZW50V2l0aERyaXZlckNsaWVudENvbXBhbnlEcml2ZXI6IFJlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueURyaXZlckZhY3RvcnkoXG4gICAgICBzZXF1ZWxpemUsXG4gICAgICBTZXF1ZWxpemVcbiAgICApLFxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICB9O1xuXG4gIE9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcbiAgICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYjtcbn07XG4iXX0=