import './polyfills.server.mjs';
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TFHTXFDN.mjs";
import {
  ApiService
} from "./chunk-NFAQJ3OI.mjs";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OCB3LWCK.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/admin/audit/audit.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function AuditComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.label);
  }
}
function AuditComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function AuditComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, "Limpiar");
    \u0275\u0275elementEnd();
  }
}
function AuditComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando registros...");
    \u0275\u0275elementEnd()();
  }
}
function AuditComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 3);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay registros de actividad.");
    \u0275\u0275elementEnd()();
  }
}
function AuditComponent_Conditional_17_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 20);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 8, log_r4.timestamp, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(log_r4.user_name ?? "Sistema");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.roleLabel(log_r4.user_role));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.actionClass(log_r4.action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.actionLabel(log_r4.action), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.entityLabel(log_r4.entity_type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r4.description);
  }
}
function AuditComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "table", 15)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Fecha / Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Acci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Entidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Descripci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, AuditComponent_Conditional_17_For_19_Template, 17, 11, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.logs().length, " registros");
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.logs());
  }
}
var _AuditComponent = class _AuditComponent {
  constructor() {
    this.api = inject(ApiService);
    this.logs = signal([], ...ngDevMode ? [{ debugName: "logs" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.filterSearch = "";
    this.filterEntityType = "";
    this.entityTypes = [
      { value: "", label: "Todos" },
      { value: "cita", label: "Citas" },
      { value: "historia_clinica", label: "Historias Cl\xEDnicas" },
      { value: "paciente", label: "Pacientes" },
      { value: "usuario", label: "Usuarios" },
      { value: "sesion", label: "Sesiones" }
    ];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.getAuditLogs({
      search: this.filterSearch.trim() || void 0,
      entity_type: this.filterEntityType || void 0
    }).subscribe({
      next: (data) => {
        this.logs.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  clearFilters() {
    this.filterSearch = "";
    this.filterEntityType = "";
    this.load();
  }
  actionLabel(action) {
    const m = {
      crear: "Crear",
      actualizar: "Actualizar",
      cancelar: "Cancelar",
      atender: "Atender",
      abrir_hc: "Abrir HC",
      nueva_entrada: "Nueva Entrada",
      inicio_sesion: "Inicio sesi\xF3n",
      registro: "Registro",
      agendar_cita: "Agendar cita"
    };
    return m[action] ?? action;
  }
  entityLabel(type) {
    const m = {
      cita: "Cita",
      historia_clinica: "HC",
      paciente: "Paciente",
      usuario: "Usuario",
      sesion: "Sesi\xF3n"
    };
    return m[type] ?? type;
  }
  roleLabel(role) {
    if (!role)
      return "\u2014";
    const m = {
      admin: "Admin",
      doctor: "Doctor",
      enfermero: "Enfermero",
      recepcionista: "Recepcionista",
      auditor: "Auditor",
      paciente: "Paciente"
    };
    return m[role] ?? role;
  }
  actionClass(action) {
    const m = {
      crear: "tag-green",
      atender: "tag-blue",
      abrir_hc: "tag-blue",
      nueva_entrada: "tag-teal",
      actualizar: "tag-amber",
      agendar_cita: "tag-green",
      cancelar: "tag-red",
      inicio_sesion: "tag-gray",
      registro: "tag-purple"
    };
    return m[action] ?? "tag-gray";
  }
};
_AuditComponent.\u0275fac = function AuditComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuditComponent)();
};
_AuditComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditComponent, selectors: [["app-audit"]], decls: 18, vars: 4, consts: [[1, "module-header"], [1, "audit-filters"], [1, "search-box"], [1, "material-icons"], ["type", "text", "placeholder", "Buscar por descripci\xF3n o usuario...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "entity-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "btn-link"], [1, "btn-secondary", 3, "click"], [1, "card"], [1, "loading"], [1, "empty"], [1, "btn-link", 3, "click"], [1, "spinner"], [1, "audit-count"], [1, "data-table"], [1, "date-col"], [1, "text-muted"], [1, "action-tag"], [1, "entity-tag"], [1, "desc-col"]], template: function AuditComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function AuditComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterSearch, $event) || (ctx.filterSearch = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function AuditComponent_Template_input_keyup_enter_5_listener() {
      return ctx.load();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function AuditComponent_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterEntityType, $event) || (ctx.filterEntityType = $event);
      return $event;
    });
    \u0275\u0275listener("change", function AuditComponent_Template_select_change_6_listener() {
      return ctx.load();
    });
    \u0275\u0275repeaterCreate(7, AuditComponent_For_8_Template, 2, 2, "option", 6, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, AuditComponent_Conditional_9_Template, 2, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function AuditComponent_Template_button_click_10_listener() {
      return ctx.load();
    });
    \u0275\u0275elementStart(11, "span", 3);
    \u0275\u0275text(12, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Actualizar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275conditionalCreate(15, AuditComponent_Conditional_15_Template, 4, 0, "div", 10)(16, AuditComponent_Conditional_16_Template, 5, 0, "div", 11)(17, AuditComponent_Conditional_17_Template, 20, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.filterSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.filterEntityType);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.entityTypes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.filterSearch.trim() || ctx.filterEntityType ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.loading() ? 15 : ctx.logs().length === 0 ? 16 : 17);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, \n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.btn-icon-only[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.audit-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.entity-select[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 10px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.entity-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 0.8rem;\n  cursor: pointer;\n  padding: 0 4px;\n  white-space: nowrap;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  text-decoration: underline;\n}\n.audit-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  padding: 10px 16px 0;\n}\n.date-col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.desc-col[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  max-width: 400px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.82rem;\n}\n.action-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.action-tag.tag-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.action-tag.tag-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.action-tag.tag-teal[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.action-tag.tag-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.action-tag.tag-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.action-tag.tag-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.action-tag.tag-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.entity-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #0f172a;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=audit.css.map */'] });
var AuditComponent = _AuditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditComponent, [{
    type: Component,
    args: [{ selector: "app-audit", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="module-header">
  <div class="audit-filters">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input type="text" [(ngModel)]="filterSearch" placeholder="Buscar por descripci\xF3n o usuario..."
             (keyup.enter)="load()">
    </div>
    <select [(ngModel)]="filterEntityType" (change)="load()" class="entity-select">
      @for (t of entityTypes; track t.value) {
        <option [value]="t.value">{{ t.label }}</option>
      }
    </select>
    @if (filterSearch.trim() || filterEntityType) {
      <button class="btn-link" (click)="clearFilters()">Limpiar</button>
    }
  </div>
  <button class="btn-secondary" (click)="load()">
    <span class="material-icons">refresh</span> Actualizar
  </button>
</div>

<div class="card">
  @if (loading()) {
    <div class="loading"><div class="spinner"></div><p>Cargando registros...</p></div>
  } @else if (logs().length === 0) {
    <div class="empty">
      <span class="material-icons">history</span>
      <p>No hay registros de actividad.</p>
    </div>
  } @else {
    <div class="audit-count">{{ logs().length }} registros</div>
    <table class="data-table">
      <thead>
        <tr>
          <th>Fecha / Hora</th>
          <th>Usuario</th>
          <th>Rol</th>
          <th>Acci\xF3n</th>
          <th>Entidad</th>
          <th>Descripci\xF3n</th>
        </tr>
      </thead>
      <tbody>
        @for (log of logs(); track log.id) {
          <tr>
            <td class="date-col">{{ log.timestamp | date:'dd/MM/yyyy HH:mm' }}</td>
            <td><strong>{{ log.user_name ?? 'Sistema' }}</strong></td>
            <td class="text-muted">{{ roleLabel(log.user_role) }}</td>
            <td>
              <span class="action-tag" [class]="actionClass(log.action)">
                {{ actionLabel(log.action) }}
              </span>
            </td>
            <td>
              <span class="entity-tag">{{ entityLabel(log.entity_type) }}</span>
            </td>
            <td class="desc-col">{{ log.description }}</td>
          </tr>
        }
      </tbody>
    </table>
  }
</div>
`, styles: ['/* src/app/admin/audit/audit.scss */\n.module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.search-box .btn-icon {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box .btn-icon:hover {\n  background: #1d4ed8;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary,\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary:hover,\n.btn-danger:hover {\n  background: #f8fafc;\n}\n.btn-danger {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger:hover {\n  background: #fee2e2;\n}\n.btn-icon-only {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only .material-icons {\n  font-size: 20px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table tbody tr:hover {\n  background: #fafbfc;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty p {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full {\n  grid-column: 1/-1;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field input,\n.field select,\n.field textarea {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field input::placeholder,\n.field select::placeholder,\n.field textarea::placeholder {\n  color: #94a3b8;\n}\n.field textarea {\n  resize: vertical;\n}\n.field select {\n  cursor: pointer;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.audit-filters {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.entity-select {\n  height: 40px;\n  padding: 0 10px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.entity-select:focus {\n  border-color: #2563eb;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 0.8rem;\n  cursor: pointer;\n  padding: 0 4px;\n  white-space: nowrap;\n}\n.btn-link:hover {\n  color: #ef4444;\n  text-decoration: underline;\n}\n.audit-count {\n  font-size: 0.78rem;\n  color: #64748b;\n  padding: 10px 16px 0;\n}\n.date-col {\n  white-space: nowrap;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.desc-col {\n  font-size: 0.82rem;\n  max-width: 400px;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 0.82rem;\n}\n.action-tag {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.action-tag.tag-green {\n  background: #dcfce7;\n  color: #15803d;\n}\n.action-tag.tag-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.action-tag.tag-teal {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.action-tag.tag-amber {\n  background: #fef3c7;\n  color: #b45309;\n}\n.action-tag.tag-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.action-tag.tag-gray {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.action-tag.tag-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.entity-tag {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #0f172a;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=audit.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditComponent, { className: "AuditComponent", filePath: "src/app/admin/audit/audit.ts", lineNumber: 13 });
})();
export {
  AuditComponent
};
//# sourceMappingURL=chunk-O3E4YT66.mjs.map
