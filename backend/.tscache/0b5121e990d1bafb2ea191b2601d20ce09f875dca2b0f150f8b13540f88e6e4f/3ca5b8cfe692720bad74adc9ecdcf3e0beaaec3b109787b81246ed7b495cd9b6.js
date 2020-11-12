"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripFactory = void 0;
exports.TripFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ref_trip: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: '',
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
    const Trip = sequelize.define('trip', attributes, {
        freezeTableName: true,
    });
    Trip.associate = (models) => {
        Trip.hasMany(models.TripDriver, {
            foreignKey: 'trip_id',
        });
    };
    Trip.associate = (models) => {
        Trip.hasMany(models.TripUsualCustomer, {
            foreignKey: 'trip_id',
        });
    };
    Trip.associate = (models) => {
        Trip.hasMany(models.TripClientCompany, {
            foreignKey: 'trip_id',
        });
    };
    Trip.associate = (models) => {
        Trip.hasMany(models.Stopover, {
            foreignKey: 'trip_id',
        });
    };
    Trip.associate = (models) => {
        Trip.hasMany(models.VehiculeFleet, {
            foreignKey: 'trip_id',
        });
    };
    return Trip;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVHJpcC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVHJpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFjYSxRQUFBLFdBQVcsR0FBRyxDQUN6QixTQUE4QixFQUM5QixTQUE4QixFQUNnQixFQUFFO0lBQ2hELE1BQU0sVUFBVSxHQUF1QztRQUNyRCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixDQUFDO0lBRUYsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDM0IsTUFBTSxFQUNOLFVBQVUsRUFDVjtRQUNFLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQ0YsQ0FBQztJQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDOUIsVUFBVSxFQUFFLFNBQVM7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ3JDLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNyQyxVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzVCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDakMsVUFBVSxFQUFFLFNBQVM7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgU2VxdWVsaXplQXR0cmlidXRlcyB9IGZyb20gJy4uL3R5cGluZ3MvU2VxdWVsaXplQXR0cmlidXRlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgdHJpcEF0dHJpYnV0ZSB7XG4gIGlkOiBudW1iZXI7XG4gIHJlZl90cmlwOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSB0cmlwSW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8dHJpcEF0dHJpYnV0ZT4sXG4gICAgdHJpcEF0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgVHJpcEZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8dHJpcEluc3RhbmNlLCB0cmlwQXR0cmlidXRlPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8dHJpcEF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB9LFxuICAgIHJlZl90cmlwOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBUcmlwID0gc2VxdWVsaXplLmRlZmluZTx0cmlwSW5zdGFuY2UsIHRyaXBBdHRyaWJ1dGU+KFxuICAgICd0cmlwJyxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIHtcbiAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbiAgICB9XG4gICk7XG5cbiAgVHJpcC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVHJpcC5oYXNNYW55KG1vZGVscy5UcmlwRHJpdmVyLCB7XG4gICAgICBmb3JlaWduS2V5OiAndHJpcF9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFRyaXAuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFRyaXAuaGFzTWFueShtb2RlbHMuVHJpcFVzdWFsQ3VzdG9tZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd0cmlwX2lkJyxcbiAgICB9KTtcbiAgfTtcbiAgVHJpcC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVHJpcC5oYXNNYW55KG1vZGVscy5UcmlwQ2xpZW50Q29tcGFueSwge1xuICAgICAgZm9yZWlnbktleTogJ3RyaXBfaWQnLFxuICAgIH0pO1xuICB9O1xuICBUcmlwLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBUcmlwLmhhc01hbnkobW9kZWxzLlN0b3BvdmVyLCB7XG4gICAgICBmb3JlaWduS2V5OiAndHJpcF9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFRyaXAuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFRyaXAuaGFzTWFueShtb2RlbHMuVmVoaWN1bGVGbGVldCwge1xuICAgICAgZm9yZWlnbktleTogJ3RyaXBfaWQnLFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gVHJpcDtcbn07XG4iXX0=