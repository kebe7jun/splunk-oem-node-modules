define({
    "links": {
        "create": "/services/workloads/rules/_new",
        "_reload": "/services/workloads/rules/_reload",
        "_acl": "/services/workloads/rules/_acl"
    },
    "origin": "https://localhost:8000/services/workloads/rules",
    "updated": "2018-05-29T22:02:31-07:00",
    "generator": {
        "build": "0ea84d24e56951390b8d44c703eddfddc2ed241c",
        "version": "20180524"
    },
    "entry": [
        {
            "name": "app_itsi_rule",
            "id": "https://localhost:8000/servicesNS/nobody/system/workloads/rules/app_itsi_rule",
            "updated": "1969-12-31T16:00:00-08:00",
            "links": {
                "alternate": "/servicesNS/nobody/system/workloads/rules/app_itsi_rule",
                "list": "/servicesNS/nobody/system/workloads/rules/app_itsi_rule",
                "_reload": "/servicesNS/nobody/system/workloads/rules/app_itsi_rule/_reload",
                "edit": "/servicesNS/nobody/system/workloads/rules/app_itsi_rule",
                "remove": "/servicesNS/nobody/system/workloads/rules/app_itsi_rule",
                "move": "/servicesNS/nobody/system/workloads/rules/app_itsi_rule/move"
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
                "order": 1,
                "predicate_key": "itsi",
                "predicate_type": "app",
                "workload_pool": "pool_1"
            }
        },
        {
            "name": "role_analyst_rule",
            "id": "https://localhost:8000/servicesNS/nobody/system/workloads/rules/role_analyst_rule",
            "updated": "1969-12-31T16:00:00-08:00",
            "links": {
                "alternate": "/servicesNS/nobody/system/workloads/rules/role_analyst_rule",
                "list": "/servicesNS/nobody/system/workloads/rules/role_analyst_rule",
                "_reload": "/servicesNS/nobody/system/workloads/rules/role_analyst_rule/_reload",
                "edit": "/servicesNS/nobody/system/workloads/rules/role_analyst_rule",
                "remove": "/servicesNS/nobody/system/workloads/rules/role_analyst_rule",
                "move": "/servicesNS/nobody/system/workloads/rules/role_analyst_rule/move"
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
                "order": 2,
                "predicate_key": "analyst",
                "predicate_type": "role",
                "workload_pool": "pool_1"
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
