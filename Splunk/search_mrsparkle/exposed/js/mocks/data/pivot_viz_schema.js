define(function() {
    var _ = function(str) { return { t: function() { return str; } }; };

    var GAUGE_COLORS = [
        "#53a051",
        "#006d9c",
        "#f8be34",
        "#f1813f",
        "#dc4e41",
        "#ffffff",
        "#3c444d"
    ];

    var EXPECTED_SCHEMA = {

        statsTable: {
            id: 'statistics',
            icon: 'table',
            label: 'Statistics Table',
            requiresIndexTime: false
        },

        column: {
            "id": "column",
            "icon": "chart-column",
            "label": "Column Chart",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showRowSummary": "false",
                "showColSummary": "false"
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "elementType": "row",
                    "title": "X-Axis",
                    "maxLength": 1,
                    "required": true,
                    "id": "xaxis",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": true
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitSortControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row",
                                "label": "Max Columns"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row",
                                "label": "Max Columns"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.rotation',
                            label: _('Label Rotation').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: '-90',
                                        icon: 'label-rotation--90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-90&deg;'
                                    },
                                    {
                                        value: '-45',
                                        icon: 'label-rotation--45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-45&deg;'
                                    },
                                    {
                                        value: '0',
                                        icon: 'label-rotation-0',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '0&deg;'
                                    },
                                    {
                                        value: '45',
                                        icon: 'label-rotation-45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '45&deg;'
                                    },
                                    {
                                        value: '90',
                                        icon: 'label-rotation-90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '90&deg;'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.overflowMode',
                            label: _('Label Truncation').t(),
                            defaultValue: 'ellipsisNone',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Yes').t(),
                                        value: 'ellipsisMiddle'
                                    },
                                    {
                                        label: _('No').t(),
                                        value: 'ellipsisNone'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "Y-Axis",
                    "maxLength": 1,
                    "required": true,
                    "id": "yaxis",
                    "outputType": "metric",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": false
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisY.scale',
                            label: _('Scale').t(),
                            defaultValue: 'linear',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Linear").t(),
                                        value: 'linear'
                                    },
                                    {
                                        label: _("Log").t(),
                                        value: 'log'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.layout.splitSeries.allowIndependentYRanges',
                            label: _('Axis range').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/BooleanRadioControl',
                            controlOptions: {
                                trueLabel: _("Independent").t(),
                                falseLabel: _("Uniform").t(),
                                additionalClassNames: 'locale-responsive-layout',
                                reversed: true
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsY.majorUnit',
                            label: _('Interval').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.minimumNumber',
                            label: _('Min Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.maximumNumber',
                            label: _('Max Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.abbreviation',
                            label: _('Number Abbreviations').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'auto'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "column",
                    "title": "Color",
                    "maxLength": 1,
                    "id": "color",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "column",
                                "label": "Max Colors"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "column",
                                "label": "Max Colors"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.legend.placement',
                            label: _('Legend Position').t(),
                            defaultValue: 'right',
                            control: 'views/shared/controls/SyntheticSelectControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Right').t(),
                                        value: 'right'
                                    },
                                    {
                                        label: _('Bottom').t(),
                                        value: 'bottom'
                                    },
                                    {
                                        label: _('Left').t(),
                                        value: 'left'
                                    },
                                    {
                                        label: _('Top').t(),
                                        value: 'top'
                                    },
                                    {
                                        label: _('None').t(),
                                        value: 'none'
                                    }
                                ],
                                toggleClassName: 'btn',
                                menuWidth: 'narrow'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.legend.labelStyle.overflowMode',
                            label: _('Legend Truncation').t(),
                            defaultValue: 'ellipsisMiddle',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('A...').t(),
                                        value: 'ellipsisEnd',
                                        tooltip: _('Truncate End').t()
                                    },
                                    {
                                        label: _('A...Z').t(),
                                        value: 'ellipsisMiddle',
                                        tooltip: _('Truncate Middle').t()
                                    },
                                    {
                                        label: _('...Z').t(),
                                        value: 'ellipsisStart',
                                        tooltip: _('Truncate Start').t()
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "title": "General",
                    "id": "general",
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.stackMode',
                            label: _('Stack Mode').t(),
                            defaultValue: 'default',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: 'default',
                                        icon: 'bar-beside',
                                        tooltip: _('not stacked').t()
                                    },
                                    {
                                        value: 'stacked',
                                        icon: 'bar-stacked',
                                        tooltip: _('stacked').t()
                                    },
                                    {
                                        value: 'stacked100',
                                        icon: 'bar-stacked-100',
                                        tooltip: _('stacked 100%').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.layout.splitSeries',
                            label: _('Multi-series Mode').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/BooleanRadioControl'
                        },
                        {
                            name: 'display.visualizations.charting.chart.showDataLabels',
                            label: _('Show Data Values').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'all'
                                    },
                                    {
                                        label: _('Min/Max').t(),
                                        value: 'minmax'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        bar: {
            "id": "bar",
            "icon": "chart-bar",
            "label": "Bar Chart",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showRowSummary": "false",
                "showColSummary": "false"
            },
           "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "elementType": "row",
                    "title": "X-Axis",
                    "description": "X-Axis (Bars)",
                    "maxLength": 1,
                    "required": true,
                    "id": "xaxis",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": true
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitSortControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row",
                                "label": "Max Bars"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row",
                                "label": "Max Bars"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "Y-Axis",
                    "description": "Y-Axis (Bar Width)",
                    "maxLength": 1,
                    "required": true,
                    "id": "yaxis",
                    "outputType": "metric",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": false
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisY.scale',
                            label: _('Scale').t(),
                            defaultValue: 'linear',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Linear").t(),
                                        value: 'linear'
                                    },
                                    {
                                        label: _("Log").t(),
                                        value: 'log'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.layout.splitSeries.allowIndependentYRanges',
                            label: _('Axis range').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/BooleanRadioControl',
                            controlOptions: {
                                trueLabel: _("Independent").t(),
                                falseLabel: _("Uniform").t(),
                                additionalClassNames: 'locale-responsive-layout',
                                reversed: true
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsY.majorUnit',
                            label: _('Interval').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.minimumNumber',
                            label: _('Min Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.maximumNumber',
                            label: _('Max Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.abbreviation',
                            label: _('Number Abbreviations').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'auto'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "column",
                    "title": "Color",
                    "maxLength": 1,
                    "id": "color",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "column",
                                "label": "Max Colors"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "column",
                                "label": "Max Colors"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.legend.placement',
                            label: _('Legend Position').t(),
                            defaultValue: 'right',
                            control: 'views/shared/controls/SyntheticSelectControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Right').t(),
                                        value: 'right'
                                    },
                                    {
                                        label: _('Bottom').t(),
                                        value: 'bottom'
                                    },
                                    {
                                        label: _('Left').t(),
                                        value: 'left'
                                    },
                                    {
                                        label: _('Top').t(),
                                        value: 'top'
                                    },
                                    {
                                        label: _('None').t(),
                                        value: 'none'
                                    }
                                ],
                                toggleClassName: 'btn',
                                menuWidth: 'narrow'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.legend.labelStyle.overflowMode',
                            label: _('Legend Truncation').t(),
                            defaultValue: 'ellipsisMiddle',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('A...').t(),
                                        value: 'ellipsisEnd',
                                        tooltip: _('Truncate End').t()
                                    },
                                    {
                                        label: _('A...Z').t(),
                                        value: 'ellipsisMiddle',
                                        tooltip: _('Truncate Middle').t()
                                    },
                                    {
                                        label: _('...Z').t(),
                                        value: 'ellipsisStart',
                                        tooltip: _('Truncate Start').t()
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "title": "General",
                    "id": "general",
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.stackMode',
                            label: _('Stack Mode').t(),
                            defaultValue: 'default',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: 'default',
                                        icon: 'bar-beside',
                                        tooltip: _('not stacked').t()
                                    },
                                    {
                                        value: 'stacked',
                                        icon: 'bar-stacked',
                                        tooltip: _('stacked').t()
                                    },
                                    {
                                        value: 'stacked100',
                                        icon: 'bar-stacked-100',
                                        tooltip: _('stacked 100%').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.layout.splitSeries',
                            label: _('Multi-series Mode').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/BooleanRadioControl'
                        },
                        {
                            name: 'display.visualizations.charting.chart.showDataLabels',
                            label: _('Show Data Values').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'all'
                                    },
                                    {
                                        label: _('Min/Max').t(),
                                        value: 'minmax'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        area: {
            "id": "area",
            "icon": "chart-area",
            "label": "Area Chart",
            "requiresIndexTime": true,
            "reportLevelAttributes": {
                "showRowSummary": "false",
                "showColSummary": "false"
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "elementType": "row",
                    "title": "X-Axis",
                    "description": "X-Axis (Time)",
                    "maxLength": 1,
                    "required": true,
                    "id": "xaxis",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": true
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitSortControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.rotation',
                            label: _('Label Rotation').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: '-90',
                                        icon: 'label-rotation--90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-90&deg;'
                                    },
                                    {
                                        value: '-45',
                                        icon: 'label-rotation--45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-45&deg;'
                                    },
                                    {
                                        value: '0',
                                        icon: 'label-rotation-0',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '0&deg;'
                                    },
                                    {
                                        value: '45',
                                        icon: 'label-rotation-45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '45&deg;'
                                    },
                                    {
                                        value: '90',
                                        icon: 'label-rotation-90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '90&deg;'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.overflowMode',
                            label: _('Label Truncation').t(),
                            defaultValue: 'ellipsisNone',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Yes').t(),
                                        value: 'ellipsisMiddle'
                                    },
                                    {
                                        label: _('No').t(),
                                        value: 'ellipsisNone'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "Y-Axis",
                    "maxLength": 1,
                    "required": true,
                    "id": "yaxis",
                    "outputType": "metric",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": false
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisY.scale',
                            label: _('Scale').t(),
                            defaultValue: 'linear',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Linear").t(),
                                        value: 'linear'
                                    },
                                    {
                                        label: _("Log").t(),
                                        value: 'log'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.layout.splitSeries.allowIndependentYRanges',
                            label: _('Axis range').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/BooleanRadioControl',
                            controlOptions: {
                                trueLabel: _("Independent").t(),
                                falseLabel: _("Uniform").t(),
                                additionalClassNames: 'locale-responsive-layout',
                                reversed: true
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsY.majorUnit',
                            label: _('Interval').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.minimumNumber',
                            label: _('Min Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.maximumNumber',
                            label: _('Max Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.abbreviation',
                            label: _('Number Abbreviations').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'auto'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "column",
                    "title": "Color",
                    "description": "Color (Areas)",
                    "maxLength": 1,
                    "id": "color",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "column",
                                "label": "Max Areas"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "column",
                                "label": "Max Areas"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.legend.placement',
                            label: _('Legend Position').t(),
                            defaultValue: 'right',
                            control: 'views/shared/controls/SyntheticSelectControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Right').t(),
                                        value: 'right'
                                    },
                                    {
                                        label: _('Bottom').t(),
                                        value: 'bottom'
                                    },
                                    {
                                        label: _('Left').t(),
                                        value: 'left'
                                    },
                                    {
                                        label: _('Top').t(),
                                        value: 'top'
                                    },
                                    {
                                        label: _('None').t(),
                                        value: 'none'
                                    }
                                ],
                                toggleClassName: 'btn',
                                menuWidth: 'narrow'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'static-legend-placement',
                            label: _('Legend Position').t(),
                            defaultValue: _('Right').t(),
                            control: 'views/shared/controls/LabelControl',
                            controlOptions: {},
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.legend.labelStyle.overflowMode',
                            label: _('Legend Truncation').t(),
                            defaultValue: 'ellipsisMiddle',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('A...').t(),
                                        value: 'ellipsisEnd',
                                        tooltip: _('Truncate End').t()
                                    },
                                    {
                                        label: _('A...Z').t(),
                                        value: 'ellipsisMiddle',
                                        tooltip: _('Truncate Middle').t()
                                    },
                                    {
                                        label: _('...Z').t(),
                                        value: 'ellipsisStart',
                                        tooltip: _('Truncate Start').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.legend.mode',
                            label: _('Compare Series').t(),
                            defaultValue: 'standard',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Off").t(),
                                        value: 'standard'
                                    },
                                    {
                                        label: _("On").t(),
                                        value: 'seriesCompare'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "title": "General",
                    "id": "general",
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.stackMode',
                            label: _('Stack Mode').t(),
                            defaultValue: 'default',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: 'default',
                                        icon: 'bar-beside',
                                        tooltip: _('not stacked').t()
                                    },
                                    {
                                        value: 'stacked',
                                        icon: 'bar-stacked',
                                        tooltip: _('stacked').t()
                                    },
                                    {
                                        value: 'stacked100',
                                        icon: 'bar-stacked-100',
                                        tooltip: _('stacked 100%').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.chart.nullValueMode',
                            label: _('Null Values').t(),
                            defaultValue: 'gaps',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: 'gaps',
                                        icon: 'missing-value-skipped',
                                        tooltip: _('Gaps').t()
                                    },
                                    {
                                        value: 'zero',
                                        icon: 'missing-value-zero',
                                        tooltip: _('Zero').t()
                                    },
                                    {
                                        value: 'connect',
                                        icon: 'missing-value-join',
                                        tooltip: _('Connect').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.layout.splitSeries',
                            label: _('Multi-series Mode').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/BooleanRadioControl'
                        },
                        {
                            name: 'display.visualizations.charting.chart.showDataLabels',
                            label: _('Show Data Values').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'all'
                                    },
                                    {
                                        label: _('Min/Max').t(),
                                        value: 'minmax'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        line: {
            "id": "line",
            "icon": "chart-line",
            "label": "Line Chart",
            "requiresIndexTime": true,
            "reportLevelAttributes": {
                "showRowSummary": "false",
                "showColSummary": "false"
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "elementType": "row",
                    "title": "X-Axis",
                    "description": "X-Axis (Time)",
                    "maxLength": 1,
                    "required": true,
                    "id": "xaxis",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": true
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitSortControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.rotation',
                            label: _('Label Rotation').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: '-90',
                                        icon: 'label-rotation--90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-90&deg;'
                                    },
                                    {
                                        value: '-45',
                                        icon: 'label-rotation--45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-45&deg;'
                                    },
                                    {
                                        value: '0',
                                        icon: 'label-rotation-0',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '0&deg;'
                                    },
                                    {
                                        value: '45',
                                        icon: 'label-rotation-45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '45&deg;'
                                    },
                                    {
                                        value: '90',
                                        icon: 'label-rotation-90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '90&deg;'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.overflowMode',
                            label: _('Label Truncation').t(),
                            defaultValue: 'ellipsisNone',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Yes').t(),
                                        value: 'ellipsisMiddle'
                                    },
                                    {
                                        label: _('No').t(),
                                        value: 'ellipsisNone'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "Y-Axis",
                    "maxLength": 1,
                    "required": true,
                    "id": "yaxis",
                    "outputType": "metric",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": false
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisY.scale',
                            label: _('Scale').t(),
                            defaultValue: 'linear',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Linear").t(),
                                        value: 'linear'
                                    },
                                    {
                                        label: _("Log").t(),
                                        value: 'log'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.layout.splitSeries.allowIndependentYRanges',
                            label: _('Axis range').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/BooleanRadioControl',
                            controlOptions: {
                                trueLabel: _("Independent").t(),
                                falseLabel: _("Uniform").t(),
                                additionalClassNames: 'locale-responsive-layout',
                                reversed: true
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsY.majorUnit',
                            label: _('Interval').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.minimumNumber',
                            label: _('Min Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.maximumNumber',
                            label: _('Max Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.abbreviation',
                            label: _('Number Abbreviations').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'auto'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "column",
                    "title": "Color",
                    "description": "Color (Lines)",
                    "maxLength": 1,
                    "id": "color",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "column",
                                "label": "Max Lines"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "column",
                                "label": "Max Lines"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.legend.placement',
                            label: _('Legend Position').t(),
                            defaultValue: 'right',
                            control: 'views/shared/controls/SyntheticSelectControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Right').t(),
                                        value: 'right'
                                    },
                                    {
                                        label: _('Bottom').t(),
                                        value: 'bottom'
                                    },
                                    {
                                        label: _('Left').t(),
                                        value: 'left'
                                    },
                                    {
                                        label: _('Top').t(),
                                        value: 'top'
                                    },
                                    {
                                        label: _('None').t(),
                                        value: 'none'
                                    }
                                ],
                                toggleClassName: 'btn',
                                menuWidth: 'narrow'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'static-legend-placement',
                            label: _('Legend Position').t(),
                            defaultValue: _('Right').t(),
                            control: 'views/shared/controls/LabelControl',
                            controlOptions: {},
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.legend.labelStyle.overflowMode',
                            label: _('Legend Truncation').t(),
                            defaultValue: 'ellipsisMiddle',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('A...').t(),
                                        value: 'ellipsisEnd',
                                        tooltip: _('Truncate End').t()
                                    },
                                    {
                                        label: _('A...Z').t(),
                                        value: 'ellipsisMiddle',
                                        tooltip: _('Truncate Middle').t()
                                    },
                                    {
                                        label: _('...Z').t(),
                                        value: 'ellipsisStart',
                                        tooltip: _('Truncate Start').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.legend.mode',
                            label: _('Compare Series').t(),
                            defaultValue: 'standard',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Off").t(),
                                        value: 'standard'
                                    },
                                    {
                                        label: _("On").t(),
                                        value: 'seriesCompare'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "title": "General",
                    "id": "general",
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.nullValueMode',
                            label: _('Null Values').t(),
                            defaultValue: 'gaps',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: 'gaps',
                                        icon: 'missing-value-skipped',
                                        tooltip: _('Gaps').t()
                                    },
                                    {
                                        value: 'zero',
                                        icon: 'missing-value-zero',
                                        tooltip: _('Zero').t()
                                    },
                                    {
                                        value: 'connect',
                                        icon: 'missing-value-join',
                                        tooltip: _('Connect').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.layout.splitSeries',
                            label: _('Multi-series Mode').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/BooleanRadioControl'
                        },
                        {
                            name: 'display.visualizations.charting.chart.showDataLabels',
                            label: _('Show Data Values').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'all'
                                    },
                                    {
                                        label: _('Min/Max').t(),
                                        value: 'minmax'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]

        },

        pie: {
            "id": "pie",
            "icon": "chart-pie",
            "label": "Pie Chart",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showRowSummary": "false",
                "showColSummary": "false"
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "elementType": "row",
                    "title": "Color",
                    "maxLength": 1,
                    "required": true,
                    "id": "color",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/LabelControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitSortControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "Size",
                    "maxLength": 1,
                    "required": true,
                    "id": "size",
                    "outputType": "metric",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/LabelControlGroup"
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.sliceCollapsingThreshold',
                            label: _('Minimum Size').t(),
                            defaultValue: '0.01',
                            groupOptions: {
                                help: _('Minimum Size is applied when there are more than 10 slices.').t()
                            },
                            control: 'views/shared/controls/PercentTextControl'
                        }
                    ]
                }
            ]
        },

        scatter: {
            "id": "scatter",
            "icon": "chart-scatter",
            "label": "Scatter Chart",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showRowSummary": "false",
                "showColSummary": "false",
                "rowLimitType": "descending",
                "rowLimitAmount": 500
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "elementType": "row",
                    "maxLength": 1,
                    "title": "Mark",
                    "required": true,
                    "id": "mark",
                    "elementsSelector": true,
                    "newElementHandler": true,
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/LabelControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitSortControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "X-Axis",
                    "maxLength": 1,
                    "required": true,
                    "id": "xaxis",
                    "elementsSelector": true,
                    "newElementHandler": true,
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "outputType": "metric",
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": true
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.rotation',
                            label: _('Label Rotation').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: '-90',
                                        icon: 'label-rotation--90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-90&deg;'
                                    },
                                    {
                                        value: '-45',
                                        icon: 'label-rotation--45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-45&deg;'
                                    },
                                    {
                                        value: '0',
                                        icon: 'label-rotation-0',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '0&deg;'
                                    },
                                    {
                                        value: '45',
                                        icon: 'label-rotation-45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '45&deg;'
                                    },
                                    {
                                        value: '90',
                                        icon: 'label-rotation-90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '90&deg;'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.overflowMode',
                            label: _('Label Truncation').t(),
                            defaultValue: 'ellipsisNone',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Yes').t(),
                                        value: 'ellipsisMiddle'
                                    },
                                    {
                                        label: _('No').t(),
                                        value: 'ellipsisNone'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisX.scale',
                            label: _('Scale').t(),
                            defaultValue: 'linear',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Linear").t(),
                                        value: 'linear'
                                    },
                                    {
                                        label: _("Log").t(),
                                        value: 'log'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorUnit',
                            label: _('Interval').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisX.minimumNumber',
                            label: _('Min Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisX.maximumNumber',
                            label: _('Max Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisX.abbreviation',
                            label: _('Number Abbreviations').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'auto'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "Y-Axis",
                    "maxLength": 1,
                    "required": true,
                    "id": "yaxis",
                    "elementsSelector": true,
                    "newElementHandler": true,
                    "outputType": "metric",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": false
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisY.scale',
                            label: _('Scale').t(),
                            defaultValue: 'linear',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Linear").t(),
                                        value: 'linear'
                                    },
                                    {
                                        label: _("Log").t(),
                                        value: 'log'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsY.majorUnit',
                            label: _('Interval').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.minimumNumber',
                            label: _('Min Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.maximumNumber',
                            label: _('Max Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.abbreviation',
                            label: _('Number Abbreviations').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'auto'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "row",
                    "title": "Color",
                    "maxLength": 1,
                    "id": "color",
                    "elementsSelector": true,
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/LabelControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.legend.placement',
                            label: _('Legend Position').t(),
                            defaultValue: 'right',
                            control: 'views/shared/controls/SyntheticSelectControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Right').t(),
                                        value: 'right'
                                    },
                                    {
                                        label: _('Bottom').t(),
                                        value: 'bottom'
                                    },
                                    {
                                        label: _('Left').t(),
                                        value: 'left'
                                    },
                                    {
                                        label: _('Top').t(),
                                        value: 'top'
                                    },
                                    {
                                        label: _('None').t(),
                                        value: 'none'
                                    }
                                ],
                                toggleClassName: 'btn',
                                menuWidth: 'narrow'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.legend.labelStyle.overflowMode',
                            label: _('Legend Truncation').t(),
                            defaultValue: 'ellipsisMiddle',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('A...').t(),
                                        value: 'ellipsisEnd',
                                        tooltip: _('Truncate End').t()
                                    },
                                    {
                                        label: _('A...Z').t(),
                                        value: 'ellipsisMiddle',
                                        tooltip: _('Truncate Middle').t()
                                    },
                                    {
                                        label: _('...Z').t(),
                                        value: 'ellipsisStart',
                                        tooltip: _('Truncate Start').t()
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        bubble: {
            "id": "bubble",
            "icon": "chart-bubble",
            "label": "Bubble Chart",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showRowSummary": "false",
                "showColSummary": "false",
                "rowLimitType": "descending",
                "rowLimitAmount": 500
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "elementType": "row",
                    "maxLength": 1,
                    "title": "Mark",
                    "required": true,
                    "id": "mark",
                    "elementsSelector": true,
                    "newElementHandler": true,
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/LabelControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitSortControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "X-Axis",
                    "maxLength": 1,
                    "required": true,
                    "id": "xaxis",
                    "elementsSelector": true,
                    "newElementHandler": true,
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "outputType": "metric",
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": true
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.rotation',
                            label: _('Label Rotation').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        value: '-90',
                                        icon: 'label-rotation--90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-90&deg;'
                                    },
                                    {
                                        value: '-45',
                                        icon: 'label-rotation--45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '-45&deg;'
                                    },
                                    {
                                        value: '0',
                                        icon: 'label-rotation-0',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '0&deg;'
                                    },
                                    {
                                        value: '45',
                                        icon: 'label-rotation-45',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '45&deg;'
                                    },
                                    {
                                        value: '90',
                                        icon: 'label-rotation-90',
                                        iconSize: 'icon-large label-rotation-alignment',
                                        tooltip: '90&deg;'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorLabelStyle.overflowMode',
                            label: _('Label Truncation').t(),
                            defaultValue: 'ellipsisNone',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Yes').t(),
                                        value: 'ellipsisMiddle'
                                    },
                                    {
                                        label: _('No').t(),
                                        value: 'ellipsisNone'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisX.scale',
                            label: _('Scale').t(),
                            defaultValue: 'linear',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Linear").t(),
                                        value: 'linear'
                                    },
                                    {
                                        label: _("Log").t(),
                                        value: 'log'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsX.majorUnit',
                            label: _('Interval').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisX.minimumNumber',
                            label: _('Min Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisX.maximumNumber',
                            label: _('Max Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisX.abbreviation',
                            label: _('Number Abbreviations').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'auto'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "Y-Axis",
                    "maxLength": 1,
                    "required": true,
                    "id": "yaxis",
                    "elementsSelector": true,
                    "newElementHandler": true,
                    "outputType": "metric",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/AxisLabelControlGroup",
                            "groupOptions": {
                                "xAxis": false
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.axisY.scale',
                            label: _('Scale').t(),
                            defaultValue: 'linear',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _("Linear").t(),
                                        value: 'linear'
                                    },
                                    {
                                        label: _("Log").t(),
                                        value: 'log'
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.charting.axisLabelsY.majorUnit',
                            label: _('Interval').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.minimumNumber',
                            label: _('Min Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.maximumNumber',
                            label: _('Max Value').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.axisY.abbreviation',
                            label: _('Number Abbreviations').t(),
                            defaultValue: 'none',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                additionalClassNames: 'locale-responsive-layout',
                                items: [
                                    {
                                        label: _('Off').t(),
                                        value: 'none'
                                    },
                                    {
                                        label: _('On').t(),
                                        value: 'auto'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "elementType": "cell",
                    "title": "Size",
                    "maxLength": 1,
                    "required": true,
                    "id": "yaxis",
                    "elementsSelector": true,
                    "newElementHandler": true,
                    "outputType": "metric",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/LabelControlGroup"
                        },
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.bubbleMinimumSize',
                            label: _('Min Size').t(),
                            defaultValue: '10',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                inputClassName: 'input-medium'
                            }
                        },
                        {
                            name: 'display.visualizations.charting.chart.bubbleMaximumSize',
                            label: _('Max Size').t(),
                            defaultValue: '50',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                inputClassName: 'input-medium'
                            }
                        }
                    ]
                },
                {
                    "elementType": "row",
                    "title": "Color",
                    "maxLength": 1,
                    "id": "color",
                    "elementsSelector": true,
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean",
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/LabelControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.legend.placement',
                            label: _('Legend Position').t(),
                            defaultValue: 'right',
                            control: 'views/shared/controls/SyntheticSelectControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Right').t(),
                                        value: 'right'
                                    },
                                    {
                                        label: _('Bottom').t(),
                                        value: 'bottom'
                                    },
                                    {
                                        label: _('Left').t(),
                                        value: 'left'
                                    },
                                    {
                                        label: _('Top').t(),
                                        value: 'top'
                                    },
                                    {
                                        label: _('None').t(),
                                        value: 'none'
                                    }
                                ],
                                toggleClassName: 'btn',
                                menuWidth: 'narrow'
                            },
                            groupOptions: {}
                        },
                        {
                            name: 'display.visualizations.charting.legend.labelStyle.overflowMode',
                            label: _('Legend Truncation').t(),
                            defaultValue: 'ellipsisMiddle',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('A...').t(),
                                        value: 'ellipsisEnd',
                                        tooltip: _('Truncate End').t()
                                    },
                                    {
                                        label: _('A...Z').t(),
                                        value: 'ellipsisMiddle',
                                        tooltip: _('Truncate Middle').t()
                                    },
                                    {
                                        label: _('...Z').t(),
                                        value: 'ellipsisStart',
                                        tooltip: _('Truncate Start').t()
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        radialGauge: {
            "id": "radialGauge",
            "icon": "gauge-radial",
            "label": "Radial Gauge",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showColSummary": "false",
                "showRowSummary": "false"
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "title": "Value",
                    "elementType": "cell",
                    "id": "value",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "required": true,
                    "maxLength": 1,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            groupOptions: {
                                displayMinMaxLabels: false,
                                paletteColors: GAUGE_COLORS,
                                rangeColorsName: "display.visualizations.charting.gaugeColors"
                            },
                            name: 'display.visualizations.charting.chart.rangeValues',
                            group: 'views/shared/vizcontrols/custom_controls/ColorRangesControlGroup',
                            visibleWhen: null
                        }
                    ]
                },
                {
                    "title": "General",
                    "id": "general",
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.style',
                            label: _('Style').t(),
                            defaultValue: 'shiny',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Minimal').t(),
                                        value: 'minimal'
                                    },
                                    {
                                        label: _('Shiny').t(),
                                        value: 'shiny'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        fillerGauge: {
            "id": "fillerGauge",
            "icon": "gauge-filler",
            "label": "Filler Gauge",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showColSummary": "false",
                "showRowSummary": "false"
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "title": "Value",
                    "elementType": "cell",
                    "id": "value",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "required": true,
                    "maxLength": 1,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            groupOptions: {
                                displayMinMaxLabels: false,
                                paletteColors: GAUGE_COLORS,
                                rangeColorsName: "display.visualizations.charting.gaugeColors"
                            },
                            name: 'display.visualizations.charting.chart.rangeValues',
                            group: 'views/shared/vizcontrols/custom_controls/ColorRangesControlGroup',
                            visibleWhen: null
                        }
                    ]
                },
                {
                    "title": "General",
                    "id": "general",
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.style',
                            label: _('Style').t(),
                            defaultValue: 'shiny',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Minimal').t(),
                                        value: 'minimal'
                                    },
                                    {
                                        label: _('Shiny').t(),
                                        value: 'shiny'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        markerGauge: {
            "id": "markerGauge",
            "icon": "gauge-marker",
            "label": "Marker Gauge",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showColSummary": "false",
                "showRowSummary": "false"
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "title": "Value",
                    "elementType": "cell",
                    "id": "value",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "required": true,
                    "maxLength": 1,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "groupOptions": {
                                "outputType": "metric"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            groupOptions: {
                                displayMinMaxLabels: false,
                                paletteColors: GAUGE_COLORS,
                                rangeColorsName: "display.visualizations.charting.gaugeColors"
                            },
                            name: 'display.visualizations.charting.chart.rangeValues',
                            group: 'views/shared/vizcontrols/custom_controls/ColorRangesControlGroup',
                            visibleWhen: null
                        }
                    ]
                },
                {
                    "title": "General",
                    "id": "general",
                    "formElements": [
                        {
                            name: 'display.visualizations.charting.chart.style',
                            label: _('Style').t(),
                            defaultValue: 'shiny',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Minimal').t(),
                                        value: 'minimal'
                                    },
                                    {
                                        label: _('Shiny').t(),
                                        value: 'shiny'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        singlevalue: {
            "id": "singlevalue",
            "icon": "single-value",
            "label": "Single Value",
            "requiresIndexTime": false,
            "reportLevelAttributes": {
                "showColSummary": "false",
                "showRowSummary": "false"
            },
            "configMenuPanels": [
                {
                    "title": "Time Range",
                    "elementType": "filter",
                    "id": "timerange",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "maxLength": 1,
                    "required": true,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/TimeRangeControlGroup"
                        }
                    ]
                },
                {
                    "title": "Filter",
                    "elementType": "filter",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "boolean"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/FilterTypeControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterMatchControlGroup",
                            "visibleWhen": {
                                "filterType": "match"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitByControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FilterLimitControlGroup",
                            "visibleWhen": {
                                "filterType": "limit"
                            }
                        }
                    ],
                    "id": "filter"
                },
                {
                    "title": "Value",
                    "elementType": "cell",
                    "id": "value",
                    "dataTypes": [
                        "string",
                        "ipv4",
                        "number",
                        "objectCount",
                        "childCount"
                    ],
                    "required": true,
                    "maxLength": 1,
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/CellValueControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean",
                                    "timestamp"
                                ]
                            }
                        }
                    ],
                    "formElements": [
                        {
                            name: 'display.visualizations.singlevalue.showTrendIndicator',
                            label: _('Show trend indicator').t(),
                            defaultValue: '1',
                            control: 'views/shared/controls/BooleanRadioControl'
                        },
                        {
                            name: 'display.visualizations.singlevalue.trendDisplayMode',
                            label: _('Show trend in').t(),
                            defaultValue: 'count',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Absolute').t(),
                                        value: 'absolute',
                                        tooltip: _('Absolute').t()
                                    },
                                    {
                                        label: _('Percent').t(),
                                        value: 'percent',
                                        tooltip: _('Percent').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.singlevalue.trendInterval',
                            label: _('Compared to').t(),
                            defaultValue: 'auto',
                            group: 'views/shared/vizcontrols/custom_controls/SingleValueDeltaTimeRangeControlGroup'
                        },
                        'static HTML',
                        {
                            name: 'display.visualizations.singlevalue.beforeLabel',
                            label: _('Before Label').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            }
                        },
                        {
                            name: 'display.visualizations.singlevalue.afterLabel',
                            label: _('After Label').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            }
                        },
                        'static HTML',
                        {
                            name: 'display.visualizations.singlevalue.underLabel',
                            label: _('Caption').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            }
                        },
                        'static HTML',
                        {
                            name: 'display.visualizations.singlevalue.showSparkline',
                            label: _('Show Sparkline').t(),
                            defaultValue: '1',
                            control: 'views/shared/controls/BooleanRadioControl'
                        }
                    ]
                },
                {
                    "elementType": "row",
                    "title": "Sparkline",
                    "maxLength": 1,
                    "id": "sparkline",
                    "dataTypes": [
                        "timestamp"
                    ],
                    "pivotFormElements": [
                        {
                            "group": "views/pivot/custom_controls/LabelControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitSortControlGroup",
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4",
                                    "number",
                                    "boolean"
                                ]
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": [
                                    "string",
                                    "ipv4"
                                ]
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/CreateRangesControlGroup",
                            "visibleWhen": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "reportControl",
                            "group": "views/pivot/custom_controls/SplitLimitControlGroup",
                            "groupOptions": {
                                "elementType": "row"
                            },
                            "visibleWhen": {
                                "type": "number",
                                "display": "all"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/MaxRangesControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeSizeControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeStartControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/RangeEndControlGroup",
                            "visibleWhen": {
                                "type": "number",
                                "display": "ranges"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TrueLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/FalseLabelControlGroup",
                            "visibleWhen": {
                                "type": "boolean"
                            }
                        },
                        {
                            "group": "views/pivot/custom_controls/TimePeriodControlGroup",
                            "visibleWhen": {
                                "type": "timestamp"
                            },
                            "groupOptions": {
                                "menuWidth": "narrow"
                            }
                        }
                    ]
                },
                {
                    "title": "Color",
                    "id": "color",
                    formElements: [
                        {
                            name: 'display.visualizations.singlevalue.useColors',
                            label: _('Use colors').t(),
                            defaultValue: '1',
                            control: 'views/shared/controls/BooleanRadioControl'
                        },
                        {
                            name: 'display.visualizations.singlevalue.colorBy',
                            label: _('Color by').t(),
                            defaultValue: 'value',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Value').t(),
                                        value: 'value',
                                        tooltip: _('Value').t()
                                    },
                                    {
                                        label: _('Trend').t(),
                                        value: 'trend',
                                        tooltip: _('Trend').t()
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.singlevalue.trendColorInterpretation',
                            label: _('Color interpretation').t(),
                            defaultValue: 'standard',
                            groupOptions: {
                                className: 'control-group single-value-radio-icon-group'
                            },
                            control: 'views/shared/singlevalue/ColorModeRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        iconSettings: [
                                            {
                                                backgroundColor: "transparent",
                                                fontColor: "#53a051",
                                                indicatorMode: "increase",
                                                type: "indicator"
                                            },
                                            {
                                                backgroundColor: "transparent",
                                                fontColor: "#dc4e41",
                                                indicatorMode: "decrease",
                                                type: "indicator"
                                            }
                                        ],
                                        tooltip: "Positive values in green",
                                        value: "standard"
                                    },
                                    {
                                        iconSettings: [
                                            {
                                                backgroundColor: "transparent",
                                                fontColor: "#dc4e41",
                                                indicatorMode: "increase",
                                                type: "indicator"                                        },
                                            {
                                                backgroundColor: "transparent",
                                                fontColor: "#53a051",
                                                indicatorMode: "decrease",
                                                type: "indicator"                                        }
                                        ],
                                        tooltip: "Negative values in green",
                                        value: "inverse"
                                    }
                                ]
                            }
                        },
                        {
                            name: 'display.visualizations.singlevalue.rangeValues',
                            group: 'views/shared/vizcontrols/custom_controls/ColorRangesControlGroup',
                            groupOptions: {
                                rangeColorsName: 'display.visualizations.singlevalue.rangeColors',
                                defaultColors: ['0x53a051', '0x006d9c', '0xf8be34', '0xf1813f', '0xdc4e41'],
                                paletteColors: ['#53a051', '#006d9c', '#f8be34', '#f1813f', '#dc4e41', '#555'],
                                defaultRangeValues: [0, 30, 70, 100],
                                displayMinMaxLabels: true
                            }
                        },
                        {
                            name: 'display.visualizations.singlevalue.colorMode',
                            label: _('Color Mode').t(),
                            defaultValue: 'none',
                            groupOptions: {
                                className: 'control-group single-value-radio-icon-group'
                            },
                            control: 'views/shared/singlevalue/ColorModeRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        iconSettings: [
                                            {
                                                "backgroundColor": "transparent",
                                                "fontColor": "#53a051",
                                                "type": "colorMode"
                                            }
                                        ],
                                        tooltip: "No background",
                                        value: "none"
                                    },
                                    {
                                        iconSettings: [
                                            {
                                                "backgroundColor": "#53a051",
                                                "fontColor": "#FFFFFF",
                                                "type": "colorMode"
                                            }
                                        ],
                                        tooltip: "Block background",
                                        value: "block"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "title": "Number Format",
                    "id": "numberFormat",
                    'formElements': [
                        {
                            name: 'display.visualizations.singlevalue.numberPrecision',
                            label: _('Precision').t(),
                            defaultValue: '0',
                            control: 'views/shared/controls/SyntheticSelectControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('0').t(),
                                        value: '0'
                                    },
                                    {
                                        label: _('0.0').t(),
                                        value: '0.0'
                                    },
                                    {
                                        label: _('0.00').t(),
                                        value: '0.00'
                                    },
                                    {
                                        label: _('0.000').t(),
                                        value: '0.000'
                                    },
                                    {
                                        label: _('0.0000').t(),
                                        value: '0.0000'
                                    }
                                ],
                                toggleClassName: 'btn',
                                menuWidth: 'narrow'
                            }
                        },
                        {
                            name: 'display.visualizations.singlevalue.useThousandSeparators',
                            label: _('Use Thousand Separators').t(),
                            defaultValue: '1',
                            control: 'views/shared/controls/BooleanRadioControl'
                        },
                        {
                            name: 'display.visualizations.singlevalue.unit',
                            label: _('Unit').t(),
                            defaultValue: '',
                            control: 'views/shared/controls/TextControl',
                            controlOptions: {
                                placeholder: _('optional').t(),
                                inputClassName: 'input-medium'
                            }
                        },
                        'static HTML',
                        {
                            name: 'display.visualizations.singlevalue.unitPosition',
                            label: _('Unit Position').t(),
                            defaultValue: 'after',
                            control: 'views/shared/controls/SyntheticRadioControl',
                            controlOptions: {
                                items: [
                                    {
                                        label: _('Before').t(),
                                        value: 'before',
                                        tooltip: _('Before').t()
                                    },
                                    {
                                        label: _('After').t(),
                                        value: 'after',
                                        tooltip: _('After').t()
                                    }
                                ]
                            }
                        }

                    ]
                }
            ]
        }

    };

    return {
        GAUGE_COLORS: GAUGE_COLORS,
        EXPECTED_SCHEMA: EXPECTED_SCHEMA
    };
});
