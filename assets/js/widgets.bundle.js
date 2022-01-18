"use strict";
var KTCardsWidget1 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_card_widget_1_chart");
            if (e) {
                var t = e.getAttribute("data-kt-chart-color"),
                    a = parseInt(KTUtil.css(e, "height")),
                    o = KTUtil.getCssVariableValue("--bs-gray-500"),
                    r = KTUtil.isHexColor(t) ? t : KTUtil.getCssVariableValue("--bs-" + t),
                    i = KTUtil.getCssVariableValue("--bs-gray-300"),
                    s = new ApexCharts(e, {
                        series: [{
                            name: "Net Profit",
                            data: [30, 75, 55, 45, 30, 60, 75, 50],
                            margin: {
                                left: 5,
                                right: 5
                            }
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: a,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: ["35%"],
                                borderRadius: 6
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            show: !0,
                            width: 4,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            labels: {
                                show: !1,
                                style: {
                                    colors: o,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                show: !1
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1,
                                style: {
                                    colors: o,
                                    fontSize: "12px"
                                }
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            x: {
                                formatter: function(e) {
                                    return "Impression: " + e
                                }
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + e + " revenue"
                                }
                            }
                        },
                        colors: [r, i],
                        grid: {
                            borderColor: !1,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            },
                            padding: {
                                top: 10,
                                left: 25,
                                right: 25
                            }
                        }
                    });
                setTimeout((function() {
                    s.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget1), KTUtil.onDOMContentLoaded((function() {
    KTCardsWidget1.init()
}));
var KTCardsWidget10 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_card_widget_10_chart");
            if (e) {
                var t = {
                        size: e.getAttribute("data-kt-size") ? parseInt(e.getAttribute("data-kt-size")) : 70,
                        lineWidth: e.getAttribute("data-kt-line") ? parseInt(e.getAttribute("data-kt-line")) : 11,
                        rotate: e.getAttribute("data-kt-rotate") ? parseInt(e.getAttribute("data-kt-rotate")) : 145
                    },
                    a = document.createElement("canvas"),
                    o = document.createElement("span");
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
                var r = a.getContext("2d");
                a.width = a.height = t.size, e.appendChild(o), e.appendChild(a), r.translate(t.size / 2, t.size / 2), r.rotate((t.rotate / 180 - .5) * Math.PI);
                var i = (t.size - t.lineWidth) / 2,
                    s = function(e, t, a) {
                        a = Math.min(Math.max(0, a || 1), 1), r.beginPath(), r.arc(0, 0, i, 0, 2 * Math.PI * a, !1), r.strokeStyle = e, r.lineCap = "round", r.lineWidth = t, r.stroke()
                    };
                s("#E4E6EF", t.lineWidth, 1), s(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, 100 / 150), s(KTUtil.getCssVariableValue("--bs-success"), t.lineWidth, .4)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget10), KTUtil.onDOMContentLoaded((function() {
    KTCardsWidget10.init()
}));
var KTCardsWidget4 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_card_widget_4_chart");
            if (e) {
                var t = {
                        size: e.getAttribute("data-kt-size") ? parseInt(e.getAttribute("data-kt-size")) : 70,
                        lineWidth: e.getAttribute("data-kt-line") ? parseInt(e.getAttribute("data-kt-line")) : 11,
                        rotate: e.getAttribute("data-kt-rotate") ? parseInt(e.getAttribute("data-kt-rotate")) : 145
                    },
                    a = document.createElement("canvas"),
                    o = document.createElement("span");
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
                var r = a.getContext("2d");
                a.width = a.height = t.size, e.appendChild(o), e.appendChild(a), r.translate(t.size / 2, t.size / 2), r.rotate((t.rotate / 180 - .5) * Math.PI);
                var i = (t.size - t.lineWidth) / 2,
                    s = function(e, t, a) {
                        a = Math.min(Math.max(0, a || 1), 1), r.beginPath(), r.arc(0, 0, i, 0, 2 * Math.PI * a, !1), r.strokeStyle = e, r.lineCap = "round", r.lineWidth = t, r.stroke()
                    };
                s("#E4E6EF", t.lineWidth, 1), s(KTUtil.getCssVariableValue("--bs-danger"), t.lineWidth, 100 / 150), s(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, .4)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget4), KTUtil.onDOMContentLoaded((function() {
    KTCardsWidget4.init()
}));
var KTCardsWidget6 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_card_widget_6_chart");
            if (e) {
                var t = parseInt(KTUtil.css(e, "height")),
                    a = KTUtil.getCssVariableValue("--bs-gray-500"),
                    o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    r = KTUtil.getCssVariableValue("--bs-primary"),
                    i = KTUtil.getCssVariableValue("--bs-gray-300"),
                    s = new ApexCharts(e, {
                        series: [{
                            name: "Sales",
                            data: [30, 60, 53, 45, 60, 75, 53]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: t,
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: ["55%"],
                                borderRadius: 6
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            show: !0,
                            width: 9,
                            colors: ["transparent"]
                        },
                        xaxis: {
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1,
                                tickPlacement: "between"
                            },
                            labels: {
                                show: !1,
                                style: {
                                    colors: a,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                show: !1
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1,
                                style: {
                                    colors: a,
                                    fontSize: "12px"
                                }
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            x: {
                                formatter: function(e) {
                                    return "Impressions: " + e
                                }
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + e + "K"
                                }
                            }
                        },
                        colors: [r, i],
                        grid: {
                            padding: {
                                left: 10,
                                right: 10
                            },
                            borderColor: o,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        }
                    });
                setTimeout((function() {
                    s.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardsWidget6), KTUtil.onDOMContentLoaded((function() {
    KTCardsWidget6.init()
}));
var KTCardWidget8 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_card_widget_8_chart");
            if (e) {
                var t = parseInt(KTUtil.css(e, "height")),
                    a = (KTUtil.getCssVariableValue("--bs-border-dashed-color"), KTUtil.getCssVariableValue("--bs-gray-800")),
                    o = KTUtil.getCssVariableValue("--bs-light-info"),
                    r = new ApexCharts(e, {
                        series: [{
                            name: "Net Profit",
                            data: [35, 25, 45, 15, 60, 50, 57, 35, 70, 40, 45, 25, 45, 30, 70]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "area",
                            height: t,
                            toolbar: {
                                show: !1
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        fill: {
                            type: "solid",
                            opacity: 0
                        },
                        stroke: {
                            curve: "smooth",
                            show: !0,
                            width: 2,
                            colors: [a]
                        },
                        xaxis: {
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            labels: {
                                show: !1
                            },
                            crosshairs: {
                                position: "front",
                                stroke: {
                                    color: a,
                                    width: 1,
                                    dashArray: 3
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "12px"
                                }
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            x: {
                                formatter: function(e) {
                                    return "Impression " + e
                                }
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + e + " thousands"
                                }
                            }
                        },
                        colors: [o],
                        grid: {
                            strokeDashArray: 4,
                            padding: {
                                top: 0,
                                right: -20,
                                bottom: -20,
                                left: -20
                            },
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        },
                        markers: {
                            strokeColor: a,
                            strokeWidth: 2
                        }
                    });
                setTimeout((function() {
                    r.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardWidget8), KTUtil.onDOMContentLoaded((function() {
    KTCardWidget8.init()
}));
var KTCardWidget9 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_card_widget_9_chart");
            if (e) {
                var t = parseInt(KTUtil.css(e, "height")),
                    a = (KTUtil.getCssVariableValue("--bs-border-dashed-color"), KTUtil.getCssVariableValue("--bs-gray-800")),
                    o = KTUtil.getCssVariableValue("--bs-light-info"),
                    r = new ApexCharts(e, {
                        series: [{
                            name: "Net Profit",
                            data: [35, 25, 35, 15, 40, 60, 25, 40, 70, 30, 55, 45, 45, 30, 50]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "area",
                            height: t,
                            toolbar: {
                                show: !1
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        fill: {
                            type: "solid",
                            opacity: 0
                        },
                        stroke: {
                            curve: "smooth",
                            show: !0,
                            width: 2,
                            colors: [a]
                        },
                        xaxis: {
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            labels: {
                                show: !1
                            },
                            crosshairs: {
                                position: "front",
                                stroke: {
                                    color: a,
                                    width: 1,
                                    dashArray: 3
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "12px"
                                }
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            x: {
                                formatter: function(e) {
                                    return "Sales " + e
                                }
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + e + " thousands"
                                }
                            }
                        },
                        colors: [o],
                        grid: {
                            strokeDashArray: 4,
                            padding: {
                                top: 0,
                                right: -20,
                                bottom: -20,
                                left: -20
                            },
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        },
                        markers: {
                            strokeColor: a,
                            strokeWidth: 2
                        }
                    });
                setTimeout((function() {
                    r.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTCardWidget9), KTUtil.onDOMContentLoaded((function() {
    KTCardWidget9.init()
}));
var KTChartsWidget1 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_charts_widget_1");
            if (e) {
                var t = e.hasAttribute("data-kt-negative-color") ? e.getAttribute("data-kt-negative-color") : KTUtil.getCssVariableValue("--bs-success"),
                    a = parseInt(KTUtil.css(e, "height")),
                    o = KTUtil.getCssVariableValue("--bs-gray-500"),
                    r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    i = KTUtil.getCssVariableValue("--bs-primary"),
                    s = new ApexCharts(e, {
                        series: [{
                            name: "Net Profit",
                            data: [20, 30, 20, 40, 60, 75, 65, 18, 10, 5, 15, 40, 60, 18, 35, 55, 20]
                        }, {
                            name: "Revenue",
                            data: [-20, -15, -5, -20, -30, -15, -10, -8, -5, -5, -10, -25, -15, -5, -10, -5, -15]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            stacked: !0,
                            height: a,
                            toolbar: {
                                show: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: "35%",
                                barHeight: "70%",
                                borderRadius: [6, 6]
                            }
                        },
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        xaxis: {
                            categories: ["Jan 5", "Jan 7", "Jan 9", "Jan 11", "Jan 13", "Jan 15", "Jan 17", "Jan 19", "Jan 20", "Jan 21", "Jan 23", "Jan 24", "Jan 25", "Jan 26", "Jan 24", "Jan 28", "Jan 29"],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickAmount: 10,
                            labels: {
                                style: {
                                    colors: o,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                show: !1
                            }
                        },
                        yaxis: {
                            min: -50,
                            max: 80,
                            tickAmount: 6,
                            labels: {
                                style: {
                                    colors: o,
                                    fontSize: "12px"
                                },
                                formatter: function(e) {
                                    return parseInt(e) + "K"
                                }
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px",
                                borderRadius: 4
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + e + " thousands"
                                }
                            }
                        },
                        colors: [i, t],
                        grid: {
                            borderColor: r,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        }
                    });
                setTimeout((function() {
                    s.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTChartsWidget1), KTUtil.onDOMContentLoaded((function() {
    KTChartsWidget1.init()
}));
var KTChartsWidget2 = {
    init: function() {
        var e;
        e = document.querySelectorAll(".charts-widget-2"), [].slice.call(e).map((function(e) {
            var t = parseInt(KTUtil.css(e, "height"));
            if (e) {
                var a = e.getAttribute("data-kt-chart-color"),
                    o = KTUtil.getCssVariableValue("--bs-gray-800"),
                    r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    i = KTUtil.getCssVariableValue("--bs-" + a),
                    s = KTUtil.getCssVariableValue("--bs-light-" + a),
                    n = new ApexCharts(e, {
                        series: [{
                            name: "Net Profit",
                            data: [15, 15, 45, 45, 25, 25, 55, 55, 20, 20, 37]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "area",
                            height: t,
                            toolbar: {
                                show: !1
                            },
                            zoom: {
                                enabled: !1
                            },
                            sparkline: {
                                enabled: !0
                            }
                        },
                        plotOptions: {},
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        fill: {
                            type: "solid",
                            opacity: 1
                        },
                        stroke: {
                            curve: "smooth",
                            show: !0,
                            width: 3,
                            colors: [i]
                        },
                        xaxis: {
                            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            labels: {
                                show: !1,
                                style: {
                                    colors: o,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                show: !1,
                                position: "front",
                                stroke: {
                                    color: r,
                                    width: 1,
                                    dashArray: 3
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "12px"
                                }
                            }
                        },
                        yaxis: {
                            min: 0,
                            max: 60,
                            labels: {
                                show: !1,
                                style: {
                                    colors: o,
                                    fontSize: "12px"
                                }
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + e + " thousands"
                                }
                            }
                        },
                        colors: [s],
                        markers: {
                            colors: [s],
                            strokeColor: [i],
                            strokeWidth: 3
                        }
                    });
                setTimeout((function() {
                    n.render()
                }), 300)
            }
        }))
    }
};
"undefined" != typeof module && (module.exports = KTChartsWidget2), KTUtil.onDOMContentLoaded((function() {
    KTChartsWidget2.init()
}));
var KTChartsWidget3 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_charts_widget_3");
            if (e) {
                var t = parseInt(KTUtil.css(e, "height")),
                    a = KTUtil.getCssVariableValue("--bs-gray-500"),
                    o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    r = KTUtil.getCssVariableValue("--bs-success"),
                    i = KTUtil.getCssVariableValue("--bs-success"),
                    s = new ApexCharts(e, {
                        series: [{
                            name: "Sales",
                            data: [18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "area",
                            height: t,
                            toolbar: {
                                show: !1
                            }
                        },
                        plotOptions: {},
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                opacityFrom: .3,
                                opacityTo: .7,
                                stops: [0, 90, 100]
                            }
                        },
                        stroke: {
                            curve: "smooth",
                            show: !0,
                            width: 3,
                            colors: [r]
                        },
                        xaxis: {
                            categories: ["", "Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", ""],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickAmount: 6,
                            labels: {
                                rotate: 0,
                                rotateAlways: !0,
                                style: {
                                    colors: a,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                position: "front",
                                stroke: {
                                    color: r,
                                    width: 1,
                                    dashArray: 3
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "12px"
                                }
                            }
                        },
                        yaxis: {
                            tickAmount: 4,
                            max: 24,
                            min: 10,
                            labels: {
                                style: {
                                    colors: a,
                                    fontSize: "12px"
                                },
                                formatter: function(e) {
                                    return "$" + Number(e / 10).toFixed(1) + "K"
                                }
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + e + "K"
                                }
                            }
                        },
                        colors: [i],
                        grid: {
                            borderColor: o,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        },
                        markers: {
                            strokeColor: r,
                            strokeWidth: 3
                        }
                    });
                setTimeout((function() {
                    s.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTChartsWidget3), KTUtil.onDOMContentLoaded((function() {
    KTChartsWidget3.init()
}));
var KTChartsWidget4 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_charts_widget_4");
            if (e) {
                var t = parseInt(KTUtil.css(e, "height")),
                    a = KTUtil.getCssVariableValue("--bs-gray-500"),
                    o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    r = KTUtil.getCssVariableValue("--bs-primary"),
                    i = KTUtil.getCssVariableValue("--bs-primary"),
                    s = new ApexCharts(e, {
                        series: [{
                            name: "Discounted",
                            data: [34.5, 34.5, 35, 35, 35.5, 35.5, 35, 35, 34.5, 34.5, 34.5, 34.5, 35, 35, 34.5, 35.5, 35.5, 35.5, 35]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "area",
                            height: t,
                            toolbar: {
                                show: !1
                            }
                        },
                        plotOptions: {},
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                opacityFrom: .3,
                                opacityTo: .7,
                                stops: [0, 90, 100]
                            }
                        },
                        stroke: {
                            curve: "smooth",
                            show: !0,
                            width: 3,
                            colors: [r]
                        },
                        xaxis: {
                            categories: ["", "Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 17", "Apr 18", "Apr 19", "Apr 21", ""],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            tickAmount: 6,
                            labels: {
                                rotate: 0,
                                rotateAlways: !0,
                                style: {
                                    colors: a,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                position: "front",
                                stroke: {
                                    color: r,
                                    width: 1,
                                    dashArray: 3
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "12px"
                                }
                            }
                        },
                        yaxis: {
                            max: 36.3,
                            min: 33,
                            tickAmount: 6,
                            labels: {
                                style: {
                                    colors: a,
                                    fontSize: "12px"
                                },
                                formatter: function(e) {
                                    return "$" + parseInt(10 * e)
                                }
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + parseInt(10 * e)
                                }
                            }
                        },
                        colors: [i],
                        grid: {
                            borderColor: o,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        },
                        markers: {
                            strokeColor: r,
                            strokeWidth: 3
                        }
                    });
                setTimeout((function() {
                    s.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTChartsWidget4), KTUtil.onDOMContentLoaded((function() {
    KTChartsWidget4.init()
}));
var KTChartsWidget5 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_charts_widget_5");
            if (e) {
                var t = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    a = {
                        series: [{
                            data: [15, 12, 10, 8, 7, 4, 3],
                            show: !1
                        }],
                        chart: {
                            type: "bar",
                            height: 350,
                            toolbar: {
                                show: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                borderRadius: 4,
                                horizontal: !0,
                                distributed: !0,
                                barHeight: 23
                            }
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        legend: {
                            show: !1
                        },
                        colors: ["#3E97FF", "#F1416C", "#50CD89", "#FFC700", "#7239EA", "#50CDCD", "#3F4254"],
                        xaxis: {
                            categories: ["Phones", "Laptops", "Headsets", "Games", "Keyboardsy", "Monitors", "Speakers"],
                            labels: {
                                formatter: function(e) {
                                    return e + "K"
                                },
                                style: {
                                    colors: KTUtil.getCssVariableValue("--bs-gray-400"),
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    align: "left"
                                }
                            },
                            axisBorder: {
                                show: !1
                            }
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    colors: KTUtil.getCssVariableValue("--bs-gray-800"),
                                    fontSize: "14px",
                                    fontWeight: "600"
                                },
                                offsetY: 2,
                                align: "left"
                            }
                        },
                        grid: {
                            borderColor: t,
                            xaxis: {
                                lines: {
                                    show: !0
                                }
                            },
                            yaxis: {
                                lines: {
                                    show: !1
                                }
                            },
                            strokeDashArray: 4
                        }
                    },
                    o = new ApexCharts(e, a);
                setTimeout((function() {
                    o.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTChartsWidget5), KTUtil.onDOMContentLoaded((function() {
    KTChartsWidget5.init()
}));
var KTChartsWidget6 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_charts_widget_6");
            if (e) {
                var t = KTUtil.getCssVariableValue("--bs-gray-800"),
                    a = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    o = new ApexCharts(e, {
                        series: [{
                            name: "Sales",
                            data: [15, 12, 10, 8, 7]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: 350,
                            toolbar: {
                                show: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                borderRadius: 8,
                                horizontal: !0,
                                distributed: !0,
                                barHeight: 50,
                                dataLabels: {
                                    position: "bottom"
                                }
                            }
                        },
                        dataLabels: {
                            enabled: !0,
                            textAnchor: "start",
                            offsetX: 0,
                            formatter: function(e, t) {
                                return e *= 1e3, wNumb({
                                    thousand: ","
                                }).to(e)
                            },
                            style: {
                                fontSize: "14px",
                                fontWeight: "600",
                                align: "left"
                            }
                        },
                        legend: {
                            show: !1
                        },
                        colors: ["#3E97FF", "#F1416C", "#50CD89", "#FFC700", "#7239EA"],
                        xaxis: {
                            categories: ["ECR - 90%", "FGI - 82%", "EOQ - 75%", "FMG - 60%", "PLG - 50%"],
                            labels: {
                                formatter: function(e) {
                                    return e + "K"
                                },
                                style: {
                                    colors: t,
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    align: "left"
                                }
                            },
                            axisBorder: {
                                show: !1
                            }
                        },
                        yaxis: {
                            labels: {
                                formatter: function(e, t) {
                                    return Number.isInteger(e) ? e + " - " + parseInt(100 * e / 18).toString() + "%" : e
                                },
                                style: {
                                    colors: t,
                                    fontSize: "14px",
                                    fontWeight: "600"
                                },
                                offsetY: 2,
                                align: "left"
                            }
                        },
                        grid: {
                            borderColor: a,
                            xaxis: {
                                lines: {
                                    show: !0
                                }
                            },
                            yaxis: {
                                lines: {
                                    show: !1
                                }
                            },
                            strokeDashArray: 4
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            y: {
                                formatter: function(e) {
                                    return e + "K"
                                }
                            }
                        }
                    });
                setTimeout((function() {
                    o.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTChartsWidget6), KTUtil.onDOMContentLoaded((function() {
    KTChartsWidget6.init()
}));
var KTChartsWidget7 = function() {
    var e = function(e) {
        var t = document.querySelector(e);
        if (t) {
            var a = parseInt(KTUtil.css(t, "height")),
                o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                r = {
                    series: [{
                        name: "Net Profit",
                        data: data1
                    }, {
                        name: "Revenue",
                        data: data2
                    }],
                    chart: {
                        fontFamily: "inherit",
                        type: "bar",
                        height: a,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            horizontal: !1,
                            columnWidth: ["40%"],
                            endingShape: "rounded"
                        }
                    },
                    legend: {
                        show: !1
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        show: !0,
                        width: 2,
                        colors: ["transparent"]
                    },
                    xaxis: {
                        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        },
                        labels: {
                            style: {
                                colors: KTUtil.getCssVariableValue("--bs-gray-700"),
                                fontSize: "12px"
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: KTUtil.getCssVariableValue("--bs-gray-700"),
                                fontSize: "12px"
                            }
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    states: {
                        normal: {
                            filter: {
                                type: "none",
                                value: 0
                            }
                        },
                        hover: {
                            filter: {
                                type: "none",
                                value: 0
                            }
                        },
                        active: {
                            allowMultipleDataPointsSelection: !1,
                            filter: {
                                type: "none",
                                value: 0
                            }
                        }
                    },
                    tooltip: {
                        style: {
                            fontSize: "12px"
                        },
                        y: {
                            formatter: function(e) {
                                return "$" + e + " thousands"
                            }
                        }
                    },
                    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-light-primary")],
                    grid: {
                        borderColor: o,
                        strokeDashArray: 4,
                        yaxis: {
                            lines: {
                                show: !0
                            }
                        }
                    }
                },
                i = new ApexCharts(t, r),
                s = !1,
                n = document.querySelector(tabSelector);
            !0 === initByDefault && (i.render(), s = !0), n.addEventListener("shown.bs.tab", (function(e) {
                0 == s && (i.render(), s = !0)
            })), (i = new ApexCharts(t, r)).render()
        }
    };
    return {
        init: function() {
            e("#kt_chart_widget_7_tab_1"), e("#kt_chart_widget_7_tab_2"), e("#kt_chart_widget_7_tab_3"), e("#kt_chart_widget_7_tab_4")
        }
    }
}();
"undefined" != typeof module && (module.exports = KTChartsWidget7), KTUtil.onDOMContentLoaded((function() {}));
var KTChartsWidget8 = function() {
    var e = function(e, t, a, o) {
        var r = document.querySelector(t);
        if (r) {
            var i = parseInt(KTUtil.css(r, "height")),
                s = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                n = {
                    series: [{
                        name: "Social Campaigns",
                        data: a[0]
                    }, {
                        name: "Email Newsletter",
                        data: a[1]
                    }, {
                        name: "TV Campaign",
                        data: a[2]
                    }, {
                        name: "Google Ads",
                        data: a[3]
                    }, {
                        name: "Courses",
                        data: a[4]
                    }, {
                        name: "Radio",
                        data: a[5]
                    }],
                    chart: {
                        fontFamily: "inherit",
                        type: "bubble",
                        height: i,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bubble: {}
                    },
                    stroke: {
                        show: !1,
                        width: 0
                    },
                    legend: {
                        show: !1
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    xaxis: {
                        type: "numeric",
                        tickAmount: 7,
                        min: 0,
                        max: 700,
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !0,
                            height: 0
                        },
                        labels: {
                            show: !0,
                            trim: !0,
                            style: {
                                colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                                fontSize: "13px"
                            }
                        }
                    },
                    yaxis: {
                        tickAmount: 7,
                        min: 0,
                        max: 700,
                        labels: {
                            style: {
                                colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                                fontSize: "13px"
                            }
                        }
                    },
                    tooltip: {
                        style: {
                            fontSize: "12px"
                        },
                        x: {
                            formatter: function(e) {
                                return "Clicks: " + e
                            }
                        },
                        y: {
                            formatter: function(e) {
                                return "$" + e + "K"
                            }
                        },
                        z: {
                            title: "Impression: "
                        }
                    },
                    crosshairs: {
                        show: !0,
                        position: "front",
                        stroke: {
                            color: KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                            width: 1,
                            dashArray: 0
                        }
                    },
                    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-success"), KTUtil.getCssVariableValue("--bs-warning"), KTUtil.getCssVariableValue("--bs-danger"), KTUtil.getCssVariableValue("--bs-info"), "#43CED7"],
                    fill: {
                        opacity: 1
                    },
                    grid: {
                        borderColor: s,
                        strokeDashArray: 4,
                        yaxis: {
                            lines: {
                                show: !0
                            }
                        }
                    }
                },
                l = !1,
                d = new ApexCharts(r, n),
                c = document.querySelector(e);
            !0 === o && setTimeout((function() {
                d.render(), l = !0
            }), 300), c.addEventListener("shown.bs.tab", (function(e) {
                !1 === l && (d.render(), l = !0)
            }))
        }
    };
    return {
        init: function() {
            e("#kt_chart_widget_8_week_toggle", "#kt_chart_widget_8_week_chart", [
                [
                    [100, 250, 30]
                ],
                [
                    [225, 300, 35]
                ],
                [
                    [300, 350, 25]
                ],
                [
                    [350, 350, 20]
                ],
                [
                    [450, 400, 25]
                ],
                [
                    [550, 350, 35]
                ]
            ], !1), e("#kt_chart_widget_8_month_toggle", "#kt_chart_widget_8_month_chart", [
                [
                    [125, 300, 40]
                ],
                [
                    [250, 350, 35]
                ],
                [
                    [350, 450, 30]
                ],
                [
                    [450, 250, 25]
                ],
                [
                    [500, 500, 30]
                ],
                [
                    [650, 250, 28]
                ]
            ], !0)
        }
    }
}();
"undefined" != typeof module && (module.exports = KTChartsWidget8), KTUtil.onDOMContentLoaded((function() {
    KTChartsWidget8.init()
}));
var KTChartsWidget9 = {
    init: function() {
        ! function() {
            var e = document.getElementById("kt_charts_widget_9"),
                t = parseInt(KTUtil.css(e, "height")),
                a = KTUtil.getCssVariableValue("--bs-gray-400"),
                o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                r = KTUtil.getCssVariableValue("--bs-gray-200"),
                i = KTUtil.getCssVariableValue("--bs-primary");
            if (e) {
                var s = {
                        series: [{
                            name: "Net Profit",
                            data: [21, 21, 26, 26, 31, 31, 27]
                        }, {
                            name: "Revenue",
                            data: [12, 16, 16, 21, 21, 18, 18]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "area",
                            height: t,
                            toolbar: {
                                show: !1
                            }
                        },
                        plotOptions: {},
                        legend: {
                            show: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        fill: {
                            type: "solid",
                            opacity: 1
                        },
                        stroke: {
                            curve: "smooth"
                        },
                        xaxis: {
                            categories: ["", "06 Sep", "13 Sep", "20 Sep", "27 Sep", "30 Sep", ""],
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !1
                            },
                            labels: {
                                style: {
                                    colors: a,
                                    fontSize: "12px"
                                }
                            },
                            crosshairs: {
                                position: "front",
                                stroke: {
                                    color: a,
                                    width: 1,
                                    dashArray: 3
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: "12px"
                                }
                            }
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    colors: a,
                                    fontSize: "12px"
                                }
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            },
                            y: {
                                formatter: function(e) {
                                    return "$" + e + " thousands"
                                }
                            }
                        },
                        crosshairs: {
                            show: !0,
                            position: "front",
                            stroke: {
                                color: KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                                width: 1,
                                dashArray: 0
                            }
                        },
                        colors: [r, i],
                        grid: {
                            borderColor: o,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: !0
                                }
                            }
                        },
                        markers: {
                            colors: [r, i],
                            strokeColor: [KTUtil.getCssVariableValue("--bs-danger"), KTUtil.getCssVariableValue("--bs-warning")],
                            strokeWidth: 3
                        }
                    },
                    n = new ApexCharts(e, s);
                setTimeout((function() {
                    n.render()
                }), 300)
            }
        }()
    }
};
"undefined" != typeof module && (module.exports = KTChartsWidget9), KTUtil.onDOMContentLoaded((function() {
    KTChartsWidget9.init()
}));
var KTTablesWidget3 = function() {
    var e, t;
    const a = () => {
        const e = document.querySelector('[data-kt-table-widget-3="filter_status"]');
        $(e).on("select2:select", (function(e) {
            const a = $(this).val();
            "Show All" === a ? t.search("").draw() : t.search(a).draw()
        }))
    };
    return {
        init: function() {
            (e = document.querySelector("#kt_widget_table_3")) && (t = $(e).DataTable({
                info: !1,
                order: [],
                paging: !1,
                pageLength: !1
            }), (() => {
                const e = document.querySelector('[data-kt-table-widget-3="tabs_nav"]').querySelectorAll('[data-kt-table-widget-3="tab"]'),
                    a = ["border-bottom", "border-3", "border-primary"];
                e.forEach((o => {
                    o.addEventListener("click", (r => {
                        const i = o.getAttribute("data-kt-table-widget-3-value");
                        e.forEach((e => {
                            e.classList.remove(...a), e.classList.add("text-muted")
                        })), o.classList.remove("text-muted"), o.classList.add(...a), "Show All" === i ? t.search("").draw() : t.search(i).draw()
                    }))
                }))
            })(), a())
        }
    }
}();
"undefined" != typeof module && (module.exports = KTTablesWidget3), KTUtil.onDOMContentLoaded((function() {
    KTTablesWidget3.init()
}));
var KTTablesWidget4 = function() {
    var e, t, a;
    const o = () => {
            const e = document.querySelector('[data-kt-table-widget-4="filter_status"]');
            $(e).on("select2:select", (function(e) {
                const a = $(this).val();
                "Show All" === a ? t.search("").draw() : t.search(a).draw()
            }))
        },
        r = [{
            image: "76",
            name: "Go Pro 8",
            description: "Latest  version of Go Pro.",
            cost: "500.00",
            qty: "1",
            total: "500.00",
            stock: "12"
        }, {
            image: "60",
            name: "Bose Earbuds",
            description: "Top quality earbuds from Bose.",
            cost: "300.00",
            qty: "1",
            total: "300.00",
            stock: "8"
        }, {
            image: "211",
            name: "Dry-fit Sports T-shirt",
            description: "Comfortable sportswear.",
            cost: "89.00",
            qty: "1",
            total: "89.00",
            stock: "18"
        }, {
            image: "21",
            name: "Apple Airpod 3",
            description: "Apple's latest earbuds.",
            cost: "200.00",
            qty: "2",
            total: "400.00",
            stock: "32"
        }, {
            image: "83",
            name: "Nike Pumps",
            description: "Apple's latest headphones.",
            cost: "200.00",
            qty: "1",
            total: "200.00",
            stock: "8"
        }],
        i = () => {
            const e = document.querySelectorAll('[data-kt-table-widget-4="expand_row"]'),
                t = [3, 1, 3, 1, 2, 1];
            e.forEach(((e, a) => {
                e.addEventListener("click", (o => {
                    o.stopImmediatePropagation(), o.preventDefault();
                    const i = e.closest("tr"),
                        n = ["isOpen", "border-bottom-0"],
                        l = [];
                    for (var d = 0; d < t[a]; d++) l.push(r[d]);
                    if (i.classList.contains("isOpen")) {
                        for (; i.nextSibling && "subtable_template" === i.nextSibling.getAttribute("data-kt-table-widget-4");) i.nextSibling.parentNode.removeChild(i.nextSibling);
                        i.classList.remove(...n), e.classList.remove("active")
                    } else s(l, i), i.classList.add(...n), e.classList.add("active")
                }))
            }))
        },
        s = (t, o) => {
            t.forEach(((r, i) => {
                const s = a.cloneNode(!0),
                    n = s.querySelector('[data-kt-table-widget-4="template_image"]'),
                    l = s.querySelector('[data-kt-table-widget-4="template_name"]'),
                    d = s.querySelector('[data-kt-table-widget-4="template_description"]'),
                    c = s.querySelector('[data-kt-table-widget-4="template_cost"]'),
                    u = s.querySelector('[data-kt-table-widget-4="template_qty"]'),
                    h = s.querySelector('[data-kt-table-widget-4="template_total"]'),
                    p = s.querySelector('[data-kt-table-widget-4="template_stock"]'),
                    g = n.getAttribute("src");
                n.setAttribute("src", g + r.image + ".gif"), l.innerText = r.name, d.innerText = r.description, c.innerText = r.cost, u.innerText = r.qty, h.innerText = r.total, r.stock > 10 ? p.innerHTML = '<div class="badge badge-light-success">In Stock</div>' : p.innerHTML = '<div class="badge badge-light-warning">Low Stock</div>', 1 === t.length || t.length;
                e.querySelector("tbody").insertBefore(s, o.nextSibling)
            }))
        },
        n = () => {
            document.querySelectorAll('[data-kt-table-widget-4="subtable_template"]').forEach((e => {
                e.parentNode.removeChild(e)
            }));
            e.querySelectorAll("tbody tr").forEach((e => {
                e.classList.remove("isOpen"), e.querySelector('[data-kt-table-widget-4="expand_row"]') && e.querySelector('[data-kt-table-widget-4="expand_row"]').classList.remove("active")
            }))
        };
    return {
        init: function() {
            (e = document.querySelector("#kt_table_widget_4_table")) && ((() => {
                e.querySelectorAll("tbody tr").forEach((e => {
                    const t = e.querySelectorAll("td"),
                        a = moment(t[1].innerHTML, "DD MMM YYYY, LT").format();
                    e.closest('[data-kt-table-widget-4="subtable_template"]') || (t[1].setAttribute("data-order", a), t[1].innerText = moment(a).fromNow())
                }));
                const o = document.querySelector('[data-kt-table-widget-4="subtable_template"]');
                (a = o.cloneNode(!0)).classList.remove("d-none"), o.parentNode.removeChild(o), (t = $(e).DataTable({
                    info: !1,
                    order: [],
                    lengthChange: !1,
                    pageLength: 6,
                    ordering: !1,
                    paging: !1,
                    columnDefs: [{
                        orderable: !1,
                        targets: 0
                    }, {
                        orderable: !1,
                        targets: 6
                    }]
                })).on("draw", (function() {
                    n(), i()
                }))
            })(), document.querySelector('[data-kt-table-widget-4="search"]').addEventListener("keyup", (function(e) {
                t.search(e.target.value).draw()
            })), o(), i())
        }
    }
}();
"undefined" != typeof module && (module.exports = KTTablesWidget4), KTUtil.onDOMContentLoaded((function() {
    KTTablesWidget4.init()
}));
var KTTablesWidget5 = function() {
    var e, t;
    const a = () => {
        const e = document.querySelector('[data-kt-table-widget-5="filter_status"]');
        $(e).on("select2:select", (function(e) {
            const a = $(this).val();
            "Show All" === a ? t.search("").draw() : t.search(a).draw()
        }))
    };
    return {
        init: function() {
            (e = document.querySelector("#kt_table_widget_5_table")) && (e.querySelectorAll("tbody tr").forEach((e => {
                const t = e.querySelectorAll("td"),
                    a = moment(t[2].innerHTML, "MMM DD, YYYY").format();
                t[2].setAttribute("data-order", a)
            })), t = $(e).DataTable({
                info: !1,
                order: [],
                lengthChange: !1,
                pageLength: 6,
                paging: !1,
                columnDefs: [{
                    orderable: !1,
                    targets: 1
                }]
            }), a())
        }
    }
}();
"undefined" != typeof module && (module.exports = KTTablesWidget5), KTUtil.onDOMContentLoaded((function() {
    KTTablesWidget5.init()
}));
var KTTimelineWidget1 = function() {
    const e = () => {
        document.querySelectorAll('[data-kt-timeline-widget-1="tab"]').forEach((e => {
            e.addEventListener("shown.bs.tab", (t => {
                "#kt_timeline_widget_1_tab_week" === e.getAttribute("href") && (() => {
                    const e = document.querySelector("#kt_timeline_widget_1_2");
                    if (!e) return;
                    if (e.innerHTML) return;
                    var t = Date.now(),
                        a = e.getAttribute("data-kt-timeline-widget-1-image-root"),
                        o = new vis.DataSet([{
                            id: 1,
                            content: "Research",
                            order: 1
                        }, {
                            id: 2,
                            content: "Phase 2.6 QA",
                            order: 2
                        }, {
                            id: 3,
                            content: "UI Design",
                            order: 3
                        }, {
                            id: 4,
                            content: "Development",
                            order: 4
                        }]),
                        r = new vis.DataSet([{
                            id: 1,
                            group: 1,
                            start: t,
                            end: moment(t).add(7, "days"),
                            content: "Framework",
                            progress: "71%",
                            color: "primary",
                            users: ["avatars/150-1.jpg", "avatars/150-2.jpg"]
                        }, {
                            id: 2,
                            group: 2,
                            start: moment(t).add(7, "days"),
                            end: moment(t).add(14, "days"),
                            content: "Accessibility",
                            progress: "84%",
                            color: "success",
                            users: ["avatars/150-3.jpg"]
                        }, {
                            id: 3,
                            group: 3,
                            start: moment(t).add(3, "days"),
                            end: moment(t).add(20, "days"),
                            content: "Microsites",
                            progress: "69%",
                            color: "danger",
                            users: ["avatars/150-4.jpg", "avatars/150-5.jpg"]
                        }, {
                            id: 4,
                            group: 4,
                            start: moment(t).add(10, "days"),
                            end: moment(t).add(21, "days"),
                            content: "Deployment",
                            progress: "74%",
                            color: "info",
                            users: ["avatars/150-6.jpg", "avatars/150-7.jpg", "avatars/150-8.jpg"]
                        }]),
                        i = {
                            zoomable: !1,
                            margin: {
                                item: {
                                    horizontal: 10,
                                    vertical: 35
                                }
                            },
                            showCurrentTime: !1,
                            xss: {
                                disabled: !1,
                                filterOptions: {
                                    whiteList: {
                                        div: ["class", "style"],
                                        img: ["src", "alt"],
                                        a: ["href", "class"]
                                    }
                                }
                            },
                            template: function(e) {
                                const t = e.users;
                                let o = "";
                                return t.forEach((e => {
                                    o += `<div class="symbol symbol-circle symbol-25px"><img src="${a+e}" alt="" /></div>`
                                })), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center flex-nowrap position-relative z-index-2">\n                        <div class="symbol-group symbol-hover me-3">\n                            ${o}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
                            },
                            onInitialDrawComplete: function() {
                                const t = e.parentNode,
                                    a = KTBlockUI.getInstance(t);
                                a.isBlocked() && setTimeout((() => {
                                    a.release()
                                }), 1e3)
                            }
                        };
                    const s = new vis.Timeline(e, r, o, i);
                    s.on("currentTimeTick", (() => {
                        s.off("currentTimeTick")
                    }))
                })(), "#kt_timeline_widget_1_tab_month" === e.getAttribute("href") && (() => {
                    const e = document.querySelector("#kt_timeline_widget_1_3");
                    if (!e) return;
                    if (e.innerHTML) return;
                    var t = Date.now(),
                        a = e.getAttribute("data-kt-timeline-widget-1-image-root"),
                        o = new vis.DataSet([{
                            id: "research",
                            content: "Research",
                            order: 1
                        }, {
                            id: "qa",
                            content: "Phase 2.6 QA",
                            order: 2
                        }, {
                            id: "ui",
                            content: "UI Design",
                            order: 3
                        }, {
                            id: "dev",
                            content: "Development",
                            order: 4
                        }]),
                        r = new vis.DataSet([{
                            id: 1,
                            group: "research",
                            start: t,
                            end: moment(t).add(2, "months"),
                            content: "Tags",
                            progress: "79%",
                            color: "primary",
                            users: ["avatars/150-1.jpg", "avatars/150-2.jpg"]
                        }, {
                            id: 2,
                            group: "qa",
                            start: moment(t).add(.5, "months"),
                            end: moment(t).add(5, "months"),
                            content: "Testing",
                            progress: "64%",
                            color: "success",
                            users: ["avatars/150-3.jpg"]
                        }, {
                            id: 3,
                            group: "ui",
                            start: moment(t).add(2, "months"),
                            end: moment(t).add(6.5, "months"),
                            content: "Media",
                            progress: "82%",
                            color: "danger",
                            users: ["avatars/150-4.jpg", "avatars/150-5.jpg"]
                        }, {
                            id: 4,
                            group: "dev",
                            start: moment(t).add(4, "months"),
                            end: moment(t).add(7, "months"),
                            content: "Plugins",
                            progress: "58%",
                            color: "info",
                            users: ["avatars/150-6.jpg", "avatars/150-7.jpg", "avatars/150-8.jpg"]
                        }]),
                        i = {
                            zoomable: !1,
                            margin: {
                                item: {
                                    horizontal: 10,
                                    vertical: 35
                                }
                            },
                            showCurrentTime: !1,
                            xss: {
                                disabled: !1,
                                filterOptions: {
                                    whiteList: {
                                        div: ["class", "style"],
                                        img: ["src", "alt"],
                                        a: ["href", "class"]
                                    }
                                }
                            },
                            template: function(e) {
                                const t = e.users;
                                let o = "";
                                return t.forEach((e => {
                                    o += `<div class="symbol symbol-circle symbol-25px"><img src="${a+e}" alt="" /></div>`
                                })), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${o}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
                            },
                            onInitialDrawComplete: function() {
                                const t = e.parentNode,
                                    a = KTBlockUI.getInstance(t);
                                a.isBlocked() && setTimeout((() => {
                                    a.release()
                                }), 1e3)
                            }
                        };
                    const s = new vis.Timeline(e, r, o, i);
                    s.on("currentTimeTick", (() => {
                        s.off("currentTimeTick")
                    }))
                })()
            }))
        }))
    };
    return {
        init: function() {
            (() => {
                const e = document.querySelector("#kt_timeline_widget_1_1");
                if (!e) return;
                if (e.innerHTML) return;
                var t = Date.now(),
                    a = e.getAttribute("data-kt-timeline-widget-1-image-root"),
                    o = new vis.DataSet([{
                        id: "research",
                        content: "Research",
                        order: 1
                    }, {
                        id: "qa",
                        content: "Phase 2.6 QA",
                        order: 2
                    }, {
                        id: "ui",
                        content: "UI Design",
                        order: 3
                    }, {
                        id: "dev",
                        content: "Development",
                        order: 4
                    }]),
                    r = new vis.DataSet([{
                        id: 1,
                        group: "research",
                        start: t,
                        end: moment(t).add(1.5, "hours"),
                        content: "Meeting",
                        progress: "60%",
                        color: "primary",
                        users: ["avatars/150-1.jpg", "avatars/150-2.jpg"]
                    }, {
                        id: 2,
                        group: "qa",
                        start: moment(t).add(1, "hours"),
                        end: moment(t).add(2, "hours"),
                        content: "Testing",
                        progress: "47%",
                        color: "success",
                        users: ["avatars/150-3.jpg"]
                    }, {
                        id: 3,
                        group: "ui",
                        start: moment(t).add(30, "minutes"),
                        end: moment(t).add(2.5, "hours"),
                        content: "Landing page",
                        progress: "55%",
                        color: "danger",
                        users: ["avatars/150-4.jpg", "avatars/150-5.jpg"]
                    }, {
                        id: 4,
                        group: "dev",
                        start: moment(t).add(1.5, "hours"),
                        end: moment(t).add(3, "hours"),
                        content: "Products module",
                        progress: "75%",
                        color: "info",
                        users: ["avatars/150-6.jpg", "avatars/150-7.jpg", "avatars/150-8.jpg"]
                    }]),
                    i = {
                        zoomable: !1,
                        margin: {
                            item: {
                                horizontal: 10,
                                vertical: 35
                            }
                        },
                        showCurrentTime: !1,
                        xss: {
                            disabled: !1,
                            filterOptions: {
                                whiteList: {
                                    div: ["class", "style"],
                                    img: ["src", "alt"],
                                    a: ["href", "class"]
                                }
                            }
                        },
                        template: function(e) {
                            const t = e.users;
                            let o = "";
                            return t.forEach((e => {
                                o += `<div class="symbol symbol-circle symbol-25px"><img src="${a+e}" alt="" /></div>`
                            })), `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center flex-nowrap position-relative z-index-2">\n                        <div class="symbol-group symbol-hover me-3">\n                            ${o}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
                        },
                        onInitialDrawComplete: function() {
                            const t = e.parentNode,
                                a = KTBlockUI.getInstance(t);
                            a.isBlocked() && setTimeout((() => {
                                a.release()
                            }), 1e3)
                        }
                    };
                const s = new vis.Timeline(e, r, o, i);
                s.on("currentTimeTick", (() => {
                    s.off("currentTimeTick")
                }))
            })(), document.querySelectorAll('[data-kt-timeline-widget-1-blockui="true"]').forEach((e => {
                new KTBlockUI(e, {
                    overlayClass: "bg-body"
                }).block()
            })), e()
        }
    }
}();
"undefined" != typeof module && (module.exports = KTTimelineWidget1), KTUtil.onDOMContentLoaded((function() {
    KTTimelineWidget1.init()
}));