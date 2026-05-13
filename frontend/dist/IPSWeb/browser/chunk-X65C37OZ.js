import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PT7R7SID.js";
import {
  ApiService
} from "./chunk-NCFNA77J.js";
import {
  CommonModule,
  Component,
  DatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QNZMPU6U.js";

// src/app/admin/rips/rips.ts
var _forTrack0 = ($index, $item) => $item.id;
function RipsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando reportes...");
    \u0275\u0275elementEnd()();
  }
}
function RipsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 3);
    \u0275\u0275text(2, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay reportes RIPS generados.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 2);
    \u0275\u0275listener("click", function RipsComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm());
    });
    \u0275\u0275text(6, "Generar primer reporte");
    \u0275\u0275elementEnd()();
  }
}
function RipsComponent_Conditional_10_For_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function RipsComponent_Conditional_10_For_17_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function RipsComponent_Conditional_10_For_17_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function RipsComponent_Conditional_10_For_17_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markSubmitted(r_r4.id));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Marcar enviado ");
    \u0275\u0275elementEnd();
  }
}
function RipsComponent_Conditional_10_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "div", 12)(17, "button", 13);
    \u0275\u0275listener("click", function RipsComponent_Conditional_10_For_17_Template_button_click_17_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadReport(r_r4.id));
    });
    \u0275\u0275conditionalCreate(18, RipsComponent_Conditional_10_For_17_Conditional_18_Template, 1, 0, "span", 14)(19, RipsComponent_Conditional_10_For_17_Conditional_19_Template, 2, 0, "span", 3);
    \u0275\u0275text(20, " Descargar ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, RipsComponent_Conditional_10_For_17_Conditional_21_Template, 4, 0, "button", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 11, r_r4.period_start, "dd/MM/yyyy"), " \u2013 ", \u0275\u0275pipeBind2(4, 14, r_r4.period_end, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r4.total_patients);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.total_consultations);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClass(r_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(r_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 17, r_r4.generated_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.downloadingId() === r_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.downloadingId() === r_r4.id ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(r_r4.status === "generado" ? 21 : -1);
  }
}
function RipsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 7)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Pacientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Consultas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Generado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RipsComponent_Conditional_10_For_17_Template, 22, 20, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.reports());
  }
}
function RipsComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formError());
  }
}
function RipsComponent_Conditional_11_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
    \u0275\u0275text(1, " Generando... ");
  }
}
function RipsComponent_Conditional_11_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Generar RIPS ");
  }
}
function RipsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function RipsComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("click", function RipsComponent_Conditional_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "h3");
    \u0275\u0275text(4, "Generar Reporte RIPS 2.0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function RipsComponent_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275conditionalCreate(9, RipsComponent_Conditional_11_Conditional_9_Template, 4, 1, "div", 22);
    \u0275\u0275elementStart(10, "div", 23)(11, "div", 24)(12, "label");
    \u0275\u0275text(13, "Fecha de inicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function RipsComponent_Conditional_11_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.periodStart, $event) || (ctx_r1.periodStart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24)(16, "label");
    \u0275\u0275text(17, "Fecha de fin *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function RipsComponent_Conditional_11_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.periodEnd, $event) || (ctx_r1.periodEnd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 27)(20, "label");
    \u0275\u0275text(21, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "textarea", 28);
    \u0275\u0275twoWayListener("ngModelChange", function RipsComponent_Conditional_11_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 29)(24, "span", 3);
    \u0275\u0275text(25, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27, "Se incluir\xE1n todas las citas con estado ");
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29, "Completada");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " en el per\xEDodo seleccionado. El archivo JSON resultante cumple con el est\xE1ndar RIPS 2.0 para presentaci\xF3n ante la ADRES.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 30)(32, "button", 31);
    \u0275\u0275listener("click", function RipsComponent_Conditional_11_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(33, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 32);
    \u0275\u0275listener("click", function RipsComponent_Conditional_11_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateRIPS());
    });
    \u0275\u0275conditionalCreate(35, RipsComponent_Conditional_11_Conditional_35_Template, 2, 0)(36, RipsComponent_Conditional_11_Conditional_36_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.formError() ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.periodStart);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.periodEnd);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.generating());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.generating() ? 35 : 36);
  }
}
var _RipsComponent = class _RipsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.reports = signal([], ...ngDevMode ? [{ debugName: "reports" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
    this.generating = signal(false, ...ngDevMode ? [{ debugName: "generating" }] : []);
    this.formError = signal("", ...ngDevMode ? [{ debugName: "formError" }] : []);
    this.downloadingId = signal(null, ...ngDevMode ? [{ debugName: "downloadingId" }] : []);
    this.periodStart = "";
    this.periodEnd = "";
    this.notes = "";
  }
  ngOnInit() {
    this.loadReports();
  }
  loadReports() {
    this.loading.set(true);
    this.api.getRIPSReports().subscribe({
      next: (r) => {
        this.reports.set(r);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openForm() {
    const now = /* @__PURE__ */ new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split("T")[0];
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split("T")[0];
    this.periodStart = firstDay;
    this.periodEnd = lastDay;
    this.notes = "";
    this.formError.set("");
    this.showForm.set(true);
  }
  generateRIPS() {
    if (!this.periodStart || !this.periodEnd) {
      this.formError.set("Indica el per\xEDodo del reporte.");
      return;
    }
    if (this.periodEnd < this.periodStart) {
      this.formError.set("La fecha de fin debe ser posterior a la de inicio.");
      return;
    }
    this.generating.set(true);
    this.formError.set("");
    this.api.generateRIPS(this.periodStart, this.periodEnd, this.notes || void 0).subscribe({
      next: () => {
        this.generating.set(false);
        this.showForm.set(false);
        this.loadReports();
      },
      error: (err) => {
        this.generating.set(false);
        this.formError.set(err.error?.detail ?? "Error al generar el reporte.");
      }
    });
  }
  downloadReport(id) {
    this.downloadingId.set(id);
    this.api.downloadRIPS(id).subscribe({
      next: (blob) => {
        const report = this.reports().find((r) => r.id === id);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `RIPS_${report?.period_start ?? id}_${report?.period_end ?? ""}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.downloadingId.set(null);
      },
      error: () => this.downloadingId.set(null)
    });
  }
  markSubmitted(id) {
    this.api.markRIPSSubmitted(id).subscribe(() => this.loadReports());
  }
  statusLabel(s) {
    const m = {
      borrador: "Borrador",
      generado: "Generado",
      enviado: "Enviado",
      aceptado: "Aceptado",
      rechazado: "Rechazado"
    };
    return m[s] ?? s;
  }
  statusClass(s) {
    const m = {
      borrador: "badge-gray",
      generado: "badge-blue",
      enviado: "badge-amber",
      aceptado: "badge-green",
      rechazado: "badge-red"
    };
    return m[s] ?? "badge-gray";
  }
};
_RipsComponent.\u0275fac = function RipsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RipsComponent)();
};
_RipsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RipsComponent, selectors: [["app-rips"]], decls: 12, vars: 2, consts: [[1, "module-header"], [1, "module-desc"], [1, "btn-primary", 3, "click"], [1, "material-icons"], [1, "card"], [1, "loading"], [1, "empty"], [1, "data-table"], [1, "modal-backdrop"], [1, "spinner"], [1, "period-cell"], [1, "badge"], [1, "action-row"], ["title", "Descargar JSON RIPS", 1, "btn-action", 3, "click", "disabled"], [1, "spinner-sm"], ["title", "Marcar como enviado a ADRES", 1, "btn-action", "btn-submitted"], ["title", "Marcar como enviado a ADRES", 1, "btn-action", "btn-submitted", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", "modal-sm", 3, "click"], [1, "modal-header"], [1, "btn-icon-only", 3, "click"], [1, "modal-body"], [1, "alert-error"], [1, "form-grid"], [1, "field"], ["type", "date", "name", "p_start", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "p_end", 3, "ngModelChange", "ngModel"], [1, "field", "field-full"], ["rows", "2", "name", "notes", "placeholder", "Notas opcionales sobre este reporte...", 3, "ngModelChange", "ngModel"], [1, "rips-info"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"]], template: function RipsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, "Genera el Registro Individual de Prestaci\xF3n de Servicios (RIPS 2.0) seg\xFAn la Resoluci\xF3n 2275 de 2023.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function RipsComponent_Template_button_click_3_listener() {
      return ctx.openForm();
    });
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Generar reporte ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275conditionalCreate(8, RipsComponent_Conditional_8_Template, 4, 0, "div", 5)(9, RipsComponent_Conditional_9_Template, 7, 0, "div", 6)(10, RipsComponent_Conditional_10_Template, 18, 0, "table", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, RipsComponent_Conditional_11_Template, 37, 6, "div", 8);
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.loading() ? 8 : ctx.reports().length === 0 ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.showForm() ? 11 : -1);
  }
}, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, \n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.btn-icon-only[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.period-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.78rem;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  color: #64748b;\n  white-space: nowrap;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-submitted[_ngcontent-%COMP%] {\n  border-color: #bbf7d0;\n  color: #16a34a;\n}\n.btn-submitted[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dcfce7;\n}\n.rips-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #dbeafe;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-top: 4px;\n}\n.rips-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #2563eb;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.rips-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #1e40af;\n  line-height: 1.5;\n}\n.modal-sm[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n/*# sourceMappingURL=rips.css.map */'] });
var RipsComponent = _RipsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RipsComponent, [{
    type: Component,
    args: [{ selector: "app-rips", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="module-header">
  <p class="module-desc">Genera el Registro Individual de Prestaci\xF3n de Servicios (RIPS 2.0) seg\xFAn la Resoluci\xF3n 2275 de 2023.</p>
  <button class="btn-primary" (click)="openForm()">
    <span class="material-icons">add</span> Generar reporte
  </button>
</div>

<div class="card">
  @if (loading()) {
    <div class="loading"><div class="spinner"></div><p>Cargando reportes...</p></div>
  } @else if (reports().length === 0) {
    <div class="empty">
      <span class="material-icons">summarize</span>
      <p>No hay reportes RIPS generados.</p>
      <button class="btn-primary" (click)="openForm()">Generar primer reporte</button>
    </div>
  } @else {
    <table class="data-table">
      <thead>
        <tr>
          <th>Per\xEDodo</th>
          <th>Pacientes</th>
          <th>Consultas</th>
          <th>Estado</th>
          <th>Generado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        @for (r of reports(); track r.id) {
          <tr>
            <td class="period-cell">{{ r.period_start | date:'dd/MM/yyyy' }} \u2013 {{ r.period_end | date:'dd/MM/yyyy' }}</td>
            <td>{{ r.total_patients }}</td>
            <td>{{ r.total_consultations }}</td>
            <td><span class="badge" [class]="statusClass(r.status)">{{ statusLabel(r.status) }}</span></td>
            <td>{{ r.generated_at | date:'dd/MM/yyyy HH:mm' }}</td>
            <td>
              <div class="action-row">
                <button class="btn-action" (click)="downloadReport(r.id)"
                  [disabled]="downloadingId() === r.id" title="Descargar JSON RIPS">
                  @if (downloadingId() === r.id) { <span class="spinner-sm"></span> }
                  @else { <span class="material-icons">download</span> }
                  Descargar
                </button>
                @if (r.status === 'generado') {
                  <button class="btn-action btn-submitted" (click)="markSubmitted(r.id)" title="Marcar como enviado a ADRES">
                    <span class="material-icons">send</span> Marcar enviado
                  </button>
                }
              </div>
            </td>
          </tr>
        }
      </tbody>
    </table>
  }
</div>

@if (showForm()) {
  <div class="modal-backdrop" (click)="showForm.set(false)">
    <div class="modal modal-sm" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>Generar Reporte RIPS 2.0</h3>
        <button class="btn-icon-only" (click)="showForm.set(false)"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (formError()) { <div class="alert-error"><span class="material-icons">error_outline</span>{{ formError() }}</div> }
        <div class="form-grid">
          <div class="field">
            <label>Fecha de inicio *</label>
            <input type="date" [(ngModel)]="periodStart" name="p_start">
          </div>
          <div class="field">
            <label>Fecha de fin *</label>
            <input type="date" [(ngModel)]="periodEnd" name="p_end">
          </div>
          <div class="field field-full">
            <label>Observaciones</label>
            <textarea [(ngModel)]="notes" rows="2" name="notes"
              placeholder="Notas opcionales sobre este reporte..."></textarea>
          </div>
        </div>
        <div class="rips-info">
          <span class="material-icons">info</span>
          <p>Se incluir\xE1n todas las citas con estado <strong>Completada</strong> en el per\xEDodo seleccionado. El archivo JSON resultante cumple con el est\xE1ndar RIPS 2.0 para presentaci\xF3n ante la ADRES.</p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showForm.set(false)">Cancelar</button>
        <button class="btn-primary" (click)="generateRIPS()" [disabled]="generating()">
          @if (generating()) { <span class="spinner-sm"></span> Generando... }
          @else { <span class="material-icons">summarize</span> Generar RIPS }
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/admin/rips/rips.scss */\n.module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.search-box .btn-icon {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box .btn-icon:hover {\n  background: #1d4ed8;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary,\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary:hover,\n.btn-danger:hover {\n  background: #f8fafc;\n}\n.btn-danger {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger:hover {\n  background: #fee2e2;\n}\n.btn-icon-only {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only .material-icons {\n  font-size: 20px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table tbody tr:hover {\n  background: #fafbfc;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty p {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full {\n  grid-column: 1/-1;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field input,\n.field select,\n.field textarea {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field input::placeholder,\n.field select::placeholder,\n.field textarea::placeholder {\n  color: #94a3b8;\n}\n.field textarea {\n  resize: vertical;\n}\n.field select {\n  cursor: pointer;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.period-cell {\n  white-space: nowrap;\n}\n.action-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.78rem;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  color: #64748b;\n  white-space: nowrap;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-action .material-icons {\n  font-size: 17px;\n}\n.btn-action:hover:not(:disabled) {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-action:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-submitted {\n  border-color: #bbf7d0;\n  color: #16a34a;\n}\n.btn-submitted:hover:not(:disabled) {\n  background: #dcfce7;\n}\n.rips-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #dbeafe;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-top: 4px;\n}\n.rips-info .material-icons {\n  font-size: 18px;\n  color: #2563eb;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.rips-info p {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #1e40af;\n  line-height: 1.5;\n}\n.modal-sm {\n  max-width: 520px;\n}\n/*# sourceMappingURL=rips.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RipsComponent, { className: "RipsComponent", filePath: "src/app/admin/rips/rips.ts", lineNumber: 13 });
})();
export {
  RipsComponent
};
//# sourceMappingURL=chunk-X65C37OZ.js.map
