// https://docs.patreon.com/#user-v2

import { ResourceObject } from 'include-json-api';
import { APICampaign } from './campaign';
import { APIMember } from './member';

export interface APIUser extends ResourceObject {
    type: 'user';
    attributes: {
        /**
         * The user's about text, which appears on their profile.
         */
        about: string | null;
        /**
         * `true` if this user can view nsfw content.
         */
        can_see_nsfw: boolean | null;
        /**
         * Datetime of this user's account creation.
         * UTC ISO format
         */
        created: string;
        /**
         * The user's email address. Requires certain scopes to access. See the scopes section of this documentation.
         */
        email: string | null;
        /**
         * First name.
         */
        first_name: string | null;
        /**
         * Combined first and last name.
         */
        full_name: string;
        /**
         * `true` if the user has chosen to keep private which creators they pledge to.
         */
        hide_pledges: boolean | null;
        /**
         * The user's profile picture URL, scaled to width 400px.
         */
        image_url: string;
        /**
         * `true` if the user has confirmed their email.
         */
        is_email_verified: boolean;
        /**
         * Last name.
         */
        last_name: string | null;
        /**
         * How many posts this user has liked.
         */
        like_count: number;
        /**
         * Mapping from user's connected app names to external user id on the respective app.
         */
        social_connections: {
            deviantart: unknown;
            discord: {
                scopes: string[];
                url: unknown;
                user_id: string;
            };
            facebook: unknown;
            google: unknown;
            instagram: unknown;
            reddit: unknown;
            spotify: unknown;
            twitch: unknown;
            twitter: unknown;
            vimeo: unknown;
            youtube: unknown;
        };
        /**
         * The user's profile picture URL, scaled to a square of size 100x100px.
         */
        thumb_url: string;
        /**
         * URL of this user's creator or patron profile.
         */
        url: string;
        /**
         * The public "username" of the user. patreon.com/ goes to this user's creator page. Non-creator users might not have a vanity.
         * @deprecated use campaign.vanity
         */
        vanity: string | null;
    };
    relationships: {
        campaign: { data: APICampaign };
        /**
         * Usually a zero or one-element array with the user's membership to the token creator's campaign, if they are a member. With the `identity.memberships` scope, this returns memberships to ALL campaigns the user is a member of.
         */
        memberships: { data: APIMember[] };
    };
}
