"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelFactory = void 0;
exports.HotelFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: '',
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        adresse: {
            type: DataTypes.STRING(250),
            allowNull: true,
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
    const Hotel = sequelize.define('Hotel', attributes, {
        freezeTableName: true,
    });
    Hotel.associate = (models) => {
        Hotel.hasMany(models.Image, {
            foreignKey: 'hotel_id',
        });
    };
    return Hotel;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvSG90ZWwudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvbW9kZWxzLXRzL0hvdGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWlCYSxRQUFBLFlBQVksR0FBRyxDQUMxQixTQUE4QixFQUM5QixTQUE4QixFQUNrQixFQUFFO0lBQ2xELE1BQU0sVUFBVSxHQUF3QztRQUN0RCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDMUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7UUFFRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLElBQUk7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLElBQUk7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixDQUFDO0lBRUYsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDNUIsT0FBTyxFQUNQLFVBQVUsRUFDVjtRQUNFLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQ0YsQ0FBQztJQUVGLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDMUIsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgU2VxdWVsaXplQXR0cmlidXRlcyB9IGZyb20gJy4uL3R5cGluZ3MvU2VxdWVsaXplQXR0cmlidXRlcyc7XG4vL3RhYmxlIGhvdGVsXG5pbXBvcnQgeyBpbWFnZUF0dHJpYnV0ZSwgaW1hZ2VJbnN0YW5jZSB9IGZyb20gJy4vSW1hZ2UnO1xuZXhwb3J0IGludGVyZmFjZSBob3RlbEF0dHJpYnV0ZSB7XG4gIGlkOiBudW1iZXI7XG4gIG5vbTogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgYWRyZXNzZT86IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIGhvdGVsSW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8aG90ZWxBdHRyaWJ1dGU+LFxuICAgIGhvdGVsQXR0cmlidXRlIHt9XG5cbmV4cG9ydCBjb25zdCBIb3RlbEZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8aG90ZWxJbnN0YW5jZSwgaG90ZWxBdHRyaWJ1dGU+ID0+IHtcbiAgY29uc3QgYXR0cmlidXRlczogU2VxdWVsaXplQXR0cmlidXRlczxob3RlbEF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB9LFxuICAgIG5vbToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg1MCksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICB9LFxuXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMTAwKSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICAgIGFkcmVzc2U6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjUwKSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgdXBkYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBIb3RlbCA9IHNlcXVlbGl6ZS5kZWZpbmU8aG90ZWxJbnN0YW5jZSwgaG90ZWxBdHRyaWJ1dGU+KFxuICAgICdIb3RlbCcsXG4gICAgYXR0cmlidXRlcyxcbiAgICB7XG4gICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIEhvdGVsLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBIb3RlbC5oYXNNYW55KG1vZGVscy5JbWFnZSwge1xuICAgICAgZm9yZWlnbktleTogJ2hvdGVsX2lkJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSG90ZWw7XG59O1xuIl19