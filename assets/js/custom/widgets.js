"use strict";
var KTWidgets = function() {
    var t = function(t, e, o, a) {
        var r = document.querySelector(e),
            s = parseInt(KTUtil.css(r, "height")),
            i = KTUtil.getCssVariableValue("--bs-border-dashed-color");
        if (r) {
            var l = {
                    series: [{
                        name: "Profit",
                        data: o
                    }],
                    chart: {
                        fontFamily: "inherit",
                        type: "bar",
                        width: "100%",
                        height: s,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            horizontal: !1,
                            columnWidth: ["30%"],
                            borderRadius: 4
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
                        crosshairs: {
                            show: !1
                        },
                        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        },
                        labels: {
                            style: {
                                colors: KTUtil.getCssVariableValue("--bs-gray-400"),
                                fontSize: "12px"
                            }
                        }
                    },
                    yaxis: {
                        crosshairs: {
                            show: !1
                        },
                        labels: {
                            style: {
                                colors: KTUtil.getCssVariableValue("--bs-gray-400"),
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
                                type: "none"
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
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        style: {
                            fontSize: "12px"
                        },
                        y: {
                            formatter: function(t) {
                                return "$" + t + "k"
                            }
                        }
                    },
                    colors: [KTUtil.getCssVariableValue("--bs-primary")],
                    grid: {
                        borderColor: i,
                        strokeDashArray: 4,
                        yaxis: {
                            lines: {
                                show: !0
                            }
                        }
                    }
                },
                n = new ApexCharts(r, l),
                c = !1,
                d = document.querySelector(t);
            !0 === a && setTimeout((function() {
                n.render(), c = !0
            }), 500), d.addEventListener("shown.bs.tab", (function(t) {
                0 == c && (n.render(), c = !0)
            }))
        }
    };
    return {
        init: function() {
            var e, o, a, r, s;
            ! function() {
                var t = document.getElementById("kt_chart_widget_2_chart"),
                    e = parseInt(KTUtil.css(t, "height"));
                if (t) {
                    var o = {
                        labels: ["Total Members"],
                        series: [74],
                        chart: {
                            fontFamily: "inherit",
                            height: e,
                            type: "radialBar",
                            offsetY: 0
                        },
                        plotOptions: {
                            radialBar: {
                                startAngle: -90,
                                endAngle: 90,
                                hollow: {
                                    margin: 0,
                                    size: "70%"
                                },
                                dataLabels: {
                                    showOn: "always",
                                    name: {
                                        show: !0,
                                        fontSize: "13px",
                                        fontWeight: "700",
                                        offsetY: -5,
                                        color: KTUtil.getCssVariableValue("--bs-gray-500")
                                    },
                                    value: {
                                        color: KTUtil.getCssVariableValue("--bs-gray-700"),
                                        fontSize: "30px",
                                        fontWeight: "700",
                                        offsetY: -40,
                                        show: !0
                                    }
                                },
                                track: {
                                    background: KTUtil.getCssVariableValue("--bs-light-primary"),
                                    strokeWidth: "100%"
                                }
                            }
                        },
                        colors: [KTUtil.getCssVariableValue("--bs-primary")],
                        stroke: {
                            lineCap: "round"
                        }
                    };
                    new ApexCharts(t, o).render()
                }
            }(), e = document.querySelector("#kt_widget_11_load_more_btn"), o = document.querySelector("#kt_widget_11"), e && e.addEventListener("click", (function(t) {
                t.preventDefault(), e.setAttribute("data-kt-indicator", "on"), setTimeout((function() {
                    e.removeAttribute("data-kt-indicator"), o.classList.remove("d-none"), e.classList.add("d-none"), KTUtil.scrollTo(o, 200)
                }), 2e3)
            })), t("#kt_charts_widget_12_tab_1", "#kt_charts_widget_12_chart_1", [30, 40, 30, 25, 40, 45, 30, 20, 40, 25, 20, 30], !0), t("#kt_charts_widget_12_tab_2", "#kt_charts_widget_12_chart_2", [25, 30, 25, 45, 30, 40, 30, 25, 40, 20, 25, 30], !1), a = document.querySelectorAll(".widget-17-chart"), [].slice.call(a).map((function(t) {
                var e = parseInt(KTUtil.css(t, "height"));
                if (t) {
                    var o = t.getAttribute("data-kt-chart-color"),
                        a = KTUtil.getCssVariableValue("--bs-gray-800"),
                        r = KTUtil.getCssVariableValue("--bs-gray-300"),
                        s = KTUtil.getCssVariableValue("--bs-" + o),
                        i = KTUtil.getCssVariableValue("--bs-light-" + o);
                    new ApexCharts(t, {
                        series: [{
                            name: "Net Profit",
                            data: [30, 30, 60, 25, 25, 40]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "area",
                            height: e,
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
                        fill1: {
                            type: "gradient",
                            opacity: 1,
                            gradient: {
                                type: "vertical",
                                shadeIntensity: .5,
                                gradientToColors: void 0,
                                inverseColors: !0,
                                opacityFrom: 1,
                                opacityTo: .375,
                                stops: [25, 50, 100],
                                colorStops: []
                            }
                        },
                        stroke: {
                            curve: "smooth",
                            show: !0,
                            width: 3,
                            colors: [s]
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
                                show: !1,
                                style: {
                                    colors: a,
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
                            max: 65,
                            labels: {
                                show: !1,
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
                                formatter: function(t) {
                                    return "$" + t + " thousands"
                                }
                            }
                        },
                        colors: [i],
                        markers: {
                            colors: [i],
                            strokeColor: [s],
                            strokeWidth: 3
                        }
                    }).render()
                }
            })), (r = document.querySelector("#kt_user_follow_button")) && r.addEventListener("click", (function(t) {
                t.preventDefault(), r.setAttribute("data-kt-indicator", "on"), r.disabled = !0, r.classList.contains("btn-success") ? setTimeout((function() {
                    r.removeAttribute("data-kt-indicator"), r.classList.remove("btn-success"), r.classList.add("btn-light"), r.querySelector(".svg-icon").classList.add("d-none"), r.querySelector(".indicator-label").innerHTML = "Follow", r.disabled = !1
                }), 1500) : setTimeout((function() {
                    r.removeAttribute("data-kt-indicator"), r.classList.add("btn-success"), r.classList.remove("btn-light"), r.querySelector(".svg-icon").classList.remove("d-none"), r.querySelector(".indicator-label").innerHTML = "Following", r.disabled = !1
                }), 1e3)
            })), (s = document.querySelector("#kt_user_menu_dark_mode_toggle")) && s.addEventListener("click", (function() {
                window.location.href = this.getAttribute("data-kt-url")
            }))
        }
    }
}();
KTUtil.onDOMContentLoaded((function() {
    KTWidgets.init()
}));