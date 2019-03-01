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
            "name": "enable",
            "id": "https://localhost:8000/services/workloads/config/enable",
            "updated": "1969-12-31T16:00:00-08:00",
            "links": {
                "alternate": "/services/workloads/config/enable",
                "list": "/services/workloads/config/enable",
                "_reload": "/services/workloads/config/enable/_reload",
                "edit": "/services/workloads/config/enable",
                "remove": "/services/workloads/config/enable",
                "move": "/services/workloads/config/enable/move"
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
        },{
            "enabled": true
        }
    ],
    "paging": {
        "total": 2,
        "perPage": 30,
        "offset": 0
    },
    "messages": []
});
