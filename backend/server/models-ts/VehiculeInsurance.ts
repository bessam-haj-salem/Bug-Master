import * as Sequelize from 'sequelize';

import { SequelizeAttributes } from '../typings/SequelizeAttributes';
export interface vehiculeInsuranceAttribute {
  id: number;
  ref_insurance_contract?: string;
  name_insurance_agency?: string;
  date_begin?: Date;
  date_end?: Date;
  cost_insurance?: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface vehiculeInsuranceInstance
  extends Sequelize.Instance<vehiculeInsuranceAttribute>,
    vehiculeInsuranceAttribute {}

export const VehiculeInsuranceFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<vehiculeInsuranceInstance, vehiculeInsuranceAttribute> => {
  const attributes: SequelizeAttributes<vehiculeInsuranceAttribute> = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ref_insurance_contract: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    name_insurance_agency: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date_begin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cost_insurance: {
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

  const VehiculeInsurance = sequelize.define<
    vehiculeInsuranceInstance,
    vehiculeInsuranceAttribute
  >('vehicule_insurance', attributes, {
    freezeTableName: true,
  });
  VehiculeInsurance.associate = (models) => {
    VehiculeInsurance.belongsTo(models.VehiculeFleet, {
      foreignKey: 'id',
    });
  };
  return VehiculeInsurance;
};
