"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentDriverFactory = void 0;
exports.RentDriverFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        rent_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        driver_id: {
            type: DataTypes.INTEGER(11),
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
    const RentDriver = sequelize.define('rent_driver', attributes, {
        freezeTableName: true,
    });
    RentDriver.associate = (models) => {
        RentDriver.belongsTo(models.Rent, {
            //OK
            foreignKey: 'id',
        });
    };
    RentDriver.associate = (models) => {
        RentDriver.belongsTo(models.Driver, {
            //OK
            foreignKey: 'id',
        });
    };
    return RentDriver;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvUmVudERyaXZlci50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvUmVudERyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFlYSxRQUFBLGlCQUFpQixHQUFHLENBQy9CLFNBQThCLEVBQzlCLFNBQThCLEVBQzRCLEVBQUU7SUFDNUQsTUFBTSxVQUFVLEdBQTZDO1FBQzNELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNqQyxhQUFhLEVBQ2IsVUFBVSxFQUNWO1FBQ0UsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FDRixDQUFDO0lBQ0YsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2hDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJO1lBQ0osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2hDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJO1lBQ0osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcXVlbGl6ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBpbmdzL1NlcXVlbGl6ZUF0dHJpYnV0ZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHJlbnREcml2ZXJBdHRyaWJ1dGUge1xuICBpZDogbnVtYmVyO1xuICByZW50X2lkOiBudW1iZXI7XG4gIGRyaXZlcl9pZDogbnVtYmVyO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgcmVudERyaXZlckluc3RhbmNlXG4gIGV4dGVuZHMgU2VxdWVsaXplLkluc3RhbmNlPHJlbnREcml2ZXJBdHRyaWJ1dGU+LFxuICAgIHJlbnREcml2ZXJBdHRyaWJ1dGUge31cblxuZXhwb3J0IGNvbnN0IFJlbnREcml2ZXJGYWN0b3J5ID0gKFxuICBzZXF1ZWxpemU6IFNlcXVlbGl6ZS5TZXF1ZWxpemUsXG4gIERhdGFUeXBlczogU2VxdWVsaXplLkRhdGFUeXBlc1xuKTogU2VxdWVsaXplLk1vZGVsPHJlbnREcml2ZXJJbnN0YW5jZSwgcmVudERyaXZlckF0dHJpYnV0ZT4gPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVzOiBTZXF1ZWxpemVBdHRyaWJ1dGVzPHJlbnREcml2ZXJBdHRyaWJ1dGU+ID0ge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgfSxcbiAgICByZW50X2lkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgZHJpdmVyX2lkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IFJlbnREcml2ZXIgPSBzZXF1ZWxpemUuZGVmaW5lPHJlbnREcml2ZXJJbnN0YW5jZSwgcmVudERyaXZlckF0dHJpYnV0ZT4oXG4gICAgJ3JlbnRfZHJpdmVyJyxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIHtcbiAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbiAgICB9XG4gICk7XG4gIFJlbnREcml2ZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFJlbnREcml2ZXIuYmVsb25nc1RvKG1vZGVscy5SZW50LCB7XG4gICAgICAvL09LXG4gICAgICBmb3JlaWduS2V5OiAnaWQnLFxuICAgIH0pO1xuICB9O1xuICBSZW50RHJpdmVyLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBSZW50RHJpdmVyLmJlbG9uZ3NUbyhtb2RlbHMuRHJpdmVyLCB7XG4gICAgICAvL09LXG4gICAgICBmb3JlaWduS2V5OiAnaWQnLFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gUmVudERyaXZlcjtcbn07XG4iXX0=