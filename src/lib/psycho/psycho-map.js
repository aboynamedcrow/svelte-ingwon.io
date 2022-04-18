import { readable,writable } from 'svelte/store';

    export const site_card_mapping = readable([
        {section: '/about', whose_card: 'patrick-alt-card'},
        {section: '/input', whose_card: 'van-patten-card'},
        {section: '/output', whose_card: 'bryce-card'},
        {section: '/contact', whose_card: 'allen-card'},
        {section: '/resume', whose_card: 'ingwon-card'},
        {section: '/', whose_card: 'patrick-card'}
    ]);

    export const whose_card = writable("patrick-card");
    export const first_name = writable("Patrick");
    export const last_name = writable("Bateman");
    export const company = writable("Pierce & Pierce");
    export const title = writable("Vice President");
    export const phone_number = writable("212 555 6342");
    export const bottom_info = writable("358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534");
    export const murders_and_executions = writable("Mergers And Acquisitions");
    export const watermark = writable("");

    export const card_values = readable([
        {whose_card: 'patrick-card',
        first_name: 'Patrick',
        last_name: 'Bateman',
        company: 'Pierce & Pierce',
        title: 'Vice President',
        phone_number: '212 555 6342',
        bottom_info: '358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534',
        murders_and_executions: 'Mergers And Acquisitions',
        watermark: ''},

        {whose_card: 'patrick-alt-card',
        first_name: 'Patrick',
        last_name: 'Bateman',
        company: 'Pierce & Pierce',
        title: 'Vice President',
        phone_number: '212 555 6342',
        bottom_info: '358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534',
        murders_and_executions: 'Murders And Executions',
        watermark: ''},

        {whose_card: 'van-patten-card',
        first_name: 'David',
        last_name: 'Van Patten',
        company: 'Pierce & Pierce',
        title: 'Vice President',
        phone_number: '212 555 6342',
        bottom_info: '358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534',
        murders_and_executions: 'Mergers And Acquisitions',
        watermark: ''},

        {whose_card: 'bryce-card',
        first_name: 'Timothy',
        last_name: 'Bryce',
        company: 'Pierce & Pierce',
        title: 'Vice President',
        phone_number: '212 555 6342',
        bottom_info: '358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534',
        murders_and_executions: 'Mergers And Acquisitions',
        watermark: ''},

        {whose_card: 'allen-card',
        first_name: 'Paul',
        last_name: 'Allen',
        company: 'Pierce & Pierce',
        title: 'Vice President',
        phone_number: '212 555 6342',
        bottom_info: '358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534',
        murders_and_executions: 'Mergers And Acquisitions',
        watermark: 'Paul Allen'},

        {whose_card: 'ingwon-card',
        first_name: 'Ingwon',
        last_name: 'Chae',
        company: 'Gringotts',
        title: 'Builder\n& Occasional Troll',
        phone_number: '+1 617 758 9124',
        bottom_info: '224 Wythe Ave Brooklyn, N.Y. 11249 EMAIL ingwon@gmail.com',
        murders_and_executions: 'Wizarding Bank',
        watermark: ''}

    ]);

