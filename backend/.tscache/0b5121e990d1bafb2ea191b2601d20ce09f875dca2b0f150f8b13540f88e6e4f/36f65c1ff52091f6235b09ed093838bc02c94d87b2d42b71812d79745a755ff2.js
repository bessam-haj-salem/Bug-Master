"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverFactory = void 0;
exports.DriverFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        personal_ident: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        ref_drive_licence: {
            type: DataTypes.STRING(255),
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
    const Driver = sequelize.define('driver', attributes, {
        freezeTableName: true,
    });
    Driver.associate = (models) => {
        Driver.hasMany(models.TripDriver, {
            foreignKey: 'driver_id',
        });
    };
    return Driver;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvRHJpdmVyLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9odG1sL2FwaV90cmFuc2ZlcnMvc2VydmVyL21vZGVscy10cy9Ecml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBb0JhLFFBQUEsYUFBYSxHQUFHLENBQzNCLFNBQThCLEVBQzlCLFNBQThCLEVBQ29CLEVBQUU7SUFDcEQsTUFBTSxVQUFVLEdBQXlDO1FBQ3ZELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUM3QixRQUFRLEVBQ1IsVUFBVSxFQUNWO1FBQ0UsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FDRixDQUFDO0lBQ0YsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNoQyxVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgU2VxdWVsaXplQXR0cmlidXRlcyB9IGZyb20gJy4uL3R5cGluZ3MvU2VxdWVsaXplQXR0cmlidXRlcyc7XG4vL3RhYmxlIGhvdGVsXG5pbXBvcnQgeyB0cmlwRHJpdmVyQXR0cmlidXRlLCB0cmlwRHJpdmVySW5zdGFuY2UgfSBmcm9tICcuL1RyaXBEcml2ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIGRyaXZlckF0dHJpYnV0ZSB7XG4gIGlkOiBudW1iZXI7XG4gIGZpcnN0X25hbWU/OiBzdHJpbmc7XG4gIGxhc3RfbmFtZT86IHN0cmluZztcbiAgcGVyc29uYWxfaWRlbnQ/OiBzdHJpbmc7XG4gIHBhdGVudF9yZWY/OiBzdHJpbmc7XG4gIHJlZl9kcml2ZV9saWNlbmNlPzogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgZHJpdmVySW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8ZHJpdmVyQXR0cmlidXRlPixcbiAgICBkcml2ZXJBdHRyaWJ1dGUge31cblxuZXhwb3J0IGNvbnN0IERyaXZlckZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8ZHJpdmVySW5zdGFuY2UsIGRyaXZlckF0dHJpYnV0ZT4gPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVzOiBTZXF1ZWxpemVBdHRyaWJ1dGVzPGRyaXZlckF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB9LFxuICAgIGZpcnN0X25hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBsYXN0X25hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBwZXJzb25hbF9pZGVudDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHJlZl9kcml2ZV9saWNlbmNlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IERyaXZlciA9IHNlcXVlbGl6ZS5kZWZpbmU8ZHJpdmVySW5zdGFuY2UsIGRyaXZlckF0dHJpYnV0ZT4oXG4gICAgJ2RyaXZlcicsXG4gICAgYXR0cmlidXRlcyxcbiAgICB7XG4gICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gICAgfVxuICApO1xuICBEcml2ZXIuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIERyaXZlci5oYXNNYW55KG1vZGVscy5UcmlwRHJpdmVyLCB7XG4gICAgICBmb3JlaWduS2V5OiAnZHJpdmVyX2lkJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRHJpdmVyO1xufTtcbiJdfQ==