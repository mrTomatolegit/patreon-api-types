// https://docs.patreon.com/#address

import { ResourceObject } from 'include-json-api';
import { APICampaign } from './campaign';
import { APIUser } from './user';

export interface APIAddress extends ResourceObject {
    type: 'address';
    attributes: {
        /**
         * Full recipient name.
         */
        addressee: string | null;
        /**
         * City.
         */
        city: string;
        /**
         * Country.
         */
        country: string;
        /**
         * Datetime address was first created.
         * UTC ISO format
         */
        created_at: string;
        /**
         * First line of street address.
         */
        line_1: string | null;
        /**
         * Second line of street address.
         */
        line_2: string | null;
        /**
         * Telephone number. Specified for non-US addresses.
         */
        phone_number: string | null;
        /**
         * Postal or zip code.
         */
        postal_code: string | null;
        /**
         * State or province name.
         */
        state: string | null;
    };
    relationships: {
        campaigns: { data: APICampaign[] };
        user: { data: APIUser };
    };
}
