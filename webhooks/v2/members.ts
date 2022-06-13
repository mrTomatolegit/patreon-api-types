import { RootObject } from 'include-json-api';
import { RESTGetAPIIncludes } from '../../utils/internals';
import { APIMember } from '../../v2';

export type WebhookPostTriggerMembers = RootObject & {
    data: APIMember;
    included: RESTGetAPIIncludes<APIMember>[];
    links: {
        self: string;
    };
};

export type WebhookPostTriggerMembersCreate = WebhookPostTriggerMembers;

export type WebhookPostTriggerMembersDelete = WebhookPostTriggerMembers;

export type WebhookPostTriggerMembersUpdate = WebhookPostTriggerMembers;

export type WebhookPostTriggerMembersPledgeCreate = WebhookPostTriggerMembers;

export type WebhookPostTriggerMembersPledgeDelete = WebhookPostTriggerMembers;

export type WebhookPostTriggerMembersPledgeUpdate = WebhookPostTriggerMembers;
