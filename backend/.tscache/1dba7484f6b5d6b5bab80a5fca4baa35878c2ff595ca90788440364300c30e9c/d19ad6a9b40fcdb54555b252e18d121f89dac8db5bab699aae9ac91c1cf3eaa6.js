"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModels = void 0;
const sequelize_1 = require("sequelize");
const Project_1 = require("./Project");
//import { VehiculeFactory } from './Vehicule';
//scsc-26-03-2020
exports.createModels = (sequelizeConfig) => {
    const { database, username, password, params } = sequelizeConfig;
    const sequelize = new sequelize_1.Sequelize(database, username, password, params);
    const db = {
        sequelize,
        Sequelize: sequelize_1.Sequelize,
        Project: Project_1.ProjectFactory(sequelize, sequelize_1.Sequelize)
        //Vehicule: VehiculeFactory(sequelize, Sequelize),
        //************************************* */
    };
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFdEMsdUNBQXlDO0FBRXpDLCtDQUErQztBQUUvQyxpQkFBaUI7QUFFSixRQUFBLFlBQVksR0FBRyxDQUFDLGVBQW9CLEVBQWUsRUFBRTtJQUNoRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ2pFLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV0RSxNQUFNLEVBQUUsR0FBZ0I7UUFDdEIsU0FBUztRQUNULFNBQVMsRUFBVCxxQkFBUztRQUNiLE9BQU8sRUFBRyx3QkFBYyxDQUFDLFNBQVMsRUFBQyxxQkFBUyxDQUFDO1FBRXpDLGtEQUFrRDtRQUdsRCwwQ0FBMEM7S0FDM0MsQ0FBQztJQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCB7IERiSW50ZXJmYWNlIH0gZnJvbSAnLi4vdHlwaW5ncy9EYkludGVyZmFjZSc7XG5pbXBvcnQgeyBQcm9qZWN0RmFjdG9yeX0gZnJvbSBcIi4vUHJvamVjdFwiXG5cbi8vaW1wb3J0IHsgVmVoaWN1bGVGYWN0b3J5IH0gZnJvbSAnLi9WZWhpY3VsZSc7XG5cbi8vc2NzYy0yNi0wMy0yMDIwXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNb2RlbHMgPSAoc2VxdWVsaXplQ29uZmlnOiBhbnkpOiBEYkludGVyZmFjZSA9PiB7XG4gIGNvbnN0IHsgZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgcGFyYW1zIH0gPSBzZXF1ZWxpemVDb25maWc7XG4gIGNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgcGFyYW1zKTtcblxuICBjb25zdCBkYjogRGJJbnRlcmZhY2UgPSB7XG4gICAgc2VxdWVsaXplLFxuICAgIFNlcXVlbGl6ZSxcblByb2plY3QgOiBQcm9qZWN0RmFjdG9yeShzZXF1ZWxpemUsU2VxdWVsaXplKVxuICAgIFxuICAgIC8vVmVoaWN1bGU6IFZlaGljdWxlRmFjdG9yeShzZXF1ZWxpemUsIFNlcXVlbGl6ZSksXG4gICAgXG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgfTtcblxuICBPYmplY3Qua2V5cyhkYikuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XG4gICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGI7XG59O1xuIl19