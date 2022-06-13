// This is not documented so it's just a guess based on ./members.ts

import { RootObject } from 'include-json-api';
import { RESTGetAPIIncludes } from '../../utils/internals';
import { APIPost } from '../../v2';

export type WebhookPostTriggerPosts = RootObject & {
    data: APIPost;
    included: RESTGetAPIIncludes<APIPost>[];
    links: {
        self: string;
    };
};

export type WebhookPostTriggerPostsCreate = WebhookPostTriggerPosts;

export type WebhookPostTriggerPostsDelete = WebhookPostTriggerPosts;

export type WebhookPostTriggerPostsUpdate = WebhookPostTriggerPosts;
