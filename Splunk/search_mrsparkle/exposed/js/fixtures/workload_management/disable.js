define({
    "links": {
        "create": "/services/workloads/config/_new",
        "_reload": "/services/workloads/config/_reload",
        "_acl": "/services/workloads/config/_acl"
    },
    "origin": "https://localhost:8000/services/workloads/config",
    "updated": "2018-05-29T21:31:54-07:00",
    "generator": {
        "build": "0ea84d24e56951390b8d44c703eddfddc2ed241c",
        "version": "20180524"
    },
    "entry": [
        {
            "name": "disable",
            "id": "https://localhost:8000/services/workloads/config/disable",
            "updated": "1969-12-31T16:00:00-08:00",
            "links": {
                "alternate": "/services/workloads/config/disable",
                "list": "/services/workloads/config/disable",
                "_reload": "/services/workloads/config/disable/_reload",
                "edit": "/services/workloads/config/disable",
                "remove": "/services/workloads/config/disable",
                "move": "/services/workloads/config/disable/move"
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
            }
        },
        {
            "disabled": true
        }
    ],
    "paging": {
        "total": 2,
        "perPage": 30,
        "offset": 0
    },
    "messages": []
});
