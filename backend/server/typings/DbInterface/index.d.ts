import * as Sequelize from 'sequelize';
import { projectAttribute, projectInstance } from '../../models-ts/Project';
import { issuesAttribute, issuesInstance } from '../../models-ts/Issues';
import { membersAttribute, membersInstance } from '../../models-ts/Members';
import {
  issuesMembersAttribute,
  issuesMembersInstance
} from '../../models-ts/IssuesMembers';
import {
  membersProjectAttribute,
  membersProjectInstance
} from '../../models-ts/MembersProject';
export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  Project: Sequelize.Model<projectInstance, projectAttribute>;
  Issues: Sequelize.Model<issuesInstance, issuesAttribute>;
  Members: Sequelize.Model<projectInstance, projectAttribute>;
  MembersProject: Sequelize.Model<
    membersProjectInstance,
    membersProjectAttribute
  >;
  IssuesMembers: Sequelize.Model<issuesInstance, issuesInstance>;
}
