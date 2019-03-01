export default ({
    links: {
        create: '/services/admin/bucketlist/_new',
        _acl: '/services/admin/bucketlist/_acl',
    },
    origin: 'https://localhost:8000/services/admin/bucketlist',
    updated: '2017-06-21T10:43:00-07:00',
    generator: {
        build: '0faa1e4c7350de9f06ede591e0cd9f97c61d162b',
        version: '20170615',
    },
    entry: [{
        name: 'testbucket1',
        id: 'https://localhost:8000/services/admin/bucketlist/testbucket1',
        updated: '1969-12-31T16:00:00-08:00',
        links: {
            alternate: '/services/admin/bucketlist/testbucket1',
            list: '/services/admin/bucketlist/testbucket1',
            edit: '/services/admin/bucketlist/testbucket1',
        },
        author: 'system',
        acl: {
            app: '',
            can_list: true,
            can_write: true,
            modifiable: false,
            owner: 'system',
            perms: {
                read: [
                    '*',
                ],
                write: [
                    '*',
                ],
            },
            removable: false,
            sharing: 'system',
        },
        content: {
            bucketName: 'testbucket1',
            bucketS3Path: 's3.amazonaws.com/splk/testbucket1',
            eai: 'acl:null',
            provider: 'AWS S3',
        },
    }, {
        name: 'testbucket2',
        id: 'https://localhost:8000/services/admin/bucketlist/testbucket2',
        updated: '1969-12-31T16:00:00-08:00',
        links: {
            alternate: '/services/admin/bucketlist/testbucket2',
            list: '/services/admin/bucketlist/testbucket2',
            edit: '/services/admin/bucketlist/testbucket2',
        },
        author: 'system',
        acl: {
            app: '',
            can_list: true,
            can_write: true,
            modifiable: false,
            owner: 'system',
            perms: {
                read: [
                    '*',
                ],
                write: [
                    '*',
                ],
            },
            removable: false,
            sharing: 'system',
        },
        content: {
            bucketName: 'testbucket2',
            bucketS3Path: 's3.amazonaws.com/splk/testbucket2',
            eai: 'acl:null',
            provider: 'AWS S3',
        },
    }],
    paging: {
        total: 2,
        perPage: 18446744073709552000,
        offset: 0,
    },
    messages: [

    ],
});
