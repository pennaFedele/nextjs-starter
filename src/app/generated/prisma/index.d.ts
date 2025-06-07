
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model Ristorante
 * 
 */
export type Ristorante = $Result.DefaultSelection<Prisma.$RistorantePayload>
/**
 * Model AreaCompetenza
 * 
 */
export type AreaCompetenza = $Result.DefaultSelection<Prisma.$AreaCompetenzaPayload>
/**
 * Model OrarioArea
 * 
 */
export type OrarioArea = $Result.DefaultSelection<Prisma.$OrarioAreaPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Pietanza
 * 
 */
export type Pietanza = $Result.DefaultSelection<Prisma.$PietanzaPayload>
/**
 * Model CrossSelling
 * 
 */
export type CrossSelling = $Result.DefaultSelection<Prisma.$CrossSellingPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Prenotazione
 * 
 */
export type Prenotazione = $Result.DefaultSelection<Prisma.$PrenotazionePayload>
/**
 * Model Piantina
 * 
 */
export type Piantina = $Result.DefaultSelection<Prisma.$PiantinaPayload>
/**
 * Model Tavolo
 * 
 */
export type Tavolo = $Result.DefaultSelection<Prisma.$TavoloPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PrenotazioneStato: {
  IN_ATTESA: 'IN_ATTESA',
  CONFERMATA: 'CONFERMATA',
  RIFIUTATA: 'RIFIUTATA',
  NO_SHOW: 'NO_SHOW',
  SEDUTO: 'SEDUTO',
  CANCELLATA: 'CANCELLATA'
};

export type PrenotazioneStato = (typeof PrenotazioneStato)[keyof typeof PrenotazioneStato]


export const PrenotazioneCanale: {
  WEB: 'WEB',
  TELEFONO: 'TELEFONO',
  APP: 'APP',
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  GOOGLE: 'GOOGLE'
};

export type PrenotazioneCanale = (typeof PrenotazioneCanale)[keyof typeof PrenotazioneCanale]

}

export type PrenotazioneStato = $Enums.PrenotazioneStato

export const PrenotazioneStato: typeof $Enums.PrenotazioneStato

export type PrenotazioneCanale = $Enums.PrenotazioneCanale

