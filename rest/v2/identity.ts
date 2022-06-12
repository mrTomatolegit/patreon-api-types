// https://docs.patreon.com/#get-api-oauth2-v2-identity

import { APIUser } from '../../payloads/index';
import { RESTGetAPIResult, RESTGetAPIIncludes, RESTGetAPIIncludesStr } from '../../utils/internals';

export type RESTGetAPIIdentityIncludesStr = RESTGetAPIIncludesStr<APIUser>; // Only external use
export type RESTGetAPIIdentityIncludes = RESTGetAPIIncludes<APIUser>;

export type RESTGetAPIIdentityResult = RESTGetAPIResult<APIUser, RESTGetAPIIdentityIncludes>;
