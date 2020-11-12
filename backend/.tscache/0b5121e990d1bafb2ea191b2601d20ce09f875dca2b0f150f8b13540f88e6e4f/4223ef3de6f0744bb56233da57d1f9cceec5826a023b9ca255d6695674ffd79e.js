"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripDriverFactory = void 0;
exports.TripDriverFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
    const TripDriver = sequelize.define('trip_driver', attributes, {
        freezeTableName: true,
    });
    TripDriver.associate = (models) => {
        TripDriver.belongsTo(models.Trip, {
            foreignKey: 'id',
        });
    };
    TripDriver.associate = (models) => {
        TripDriver.belongsTo(models.Driver, {
            foreignKey: 'id',
        });
    };
    return TripDriver;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVHJpcERyaXZlci50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVHJpcERyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFhYSxRQUFBLGlCQUFpQixHQUFHLENBQy9CLFNBQThCLEVBQzlCLFNBQThCLEVBQzRCLEVBQUU7SUFDNUQsTUFBTSxVQUFVLEdBQTZDO1FBQzNELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNqQyxhQUFhLEVBQ2IsVUFBVSxFQUNWO1FBQ0UsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FDRixDQUFDO0lBRUYsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2hDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNoQyxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDaEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2xDLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSB0cmlwRHJpdmVyQXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIHRyaXBEcml2ZXJJbnN0YW5jZVxuICBleHRlbmRzIFNlcXVlbGl6ZS5JbnN0YW5jZTx0cmlwRHJpdmVyQXR0cmlidXRlPixcbiAgICB0cmlwRHJpdmVyQXR0cmlidXRlIHt9XG5cbmV4cG9ydCBjb25zdCBUcmlwRHJpdmVyRmFjdG9yeSA9IChcbiAgc2VxdWVsaXplOiBTZXF1ZWxpemUuU2VxdWVsaXplLFxuICBEYXRhVHlwZXM6IFNlcXVlbGl6ZS5EYXRhVHlwZXNcbik6IFNlcXVlbGl6ZS5Nb2RlbDx0cmlwRHJpdmVySW5zdGFuY2UsIHRyaXBEcml2ZXJBdHRyaWJ1dGU+ID0+IHtcbiAgY29uc3QgYXR0cmlidXRlczogU2VxdWVsaXplQXR0cmlidXRlczx0cmlwRHJpdmVyQXR0cmlidXRlPiA9IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IFRyaXBEcml2ZXIgPSBzZXF1ZWxpemUuZGVmaW5lPHRyaXBEcml2ZXJJbnN0YW5jZSwgdHJpcERyaXZlckF0dHJpYnV0ZT4oXG4gICAgJ3RyaXBfZHJpdmVyJyxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIHtcbiAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbiAgICB9XG4gICk7XG5cbiAgVHJpcERyaXZlci5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVHJpcERyaXZlci5iZWxvbmdzVG8obW9kZWxzLlRyaXAsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG4gIFRyaXBEcml2ZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFRyaXBEcml2ZXIuYmVsb25nc1RvKG1vZGVscy5Ecml2ZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBUcmlwRHJpdmVyO1xufTtcbiJdfQ==