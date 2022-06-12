// https://docs.patreon.com/#get-api-oauth2-v2-campaigns

import { APIWebhook, APIWebhookTrigger } from '../../payloads/index';
import { RESTGetAPIIncludes, RESTGetAPIIncludesStr, RESTGetAPIResult } from '../../utils/internals';

export type RESTGetAPIWebhooksIncludesStr = RESTGetAPIIncludesStr<APIWebhook>; // Only external use
export type RESTGetAPIWebhooksIncludes = RESTGetAPIIncludes<APIWebhook>;

export type RESTGetAPIWebhooksResult = RESTGetAPIResult<APIWebhook, RESTGetAPIWebhooksIncludes>;

export type RESTPostAPIWebhookJSONBody = {
    data: {
        type: 'webhook';
        attributes: {
            triggers?: APIWebhookTrigger[];
            uri: string;
        };
        relationships: {
            campaign: {
                data: {
                    type: 'campaign';
                    id: string;
                };
            };
        };
    };
};

export type RESTPostAPIWebhookResult = {
    data: APIWebhook;
    links: {
        self: string;
    };
};

export type RESTPatchAPIWebhookJSONBody = {
    data: {
        type: 'webhook';
        attributes: {
            paused?: false;
            triggers?: APIWebhookTrigger[];
            uri?: string;
        };
    };
};

export type RESTPatchAPIWebhookResult = {
    data: APIWebhook;
    links: {
        self: string;
    };
};