export const PrenotazioneCanale: typeof $Enums.PrenotazioneCanale

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ristorante`: Exposes CRUD operations for the **Ristorante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ristorantes
    * const ristorantes = await prisma.ristorante.findMany()
    * ```
    */
  get ristorante(): Prisma.RistoranteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.areaCompetenza`: Exposes CRUD operations for the **AreaCompetenza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AreaCompetenzas
    * const areaCompetenzas = await prisma.areaCompetenza.findMany()
    * ```
    */
  get areaCompetenza(): Prisma.AreaCompetenzaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orarioArea`: Exposes CRUD operations for the **OrarioArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrarioAreas
    * const orarioAreas = await prisma.orarioArea.findMany()
    * ```
    */
  get orarioArea(): Prisma.OrarioAreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pietanza`: Exposes CRUD operations for the **Pietanza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pietanzas
    * const pietanzas = await prisma.pietanza.findMany()
    * ```
    */
  get pietanza(): Prisma.PietanzaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crossSelling`: Exposes CRUD operations for the **CrossSelling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrossSellings
    * const crossSellings = await prisma.crossSelling.findMany()
    * ```
    */
  get crossSelling(): Prisma.CrossSellingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prenotazione`: Exposes CRUD operations for the **Prenotazione** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prenotaziones
    * const prenotaziones = await prisma.prenotazione.findMany()
    * ```
    */
  get prenotazione(): Prisma.PrenotazioneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.piantina`: Exposes CRUD operations for the **Piantina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Piantinas
    * const piantinas = await prisma.piantina.findMany()
    * ```
    */
  get piantina(): Prisma.PiantinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tavolo`: Exposes CRUD operations for the **Tavolo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tavolos
    * const tavolos = await prisma.tavolo.findMany()
    * ```
    */
  get tavolo(): Prisma.TavoloDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    Ristorante: 'Ristorante',
    AreaCompetenza: 'AreaCompetenza',
    OrarioArea: 'OrarioArea',
    Categoria: 'Categoria',
    Pietanza: 'Pietanza',
    CrossSelling: 'CrossSelling',
    Tag: 'Tag',
    Prenotazione: 'Prenotazione',
    Piantina: 'Piantina',
    Tavolo: 'Tavolo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "ristorante" | "areaCompetenza" | "orarioArea" | "categoria" | "pietanza" | "crossSelling" | "tag" | "prenotazione" | "piantina" | "tavolo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Ristorante: {
        payload: Prisma.$RistorantePayload<ExtArgs>
        fields: Prisma.RistoranteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RistoranteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RistoranteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>
          }
          findFirst: {
            args: Prisma.RistoranteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RistoranteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>
          }
          findMany: {
            args: Prisma.RistoranteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>[]
          }
          create: {
            args: Prisma.RistoranteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>
          }
          createMany: {
            args: Prisma.RistoranteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RistoranteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>[]
          }
          delete: {
            args: Prisma.RistoranteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>
          }
          update: {
            args: Prisma.RistoranteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>
          }
          deleteMany: {
            args: Prisma.RistoranteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RistoranteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RistoranteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>[]
          }
          upsert: {
            args: Prisma.RistoranteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RistorantePayload>
          }
          aggregate: {
            args: Prisma.RistoranteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRistorante>
          }
          groupBy: {
            args: Prisma.RistoranteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RistoranteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RistoranteCountArgs<ExtArgs>
            result: $Utils.Optional<RistoranteCountAggregateOutputType> | number
          }
        }
      }
      AreaCompetenza: {
        payload: Prisma.$AreaCompetenzaPayload<ExtArgs>
        fields: Prisma.AreaCompetenzaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaCompetenzaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaCompetenzaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>
          }
          findFirst: {
            args: Prisma.AreaCompetenzaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaCompetenzaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>
          }
          findMany: {
            args: Prisma.AreaCompetenzaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>[]
          }
          create: {
            args: Prisma.AreaCompetenzaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>
          }
          createMany: {
            args: Prisma.AreaCompetenzaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCompetenzaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>[]
          }
          delete: {
            args: Prisma.AreaCompetenzaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>
          }
          update: {
            args: Prisma.AreaCompetenzaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>
          }
          deleteMany: {
            args: Prisma.AreaCompetenzaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaCompetenzaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaCompetenzaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>[]
          }
          upsert: {
            args: Prisma.AreaCompetenzaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaCompetenzaPayload>
          }
          aggregate: {
            args: Prisma.AreaCompetenzaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAreaCompetenza>
          }
          groupBy: {
            args: Prisma.AreaCompetenzaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaCompetenzaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCompetenzaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCompetenzaCountAggregateOutputType> | number
          }
        }
      }
      OrarioArea: {
        payload: Prisma.$OrarioAreaPayload<ExtArgs>
        fields: Prisma.OrarioAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrarioAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrarioAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>
          }
          findFirst: {
            args: Prisma.OrarioAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrarioAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>
          }
          findMany: {
            args: Prisma.OrarioAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>[]
          }
          create: {
            args: Prisma.OrarioAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>
          }
          createMany: {
            args: Prisma.OrarioAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrarioAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>[]
          }
          delete: {
            args: Prisma.OrarioAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>
          }
          update: {
            args: Prisma.OrarioAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>
          }
          deleteMany: {
            args: Prisma.OrarioAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrarioAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrarioAreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>[]
          }
          upsert: {
            args: Prisma.OrarioAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrarioAreaPayload>
          }
          aggregate: {
            args: Prisma.OrarioAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrarioArea>
          }
          groupBy: {
            args: Prisma.OrarioAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrarioAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrarioAreaCountArgs<ExtArgs>
            result: $Utils.Optional<OrarioAreaCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Pietanza: {
        payload: Prisma.$PietanzaPayload<ExtArgs>
        fields: Prisma.PietanzaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PietanzaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PietanzaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>
          }
          findFirst: {
            args: Prisma.PietanzaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PietanzaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>
          }
          findMany: {
            args: Prisma.PietanzaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>[]
          }
          create: {
            args: Prisma.PietanzaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>
          }
          createMany: {
            args: Prisma.PietanzaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PietanzaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>[]
          }
          delete: {
            args: Prisma.PietanzaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>
          }
          update: {
            args: Prisma.PietanzaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>
          }
          deleteMany: {
            args: Prisma.PietanzaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PietanzaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PietanzaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>[]
          }
          upsert: {
            args: Prisma.PietanzaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PietanzaPayload>
          }
          aggregate: {
            args: Prisma.PietanzaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePietanza>
          }
          groupBy: {
            args: Prisma.PietanzaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PietanzaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PietanzaCountArgs<ExtArgs>
            result: $Utils.Optional<PietanzaCountAggregateOutputType> | number
          }
        }
      }
      CrossSelling: {
        payload: Prisma.$CrossSellingPayload<ExtArgs>
        fields: Prisma.CrossSellingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrossSellingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrossSellingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>
          }
          findFirst: {
            args: Prisma.CrossSellingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrossSellingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>
          }
          findMany: {
            args: Prisma.CrossSellingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>[]
          }
          create: {
            args: Prisma.CrossSellingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>
          }
          createMany: {
            args: Prisma.CrossSellingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrossSellingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>[]
          }
          delete: {
            args: Prisma.CrossSellingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>
          }
          update: {
            args: Prisma.CrossSellingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>
          }
          deleteMany: {
            args: Prisma.CrossSellingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrossSellingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrossSellingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>[]
          }
          upsert: {
            args: Prisma.CrossSellingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrossSellingPayload>
          }
          aggregate: {
            args: Prisma.CrossSellingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrossSelling>
          }
          groupBy: {
            args: Prisma.CrossSellingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrossSellingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrossSellingCountArgs<ExtArgs>
            result: $Utils.Optional<CrossSellingCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Prenotazione: {
        payload: Prisma.$PrenotazionePayload<ExtArgs>
        fields: Prisma.PrenotazioneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrenotazioneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrenotazioneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          findFirst: {
            args: Prisma.PrenotazioneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrenotazioneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          findMany: {
            args: Prisma.PrenotazioneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>[]
          }
          create: {
            args: Prisma.PrenotazioneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          createMany: {
            args: Prisma.PrenotazioneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrenotazioneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>[]
          }
          delete: {
            args: Prisma.PrenotazioneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          update: {
            args: Prisma.PrenotazioneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          deleteMany: {
            args: Prisma.PrenotazioneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrenotazioneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrenotazioneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>[]
          }
          upsert: {
            args: Prisma.PrenotazioneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          aggregate: {
            args: Prisma.PrenotazioneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrenotazione>
          }
          groupBy: {
            args: Prisma.PrenotazioneGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrenotazioneGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrenotazioneCountArgs<ExtArgs>
            result: $Utils.Optional<PrenotazioneCountAggregateOutputType> | number
          }
        }
      }
      Piantina: {
        payload: Prisma.$PiantinaPayload<ExtArgs>
        fields: Prisma.PiantinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PiantinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PiantinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>
          }
          findFirst: {
            args: Prisma.PiantinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PiantinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>
          }
          findMany: {
            args: Prisma.PiantinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>[]
          }
          create: {
            args: Prisma.PiantinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>
          }
          createMany: {
            args: Prisma.PiantinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PiantinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>[]
          }
          delete: {
            args: Prisma.PiantinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>
          }
          update: {
            args: Prisma.PiantinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>
          }
          deleteMany: {
            args: Prisma.PiantinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PiantinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PiantinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>[]
          }
          upsert: {
            args: Prisma.PiantinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiantinaPayload>
          }
          aggregate: {
            args: Prisma.PiantinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiantina>
          }
          groupBy: {
            args: Prisma.PiantinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PiantinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PiantinaCountArgs<ExtArgs>
            result: $Utils.Optional<PiantinaCountAggregateOutputType> | number
          }
        }
      }
      Tavolo: {
        payload: Prisma.$TavoloPayload<ExtArgs>
        fields: Prisma.TavoloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TavoloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TavoloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>
          }
          findFirst: {
            args: Prisma.TavoloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TavoloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>
          }
          findMany: {
            args: Prisma.TavoloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>[]
          }
          create: {
            args: Prisma.TavoloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>
          }
          createMany: {
            args: Prisma.TavoloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TavoloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>[]
          }
          delete: {
            args: Prisma.TavoloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>
          }
          update: {
            args: Prisma.TavoloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>
          }
          deleteMany: {
            args: Prisma.TavoloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TavoloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TavoloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>[]
          }
          upsert: {
            args: Prisma.TavoloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TavoloPayload>
          }
          aggregate: {
            args: Prisma.TavoloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTavolo>
          }
          groupBy: {
            args: Prisma.TavoloGroupByArgs<ExtArgs>
            result: $Utils.Optional<TavoloGroupByOutputType>[]
          }
          count: {
            args: Prisma.TavoloCountArgs<ExtArgs>
            result: $Utils.Optional<TavoloCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    ristorante?: RistoranteOmit
    areaCompetenza?: AreaCompetenzaOmit
    orarioArea?: OrarioAreaOmit
    categoria?: CategoriaOmit
    pietanza?: PietanzaOmit
    crossSelling?: CrossSellingOmit
    tag?: TagOmit
    prenotazione?: PrenotazioneOmit
    piantina?: PiantinaOmit
    tavolo?: TavoloOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    ristorante: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ristorante?: boolean | UsersCountOutputTypeCountRistoranteArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRistoranteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RistoranteWhereInput
  }


  /**
   * Count Type RistoranteCountOutputType
   */

  export type RistoranteCountOutputType = {
    user: number
  }

  export type RistoranteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RistoranteCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RistoranteCountOutputType without action
   */
  export type RistoranteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RistoranteCountOutputType
     */
    select?: RistoranteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RistoranteCountOutputType without action
   */
  export type RistoranteCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type AreaCompetenzaCountOutputType
   */

  export type AreaCompetenzaCountOutputType = {
    orari: number
    categorie: number
  }

  export type AreaCompetenzaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orari?: boolean | AreaCompetenzaCountOutputTypeCountOrariArgs
    categorie?: boolean | AreaCompetenzaCountOutputTypeCountCategorieArgs
  }

  // Custom InputTypes
  /**
   * AreaCompetenzaCountOutputType without action
   */
  export type AreaCompetenzaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenzaCountOutputType
     */
    select?: AreaCompetenzaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCompetenzaCountOutputType without action
   */
  export type AreaCompetenzaCountOutputTypeCountOrariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrarioAreaWhereInput
  }

  /**
   * AreaCompetenzaCountOutputType without action
   */
  export type AreaCompetenzaCountOutputTypeCountCategorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    pietanze: number
    areeCompetenza: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pietanze?: boolean | CategoriaCountOutputTypeCountPietanzeArgs
    areeCompetenza?: boolean | CategoriaCountOutputTypeCountAreeCompetenzaArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPietanzeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PietanzaWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountAreeCompetenzaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaCompetenzaWhereInput
  }


  /**
   * Count Type PietanzaCountOutputType
   */

  export type PietanzaCountOutputType = {
    correlataBy: number
    correlata: number
    tag: number
  }

  export type PietanzaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correlataBy?: boolean | PietanzaCountOutputTypeCountCorrelataByArgs
    correlata?: boolean | PietanzaCountOutputTypeCountCorrelataArgs
    tag?: boolean | PietanzaCountOutputTypeCountTagArgs
  }

  // Custom InputTypes
  /**
   * PietanzaCountOutputType without action
   */
  export type PietanzaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PietanzaCountOutputType
     */
    select?: PietanzaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PietanzaCountOutputType without action
   */
  export type PietanzaCountOutputTypeCountCorrelataByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrossSellingWhereInput
  }

  /**
   * PietanzaCountOutputType without action
   */
  export type PietanzaCountOutputTypeCountCorrelataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrossSellingWhereInput
  }

  /**
   * PietanzaCountOutputType without action
   */
  export type PietanzaCountOutputTypeCountTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    pietanze: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pietanze?: boolean | TagCountOutputTypeCountPietanzeArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPietanzeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PietanzaWhereInput
  }


  /**
   * Count Type PiantinaCountOutputType
   */

  export type PiantinaCountOutputType = {
    tavoli: number
  }

  export type PiantinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tavoli?: boolean | PiantinaCountOutputTypeCountTavoliArgs
  }

  // Custom InputTypes
  /**
   * PiantinaCountOutputType without action
   */
  export type PiantinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiantinaCountOutputType
     */
    select?: PiantinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PiantinaCountOutputType without action
   */
  export type PiantinaCountOutputTypeCountTavoliArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TavoloWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    username: string | null
    password: string | null
    bearerToken: string | null
    ipAddress: string | null
    mongoAdress: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    username: string | null
    password: string | null
    bearerToken: string | null
    ipAddress: string | null
    mongoAdress: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    username: number
    password: number
    bearerToken: number
    ipAddress: number
    mongoAdress: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    password?: true
    bearerToken?: true
    ipAddress?: true
    mongoAdress?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    password?: true
    bearerToken?: true
    ipAddress?: true
    mongoAdress?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    password?: true
    bearerToken?: true
    ipAddress?: true
    mongoAdress?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    name: string | null
    username: string
    password: string
    bearerToken: string | null
    ipAddress: string | null
    mongoAdress: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    bearerToken?: boolean
    ipAddress?: boolean
    mongoAdress?: boolean
    ristorante?: boolean | users$ristoranteArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    bearerToken?: boolean
    ipAddress?: boolean
    mongoAdress?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    bearerToken?: boolean
    ipAddress?: boolean
    mongoAdress?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    bearerToken?: boolean
    ipAddress?: boolean
    mongoAdress?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "username" | "password" | "bearerToken" | "ipAddress" | "mongoAdress", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ristorante?: boolean | users$ristoranteArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      ristorante: Prisma.$RistorantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      username: string
      password: string
      bearerToken: string | null
      ipAddress: string | null
      mongoAdress: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ristorante<T extends users$ristoranteArgs<ExtArgs> = {}>(args?: Subset<T, users$ristoranteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly bearerToken: FieldRef<"users", 'String'>
    readonly ipAddress: FieldRef<"users", 'String'>
    readonly mongoAdress: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.ristorante
   */
  export type users$ristoranteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    where?: RistoranteWhereInput
    orderBy?: RistoranteOrderByWithRelationInput | RistoranteOrderByWithRelationInput[]
    cursor?: RistoranteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RistoranteScalarFieldEnum | RistoranteScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model Ristorante
   */

  export type AggregateRistorante = {
    _count: RistoranteCountAggregateOutputType | null
    _min: RistoranteMinAggregateOutputType | null
    _max: RistoranteMaxAggregateOutputType | null
  }

  export type RistoranteMinAggregateOutputType = {
    id: string | null
    name: string | null
    via: string | null
    civico: string | null
    citta: string | null
    vat: string | null
  }

  export type RistoranteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    via: string | null
    civico: string | null
    citta: string | null
    vat: string | null
  }

  export type RistoranteCountAggregateOutputType = {
    id: number
    name: number
    via: number
    civico: number
    citta: number
    vat: number
    _all: number
  }


  export type RistoranteMinAggregateInputType = {
    id?: true
    name?: true
    via?: true
    civico?: true
    citta?: true
    vat?: true
  }

  export type RistoranteMaxAggregateInputType = {
    id?: true
    name?: true
    via?: true
    civico?: true
    citta?: true
    vat?: true
  }

  export type RistoranteCountAggregateInputType = {
    id?: true
    name?: true
    via?: true
    civico?: true
    citta?: true
    vat?: true
    _all?: true
  }

  export type RistoranteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ristorante to aggregate.
     */
    where?: RistoranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ristorantes to fetch.
     */
    orderBy?: RistoranteOrderByWithRelationInput | RistoranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RistoranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ristorantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ristorantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ristorantes
    **/
    _count?: true | RistoranteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RistoranteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RistoranteMaxAggregateInputType
  }

  export type GetRistoranteAggregateType<T extends RistoranteAggregateArgs> = {
        [P in keyof T & keyof AggregateRistorante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRistorante[P]>
      : GetScalarType<T[P], AggregateRistorante[P]>
  }




  export type RistoranteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RistoranteWhereInput
    orderBy?: RistoranteOrderByWithAggregationInput | RistoranteOrderByWithAggregationInput[]
    by: RistoranteScalarFieldEnum[] | RistoranteScalarFieldEnum
    having?: RistoranteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RistoranteCountAggregateInputType | true
    _min?: RistoranteMinAggregateInputType
    _max?: RistoranteMaxAggregateInputType
  }

  export type RistoranteGroupByOutputType = {
    id: string
    name: string | null
    via: string | null
    civico: string | null
    citta: string | null
    vat: string | null
    _count: RistoranteCountAggregateOutputType | null
    _min: RistoranteMinAggregateOutputType | null
    _max: RistoranteMaxAggregateOutputType | null
  }

  type GetRistoranteGroupByPayload<T extends RistoranteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RistoranteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RistoranteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RistoranteGroupByOutputType[P]>
            : GetScalarType<T[P], RistoranteGroupByOutputType[P]>
        }
      >
    >


  export type RistoranteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    via?: boolean
    civico?: boolean
    citta?: boolean
    vat?: boolean
    user?: boolean | Ristorante$userArgs<ExtArgs>
    _count?: boolean | RistoranteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ristorante"]>

  export type RistoranteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    via?: boolean
    civico?: boolean
    citta?: boolean
    vat?: boolean
  }, ExtArgs["result"]["ristorante"]>

  export type RistoranteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    via?: boolean
    civico?: boolean
    citta?: boolean
    vat?: boolean
  }, ExtArgs["result"]["ristorante"]>

  export type RistoranteSelectScalar = {
    id?: boolean
    name?: boolean
    via?: boolean
    civico?: boolean
    citta?: boolean
    vat?: boolean
  }

  export type RistoranteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "via" | "civico" | "citta" | "vat", ExtArgs["result"]["ristorante"]>
  export type RistoranteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Ristorante$userArgs<ExtArgs>
    _count?: boolean | RistoranteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RistoranteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RistoranteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RistorantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ristorante"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      via: string | null
      civico: string | null
      citta: string | null
      vat: string | null
    }, ExtArgs["result"]["ristorante"]>
    composites: {}
  }

  type RistoranteGetPayload<S extends boolean | null | undefined | RistoranteDefaultArgs> = $Result.GetResult<Prisma.$RistorantePayload, S>

  type RistoranteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RistoranteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RistoranteCountAggregateInputType | true
    }

  export interface RistoranteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ristorante'], meta: { name: 'Ristorante' } }
    /**
     * Find zero or one Ristorante that matches the filter.
     * @param {RistoranteFindUniqueArgs} args - Arguments to find a Ristorante
     * @example
     * // Get one Ristorante
     * const ristorante = await prisma.ristorante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RistoranteFindUniqueArgs>(args: SelectSubset<T, RistoranteFindUniqueArgs<ExtArgs>>): Prisma__RistoranteClient<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ristorante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RistoranteFindUniqueOrThrowArgs} args - Arguments to find a Ristorante
     * @example
     * // Get one Ristorante
     * const ristorante = await prisma.ristorante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RistoranteFindUniqueOrThrowArgs>(args: SelectSubset<T, RistoranteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RistoranteClient<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ristorante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RistoranteFindFirstArgs} args - Arguments to find a Ristorante
     * @example
     * // Get one Ristorante
     * const ristorante = await prisma.ristorante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RistoranteFindFirstArgs>(args?: SelectSubset<T, RistoranteFindFirstArgs<ExtArgs>>): Prisma__RistoranteClient<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ristorante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RistoranteFindFirstOrThrowArgs} args - Arguments to find a Ristorante
     * @example
     * // Get one Ristorante
     * const ristorante = await prisma.ristorante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RistoranteFindFirstOrThrowArgs>(args?: SelectSubset<T, RistoranteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RistoranteClient<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ristorantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RistoranteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ristorantes
     * const ristorantes = await prisma.ristorante.findMany()
     * 
     * // Get first 10 Ristorantes
     * const ristorantes = await prisma.ristorante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ristoranteWithIdOnly = await prisma.ristorante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RistoranteFindManyArgs>(args?: SelectSubset<T, RistoranteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ristorante.
     * @param {RistoranteCreateArgs} args - Arguments to create a Ristorante.
     * @example
     * // Create one Ristorante
     * const Ristorante = await prisma.ristorante.create({
     *   data: {
     *     // ... data to create a Ristorante
     *   }
     * })
     * 
     */
    create<T extends RistoranteCreateArgs>(args: SelectSubset<T, RistoranteCreateArgs<ExtArgs>>): Prisma__RistoranteClient<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ristorantes.
     * @param {RistoranteCreateManyArgs} args - Arguments to create many Ristorantes.
     * @example
     * // Create many Ristorantes
     * const ristorante = await prisma.ristorante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RistoranteCreateManyArgs>(args?: SelectSubset<T, RistoranteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ristorantes and returns the data saved in the database.
     * @param {RistoranteCreateManyAndReturnArgs} args - Arguments to create many Ristorantes.
     * @example
     * // Create many Ristorantes
     * const ristorante = await prisma.ristorante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ristorantes and only return the `id`
     * const ristoranteWithIdOnly = await prisma.ristorante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RistoranteCreateManyAndReturnArgs>(args?: SelectSubset<T, RistoranteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ristorante.
     * @param {RistoranteDeleteArgs} args - Arguments to delete one Ristorante.
     * @example
     * // Delete one Ristorante
     * const Ristorante = await prisma.ristorante.delete({
     *   where: {
     *     // ... filter to delete one Ristorante
     *   }
     * })
     * 
     */
    delete<T extends RistoranteDeleteArgs>(args: SelectSubset<T, RistoranteDeleteArgs<ExtArgs>>): Prisma__RistoranteClient<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ristorante.
     * @param {RistoranteUpdateArgs} args - Arguments to update one Ristorante.
     * @example
     * // Update one Ristorante
     * const ristorante = await prisma.ristorante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RistoranteUpdateArgs>(args: SelectSubset<T, RistoranteUpdateArgs<ExtArgs>>): Prisma__RistoranteClient<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ristorantes.
     * @param {RistoranteDeleteManyArgs} args - Arguments to filter Ristorantes to delete.
     * @example
     * // Delete a few Ristorantes
     * const { count } = await prisma.ristorante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RistoranteDeleteManyArgs>(args?: SelectSubset<T, RistoranteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ristorantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RistoranteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ristorantes
     * const ristorante = await prisma.ristorante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RistoranteUpdateManyArgs>(args: SelectSubset<T, RistoranteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ristorantes and returns the data updated in the database.
     * @param {RistoranteUpdateManyAndReturnArgs} args - Arguments to update many Ristorantes.
     * @example
     * // Update many Ristorantes
     * const ristorante = await prisma.ristorante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ristorantes and only return the `id`
     * const ristoranteWithIdOnly = await prisma.ristorante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RistoranteUpdateManyAndReturnArgs>(args: SelectSubset<T, RistoranteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ristorante.
     * @param {RistoranteUpsertArgs} args - Arguments to update or create a Ristorante.
     * @example
     * // Update or create a Ristorante
     * const ristorante = await prisma.ristorante.upsert({
     *   create: {
     *     // ... data to create a Ristorante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ristorante we want to update
     *   }
     * })
     */
    upsert<T extends RistoranteUpsertArgs>(args: SelectSubset<T, RistoranteUpsertArgs<ExtArgs>>): Prisma__RistoranteClient<$Result.GetResult<Prisma.$RistorantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ristorantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RistoranteCountArgs} args - Arguments to filter Ristorantes to count.
     * @example
     * // Count the number of Ristorantes
     * const count = await prisma.ristorante.count({
     *   where: {
     *     // ... the filter for the Ristorantes we want to count
     *   }
     * })
    **/
    count<T extends RistoranteCountArgs>(
      args?: Subset<T, RistoranteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RistoranteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ristorante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RistoranteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RistoranteAggregateArgs>(args: Subset<T, RistoranteAggregateArgs>): Prisma.PrismaPromise<GetRistoranteAggregateType<T>>

    /**
     * Group by Ristorante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RistoranteGroupByArgs} args - Group by arguments.
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
      T extends RistoranteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RistoranteGroupByArgs['orderBy'] }
        : { orderBy?: RistoranteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RistoranteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRistoranteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ristorante model
   */
  readonly fields: RistoranteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ristorante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RistoranteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Ristorante$userArgs<ExtArgs> = {}>(args?: Subset<T, Ristorante$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ristorante model
   */
  interface RistoranteFieldRefs {
    readonly id: FieldRef<"Ristorante", 'String'>
    readonly name: FieldRef<"Ristorante", 'String'>
    readonly via: FieldRef<"Ristorante", 'String'>
    readonly civico: FieldRef<"Ristorante", 'String'>
    readonly citta: FieldRef<"Ristorante", 'String'>
    readonly vat: FieldRef<"Ristorante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ristorante findUnique
   */
  export type RistoranteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * Filter, which Ristorante to fetch.
     */
    where: RistoranteWhereUniqueInput
  }

  /**
   * Ristorante findUniqueOrThrow
   */
  export type RistoranteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * Filter, which Ristorante to fetch.
     */
    where: RistoranteWhereUniqueInput
  }

  /**
   * Ristorante findFirst
   */
  export type RistoranteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * Filter, which Ristorante to fetch.
     */
    where?: RistoranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ristorantes to fetch.
     */
    orderBy?: RistoranteOrderByWithRelationInput | RistoranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ristorantes.
     */
    cursor?: RistoranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ristorantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ristorantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ristorantes.
     */
    distinct?: RistoranteScalarFieldEnum | RistoranteScalarFieldEnum[]
  }

  /**
   * Ristorante findFirstOrThrow
   */
  export type RistoranteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * Filter, which Ristorante to fetch.
     */
    where?: RistoranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ristorantes to fetch.
     */
    orderBy?: RistoranteOrderByWithRelationInput | RistoranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ristorantes.
     */
    cursor?: RistoranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ristorantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ristorantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ristorantes.
     */
    distinct?: RistoranteScalarFieldEnum | RistoranteScalarFieldEnum[]
  }

  /**
   * Ristorante findMany
   */
  export type RistoranteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * Filter, which Ristorantes to fetch.
     */
    where?: RistoranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ristorantes to fetch.
     */
    orderBy?: RistoranteOrderByWithRelationInput | RistoranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ristorantes.
     */
    cursor?: RistoranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ristorantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ristorantes.
     */
    skip?: number
    distinct?: RistoranteScalarFieldEnum | RistoranteScalarFieldEnum[]
  }

  /**
   * Ristorante create
   */
  export type RistoranteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * The data needed to create a Ristorante.
     */
    data?: XOR<RistoranteCreateInput, RistoranteUncheckedCreateInput>
  }

  /**
   * Ristorante createMany
   */
  export type RistoranteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ristorantes.
     */
    data: RistoranteCreateManyInput | RistoranteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ristorante createManyAndReturn
   */
  export type RistoranteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * The data used to create many Ristorantes.
     */
    data: RistoranteCreateManyInput | RistoranteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ristorante update
   */
  export type RistoranteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * The data needed to update a Ristorante.
     */
    data: XOR<RistoranteUpdateInput, RistoranteUncheckedUpdateInput>
    /**
     * Choose, which Ristorante to update.
     */
    where: RistoranteWhereUniqueInput
  }

  /**
   * Ristorante updateMany
   */
  export type RistoranteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ristorantes.
     */
    data: XOR<RistoranteUpdateManyMutationInput, RistoranteUncheckedUpdateManyInput>
    /**
     * Filter which Ristorantes to update
     */
    where?: RistoranteWhereInput
    /**
     * Limit how many Ristorantes to update.
     */
    limit?: number
  }

  /**
   * Ristorante updateManyAndReturn
   */
  export type RistoranteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * The data used to update Ristorantes.
     */
    data: XOR<RistoranteUpdateManyMutationInput, RistoranteUncheckedUpdateManyInput>
    /**
     * Filter which Ristorantes to update
     */
    where?: RistoranteWhereInput
    /**
     * Limit how many Ristorantes to update.
     */
    limit?: number
  }

  /**
   * Ristorante upsert
   */
  export type RistoranteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * The filter to search for the Ristorante to update in case it exists.
     */
    where: RistoranteWhereUniqueInput
    /**
     * In case the Ristorante found by the `where` argument doesn't exist, create a new Ristorante with this data.
     */
    create: XOR<RistoranteCreateInput, RistoranteUncheckedCreateInput>
    /**
     * In case the Ristorante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RistoranteUpdateInput, RistoranteUncheckedUpdateInput>
  }

  /**
   * Ristorante delete
   */
  export type RistoranteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
    /**
     * Filter which Ristorante to delete.
     */
    where: RistoranteWhereUniqueInput
  }

  /**
   * Ristorante deleteMany
   */
  export type RistoranteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ristorantes to delete
     */
    where?: RistoranteWhereInput
    /**
     * Limit how many Ristorantes to delete.
     */
    limit?: number
  }

  /**
   * Ristorante.user
   */
  export type Ristorante$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Ristorante without action
   */
  export type RistoranteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ristorante
     */
    select?: RistoranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ristorante
     */
    omit?: RistoranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RistoranteInclude<ExtArgs> | null
  }


  /**
   * Model AreaCompetenza
   */

  export type AggregateAreaCompetenza = {
    _count: AreaCompetenzaCountAggregateOutputType | null
    _avg: AreaCompetenzaAvgAggregateOutputType | null
    _sum: AreaCompetenzaSumAggregateOutputType | null
    _min: AreaCompetenzaMinAggregateOutputType | null
    _max: AreaCompetenzaMaxAggregateOutputType | null
  }

  export type AreaCompetenzaAvgAggregateOutputType = {
    id: number | null
    ordine: number | null
  }

  export type AreaCompetenzaSumAggregateOutputType = {
    id: number | null
    ordine: number | null
  }

  export type AreaCompetenzaMinAggregateOutputType = {
    id: number | null
    descrizione: string | null
    dataCreaz: Date | null
    dataAgg: Date | null
    isAttiva: boolean | null
    note: string | null
    ordine: number | null
    descrizioneInglese: string | null
    noteInglese: string | null
    isMenuFisso: boolean | null
  }

  export type AreaCompetenzaMaxAggregateOutputType = {
    id: number | null
    descrizione: string | null
    dataCreaz: Date | null
    dataAgg: Date | null
    isAttiva: boolean | null
    note: string | null
    ordine: number | null
    descrizioneInglese: string | null
    noteInglese: string | null
    isMenuFisso: boolean | null
  }

  export type AreaCompetenzaCountAggregateOutputType = {
    id: number
    descrizione: number
    dataCreaz: number
    dataAgg: number
    isAttiva: number
    note: number
    ordine: number
    descrizioneInglese: number
    noteInglese: number
    isMenuFisso: number
    _all: number
  }


  export type AreaCompetenzaAvgAggregateInputType = {
    id?: true
    ordine?: true
  }

  export type AreaCompetenzaSumAggregateInputType = {
    id?: true
    ordine?: true
  }

  export type AreaCompetenzaMinAggregateInputType = {
    id?: true
    descrizione?: true
    dataCreaz?: true
    dataAgg?: true
    isAttiva?: true
    note?: true
    ordine?: true
    descrizioneInglese?: true
    noteInglese?: true
    isMenuFisso?: true
  }

  export type AreaCompetenzaMaxAggregateInputType = {
    id?: true
    descrizione?: true
    dataCreaz?: true
    dataAgg?: true
    isAttiva?: true
    note?: true
    ordine?: true
    descrizioneInglese?: true
    noteInglese?: true
    isMenuFisso?: true
  }

  export type AreaCompetenzaCountAggregateInputType = {
    id?: true
    descrizione?: true
    dataCreaz?: true
    dataAgg?: true
    isAttiva?: true
    note?: true
    ordine?: true
    descrizioneInglese?: true
    noteInglese?: true
    isMenuFisso?: true
    _all?: true
  }

  export type AreaCompetenzaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AreaCompetenza to aggregate.
     */
    where?: AreaCompetenzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaCompetenzas to fetch.
     */
    orderBy?: AreaCompetenzaOrderByWithRelationInput | AreaCompetenzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaCompetenzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaCompetenzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaCompetenzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AreaCompetenzas
    **/
    _count?: true | AreaCompetenzaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaCompetenzaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaCompetenzaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaCompetenzaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaCompetenzaMaxAggregateInputType
  }

  export type GetAreaCompetenzaAggregateType<T extends AreaCompetenzaAggregateArgs> = {
        [P in keyof T & keyof AggregateAreaCompetenza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreaCompetenza[P]>
      : GetScalarType<T[P], AggregateAreaCompetenza[P]>
  }




  export type AreaCompetenzaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaCompetenzaWhereInput
    orderBy?: AreaCompetenzaOrderByWithAggregationInput | AreaCompetenzaOrderByWithAggregationInput[]
    by: AreaCompetenzaScalarFieldEnum[] | AreaCompetenzaScalarFieldEnum
    having?: AreaCompetenzaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCompetenzaCountAggregateInputType | true
    _avg?: AreaCompetenzaAvgAggregateInputType
    _sum?: AreaCompetenzaSumAggregateInputType
    _min?: AreaCompetenzaMinAggregateInputType
    _max?: AreaCompetenzaMaxAggregateInputType
  }

  export type AreaCompetenzaGroupByOutputType = {
    id: number
    descrizione: string
    dataCreaz: Date
    dataAgg: Date
    isAttiva: boolean
    note: string
    ordine: number
    descrizioneInglese: string | null
    noteInglese: string | null
    isMenuFisso: boolean
    _count: AreaCompetenzaCountAggregateOutputType | null
    _avg: AreaCompetenzaAvgAggregateOutputType | null
    _sum: AreaCompetenzaSumAggregateOutputType | null
    _min: AreaCompetenzaMinAggregateOutputType | null
    _max: AreaCompetenzaMaxAggregateOutputType | null
  }

  type GetAreaCompetenzaGroupByPayload<T extends AreaCompetenzaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaCompetenzaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaCompetenzaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaCompetenzaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaCompetenzaGroupByOutputType[P]>
        }
      >
    >


  export type AreaCompetenzaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizione?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    isAttiva?: boolean
    note?: boolean
    ordine?: boolean
    descrizioneInglese?: boolean
    noteInglese?: boolean
    isMenuFisso?: boolean
    orari?: boolean | AreaCompetenza$orariArgs<ExtArgs>
    categorie?: boolean | AreaCompetenza$categorieArgs<ExtArgs>
    _count?: boolean | AreaCompetenzaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areaCompetenza"]>

  export type AreaCompetenzaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizione?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    isAttiva?: boolean
    note?: boolean
    ordine?: boolean
    descrizioneInglese?: boolean
    noteInglese?: boolean
    isMenuFisso?: boolean
  }, ExtArgs["result"]["areaCompetenza"]>

  export type AreaCompetenzaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizione?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    isAttiva?: boolean
    note?: boolean
    ordine?: boolean
    descrizioneInglese?: boolean
    noteInglese?: boolean
    isMenuFisso?: boolean
  }, ExtArgs["result"]["areaCompetenza"]>

  export type AreaCompetenzaSelectScalar = {
    id?: boolean
    descrizione?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    isAttiva?: boolean
    note?: boolean
    ordine?: boolean
    descrizioneInglese?: boolean
    noteInglese?: boolean
    isMenuFisso?: boolean
  }

  export type AreaCompetenzaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descrizione" | "dataCreaz" | "dataAgg" | "isAttiva" | "note" | "ordine" | "descrizioneInglese" | "noteInglese" | "isMenuFisso", ExtArgs["result"]["areaCompetenza"]>
  export type AreaCompetenzaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orari?: boolean | AreaCompetenza$orariArgs<ExtArgs>
    categorie?: boolean | AreaCompetenza$categorieArgs<ExtArgs>
    _count?: boolean | AreaCompetenzaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaCompetenzaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AreaCompetenzaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AreaCompetenzaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AreaCompetenza"
    objects: {
      orari: Prisma.$OrarioAreaPayload<ExtArgs>[]
      categorie: Prisma.$CategoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descrizione: string
      dataCreaz: Date
      dataAgg: Date
      isAttiva: boolean
      note: string
      ordine: number
      descrizioneInglese: string | null
      noteInglese: string | null
      isMenuFisso: boolean
    }, ExtArgs["result"]["areaCompetenza"]>
    composites: {}
  }

  type AreaCompetenzaGetPayload<S extends boolean | null | undefined | AreaCompetenzaDefaultArgs> = $Result.GetResult<Prisma.$AreaCompetenzaPayload, S>

  type AreaCompetenzaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaCompetenzaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCompetenzaCountAggregateInputType | true
    }

  export interface AreaCompetenzaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AreaCompetenza'], meta: { name: 'AreaCompetenza' } }
    /**
     * Find zero or one AreaCompetenza that matches the filter.
     * @param {AreaCompetenzaFindUniqueArgs} args - Arguments to find a AreaCompetenza
     * @example
     * // Get one AreaCompetenza
     * const areaCompetenza = await prisma.areaCompetenza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaCompetenzaFindUniqueArgs>(args: SelectSubset<T, AreaCompetenzaFindUniqueArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AreaCompetenza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaCompetenzaFindUniqueOrThrowArgs} args - Arguments to find a AreaCompetenza
     * @example
     * // Get one AreaCompetenza
     * const areaCompetenza = await prisma.areaCompetenza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaCompetenzaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaCompetenzaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AreaCompetenza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCompetenzaFindFirstArgs} args - Arguments to find a AreaCompetenza
     * @example
     * // Get one AreaCompetenza
     * const areaCompetenza = await prisma.areaCompetenza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaCompetenzaFindFirstArgs>(args?: SelectSubset<T, AreaCompetenzaFindFirstArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AreaCompetenza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCompetenzaFindFirstOrThrowArgs} args - Arguments to find a AreaCompetenza
     * @example
     * // Get one AreaCompetenza
     * const areaCompetenza = await prisma.areaCompetenza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaCompetenzaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaCompetenzaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AreaCompetenzas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCompetenzaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AreaCompetenzas
     * const areaCompetenzas = await prisma.areaCompetenza.findMany()
     * 
     * // Get first 10 AreaCompetenzas
     * const areaCompetenzas = await prisma.areaCompetenza.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaCompetenzaWithIdOnly = await prisma.areaCompetenza.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaCompetenzaFindManyArgs>(args?: SelectSubset<T, AreaCompetenzaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AreaCompetenza.
     * @param {AreaCompetenzaCreateArgs} args - Arguments to create a AreaCompetenza.
     * @example
     * // Create one AreaCompetenza
     * const AreaCompetenza = await prisma.areaCompetenza.create({
     *   data: {
     *     // ... data to create a AreaCompetenza
     *   }
     * })
     * 
     */
    create<T extends AreaCompetenzaCreateArgs>(args: SelectSubset<T, AreaCompetenzaCreateArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AreaCompetenzas.
     * @param {AreaCompetenzaCreateManyArgs} args - Arguments to create many AreaCompetenzas.
     * @example
     * // Create many AreaCompetenzas
     * const areaCompetenza = await prisma.areaCompetenza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCompetenzaCreateManyArgs>(args?: SelectSubset<T, AreaCompetenzaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AreaCompetenzas and returns the data saved in the database.
     * @param {AreaCompetenzaCreateManyAndReturnArgs} args - Arguments to create many AreaCompetenzas.
     * @example
     * // Create many AreaCompetenzas
     * const areaCompetenza = await prisma.areaCompetenza.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AreaCompetenzas and only return the `id`
     * const areaCompetenzaWithIdOnly = await prisma.areaCompetenza.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCompetenzaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCompetenzaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AreaCompetenza.
     * @param {AreaCompetenzaDeleteArgs} args - Arguments to delete one AreaCompetenza.
     * @example
     * // Delete one AreaCompetenza
     * const AreaCompetenza = await prisma.areaCompetenza.delete({
     *   where: {
     *     // ... filter to delete one AreaCompetenza
     *   }
     * })
     * 
     */
    delete<T extends AreaCompetenzaDeleteArgs>(args: SelectSubset<T, AreaCompetenzaDeleteArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AreaCompetenza.
     * @param {AreaCompetenzaUpdateArgs} args - Arguments to update one AreaCompetenza.
     * @example
     * // Update one AreaCompetenza
     * const areaCompetenza = await prisma.areaCompetenza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaCompetenzaUpdateArgs>(args: SelectSubset<T, AreaCompetenzaUpdateArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AreaCompetenzas.
     * @param {AreaCompetenzaDeleteManyArgs} args - Arguments to filter AreaCompetenzas to delete.
     * @example
     * // Delete a few AreaCompetenzas
     * const { count } = await prisma.areaCompetenza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaCompetenzaDeleteManyArgs>(args?: SelectSubset<T, AreaCompetenzaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreaCompetenzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCompetenzaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AreaCompetenzas
     * const areaCompetenza = await prisma.areaCompetenza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaCompetenzaUpdateManyArgs>(args: SelectSubset<T, AreaCompetenzaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreaCompetenzas and returns the data updated in the database.
     * @param {AreaCompetenzaUpdateManyAndReturnArgs} args - Arguments to update many AreaCompetenzas.
     * @example
     * // Update many AreaCompetenzas
     * const areaCompetenza = await prisma.areaCompetenza.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AreaCompetenzas and only return the `id`
     * const areaCompetenzaWithIdOnly = await prisma.areaCompetenza.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AreaCompetenzaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaCompetenzaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AreaCompetenza.
     * @param {AreaCompetenzaUpsertArgs} args - Arguments to update or create a AreaCompetenza.
     * @example
     * // Update or create a AreaCompetenza
     * const areaCompetenza = await prisma.areaCompetenza.upsert({
     *   create: {
     *     // ... data to create a AreaCompetenza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AreaCompetenza we want to update
     *   }
     * })
     */
    upsert<T extends AreaCompetenzaUpsertArgs>(args: SelectSubset<T, AreaCompetenzaUpsertArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AreaCompetenzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCompetenzaCountArgs} args - Arguments to filter AreaCompetenzas to count.
     * @example
     * // Count the number of AreaCompetenzas
     * const count = await prisma.areaCompetenza.count({
     *   where: {
     *     // ... the filter for the AreaCompetenzas we want to count
     *   }
     * })
    **/
    count<T extends AreaCompetenzaCountArgs>(
      args?: Subset<T, AreaCompetenzaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCompetenzaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AreaCompetenza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCompetenzaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaCompetenzaAggregateArgs>(args: Subset<T, AreaCompetenzaAggregateArgs>): Prisma.PrismaPromise<GetAreaCompetenzaAggregateType<T>>

    /**
     * Group by AreaCompetenza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCompetenzaGroupByArgs} args - Group by arguments.
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
      T extends AreaCompetenzaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaCompetenzaGroupByArgs['orderBy'] }
        : { orderBy?: AreaCompetenzaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AreaCompetenzaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaCompetenzaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AreaCompetenza model
   */
  readonly fields: AreaCompetenzaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AreaCompetenza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaCompetenzaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orari<T extends AreaCompetenza$orariArgs<ExtArgs> = {}>(args?: Subset<T, AreaCompetenza$orariArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorie<T extends AreaCompetenza$categorieArgs<ExtArgs> = {}>(args?: Subset<T, AreaCompetenza$categorieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AreaCompetenza model
   */
  interface AreaCompetenzaFieldRefs {
    readonly id: FieldRef<"AreaCompetenza", 'Int'>
    readonly descrizione: FieldRef<"AreaCompetenza", 'String'>
    readonly dataCreaz: FieldRef<"AreaCompetenza", 'DateTime'>
    readonly dataAgg: FieldRef<"AreaCompetenza", 'DateTime'>
    readonly isAttiva: FieldRef<"AreaCompetenza", 'Boolean'>
    readonly note: FieldRef<"AreaCompetenza", 'String'>
    readonly ordine: FieldRef<"AreaCompetenza", 'Int'>
    readonly descrizioneInglese: FieldRef<"AreaCompetenza", 'String'>
    readonly noteInglese: FieldRef<"AreaCompetenza", 'String'>
    readonly isMenuFisso: FieldRef<"AreaCompetenza", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AreaCompetenza findUnique
   */
  export type AreaCompetenzaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * Filter, which AreaCompetenza to fetch.
     */
    where: AreaCompetenzaWhereUniqueInput
  }

  /**
   * AreaCompetenza findUniqueOrThrow
   */
  export type AreaCompetenzaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * Filter, which AreaCompetenza to fetch.
     */
    where: AreaCompetenzaWhereUniqueInput
  }

  /**
   * AreaCompetenza findFirst
   */
  export type AreaCompetenzaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * Filter, which AreaCompetenza to fetch.
     */
    where?: AreaCompetenzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaCompetenzas to fetch.
     */
    orderBy?: AreaCompetenzaOrderByWithRelationInput | AreaCompetenzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaCompetenzas.
     */
    cursor?: AreaCompetenzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaCompetenzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaCompetenzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaCompetenzas.
     */
    distinct?: AreaCompetenzaScalarFieldEnum | AreaCompetenzaScalarFieldEnum[]
  }

  /**
   * AreaCompetenza findFirstOrThrow
   */
  export type AreaCompetenzaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * Filter, which AreaCompetenza to fetch.
     */
    where?: AreaCompetenzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaCompetenzas to fetch.
     */
    orderBy?: AreaCompetenzaOrderByWithRelationInput | AreaCompetenzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaCompetenzas.
     */
    cursor?: AreaCompetenzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaCompetenzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaCompetenzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaCompetenzas.
     */
    distinct?: AreaCompetenzaScalarFieldEnum | AreaCompetenzaScalarFieldEnum[]
  }

  /**
   * AreaCompetenza findMany
   */
  export type AreaCompetenzaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * Filter, which AreaCompetenzas to fetch.
     */
    where?: AreaCompetenzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaCompetenzas to fetch.
     */
    orderBy?: AreaCompetenzaOrderByWithRelationInput | AreaCompetenzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AreaCompetenzas.
     */
    cursor?: AreaCompetenzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaCompetenzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaCompetenzas.
     */
    skip?: number
    distinct?: AreaCompetenzaScalarFieldEnum | AreaCompetenzaScalarFieldEnum[]
  }

  /**
   * AreaCompetenza create
   */
  export type AreaCompetenzaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * The data needed to create a AreaCompetenza.
     */
    data: XOR<AreaCompetenzaCreateInput, AreaCompetenzaUncheckedCreateInput>
  }

  /**
   * AreaCompetenza createMany
   */
  export type AreaCompetenzaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AreaCompetenzas.
     */
    data: AreaCompetenzaCreateManyInput | AreaCompetenzaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AreaCompetenza createManyAndReturn
   */
  export type AreaCompetenzaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * The data used to create many AreaCompetenzas.
     */
    data: AreaCompetenzaCreateManyInput | AreaCompetenzaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AreaCompetenza update
   */
  export type AreaCompetenzaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * The data needed to update a AreaCompetenza.
     */
    data: XOR<AreaCompetenzaUpdateInput, AreaCompetenzaUncheckedUpdateInput>
    /**
     * Choose, which AreaCompetenza to update.
     */
    where: AreaCompetenzaWhereUniqueInput
  }

  /**
   * AreaCompetenza updateMany
   */
  export type AreaCompetenzaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AreaCompetenzas.
     */
    data: XOR<AreaCompetenzaUpdateManyMutationInput, AreaCompetenzaUncheckedUpdateManyInput>
    /**
     * Filter which AreaCompetenzas to update
     */
    where?: AreaCompetenzaWhereInput
    /**
     * Limit how many AreaCompetenzas to update.
     */
    limit?: number
  }

  /**
   * AreaCompetenza updateManyAndReturn
   */
  export type AreaCompetenzaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * The data used to update AreaCompetenzas.
     */
    data: XOR<AreaCompetenzaUpdateManyMutationInput, AreaCompetenzaUncheckedUpdateManyInput>
    /**
     * Filter which AreaCompetenzas to update
     */
    where?: AreaCompetenzaWhereInput
    /**
     * Limit how many AreaCompetenzas to update.
     */
    limit?: number
  }

  /**
   * AreaCompetenza upsert
   */
  export type AreaCompetenzaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * The filter to search for the AreaCompetenza to update in case it exists.
     */
    where: AreaCompetenzaWhereUniqueInput
    /**
     * In case the AreaCompetenza found by the `where` argument doesn't exist, create a new AreaCompetenza with this data.
     */
    create: XOR<AreaCompetenzaCreateInput, AreaCompetenzaUncheckedCreateInput>
    /**
     * In case the AreaCompetenza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaCompetenzaUpdateInput, AreaCompetenzaUncheckedUpdateInput>
  }

  /**
   * AreaCompetenza delete
   */
  export type AreaCompetenzaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    /**
     * Filter which AreaCompetenza to delete.
     */
    where: AreaCompetenzaWhereUniqueInput
  }

  /**
   * AreaCompetenza deleteMany
   */
  export type AreaCompetenzaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AreaCompetenzas to delete
     */
    where?: AreaCompetenzaWhereInput
    /**
     * Limit how many AreaCompetenzas to delete.
     */
    limit?: number
  }

  /**
   * AreaCompetenza.orari
   */
  export type AreaCompetenza$orariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    where?: OrarioAreaWhereInput
    orderBy?: OrarioAreaOrderByWithRelationInput | OrarioAreaOrderByWithRelationInput[]
    cursor?: OrarioAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrarioAreaScalarFieldEnum | OrarioAreaScalarFieldEnum[]
  }

  /**
   * AreaCompetenza.categorie
   */
  export type AreaCompetenza$categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * AreaCompetenza without action
   */
  export type AreaCompetenzaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
  }


  /**
   * Model OrarioArea
   */

  export type AggregateOrarioArea = {
    _count: OrarioAreaCountAggregateOutputType | null
    _avg: OrarioAreaAvgAggregateOutputType | null
    _sum: OrarioAreaSumAggregateOutputType | null
    _min: OrarioAreaMinAggregateOutputType | null
    _max: OrarioAreaMaxAggregateOutputType | null
  }

  export type OrarioAreaAvgAggregateOutputType = {
    id: number | null
    areaId: number | null
  }

  export type OrarioAreaSumAggregateOutputType = {
    id: number | null
    areaId: number | null
  }

  export type OrarioAreaMinAggregateOutputType = {
    id: number | null
    areaId: number | null
    giorno: string | null
    start: Date | null
    end: Date | null
  }

  export type OrarioAreaMaxAggregateOutputType = {
    id: number | null
    areaId: number | null
    giorno: string | null
    start: Date | null
    end: Date | null
  }

  export type OrarioAreaCountAggregateOutputType = {
    id: number
    areaId: number
    giorno: number
    start: number
    end: number
    _all: number
  }


  export type OrarioAreaAvgAggregateInputType = {
    id?: true
    areaId?: true
  }

  export type OrarioAreaSumAggregateInputType = {
    id?: true
    areaId?: true
  }

  export type OrarioAreaMinAggregateInputType = {
    id?: true
    areaId?: true
    giorno?: true
    start?: true
    end?: true
  }

  export type OrarioAreaMaxAggregateInputType = {
    id?: true
    areaId?: true
    giorno?: true
    start?: true
    end?: true
  }

  export type OrarioAreaCountAggregateInputType = {
    id?: true
    areaId?: true
    giorno?: true
    start?: true
    end?: true
    _all?: true
  }

  export type OrarioAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrarioArea to aggregate.
     */
    where?: OrarioAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrarioAreas to fetch.
     */
    orderBy?: OrarioAreaOrderByWithRelationInput | OrarioAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrarioAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrarioAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrarioAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrarioAreas
    **/
    _count?: true | OrarioAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrarioAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrarioAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrarioAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrarioAreaMaxAggregateInputType
  }

  export type GetOrarioAreaAggregateType<T extends OrarioAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateOrarioArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrarioArea[P]>
      : GetScalarType<T[P], AggregateOrarioArea[P]>
  }




  export type OrarioAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrarioAreaWhereInput
    orderBy?: OrarioAreaOrderByWithAggregationInput | OrarioAreaOrderByWithAggregationInput[]
    by: OrarioAreaScalarFieldEnum[] | OrarioAreaScalarFieldEnum
    having?: OrarioAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrarioAreaCountAggregateInputType | true
    _avg?: OrarioAreaAvgAggregateInputType
    _sum?: OrarioAreaSumAggregateInputType
    _min?: OrarioAreaMinAggregateInputType
    _max?: OrarioAreaMaxAggregateInputType
  }

  export type OrarioAreaGroupByOutputType = {
    id: number
    areaId: number
    giorno: string
    start: Date
    end: Date
    _count: OrarioAreaCountAggregateOutputType | null
    _avg: OrarioAreaAvgAggregateOutputType | null
    _sum: OrarioAreaSumAggregateOutputType | null
    _min: OrarioAreaMinAggregateOutputType | null
    _max: OrarioAreaMaxAggregateOutputType | null
  }

  type GetOrarioAreaGroupByPayload<T extends OrarioAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrarioAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrarioAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrarioAreaGroupByOutputType[P]>
            : GetScalarType<T[P], OrarioAreaGroupByOutputType[P]>
        }
      >
    >


  export type OrarioAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaId?: boolean
    giorno?: boolean
    start?: boolean
    end?: boolean
    area?: boolean | AreaCompetenzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orarioArea"]>

  export type OrarioAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaId?: boolean
    giorno?: boolean
    start?: boolean
    end?: boolean
    area?: boolean | AreaCompetenzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orarioArea"]>

  export type OrarioAreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaId?: boolean
    giorno?: boolean
    start?: boolean
    end?: boolean
    area?: boolean | AreaCompetenzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orarioArea"]>

  export type OrarioAreaSelectScalar = {
    id?: boolean
    areaId?: boolean
    giorno?: boolean
    start?: boolean
    end?: boolean
  }

  export type OrarioAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "areaId" | "giorno" | "start" | "end", ExtArgs["result"]["orarioArea"]>
  export type OrarioAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaCompetenzaDefaultArgs<ExtArgs>
  }
  export type OrarioAreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaCompetenzaDefaultArgs<ExtArgs>
  }
  export type OrarioAreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaCompetenzaDefaultArgs<ExtArgs>
  }

  export type $OrarioAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrarioArea"
    objects: {
      area: Prisma.$AreaCompetenzaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      areaId: number
      giorno: string
      start: Date
      end: Date
    }, ExtArgs["result"]["orarioArea"]>
    composites: {}
  }

  type OrarioAreaGetPayload<S extends boolean | null | undefined | OrarioAreaDefaultArgs> = $Result.GetResult<Prisma.$OrarioAreaPayload, S>

  type OrarioAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrarioAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrarioAreaCountAggregateInputType | true
    }

  export interface OrarioAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrarioArea'], meta: { name: 'OrarioArea' } }
    /**
     * Find zero or one OrarioArea that matches the filter.
     * @param {OrarioAreaFindUniqueArgs} args - Arguments to find a OrarioArea
     * @example
     * // Get one OrarioArea
     * const orarioArea = await prisma.orarioArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrarioAreaFindUniqueArgs>(args: SelectSubset<T, OrarioAreaFindUniqueArgs<ExtArgs>>): Prisma__OrarioAreaClient<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrarioArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrarioAreaFindUniqueOrThrowArgs} args - Arguments to find a OrarioArea
     * @example
     * // Get one OrarioArea
     * const orarioArea = await prisma.orarioArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrarioAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, OrarioAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrarioAreaClient<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrarioArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrarioAreaFindFirstArgs} args - Arguments to find a OrarioArea
     * @example
     * // Get one OrarioArea
     * const orarioArea = await prisma.orarioArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrarioAreaFindFirstArgs>(args?: SelectSubset<T, OrarioAreaFindFirstArgs<ExtArgs>>): Prisma__OrarioAreaClient<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrarioArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrarioAreaFindFirstOrThrowArgs} args - Arguments to find a OrarioArea
     * @example
     * // Get one OrarioArea
     * const orarioArea = await prisma.orarioArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrarioAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, OrarioAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrarioAreaClient<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrarioAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrarioAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrarioAreas
     * const orarioAreas = await prisma.orarioArea.findMany()
     * 
     * // Get first 10 OrarioAreas
     * const orarioAreas = await prisma.orarioArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orarioAreaWithIdOnly = await prisma.orarioArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrarioAreaFindManyArgs>(args?: SelectSubset<T, OrarioAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrarioArea.
     * @param {OrarioAreaCreateArgs} args - Arguments to create a OrarioArea.
     * @example
     * // Create one OrarioArea
     * const OrarioArea = await prisma.orarioArea.create({
     *   data: {
     *     // ... data to create a OrarioArea
     *   }
     * })
     * 
     */
    create<T extends OrarioAreaCreateArgs>(args: SelectSubset<T, OrarioAreaCreateArgs<ExtArgs>>): Prisma__OrarioAreaClient<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrarioAreas.
     * @param {OrarioAreaCreateManyArgs} args - Arguments to create many OrarioAreas.
     * @example
     * // Create many OrarioAreas
     * const orarioArea = await prisma.orarioArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrarioAreaCreateManyArgs>(args?: SelectSubset<T, OrarioAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrarioAreas and returns the data saved in the database.
     * @param {OrarioAreaCreateManyAndReturnArgs} args - Arguments to create many OrarioAreas.
     * @example
     * // Create many OrarioAreas
     * const orarioArea = await prisma.orarioArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrarioAreas and only return the `id`
     * const orarioAreaWithIdOnly = await prisma.orarioArea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrarioAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, OrarioAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrarioArea.
     * @param {OrarioAreaDeleteArgs} args - Arguments to delete one OrarioArea.
     * @example
     * // Delete one OrarioArea
     * const OrarioArea = await prisma.orarioArea.delete({
     *   where: {
     *     // ... filter to delete one OrarioArea
     *   }
     * })
     * 
     */
    delete<T extends OrarioAreaDeleteArgs>(args: SelectSubset<T, OrarioAreaDeleteArgs<ExtArgs>>): Prisma__OrarioAreaClient<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrarioArea.
     * @param {OrarioAreaUpdateArgs} args - Arguments to update one OrarioArea.
     * @example
     * // Update one OrarioArea
     * const orarioArea = await prisma.orarioArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrarioAreaUpdateArgs>(args: SelectSubset<T, OrarioAreaUpdateArgs<ExtArgs>>): Prisma__OrarioAreaClient<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrarioAreas.
     * @param {OrarioAreaDeleteManyArgs} args - Arguments to filter OrarioAreas to delete.
     * @example
     * // Delete a few OrarioAreas
     * const { count } = await prisma.orarioArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrarioAreaDeleteManyArgs>(args?: SelectSubset<T, OrarioAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrarioAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrarioAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrarioAreas
     * const orarioArea = await prisma.orarioArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrarioAreaUpdateManyArgs>(args: SelectSubset<T, OrarioAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrarioAreas and returns the data updated in the database.
     * @param {OrarioAreaUpdateManyAndReturnArgs} args - Arguments to update many OrarioAreas.
     * @example
     * // Update many OrarioAreas
     * const orarioArea = await prisma.orarioArea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrarioAreas and only return the `id`
     * const orarioAreaWithIdOnly = await prisma.orarioArea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrarioAreaUpdateManyAndReturnArgs>(args: SelectSubset<T, OrarioAreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrarioArea.
     * @param {OrarioAreaUpsertArgs} args - Arguments to update or create a OrarioArea.
     * @example
     * // Update or create a OrarioArea
     * const orarioArea = await prisma.orarioArea.upsert({
     *   create: {
     *     // ... data to create a OrarioArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrarioArea we want to update
     *   }
     * })
     */
    upsert<T extends OrarioAreaUpsertArgs>(args: SelectSubset<T, OrarioAreaUpsertArgs<ExtArgs>>): Prisma__OrarioAreaClient<$Result.GetResult<Prisma.$OrarioAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrarioAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrarioAreaCountArgs} args - Arguments to filter OrarioAreas to count.
     * @example
     * // Count the number of OrarioAreas
     * const count = await prisma.orarioArea.count({
     *   where: {
     *     // ... the filter for the OrarioAreas we want to count
     *   }
     * })
    **/
    count<T extends OrarioAreaCountArgs>(
      args?: Subset<T, OrarioAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrarioAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrarioArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrarioAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrarioAreaAggregateArgs>(args: Subset<T, OrarioAreaAggregateArgs>): Prisma.PrismaPromise<GetOrarioAreaAggregateType<T>>

    /**
     * Group by OrarioArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrarioAreaGroupByArgs} args - Group by arguments.
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
      T extends OrarioAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrarioAreaGroupByArgs['orderBy'] }
        : { orderBy?: OrarioAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrarioAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrarioAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrarioArea model
   */
  readonly fields: OrarioAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrarioArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrarioAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaCompetenzaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaCompetenzaDefaultArgs<ExtArgs>>): Prisma__AreaCompetenzaClient<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrarioArea model
   */
  interface OrarioAreaFieldRefs {
    readonly id: FieldRef<"OrarioArea", 'Int'>
    readonly areaId: FieldRef<"OrarioArea", 'Int'>
    readonly giorno: FieldRef<"OrarioArea", 'String'>
    readonly start: FieldRef<"OrarioArea", 'DateTime'>
    readonly end: FieldRef<"OrarioArea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrarioArea findUnique
   */
  export type OrarioAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * Filter, which OrarioArea to fetch.
     */
    where: OrarioAreaWhereUniqueInput
  }

  /**
   * OrarioArea findUniqueOrThrow
   */
  export type OrarioAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * Filter, which OrarioArea to fetch.
     */
    where: OrarioAreaWhereUniqueInput
  }

  /**
   * OrarioArea findFirst
   */
  export type OrarioAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * Filter, which OrarioArea to fetch.
     */
    where?: OrarioAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrarioAreas to fetch.
     */
    orderBy?: OrarioAreaOrderByWithRelationInput | OrarioAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrarioAreas.
     */
    cursor?: OrarioAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrarioAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrarioAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrarioAreas.
     */
    distinct?: OrarioAreaScalarFieldEnum | OrarioAreaScalarFieldEnum[]
  }

  /**
   * OrarioArea findFirstOrThrow
   */
  export type OrarioAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * Filter, which OrarioArea to fetch.
     */
    where?: OrarioAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrarioAreas to fetch.
     */
    orderBy?: OrarioAreaOrderByWithRelationInput | OrarioAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrarioAreas.
     */
    cursor?: OrarioAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrarioAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrarioAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrarioAreas.
     */
    distinct?: OrarioAreaScalarFieldEnum | OrarioAreaScalarFieldEnum[]
  }

  /**
   * OrarioArea findMany
   */
  export type OrarioAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * Filter, which OrarioAreas to fetch.
     */
    where?: OrarioAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrarioAreas to fetch.
     */
    orderBy?: OrarioAreaOrderByWithRelationInput | OrarioAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrarioAreas.
     */
    cursor?: OrarioAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrarioAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrarioAreas.
     */
    skip?: number
    distinct?: OrarioAreaScalarFieldEnum | OrarioAreaScalarFieldEnum[]
  }

  /**
   * OrarioArea create
   */
  export type OrarioAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a OrarioArea.
     */
    data: XOR<OrarioAreaCreateInput, OrarioAreaUncheckedCreateInput>
  }

  /**
   * OrarioArea createMany
   */
  export type OrarioAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrarioAreas.
     */
    data: OrarioAreaCreateManyInput | OrarioAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrarioArea createManyAndReturn
   */
  export type OrarioAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * The data used to create many OrarioAreas.
     */
    data: OrarioAreaCreateManyInput | OrarioAreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrarioArea update
   */
  export type OrarioAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a OrarioArea.
     */
    data: XOR<OrarioAreaUpdateInput, OrarioAreaUncheckedUpdateInput>
    /**
     * Choose, which OrarioArea to update.
     */
    where: OrarioAreaWhereUniqueInput
  }

  /**
   * OrarioArea updateMany
   */
  export type OrarioAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrarioAreas.
     */
    data: XOR<OrarioAreaUpdateManyMutationInput, OrarioAreaUncheckedUpdateManyInput>
    /**
     * Filter which OrarioAreas to update
     */
    where?: OrarioAreaWhereInput
    /**
     * Limit how many OrarioAreas to update.
     */
    limit?: number
  }

  /**
   * OrarioArea updateManyAndReturn
   */
  export type OrarioAreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * The data used to update OrarioAreas.
     */
    data: XOR<OrarioAreaUpdateManyMutationInput, OrarioAreaUncheckedUpdateManyInput>
    /**
     * Filter which OrarioAreas to update
     */
    where?: OrarioAreaWhereInput
    /**
     * Limit how many OrarioAreas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrarioArea upsert
   */
  export type OrarioAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the OrarioArea to update in case it exists.
     */
    where: OrarioAreaWhereUniqueInput
    /**
     * In case the OrarioArea found by the `where` argument doesn't exist, create a new OrarioArea with this data.
     */
    create: XOR<OrarioAreaCreateInput, OrarioAreaUncheckedCreateInput>
    /**
     * In case the OrarioArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrarioAreaUpdateInput, OrarioAreaUncheckedUpdateInput>
  }

  /**
   * OrarioArea delete
   */
  export type OrarioAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
    /**
     * Filter which OrarioArea to delete.
     */
    where: OrarioAreaWhereUniqueInput
  }

  /**
   * OrarioArea deleteMany
   */
  export type OrarioAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrarioAreas to delete
     */
    where?: OrarioAreaWhereInput
    /**
     * Limit how many OrarioAreas to delete.
     */
    limit?: number
  }

  /**
   * OrarioArea without action
   */
  export type OrarioAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrarioArea
     */
    select?: OrarioAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrarioArea
     */
    omit?: OrarioAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrarioAreaInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
    ordineTastoPc: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
    ordineTastoPc: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    descrizioneLingua1: string | null
    isAttiva: boolean | null
    isVisibileSuSelfOrder: boolean | null
    ordineTastoPc: number | null
    dataCreaz: Date | null
    dataAgg: Date | null
    descrizioneLingua2: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    descrizioneLingua1: string | null
    isAttiva: boolean | null
    isVisibileSuSelfOrder: boolean | null
    ordineTastoPc: number | null
    dataCreaz: Date | null
    dataAgg: Date | null
    descrizioneLingua2: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    descrizioneLingua1: number
    isAttiva: number
    isVisibileSuSelfOrder: number
    ordineTastoPc: number
    dataCreaz: number
    dataAgg: number
    descrizioneLingua2: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
    ordineTastoPc?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
    ordineTastoPc?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    descrizioneLingua1?: true
    isAttiva?: true
    isVisibileSuSelfOrder?: true
    ordineTastoPc?: true
    dataCreaz?: true
    dataAgg?: true
    descrizioneLingua2?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    descrizioneLingua1?: true
    isAttiva?: true
    isVisibileSuSelfOrder?: true
    ordineTastoPc?: true
    dataCreaz?: true
    dataAgg?: true
    descrizioneLingua2?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    descrizioneLingua1?: true
    isAttiva?: true
    isVisibileSuSelfOrder?: true
    ordineTastoPc?: true
    dataCreaz?: true
    dataAgg?: true
    descrizioneLingua2?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    descrizioneLingua1: string
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc: number
    dataCreaz: Date
    dataAgg: Date
    descrizioneLingua2: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizioneLingua1?: boolean
    isAttiva?: boolean
    isVisibileSuSelfOrder?: boolean
    ordineTastoPc?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    descrizioneLingua2?: boolean
    pietanze?: boolean | Categoria$pietanzeArgs<ExtArgs>
    areeCompetenza?: boolean | Categoria$areeCompetenzaArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizioneLingua1?: boolean
    isAttiva?: boolean
    isVisibileSuSelfOrder?: boolean
    ordineTastoPc?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    descrizioneLingua2?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizioneLingua1?: boolean
    isAttiva?: boolean
    isVisibileSuSelfOrder?: boolean
    ordineTastoPc?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    descrizioneLingua2?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    descrizioneLingua1?: boolean
    isAttiva?: boolean
    isVisibileSuSelfOrder?: boolean
    ordineTastoPc?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    descrizioneLingua2?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descrizioneLingua1" | "isAttiva" | "isVisibileSuSelfOrder" | "ordineTastoPc" | "dataCreaz" | "dataAgg" | "descrizioneLingua2", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pietanze?: boolean | Categoria$pietanzeArgs<ExtArgs>
    areeCompetenza?: boolean | Categoria$areeCompetenzaArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      pietanze: Prisma.$PietanzaPayload<ExtArgs>[]
      areeCompetenza: Prisma.$AreaCompetenzaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descrizioneLingua1: string
      isAttiva: boolean
      isVisibileSuSelfOrder: boolean
      ordineTastoPc: number
      dataCreaz: Date
      dataAgg: Date
      descrizioneLingua2: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pietanze<T extends Categoria$pietanzeArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$pietanzeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    areeCompetenza<T extends Categoria$areeCompetenzaArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$areeCompetenzaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaCompetenzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly descrizioneLingua1: FieldRef<"Categoria", 'String'>
    readonly isAttiva: FieldRef<"Categoria", 'Boolean'>
    readonly isVisibileSuSelfOrder: FieldRef<"Categoria", 'Boolean'>
    readonly ordineTastoPc: FieldRef<"Categoria", 'Int'>
    readonly dataCreaz: FieldRef<"Categoria", 'DateTime'>
    readonly dataAgg: FieldRef<"Categoria", 'DateTime'>
    readonly descrizioneLingua2: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.pietanze
   */
  export type Categoria$pietanzeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    where?: PietanzaWhereInput
    orderBy?: PietanzaOrderByWithRelationInput | PietanzaOrderByWithRelationInput[]
    cursor?: PietanzaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PietanzaScalarFieldEnum | PietanzaScalarFieldEnum[]
  }

  /**
   * Categoria.areeCompetenza
   */
  export type Categoria$areeCompetenzaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCompetenza
     */
    select?: AreaCompetenzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaCompetenza
     */
    omit?: AreaCompetenzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaCompetenzaInclude<ExtArgs> | null
    where?: AreaCompetenzaWhereInput
    orderBy?: AreaCompetenzaOrderByWithRelationInput | AreaCompetenzaOrderByWithRelationInput[]
    cursor?: AreaCompetenzaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaCompetenzaScalarFieldEnum | AreaCompetenzaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Pietanza
   */

  export type AggregatePietanza = {
    _count: PietanzaCountAggregateOutputType | null
    _avg: PietanzaAvgAggregateOutputType | null
    _sum: PietanzaSumAggregateOutputType | null
    _min: PietanzaMinAggregateOutputType | null
    _max: PietanzaMaxAggregateOutputType | null
  }

  export type PietanzaAvgAggregateOutputType = {
    id: number | null
    idCategoriaPietanza: number | null
    prezzo: number | null
    ordineTastoPc: number | null
  }

  export type PietanzaSumAggregateOutputType = {
    id: number | null
    idCategoriaPietanza: number | null
    prezzo: number | null
    ordineTastoPc: number | null
  }

  export type PietanzaMinAggregateOutputType = {
    id: number | null
    idCategoriaPietanza: number | null
    descrizioneLingua1: string | null
    prezzo: number | null
    isAttiva: boolean | null
    isVisibileSuSelfOrder: boolean | null
    ordineTastoPc: number | null
    dataCreaz: Date | null
    dataAgg: Date | null
    note: string | null
    image: string | null
    descrizioneLingua2: string | null
    noteLingua2: string | null
  }

  export type PietanzaMaxAggregateOutputType = {
    id: number | null
    idCategoriaPietanza: number | null
    descrizioneLingua1: string | null
    prezzo: number | null
    isAttiva: boolean | null
    isVisibileSuSelfOrder: boolean | null
    ordineTastoPc: number | null
    dataCreaz: Date | null
    dataAgg: Date | null
    note: string | null
    image: string | null
    descrizioneLingua2: string | null
    noteLingua2: string | null
  }

  export type PietanzaCountAggregateOutputType = {
    id: number
    idCategoriaPietanza: number
    descrizioneLingua1: number
    prezzo: number
    isAttiva: number
    isVisibileSuSelfOrder: number
    ordineTastoPc: number
    dataCreaz: number
    dataAgg: number
    note: number
    image: number
    descrizioneLingua2: number
    noteLingua2: number
    _all: number
  }


  export type PietanzaAvgAggregateInputType = {
    id?: true
    idCategoriaPietanza?: true
    prezzo?: true
    ordineTastoPc?: true
  }

  export type PietanzaSumAggregateInputType = {
    id?: true
    idCategoriaPietanza?: true
    prezzo?: true
    ordineTastoPc?: true
  }

  export type PietanzaMinAggregateInputType = {
    id?: true
    idCategoriaPietanza?: true
    descrizioneLingua1?: true
    prezzo?: true
    isAttiva?: true
    isVisibileSuSelfOrder?: true
    ordineTastoPc?: true
    dataCreaz?: true
    dataAgg?: true
    note?: true
    image?: true
    descrizioneLingua2?: true
    noteLingua2?: true
  }

  export type PietanzaMaxAggregateInputType = {
    id?: true
    idCategoriaPietanza?: true
    descrizioneLingua1?: true
    prezzo?: true
    isAttiva?: true
    isVisibileSuSelfOrder?: true
    ordineTastoPc?: true
    dataCreaz?: true
    dataAgg?: true
    note?: true
    image?: true
    descrizioneLingua2?: true
    noteLingua2?: true
  }

  export type PietanzaCountAggregateInputType = {
    id?: true
    idCategoriaPietanza?: true
    descrizioneLingua1?: true
    prezzo?: true
    isAttiva?: true
    isVisibileSuSelfOrder?: true
    ordineTastoPc?: true
    dataCreaz?: true
    dataAgg?: true
    note?: true
    image?: true
    descrizioneLingua2?: true
    noteLingua2?: true
    _all?: true
  }

  export type PietanzaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pietanza to aggregate.
     */
    where?: PietanzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pietanzas to fetch.
     */
    orderBy?: PietanzaOrderByWithRelationInput | PietanzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PietanzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pietanzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pietanzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pietanzas
    **/
    _count?: true | PietanzaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PietanzaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PietanzaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PietanzaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PietanzaMaxAggregateInputType
  }

  export type GetPietanzaAggregateType<T extends PietanzaAggregateArgs> = {
        [P in keyof T & keyof AggregatePietanza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePietanza[P]>
      : GetScalarType<T[P], AggregatePietanza[P]>
  }




  export type PietanzaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PietanzaWhereInput
    orderBy?: PietanzaOrderByWithAggregationInput | PietanzaOrderByWithAggregationInput[]
    by: PietanzaScalarFieldEnum[] | PietanzaScalarFieldEnum
    having?: PietanzaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PietanzaCountAggregateInputType | true
    _avg?: PietanzaAvgAggregateInputType
    _sum?: PietanzaSumAggregateInputType
    _min?: PietanzaMinAggregateInputType
    _max?: PietanzaMaxAggregateInputType
  }

  export type PietanzaGroupByOutputType = {
    id: number
    idCategoriaPietanza: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc: number
    dataCreaz: Date
    dataAgg: Date
    note: string | null
    image: string | null
    descrizioneLingua2: string | null
    noteLingua2: string | null
    _count: PietanzaCountAggregateOutputType | null
    _avg: PietanzaAvgAggregateOutputType | null
    _sum: PietanzaSumAggregateOutputType | null
    _min: PietanzaMinAggregateOutputType | null
    _max: PietanzaMaxAggregateOutputType | null
  }

  type GetPietanzaGroupByPayload<T extends PietanzaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PietanzaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PietanzaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PietanzaGroupByOutputType[P]>
            : GetScalarType<T[P], PietanzaGroupByOutputType[P]>
        }
      >
    >


  export type PietanzaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCategoriaPietanza?: boolean
    descrizioneLingua1?: boolean
    prezzo?: boolean
    isAttiva?: boolean
    isVisibileSuSelfOrder?: boolean
    ordineTastoPc?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    note?: boolean
    image?: boolean
    descrizioneLingua2?: boolean
    noteLingua2?: boolean
    correlataBy?: boolean | Pietanza$correlataByArgs<ExtArgs>
    correlata?: boolean | Pietanza$correlataArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    tag?: boolean | Pietanza$tagArgs<ExtArgs>
    _count?: boolean | PietanzaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pietanza"]>

  export type PietanzaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCategoriaPietanza?: boolean
    descrizioneLingua1?: boolean
    prezzo?: boolean
    isAttiva?: boolean
    isVisibileSuSelfOrder?: boolean
    ordineTastoPc?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    note?: boolean
    image?: boolean
    descrizioneLingua2?: boolean
    noteLingua2?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pietanza"]>

  export type PietanzaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCategoriaPietanza?: boolean
    descrizioneLingua1?: boolean
    prezzo?: boolean
    isAttiva?: boolean
    isVisibileSuSelfOrder?: boolean
    ordineTastoPc?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    note?: boolean
    image?: boolean
    descrizioneLingua2?: boolean
    noteLingua2?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pietanza"]>

  export type PietanzaSelectScalar = {
    id?: boolean
    idCategoriaPietanza?: boolean
    descrizioneLingua1?: boolean
    prezzo?: boolean
    isAttiva?: boolean
    isVisibileSuSelfOrder?: boolean
    ordineTastoPc?: boolean
    dataCreaz?: boolean
    dataAgg?: boolean
    note?: boolean
    image?: boolean
    descrizioneLingua2?: boolean
    noteLingua2?: boolean
  }

  export type PietanzaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCategoriaPietanza" | "descrizioneLingua1" | "prezzo" | "isAttiva" | "isVisibileSuSelfOrder" | "ordineTastoPc" | "dataCreaz" | "dataAgg" | "note" | "image" | "descrizioneLingua2" | "noteLingua2", ExtArgs["result"]["pietanza"]>
  export type PietanzaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correlataBy?: boolean | Pietanza$correlataByArgs<ExtArgs>
    correlata?: boolean | Pietanza$correlataArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    tag?: boolean | Pietanza$tagArgs<ExtArgs>
    _count?: boolean | PietanzaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PietanzaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type PietanzaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $PietanzaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pietanza"
    objects: {
      correlataBy: Prisma.$CrossSellingPayload<ExtArgs>[]
      correlata: Prisma.$CrossSellingPayload<ExtArgs>[]
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCategoriaPietanza: number
      descrizioneLingua1: string
      prezzo: number
      isAttiva: boolean
      isVisibileSuSelfOrder: boolean
      ordineTastoPc: number
      dataCreaz: Date
      dataAgg: Date
      note: string | null
      image: string | null
      descrizioneLingua2: string | null
      noteLingua2: string | null
    }, ExtArgs["result"]["pietanza"]>
    composites: {}
  }

  type PietanzaGetPayload<S extends boolean | null | undefined | PietanzaDefaultArgs> = $Result.GetResult<Prisma.$PietanzaPayload, S>

  type PietanzaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PietanzaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PietanzaCountAggregateInputType | true
    }

  export interface PietanzaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pietanza'], meta: { name: 'Pietanza' } }
    /**
     * Find zero or one Pietanza that matches the filter.
     * @param {PietanzaFindUniqueArgs} args - Arguments to find a Pietanza
     * @example
     * // Get one Pietanza
     * const pietanza = await prisma.pietanza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PietanzaFindUniqueArgs>(args: SelectSubset<T, PietanzaFindUniqueArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pietanza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PietanzaFindUniqueOrThrowArgs} args - Arguments to find a Pietanza
     * @example
     * // Get one Pietanza
     * const pietanza = await prisma.pietanza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PietanzaFindUniqueOrThrowArgs>(args: SelectSubset<T, PietanzaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pietanza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PietanzaFindFirstArgs} args - Arguments to find a Pietanza
     * @example
     * // Get one Pietanza
     * const pietanza = await prisma.pietanza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PietanzaFindFirstArgs>(args?: SelectSubset<T, PietanzaFindFirstArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pietanza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PietanzaFindFirstOrThrowArgs} args - Arguments to find a Pietanza
     * @example
     * // Get one Pietanza
     * const pietanza = await prisma.pietanza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PietanzaFindFirstOrThrowArgs>(args?: SelectSubset<T, PietanzaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pietanzas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PietanzaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pietanzas
     * const pietanzas = await prisma.pietanza.findMany()
     * 
     * // Get first 10 Pietanzas
     * const pietanzas = await prisma.pietanza.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pietanzaWithIdOnly = await prisma.pietanza.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PietanzaFindManyArgs>(args?: SelectSubset<T, PietanzaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pietanza.
     * @param {PietanzaCreateArgs} args - Arguments to create a Pietanza.
     * @example
     * // Create one Pietanza
     * const Pietanza = await prisma.pietanza.create({
     *   data: {
     *     // ... data to create a Pietanza
     *   }
     * })
     * 
     */
    create<T extends PietanzaCreateArgs>(args: SelectSubset<T, PietanzaCreateArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pietanzas.
     * @param {PietanzaCreateManyArgs} args - Arguments to create many Pietanzas.
     * @example
     * // Create many Pietanzas
     * const pietanza = await prisma.pietanza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PietanzaCreateManyArgs>(args?: SelectSubset<T, PietanzaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pietanzas and returns the data saved in the database.
     * @param {PietanzaCreateManyAndReturnArgs} args - Arguments to create many Pietanzas.
     * @example
     * // Create many Pietanzas
     * const pietanza = await prisma.pietanza.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pietanzas and only return the `id`
     * const pietanzaWithIdOnly = await prisma.pietanza.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PietanzaCreateManyAndReturnArgs>(args?: SelectSubset<T, PietanzaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pietanza.
     * @param {PietanzaDeleteArgs} args - Arguments to delete one Pietanza.
     * @example
     * // Delete one Pietanza
     * const Pietanza = await prisma.pietanza.delete({
     *   where: {
     *     // ... filter to delete one Pietanza
     *   }
     * })
     * 
     */
    delete<T extends PietanzaDeleteArgs>(args: SelectSubset<T, PietanzaDeleteArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pietanza.
     * @param {PietanzaUpdateArgs} args - Arguments to update one Pietanza.
     * @example
     * // Update one Pietanza
     * const pietanza = await prisma.pietanza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PietanzaUpdateArgs>(args: SelectSubset<T, PietanzaUpdateArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pietanzas.
     * @param {PietanzaDeleteManyArgs} args - Arguments to filter Pietanzas to delete.
     * @example
     * // Delete a few Pietanzas
     * const { count } = await prisma.pietanza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PietanzaDeleteManyArgs>(args?: SelectSubset<T, PietanzaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pietanzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PietanzaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pietanzas
     * const pietanza = await prisma.pietanza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PietanzaUpdateManyArgs>(args: SelectSubset<T, PietanzaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pietanzas and returns the data updated in the database.
     * @param {PietanzaUpdateManyAndReturnArgs} args - Arguments to update many Pietanzas.
     * @example
     * // Update many Pietanzas
     * const pietanza = await prisma.pietanza.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pietanzas and only return the `id`
     * const pietanzaWithIdOnly = await prisma.pietanza.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PietanzaUpdateManyAndReturnArgs>(args: SelectSubset<T, PietanzaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pietanza.
     * @param {PietanzaUpsertArgs} args - Arguments to update or create a Pietanza.
     * @example
     * // Update or create a Pietanza
     * const pietanza = await prisma.pietanza.upsert({
     *   create: {
     *     // ... data to create a Pietanza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pietanza we want to update
     *   }
     * })
     */
    upsert<T extends PietanzaUpsertArgs>(args: SelectSubset<T, PietanzaUpsertArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pietanzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PietanzaCountArgs} args - Arguments to filter Pietanzas to count.
     * @example
     * // Count the number of Pietanzas
     * const count = await prisma.pietanza.count({
     *   where: {
     *     // ... the filter for the Pietanzas we want to count
     *   }
     * })
    **/
    count<T extends PietanzaCountArgs>(
      args?: Subset<T, PietanzaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PietanzaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pietanza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PietanzaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PietanzaAggregateArgs>(args: Subset<T, PietanzaAggregateArgs>): Prisma.PrismaPromise<GetPietanzaAggregateType<T>>

    /**
     * Group by Pietanza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PietanzaGroupByArgs} args - Group by arguments.
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
      T extends PietanzaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PietanzaGroupByArgs['orderBy'] }
        : { orderBy?: PietanzaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PietanzaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPietanzaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pietanza model
   */
  readonly fields: PietanzaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pietanza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PietanzaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    correlataBy<T extends Pietanza$correlataByArgs<ExtArgs> = {}>(args?: Subset<T, Pietanza$correlataByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    correlata<T extends Pietanza$correlataArgs<ExtArgs> = {}>(args?: Subset<T, Pietanza$correlataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends Pietanza$tagArgs<ExtArgs> = {}>(args?: Subset<T, Pietanza$tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pietanza model
   */
  interface PietanzaFieldRefs {
    readonly id: FieldRef<"Pietanza", 'Int'>
    readonly idCategoriaPietanza: FieldRef<"Pietanza", 'Int'>
    readonly descrizioneLingua1: FieldRef<"Pietanza", 'String'>
    readonly prezzo: FieldRef<"Pietanza", 'Float'>
    readonly isAttiva: FieldRef<"Pietanza", 'Boolean'>
    readonly isVisibileSuSelfOrder: FieldRef<"Pietanza", 'Boolean'>
    readonly ordineTastoPc: FieldRef<"Pietanza", 'Int'>
    readonly dataCreaz: FieldRef<"Pietanza", 'DateTime'>
    readonly dataAgg: FieldRef<"Pietanza", 'DateTime'>
    readonly note: FieldRef<"Pietanza", 'String'>
    readonly image: FieldRef<"Pietanza", 'String'>
    readonly descrizioneLingua2: FieldRef<"Pietanza", 'String'>
    readonly noteLingua2: FieldRef<"Pietanza", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pietanza findUnique
   */
  export type PietanzaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * Filter, which Pietanza to fetch.
     */
    where: PietanzaWhereUniqueInput
  }

  /**
   * Pietanza findUniqueOrThrow
   */
  export type PietanzaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * Filter, which Pietanza to fetch.
     */
    where: PietanzaWhereUniqueInput
  }

  /**
   * Pietanza findFirst
   */
  export type PietanzaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * Filter, which Pietanza to fetch.
     */
    where?: PietanzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pietanzas to fetch.
     */
    orderBy?: PietanzaOrderByWithRelationInput | PietanzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pietanzas.
     */
    cursor?: PietanzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pietanzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pietanzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pietanzas.
     */
    distinct?: PietanzaScalarFieldEnum | PietanzaScalarFieldEnum[]
  }

  /**
   * Pietanza findFirstOrThrow
   */
  export type PietanzaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * Filter, which Pietanza to fetch.
     */
    where?: PietanzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pietanzas to fetch.
     */
    orderBy?: PietanzaOrderByWithRelationInput | PietanzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pietanzas.
     */
    cursor?: PietanzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pietanzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pietanzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pietanzas.
     */
    distinct?: PietanzaScalarFieldEnum | PietanzaScalarFieldEnum[]
  }

  /**
   * Pietanza findMany
   */
  export type PietanzaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * Filter, which Pietanzas to fetch.
     */
    where?: PietanzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pietanzas to fetch.
     */
    orderBy?: PietanzaOrderByWithRelationInput | PietanzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pietanzas.
     */
    cursor?: PietanzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pietanzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pietanzas.
     */
    skip?: number
    distinct?: PietanzaScalarFieldEnum | PietanzaScalarFieldEnum[]
  }

  /**
   * Pietanza create
   */
  export type PietanzaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pietanza.
     */
    data: XOR<PietanzaCreateInput, PietanzaUncheckedCreateInput>
  }

  /**
   * Pietanza createMany
   */
  export type PietanzaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pietanzas.
     */
    data: PietanzaCreateManyInput | PietanzaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pietanza createManyAndReturn
   */
  export type PietanzaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * The data used to create many Pietanzas.
     */
    data: PietanzaCreateManyInput | PietanzaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pietanza update
   */
  export type PietanzaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pietanza.
     */
    data: XOR<PietanzaUpdateInput, PietanzaUncheckedUpdateInput>
    /**
     * Choose, which Pietanza to update.
     */
    where: PietanzaWhereUniqueInput
  }

  /**
   * Pietanza updateMany
   */
  export type PietanzaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pietanzas.
     */
    data: XOR<PietanzaUpdateManyMutationInput, PietanzaUncheckedUpdateManyInput>
    /**
     * Filter which Pietanzas to update
     */
    where?: PietanzaWhereInput
    /**
     * Limit how many Pietanzas to update.
     */
    limit?: number
  }

  /**
   * Pietanza updateManyAndReturn
   */
  export type PietanzaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * The data used to update Pietanzas.
     */
    data: XOR<PietanzaUpdateManyMutationInput, PietanzaUncheckedUpdateManyInput>
    /**
     * Filter which Pietanzas to update
     */
    where?: PietanzaWhereInput
    /**
     * Limit how many Pietanzas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pietanza upsert
   */
  export type PietanzaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pietanza to update in case it exists.
     */
    where: PietanzaWhereUniqueInput
    /**
     * In case the Pietanza found by the `where` argument doesn't exist, create a new Pietanza with this data.
     */
    create: XOR<PietanzaCreateInput, PietanzaUncheckedCreateInput>
    /**
     * In case the Pietanza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PietanzaUpdateInput, PietanzaUncheckedUpdateInput>
  }

  /**
   * Pietanza delete
   */
  export type PietanzaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    /**
     * Filter which Pietanza to delete.
     */
    where: PietanzaWhereUniqueInput
  }

  /**
   * Pietanza deleteMany
   */
  export type PietanzaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pietanzas to delete
     */
    where?: PietanzaWhereInput
    /**
     * Limit how many Pietanzas to delete.
     */
    limit?: number
  }

  /**
   * Pietanza.correlataBy
   */
  export type Pietanza$correlataByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    where?: CrossSellingWhereInput
    orderBy?: CrossSellingOrderByWithRelationInput | CrossSellingOrderByWithRelationInput[]
    cursor?: CrossSellingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrossSellingScalarFieldEnum | CrossSellingScalarFieldEnum[]
  }

  /**
   * Pietanza.correlata
   */
  export type Pietanza$correlataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    where?: CrossSellingWhereInput
    orderBy?: CrossSellingOrderByWithRelationInput | CrossSellingOrderByWithRelationInput[]
    cursor?: CrossSellingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrossSellingScalarFieldEnum | CrossSellingScalarFieldEnum[]
  }

  /**
   * Pietanza.tag
   */
  export type Pietanza$tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Pietanza without action
   */
  export type PietanzaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
  }


  /**
   * Model CrossSelling
   */

  export type AggregateCrossSelling = {
    _count: CrossSellingCountAggregateOutputType | null
    _avg: CrossSellingAvgAggregateOutputType | null
    _sum: CrossSellingSumAggregateOutputType | null
    _min: CrossSellingMinAggregateOutputType | null
    _max: CrossSellingMaxAggregateOutputType | null
  }

  export type CrossSellingAvgAggregateOutputType = {
    correlataId: number | null
    correlataById: number | null
  }

  export type CrossSellingSumAggregateOutputType = {
    correlataId: number | null
    correlataById: number | null
  }

  export type CrossSellingMinAggregateOutputType = {
    correlataId: number | null
    correlataById: number | null
  }

  export type CrossSellingMaxAggregateOutputType = {
    correlataId: number | null
    correlataById: number | null
  }

  export type CrossSellingCountAggregateOutputType = {
    correlataId: number
    correlataById: number
    _all: number
  }


  export type CrossSellingAvgAggregateInputType = {
    correlataId?: true
    correlataById?: true
  }

  export type CrossSellingSumAggregateInputType = {
    correlataId?: true
    correlataById?: true
  }

  export type CrossSellingMinAggregateInputType = {
    correlataId?: true
    correlataById?: true
  }

  export type CrossSellingMaxAggregateInputType = {
    correlataId?: true
    correlataById?: true
  }

  export type CrossSellingCountAggregateInputType = {
    correlataId?: true
    correlataById?: true
    _all?: true
  }

  export type CrossSellingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrossSelling to aggregate.
     */
    where?: CrossSellingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrossSellings to fetch.
     */
    orderBy?: CrossSellingOrderByWithRelationInput | CrossSellingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrossSellingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrossSellings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrossSellings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrossSellings
    **/
    _count?: true | CrossSellingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrossSellingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrossSellingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrossSellingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrossSellingMaxAggregateInputType
  }

  export type GetCrossSellingAggregateType<T extends CrossSellingAggregateArgs> = {
        [P in keyof T & keyof AggregateCrossSelling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrossSelling[P]>
      : GetScalarType<T[P], AggregateCrossSelling[P]>
  }




  export type CrossSellingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrossSellingWhereInput
    orderBy?: CrossSellingOrderByWithAggregationInput | CrossSellingOrderByWithAggregationInput[]
    by: CrossSellingScalarFieldEnum[] | CrossSellingScalarFieldEnum
    having?: CrossSellingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrossSellingCountAggregateInputType | true
    _avg?: CrossSellingAvgAggregateInputType
    _sum?: CrossSellingSumAggregateInputType
    _min?: CrossSellingMinAggregateInputType
    _max?: CrossSellingMaxAggregateInputType
  }

  export type CrossSellingGroupByOutputType = {
    correlataId: number
    correlataById: number
    _count: CrossSellingCountAggregateOutputType | null
    _avg: CrossSellingAvgAggregateOutputType | null
    _sum: CrossSellingSumAggregateOutputType | null
    _min: CrossSellingMinAggregateOutputType | null
    _max: CrossSellingMaxAggregateOutputType | null
  }

  type GetCrossSellingGroupByPayload<T extends CrossSellingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrossSellingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrossSellingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrossSellingGroupByOutputType[P]>
            : GetScalarType<T[P], CrossSellingGroupByOutputType[P]>
        }
      >
    >


  export type CrossSellingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    correlataId?: boolean
    correlataById?: boolean
    correlataBy?: boolean | PietanzaDefaultArgs<ExtArgs>
    correlata?: boolean | PietanzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crossSelling"]>

  export type CrossSellingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    correlataId?: boolean
    correlataById?: boolean
    correlataBy?: boolean | PietanzaDefaultArgs<ExtArgs>
    correlata?: boolean | PietanzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crossSelling"]>

  export type CrossSellingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    correlataId?: boolean
    correlataById?: boolean
    correlataBy?: boolean | PietanzaDefaultArgs<ExtArgs>
    correlata?: boolean | PietanzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crossSelling"]>

  export type CrossSellingSelectScalar = {
    correlataId?: boolean
    correlataById?: boolean
  }

  export type CrossSellingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"correlataId" | "correlataById", ExtArgs["result"]["crossSelling"]>
  export type CrossSellingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correlataBy?: boolean | PietanzaDefaultArgs<ExtArgs>
    correlata?: boolean | PietanzaDefaultArgs<ExtArgs>
  }
  export type CrossSellingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correlataBy?: boolean | PietanzaDefaultArgs<ExtArgs>
    correlata?: boolean | PietanzaDefaultArgs<ExtArgs>
  }
  export type CrossSellingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correlataBy?: boolean | PietanzaDefaultArgs<ExtArgs>
    correlata?: boolean | PietanzaDefaultArgs<ExtArgs>
  }

  export type $CrossSellingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrossSelling"
    objects: {
      correlataBy: Prisma.$PietanzaPayload<ExtArgs>
      correlata: Prisma.$PietanzaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      correlataId: number
      correlataById: number
    }, ExtArgs["result"]["crossSelling"]>
    composites: {}
  }

  type CrossSellingGetPayload<S extends boolean | null | undefined | CrossSellingDefaultArgs> = $Result.GetResult<Prisma.$CrossSellingPayload, S>

  type CrossSellingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrossSellingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrossSellingCountAggregateInputType | true
    }

  export interface CrossSellingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrossSelling'], meta: { name: 'CrossSelling' } }
    /**
     * Find zero or one CrossSelling that matches the filter.
     * @param {CrossSellingFindUniqueArgs} args - Arguments to find a CrossSelling
     * @example
     * // Get one CrossSelling
     * const crossSelling = await prisma.crossSelling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrossSellingFindUniqueArgs>(args: SelectSubset<T, CrossSellingFindUniqueArgs<ExtArgs>>): Prisma__CrossSellingClient<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrossSelling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrossSellingFindUniqueOrThrowArgs} args - Arguments to find a CrossSelling
     * @example
     * // Get one CrossSelling
     * const crossSelling = await prisma.crossSelling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrossSellingFindUniqueOrThrowArgs>(args: SelectSubset<T, CrossSellingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrossSellingClient<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrossSelling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrossSellingFindFirstArgs} args - Arguments to find a CrossSelling
     * @example
     * // Get one CrossSelling
     * const crossSelling = await prisma.crossSelling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrossSellingFindFirstArgs>(args?: SelectSubset<T, CrossSellingFindFirstArgs<ExtArgs>>): Prisma__CrossSellingClient<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrossSelling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrossSellingFindFirstOrThrowArgs} args - Arguments to find a CrossSelling
     * @example
     * // Get one CrossSelling
     * const crossSelling = await prisma.crossSelling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrossSellingFindFirstOrThrowArgs>(args?: SelectSubset<T, CrossSellingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrossSellingClient<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrossSellings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrossSellingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrossSellings
     * const crossSellings = await prisma.crossSelling.findMany()
     * 
     * // Get first 10 CrossSellings
     * const crossSellings = await prisma.crossSelling.findMany({ take: 10 })
     * 
     * // Only select the `correlataId`
     * const crossSellingWithCorrelataIdOnly = await prisma.crossSelling.findMany({ select: { correlataId: true } })
     * 
     */
    findMany<T extends CrossSellingFindManyArgs>(args?: SelectSubset<T, CrossSellingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrossSelling.
     * @param {CrossSellingCreateArgs} args - Arguments to create a CrossSelling.
     * @example
     * // Create one CrossSelling
     * const CrossSelling = await prisma.crossSelling.create({
     *   data: {
     *     // ... data to create a CrossSelling
     *   }
     * })
     * 
     */
    create<T extends CrossSellingCreateArgs>(args: SelectSubset<T, CrossSellingCreateArgs<ExtArgs>>): Prisma__CrossSellingClient<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrossSellings.
     * @param {CrossSellingCreateManyArgs} args - Arguments to create many CrossSellings.
     * @example
     * // Create many CrossSellings
     * const crossSelling = await prisma.crossSelling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrossSellingCreateManyArgs>(args?: SelectSubset<T, CrossSellingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrossSellings and returns the data saved in the database.
     * @param {CrossSellingCreateManyAndReturnArgs} args - Arguments to create many CrossSellings.
     * @example
     * // Create many CrossSellings
     * const crossSelling = await prisma.crossSelling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrossSellings and only return the `correlataId`
     * const crossSellingWithCorrelataIdOnly = await prisma.crossSelling.createManyAndReturn({
     *   select: { correlataId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrossSellingCreateManyAndReturnArgs>(args?: SelectSubset<T, CrossSellingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrossSelling.
     * @param {CrossSellingDeleteArgs} args - Arguments to delete one CrossSelling.
     * @example
     * // Delete one CrossSelling
     * const CrossSelling = await prisma.crossSelling.delete({
     *   where: {
     *     // ... filter to delete one CrossSelling
     *   }
     * })
     * 
     */
    delete<T extends CrossSellingDeleteArgs>(args: SelectSubset<T, CrossSellingDeleteArgs<ExtArgs>>): Prisma__CrossSellingClient<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrossSelling.
     * @param {CrossSellingUpdateArgs} args - Arguments to update one CrossSelling.
     * @example
     * // Update one CrossSelling
     * const crossSelling = await prisma.crossSelling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrossSellingUpdateArgs>(args: SelectSubset<T, CrossSellingUpdateArgs<ExtArgs>>): Prisma__CrossSellingClient<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrossSellings.
     * @param {CrossSellingDeleteManyArgs} args - Arguments to filter CrossSellings to delete.
     * @example
     * // Delete a few CrossSellings
     * const { count } = await prisma.crossSelling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrossSellingDeleteManyArgs>(args?: SelectSubset<T, CrossSellingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrossSellings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrossSellingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrossSellings
     * const crossSelling = await prisma.crossSelling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrossSellingUpdateManyArgs>(args: SelectSubset<T, CrossSellingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrossSellings and returns the data updated in the database.
     * @param {CrossSellingUpdateManyAndReturnArgs} args - Arguments to update many CrossSellings.
     * @example
     * // Update many CrossSellings
     * const crossSelling = await prisma.crossSelling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrossSellings and only return the `correlataId`
     * const crossSellingWithCorrelataIdOnly = await prisma.crossSelling.updateManyAndReturn({
     *   select: { correlataId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrossSellingUpdateManyAndReturnArgs>(args: SelectSubset<T, CrossSellingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrossSelling.
     * @param {CrossSellingUpsertArgs} args - Arguments to update or create a CrossSelling.
     * @example
     * // Update or create a CrossSelling
     * const crossSelling = await prisma.crossSelling.upsert({
     *   create: {
     *     // ... data to create a CrossSelling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrossSelling we want to update
     *   }
     * })
     */
    upsert<T extends CrossSellingUpsertArgs>(args: SelectSubset<T, CrossSellingUpsertArgs<ExtArgs>>): Prisma__CrossSellingClient<$Result.GetResult<Prisma.$CrossSellingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrossSellings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrossSellingCountArgs} args - Arguments to filter CrossSellings to count.
     * @example
     * // Count the number of CrossSellings
     * const count = await prisma.crossSelling.count({
     *   where: {
     *     // ... the filter for the CrossSellings we want to count
     *   }
     * })
    **/
    count<T extends CrossSellingCountArgs>(
      args?: Subset<T, CrossSellingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrossSellingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrossSelling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrossSellingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrossSellingAggregateArgs>(args: Subset<T, CrossSellingAggregateArgs>): Prisma.PrismaPromise<GetCrossSellingAggregateType<T>>

    /**
     * Group by CrossSelling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrossSellingGroupByArgs} args - Group by arguments.
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
      T extends CrossSellingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrossSellingGroupByArgs['orderBy'] }
        : { orderBy?: CrossSellingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CrossSellingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrossSellingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrossSelling model
   */
  readonly fields: CrossSellingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrossSelling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrossSellingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    correlataBy<T extends PietanzaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PietanzaDefaultArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    correlata<T extends PietanzaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PietanzaDefaultArgs<ExtArgs>>): Prisma__PietanzaClient<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CrossSelling model
   */
  interface CrossSellingFieldRefs {
    readonly correlataId: FieldRef<"CrossSelling", 'Int'>
    readonly correlataById: FieldRef<"CrossSelling", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CrossSelling findUnique
   */
  export type CrossSellingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * Filter, which CrossSelling to fetch.
     */
    where: CrossSellingWhereUniqueInput
  }

  /**
   * CrossSelling findUniqueOrThrow
   */
  export type CrossSellingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * Filter, which CrossSelling to fetch.
     */
    where: CrossSellingWhereUniqueInput
  }

  /**
   * CrossSelling findFirst
   */
  export type CrossSellingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * Filter, which CrossSelling to fetch.
     */
    where?: CrossSellingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrossSellings to fetch.
     */
    orderBy?: CrossSellingOrderByWithRelationInput | CrossSellingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrossSellings.
     */
    cursor?: CrossSellingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrossSellings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrossSellings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrossSellings.
     */
    distinct?: CrossSellingScalarFieldEnum | CrossSellingScalarFieldEnum[]
  }

  /**
   * CrossSelling findFirstOrThrow
   */
  export type CrossSellingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * Filter, which CrossSelling to fetch.
     */
    where?: CrossSellingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrossSellings to fetch.
     */
    orderBy?: CrossSellingOrderByWithRelationInput | CrossSellingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrossSellings.
     */
    cursor?: CrossSellingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrossSellings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrossSellings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrossSellings.
     */
    distinct?: CrossSellingScalarFieldEnum | CrossSellingScalarFieldEnum[]
  }

  /**
   * CrossSelling findMany
   */
  export type CrossSellingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * Filter, which CrossSellings to fetch.
     */
    where?: CrossSellingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrossSellings to fetch.
     */
    orderBy?: CrossSellingOrderByWithRelationInput | CrossSellingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrossSellings.
     */
    cursor?: CrossSellingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrossSellings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrossSellings.
     */
    skip?: number
    distinct?: CrossSellingScalarFieldEnum | CrossSellingScalarFieldEnum[]
  }

  /**
   * CrossSelling create
   */
  export type CrossSellingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * The data needed to create a CrossSelling.
     */
    data: XOR<CrossSellingCreateInput, CrossSellingUncheckedCreateInput>
  }

  /**
   * CrossSelling createMany
   */
  export type CrossSellingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrossSellings.
     */
    data: CrossSellingCreateManyInput | CrossSellingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrossSelling createManyAndReturn
   */
  export type CrossSellingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * The data used to create many CrossSellings.
     */
    data: CrossSellingCreateManyInput | CrossSellingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrossSelling update
   */
  export type CrossSellingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * The data needed to update a CrossSelling.
     */
    data: XOR<CrossSellingUpdateInput, CrossSellingUncheckedUpdateInput>
    /**
     * Choose, which CrossSelling to update.
     */
    where: CrossSellingWhereUniqueInput
  }

  /**
   * CrossSelling updateMany
   */
  export type CrossSellingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrossSellings.
     */
    data: XOR<CrossSellingUpdateManyMutationInput, CrossSellingUncheckedUpdateManyInput>
    /**
     * Filter which CrossSellings to update
     */
    where?: CrossSellingWhereInput
    /**
     * Limit how many CrossSellings to update.
     */
    limit?: number
  }

  /**
   * CrossSelling updateManyAndReturn
   */
  export type CrossSellingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * The data used to update CrossSellings.
     */
    data: XOR<CrossSellingUpdateManyMutationInput, CrossSellingUncheckedUpdateManyInput>
    /**
     * Filter which CrossSellings to update
     */
    where?: CrossSellingWhereInput
    /**
     * Limit how many CrossSellings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrossSelling upsert
   */
  export type CrossSellingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * The filter to search for the CrossSelling to update in case it exists.
     */
    where: CrossSellingWhereUniqueInput
    /**
     * In case the CrossSelling found by the `where` argument doesn't exist, create a new CrossSelling with this data.
     */
    create: XOR<CrossSellingCreateInput, CrossSellingUncheckedCreateInput>
    /**
     * In case the CrossSelling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrossSellingUpdateInput, CrossSellingUncheckedUpdateInput>
  }

  /**
   * CrossSelling delete
   */
  export type CrossSellingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
    /**
     * Filter which CrossSelling to delete.
     */
    where: CrossSellingWhereUniqueInput
  }

  /**
   * CrossSelling deleteMany
   */
  export type CrossSellingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrossSellings to delete
     */
    where?: CrossSellingWhereInput
    /**
     * Limit how many CrossSellings to delete.
     */
    limit?: number
  }

  /**
   * CrossSelling without action
   */
  export type CrossSellingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrossSelling
     */
    select?: CrossSellingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrossSelling
     */
    omit?: CrossSellingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrossSellingInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    descrizione: string | null
    colore: string | null
    isAllergene: boolean | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    descrizione: string | null
    colore: string | null
    isAllergene: boolean | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    descrizione: number
    colore: number
    isAllergene: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    descrizione?: true
    colore?: true
    isAllergene?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    descrizione?: true
    colore?: true
    isAllergene?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    descrizione?: true
    colore?: true
    isAllergene?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    descrizione: string
    colore: string
    isAllergene: boolean
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizione?: boolean
    colore?: boolean
    isAllergene?: boolean
    pietanze?: boolean | Tag$pietanzeArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizione?: boolean
    colore?: boolean
    isAllergene?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descrizione?: boolean
    colore?: boolean
    isAllergene?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    descrizione?: boolean
    colore?: boolean
    isAllergene?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descrizione" | "colore" | "isAllergene", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pietanze?: boolean | Tag$pietanzeArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      pietanze: Prisma.$PietanzaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descrizione: string
      colore: string
      isAllergene: boolean
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pietanze<T extends Tag$pietanzeArgs<ExtArgs> = {}>(args?: Subset<T, Tag$pietanzeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PietanzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly descrizione: FieldRef<"Tag", 'String'>
    readonly colore: FieldRef<"Tag", 'String'>
    readonly isAllergene: FieldRef<"Tag", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.pietanze
   */
  export type Tag$pietanzeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pietanza
     */
    select?: PietanzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pietanza
     */
    omit?: PietanzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PietanzaInclude<ExtArgs> | null
    where?: PietanzaWhereInput
    orderBy?: PietanzaOrderByWithRelationInput | PietanzaOrderByWithRelationInput[]
    cursor?: PietanzaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PietanzaScalarFieldEnum | PietanzaScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Prenotazione
   */

  export type AggregatePrenotazione = {
    _count: PrenotazioneCountAggregateOutputType | null
    _avg: PrenotazioneAvgAggregateOutputType | null
    _sum: PrenotazioneSumAggregateOutputType | null
    _min: PrenotazioneMinAggregateOutputType | null
    _max: PrenotazioneMaxAggregateOutputType | null
  }

  export type PrenotazioneAvgAggregateOutputType = {
    numeroPersone: number | null
    numeroBambini: number | null
    numeroTavolo: number | null
  }

  export type PrenotazioneSumAggregateOutputType = {
    numeroPersone: number | null
    numeroBambini: number | null
    numeroTavolo: number | null
  }

  export type PrenotazioneMinAggregateOutputType = {
    id: string | null
    ristoranteId: string | null
    nomeCliente: string | null
    cognomeCliente: string | null
    emailCliente: string | null
    telefonoCliente: string | null
    numeroPersone: number | null
    numeroBambini: number | null
    data: Date | null
    ora: Date | null
    noteSpeciali: string | null
    noteCliente: string | null
    numeroTavolo: number | null
    statoPrenotazione: $Enums.PrenotazioneStato | null
    orarioArrivo: Date | null
    canalePrenotazione: $Enums.PrenotazioneCanale | null
    fontePrenotazione: string | null
    allergie: string | null
  }

  export type PrenotazioneMaxAggregateOutputType = {
    id: string | null
    ristoranteId: string | null
    nomeCliente: string | null
    cognomeCliente: string | null
    emailCliente: string | null
    telefonoCliente: string | null
    numeroPersone: number | null
    numeroBambini: number | null
    data: Date | null
    ora: Date | null
    noteSpeciali: string | null
    noteCliente: string | null
    numeroTavolo: number | null
    statoPrenotazione: $Enums.PrenotazioneStato | null
    orarioArrivo: Date | null
    canalePrenotazione: $Enums.PrenotazioneCanale | null
    fontePrenotazione: string | null
    allergie: string | null
  }

  export type PrenotazioneCountAggregateOutputType = {
    id: number
    ristoranteId: number
    nomeCliente: number
    cognomeCliente: number
    emailCliente: number
    telefonoCliente: number
    numeroPersone: number
    numeroBambini: number
    data: number
    ora: number
    noteSpeciali: number
    noteCliente: number
    numeroTavolo: number
    statoPrenotazione: number
    orarioArrivo: number
    canalePrenotazione: number
    fontePrenotazione: number
    allergie: number
    _all: number
  }


  export type PrenotazioneAvgAggregateInputType = {
    numeroPersone?: true
    numeroBambini?: true
    numeroTavolo?: true
  }

  export type PrenotazioneSumAggregateInputType = {
    numeroPersone?: true
    numeroBambini?: true
    numeroTavolo?: true
  }

  export type PrenotazioneMinAggregateInputType = {
    id?: true
    ristoranteId?: true
    nomeCliente?: true
    cognomeCliente?: true
    emailCliente?: true
    telefonoCliente?: true
    numeroPersone?: true
    numeroBambini?: true
    data?: true
    ora?: true
    noteSpeciali?: true
    noteCliente?: true
    numeroTavolo?: true
    statoPrenotazione?: true
    orarioArrivo?: true
    canalePrenotazione?: true
    fontePrenotazione?: true
    allergie?: true
  }

  export type PrenotazioneMaxAggregateInputType = {
    id?: true
    ristoranteId?: true
    nomeCliente?: true
    cognomeCliente?: true
    emailCliente?: true
    telefonoCliente?: true
    numeroPersone?: true
    numeroBambini?: true
    data?: true
    ora?: true
    noteSpeciali?: true
    noteCliente?: true
    numeroTavolo?: true
    statoPrenotazione?: true
    orarioArrivo?: true
    canalePrenotazione?: true
    fontePrenotazione?: true
    allergie?: true
  }

  export type PrenotazioneCountAggregateInputType = {
    id?: true
    ristoranteId?: true
    nomeCliente?: true
    cognomeCliente?: true
    emailCliente?: true
    telefonoCliente?: true
    numeroPersone?: true
    numeroBambini?: true
    data?: true
    ora?: true
    noteSpeciali?: true
    noteCliente?: true
    numeroTavolo?: true
    statoPrenotazione?: true
    orarioArrivo?: true
    canalePrenotazione?: true
    fontePrenotazione?: true
    allergie?: true
    _all?: true
  }

  export type PrenotazioneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prenotazione to aggregate.
     */
    where?: PrenotazioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prenotaziones to fetch.
     */
    orderBy?: PrenotazioneOrderByWithRelationInput | PrenotazioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrenotazioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prenotaziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prenotaziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prenotaziones
    **/
    _count?: true | PrenotazioneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrenotazioneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrenotazioneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrenotazioneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrenotazioneMaxAggregateInputType
  }

  export type GetPrenotazioneAggregateType<T extends PrenotazioneAggregateArgs> = {
        [P in keyof T & keyof AggregatePrenotazione]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrenotazione[P]>
      : GetScalarType<T[P], AggregatePrenotazione[P]>
  }




  export type PrenotazioneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrenotazioneWhereInput
    orderBy?: PrenotazioneOrderByWithAggregationInput | PrenotazioneOrderByWithAggregationInput[]
    by: PrenotazioneScalarFieldEnum[] | PrenotazioneScalarFieldEnum
    having?: PrenotazioneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrenotazioneCountAggregateInputType | true
    _avg?: PrenotazioneAvgAggregateInputType
    _sum?: PrenotazioneSumAggregateInputType
    _min?: PrenotazioneMinAggregateInputType
    _max?: PrenotazioneMaxAggregateInputType
  }

  export type PrenotazioneGroupByOutputType = {
    id: string
    ristoranteId: string
    nomeCliente: string
    cognomeCliente: string | null
    emailCliente: string
    telefonoCliente: string | null
    numeroPersone: number
    numeroBambini: number | null
    data: Date
    ora: Date
    noteSpeciali: string | null
    noteCliente: string | null
    numeroTavolo: number | null
    statoPrenotazione: $Enums.PrenotazioneStato
    orarioArrivo: Date | null
    canalePrenotazione: $Enums.PrenotazioneCanale
    fontePrenotazione: string | null
    allergie: string | null
    _count: PrenotazioneCountAggregateOutputType | null
    _avg: PrenotazioneAvgAggregateOutputType | null
    _sum: PrenotazioneSumAggregateOutputType | null
    _min: PrenotazioneMinAggregateOutputType | null
    _max: PrenotazioneMaxAggregateOutputType | null
  }

  type GetPrenotazioneGroupByPayload<T extends PrenotazioneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrenotazioneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrenotazioneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrenotazioneGroupByOutputType[P]>
            : GetScalarType<T[P], PrenotazioneGroupByOutputType[P]>
        }
      >
    >


  export type PrenotazioneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ristoranteId?: boolean
    nomeCliente?: boolean
    cognomeCliente?: boolean
    emailCliente?: boolean
    telefonoCliente?: boolean
    numeroPersone?: boolean
    numeroBambini?: boolean
    data?: boolean
    ora?: boolean
    noteSpeciali?: boolean
    noteCliente?: boolean
    numeroTavolo?: boolean
    statoPrenotazione?: boolean
    orarioArrivo?: boolean
    canalePrenotazione?: boolean
    fontePrenotazione?: boolean
    allergie?: boolean
  }, ExtArgs["result"]["prenotazione"]>

  export type PrenotazioneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ristoranteId?: boolean
    nomeCliente?: boolean
    cognomeCliente?: boolean
    emailCliente?: boolean
    telefonoCliente?: boolean
    numeroPersone?: boolean
    numeroBambini?: boolean
    data?: boolean
    ora?: boolean
    noteSpeciali?: boolean
    noteCliente?: boolean
    numeroTavolo?: boolean
    statoPrenotazione?: boolean
    orarioArrivo?: boolean
    canalePrenotazione?: boolean
    fontePrenotazione?: boolean
    allergie?: boolean
  }, ExtArgs["result"]["prenotazione"]>

  export type PrenotazioneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ristoranteId?: boolean
    nomeCliente?: boolean
    cognomeCliente?: boolean
    emailCliente?: boolean
    telefonoCliente?: boolean
    numeroPersone?: boolean
    numeroBambini?: boolean
    data?: boolean
    ora?: boolean
    noteSpeciali?: boolean
    noteCliente?: boolean
    numeroTavolo?: boolean
    statoPrenotazione?: boolean
    orarioArrivo?: boolean
    canalePrenotazione?: boolean
    fontePrenotazione?: boolean
    allergie?: boolean
  }, ExtArgs["result"]["prenotazione"]>

  export type PrenotazioneSelectScalar = {
    id?: boolean
    ristoranteId?: boolean
    nomeCliente?: boolean
    cognomeCliente?: boolean
    emailCliente?: boolean
    telefonoCliente?: boolean
    numeroPersone?: boolean
    numeroBambini?: boolean
    data?: boolean
    ora?: boolean
    noteSpeciali?: boolean
    noteCliente?: boolean
    numeroTavolo?: boolean
    statoPrenotazione?: boolean
    orarioArrivo?: boolean
    canalePrenotazione?: boolean
    fontePrenotazione?: boolean
    allergie?: boolean
  }

  export type PrenotazioneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ristoranteId" | "nomeCliente" | "cognomeCliente" | "emailCliente" | "telefonoCliente" | "numeroPersone" | "numeroBambini" | "data" | "ora" | "noteSpeciali" | "noteCliente" | "numeroTavolo" | "statoPrenotazione" | "orarioArrivo" | "canalePrenotazione" | "fontePrenotazione" | "allergie", ExtArgs["result"]["prenotazione"]>

  export type $PrenotazionePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prenotazione"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ristoranteId: string
      nomeCliente: string
      cognomeCliente: string | null
      emailCliente: string
      telefonoCliente: string | null
      numeroPersone: number
      numeroBambini: number | null
      data: Date
      ora: Date
      noteSpeciali: string | null
      noteCliente: string | null
      numeroTavolo: number | null
      statoPrenotazione: $Enums.PrenotazioneStato
      orarioArrivo: Date | null
      canalePrenotazione: $Enums.PrenotazioneCanale
      fontePrenotazione: string | null
      allergie: string | null
    }, ExtArgs["result"]["prenotazione"]>
    composites: {}
  }

  type PrenotazioneGetPayload<S extends boolean | null | undefined | PrenotazioneDefaultArgs> = $Result.GetResult<Prisma.$PrenotazionePayload, S>

  type PrenotazioneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrenotazioneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrenotazioneCountAggregateInputType | true
    }

  export interface PrenotazioneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prenotazione'], meta: { name: 'Prenotazione' } }
    /**
     * Find zero or one Prenotazione that matches the filter.
     * @param {PrenotazioneFindUniqueArgs} args - Arguments to find a Prenotazione
     * @example
     * // Get one Prenotazione
     * const prenotazione = await prisma.prenotazione.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrenotazioneFindUniqueArgs>(args: SelectSubset<T, PrenotazioneFindUniqueArgs<ExtArgs>>): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prenotazione that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrenotazioneFindUniqueOrThrowArgs} args - Arguments to find a Prenotazione
     * @example
     * // Get one Prenotazione
     * const prenotazione = await prisma.prenotazione.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrenotazioneFindUniqueOrThrowArgs>(args: SelectSubset<T, PrenotazioneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prenotazione that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneFindFirstArgs} args - Arguments to find a Prenotazione
     * @example
     * // Get one Prenotazione
     * const prenotazione = await prisma.prenotazione.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrenotazioneFindFirstArgs>(args?: SelectSubset<T, PrenotazioneFindFirstArgs<ExtArgs>>): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prenotazione that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneFindFirstOrThrowArgs} args - Arguments to find a Prenotazione
     * @example
     * // Get one Prenotazione
     * const prenotazione = await prisma.prenotazione.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrenotazioneFindFirstOrThrowArgs>(args?: SelectSubset<T, PrenotazioneFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prenotaziones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prenotaziones
     * const prenotaziones = await prisma.prenotazione.findMany()
     * 
     * // Get first 10 Prenotaziones
     * const prenotaziones = await prisma.prenotazione.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prenotazioneWithIdOnly = await prisma.prenotazione.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrenotazioneFindManyArgs>(args?: SelectSubset<T, PrenotazioneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prenotazione.
     * @param {PrenotazioneCreateArgs} args - Arguments to create a Prenotazione.
     * @example
     * // Create one Prenotazione
     * const Prenotazione = await prisma.prenotazione.create({
     *   data: {
     *     // ... data to create a Prenotazione
     *   }
     * })
     * 
     */
    create<T extends PrenotazioneCreateArgs>(args: SelectSubset<T, PrenotazioneCreateArgs<ExtArgs>>): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prenotaziones.
     * @param {PrenotazioneCreateManyArgs} args - Arguments to create many Prenotaziones.
     * @example
     * // Create many Prenotaziones
     * const prenotazione = await prisma.prenotazione.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrenotazioneCreateManyArgs>(args?: SelectSubset<T, PrenotazioneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prenotaziones and returns the data saved in the database.
     * @param {PrenotazioneCreateManyAndReturnArgs} args - Arguments to create many Prenotaziones.
     * @example
     * // Create many Prenotaziones
     * const prenotazione = await prisma.prenotazione.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prenotaziones and only return the `id`
     * const prenotazioneWithIdOnly = await prisma.prenotazione.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrenotazioneCreateManyAndReturnArgs>(args?: SelectSubset<T, PrenotazioneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prenotazione.
     * @param {PrenotazioneDeleteArgs} args - Arguments to delete one Prenotazione.
     * @example
     * // Delete one Prenotazione
     * const Prenotazione = await prisma.prenotazione.delete({
     *   where: {
     *     // ... filter to delete one Prenotazione
     *   }
     * })
     * 
     */
    delete<T extends PrenotazioneDeleteArgs>(args: SelectSubset<T, PrenotazioneDeleteArgs<ExtArgs>>): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prenotazione.
     * @param {PrenotazioneUpdateArgs} args - Arguments to update one Prenotazione.
     * @example
     * // Update one Prenotazione
     * const prenotazione = await prisma.prenotazione.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrenotazioneUpdateArgs>(args: SelectSubset<T, PrenotazioneUpdateArgs<ExtArgs>>): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prenotaziones.
     * @param {PrenotazioneDeleteManyArgs} args - Arguments to filter Prenotaziones to delete.
     * @example
     * // Delete a few Prenotaziones
     * const { count } = await prisma.prenotazione.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrenotazioneDeleteManyArgs>(args?: SelectSubset<T, PrenotazioneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prenotaziones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prenotaziones
     * const prenotazione = await prisma.prenotazione.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrenotazioneUpdateManyArgs>(args: SelectSubset<T, PrenotazioneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prenotaziones and returns the data updated in the database.
     * @param {PrenotazioneUpdateManyAndReturnArgs} args - Arguments to update many Prenotaziones.
     * @example
     * // Update many Prenotaziones
     * const prenotazione = await prisma.prenotazione.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prenotaziones and only return the `id`
     * const prenotazioneWithIdOnly = await prisma.prenotazione.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrenotazioneUpdateManyAndReturnArgs>(args: SelectSubset<T, PrenotazioneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prenotazione.
     * @param {PrenotazioneUpsertArgs} args - Arguments to update or create a Prenotazione.
     * @example
     * // Update or create a Prenotazione
     * const prenotazione = await prisma.prenotazione.upsert({
     *   create: {
     *     // ... data to create a Prenotazione
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prenotazione we want to update
     *   }
     * })
     */
    upsert<T extends PrenotazioneUpsertArgs>(args: SelectSubset<T, PrenotazioneUpsertArgs<ExtArgs>>): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prenotaziones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneCountArgs} args - Arguments to filter Prenotaziones to count.
     * @example
     * // Count the number of Prenotaziones
     * const count = await prisma.prenotazione.count({
     *   where: {
     *     // ... the filter for the Prenotaziones we want to count
     *   }
     * })
    **/
    count<T extends PrenotazioneCountArgs>(
      args?: Subset<T, PrenotazioneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrenotazioneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prenotazione.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrenotazioneAggregateArgs>(args: Subset<T, PrenotazioneAggregateArgs>): Prisma.PrismaPromise<GetPrenotazioneAggregateType<T>>

    /**
     * Group by Prenotazione.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneGroupByArgs} args - Group by arguments.
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
      T extends PrenotazioneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrenotazioneGroupByArgs['orderBy'] }
        : { orderBy?: PrenotazioneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PrenotazioneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrenotazioneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prenotazione model
   */
  readonly fields: PrenotazioneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prenotazione.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrenotazioneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prenotazione model
   */
  interface PrenotazioneFieldRefs {
    readonly id: FieldRef<"Prenotazione", 'String'>
    readonly ristoranteId: FieldRef<"Prenotazione", 'String'>
    readonly nomeCliente: FieldRef<"Prenotazione", 'String'>
    readonly cognomeCliente: FieldRef<"Prenotazione", 'String'>
    readonly emailCliente: FieldRef<"Prenotazione", 'String'>
    readonly telefonoCliente: FieldRef<"Prenotazione", 'String'>
    readonly numeroPersone: FieldRef<"Prenotazione", 'Int'>
    readonly numeroBambini: FieldRef<"Prenotazione", 'Int'>
    readonly data: FieldRef<"Prenotazione", 'DateTime'>
    readonly ora: FieldRef<"Prenotazione", 'DateTime'>
    readonly noteSpeciali: FieldRef<"Prenotazione", 'String'>
    readonly noteCliente: FieldRef<"Prenotazione", 'String'>
    readonly numeroTavolo: FieldRef<"Prenotazione", 'Int'>
    readonly statoPrenotazione: FieldRef<"Prenotazione", 'PrenotazioneStato'>
    readonly orarioArrivo: FieldRef<"Prenotazione", 'DateTime'>
    readonly canalePrenotazione: FieldRef<"Prenotazione", 'PrenotazioneCanale'>
    readonly fontePrenotazione: FieldRef<"Prenotazione", 'String'>
    readonly allergie: FieldRef<"Prenotazione", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prenotazione findUnique
   */
  export type PrenotazioneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * Filter, which Prenotazione to fetch.
     */
    where: PrenotazioneWhereUniqueInput
  }

  /**
   * Prenotazione findUniqueOrThrow
   */
  export type PrenotazioneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * Filter, which Prenotazione to fetch.
     */
    where: PrenotazioneWhereUniqueInput
  }

  /**
   * Prenotazione findFirst
   */
  export type PrenotazioneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * Filter, which Prenotazione to fetch.
     */
    where?: PrenotazioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prenotaziones to fetch.
     */
    orderBy?: PrenotazioneOrderByWithRelationInput | PrenotazioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prenotaziones.
     */
    cursor?: PrenotazioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prenotaziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prenotaziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prenotaziones.
     */
    distinct?: PrenotazioneScalarFieldEnum | PrenotazioneScalarFieldEnum[]
  }

  /**
   * Prenotazione findFirstOrThrow
   */
  export type PrenotazioneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * Filter, which Prenotazione to fetch.
     */
    where?: PrenotazioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prenotaziones to fetch.
     */
    orderBy?: PrenotazioneOrderByWithRelationInput | PrenotazioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prenotaziones.
     */
    cursor?: PrenotazioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prenotaziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prenotaziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prenotaziones.
     */
    distinct?: PrenotazioneScalarFieldEnum | PrenotazioneScalarFieldEnum[]
  }

  /**
   * Prenotazione findMany
   */
  export type PrenotazioneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * Filter, which Prenotaziones to fetch.
     */
    where?: PrenotazioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prenotaziones to fetch.
     */
    orderBy?: PrenotazioneOrderByWithRelationInput | PrenotazioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prenotaziones.
     */
    cursor?: PrenotazioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prenotaziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prenotaziones.
     */
    skip?: number
    distinct?: PrenotazioneScalarFieldEnum | PrenotazioneScalarFieldEnum[]
  }

  /**
   * Prenotazione create
   */
  export type PrenotazioneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * The data needed to create a Prenotazione.
     */
    data: XOR<PrenotazioneCreateInput, PrenotazioneUncheckedCreateInput>
  }

  /**
   * Prenotazione createMany
   */
  export type PrenotazioneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prenotaziones.
     */
    data: PrenotazioneCreateManyInput | PrenotazioneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prenotazione createManyAndReturn
   */
  export type PrenotazioneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * The data used to create many Prenotaziones.
     */
    data: PrenotazioneCreateManyInput | PrenotazioneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prenotazione update
   */
  export type PrenotazioneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * The data needed to update a Prenotazione.
     */
    data: XOR<PrenotazioneUpdateInput, PrenotazioneUncheckedUpdateInput>
    /**
     * Choose, which Prenotazione to update.
     */
    where: PrenotazioneWhereUniqueInput
  }

  /**
   * Prenotazione updateMany
   */
  export type PrenotazioneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prenotaziones.
     */
    data: XOR<PrenotazioneUpdateManyMutationInput, PrenotazioneUncheckedUpdateManyInput>
    /**
     * Filter which Prenotaziones to update
     */
    where?: PrenotazioneWhereInput
    /**
     * Limit how many Prenotaziones to update.
     */
    limit?: number
  }

  /**
   * Prenotazione updateManyAndReturn
   */
  export type PrenotazioneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * The data used to update Prenotaziones.
     */
    data: XOR<PrenotazioneUpdateManyMutationInput, PrenotazioneUncheckedUpdateManyInput>
    /**
     * Filter which Prenotaziones to update
     */
    where?: PrenotazioneWhereInput
    /**
     * Limit how many Prenotaziones to update.
     */
    limit?: number
  }

  /**
   * Prenotazione upsert
   */
  export type PrenotazioneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * The filter to search for the Prenotazione to update in case it exists.
     */
    where: PrenotazioneWhereUniqueInput
    /**
     * In case the Prenotazione found by the `where` argument doesn't exist, create a new Prenotazione with this data.
     */
    create: XOR<PrenotazioneCreateInput, PrenotazioneUncheckedCreateInput>
    /**
     * In case the Prenotazione was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrenotazioneUpdateInput, PrenotazioneUncheckedUpdateInput>
  }

  /**
   * Prenotazione delete
   */
  export type PrenotazioneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
    /**
     * Filter which Prenotazione to delete.
     */
    where: PrenotazioneWhereUniqueInput
  }

  /**
   * Prenotazione deleteMany
   */
  export type PrenotazioneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prenotaziones to delete
     */
    where?: PrenotazioneWhereInput
    /**
     * Limit how many Prenotaziones to delete.
     */
    limit?: number
  }

  /**
   * Prenotazione without action
   */
  export type PrenotazioneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prenotazione
     */
    omit?: PrenotazioneOmit<ExtArgs> | null
  }


  /**
   * Model Piantina
   */

  export type AggregatePiantina = {
    _count: PiantinaCountAggregateOutputType | null
    _avg: PiantinaAvgAggregateOutputType | null
    _sum: PiantinaSumAggregateOutputType | null
    _min: PiantinaMinAggregateOutputType | null
    _max: PiantinaMaxAggregateOutputType | null
  }

  export type PiantinaAvgAggregateOutputType = {
    ordineVisualizzazione: number | null
  }

  export type PiantinaSumAggregateOutputType = {
    ordineVisualizzazione: number | null
  }

  export type PiantinaMinAggregateOutputType = {
    id: string | null
    ristoranteId: string | null
    nome: string | null
    ordineVisualizzazione: number | null
  }

  export type PiantinaMaxAggregateOutputType = {
    id: string | null
    ristoranteId: string | null
    nome: string | null
    ordineVisualizzazione: number | null
  }

  export type PiantinaCountAggregateOutputType = {
    id: number
    ristoranteId: number
    nome: number
    ordineVisualizzazione: number
    _all: number
  }


  export type PiantinaAvgAggregateInputType = {
    ordineVisualizzazione?: true
  }

  export type PiantinaSumAggregateInputType = {
    ordineVisualizzazione?: true
  }

  export type PiantinaMinAggregateInputType = {
    id?: true
    ristoranteId?: true
    nome?: true
    ordineVisualizzazione?: true
  }

  export type PiantinaMaxAggregateInputType = {
    id?: true
    ristoranteId?: true
    nome?: true
    ordineVisualizzazione?: true
  }

  export type PiantinaCountAggregateInputType = {
    id?: true
    ristoranteId?: true
    nome?: true
    ordineVisualizzazione?: true
    _all?: true
  }

  export type PiantinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piantina to aggregate.
     */
    where?: PiantinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piantinas to fetch.
     */
    orderBy?: PiantinaOrderByWithRelationInput | PiantinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PiantinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piantinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piantinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Piantinas
    **/
    _count?: true | PiantinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PiantinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PiantinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiantinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiantinaMaxAggregateInputType
  }

  export type GetPiantinaAggregateType<T extends PiantinaAggregateArgs> = {
        [P in keyof T & keyof AggregatePiantina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiantina[P]>
      : GetScalarType<T[P], AggregatePiantina[P]>
  }




  export type PiantinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiantinaWhereInput
    orderBy?: PiantinaOrderByWithAggregationInput | PiantinaOrderByWithAggregationInput[]
    by: PiantinaScalarFieldEnum[] | PiantinaScalarFieldEnum
    having?: PiantinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiantinaCountAggregateInputType | true
    _avg?: PiantinaAvgAggregateInputType
    _sum?: PiantinaSumAggregateInputType
    _min?: PiantinaMinAggregateInputType
    _max?: PiantinaMaxAggregateInputType
  }

  export type PiantinaGroupByOutputType = {
    id: string
    ristoranteId: string
    nome: string
    ordineVisualizzazione: number
    _count: PiantinaCountAggregateOutputType | null
    _avg: PiantinaAvgAggregateOutputType | null
    _sum: PiantinaSumAggregateOutputType | null
    _min: PiantinaMinAggregateOutputType | null
    _max: PiantinaMaxAggregateOutputType | null
  }

  type GetPiantinaGroupByPayload<T extends PiantinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiantinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiantinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiantinaGroupByOutputType[P]>
            : GetScalarType<T[P], PiantinaGroupByOutputType[P]>
        }
      >
    >


  export type PiantinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ristoranteId?: boolean
    nome?: boolean
    ordineVisualizzazione?: boolean
    tavoli?: boolean | Piantina$tavoliArgs<ExtArgs>
    _count?: boolean | PiantinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piantina"]>

  export type PiantinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ristoranteId?: boolean
    nome?: boolean
    ordineVisualizzazione?: boolean
  }, ExtArgs["result"]["piantina"]>

  export type PiantinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ristoranteId?: boolean
    nome?: boolean
    ordineVisualizzazione?: boolean
  }, ExtArgs["result"]["piantina"]>

  export type PiantinaSelectScalar = {
    id?: boolean
    ristoranteId?: boolean
    nome?: boolean
    ordineVisualizzazione?: boolean
  }

  export type PiantinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ristoranteId" | "nome" | "ordineVisualizzazione", ExtArgs["result"]["piantina"]>
  export type PiantinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tavoli?: boolean | Piantina$tavoliArgs<ExtArgs>
    _count?: boolean | PiantinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PiantinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PiantinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PiantinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Piantina"
    objects: {
      tavoli: Prisma.$TavoloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ristoranteId: string
      nome: string
      ordineVisualizzazione: number
    }, ExtArgs["result"]["piantina"]>
    composites: {}
  }

  type PiantinaGetPayload<S extends boolean | null | undefined | PiantinaDefaultArgs> = $Result.GetResult<Prisma.$PiantinaPayload, S>

  type PiantinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PiantinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PiantinaCountAggregateInputType | true
    }

  export interface PiantinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Piantina'], meta: { name: 'Piantina' } }
    /**
     * Find zero or one Piantina that matches the filter.
     * @param {PiantinaFindUniqueArgs} args - Arguments to find a Piantina
     * @example
     * // Get one Piantina
     * const piantina = await prisma.piantina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PiantinaFindUniqueArgs>(args: SelectSubset<T, PiantinaFindUniqueArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Piantina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PiantinaFindUniqueOrThrowArgs} args - Arguments to find a Piantina
     * @example
     * // Get one Piantina
     * const piantina = await prisma.piantina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PiantinaFindUniqueOrThrowArgs>(args: SelectSubset<T, PiantinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piantina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiantinaFindFirstArgs} args - Arguments to find a Piantina
     * @example
     * // Get one Piantina
     * const piantina = await prisma.piantina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PiantinaFindFirstArgs>(args?: SelectSubset<T, PiantinaFindFirstArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piantina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiantinaFindFirstOrThrowArgs} args - Arguments to find a Piantina
     * @example
     * // Get one Piantina
     * const piantina = await prisma.piantina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PiantinaFindFirstOrThrowArgs>(args?: SelectSubset<T, PiantinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Piantinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiantinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Piantinas
     * const piantinas = await prisma.piantina.findMany()
     * 
     * // Get first 10 Piantinas
     * const piantinas = await prisma.piantina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piantinaWithIdOnly = await prisma.piantina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PiantinaFindManyArgs>(args?: SelectSubset<T, PiantinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Piantina.
     * @param {PiantinaCreateArgs} args - Arguments to create a Piantina.
     * @example
     * // Create one Piantina
     * const Piantina = await prisma.piantina.create({
     *   data: {
     *     // ... data to create a Piantina
     *   }
     * })
     * 
     */
    create<T extends PiantinaCreateArgs>(args: SelectSubset<T, PiantinaCreateArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Piantinas.
     * @param {PiantinaCreateManyArgs} args - Arguments to create many Piantinas.
     * @example
     * // Create many Piantinas
     * const piantina = await prisma.piantina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PiantinaCreateManyArgs>(args?: SelectSubset<T, PiantinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Piantinas and returns the data saved in the database.
     * @param {PiantinaCreateManyAndReturnArgs} args - Arguments to create many Piantinas.
     * @example
     * // Create many Piantinas
     * const piantina = await prisma.piantina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Piantinas and only return the `id`
     * const piantinaWithIdOnly = await prisma.piantina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PiantinaCreateManyAndReturnArgs>(args?: SelectSubset<T, PiantinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Piantina.
     * @param {PiantinaDeleteArgs} args - Arguments to delete one Piantina.
     * @example
     * // Delete one Piantina
     * const Piantina = await prisma.piantina.delete({
     *   where: {
     *     // ... filter to delete one Piantina
     *   }
     * })
     * 
     */
    delete<T extends PiantinaDeleteArgs>(args: SelectSubset<T, PiantinaDeleteArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Piantina.
     * @param {PiantinaUpdateArgs} args - Arguments to update one Piantina.
     * @example
     * // Update one Piantina
     * const piantina = await prisma.piantina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PiantinaUpdateArgs>(args: SelectSubset<T, PiantinaUpdateArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Piantinas.
     * @param {PiantinaDeleteManyArgs} args - Arguments to filter Piantinas to delete.
     * @example
     * // Delete a few Piantinas
     * const { count } = await prisma.piantina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PiantinaDeleteManyArgs>(args?: SelectSubset<T, PiantinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Piantinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiantinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Piantinas
     * const piantina = await prisma.piantina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PiantinaUpdateManyArgs>(args: SelectSubset<T, PiantinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Piantinas and returns the data updated in the database.
     * @param {PiantinaUpdateManyAndReturnArgs} args - Arguments to update many Piantinas.
     * @example
     * // Update many Piantinas
     * const piantina = await prisma.piantina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Piantinas and only return the `id`
     * const piantinaWithIdOnly = await prisma.piantina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PiantinaUpdateManyAndReturnArgs>(args: SelectSubset<T, PiantinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Piantina.
     * @param {PiantinaUpsertArgs} args - Arguments to update or create a Piantina.
     * @example
     * // Update or create a Piantina
     * const piantina = await prisma.piantina.upsert({
     *   create: {
     *     // ... data to create a Piantina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piantina we want to update
     *   }
     * })
     */
    upsert<T extends PiantinaUpsertArgs>(args: SelectSubset<T, PiantinaUpsertArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Piantinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiantinaCountArgs} args - Arguments to filter Piantinas to count.
     * @example
     * // Count the number of Piantinas
     * const count = await prisma.piantina.count({
     *   where: {
     *     // ... the filter for the Piantinas we want to count
     *   }
     * })
    **/
    count<T extends PiantinaCountArgs>(
      args?: Subset<T, PiantinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiantinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piantina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiantinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PiantinaAggregateArgs>(args: Subset<T, PiantinaAggregateArgs>): Prisma.PrismaPromise<GetPiantinaAggregateType<T>>

    /**
     * Group by Piantina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiantinaGroupByArgs} args - Group by arguments.
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
      T extends PiantinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PiantinaGroupByArgs['orderBy'] }
        : { orderBy?: PiantinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PiantinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiantinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Piantina model
   */
  readonly fields: PiantinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Piantina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PiantinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tavoli<T extends Piantina$tavoliArgs<ExtArgs> = {}>(args?: Subset<T, Piantina$tavoliArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Piantina model
   */
  interface PiantinaFieldRefs {
    readonly id: FieldRef<"Piantina", 'String'>
    readonly ristoranteId: FieldRef<"Piantina", 'String'>
    readonly nome: FieldRef<"Piantina", 'String'>
    readonly ordineVisualizzazione: FieldRef<"Piantina", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Piantina findUnique
   */
  export type PiantinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * Filter, which Piantina to fetch.
     */
    where: PiantinaWhereUniqueInput
  }

  /**
   * Piantina findUniqueOrThrow
   */
  export type PiantinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * Filter, which Piantina to fetch.
     */
    where: PiantinaWhereUniqueInput
  }

  /**
   * Piantina findFirst
   */
  export type PiantinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * Filter, which Piantina to fetch.
     */
    where?: PiantinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piantinas to fetch.
     */
    orderBy?: PiantinaOrderByWithRelationInput | PiantinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Piantinas.
     */
    cursor?: PiantinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piantinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piantinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Piantinas.
     */
    distinct?: PiantinaScalarFieldEnum | PiantinaScalarFieldEnum[]
  }

  /**
   * Piantina findFirstOrThrow
   */
  export type PiantinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * Filter, which Piantina to fetch.
     */
    where?: PiantinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piantinas to fetch.
     */
    orderBy?: PiantinaOrderByWithRelationInput | PiantinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Piantinas.
     */
    cursor?: PiantinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piantinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piantinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Piantinas.
     */
    distinct?: PiantinaScalarFieldEnum | PiantinaScalarFieldEnum[]
  }

  /**
   * Piantina findMany
   */
  export type PiantinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * Filter, which Piantinas to fetch.
     */
    where?: PiantinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piantinas to fetch.
     */
    orderBy?: PiantinaOrderByWithRelationInput | PiantinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Piantinas.
     */
    cursor?: PiantinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piantinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piantinas.
     */
    skip?: number
    distinct?: PiantinaScalarFieldEnum | PiantinaScalarFieldEnum[]
  }

  /**
   * Piantina create
   */
  export type PiantinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Piantina.
     */
    data: XOR<PiantinaCreateInput, PiantinaUncheckedCreateInput>
  }

  /**
   * Piantina createMany
   */
  export type PiantinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Piantinas.
     */
    data: PiantinaCreateManyInput | PiantinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Piantina createManyAndReturn
   */
  export type PiantinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * The data used to create many Piantinas.
     */
    data: PiantinaCreateManyInput | PiantinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Piantina update
   */
  export type PiantinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Piantina.
     */
    data: XOR<PiantinaUpdateInput, PiantinaUncheckedUpdateInput>
    /**
     * Choose, which Piantina to update.
     */
    where: PiantinaWhereUniqueInput
  }

  /**
   * Piantina updateMany
   */
  export type PiantinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Piantinas.
     */
    data: XOR<PiantinaUpdateManyMutationInput, PiantinaUncheckedUpdateManyInput>
    /**
     * Filter which Piantinas to update
     */
    where?: PiantinaWhereInput
    /**
     * Limit how many Piantinas to update.
     */
    limit?: number
  }

  /**
   * Piantina updateManyAndReturn
   */
  export type PiantinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * The data used to update Piantinas.
     */
    data: XOR<PiantinaUpdateManyMutationInput, PiantinaUncheckedUpdateManyInput>
    /**
     * Filter which Piantinas to update
     */
    where?: PiantinaWhereInput
    /**
     * Limit how many Piantinas to update.
     */
    limit?: number
  }

  /**
   * Piantina upsert
   */
  export type PiantinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Piantina to update in case it exists.
     */
    where: PiantinaWhereUniqueInput
    /**
     * In case the Piantina found by the `where` argument doesn't exist, create a new Piantina with this data.
     */
    create: XOR<PiantinaCreateInput, PiantinaUncheckedCreateInput>
    /**
     * In case the Piantina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PiantinaUpdateInput, PiantinaUncheckedUpdateInput>
  }

  /**
   * Piantina delete
   */
  export type PiantinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
    /**
     * Filter which Piantina to delete.
     */
    where: PiantinaWhereUniqueInput
  }

  /**
   * Piantina deleteMany
   */
  export type PiantinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piantinas to delete
     */
    where?: PiantinaWhereInput
    /**
     * Limit how many Piantinas to delete.
     */
    limit?: number
  }

  /**
   * Piantina.tavoli
   */
  export type Piantina$tavoliArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    where?: TavoloWhereInput
    orderBy?: TavoloOrderByWithRelationInput | TavoloOrderByWithRelationInput[]
    cursor?: TavoloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TavoloScalarFieldEnum | TavoloScalarFieldEnum[]
  }

  /**
   * Piantina without action
   */
  export type PiantinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piantina
     */
    select?: PiantinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piantina
     */
    omit?: PiantinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiantinaInclude<ExtArgs> | null
  }


  /**
   * Model Tavolo
   */

  export type AggregateTavolo = {
    _count: TavoloCountAggregateOutputType | null
    _avg: TavoloAvgAggregateOutputType | null
    _sum: TavoloSumAggregateOutputType | null
    _min: TavoloMinAggregateOutputType | null
    _max: TavoloMaxAggregateOutputType | null
  }

  export type TavoloAvgAggregateOutputType = {
    postiASedere: number | null
    posizioneX: number | null
    posizioneY: number | null
    larghezza: number | null
    altezza: number | null
    rotazione: number | null
  }

  export type TavoloSumAggregateOutputType = {
    postiASedere: number | null
    posizioneX: number | null
    posizioneY: number | null
    larghezza: number | null
    altezza: number | null
    rotazione: number | null
  }

  export type TavoloMinAggregateOutputType = {
    id: string | null
    piantinaId: string | null
    nome: string | null
    postiASedere: number | null
    posizioneX: number | null
    posizioneY: number | null
    forma: string | null
    larghezza: number | null
    altezza: number | null
    rotazione: number | null
  }

  export type TavoloMaxAggregateOutputType = {
    id: string | null
    piantinaId: string | null
    nome: string | null
    postiASedere: number | null
    posizioneX: number | null
    posizioneY: number | null
    forma: string | null
    larghezza: number | null
    altezza: number | null
    rotazione: number | null
  }

  export type TavoloCountAggregateOutputType = {
    id: number
    piantinaId: number
    nome: number
    postiASedere: number
    posizioneX: number
    posizioneY: number
    forma: number
    larghezza: number
    altezza: number
    rotazione: number
    _all: number
  }


  export type TavoloAvgAggregateInputType = {
    postiASedere?: true
    posizioneX?: true
    posizioneY?: true
    larghezza?: true
    altezza?: true
    rotazione?: true
  }

  export type TavoloSumAggregateInputType = {
    postiASedere?: true
    posizioneX?: true
    posizioneY?: true
    larghezza?: true
    altezza?: true
    rotazione?: true
  }

  export type TavoloMinAggregateInputType = {
    id?: true
    piantinaId?: true
    nome?: true
    postiASedere?: true
    posizioneX?: true
    posizioneY?: true
    forma?: true
    larghezza?: true
    altezza?: true
    rotazione?: true
  }

  export type TavoloMaxAggregateInputType = {
    id?: true
    piantinaId?: true
    nome?: true
    postiASedere?: true
    posizioneX?: true
    posizioneY?: true
    forma?: true
    larghezza?: true
    altezza?: true
    rotazione?: true
  }

  export type TavoloCountAggregateInputType = {
    id?: true
    piantinaId?: true
    nome?: true
    postiASedere?: true
    posizioneX?: true
    posizioneY?: true
    forma?: true
    larghezza?: true
    altezza?: true
    rotazione?: true
    _all?: true
  }

  export type TavoloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tavolo to aggregate.
     */
    where?: TavoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tavolos to fetch.
     */
    orderBy?: TavoloOrderByWithRelationInput | TavoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TavoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tavolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tavolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tavolos
    **/
    _count?: true | TavoloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TavoloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TavoloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TavoloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TavoloMaxAggregateInputType
  }

  export type GetTavoloAggregateType<T extends TavoloAggregateArgs> = {
        [P in keyof T & keyof AggregateTavolo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTavolo[P]>
      : GetScalarType<T[P], AggregateTavolo[P]>
  }




  export type TavoloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TavoloWhereInput
    orderBy?: TavoloOrderByWithAggregationInput | TavoloOrderByWithAggregationInput[]
    by: TavoloScalarFieldEnum[] | TavoloScalarFieldEnum
    having?: TavoloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TavoloCountAggregateInputType | true
    _avg?: TavoloAvgAggregateInputType
    _sum?: TavoloSumAggregateInputType
    _min?: TavoloMinAggregateInputType
    _max?: TavoloMaxAggregateInputType
  }

  export type TavoloGroupByOutputType = {
    id: string
    piantinaId: string
    nome: string | null
    postiASedere: number
    posizioneX: number
    posizioneY: number
    forma: string | null
    larghezza: number
    altezza: number
    rotazione: number | null
    _count: TavoloCountAggregateOutputType | null
    _avg: TavoloAvgAggregateOutputType | null
    _sum: TavoloSumAggregateOutputType | null
    _min: TavoloMinAggregateOutputType | null
    _max: TavoloMaxAggregateOutputType | null
  }

  type GetTavoloGroupByPayload<T extends TavoloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TavoloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TavoloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TavoloGroupByOutputType[P]>
            : GetScalarType<T[P], TavoloGroupByOutputType[P]>
        }
      >
    >


  export type TavoloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piantinaId?: boolean
    nome?: boolean
    postiASedere?: boolean
    posizioneX?: boolean
    posizioneY?: boolean
    forma?: boolean
    larghezza?: boolean
    altezza?: boolean
    rotazione?: boolean
    piantina?: boolean | PiantinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tavolo"]>

  export type TavoloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piantinaId?: boolean
    nome?: boolean
    postiASedere?: boolean
    posizioneX?: boolean
    posizioneY?: boolean
    forma?: boolean
    larghezza?: boolean
    altezza?: boolean
    rotazione?: boolean
    piantina?: boolean | PiantinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tavolo"]>

  export type TavoloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piantinaId?: boolean
    nome?: boolean
    postiASedere?: boolean
    posizioneX?: boolean
    posizioneY?: boolean
    forma?: boolean
    larghezza?: boolean
    altezza?: boolean
    rotazione?: boolean
    piantina?: boolean | PiantinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tavolo"]>

  export type TavoloSelectScalar = {
    id?: boolean
    piantinaId?: boolean
    nome?: boolean
    postiASedere?: boolean
    posizioneX?: boolean
    posizioneY?: boolean
    forma?: boolean
    larghezza?: boolean
    altezza?: boolean
    rotazione?: boolean
  }

  export type TavoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "piantinaId" | "nome" | "postiASedere" | "posizioneX" | "posizioneY" | "forma" | "larghezza" | "altezza" | "rotazione", ExtArgs["result"]["tavolo"]>
  export type TavoloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piantina?: boolean | PiantinaDefaultArgs<ExtArgs>
  }
  export type TavoloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piantina?: boolean | PiantinaDefaultArgs<ExtArgs>
  }
  export type TavoloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    piantina?: boolean | PiantinaDefaultArgs<ExtArgs>
  }

  export type $TavoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tavolo"
    objects: {
      piantina: Prisma.$PiantinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      piantinaId: string
      nome: string | null
      postiASedere: number
      posizioneX: number
      posizioneY: number
      forma: string | null
      larghezza: number
      altezza: number
      rotazione: number | null
    }, ExtArgs["result"]["tavolo"]>
    composites: {}
  }

  type TavoloGetPayload<S extends boolean | null | undefined | TavoloDefaultArgs> = $Result.GetResult<Prisma.$TavoloPayload, S>

  type TavoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TavoloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TavoloCountAggregateInputType | true
    }

  export interface TavoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tavolo'], meta: { name: 'Tavolo' } }
    /**
     * Find zero or one Tavolo that matches the filter.
     * @param {TavoloFindUniqueArgs} args - Arguments to find a Tavolo
     * @example
     * // Get one Tavolo
     * const tavolo = await prisma.tavolo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TavoloFindUniqueArgs>(args: SelectSubset<T, TavoloFindUniqueArgs<ExtArgs>>): Prisma__TavoloClient<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tavolo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TavoloFindUniqueOrThrowArgs} args - Arguments to find a Tavolo
     * @example
     * // Get one Tavolo
     * const tavolo = await prisma.tavolo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TavoloFindUniqueOrThrowArgs>(args: SelectSubset<T, TavoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TavoloClient<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tavolo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TavoloFindFirstArgs} args - Arguments to find a Tavolo
     * @example
     * // Get one Tavolo
     * const tavolo = await prisma.tavolo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TavoloFindFirstArgs>(args?: SelectSubset<T, TavoloFindFirstArgs<ExtArgs>>): Prisma__TavoloClient<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tavolo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TavoloFindFirstOrThrowArgs} args - Arguments to find a Tavolo
     * @example
     * // Get one Tavolo
     * const tavolo = await prisma.tavolo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TavoloFindFirstOrThrowArgs>(args?: SelectSubset<T, TavoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__TavoloClient<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tavolos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TavoloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tavolos
     * const tavolos = await prisma.tavolo.findMany()
     * 
     * // Get first 10 Tavolos
     * const tavolos = await prisma.tavolo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tavoloWithIdOnly = await prisma.tavolo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TavoloFindManyArgs>(args?: SelectSubset<T, TavoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tavolo.
     * @param {TavoloCreateArgs} args - Arguments to create a Tavolo.
     * @example
     * // Create one Tavolo
     * const Tavolo = await prisma.tavolo.create({
     *   data: {
     *     // ... data to create a Tavolo
     *   }
     * })
     * 
     */
    create<T extends TavoloCreateArgs>(args: SelectSubset<T, TavoloCreateArgs<ExtArgs>>): Prisma__TavoloClient<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tavolos.
     * @param {TavoloCreateManyArgs} args - Arguments to create many Tavolos.
     * @example
     * // Create many Tavolos
     * const tavolo = await prisma.tavolo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TavoloCreateManyArgs>(args?: SelectSubset<T, TavoloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tavolos and returns the data saved in the database.
     * @param {TavoloCreateManyAndReturnArgs} args - Arguments to create many Tavolos.
     * @example
     * // Create many Tavolos
     * const tavolo = await prisma.tavolo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tavolos and only return the `id`
     * const tavoloWithIdOnly = await prisma.tavolo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TavoloCreateManyAndReturnArgs>(args?: SelectSubset<T, TavoloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tavolo.
     * @param {TavoloDeleteArgs} args - Arguments to delete one Tavolo.
     * @example
     * // Delete one Tavolo
     * const Tavolo = await prisma.tavolo.delete({
     *   where: {
     *     // ... filter to delete one Tavolo
     *   }
     * })
     * 
     */
    delete<T extends TavoloDeleteArgs>(args: SelectSubset<T, TavoloDeleteArgs<ExtArgs>>): Prisma__TavoloClient<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tavolo.
     * @param {TavoloUpdateArgs} args - Arguments to update one Tavolo.
     * @example
     * // Update one Tavolo
     * const tavolo = await prisma.tavolo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TavoloUpdateArgs>(args: SelectSubset<T, TavoloUpdateArgs<ExtArgs>>): Prisma__TavoloClient<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tavolos.
     * @param {TavoloDeleteManyArgs} args - Arguments to filter Tavolos to delete.
     * @example
     * // Delete a few Tavolos
     * const { count } = await prisma.tavolo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TavoloDeleteManyArgs>(args?: SelectSubset<T, TavoloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tavolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TavoloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tavolos
     * const tavolo = await prisma.tavolo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TavoloUpdateManyArgs>(args: SelectSubset<T, TavoloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tavolos and returns the data updated in the database.
     * @param {TavoloUpdateManyAndReturnArgs} args - Arguments to update many Tavolos.
     * @example
     * // Update many Tavolos
     * const tavolo = await prisma.tavolo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tavolos and only return the `id`
     * const tavoloWithIdOnly = await prisma.tavolo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TavoloUpdateManyAndReturnArgs>(args: SelectSubset<T, TavoloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tavolo.
     * @param {TavoloUpsertArgs} args - Arguments to update or create a Tavolo.
     * @example
     * // Update or create a Tavolo
     * const tavolo = await prisma.tavolo.upsert({
     *   create: {
     *     // ... data to create a Tavolo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tavolo we want to update
     *   }
     * })
     */
    upsert<T extends TavoloUpsertArgs>(args: SelectSubset<T, TavoloUpsertArgs<ExtArgs>>): Prisma__TavoloClient<$Result.GetResult<Prisma.$TavoloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tavolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TavoloCountArgs} args - Arguments to filter Tavolos to count.
     * @example
     * // Count the number of Tavolos
     * const count = await prisma.tavolo.count({
     *   where: {
     *     // ... the filter for the Tavolos we want to count
     *   }
     * })
    **/
    count<T extends TavoloCountArgs>(
      args?: Subset<T, TavoloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TavoloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tavolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TavoloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TavoloAggregateArgs>(args: Subset<T, TavoloAggregateArgs>): Prisma.PrismaPromise<GetTavoloAggregateType<T>>

    /**
     * Group by Tavolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TavoloGroupByArgs} args - Group by arguments.
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
      T extends TavoloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TavoloGroupByArgs['orderBy'] }
        : { orderBy?: TavoloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TavoloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTavoloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tavolo model
   */
  readonly fields: TavoloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tavolo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TavoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    piantina<T extends PiantinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PiantinaDefaultArgs<ExtArgs>>): Prisma__PiantinaClient<$Result.GetResult<Prisma.$PiantinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tavolo model
   */
  interface TavoloFieldRefs {
    readonly id: FieldRef<"Tavolo", 'String'>
    readonly piantinaId: FieldRef<"Tavolo", 'String'>
    readonly nome: FieldRef<"Tavolo", 'String'>
    readonly postiASedere: FieldRef<"Tavolo", 'Int'>
    readonly posizioneX: FieldRef<"Tavolo", 'Float'>
    readonly posizioneY: FieldRef<"Tavolo", 'Float'>
    readonly forma: FieldRef<"Tavolo", 'String'>
    readonly larghezza: FieldRef<"Tavolo", 'Float'>
    readonly altezza: FieldRef<"Tavolo", 'Float'>
    readonly rotazione: FieldRef<"Tavolo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Tavolo findUnique
   */
  export type TavoloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * Filter, which Tavolo to fetch.
     */
    where: TavoloWhereUniqueInput
  }

  /**
   * Tavolo findUniqueOrThrow
   */
  export type TavoloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * Filter, which Tavolo to fetch.
     */
    where: TavoloWhereUniqueInput
  }

  /**
   * Tavolo findFirst
   */
  export type TavoloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * Filter, which Tavolo to fetch.
     */
    where?: TavoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tavolos to fetch.
     */
    orderBy?: TavoloOrderByWithRelationInput | TavoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tavolos.
     */
    cursor?: TavoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tavolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tavolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tavolos.
     */
    distinct?: TavoloScalarFieldEnum | TavoloScalarFieldEnum[]
  }

  /**
   * Tavolo findFirstOrThrow
   */
  export type TavoloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * Filter, which Tavolo to fetch.
     */
    where?: TavoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tavolos to fetch.
     */
    orderBy?: TavoloOrderByWithRelationInput | TavoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tavolos.
     */
    cursor?: TavoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tavolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tavolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tavolos.
     */
    distinct?: TavoloScalarFieldEnum | TavoloScalarFieldEnum[]
  }

  /**
   * Tavolo findMany
   */
  export type TavoloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * Filter, which Tavolos to fetch.
     */
    where?: TavoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tavolos to fetch.
     */
    orderBy?: TavoloOrderByWithRelationInput | TavoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tavolos.
     */
    cursor?: TavoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tavolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tavolos.
     */
    skip?: number
    distinct?: TavoloScalarFieldEnum | TavoloScalarFieldEnum[]
  }

  /**
   * Tavolo create
   */
  export type TavoloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * The data needed to create a Tavolo.
     */
    data: XOR<TavoloCreateInput, TavoloUncheckedCreateInput>
  }

  /**
   * Tavolo createMany
   */
  export type TavoloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tavolos.
     */
    data: TavoloCreateManyInput | TavoloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tavolo createManyAndReturn
   */
  export type TavoloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * The data used to create many Tavolos.
     */
    data: TavoloCreateManyInput | TavoloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tavolo update
   */
  export type TavoloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * The data needed to update a Tavolo.
     */
    data: XOR<TavoloUpdateInput, TavoloUncheckedUpdateInput>
    /**
     * Choose, which Tavolo to update.
     */
    where: TavoloWhereUniqueInput
  }

  /**
   * Tavolo updateMany
   */
  export type TavoloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tavolos.
     */
    data: XOR<TavoloUpdateManyMutationInput, TavoloUncheckedUpdateManyInput>
    /**
     * Filter which Tavolos to update
     */
    where?: TavoloWhereInput
    /**
     * Limit how many Tavolos to update.
     */
    limit?: number
  }

  /**
   * Tavolo updateManyAndReturn
   */
  export type TavoloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * The data used to update Tavolos.
     */
    data: XOR<TavoloUpdateManyMutationInput, TavoloUncheckedUpdateManyInput>
    /**
     * Filter which Tavolos to update
     */
    where?: TavoloWhereInput
    /**
     * Limit how many Tavolos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tavolo upsert
   */
  export type TavoloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * The filter to search for the Tavolo to update in case it exists.
     */
    where: TavoloWhereUniqueInput
    /**
     * In case the Tavolo found by the `where` argument doesn't exist, create a new Tavolo with this data.
     */
    create: XOR<TavoloCreateInput, TavoloUncheckedCreateInput>
    /**
     * In case the Tavolo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TavoloUpdateInput, TavoloUncheckedUpdateInput>
  }

  /**
   * Tavolo delete
   */
  export type TavoloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
    /**
     * Filter which Tavolo to delete.
     */
    where: TavoloWhereUniqueInput
  }

  /**
   * Tavolo deleteMany
   */
  export type TavoloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tavolos to delete
     */
    where?: TavoloWhereInput
    /**
     * Limit how many Tavolos to delete.
     */
    limit?: number
  }

  /**
   * Tavolo without action
   */
  export type TavoloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tavolo
     */
    select?: TavoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tavolo
     */
    omit?: TavoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TavoloInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    username: 'username',
    password: 'password',
    bearerToken: 'bearerToken',
    ipAddress: 'ipAddress',
    mongoAdress: 'mongoAdress'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RistoranteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    via: 'via',
    civico: 'civico',
    citta: 'citta',
    vat: 'vat'
  };

  export type RistoranteScalarFieldEnum = (typeof RistoranteScalarFieldEnum)[keyof typeof RistoranteScalarFieldEnum]


  export const AreaCompetenzaScalarFieldEnum: {
    id: 'id',
    descrizione: 'descrizione',
    dataCreaz: 'dataCreaz',
    dataAgg: 'dataAgg',
    isAttiva: 'isAttiva',
    note: 'note',
    ordine: 'ordine',
    descrizioneInglese: 'descrizioneInglese',
    noteInglese: 'noteInglese',
    isMenuFisso: 'isMenuFisso'
  };

  export type AreaCompetenzaScalarFieldEnum = (typeof AreaCompetenzaScalarFieldEnum)[keyof typeof AreaCompetenzaScalarFieldEnum]


  export const OrarioAreaScalarFieldEnum: {
    id: 'id',
    areaId: 'areaId',
    giorno: 'giorno',
    start: 'start',
    end: 'end'
  };

  export type OrarioAreaScalarFieldEnum = (typeof OrarioAreaScalarFieldEnum)[keyof typeof OrarioAreaScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    descrizioneLingua1: 'descrizioneLingua1',
    isAttiva: 'isAttiva',
    isVisibileSuSelfOrder: 'isVisibileSuSelfOrder',
    ordineTastoPc: 'ordineTastoPc',
    dataCreaz: 'dataCreaz',
    dataAgg: 'dataAgg',
    descrizioneLingua2: 'descrizioneLingua2'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const PietanzaScalarFieldEnum: {
    id: 'id',
    idCategoriaPietanza: 'idCategoriaPietanza',
    descrizioneLingua1: 'descrizioneLingua1',
    prezzo: 'prezzo',
    isAttiva: 'isAttiva',
    isVisibileSuSelfOrder: 'isVisibileSuSelfOrder',
    ordineTastoPc: 'ordineTastoPc',
    dataCreaz: 'dataCreaz',
    dataAgg: 'dataAgg',
    note: 'note',
    image: 'image',
    descrizioneLingua2: 'descrizioneLingua2',
    noteLingua2: 'noteLingua2'
  };

  export type PietanzaScalarFieldEnum = (typeof PietanzaScalarFieldEnum)[keyof typeof PietanzaScalarFieldEnum]


  export const CrossSellingScalarFieldEnum: {
    correlataId: 'correlataId',
    correlataById: 'correlataById'
  };

  export type CrossSellingScalarFieldEnum = (typeof CrossSellingScalarFieldEnum)[keyof typeof CrossSellingScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    descrizione: 'descrizione',
    colore: 'colore',
    isAllergene: 'isAllergene'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PrenotazioneScalarFieldEnum: {
    id: 'id',
    ristoranteId: 'ristoranteId',
    nomeCliente: 'nomeCliente',
    cognomeCliente: 'cognomeCliente',
    emailCliente: 'emailCliente',
    telefonoCliente: 'telefonoCliente',
    numeroPersone: 'numeroPersone',
    numeroBambini: 'numeroBambini',
    data: 'data',
    ora: 'ora',
    noteSpeciali: 'noteSpeciali',
    noteCliente: 'noteCliente',
    numeroTavolo: 'numeroTavolo',
    statoPrenotazione: 'statoPrenotazione',
    orarioArrivo: 'orarioArrivo',
    canalePrenotazione: 'canalePrenotazione',
    fontePrenotazione: 'fontePrenotazione',
    allergie: 'allergie'
  };

  export type PrenotazioneScalarFieldEnum = (typeof PrenotazioneScalarFieldEnum)[keyof typeof PrenotazioneScalarFieldEnum]


  export const PiantinaScalarFieldEnum: {
    id: 'id',
    ristoranteId: 'ristoranteId',
    nome: 'nome',
    ordineVisualizzazione: 'ordineVisualizzazione'
  };

  export type PiantinaScalarFieldEnum = (typeof PiantinaScalarFieldEnum)[keyof typeof PiantinaScalarFieldEnum]


  export const TavoloScalarFieldEnum: {
    id: 'id',
    piantinaId: 'piantinaId',
    nome: 'nome',
    postiASedere: 'postiASedere',
    posizioneX: 'posizioneX',
    posizioneY: 'posizioneY',
    forma: 'forma',
    larghezza: 'larghezza',
    altezza: 'altezza',
    rotazione: 'rotazione'
  };

  export type TavoloScalarFieldEnum = (typeof TavoloScalarFieldEnum)[keyof typeof TavoloScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PrenotazioneStato'
   */
  export type EnumPrenotazioneStatoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrenotazioneStato'>
    


  /**
   * Reference to a field of type 'PrenotazioneStato[]'
   */
  export type ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrenotazioneStato[]'>
    


  /**
   * Reference to a field of type 'PrenotazioneCanale'
   */
  export type EnumPrenotazioneCanaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrenotazioneCanale'>
    


  /**
   * Reference to a field of type 'PrenotazioneCanale[]'
   */
  export type ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrenotazioneCanale[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    bearerToken?: StringNullableFilter<"users"> | string | null
    ipAddress?: StringNullableFilter<"users"> | string | null
    mongoAdress?: StringNullableFilter<"users"> | string | null
    ristorante?: RistoranteListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    bearerToken?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    mongoAdress?: SortOrderInput | SortOrder
    ristorante?: RistoranteOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    bearerToken?: StringNullableFilter<"users"> | string | null
    ipAddress?: StringNullableFilter<"users"> | string | null
    mongoAdress?: StringNullableFilter<"users"> | string | null
    ristorante?: RistoranteListRelationFilter
  }, "id" | "email" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    bearerToken?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    mongoAdress?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    bearerToken?: StringNullableWithAggregatesFilter<"users"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"users"> | string | null
    mongoAdress?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type RistoranteWhereInput = {
    AND?: RistoranteWhereInput | RistoranteWhereInput[]
    OR?: RistoranteWhereInput[]
    NOT?: RistoranteWhereInput | RistoranteWhereInput[]
    id?: StringFilter<"Ristorante"> | string
    name?: StringNullableFilter<"Ristorante"> | string | null
    via?: StringNullableFilter<"Ristorante"> | string | null
    civico?: StringNullableFilter<"Ristorante"> | string | null
    citta?: StringNullableFilter<"Ristorante"> | string | null
    vat?: StringNullableFilter<"Ristorante"> | string | null
    user?: UsersListRelationFilter
  }

  export type RistoranteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    via?: SortOrderInput | SortOrder
    civico?: SortOrderInput | SortOrder
    citta?: SortOrderInput | SortOrder
    vat?: SortOrderInput | SortOrder
    user?: usersOrderByRelationAggregateInput
  }

  export type RistoranteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RistoranteWhereInput | RistoranteWhereInput[]
    OR?: RistoranteWhereInput[]
    NOT?: RistoranteWhereInput | RistoranteWhereInput[]
    name?: StringNullableFilter<"Ristorante"> | string | null
    via?: StringNullableFilter<"Ristorante"> | string | null
    civico?: StringNullableFilter<"Ristorante"> | string | null
    citta?: StringNullableFilter<"Ristorante"> | string | null
    vat?: StringNullableFilter<"Ristorante"> | string | null
    user?: UsersListRelationFilter
  }, "id">

  export type RistoranteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    via?: SortOrderInput | SortOrder
    civico?: SortOrderInput | SortOrder
    citta?: SortOrderInput | SortOrder
    vat?: SortOrderInput | SortOrder
    _count?: RistoranteCountOrderByAggregateInput
    _max?: RistoranteMaxOrderByAggregateInput
    _min?: RistoranteMinOrderByAggregateInput
  }

  export type RistoranteScalarWhereWithAggregatesInput = {
    AND?: RistoranteScalarWhereWithAggregatesInput | RistoranteScalarWhereWithAggregatesInput[]
    OR?: RistoranteScalarWhereWithAggregatesInput[]
    NOT?: RistoranteScalarWhereWithAggregatesInput | RistoranteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ristorante"> | string
    name?: StringNullableWithAggregatesFilter<"Ristorante"> | string | null
    via?: StringNullableWithAggregatesFilter<"Ristorante"> | string | null
    civico?: StringNullableWithAggregatesFilter<"Ristorante"> | string | null
    citta?: StringNullableWithAggregatesFilter<"Ristorante"> | string | null
    vat?: StringNullableWithAggregatesFilter<"Ristorante"> | string | null
  }

  export type AreaCompetenzaWhereInput = {
    AND?: AreaCompetenzaWhereInput | AreaCompetenzaWhereInput[]
    OR?: AreaCompetenzaWhereInput[]
    NOT?: AreaCompetenzaWhereInput | AreaCompetenzaWhereInput[]
    id?: IntFilter<"AreaCompetenza"> | number
    descrizione?: StringFilter<"AreaCompetenza"> | string
    dataCreaz?: DateTimeFilter<"AreaCompetenza"> | Date | string
    dataAgg?: DateTimeFilter<"AreaCompetenza"> | Date | string
    isAttiva?: BoolFilter<"AreaCompetenza"> | boolean
    note?: StringFilter<"AreaCompetenza"> | string
    ordine?: IntFilter<"AreaCompetenza"> | number
    descrizioneInglese?: StringNullableFilter<"AreaCompetenza"> | string | null
    noteInglese?: StringNullableFilter<"AreaCompetenza"> | string | null
    isMenuFisso?: BoolFilter<"AreaCompetenza"> | boolean
    orari?: OrarioAreaListRelationFilter
    categorie?: CategoriaListRelationFilter
  }

  export type AreaCompetenzaOrderByWithRelationInput = {
    id?: SortOrder
    descrizione?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    isAttiva?: SortOrder
    note?: SortOrder
    ordine?: SortOrder
    descrizioneInglese?: SortOrderInput | SortOrder
    noteInglese?: SortOrderInput | SortOrder
    isMenuFisso?: SortOrder
    orari?: OrarioAreaOrderByRelationAggregateInput
    categorie?: CategoriaOrderByRelationAggregateInput
  }

  export type AreaCompetenzaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AreaCompetenzaWhereInput | AreaCompetenzaWhereInput[]
    OR?: AreaCompetenzaWhereInput[]
    NOT?: AreaCompetenzaWhereInput | AreaCompetenzaWhereInput[]
    descrizione?: StringFilter<"AreaCompetenza"> | string
    dataCreaz?: DateTimeFilter<"AreaCompetenza"> | Date | string
    dataAgg?: DateTimeFilter<"AreaCompetenza"> | Date | string
    isAttiva?: BoolFilter<"AreaCompetenza"> | boolean
    note?: StringFilter<"AreaCompetenza"> | string
    ordine?: IntFilter<"AreaCompetenza"> | number
    descrizioneInglese?: StringNullableFilter<"AreaCompetenza"> | string | null
    noteInglese?: StringNullableFilter<"AreaCompetenza"> | string | null
    isMenuFisso?: BoolFilter<"AreaCompetenza"> | boolean
    orari?: OrarioAreaListRelationFilter
    categorie?: CategoriaListRelationFilter
  }, "id">

  export type AreaCompetenzaOrderByWithAggregationInput = {
    id?: SortOrder
    descrizione?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    isAttiva?: SortOrder
    note?: SortOrder
    ordine?: SortOrder
    descrizioneInglese?: SortOrderInput | SortOrder
    noteInglese?: SortOrderInput | SortOrder
    isMenuFisso?: SortOrder
    _count?: AreaCompetenzaCountOrderByAggregateInput
    _avg?: AreaCompetenzaAvgOrderByAggregateInput
    _max?: AreaCompetenzaMaxOrderByAggregateInput
    _min?: AreaCompetenzaMinOrderByAggregateInput
    _sum?: AreaCompetenzaSumOrderByAggregateInput
  }

  export type AreaCompetenzaScalarWhereWithAggregatesInput = {
    AND?: AreaCompetenzaScalarWhereWithAggregatesInput | AreaCompetenzaScalarWhereWithAggregatesInput[]
    OR?: AreaCompetenzaScalarWhereWithAggregatesInput[]
    NOT?: AreaCompetenzaScalarWhereWithAggregatesInput | AreaCompetenzaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AreaCompetenza"> | number
    descrizione?: StringWithAggregatesFilter<"AreaCompetenza"> | string
    dataCreaz?: DateTimeWithAggregatesFilter<"AreaCompetenza"> | Date | string
    dataAgg?: DateTimeWithAggregatesFilter<"AreaCompetenza"> | Date | string
    isAttiva?: BoolWithAggregatesFilter<"AreaCompetenza"> | boolean
    note?: StringWithAggregatesFilter<"AreaCompetenza"> | string
    ordine?: IntWithAggregatesFilter<"AreaCompetenza"> | number
    descrizioneInglese?: StringNullableWithAggregatesFilter<"AreaCompetenza"> | string | null
    noteInglese?: StringNullableWithAggregatesFilter<"AreaCompetenza"> | string | null
    isMenuFisso?: BoolWithAggregatesFilter<"AreaCompetenza"> | boolean
  }

  export type OrarioAreaWhereInput = {
    AND?: OrarioAreaWhereInput | OrarioAreaWhereInput[]
    OR?: OrarioAreaWhereInput[]
    NOT?: OrarioAreaWhereInput | OrarioAreaWhereInput[]
    id?: IntFilter<"OrarioArea"> | number
    areaId?: IntFilter<"OrarioArea"> | number
    giorno?: StringFilter<"OrarioArea"> | string
    start?: DateTimeFilter<"OrarioArea"> | Date | string
    end?: DateTimeFilter<"OrarioArea"> | Date | string
    area?: XOR<AreaCompetenzaScalarRelationFilter, AreaCompetenzaWhereInput>
  }

  export type OrarioAreaOrderByWithRelationInput = {
    id?: SortOrder
    areaId?: SortOrder
    giorno?: SortOrder
    start?: SortOrder
    end?: SortOrder
    area?: AreaCompetenzaOrderByWithRelationInput
  }

  export type OrarioAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrarioAreaWhereInput | OrarioAreaWhereInput[]
    OR?: OrarioAreaWhereInput[]
    NOT?: OrarioAreaWhereInput | OrarioAreaWhereInput[]
    areaId?: IntFilter<"OrarioArea"> | number
    giorno?: StringFilter<"OrarioArea"> | string
    start?: DateTimeFilter<"OrarioArea"> | Date | string
    end?: DateTimeFilter<"OrarioArea"> | Date | string
    area?: XOR<AreaCompetenzaScalarRelationFilter, AreaCompetenzaWhereInput>
  }, "id">

  export type OrarioAreaOrderByWithAggregationInput = {
    id?: SortOrder
    areaId?: SortOrder
    giorno?: SortOrder
    start?: SortOrder
    end?: SortOrder
    _count?: OrarioAreaCountOrderByAggregateInput
    _avg?: OrarioAreaAvgOrderByAggregateInput
    _max?: OrarioAreaMaxOrderByAggregateInput
    _min?: OrarioAreaMinOrderByAggregateInput
    _sum?: OrarioAreaSumOrderByAggregateInput
  }

  export type OrarioAreaScalarWhereWithAggregatesInput = {
    AND?: OrarioAreaScalarWhereWithAggregatesInput | OrarioAreaScalarWhereWithAggregatesInput[]
    OR?: OrarioAreaScalarWhereWithAggregatesInput[]
    NOT?: OrarioAreaScalarWhereWithAggregatesInput | OrarioAreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrarioArea"> | number
    areaId?: IntWithAggregatesFilter<"OrarioArea"> | number
    giorno?: StringWithAggregatesFilter<"OrarioArea"> | string
    start?: DateTimeWithAggregatesFilter<"OrarioArea"> | Date | string
    end?: DateTimeWithAggregatesFilter<"OrarioArea"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    descrizioneLingua1?: StringFilter<"Categoria"> | string
    isAttiva?: BoolFilter<"Categoria"> | boolean
    isVisibileSuSelfOrder?: BoolFilter<"Categoria"> | boolean
    ordineTastoPc?: IntFilter<"Categoria"> | number
    dataCreaz?: DateTimeFilter<"Categoria"> | Date | string
    dataAgg?: DateTimeFilter<"Categoria"> | Date | string
    descrizioneLingua2?: StringNullableFilter<"Categoria"> | string | null
    pietanze?: PietanzaListRelationFilter
    areeCompetenza?: AreaCompetenzaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    descrizioneLingua1?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    descrizioneLingua2?: SortOrderInput | SortOrder
    pietanze?: PietanzaOrderByRelationAggregateInput
    areeCompetenza?: AreaCompetenzaOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descrizioneLingua1?: StringFilter<"Categoria"> | string
    isAttiva?: BoolFilter<"Categoria"> | boolean
    isVisibileSuSelfOrder?: BoolFilter<"Categoria"> | boolean
    ordineTastoPc?: IntFilter<"Categoria"> | number
    dataCreaz?: DateTimeFilter<"Categoria"> | Date | string
    dataAgg?: DateTimeFilter<"Categoria"> | Date | string
    descrizioneLingua2?: StringNullableFilter<"Categoria"> | string | null
    pietanze?: PietanzaListRelationFilter
    areeCompetenza?: AreaCompetenzaListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    descrizioneLingua1?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    descrizioneLingua2?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    descrizioneLingua1?: StringWithAggregatesFilter<"Categoria"> | string
    isAttiva?: BoolWithAggregatesFilter<"Categoria"> | boolean
    isVisibileSuSelfOrder?: BoolWithAggregatesFilter<"Categoria"> | boolean
    ordineTastoPc?: IntWithAggregatesFilter<"Categoria"> | number
    dataCreaz?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    dataAgg?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    descrizioneLingua2?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
  }

  export type PietanzaWhereInput = {
    AND?: PietanzaWhereInput | PietanzaWhereInput[]
    OR?: PietanzaWhereInput[]
    NOT?: PietanzaWhereInput | PietanzaWhereInput[]
    id?: IntFilter<"Pietanza"> | number
    idCategoriaPietanza?: IntFilter<"Pietanza"> | number
    descrizioneLingua1?: StringFilter<"Pietanza"> | string
    prezzo?: FloatFilter<"Pietanza"> | number
    isAttiva?: BoolFilter<"Pietanza"> | boolean
    isVisibileSuSelfOrder?: BoolFilter<"Pietanza"> | boolean
    ordineTastoPc?: IntFilter<"Pietanza"> | number
    dataCreaz?: DateTimeFilter<"Pietanza"> | Date | string
    dataAgg?: DateTimeFilter<"Pietanza"> | Date | string
    note?: StringNullableFilter<"Pietanza"> | string | null
    image?: StringNullableFilter<"Pietanza"> | string | null
    descrizioneLingua2?: StringNullableFilter<"Pietanza"> | string | null
    noteLingua2?: StringNullableFilter<"Pietanza"> | string | null
    correlataBy?: CrossSellingListRelationFilter
    correlata?: CrossSellingListRelationFilter
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    tag?: TagListRelationFilter
  }

  export type PietanzaOrderByWithRelationInput = {
    id?: SortOrder
    idCategoriaPietanza?: SortOrder
    descrizioneLingua1?: SortOrder
    prezzo?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    note?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    descrizioneLingua2?: SortOrderInput | SortOrder
    noteLingua2?: SortOrderInput | SortOrder
    correlataBy?: CrossSellingOrderByRelationAggregateInput
    correlata?: CrossSellingOrderByRelationAggregateInput
    categoria?: CategoriaOrderByWithRelationInput
    tag?: TagOrderByRelationAggregateInput
  }

  export type PietanzaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PietanzaWhereInput | PietanzaWhereInput[]
    OR?: PietanzaWhereInput[]
    NOT?: PietanzaWhereInput | PietanzaWhereInput[]
    idCategoriaPietanza?: IntFilter<"Pietanza"> | number
    descrizioneLingua1?: StringFilter<"Pietanza"> | string
    prezzo?: FloatFilter<"Pietanza"> | number
    isAttiva?: BoolFilter<"Pietanza"> | boolean
    isVisibileSuSelfOrder?: BoolFilter<"Pietanza"> | boolean
    ordineTastoPc?: IntFilter<"Pietanza"> | number
    dataCreaz?: DateTimeFilter<"Pietanza"> | Date | string
    dataAgg?: DateTimeFilter<"Pietanza"> | Date | string
    note?: StringNullableFilter<"Pietanza"> | string | null
    image?: StringNullableFilter<"Pietanza"> | string | null
    descrizioneLingua2?: StringNullableFilter<"Pietanza"> | string | null
    noteLingua2?: StringNullableFilter<"Pietanza"> | string | null
    correlataBy?: CrossSellingListRelationFilter
    correlata?: CrossSellingListRelationFilter
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    tag?: TagListRelationFilter
  }, "id">

  export type PietanzaOrderByWithAggregationInput = {
    id?: SortOrder
    idCategoriaPietanza?: SortOrder
    descrizioneLingua1?: SortOrder
    prezzo?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    note?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    descrizioneLingua2?: SortOrderInput | SortOrder
    noteLingua2?: SortOrderInput | SortOrder
    _count?: PietanzaCountOrderByAggregateInput
    _avg?: PietanzaAvgOrderByAggregateInput
    _max?: PietanzaMaxOrderByAggregateInput
    _min?: PietanzaMinOrderByAggregateInput
    _sum?: PietanzaSumOrderByAggregateInput
  }

  export type PietanzaScalarWhereWithAggregatesInput = {
    AND?: PietanzaScalarWhereWithAggregatesInput | PietanzaScalarWhereWithAggregatesInput[]
    OR?: PietanzaScalarWhereWithAggregatesInput[]
    NOT?: PietanzaScalarWhereWithAggregatesInput | PietanzaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pietanza"> | number
    idCategoriaPietanza?: IntWithAggregatesFilter<"Pietanza"> | number
    descrizioneLingua1?: StringWithAggregatesFilter<"Pietanza"> | string
    prezzo?: FloatWithAggregatesFilter<"Pietanza"> | number
    isAttiva?: BoolWithAggregatesFilter<"Pietanza"> | boolean
    isVisibileSuSelfOrder?: BoolWithAggregatesFilter<"Pietanza"> | boolean
    ordineTastoPc?: IntWithAggregatesFilter<"Pietanza"> | number
    dataCreaz?: DateTimeWithAggregatesFilter<"Pietanza"> | Date | string
    dataAgg?: DateTimeWithAggregatesFilter<"Pietanza"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Pietanza"> | string | null
    image?: StringNullableWithAggregatesFilter<"Pietanza"> | string | null
    descrizioneLingua2?: StringNullableWithAggregatesFilter<"Pietanza"> | string | null
    noteLingua2?: StringNullableWithAggregatesFilter<"Pietanza"> | string | null
  }

  export type CrossSellingWhereInput = {
    AND?: CrossSellingWhereInput | CrossSellingWhereInput[]
    OR?: CrossSellingWhereInput[]
    NOT?: CrossSellingWhereInput | CrossSellingWhereInput[]
    correlataId?: IntFilter<"CrossSelling"> | number
    correlataById?: IntFilter<"CrossSelling"> | number
    correlataBy?: XOR<PietanzaScalarRelationFilter, PietanzaWhereInput>
    correlata?: XOR<PietanzaScalarRelationFilter, PietanzaWhereInput>
  }

  export type CrossSellingOrderByWithRelationInput = {
    correlataId?: SortOrder
    correlataById?: SortOrder
    correlataBy?: PietanzaOrderByWithRelationInput
    correlata?: PietanzaOrderByWithRelationInput
  }

  export type CrossSellingWhereUniqueInput = Prisma.AtLeast<{
    correlataById_correlataId?: CrossSellingCorrelataByIdCorrelataIdCompoundUniqueInput
    AND?: CrossSellingWhereInput | CrossSellingWhereInput[]
    OR?: CrossSellingWhereInput[]
    NOT?: CrossSellingWhereInput | CrossSellingWhereInput[]
    correlataId?: IntFilter<"CrossSelling"> | number
    correlataById?: IntFilter<"CrossSelling"> | number
    correlataBy?: XOR<PietanzaScalarRelationFilter, PietanzaWhereInput>
    correlata?: XOR<PietanzaScalarRelationFilter, PietanzaWhereInput>
  }, "correlataById_correlataId">

  export type CrossSellingOrderByWithAggregationInput = {
    correlataId?: SortOrder
    correlataById?: SortOrder
    _count?: CrossSellingCountOrderByAggregateInput
    _avg?: CrossSellingAvgOrderByAggregateInput
    _max?: CrossSellingMaxOrderByAggregateInput
    _min?: CrossSellingMinOrderByAggregateInput
    _sum?: CrossSellingSumOrderByAggregateInput
  }

  export type CrossSellingScalarWhereWithAggregatesInput = {
    AND?: CrossSellingScalarWhereWithAggregatesInput | CrossSellingScalarWhereWithAggregatesInput[]
    OR?: CrossSellingScalarWhereWithAggregatesInput[]
    NOT?: CrossSellingScalarWhereWithAggregatesInput | CrossSellingScalarWhereWithAggregatesInput[]
    correlataId?: IntWithAggregatesFilter<"CrossSelling"> | number
    correlataById?: IntWithAggregatesFilter<"CrossSelling"> | number
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    descrizione?: StringFilter<"Tag"> | string
    colore?: StringFilter<"Tag"> | string
    isAllergene?: BoolFilter<"Tag"> | boolean
    pietanze?: PietanzaListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    descrizione?: SortOrder
    colore?: SortOrder
    isAllergene?: SortOrder
    pietanze?: PietanzaOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    descrizione?: StringFilter<"Tag"> | string
    colore?: StringFilter<"Tag"> | string
    isAllergene?: BoolFilter<"Tag"> | boolean
    pietanze?: PietanzaListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    descrizione?: SortOrder
    colore?: SortOrder
    isAllergene?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    descrizione?: StringWithAggregatesFilter<"Tag"> | string
    colore?: StringWithAggregatesFilter<"Tag"> | string
    isAllergene?: BoolWithAggregatesFilter<"Tag"> | boolean
  }

  export type PrenotazioneWhereInput = {
    AND?: PrenotazioneWhereInput | PrenotazioneWhereInput[]
    OR?: PrenotazioneWhereInput[]
    NOT?: PrenotazioneWhereInput | PrenotazioneWhereInput[]
    id?: StringFilter<"Prenotazione"> | string
    ristoranteId?: StringFilter<"Prenotazione"> | string
    nomeCliente?: StringFilter<"Prenotazione"> | string
    cognomeCliente?: StringNullableFilter<"Prenotazione"> | string | null
    emailCliente?: StringFilter<"Prenotazione"> | string
    telefonoCliente?: StringNullableFilter<"Prenotazione"> | string | null
    numeroPersone?: IntFilter<"Prenotazione"> | number
    numeroBambini?: IntNullableFilter<"Prenotazione"> | number | null
    data?: DateTimeFilter<"Prenotazione"> | Date | string
    ora?: DateTimeFilter<"Prenotazione"> | Date | string
    noteSpeciali?: StringNullableFilter<"Prenotazione"> | string | null
    noteCliente?: StringNullableFilter<"Prenotazione"> | string | null
    numeroTavolo?: IntNullableFilter<"Prenotazione"> | number | null
    statoPrenotazione?: EnumPrenotazioneStatoFilter<"Prenotazione"> | $Enums.PrenotazioneStato
    orarioArrivo?: DateTimeNullableFilter<"Prenotazione"> | Date | string | null
    canalePrenotazione?: EnumPrenotazioneCanaleFilter<"Prenotazione"> | $Enums.PrenotazioneCanale
    fontePrenotazione?: StringNullableFilter<"Prenotazione"> | string | null
    allergie?: StringNullableFilter<"Prenotazione"> | string | null
  }

  export type PrenotazioneOrderByWithRelationInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nomeCliente?: SortOrder
    cognomeCliente?: SortOrderInput | SortOrder
    emailCliente?: SortOrder
    telefonoCliente?: SortOrderInput | SortOrder
    numeroPersone?: SortOrder
    numeroBambini?: SortOrderInput | SortOrder
    data?: SortOrder
    ora?: SortOrder
    noteSpeciali?: SortOrderInput | SortOrder
    noteCliente?: SortOrderInput | SortOrder
    numeroTavolo?: SortOrderInput | SortOrder
    statoPrenotazione?: SortOrder
    orarioArrivo?: SortOrderInput | SortOrder
    canalePrenotazione?: SortOrder
    fontePrenotazione?: SortOrderInput | SortOrder
    allergie?: SortOrderInput | SortOrder
  }

  export type PrenotazioneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrenotazioneWhereInput | PrenotazioneWhereInput[]
    OR?: PrenotazioneWhereInput[]
    NOT?: PrenotazioneWhereInput | PrenotazioneWhereInput[]
    ristoranteId?: StringFilter<"Prenotazione"> | string
    nomeCliente?: StringFilter<"Prenotazione"> | string
    cognomeCliente?: StringNullableFilter<"Prenotazione"> | string | null
    emailCliente?: StringFilter<"Prenotazione"> | string
    telefonoCliente?: StringNullableFilter<"Prenotazione"> | string | null
    numeroPersone?: IntFilter<"Prenotazione"> | number
    numeroBambini?: IntNullableFilter<"Prenotazione"> | number | null
    data?: DateTimeFilter<"Prenotazione"> | Date | string
    ora?: DateTimeFilter<"Prenotazione"> | Date | string
    noteSpeciali?: StringNullableFilter<"Prenotazione"> | string | null
    noteCliente?: StringNullableFilter<"Prenotazione"> | string | null
    numeroTavolo?: IntNullableFilter<"Prenotazione"> | number | null
    statoPrenotazione?: EnumPrenotazioneStatoFilter<"Prenotazione"> | $Enums.PrenotazioneStato
    orarioArrivo?: DateTimeNullableFilter<"Prenotazione"> | Date | string | null
    canalePrenotazione?: EnumPrenotazioneCanaleFilter<"Prenotazione"> | $Enums.PrenotazioneCanale
    fontePrenotazione?: StringNullableFilter<"Prenotazione"> | string | null
    allergie?: StringNullableFilter<"Prenotazione"> | string | null
  }, "id">

  export type PrenotazioneOrderByWithAggregationInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nomeCliente?: SortOrder
    cognomeCliente?: SortOrderInput | SortOrder
    emailCliente?: SortOrder
    telefonoCliente?: SortOrderInput | SortOrder
    numeroPersone?: SortOrder
    numeroBambini?: SortOrderInput | SortOrder
    data?: SortOrder
    ora?: SortOrder
    noteSpeciali?: SortOrderInput | SortOrder
    noteCliente?: SortOrderInput | SortOrder
    numeroTavolo?: SortOrderInput | SortOrder
    statoPrenotazione?: SortOrder
    orarioArrivo?: SortOrderInput | SortOrder
    canalePrenotazione?: SortOrder
    fontePrenotazione?: SortOrderInput | SortOrder
    allergie?: SortOrderInput | SortOrder
    _count?: PrenotazioneCountOrderByAggregateInput
    _avg?: PrenotazioneAvgOrderByAggregateInput
    _max?: PrenotazioneMaxOrderByAggregateInput
    _min?: PrenotazioneMinOrderByAggregateInput
    _sum?: PrenotazioneSumOrderByAggregateInput
  }

  export type PrenotazioneScalarWhereWithAggregatesInput = {
    AND?: PrenotazioneScalarWhereWithAggregatesInput | PrenotazioneScalarWhereWithAggregatesInput[]
    OR?: PrenotazioneScalarWhereWithAggregatesInput[]
    NOT?: PrenotazioneScalarWhereWithAggregatesInput | PrenotazioneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prenotazione"> | string
    ristoranteId?: StringWithAggregatesFilter<"Prenotazione"> | string
    nomeCliente?: StringWithAggregatesFilter<"Prenotazione"> | string
    cognomeCliente?: StringNullableWithAggregatesFilter<"Prenotazione"> | string | null
    emailCliente?: StringWithAggregatesFilter<"Prenotazione"> | string
    telefonoCliente?: StringNullableWithAggregatesFilter<"Prenotazione"> | string | null
    numeroPersone?: IntWithAggregatesFilter<"Prenotazione"> | number
    numeroBambini?: IntNullableWithAggregatesFilter<"Prenotazione"> | number | null
    data?: DateTimeWithAggregatesFilter<"Prenotazione"> | Date | string
    ora?: DateTimeWithAggregatesFilter<"Prenotazione"> | Date | string
    noteSpeciali?: StringNullableWithAggregatesFilter<"Prenotazione"> | string | null
    noteCliente?: StringNullableWithAggregatesFilter<"Prenotazione"> | string | null
    numeroTavolo?: IntNullableWithAggregatesFilter<"Prenotazione"> | number | null
    statoPrenotazione?: EnumPrenotazioneStatoWithAggregatesFilter<"Prenotazione"> | $Enums.PrenotazioneStato
    orarioArrivo?: DateTimeNullableWithAggregatesFilter<"Prenotazione"> | Date | string | null
    canalePrenotazione?: EnumPrenotazioneCanaleWithAggregatesFilter<"Prenotazione"> | $Enums.PrenotazioneCanale
    fontePrenotazione?: StringNullableWithAggregatesFilter<"Prenotazione"> | string | null
    allergie?: StringNullableWithAggregatesFilter<"Prenotazione"> | string | null
  }

  export type PiantinaWhereInput = {
    AND?: PiantinaWhereInput | PiantinaWhereInput[]
    OR?: PiantinaWhereInput[]
    NOT?: PiantinaWhereInput | PiantinaWhereInput[]
    id?: StringFilter<"Piantina"> | string
    ristoranteId?: StringFilter<"Piantina"> | string
    nome?: StringFilter<"Piantina"> | string
    ordineVisualizzazione?: IntFilter<"Piantina"> | number
    tavoli?: TavoloListRelationFilter
  }

  export type PiantinaOrderByWithRelationInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nome?: SortOrder
    ordineVisualizzazione?: SortOrder
    tavoli?: TavoloOrderByRelationAggregateInput
  }

  export type PiantinaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PiantinaWhereInput | PiantinaWhereInput[]
    OR?: PiantinaWhereInput[]
    NOT?: PiantinaWhereInput | PiantinaWhereInput[]
    ristoranteId?: StringFilter<"Piantina"> | string
    nome?: StringFilter<"Piantina"> | string
    ordineVisualizzazione?: IntFilter<"Piantina"> | number
    tavoli?: TavoloListRelationFilter
  }, "id">

  export type PiantinaOrderByWithAggregationInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nome?: SortOrder
    ordineVisualizzazione?: SortOrder
    _count?: PiantinaCountOrderByAggregateInput
    _avg?: PiantinaAvgOrderByAggregateInput
    _max?: PiantinaMaxOrderByAggregateInput
    _min?: PiantinaMinOrderByAggregateInput
    _sum?: PiantinaSumOrderByAggregateInput
  }

  export type PiantinaScalarWhereWithAggregatesInput = {
    AND?: PiantinaScalarWhereWithAggregatesInput | PiantinaScalarWhereWithAggregatesInput[]
    OR?: PiantinaScalarWhereWithAggregatesInput[]
    NOT?: PiantinaScalarWhereWithAggregatesInput | PiantinaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Piantina"> | string
    ristoranteId?: StringWithAggregatesFilter<"Piantina"> | string
    nome?: StringWithAggregatesFilter<"Piantina"> | string
    ordineVisualizzazione?: IntWithAggregatesFilter<"Piantina"> | number
  }

  export type TavoloWhereInput = {
    AND?: TavoloWhereInput | TavoloWhereInput[]
    OR?: TavoloWhereInput[]
    NOT?: TavoloWhereInput | TavoloWhereInput[]
    id?: StringFilter<"Tavolo"> | string
    piantinaId?: StringFilter<"Tavolo"> | string
    nome?: StringNullableFilter<"Tavolo"> | string | null
    postiASedere?: IntFilter<"Tavolo"> | number
    posizioneX?: FloatFilter<"Tavolo"> | number
    posizioneY?: FloatFilter<"Tavolo"> | number
    forma?: StringNullableFilter<"Tavolo"> | string | null
    larghezza?: FloatFilter<"Tavolo"> | number
    altezza?: FloatFilter<"Tavolo"> | number
    rotazione?: FloatNullableFilter<"Tavolo"> | number | null
    piantina?: XOR<PiantinaScalarRelationFilter, PiantinaWhereInput>
  }

  export type TavoloOrderByWithRelationInput = {
    id?: SortOrder
    piantinaId?: SortOrder
    nome?: SortOrderInput | SortOrder
    postiASedere?: SortOrder
    posizioneX?: SortOrder
    posizioneY?: SortOrder
    forma?: SortOrderInput | SortOrder
    larghezza?: SortOrder
    altezza?: SortOrder
    rotazione?: SortOrderInput | SortOrder
    piantina?: PiantinaOrderByWithRelationInput
  }

  export type TavoloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TavoloWhereInput | TavoloWhereInput[]
    OR?: TavoloWhereInput[]
    NOT?: TavoloWhereInput | TavoloWhereInput[]
    piantinaId?: StringFilter<"Tavolo"> | string
    nome?: StringNullableFilter<"Tavolo"> | string | null
    postiASedere?: IntFilter<"Tavolo"> | number
    posizioneX?: FloatFilter<"Tavolo"> | number
    posizioneY?: FloatFilter<"Tavolo"> | number
    forma?: StringNullableFilter<"Tavolo"> | string | null
    larghezza?: FloatFilter<"Tavolo"> | number
    altezza?: FloatFilter<"Tavolo"> | number
    rotazione?: FloatNullableFilter<"Tavolo"> | number | null
    piantina?: XOR<PiantinaScalarRelationFilter, PiantinaWhereInput>
  }, "id">

  export type TavoloOrderByWithAggregationInput = {
    id?: SortOrder
    piantinaId?: SortOrder
    nome?: SortOrderInput | SortOrder
    postiASedere?: SortOrder
    posizioneX?: SortOrder
    posizioneY?: SortOrder
    forma?: SortOrderInput | SortOrder
    larghezza?: SortOrder
    altezza?: SortOrder
    rotazione?: SortOrderInput | SortOrder
    _count?: TavoloCountOrderByAggregateInput
    _avg?: TavoloAvgOrderByAggregateInput
    _max?: TavoloMaxOrderByAggregateInput
    _min?: TavoloMinOrderByAggregateInput
    _sum?: TavoloSumOrderByAggregateInput
  }

  export type TavoloScalarWhereWithAggregatesInput = {
    AND?: TavoloScalarWhereWithAggregatesInput | TavoloScalarWhereWithAggregatesInput[]
    OR?: TavoloScalarWhereWithAggregatesInput[]
    NOT?: TavoloScalarWhereWithAggregatesInput | TavoloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tavolo"> | string
    piantinaId?: StringWithAggregatesFilter<"Tavolo"> | string
    nome?: StringNullableWithAggregatesFilter<"Tavolo"> | string | null
    postiASedere?: IntWithAggregatesFilter<"Tavolo"> | number
    posizioneX?: FloatWithAggregatesFilter<"Tavolo"> | number
    posizioneY?: FloatWithAggregatesFilter<"Tavolo"> | number
    forma?: StringNullableWithAggregatesFilter<"Tavolo"> | string | null
    larghezza?: FloatWithAggregatesFilter<"Tavolo"> | number
    altezza?: FloatWithAggregatesFilter<"Tavolo"> | number
    rotazione?: FloatNullableWithAggregatesFilter<"Tavolo"> | number | null
  }

  export type usersCreateInput = {
    email: string
    name?: string | null
    username: string
    password: string
    bearerToken?: string | null
    ipAddress?: string | null
    mongoAdress?: string | null
    ristorante?: RistoranteCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    username: string
    password: string
    bearerToken?: string | null
    ipAddress?: string | null
    mongoAdress?: string | null
    ristorante?: RistoranteUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bearerToken?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mongoAdress?: NullableStringFieldUpdateOperationsInput | string | null
    ristorante?: RistoranteUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bearerToken?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mongoAdress?: NullableStringFieldUpdateOperationsInput | string | null
    ristorante?: RistoranteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    username: string
    password: string
    bearerToken?: string | null
    ipAddress?: string | null
    mongoAdress?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bearerToken?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mongoAdress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bearerToken?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mongoAdress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RistoranteCreateInput = {
    id?: string
    name?: string | null
    via?: string | null
    civico?: string | null
    citta?: string | null
    vat?: string | null
    user?: usersCreateNestedManyWithoutRistoranteInput
  }

  export type RistoranteUncheckedCreateInput = {
    id?: string
    name?: string | null
    via?: string | null
    civico?: string | null
    citta?: string | null
    vat?: string | null
    user?: usersUncheckedCreateNestedManyWithoutRistoranteInput
  }

  export type RistoranteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    civico?: NullableStringFieldUpdateOperationsInput | string | null
    citta?: NullableStringFieldUpdateOperationsInput | string | null
    vat?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateManyWithoutRistoranteNestedInput
  }

  export type RistoranteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    civico?: NullableStringFieldUpdateOperationsInput | string | null
    citta?: NullableStringFieldUpdateOperationsInput | string | null
    vat?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUncheckedUpdateManyWithoutRistoranteNestedInput
  }

  export type RistoranteCreateManyInput = {
    id?: string
    name?: string | null
    via?: string | null
    civico?: string | null
    citta?: string | null
    vat?: string | null
  }

  export type RistoranteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    civico?: NullableStringFieldUpdateOperationsInput | string | null
    citta?: NullableStringFieldUpdateOperationsInput | string | null
    vat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RistoranteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    civico?: NullableStringFieldUpdateOperationsInput | string | null
    citta?: NullableStringFieldUpdateOperationsInput | string | null
    vat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AreaCompetenzaCreateInput = {
    id: number
    descrizione: string
    dataCreaz: Date | string
    dataAgg: Date | string
    isAttiva: boolean
    note?: string
    ordine?: number
    descrizioneInglese?: string | null
    noteInglese?: string | null
    isMenuFisso: boolean
    orari?: OrarioAreaCreateNestedManyWithoutAreaInput
    categorie?: CategoriaCreateNestedManyWithoutAreeCompetenzaInput
  }

  export type AreaCompetenzaUncheckedCreateInput = {
    id: number
    descrizione: string
    dataCreaz: Date | string
    dataAgg: Date | string
    isAttiva: boolean
    note?: string
    ordine?: number
    descrizioneInglese?: string | null
    noteInglese?: string | null
    isMenuFisso: boolean
    orari?: OrarioAreaUncheckedCreateNestedManyWithoutAreaInput
    categorie?: CategoriaUncheckedCreateNestedManyWithoutAreeCompetenzaInput
  }

  export type AreaCompetenzaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
    orari?: OrarioAreaUpdateManyWithoutAreaNestedInput
    categorie?: CategoriaUpdateManyWithoutAreeCompetenzaNestedInput
  }

  export type AreaCompetenzaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
    orari?: OrarioAreaUncheckedUpdateManyWithoutAreaNestedInput
    categorie?: CategoriaUncheckedUpdateManyWithoutAreeCompetenzaNestedInput
  }

  export type AreaCompetenzaCreateManyInput = {
    id: number
    descrizione: string
    dataCreaz: Date | string
    dataAgg: Date | string
    isAttiva: boolean
    note?: string
    ordine?: number
    descrizioneInglese?: string | null
    noteInglese?: string | null
    isMenuFisso: boolean
  }

  export type AreaCompetenzaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AreaCompetenzaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrarioAreaCreateInput = {
    giorno: string
    start: Date | string
    end: Date | string
    area: AreaCompetenzaCreateNestedOneWithoutOrariInput
  }

  export type OrarioAreaUncheckedCreateInput = {
    id?: number
    areaId: number
    giorno: string
    start: Date | string
    end: Date | string
  }

  export type OrarioAreaUpdateInput = {
    giorno?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaCompetenzaUpdateOneRequiredWithoutOrariNestedInput
  }

  export type OrarioAreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    giorno?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrarioAreaCreateManyInput = {
    id?: number
    areaId: number
    giorno: string
    start: Date | string
    end: Date | string
  }

  export type OrarioAreaUpdateManyMutationInput = {
    giorno?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrarioAreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    giorno?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    id: number
    descrizioneLingua1: string
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    descrizioneLingua2?: string | null
    pietanze?: PietanzaCreateNestedManyWithoutCategoriaInput
    areeCompetenza?: AreaCompetenzaCreateNestedManyWithoutCategorieInput
  }

  export type CategoriaUncheckedCreateInput = {
    id: number
    descrizioneLingua1: string
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    descrizioneLingua2?: string | null
    pietanze?: PietanzaUncheckedCreateNestedManyWithoutCategoriaInput
    areeCompetenza?: AreaCompetenzaUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategoriaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    pietanze?: PietanzaUpdateManyWithoutCategoriaNestedInput
    areeCompetenza?: AreaCompetenzaUpdateManyWithoutCategorieNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    pietanze?: PietanzaUncheckedUpdateManyWithoutCategoriaNestedInput
    areeCompetenza?: AreaCompetenzaUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategoriaCreateManyInput = {
    id: number
    descrizioneLingua1: string
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    descrizioneLingua2?: string | null
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PietanzaCreateInput = {
    id: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlataBy?: CrossSellingCreateNestedManyWithoutCorrelataByInput
    correlata?: CrossSellingCreateNestedManyWithoutCorrelataInput
    categoria: CategoriaCreateNestedOneWithoutPietanzeInput
    tag?: TagCreateNestedManyWithoutPietanzeInput
  }

  export type PietanzaUncheckedCreateInput = {
    id: number
    idCategoriaPietanza: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlataBy?: CrossSellingUncheckedCreateNestedManyWithoutCorrelataByInput
    correlata?: CrossSellingUncheckedCreateNestedManyWithoutCorrelataInput
    tag?: TagUncheckedCreateNestedManyWithoutPietanzeInput
  }

  export type PietanzaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlataBy?: CrossSellingUpdateManyWithoutCorrelataByNestedInput
    correlata?: CrossSellingUpdateManyWithoutCorrelataNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPietanzeNestedInput
    tag?: TagUpdateManyWithoutPietanzeNestedInput
  }

  export type PietanzaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoriaPietanza?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlataBy?: CrossSellingUncheckedUpdateManyWithoutCorrelataByNestedInput
    correlata?: CrossSellingUncheckedUpdateManyWithoutCorrelataNestedInput
    tag?: TagUncheckedUpdateManyWithoutPietanzeNestedInput
  }

  export type PietanzaCreateManyInput = {
    id: number
    idCategoriaPietanza: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
  }

  export type PietanzaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PietanzaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoriaPietanza?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CrossSellingCreateInput = {
    correlataBy: PietanzaCreateNestedOneWithoutCorrelataByInput
    correlata: PietanzaCreateNestedOneWithoutCorrelataInput
  }

  export type CrossSellingUncheckedCreateInput = {
    correlataId: number
    correlataById: number
  }

  export type CrossSellingUpdateInput = {
    correlataBy?: PietanzaUpdateOneRequiredWithoutCorrelataByNestedInput
    correlata?: PietanzaUpdateOneRequiredWithoutCorrelataNestedInput
  }

  export type CrossSellingUncheckedUpdateInput = {
    correlataId?: IntFieldUpdateOperationsInput | number
    correlataById?: IntFieldUpdateOperationsInput | number
  }

  export type CrossSellingCreateManyInput = {
    correlataId: number
    correlataById: number
  }

  export type CrossSellingUpdateManyMutationInput = {

  }

  export type CrossSellingUncheckedUpdateManyInput = {
    correlataId?: IntFieldUpdateOperationsInput | number
    correlataById?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateInput = {
    id: number
    descrizione: string
    colore: string
    isAllergene?: boolean
    pietanze?: PietanzaCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id: number
    descrizione: string
    colore: string
    isAllergene?: boolean
    pietanze?: PietanzaUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    colore?: StringFieldUpdateOperationsInput | string
    isAllergene?: BoolFieldUpdateOperationsInput | boolean
    pietanze?: PietanzaUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    colore?: StringFieldUpdateOperationsInput | string
    isAllergene?: BoolFieldUpdateOperationsInput | boolean
    pietanze?: PietanzaUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id: number
    descrizione: string
    colore: string
    isAllergene?: boolean
  }

  export type TagUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    colore?: StringFieldUpdateOperationsInput | string
    isAllergene?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    colore?: StringFieldUpdateOperationsInput | string
    isAllergene?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrenotazioneCreateInput = {
    id?: string
    ristoranteId: string
    nomeCliente: string
    cognomeCliente?: string | null
    emailCliente: string
    telefonoCliente?: string | null
    numeroPersone: number
    numeroBambini?: number | null
    data: Date | string
    ora: Date | string
    noteSpeciali?: string | null
    noteCliente?: string | null
    numeroTavolo?: number | null
    statoPrenotazione?: $Enums.PrenotazioneStato
    orarioArrivo?: Date | string | null
    canalePrenotazione?: $Enums.PrenotazioneCanale
    fontePrenotazione?: string | null
    allergie?: string | null
  }

  export type PrenotazioneUncheckedCreateInput = {
    id?: string
    ristoranteId: string
    nomeCliente: string
    cognomeCliente?: string | null
    emailCliente: string
    telefonoCliente?: string | null
    numeroPersone: number
    numeroBambini?: number | null
    data: Date | string
    ora: Date | string
    noteSpeciali?: string | null
    noteCliente?: string | null
    numeroTavolo?: number | null
    statoPrenotazione?: $Enums.PrenotazioneStato
    orarioArrivo?: Date | string | null
    canalePrenotazione?: $Enums.PrenotazioneCanale
    fontePrenotazione?: string | null
    allergie?: string | null
  }

  export type PrenotazioneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nomeCliente?: StringFieldUpdateOperationsInput | string
    cognomeCliente?: NullableStringFieldUpdateOperationsInput | string | null
    emailCliente?: StringFieldUpdateOperationsInput | string
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPersone?: IntFieldUpdateOperationsInput | number
    numeroBambini?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    noteSpeciali?: NullableStringFieldUpdateOperationsInput | string | null
    noteCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroTavolo?: NullableIntFieldUpdateOperationsInput | number | null
    statoPrenotazione?: EnumPrenotazioneStatoFieldUpdateOperationsInput | $Enums.PrenotazioneStato
    orarioArrivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canalePrenotazione?: EnumPrenotazioneCanaleFieldUpdateOperationsInput | $Enums.PrenotazioneCanale
    fontePrenotazione?: NullableStringFieldUpdateOperationsInput | string | null
    allergie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrenotazioneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nomeCliente?: StringFieldUpdateOperationsInput | string
    cognomeCliente?: NullableStringFieldUpdateOperationsInput | string | null
    emailCliente?: StringFieldUpdateOperationsInput | string
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPersone?: IntFieldUpdateOperationsInput | number
    numeroBambini?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    noteSpeciali?: NullableStringFieldUpdateOperationsInput | string | null
    noteCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroTavolo?: NullableIntFieldUpdateOperationsInput | number | null
    statoPrenotazione?: EnumPrenotazioneStatoFieldUpdateOperationsInput | $Enums.PrenotazioneStato
    orarioArrivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canalePrenotazione?: EnumPrenotazioneCanaleFieldUpdateOperationsInput | $Enums.PrenotazioneCanale
    fontePrenotazione?: NullableStringFieldUpdateOperationsInput | string | null
    allergie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrenotazioneCreateManyInput = {
    id?: string
    ristoranteId: string
    nomeCliente: string
    cognomeCliente?: string | null
    emailCliente: string
    telefonoCliente?: string | null
    numeroPersone: number
    numeroBambini?: number | null
    data: Date | string
    ora: Date | string
    noteSpeciali?: string | null
    noteCliente?: string | null
    numeroTavolo?: number | null
    statoPrenotazione?: $Enums.PrenotazioneStato
    orarioArrivo?: Date | string | null
    canalePrenotazione?: $Enums.PrenotazioneCanale
    fontePrenotazione?: string | null
    allergie?: string | null
  }

  export type PrenotazioneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nomeCliente?: StringFieldUpdateOperationsInput | string
    cognomeCliente?: NullableStringFieldUpdateOperationsInput | string | null
    emailCliente?: StringFieldUpdateOperationsInput | string
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPersone?: IntFieldUpdateOperationsInput | number
    numeroBambini?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    noteSpeciali?: NullableStringFieldUpdateOperationsInput | string | null
    noteCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroTavolo?: NullableIntFieldUpdateOperationsInput | number | null
    statoPrenotazione?: EnumPrenotazioneStatoFieldUpdateOperationsInput | $Enums.PrenotazioneStato
    orarioArrivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canalePrenotazione?: EnumPrenotazioneCanaleFieldUpdateOperationsInput | $Enums.PrenotazioneCanale
    fontePrenotazione?: NullableStringFieldUpdateOperationsInput | string | null
    allergie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrenotazioneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nomeCliente?: StringFieldUpdateOperationsInput | string
    cognomeCliente?: NullableStringFieldUpdateOperationsInput | string | null
    emailCliente?: StringFieldUpdateOperationsInput | string
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPersone?: IntFieldUpdateOperationsInput | number
    numeroBambini?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    noteSpeciali?: NullableStringFieldUpdateOperationsInput | string | null
    noteCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroTavolo?: NullableIntFieldUpdateOperationsInput | number | null
    statoPrenotazione?: EnumPrenotazioneStatoFieldUpdateOperationsInput | $Enums.PrenotazioneStato
    orarioArrivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canalePrenotazione?: EnumPrenotazioneCanaleFieldUpdateOperationsInput | $Enums.PrenotazioneCanale
    fontePrenotazione?: NullableStringFieldUpdateOperationsInput | string | null
    allergie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PiantinaCreateInput = {
    id?: string
    ristoranteId: string
    nome: string
    ordineVisualizzazione: number
    tavoli?: TavoloCreateNestedManyWithoutPiantinaInput
  }

  export type PiantinaUncheckedCreateInput = {
    id?: string
    ristoranteId: string
    nome: string
    ordineVisualizzazione: number
    tavoli?: TavoloUncheckedCreateNestedManyWithoutPiantinaInput
  }

  export type PiantinaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ordineVisualizzazione?: IntFieldUpdateOperationsInput | number
    tavoli?: TavoloUpdateManyWithoutPiantinaNestedInput
  }

  export type PiantinaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ordineVisualizzazione?: IntFieldUpdateOperationsInput | number
    tavoli?: TavoloUncheckedUpdateManyWithoutPiantinaNestedInput
  }

  export type PiantinaCreateManyInput = {
    id?: string
    ristoranteId: string
    nome: string
    ordineVisualizzazione: number
  }

  export type PiantinaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ordineVisualizzazione?: IntFieldUpdateOperationsInput | number
  }

  export type PiantinaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ordineVisualizzazione?: IntFieldUpdateOperationsInput | number
  }

  export type TavoloCreateInput = {
    id?: string
    nome?: string | null
    postiASedere: number
    posizioneX: number
    posizioneY: number
    forma?: string | null
    larghezza: number
    altezza: number
    rotazione?: number | null
    piantina: PiantinaCreateNestedOneWithoutTavoliInput
  }

  export type TavoloUncheckedCreateInput = {
    id?: string
    piantinaId: string
    nome?: string | null
    postiASedere: number
    posizioneX: number
    posizioneY: number
    forma?: string | null
    larghezza: number
    altezza: number
    rotazione?: number | null
  }

  export type TavoloUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    postiASedere?: IntFieldUpdateOperationsInput | number
    posizioneX?: FloatFieldUpdateOperationsInput | number
    posizioneY?: FloatFieldUpdateOperationsInput | number
    forma?: NullableStringFieldUpdateOperationsInput | string | null
    larghezza?: FloatFieldUpdateOperationsInput | number
    altezza?: FloatFieldUpdateOperationsInput | number
    rotazione?: NullableFloatFieldUpdateOperationsInput | number | null
    piantina?: PiantinaUpdateOneRequiredWithoutTavoliNestedInput
  }

  export type TavoloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    piantinaId?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    postiASedere?: IntFieldUpdateOperationsInput | number
    posizioneX?: FloatFieldUpdateOperationsInput | number
    posizioneY?: FloatFieldUpdateOperationsInput | number
    forma?: NullableStringFieldUpdateOperationsInput | string | null
    larghezza?: FloatFieldUpdateOperationsInput | number
    altezza?: FloatFieldUpdateOperationsInput | number
    rotazione?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TavoloCreateManyInput = {
    id?: string
    piantinaId: string
    nome?: string | null
    postiASedere: number
    posizioneX: number
    posizioneY: number
    forma?: string | null
    larghezza: number
    altezza: number
    rotazione?: number | null
  }

  export type TavoloUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    postiASedere?: IntFieldUpdateOperationsInput | number
    posizioneX?: FloatFieldUpdateOperationsInput | number
    posizioneY?: FloatFieldUpdateOperationsInput | number
    forma?: NullableStringFieldUpdateOperationsInput | string | null
    larghezza?: FloatFieldUpdateOperationsInput | number
    altezza?: FloatFieldUpdateOperationsInput | number
    rotazione?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TavoloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    piantinaId?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    postiASedere?: IntFieldUpdateOperationsInput | number
    posizioneX?: FloatFieldUpdateOperationsInput | number
    posizioneY?: FloatFieldUpdateOperationsInput | number
    forma?: NullableStringFieldUpdateOperationsInput | string | null
    larghezza?: FloatFieldUpdateOperationsInput | number
    altezza?: FloatFieldUpdateOperationsInput | number
    rotazione?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RistoranteListRelationFilter = {
    every?: RistoranteWhereInput
    some?: RistoranteWhereInput
    none?: RistoranteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RistoranteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bearerToken?: SortOrder
    ipAddress?: SortOrder
    mongoAdress?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bearerToken?: SortOrder
    ipAddress?: SortOrder
    mongoAdress?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bearerToken?: SortOrder
    ipAddress?: SortOrder
    mongoAdress?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RistoranteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    via?: SortOrder
    civico?: SortOrder
    citta?: SortOrder
    vat?: SortOrder
  }

  export type RistoranteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    via?: SortOrder
    civico?: SortOrder
    citta?: SortOrder
    vat?: SortOrder
  }

  export type RistoranteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    via?: SortOrder
    civico?: SortOrder
    citta?: SortOrder
    vat?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrarioAreaListRelationFilter = {
    every?: OrarioAreaWhereInput
    some?: OrarioAreaWhereInput
    none?: OrarioAreaWhereInput
  }

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type OrarioAreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCompetenzaCountOrderByAggregateInput = {
    id?: SortOrder
    descrizione?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    isAttiva?: SortOrder
    note?: SortOrder
    ordine?: SortOrder
    descrizioneInglese?: SortOrder
    noteInglese?: SortOrder
    isMenuFisso?: SortOrder
  }

  export type AreaCompetenzaAvgOrderByAggregateInput = {
    id?: SortOrder
    ordine?: SortOrder
  }

  export type AreaCompetenzaMaxOrderByAggregateInput = {
    id?: SortOrder
    descrizione?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    isAttiva?: SortOrder
    note?: SortOrder
    ordine?: SortOrder
    descrizioneInglese?: SortOrder
    noteInglese?: SortOrder
    isMenuFisso?: SortOrder
  }

  export type AreaCompetenzaMinOrderByAggregateInput = {
    id?: SortOrder
    descrizione?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    isAttiva?: SortOrder
    note?: SortOrder
    ordine?: SortOrder
    descrizioneInglese?: SortOrder
    noteInglese?: SortOrder
    isMenuFisso?: SortOrder
  }

  export type AreaCompetenzaSumOrderByAggregateInput = {
    id?: SortOrder
    ordine?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AreaCompetenzaScalarRelationFilter = {
    is?: AreaCompetenzaWhereInput
    isNot?: AreaCompetenzaWhereInput
  }

  export type OrarioAreaCountOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    giorno?: SortOrder
    start?: SortOrder
    end?: SortOrder
  }

  export type OrarioAreaAvgOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
  }

  export type OrarioAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    giorno?: SortOrder
    start?: SortOrder
    end?: SortOrder
  }

  export type OrarioAreaMinOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    giorno?: SortOrder
    start?: SortOrder
    end?: SortOrder
  }

  export type OrarioAreaSumOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
  }

  export type PietanzaListRelationFilter = {
    every?: PietanzaWhereInput
    some?: PietanzaWhereInput
    none?: PietanzaWhereInput
  }

  export type AreaCompetenzaListRelationFilter = {
    every?: AreaCompetenzaWhereInput
    some?: AreaCompetenzaWhereInput
    none?: AreaCompetenzaWhereInput
  }

  export type PietanzaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCompetenzaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    descrizioneLingua1?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    descrizioneLingua2?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    ordineTastoPc?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    descrizioneLingua1?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    descrizioneLingua2?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    descrizioneLingua1?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    descrizioneLingua2?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
    ordineTastoPc?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CrossSellingListRelationFilter = {
    every?: CrossSellingWhereInput
    some?: CrossSellingWhereInput
    none?: CrossSellingWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type CrossSellingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PietanzaCountOrderByAggregateInput = {
    id?: SortOrder
    idCategoriaPietanza?: SortOrder
    descrizioneLingua1?: SortOrder
    prezzo?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    note?: SortOrder
    image?: SortOrder
    descrizioneLingua2?: SortOrder
    noteLingua2?: SortOrder
  }

  export type PietanzaAvgOrderByAggregateInput = {
    id?: SortOrder
    idCategoriaPietanza?: SortOrder
    prezzo?: SortOrder
    ordineTastoPc?: SortOrder
  }

  export type PietanzaMaxOrderByAggregateInput = {
    id?: SortOrder
    idCategoriaPietanza?: SortOrder
    descrizioneLingua1?: SortOrder
    prezzo?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    note?: SortOrder
    image?: SortOrder
    descrizioneLingua2?: SortOrder
    noteLingua2?: SortOrder
  }

  export type PietanzaMinOrderByAggregateInput = {
    id?: SortOrder
    idCategoriaPietanza?: SortOrder
    descrizioneLingua1?: SortOrder
    prezzo?: SortOrder
    isAttiva?: SortOrder
    isVisibileSuSelfOrder?: SortOrder
    ordineTastoPc?: SortOrder
    dataCreaz?: SortOrder
    dataAgg?: SortOrder
    note?: SortOrder
    image?: SortOrder
    descrizioneLingua2?: SortOrder
    noteLingua2?: SortOrder
  }

  export type PietanzaSumOrderByAggregateInput = {
    id?: SortOrder
    idCategoriaPietanza?: SortOrder
    prezzo?: SortOrder
    ordineTastoPc?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PietanzaScalarRelationFilter = {
    is?: PietanzaWhereInput
    isNot?: PietanzaWhereInput
  }

  export type CrossSellingCorrelataByIdCorrelataIdCompoundUniqueInput = {
    correlataById: number
    correlataId: number
  }

  export type CrossSellingCountOrderByAggregateInput = {
    correlataId?: SortOrder
    correlataById?: SortOrder
  }

  export type CrossSellingAvgOrderByAggregateInput = {
    correlataId?: SortOrder
    correlataById?: SortOrder
  }

  export type CrossSellingMaxOrderByAggregateInput = {
    correlataId?: SortOrder
    correlataById?: SortOrder
  }

  export type CrossSellingMinOrderByAggregateInput = {
    correlataId?: SortOrder
    correlataById?: SortOrder
  }

  export type CrossSellingSumOrderByAggregateInput = {
    correlataId?: SortOrder
    correlataById?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    descrizione?: SortOrder
    colore?: SortOrder
    isAllergene?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    descrizione?: SortOrder
    colore?: SortOrder
    isAllergene?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    descrizione?: SortOrder
    colore?: SortOrder
    isAllergene?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPrenotazioneStatoFilter<$PrismaModel = never> = {
    equals?: $Enums.PrenotazioneStato | EnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    in?: $Enums.PrenotazioneStato[] | ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrenotazioneStato[] | ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    not?: NestedEnumPrenotazioneStatoFilter<$PrismaModel> | $Enums.PrenotazioneStato
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPrenotazioneCanaleFilter<$PrismaModel = never> = {
    equals?: $Enums.PrenotazioneCanale | EnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    in?: $Enums.PrenotazioneCanale[] | ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrenotazioneCanale[] | ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    not?: NestedEnumPrenotazioneCanaleFilter<$PrismaModel> | $Enums.PrenotazioneCanale
  }

  export type PrenotazioneCountOrderByAggregateInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nomeCliente?: SortOrder
    cognomeCliente?: SortOrder
    emailCliente?: SortOrder
    telefonoCliente?: SortOrder
    numeroPersone?: SortOrder
    numeroBambini?: SortOrder
    data?: SortOrder
    ora?: SortOrder
    noteSpeciali?: SortOrder
    noteCliente?: SortOrder
    numeroTavolo?: SortOrder
    statoPrenotazione?: SortOrder
    orarioArrivo?: SortOrder
    canalePrenotazione?: SortOrder
    fontePrenotazione?: SortOrder
    allergie?: SortOrder
  }

  export type PrenotazioneAvgOrderByAggregateInput = {
    numeroPersone?: SortOrder
    numeroBambini?: SortOrder
    numeroTavolo?: SortOrder
  }

  export type PrenotazioneMaxOrderByAggregateInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nomeCliente?: SortOrder
    cognomeCliente?: SortOrder
    emailCliente?: SortOrder
    telefonoCliente?: SortOrder
    numeroPersone?: SortOrder
    numeroBambini?: SortOrder
    data?: SortOrder
    ora?: SortOrder
    noteSpeciali?: SortOrder
    noteCliente?: SortOrder
    numeroTavolo?: SortOrder
    statoPrenotazione?: SortOrder
    orarioArrivo?: SortOrder
    canalePrenotazione?: SortOrder
    fontePrenotazione?: SortOrder
    allergie?: SortOrder
  }

  export type PrenotazioneMinOrderByAggregateInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nomeCliente?: SortOrder
    cognomeCliente?: SortOrder
    emailCliente?: SortOrder
    telefonoCliente?: SortOrder
    numeroPersone?: SortOrder
    numeroBambini?: SortOrder
    data?: SortOrder
    ora?: SortOrder
    noteSpeciali?: SortOrder
    noteCliente?: SortOrder
    numeroTavolo?: SortOrder
    statoPrenotazione?: SortOrder
    orarioArrivo?: SortOrder
    canalePrenotazione?: SortOrder
    fontePrenotazione?: SortOrder
    allergie?: SortOrder
  }

  export type PrenotazioneSumOrderByAggregateInput = {
    numeroPersone?: SortOrder
    numeroBambini?: SortOrder
    numeroTavolo?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPrenotazioneStatoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrenotazioneStato | EnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    in?: $Enums.PrenotazioneStato[] | ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrenotazioneStato[] | ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    not?: NestedEnumPrenotazioneStatoWithAggregatesFilter<$PrismaModel> | $Enums.PrenotazioneStato
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrenotazioneStatoFilter<$PrismaModel>
    _max?: NestedEnumPrenotazioneStatoFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPrenotazioneCanaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrenotazioneCanale | EnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    in?: $Enums.PrenotazioneCanale[] | ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrenotazioneCanale[] | ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    not?: NestedEnumPrenotazioneCanaleWithAggregatesFilter<$PrismaModel> | $Enums.PrenotazioneCanale
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrenotazioneCanaleFilter<$PrismaModel>
    _max?: NestedEnumPrenotazioneCanaleFilter<$PrismaModel>
  }

  export type TavoloListRelationFilter = {
    every?: TavoloWhereInput
    some?: TavoloWhereInput
    none?: TavoloWhereInput
  }

  export type TavoloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PiantinaCountOrderByAggregateInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nome?: SortOrder
    ordineVisualizzazione?: SortOrder
  }

  export type PiantinaAvgOrderByAggregateInput = {
    ordineVisualizzazione?: SortOrder
  }

  export type PiantinaMaxOrderByAggregateInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nome?: SortOrder
    ordineVisualizzazione?: SortOrder
  }

  export type PiantinaMinOrderByAggregateInput = {
    id?: SortOrder
    ristoranteId?: SortOrder
    nome?: SortOrder
    ordineVisualizzazione?: SortOrder
  }

  export type PiantinaSumOrderByAggregateInput = {
    ordineVisualizzazione?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PiantinaScalarRelationFilter = {
    is?: PiantinaWhereInput
    isNot?: PiantinaWhereInput
  }

  export type TavoloCountOrderByAggregateInput = {
    id?: SortOrder
    piantinaId?: SortOrder
    nome?: SortOrder
    postiASedere?: SortOrder
    posizioneX?: SortOrder
    posizioneY?: SortOrder
    forma?: SortOrder
    larghezza?: SortOrder
    altezza?: SortOrder
    rotazione?: SortOrder
  }

  export type TavoloAvgOrderByAggregateInput = {
    postiASedere?: SortOrder
    posizioneX?: SortOrder
    posizioneY?: SortOrder
    larghezza?: SortOrder
    altezza?: SortOrder
    rotazione?: SortOrder
  }

  export type TavoloMaxOrderByAggregateInput = {
    id?: SortOrder
    piantinaId?: SortOrder
    nome?: SortOrder
    postiASedere?: SortOrder
    posizioneX?: SortOrder
    posizioneY?: SortOrder
    forma?: SortOrder
    larghezza?: SortOrder
    altezza?: SortOrder
    rotazione?: SortOrder
  }

  export type TavoloMinOrderByAggregateInput = {
    id?: SortOrder
    piantinaId?: SortOrder
    nome?: SortOrder
    postiASedere?: SortOrder
    posizioneX?: SortOrder
    posizioneY?: SortOrder
    forma?: SortOrder
    larghezza?: SortOrder
    altezza?: SortOrder
    rotazione?: SortOrder
  }

  export type TavoloSumOrderByAggregateInput = {
    postiASedere?: SortOrder
    posizioneX?: SortOrder
    posizioneY?: SortOrder
    larghezza?: SortOrder
    altezza?: SortOrder
    rotazione?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RistoranteCreateNestedManyWithoutUserInput = {
    create?: XOR<RistoranteCreateWithoutUserInput, RistoranteUncheckedCreateWithoutUserInput> | RistoranteCreateWithoutUserInput[] | RistoranteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RistoranteCreateOrConnectWithoutUserInput | RistoranteCreateOrConnectWithoutUserInput[]
    connect?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
  }

  export type RistoranteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RistoranteCreateWithoutUserInput, RistoranteUncheckedCreateWithoutUserInput> | RistoranteCreateWithoutUserInput[] | RistoranteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RistoranteCreateOrConnectWithoutUserInput | RistoranteCreateOrConnectWithoutUserInput[]
    connect?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RistoranteUpdateManyWithoutUserNestedInput = {
    create?: XOR<RistoranteCreateWithoutUserInput, RistoranteUncheckedCreateWithoutUserInput> | RistoranteCreateWithoutUserInput[] | RistoranteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RistoranteCreateOrConnectWithoutUserInput | RistoranteCreateOrConnectWithoutUserInput[]
    upsert?: RistoranteUpsertWithWhereUniqueWithoutUserInput | RistoranteUpsertWithWhereUniqueWithoutUserInput[]
    set?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
    disconnect?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
    delete?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
    connect?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
    update?: RistoranteUpdateWithWhereUniqueWithoutUserInput | RistoranteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RistoranteUpdateManyWithWhereWithoutUserInput | RistoranteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RistoranteScalarWhereInput | RistoranteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RistoranteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RistoranteCreateWithoutUserInput, RistoranteUncheckedCreateWithoutUserInput> | RistoranteCreateWithoutUserInput[] | RistoranteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RistoranteCreateOrConnectWithoutUserInput | RistoranteCreateOrConnectWithoutUserInput[]
    upsert?: RistoranteUpsertWithWhereUniqueWithoutUserInput | RistoranteUpsertWithWhereUniqueWithoutUserInput[]
    set?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
    disconnect?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
    delete?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
    connect?: RistoranteWhereUniqueInput | RistoranteWhereUniqueInput[]
    update?: RistoranteUpdateWithWhereUniqueWithoutUserInput | RistoranteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RistoranteUpdateManyWithWhereWithoutUserInput | RistoranteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RistoranteScalarWhereInput | RistoranteScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutRistoranteInput = {
    create?: XOR<usersCreateWithoutRistoranteInput, usersUncheckedCreateWithoutRistoranteInput> | usersCreateWithoutRistoranteInput[] | usersUncheckedCreateWithoutRistoranteInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRistoranteInput | usersCreateOrConnectWithoutRistoranteInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRistoranteInput = {
    create?: XOR<usersCreateWithoutRistoranteInput, usersUncheckedCreateWithoutRistoranteInput> | usersCreateWithoutRistoranteInput[] | usersUncheckedCreateWithoutRistoranteInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRistoranteInput | usersCreateOrConnectWithoutRistoranteInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutRistoranteNestedInput = {
    create?: XOR<usersCreateWithoutRistoranteInput, usersUncheckedCreateWithoutRistoranteInput> | usersCreateWithoutRistoranteInput[] | usersUncheckedCreateWithoutRistoranteInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRistoranteInput | usersCreateOrConnectWithoutRistoranteInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRistoranteInput | usersUpsertWithWhereUniqueWithoutRistoranteInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRistoranteInput | usersUpdateWithWhereUniqueWithoutRistoranteInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRistoranteInput | usersUpdateManyWithWhereWithoutRistoranteInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRistoranteNestedInput = {
    create?: XOR<usersCreateWithoutRistoranteInput, usersUncheckedCreateWithoutRistoranteInput> | usersCreateWithoutRistoranteInput[] | usersUncheckedCreateWithoutRistoranteInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRistoranteInput | usersCreateOrConnectWithoutRistoranteInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRistoranteInput | usersUpsertWithWhereUniqueWithoutRistoranteInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRistoranteInput | usersUpdateWithWhereUniqueWithoutRistoranteInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRistoranteInput | usersUpdateManyWithWhereWithoutRistoranteInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type OrarioAreaCreateNestedManyWithoutAreaInput = {
    create?: XOR<OrarioAreaCreateWithoutAreaInput, OrarioAreaUncheckedCreateWithoutAreaInput> | OrarioAreaCreateWithoutAreaInput[] | OrarioAreaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: OrarioAreaCreateOrConnectWithoutAreaInput | OrarioAreaCreateOrConnectWithoutAreaInput[]
    createMany?: OrarioAreaCreateManyAreaInputEnvelope
    connect?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
  }

  export type CategoriaCreateNestedManyWithoutAreeCompetenzaInput = {
    create?: XOR<CategoriaCreateWithoutAreeCompetenzaInput, CategoriaUncheckedCreateWithoutAreeCompetenzaInput> | CategoriaCreateWithoutAreeCompetenzaInput[] | CategoriaUncheckedCreateWithoutAreeCompetenzaInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutAreeCompetenzaInput | CategoriaCreateOrConnectWithoutAreeCompetenzaInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type OrarioAreaUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<OrarioAreaCreateWithoutAreaInput, OrarioAreaUncheckedCreateWithoutAreaInput> | OrarioAreaCreateWithoutAreaInput[] | OrarioAreaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: OrarioAreaCreateOrConnectWithoutAreaInput | OrarioAreaCreateOrConnectWithoutAreaInput[]
    createMany?: OrarioAreaCreateManyAreaInputEnvelope
    connect?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutAreeCompetenzaInput = {
    create?: XOR<CategoriaCreateWithoutAreeCompetenzaInput, CategoriaUncheckedCreateWithoutAreeCompetenzaInput> | CategoriaCreateWithoutAreeCompetenzaInput[] | CategoriaUncheckedCreateWithoutAreeCompetenzaInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutAreeCompetenzaInput | CategoriaCreateOrConnectWithoutAreeCompetenzaInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrarioAreaUpdateManyWithoutAreaNestedInput = {
    create?: XOR<OrarioAreaCreateWithoutAreaInput, OrarioAreaUncheckedCreateWithoutAreaInput> | OrarioAreaCreateWithoutAreaInput[] | OrarioAreaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: OrarioAreaCreateOrConnectWithoutAreaInput | OrarioAreaCreateOrConnectWithoutAreaInput[]
    upsert?: OrarioAreaUpsertWithWhereUniqueWithoutAreaInput | OrarioAreaUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: OrarioAreaCreateManyAreaInputEnvelope
    set?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
    disconnect?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
    delete?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
    connect?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
    update?: OrarioAreaUpdateWithWhereUniqueWithoutAreaInput | OrarioAreaUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: OrarioAreaUpdateManyWithWhereWithoutAreaInput | OrarioAreaUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: OrarioAreaScalarWhereInput | OrarioAreaScalarWhereInput[]
  }

  export type CategoriaUpdateManyWithoutAreeCompetenzaNestedInput = {
    create?: XOR<CategoriaCreateWithoutAreeCompetenzaInput, CategoriaUncheckedCreateWithoutAreeCompetenzaInput> | CategoriaCreateWithoutAreeCompetenzaInput[] | CategoriaUncheckedCreateWithoutAreeCompetenzaInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutAreeCompetenzaInput | CategoriaCreateOrConnectWithoutAreeCompetenzaInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutAreeCompetenzaInput | CategoriaUpsertWithWhereUniqueWithoutAreeCompetenzaInput[]
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutAreeCompetenzaInput | CategoriaUpdateWithWhereUniqueWithoutAreeCompetenzaInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutAreeCompetenzaInput | CategoriaUpdateManyWithWhereWithoutAreeCompetenzaInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type OrarioAreaUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<OrarioAreaCreateWithoutAreaInput, OrarioAreaUncheckedCreateWithoutAreaInput> | OrarioAreaCreateWithoutAreaInput[] | OrarioAreaUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: OrarioAreaCreateOrConnectWithoutAreaInput | OrarioAreaCreateOrConnectWithoutAreaInput[]
    upsert?: OrarioAreaUpsertWithWhereUniqueWithoutAreaInput | OrarioAreaUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: OrarioAreaCreateManyAreaInputEnvelope
    set?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
    disconnect?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
    delete?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
    connect?: OrarioAreaWhereUniqueInput | OrarioAreaWhereUniqueInput[]
    update?: OrarioAreaUpdateWithWhereUniqueWithoutAreaInput | OrarioAreaUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: OrarioAreaUpdateManyWithWhereWithoutAreaInput | OrarioAreaUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: OrarioAreaScalarWhereInput | OrarioAreaScalarWhereInput[]
  }

  export type CategoriaUncheckedUpdateManyWithoutAreeCompetenzaNestedInput = {
    create?: XOR<CategoriaCreateWithoutAreeCompetenzaInput, CategoriaUncheckedCreateWithoutAreeCompetenzaInput> | CategoriaCreateWithoutAreeCompetenzaInput[] | CategoriaUncheckedCreateWithoutAreeCompetenzaInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutAreeCompetenzaInput | CategoriaCreateOrConnectWithoutAreeCompetenzaInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutAreeCompetenzaInput | CategoriaUpsertWithWhereUniqueWithoutAreeCompetenzaInput[]
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutAreeCompetenzaInput | CategoriaUpdateWithWhereUniqueWithoutAreeCompetenzaInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutAreeCompetenzaInput | CategoriaUpdateManyWithWhereWithoutAreeCompetenzaInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type AreaCompetenzaCreateNestedOneWithoutOrariInput = {
    create?: XOR<AreaCompetenzaCreateWithoutOrariInput, AreaCompetenzaUncheckedCreateWithoutOrariInput>
    connectOrCreate?: AreaCompetenzaCreateOrConnectWithoutOrariInput
    connect?: AreaCompetenzaWhereUniqueInput
  }

  export type AreaCompetenzaUpdateOneRequiredWithoutOrariNestedInput = {
    create?: XOR<AreaCompetenzaCreateWithoutOrariInput, AreaCompetenzaUncheckedCreateWithoutOrariInput>
    connectOrCreate?: AreaCompetenzaCreateOrConnectWithoutOrariInput
    upsert?: AreaCompetenzaUpsertWithoutOrariInput
    connect?: AreaCompetenzaWhereUniqueInput
    update?: XOR<XOR<AreaCompetenzaUpdateToOneWithWhereWithoutOrariInput, AreaCompetenzaUpdateWithoutOrariInput>, AreaCompetenzaUncheckedUpdateWithoutOrariInput>
  }

  export type PietanzaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PietanzaCreateWithoutCategoriaInput, PietanzaUncheckedCreateWithoutCategoriaInput> | PietanzaCreateWithoutCategoriaInput[] | PietanzaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PietanzaCreateOrConnectWithoutCategoriaInput | PietanzaCreateOrConnectWithoutCategoriaInput[]
    createMany?: PietanzaCreateManyCategoriaInputEnvelope
    connect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
  }

  export type AreaCompetenzaCreateNestedManyWithoutCategorieInput = {
    create?: XOR<AreaCompetenzaCreateWithoutCategorieInput, AreaCompetenzaUncheckedCreateWithoutCategorieInput> | AreaCompetenzaCreateWithoutCategorieInput[] | AreaCompetenzaUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AreaCompetenzaCreateOrConnectWithoutCategorieInput | AreaCompetenzaCreateOrConnectWithoutCategorieInput[]
    connect?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
  }

  export type PietanzaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PietanzaCreateWithoutCategoriaInput, PietanzaUncheckedCreateWithoutCategoriaInput> | PietanzaCreateWithoutCategoriaInput[] | PietanzaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PietanzaCreateOrConnectWithoutCategoriaInput | PietanzaCreateOrConnectWithoutCategoriaInput[]
    createMany?: PietanzaCreateManyCategoriaInputEnvelope
    connect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
  }

  export type AreaCompetenzaUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<AreaCompetenzaCreateWithoutCategorieInput, AreaCompetenzaUncheckedCreateWithoutCategorieInput> | AreaCompetenzaCreateWithoutCategorieInput[] | AreaCompetenzaUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AreaCompetenzaCreateOrConnectWithoutCategorieInput | AreaCompetenzaCreateOrConnectWithoutCategorieInput[]
    connect?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
  }

  export type PietanzaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PietanzaCreateWithoutCategoriaInput, PietanzaUncheckedCreateWithoutCategoriaInput> | PietanzaCreateWithoutCategoriaInput[] | PietanzaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PietanzaCreateOrConnectWithoutCategoriaInput | PietanzaCreateOrConnectWithoutCategoriaInput[]
    upsert?: PietanzaUpsertWithWhereUniqueWithoutCategoriaInput | PietanzaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PietanzaCreateManyCategoriaInputEnvelope
    set?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    disconnect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    delete?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    connect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    update?: PietanzaUpdateWithWhereUniqueWithoutCategoriaInput | PietanzaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PietanzaUpdateManyWithWhereWithoutCategoriaInput | PietanzaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PietanzaScalarWhereInput | PietanzaScalarWhereInput[]
  }

  export type AreaCompetenzaUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<AreaCompetenzaCreateWithoutCategorieInput, AreaCompetenzaUncheckedCreateWithoutCategorieInput> | AreaCompetenzaCreateWithoutCategorieInput[] | AreaCompetenzaUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AreaCompetenzaCreateOrConnectWithoutCategorieInput | AreaCompetenzaCreateOrConnectWithoutCategorieInput[]
    upsert?: AreaCompetenzaUpsertWithWhereUniqueWithoutCategorieInput | AreaCompetenzaUpsertWithWhereUniqueWithoutCategorieInput[]
    set?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
    disconnect?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
    delete?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
    connect?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
    update?: AreaCompetenzaUpdateWithWhereUniqueWithoutCategorieInput | AreaCompetenzaUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: AreaCompetenzaUpdateManyWithWhereWithoutCategorieInput | AreaCompetenzaUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: AreaCompetenzaScalarWhereInput | AreaCompetenzaScalarWhereInput[]
  }

  export type PietanzaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PietanzaCreateWithoutCategoriaInput, PietanzaUncheckedCreateWithoutCategoriaInput> | PietanzaCreateWithoutCategoriaInput[] | PietanzaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PietanzaCreateOrConnectWithoutCategoriaInput | PietanzaCreateOrConnectWithoutCategoriaInput[]
    upsert?: PietanzaUpsertWithWhereUniqueWithoutCategoriaInput | PietanzaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PietanzaCreateManyCategoriaInputEnvelope
    set?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    disconnect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    delete?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    connect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    update?: PietanzaUpdateWithWhereUniqueWithoutCategoriaInput | PietanzaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PietanzaUpdateManyWithWhereWithoutCategoriaInput | PietanzaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PietanzaScalarWhereInput | PietanzaScalarWhereInput[]
  }

  export type AreaCompetenzaUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<AreaCompetenzaCreateWithoutCategorieInput, AreaCompetenzaUncheckedCreateWithoutCategorieInput> | AreaCompetenzaCreateWithoutCategorieInput[] | AreaCompetenzaUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AreaCompetenzaCreateOrConnectWithoutCategorieInput | AreaCompetenzaCreateOrConnectWithoutCategorieInput[]
    upsert?: AreaCompetenzaUpsertWithWhereUniqueWithoutCategorieInput | AreaCompetenzaUpsertWithWhereUniqueWithoutCategorieInput[]
    set?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
    disconnect?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
    delete?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
    connect?: AreaCompetenzaWhereUniqueInput | AreaCompetenzaWhereUniqueInput[]
    update?: AreaCompetenzaUpdateWithWhereUniqueWithoutCategorieInput | AreaCompetenzaUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: AreaCompetenzaUpdateManyWithWhereWithoutCategorieInput | AreaCompetenzaUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: AreaCompetenzaScalarWhereInput | AreaCompetenzaScalarWhereInput[]
  }

  export type CrossSellingCreateNestedManyWithoutCorrelataByInput = {
    create?: XOR<CrossSellingCreateWithoutCorrelataByInput, CrossSellingUncheckedCreateWithoutCorrelataByInput> | CrossSellingCreateWithoutCorrelataByInput[] | CrossSellingUncheckedCreateWithoutCorrelataByInput[]
    connectOrCreate?: CrossSellingCreateOrConnectWithoutCorrelataByInput | CrossSellingCreateOrConnectWithoutCorrelataByInput[]
    createMany?: CrossSellingCreateManyCorrelataByInputEnvelope
    connect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
  }

  export type CrossSellingCreateNestedManyWithoutCorrelataInput = {
    create?: XOR<CrossSellingCreateWithoutCorrelataInput, CrossSellingUncheckedCreateWithoutCorrelataInput> | CrossSellingCreateWithoutCorrelataInput[] | CrossSellingUncheckedCreateWithoutCorrelataInput[]
    connectOrCreate?: CrossSellingCreateOrConnectWithoutCorrelataInput | CrossSellingCreateOrConnectWithoutCorrelataInput[]
    createMany?: CrossSellingCreateManyCorrelataInputEnvelope
    connect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
  }

  export type CategoriaCreateNestedOneWithoutPietanzeInput = {
    create?: XOR<CategoriaCreateWithoutPietanzeInput, CategoriaUncheckedCreateWithoutPietanzeInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPietanzeInput
    connect?: CategoriaWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutPietanzeInput = {
    create?: XOR<TagCreateWithoutPietanzeInput, TagUncheckedCreateWithoutPietanzeInput> | TagCreateWithoutPietanzeInput[] | TagUncheckedCreateWithoutPietanzeInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPietanzeInput | TagCreateOrConnectWithoutPietanzeInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CrossSellingUncheckedCreateNestedManyWithoutCorrelataByInput = {
    create?: XOR<CrossSellingCreateWithoutCorrelataByInput, CrossSellingUncheckedCreateWithoutCorrelataByInput> | CrossSellingCreateWithoutCorrelataByInput[] | CrossSellingUncheckedCreateWithoutCorrelataByInput[]
    connectOrCreate?: CrossSellingCreateOrConnectWithoutCorrelataByInput | CrossSellingCreateOrConnectWithoutCorrelataByInput[]
    createMany?: CrossSellingCreateManyCorrelataByInputEnvelope
    connect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
  }

  export type CrossSellingUncheckedCreateNestedManyWithoutCorrelataInput = {
    create?: XOR<CrossSellingCreateWithoutCorrelataInput, CrossSellingUncheckedCreateWithoutCorrelataInput> | CrossSellingCreateWithoutCorrelataInput[] | CrossSellingUncheckedCreateWithoutCorrelataInput[]
    connectOrCreate?: CrossSellingCreateOrConnectWithoutCorrelataInput | CrossSellingCreateOrConnectWithoutCorrelataInput[]
    createMany?: CrossSellingCreateManyCorrelataInputEnvelope
    connect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutPietanzeInput = {
    create?: XOR<TagCreateWithoutPietanzeInput, TagUncheckedCreateWithoutPietanzeInput> | TagCreateWithoutPietanzeInput[] | TagUncheckedCreateWithoutPietanzeInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPietanzeInput | TagCreateOrConnectWithoutPietanzeInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CrossSellingUpdateManyWithoutCorrelataByNestedInput = {
    create?: XOR<CrossSellingCreateWithoutCorrelataByInput, CrossSellingUncheckedCreateWithoutCorrelataByInput> | CrossSellingCreateWithoutCorrelataByInput[] | CrossSellingUncheckedCreateWithoutCorrelataByInput[]
    connectOrCreate?: CrossSellingCreateOrConnectWithoutCorrelataByInput | CrossSellingCreateOrConnectWithoutCorrelataByInput[]
    upsert?: CrossSellingUpsertWithWhereUniqueWithoutCorrelataByInput | CrossSellingUpsertWithWhereUniqueWithoutCorrelataByInput[]
    createMany?: CrossSellingCreateManyCorrelataByInputEnvelope
    set?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    disconnect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    delete?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    connect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    update?: CrossSellingUpdateWithWhereUniqueWithoutCorrelataByInput | CrossSellingUpdateWithWhereUniqueWithoutCorrelataByInput[]
    updateMany?: CrossSellingUpdateManyWithWhereWithoutCorrelataByInput | CrossSellingUpdateManyWithWhereWithoutCorrelataByInput[]
    deleteMany?: CrossSellingScalarWhereInput | CrossSellingScalarWhereInput[]
  }

  export type CrossSellingUpdateManyWithoutCorrelataNestedInput = {
    create?: XOR<CrossSellingCreateWithoutCorrelataInput, CrossSellingUncheckedCreateWithoutCorrelataInput> | CrossSellingCreateWithoutCorrelataInput[] | CrossSellingUncheckedCreateWithoutCorrelataInput[]
    connectOrCreate?: CrossSellingCreateOrConnectWithoutCorrelataInput | CrossSellingCreateOrConnectWithoutCorrelataInput[]
    upsert?: CrossSellingUpsertWithWhereUniqueWithoutCorrelataInput | CrossSellingUpsertWithWhereUniqueWithoutCorrelataInput[]
    createMany?: CrossSellingCreateManyCorrelataInputEnvelope
    set?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    disconnect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    delete?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    connect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    update?: CrossSellingUpdateWithWhereUniqueWithoutCorrelataInput | CrossSellingUpdateWithWhereUniqueWithoutCorrelataInput[]
    updateMany?: CrossSellingUpdateManyWithWhereWithoutCorrelataInput | CrossSellingUpdateManyWithWhereWithoutCorrelataInput[]
    deleteMany?: CrossSellingScalarWhereInput | CrossSellingScalarWhereInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutPietanzeNestedInput = {
    create?: XOR<CategoriaCreateWithoutPietanzeInput, CategoriaUncheckedCreateWithoutPietanzeInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPietanzeInput
    upsert?: CategoriaUpsertWithoutPietanzeInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutPietanzeInput, CategoriaUpdateWithoutPietanzeInput>, CategoriaUncheckedUpdateWithoutPietanzeInput>
  }

  export type TagUpdateManyWithoutPietanzeNestedInput = {
    create?: XOR<TagCreateWithoutPietanzeInput, TagUncheckedCreateWithoutPietanzeInput> | TagCreateWithoutPietanzeInput[] | TagUncheckedCreateWithoutPietanzeInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPietanzeInput | TagCreateOrConnectWithoutPietanzeInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPietanzeInput | TagUpsertWithWhereUniqueWithoutPietanzeInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPietanzeInput | TagUpdateWithWhereUniqueWithoutPietanzeInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPietanzeInput | TagUpdateManyWithWhereWithoutPietanzeInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CrossSellingUncheckedUpdateManyWithoutCorrelataByNestedInput = {
    create?: XOR<CrossSellingCreateWithoutCorrelataByInput, CrossSellingUncheckedCreateWithoutCorrelataByInput> | CrossSellingCreateWithoutCorrelataByInput[] | CrossSellingUncheckedCreateWithoutCorrelataByInput[]
    connectOrCreate?: CrossSellingCreateOrConnectWithoutCorrelataByInput | CrossSellingCreateOrConnectWithoutCorrelataByInput[]
    upsert?: CrossSellingUpsertWithWhereUniqueWithoutCorrelataByInput | CrossSellingUpsertWithWhereUniqueWithoutCorrelataByInput[]
    createMany?: CrossSellingCreateManyCorrelataByInputEnvelope
    set?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    disconnect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    delete?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    connect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    update?: CrossSellingUpdateWithWhereUniqueWithoutCorrelataByInput | CrossSellingUpdateWithWhereUniqueWithoutCorrelataByInput[]
    updateMany?: CrossSellingUpdateManyWithWhereWithoutCorrelataByInput | CrossSellingUpdateManyWithWhereWithoutCorrelataByInput[]
    deleteMany?: CrossSellingScalarWhereInput | CrossSellingScalarWhereInput[]
  }

  export type CrossSellingUncheckedUpdateManyWithoutCorrelataNestedInput = {
    create?: XOR<CrossSellingCreateWithoutCorrelataInput, CrossSellingUncheckedCreateWithoutCorrelataInput> | CrossSellingCreateWithoutCorrelataInput[] | CrossSellingUncheckedCreateWithoutCorrelataInput[]
    connectOrCreate?: CrossSellingCreateOrConnectWithoutCorrelataInput | CrossSellingCreateOrConnectWithoutCorrelataInput[]
    upsert?: CrossSellingUpsertWithWhereUniqueWithoutCorrelataInput | CrossSellingUpsertWithWhereUniqueWithoutCorrelataInput[]
    createMany?: CrossSellingCreateManyCorrelataInputEnvelope
    set?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    disconnect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    delete?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    connect?: CrossSellingWhereUniqueInput | CrossSellingWhereUniqueInput[]
    update?: CrossSellingUpdateWithWhereUniqueWithoutCorrelataInput | CrossSellingUpdateWithWhereUniqueWithoutCorrelataInput[]
    updateMany?: CrossSellingUpdateManyWithWhereWithoutCorrelataInput | CrossSellingUpdateManyWithWhereWithoutCorrelataInput[]
    deleteMany?: CrossSellingScalarWhereInput | CrossSellingScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutPietanzeNestedInput = {
    create?: XOR<TagCreateWithoutPietanzeInput, TagUncheckedCreateWithoutPietanzeInput> | TagCreateWithoutPietanzeInput[] | TagUncheckedCreateWithoutPietanzeInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPietanzeInput | TagCreateOrConnectWithoutPietanzeInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPietanzeInput | TagUpsertWithWhereUniqueWithoutPietanzeInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPietanzeInput | TagUpdateWithWhereUniqueWithoutPietanzeInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPietanzeInput | TagUpdateManyWithWhereWithoutPietanzeInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type PietanzaCreateNestedOneWithoutCorrelataByInput = {
    create?: XOR<PietanzaCreateWithoutCorrelataByInput, PietanzaUncheckedCreateWithoutCorrelataByInput>
    connectOrCreate?: PietanzaCreateOrConnectWithoutCorrelataByInput
    connect?: PietanzaWhereUniqueInput
  }

  export type PietanzaCreateNestedOneWithoutCorrelataInput = {
    create?: XOR<PietanzaCreateWithoutCorrelataInput, PietanzaUncheckedCreateWithoutCorrelataInput>
    connectOrCreate?: PietanzaCreateOrConnectWithoutCorrelataInput
    connect?: PietanzaWhereUniqueInput
  }

  export type PietanzaUpdateOneRequiredWithoutCorrelataByNestedInput = {
    create?: XOR<PietanzaCreateWithoutCorrelataByInput, PietanzaUncheckedCreateWithoutCorrelataByInput>
    connectOrCreate?: PietanzaCreateOrConnectWithoutCorrelataByInput
    upsert?: PietanzaUpsertWithoutCorrelataByInput
    connect?: PietanzaWhereUniqueInput
    update?: XOR<XOR<PietanzaUpdateToOneWithWhereWithoutCorrelataByInput, PietanzaUpdateWithoutCorrelataByInput>, PietanzaUncheckedUpdateWithoutCorrelataByInput>
  }

  export type PietanzaUpdateOneRequiredWithoutCorrelataNestedInput = {
    create?: XOR<PietanzaCreateWithoutCorrelataInput, PietanzaUncheckedCreateWithoutCorrelataInput>
    connectOrCreate?: PietanzaCreateOrConnectWithoutCorrelataInput
    upsert?: PietanzaUpsertWithoutCorrelataInput
    connect?: PietanzaWhereUniqueInput
    update?: XOR<XOR<PietanzaUpdateToOneWithWhereWithoutCorrelataInput, PietanzaUpdateWithoutCorrelataInput>, PietanzaUncheckedUpdateWithoutCorrelataInput>
  }

  export type PietanzaCreateNestedManyWithoutTagInput = {
    create?: XOR<PietanzaCreateWithoutTagInput, PietanzaUncheckedCreateWithoutTagInput> | PietanzaCreateWithoutTagInput[] | PietanzaUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PietanzaCreateOrConnectWithoutTagInput | PietanzaCreateOrConnectWithoutTagInput[]
    connect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
  }

  export type PietanzaUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PietanzaCreateWithoutTagInput, PietanzaUncheckedCreateWithoutTagInput> | PietanzaCreateWithoutTagInput[] | PietanzaUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PietanzaCreateOrConnectWithoutTagInput | PietanzaCreateOrConnectWithoutTagInput[]
    connect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
  }

  export type PietanzaUpdateManyWithoutTagNestedInput = {
    create?: XOR<PietanzaCreateWithoutTagInput, PietanzaUncheckedCreateWithoutTagInput> | PietanzaCreateWithoutTagInput[] | PietanzaUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PietanzaCreateOrConnectWithoutTagInput | PietanzaCreateOrConnectWithoutTagInput[]
    upsert?: PietanzaUpsertWithWhereUniqueWithoutTagInput | PietanzaUpsertWithWhereUniqueWithoutTagInput[]
    set?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    disconnect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    delete?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    connect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    update?: PietanzaUpdateWithWhereUniqueWithoutTagInput | PietanzaUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PietanzaUpdateManyWithWhereWithoutTagInput | PietanzaUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PietanzaScalarWhereInput | PietanzaScalarWhereInput[]
  }

  export type PietanzaUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PietanzaCreateWithoutTagInput, PietanzaUncheckedCreateWithoutTagInput> | PietanzaCreateWithoutTagInput[] | PietanzaUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PietanzaCreateOrConnectWithoutTagInput | PietanzaCreateOrConnectWithoutTagInput[]
    upsert?: PietanzaUpsertWithWhereUniqueWithoutTagInput | PietanzaUpsertWithWhereUniqueWithoutTagInput[]
    set?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    disconnect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    delete?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    connect?: PietanzaWhereUniqueInput | PietanzaWhereUniqueInput[]
    update?: PietanzaUpdateWithWhereUniqueWithoutTagInput | PietanzaUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PietanzaUpdateManyWithWhereWithoutTagInput | PietanzaUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PietanzaScalarWhereInput | PietanzaScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPrenotazioneStatoFieldUpdateOperationsInput = {
    set?: $Enums.PrenotazioneStato
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPrenotazioneCanaleFieldUpdateOperationsInput = {
    set?: $Enums.PrenotazioneCanale
  }

  export type TavoloCreateNestedManyWithoutPiantinaInput = {
    create?: XOR<TavoloCreateWithoutPiantinaInput, TavoloUncheckedCreateWithoutPiantinaInput> | TavoloCreateWithoutPiantinaInput[] | TavoloUncheckedCreateWithoutPiantinaInput[]
    connectOrCreate?: TavoloCreateOrConnectWithoutPiantinaInput | TavoloCreateOrConnectWithoutPiantinaInput[]
    createMany?: TavoloCreateManyPiantinaInputEnvelope
    connect?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
  }

  export type TavoloUncheckedCreateNestedManyWithoutPiantinaInput = {
    create?: XOR<TavoloCreateWithoutPiantinaInput, TavoloUncheckedCreateWithoutPiantinaInput> | TavoloCreateWithoutPiantinaInput[] | TavoloUncheckedCreateWithoutPiantinaInput[]
    connectOrCreate?: TavoloCreateOrConnectWithoutPiantinaInput | TavoloCreateOrConnectWithoutPiantinaInput[]
    createMany?: TavoloCreateManyPiantinaInputEnvelope
    connect?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
  }

  export type TavoloUpdateManyWithoutPiantinaNestedInput = {
    create?: XOR<TavoloCreateWithoutPiantinaInput, TavoloUncheckedCreateWithoutPiantinaInput> | TavoloCreateWithoutPiantinaInput[] | TavoloUncheckedCreateWithoutPiantinaInput[]
    connectOrCreate?: TavoloCreateOrConnectWithoutPiantinaInput | TavoloCreateOrConnectWithoutPiantinaInput[]
    upsert?: TavoloUpsertWithWhereUniqueWithoutPiantinaInput | TavoloUpsertWithWhereUniqueWithoutPiantinaInput[]
    createMany?: TavoloCreateManyPiantinaInputEnvelope
    set?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
    disconnect?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
    delete?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
    connect?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
    update?: TavoloUpdateWithWhereUniqueWithoutPiantinaInput | TavoloUpdateWithWhereUniqueWithoutPiantinaInput[]
    updateMany?: TavoloUpdateManyWithWhereWithoutPiantinaInput | TavoloUpdateManyWithWhereWithoutPiantinaInput[]
    deleteMany?: TavoloScalarWhereInput | TavoloScalarWhereInput[]
  }

  export type TavoloUncheckedUpdateManyWithoutPiantinaNestedInput = {
    create?: XOR<TavoloCreateWithoutPiantinaInput, TavoloUncheckedCreateWithoutPiantinaInput> | TavoloCreateWithoutPiantinaInput[] | TavoloUncheckedCreateWithoutPiantinaInput[]
    connectOrCreate?: TavoloCreateOrConnectWithoutPiantinaInput | TavoloCreateOrConnectWithoutPiantinaInput[]
    upsert?: TavoloUpsertWithWhereUniqueWithoutPiantinaInput | TavoloUpsertWithWhereUniqueWithoutPiantinaInput[]
    createMany?: TavoloCreateManyPiantinaInputEnvelope
    set?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
    disconnect?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
    delete?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
    connect?: TavoloWhereUniqueInput | TavoloWhereUniqueInput[]
    update?: TavoloUpdateWithWhereUniqueWithoutPiantinaInput | TavoloUpdateWithWhereUniqueWithoutPiantinaInput[]
    updateMany?: TavoloUpdateManyWithWhereWithoutPiantinaInput | TavoloUpdateManyWithWhereWithoutPiantinaInput[]
    deleteMany?: TavoloScalarWhereInput | TavoloScalarWhereInput[]
  }

  export type PiantinaCreateNestedOneWithoutTavoliInput = {
    create?: XOR<PiantinaCreateWithoutTavoliInput, PiantinaUncheckedCreateWithoutTavoliInput>
    connectOrCreate?: PiantinaCreateOrConnectWithoutTavoliInput
    connect?: PiantinaWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PiantinaUpdateOneRequiredWithoutTavoliNestedInput = {
    create?: XOR<PiantinaCreateWithoutTavoliInput, PiantinaUncheckedCreateWithoutTavoliInput>
    connectOrCreate?: PiantinaCreateOrConnectWithoutTavoliInput
    upsert?: PiantinaUpsertWithoutTavoliInput
    connect?: PiantinaWhereUniqueInput
    update?: XOR<XOR<PiantinaUpdateToOneWithWhereWithoutTavoliInput, PiantinaUpdateWithoutTavoliInput>, PiantinaUncheckedUpdateWithoutTavoliInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPrenotazioneStatoFilter<$PrismaModel = never> = {
    equals?: $Enums.PrenotazioneStato | EnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    in?: $Enums.PrenotazioneStato[] | ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrenotazioneStato[] | ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    not?: NestedEnumPrenotazioneStatoFilter<$PrismaModel> | $Enums.PrenotazioneStato
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPrenotazioneCanaleFilter<$PrismaModel = never> = {
    equals?: $Enums.PrenotazioneCanale | EnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    in?: $Enums.PrenotazioneCanale[] | ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrenotazioneCanale[] | ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    not?: NestedEnumPrenotazioneCanaleFilter<$PrismaModel> | $Enums.PrenotazioneCanale
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPrenotazioneStatoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrenotazioneStato | EnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    in?: $Enums.PrenotazioneStato[] | ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrenotazioneStato[] | ListEnumPrenotazioneStatoFieldRefInput<$PrismaModel>
    not?: NestedEnumPrenotazioneStatoWithAggregatesFilter<$PrismaModel> | $Enums.PrenotazioneStato
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrenotazioneStatoFilter<$PrismaModel>
    _max?: NestedEnumPrenotazioneStatoFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPrenotazioneCanaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrenotazioneCanale | EnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    in?: $Enums.PrenotazioneCanale[] | ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrenotazioneCanale[] | ListEnumPrenotazioneCanaleFieldRefInput<$PrismaModel>
    not?: NestedEnumPrenotazioneCanaleWithAggregatesFilter<$PrismaModel> | $Enums.PrenotazioneCanale
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrenotazioneCanaleFilter<$PrismaModel>
    _max?: NestedEnumPrenotazioneCanaleFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RistoranteCreateWithoutUserInput = {
    id?: string
    name?: string | null
    via?: string | null
    civico?: string | null
    citta?: string | null
    vat?: string | null
  }

  export type RistoranteUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    via?: string | null
    civico?: string | null
    citta?: string | null
    vat?: string | null
  }

  export type RistoranteCreateOrConnectWithoutUserInput = {
    where: RistoranteWhereUniqueInput
    create: XOR<RistoranteCreateWithoutUserInput, RistoranteUncheckedCreateWithoutUserInput>
  }

  export type RistoranteUpsertWithWhereUniqueWithoutUserInput = {
    where: RistoranteWhereUniqueInput
    update: XOR<RistoranteUpdateWithoutUserInput, RistoranteUncheckedUpdateWithoutUserInput>
    create: XOR<RistoranteCreateWithoutUserInput, RistoranteUncheckedCreateWithoutUserInput>
  }

  export type RistoranteUpdateWithWhereUniqueWithoutUserInput = {
    where: RistoranteWhereUniqueInput
    data: XOR<RistoranteUpdateWithoutUserInput, RistoranteUncheckedUpdateWithoutUserInput>
  }

  export type RistoranteUpdateManyWithWhereWithoutUserInput = {
    where: RistoranteScalarWhereInput
    data: XOR<RistoranteUpdateManyMutationInput, RistoranteUncheckedUpdateManyWithoutUserInput>
  }

  export type RistoranteScalarWhereInput = {
    AND?: RistoranteScalarWhereInput | RistoranteScalarWhereInput[]
    OR?: RistoranteScalarWhereInput[]
    NOT?: RistoranteScalarWhereInput | RistoranteScalarWhereInput[]
    id?: StringFilter<"Ristorante"> | string
    name?: StringNullableFilter<"Ristorante"> | string | null
    via?: StringNullableFilter<"Ristorante"> | string | null
    civico?: StringNullableFilter<"Ristorante"> | string | null
    citta?: StringNullableFilter<"Ristorante"> | string | null
    vat?: StringNullableFilter<"Ristorante"> | string | null
  }

  export type usersCreateWithoutRistoranteInput = {
    email: string
    name?: string | null
    username: string
    password: string
    bearerToken?: string | null
    ipAddress?: string | null
    mongoAdress?: string | null
  }

  export type usersUncheckedCreateWithoutRistoranteInput = {
    id?: number
    email: string
    name?: string | null
    username: string
    password: string
    bearerToken?: string | null
    ipAddress?: string | null
    mongoAdress?: string | null
  }

  export type usersCreateOrConnectWithoutRistoranteInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRistoranteInput, usersUncheckedCreateWithoutRistoranteInput>
  }

  export type usersUpsertWithWhereUniqueWithoutRistoranteInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRistoranteInput, usersUncheckedUpdateWithoutRistoranteInput>
    create: XOR<usersCreateWithoutRistoranteInput, usersUncheckedCreateWithoutRistoranteInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRistoranteInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRistoranteInput, usersUncheckedUpdateWithoutRistoranteInput>
  }

  export type usersUpdateManyWithWhereWithoutRistoranteInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRistoranteInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    bearerToken?: StringNullableFilter<"users"> | string | null
    ipAddress?: StringNullableFilter<"users"> | string | null
    mongoAdress?: StringNullableFilter<"users"> | string | null
  }

  export type OrarioAreaCreateWithoutAreaInput = {
    giorno: string
    start: Date | string
    end: Date | string
  }

  export type OrarioAreaUncheckedCreateWithoutAreaInput = {
    id?: number
    giorno: string
    start: Date | string
    end: Date | string
  }

  export type OrarioAreaCreateOrConnectWithoutAreaInput = {
    where: OrarioAreaWhereUniqueInput
    create: XOR<OrarioAreaCreateWithoutAreaInput, OrarioAreaUncheckedCreateWithoutAreaInput>
  }

  export type OrarioAreaCreateManyAreaInputEnvelope = {
    data: OrarioAreaCreateManyAreaInput | OrarioAreaCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaCreateWithoutAreeCompetenzaInput = {
    id: number
    descrizioneLingua1: string
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    descrizioneLingua2?: string | null
    pietanze?: PietanzaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutAreeCompetenzaInput = {
    id: number
    descrizioneLingua1: string
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    descrizioneLingua2?: string | null
    pietanze?: PietanzaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutAreeCompetenzaInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutAreeCompetenzaInput, CategoriaUncheckedCreateWithoutAreeCompetenzaInput>
  }

  export type OrarioAreaUpsertWithWhereUniqueWithoutAreaInput = {
    where: OrarioAreaWhereUniqueInput
    update: XOR<OrarioAreaUpdateWithoutAreaInput, OrarioAreaUncheckedUpdateWithoutAreaInput>
    create: XOR<OrarioAreaCreateWithoutAreaInput, OrarioAreaUncheckedCreateWithoutAreaInput>
  }

  export type OrarioAreaUpdateWithWhereUniqueWithoutAreaInput = {
    where: OrarioAreaWhereUniqueInput
    data: XOR<OrarioAreaUpdateWithoutAreaInput, OrarioAreaUncheckedUpdateWithoutAreaInput>
  }

  export type OrarioAreaUpdateManyWithWhereWithoutAreaInput = {
    where: OrarioAreaScalarWhereInput
    data: XOR<OrarioAreaUpdateManyMutationInput, OrarioAreaUncheckedUpdateManyWithoutAreaInput>
  }

  export type OrarioAreaScalarWhereInput = {
    AND?: OrarioAreaScalarWhereInput | OrarioAreaScalarWhereInput[]
    OR?: OrarioAreaScalarWhereInput[]
    NOT?: OrarioAreaScalarWhereInput | OrarioAreaScalarWhereInput[]
    id?: IntFilter<"OrarioArea"> | number
    areaId?: IntFilter<"OrarioArea"> | number
    giorno?: StringFilter<"OrarioArea"> | string
    start?: DateTimeFilter<"OrarioArea"> | Date | string
    end?: DateTimeFilter<"OrarioArea"> | Date | string
  }

  export type CategoriaUpsertWithWhereUniqueWithoutAreeCompetenzaInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutAreeCompetenzaInput, CategoriaUncheckedUpdateWithoutAreeCompetenzaInput>
    create: XOR<CategoriaCreateWithoutAreeCompetenzaInput, CategoriaUncheckedCreateWithoutAreeCompetenzaInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutAreeCompetenzaInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutAreeCompetenzaInput, CategoriaUncheckedUpdateWithoutAreeCompetenzaInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutAreeCompetenzaInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutAreeCompetenzaInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    id?: IntFilter<"Categoria"> | number
    descrizioneLingua1?: StringFilter<"Categoria"> | string
    isAttiva?: BoolFilter<"Categoria"> | boolean
    isVisibileSuSelfOrder?: BoolFilter<"Categoria"> | boolean
    ordineTastoPc?: IntFilter<"Categoria"> | number
    dataCreaz?: DateTimeFilter<"Categoria"> | Date | string
    dataAgg?: DateTimeFilter<"Categoria"> | Date | string
    descrizioneLingua2?: StringNullableFilter<"Categoria"> | string | null
  }

  export type AreaCompetenzaCreateWithoutOrariInput = {
    id: number
    descrizione: string
    dataCreaz: Date | string
    dataAgg: Date | string
    isAttiva: boolean
    note?: string
    ordine?: number
    descrizioneInglese?: string | null
    noteInglese?: string | null
    isMenuFisso: boolean
    categorie?: CategoriaCreateNestedManyWithoutAreeCompetenzaInput
  }

  export type AreaCompetenzaUncheckedCreateWithoutOrariInput = {
    id: number
    descrizione: string
    dataCreaz: Date | string
    dataAgg: Date | string
    isAttiva: boolean
    note?: string
    ordine?: number
    descrizioneInglese?: string | null
    noteInglese?: string | null
    isMenuFisso: boolean
    categorie?: CategoriaUncheckedCreateNestedManyWithoutAreeCompetenzaInput
  }

  export type AreaCompetenzaCreateOrConnectWithoutOrariInput = {
    where: AreaCompetenzaWhereUniqueInput
    create: XOR<AreaCompetenzaCreateWithoutOrariInput, AreaCompetenzaUncheckedCreateWithoutOrariInput>
  }

  export type AreaCompetenzaUpsertWithoutOrariInput = {
    update: XOR<AreaCompetenzaUpdateWithoutOrariInput, AreaCompetenzaUncheckedUpdateWithoutOrariInput>
    create: XOR<AreaCompetenzaCreateWithoutOrariInput, AreaCompetenzaUncheckedCreateWithoutOrariInput>
    where?: AreaCompetenzaWhereInput
  }

  export type AreaCompetenzaUpdateToOneWithWhereWithoutOrariInput = {
    where?: AreaCompetenzaWhereInput
    data: XOR<AreaCompetenzaUpdateWithoutOrariInput, AreaCompetenzaUncheckedUpdateWithoutOrariInput>
  }

  export type AreaCompetenzaUpdateWithoutOrariInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
    categorie?: CategoriaUpdateManyWithoutAreeCompetenzaNestedInput
  }

  export type AreaCompetenzaUncheckedUpdateWithoutOrariInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
    categorie?: CategoriaUncheckedUpdateManyWithoutAreeCompetenzaNestedInput
  }

  export type PietanzaCreateWithoutCategoriaInput = {
    id: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlataBy?: CrossSellingCreateNestedManyWithoutCorrelataByInput
    correlata?: CrossSellingCreateNestedManyWithoutCorrelataInput
    tag?: TagCreateNestedManyWithoutPietanzeInput
  }

  export type PietanzaUncheckedCreateWithoutCategoriaInput = {
    id: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlataBy?: CrossSellingUncheckedCreateNestedManyWithoutCorrelataByInput
    correlata?: CrossSellingUncheckedCreateNestedManyWithoutCorrelataInput
    tag?: TagUncheckedCreateNestedManyWithoutPietanzeInput
  }

  export type PietanzaCreateOrConnectWithoutCategoriaInput = {
    where: PietanzaWhereUniqueInput
    create: XOR<PietanzaCreateWithoutCategoriaInput, PietanzaUncheckedCreateWithoutCategoriaInput>
  }

  export type PietanzaCreateManyCategoriaInputEnvelope = {
    data: PietanzaCreateManyCategoriaInput | PietanzaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type AreaCompetenzaCreateWithoutCategorieInput = {
    id: number
    descrizione: string
    dataCreaz: Date | string
    dataAgg: Date | string
    isAttiva: boolean
    note?: string
    ordine?: number
    descrizioneInglese?: string | null
    noteInglese?: string | null
    isMenuFisso: boolean
    orari?: OrarioAreaCreateNestedManyWithoutAreaInput
  }

  export type AreaCompetenzaUncheckedCreateWithoutCategorieInput = {
    id: number
    descrizione: string
    dataCreaz: Date | string
    dataAgg: Date | string
    isAttiva: boolean
    note?: string
    ordine?: number
    descrizioneInglese?: string | null
    noteInglese?: string | null
    isMenuFisso: boolean
    orari?: OrarioAreaUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCompetenzaCreateOrConnectWithoutCategorieInput = {
    where: AreaCompetenzaWhereUniqueInput
    create: XOR<AreaCompetenzaCreateWithoutCategorieInput, AreaCompetenzaUncheckedCreateWithoutCategorieInput>
  }

  export type PietanzaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: PietanzaWhereUniqueInput
    update: XOR<PietanzaUpdateWithoutCategoriaInput, PietanzaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<PietanzaCreateWithoutCategoriaInput, PietanzaUncheckedCreateWithoutCategoriaInput>
  }

  export type PietanzaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: PietanzaWhereUniqueInput
    data: XOR<PietanzaUpdateWithoutCategoriaInput, PietanzaUncheckedUpdateWithoutCategoriaInput>
  }

  export type PietanzaUpdateManyWithWhereWithoutCategoriaInput = {
    where: PietanzaScalarWhereInput
    data: XOR<PietanzaUpdateManyMutationInput, PietanzaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type PietanzaScalarWhereInput = {
    AND?: PietanzaScalarWhereInput | PietanzaScalarWhereInput[]
    OR?: PietanzaScalarWhereInput[]
    NOT?: PietanzaScalarWhereInput | PietanzaScalarWhereInput[]
    id?: IntFilter<"Pietanza"> | number
    idCategoriaPietanza?: IntFilter<"Pietanza"> | number
    descrizioneLingua1?: StringFilter<"Pietanza"> | string
    prezzo?: FloatFilter<"Pietanza"> | number
    isAttiva?: BoolFilter<"Pietanza"> | boolean
    isVisibileSuSelfOrder?: BoolFilter<"Pietanza"> | boolean
    ordineTastoPc?: IntFilter<"Pietanza"> | number
    dataCreaz?: DateTimeFilter<"Pietanza"> | Date | string
    dataAgg?: DateTimeFilter<"Pietanza"> | Date | string
    note?: StringNullableFilter<"Pietanza"> | string | null
    image?: StringNullableFilter<"Pietanza"> | string | null
    descrizioneLingua2?: StringNullableFilter<"Pietanza"> | string | null
    noteLingua2?: StringNullableFilter<"Pietanza"> | string | null
  }

  export type AreaCompetenzaUpsertWithWhereUniqueWithoutCategorieInput = {
    where: AreaCompetenzaWhereUniqueInput
    update: XOR<AreaCompetenzaUpdateWithoutCategorieInput, AreaCompetenzaUncheckedUpdateWithoutCategorieInput>
    create: XOR<AreaCompetenzaCreateWithoutCategorieInput, AreaCompetenzaUncheckedCreateWithoutCategorieInput>
  }

  export type AreaCompetenzaUpdateWithWhereUniqueWithoutCategorieInput = {
    where: AreaCompetenzaWhereUniqueInput
    data: XOR<AreaCompetenzaUpdateWithoutCategorieInput, AreaCompetenzaUncheckedUpdateWithoutCategorieInput>
  }

  export type AreaCompetenzaUpdateManyWithWhereWithoutCategorieInput = {
    where: AreaCompetenzaScalarWhereInput
    data: XOR<AreaCompetenzaUpdateManyMutationInput, AreaCompetenzaUncheckedUpdateManyWithoutCategorieInput>
  }

  export type AreaCompetenzaScalarWhereInput = {
    AND?: AreaCompetenzaScalarWhereInput | AreaCompetenzaScalarWhereInput[]
    OR?: AreaCompetenzaScalarWhereInput[]
    NOT?: AreaCompetenzaScalarWhereInput | AreaCompetenzaScalarWhereInput[]
    id?: IntFilter<"AreaCompetenza"> | number
    descrizione?: StringFilter<"AreaCompetenza"> | string
    dataCreaz?: DateTimeFilter<"AreaCompetenza"> | Date | string
    dataAgg?: DateTimeFilter<"AreaCompetenza"> | Date | string
    isAttiva?: BoolFilter<"AreaCompetenza"> | boolean
    note?: StringFilter<"AreaCompetenza"> | string
    ordine?: IntFilter<"AreaCompetenza"> | number
    descrizioneInglese?: StringNullableFilter<"AreaCompetenza"> | string | null
    noteInglese?: StringNullableFilter<"AreaCompetenza"> | string | null
    isMenuFisso?: BoolFilter<"AreaCompetenza"> | boolean
  }

  export type CrossSellingCreateWithoutCorrelataByInput = {
    correlata: PietanzaCreateNestedOneWithoutCorrelataInput
  }

  export type CrossSellingUncheckedCreateWithoutCorrelataByInput = {
    correlataId: number
  }

  export type CrossSellingCreateOrConnectWithoutCorrelataByInput = {
    where: CrossSellingWhereUniqueInput
    create: XOR<CrossSellingCreateWithoutCorrelataByInput, CrossSellingUncheckedCreateWithoutCorrelataByInput>
  }

  export type CrossSellingCreateManyCorrelataByInputEnvelope = {
    data: CrossSellingCreateManyCorrelataByInput | CrossSellingCreateManyCorrelataByInput[]
    skipDuplicates?: boolean
  }

  export type CrossSellingCreateWithoutCorrelataInput = {
    correlataBy: PietanzaCreateNestedOneWithoutCorrelataByInput
  }

  export type CrossSellingUncheckedCreateWithoutCorrelataInput = {
    correlataById: number
  }

  export type CrossSellingCreateOrConnectWithoutCorrelataInput = {
    where: CrossSellingWhereUniqueInput
    create: XOR<CrossSellingCreateWithoutCorrelataInput, CrossSellingUncheckedCreateWithoutCorrelataInput>
  }

  export type CrossSellingCreateManyCorrelataInputEnvelope = {
    data: CrossSellingCreateManyCorrelataInput | CrossSellingCreateManyCorrelataInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaCreateWithoutPietanzeInput = {
    id: number
    descrizioneLingua1: string
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    descrizioneLingua2?: string | null
    areeCompetenza?: AreaCompetenzaCreateNestedManyWithoutCategorieInput
  }

  export type CategoriaUncheckedCreateWithoutPietanzeInput = {
    id: number
    descrizioneLingua1: string
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    descrizioneLingua2?: string | null
    areeCompetenza?: AreaCompetenzaUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategoriaCreateOrConnectWithoutPietanzeInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutPietanzeInput, CategoriaUncheckedCreateWithoutPietanzeInput>
  }

  export type TagCreateWithoutPietanzeInput = {
    id: number
    descrizione: string
    colore: string
    isAllergene?: boolean
  }

  export type TagUncheckedCreateWithoutPietanzeInput = {
    id: number
    descrizione: string
    colore: string
    isAllergene?: boolean
  }

  export type TagCreateOrConnectWithoutPietanzeInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPietanzeInput, TagUncheckedCreateWithoutPietanzeInput>
  }

  export type CrossSellingUpsertWithWhereUniqueWithoutCorrelataByInput = {
    where: CrossSellingWhereUniqueInput
    update: XOR<CrossSellingUpdateWithoutCorrelataByInput, CrossSellingUncheckedUpdateWithoutCorrelataByInput>
    create: XOR<CrossSellingCreateWithoutCorrelataByInput, CrossSellingUncheckedCreateWithoutCorrelataByInput>
  }

  export type CrossSellingUpdateWithWhereUniqueWithoutCorrelataByInput = {
    where: CrossSellingWhereUniqueInput
    data: XOR<CrossSellingUpdateWithoutCorrelataByInput, CrossSellingUncheckedUpdateWithoutCorrelataByInput>
  }

  export type CrossSellingUpdateManyWithWhereWithoutCorrelataByInput = {
    where: CrossSellingScalarWhereInput
    data: XOR<CrossSellingUpdateManyMutationInput, CrossSellingUncheckedUpdateManyWithoutCorrelataByInput>
  }

  export type CrossSellingScalarWhereInput = {
    AND?: CrossSellingScalarWhereInput | CrossSellingScalarWhereInput[]
    OR?: CrossSellingScalarWhereInput[]
    NOT?: CrossSellingScalarWhereInput | CrossSellingScalarWhereInput[]
    correlataId?: IntFilter<"CrossSelling"> | number
    correlataById?: IntFilter<"CrossSelling"> | number
  }

  export type CrossSellingUpsertWithWhereUniqueWithoutCorrelataInput = {
    where: CrossSellingWhereUniqueInput
    update: XOR<CrossSellingUpdateWithoutCorrelataInput, CrossSellingUncheckedUpdateWithoutCorrelataInput>
    create: XOR<CrossSellingCreateWithoutCorrelataInput, CrossSellingUncheckedCreateWithoutCorrelataInput>
  }

  export type CrossSellingUpdateWithWhereUniqueWithoutCorrelataInput = {
    where: CrossSellingWhereUniqueInput
    data: XOR<CrossSellingUpdateWithoutCorrelataInput, CrossSellingUncheckedUpdateWithoutCorrelataInput>
  }

  export type CrossSellingUpdateManyWithWhereWithoutCorrelataInput = {
    where: CrossSellingScalarWhereInput
    data: XOR<CrossSellingUpdateManyMutationInput, CrossSellingUncheckedUpdateManyWithoutCorrelataInput>
  }

  export type CategoriaUpsertWithoutPietanzeInput = {
    update: XOR<CategoriaUpdateWithoutPietanzeInput, CategoriaUncheckedUpdateWithoutPietanzeInput>
    create: XOR<CategoriaCreateWithoutPietanzeInput, CategoriaUncheckedCreateWithoutPietanzeInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutPietanzeInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutPietanzeInput, CategoriaUncheckedUpdateWithoutPietanzeInput>
  }

  export type CategoriaUpdateWithoutPietanzeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    areeCompetenza?: AreaCompetenzaUpdateManyWithoutCategorieNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutPietanzeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    areeCompetenza?: AreaCompetenzaUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutPietanzeInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutPietanzeInput, TagUncheckedUpdateWithoutPietanzeInput>
    create: XOR<TagCreateWithoutPietanzeInput, TagUncheckedCreateWithoutPietanzeInput>
  }

  export type TagUpdateWithWhereUniqueWithoutPietanzeInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutPietanzeInput, TagUncheckedUpdateWithoutPietanzeInput>
  }

  export type TagUpdateManyWithWhereWithoutPietanzeInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutPietanzeInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    descrizione?: StringFilter<"Tag"> | string
    colore?: StringFilter<"Tag"> | string
    isAllergene?: BoolFilter<"Tag"> | boolean
  }

  export type PietanzaCreateWithoutCorrelataByInput = {
    id: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlata?: CrossSellingCreateNestedManyWithoutCorrelataInput
    categoria: CategoriaCreateNestedOneWithoutPietanzeInput
    tag?: TagCreateNestedManyWithoutPietanzeInput
  }

  export type PietanzaUncheckedCreateWithoutCorrelataByInput = {
    id: number
    idCategoriaPietanza: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlata?: CrossSellingUncheckedCreateNestedManyWithoutCorrelataInput
    tag?: TagUncheckedCreateNestedManyWithoutPietanzeInput
  }

  export type PietanzaCreateOrConnectWithoutCorrelataByInput = {
    where: PietanzaWhereUniqueInput
    create: XOR<PietanzaCreateWithoutCorrelataByInput, PietanzaUncheckedCreateWithoutCorrelataByInput>
  }

  export type PietanzaCreateWithoutCorrelataInput = {
    id: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlataBy?: CrossSellingCreateNestedManyWithoutCorrelataByInput
    categoria: CategoriaCreateNestedOneWithoutPietanzeInput
    tag?: TagCreateNestedManyWithoutPietanzeInput
  }

  export type PietanzaUncheckedCreateWithoutCorrelataInput = {
    id: number
    idCategoriaPietanza: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlataBy?: CrossSellingUncheckedCreateNestedManyWithoutCorrelataByInput
    tag?: TagUncheckedCreateNestedManyWithoutPietanzeInput
  }

  export type PietanzaCreateOrConnectWithoutCorrelataInput = {
    where: PietanzaWhereUniqueInput
    create: XOR<PietanzaCreateWithoutCorrelataInput, PietanzaUncheckedCreateWithoutCorrelataInput>
  }

  export type PietanzaUpsertWithoutCorrelataByInput = {
    update: XOR<PietanzaUpdateWithoutCorrelataByInput, PietanzaUncheckedUpdateWithoutCorrelataByInput>
    create: XOR<PietanzaCreateWithoutCorrelataByInput, PietanzaUncheckedCreateWithoutCorrelataByInput>
    where?: PietanzaWhereInput
  }

  export type PietanzaUpdateToOneWithWhereWithoutCorrelataByInput = {
    where?: PietanzaWhereInput
    data: XOR<PietanzaUpdateWithoutCorrelataByInput, PietanzaUncheckedUpdateWithoutCorrelataByInput>
  }

  export type PietanzaUpdateWithoutCorrelataByInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlata?: CrossSellingUpdateManyWithoutCorrelataNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPietanzeNestedInput
    tag?: TagUpdateManyWithoutPietanzeNestedInput
  }

  export type PietanzaUncheckedUpdateWithoutCorrelataByInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoriaPietanza?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlata?: CrossSellingUncheckedUpdateManyWithoutCorrelataNestedInput
    tag?: TagUncheckedUpdateManyWithoutPietanzeNestedInput
  }

  export type PietanzaUpsertWithoutCorrelataInput = {
    update: XOR<PietanzaUpdateWithoutCorrelataInput, PietanzaUncheckedUpdateWithoutCorrelataInput>
    create: XOR<PietanzaCreateWithoutCorrelataInput, PietanzaUncheckedCreateWithoutCorrelataInput>
    where?: PietanzaWhereInput
  }

  export type PietanzaUpdateToOneWithWhereWithoutCorrelataInput = {
    where?: PietanzaWhereInput
    data: XOR<PietanzaUpdateWithoutCorrelataInput, PietanzaUncheckedUpdateWithoutCorrelataInput>
  }

  export type PietanzaUpdateWithoutCorrelataInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlataBy?: CrossSellingUpdateManyWithoutCorrelataByNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPietanzeNestedInput
    tag?: TagUpdateManyWithoutPietanzeNestedInput
  }

  export type PietanzaUncheckedUpdateWithoutCorrelataInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoriaPietanza?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlataBy?: CrossSellingUncheckedUpdateManyWithoutCorrelataByNestedInput
    tag?: TagUncheckedUpdateManyWithoutPietanzeNestedInput
  }

  export type PietanzaCreateWithoutTagInput = {
    id: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlataBy?: CrossSellingCreateNestedManyWithoutCorrelataByInput
    correlata?: CrossSellingCreateNestedManyWithoutCorrelataInput
    categoria: CategoriaCreateNestedOneWithoutPietanzeInput
  }

  export type PietanzaUncheckedCreateWithoutTagInput = {
    id: number
    idCategoriaPietanza: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
    correlataBy?: CrossSellingUncheckedCreateNestedManyWithoutCorrelataByInput
    correlata?: CrossSellingUncheckedCreateNestedManyWithoutCorrelataInput
  }

  export type PietanzaCreateOrConnectWithoutTagInput = {
    where: PietanzaWhereUniqueInput
    create: XOR<PietanzaCreateWithoutTagInput, PietanzaUncheckedCreateWithoutTagInput>
  }

  export type PietanzaUpsertWithWhereUniqueWithoutTagInput = {
    where: PietanzaWhereUniqueInput
    update: XOR<PietanzaUpdateWithoutTagInput, PietanzaUncheckedUpdateWithoutTagInput>
    create: XOR<PietanzaCreateWithoutTagInput, PietanzaUncheckedCreateWithoutTagInput>
  }

  export type PietanzaUpdateWithWhereUniqueWithoutTagInput = {
    where: PietanzaWhereUniqueInput
    data: XOR<PietanzaUpdateWithoutTagInput, PietanzaUncheckedUpdateWithoutTagInput>
  }

  export type PietanzaUpdateManyWithWhereWithoutTagInput = {
    where: PietanzaScalarWhereInput
    data: XOR<PietanzaUpdateManyMutationInput, PietanzaUncheckedUpdateManyWithoutTagInput>
  }

  export type TavoloCreateWithoutPiantinaInput = {
    id?: string
    nome?: string | null
    postiASedere: number
    posizioneX: number
    posizioneY: number
    forma?: string | null
    larghezza: number
    altezza: number
    rotazione?: number | null
  }

  export type TavoloUncheckedCreateWithoutPiantinaInput = {
    id?: string
    nome?: string | null
    postiASedere: number
    posizioneX: number
    posizioneY: number
    forma?: string | null
    larghezza: number
    altezza: number
    rotazione?: number | null
  }

  export type TavoloCreateOrConnectWithoutPiantinaInput = {
    where: TavoloWhereUniqueInput
    create: XOR<TavoloCreateWithoutPiantinaInput, TavoloUncheckedCreateWithoutPiantinaInput>
  }

  export type TavoloCreateManyPiantinaInputEnvelope = {
    data: TavoloCreateManyPiantinaInput | TavoloCreateManyPiantinaInput[]
    skipDuplicates?: boolean
  }

  export type TavoloUpsertWithWhereUniqueWithoutPiantinaInput = {
    where: TavoloWhereUniqueInput
    update: XOR<TavoloUpdateWithoutPiantinaInput, TavoloUncheckedUpdateWithoutPiantinaInput>
    create: XOR<TavoloCreateWithoutPiantinaInput, TavoloUncheckedCreateWithoutPiantinaInput>
  }

  export type TavoloUpdateWithWhereUniqueWithoutPiantinaInput = {
    where: TavoloWhereUniqueInput
    data: XOR<TavoloUpdateWithoutPiantinaInput, TavoloUncheckedUpdateWithoutPiantinaInput>
  }

  export type TavoloUpdateManyWithWhereWithoutPiantinaInput = {
    where: TavoloScalarWhereInput
    data: XOR<TavoloUpdateManyMutationInput, TavoloUncheckedUpdateManyWithoutPiantinaInput>
  }

  export type TavoloScalarWhereInput = {
    AND?: TavoloScalarWhereInput | TavoloScalarWhereInput[]
    OR?: TavoloScalarWhereInput[]
    NOT?: TavoloScalarWhereInput | TavoloScalarWhereInput[]
    id?: StringFilter<"Tavolo"> | string
    piantinaId?: StringFilter<"Tavolo"> | string
    nome?: StringNullableFilter<"Tavolo"> | string | null
    postiASedere?: IntFilter<"Tavolo"> | number
    posizioneX?: FloatFilter<"Tavolo"> | number
    posizioneY?: FloatFilter<"Tavolo"> | number
    forma?: StringNullableFilter<"Tavolo"> | string | null
    larghezza?: FloatFilter<"Tavolo"> | number
    altezza?: FloatFilter<"Tavolo"> | number
    rotazione?: FloatNullableFilter<"Tavolo"> | number | null
  }

  export type PiantinaCreateWithoutTavoliInput = {
    id?: string
    ristoranteId: string
    nome: string
    ordineVisualizzazione: number
  }

  export type PiantinaUncheckedCreateWithoutTavoliInput = {
    id?: string
    ristoranteId: string
    nome: string
    ordineVisualizzazione: number
  }

  export type PiantinaCreateOrConnectWithoutTavoliInput = {
    where: PiantinaWhereUniqueInput
    create: XOR<PiantinaCreateWithoutTavoliInput, PiantinaUncheckedCreateWithoutTavoliInput>
  }

  export type PiantinaUpsertWithoutTavoliInput = {
    update: XOR<PiantinaUpdateWithoutTavoliInput, PiantinaUncheckedUpdateWithoutTavoliInput>
    create: XOR<PiantinaCreateWithoutTavoliInput, PiantinaUncheckedCreateWithoutTavoliInput>
    where?: PiantinaWhereInput
  }

  export type PiantinaUpdateToOneWithWhereWithoutTavoliInput = {
    where?: PiantinaWhereInput
    data: XOR<PiantinaUpdateWithoutTavoliInput, PiantinaUncheckedUpdateWithoutTavoliInput>
  }

  export type PiantinaUpdateWithoutTavoliInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ordineVisualizzazione?: IntFieldUpdateOperationsInput | number
  }

  export type PiantinaUncheckedUpdateWithoutTavoliInput = {
    id?: StringFieldUpdateOperationsInput | string
    ristoranteId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ordineVisualizzazione?: IntFieldUpdateOperationsInput | number
  }

  export type RistoranteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    civico?: NullableStringFieldUpdateOperationsInput | string | null
    citta?: NullableStringFieldUpdateOperationsInput | string | null
    vat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RistoranteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    civico?: NullableStringFieldUpdateOperationsInput | string | null
    citta?: NullableStringFieldUpdateOperationsInput | string | null
    vat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RistoranteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    civico?: NullableStringFieldUpdateOperationsInput | string | null
    citta?: NullableStringFieldUpdateOperationsInput | string | null
    vat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpdateWithoutRistoranteInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bearerToken?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mongoAdress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutRistoranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bearerToken?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mongoAdress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyWithoutRistoranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bearerToken?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mongoAdress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrarioAreaCreateManyAreaInput = {
    id?: number
    giorno: string
    start: Date | string
    end: Date | string
  }

  export type OrarioAreaUpdateWithoutAreaInput = {
    giorno?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrarioAreaUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    giorno?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrarioAreaUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    giorno?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUpdateWithoutAreeCompetenzaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    pietanze?: PietanzaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutAreeCompetenzaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    pietanze?: PietanzaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutAreeCompetenzaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PietanzaCreateManyCategoriaInput = {
    id: number
    descrizioneLingua1: string
    prezzo: number
    isAttiva: boolean
    isVisibileSuSelfOrder: boolean
    ordineTastoPc?: number
    dataCreaz: Date | string
    dataAgg: Date | string
    note?: string | null
    image?: string | null
    descrizioneLingua2?: string | null
    noteLingua2?: string | null
  }

  export type PietanzaUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlataBy?: CrossSellingUpdateManyWithoutCorrelataByNestedInput
    correlata?: CrossSellingUpdateManyWithoutCorrelataNestedInput
    tag?: TagUpdateManyWithoutPietanzeNestedInput
  }

  export type PietanzaUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlataBy?: CrossSellingUncheckedUpdateManyWithoutCorrelataByNestedInput
    correlata?: CrossSellingUncheckedUpdateManyWithoutCorrelataNestedInput
    tag?: TagUncheckedUpdateManyWithoutPietanzeNestedInput
  }

  export type PietanzaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AreaCompetenzaUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
    orari?: OrarioAreaUpdateManyWithoutAreaNestedInput
  }

  export type AreaCompetenzaUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
    orari?: OrarioAreaUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCompetenzaUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    note?: StringFieldUpdateOperationsInput | string
    ordine?: IntFieldUpdateOperationsInput | number
    descrizioneInglese?: NullableStringFieldUpdateOperationsInput | string | null
    noteInglese?: NullableStringFieldUpdateOperationsInput | string | null
    isMenuFisso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CrossSellingCreateManyCorrelataByInput = {
    correlataId: number
  }

  export type CrossSellingCreateManyCorrelataInput = {
    correlataById: number
  }

  export type CrossSellingUpdateWithoutCorrelataByInput = {
    correlata?: PietanzaUpdateOneRequiredWithoutCorrelataNestedInput
  }

  export type CrossSellingUncheckedUpdateWithoutCorrelataByInput = {
    correlataId?: IntFieldUpdateOperationsInput | number
  }

  export type CrossSellingUncheckedUpdateManyWithoutCorrelataByInput = {
    correlataId?: IntFieldUpdateOperationsInput | number
  }

  export type CrossSellingUpdateWithoutCorrelataInput = {
    correlataBy?: PietanzaUpdateOneRequiredWithoutCorrelataByNestedInput
  }

  export type CrossSellingUncheckedUpdateWithoutCorrelataInput = {
    correlataById?: IntFieldUpdateOperationsInput | number
  }

  export type CrossSellingUncheckedUpdateManyWithoutCorrelataInput = {
    correlataById?: IntFieldUpdateOperationsInput | number
  }

  export type TagUpdateWithoutPietanzeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    colore?: StringFieldUpdateOperationsInput | string
    isAllergene?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagUncheckedUpdateWithoutPietanzeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    colore?: StringFieldUpdateOperationsInput | string
    isAllergene?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagUncheckedUpdateManyWithoutPietanzeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizione?: StringFieldUpdateOperationsInput | string
    colore?: StringFieldUpdateOperationsInput | string
    isAllergene?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PietanzaUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlataBy?: CrossSellingUpdateManyWithoutCorrelataByNestedInput
    correlata?: CrossSellingUpdateManyWithoutCorrelataNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPietanzeNestedInput
  }

  export type PietanzaUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoriaPietanza?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    correlataBy?: CrossSellingUncheckedUpdateManyWithoutCorrelataByNestedInput
    correlata?: CrossSellingUncheckedUpdateManyWithoutCorrelataNestedInput
  }

  export type PietanzaUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCategoriaPietanza?: IntFieldUpdateOperationsInput | number
    descrizioneLingua1?: StringFieldUpdateOperationsInput | string
    prezzo?: FloatFieldUpdateOperationsInput | number
    isAttiva?: BoolFieldUpdateOperationsInput | boolean
    isVisibileSuSelfOrder?: BoolFieldUpdateOperationsInput | boolean
    ordineTastoPc?: IntFieldUpdateOperationsInput | number
    dataCreaz?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAgg?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    descrizioneLingua2?: NullableStringFieldUpdateOperationsInput | string | null
    noteLingua2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TavoloCreateManyPiantinaInput = {
    id?: string
    nome?: string | null
    postiASedere: number
    posizioneX: number
    posizioneY: number
    forma?: string | null
    larghezza: number
    altezza: number
    rotazione?: number | null
  }

  export type TavoloUpdateWithoutPiantinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    postiASedere?: IntFieldUpdateOperationsInput | number
    posizioneX?: FloatFieldUpdateOperationsInput | number
    posizioneY?: FloatFieldUpdateOperationsInput | number
    forma?: NullableStringFieldUpdateOperationsInput | string | null
    larghezza?: FloatFieldUpdateOperationsInput | number
    altezza?: FloatFieldUpdateOperationsInput | number
    rotazione?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TavoloUncheckedUpdateWithoutPiantinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    postiASedere?: IntFieldUpdateOperationsInput | number
    posizioneX?: FloatFieldUpdateOperationsInput | number
    posizioneY?: FloatFieldUpdateOperationsInput | number
    forma?: NullableStringFieldUpdateOperationsInput | string | null
    larghezza?: FloatFieldUpdateOperationsInput | number
    altezza?: FloatFieldUpdateOperationsInput | number
    rotazione?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TavoloUncheckedUpdateManyWithoutPiantinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    postiASedere?: IntFieldUpdateOperationsInput | number
    posizioneX?: FloatFieldUpdateOperationsInput | number
    posizioneY?: FloatFieldUpdateOperationsInput | number
    forma?: NullableStringFieldUpdateOperationsInput | string | null
    larghezza?: FloatFieldUpdateOperationsInput | number
    altezza?: FloatFieldUpdateOperationsInput | number
    rotazione?: NullableFloatFieldUpdateOperationsInput | number | null
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
  export const dmmf: runtime.BaseDMMF
}