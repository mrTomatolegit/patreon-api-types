// https://docs.patreon.com/#get-api-oauth2-v2-campaigns

import { APICampaign, APIMember, APIPost } from '../../payloads/index';
import { RESTGetAPIResult, RESTGetAPIIncludes, RESTGetAPIIncludesStr } from '../../utils/internals';

export type RESTGetAPICampaignsIncludesStr = RESTGetAPIIncludesStr<APICampaign>; // Only external use
export type RESTGetAPICampaignsIncludes = RESTGetAPIIncludes<APICampaign>;

export type RESTGetAPICampaignsResult = RESTGetAPIResult<
    APICampaign[],
    RESTGetAPICampaignsIncludes
>;

export type RESTGetAPICampaignsIdResult = RESTGetAPIResult<
    APICampaign,
    RESTGetAPICampaignsIncludes
>;

export type RESTGetAPICampaignsIdMembersIncludesStr = RESTGetAPIIncludesStr<APIMember>;
export type RESTGetAPICampaignsIdMembersIncludes = RESTGetAPIIncludes<APIMember>;

export type RESTGetAPICampaignsIdMembersResult = RESTGetAPIResult<
    APIMember[],
    RESTGetAPICampaignsIdMembersIncludes
>;

export type RESTGetAPICampaignsIdPostsIncludesStr = RESTGetAPIIncludesStr<APIPost>;
export type RESTGetAPICampaignsIdPostsIncludes = RESTGetAPIIncludes<APIPost>;

export type RESTGetAPICampaignsIdPostsResult = RESTGetAPIResult<
    APIPost[],
    RESTGetAPICampaignsIdPostsIncludes
>;
