"use strict";
var KTModalCreateProjectFiles = function() {
    var e, t, o;
    return {
        init: function() {
            KTModalCreateProject.getForm(), o = KTModalCreateProject.getStepperObj(), e = KTModalCreateProject.getStepper().querySelector('[data-kt-element="files-next"]'), t = KTModalCreateProject.getStepper().querySelector('[data-kt-element="files-previous"]'), new Dropzone("#kt_modal_create_project_files_upload", {
                url: "https://keenthemes.com/scripts/void.php",
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                addRemoveLinks: !0,
                accept: function(e, t) {
                    "justinbieber.jpg" == e.name ? t("Naha, you don't.") : t()
                }
            }), e.addEventListener("click", (function(t) {
                t.preventDefault(), e.disabled = !0, e.setAttribute("data-kt-indicator", "on"), setTimeout((function() {
                    e.removeAttribute("data-kt-indicator"), e.disabled = !1, o.goNext()
                }), 1500)
            })), t.addEventListener("click", (function() {
                o.goPrevious()
            }))
        }
    }
}();
"undefined" != typeof module && void 0 !== module.exports && (window.KTModalCreateProjectFiles = module.exports = KTModalCreateProjectFiles);