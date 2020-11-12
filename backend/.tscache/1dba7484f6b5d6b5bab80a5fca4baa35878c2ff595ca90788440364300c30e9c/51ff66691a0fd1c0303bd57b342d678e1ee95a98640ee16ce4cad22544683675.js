"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModels = void 0;
const sequelize_1 = require("sequelize");
const Project_1 = require("./Project");
const Issues_1 = require("./Issues");
exports.createModels = (sequelizeConfig) => {
    const { database, username, password, params } = sequelizeConfig;
    const sequelize = new sequelize_1.Sequelize(database, username, password, params);
    const db = {
        sequelize,
        Sequelize: sequelize_1.Sequelize,
        Project: Project_1.ProjectFactory(sequelize, sequelize_1.Sequelize),
        Issues: Issues_1.IssuesFactory(sequelize, sequelize_1.Sequelize)
    };
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFdEMsdUNBQTJDO0FBQzNDLHFDQUF5QztBQUU1QixRQUFBLFlBQVksR0FBRyxDQUFDLGVBQW9CLEVBQWUsRUFBRTtJQUNoRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ2pFLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV0RSxNQUFNLEVBQUUsR0FBZ0I7UUFDdEIsU0FBUztRQUNULFNBQVMsRUFBVCxxQkFBUztRQUNULE9BQU8sRUFBRSx3QkFBYyxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO1FBQzdDLE1BQU0sRUFBRSxzQkFBYSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO0tBQzVDLENBQUM7SUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ3BDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBEYkludGVyZmFjZSB9IGZyb20gJy4uL3R5cGluZ3MvRGJJbnRlcmZhY2UnO1xuaW1wb3J0IHsgUHJvamVjdEZhY3RvcnkgfSBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IHsgSXNzdWVzRmFjdG9yeSB9IGZyb20gJy4vSXNzdWVzJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vZGVscyA9IChzZXF1ZWxpemVDb25maWc6IGFueSk6IERiSW50ZXJmYWNlID0+IHtcbiAgY29uc3QgeyBkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXJhbXMgfSA9IHNlcXVlbGl6ZUNvbmZpZztcbiAgY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXJhbXMpO1xuXG4gIGNvbnN0IGRiOiBEYkludGVyZmFjZSA9IHtcbiAgICBzZXF1ZWxpemUsXG4gICAgU2VxdWVsaXplLFxuICAgIFByb2plY3Q6IFByb2plY3RGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBJc3N1ZXM6IElzc3Vlc0ZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG4gIH07XG5cbiAgT2JqZWN0LmtleXMoZGIpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xuICAgICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiJdfQ==