// https://docs.patreon.com/#get-api-oauth2-v2-campaigns

import { APIMember } from '../../payloads/index';
import { RESTGetAPIResult, RESTGetAPIIncludes, RESTGetAPIIncludesStr } from '../../utils/internals';

export type RESTGetAPIMembersIdStr = RESTGetAPIIncludesStr<APIMember>;
export type RESTGetAPIMembersIdIncludes = RESTGetAPIIncludes<APIMember>; // Only external use

export type RESTGetAPIMembersIdResult = RESTGetAPIResult<APIMember, RESTGetAPIMembersIdIncludes>;
