import * as Sequelize from 'sequelize';

import { SequelizeAttributes } from '../typings/SequelizeAttributes';
export interface membersAttribute {
  id: number;
  first_name: string;
  last_name: string;
  role: string;

  createdAt: Date;
  updatedAt: Date;
}
export interface membersInstance
  extends Sequelize.Instance<membersAttribute>,
    membersAttribute {}

export const MembersFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<membersInstance, membersAttribute> => {
  const attributes: SequelizeAttributes<membersAttribute> = {
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

  const Members = sequelize.define<membersInstance, membersAttribute>(
    'members',
    attributes,
    {
      freezeTableName: true
    }
  );

  Members.associate = (models) => {
    Members.hasMany(models.MembersProject, {
      foreignKey: 'members_id'
    });
  };
  Members.associate = (models) => {
    Members.hasMany(models.IssuesMembers, {
      foreignKey: 'members_id'
    });
  };

  return Members;
};
