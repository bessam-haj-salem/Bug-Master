"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFactory = void 0;
exports.ImageFactory = (sequelize, DataTypes) => {
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
        hotel_id: {
            // foreign key in Hotel
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
    };
    const Image = sequelize.define('Image', attributes, {
        freezeTableName: true,
    });
    Image.associate = (models) => {
        Image.belongsTo(models.Hotel, {
            foreignKey: 'id',
        });
    };
    return Image;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvSW1hZ2UudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBpX3RyYW5zZmVycy9zZXJ2ZXIvbW9kZWxzLXRzL0ltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWVhLFFBQUEsWUFBWSxHQUFHLENBQzFCLFNBQThCLEVBQzlCLFNBQThCLEVBQ2tCLEVBQUU7SUFDbEQsTUFBTSxVQUFVLEdBQXdDO1FBQ3RELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUVELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUMxQixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsRUFBRTtTQUNqQjtRQUNELFFBQVEsRUFBRTtZQUNSLHVCQUF1QjtZQUN2QixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLElBQUk7U0FDaEI7S0FDRixDQUFDO0lBRUYsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDNUIsT0FBTyxFQUNQLFVBQVUsRUFDVjtRQUNFLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQ0YsQ0FBQztJQUNGLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMzQixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDNUIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgU2VxdWVsaXplQXR0cmlidXRlcyB9IGZyb20gJy4uL3R5cGluZ3MvU2VxdWVsaXplQXR0cmlidXRlcyc7XG4vL3RhYmxlIGltYWdlXG5pbXBvcnQgeyBob3RlbEF0dHJpYnV0ZSwgaG90ZWxJbnN0YW5jZSB9IGZyb20gJy4vSG90ZWwnO1xuaW1wb3J0IHsgTW9kZWwsIERhdGFUeXBlcyB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5leHBvcnQgaW50ZXJmYWNlIGltYWdlQXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgbm9tOiBzdHJpbmc7XG4gIGhvdGVsX2lkOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIGltYWdlSW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8aW1hZ2VBdHRyaWJ1dGU+LFxuICAgIGltYWdlQXR0cmlidXRlIHt9XG5cbmV4cG9ydCBjb25zdCBJbWFnZUZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8aW1hZ2VJbnN0YW5jZSwgaW1hZ2VBdHRyaWJ1dGU+ID0+IHtcbiAgY29uc3QgYXR0cmlidXRlczogU2VxdWVsaXplQXR0cmlidXRlczxpbWFnZUF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB9LFxuXG4gICAgbm9tOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDUwKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIH0sXG4gICAgaG90ZWxfaWQ6IHtcbiAgICAgIC8vIGZvcmVpZ24ga2V5IGluIEhvdGVsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBJbWFnZSA9IHNlcXVlbGl6ZS5kZWZpbmU8aW1hZ2VJbnN0YW5jZSwgaW1hZ2VBdHRyaWJ1dGU+KFxuICAgICdJbWFnZScsXG4gICAgYXR0cmlidXRlcyxcbiAgICB7XG4gICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gICAgfVxuICApO1xuICBJbWFnZS5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgSW1hZ2UuYmVsb25nc1RvKG1vZGVscy5Ib3RlbCwge1xuICAgICAgZm9yZWlnbktleTogJ2lkJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSW1hZ2U7XG59O1xuIl19