"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopoverTripFactory = void 0;
exports.StopoverTripFactory = (sequelize, DataTypes) => {
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
    const StopoverTrip = sequelize.define('stopover_trip', attributes, {
        freezeTableName: true,
    });
    StopoverTrip.associate = (models) => {
        StopoverTrip.belongsTo(models.Trip, {
            foreignKey: 'id',
        });
    };
    return StopoverTrip;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvU3RvcG92ZXJUcmlwLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL21vZGVscy10cy9TdG9wb3ZlclRyaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBb0JhLFFBQUEsbUJBQW1CLEdBQUcsQ0FDakMsU0FBOEIsRUFDOUIsU0FBOEIsRUFDZ0MsRUFBRTtJQUNoRSxNQUFNLFVBQVUsR0FBK0M7UUFDN0QsRUFBRSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELDRCQUE0QixFQUFFO1lBQzVCLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixDQUFDO0lBRUYsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FHbkMsZUFBZSxFQUFFLFVBQVUsRUFBRTtRQUM3QixlQUFlLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUM7SUFDSCxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2xDLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBzdG9wb3ZlclRyaXBBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICBhZHJlc3M/OiBzdHJpbmc7XG4gIHpvbmU/OiBEYXRlO1xuICB0aW1lX2FuZF9kYXRlPzogbnVtYmVyO1xuICBjaXR5Pzogc3RyaW5nO1xuICBjb3VudHJ5PzogRGF0ZTtcbiAga21fZnJvbV9kZXBhcnR1cmU/OiBudW1iZXI7XG4gIGR1cmF0aW9uX2hvdXJfZnJvbV9kZXBhcnR1cmU/OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBzdG9wb3ZlclRyaXBJbnN0YW5jZVxuICBleHRlbmRzIFNlcXVlbGl6ZS5JbnN0YW5jZTxzdG9wb3ZlclRyaXBBdHRyaWJ1dGU+LFxuICAgIHN0b3BvdmVyVHJpcEF0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgU3RvcG92ZXJUcmlwRmFjdG9yeSA9IChcbiAgc2VxdWVsaXplOiBTZXF1ZWxpemUuU2VxdWVsaXplLFxuICBEYXRhVHlwZXM6IFNlcXVlbGl6ZS5EYXRhVHlwZXNcbik6IFNlcXVlbGl6ZS5Nb2RlbDxzdG9wb3ZlclRyaXBJbnN0YW5jZSwgc3RvcG92ZXJUcmlwQXR0cmlidXRlPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8c3RvcG92ZXJUcmlwQXR0cmlidXRlPiA9IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgIH0sXG4gICAgYWRyZXNzOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgem9uZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHRpbWVfYW5kX2RhdGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFVElNRSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBjaXR5OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgY291bnRyeToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGttX2Zyb21fZGVwYXJ0dXJlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREVDSU1BTCgxMCwgMCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgZHVyYXRpb25faG91cl9mcm9tX2RlcGFydHVyZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRFQ0lNQUwoMTAsIDApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBTdG9wb3ZlclRyaXAgPSBzZXF1ZWxpemUuZGVmaW5lPFxuICAgIHN0b3BvdmVyVHJpcEluc3RhbmNlLFxuICAgIHN0b3BvdmVyVHJpcEF0dHJpYnV0ZVxuICA+KCdzdG9wb3Zlcl90cmlwJywgYXR0cmlidXRlcywge1xuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbiAgfSk7XG4gIFN0b3BvdmVyVHJpcC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgU3RvcG92ZXJUcmlwLmJlbG9uZ3NUbyhtb2RlbHMuVHJpcCwge1xuICAgICAgZm9yZWlnbktleTogJ2lkJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gU3RvcG92ZXJUcmlwO1xufTtcbiJdfQ==