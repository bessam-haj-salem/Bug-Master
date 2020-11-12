import * as Sequelize from 'sequelize';

import { SequelizeAttributes } from '../typings/SequelizeAttributes';
export interface issuesMembersAttribute {
  id: number;
  members_id: number;
  issues_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface issuesMembersInstance
  extends Sequelize.Instance<issuesMembersAttribute>,
    issuesMembersAttribute {}

export const IssuesMembersFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<issuesMembersInstance, issuesMembersAttribute> => {
  const attributes: SequelizeAttributes<issuesMembersAttribute> = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    members_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },

    issues_id: {
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

  const IssuesMembers = sequelize.define<
    issuesMembersInstance,
    issuesMembersAttribute
  >('issues_members', attributes, {
    freezeTableName: true
  });

  IssuesMembers.associate = (models) => {
    IssuesMembers.belongsTo(models.Members, {
      foreignKey: 'id'
    });
  };
  IssuesMembers.associate = (models) => {
    IssuesMembers.belongsTo(models.Issues, {
      foreignKey: 'id'
    });
  };

  return IssuesMembers;
};
