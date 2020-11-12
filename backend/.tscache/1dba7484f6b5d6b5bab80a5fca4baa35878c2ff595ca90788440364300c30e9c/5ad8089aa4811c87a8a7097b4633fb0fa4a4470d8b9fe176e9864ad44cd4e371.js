"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModels = void 0;
const sequelize_1 = require("sequelize");
const Project_1 = require("./Project");
const Issues_1 = require("./Issues");
const Members_1 = require("./Members");
const MembersProject_1 = require("./MembersProject");
exports.createModels = (sequelizeConfig) => {
    const { database, username, password, params } = sequelizeConfig;
    const sequelize = new sequelize_1.Sequelize(database, username, password, params);
    const db = {
        sequelize,
        Sequelize: sequelize_1.Sequelize,
        Project: Project_1.ProjectFactory(sequelize, sequelize_1.Sequelize),
        Issues: Issues_1.IssuesFactory(sequelize, sequelize_1.Sequelize),
        Members: Members_1.MembersFactory(sequelize, sequelize_1.Sequelize),
        MembersProject: MembersProject_1.MembersProjectFactory(sequelize, sequelize_1.Sequelize)
    };
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9pbmRleC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFdEMsdUNBQTJDO0FBQzNDLHFDQUF5QztBQUN6Qyx1Q0FBMkM7QUFDM0MscURBQXlEO0FBQzVDLFFBQUEsWUFBWSxHQUFHLENBQUMsZUFBb0IsRUFBZSxFQUFFO0lBQ2hFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUM7SUFDakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXRFLE1BQU0sRUFBRSxHQUFnQjtRQUN0QixTQUFTO1FBQ1QsU0FBUyxFQUFULHFCQUFTO1FBQ1QsT0FBTyxFQUFFLHdCQUFjLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDN0MsTUFBTSxFQUFFLHNCQUFhLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDM0MsT0FBTyxFQUFFLHdCQUFjLENBQUMsU0FBUyxFQUFFLHFCQUFTLENBQUM7UUFDN0MsY0FBYyxFQUFFLHNDQUFxQixDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDO0tBQzVELENBQUM7SUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ3BDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgeyBEYkludGVyZmFjZSB9IGZyb20gJy4uL3R5cGluZ3MvRGJJbnRlcmZhY2UnO1xuaW1wb3J0IHsgUHJvamVjdEZhY3RvcnkgfSBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IHsgSXNzdWVzRmFjdG9yeSB9IGZyb20gJy4vSXNzdWVzJztcbmltcG9ydCB7IE1lbWJlcnNGYWN0b3J5IH0gZnJvbSAnLi9NZW1iZXJzJztcbmltcG9ydCB7IE1lbWJlcnNQcm9qZWN0RmFjdG9yeSB9IGZyb20gJy4vTWVtYmVyc1Byb2plY3QnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vZGVscyA9IChzZXF1ZWxpemVDb25maWc6IGFueSk6IERiSW50ZXJmYWNlID0+IHtcbiAgY29uc3QgeyBkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXJhbXMgfSA9IHNlcXVlbGl6ZUNvbmZpZztcbiAgY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXJhbXMpO1xuXG4gIGNvbnN0IGRiOiBEYkludGVyZmFjZSA9IHtcbiAgICBzZXF1ZWxpemUsXG4gICAgU2VxdWVsaXplLFxuICAgIFByb2plY3Q6IFByb2plY3RGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBJc3N1ZXM6IElzc3Vlc0ZhY3Rvcnkoc2VxdWVsaXplLCBTZXF1ZWxpemUpLFxuICAgIE1lbWJlcnM6IE1lbWJlcnNGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKSxcbiAgICBNZW1iZXJzUHJvamVjdDogTWVtYmVyc1Byb2plY3RGYWN0b3J5KHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxuICB9O1xuXG4gIE9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcbiAgICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYjtcbn07XG4iXX0=