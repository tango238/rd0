
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Project
 * 
 */
export type Project = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Page
 * 
 */
export type Page = {
  id: string
  projectId: string
  level: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ComponentType
 * 
 */
export type ComponentType = {
  id: string
  projectId: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Commponent
 * 
 */
export type Commponent = {
  id: string
  componentTypeId: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Instance
 * 
 */
export type Instance = {
  id: string
  pageId: string
  componentId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Relation
 * 
 */
export type Relation = {
  id: string
  relationType: RelationType
  instanceId: string
  createdAt: Date
}

/**
 * Model Connection
 * 
 */
export type Connection = {
  relationId: string
  id: string
  toId: string
  createdAt: Date
}

/**
 * Model Dependant
 * 
 */
export type Dependant = {
  relationId: string
  id: string
  childId: string
  createdAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const RelationType: {
  Connection: 'Connection',
  Dependency: 'Dependency'
};

export type RelationType = (typeof RelationType)[keyof typeof RelationType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<GlobalReject>;

  /**
   * `prisma.componentType`: Exposes CRUD operations for the **ComponentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComponentTypes
    * const componentTypes = await prisma.componentType.findMany()
    * ```
    */
  get componentType(): Prisma.ComponentTypeDelegate<GlobalReject>;

  /**
   * `prisma.commponent`: Exposes CRUD operations for the **Commponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commponents
    * const commponents = await prisma.commponent.findMany()
    * ```
    */
  get commponent(): Prisma.CommponentDelegate<GlobalReject>;

  /**
   * `prisma.instance`: Exposes CRUD operations for the **Instance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instances
    * const instances = await prisma.instance.findMany()
    * ```
    */
  get instance(): Prisma.InstanceDelegate<GlobalReject>;

  /**
   * `prisma.relation`: Exposes CRUD operations for the **Relation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relations
    * const relations = await prisma.relation.findMany()
    * ```
    */
  get relation(): Prisma.RelationDelegate<GlobalReject>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **Connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.ConnectionDelegate<GlobalReject>;

  /**
   * `prisma.dependant`: Exposes CRUD operations for the **Dependant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dependants
    * const dependants = await prisma.dependant.findMany()
    * ```
    */
  get dependant(): Prisma.DependantDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.10.0
   * Query Engine version: 73e60b76d394f8d37d8ebd1f8918c79029f0db86
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Project: 'Project',
    Page: 'Page',
    ComponentType: 'ComponentType',
    Commponent: 'Commponent',
    Instance: 'Instance',
    Relation: 'Relation',
    Connection: 'Connection',
    Dependant: 'Dependant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    pages: number
    componentTypes: number
  }

  export type ProjectCountOutputTypeSelect = {
    pages?: boolean
    componentTypes?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProjectCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProjectCountOutputType
    : S extends undefined
    ? never
    : S extends ProjectCountOutputTypeArgs
    ?'include' extends U
    ? ProjectCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
    : ProjectCountOutputType
  : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     * 
    **/
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Count Type PageCountOutputType
   */


  export type PageCountOutputType = {
    Instance: number
  }

  export type PageCountOutputTypeSelect = {
    Instance?: boolean
  }

  export type PageCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PageCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PageCountOutputType
    : S extends undefined
    ? never
    : S extends PageCountOutputTypeArgs
    ?'include' extends U
    ? PageCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PageCountOutputType ? PageCountOutputType[P] : never
  } 
    : PageCountOutputType
  : PageCountOutputType




  // Custom InputTypes

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     * 
    **/
    select?: PageCountOutputTypeSelect | null
  }



  /**
   * Count Type ComponentTypeCountOutputType
   */


  export type ComponentTypeCountOutputType = {
    components: number
  }

  export type ComponentTypeCountOutputTypeSelect = {
    components?: boolean
  }

  export type ComponentTypeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ComponentTypeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ComponentTypeCountOutputType
    : S extends undefined
    ? never
    : S extends ComponentTypeCountOutputTypeArgs
    ?'include' extends U
    ? ComponentTypeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ComponentTypeCountOutputType ? ComponentTypeCountOutputType[P] : never
  } 
    : ComponentTypeCountOutputType
  : ComponentTypeCountOutputType




  // Custom InputTypes

  /**
   * ComponentTypeCountOutputType without action
   */
  export type ComponentTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ComponentTypeCountOutputType
     * 
    **/
    select?: ComponentTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type CommponentCountOutputType
   */


  export type CommponentCountOutputType = {
    instances: number
  }

  export type CommponentCountOutputTypeSelect = {
    instances?: boolean
  }

  export type CommponentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CommponentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CommponentCountOutputType
    : S extends undefined
    ? never
    : S extends CommponentCountOutputTypeArgs
    ?'include' extends U
    ? CommponentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CommponentCountOutputType ? CommponentCountOutputType[P] : never
  } 
    : CommponentCountOutputType
  : CommponentCountOutputType




  // Custom InputTypes

  /**
   * CommponentCountOutputType without action
   */
  export type CommponentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CommponentCountOutputType
     * 
    **/
    select?: CommponentCountOutputTypeSelect | null
  }



  /**
   * Count Type InstanceCountOutputType
   */


  export type InstanceCountOutputType = {
    relations: number
    connectedTo: number
    childOf: number
  }

  export type InstanceCountOutputTypeSelect = {
    relations?: boolean
    connectedTo?: boolean
    childOf?: boolean
  }

  export type InstanceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | InstanceCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? InstanceCountOutputType
    : S extends undefined
    ? never
    : S extends InstanceCountOutputTypeArgs
    ?'include' extends U
    ? InstanceCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof InstanceCountOutputType ? InstanceCountOutputType[P] : never
  } 
    : InstanceCountOutputType
  : InstanceCountOutputType




  // Custom InputTypes

  /**
   * InstanceCountOutputType without action
   */
  export type InstanceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InstanceCountOutputType
     * 
    **/
    select?: InstanceCountOutputTypeSelect | null
  }



  /**
   * Count Type RelationCountOutputType
   */


  export type RelationCountOutputType = {
    connections: number
    dependants: number
  }

  export type RelationCountOutputTypeSelect = {
    connections?: boolean
    dependants?: boolean
  }

  export type RelationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RelationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RelationCountOutputType
    : S extends undefined
    ? never
    : S extends RelationCountOutputTypeArgs
    ?'include' extends U
    ? RelationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RelationCountOutputType ? RelationCountOutputType[P] : never
  } 
    : RelationCountOutputType
  : RelationCountOutputType




  // Custom InputTypes

  /**
   * RelationCountOutputType without action
   */
  export type RelationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RelationCountOutputType
     * 
    **/
    select?: RelationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: Array<ProjectScalarFieldEnum>
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pages?: boolean | PageFindManyArgs
    componentTypes?: boolean | ComponentTypeFindManyArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectInclude = {
    pages?: boolean | PageFindManyArgs
    componentTypes?: boolean | ComponentTypeFindManyArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectArgs,
    U = keyof S
      > = S extends true
        ? Project
    : S extends undefined
    ? never
    : S extends ProjectArgs | ProjectFindManyArgs
    ?'include' extends U
    ? Project  & {
    [P in TrueKeys<S['include']>]:
        P extends 'pages' ? Array < PageGetPayload<S['include'][P]>>  :
        P extends 'componentTypes' ? Array < ComponentTypeGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'pages' ? Array < PageGetPayload<S['select'][P]>>  :
        P extends 'componentTypes' ? Array < ComponentTypeGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Project ? Project[P] : never
  } 
    : Project
  : Project


  type ProjectCountArgs = Merge<
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }
  >

  export interface ProjectDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    pages<T extends PageFindManyArgs = {}>(args?: Subset<T, PageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Page>>, PrismaPromise<Array<PageGetPayload<T>>>>;

    componentTypes<T extends ComponentTypeFindManyArgs = {}>(args?: Subset<T, ComponentTypeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ComponentType>>, PrismaPromise<Array<ComponentTypeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Throw an Error if a Project can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Throw an Error if a Project can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     * 
    **/
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     * 
    **/
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     * 
    **/
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     * 
    **/
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     * 
    **/
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     * 
    **/
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
  }



  /**
   * Model Page
   */


  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageAvgAggregateOutputType = {
    level: number | null
  }

  export type PageSumAggregateOutputType = {
    level: number | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    level: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    level: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    projectId: number
    level: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageAvgAggregateInputType = {
    level?: true
  }

  export type PageSumAggregateInputType = {
    level?: true
  }

  export type PageMinAggregateInputType = {
    id?: true
    projectId?: true
    level?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    projectId?: true
    level?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    projectId?: true
    level?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs = {
    /**
     * Filter which Page to aggregate.
     * 
    **/
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     * 
    **/
    orderBy?: Enumerable<PageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs = {
    where?: PageWhereInput
    orderBy?: Enumerable<PageOrderByWithAggregationInput>
    by: Array<PageScalarFieldEnum>
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _avg?: PageAvgAggregateInputType
    _sum?: PageSumAggregateInputType
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }


  export type PageGroupByOutputType = {
    id: string
    projectId: string
    level: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect = {
    id?: boolean
    projectId?: boolean
    level?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectArgs
    Instance?: boolean | InstanceFindManyArgs
    _count?: boolean | PageCountOutputTypeArgs
  }

  export type PageInclude = {
    project?: boolean | ProjectArgs
    Instance?: boolean | InstanceFindManyArgs
    _count?: boolean | PageCountOutputTypeArgs
  }

  export type PageGetPayload<
    S extends boolean | null | undefined | PageArgs,
    U = keyof S
      > = S extends true
        ? Page
    : S extends undefined
    ? never
    : S extends PageArgs | PageFindManyArgs
    ?'include' extends U
    ? Page  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends 'Instance' ? Array < InstanceGetPayload<S['include'][P]>>  :
        P extends '_count' ? PageCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends 'Instance' ? Array < InstanceGetPayload<S['select'][P]>>  :
        P extends '_count' ? PageCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Page ? Page[P] : never
  } 
    : Page
  : Page


  type PageCountArgs = Merge<
    Omit<PageFindManyArgs, 'select' | 'include'> & {
      select?: PageCountAggregateInputType | true
    }
  >

  export interface PageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Page'> extends True ? CheckSelect<T, Prisma__PageClient<Page>, Prisma__PageClient<PageGetPayload<T>>> : CheckSelect<T, Prisma__PageClient<Page | null >, Prisma__PageClient<PageGetPayload<T> | null >>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Page'> extends True ? CheckSelect<T, Prisma__PageClient<Page>, Prisma__PageClient<PageGetPayload<T>>> : CheckSelect<T, Prisma__PageClient<Page | null >, Prisma__PageClient<PageGetPayload<T> | null >>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PageFindManyArgs>(
      args?: SelectSubset<T, PageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Page>>, PrismaPromise<Array<PageGetPayload<T>>>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
    **/
    create<T extends PageCreateArgs>(
      args: SelectSubset<T, PageCreateArgs>
    ): CheckSelect<T, Prisma__PageClient<Page>, Prisma__PageClient<PageGetPayload<T>>>

    /**
     * Create many Pages.
     *     @param {PageCreateManyArgs} args - Arguments to create many Pages.
     *     @example
     *     // Create many Pages
     *     const page = await prisma.page.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PageCreateManyArgs>(
      args?: SelectSubset<T, PageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
    **/
    delete<T extends PageDeleteArgs>(
      args: SelectSubset<T, PageDeleteArgs>
    ): CheckSelect<T, Prisma__PageClient<Page>, Prisma__PageClient<PageGetPayload<T>>>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PageUpdateArgs>(
      args: SelectSubset<T, PageUpdateArgs>
    ): CheckSelect<T, Prisma__PageClient<Page>, Prisma__PageClient<PageGetPayload<T>>>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PageDeleteManyArgs>(
      args?: SelectSubset<T, PageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PageUpdateManyArgs>(
      args: SelectSubset<T, PageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
    **/
    upsert<T extends PageUpsertArgs>(
      args: SelectSubset<T, PageUpsertArgs>
    ): CheckSelect<T, Prisma__PageClient<Page>, Prisma__PageClient<PageGetPayload<T>>>

    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    Instance<T extends InstanceFindManyArgs = {}>(args?: Subset<T, InstanceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Instance>>, PrismaPromise<Array<InstanceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Page
     * 
    **/
    select?: PageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PageInclude | null
    /**
     * Throw an Error if a Page can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Page to fetch.
     * 
    **/
    where: PageWhereUniqueInput
  }


  /**
   * Page findFirst
   */
  export type PageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Page
     * 
    **/
    select?: PageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PageInclude | null
    /**
     * Throw an Error if a Page can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Page to fetch.
     * 
    **/
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     * 
    **/
    orderBy?: Enumerable<PageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     * 
    **/
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     * 
    **/
    distinct?: Enumerable<PageScalarFieldEnum>
  }


  /**
   * Page findMany
   */
  export type PageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Page
     * 
    **/
    select?: PageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PageInclude | null
    /**
     * Filter, which Pages to fetch.
     * 
    **/
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     * 
    **/
    orderBy?: Enumerable<PageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     * 
    **/
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PageScalarFieldEnum>
  }


  /**
   * Page create
   */
  export type PageCreateArgs = {
    /**
     * Select specific fields to fetch from the Page
     * 
    **/
    select?: PageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PageInclude | null
    /**
     * The data needed to create a Page.
     * 
    **/
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }


  /**
   * Page createMany
   */
  export type PageCreateManyArgs = {
    /**
     * The data used to create many Pages.
     * 
    **/
    data: Enumerable<PageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Page update
   */
  export type PageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Page
     * 
    **/
    select?: PageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PageInclude | null
    /**
     * The data needed to update a Page.
     * 
    **/
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     * 
    **/
    where: PageWhereUniqueInput
  }


  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs = {
    /**
     * The data used to update Pages.
     * 
    **/
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     * 
    **/
    where?: PageWhereInput
  }


  /**
   * Page upsert
   */
  export type PageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Page
     * 
    **/
    select?: PageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PageInclude | null
    /**
     * The filter to search for the Page to update in case it exists.
     * 
    **/
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     * 
    **/
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }


  /**
   * Page delete
   */
  export type PageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Page
     * 
    **/
    select?: PageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PageInclude | null
    /**
     * Filter which Page to delete.
     * 
    **/
    where: PageWhereUniqueInput
  }


  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs = {
    /**
     * Filter which Pages to delete
     * 
    **/
    where?: PageWhereInput
  }


  /**
   * Page without action
   */
  export type PageArgs = {
    /**
     * Select specific fields to fetch from the Page
     * 
    **/
    select?: PageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PageInclude | null
  }



  /**
   * Model ComponentType
   */


  export type AggregateComponentType = {
    _count: ComponentTypeCountAggregateOutputType | null
    _min: ComponentTypeMinAggregateOutputType | null
    _max: ComponentTypeMaxAggregateOutputType | null
  }

  export type ComponentTypeMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComponentTypeMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComponentTypeCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComponentTypeMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComponentTypeMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComponentTypeCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComponentTypeAggregateArgs = {
    /**
     * Filter which ComponentType to aggregate.
     * 
    **/
    where?: ComponentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ComponentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComponentTypes
    **/
    _count?: true | ComponentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentTypeMaxAggregateInputType
  }

  export type GetComponentTypeAggregateType<T extends ComponentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateComponentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponentType[P]>
      : GetScalarType<T[P], AggregateComponentType[P]>
  }




  export type ComponentTypeGroupByArgs = {
    where?: ComponentTypeWhereInput
    orderBy?: Enumerable<ComponentTypeOrderByWithAggregationInput>
    by: Array<ComponentTypeScalarFieldEnum>
    having?: ComponentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentTypeCountAggregateInputType | true
    _min?: ComponentTypeMinAggregateInputType
    _max?: ComponentTypeMaxAggregateInputType
  }


  export type ComponentTypeGroupByOutputType = {
    id: string
    projectId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ComponentTypeCountAggregateOutputType | null
    _min: ComponentTypeMinAggregateOutputType | null
    _max: ComponentTypeMaxAggregateOutputType | null
  }

  type GetComponentTypeGroupByPayload<T extends ComponentTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ComponentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ComponentTypeGroupByOutputType[P]>
        }
      >
    >


  export type ComponentTypeSelect = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    components?: boolean | CommponentFindManyArgs
    project?: boolean | ProjectArgs
    _count?: boolean | ComponentTypeCountOutputTypeArgs
  }

  export type ComponentTypeInclude = {
    components?: boolean | CommponentFindManyArgs
    project?: boolean | ProjectArgs
    _count?: boolean | ComponentTypeCountOutputTypeArgs
  }

  export type ComponentTypeGetPayload<
    S extends boolean | null | undefined | ComponentTypeArgs,
    U = keyof S
      > = S extends true
        ? ComponentType
    : S extends undefined
    ? never
    : S extends ComponentTypeArgs | ComponentTypeFindManyArgs
    ?'include' extends U
    ? ComponentType  & {
    [P in TrueKeys<S['include']>]:
        P extends 'components' ? Array < CommponentGetPayload<S['include'][P]>>  :
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends '_count' ? ComponentTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'components' ? Array < CommponentGetPayload<S['select'][P]>>  :
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends '_count' ? ComponentTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ComponentType ? ComponentType[P] : never
  } 
    : ComponentType
  : ComponentType


  type ComponentTypeCountArgs = Merge<
    Omit<ComponentTypeFindManyArgs, 'select' | 'include'> & {
      select?: ComponentTypeCountAggregateInputType | true
    }
  >

  export interface ComponentTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ComponentType that matches the filter.
     * @param {ComponentTypeFindUniqueArgs} args - Arguments to find a ComponentType
     * @example
     * // Get one ComponentType
     * const componentType = await prisma.componentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ComponentTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ComponentTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ComponentType'> extends True ? CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>> : CheckSelect<T, Prisma__ComponentTypeClient<ComponentType | null >, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T> | null >>

    /**
     * Find the first ComponentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeFindFirstArgs} args - Arguments to find a ComponentType
     * @example
     * // Get one ComponentType
     * const componentType = await prisma.componentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ComponentTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ComponentTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ComponentType'> extends True ? CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>> : CheckSelect<T, Prisma__ComponentTypeClient<ComponentType | null >, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T> | null >>

    /**
     * Find zero or more ComponentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComponentTypes
     * const componentTypes = await prisma.componentType.findMany()
     * 
     * // Get first 10 ComponentTypes
     * const componentTypes = await prisma.componentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const componentTypeWithIdOnly = await prisma.componentType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ComponentTypeFindManyArgs>(
      args?: SelectSubset<T, ComponentTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ComponentType>>, PrismaPromise<Array<ComponentTypeGetPayload<T>>>>

    /**
     * Create a ComponentType.
     * @param {ComponentTypeCreateArgs} args - Arguments to create a ComponentType.
     * @example
     * // Create one ComponentType
     * const ComponentType = await prisma.componentType.create({
     *   data: {
     *     // ... data to create a ComponentType
     *   }
     * })
     * 
    **/
    create<T extends ComponentTypeCreateArgs>(
      args: SelectSubset<T, ComponentTypeCreateArgs>
    ): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>>

    /**
     * Create many ComponentTypes.
     *     @param {ComponentTypeCreateManyArgs} args - Arguments to create many ComponentTypes.
     *     @example
     *     // Create many ComponentTypes
     *     const componentType = await prisma.componentType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ComponentTypeCreateManyArgs>(
      args?: SelectSubset<T, ComponentTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ComponentType.
     * @param {ComponentTypeDeleteArgs} args - Arguments to delete one ComponentType.
     * @example
     * // Delete one ComponentType
     * const ComponentType = await prisma.componentType.delete({
     *   where: {
     *     // ... filter to delete one ComponentType
     *   }
     * })
     * 
    **/
    delete<T extends ComponentTypeDeleteArgs>(
      args: SelectSubset<T, ComponentTypeDeleteArgs>
    ): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>>

    /**
     * Update one ComponentType.
     * @param {ComponentTypeUpdateArgs} args - Arguments to update one ComponentType.
     * @example
     * // Update one ComponentType
     * const componentType = await prisma.componentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ComponentTypeUpdateArgs>(
      args: SelectSubset<T, ComponentTypeUpdateArgs>
    ): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>>

    /**
     * Delete zero or more ComponentTypes.
     * @param {ComponentTypeDeleteManyArgs} args - Arguments to filter ComponentTypes to delete.
     * @example
     * // Delete a few ComponentTypes
     * const { count } = await prisma.componentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ComponentTypeDeleteManyArgs>(
      args?: SelectSubset<T, ComponentTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComponentTypes
     * const componentType = await prisma.componentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ComponentTypeUpdateManyArgs>(
      args: SelectSubset<T, ComponentTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ComponentType.
     * @param {ComponentTypeUpsertArgs} args - Arguments to update or create a ComponentType.
     * @example
     * // Update or create a ComponentType
     * const componentType = await prisma.componentType.upsert({
     *   create: {
     *     // ... data to create a ComponentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComponentType we want to update
     *   }
     * })
    **/
    upsert<T extends ComponentTypeUpsertArgs>(
      args: SelectSubset<T, ComponentTypeUpsertArgs>
    ): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType>, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T>>>

    /**
     * Count the number of ComponentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeCountArgs} args - Arguments to filter ComponentTypes to count.
     * @example
     * // Count the number of ComponentTypes
     * const count = await prisma.componentType.count({
     *   where: {
     *     // ... the filter for the ComponentTypes we want to count
     *   }
     * })
    **/
    count<T extends ComponentTypeCountArgs>(
      args?: Subset<T, ComponentTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComponentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComponentTypeAggregateArgs>(args: Subset<T, ComponentTypeAggregateArgs>): PrismaPromise<GetComponentTypeAggregateType<T>>

    /**
     * Group by ComponentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComponentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentTypeGroupByArgs['orderBy'] }
        : { orderBy?: ComponentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComponentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentTypeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComponentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ComponentTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    components<T extends CommponentFindManyArgs = {}>(args?: Subset<T, CommponentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Commponent>>, PrismaPromise<Array<CommponentGetPayload<T>>>>;

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ComponentType findUnique
   */
  export type ComponentTypeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * Throw an Error if a ComponentType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ComponentType to fetch.
     * 
    **/
    where: ComponentTypeWhereUniqueInput
  }


  /**
   * ComponentType findFirst
   */
  export type ComponentTypeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * Throw an Error if a ComponentType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ComponentType to fetch.
     * 
    **/
    where?: ComponentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentTypes.
     * 
    **/
    cursor?: ComponentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentTypes.
     * 
    **/
    distinct?: Enumerable<ComponentTypeScalarFieldEnum>
  }


  /**
   * ComponentType findMany
   */
  export type ComponentTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * Filter, which ComponentTypes to fetch.
     * 
    **/
    where?: ComponentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ComponentTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComponentTypes.
     * 
    **/
    cursor?: ComponentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ComponentTypeScalarFieldEnum>
  }


  /**
   * ComponentType create
   */
  export type ComponentTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * The data needed to create a ComponentType.
     * 
    **/
    data: XOR<ComponentTypeCreateInput, ComponentTypeUncheckedCreateInput>
  }


  /**
   * ComponentType createMany
   */
  export type ComponentTypeCreateManyArgs = {
    /**
     * The data used to create many ComponentTypes.
     * 
    **/
    data: Enumerable<ComponentTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ComponentType update
   */
  export type ComponentTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * The data needed to update a ComponentType.
     * 
    **/
    data: XOR<ComponentTypeUpdateInput, ComponentTypeUncheckedUpdateInput>
    /**
     * Choose, which ComponentType to update.
     * 
    **/
    where: ComponentTypeWhereUniqueInput
  }


  /**
   * ComponentType updateMany
   */
  export type ComponentTypeUpdateManyArgs = {
    /**
     * The data used to update ComponentTypes.
     * 
    **/
    data: XOR<ComponentTypeUpdateManyMutationInput, ComponentTypeUncheckedUpdateManyInput>
    /**
     * Filter which ComponentTypes to update
     * 
    **/
    where?: ComponentTypeWhereInput
  }


  /**
   * ComponentType upsert
   */
  export type ComponentTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * The filter to search for the ComponentType to update in case it exists.
     * 
    **/
    where: ComponentTypeWhereUniqueInput
    /**
     * In case the ComponentType found by the `where` argument doesn't exist, create a new ComponentType with this data.
     * 
    **/
    create: XOR<ComponentTypeCreateInput, ComponentTypeUncheckedCreateInput>
    /**
     * In case the ComponentType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ComponentTypeUpdateInput, ComponentTypeUncheckedUpdateInput>
  }


  /**
   * ComponentType delete
   */
  export type ComponentTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
    /**
     * Filter which ComponentType to delete.
     * 
    **/
    where: ComponentTypeWhereUniqueInput
  }


  /**
   * ComponentType deleteMany
   */
  export type ComponentTypeDeleteManyArgs = {
    /**
     * Filter which ComponentTypes to delete
     * 
    **/
    where?: ComponentTypeWhereInput
  }


  /**
   * ComponentType without action
   */
  export type ComponentTypeArgs = {
    /**
     * Select specific fields to fetch from the ComponentType
     * 
    **/
    select?: ComponentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ComponentTypeInclude | null
  }



  /**
   * Model Commponent
   */


  export type AggregateCommponent = {
    _count: CommponentCountAggregateOutputType | null
    _min: CommponentMinAggregateOutputType | null
    _max: CommponentMaxAggregateOutputType | null
  }

  export type CommponentMinAggregateOutputType = {
    id: string | null
    componentTypeId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommponentMaxAggregateOutputType = {
    id: string | null
    componentTypeId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommponentCountAggregateOutputType = {
    id: number
    componentTypeId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommponentMinAggregateInputType = {
    id?: true
    componentTypeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommponentMaxAggregateInputType = {
    id?: true
    componentTypeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommponentCountAggregateInputType = {
    id?: true
    componentTypeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommponentAggregateArgs = {
    /**
     * Filter which Commponent to aggregate.
     * 
    **/
    where?: CommponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commponents to fetch.
     * 
    **/
    orderBy?: Enumerable<CommponentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commponents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commponents
    **/
    _count?: true | CommponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommponentMaxAggregateInputType
  }

  export type GetCommponentAggregateType<T extends CommponentAggregateArgs> = {
        [P in keyof T & keyof AggregateCommponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommponent[P]>
      : GetScalarType<T[P], AggregateCommponent[P]>
  }




  export type CommponentGroupByArgs = {
    where?: CommponentWhereInput
    orderBy?: Enumerable<CommponentOrderByWithAggregationInput>
    by: Array<CommponentScalarFieldEnum>
    having?: CommponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommponentCountAggregateInputType | true
    _min?: CommponentMinAggregateInputType
    _max?: CommponentMaxAggregateInputType
  }


  export type CommponentGroupByOutputType = {
    id: string
    componentTypeId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CommponentCountAggregateOutputType | null
    _min: CommponentMinAggregateOutputType | null
    _max: CommponentMaxAggregateOutputType | null
  }

  type GetCommponentGroupByPayload<T extends CommponentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommponentGroupByOutputType[P]>
            : GetScalarType<T[P], CommponentGroupByOutputType[P]>
        }
      >
    >


  export type CommponentSelect = {
    id?: boolean
    componentTypeId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    componentType?: boolean | ComponentTypeArgs
    instances?: boolean | InstanceFindManyArgs
    _count?: boolean | CommponentCountOutputTypeArgs
  }

  export type CommponentInclude = {
    componentType?: boolean | ComponentTypeArgs
    instances?: boolean | InstanceFindManyArgs
    _count?: boolean | CommponentCountOutputTypeArgs
  }

  export type CommponentGetPayload<
    S extends boolean | null | undefined | CommponentArgs,
    U = keyof S
      > = S extends true
        ? Commponent
    : S extends undefined
    ? never
    : S extends CommponentArgs | CommponentFindManyArgs
    ?'include' extends U
    ? Commponent  & {
    [P in TrueKeys<S['include']>]:
        P extends 'componentType' ? ComponentTypeGetPayload<S['include'][P]> :
        P extends 'instances' ? Array < InstanceGetPayload<S['include'][P]>>  :
        P extends '_count' ? CommponentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'componentType' ? ComponentTypeGetPayload<S['select'][P]> :
        P extends 'instances' ? Array < InstanceGetPayload<S['select'][P]>>  :
        P extends '_count' ? CommponentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Commponent ? Commponent[P] : never
  } 
    : Commponent
  : Commponent


  type CommponentCountArgs = Merge<
    Omit<CommponentFindManyArgs, 'select' | 'include'> & {
      select?: CommponentCountAggregateInputType | true
    }
  >

  export interface CommponentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Commponent that matches the filter.
     * @param {CommponentFindUniqueArgs} args - Arguments to find a Commponent
     * @example
     * // Get one Commponent
     * const commponent = await prisma.commponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommponentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommponentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Commponent'> extends True ? CheckSelect<T, Prisma__CommponentClient<Commponent>, Prisma__CommponentClient<CommponentGetPayload<T>>> : CheckSelect<T, Prisma__CommponentClient<Commponent | null >, Prisma__CommponentClient<CommponentGetPayload<T> | null >>

    /**
     * Find the first Commponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommponentFindFirstArgs} args - Arguments to find a Commponent
     * @example
     * // Get one Commponent
     * const commponent = await prisma.commponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommponentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommponentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Commponent'> extends True ? CheckSelect<T, Prisma__CommponentClient<Commponent>, Prisma__CommponentClient<CommponentGetPayload<T>>> : CheckSelect<T, Prisma__CommponentClient<Commponent | null >, Prisma__CommponentClient<CommponentGetPayload<T> | null >>

    /**
     * Find zero or more Commponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommponentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commponents
     * const commponents = await prisma.commponent.findMany()
     * 
     * // Get first 10 Commponents
     * const commponents = await prisma.commponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commponentWithIdOnly = await prisma.commponent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommponentFindManyArgs>(
      args?: SelectSubset<T, CommponentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Commponent>>, PrismaPromise<Array<CommponentGetPayload<T>>>>

    /**
     * Create a Commponent.
     * @param {CommponentCreateArgs} args - Arguments to create a Commponent.
     * @example
     * // Create one Commponent
     * const Commponent = await prisma.commponent.create({
     *   data: {
     *     // ... data to create a Commponent
     *   }
     * })
     * 
    **/
    create<T extends CommponentCreateArgs>(
      args: SelectSubset<T, CommponentCreateArgs>
    ): CheckSelect<T, Prisma__CommponentClient<Commponent>, Prisma__CommponentClient<CommponentGetPayload<T>>>

    /**
     * Create many Commponents.
     *     @param {CommponentCreateManyArgs} args - Arguments to create many Commponents.
     *     @example
     *     // Create many Commponents
     *     const commponent = await prisma.commponent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommponentCreateManyArgs>(
      args?: SelectSubset<T, CommponentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Commponent.
     * @param {CommponentDeleteArgs} args - Arguments to delete one Commponent.
     * @example
     * // Delete one Commponent
     * const Commponent = await prisma.commponent.delete({
     *   where: {
     *     // ... filter to delete one Commponent
     *   }
     * })
     * 
    **/
    delete<T extends CommponentDeleteArgs>(
      args: SelectSubset<T, CommponentDeleteArgs>
    ): CheckSelect<T, Prisma__CommponentClient<Commponent>, Prisma__CommponentClient<CommponentGetPayload<T>>>

    /**
     * Update one Commponent.
     * @param {CommponentUpdateArgs} args - Arguments to update one Commponent.
     * @example
     * // Update one Commponent
     * const commponent = await prisma.commponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommponentUpdateArgs>(
      args: SelectSubset<T, CommponentUpdateArgs>
    ): CheckSelect<T, Prisma__CommponentClient<Commponent>, Prisma__CommponentClient<CommponentGetPayload<T>>>

    /**
     * Delete zero or more Commponents.
     * @param {CommponentDeleteManyArgs} args - Arguments to filter Commponents to delete.
     * @example
     * // Delete a few Commponents
     * const { count } = await prisma.commponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommponentDeleteManyArgs>(
      args?: SelectSubset<T, CommponentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commponents
     * const commponent = await prisma.commponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommponentUpdateManyArgs>(
      args: SelectSubset<T, CommponentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Commponent.
     * @param {CommponentUpsertArgs} args - Arguments to update or create a Commponent.
     * @example
     * // Update or create a Commponent
     * const commponent = await prisma.commponent.upsert({
     *   create: {
     *     // ... data to create a Commponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commponent we want to update
     *   }
     * })
    **/
    upsert<T extends CommponentUpsertArgs>(
      args: SelectSubset<T, CommponentUpsertArgs>
    ): CheckSelect<T, Prisma__CommponentClient<Commponent>, Prisma__CommponentClient<CommponentGetPayload<T>>>

    /**
     * Count the number of Commponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommponentCountArgs} args - Arguments to filter Commponents to count.
     * @example
     * // Count the number of Commponents
     * const count = await prisma.commponent.count({
     *   where: {
     *     // ... the filter for the Commponents we want to count
     *   }
     * })
    **/
    count<T extends CommponentCountArgs>(
      args?: Subset<T, CommponentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommponentAggregateArgs>(args: Subset<T, CommponentAggregateArgs>): PrismaPromise<GetCommponentAggregateType<T>>

    /**
     * Group by Commponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommponentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommponentGroupByArgs['orderBy'] }
        : { orderBy?: CommponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommponentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommponentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    componentType<T extends ComponentTypeArgs = {}>(args?: Subset<T, ComponentTypeArgs>): CheckSelect<T, Prisma__ComponentTypeClient<ComponentType | null >, Prisma__ComponentTypeClient<ComponentTypeGetPayload<T> | null >>;

    instances<T extends InstanceFindManyArgs = {}>(args?: Subset<T, InstanceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Instance>>, PrismaPromise<Array<InstanceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Commponent findUnique
   */
  export type CommponentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Commponent
     * 
    **/
    select?: CommponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommponentInclude | null
    /**
     * Throw an Error if a Commponent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Commponent to fetch.
     * 
    **/
    where: CommponentWhereUniqueInput
  }


  /**
   * Commponent findFirst
   */
  export type CommponentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Commponent
     * 
    **/
    select?: CommponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommponentInclude | null
    /**
     * Throw an Error if a Commponent can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Commponent to fetch.
     * 
    **/
    where?: CommponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commponents to fetch.
     * 
    **/
    orderBy?: Enumerable<CommponentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commponents.
     * 
    **/
    cursor?: CommponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commponents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commponents.
     * 
    **/
    distinct?: Enumerable<CommponentScalarFieldEnum>
  }


  /**
   * Commponent findMany
   */
  export type CommponentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Commponent
     * 
    **/
    select?: CommponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommponentInclude | null
    /**
     * Filter, which Commponents to fetch.
     * 
    **/
    where?: CommponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commponents to fetch.
     * 
    **/
    orderBy?: Enumerable<CommponentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commponents.
     * 
    **/
    cursor?: CommponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commponents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commponents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommponentScalarFieldEnum>
  }


  /**
   * Commponent create
   */
  export type CommponentCreateArgs = {
    /**
     * Select specific fields to fetch from the Commponent
     * 
    **/
    select?: CommponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommponentInclude | null
    /**
     * The data needed to create a Commponent.
     * 
    **/
    data: XOR<CommponentCreateInput, CommponentUncheckedCreateInput>
  }


  /**
   * Commponent createMany
   */
  export type CommponentCreateManyArgs = {
    /**
     * The data used to create many Commponents.
     * 
    **/
    data: Enumerable<CommponentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Commponent update
   */
  export type CommponentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Commponent
     * 
    **/
    select?: CommponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommponentInclude | null
    /**
     * The data needed to update a Commponent.
     * 
    **/
    data: XOR<CommponentUpdateInput, CommponentUncheckedUpdateInput>
    /**
     * Choose, which Commponent to update.
     * 
    **/
    where: CommponentWhereUniqueInput
  }


  /**
   * Commponent updateMany
   */
  export type CommponentUpdateManyArgs = {
    /**
     * The data used to update Commponents.
     * 
    **/
    data: XOR<CommponentUpdateManyMutationInput, CommponentUncheckedUpdateManyInput>
    /**
     * Filter which Commponents to update
     * 
    **/
    where?: CommponentWhereInput
  }


  /**
   * Commponent upsert
   */
  export type CommponentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Commponent
     * 
    **/
    select?: CommponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommponentInclude | null
    /**
     * The filter to search for the Commponent to update in case it exists.
     * 
    **/
    where: CommponentWhereUniqueInput
    /**
     * In case the Commponent found by the `where` argument doesn't exist, create a new Commponent with this data.
     * 
    **/
    create: XOR<CommponentCreateInput, CommponentUncheckedCreateInput>
    /**
     * In case the Commponent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommponentUpdateInput, CommponentUncheckedUpdateInput>
  }


  /**
   * Commponent delete
   */
  export type CommponentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Commponent
     * 
    **/
    select?: CommponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommponentInclude | null
    /**
     * Filter which Commponent to delete.
     * 
    **/
    where: CommponentWhereUniqueInput
  }


  /**
   * Commponent deleteMany
   */
  export type CommponentDeleteManyArgs = {
    /**
     * Filter which Commponents to delete
     * 
    **/
    where?: CommponentWhereInput
  }


  /**
   * Commponent without action
   */
  export type CommponentArgs = {
    /**
     * Select specific fields to fetch from the Commponent
     * 
    **/
    select?: CommponentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommponentInclude | null
  }



  /**
   * Model Instance
   */


  export type AggregateInstance = {
    _count: InstanceCountAggregateOutputType | null
    _min: InstanceMinAggregateOutputType | null
    _max: InstanceMaxAggregateOutputType | null
  }

  export type InstanceMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    componentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstanceMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    componentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstanceCountAggregateOutputType = {
    id: number
    pageId: number
    componentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstanceMinAggregateInputType = {
    id?: true
    pageId?: true
    componentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstanceMaxAggregateInputType = {
    id?: true
    pageId?: true
    componentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstanceCountAggregateInputType = {
    id?: true
    pageId?: true
    componentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstanceAggregateArgs = {
    /**
     * Filter which Instance to aggregate.
     * 
    **/
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     * 
    **/
    orderBy?: Enumerable<InstanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instances
    **/
    _count?: true | InstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstanceMaxAggregateInputType
  }

  export type GetInstanceAggregateType<T extends InstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstance[P]>
      : GetScalarType<T[P], AggregateInstance[P]>
  }




  export type InstanceGroupByArgs = {
    where?: InstanceWhereInput
    orderBy?: Enumerable<InstanceOrderByWithAggregationInput>
    by: Array<InstanceScalarFieldEnum>
    having?: InstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstanceCountAggregateInputType | true
    _min?: InstanceMinAggregateInputType
    _max?: InstanceMaxAggregateInputType
  }


  export type InstanceGroupByOutputType = {
    id: string
    pageId: string
    componentId: string
    createdAt: Date
    updatedAt: Date
    _count: InstanceCountAggregateOutputType | null
    _min: InstanceMinAggregateOutputType | null
    _max: InstanceMaxAggregateOutputType | null
  }

  type GetInstanceGroupByPayload<T extends InstanceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstanceGroupByOutputType[P]>
            : GetScalarType<T[P], InstanceGroupByOutputType[P]>
        }
      >
    >


  export type InstanceSelect = {
    id?: boolean
    pageId?: boolean
    componentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageArgs
    commponent?: boolean | CommponentArgs
    relations?: boolean | RelationFindManyArgs
    connectedTo?: boolean | ConnectionFindManyArgs
    childOf?: boolean | DependantFindManyArgs
    _count?: boolean | InstanceCountOutputTypeArgs
  }

  export type InstanceInclude = {
    page?: boolean | PageArgs
    commponent?: boolean | CommponentArgs
    relations?: boolean | RelationFindManyArgs
    connectedTo?: boolean | ConnectionFindManyArgs
    childOf?: boolean | DependantFindManyArgs
    _count?: boolean | InstanceCountOutputTypeArgs
  }

  export type InstanceGetPayload<
    S extends boolean | null | undefined | InstanceArgs,
    U = keyof S
      > = S extends true
        ? Instance
    : S extends undefined
    ? never
    : S extends InstanceArgs | InstanceFindManyArgs
    ?'include' extends U
    ? Instance  & {
    [P in TrueKeys<S['include']>]:
        P extends 'page' ? PageGetPayload<S['include'][P]> :
        P extends 'commponent' ? CommponentGetPayload<S['include'][P]> :
        P extends 'relations' ? Array < RelationGetPayload<S['include'][P]>>  :
        P extends 'connectedTo' ? Array < ConnectionGetPayload<S['include'][P]>>  :
        P extends 'childOf' ? Array < DependantGetPayload<S['include'][P]>>  :
        P extends '_count' ? InstanceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'page' ? PageGetPayload<S['select'][P]> :
        P extends 'commponent' ? CommponentGetPayload<S['select'][P]> :
        P extends 'relations' ? Array < RelationGetPayload<S['select'][P]>>  :
        P extends 'connectedTo' ? Array < ConnectionGetPayload<S['select'][P]>>  :
        P extends 'childOf' ? Array < DependantGetPayload<S['select'][P]>>  :
        P extends '_count' ? InstanceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Instance ? Instance[P] : never
  } 
    : Instance
  : Instance


  type InstanceCountArgs = Merge<
    Omit<InstanceFindManyArgs, 'select' | 'include'> & {
      select?: InstanceCountAggregateInputType | true
    }
  >

  export interface InstanceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Instance that matches the filter.
     * @param {InstanceFindUniqueArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstanceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InstanceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Instance'> extends True ? CheckSelect<T, Prisma__InstanceClient<Instance>, Prisma__InstanceClient<InstanceGetPayload<T>>> : CheckSelect<T, Prisma__InstanceClient<Instance | null >, Prisma__InstanceClient<InstanceGetPayload<T> | null >>

    /**
     * Find the first Instance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceFindFirstArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstanceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InstanceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Instance'> extends True ? CheckSelect<T, Prisma__InstanceClient<Instance>, Prisma__InstanceClient<InstanceGetPayload<T>>> : CheckSelect<T, Prisma__InstanceClient<Instance | null >, Prisma__InstanceClient<InstanceGetPayload<T> | null >>

    /**
     * Find zero or more Instances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instances
     * const instances = await prisma.instance.findMany()
     * 
     * // Get first 10 Instances
     * const instances = await prisma.instance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instanceWithIdOnly = await prisma.instance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstanceFindManyArgs>(
      args?: SelectSubset<T, InstanceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Instance>>, PrismaPromise<Array<InstanceGetPayload<T>>>>

    /**
     * Create a Instance.
     * @param {InstanceCreateArgs} args - Arguments to create a Instance.
     * @example
     * // Create one Instance
     * const Instance = await prisma.instance.create({
     *   data: {
     *     // ... data to create a Instance
     *   }
     * })
     * 
    **/
    create<T extends InstanceCreateArgs>(
      args: SelectSubset<T, InstanceCreateArgs>
    ): CheckSelect<T, Prisma__InstanceClient<Instance>, Prisma__InstanceClient<InstanceGetPayload<T>>>

    /**
     * Create many Instances.
     *     @param {InstanceCreateManyArgs} args - Arguments to create many Instances.
     *     @example
     *     // Create many Instances
     *     const instance = await prisma.instance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstanceCreateManyArgs>(
      args?: SelectSubset<T, InstanceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Instance.
     * @param {InstanceDeleteArgs} args - Arguments to delete one Instance.
     * @example
     * // Delete one Instance
     * const Instance = await prisma.instance.delete({
     *   where: {
     *     // ... filter to delete one Instance
     *   }
     * })
     * 
    **/
    delete<T extends InstanceDeleteArgs>(
      args: SelectSubset<T, InstanceDeleteArgs>
    ): CheckSelect<T, Prisma__InstanceClient<Instance>, Prisma__InstanceClient<InstanceGetPayload<T>>>

    /**
     * Update one Instance.
     * @param {InstanceUpdateArgs} args - Arguments to update one Instance.
     * @example
     * // Update one Instance
     * const instance = await prisma.instance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstanceUpdateArgs>(
      args: SelectSubset<T, InstanceUpdateArgs>
    ): CheckSelect<T, Prisma__InstanceClient<Instance>, Prisma__InstanceClient<InstanceGetPayload<T>>>

    /**
     * Delete zero or more Instances.
     * @param {InstanceDeleteManyArgs} args - Arguments to filter Instances to delete.
     * @example
     * // Delete a few Instances
     * const { count } = await prisma.instance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstanceDeleteManyArgs>(
      args?: SelectSubset<T, InstanceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instances
     * const instance = await prisma.instance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstanceUpdateManyArgs>(
      args: SelectSubset<T, InstanceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Instance.
     * @param {InstanceUpsertArgs} args - Arguments to update or create a Instance.
     * @example
     * // Update or create a Instance
     * const instance = await prisma.instance.upsert({
     *   create: {
     *     // ... data to create a Instance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instance we want to update
     *   }
     * })
    **/
    upsert<T extends InstanceUpsertArgs>(
      args: SelectSubset<T, InstanceUpsertArgs>
    ): CheckSelect<T, Prisma__InstanceClient<Instance>, Prisma__InstanceClient<InstanceGetPayload<T>>>

    /**
     * Count the number of Instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceCountArgs} args - Arguments to filter Instances to count.
     * @example
     * // Count the number of Instances
     * const count = await prisma.instance.count({
     *   where: {
     *     // ... the filter for the Instances we want to count
     *   }
     * })
    **/
    count<T extends InstanceCountArgs>(
      args?: Subset<T, InstanceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstanceAggregateArgs>(args: Subset<T, InstanceAggregateArgs>): PrismaPromise<GetInstanceAggregateType<T>>

    /**
     * Group by Instance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstanceGroupByArgs['orderBy'] }
        : { orderBy?: InstanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstanceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InstanceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    page<T extends PageArgs = {}>(args?: Subset<T, PageArgs>): CheckSelect<T, Prisma__PageClient<Page | null >, Prisma__PageClient<PageGetPayload<T> | null >>;

    commponent<T extends CommponentArgs = {}>(args?: Subset<T, CommponentArgs>): CheckSelect<T, Prisma__CommponentClient<Commponent | null >, Prisma__CommponentClient<CommponentGetPayload<T> | null >>;

    relations<T extends RelationFindManyArgs = {}>(args?: Subset<T, RelationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Relation>>, PrismaPromise<Array<RelationGetPayload<T>>>>;

    connectedTo<T extends ConnectionFindManyArgs = {}>(args?: Subset<T, ConnectionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Connection>>, PrismaPromise<Array<ConnectionGetPayload<T>>>>;

    childOf<T extends DependantFindManyArgs = {}>(args?: Subset<T, DependantFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Dependant>>, PrismaPromise<Array<DependantGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Instance findUnique
   */
  export type InstanceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Instance
     * 
    **/
    select?: InstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstanceInclude | null
    /**
     * Throw an Error if a Instance can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Instance to fetch.
     * 
    **/
    where: InstanceWhereUniqueInput
  }


  /**
   * Instance findFirst
   */
  export type InstanceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Instance
     * 
    **/
    select?: InstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstanceInclude | null
    /**
     * Throw an Error if a Instance can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Instance to fetch.
     * 
    **/
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     * 
    **/
    orderBy?: Enumerable<InstanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instances.
     * 
    **/
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instances.
     * 
    **/
    distinct?: Enumerable<InstanceScalarFieldEnum>
  }


  /**
   * Instance findMany
   */
  export type InstanceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Instance
     * 
    **/
    select?: InstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstanceInclude | null
    /**
     * Filter, which Instances to fetch.
     * 
    **/
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     * 
    **/
    orderBy?: Enumerable<InstanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instances.
     * 
    **/
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InstanceScalarFieldEnum>
  }


  /**
   * Instance create
   */
  export type InstanceCreateArgs = {
    /**
     * Select specific fields to fetch from the Instance
     * 
    **/
    select?: InstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstanceInclude | null
    /**
     * The data needed to create a Instance.
     * 
    **/
    data: XOR<InstanceCreateInput, InstanceUncheckedCreateInput>
  }


  /**
   * Instance createMany
   */
  export type InstanceCreateManyArgs = {
    /**
     * The data used to create many Instances.
     * 
    **/
    data: Enumerable<InstanceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Instance update
   */
  export type InstanceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Instance
     * 
    **/
    select?: InstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstanceInclude | null
    /**
     * The data needed to update a Instance.
     * 
    **/
    data: XOR<InstanceUpdateInput, InstanceUncheckedUpdateInput>
    /**
     * Choose, which Instance to update.
     * 
    **/
    where: InstanceWhereUniqueInput
  }


  /**
   * Instance updateMany
   */
  export type InstanceUpdateManyArgs = {
    /**
     * The data used to update Instances.
     * 
    **/
    data: XOR<InstanceUpdateManyMutationInput, InstanceUncheckedUpdateManyInput>
    /**
     * Filter which Instances to update
     * 
    **/
    where?: InstanceWhereInput
  }


  /**
   * Instance upsert
   */
  export type InstanceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Instance
     * 
    **/
    select?: InstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstanceInclude | null
    /**
     * The filter to search for the Instance to update in case it exists.
     * 
    **/
    where: InstanceWhereUniqueInput
    /**
     * In case the Instance found by the `where` argument doesn't exist, create a new Instance with this data.
     * 
    **/
    create: XOR<InstanceCreateInput, InstanceUncheckedCreateInput>
    /**
     * In case the Instance was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InstanceUpdateInput, InstanceUncheckedUpdateInput>
  }


  /**
   * Instance delete
   */
  export type InstanceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Instance
     * 
    **/
    select?: InstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstanceInclude | null
    /**
     * Filter which Instance to delete.
     * 
    **/
    where: InstanceWhereUniqueInput
  }


  /**
   * Instance deleteMany
   */
  export type InstanceDeleteManyArgs = {
    /**
     * Filter which Instances to delete
     * 
    **/
    where?: InstanceWhereInput
  }


  /**
   * Instance without action
   */
  export type InstanceArgs = {
    /**
     * Select specific fields to fetch from the Instance
     * 
    **/
    select?: InstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InstanceInclude | null
  }



  /**
   * Model Relation
   */


  export type AggregateRelation = {
    _count: RelationCountAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  export type RelationMinAggregateOutputType = {
    id: string | null
    relationType: RelationType | null
    instanceId: string | null
    createdAt: Date | null
  }

  export type RelationMaxAggregateOutputType = {
    id: string | null
    relationType: RelationType | null
    instanceId: string | null
    createdAt: Date | null
  }

  export type RelationCountAggregateOutputType = {
    id: number
    relationType: number
    instanceId: number
    createdAt: number
    _all: number
  }


  export type RelationMinAggregateInputType = {
    id?: true
    relationType?: true
    instanceId?: true
    createdAt?: true
  }

  export type RelationMaxAggregateInputType = {
    id?: true
    relationType?: true
    instanceId?: true
    createdAt?: true
  }

  export type RelationCountAggregateInputType = {
    id?: true
    relationType?: true
    instanceId?: true
    createdAt?: true
    _all?: true
  }

  export type RelationAggregateArgs = {
    /**
     * Filter which Relation to aggregate.
     * 
    **/
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     * 
    **/
    orderBy?: Enumerable<RelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relations
    **/
    _count?: true | RelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationMaxAggregateInputType
  }

  export type GetRelationAggregateType<T extends RelationAggregateArgs> = {
        [P in keyof T & keyof AggregateRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelation[P]>
      : GetScalarType<T[P], AggregateRelation[P]>
  }




  export type RelationGroupByArgs = {
    where?: RelationWhereInput
    orderBy?: Enumerable<RelationOrderByWithAggregationInput>
    by: Array<RelationScalarFieldEnum>
    having?: RelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationCountAggregateInputType | true
    _min?: RelationMinAggregateInputType
    _max?: RelationMaxAggregateInputType
  }


  export type RelationGroupByOutputType = {
    id: string
    relationType: RelationType
    instanceId: string
    createdAt: Date
    _count: RelationCountAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  type GetRelationGroupByPayload<T extends RelationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationGroupByOutputType[P]>
            : GetScalarType<T[P], RelationGroupByOutputType[P]>
        }
      >
    >


  export type RelationSelect = {
    id?: boolean
    relationType?: boolean
    instanceId?: boolean
    createdAt?: boolean
    connections?: boolean | ConnectionFindManyArgs
    dependants?: boolean | DependantFindManyArgs
    instance?: boolean | InstanceArgs
    _count?: boolean | RelationCountOutputTypeArgs
  }

  export type RelationInclude = {
    connections?: boolean | ConnectionFindManyArgs
    dependants?: boolean | DependantFindManyArgs
    instance?: boolean | InstanceArgs
    _count?: boolean | RelationCountOutputTypeArgs
  }

  export type RelationGetPayload<
    S extends boolean | null | undefined | RelationArgs,
    U = keyof S
      > = S extends true
        ? Relation
    : S extends undefined
    ? never
    : S extends RelationArgs | RelationFindManyArgs
    ?'include' extends U
    ? Relation  & {
    [P in TrueKeys<S['include']>]:
        P extends 'connections' ? Array < ConnectionGetPayload<S['include'][P]>>  :
        P extends 'dependants' ? Array < DependantGetPayload<S['include'][P]>>  :
        P extends 'instance' ? InstanceGetPayload<S['include'][P]> :
        P extends '_count' ? RelationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'connections' ? Array < ConnectionGetPayload<S['select'][P]>>  :
        P extends 'dependants' ? Array < DependantGetPayload<S['select'][P]>>  :
        P extends 'instance' ? InstanceGetPayload<S['select'][P]> :
        P extends '_count' ? RelationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Relation ? Relation[P] : never
  } 
    : Relation
  : Relation


  type RelationCountArgs = Merge<
    Omit<RelationFindManyArgs, 'select' | 'include'> & {
      select?: RelationCountAggregateInputType | true
    }
  >

  export interface RelationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Relation that matches the filter.
     * @param {RelationFindUniqueArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RelationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RelationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Relation'> extends True ? CheckSelect<T, Prisma__RelationClient<Relation>, Prisma__RelationClient<RelationGetPayload<T>>> : CheckSelect<T, Prisma__RelationClient<Relation | null >, Prisma__RelationClient<RelationGetPayload<T> | null >>

    /**
     * Find the first Relation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RelationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RelationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Relation'> extends True ? CheckSelect<T, Prisma__RelationClient<Relation>, Prisma__RelationClient<RelationGetPayload<T>>> : CheckSelect<T, Prisma__RelationClient<Relation | null >, Prisma__RelationClient<RelationGetPayload<T> | null >>

    /**
     * Find zero or more Relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relations
     * const relations = await prisma.relation.findMany()
     * 
     * // Get first 10 Relations
     * const relations = await prisma.relation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationWithIdOnly = await prisma.relation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RelationFindManyArgs>(
      args?: SelectSubset<T, RelationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Relation>>, PrismaPromise<Array<RelationGetPayload<T>>>>

    /**
     * Create a Relation.
     * @param {RelationCreateArgs} args - Arguments to create a Relation.
     * @example
     * // Create one Relation
     * const Relation = await prisma.relation.create({
     *   data: {
     *     // ... data to create a Relation
     *   }
     * })
     * 
    **/
    create<T extends RelationCreateArgs>(
      args: SelectSubset<T, RelationCreateArgs>
    ): CheckSelect<T, Prisma__RelationClient<Relation>, Prisma__RelationClient<RelationGetPayload<T>>>

    /**
     * Create many Relations.
     *     @param {RelationCreateManyArgs} args - Arguments to create many Relations.
     *     @example
     *     // Create many Relations
     *     const relation = await prisma.relation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RelationCreateManyArgs>(
      args?: SelectSubset<T, RelationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Relation.
     * @param {RelationDeleteArgs} args - Arguments to delete one Relation.
     * @example
     * // Delete one Relation
     * const Relation = await prisma.relation.delete({
     *   where: {
     *     // ... filter to delete one Relation
     *   }
     * })
     * 
    **/
    delete<T extends RelationDeleteArgs>(
      args: SelectSubset<T, RelationDeleteArgs>
    ): CheckSelect<T, Prisma__RelationClient<Relation>, Prisma__RelationClient<RelationGetPayload<T>>>

    /**
     * Update one Relation.
     * @param {RelationUpdateArgs} args - Arguments to update one Relation.
     * @example
     * // Update one Relation
     * const relation = await prisma.relation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RelationUpdateArgs>(
      args: SelectSubset<T, RelationUpdateArgs>
    ): CheckSelect<T, Prisma__RelationClient<Relation>, Prisma__RelationClient<RelationGetPayload<T>>>

    /**
     * Delete zero or more Relations.
     * @param {RelationDeleteManyArgs} args - Arguments to filter Relations to delete.
     * @example
     * // Delete a few Relations
     * const { count } = await prisma.relation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RelationDeleteManyArgs>(
      args?: SelectSubset<T, RelationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relations
     * const relation = await prisma.relation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RelationUpdateManyArgs>(
      args: SelectSubset<T, RelationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Relation.
     * @param {RelationUpsertArgs} args - Arguments to update or create a Relation.
     * @example
     * // Update or create a Relation
     * const relation = await prisma.relation.upsert({
     *   create: {
     *     // ... data to create a Relation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relation we want to update
     *   }
     * })
    **/
    upsert<T extends RelationUpsertArgs>(
      args: SelectSubset<T, RelationUpsertArgs>
    ): CheckSelect<T, Prisma__RelationClient<Relation>, Prisma__RelationClient<RelationGetPayload<T>>>

    /**
     * Count the number of Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationCountArgs} args - Arguments to filter Relations to count.
     * @example
     * // Count the number of Relations
     * const count = await prisma.relation.count({
     *   where: {
     *     // ... the filter for the Relations we want to count
     *   }
     * })
    **/
    count<T extends RelationCountArgs>(
      args?: Subset<T, RelationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelationAggregateArgs>(args: Subset<T, RelationAggregateArgs>): PrismaPromise<GetRelationAggregateType<T>>

    /**
     * Group by Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationGroupByArgs['orderBy'] }
        : { orderBy?: RelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RelationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    connections<T extends ConnectionFindManyArgs = {}>(args?: Subset<T, ConnectionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Connection>>, PrismaPromise<Array<ConnectionGetPayload<T>>>>;

    dependants<T extends DependantFindManyArgs = {}>(args?: Subset<T, DependantFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Dependant>>, PrismaPromise<Array<DependantGetPayload<T>>>>;

    instance<T extends InstanceArgs = {}>(args?: Subset<T, InstanceArgs>): CheckSelect<T, Prisma__InstanceClient<Instance | null >, Prisma__InstanceClient<InstanceGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Relation findUnique
   */
  export type RelationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Relation
     * 
    **/
    select?: RelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelationInclude | null
    /**
     * Throw an Error if a Relation can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Relation to fetch.
     * 
    **/
    where: RelationWhereUniqueInput
  }


  /**
   * Relation findFirst
   */
  export type RelationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Relation
     * 
    **/
    select?: RelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelationInclude | null
    /**
     * Throw an Error if a Relation can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Relation to fetch.
     * 
    **/
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     * 
    **/
    orderBy?: Enumerable<RelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     * 
    **/
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     * 
    **/
    distinct?: Enumerable<RelationScalarFieldEnum>
  }


  /**
   * Relation findMany
   */
  export type RelationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Relation
     * 
    **/
    select?: RelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelationInclude | null
    /**
     * Filter, which Relations to fetch.
     * 
    **/
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     * 
    **/
    orderBy?: Enumerable<RelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relations.
     * 
    **/
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RelationScalarFieldEnum>
  }


  /**
   * Relation create
   */
  export type RelationCreateArgs = {
    /**
     * Select specific fields to fetch from the Relation
     * 
    **/
    select?: RelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelationInclude | null
    /**
     * The data needed to create a Relation.
     * 
    **/
    data: XOR<RelationCreateInput, RelationUncheckedCreateInput>
  }


  /**
   * Relation createMany
   */
  export type RelationCreateManyArgs = {
    /**
     * The data used to create many Relations.
     * 
    **/
    data: Enumerable<RelationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Relation update
   */
  export type RelationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Relation
     * 
    **/
    select?: RelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelationInclude | null
    /**
     * The data needed to update a Relation.
     * 
    **/
    data: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
    /**
     * Choose, which Relation to update.
     * 
    **/
    where: RelationWhereUniqueInput
  }


  /**
   * Relation updateMany
   */
  export type RelationUpdateManyArgs = {
    /**
     * The data used to update Relations.
     * 
    **/
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     * 
    **/
    where?: RelationWhereInput
  }


  /**
   * Relation upsert
   */
  export type RelationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Relation
     * 
    **/
    select?: RelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelationInclude | null
    /**
     * The filter to search for the Relation to update in case it exists.
     * 
    **/
    where: RelationWhereUniqueInput
    /**
     * In case the Relation found by the `where` argument doesn't exist, create a new Relation with this data.
     * 
    **/
    create: XOR<RelationCreateInput, RelationUncheckedCreateInput>
    /**
     * In case the Relation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
  }


  /**
   * Relation delete
   */
  export type RelationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Relation
     * 
    **/
    select?: RelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelationInclude | null
    /**
     * Filter which Relation to delete.
     * 
    **/
    where: RelationWhereUniqueInput
  }


  /**
   * Relation deleteMany
   */
  export type RelationDeleteManyArgs = {
    /**
     * Filter which Relations to delete
     * 
    **/
    where?: RelationWhereInput
  }


  /**
   * Relation without action
   */
  export type RelationArgs = {
    /**
     * Select specific fields to fetch from the Relation
     * 
    **/
    select?: RelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RelationInclude | null
  }



  /**
   * Model Connection
   */


  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionMinAggregateOutputType = {
    relationId: string | null
    id: string | null
    toId: string | null
    createdAt: Date | null
  }

  export type ConnectionMaxAggregateOutputType = {
    relationId: string | null
    id: string | null
    toId: string | null
    createdAt: Date | null
  }

  export type ConnectionCountAggregateOutputType = {
    relationId: number
    id: number
    toId: number
    createdAt: number
    _all: number
  }


  export type ConnectionMinAggregateInputType = {
    relationId?: true
    id?: true
    toId?: true
    createdAt?: true
  }

  export type ConnectionMaxAggregateInputType = {
    relationId?: true
    id?: true
    toId?: true
    createdAt?: true
  }

  export type ConnectionCountAggregateInputType = {
    relationId?: true
    id?: true
    toId?: true
    createdAt?: true
    _all?: true
  }

  export type ConnectionAggregateArgs = {
    /**
     * Filter which Connection to aggregate.
     * 
    **/
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     * 
    **/
    orderBy?: Enumerable<ConnectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type ConnectionGroupByArgs = {
    where?: ConnectionWhereInput
    orderBy?: Enumerable<ConnectionOrderByWithAggregationInput>
    by: Array<ConnectionScalarFieldEnum>
    having?: ConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }


  export type ConnectionGroupByOutputType = {
    relationId: string
    id: string
    toId: string
    createdAt: Date
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionSelect = {
    relationId?: boolean
    id?: boolean
    toId?: boolean
    createdAt?: boolean
    relation?: boolean | RelationArgs
    to?: boolean | InstanceArgs
  }

  export type ConnectionInclude = {
    relation?: boolean | RelationArgs
    to?: boolean | InstanceArgs
  }

  export type ConnectionGetPayload<
    S extends boolean | null | undefined | ConnectionArgs,
    U = keyof S
      > = S extends true
        ? Connection
    : S extends undefined
    ? never
    : S extends ConnectionArgs | ConnectionFindManyArgs
    ?'include' extends U
    ? Connection  & {
    [P in TrueKeys<S['include']>]:
        P extends 'relation' ? RelationGetPayload<S['include'][P]> :
        P extends 'to' ? InstanceGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'relation' ? RelationGetPayload<S['select'][P]> :
        P extends 'to' ? InstanceGetPayload<S['select'][P]> :  P extends keyof Connection ? Connection[P] : never
  } 
    : Connection
  : Connection


  type ConnectionCountArgs = Merge<
    Omit<ConnectionFindManyArgs, 'select' | 'include'> & {
      select?: ConnectionCountAggregateInputType | true
    }
  >

  export interface ConnectionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Connection that matches the filter.
     * @param {ConnectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConnectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ConnectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Connection'> extends True ? CheckSelect<T, Prisma__ConnectionClient<Connection>, Prisma__ConnectionClient<ConnectionGetPayload<T>>> : CheckSelect<T, Prisma__ConnectionClient<Connection | null >, Prisma__ConnectionClient<ConnectionGetPayload<T> | null >>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConnectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ConnectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Connection'> extends True ? CheckSelect<T, Prisma__ConnectionClient<Connection>, Prisma__ConnectionClient<ConnectionGetPayload<T>>> : CheckSelect<T, Prisma__ConnectionClient<Connection | null >, Prisma__ConnectionClient<ConnectionGetPayload<T> | null >>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `relationId`
     * const connectionWithRelationIdOnly = await prisma.connection.findMany({ select: { relationId: true } })
     * 
    **/
    findMany<T extends ConnectionFindManyArgs>(
      args?: SelectSubset<T, ConnectionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Connection>>, PrismaPromise<Array<ConnectionGetPayload<T>>>>

    /**
     * Create a Connection.
     * @param {ConnectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
    **/
    create<T extends ConnectionCreateArgs>(
      args: SelectSubset<T, ConnectionCreateArgs>
    ): CheckSelect<T, Prisma__ConnectionClient<Connection>, Prisma__ConnectionClient<ConnectionGetPayload<T>>>

    /**
     * Create many Connections.
     *     @param {ConnectionCreateManyArgs} args - Arguments to create many Connections.
     *     @example
     *     // Create many Connections
     *     const connection = await prisma.connection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConnectionCreateManyArgs>(
      args?: SelectSubset<T, ConnectionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Connection.
     * @param {ConnectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
    **/
    delete<T extends ConnectionDeleteArgs>(
      args: SelectSubset<T, ConnectionDeleteArgs>
    ): CheckSelect<T, Prisma__ConnectionClient<Connection>, Prisma__ConnectionClient<ConnectionGetPayload<T>>>

    /**
     * Update one Connection.
     * @param {ConnectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConnectionUpdateArgs>(
      args: SelectSubset<T, ConnectionUpdateArgs>
    ): CheckSelect<T, Prisma__ConnectionClient<Connection>, Prisma__ConnectionClient<ConnectionGetPayload<T>>>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConnectionDeleteManyArgs>(
      args?: SelectSubset<T, ConnectionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConnectionUpdateManyArgs>(
      args: SelectSubset<T, ConnectionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Connection.
     * @param {ConnectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
    **/
    upsert<T extends ConnectionUpsertArgs>(
      args: SelectSubset<T, ConnectionUpsertArgs>
    ): CheckSelect<T, Prisma__ConnectionClient<Connection>, Prisma__ConnectionClient<ConnectionGetPayload<T>>>

    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionCountArgs>(
      args?: Subset<T, ConnectionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ConnectionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    relation<T extends RelationArgs = {}>(args?: Subset<T, RelationArgs>): CheckSelect<T, Prisma__RelationClient<Relation | null >, Prisma__RelationClient<RelationGetPayload<T> | null >>;

    to<T extends InstanceArgs = {}>(args?: Subset<T, InstanceArgs>): CheckSelect<T, Prisma__InstanceClient<Instance | null >, Prisma__InstanceClient<InstanceGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Connection findUnique
   */
  export type ConnectionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Connection
     * 
    **/
    select?: ConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConnectionInclude | null
    /**
     * Throw an Error if a Connection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Connection to fetch.
     * 
    **/
    where: ConnectionWhereUniqueInput
  }


  /**
   * Connection findFirst
   */
  export type ConnectionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Connection
     * 
    **/
    select?: ConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConnectionInclude | null
    /**
     * Throw an Error if a Connection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Connection to fetch.
     * 
    **/
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     * 
    **/
    orderBy?: Enumerable<ConnectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     * 
    **/
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     * 
    **/
    distinct?: Enumerable<ConnectionScalarFieldEnum>
  }


  /**
   * Connection findMany
   */
  export type ConnectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Connection
     * 
    **/
    select?: ConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConnectionInclude | null
    /**
     * Filter, which Connections to fetch.
     * 
    **/
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     * 
    **/
    orderBy?: Enumerable<ConnectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     * 
    **/
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ConnectionScalarFieldEnum>
  }


  /**
   * Connection create
   */
  export type ConnectionCreateArgs = {
    /**
     * Select specific fields to fetch from the Connection
     * 
    **/
    select?: ConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConnectionInclude | null
    /**
     * The data needed to create a Connection.
     * 
    **/
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
  }


  /**
   * Connection createMany
   */
  export type ConnectionCreateManyArgs = {
    /**
     * The data used to create many Connections.
     * 
    **/
    data: Enumerable<ConnectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Connection update
   */
  export type ConnectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Connection
     * 
    **/
    select?: ConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConnectionInclude | null
    /**
     * The data needed to update a Connection.
     * 
    **/
    data: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    /**
     * Choose, which Connection to update.
     * 
    **/
    where: ConnectionWhereUniqueInput
  }


  /**
   * Connection updateMany
   */
  export type ConnectionUpdateManyArgs = {
    /**
     * The data used to update Connections.
     * 
    **/
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     * 
    **/
    where?: ConnectionWhereInput
  }


  /**
   * Connection upsert
   */
  export type ConnectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Connection
     * 
    **/
    select?: ConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConnectionInclude | null
    /**
     * The filter to search for the Connection to update in case it exists.
     * 
    **/
    where: ConnectionWhereUniqueInput
    /**
     * In case the Connection found by the `where` argument doesn't exist, create a new Connection with this data.
     * 
    **/
    create: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    /**
     * In case the Connection was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
  }


  /**
   * Connection delete
   */
  export type ConnectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Connection
     * 
    **/
    select?: ConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConnectionInclude | null
    /**
     * Filter which Connection to delete.
     * 
    **/
    where: ConnectionWhereUniqueInput
  }


  /**
   * Connection deleteMany
   */
  export type ConnectionDeleteManyArgs = {
    /**
     * Filter which Connections to delete
     * 
    **/
    where?: ConnectionWhereInput
  }


  /**
   * Connection without action
   */
  export type ConnectionArgs = {
    /**
     * Select specific fields to fetch from the Connection
     * 
    **/
    select?: ConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ConnectionInclude | null
  }



  /**
   * Model Dependant
   */


  export type AggregateDependant = {
    _count: DependantCountAggregateOutputType | null
    _min: DependantMinAggregateOutputType | null
    _max: DependantMaxAggregateOutputType | null
  }

  export type DependantMinAggregateOutputType = {
    relationId: string | null
    id: string | null
    childId: string | null
    createdAt: Date | null
  }

  export type DependantMaxAggregateOutputType = {
    relationId: string | null
    id: string | null
    childId: string | null
    createdAt: Date | null
  }

  export type DependantCountAggregateOutputType = {
    relationId: number
    id: number
    childId: number
    createdAt: number
    _all: number
  }


  export type DependantMinAggregateInputType = {
    relationId?: true
    id?: true
    childId?: true
    createdAt?: true
  }

  export type DependantMaxAggregateInputType = {
    relationId?: true
    id?: true
    childId?: true
    createdAt?: true
  }

  export type DependantCountAggregateInputType = {
    relationId?: true
    id?: true
    childId?: true
    createdAt?: true
    _all?: true
  }

  export type DependantAggregateArgs = {
    /**
     * Filter which Dependant to aggregate.
     * 
    **/
    where?: DependantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependants to fetch.
     * 
    **/
    orderBy?: Enumerable<DependantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DependantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dependants
    **/
    _count?: true | DependantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependantMaxAggregateInputType
  }

  export type GetDependantAggregateType<T extends DependantAggregateArgs> = {
        [P in keyof T & keyof AggregateDependant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependant[P]>
      : GetScalarType<T[P], AggregateDependant[P]>
  }




  export type DependantGroupByArgs = {
    where?: DependantWhereInput
    orderBy?: Enumerable<DependantOrderByWithAggregationInput>
    by: Array<DependantScalarFieldEnum>
    having?: DependantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependantCountAggregateInputType | true
    _min?: DependantMinAggregateInputType
    _max?: DependantMaxAggregateInputType
  }


  export type DependantGroupByOutputType = {
    relationId: string
    id: string
    childId: string
    createdAt: Date
    _count: DependantCountAggregateOutputType | null
    _min: DependantMinAggregateOutputType | null
    _max: DependantMaxAggregateOutputType | null
  }

  type GetDependantGroupByPayload<T extends DependantGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DependantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependantGroupByOutputType[P]>
            : GetScalarType<T[P], DependantGroupByOutputType[P]>
        }
      >
    >


  export type DependantSelect = {
    relationId?: boolean
    id?: boolean
    childId?: boolean
    createdAt?: boolean
    child?: boolean | InstanceArgs
    Relation?: boolean | RelationArgs
  }

  export type DependantInclude = {
    child?: boolean | InstanceArgs
    Relation?: boolean | RelationArgs
  }

  export type DependantGetPayload<
    S extends boolean | null | undefined | DependantArgs,
    U = keyof S
      > = S extends true
        ? Dependant
    : S extends undefined
    ? never
    : S extends DependantArgs | DependantFindManyArgs
    ?'include' extends U
    ? Dependant  & {
    [P in TrueKeys<S['include']>]:
        P extends 'child' ? InstanceGetPayload<S['include'][P]> :
        P extends 'Relation' ? RelationGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'child' ? InstanceGetPayload<S['select'][P]> :
        P extends 'Relation' ? RelationGetPayload<S['select'][P]> :  P extends keyof Dependant ? Dependant[P] : never
  } 
    : Dependant
  : Dependant


  type DependantCountArgs = Merge<
    Omit<DependantFindManyArgs, 'select' | 'include'> & {
      select?: DependantCountAggregateInputType | true
    }
  >

  export interface DependantDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dependant that matches the filter.
     * @param {DependantFindUniqueArgs} args - Arguments to find a Dependant
     * @example
     * // Get one Dependant
     * const dependant = await prisma.dependant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DependantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DependantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dependant'> extends True ? CheckSelect<T, Prisma__DependantClient<Dependant>, Prisma__DependantClient<DependantGetPayload<T>>> : CheckSelect<T, Prisma__DependantClient<Dependant | null >, Prisma__DependantClient<DependantGetPayload<T> | null >>

    /**
     * Find the first Dependant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantFindFirstArgs} args - Arguments to find a Dependant
     * @example
     * // Get one Dependant
     * const dependant = await prisma.dependant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DependantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DependantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dependant'> extends True ? CheckSelect<T, Prisma__DependantClient<Dependant>, Prisma__DependantClient<DependantGetPayload<T>>> : CheckSelect<T, Prisma__DependantClient<Dependant | null >, Prisma__DependantClient<DependantGetPayload<T> | null >>

    /**
     * Find zero or more Dependants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dependants
     * const dependants = await prisma.dependant.findMany()
     * 
     * // Get first 10 Dependants
     * const dependants = await prisma.dependant.findMany({ take: 10 })
     * 
     * // Only select the `relationId`
     * const dependantWithRelationIdOnly = await prisma.dependant.findMany({ select: { relationId: true } })
     * 
    **/
    findMany<T extends DependantFindManyArgs>(
      args?: SelectSubset<T, DependantFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dependant>>, PrismaPromise<Array<DependantGetPayload<T>>>>

    /**
     * Create a Dependant.
     * @param {DependantCreateArgs} args - Arguments to create a Dependant.
     * @example
     * // Create one Dependant
     * const Dependant = await prisma.dependant.create({
     *   data: {
     *     // ... data to create a Dependant
     *   }
     * })
     * 
    **/
    create<T extends DependantCreateArgs>(
      args: SelectSubset<T, DependantCreateArgs>
    ): CheckSelect<T, Prisma__DependantClient<Dependant>, Prisma__DependantClient<DependantGetPayload<T>>>

    /**
     * Create many Dependants.
     *     @param {DependantCreateManyArgs} args - Arguments to create many Dependants.
     *     @example
     *     // Create many Dependants
     *     const dependant = await prisma.dependant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DependantCreateManyArgs>(
      args?: SelectSubset<T, DependantCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dependant.
     * @param {DependantDeleteArgs} args - Arguments to delete one Dependant.
     * @example
     * // Delete one Dependant
     * const Dependant = await prisma.dependant.delete({
     *   where: {
     *     // ... filter to delete one Dependant
     *   }
     * })
     * 
    **/
    delete<T extends DependantDeleteArgs>(
      args: SelectSubset<T, DependantDeleteArgs>
    ): CheckSelect<T, Prisma__DependantClient<Dependant>, Prisma__DependantClient<DependantGetPayload<T>>>

    /**
     * Update one Dependant.
     * @param {DependantUpdateArgs} args - Arguments to update one Dependant.
     * @example
     * // Update one Dependant
     * const dependant = await prisma.dependant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DependantUpdateArgs>(
      args: SelectSubset<T, DependantUpdateArgs>
    ): CheckSelect<T, Prisma__DependantClient<Dependant>, Prisma__DependantClient<DependantGetPayload<T>>>

    /**
     * Delete zero or more Dependants.
     * @param {DependantDeleteManyArgs} args - Arguments to filter Dependants to delete.
     * @example
     * // Delete a few Dependants
     * const { count } = await prisma.dependant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DependantDeleteManyArgs>(
      args?: SelectSubset<T, DependantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dependants
     * const dependant = await prisma.dependant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DependantUpdateManyArgs>(
      args: SelectSubset<T, DependantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dependant.
     * @param {DependantUpsertArgs} args - Arguments to update or create a Dependant.
     * @example
     * // Update or create a Dependant
     * const dependant = await prisma.dependant.upsert({
     *   create: {
     *     // ... data to create a Dependant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dependant we want to update
     *   }
     * })
    **/
    upsert<T extends DependantUpsertArgs>(
      args: SelectSubset<T, DependantUpsertArgs>
    ): CheckSelect<T, Prisma__DependantClient<Dependant>, Prisma__DependantClient<DependantGetPayload<T>>>

    /**
     * Count the number of Dependants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantCountArgs} args - Arguments to filter Dependants to count.
     * @example
     * // Count the number of Dependants
     * const count = await prisma.dependant.count({
     *   where: {
     *     // ... the filter for the Dependants we want to count
     *   }
     * })
    **/
    count<T extends DependantCountArgs>(
      args?: Subset<T, DependantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dependant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DependantAggregateArgs>(args: Subset<T, DependantAggregateArgs>): PrismaPromise<GetDependantAggregateType<T>>

    /**
     * Group by Dependant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DependantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DependantGroupByArgs['orderBy'] }
        : { orderBy?: DependantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DependantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependantGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dependant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DependantClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    child<T extends InstanceArgs = {}>(args?: Subset<T, InstanceArgs>): CheckSelect<T, Prisma__InstanceClient<Instance | null >, Prisma__InstanceClient<InstanceGetPayload<T> | null >>;

    Relation<T extends RelationArgs = {}>(args?: Subset<T, RelationArgs>): CheckSelect<T, Prisma__RelationClient<Relation | null >, Prisma__RelationClient<RelationGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Dependant findUnique
   */
  export type DependantFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Dependant
     * 
    **/
    select?: DependantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependantInclude | null
    /**
     * Throw an Error if a Dependant can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dependant to fetch.
     * 
    **/
    where: DependantWhereUniqueInput
  }


  /**
   * Dependant findFirst
   */
  export type DependantFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Dependant
     * 
    **/
    select?: DependantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependantInclude | null
    /**
     * Throw an Error if a Dependant can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dependant to fetch.
     * 
    **/
    where?: DependantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependants to fetch.
     * 
    **/
    orderBy?: Enumerable<DependantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependants.
     * 
    **/
    cursor?: DependantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependants.
     * 
    **/
    distinct?: Enumerable<DependantScalarFieldEnum>
  }


  /**
   * Dependant findMany
   */
  export type DependantFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dependant
     * 
    **/
    select?: DependantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependantInclude | null
    /**
     * Filter, which Dependants to fetch.
     * 
    **/
    where?: DependantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependants to fetch.
     * 
    **/
    orderBy?: Enumerable<DependantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dependants.
     * 
    **/
    cursor?: DependantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependants.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DependantScalarFieldEnum>
  }


  /**
   * Dependant create
   */
  export type DependantCreateArgs = {
    /**
     * Select specific fields to fetch from the Dependant
     * 
    **/
    select?: DependantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependantInclude | null
    /**
     * The data needed to create a Dependant.
     * 
    **/
    data: XOR<DependantCreateInput, DependantUncheckedCreateInput>
  }


  /**
   * Dependant createMany
   */
  export type DependantCreateManyArgs = {
    /**
     * The data used to create many Dependants.
     * 
    **/
    data: Enumerable<DependantCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Dependant update
   */
  export type DependantUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dependant
     * 
    **/
    select?: DependantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependantInclude | null
    /**
     * The data needed to update a Dependant.
     * 
    **/
    data: XOR<DependantUpdateInput, DependantUncheckedUpdateInput>
    /**
     * Choose, which Dependant to update.
     * 
    **/
    where: DependantWhereUniqueInput
  }


  /**
   * Dependant updateMany
   */
  export type DependantUpdateManyArgs = {
    /**
     * The data used to update Dependants.
     * 
    **/
    data: XOR<DependantUpdateManyMutationInput, DependantUncheckedUpdateManyInput>
    /**
     * Filter which Dependants to update
     * 
    **/
    where?: DependantWhereInput
  }


  /**
   * Dependant upsert
   */
  export type DependantUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dependant
     * 
    **/
    select?: DependantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependantInclude | null
    /**
     * The filter to search for the Dependant to update in case it exists.
     * 
    **/
    where: DependantWhereUniqueInput
    /**
     * In case the Dependant found by the `where` argument doesn't exist, create a new Dependant with this data.
     * 
    **/
    create: XOR<DependantCreateInput, DependantUncheckedCreateInput>
    /**
     * In case the Dependant was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DependantUpdateInput, DependantUncheckedUpdateInput>
  }


  /**
   * Dependant delete
   */
  export type DependantDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dependant
     * 
    **/
    select?: DependantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependantInclude | null
    /**
     * Filter which Dependant to delete.
     * 
    **/
    where: DependantWhereUniqueInput
  }


  /**
   * Dependant deleteMany
   */
  export type DependantDeleteManyArgs = {
    /**
     * Filter which Dependants to delete
     * 
    **/
    where?: DependantWhereInput
  }


  /**
   * Dependant without action
   */
  export type DependantArgs = {
    /**
     * Select specific fields to fetch from the Dependant
     * 
    **/
    select?: DependantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DependantInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    level: 'level',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const ComponentTypeScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComponentTypeScalarFieldEnum = (typeof ComponentTypeScalarFieldEnum)[keyof typeof ComponentTypeScalarFieldEnum]


  export const CommponentScalarFieldEnum: {
    id: 'id',
    componentTypeId: 'componentTypeId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommponentScalarFieldEnum = (typeof CommponentScalarFieldEnum)[keyof typeof CommponentScalarFieldEnum]


  export const InstanceScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    componentId: 'componentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstanceScalarFieldEnum = (typeof InstanceScalarFieldEnum)[keyof typeof InstanceScalarFieldEnum]


  export const RelationScalarFieldEnum: {
    id: 'id',
    relationType: 'relationType',
    instanceId: 'instanceId',
    createdAt: 'createdAt'
  };

  export type RelationScalarFieldEnum = (typeof RelationScalarFieldEnum)[keyof typeof RelationScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    relationId: 'relationId',
    id: 'id',
    toId: 'toId',
    createdAt: 'createdAt'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const DependantScalarFieldEnum: {
    relationId: 'relationId',
    id: 'id',
    childId: 'childId',
    createdAt: 'createdAt'
  };

  export type DependantScalarFieldEnum = (typeof DependantScalarFieldEnum)[keyof typeof DependantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    pages?: PageListRelationFilter
    componentTypes?: ComponentTypeListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: PageOrderByRelationAggregateInput
    componentTypes?: ComponentTypeOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = {
    id?: string
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PageWhereInput = {
    AND?: Enumerable<PageWhereInput>
    OR?: Enumerable<PageWhereInput>
    NOT?: Enumerable<PageWhereInput>
    id?: StringFilter | string
    projectId?: StringFilter | string
    level?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    Instance?: InstanceListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    Instance?: InstanceOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = {
    id?: string
    projectId_level?: PageProjectIdLevelCompoundUniqueInput
    projectId_name?: PageProjectIdNameCompoundUniqueInput
  }

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _avg?: PageAvgOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
    _sum?: PageSumOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PageScalarWhereWithAggregatesInput>
    OR?: Enumerable<PageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    projectId?: StringWithAggregatesFilter | string
    level?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ComponentTypeWhereInput = {
    AND?: Enumerable<ComponentTypeWhereInput>
    OR?: Enumerable<ComponentTypeWhereInput>
    NOT?: Enumerable<ComponentTypeWhereInput>
    id?: StringFilter | string
    projectId?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    components?: CommponentListRelationFilter
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ComponentTypeOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    components?: CommponentOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ComponentTypeWhereUniqueInput = {
    id?: string
  }

  export type ComponentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComponentTypeCountOrderByAggregateInput
    _max?: ComponentTypeMaxOrderByAggregateInput
    _min?: ComponentTypeMinOrderByAggregateInput
  }

  export type ComponentTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ComponentTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ComponentTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ComponentTypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    projectId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CommponentWhereInput = {
    AND?: Enumerable<CommponentWhereInput>
    OR?: Enumerable<CommponentWhereInput>
    NOT?: Enumerable<CommponentWhereInput>
    id?: StringFilter | string
    componentTypeId?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    componentType?: XOR<ComponentTypeRelationFilter, ComponentTypeWhereInput>
    instances?: InstanceListRelationFilter
  }

  export type CommponentOrderByWithRelationInput = {
    id?: SortOrder
    componentTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    componentType?: ComponentTypeOrderByWithRelationInput
    instances?: InstanceOrderByRelationAggregateInput
  }

  export type CommponentWhereUniqueInput = {
    id?: string
  }

  export type CommponentOrderByWithAggregationInput = {
    id?: SortOrder
    componentTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommponentCountOrderByAggregateInput
    _max?: CommponentMaxOrderByAggregateInput
    _min?: CommponentMinOrderByAggregateInput
  }

  export type CommponentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommponentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommponentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommponentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    componentTypeId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type InstanceWhereInput = {
    AND?: Enumerable<InstanceWhereInput>
    OR?: Enumerable<InstanceWhereInput>
    NOT?: Enumerable<InstanceWhereInput>
    id?: StringFilter | string
    pageId?: StringFilter | string
    componentId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    page?: XOR<PageRelationFilter, PageWhereInput>
    commponent?: XOR<CommponentRelationFilter, CommponentWhereInput>
    relations?: RelationListRelationFilter
    connectedTo?: ConnectionListRelationFilter
    childOf?: DependantListRelationFilter
  }

  export type InstanceOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    componentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    page?: PageOrderByWithRelationInput
    commponent?: CommponentOrderByWithRelationInput
    relations?: RelationOrderByRelationAggregateInput
    connectedTo?: ConnectionOrderByRelationAggregateInput
    childOf?: DependantOrderByRelationAggregateInput
  }

  export type InstanceWhereUniqueInput = {
    id?: string
  }

  export type InstanceOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    componentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstanceCountOrderByAggregateInput
    _max?: InstanceMaxOrderByAggregateInput
    _min?: InstanceMinOrderByAggregateInput
  }

  export type InstanceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InstanceScalarWhereWithAggregatesInput>
    OR?: Enumerable<InstanceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InstanceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    pageId?: StringWithAggregatesFilter | string
    componentId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RelationWhereInput = {
    AND?: Enumerable<RelationWhereInput>
    OR?: Enumerable<RelationWhereInput>
    NOT?: Enumerable<RelationWhereInput>
    id?: StringFilter | string
    relationType?: EnumRelationTypeFilter | RelationType
    instanceId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    connections?: ConnectionListRelationFilter
    dependants?: DependantListRelationFilter
    instance?: XOR<InstanceRelationFilter, InstanceWhereInput>
  }

  export type RelationOrderByWithRelationInput = {
    id?: SortOrder
    relationType?: SortOrder
    instanceId?: SortOrder
    createdAt?: SortOrder
    connections?: ConnectionOrderByRelationAggregateInput
    dependants?: DependantOrderByRelationAggregateInput
    instance?: InstanceOrderByWithRelationInput
  }

  export type RelationWhereUniqueInput = {
    id?: string
  }

  export type RelationOrderByWithAggregationInput = {
    id?: SortOrder
    relationType?: SortOrder
    instanceId?: SortOrder
    createdAt?: SortOrder
    _count?: RelationCountOrderByAggregateInput
    _max?: RelationMaxOrderByAggregateInput
    _min?: RelationMinOrderByAggregateInput
  }

  export type RelationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RelationScalarWhereWithAggregatesInput>
    OR?: Enumerable<RelationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RelationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    relationType?: EnumRelationTypeWithAggregatesFilter | RelationType
    instanceId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ConnectionWhereInput = {
    AND?: Enumerable<ConnectionWhereInput>
    OR?: Enumerable<ConnectionWhereInput>
    NOT?: Enumerable<ConnectionWhereInput>
    relationId?: StringFilter | string
    id?: StringFilter | string
    toId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    relation?: XOR<RelationRelationFilter, RelationWhereInput>
    to?: XOR<InstanceRelationFilter, InstanceWhereInput>
  }

  export type ConnectionOrderByWithRelationInput = {
    relationId?: SortOrder
    id?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
    relation?: RelationOrderByWithRelationInput
    to?: InstanceOrderByWithRelationInput
  }

  export type ConnectionWhereUniqueInput = {
    relationId?: string
    id?: string
  }

  export type ConnectionOrderByWithAggregationInput = {
    relationId?: SortOrder
    id?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ConnectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ConnectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ConnectionScalarWhereWithAggregatesInput>
    relationId?: StringWithAggregatesFilter | string
    id?: StringWithAggregatesFilter | string
    toId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DependantWhereInput = {
    AND?: Enumerable<DependantWhereInput>
    OR?: Enumerable<DependantWhereInput>
    NOT?: Enumerable<DependantWhereInput>
    relationId?: StringFilter | string
    id?: StringFilter | string
    childId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    child?: XOR<InstanceRelationFilter, InstanceWhereInput>
    Relation?: XOR<RelationRelationFilter, RelationWhereInput>
  }

  export type DependantOrderByWithRelationInput = {
    relationId?: SortOrder
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    child?: InstanceOrderByWithRelationInput
    Relation?: RelationOrderByWithRelationInput
  }

  export type DependantWhereUniqueInput = {
    id?: string
    relationId_childId?: DependantRelationIdChildIdCompoundUniqueInput
  }

  export type DependantOrderByWithAggregationInput = {
    relationId?: SortOrder
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
    _count?: DependantCountOrderByAggregateInput
    _max?: DependantMaxOrderByAggregateInput
    _min?: DependantMinOrderByAggregateInput
  }

  export type DependantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DependantScalarWhereWithAggregatesInput>
    OR?: Enumerable<DependantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DependantScalarWhereWithAggregatesInput>
    relationId?: StringWithAggregatesFilter | string
    id?: StringWithAggregatesFilter | string
    childId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutProjectInput
    componentTypes?: ComponentTypeCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutProjectInput
    componentTypes?: ComponentTypeUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutProjectInput
    componentTypes?: ComponentTypeUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutProjectInput
    componentTypes?: ComponentTypeUncheckedUpdateManyWithoutProjectInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPagesInput
    Instance?: InstanceCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    projectId: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Instance?: InstanceUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPagesInput
    Instance?: InstanceUpdateManyWithoutPageInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instance?: InstanceUncheckedUpdateManyWithoutPageInput
  }

  export type PageCreateManyInput = {
    id?: string
    projectId: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: CommponentCreateNestedManyWithoutComponentTypeInput
    project: ProjectCreateNestedOneWithoutComponentTypesInput
  }

  export type ComponentTypeUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: CommponentUncheckedCreateNestedManyWithoutComponentTypeInput
  }

  export type ComponentTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: CommponentUpdateManyWithoutComponentTypeInput
    project?: ProjectUpdateOneRequiredWithoutComponentTypesInput
  }

  export type ComponentTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: CommponentUncheckedUpdateManyWithoutComponentTypeInput
  }

  export type ComponentTypeCreateManyInput = {
    id?: string
    projectId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComponentTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommponentCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    componentType: ComponentTypeCreateNestedOneWithoutComponentsInput
    instances?: InstanceCreateNestedManyWithoutCommponentInput
  }

  export type CommponentUncheckedCreateInput = {
    id?: string
    componentTypeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instances?: InstanceUncheckedCreateNestedManyWithoutCommponentInput
  }

  export type CommponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentType?: ComponentTypeUpdateOneRequiredWithoutComponentsInput
    instances?: InstanceUpdateManyWithoutCommponentInput
  }

  export type CommponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    componentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: InstanceUncheckedUpdateManyWithoutCommponentInput
  }

  export type CommponentCreateManyInput = {
    id?: string
    componentTypeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    componentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutInstanceInput
    commponent: CommponentCreateNestedOneWithoutInstancesInput
    relations?: RelationCreateNestedManyWithoutInstanceInput
    connectedTo?: ConnectionCreateNestedManyWithoutToInput
    childOf?: DependantCreateNestedManyWithoutChildInput
  }

  export type InstanceUncheckedCreateInput = {
    id?: string
    pageId: string
    componentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relations?: RelationUncheckedCreateNestedManyWithoutInstanceInput
    connectedTo?: ConnectionUncheckedCreateNestedManyWithoutToInput
    childOf?: DependantUncheckedCreateNestedManyWithoutChildInput
  }

  export type InstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutInstanceInput
    commponent?: CommponentUpdateOneRequiredWithoutInstancesInput
    relations?: RelationUpdateManyWithoutInstanceInput
    connectedTo?: ConnectionUpdateManyWithoutToInput
    childOf?: DependantUpdateManyWithoutChildInput
  }

  export type InstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUncheckedUpdateManyWithoutInstanceInput
    connectedTo?: ConnectionUncheckedUpdateManyWithoutToInput
    childOf?: DependantUncheckedUpdateManyWithoutChildInput
  }

  export type InstanceCreateManyInput = {
    id?: string
    pageId: string
    componentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationCreateInput = {
    id?: string
    relationType: RelationType
    createdAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutRelationInput
    dependants?: DependantCreateNestedManyWithoutRelationInput
    instance: InstanceCreateNestedOneWithoutRelationsInput
  }

  export type RelationUncheckedCreateInput = {
    id?: string
    relationType: RelationType
    instanceId: string
    createdAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutRelationInput
    dependants?: DependantUncheckedCreateNestedManyWithoutRelationInput
  }

  export type RelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutRelationInput
    dependants?: DependantUpdateManyWithoutRelationInput
    instance?: InstanceUpdateOneRequiredWithoutRelationsInput
  }

  export type RelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    instanceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutRelationInput
    dependants?: DependantUncheckedUpdateManyWithoutRelationInput
  }

  export type RelationCreateManyInput = {
    id?: string
    relationType: RelationType
    instanceId: string
    createdAt?: Date | string
  }

  export type RelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    instanceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateInput = {
    id?: string
    createdAt?: Date | string
    relation: RelationCreateNestedOneWithoutConnectionsInput
    to: InstanceCreateNestedOneWithoutConnectedToInput
  }

  export type ConnectionUncheckedCreateInput = {
    relationId: string
    id?: string
    toId: string
    createdAt?: Date | string
  }

  export type ConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relation?: RelationUpdateOneRequiredWithoutConnectionsInput
    to?: InstanceUpdateOneRequiredWithoutConnectedToInput
  }

  export type ConnectionUncheckedUpdateInput = {
    relationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateManyInput = {
    relationId: string
    id?: string
    toId: string
    createdAt?: Date | string
  }

  export type ConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyInput = {
    relationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantCreateInput = {
    id?: string
    createdAt?: Date | string
    child: InstanceCreateNestedOneWithoutChildOfInput
    Relation: RelationCreateNestedOneWithoutDependantsInput
  }

  export type DependantUncheckedCreateInput = {
    relationId: string
    id?: string
    childId: string
    createdAt?: Date | string
  }

  export type DependantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: InstanceUpdateOneRequiredWithoutChildOfInput
    Relation?: RelationUpdateOneRequiredWithoutDependantsInput
  }

  export type DependantUncheckedUpdateInput = {
    relationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantCreateManyInput = {
    relationId: string
    id?: string
    childId: string
    createdAt?: Date | string
  }

  export type DependantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUncheckedUpdateManyInput = {
    relationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PageListRelationFilter = {
    every?: PageWhereInput
    some?: PageWhereInput
    none?: PageWhereInput
  }

  export type ComponentTypeListRelationFilter = {
    every?: ComponentTypeWhereInput
    some?: ComponentTypeWhereInput
    none?: ComponentTypeWhereInput
  }

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComponentTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type InstanceListRelationFilter = {
    every?: InstanceWhereInput
    some?: InstanceWhereInput
    none?: InstanceWhereInput
  }

  export type InstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageProjectIdLevelCompoundUniqueInput = {
    projectId: string
    level: number
  }

  export type PageProjectIdNameCompoundUniqueInput = {
    projectId: string
    name: string
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageSumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type CommponentListRelationFilter = {
    every?: CommponentWhereInput
    some?: CommponentWhereInput
    none?: CommponentWhereInput
  }

  export type CommponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComponentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComponentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComponentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComponentTypeRelationFilter = {
    is?: ComponentTypeWhereInput
    isNot?: ComponentTypeWhereInput
  }

  export type CommponentCountOrderByAggregateInput = {
    id?: SortOrder
    componentTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommponentMaxOrderByAggregateInput = {
    id?: SortOrder
    componentTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommponentMinOrderByAggregateInput = {
    id?: SortOrder
    componentTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type CommponentRelationFilter = {
    is?: CommponentWhereInput
    isNot?: CommponentWhereInput
  }

  export type RelationListRelationFilter = {
    every?: RelationWhereInput
    some?: RelationWhereInput
    none?: RelationWhereInput
  }

  export type ConnectionListRelationFilter = {
    every?: ConnectionWhereInput
    some?: ConnectionWhereInput
    none?: ConnectionWhereInput
  }

  export type DependantListRelationFilter = {
    every?: DependantWhereInput
    some?: DependantWhereInput
    none?: DependantWhereInput
  }

  export type RelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DependantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstanceCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    componentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    componentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstanceMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    componentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRelationTypeFilter = {
    equals?: RelationType
    in?: Enumerable<RelationType>
    notIn?: Enumerable<RelationType>
    not?: NestedEnumRelationTypeFilter | RelationType
  }

  export type InstanceRelationFilter = {
    is?: InstanceWhereInput
    isNot?: InstanceWhereInput
  }

  export type RelationCountOrderByAggregateInput = {
    id?: SortOrder
    relationType?: SortOrder
    instanceId?: SortOrder
    createdAt?: SortOrder
  }

  export type RelationMaxOrderByAggregateInput = {
    id?: SortOrder
    relationType?: SortOrder
    instanceId?: SortOrder
    createdAt?: SortOrder
  }

  export type RelationMinOrderByAggregateInput = {
    id?: SortOrder
    relationType?: SortOrder
    instanceId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRelationTypeWithAggregatesFilter = {
    equals?: RelationType
    in?: Enumerable<RelationType>
    notIn?: Enumerable<RelationType>
    not?: NestedEnumRelationTypeWithAggregatesFilter | RelationType
    _count?: NestedIntFilter
    _min?: NestedEnumRelationTypeFilter
    _max?: NestedEnumRelationTypeFilter
  }

  export type RelationRelationFilter = {
    is?: RelationWhereInput
    isNot?: RelationWhereInput
  }

  export type ConnectionCountOrderByAggregateInput = {
    relationId?: SortOrder
    id?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    relationId?: SortOrder
    id?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    relationId?: SortOrder
    id?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
  }

  export type DependantRelationIdChildIdCompoundUniqueInput = {
    relationId: string
    childId: string
  }

  export type DependantCountOrderByAggregateInput = {
    relationId?: SortOrder
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type DependantMaxOrderByAggregateInput = {
    relationId?: SortOrder
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type DependantMinOrderByAggregateInput = {
    relationId?: SortOrder
    id?: SortOrder
    childId?: SortOrder
    createdAt?: SortOrder
  }

  export type PageCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<PageCreateWithoutProjectInput>, Enumerable<PageUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutProjectInput>
    createMany?: PageCreateManyProjectInputEnvelope
    connect?: Enumerable<PageWhereUniqueInput>
  }

  export type ComponentTypeCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ComponentTypeCreateWithoutProjectInput>, Enumerable<ComponentTypeUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ComponentTypeCreateOrConnectWithoutProjectInput>
    createMany?: ComponentTypeCreateManyProjectInputEnvelope
    connect?: Enumerable<ComponentTypeWhereUniqueInput>
  }

  export type PageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<PageCreateWithoutProjectInput>, Enumerable<PageUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutProjectInput>
    createMany?: PageCreateManyProjectInputEnvelope
    connect?: Enumerable<PageWhereUniqueInput>
  }

  export type ComponentTypeUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ComponentTypeCreateWithoutProjectInput>, Enumerable<ComponentTypeUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ComponentTypeCreateOrConnectWithoutProjectInput>
    createMany?: ComponentTypeCreateManyProjectInputEnvelope
    connect?: Enumerable<ComponentTypeWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PageUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<PageCreateWithoutProjectInput>, Enumerable<PageUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<PageUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: PageCreateManyProjectInputEnvelope
    set?: Enumerable<PageWhereUniqueInput>
    disconnect?: Enumerable<PageWhereUniqueInput>
    delete?: Enumerable<PageWhereUniqueInput>
    connect?: Enumerable<PageWhereUniqueInput>
    update?: Enumerable<PageUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<PageUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<PageScalarWhereInput>
  }

  export type ComponentTypeUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<ComponentTypeCreateWithoutProjectInput>, Enumerable<ComponentTypeUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ComponentTypeCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ComponentTypeUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: ComponentTypeCreateManyProjectInputEnvelope
    set?: Enumerable<ComponentTypeWhereUniqueInput>
    disconnect?: Enumerable<ComponentTypeWhereUniqueInput>
    delete?: Enumerable<ComponentTypeWhereUniqueInput>
    connect?: Enumerable<ComponentTypeWhereUniqueInput>
    update?: Enumerable<ComponentTypeUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ComponentTypeUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ComponentTypeScalarWhereInput>
  }

  export type PageUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<PageCreateWithoutProjectInput>, Enumerable<PageUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<PageUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: PageCreateManyProjectInputEnvelope
    set?: Enumerable<PageWhereUniqueInput>
    disconnect?: Enumerable<PageWhereUniqueInput>
    delete?: Enumerable<PageWhereUniqueInput>
    connect?: Enumerable<PageWhereUniqueInput>
    update?: Enumerable<PageUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<PageUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<PageScalarWhereInput>
  }

  export type ComponentTypeUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<ComponentTypeCreateWithoutProjectInput>, Enumerable<ComponentTypeUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ComponentTypeCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ComponentTypeUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: ComponentTypeCreateManyProjectInputEnvelope
    set?: Enumerable<ComponentTypeWhereUniqueInput>
    disconnect?: Enumerable<ComponentTypeWhereUniqueInput>
    delete?: Enumerable<ComponentTypeWhereUniqueInput>
    connect?: Enumerable<ComponentTypeWhereUniqueInput>
    update?: Enumerable<ComponentTypeUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ComponentTypeUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ComponentTypeScalarWhereInput>
  }

  export type ProjectCreateNestedOneWithoutPagesInput = {
    create?: XOR<ProjectCreateWithoutPagesInput, ProjectUncheckedCreateWithoutPagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type InstanceCreateNestedManyWithoutPageInput = {
    create?: XOR<Enumerable<InstanceCreateWithoutPageInput>, Enumerable<InstanceUncheckedCreateWithoutPageInput>>
    connectOrCreate?: Enumerable<InstanceCreateOrConnectWithoutPageInput>
    createMany?: InstanceCreateManyPageInputEnvelope
    connect?: Enumerable<InstanceWhereUniqueInput>
  }

  export type InstanceUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<Enumerable<InstanceCreateWithoutPageInput>, Enumerable<InstanceUncheckedCreateWithoutPageInput>>
    connectOrCreate?: Enumerable<InstanceCreateOrConnectWithoutPageInput>
    createMany?: InstanceCreateManyPageInputEnvelope
    connect?: Enumerable<InstanceWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutPagesInput = {
    create?: XOR<ProjectCreateWithoutPagesInput, ProjectUncheckedCreateWithoutPagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPagesInput
    upsert?: ProjectUpsertWithoutPagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutPagesInput, ProjectUncheckedUpdateWithoutPagesInput>
  }

  export type InstanceUpdateManyWithoutPageInput = {
    create?: XOR<Enumerable<InstanceCreateWithoutPageInput>, Enumerable<InstanceUncheckedCreateWithoutPageInput>>
    connectOrCreate?: Enumerable<InstanceCreateOrConnectWithoutPageInput>
    upsert?: Enumerable<InstanceUpsertWithWhereUniqueWithoutPageInput>
    createMany?: InstanceCreateManyPageInputEnvelope
    set?: Enumerable<InstanceWhereUniqueInput>
    disconnect?: Enumerable<InstanceWhereUniqueInput>
    delete?: Enumerable<InstanceWhereUniqueInput>
    connect?: Enumerable<InstanceWhereUniqueInput>
    update?: Enumerable<InstanceUpdateWithWhereUniqueWithoutPageInput>
    updateMany?: Enumerable<InstanceUpdateManyWithWhereWithoutPageInput>
    deleteMany?: Enumerable<InstanceScalarWhereInput>
  }

  export type InstanceUncheckedUpdateManyWithoutPageInput = {
    create?: XOR<Enumerable<InstanceCreateWithoutPageInput>, Enumerable<InstanceUncheckedCreateWithoutPageInput>>
    connectOrCreate?: Enumerable<InstanceCreateOrConnectWithoutPageInput>
    upsert?: Enumerable<InstanceUpsertWithWhereUniqueWithoutPageInput>
    createMany?: InstanceCreateManyPageInputEnvelope
    set?: Enumerable<InstanceWhereUniqueInput>
    disconnect?: Enumerable<InstanceWhereUniqueInput>
    delete?: Enumerable<InstanceWhereUniqueInput>
    connect?: Enumerable<InstanceWhereUniqueInput>
    update?: Enumerable<InstanceUpdateWithWhereUniqueWithoutPageInput>
    updateMany?: Enumerable<InstanceUpdateManyWithWhereWithoutPageInput>
    deleteMany?: Enumerable<InstanceScalarWhereInput>
  }

  export type CommponentCreateNestedManyWithoutComponentTypeInput = {
    create?: XOR<Enumerable<CommponentCreateWithoutComponentTypeInput>, Enumerable<CommponentUncheckedCreateWithoutComponentTypeInput>>
    connectOrCreate?: Enumerable<CommponentCreateOrConnectWithoutComponentTypeInput>
    createMany?: CommponentCreateManyComponentTypeInputEnvelope
    connect?: Enumerable<CommponentWhereUniqueInput>
  }

  export type ProjectCreateNestedOneWithoutComponentTypesInput = {
    create?: XOR<ProjectCreateWithoutComponentTypesInput, ProjectUncheckedCreateWithoutComponentTypesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutComponentTypesInput
    connect?: ProjectWhereUniqueInput
  }

  export type CommponentUncheckedCreateNestedManyWithoutComponentTypeInput = {
    create?: XOR<Enumerable<CommponentCreateWithoutComponentTypeInput>, Enumerable<CommponentUncheckedCreateWithoutComponentTypeInput>>
    connectOrCreate?: Enumerable<CommponentCreateOrConnectWithoutComponentTypeInput>
    createMany?: CommponentCreateManyComponentTypeInputEnvelope
    connect?: Enumerable<CommponentWhereUniqueInput>
  }

  export type CommponentUpdateManyWithoutComponentTypeInput = {
    create?: XOR<Enumerable<CommponentCreateWithoutComponentTypeInput>, Enumerable<CommponentUncheckedCreateWithoutComponentTypeInput>>
    connectOrCreate?: Enumerable<CommponentCreateOrConnectWithoutComponentTypeInput>
    upsert?: Enumerable<CommponentUpsertWithWhereUniqueWithoutComponentTypeInput>
    createMany?: CommponentCreateManyComponentTypeInputEnvelope
    set?: Enumerable<CommponentWhereUniqueInput>
    disconnect?: Enumerable<CommponentWhereUniqueInput>
    delete?: Enumerable<CommponentWhereUniqueInput>
    connect?: Enumerable<CommponentWhereUniqueInput>
    update?: Enumerable<CommponentUpdateWithWhereUniqueWithoutComponentTypeInput>
    updateMany?: Enumerable<CommponentUpdateManyWithWhereWithoutComponentTypeInput>
    deleteMany?: Enumerable<CommponentScalarWhereInput>
  }

  export type ProjectUpdateOneRequiredWithoutComponentTypesInput = {
    create?: XOR<ProjectCreateWithoutComponentTypesInput, ProjectUncheckedCreateWithoutComponentTypesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutComponentTypesInput
    upsert?: ProjectUpsertWithoutComponentTypesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutComponentTypesInput, ProjectUncheckedUpdateWithoutComponentTypesInput>
  }

  export type CommponentUncheckedUpdateManyWithoutComponentTypeInput = {
    create?: XOR<Enumerable<CommponentCreateWithoutComponentTypeInput>, Enumerable<CommponentUncheckedCreateWithoutComponentTypeInput>>
    connectOrCreate?: Enumerable<CommponentCreateOrConnectWithoutComponentTypeInput>
    upsert?: Enumerable<CommponentUpsertWithWhereUniqueWithoutComponentTypeInput>
    createMany?: CommponentCreateManyComponentTypeInputEnvelope
    set?: Enumerable<CommponentWhereUniqueInput>
    disconnect?: Enumerable<CommponentWhereUniqueInput>
    delete?: Enumerable<CommponentWhereUniqueInput>
    connect?: Enumerable<CommponentWhereUniqueInput>
    update?: Enumerable<CommponentUpdateWithWhereUniqueWithoutComponentTypeInput>
    updateMany?: Enumerable<CommponentUpdateManyWithWhereWithoutComponentTypeInput>
    deleteMany?: Enumerable<CommponentScalarWhereInput>
  }

  export type ComponentTypeCreateNestedOneWithoutComponentsInput = {
    create?: XOR<ComponentTypeCreateWithoutComponentsInput, ComponentTypeUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: ComponentTypeCreateOrConnectWithoutComponentsInput
    connect?: ComponentTypeWhereUniqueInput
  }

  export type InstanceCreateNestedManyWithoutCommponentInput = {
    create?: XOR<Enumerable<InstanceCreateWithoutCommponentInput>, Enumerable<InstanceUncheckedCreateWithoutCommponentInput>>
    connectOrCreate?: Enumerable<InstanceCreateOrConnectWithoutCommponentInput>
    createMany?: InstanceCreateManyCommponentInputEnvelope
    connect?: Enumerable<InstanceWhereUniqueInput>
  }

  export type InstanceUncheckedCreateNestedManyWithoutCommponentInput = {
    create?: XOR<Enumerable<InstanceCreateWithoutCommponentInput>, Enumerable<InstanceUncheckedCreateWithoutCommponentInput>>
    connectOrCreate?: Enumerable<InstanceCreateOrConnectWithoutCommponentInput>
    createMany?: InstanceCreateManyCommponentInputEnvelope
    connect?: Enumerable<InstanceWhereUniqueInput>
  }

  export type ComponentTypeUpdateOneRequiredWithoutComponentsInput = {
    create?: XOR<ComponentTypeCreateWithoutComponentsInput, ComponentTypeUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: ComponentTypeCreateOrConnectWithoutComponentsInput
    upsert?: ComponentTypeUpsertWithoutComponentsInput
    connect?: ComponentTypeWhereUniqueInput
    update?: XOR<ComponentTypeUpdateWithoutComponentsInput, ComponentTypeUncheckedUpdateWithoutComponentsInput>
  }

  export type InstanceUpdateManyWithoutCommponentInput = {
    create?: XOR<Enumerable<InstanceCreateWithoutCommponentInput>, Enumerable<InstanceUncheckedCreateWithoutCommponentInput>>
    connectOrCreate?: Enumerable<InstanceCreateOrConnectWithoutCommponentInput>
    upsert?: Enumerable<InstanceUpsertWithWhereUniqueWithoutCommponentInput>
    createMany?: InstanceCreateManyCommponentInputEnvelope
    set?: Enumerable<InstanceWhereUniqueInput>
    disconnect?: Enumerable<InstanceWhereUniqueInput>
    delete?: Enumerable<InstanceWhereUniqueInput>
    connect?: Enumerable<InstanceWhereUniqueInput>
    update?: Enumerable<InstanceUpdateWithWhereUniqueWithoutCommponentInput>
    updateMany?: Enumerable<InstanceUpdateManyWithWhereWithoutCommponentInput>
    deleteMany?: Enumerable<InstanceScalarWhereInput>
  }

  export type InstanceUncheckedUpdateManyWithoutCommponentInput = {
    create?: XOR<Enumerable<InstanceCreateWithoutCommponentInput>, Enumerable<InstanceUncheckedCreateWithoutCommponentInput>>
    connectOrCreate?: Enumerable<InstanceCreateOrConnectWithoutCommponentInput>
    upsert?: Enumerable<InstanceUpsertWithWhereUniqueWithoutCommponentInput>
    createMany?: InstanceCreateManyCommponentInputEnvelope
    set?: Enumerable<InstanceWhereUniqueInput>
    disconnect?: Enumerable<InstanceWhereUniqueInput>
    delete?: Enumerable<InstanceWhereUniqueInput>
    connect?: Enumerable<InstanceWhereUniqueInput>
    update?: Enumerable<InstanceUpdateWithWhereUniqueWithoutCommponentInput>
    updateMany?: Enumerable<InstanceUpdateManyWithWhereWithoutCommponentInput>
    deleteMany?: Enumerable<InstanceScalarWhereInput>
  }

  export type PageCreateNestedOneWithoutInstanceInput = {
    create?: XOR<PageCreateWithoutInstanceInput, PageUncheckedCreateWithoutInstanceInput>
    connectOrCreate?: PageCreateOrConnectWithoutInstanceInput
    connect?: PageWhereUniqueInput
  }

  export type CommponentCreateNestedOneWithoutInstancesInput = {
    create?: XOR<CommponentCreateWithoutInstancesInput, CommponentUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: CommponentCreateOrConnectWithoutInstancesInput
    connect?: CommponentWhereUniqueInput
  }

  export type RelationCreateNestedManyWithoutInstanceInput = {
    create?: XOR<Enumerable<RelationCreateWithoutInstanceInput>, Enumerable<RelationUncheckedCreateWithoutInstanceInput>>
    connectOrCreate?: Enumerable<RelationCreateOrConnectWithoutInstanceInput>
    createMany?: RelationCreateManyInstanceInputEnvelope
    connect?: Enumerable<RelationWhereUniqueInput>
  }

  export type ConnectionCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<ConnectionCreateWithoutToInput>, Enumerable<ConnectionUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<ConnectionCreateOrConnectWithoutToInput>
    createMany?: ConnectionCreateManyToInputEnvelope
    connect?: Enumerable<ConnectionWhereUniqueInput>
  }

  export type DependantCreateNestedManyWithoutChildInput = {
    create?: XOR<Enumerable<DependantCreateWithoutChildInput>, Enumerable<DependantUncheckedCreateWithoutChildInput>>
    connectOrCreate?: Enumerable<DependantCreateOrConnectWithoutChildInput>
    createMany?: DependantCreateManyChildInputEnvelope
    connect?: Enumerable<DependantWhereUniqueInput>
  }

  export type RelationUncheckedCreateNestedManyWithoutInstanceInput = {
    create?: XOR<Enumerable<RelationCreateWithoutInstanceInput>, Enumerable<RelationUncheckedCreateWithoutInstanceInput>>
    connectOrCreate?: Enumerable<RelationCreateOrConnectWithoutInstanceInput>
    createMany?: RelationCreateManyInstanceInputEnvelope
    connect?: Enumerable<RelationWhereUniqueInput>
  }

  export type ConnectionUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<ConnectionCreateWithoutToInput>, Enumerable<ConnectionUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<ConnectionCreateOrConnectWithoutToInput>
    createMany?: ConnectionCreateManyToInputEnvelope
    connect?: Enumerable<ConnectionWhereUniqueInput>
  }

  export type DependantUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<Enumerable<DependantCreateWithoutChildInput>, Enumerable<DependantUncheckedCreateWithoutChildInput>>
    connectOrCreate?: Enumerable<DependantCreateOrConnectWithoutChildInput>
    createMany?: DependantCreateManyChildInputEnvelope
    connect?: Enumerable<DependantWhereUniqueInput>
  }

  export type PageUpdateOneRequiredWithoutInstanceInput = {
    create?: XOR<PageCreateWithoutInstanceInput, PageUncheckedCreateWithoutInstanceInput>
    connectOrCreate?: PageCreateOrConnectWithoutInstanceInput
    upsert?: PageUpsertWithoutInstanceInput
    connect?: PageWhereUniqueInput
    update?: XOR<PageUpdateWithoutInstanceInput, PageUncheckedUpdateWithoutInstanceInput>
  }

  export type CommponentUpdateOneRequiredWithoutInstancesInput = {
    create?: XOR<CommponentCreateWithoutInstancesInput, CommponentUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: CommponentCreateOrConnectWithoutInstancesInput
    upsert?: CommponentUpsertWithoutInstancesInput
    connect?: CommponentWhereUniqueInput
    update?: XOR<CommponentUpdateWithoutInstancesInput, CommponentUncheckedUpdateWithoutInstancesInput>
  }

  export type RelationUpdateManyWithoutInstanceInput = {
    create?: XOR<Enumerable<RelationCreateWithoutInstanceInput>, Enumerable<RelationUncheckedCreateWithoutInstanceInput>>
    connectOrCreate?: Enumerable<RelationCreateOrConnectWithoutInstanceInput>
    upsert?: Enumerable<RelationUpsertWithWhereUniqueWithoutInstanceInput>
    createMany?: RelationCreateManyInstanceInputEnvelope
    set?: Enumerable<RelationWhereUniqueInput>
    disconnect?: Enumerable<RelationWhereUniqueInput>
    delete?: Enumerable<RelationWhereUniqueInput>
    connect?: Enumerable<RelationWhereUniqueInput>
    update?: Enumerable<RelationUpdateWithWhereUniqueWithoutInstanceInput>
    updateMany?: Enumerable<RelationUpdateManyWithWhereWithoutInstanceInput>
    deleteMany?: Enumerable<RelationScalarWhereInput>
  }

  export type ConnectionUpdateManyWithoutToInput = {
    create?: XOR<Enumerable<ConnectionCreateWithoutToInput>, Enumerable<ConnectionUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<ConnectionCreateOrConnectWithoutToInput>
    upsert?: Enumerable<ConnectionUpsertWithWhereUniqueWithoutToInput>
    createMany?: ConnectionCreateManyToInputEnvelope
    set?: Enumerable<ConnectionWhereUniqueInput>
    disconnect?: Enumerable<ConnectionWhereUniqueInput>
    delete?: Enumerable<ConnectionWhereUniqueInput>
    connect?: Enumerable<ConnectionWhereUniqueInput>
    update?: Enumerable<ConnectionUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<ConnectionUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<ConnectionScalarWhereInput>
  }

  export type DependantUpdateManyWithoutChildInput = {
    create?: XOR<Enumerable<DependantCreateWithoutChildInput>, Enumerable<DependantUncheckedCreateWithoutChildInput>>
    connectOrCreate?: Enumerable<DependantCreateOrConnectWithoutChildInput>
    upsert?: Enumerable<DependantUpsertWithWhereUniqueWithoutChildInput>
    createMany?: DependantCreateManyChildInputEnvelope
    set?: Enumerable<DependantWhereUniqueInput>
    disconnect?: Enumerable<DependantWhereUniqueInput>
    delete?: Enumerable<DependantWhereUniqueInput>
    connect?: Enumerable<DependantWhereUniqueInput>
    update?: Enumerable<DependantUpdateWithWhereUniqueWithoutChildInput>
    updateMany?: Enumerable<DependantUpdateManyWithWhereWithoutChildInput>
    deleteMany?: Enumerable<DependantScalarWhereInput>
  }

  export type RelationUncheckedUpdateManyWithoutInstanceInput = {
    create?: XOR<Enumerable<RelationCreateWithoutInstanceInput>, Enumerable<RelationUncheckedCreateWithoutInstanceInput>>
    connectOrCreate?: Enumerable<RelationCreateOrConnectWithoutInstanceInput>
    upsert?: Enumerable<RelationUpsertWithWhereUniqueWithoutInstanceInput>
    createMany?: RelationCreateManyInstanceInputEnvelope
    set?: Enumerable<RelationWhereUniqueInput>
    disconnect?: Enumerable<RelationWhereUniqueInput>
    delete?: Enumerable<RelationWhereUniqueInput>
    connect?: Enumerable<RelationWhereUniqueInput>
    update?: Enumerable<RelationUpdateWithWhereUniqueWithoutInstanceInput>
    updateMany?: Enumerable<RelationUpdateManyWithWhereWithoutInstanceInput>
    deleteMany?: Enumerable<RelationScalarWhereInput>
  }

  export type ConnectionUncheckedUpdateManyWithoutToInput = {
    create?: XOR<Enumerable<ConnectionCreateWithoutToInput>, Enumerable<ConnectionUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<ConnectionCreateOrConnectWithoutToInput>
    upsert?: Enumerable<ConnectionUpsertWithWhereUniqueWithoutToInput>
    createMany?: ConnectionCreateManyToInputEnvelope
    set?: Enumerable<ConnectionWhereUniqueInput>
    disconnect?: Enumerable<ConnectionWhereUniqueInput>
    delete?: Enumerable<ConnectionWhereUniqueInput>
    connect?: Enumerable<ConnectionWhereUniqueInput>
    update?: Enumerable<ConnectionUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<ConnectionUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<ConnectionScalarWhereInput>
  }

  export type DependantUncheckedUpdateManyWithoutChildInput = {
    create?: XOR<Enumerable<DependantCreateWithoutChildInput>, Enumerable<DependantUncheckedCreateWithoutChildInput>>
    connectOrCreate?: Enumerable<DependantCreateOrConnectWithoutChildInput>
    upsert?: Enumerable<DependantUpsertWithWhereUniqueWithoutChildInput>
    createMany?: DependantCreateManyChildInputEnvelope
    set?: Enumerable<DependantWhereUniqueInput>
    disconnect?: Enumerable<DependantWhereUniqueInput>
    delete?: Enumerable<DependantWhereUniqueInput>
    connect?: Enumerable<DependantWhereUniqueInput>
    update?: Enumerable<DependantUpdateWithWhereUniqueWithoutChildInput>
    updateMany?: Enumerable<DependantUpdateManyWithWhereWithoutChildInput>
    deleteMany?: Enumerable<DependantScalarWhereInput>
  }

  export type ConnectionCreateNestedManyWithoutRelationInput = {
    create?: XOR<Enumerable<ConnectionCreateWithoutRelationInput>, Enumerable<ConnectionUncheckedCreateWithoutRelationInput>>
    connectOrCreate?: Enumerable<ConnectionCreateOrConnectWithoutRelationInput>
    createMany?: ConnectionCreateManyRelationInputEnvelope
    connect?: Enumerable<ConnectionWhereUniqueInput>
  }

  export type DependantCreateNestedManyWithoutRelationInput = {
    create?: XOR<Enumerable<DependantCreateWithoutRelationInput>, Enumerable<DependantUncheckedCreateWithoutRelationInput>>
    connectOrCreate?: Enumerable<DependantCreateOrConnectWithoutRelationInput>
    createMany?: DependantCreateManyRelationInputEnvelope
    connect?: Enumerable<DependantWhereUniqueInput>
  }

  export type InstanceCreateNestedOneWithoutRelationsInput = {
    create?: XOR<InstanceCreateWithoutRelationsInput, InstanceUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: InstanceCreateOrConnectWithoutRelationsInput
    connect?: InstanceWhereUniqueInput
  }

  export type ConnectionUncheckedCreateNestedManyWithoutRelationInput = {
    create?: XOR<Enumerable<ConnectionCreateWithoutRelationInput>, Enumerable<ConnectionUncheckedCreateWithoutRelationInput>>
    connectOrCreate?: Enumerable<ConnectionCreateOrConnectWithoutRelationInput>
    createMany?: ConnectionCreateManyRelationInputEnvelope
    connect?: Enumerable<ConnectionWhereUniqueInput>
  }

  export type DependantUncheckedCreateNestedManyWithoutRelationInput = {
    create?: XOR<Enumerable<DependantCreateWithoutRelationInput>, Enumerable<DependantUncheckedCreateWithoutRelationInput>>
    connectOrCreate?: Enumerable<DependantCreateOrConnectWithoutRelationInput>
    createMany?: DependantCreateManyRelationInputEnvelope
    connect?: Enumerable<DependantWhereUniqueInput>
  }

  export type EnumRelationTypeFieldUpdateOperationsInput = {
    set?: RelationType
  }

  export type ConnectionUpdateManyWithoutRelationInput = {
    create?: XOR<Enumerable<ConnectionCreateWithoutRelationInput>, Enumerable<ConnectionUncheckedCreateWithoutRelationInput>>
    connectOrCreate?: Enumerable<ConnectionCreateOrConnectWithoutRelationInput>
    upsert?: Enumerable<ConnectionUpsertWithWhereUniqueWithoutRelationInput>
    createMany?: ConnectionCreateManyRelationInputEnvelope
    set?: Enumerable<ConnectionWhereUniqueInput>
    disconnect?: Enumerable<ConnectionWhereUniqueInput>
    delete?: Enumerable<ConnectionWhereUniqueInput>
    connect?: Enumerable<ConnectionWhereUniqueInput>
    update?: Enumerable<ConnectionUpdateWithWhereUniqueWithoutRelationInput>
    updateMany?: Enumerable<ConnectionUpdateManyWithWhereWithoutRelationInput>
    deleteMany?: Enumerable<ConnectionScalarWhereInput>
  }

  export type DependantUpdateManyWithoutRelationInput = {
    create?: XOR<Enumerable<DependantCreateWithoutRelationInput>, Enumerable<DependantUncheckedCreateWithoutRelationInput>>
    connectOrCreate?: Enumerable<DependantCreateOrConnectWithoutRelationInput>
    upsert?: Enumerable<DependantUpsertWithWhereUniqueWithoutRelationInput>
    createMany?: DependantCreateManyRelationInputEnvelope
    set?: Enumerable<DependantWhereUniqueInput>
    disconnect?: Enumerable<DependantWhereUniqueInput>
    delete?: Enumerable<DependantWhereUniqueInput>
    connect?: Enumerable<DependantWhereUniqueInput>
    update?: Enumerable<DependantUpdateWithWhereUniqueWithoutRelationInput>
    updateMany?: Enumerable<DependantUpdateManyWithWhereWithoutRelationInput>
    deleteMany?: Enumerable<DependantScalarWhereInput>
  }

  export type InstanceUpdateOneRequiredWithoutRelationsInput = {
    create?: XOR<InstanceCreateWithoutRelationsInput, InstanceUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: InstanceCreateOrConnectWithoutRelationsInput
    upsert?: InstanceUpsertWithoutRelationsInput
    connect?: InstanceWhereUniqueInput
    update?: XOR<InstanceUpdateWithoutRelationsInput, InstanceUncheckedUpdateWithoutRelationsInput>
  }

  export type ConnectionUncheckedUpdateManyWithoutRelationInput = {
    create?: XOR<Enumerable<ConnectionCreateWithoutRelationInput>, Enumerable<ConnectionUncheckedCreateWithoutRelationInput>>
    connectOrCreate?: Enumerable<ConnectionCreateOrConnectWithoutRelationInput>
    upsert?: Enumerable<ConnectionUpsertWithWhereUniqueWithoutRelationInput>
    createMany?: ConnectionCreateManyRelationInputEnvelope
    set?: Enumerable<ConnectionWhereUniqueInput>
    disconnect?: Enumerable<ConnectionWhereUniqueInput>
    delete?: Enumerable<ConnectionWhereUniqueInput>
    connect?: Enumerable<ConnectionWhereUniqueInput>
    update?: Enumerable<ConnectionUpdateWithWhereUniqueWithoutRelationInput>
    updateMany?: Enumerable<ConnectionUpdateManyWithWhereWithoutRelationInput>
    deleteMany?: Enumerable<ConnectionScalarWhereInput>
  }

  export type DependantUncheckedUpdateManyWithoutRelationInput = {
    create?: XOR<Enumerable<DependantCreateWithoutRelationInput>, Enumerable<DependantUncheckedCreateWithoutRelationInput>>
    connectOrCreate?: Enumerable<DependantCreateOrConnectWithoutRelationInput>
    upsert?: Enumerable<DependantUpsertWithWhereUniqueWithoutRelationInput>
    createMany?: DependantCreateManyRelationInputEnvelope
    set?: Enumerable<DependantWhereUniqueInput>
    disconnect?: Enumerable<DependantWhereUniqueInput>
    delete?: Enumerable<DependantWhereUniqueInput>
    connect?: Enumerable<DependantWhereUniqueInput>
    update?: Enumerable<DependantUpdateWithWhereUniqueWithoutRelationInput>
    updateMany?: Enumerable<DependantUpdateManyWithWhereWithoutRelationInput>
    deleteMany?: Enumerable<DependantScalarWhereInput>
  }

  export type RelationCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<RelationCreateWithoutConnectionsInput, RelationUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: RelationCreateOrConnectWithoutConnectionsInput
    connect?: RelationWhereUniqueInput
  }

  export type InstanceCreateNestedOneWithoutConnectedToInput = {
    create?: XOR<InstanceCreateWithoutConnectedToInput, InstanceUncheckedCreateWithoutConnectedToInput>
    connectOrCreate?: InstanceCreateOrConnectWithoutConnectedToInput
    connect?: InstanceWhereUniqueInput
  }

  export type RelationUpdateOneRequiredWithoutConnectionsInput = {
    create?: XOR<RelationCreateWithoutConnectionsInput, RelationUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: RelationCreateOrConnectWithoutConnectionsInput
    upsert?: RelationUpsertWithoutConnectionsInput
    connect?: RelationWhereUniqueInput
    update?: XOR<RelationUpdateWithoutConnectionsInput, RelationUncheckedUpdateWithoutConnectionsInput>
  }

  export type InstanceUpdateOneRequiredWithoutConnectedToInput = {
    create?: XOR<InstanceCreateWithoutConnectedToInput, InstanceUncheckedCreateWithoutConnectedToInput>
    connectOrCreate?: InstanceCreateOrConnectWithoutConnectedToInput
    upsert?: InstanceUpsertWithoutConnectedToInput
    connect?: InstanceWhereUniqueInput
    update?: XOR<InstanceUpdateWithoutConnectedToInput, InstanceUncheckedUpdateWithoutConnectedToInput>
  }

  export type InstanceCreateNestedOneWithoutChildOfInput = {
    create?: XOR<InstanceCreateWithoutChildOfInput, InstanceUncheckedCreateWithoutChildOfInput>
    connectOrCreate?: InstanceCreateOrConnectWithoutChildOfInput
    connect?: InstanceWhereUniqueInput
  }

  export type RelationCreateNestedOneWithoutDependantsInput = {
    create?: XOR<RelationCreateWithoutDependantsInput, RelationUncheckedCreateWithoutDependantsInput>
    connectOrCreate?: RelationCreateOrConnectWithoutDependantsInput
    connect?: RelationWhereUniqueInput
  }

  export type InstanceUpdateOneRequiredWithoutChildOfInput = {
    create?: XOR<InstanceCreateWithoutChildOfInput, InstanceUncheckedCreateWithoutChildOfInput>
    connectOrCreate?: InstanceCreateOrConnectWithoutChildOfInput
    upsert?: InstanceUpsertWithoutChildOfInput
    connect?: InstanceWhereUniqueInput
    update?: XOR<InstanceUpdateWithoutChildOfInput, InstanceUncheckedUpdateWithoutChildOfInput>
  }

  export type RelationUpdateOneRequiredWithoutDependantsInput = {
    create?: XOR<RelationCreateWithoutDependantsInput, RelationUncheckedCreateWithoutDependantsInput>
    connectOrCreate?: RelationCreateOrConnectWithoutDependantsInput
    upsert?: RelationUpsertWithoutDependantsInput
    connect?: RelationWhereUniqueInput
    update?: XOR<RelationUpdateWithoutDependantsInput, RelationUncheckedUpdateWithoutDependantsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumRelationTypeFilter = {
    equals?: RelationType
    in?: Enumerable<RelationType>
    notIn?: Enumerable<RelationType>
    not?: NestedEnumRelationTypeFilter | RelationType
  }

  export type NestedEnumRelationTypeWithAggregatesFilter = {
    equals?: RelationType
    in?: Enumerable<RelationType>
    notIn?: Enumerable<RelationType>
    not?: NestedEnumRelationTypeWithAggregatesFilter | RelationType
    _count?: NestedIntFilter
    _min?: NestedEnumRelationTypeFilter
    _max?: NestedEnumRelationTypeFilter
  }

  export type PageCreateWithoutProjectInput = {
    id?: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Instance?: InstanceCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutProjectInput = {
    id?: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Instance?: InstanceUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutProjectInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput>
  }

  export type PageCreateManyProjectInputEnvelope = {
    data: Enumerable<PageCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type ComponentTypeCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: CommponentCreateNestedManyWithoutComponentTypeInput
  }

  export type ComponentTypeUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: CommponentUncheckedCreateNestedManyWithoutComponentTypeInput
  }

  export type ComponentTypeCreateOrConnectWithoutProjectInput = {
    where: ComponentTypeWhereUniqueInput
    create: XOR<ComponentTypeCreateWithoutProjectInput, ComponentTypeUncheckedCreateWithoutProjectInput>
  }

  export type ComponentTypeCreateManyProjectInputEnvelope = {
    data: Enumerable<ComponentTypeCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type PageUpsertWithWhereUniqueWithoutProjectInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutProjectInput, PageUncheckedUpdateWithoutProjectInput>
    create: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput>
  }

  export type PageUpdateWithWhereUniqueWithoutProjectInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutProjectInput, PageUncheckedUpdateWithoutProjectInput>
  }

  export type PageUpdateManyWithWhereWithoutProjectInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutPagesInput>
  }

  export type PageScalarWhereInput = {
    AND?: Enumerable<PageScalarWhereInput>
    OR?: Enumerable<PageScalarWhereInput>
    NOT?: Enumerable<PageScalarWhereInput>
    id?: StringFilter | string
    projectId?: StringFilter | string
    level?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ComponentTypeUpsertWithWhereUniqueWithoutProjectInput = {
    where: ComponentTypeWhereUniqueInput
    update: XOR<ComponentTypeUpdateWithoutProjectInput, ComponentTypeUncheckedUpdateWithoutProjectInput>
    create: XOR<ComponentTypeCreateWithoutProjectInput, ComponentTypeUncheckedCreateWithoutProjectInput>
  }

  export type ComponentTypeUpdateWithWhereUniqueWithoutProjectInput = {
    where: ComponentTypeWhereUniqueInput
    data: XOR<ComponentTypeUpdateWithoutProjectInput, ComponentTypeUncheckedUpdateWithoutProjectInput>
  }

  export type ComponentTypeUpdateManyWithWhereWithoutProjectInput = {
    where: ComponentTypeScalarWhereInput
    data: XOR<ComponentTypeUpdateManyMutationInput, ComponentTypeUncheckedUpdateManyWithoutComponentTypesInput>
  }

  export type ComponentTypeScalarWhereInput = {
    AND?: Enumerable<ComponentTypeScalarWhereInput>
    OR?: Enumerable<ComponentTypeScalarWhereInput>
    NOT?: Enumerable<ComponentTypeScalarWhereInput>
    id?: StringFilter | string
    projectId?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProjectCreateWithoutPagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    componentTypes?: ComponentTypeCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    componentTypes?: ComponentTypeUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPagesInput, ProjectUncheckedCreateWithoutPagesInput>
  }

  export type InstanceCreateWithoutPageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commponent: CommponentCreateNestedOneWithoutInstancesInput
    relations?: RelationCreateNestedManyWithoutInstanceInput
    connectedTo?: ConnectionCreateNestedManyWithoutToInput
    childOf?: DependantCreateNestedManyWithoutChildInput
  }

  export type InstanceUncheckedCreateWithoutPageInput = {
    id?: string
    componentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relations?: RelationUncheckedCreateNestedManyWithoutInstanceInput
    connectedTo?: ConnectionUncheckedCreateNestedManyWithoutToInput
    childOf?: DependantUncheckedCreateNestedManyWithoutChildInput
  }

  export type InstanceCreateOrConnectWithoutPageInput = {
    where: InstanceWhereUniqueInput
    create: XOR<InstanceCreateWithoutPageInput, InstanceUncheckedCreateWithoutPageInput>
  }

  export type InstanceCreateManyPageInputEnvelope = {
    data: Enumerable<InstanceCreateManyPageInput>
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutPagesInput = {
    update: XOR<ProjectUpdateWithoutPagesInput, ProjectUncheckedUpdateWithoutPagesInput>
    create: XOR<ProjectCreateWithoutPagesInput, ProjectUncheckedCreateWithoutPagesInput>
  }

  export type ProjectUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentTypes?: ComponentTypeUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentTypes?: ComponentTypeUncheckedUpdateManyWithoutProjectInput
  }

  export type InstanceUpsertWithWhereUniqueWithoutPageInput = {
    where: InstanceWhereUniqueInput
    update: XOR<InstanceUpdateWithoutPageInput, InstanceUncheckedUpdateWithoutPageInput>
    create: XOR<InstanceCreateWithoutPageInput, InstanceUncheckedCreateWithoutPageInput>
  }

  export type InstanceUpdateWithWhereUniqueWithoutPageInput = {
    where: InstanceWhereUniqueInput
    data: XOR<InstanceUpdateWithoutPageInput, InstanceUncheckedUpdateWithoutPageInput>
  }

  export type InstanceUpdateManyWithWhereWithoutPageInput = {
    where: InstanceScalarWhereInput
    data: XOR<InstanceUpdateManyMutationInput, InstanceUncheckedUpdateManyWithoutInstanceInput>
  }

  export type InstanceScalarWhereInput = {
    AND?: Enumerable<InstanceScalarWhereInput>
    OR?: Enumerable<InstanceScalarWhereInput>
    NOT?: Enumerable<InstanceScalarWhereInput>
    id?: StringFilter | string
    pageId?: StringFilter | string
    componentId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CommponentCreateWithoutComponentTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instances?: InstanceCreateNestedManyWithoutCommponentInput
  }

  export type CommponentUncheckedCreateWithoutComponentTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instances?: InstanceUncheckedCreateNestedManyWithoutCommponentInput
  }

  export type CommponentCreateOrConnectWithoutComponentTypeInput = {
    where: CommponentWhereUniqueInput
    create: XOR<CommponentCreateWithoutComponentTypeInput, CommponentUncheckedCreateWithoutComponentTypeInput>
  }

  export type CommponentCreateManyComponentTypeInputEnvelope = {
    data: Enumerable<CommponentCreateManyComponentTypeInput>
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutComponentTypesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutComponentTypesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutComponentTypesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutComponentTypesInput, ProjectUncheckedCreateWithoutComponentTypesInput>
  }

  export type CommponentUpsertWithWhereUniqueWithoutComponentTypeInput = {
    where: CommponentWhereUniqueInput
    update: XOR<CommponentUpdateWithoutComponentTypeInput, CommponentUncheckedUpdateWithoutComponentTypeInput>
    create: XOR<CommponentCreateWithoutComponentTypeInput, CommponentUncheckedCreateWithoutComponentTypeInput>
  }

  export type CommponentUpdateWithWhereUniqueWithoutComponentTypeInput = {
    where: CommponentWhereUniqueInput
    data: XOR<CommponentUpdateWithoutComponentTypeInput, CommponentUncheckedUpdateWithoutComponentTypeInput>
  }

  export type CommponentUpdateManyWithWhereWithoutComponentTypeInput = {
    where: CommponentScalarWhereInput
    data: XOR<CommponentUpdateManyMutationInput, CommponentUncheckedUpdateManyWithoutComponentsInput>
  }

  export type CommponentScalarWhereInput = {
    AND?: Enumerable<CommponentScalarWhereInput>
    OR?: Enumerable<CommponentScalarWhereInput>
    NOT?: Enumerable<CommponentScalarWhereInput>
    id?: StringFilter | string
    componentTypeId?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProjectUpsertWithoutComponentTypesInput = {
    update: XOR<ProjectUpdateWithoutComponentTypesInput, ProjectUncheckedUpdateWithoutComponentTypesInput>
    create: XOR<ProjectCreateWithoutComponentTypesInput, ProjectUncheckedCreateWithoutComponentTypesInput>
  }

  export type ProjectUpdateWithoutComponentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateWithoutComponentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutProjectInput
  }

  export type ComponentTypeCreateWithoutComponentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutComponentTypesInput
  }

  export type ComponentTypeUncheckedCreateWithoutComponentsInput = {
    id?: string
    projectId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComponentTypeCreateOrConnectWithoutComponentsInput = {
    where: ComponentTypeWhereUniqueInput
    create: XOR<ComponentTypeCreateWithoutComponentsInput, ComponentTypeUncheckedCreateWithoutComponentsInput>
  }

  export type InstanceCreateWithoutCommponentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutInstanceInput
    relations?: RelationCreateNestedManyWithoutInstanceInput
    connectedTo?: ConnectionCreateNestedManyWithoutToInput
    childOf?: DependantCreateNestedManyWithoutChildInput
  }

  export type InstanceUncheckedCreateWithoutCommponentInput = {
    id?: string
    pageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relations?: RelationUncheckedCreateNestedManyWithoutInstanceInput
    connectedTo?: ConnectionUncheckedCreateNestedManyWithoutToInput
    childOf?: DependantUncheckedCreateNestedManyWithoutChildInput
  }

  export type InstanceCreateOrConnectWithoutCommponentInput = {
    where: InstanceWhereUniqueInput
    create: XOR<InstanceCreateWithoutCommponentInput, InstanceUncheckedCreateWithoutCommponentInput>
  }

  export type InstanceCreateManyCommponentInputEnvelope = {
    data: Enumerable<InstanceCreateManyCommponentInput>
    skipDuplicates?: boolean
  }

  export type ComponentTypeUpsertWithoutComponentsInput = {
    update: XOR<ComponentTypeUpdateWithoutComponentsInput, ComponentTypeUncheckedUpdateWithoutComponentsInput>
    create: XOR<ComponentTypeCreateWithoutComponentsInput, ComponentTypeUncheckedCreateWithoutComponentsInput>
  }

  export type ComponentTypeUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutComponentTypesInput
  }

  export type ComponentTypeUncheckedUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceUpsertWithWhereUniqueWithoutCommponentInput = {
    where: InstanceWhereUniqueInput
    update: XOR<InstanceUpdateWithoutCommponentInput, InstanceUncheckedUpdateWithoutCommponentInput>
    create: XOR<InstanceCreateWithoutCommponentInput, InstanceUncheckedCreateWithoutCommponentInput>
  }

  export type InstanceUpdateWithWhereUniqueWithoutCommponentInput = {
    where: InstanceWhereUniqueInput
    data: XOR<InstanceUpdateWithoutCommponentInput, InstanceUncheckedUpdateWithoutCommponentInput>
  }

  export type InstanceUpdateManyWithWhereWithoutCommponentInput = {
    where: InstanceScalarWhereInput
    data: XOR<InstanceUpdateManyMutationInput, InstanceUncheckedUpdateManyWithoutInstancesInput>
  }

  export type PageCreateWithoutInstanceInput = {
    id?: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPagesInput
  }

  export type PageUncheckedCreateWithoutInstanceInput = {
    id?: string
    projectId: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageCreateOrConnectWithoutInstanceInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutInstanceInput, PageUncheckedCreateWithoutInstanceInput>
  }

  export type CommponentCreateWithoutInstancesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    componentType: ComponentTypeCreateNestedOneWithoutComponentsInput
  }

  export type CommponentUncheckedCreateWithoutInstancesInput = {
    id?: string
    componentTypeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommponentCreateOrConnectWithoutInstancesInput = {
    where: CommponentWhereUniqueInput
    create: XOR<CommponentCreateWithoutInstancesInput, CommponentUncheckedCreateWithoutInstancesInput>
  }

  export type RelationCreateWithoutInstanceInput = {
    id?: string
    relationType: RelationType
    createdAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutRelationInput
    dependants?: DependantCreateNestedManyWithoutRelationInput
  }

  export type RelationUncheckedCreateWithoutInstanceInput = {
    id?: string
    relationType: RelationType
    createdAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutRelationInput
    dependants?: DependantUncheckedCreateNestedManyWithoutRelationInput
  }

  export type RelationCreateOrConnectWithoutInstanceInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutInstanceInput, RelationUncheckedCreateWithoutInstanceInput>
  }

  export type RelationCreateManyInstanceInputEnvelope = {
    data: Enumerable<RelationCreateManyInstanceInput>
    skipDuplicates?: boolean
  }

  export type ConnectionCreateWithoutToInput = {
    id?: string
    createdAt?: Date | string
    relation: RelationCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionUncheckedCreateWithoutToInput = {
    relationId: string
    id?: string
    createdAt?: Date | string
  }

  export type ConnectionCreateOrConnectWithoutToInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutToInput, ConnectionUncheckedCreateWithoutToInput>
  }

  export type ConnectionCreateManyToInputEnvelope = {
    data: Enumerable<ConnectionCreateManyToInput>
    skipDuplicates?: boolean
  }

  export type DependantCreateWithoutChildInput = {
    id?: string
    createdAt?: Date | string
    Relation: RelationCreateNestedOneWithoutDependantsInput
  }

  export type DependantUncheckedCreateWithoutChildInput = {
    relationId: string
    id?: string
    createdAt?: Date | string
  }

  export type DependantCreateOrConnectWithoutChildInput = {
    where: DependantWhereUniqueInput
    create: XOR<DependantCreateWithoutChildInput, DependantUncheckedCreateWithoutChildInput>
  }

  export type DependantCreateManyChildInputEnvelope = {
    data: Enumerable<DependantCreateManyChildInput>
    skipDuplicates?: boolean
  }

  export type PageUpsertWithoutInstanceInput = {
    update: XOR<PageUpdateWithoutInstanceInput, PageUncheckedUpdateWithoutInstanceInput>
    create: XOR<PageCreateWithoutInstanceInput, PageUncheckedCreateWithoutInstanceInput>
  }

  export type PageUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPagesInput
  }

  export type PageUncheckedUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommponentUpsertWithoutInstancesInput = {
    update: XOR<CommponentUpdateWithoutInstancesInput, CommponentUncheckedUpdateWithoutInstancesInput>
    create: XOR<CommponentCreateWithoutInstancesInput, CommponentUncheckedCreateWithoutInstancesInput>
  }

  export type CommponentUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentType?: ComponentTypeUpdateOneRequiredWithoutComponentsInput
  }

  export type CommponentUncheckedUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    componentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationUpsertWithWhereUniqueWithoutInstanceInput = {
    where: RelationWhereUniqueInput
    update: XOR<RelationUpdateWithoutInstanceInput, RelationUncheckedUpdateWithoutInstanceInput>
    create: XOR<RelationCreateWithoutInstanceInput, RelationUncheckedCreateWithoutInstanceInput>
  }

  export type RelationUpdateWithWhereUniqueWithoutInstanceInput = {
    where: RelationWhereUniqueInput
    data: XOR<RelationUpdateWithoutInstanceInput, RelationUncheckedUpdateWithoutInstanceInput>
  }

  export type RelationUpdateManyWithWhereWithoutInstanceInput = {
    where: RelationScalarWhereInput
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyWithoutRelationsInput>
  }

  export type RelationScalarWhereInput = {
    AND?: Enumerable<RelationScalarWhereInput>
    OR?: Enumerable<RelationScalarWhereInput>
    NOT?: Enumerable<RelationScalarWhereInput>
    id?: StringFilter | string
    relationType?: EnumRelationTypeFilter | RelationType
    instanceId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type ConnectionUpsertWithWhereUniqueWithoutToInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutToInput, ConnectionUncheckedUpdateWithoutToInput>
    create: XOR<ConnectionCreateWithoutToInput, ConnectionUncheckedCreateWithoutToInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutToInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutToInput, ConnectionUncheckedUpdateWithoutToInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutToInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutConnectedToInput>
  }

  export type ConnectionScalarWhereInput = {
    AND?: Enumerable<ConnectionScalarWhereInput>
    OR?: Enumerable<ConnectionScalarWhereInput>
    NOT?: Enumerable<ConnectionScalarWhereInput>
    relationId?: StringFilter | string
    id?: StringFilter | string
    toId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type DependantUpsertWithWhereUniqueWithoutChildInput = {
    where: DependantWhereUniqueInput
    update: XOR<DependantUpdateWithoutChildInput, DependantUncheckedUpdateWithoutChildInput>
    create: XOR<DependantCreateWithoutChildInput, DependantUncheckedCreateWithoutChildInput>
  }

  export type DependantUpdateWithWhereUniqueWithoutChildInput = {
    where: DependantWhereUniqueInput
    data: XOR<DependantUpdateWithoutChildInput, DependantUncheckedUpdateWithoutChildInput>
  }

  export type DependantUpdateManyWithWhereWithoutChildInput = {
    where: DependantScalarWhereInput
    data: XOR<DependantUpdateManyMutationInput, DependantUncheckedUpdateManyWithoutChildOfInput>
  }

  export type DependantScalarWhereInput = {
    AND?: Enumerable<DependantScalarWhereInput>
    OR?: Enumerable<DependantScalarWhereInput>
    NOT?: Enumerable<DependantScalarWhereInput>
    relationId?: StringFilter | string
    id?: StringFilter | string
    childId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type ConnectionCreateWithoutRelationInput = {
    id?: string
    createdAt?: Date | string
    to: InstanceCreateNestedOneWithoutConnectedToInput
  }

  export type ConnectionUncheckedCreateWithoutRelationInput = {
    id?: string
    toId: string
    createdAt?: Date | string
  }

  export type ConnectionCreateOrConnectWithoutRelationInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutRelationInput, ConnectionUncheckedCreateWithoutRelationInput>
  }

  export type ConnectionCreateManyRelationInputEnvelope = {
    data: Enumerable<ConnectionCreateManyRelationInput>
    skipDuplicates?: boolean
  }

  export type DependantCreateWithoutRelationInput = {
    id?: string
    createdAt?: Date | string
    child: InstanceCreateNestedOneWithoutChildOfInput
  }

  export type DependantUncheckedCreateWithoutRelationInput = {
    id?: string
    childId: string
    createdAt?: Date | string
  }

  export type DependantCreateOrConnectWithoutRelationInput = {
    where: DependantWhereUniqueInput
    create: XOR<DependantCreateWithoutRelationInput, DependantUncheckedCreateWithoutRelationInput>
  }

  export type DependantCreateManyRelationInputEnvelope = {
    data: Enumerable<DependantCreateManyRelationInput>
    skipDuplicates?: boolean
  }

  export type InstanceCreateWithoutRelationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutInstanceInput
    commponent: CommponentCreateNestedOneWithoutInstancesInput
    connectedTo?: ConnectionCreateNestedManyWithoutToInput
    childOf?: DependantCreateNestedManyWithoutChildInput
  }

  export type InstanceUncheckedCreateWithoutRelationsInput = {
    id?: string
    pageId: string
    componentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedTo?: ConnectionUncheckedCreateNestedManyWithoutToInput
    childOf?: DependantUncheckedCreateNestedManyWithoutChildInput
  }

  export type InstanceCreateOrConnectWithoutRelationsInput = {
    where: InstanceWhereUniqueInput
    create: XOR<InstanceCreateWithoutRelationsInput, InstanceUncheckedCreateWithoutRelationsInput>
  }

  export type ConnectionUpsertWithWhereUniqueWithoutRelationInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutRelationInput, ConnectionUncheckedUpdateWithoutRelationInput>
    create: XOR<ConnectionCreateWithoutRelationInput, ConnectionUncheckedCreateWithoutRelationInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutRelationInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutRelationInput, ConnectionUncheckedUpdateWithoutRelationInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutRelationInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutConnectionsInput>
  }

  export type DependantUpsertWithWhereUniqueWithoutRelationInput = {
    where: DependantWhereUniqueInput
    update: XOR<DependantUpdateWithoutRelationInput, DependantUncheckedUpdateWithoutRelationInput>
    create: XOR<DependantCreateWithoutRelationInput, DependantUncheckedCreateWithoutRelationInput>
  }

  export type DependantUpdateWithWhereUniqueWithoutRelationInput = {
    where: DependantWhereUniqueInput
    data: XOR<DependantUpdateWithoutRelationInput, DependantUncheckedUpdateWithoutRelationInput>
  }

  export type DependantUpdateManyWithWhereWithoutRelationInput = {
    where: DependantScalarWhereInput
    data: XOR<DependantUpdateManyMutationInput, DependantUncheckedUpdateManyWithoutDependantsInput>
  }

  export type InstanceUpsertWithoutRelationsInput = {
    update: XOR<InstanceUpdateWithoutRelationsInput, InstanceUncheckedUpdateWithoutRelationsInput>
    create: XOR<InstanceCreateWithoutRelationsInput, InstanceUncheckedCreateWithoutRelationsInput>
  }

  export type InstanceUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutInstanceInput
    commponent?: CommponentUpdateOneRequiredWithoutInstancesInput
    connectedTo?: ConnectionUpdateManyWithoutToInput
    childOf?: DependantUpdateManyWithoutChildInput
  }

  export type InstanceUncheckedUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedTo?: ConnectionUncheckedUpdateManyWithoutToInput
    childOf?: DependantUncheckedUpdateManyWithoutChildInput
  }

  export type RelationCreateWithoutConnectionsInput = {
    id?: string
    relationType: RelationType
    createdAt?: Date | string
    dependants?: DependantCreateNestedManyWithoutRelationInput
    instance: InstanceCreateNestedOneWithoutRelationsInput
  }

  export type RelationUncheckedCreateWithoutConnectionsInput = {
    id?: string
    relationType: RelationType
    instanceId: string
    createdAt?: Date | string
    dependants?: DependantUncheckedCreateNestedManyWithoutRelationInput
  }

  export type RelationCreateOrConnectWithoutConnectionsInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutConnectionsInput, RelationUncheckedCreateWithoutConnectionsInput>
  }

  export type InstanceCreateWithoutConnectedToInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutInstanceInput
    commponent: CommponentCreateNestedOneWithoutInstancesInput
    relations?: RelationCreateNestedManyWithoutInstanceInput
    childOf?: DependantCreateNestedManyWithoutChildInput
  }

  export type InstanceUncheckedCreateWithoutConnectedToInput = {
    id?: string
    pageId: string
    componentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relations?: RelationUncheckedCreateNestedManyWithoutInstanceInput
    childOf?: DependantUncheckedCreateNestedManyWithoutChildInput
  }

  export type InstanceCreateOrConnectWithoutConnectedToInput = {
    where: InstanceWhereUniqueInput
    create: XOR<InstanceCreateWithoutConnectedToInput, InstanceUncheckedCreateWithoutConnectedToInput>
  }

  export type RelationUpsertWithoutConnectionsInput = {
    update: XOR<RelationUpdateWithoutConnectionsInput, RelationUncheckedUpdateWithoutConnectionsInput>
    create: XOR<RelationCreateWithoutConnectionsInput, RelationUncheckedCreateWithoutConnectionsInput>
  }

  export type RelationUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependants?: DependantUpdateManyWithoutRelationInput
    instance?: InstanceUpdateOneRequiredWithoutRelationsInput
  }

  export type RelationUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    instanceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependants?: DependantUncheckedUpdateManyWithoutRelationInput
  }

  export type InstanceUpsertWithoutConnectedToInput = {
    update: XOR<InstanceUpdateWithoutConnectedToInput, InstanceUncheckedUpdateWithoutConnectedToInput>
    create: XOR<InstanceCreateWithoutConnectedToInput, InstanceUncheckedCreateWithoutConnectedToInput>
  }

  export type InstanceUpdateWithoutConnectedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutInstanceInput
    commponent?: CommponentUpdateOneRequiredWithoutInstancesInput
    relations?: RelationUpdateManyWithoutInstanceInput
    childOf?: DependantUpdateManyWithoutChildInput
  }

  export type InstanceUncheckedUpdateWithoutConnectedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUncheckedUpdateManyWithoutInstanceInput
    childOf?: DependantUncheckedUpdateManyWithoutChildInput
  }

  export type InstanceCreateWithoutChildOfInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutInstanceInput
    commponent: CommponentCreateNestedOneWithoutInstancesInput
    relations?: RelationCreateNestedManyWithoutInstanceInput
    connectedTo?: ConnectionCreateNestedManyWithoutToInput
  }

  export type InstanceUncheckedCreateWithoutChildOfInput = {
    id?: string
    pageId: string
    componentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relations?: RelationUncheckedCreateNestedManyWithoutInstanceInput
    connectedTo?: ConnectionUncheckedCreateNestedManyWithoutToInput
  }

  export type InstanceCreateOrConnectWithoutChildOfInput = {
    where: InstanceWhereUniqueInput
    create: XOR<InstanceCreateWithoutChildOfInput, InstanceUncheckedCreateWithoutChildOfInput>
  }

  export type RelationCreateWithoutDependantsInput = {
    id?: string
    relationType: RelationType
    createdAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutRelationInput
    instance: InstanceCreateNestedOneWithoutRelationsInput
  }

  export type RelationUncheckedCreateWithoutDependantsInput = {
    id?: string
    relationType: RelationType
    instanceId: string
    createdAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutRelationInput
  }

  export type RelationCreateOrConnectWithoutDependantsInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutDependantsInput, RelationUncheckedCreateWithoutDependantsInput>
  }

  export type InstanceUpsertWithoutChildOfInput = {
    update: XOR<InstanceUpdateWithoutChildOfInput, InstanceUncheckedUpdateWithoutChildOfInput>
    create: XOR<InstanceCreateWithoutChildOfInput, InstanceUncheckedCreateWithoutChildOfInput>
  }

  export type InstanceUpdateWithoutChildOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutInstanceInput
    commponent?: CommponentUpdateOneRequiredWithoutInstancesInput
    relations?: RelationUpdateManyWithoutInstanceInput
    connectedTo?: ConnectionUpdateManyWithoutToInput
  }

  export type InstanceUncheckedUpdateWithoutChildOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUncheckedUpdateManyWithoutInstanceInput
    connectedTo?: ConnectionUncheckedUpdateManyWithoutToInput
  }

  export type RelationUpsertWithoutDependantsInput = {
    update: XOR<RelationUpdateWithoutDependantsInput, RelationUncheckedUpdateWithoutDependantsInput>
    create: XOR<RelationCreateWithoutDependantsInput, RelationUncheckedCreateWithoutDependantsInput>
  }

  export type RelationUpdateWithoutDependantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutRelationInput
    instance?: InstanceUpdateOneRequiredWithoutRelationsInput
  }

  export type RelationUncheckedUpdateWithoutDependantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    instanceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutRelationInput
  }

  export type PageCreateManyProjectInput = {
    id?: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComponentTypeCreateManyProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instance?: InstanceUpdateManyWithoutPageInput
  }

  export type PageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instance?: InstanceUncheckedUpdateManyWithoutPageInput
  }

  export type PageUncheckedUpdateManyWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentTypeUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: CommponentUpdateManyWithoutComponentTypeInput
  }

  export type ComponentTypeUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: CommponentUncheckedUpdateManyWithoutComponentTypeInput
  }

  export type ComponentTypeUncheckedUpdateManyWithoutComponentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceCreateManyPageInput = {
    id?: string
    componentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstanceUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commponent?: CommponentUpdateOneRequiredWithoutInstancesInput
    relations?: RelationUpdateManyWithoutInstanceInput
    connectedTo?: ConnectionUpdateManyWithoutToInput
    childOf?: DependantUpdateManyWithoutChildInput
  }

  export type InstanceUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUncheckedUpdateManyWithoutInstanceInput
    connectedTo?: ConnectionUncheckedUpdateManyWithoutToInput
    childOf?: DependantUncheckedUpdateManyWithoutChildInput
  }

  export type InstanceUncheckedUpdateManyWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    componentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommponentCreateManyComponentTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommponentUpdateWithoutComponentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: InstanceUpdateManyWithoutCommponentInput
  }

  export type CommponentUncheckedUpdateWithoutComponentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: InstanceUncheckedUpdateManyWithoutCommponentInput
  }

  export type CommponentUncheckedUpdateManyWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceCreateManyCommponentInput = {
    id?: string
    pageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstanceUpdateWithoutCommponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutInstanceInput
    relations?: RelationUpdateManyWithoutInstanceInput
    connectedTo?: ConnectionUpdateManyWithoutToInput
    childOf?: DependantUpdateManyWithoutChildInput
  }

  export type InstanceUncheckedUpdateWithoutCommponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUncheckedUpdateManyWithoutInstanceInput
    connectedTo?: ConnectionUncheckedUpdateManyWithoutToInput
    childOf?: DependantUncheckedUpdateManyWithoutChildInput
  }

  export type InstanceUncheckedUpdateManyWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationCreateManyInstanceInput = {
    id?: string
    relationType: RelationType
    createdAt?: Date | string
  }

  export type ConnectionCreateManyToInput = {
    relationId: string
    id?: string
    createdAt?: Date | string
  }

  export type DependantCreateManyChildInput = {
    relationId: string
    id?: string
    createdAt?: Date | string
  }

  export type RelationUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutRelationInput
    dependants?: DependantUpdateManyWithoutRelationInput
  }

  export type RelationUncheckedUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutRelationInput
    dependants?: DependantUncheckedUpdateManyWithoutRelationInput
  }

  export type RelationUncheckedUpdateManyWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relation?: RelationUpdateOneRequiredWithoutConnectionsInput
  }

  export type ConnectionUncheckedUpdateWithoutToInput = {
    relationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyWithoutConnectedToInput = {
    relationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Relation?: RelationUpdateOneRequiredWithoutDependantsInput
  }

  export type DependantUncheckedUpdateWithoutChildInput = {
    relationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUncheckedUpdateManyWithoutChildOfInput = {
    relationId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateManyRelationInput = {
    id?: string
    toId: string
    createdAt?: Date | string
  }

  export type DependantCreateManyRelationInput = {
    id?: string
    childId: string
    createdAt?: Date | string
  }

  export type ConnectionUpdateWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: InstanceUpdateOneRequiredWithoutConnectedToInput
  }

  export type ConnectionUncheckedUpdateWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUpdateWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: InstanceUpdateOneRequiredWithoutChildOfInput
  }

  export type DependantUncheckedUpdateWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependantUncheckedUpdateManyWithoutDependantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}