import {
  AuthService
} from "./chunk-3N2L2BUB.js";
import {
  ApiService
} from "./chunk-NCFNA77J.js";
import {
  RouterLink
} from "./chunk-QOYWAKCN.js";
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QNZMPU6U.js";

// src/app/admin/dashboard/dashboard.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboard_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando estad\xEDsticas...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboard_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 3);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function AdminDashboard_Conditional_2_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "No hay citas programadas para los pr\xF3ximos 7 d\xEDas.");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboard_Conditional_2_Conditional_83_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 24);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 8, a_r2.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.time.slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.patient_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.professional_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.typeLabel(a_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.statusClass(a_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(a_r2.status));
  }
}
function AdminDashboard_Conditional_2_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 23)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AdminDashboard_Conditional_2_Conditional_83_For_17_Template, 15, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.stats().upcoming_appointments);
  }
}
function AdminDashboard_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "span", 3);
    \u0275\u0275text(4, "calendar_today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "div", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275text(9, "Citas hoy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 5)(11, "div", 9)(12, "span", 3);
    \u0275\u0275text(13, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "div", 7);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8);
    \u0275\u0275text(18, "Completadas hoy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 5)(20, "div", 10)(21, "span", 3);
    \u0275\u0275text(22, "pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "div", 7);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 8);
    \u0275\u0275text(27, "Pendientes hoy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 5)(29, "div", 11)(30, "span", 3);
    \u0275\u0275text(31, "date_range");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "div", 7);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 8);
    \u0275\u0275text(36, "Esta semana");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 5)(38, "div", 12)(39, "span", 3);
    \u0275\u0275text(40, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "div", 7);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 8);
    \u0275\u0275text(45, "Pacientes registrados");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 5)(47, "div", 13)(48, "span", 3);
    \u0275\u0275text(49, "folder_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "div", 7);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 8);
    \u0275\u0275text(54, "Con historia cl\xEDnica");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 14)(56, "a", 15)(57, "span", 3);
    \u0275\u0275text(58, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Nueva cita");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "a", 16)(62, "span", 3);
    \u0275\u0275text(63, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65, "Registrar paciente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "a", 17)(67, "span", 3);
    \u0275\u0275text(68, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Disponibilidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "a", 18)(72, "span", 3);
    \u0275\u0275text(73, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span");
    \u0275\u0275text(75, "Generar RIPS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 19)(77, "div", 20)(78, "h2");
    \u0275\u0275text(79, "Pr\xF3ximas citas \u2014 pr\xF3ximos 7 d\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "a", 21);
    \u0275\u0275text(81, "Ver todas");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(82, AdminDashboard_Conditional_2_Conditional_82_Template, 2, 0, "p", 22)(83, AdminDashboard_Conditional_2_Conditional_83_Template, 18, 0, "table", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().appointments.today_total);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats().appointments.today_completed);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats().appointments.today_pending);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats().appointments.this_week);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats().patients.total);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats().patients.with_clinical_record);
    \u0275\u0275advance(30);
    \u0275\u0275conditional(ctx_r0.stats().upcoming_appointments.length === 0 ? 82 : 83);
  }
}
var _AdminDashboard = class _AdminDashboard {
  constructor() {
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  }
  ngOnInit() {
    this.api.getDashboardStats().subscribe({
      next: (data) => {
        this.stats.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("No se pudo cargar las estad\xEDsticas.");
        this.loading.set(false);
      }
    });
  }
  statusLabel(s) {
    const m = {
      agendada: "Agendada",
      confirmada: "Confirmada",
      completada: "Completada",
      cancelada: "Cancelada",
      en_atencion: "En atenci\xF3n",
      no_asistio: "No asisti\xF3"
    };
    return m[s] ?? s;
  }
  statusClass(s) {
    const m = {
      agendada: "badge-blue",
      confirmada: "badge-green",
      completada: "badge-purple",
      cancelada: "badge-red",
      en_atencion: "badge-orange",
      no_asistio: "badge-gray"
    };
    return m[s] ?? "badge-gray";
  }
  typeLabel(t) {
    const m = {
      consulta_medica: "Consulta m\xE9dica",
      enfermeria: "Enfermer\xEDa",
      terapia_fisica: "Terapia f\xEDsica",
      nutricion: "Nutrici\xF3n",
      psicologia: "Psicolog\xEDa",
      post_quirurgica: "Post-quir\xFArgica",
      sueroterapia: "Sueroterapia",
      seguimiento: "Seguimiento",
      urgencia: "Urgencia"
    };
    return m[t] ?? t;
  }
};
_AdminDashboard.\u0275fac = function AdminDashboard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminDashboard)();
};
_AdminDashboard.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboard, selectors: [["app-admin-dashboard"]], decls: 3, vars: 3, consts: [[1, "loading-state"], [1, "error-state"], [1, "spinner"], [1, "material-icons"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "bg-blue"], [1, "kpi-val"], [1, "kpi-lbl"], [1, "kpi-icon", "bg-green"], [1, "kpi-icon", "bg-amber"], [1, "kpi-icon", "bg-indigo"], [1, "kpi-icon", "bg-teal"], [1, "kpi-icon", "bg-slate"], [1, "quick-grid"], ["routerLink", "/admin/appointments", 1, "quick-card"], ["routerLink", "/admin/patients", 1, "quick-card"], ["routerLink", "/admin/availability", 1, "quick-card"], ["routerLink", "/admin/rips", 1, "quick-card"], [1, "card"], [1, "card-header"], ["routerLink", "/admin/appointments", 1, "link-more"], [1, "empty"], [1, "data-table"], [1, "badge"]], template: function AdminDashboard_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminDashboard_Conditional_0_Template, 4, 0, "div", 0);
    \u0275\u0275conditionalCreate(1, AdminDashboard_Conditional_1_Template, 4, 1, "div", 1);
    \u0275\u0275conditionalCreate(2, AdminDashboard_Conditional_2_Template, 84, 7);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.loading() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.error() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() && ctx.stats() ? 2 : -1);
  }
}, dependencies: [CommonModule, RouterLink, DatePipe], styles: ["\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #fff;\n}\n.kpi-icon.bg-blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.kpi-icon.bg-green[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.kpi-icon.bg-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.kpi-icon.bg-indigo[_ngcontent-%COMP%] {\n  background: #4338ca;\n}\n.kpi-icon.bg-teal[_ngcontent-%COMP%] {\n  background: #0d9488;\n}\n.kpi-icon.bg-slate[_ngcontent-%COMP%] {\n  background: #475569;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1;\n}\n.kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.quick-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.quick-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: #0f172a;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.quick-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2563eb;\n}\n.quick-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.link-more[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #2563eb;\n  text-decoration: none;\n}\n.link-more[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 14px 18px;\n  font-size: 0.875rem;\n}\n.error-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */"] });
var AdminDashboard = _AdminDashboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboard, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `@if (loading()) {
  <div class="loading-state">
    <div class="spinner"></div>
    <p>Cargando estad\xEDsticas...</p>
  </div>
}

@if (error()) {
  <div class="error-state">
    <span class="material-icons">warning</span>
    {{ error() }}
  </div>
}

@if (!loading() && stats()) {
  <!-- KPIs -->
  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-icon bg-blue"><span class="material-icons">calendar_today</span></div>
      <div><div class="kpi-val">{{ stats()!.appointments.today_total }}</div><div class="kpi-lbl">Citas hoy</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon bg-green"><span class="material-icons">check_circle</span></div>
      <div><div class="kpi-val">{{ stats()!.appointments.today_completed }}</div><div class="kpi-lbl">Completadas hoy</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon bg-amber"><span class="material-icons">pending</span></div>
      <div><div class="kpi-val">{{ stats()!.appointments.today_pending }}</div><div class="kpi-lbl">Pendientes hoy</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon bg-indigo"><span class="material-icons">date_range</span></div>
      <div><div class="kpi-val">{{ stats()!.appointments.this_week }}</div><div class="kpi-lbl">Esta semana</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon bg-teal"><span class="material-icons">people</span></div>
      <div><div class="kpi-val">{{ stats()!.patients.total }}</div><div class="kpi-lbl">Pacientes registrados</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon bg-slate"><span class="material-icons">folder_open</span></div>
      <div><div class="kpi-val">{{ stats()!.patients.with_clinical_record }}</div><div class="kpi-lbl">Con historia cl\xEDnica</div></div>
    </div>
  </div>

  <!-- Acciones r\xE1pidas -->
  <div class="quick-grid">
    <a routerLink="/admin/appointments" class="quick-card">
      <span class="material-icons">calendar_month</span>
      <span>Nueva cita</span>
    </a>
    <a routerLink="/admin/patients" class="quick-card">
      <span class="material-icons">person_add</span>
      <span>Registrar paciente</span>
    </a>
    <a routerLink="/admin/availability" class="quick-card">
      <span class="material-icons">schedule</span>
      <span>Disponibilidad</span>
    </a>
    <a routerLink="/admin/rips" class="quick-card">
      <span class="material-icons">summarize</span>
      <span>Generar RIPS</span>
    </a>
  </div>

  <!-- Pr\xF3ximas citas -->
  <div class="card">
    <div class="card-header">
      <h2>Pr\xF3ximas citas \u2014 pr\xF3ximos 7 d\xEDas</h2>
      <a routerLink="/admin/appointments" class="link-more">Ver todas</a>
    </div>
    @if (stats()!.upcoming_appointments.length === 0) {
      <p class="empty">No hay citas programadas para los pr\xF3ximos 7 d\xEDas.</p>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Paciente</th>
            <th>Profesional</th>
            <th>Tipo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          @for (a of stats()!.upcoming_appointments; track a.id) {
            <tr>
              <td>{{ a.date | date:'dd/MM/yyyy' }}</td>
              <td>{{ a.time.slice(0,5) }}</td>
              <td>{{ a.patient_name }}</td>
              <td>{{ a.professional_name }}</td>
              <td>{{ typeLabel(a.type) }}</td>
              <td><span class="badge" [class]="statusClass(a.status)">{{ statusLabel(a.status) }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
}
`, styles: ["/* src/app/admin/dashboard/dashboard.scss */\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n}\n.kpi-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon .material-icons {\n  font-size: 24px;\n  color: #fff;\n}\n.kpi-icon.bg-blue {\n  background: #2563eb;\n}\n.kpi-icon.bg-green {\n  background: #16a34a;\n}\n.kpi-icon.bg-amber {\n  background: #d97706;\n}\n.kpi-icon.bg-indigo {\n  background: #4338ca;\n}\n.kpi-icon.bg-teal {\n  background: #0d9488;\n}\n.kpi-icon.bg-slate {\n  background: #475569;\n}\n.kpi-val {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1;\n}\n.kpi-lbl {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.quick-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.quick-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: #0f172a;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.quick-card .material-icons {\n  font-size: 20px;\n  color: #2563eb;\n}\n.quick-card:hover {\n  border-color: #93c5fd;\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h2 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.link-more {\n  font-size: 0.8rem;\n  color: #2563eb;\n  text-decoration: none;\n}\n.link-more:hover {\n  text-decoration: underline;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table tbody tr:hover {\n  background: #f8fafc;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.empty {\n  padding: 32px;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading-state .spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.error-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 14px 18px;\n  font-size: 0.875rem;\n}\n.error-state .material-icons {\n  font-size: 20px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboard, { className: "AdminDashboard", filePath: "src/app/admin/dashboard/dashboard.ts", lineNumber: 14 });
})();
export {
  AdminDashboard
};
//# sourceMappingURL=chunk-AVQSC7XG.js.map
