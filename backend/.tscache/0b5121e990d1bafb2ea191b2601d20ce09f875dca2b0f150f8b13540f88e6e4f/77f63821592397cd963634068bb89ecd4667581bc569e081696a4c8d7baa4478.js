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
        Trip.hasMany(models.TripPassenger, {
            foreignKey: 'trip_id',
        });
    };
    Trip.associate = (models) => {
        Trip.hasMany(models.TripClientCompany, {
            foreignKey: 'trip_id',
        });
    };
    return Trip;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVHJpcC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvVHJpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF3QmEsUUFBQSxXQUFXLEdBQUcsQ0FDekIsU0FBOEIsRUFDOUIsU0FBOEIsRUFDZ0IsRUFBRTtJQUNoRCxNQUFNLFVBQVUsR0FBdUM7UUFDckQsRUFBRSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzNCLE1BQU0sRUFDTixVQUFVLEVBQ1Y7UUFDRSxlQUFlLEVBQUUsSUFBSTtLQUN0QixDQUNGLENBQUM7SUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzlCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDakMsVUFBVSxFQUFFLFNBQVM7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ3JDLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcXVlbGl6ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBpbmdzL1NlcXVlbGl6ZUF0dHJpYnV0ZXMnO1xuLy90YWJsZSBob3RlbFxuaW1wb3J0IHsgdHJpcERyaXZlckF0dHJpYnV0ZSwgdHJpcERyaXZlckluc3RhbmNlIH0gZnJvbSAnLi9UcmlwRHJpdmVyJztcbmltcG9ydCB7XG4gIHRyaXBVc3VhbEN1c3RvbWVyQXR0cmlidXRlLFxuICB0cmlwVXN1YWxDdXN0b21lckluc3RhbmNlLFxufSBmcm9tICcuL1RyaXBVc3VhbEN1c3RvbWVyJztcbmltcG9ydCB7XG4gIHRyaXBDbGllbnRDb21wYW55QXR0cmlidXRlLFxuICB0cmlwQ2xpZW50Q29tcGFueUluc3RhbmNlLFxufSBmcm9tICcuL1RyaXBDbGllbnRDb21wYW55JztcblxuZXhwb3J0IGludGVyZmFjZSB0cmlwQXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgcmVmX3RyaXA6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIHRyaXBJbnN0YW5jZVxuICBleHRlbmRzIFNlcXVlbGl6ZS5JbnN0YW5jZTx0cmlwQXR0cmlidXRlPixcbiAgICB0cmlwQXR0cmlidXRlIHt9XG5cbmV4cG9ydCBjb25zdCBUcmlwRmFjdG9yeSA9IChcbiAgc2VxdWVsaXplOiBTZXF1ZWxpemUuU2VxdWVsaXplLFxuICBEYXRhVHlwZXM6IFNlcXVlbGl6ZS5EYXRhVHlwZXNcbik6IFNlcXVlbGl6ZS5Nb2RlbDx0cmlwSW5zdGFuY2UsIHRyaXBBdHRyaWJ1dGU+ID0+IHtcbiAgY29uc3QgYXR0cmlidXRlczogU2VxdWVsaXplQXR0cmlidXRlczx0cmlwQXR0cmlidXRlPiA9IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTEpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgIH0sXG4gICAgcmVmX3RyaXA6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU1KSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IFRyaXAgPSBzZXF1ZWxpemUuZGVmaW5lPHRyaXBJbnN0YW5jZSwgdHJpcEF0dHJpYnV0ZT4oXG4gICAgJ3RyaXAnLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAge1xuICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICBUcmlwLmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBUcmlwLmhhc01hbnkobW9kZWxzLlRyaXBEcml2ZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd0cmlwX2lkJyxcbiAgICB9KTtcbiAgfTtcbiAgVHJpcC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgVHJpcC5oYXNNYW55KG1vZGVscy5UcmlwUGFzc2VuZ2VyLCB7XG4gICAgICBmb3JlaWduS2V5OiAndHJpcF9pZCcsXG4gICAgfSk7XG4gIH07XG4gIFRyaXAuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFRyaXAuaGFzTWFueShtb2RlbHMuVHJpcENsaWVudENvbXBhbnksIHtcbiAgICAgIGZvcmVpZ25LZXk6ICd0cmlwX2lkJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gVHJpcDtcbn07XG4iXX0=