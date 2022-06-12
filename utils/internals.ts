import { ResourceObject, RootObject } from 'include-json-api';

export type AtLeast<T, K extends keyof T> = RecursivePartial<T> & Pick<T, K>;

export type Unpacked<T> = T extends (infer U)[] ? U : T;

export type MinResource<T extends ResourceObject | ResourceObject[]> = T extends (infer U)[]
    ? // AtLeast<U, 'id' | 'type'>[] // Not using this because prettier doesn't like it
      U extends ResourceObject
        ? AtLeast<U, 'id' | 'type'>[]
        : never
    : AtLeast<Unpacked<T>, 'id' | 'type'>;

export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
};

export type PaginatedResult<T> = T & {
    links: {
        next?: string;
    };
    meta: {
        pagination: {
            cursors?: {
                next?: string;
            };
            total: number;
        };
    };
};

type RESTGetAPIResultCrude<
    R extends ResourceObject | ResourceObject[],
    I extends ResourceObject
> = RootObject & {
    data?: MinResource<R>;
    included?: MinResource<I>[];
    links?: {
        self: string;
    };
};

export type RESTGetAPIResult<
    R extends ResourceObject | ResourceObject[],
    I extends ResourceObject
> = R extends (ResourceObject)[]
    ? PaginatedResult<RESTGetAPIResultCrude<R, I>>
    : RESTGetAPIResultCrude<R, I>;

// The two following types resolve the Top Level includes from the resource's relationships
export type RESTGetAPIIncludesStr<T extends ResourceObject> = keyof T['relationships'];
export type RESTGetAPIIncludes<T extends ResourceObject> = NonNullable<
    Unpacked<
        T['relationships'][RESTGetAPIIncludesStr<T>][keyof T['relationships'][RESTGetAPIIncludesStr<T>]]
    >
>;
