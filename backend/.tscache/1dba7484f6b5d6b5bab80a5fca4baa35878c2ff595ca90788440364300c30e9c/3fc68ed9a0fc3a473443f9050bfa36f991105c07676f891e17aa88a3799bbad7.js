"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersFactory = void 0;
exports.MembersFactory = (sequelize, DataTypes) => {
    const attributes = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('Manager', 'Developer'),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    };
    const Members = sequelize.define('members', attributes, {
        freezeTableName: true
    });
    Members.associate = (models) => {
        Members.hasMany(models.MembersProject, {
            foreignKey: 'members_id'
        });
    };
    return Members;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmFzc2VtL0RvY3VtZW50cy9QZXJzb25uZWxfUHJvamVjdC9idWctbWFzdGVyL2JhY2tlbmQvc2VydmVyL21vZGVscy10cy9NZW1iZXJzLnRzIiwic291cmNlcyI6WyIvaG9tZS9iYXNzZW0vRG9jdW1lbnRzL1BlcnNvbm5lbF9Qcm9qZWN0L2J1Zy1tYXN0ZXIvYmFja2VuZC9zZXJ2ZXIvbW9kZWxzLXRzL01lbWJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBZ0JhLFFBQUEsY0FBYyxHQUFHLENBQzVCLFNBQThCLEVBQzlCLFNBQThCLEVBQ3NCLEVBQUU7SUFDdEQsTUFBTSxVQUFVLEdBQTBDO1FBQ3hELEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUVELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7WUFDNUMsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDOUIsU0FBUyxFQUNULFVBQVUsRUFDVjtRQUNFLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQ0YsQ0FBQztJQUVGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFDckMsVUFBVSxFQUFFLFlBQVk7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBR0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCB7IFNlcXVlbGl6ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBpbmdzL1NlcXVlbGl6ZUF0dHJpYnV0ZXMnO1xuZXhwb3J0IGludGVyZmFjZSBtZW1iZXJzQXR0cmlidXRlIHtcbiAgaWQ6IG51bWJlcjtcbiAgZmlyc3RfbmFtZTogc3RyaW5nO1xuICBsYXN0X25hbWU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuXG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBtZW1iZXJzSW5zdGFuY2VcbiAgZXh0ZW5kcyBTZXF1ZWxpemUuSW5zdGFuY2U8bWVtYmVyc0F0dHJpYnV0ZT4sXG4gICAgbWVtYmVyc0F0dHJpYnV0ZSB7fVxuXG5leHBvcnQgY29uc3QgTWVtYmVyc0ZhY3RvcnkgPSAoXG4gIHNlcXVlbGl6ZTogU2VxdWVsaXplLlNlcXVlbGl6ZSxcbiAgRGF0YVR5cGVzOiBTZXF1ZWxpemUuRGF0YVR5cGVzXG4pOiBTZXF1ZWxpemUuTW9kZWw8bWVtYmVyc0luc3RhbmNlLCBtZW1iZXJzQXR0cmlidXRlPiA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXM6IFNlcXVlbGl6ZUF0dHJpYnV0ZXM8bWVtYmVyc0F0dHJpYnV0ZT4gPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZVxuICAgIH0sXG4gICAgZmlyc3RfbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTUpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgbGFzdF9uYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NSksXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcblxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5FTlVNKCdNYW5hZ2VyJywgJ0RldmVsb3BlcicpLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIHVwZGF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLkRBVEUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IE1lbWJlcnMgPSBzZXF1ZWxpemUuZGVmaW5lPG1lbWJlcnNJbnN0YW5jZSwgbWVtYmVyc0F0dHJpYnV0ZT4oXG4gICAgJ21lbWJlcnMnLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAge1xuICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlXG4gICAgfVxuICApO1xuXG4gIE1lbWJlcnMuYXNzb2NpYXRlID0gKG1vZGVscykgPT4ge1xuICAgIE1lbWJlcnMuaGFzTWFueShtb2RlbHMuTWVtYmVyc1Byb2plY3QsIHtcbiAgICAgIGZvcmVpZ25LZXk6ICdtZW1iZXJzX2lkJ1xuICAgIH0pO1xuICB9O1xuICBcblxuICByZXR1cm4gTWVtYmVycztcbn07XG4iXX0=