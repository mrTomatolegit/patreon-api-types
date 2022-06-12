// https://docs.patreon.com/#get-api-oauth2-v2-campaigns

import { APIPost } from '../../payloads/index';
import { RESTGetAPIIncludes, RESTGetAPIIncludesStr, RESTGetAPIResult } from '../../utils/internals';

export type RESTGetAPIPostsIdIncludesStr = RESTGetAPIIncludesStr<APIPost>; // Only external use
export type RESTGetAPIPostsIdIncludes = RESTGetAPIIncludes<APIPost>;

export type RESTGetAPIPostsIdResult = RESTGetAPIResult<APIPost, RESTGetAPIPostsIdIncludes>;
