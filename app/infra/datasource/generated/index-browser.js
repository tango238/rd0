
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.10.0
 * Query Engine version: 73e60b76d394f8d37d8ebd1f8918c79029f0db86
 */
Prisma.prismaVersion = {
  client: "3.10.0",
  engine: "73e60b76d394f8d37d8ebd1f8918c79029f0db86"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PageScalarFieldEnum = makeEnum({
  id: 'id',
  projectId: 'projectId',
  level: 'level',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ComponentTypeScalarFieldEnum = makeEnum({
  id: 'id',
  projectId: 'projectId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CommponentScalarFieldEnum = makeEnum({
  id: 'id',
  componentTypeId: 'componentTypeId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.InstanceScalarFieldEnum = makeEnum({
  id: 'id',
  pageId: 'pageId',
  componentId: 'componentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.RelationScalarFieldEnum = makeEnum({
  id: 'id',
  relationType: 'relationType',
  instanceId: 'instanceId',
  createdAt: 'createdAt'
});

exports.Prisma.ConnectionScalarFieldEnum = makeEnum({
  relationId: 'relationId',
  id: 'id',
  toId: 'toId',
  createdAt: 'createdAt'
});

exports.Prisma.DependantScalarFieldEnum = makeEnum({
  relationId: 'relationId',
  id: 'id',
  childId: 'childId',
  createdAt: 'createdAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.RelationType = makeEnum({
  Connection: 'Connection',
  Dependency: 'Dependency'
});

exports.Prisma.ModelName = makeEnum({
  Project: 'Project',
  Page: 'Page',
  ComponentType: 'ComponentType',
  Commponent: 'Commponent',
  Instance: 'Instance',
  Relation: 'Relation',
  Connection: 'Connection',
  Dependant: 'Dependant'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
