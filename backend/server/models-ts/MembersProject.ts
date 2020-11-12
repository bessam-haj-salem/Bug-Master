import * as Sequelize from 'sequelize';

import { SequelizeAttributes } from '../typings/SequelizeAttributes';
export interface membersProjectAttribute {
  id: number;
  project_id: number;
  members_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface membersProjectInstance
  extends Sequelize.Instance<membersProjectAttribute>,
    membersProjectAttribute {}

export const MembersProjectFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<membersProjectInstance, membersProjectAttribute> => {
  const attributes: SequelizeAttributes<membersProjectAttribute> = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    project_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },

    members_id: {
      type: DataTypes.INTEGER(11),
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

  const MembersProject = sequelize.define<
    membersProjectInstance,
    membersProjectAttribute
  >('members_project', attributes, {
    freezeTableName: true
  });

  MembersProject.associate = (models) => {
    MembersProject.belongsTo(models.Project, {
      foreignKey: 'id'
    });
  };
  MembersProject.associate = (models) => {
    MembersProject.belongsTo(models.Members, {
      foreignKey: 'id'
    });
  };

  return MembersProject;
};
