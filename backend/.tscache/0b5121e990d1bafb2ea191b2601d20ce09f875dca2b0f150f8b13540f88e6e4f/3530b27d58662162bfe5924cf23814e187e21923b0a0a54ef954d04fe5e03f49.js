"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculeMaintenanceFactory = void 0;
exports.VehiculeMaintenanceFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nature_maintenance: {
            type: DataTypes.ENUM('prevention', 'correction'),
            allowNull: false,
        },
        date_maintenance: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        designation_maintenance: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        cost_maintenance: {
            type: DataTypes.DECIMAL(10, 3),
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
    const VehiculeMaintenance = sequelize.define('vehicule_maintenance', attributes, {
        freezeTableName: true,
    });
    VehiculeMaintenance.associate = (models) => {
        VehiculeMaintenance.belongsTo(models.VehiculeFleet, {
            foreignKey: 'id',
        });
    };
    return VehiculeMaintenance;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVmVoaWN1bGVNYWludGVuYW5jZS50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVmVoaWN1bGVNYWludGVuYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFpQmEsUUFBQSwwQkFBMEIsR0FBRyxDQUN4QyxTQUE4QixFQUM5QixTQUE4QixFQUk5QixFQUFFO0lBQ0YsTUFBTSxVQUFVLEdBQXNEO1FBQ3BFLEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELGtCQUFrQixFQUFFO1lBQ2xCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7WUFDaEQsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FHMUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFO1FBQ3BDLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQztJQUNILG1CQUFtQixDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3pDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ2xELFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sbUJBQW1CLENBQUM7QUFDN0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcXVlbGl6ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBpbmdzL1NlcXVlbGl6ZUF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgdmVoaWN1bGVGbGVldEF0dHJpYnV0ZSwgdmVoaWN1bGVGbGVldEluc3RhbmNlIH0gZnJvbSAnLi9WZWhpY3VsZUZsZWV0JztcbmV4cG9ydCBpbnRlcmZhY2UgdmVoaWN1bGVNYWludGVuYW5jZUF0dHJpYnV0ZSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hdHVyZV9tYWludGVuYW5jZT86IHN0cmluZztcbiAgZGF0ZV9tYWludGVuYW5jZT86IERhdGU7XG4gIGRlc2lnbmF0aW9uX21haW50ZW5hbmNlPzogc3RyaW5nO1xuICBjb3N0X21haW50ZW5hbmNlPzogbnVtYmVyO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgdmVoaWN1bGVNYWludGVuYW5jZUluc3RhbmNlXG4gIGV4dGVuZHMgU2VxdWVsaXplLkluc3RhbmNlPHZlaGljdWxlTWFpbnRlbmFuY2VBdHRyaWJ1dGU+LFxuICAgIHZlaGljdWxlTWFpbnRlbmFuY2VBdHRyaWJ1dGUge31cblxuZXhwb3J0IGNvbnN0IFZlaGljdWxlTWFpbnRlbmFuY2VGYWN0b3J5ID0gKFxuICBzZXF1ZWxpemU6IFNlcXVlbGl6ZS5TZXF1ZWxpemUsXG4gIERhdGFUeXBlczogU2VxdWVsaXplLkRhdGFUeXBlc1xuKTogU2VxdWVsaXplLk1vZGVsPFxuICB2ZWhpY3VsZU1haW50ZW5hbmNlSW5zdGFuY2UsXG4gIHZlaGljdWxlTWFpbnRlbmFuY2VBdHRyaWJ1dGVcbj4gPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVzOiBTZXF1ZWxpemVBdHRyaWJ1dGVzPHZlaGljdWxlTWFpbnRlbmFuY2VBdHRyaWJ1dGU+ID0ge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgfSxcbiAgICBuYXR1cmVfbWFpbnRlbmFuY2U6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5FTlVNKCdwcmV2ZW50aW9uJywgJ2NvcnJlY3Rpb24nKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBkYXRlX21haW50ZW5hbmNlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBkZXNpZ25hdGlvbl9tYWludGVuYW5jZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGNvc3RfbWFpbnRlbmFuY2U6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5ERUNJTUFMKDEwLCAzKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHVwZGF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgVmVoaWN1bGVNYWludGVuYW5jZSA9IHNlcXVlbGl6ZS5kZWZpbmU8XG4gICAgdmVoaWN1bGVNYWludGVuYW5jZUluc3RhbmNlLFxuICAgIHZlaGljdWxlTWFpbnRlbmFuY2VBdHRyaWJ1dGVcbiAgPigndmVoaWN1bGVfbWFpbnRlbmFuY2UnLCBhdHRyaWJ1dGVzLCB7XG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICB9KTtcbiAgVmVoaWN1bGVNYWludGVuYW5jZS5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVmVoaWN1bGVNYWludGVuYW5jZS5iZWxvbmdzVG8obW9kZWxzLlZlaGljdWxlRmxlZXQsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBWZWhpY3VsZU1haW50ZW5hbmNlO1xufTtcbiJdfQ==