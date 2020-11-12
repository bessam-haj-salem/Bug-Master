"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentFactory = void 0;
exports.RentFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ref: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: '',
        },
        date_rent: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
        },
        hour_rent: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '',
        },
        date_prev_return: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
        },
        hour_prev_return: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
        },
        date_return: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
        },
        deposit: {
            type: DataTypes.DECIMAL(10, 3),
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
    const Rent = sequelize.define('rent', attributes, {
        freezeTableName: true,
    });
    Rent.associate = (models) => {
        Rent.belongsTo(models.ClientCompany, {
            //OK
            foreignKey: 'id',
        });
    };
    Rent.associate = (models) => {
        Rent.belongsTo(models.UsualCustomer, {
            //OK
            foreignKey: 'id',
        });
    };
    Rent.associate = (models) => {
        Rent.hasMany(models.RentDriver, {
            foreignKey: 'rent_id',
        });
    };
    return Rent;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvUmVudC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9tb2RlbHMtdHMvUmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFvQmEsUUFBQSxXQUFXLEdBQUcsQ0FDekIsU0FBOEIsRUFDOUIsU0FBOEIsRUFDZ0IsRUFBRTtJQUNoRCxNQUFNLFVBQVUsR0FBdUM7UUFDckQsRUFBRSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsRUFBRTtTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUMzQixNQUFNLEVBQ04sVUFBVSxFQUNWO1FBQ0UsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FDRixDQUFDO0lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJO1lBQ0osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJO1lBQ0osVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUM5QixVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgeyBTZXF1ZWxpemVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwaW5ncy9TZXF1ZWxpemVBdHRyaWJ1dGVzJztcblxuZXhwb3J0IGludGVyZmFjZSByZW50QXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgcmVmOiBzdHJpbmc7XG4gIGRhdGVfcmVudDogRGF0ZTtcbiAgaG91cl9yZW50OiBudW1iZXI7XG4gIGRhdGVfcHJldl9yZXR1cm46IERhdGU7XG4gIGhvdXJfcHJldl9yZXR1cm46IERhdGU7XG4gIGRhdGVfcmV0dXJuOiBEYXRlO1xuICBkZXBvc2l0OiBudW1iZXI7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSByZW50SW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8cmVudEF0dHJpYnV0ZT4sXG4gICAgcmVudEF0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgUmVudEZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8cmVudEluc3RhbmNlLCByZW50QXR0cmlidXRlPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8cmVudEF0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICB9LFxuICAgIHJlZjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBkYXRlX3JlbnQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBob3VyX3JlbnQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIH0sXG4gICAgZGF0ZV9wcmV2X3JldHVybjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGhvdXJfcHJldl9yZXR1cm46IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgfSxcbiAgICBkYXRlX3JldHVybjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGRlcG9zaXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5ERUNJTUFMKDEwLCAzKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IFJlbnQgPSBzZXF1ZWxpemUuZGVmaW5lPHJlbnRJbnN0YW5jZSwgcmVudEF0dHJpYnV0ZT4oXG4gICAgJ3JlbnQnLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAge1xuICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICAgIH1cbiAgKTtcbiAgUmVudC5hc3NvY2lhdGUgPSAobW9kZWxzKSA9PiB7XG4gICAgUmVudC5iZWxvbmdzVG8obW9kZWxzLkNsaWVudENvbXBhbnksIHtcbiAgICAgIC8vT0tcbiAgICAgIGZvcmVpZ25LZXk6ICdpZCcsXG4gICAgfSk7XG4gIH07XG4gIFJlbnQuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIFJlbnQuYmVsb25nc1RvKG1vZGVscy5Vc3VhbEN1c3RvbWVyLCB7XG4gICAgICAvL09LXG4gICAgICBmb3JlaWduS2V5OiAnaWQnLFxuICAgIH0pO1xuICB9O1xuICBSZW50LmFzc29jaWF0ZSA9IChtb2RlbHMpID0+IHtcbiAgICBSZW50Lmhhc01hbnkobW9kZWxzLlJlbnREcml2ZXIsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdyZW50X2lkJyxcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIFJlbnQ7XG59O1xuIl19