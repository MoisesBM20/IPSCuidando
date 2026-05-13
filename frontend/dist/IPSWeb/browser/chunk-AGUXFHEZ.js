import {
  AuthService
} from "./chunk-3N2L2BUB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-PT7R7SID.js";
import {
  ApiService
} from "./chunk-NCFNA77J.js";
import "./chunk-QOYWAKCN.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QNZMPU6U.js";

// src/app/admin/availability/availability.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.day;
var _forTrack2 = ($index, $item) => $item.value;
function AvailabilityComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("value", p_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r1.full_name, " \u2014 ", p_r1.specialty ?? p_r1.role);
  }
}
function AvailabilityComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 2);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteError());
  }
}
function AvailabilityComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando disponibilidad...");
    \u0275\u0275elementEnd()();
  }
}
function AvailabilityComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 2);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Selecciona un profesional para ver su disponibilidad.");
    \u0275\u0275elementEnd()();
  }
}
function AvailabilityComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 2);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Este profesional no tiene horarios configurados.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function AvailabilityComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm());
    });
    \u0275\u0275text(6, "Configurar primer horario");
    \u0275\u0275elementEnd()();
  }
}
function AvailabilityComponent_Conditional_18_For_2_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slot_r5.service_type);
  }
}
function AvailabilityComponent_Conditional_18_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 2);
    \u0275\u0275text(3, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AvailabilityComponent_Conditional_18_For_2_For_4_Conditional_8_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function AvailabilityComponent_Conditional_18_For_2_For_4_Template_button_click_9_listener() {
      const slot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteSlot(slot_r5.id));
    });
    \u0275\u0275elementStart(10, "span", 2);
    \u0275\u0275text(11, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", slot_r5.start_time.slice(0, 5), " \u2013 ", slot_r5.end_time.slice(0, 5), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", slot_r5.slot_duration_minutes, " min/cita");
    \u0275\u0275advance();
    \u0275\u0275conditional(slot_r5.service_type ? 8 : -1);
  }
}
function AvailabilityComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AvailabilityComponent_Conditional_18_For_2_For_4_Template, 12, 4, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r6.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r6.slots);
  }
}
function AvailabilityComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, AvailabilityComponent_Conditional_18_For_2_Template, 5, 1, "div", 14, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.groupedSlots());
  }
}
function AvailabilityComponent_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 2);
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
function AvailabilityComponent_Conditional_19_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = ctx.$implicit;
    \u0275\u0275property("value", d_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r8.label);
  }
}
function AvailabilityComponent_Conditional_19_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function AvailabilityComponent_Conditional_19_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Guardar horario ");
  }
}
function AvailabilityComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function AvailabilityComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275listener("click", function AvailabilityComponent_Conditional_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "h3");
    \u0275\u0275text(4, "Agregar Horario de Disponibilidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function AvailabilityComponent_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 24);
    \u0275\u0275conditionalCreate(9, AvailabilityComponent_Conditional_19_Conditional_9_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(10, "div", 25)(11, "div", 26)(12, "label");
    \u0275\u0275text(13, "D\xEDa de la semana *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AvailabilityComponent_Conditional_19_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.day_of_week, $event) || (ctx_r1.form.day_of_week = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(15, AvailabilityComponent_Conditional_19_For_16_Template, 2, 2, "option", 4, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 28)(18, "label");
    \u0275\u0275text(19, "Hora de inicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AvailabilityComponent_Conditional_19_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.start_time, $event) || (ctx_r1.form.start_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 28)(22, "label");
    \u0275\u0275text(23, "Hora de fin *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function AvailabilityComponent_Conditional_19_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.end_time, $event) || (ctx_r1.form.end_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 28)(26, "label");
    \u0275\u0275text(27, "Duraci\xF3n de cada cita (minutos)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AvailabilityComponent_Conditional_19_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.slot_duration_minutes, $event) || (ctx_r1.form.slot_duration_minutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 4);
    \u0275\u0275text(30, "15 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 4);
    \u0275\u0275text(32, "20 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 4);
    \u0275\u0275text(34, "30 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 4);
    \u0275\u0275text(36, "45 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 4);
    \u0275\u0275text(38, "60 minutos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 28)(40, "label");
    \u0275\u0275text(41, "Tipo de servicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AvailabilityComponent_Conditional_19_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.service_type, $event) || (ctx_r1.form.service_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "p", 33)(44, "span", 2);
    \u0275\u0275text(45, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " El sistema generar\xE1 autom\xE1ticamente los slots de tiempo en base a la duraci\xF3n configurada. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 34)(48, "button", 35);
    \u0275\u0275listener("click", function AvailabilityComponent_Conditional_19_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(49, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 5);
    \u0275\u0275listener("click", function AvailabilityComponent_Conditional_19_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSlot());
    });
    \u0275\u0275conditionalCreate(51, AvailabilityComponent_Conditional_19_Conditional_51_Template, 2, 0)(52, AvailabilityComponent_Conditional_19_Conditional_52_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.formError() ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.day_of_week);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.days);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.start_time);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.end_time);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.slot_duration_minutes);
    \u0275\u0275advance();
    \u0275\u0275property("value", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 45);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 60);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.service_type);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 51 : 52);
  }
}
var _AvailabilityComponent = class _AvailabilityComponent {
  constructor() {
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.professionals = signal([], ...ngDevMode ? [{ debugName: "professionals" }] : []);
    this.selectedProfId = signal(0, ...ngDevMode ? [{ debugName: "selectedProfId" }] : []);
    this.slots = signal([], ...ngDevMode ? [{ debugName: "slots" }] : []);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
    this.formError = signal("", ...ngDevMode ? [{ debugName: "formError" }] : []);
    this.deleteError = signal("", ...ngDevMode ? [{ debugName: "deleteError" }] : []);
    this.form = this.emptyForm();
    this.days = [
      { value: "lunes", label: "Lunes" },
      { value: "martes", label: "Martes" },
      { value: "miercoles", label: "Mi\xE9rcoles" },
      { value: "jueves", label: "Jueves" },
      { value: "viernes", label: "Viernes" },
      { value: "sabado", label: "S\xE1bado" },
      { value: "domingo", label: "Domingo" }
    ];
    this.dayOrder = {
      lunes: 1,
      martes: 2,
      miercoles: 3,
      jueves: 4,
      viernes: 5,
      sabado: 6,
      domingo: 7
    };
  }
  ngOnInit() {
    this.api.getProfessionals().subscribe((p) => {
      this.professionals.set(p);
      const me = this.auth.currentUser();
      if (me?.role === "doctor" || me?.role === "enfermero") {
        const match = p.find((x) => x.id === me.id);
        if (match) {
          this.selectedProfId.set(match.id);
          this.loadSlots();
        } else if (p.length) {
          this.selectedProfId.set(p[0].id);
          this.loadSlots();
        }
      } else if (p.length) {
        this.selectedProfId.set(p[0].id);
        this.loadSlots();
      }
    });
  }
  onProfChange() {
    this.loadSlots();
  }
  loadSlots() {
    const id = this.selectedProfId();
    if (!id)
      return;
    this.loading.set(true);
    this.api.getAvailabilitySlots(id).subscribe({
      next: (s) => {
        this.slots.set(s);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  groupedSlots() {
    const map = {};
    for (const s of this.slots()) {
      if (!map[s.day_of_week])
        map[s.day_of_week] = [];
      map[s.day_of_week].push(s);
    }
    return this.days.filter((d) => map[d.value]).map((d) => ({ day: d.value, label: d.label, slots: map[d.value] }));
  }
  openForm() {
    this.form = this.emptyForm();
    this.formError.set("");
    this.showForm.set(true);
  }
  saveSlot() {
    if (!this.form.start_time || !this.form.end_time || !this.form.day_of_week) {
      this.formError.set("Completa todos los campos requeridos.");
      return;
    }
    this.saving.set(true);
    this.formError.set("");
    this.api.addAvailabilitySlot(this.selectedProfId(), this.form).subscribe({
      next: () => {
        this.saving.set(false);
        this.showForm.set(false);
        this.loadSlots();
      },
      error: (err) => {
        this.saving.set(false);
        this.formError.set(err.error?.detail ?? "Error al guardar el horario.");
      }
    });
  }
  deleteSlot(slotId) {
    if (!confirm("\xBFDeseas eliminar este horario?"))
      return;
    this.api.deleteAvailabilitySlot(this.selectedProfId(), slotId).subscribe({
      next: () => this.loadSlots(),
      error: () => this.deleteError.set("No se pudo eliminar el horario.")
    });
  }
  emptyForm() {
    return { day_of_week: "lunes", start_time: "08:00", end_time: "12:00", slot_duration_minutes: 30, service_type: "" };
  }
};
_AvailabilityComponent.\u0275fac = function AvailabilityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvailabilityComponent)();
};
_AvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailabilityComponent, selectors: [["app-availability"]], decls: 20, vars: 6, consts: [[1, "module-header"], [1, "prof-select"], [1, "material-icons"], ["name", "prof", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "btn-primary", 3, "click", "disabled"], [1, "alert-error"], [1, "card"], [1, "loading"], [1, "empty"], [1, "week-grid"], [1, "modal-backdrop"], [1, "spinner"], [1, "btn-primary", 3, "click"], [1, "day-col"], [1, "day-header"], [1, "slot-card"], [1, "slot-time"], [1, "slot-meta"], ["title", "Eliminar horario", 1, "slot-delete", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "btn-icon-only", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "field", "field-full"], ["name", "dow", 3, "ngModelChange", "ngModel"], [1, "field"], ["type", "time", "name", "start_time", 3, "ngModelChange", "ngModel"], ["type", "time", "name", "end_time", 3, "ngModelChange", "ngModel"], ["name", "duration", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "service_type", "placeholder", "Ej: consulta_medica, sueroterapia...", 3, "ngModelChange", "ngModel"], [1, "hint"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "spinner-sm"]], template: function AvailabilityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 3);
    \u0275\u0275twoWayListener("ngModelChange", function AvailabilityComponent_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedProfId, $event) || (ctx.selectedProfId = $event);
      return $event;
    });
    \u0275\u0275listener("change", function AvailabilityComponent_Template_select_change_4_listener() {
      return ctx.onProfChange();
    });
    \u0275\u0275elementStart(5, "option", 4);
    \u0275\u0275text(6, "Seleccionar profesional...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, AvailabilityComponent_For_8_Template, 2, 3, "option", 4, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function AvailabilityComponent_Template_button_click_9_listener() {
      return ctx.openForm();
    });
    \u0275\u0275elementStart(10, "span", 2);
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Agregar horario ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, AvailabilityComponent_Conditional_13_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(14, "div", 7);
    \u0275\u0275conditionalCreate(15, AvailabilityComponent_Conditional_15_Template, 4, 0, "div", 8)(16, AvailabilityComponent_Conditional_16_Template, 5, 0, "div", 9)(17, AvailabilityComponent_Conditional_17_Template, 7, 0, "div", 9)(18, AvailabilityComponent_Conditional_18_Template, 3, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, AvailabilityComponent_Conditional_19_Template, 53, 13, "div", 11);
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedProfId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.professionals());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.selectedProfId());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.deleteError() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading() ? 15 : !ctx.selectedProfId() ? 16 : ctx.groupedSlots().length === 0 ? 17 : 18);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.showForm() ? 19 : -1);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, \n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.btn-icon-only[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.prof-select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n}\n.prof-select[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.prof-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  min-width: 260px;\n  cursor: pointer;\n}\n.week-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  overflow-x: auto;\n  padding: 0;\n}\n.day-col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  border-right: 1px solid #e2e8f0;\n}\n.day-col[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.day-header[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f8fafc;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.slot-card[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  position: relative;\n}\n.slot-card[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.slot-card[_ngcontent-%COMP%]:hover   .slot-delete[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.slot-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.slot-time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2563eb;\n}\n.slot-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-top: 4px;\n}\n.slot-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.slot-delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  opacity: 0;\n  transition: opacity 0.15s, background 0.15s;\n  color: #b91c1c;\n}\n.slot-delete[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.slot-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-top: 16px;\n  margin-bottom: 0;\n}\n.hint[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=availability.css.map */'] });
var AvailabilityComponent = _AvailabilityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvailabilityComponent, [{
    type: Component,
    args: [{ selector: "app-availability", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="module-header">\n  <div class="prof-select">\n    <span class="material-icons">person</span>\n    <select [(ngModel)]="selectedProfId" name="prof" (change)="onProfChange()">\n      <option [value]="0">Seleccionar profesional...</option>\n      @for (p of professionals(); track p.id) {\n        <option [value]="p.id">{{ p.full_name }} \u2014 {{ p.specialty ?? p.role }}</option>\n      }\n    </select>\n  </div>\n  <button class="btn-primary" (click)="openForm()" [disabled]="!selectedProfId()">\n    <span class="material-icons">add</span> Agregar horario\n  </button>\n</div>\n\n@if (deleteError()) {\n  <div class="alert-error"><span class="material-icons">error_outline</span>{{ deleteError() }}</div>\n}\n\n<div class="card">\n  @if (loading()) {\n    <div class="loading"><div class="spinner"></div><p>Cargando disponibilidad...</p></div>\n  } @else if (!selectedProfId()) {\n    <div class="empty"><span class="material-icons">schedule</span><p>Selecciona un profesional para ver su disponibilidad.</p></div>\n  } @else if (groupedSlots().length === 0) {\n    <div class="empty">\n      <span class="material-icons">event_busy</span>\n      <p>Este profesional no tiene horarios configurados.</p>\n      <button class="btn-primary" (click)="openForm()">Configurar primer horario</button>\n    </div>\n  } @else {\n    <div class="week-grid">\n      @for (group of groupedSlots(); track group.day) {\n        <div class="day-col">\n          <div class="day-header">{{ group.label }}</div>\n          @for (slot of group.slots; track slot.id) {\n            <div class="slot-card">\n              <div class="slot-time">\n                <span class="material-icons">schedule</span>\n                {{ slot.start_time.slice(0,5) }} \u2013 {{ slot.end_time.slice(0,5) }}\n              </div>\n              <div class="slot-meta">\n                <span>{{ slot.slot_duration_minutes }} min/cita</span>\n                @if (slot.service_type) { <span>{{ slot.service_type }}</span> }\n              </div>\n              <button class="slot-delete" (click)="deleteSlot(slot.id)" title="Eliminar horario">\n                <span class="material-icons">delete_outline</span>\n              </button>\n            </div>\n          }\n        </div>\n      }\n    </div>\n  }\n</div>\n\n<!-- Modal Agregar Horario -->\n@if (showForm()) {\n  <div class="modal-backdrop" (click)="showForm.set(false)">\n    <div class="modal" (click)="$event.stopPropagation()">\n      <div class="modal-header">\n        <h3>Agregar Horario de Disponibilidad</h3>\n        <button class="btn-icon-only" (click)="showForm.set(false)"><span class="material-icons">close</span></button>\n      </div>\n      <div class="modal-body">\n        @if (formError()) { <div class="alert-error"><span class="material-icons">error_outline</span>{{ formError() }}</div> }\n        <div class="form-grid">\n          <div class="field field-full">\n            <label>D\xEDa de la semana *</label>\n            <select [(ngModel)]="form.day_of_week" name="dow">\n              @for (d of days; track d.value) {\n                <option [value]="d.value">{{ d.label }}</option>\n              }\n            </select>\n          </div>\n          <div class="field">\n            <label>Hora de inicio *</label>\n            <input type="time" [(ngModel)]="form.start_time" name="start_time">\n          </div>\n          <div class="field">\n            <label>Hora de fin *</label>\n            <input type="time" [(ngModel)]="form.end_time" name="end_time">\n          </div>\n          <div class="field">\n            <label>Duraci\xF3n de cada cita (minutos)</label>\n            <select [(ngModel)]="form.slot_duration_minutes" name="duration">\n              <option [value]="15">15 minutos</option>\n              <option [value]="20">20 minutos</option>\n              <option [value]="30">30 minutos</option>\n              <option [value]="45">45 minutos</option>\n              <option [value]="60">60 minutos</option>\n            </select>\n          </div>\n          <div class="field">\n            <label>Tipo de servicio</label>\n            <input type="text" [(ngModel)]="form.service_type" name="service_type"\n              placeholder="Ej: consulta_medica, sueroterapia...">\n          </div>\n        </div>\n        <p class="hint">\n          <span class="material-icons">info</span>\n          El sistema generar\xE1 autom\xE1ticamente los slots de tiempo en base a la duraci\xF3n configurada.\n        </p>\n      </div>\n      <div class="modal-footer">\n        <button class="btn-secondary" (click)="showForm.set(false)">Cancelar</button>\n        <button class="btn-primary" (click)="saveSlot()" [disabled]="saving()">\n          @if (saving()) { <span class="spinner-sm"></span> Guardando... }\n          @else { <span class="material-icons">save</span> Guardar horario }\n        </button>\n      </div>\n    </div>\n  </div>\n}\n', styles: ['/* src/app/admin/availability/availability.scss */\n.module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.search-box .btn-icon {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box .btn-icon:hover {\n  background: #1d4ed8;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary,\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary:hover,\n.btn-danger:hover {\n  background: #f8fafc;\n}\n.btn-danger {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger:hover {\n  background: #fee2e2;\n}\n.btn-icon-only {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only .material-icons {\n  font-size: 20px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table tbody tr:hover {\n  background: #fafbfc;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty p {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full {\n  grid-column: 1/-1;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field input,\n.field select,\n.field textarea {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field input::placeholder,\n.field select::placeholder,\n.field textarea::placeholder {\n  color: #94a3b8;\n}\n.field textarea {\n  resize: vertical;\n}\n.field select {\n  cursor: pointer;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.prof-select {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n}\n.prof-select .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.prof-select select {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  min-width: 260px;\n  cursor: pointer;\n}\n.week-grid {\n  display: flex;\n  gap: 0;\n  overflow-x: auto;\n  padding: 0;\n}\n.day-col {\n  flex: 1;\n  min-width: 160px;\n  border-right: 1px solid #e2e8f0;\n}\n.day-col:last-child {\n  border-right: none;\n}\n.day-header {\n  padding: 10px 14px;\n  background: #f8fafc;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.slot-card {\n  padding: 12px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  position: relative;\n}\n.slot-card:last-child {\n  border-bottom: none;\n}\n.slot-card:hover .slot-delete {\n  opacity: 1;\n}\n.slot-time {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.slot-time .material-icons {\n  font-size: 16px;\n  color: #2563eb;\n}\n.slot-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-top: 4px;\n}\n.slot-meta span {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.slot-delete {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  opacity: 0;\n  transition: opacity 0.15s, background 0.15s;\n  color: #b91c1c;\n}\n.slot-delete .material-icons {\n  font-size: 16px;\n}\n.slot-delete:hover {\n  background: #fee2e2;\n}\n.hint {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-top: 16px;\n  margin-bottom: 0;\n}\n.hint .material-icons {\n  font-size: 16px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=availability.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailabilityComponent, { className: "AvailabilityComponent", filePath: "src/app/admin/availability/availability.ts", lineNumber: 14 });
})();
export {
  AvailabilityComponent
};
//# sourceMappingURL=chunk-AGUXFHEZ.js.map
