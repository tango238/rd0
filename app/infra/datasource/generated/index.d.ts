
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
 * Model ModelType
 * 
 */
export type ModelType = {
  id: string
  projectId: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Model
 * 
 */
export type Model = {
  id: string
  pageId: string
  modelTypeId: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Connection
 * 
 */
export type Connection = {
  from: string
  to: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Dependency
 * 
 */
export type Dependency = {
  parent: string
  child: string
  createdAt: Date
  updatedAt: Date
}


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
   * `prisma.modelType`: Exposes CRUD operations for the **ModelType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelTypes
    * const modelTypes = await prisma.modelType.findMany()
    * ```
    */
  get modelType(): Prisma.ModelTypeDelegate<GlobalReject>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<GlobalReject>;

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
   * `prisma.dependency`: Exposes CRUD operations for the **Dependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dependencies
    * const dependencies = await prisma.dependency.findMany()
    * ```
    */
  get dependency(): Prisma.DependencyDelegate<GlobalReject>;
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
   * Prisma Client JS version: 3.9.2
   * Query Engine version: bcc2ff906db47790ee902e7bbc76d7ffb1893009
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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


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
    ModelType: 'ModelType',
    Model: 'Model',
    Connection: 'Connection',
    Dependency: 'Dependency'
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
    Page: number
    ModelType: number
  }

  export type ProjectCountOutputTypeSelect = {
    Page?: boolean
    ModelType?: boolean
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
    [P in TrueKeys<S['select']>]: P extends keyof ProjectCountOutputType ?ProjectCountOutputType [P]
  : 
     never
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
    Model: number
  }

  export type PageCountOutputTypeSelect = {
    Model?: boolean
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
    [P in TrueKeys<S['select']>]: P extends keyof PageCountOutputType ?PageCountOutputType [P]
  : 
     never
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
   * Count Type ModelTypeCountOutputType
   */


  export type ModelTypeCountOutputType = {
    Model: number
  }

  export type ModelTypeCountOutputTypeSelect = {
    Model?: boolean
  }

  export type ModelTypeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ModelTypeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ModelTypeCountOutputType
    : S extends undefined
    ? never
    : S extends ModelTypeCountOutputTypeArgs
    ?'include' extends U
    ? ModelTypeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ModelTypeCountOutputType ?ModelTypeCountOutputType [P]
  : 
     never
  } 
    : ModelTypeCountOutputType
  : ModelTypeCountOutputType




  // Custom InputTypes

  /**
   * ModelTypeCountOutputType without action
   */
  export type ModelTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModelTypeCountOutputType
     * 
    **/
    select?: ModelTypeCountOutputTypeSelect | null
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

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Promise<
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
    Page?: boolean | PageFindManyArgs
    ModelType?: boolean | ModelTypeFindManyArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectInclude = {
    Page?: boolean | PageFindManyArgs
    ModelType?: boolean | ModelTypeFindManyArgs
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
          P extends 'Page'
        ? Array < PageGetPayload<S['include'][P]>>  :
        P extends 'ModelType'
        ? Array < ModelTypeGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ProjectCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Project ?Project [P]
  : 
          P extends 'Page'
        ? Array < PageGetPayload<S['select'][P]>>  :
        P extends 'ModelType'
        ? Array < ModelTypeGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ProjectCountOutputTypeGetPayload<S['select'][P]> : never
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Promise<InputErrors>
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

    Page<T extends PageFindManyArgs = {}>(args?: Subset<T, PageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Page>>, PrismaPromise<Array<PageGetPayload<T>>>>;

    ModelType<T extends ModelTypeFindManyArgs = {}>(args?: Subset<T, ModelTypeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModelType>>, PrismaPromise<Array<ModelTypeGetPayload<T>>>>;

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

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Promise<
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
    Model?: boolean | ModelFindManyArgs
    _count?: boolean | PageCountOutputTypeArgs
  }

  export type PageInclude = {
    project?: boolean | ProjectArgs
    Model?: boolean | ModelFindManyArgs
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
          P extends 'project'
        ? ProjectGetPayload<S['include'][P]> :
        P extends 'Model'
        ? Array < ModelGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PageCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Page ?Page [P]
  : 
          P extends 'project'
        ? ProjectGetPayload<S['select'][P]> :
        P extends 'Model'
        ? Array < ModelGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PageCountOutputTypeGetPayload<S['select'][P]> : never
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Promise<InputErrors>
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

    Model<T extends ModelFindManyArgs = {}>(args?: Subset<T, ModelFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Model>>, PrismaPromise<Array<ModelGetPayload<T>>>>;

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
   * Model ModelType
   */


  export type AggregateModelType = {
    _count: ModelTypeCountAggregateOutputType | null
    _min: ModelTypeMinAggregateOutputType | null
    _max: ModelTypeMaxAggregateOutputType | null
  }

  export type ModelTypeMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelTypeMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelTypeCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelTypeMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelTypeMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelTypeCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelTypeAggregateArgs = {
    /**
     * Filter which ModelType to aggregate.
     * 
    **/
    where?: ModelTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ModelTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModelTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelTypes
    **/
    _count?: true | ModelTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelTypeMaxAggregateInputType
  }

  export type GetModelTypeAggregateType<T extends ModelTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateModelType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelType[P]>
      : GetScalarType<T[P], AggregateModelType[P]>
  }




  export type ModelTypeGroupByArgs = {
    where?: ModelTypeWhereInput
    orderBy?: Enumerable<ModelTypeOrderByWithAggregationInput>
    by: Array<ModelTypeScalarFieldEnum>
    having?: ModelTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelTypeCountAggregateInputType | true
    _min?: ModelTypeMinAggregateInputType
    _max?: ModelTypeMaxAggregateInputType
  }


  export type ModelTypeGroupByOutputType = {
    id: string
    projectId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ModelTypeCountAggregateOutputType | null
    _min: ModelTypeMinAggregateOutputType | null
    _max: ModelTypeMaxAggregateOutputType | null
  }

  type GetModelTypeGroupByPayload<T extends ModelTypeGroupByArgs> = Promise<
    Array<
      PickArray<ModelTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ModelTypeGroupByOutputType[P]>
        }
      >
    >


  export type ModelTypeSelect = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Model?: boolean | ModelFindManyArgs
    project?: boolean | ProjectArgs
    _count?: boolean | ModelTypeCountOutputTypeArgs
  }

  export type ModelTypeInclude = {
    Model?: boolean | ModelFindManyArgs
    project?: boolean | ProjectArgs
    _count?: boolean | ModelTypeCountOutputTypeArgs
  }

  export type ModelTypeGetPayload<
    S extends boolean | null | undefined | ModelTypeArgs,
    U = keyof S
      > = S extends true
        ? ModelType
    : S extends undefined
    ? never
    : S extends ModelTypeArgs | ModelTypeFindManyArgs
    ?'include' extends U
    ? ModelType  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Model'
        ? Array < ModelGetPayload<S['include'][P]>>  :
        P extends 'project'
        ? ProjectGetPayload<S['include'][P]> :
        P extends '_count'
        ? ModelTypeCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ModelType ?ModelType [P]
  : 
          P extends 'Model'
        ? Array < ModelGetPayload<S['select'][P]>>  :
        P extends 'project'
        ? ProjectGetPayload<S['select'][P]> :
        P extends '_count'
        ? ModelTypeCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : ModelType
  : ModelType


  type ModelTypeCountArgs = Merge<
    Omit<ModelTypeFindManyArgs, 'select' | 'include'> & {
      select?: ModelTypeCountAggregateInputType | true
    }
  >

  export interface ModelTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModelType that matches the filter.
     * @param {ModelTypeFindUniqueArgs} args - Arguments to find a ModelType
     * @example
     * // Get one ModelType
     * const modelType = await prisma.modelType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModelTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModelTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModelType'> extends True ? CheckSelect<T, Prisma__ModelTypeClient<ModelType>, Prisma__ModelTypeClient<ModelTypeGetPayload<T>>> : CheckSelect<T, Prisma__ModelTypeClient<ModelType | null >, Prisma__ModelTypeClient<ModelTypeGetPayload<T> | null >>

    /**
     * Find the first ModelType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelTypeFindFirstArgs} args - Arguments to find a ModelType
     * @example
     * // Get one ModelType
     * const modelType = await prisma.modelType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModelTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModelTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModelType'> extends True ? CheckSelect<T, Prisma__ModelTypeClient<ModelType>, Prisma__ModelTypeClient<ModelTypeGetPayload<T>>> : CheckSelect<T, Prisma__ModelTypeClient<ModelType | null >, Prisma__ModelTypeClient<ModelTypeGetPayload<T> | null >>

    /**
     * Find zero or more ModelTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelTypes
     * const modelTypes = await prisma.modelType.findMany()
     * 
     * // Get first 10 ModelTypes
     * const modelTypes = await prisma.modelType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelTypeWithIdOnly = await prisma.modelType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModelTypeFindManyArgs>(
      args?: SelectSubset<T, ModelTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModelType>>, PrismaPromise<Array<ModelTypeGetPayload<T>>>>

    /**
     * Create a ModelType.
     * @param {ModelTypeCreateArgs} args - Arguments to create a ModelType.
     * @example
     * // Create one ModelType
     * const ModelType = await prisma.modelType.create({
     *   data: {
     *     // ... data to create a ModelType
     *   }
     * })
     * 
    **/
    create<T extends ModelTypeCreateArgs>(
      args: SelectSubset<T, ModelTypeCreateArgs>
    ): CheckSelect<T, Prisma__ModelTypeClient<ModelType>, Prisma__ModelTypeClient<ModelTypeGetPayload<T>>>

    /**
     * Delete a ModelType.
     * @param {ModelTypeDeleteArgs} args - Arguments to delete one ModelType.
     * @example
     * // Delete one ModelType
     * const ModelType = await prisma.modelType.delete({
     *   where: {
     *     // ... filter to delete one ModelType
     *   }
     * })
     * 
    **/
    delete<T extends ModelTypeDeleteArgs>(
      args: SelectSubset<T, ModelTypeDeleteArgs>
    ): CheckSelect<T, Prisma__ModelTypeClient<ModelType>, Prisma__ModelTypeClient<ModelTypeGetPayload<T>>>

    /**
     * Update one ModelType.
     * @param {ModelTypeUpdateArgs} args - Arguments to update one ModelType.
     * @example
     * // Update one ModelType
     * const modelType = await prisma.modelType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModelTypeUpdateArgs>(
      args: SelectSubset<T, ModelTypeUpdateArgs>
    ): CheckSelect<T, Prisma__ModelTypeClient<ModelType>, Prisma__ModelTypeClient<ModelTypeGetPayload<T>>>

    /**
     * Delete zero or more ModelTypes.
     * @param {ModelTypeDeleteManyArgs} args - Arguments to filter ModelTypes to delete.
     * @example
     * // Delete a few ModelTypes
     * const { count } = await prisma.modelType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModelTypeDeleteManyArgs>(
      args?: SelectSubset<T, ModelTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelTypes
     * const modelType = await prisma.modelType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModelTypeUpdateManyArgs>(
      args: SelectSubset<T, ModelTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModelType.
     * @param {ModelTypeUpsertArgs} args - Arguments to update or create a ModelType.
     * @example
     * // Update or create a ModelType
     * const modelType = await prisma.modelType.upsert({
     *   create: {
     *     // ... data to create a ModelType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelType we want to update
     *   }
     * })
    **/
    upsert<T extends ModelTypeUpsertArgs>(
      args: SelectSubset<T, ModelTypeUpsertArgs>
    ): CheckSelect<T, Prisma__ModelTypeClient<ModelType>, Prisma__ModelTypeClient<ModelTypeGetPayload<T>>>

    /**
     * Count the number of ModelTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelTypeCountArgs} args - Arguments to filter ModelTypes to count.
     * @example
     * // Count the number of ModelTypes
     * const count = await prisma.modelType.count({
     *   where: {
     *     // ... the filter for the ModelTypes we want to count
     *   }
     * })
    **/
    count<T extends ModelTypeCountArgs>(
      args?: Subset<T, ModelTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelTypeAggregateArgs>(args: Subset<T, ModelTypeAggregateArgs>): PrismaPromise<GetModelTypeAggregateType<T>>

    /**
     * Group by ModelType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelTypeGroupByArgs} args - Group by arguments.
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
      T extends ModelTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelTypeGroupByArgs['orderBy'] }
        : { orderBy?: ModelTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelTypeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModelTypeClient<T> implements PrismaPromise<T> {
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

    Model<T extends ModelFindManyArgs = {}>(args?: Subset<T, ModelFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Model>>, PrismaPromise<Array<ModelGetPayload<T>>>>;

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
   * ModelType findUnique
   */
  export type ModelTypeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModelType
     * 
    **/
    select?: ModelTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelTypeInclude | null
    /**
     * Throw an Error if a ModelType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModelType to fetch.
     * 
    **/
    where: ModelTypeWhereUniqueInput
  }


  /**
   * ModelType findFirst
   */
  export type ModelTypeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModelType
     * 
    **/
    select?: ModelTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelTypeInclude | null
    /**
     * Throw an Error if a ModelType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModelType to fetch.
     * 
    **/
    where?: ModelTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ModelTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelTypes.
     * 
    **/
    cursor?: ModelTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelTypes.
     * 
    **/
    distinct?: Enumerable<ModelTypeScalarFieldEnum>
  }


  /**
   * ModelType findMany
   */
  export type ModelTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModelType
     * 
    **/
    select?: ModelTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelTypeInclude | null
    /**
     * Filter, which ModelTypes to fetch.
     * 
    **/
    where?: ModelTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<ModelTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelTypes.
     * 
    **/
    cursor?: ModelTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModelTypeScalarFieldEnum>
  }


  /**
   * ModelType create
   */
  export type ModelTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the ModelType
     * 
    **/
    select?: ModelTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelTypeInclude | null
    /**
     * The data needed to create a ModelType.
     * 
    **/
    data: XOR<ModelTypeCreateInput, ModelTypeUncheckedCreateInput>
  }


  /**
   * ModelType update
   */
  export type ModelTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModelType
     * 
    **/
    select?: ModelTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelTypeInclude | null
    /**
     * The data needed to update a ModelType.
     * 
    **/
    data: XOR<ModelTypeUpdateInput, ModelTypeUncheckedUpdateInput>
    /**
     * Choose, which ModelType to update.
     * 
    **/
    where: ModelTypeWhereUniqueInput
  }


  /**
   * ModelType updateMany
   */
  export type ModelTypeUpdateManyArgs = {
    /**
     * The data used to update ModelTypes.
     * 
    **/
    data: XOR<ModelTypeUpdateManyMutationInput, ModelTypeUncheckedUpdateManyInput>
    /**
     * Filter which ModelTypes to update
     * 
    **/
    where?: ModelTypeWhereInput
  }


  /**
   * ModelType upsert
   */
  export type ModelTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModelType
     * 
    **/
    select?: ModelTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelTypeInclude | null
    /**
     * The filter to search for the ModelType to update in case it exists.
     * 
    **/
    where: ModelTypeWhereUniqueInput
    /**
     * In case the ModelType found by the `where` argument doesn't exist, create a new ModelType with this data.
     * 
    **/
    create: XOR<ModelTypeCreateInput, ModelTypeUncheckedCreateInput>
    /**
     * In case the ModelType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModelTypeUpdateInput, ModelTypeUncheckedUpdateInput>
  }


  /**
   * ModelType delete
   */
  export type ModelTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModelType
     * 
    **/
    select?: ModelTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelTypeInclude | null
    /**
     * Filter which ModelType to delete.
     * 
    **/
    where: ModelTypeWhereUniqueInput
  }


  /**
   * ModelType deleteMany
   */
  export type ModelTypeDeleteManyArgs = {
    /**
     * Filter which ModelTypes to delete
     * 
    **/
    where?: ModelTypeWhereInput
  }


  /**
   * ModelType without action
   */
  export type ModelTypeArgs = {
    /**
     * Select specific fields to fetch from the ModelType
     * 
    **/
    select?: ModelTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelTypeInclude | null
  }



  /**
   * Model Model
   */


  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    modelTypeId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    modelTypeId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    pageId: number
    modelTypeId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelMinAggregateInputType = {
    id?: true
    pageId?: true
    modelTypeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    pageId?: true
    modelTypeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    pageId?: true
    modelTypeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelAggregateArgs = {
    /**
     * Filter which Model to aggregate.
     * 
    **/
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     * 
    **/
    orderBy?: Enumerable<ModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs = {
    where?: ModelWhereInput
    orderBy?: Enumerable<ModelOrderByWithAggregationInput>
    by: Array<ModelScalarFieldEnum>
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }


  export type ModelGroupByOutputType = {
    id: string
    pageId: string
    modelTypeId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ModelCountAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Promise<
    Array<
      PickArray<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect = {
    id?: boolean
    pageId?: boolean
    modelTypeId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageArgs
    modelType?: boolean | ModelTypeArgs
  }

  export type ModelInclude = {
    page?: boolean | PageArgs
    modelType?: boolean | ModelTypeArgs
  }

  export type ModelGetPayload<
    S extends boolean | null | undefined | ModelArgs,
    U = keyof S
      > = S extends true
        ? Model
    : S extends undefined
    ? never
    : S extends ModelArgs | ModelFindManyArgs
    ?'include' extends U
    ? Model  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'page'
        ? PageGetPayload<S['include'][P]> :
        P extends 'modelType'
        ? ModelTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Model ?Model [P]
  : 
          P extends 'page'
        ? PageGetPayload<S['select'][P]> :
        P extends 'modelType'
        ? ModelTypeGetPayload<S['select'][P]> : never
  } 
    : Model
  : Model


  type ModelCountArgs = Merge<
    Omit<ModelFindManyArgs, 'select' | 'include'> & {
      select?: ModelCountAggregateInputType | true
    }
  >

  export interface ModelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Model'> extends True ? CheckSelect<T, Prisma__ModelClient<Model>, Prisma__ModelClient<ModelGetPayload<T>>> : CheckSelect<T, Prisma__ModelClient<Model | null >, Prisma__ModelClient<ModelGetPayload<T> | null >>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Model'> extends True ? CheckSelect<T, Prisma__ModelClient<Model>, Prisma__ModelClient<ModelGetPayload<T>>> : CheckSelect<T, Prisma__ModelClient<Model | null >, Prisma__ModelClient<ModelGetPayload<T> | null >>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModelFindManyArgs>(
      args?: SelectSubset<T, ModelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Model>>, PrismaPromise<Array<ModelGetPayload<T>>>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
    **/
    create<T extends ModelCreateArgs>(
      args: SelectSubset<T, ModelCreateArgs>
    ): CheckSelect<T, Prisma__ModelClient<Model>, Prisma__ModelClient<ModelGetPayload<T>>>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
    **/
    delete<T extends ModelDeleteArgs>(
      args: SelectSubset<T, ModelDeleteArgs>
    ): CheckSelect<T, Prisma__ModelClient<Model>, Prisma__ModelClient<ModelGetPayload<T>>>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModelUpdateArgs>(
      args: SelectSubset<T, ModelUpdateArgs>
    ): CheckSelect<T, Prisma__ModelClient<Model>, Prisma__ModelClient<ModelGetPayload<T>>>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModelDeleteManyArgs>(
      args?: SelectSubset<T, ModelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModelUpdateManyArgs>(
      args: SelectSubset<T, ModelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
    **/
    upsert<T extends ModelUpsertArgs>(
      args: SelectSubset<T, ModelUpsertArgs>
    ): CheckSelect<T, Prisma__ModelClient<Model>, Prisma__ModelClient<ModelGetPayload<T>>>

    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
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
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModelClient<T> implements PrismaPromise<T> {
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

    modelType<T extends ModelTypeArgs = {}>(args?: Subset<T, ModelTypeArgs>): CheckSelect<T, Prisma__ModelTypeClient<ModelType | null >, Prisma__ModelTypeClient<ModelTypeGetPayload<T> | null >>;

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
   * Model findUnique
   */
  export type ModelFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Model
     * 
    **/
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelInclude | null
    /**
     * Throw an Error if a Model can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Model to fetch.
     * 
    **/
    where: ModelWhereUniqueInput
  }


  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Model
     * 
    **/
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelInclude | null
    /**
     * Throw an Error if a Model can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Model to fetch.
     * 
    **/
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     * 
    **/
    orderBy?: Enumerable<ModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     * 
    **/
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     * 
    **/
    distinct?: Enumerable<ModelScalarFieldEnum>
  }


  /**
   * Model findMany
   */
  export type ModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the Model
     * 
    **/
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelInclude | null
    /**
     * Filter, which Models to fetch.
     * 
    **/
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     * 
    **/
    orderBy?: Enumerable<ModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     * 
    **/
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModelScalarFieldEnum>
  }


  /**
   * Model create
   */
  export type ModelCreateArgs = {
    /**
     * Select specific fields to fetch from the Model
     * 
    **/
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelInclude | null
    /**
     * The data needed to create a Model.
     * 
    **/
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }


  /**
   * Model update
   */
  export type ModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the Model
     * 
    **/
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelInclude | null
    /**
     * The data needed to update a Model.
     * 
    **/
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     * 
    **/
    where: ModelWhereUniqueInput
  }


  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs = {
    /**
     * The data used to update Models.
     * 
    **/
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     * 
    **/
    where?: ModelWhereInput
  }


  /**
   * Model upsert
   */
  export type ModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the Model
     * 
    **/
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelInclude | null
    /**
     * The filter to search for the Model to update in case it exists.
     * 
    **/
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     * 
    **/
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }


  /**
   * Model delete
   */
  export type ModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the Model
     * 
    **/
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelInclude | null
    /**
     * Filter which Model to delete.
     * 
    **/
    where: ModelWhereUniqueInput
  }


  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs = {
    /**
     * Filter which Models to delete
     * 
    **/
    where?: ModelWhereInput
  }


  /**
   * Model without action
   */
  export type ModelArgs = {
    /**
     * Select specific fields to fetch from the Model
     * 
    **/
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModelInclude | null
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
    from: string | null
    to: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionMaxAggregateOutputType = {
    from: string | null
    to: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionCountAggregateOutputType = {
    from: number
    to: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConnectionMinAggregateInputType = {
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionMaxAggregateInputType = {
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionCountAggregateInputType = {
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
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
    from: string
    to: string
    createdAt: Date
    updatedAt: Date
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = Promise<
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
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
    ? Connection 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Connection ?Connection [P]
  : 
     never
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
     * // Only select the `from`
     * const connectionWithFromOnly = await prisma.connection.findMany({ select: { from: true } })
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
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Promise<InputErrors>
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
     * The data needed to create a Connection.
     * 
    **/
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
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
  }



  /**
   * Model Dependency
   */


  export type AggregateDependency = {
    _count: DependencyCountAggregateOutputType | null
    _min: DependencyMinAggregateOutputType | null
    _max: DependencyMaxAggregateOutputType | null
  }

  export type DependencyMinAggregateOutputType = {
    parent: string | null
    child: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DependencyMaxAggregateOutputType = {
    parent: string | null
    child: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DependencyCountAggregateOutputType = {
    parent: number
    child: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DependencyMinAggregateInputType = {
    parent?: true
    child?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DependencyMaxAggregateInputType = {
    parent?: true
    child?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DependencyCountAggregateInputType = {
    parent?: true
    child?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DependencyAggregateArgs = {
    /**
     * Filter which Dependency to aggregate.
     * 
    **/
    where?: DependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependencies to fetch.
     * 
    **/
    orderBy?: Enumerable<DependencyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependencies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependencies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dependencies
    **/
    _count?: true | DependencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependencyMaxAggregateInputType
  }

  export type GetDependencyAggregateType<T extends DependencyAggregateArgs> = {
        [P in keyof T & keyof AggregateDependency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependency[P]>
      : GetScalarType<T[P], AggregateDependency[P]>
  }




  export type DependencyGroupByArgs = {
    where?: DependencyWhereInput
    orderBy?: Enumerable<DependencyOrderByWithAggregationInput>
    by: Array<DependencyScalarFieldEnum>
    having?: DependencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependencyCountAggregateInputType | true
    _min?: DependencyMinAggregateInputType
    _max?: DependencyMaxAggregateInputType
  }


  export type DependencyGroupByOutputType = {
    parent: string
    child: string
    createdAt: Date
    updatedAt: Date
    _count: DependencyCountAggregateOutputType | null
    _min: DependencyMinAggregateOutputType | null
    _max: DependencyMaxAggregateOutputType | null
  }

  type GetDependencyGroupByPayload<T extends DependencyGroupByArgs> = Promise<
    Array<
      PickArray<DependencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependencyGroupByOutputType[P]>
            : GetScalarType<T[P], DependencyGroupByOutputType[P]>
        }
      >
    >


  export type DependencySelect = {
    parent?: boolean
    child?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DependencyGetPayload<
    S extends boolean | null | undefined | DependencyArgs,
    U = keyof S
      > = S extends true
        ? Dependency
    : S extends undefined
    ? never
    : S extends DependencyArgs | DependencyFindManyArgs
    ?'include' extends U
    ? Dependency 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Dependency ?Dependency [P]
  : 
     never
  } 
    : Dependency
  : Dependency


  type DependencyCountArgs = Merge<
    Omit<DependencyFindManyArgs, 'select' | 'include'> & {
      select?: DependencyCountAggregateInputType | true
    }
  >

  export interface DependencyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dependency that matches the filter.
     * @param {DependencyFindUniqueArgs} args - Arguments to find a Dependency
     * @example
     * // Get one Dependency
     * const dependency = await prisma.dependency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DependencyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DependencyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dependency'> extends True ? CheckSelect<T, Prisma__DependencyClient<Dependency>, Prisma__DependencyClient<DependencyGetPayload<T>>> : CheckSelect<T, Prisma__DependencyClient<Dependency | null >, Prisma__DependencyClient<DependencyGetPayload<T> | null >>

    /**
     * Find the first Dependency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependencyFindFirstArgs} args - Arguments to find a Dependency
     * @example
     * // Get one Dependency
     * const dependency = await prisma.dependency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DependencyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DependencyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dependency'> extends True ? CheckSelect<T, Prisma__DependencyClient<Dependency>, Prisma__DependencyClient<DependencyGetPayload<T>>> : CheckSelect<T, Prisma__DependencyClient<Dependency | null >, Prisma__DependencyClient<DependencyGetPayload<T> | null >>

    /**
     * Find zero or more Dependencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dependencies
     * const dependencies = await prisma.dependency.findMany()
     * 
     * // Get first 10 Dependencies
     * const dependencies = await prisma.dependency.findMany({ take: 10 })
     * 
     * // Only select the `parent`
     * const dependencyWithParentOnly = await prisma.dependency.findMany({ select: { parent: true } })
     * 
    **/
    findMany<T extends DependencyFindManyArgs>(
      args?: SelectSubset<T, DependencyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dependency>>, PrismaPromise<Array<DependencyGetPayload<T>>>>

    /**
     * Create a Dependency.
     * @param {DependencyCreateArgs} args - Arguments to create a Dependency.
     * @example
     * // Create one Dependency
     * const Dependency = await prisma.dependency.create({
     *   data: {
     *     // ... data to create a Dependency
     *   }
     * })
     * 
    **/
    create<T extends DependencyCreateArgs>(
      args: SelectSubset<T, DependencyCreateArgs>
    ): CheckSelect<T, Prisma__DependencyClient<Dependency>, Prisma__DependencyClient<DependencyGetPayload<T>>>

    /**
     * Delete a Dependency.
     * @param {DependencyDeleteArgs} args - Arguments to delete one Dependency.
     * @example
     * // Delete one Dependency
     * const Dependency = await prisma.dependency.delete({
     *   where: {
     *     // ... filter to delete one Dependency
     *   }
     * })
     * 
    **/
    delete<T extends DependencyDeleteArgs>(
      args: SelectSubset<T, DependencyDeleteArgs>
    ): CheckSelect<T, Prisma__DependencyClient<Dependency>, Prisma__DependencyClient<DependencyGetPayload<T>>>

    /**
     * Update one Dependency.
     * @param {DependencyUpdateArgs} args - Arguments to update one Dependency.
     * @example
     * // Update one Dependency
     * const dependency = await prisma.dependency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DependencyUpdateArgs>(
      args: SelectSubset<T, DependencyUpdateArgs>
    ): CheckSelect<T, Prisma__DependencyClient<Dependency>, Prisma__DependencyClient<DependencyGetPayload<T>>>

    /**
     * Delete zero or more Dependencies.
     * @param {DependencyDeleteManyArgs} args - Arguments to filter Dependencies to delete.
     * @example
     * // Delete a few Dependencies
     * const { count } = await prisma.dependency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DependencyDeleteManyArgs>(
      args?: SelectSubset<T, DependencyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dependencies
     * const dependency = await prisma.dependency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DependencyUpdateManyArgs>(
      args: SelectSubset<T, DependencyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dependency.
     * @param {DependencyUpsertArgs} args - Arguments to update or create a Dependency.
     * @example
     * // Update or create a Dependency
     * const dependency = await prisma.dependency.upsert({
     *   create: {
     *     // ... data to create a Dependency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dependency we want to update
     *   }
     * })
    **/
    upsert<T extends DependencyUpsertArgs>(
      args: SelectSubset<T, DependencyUpsertArgs>
    ): CheckSelect<T, Prisma__DependencyClient<Dependency>, Prisma__DependencyClient<DependencyGetPayload<T>>>

    /**
     * Count the number of Dependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependencyCountArgs} args - Arguments to filter Dependencies to count.
     * @example
     * // Count the number of Dependencies
     * const count = await prisma.dependency.count({
     *   where: {
     *     // ... the filter for the Dependencies we want to count
     *   }
     * })
    **/
    count<T extends DependencyCountArgs>(
      args?: Subset<T, DependencyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DependencyAggregateArgs>(args: Subset<T, DependencyAggregateArgs>): PrismaPromise<GetDependencyAggregateType<T>>

    /**
     * Group by Dependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependencyGroupByArgs} args - Group by arguments.
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
      T extends DependencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DependencyGroupByArgs['orderBy'] }
        : { orderBy?: DependencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DependencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependencyGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dependency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DependencyClient<T> implements PrismaPromise<T> {
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
   * Dependency findUnique
   */
  export type DependencyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Dependency
     * 
    **/
    select?: DependencySelect | null
    /**
     * Throw an Error if a Dependency can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dependency to fetch.
     * 
    **/
    where: DependencyWhereUniqueInput
  }


  /**
   * Dependency findFirst
   */
  export type DependencyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Dependency
     * 
    **/
    select?: DependencySelect | null
    /**
     * Throw an Error if a Dependency can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dependency to fetch.
     * 
    **/
    where?: DependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependencies to fetch.
     * 
    **/
    orderBy?: Enumerable<DependencyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependencies.
     * 
    **/
    cursor?: DependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependencies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependencies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependencies.
     * 
    **/
    distinct?: Enumerable<DependencyScalarFieldEnum>
  }


  /**
   * Dependency findMany
   */
  export type DependencyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dependency
     * 
    **/
    select?: DependencySelect | null
    /**
     * Filter, which Dependencies to fetch.
     * 
    **/
    where?: DependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependencies to fetch.
     * 
    **/
    orderBy?: Enumerable<DependencyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dependencies.
     * 
    **/
    cursor?: DependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependencies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependencies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DependencyScalarFieldEnum>
  }


  /**
   * Dependency create
   */
  export type DependencyCreateArgs = {
    /**
     * Select specific fields to fetch from the Dependency
     * 
    **/
    select?: DependencySelect | null
    /**
     * The data needed to create a Dependency.
     * 
    **/
    data: XOR<DependencyCreateInput, DependencyUncheckedCreateInput>
  }


  /**
   * Dependency update
   */
  export type DependencyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dependency
     * 
    **/
    select?: DependencySelect | null
    /**
     * The data needed to update a Dependency.
     * 
    **/
    data: XOR<DependencyUpdateInput, DependencyUncheckedUpdateInput>
    /**
     * Choose, which Dependency to update.
     * 
    **/
    where: DependencyWhereUniqueInput
  }


  /**
   * Dependency updateMany
   */
  export type DependencyUpdateManyArgs = {
    /**
     * The data used to update Dependencies.
     * 
    **/
    data: XOR<DependencyUpdateManyMutationInput, DependencyUncheckedUpdateManyInput>
    /**
     * Filter which Dependencies to update
     * 
    **/
    where?: DependencyWhereInput
  }


  /**
   * Dependency upsert
   */
  export type DependencyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dependency
     * 
    **/
    select?: DependencySelect | null
    /**
     * The filter to search for the Dependency to update in case it exists.
     * 
    **/
    where: DependencyWhereUniqueInput
    /**
     * In case the Dependency found by the `where` argument doesn't exist, create a new Dependency with this data.
     * 
    **/
    create: XOR<DependencyCreateInput, DependencyUncheckedCreateInput>
    /**
     * In case the Dependency was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DependencyUpdateInput, DependencyUncheckedUpdateInput>
  }


  /**
   * Dependency delete
   */
  export type DependencyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dependency
     * 
    **/
    select?: DependencySelect | null
    /**
     * Filter which Dependency to delete.
     * 
    **/
    where: DependencyWhereUniqueInput
  }


  /**
   * Dependency deleteMany
   */
  export type DependencyDeleteManyArgs = {
    /**
     * Filter which Dependencies to delete
     * 
    **/
    where?: DependencyWhereInput
  }


  /**
   * Dependency without action
   */
  export type DependencyArgs = {
    /**
     * Select specific fields to fetch from the Dependency
     * 
    **/
    select?: DependencySelect | null
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


  export const ModelTypeScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelTypeScalarFieldEnum = (typeof ModelTypeScalarFieldEnum)[keyof typeof ModelTypeScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    modelTypeId: 'modelTypeId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    from: 'from',
    to: 'to',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const DependencyScalarFieldEnum: {
    parent: 'parent',
    child: 'child',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DependencyScalarFieldEnum = (typeof DependencyScalarFieldEnum)[keyof typeof DependencyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
    Page?: PageListRelationFilter
    ModelType?: ModelTypeListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Page?: PageOrderByRelationAggregateInput
    ModelType?: ModelTypeOrderByRelationAggregateInput
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
    Model?: ModelListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    level?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    Model?: ModelOrderByRelationAggregateInput
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

  export type ModelTypeWhereInput = {
    AND?: Enumerable<ModelTypeWhereInput>
    OR?: Enumerable<ModelTypeWhereInput>
    NOT?: Enumerable<ModelTypeWhereInput>
    id?: StringFilter | string
    projectId?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Model?: ModelListRelationFilter
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ModelTypeOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Model?: ModelOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ModelTypeWhereUniqueInput = {
    id?: string
  }

  export type ModelTypeOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelTypeCountOrderByAggregateInput
    _max?: ModelTypeMaxOrderByAggregateInput
    _min?: ModelTypeMinOrderByAggregateInput
  }

  export type ModelTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModelTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModelTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModelTypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    projectId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ModelWhereInput = {
    AND?: Enumerable<ModelWhereInput>
    OR?: Enumerable<ModelWhereInput>
    NOT?: Enumerable<ModelWhereInput>
    id?: StringFilter | string
    pageId?: StringFilter | string
    modelTypeId?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    page?: XOR<PageRelationFilter, PageWhereInput>
    modelType?: XOR<ModelTypeRelationFilter, ModelTypeWhereInput>
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    modelTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    page?: PageOrderByWithRelationInput
    modelType?: ModelTypeOrderByWithRelationInput
  }

  export type ModelWhereUniqueInput = {
    id?: string
  }

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    modelTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    pageId?: StringWithAggregatesFilter | string
    modelTypeId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ConnectionWhereInput = {
    AND?: Enumerable<ConnectionWhereInput>
    OR?: Enumerable<ConnectionWhereInput>
    NOT?: Enumerable<ConnectionWhereInput>
    from?: StringFilter | string
    to?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ConnectionOrderByWithRelationInput = {
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionWhereUniqueInput = {
    from_to?: ConnectionFromToCompoundUniqueInput
  }

  export type ConnectionOrderByWithAggregationInput = {
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ConnectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ConnectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ConnectionScalarWhereWithAggregatesInput>
    from?: StringWithAggregatesFilter | string
    to?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DependencyWhereInput = {
    AND?: Enumerable<DependencyWhereInput>
    OR?: Enumerable<DependencyWhereInput>
    NOT?: Enumerable<DependencyWhereInput>
    parent?: StringFilter | string
    child?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DependencyOrderByWithRelationInput = {
    parent?: SortOrder
    child?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependencyWhereUniqueInput = {
    parent_child?: DependencyParentChildCompoundUniqueInput
  }

  export type DependencyOrderByWithAggregationInput = {
    parent?: SortOrder
    child?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DependencyCountOrderByAggregateInput
    _max?: DependencyMaxOrderByAggregateInput
    _min?: DependencyMinOrderByAggregateInput
  }

  export type DependencyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DependencyScalarWhereWithAggregatesInput>
    OR?: Enumerable<DependencyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DependencyScalarWhereWithAggregatesInput>
    parent?: StringWithAggregatesFilter | string
    child?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Page?: PageCreateNestedManyWithoutProjectInput
    ModelType?: ModelTypeCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Page?: PageUncheckedCreateNestedManyWithoutProjectInput
    ModelType?: ModelTypeUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Page?: PageUpdateManyWithoutProjectInput
    ModelType?: ModelTypeUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Page?: PageUncheckedUpdateManyWithoutProjectInput
    ModelType?: ModelTypeUncheckedUpdateManyWithoutProjectInput
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
    project: ProjectCreateNestedOneWithoutPageInput
    Model?: ModelCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    projectId: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPageInput
    Model?: ModelUpdateManyWithoutPageInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUncheckedUpdateManyWithoutPageInput
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

  export type ModelTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelCreateNestedManyWithoutModelTypeInput
    project: ProjectCreateNestedOneWithoutModelTypeInput
  }

  export type ModelTypeUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelUncheckedCreateNestedManyWithoutModelTypeInput
  }

  export type ModelTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUpdateManyWithoutModelTypeInput
    project?: ProjectUpdateOneRequiredWithoutModelTypeInput
  }

  export type ModelTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUncheckedUpdateManyWithoutModelTypeInput
  }

  export type ModelTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutModelInput
    modelType: ModelTypeCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: string
    pageId: string
    modelTypeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutModelInput
    modelType?: ModelTypeUpdateOneRequiredWithoutModelInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    modelTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    modelTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateInput = {
    from: string
    to: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionUncheckedCreateInput = {
    from: string
    to: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionUpdateInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUpdateManyMutationInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependencyCreateInput = {
    parent: string
    child: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DependencyUncheckedCreateInput = {
    parent: string
    child: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DependencyUpdateInput = {
    parent?: StringFieldUpdateOperationsInput | string
    child?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependencyUncheckedUpdateInput = {
    parent?: StringFieldUpdateOperationsInput | string
    child?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependencyUpdateManyMutationInput = {
    parent?: StringFieldUpdateOperationsInput | string
    child?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependencyUncheckedUpdateManyInput = {
    parent?: StringFieldUpdateOperationsInput | string
    child?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ModelTypeListRelationFilter = {
    every?: ModelTypeWhereInput
    some?: ModelTypeWhereInput
    none?: ModelTypeWhereInput
  }

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelTypeOrderByRelationAggregateInput = {
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

  export type ModelListRelationFilter = {
    every?: ModelWhereInput
    some?: ModelWhereInput
    none?: ModelWhereInput
  }

  export type ModelOrderByRelationAggregateInput = {
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

  export type ModelTypeCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelTypeMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type ModelTypeRelationFilter = {
    is?: ModelTypeWhereInput
    isNot?: ModelTypeWhereInput
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    modelTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    modelTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    modelTypeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionFromToCompoundUniqueInput = {
    from: string
    to: string
  }

  export type ConnectionCountOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependencyParentChildCompoundUniqueInput = {
    parent: string
    child: string
  }

  export type DependencyCountOrderByAggregateInput = {
    parent?: SortOrder
    child?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependencyMaxOrderByAggregateInput = {
    parent?: SortOrder
    child?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependencyMinOrderByAggregateInput = {
    parent?: SortOrder
    child?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<PageCreateWithoutProjectInput>, Enumerable<PageUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<PageWhereUniqueInput>
  }

  export type ModelTypeCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ModelTypeCreateWithoutProjectInput>, Enumerable<ModelTypeUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ModelTypeCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<ModelTypeWhereUniqueInput>
  }

  export type PageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<PageCreateWithoutProjectInput>, Enumerable<PageUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<PageWhereUniqueInput>
  }

  export type ModelTypeUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ModelTypeCreateWithoutProjectInput>, Enumerable<ModelTypeUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ModelTypeCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<ModelTypeWhereUniqueInput>
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
    set?: Enumerable<PageWhereUniqueInput>
    disconnect?: Enumerable<PageWhereUniqueInput>
    delete?: Enumerable<PageWhereUniqueInput>
    connect?: Enumerable<PageWhereUniqueInput>
    update?: Enumerable<PageUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<PageUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<PageScalarWhereInput>
  }

  export type ModelTypeUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<ModelTypeCreateWithoutProjectInput>, Enumerable<ModelTypeUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ModelTypeCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ModelTypeUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<ModelTypeWhereUniqueInput>
    disconnect?: Enumerable<ModelTypeWhereUniqueInput>
    delete?: Enumerable<ModelTypeWhereUniqueInput>
    connect?: Enumerable<ModelTypeWhereUniqueInput>
    update?: Enumerable<ModelTypeUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ModelTypeUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ModelTypeScalarWhereInput>
  }

  export type PageUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<PageCreateWithoutProjectInput>, Enumerable<PageUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<PageUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<PageWhereUniqueInput>
    disconnect?: Enumerable<PageWhereUniqueInput>
    delete?: Enumerable<PageWhereUniqueInput>
    connect?: Enumerable<PageWhereUniqueInput>
    update?: Enumerable<PageUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<PageUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<PageScalarWhereInput>
  }

  export type ModelTypeUncheckedUpdateManyWithoutProjectInput = {
    create?: XOR<Enumerable<ModelTypeCreateWithoutProjectInput>, Enumerable<ModelTypeUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ModelTypeCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ModelTypeUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<ModelTypeWhereUniqueInput>
    disconnect?: Enumerable<ModelTypeWhereUniqueInput>
    delete?: Enumerable<ModelTypeWhereUniqueInput>
    connect?: Enumerable<ModelTypeWhereUniqueInput>
    update?: Enumerable<ModelTypeUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ModelTypeUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ModelTypeScalarWhereInput>
  }

  export type ProjectCreateNestedOneWithoutPageInput = {
    create?: XOR<ProjectCreateWithoutPageInput, ProjectUncheckedCreateWithoutPageInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPageInput
    connect?: ProjectWhereUniqueInput
  }

  export type ModelCreateNestedManyWithoutPageInput = {
    create?: XOR<Enumerable<ModelCreateWithoutPageInput>, Enumerable<ModelUncheckedCreateWithoutPageInput>>
    connectOrCreate?: Enumerable<ModelCreateOrConnectWithoutPageInput>
    connect?: Enumerable<ModelWhereUniqueInput>
  }

  export type ModelUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<Enumerable<ModelCreateWithoutPageInput>, Enumerable<ModelUncheckedCreateWithoutPageInput>>
    connectOrCreate?: Enumerable<ModelCreateOrConnectWithoutPageInput>
    connect?: Enumerable<ModelWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutPageInput = {
    create?: XOR<ProjectCreateWithoutPageInput, ProjectUncheckedCreateWithoutPageInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPageInput
    upsert?: ProjectUpsertWithoutPageInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutPageInput, ProjectUncheckedUpdateWithoutPageInput>
  }

  export type ModelUpdateManyWithoutPageInput = {
    create?: XOR<Enumerable<ModelCreateWithoutPageInput>, Enumerable<ModelUncheckedCreateWithoutPageInput>>
    connectOrCreate?: Enumerable<ModelCreateOrConnectWithoutPageInput>
    upsert?: Enumerable<ModelUpsertWithWhereUniqueWithoutPageInput>
    set?: Enumerable<ModelWhereUniqueInput>
    disconnect?: Enumerable<ModelWhereUniqueInput>
    delete?: Enumerable<ModelWhereUniqueInput>
    connect?: Enumerable<ModelWhereUniqueInput>
    update?: Enumerable<ModelUpdateWithWhereUniqueWithoutPageInput>
    updateMany?: Enumerable<ModelUpdateManyWithWhereWithoutPageInput>
    deleteMany?: Enumerable<ModelScalarWhereInput>
  }

  export type ModelUncheckedUpdateManyWithoutPageInput = {
    create?: XOR<Enumerable<ModelCreateWithoutPageInput>, Enumerable<ModelUncheckedCreateWithoutPageInput>>
    connectOrCreate?: Enumerable<ModelCreateOrConnectWithoutPageInput>
    upsert?: Enumerable<ModelUpsertWithWhereUniqueWithoutPageInput>
    set?: Enumerable<ModelWhereUniqueInput>
    disconnect?: Enumerable<ModelWhereUniqueInput>
    delete?: Enumerable<ModelWhereUniqueInput>
    connect?: Enumerable<ModelWhereUniqueInput>
    update?: Enumerable<ModelUpdateWithWhereUniqueWithoutPageInput>
    updateMany?: Enumerable<ModelUpdateManyWithWhereWithoutPageInput>
    deleteMany?: Enumerable<ModelScalarWhereInput>
  }

  export type ModelCreateNestedManyWithoutModelTypeInput = {
    create?: XOR<Enumerable<ModelCreateWithoutModelTypeInput>, Enumerable<ModelUncheckedCreateWithoutModelTypeInput>>
    connectOrCreate?: Enumerable<ModelCreateOrConnectWithoutModelTypeInput>
    connect?: Enumerable<ModelWhereUniqueInput>
  }

  export type ProjectCreateNestedOneWithoutModelTypeInput = {
    create?: XOR<ProjectCreateWithoutModelTypeInput, ProjectUncheckedCreateWithoutModelTypeInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutModelTypeInput
    connect?: ProjectWhereUniqueInput
  }

  export type ModelUncheckedCreateNestedManyWithoutModelTypeInput = {
    create?: XOR<Enumerable<ModelCreateWithoutModelTypeInput>, Enumerable<ModelUncheckedCreateWithoutModelTypeInput>>
    connectOrCreate?: Enumerable<ModelCreateOrConnectWithoutModelTypeInput>
    connect?: Enumerable<ModelWhereUniqueInput>
  }

  export type ModelUpdateManyWithoutModelTypeInput = {
    create?: XOR<Enumerable<ModelCreateWithoutModelTypeInput>, Enumerable<ModelUncheckedCreateWithoutModelTypeInput>>
    connectOrCreate?: Enumerable<ModelCreateOrConnectWithoutModelTypeInput>
    upsert?: Enumerable<ModelUpsertWithWhereUniqueWithoutModelTypeInput>
    set?: Enumerable<ModelWhereUniqueInput>
    disconnect?: Enumerable<ModelWhereUniqueInput>
    delete?: Enumerable<ModelWhereUniqueInput>
    connect?: Enumerable<ModelWhereUniqueInput>
    update?: Enumerable<ModelUpdateWithWhereUniqueWithoutModelTypeInput>
    updateMany?: Enumerable<ModelUpdateManyWithWhereWithoutModelTypeInput>
    deleteMany?: Enumerable<ModelScalarWhereInput>
  }

  export type ProjectUpdateOneRequiredWithoutModelTypeInput = {
    create?: XOR<ProjectCreateWithoutModelTypeInput, ProjectUncheckedCreateWithoutModelTypeInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutModelTypeInput
    upsert?: ProjectUpsertWithoutModelTypeInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutModelTypeInput, ProjectUncheckedUpdateWithoutModelTypeInput>
  }

  export type ModelUncheckedUpdateManyWithoutModelTypeInput = {
    create?: XOR<Enumerable<ModelCreateWithoutModelTypeInput>, Enumerable<ModelUncheckedCreateWithoutModelTypeInput>>
    connectOrCreate?: Enumerable<ModelCreateOrConnectWithoutModelTypeInput>
    upsert?: Enumerable<ModelUpsertWithWhereUniqueWithoutModelTypeInput>
    set?: Enumerable<ModelWhereUniqueInput>
    disconnect?: Enumerable<ModelWhereUniqueInput>
    delete?: Enumerable<ModelWhereUniqueInput>
    connect?: Enumerable<ModelWhereUniqueInput>
    update?: Enumerable<ModelUpdateWithWhereUniqueWithoutModelTypeInput>
    updateMany?: Enumerable<ModelUpdateManyWithWhereWithoutModelTypeInput>
    deleteMany?: Enumerable<ModelScalarWhereInput>
  }

  export type PageCreateNestedOneWithoutModelInput = {
    create?: XOR<PageCreateWithoutModelInput, PageUncheckedCreateWithoutModelInput>
    connectOrCreate?: PageCreateOrConnectWithoutModelInput
    connect?: PageWhereUniqueInput
  }

  export type ModelTypeCreateNestedOneWithoutModelInput = {
    create?: XOR<ModelTypeCreateWithoutModelInput, ModelTypeUncheckedCreateWithoutModelInput>
    connectOrCreate?: ModelTypeCreateOrConnectWithoutModelInput
    connect?: ModelTypeWhereUniqueInput
  }

  export type PageUpdateOneRequiredWithoutModelInput = {
    create?: XOR<PageCreateWithoutModelInput, PageUncheckedCreateWithoutModelInput>
    connectOrCreate?: PageCreateOrConnectWithoutModelInput
    upsert?: PageUpsertWithoutModelInput
    connect?: PageWhereUniqueInput
    update?: XOR<PageUpdateWithoutModelInput, PageUncheckedUpdateWithoutModelInput>
  }

  export type ModelTypeUpdateOneRequiredWithoutModelInput = {
    create?: XOR<ModelTypeCreateWithoutModelInput, ModelTypeUncheckedCreateWithoutModelInput>
    connectOrCreate?: ModelTypeCreateOrConnectWithoutModelInput
    upsert?: ModelTypeUpsertWithoutModelInput
    connect?: ModelTypeWhereUniqueInput
    update?: XOR<ModelTypeUpdateWithoutModelInput, ModelTypeUncheckedUpdateWithoutModelInput>
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

  export type PageCreateWithoutProjectInput = {
    id?: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutProjectInput = {
    id?: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutProjectInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput>
  }

  export type ModelTypeCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelCreateNestedManyWithoutModelTypeInput
  }

  export type ModelTypeUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Model?: ModelUncheckedCreateNestedManyWithoutModelTypeInput
  }

  export type ModelTypeCreateOrConnectWithoutProjectInput = {
    where: ModelTypeWhereUniqueInput
    create: XOR<ModelTypeCreateWithoutProjectInput, ModelTypeUncheckedCreateWithoutProjectInput>
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
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutPageInput>
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

  export type ModelTypeUpsertWithWhereUniqueWithoutProjectInput = {
    where: ModelTypeWhereUniqueInput
    update: XOR<ModelTypeUpdateWithoutProjectInput, ModelTypeUncheckedUpdateWithoutProjectInput>
    create: XOR<ModelTypeCreateWithoutProjectInput, ModelTypeUncheckedCreateWithoutProjectInput>
  }

  export type ModelTypeUpdateWithWhereUniqueWithoutProjectInput = {
    where: ModelTypeWhereUniqueInput
    data: XOR<ModelTypeUpdateWithoutProjectInput, ModelTypeUncheckedUpdateWithoutProjectInput>
  }

  export type ModelTypeUpdateManyWithWhereWithoutProjectInput = {
    where: ModelTypeScalarWhereInput
    data: XOR<ModelTypeUpdateManyMutationInput, ModelTypeUncheckedUpdateManyWithoutModelTypeInput>
  }

  export type ModelTypeScalarWhereInput = {
    AND?: Enumerable<ModelTypeScalarWhereInput>
    OR?: Enumerable<ModelTypeScalarWhereInput>
    NOT?: Enumerable<ModelTypeScalarWhereInput>
    id?: StringFilter | string
    projectId?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProjectCreateWithoutPageInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ModelType?: ModelTypeCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPageInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ModelType?: ModelTypeUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPageInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPageInput, ProjectUncheckedCreateWithoutPageInput>
  }

  export type ModelCreateWithoutPageInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelType: ModelTypeCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutPageInput = {
    id?: string
    modelTypeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelCreateOrConnectWithoutPageInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutPageInput, ModelUncheckedCreateWithoutPageInput>
  }

  export type ProjectUpsertWithoutPageInput = {
    update: XOR<ProjectUpdateWithoutPageInput, ProjectUncheckedUpdateWithoutPageInput>
    create: XOR<ProjectCreateWithoutPageInput, ProjectUncheckedCreateWithoutPageInput>
  }

  export type ProjectUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ModelType?: ModelTypeUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ModelType?: ModelTypeUncheckedUpdateManyWithoutProjectInput
  }

  export type ModelUpsertWithWhereUniqueWithoutPageInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutPageInput, ModelUncheckedUpdateWithoutPageInput>
    create: XOR<ModelCreateWithoutPageInput, ModelUncheckedCreateWithoutPageInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutPageInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutPageInput, ModelUncheckedUpdateWithoutPageInput>
  }

  export type ModelUpdateManyWithWhereWithoutPageInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutModelInput>
  }

  export type ModelScalarWhereInput = {
    AND?: Enumerable<ModelScalarWhereInput>
    OR?: Enumerable<ModelScalarWhereInput>
    NOT?: Enumerable<ModelScalarWhereInput>
    id?: StringFilter | string
    pageId?: StringFilter | string
    modelTypeId?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ModelCreateWithoutModelTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutModelTypeInput = {
    id?: string
    pageId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelCreateOrConnectWithoutModelTypeInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutModelTypeInput, ModelUncheckedCreateWithoutModelTypeInput>
  }

  export type ProjectCreateWithoutModelTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Page?: PageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutModelTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Page?: PageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutModelTypeInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutModelTypeInput, ProjectUncheckedCreateWithoutModelTypeInput>
  }

  export type ModelUpsertWithWhereUniqueWithoutModelTypeInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutModelTypeInput, ModelUncheckedUpdateWithoutModelTypeInput>
    create: XOR<ModelCreateWithoutModelTypeInput, ModelUncheckedCreateWithoutModelTypeInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutModelTypeInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutModelTypeInput, ModelUncheckedUpdateWithoutModelTypeInput>
  }

  export type ModelUpdateManyWithWhereWithoutModelTypeInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutModelInput>
  }

  export type ProjectUpsertWithoutModelTypeInput = {
    update: XOR<ProjectUpdateWithoutModelTypeInput, ProjectUncheckedUpdateWithoutModelTypeInput>
    create: XOR<ProjectCreateWithoutModelTypeInput, ProjectUncheckedCreateWithoutModelTypeInput>
  }

  export type ProjectUpdateWithoutModelTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Page?: PageUpdateManyWithoutProjectInput
  }

  export type ProjectUncheckedUpdateWithoutModelTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Page?: PageUncheckedUpdateManyWithoutProjectInput
  }

  export type PageCreateWithoutModelInput = {
    id?: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPageInput
  }

  export type PageUncheckedCreateWithoutModelInput = {
    id?: string
    projectId: string
    level: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageCreateOrConnectWithoutModelInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutModelInput, PageUncheckedCreateWithoutModelInput>
  }

  export type ModelTypeCreateWithoutModelInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutModelTypeInput
  }

  export type ModelTypeUncheckedCreateWithoutModelInput = {
    id?: string
    projectId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelTypeCreateOrConnectWithoutModelInput = {
    where: ModelTypeWhereUniqueInput
    create: XOR<ModelTypeCreateWithoutModelInput, ModelTypeUncheckedCreateWithoutModelInput>
  }

  export type PageUpsertWithoutModelInput = {
    update: XOR<PageUpdateWithoutModelInput, PageUncheckedUpdateWithoutModelInput>
    create: XOR<PageCreateWithoutModelInput, PageUncheckedCreateWithoutModelInput>
  }

  export type PageUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPageInput
  }

  export type PageUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelTypeUpsertWithoutModelInput = {
    update: XOR<ModelTypeUpdateWithoutModelInput, ModelTypeUncheckedUpdateWithoutModelInput>
    create: XOR<ModelTypeCreateWithoutModelInput, ModelTypeUncheckedCreateWithoutModelInput>
  }

  export type ModelTypeUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutModelTypeInput
  }

  export type ModelTypeUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUpdateManyWithoutPageInput
  }

  export type PageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUncheckedUpdateManyWithoutPageInput
  }

  export type PageUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelTypeUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUpdateManyWithoutModelTypeInput
  }

  export type ModelTypeUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Model?: ModelUncheckedUpdateManyWithoutModelTypeInput
  }

  export type ModelTypeUncheckedUpdateManyWithoutModelTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelType?: ModelTypeUpdateOneRequiredWithoutModelInput
  }

  export type ModelUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUpdateWithoutModelTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutModelInput
  }

  export type ModelUncheckedUpdateWithoutModelTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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