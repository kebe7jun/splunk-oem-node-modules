define({
    "links": {
        "create": "/services/workloads/pools/_new",
        "_reload": "/services/workloads/pools/_reload",
        "_acl": "/services/workloads/pools/_acl"
    },
    "origin": "https://localhost:8000/services/workloads/pools",
    "updated": "2018-05-29T21:31:54-07:00",
    "generator": {
        "build": "0ea84d24e56951390b8d44c703eddfddc2ed241c",
        "version": "20180524"
    },
    "entry": [
        {
            "name": "general",
            "id": "https://localhost:8000/services/workloads/pools/general",
            "updated": "1969-12-31T16:00:00-08:00",
            "links": {
                "alternate": "/services/workloads/pools/general",
                "list": "/services/workloads/pools/general",
                "_reload": "/services/workloads/pools/general/_reload",
                "edit": "/services/workloads/pools/general",
                "remove": "/services/workloads/pools/general",
                "move": "/services/workloads/pools/general/move"
            },
            "author": "system",
            "acl": {
                "app": "",
                "can_list": true,
                "can_write": true,
                "modifiable": false,
                "owner": "system",
                "perms": {
                    "read": [
                        "admin",
                        "splunk-system-role"
                    ],
                    "write": [
                        "admin",
                        "splunk-system-role"
                    ]
                },
                "removable": false,
                "sharing": "system"
            },
            "content": {
                "default_pool": "pool_1",
                "ingest_pool": "pool_1"
            }
        },
        {
            "name": "pool_1",
            "id": "https://localhost:8000/servicesNS/nobody/system/workloads/pools/pool_1",
            "updated": "1969-12-31T16:00:00-08:00",
            "links": {
                "alternate": "/servicesNS/nobody/system/workloads/pools/pool_1",
                "list": "/servicesNS/nobody/system/workloads/pools/pool_1",
                "_reload": "/servicesNS/nobody/system/workloads/pools/pool_1/_reload",
                "edit": "/servicesNS/nobody/system/workloads/pools/pool_1",
                "remove": "/servicesNS/nobody/system/workloads/pools/pool_1",
                "move": "/servicesNS/nobody/system/workloads/pools/pool_1/move"
            },
            "author": "nobody",
            "acl": {
                "app": "system",
                "can_change_perms": true,
                "can_list": true,
                "can_share_app": true,
                "can_share_global": true,
                "can_share_user": false,
                "can_write": true,
                "modifiable": true,
                "owner": "nobody",
                "perms": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "admin"
                    ]
                },
                "removable": true,
                "sharing": "system"
            },
            "content": {
                "cpu_weight": "40",
                "mem_weight": "40"
            }
        }
    ],
    "paging": {
        "total": 2,
        "perPage": 30,
        "offset": 0
    },
    "messages": []
});
