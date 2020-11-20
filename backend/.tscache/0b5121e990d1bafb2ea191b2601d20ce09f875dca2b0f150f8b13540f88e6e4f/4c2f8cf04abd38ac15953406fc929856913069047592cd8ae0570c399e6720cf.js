"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopoverUsualCustomerFactory = void 0;
exports.StopoverUsualCustomerFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        adress: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        zone: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        time_and_date: {
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        km_from_departure: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
        duration_hour_from_departure: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    };
    const StopoverUsualCustomer = sequelize.define('stopover_usual_customer', attributes, {
        freezeTableName: true,
    });
    StopoverUsualCustomer.associate = (models) => {
        StopoverUsualCustomer.belongsTo(models.UsualCustomer, {
            foreignKey: 'id',
        });
    };
    return StopoverUsualCustomer;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvU3RvcG92ZXJVc3VhbEN1c3RvbWVyLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL21vZGVscy10cy9TdG9wb3ZlclVzdWFsQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBb0JhLFFBQUEsNEJBQTRCLEdBQUcsQ0FDMUMsU0FBOEIsRUFDOUIsU0FBOEIsRUFJOUIsRUFBRTtJQUNGLE1BQU0sVUFBVSxHQUF3RDtRQUN0RSxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsU0FBUyxDQUFDLFFBQVE7WUFDeEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsNEJBQTRCLEVBQUU7WUFDNUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBRzVDLHlCQUF5QixFQUFFLFVBQVUsRUFBRTtRQUN2QyxlQUFlLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUM7SUFDSCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMzQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNwRCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixPQUFPLHFCQUFxQixDQUFDO0FBQy9CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBzdG9wb3ZlclVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICBhZHJlc3M/OiBzdHJpbmc7XG4gIHpvbmU/OiBEYXRlO1xuICB0aW1lX2FuZF9kYXRlPzogbnVtYmVyO1xuICBjaXR5Pzogc3RyaW5nO1xuICBjb3VudHJ5PzogRGF0ZTtcbiAga21fZnJvbV9kZXBhcnR1cmU/OiBudW1iZXI7XG4gIGR1cmF0aW9uX2hvdXJfZnJvbV9kZXBhcnR1cmU/OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBzdG9wb3ZlclVzdWFsQ3VzdG9tZXJJbnN0YW5jZVxuICBleHRlbmRzIFNlcXVlbGl6ZS5JbnN0YW5jZTxzdG9wb3ZlclVzdWFsQ3VzdG9tZXJBdHRyaWJ1dGU+LFxuICAgIHN0b3BvdmVyVXN1YWxDdXN0b21lckF0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgU3RvcG92ZXJVc3VhbEN1c3RvbWVyRmFjdG9yeSA9IChcbiAgc2VxdWVsaXplOiBTZXF1ZWxpemUuU2VxdWVsaXplLFxuICBEYXRhVHlwZXM6IFNlcXVlbGl6ZS5EYXRhVHlwZXNcbik6IFNlcXVlbGl6ZS5Nb2RlbDxcbiAgc3RvcG92ZXJVc3VhbEN1c3RvbWVySW5zdGFuY2UsXG4gIHN0b3BvdmVyVXN1YWxDdXN0b21lckF0dHJpYnV0ZVxuPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8c3RvcG92ZXJVc3VhbEN1c3RvbWVyQXR0cmlidXRlPiA9IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgIH0sXG4gICAgYWRyZXNzOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgem9uZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHRpbWVfYW5kX2RhdGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFVElNRSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBjaXR5OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgY291bnRyeToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGttX2Zyb21fZGVwYXJ0dXJlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREVDSU1BTCgxMCwgMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgZHVyYXRpb25faG91cl9mcm9tX2RlcGFydHVyZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRFQ0lNQUwoMTAsIDApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBTdG9wb3ZlclVzdWFsQ3VzdG9tZXIgPSBzZXF1ZWxpemUuZGVmaW5lPFxuICAgIHN0b3BvdmVyVXN1YWxDdXN0b21lckluc3RhbmNlLFxuICAgIHN0b3BvdmVyVXN1YWxDdXN0b21lckF0dHJpYnV0ZVxuICA+KCdzdG9wb3Zlcl91c3VhbF9jdXN0b21lcicsIGF0dHJpYnV0ZXMsIHtcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gIH0pO1xuICBTdG9wb3ZlclVzdWFsQ3VzdG9tZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFN0b3BvdmVyVXN1YWxDdXN0b21lci5iZWxvbmdzVG8obW9kZWxzLlVzdWFsQ3VzdG9tZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0b3BvdmVyVXN1YWxDdXN0b21lcjtcbn07XG4iXX0=