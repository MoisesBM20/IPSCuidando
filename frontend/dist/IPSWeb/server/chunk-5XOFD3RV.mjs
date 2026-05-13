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
  Router
} from "./chunk-MZDMLOMT.mjs";
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
  ɵɵclassProp,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OCB3LWCK.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-T2KOBY73.mjs";

// src/app/admin/appointments/appointments.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.start_time;
function AppointmentsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AppointmentsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1, "Limpiar filtros");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando citas...");
    \u0275\u0275elementEnd()();
  }
}
function AppointmentsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 8);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay citas registradas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm());
    });
    \u0275\u0275text(6, "Agendar cita");
    \u0275\u0275elementEnd()();
  }
}
function AppointmentsComponent_Conditional_24_For_21_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 8);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.cancellation_reason);
  }
}
function AppointmentsComponent_Conditional_24_For_21_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
    \u0275\u0275text(2, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.notes);
  }
}
function AppointmentsComponent_Conditional_24_For_21_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_24_For_21_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_24_For_21_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const a_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atender(a_r5));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Atender ");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_24_For_21_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35)(1, "span", 8);
    \u0275\u0275text(2, "radio_button_checked");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " En atenci\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_24_For_21_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_24_For_21_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const a_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(a_r5));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "edit_calendar");
    \u0275\u0275elementEnd()();
  }
}
function AppointmentsComponent_Conditional_24_For_21_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_24_For_21_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const a_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCancelModal(a_r5.id));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function AppointmentsComponent_Conditional_24_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 24)(8, "span", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 28);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 29);
    \u0275\u0275conditionalCreate(20, AppointmentsComponent_Conditional_24_For_21_Conditional_20_Template, 4, 1, "div", 30);
    \u0275\u0275conditionalCreate(21, AppointmentsComponent_Conditional_24_For_21_Conditional_21_Template, 4, 1, "div", 31);
    \u0275\u0275conditionalCreate(22, AppointmentsComponent_Conditional_24_For_21_Conditional_22_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 33);
    \u0275\u0275conditionalCreate(25, AppointmentsComponent_Conditional_24_For_21_Conditional_25_Template, 4, 0, "button", 34);
    \u0275\u0275conditionalCreate(26, AppointmentsComponent_Conditional_24_For_21_Conditional_26_Template, 4, 0, "span", 35);
    \u0275\u0275conditionalCreate(27, AppointmentsComponent_Conditional_24_For_21_Conditional_27_Template, 3, 0, "button", 36);
    \u0275\u0275conditionalCreate(28, AppointmentsComponent_Conditional_24_For_21_Conditional_28_Template, 3, 0, "button", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 17, a_r5.appointment_date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", a_r5.start_time.slice(0, 5), " \u2013 ", a_r5.end_time.slice(0, 5));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r5.patient_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.patient_document);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.professional_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(a_r5.appointment_type));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClass(a_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(a_r5.status));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r5.cancellation_reason ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r5.notes ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!a_r5.cancellation_reason && !a_r5.notes ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canAtender(a_r5) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r5.status === "en_atencion" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEdit(a_r5) ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canCancel(a_r5) ? 28 : -1);
  }
}
function AppointmentsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Observaciones / Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, AppointmentsComponent_Conditional_24_For_21_Template, 29, 20, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.appointments());
  }
}
function AppointmentsComponent_Conditional_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 8);
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
function AppointmentsComponent_Conditional_25_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_25_Conditional_20_For_2_Template_div_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectPatient(p_r11));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", p_r11.first_name, " ", p_r11.last_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2014 ", p_r11.document_type, " ", p_r11.document_number);
  }
}
function AppointmentsComponent_Conditional_25_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275repeaterCreate(1, AppointmentsComponent_Conditional_25_Conditional_20_For_2_Template, 7, 4, "div", 65, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.patientSearchResults());
  }
}
function AppointmentsComponent_Conditional_25_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 8);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4("", ctx_r1.selectedPatient().first_name, " ", ctx_r1.selectedPatient().last_name, " (", ctx_r1.selectedPatient().document_type, " ", ctx_r1.selectedPatient().document_number, ")");
  }
}
function AppointmentsComponent_Conditional_25_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275property("value", p_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r12.full_name, " \u2014 ", p_r12.specialty ?? p_r12.role);
  }
}
function AppointmentsComponent_Conditional_25_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57);
    \u0275\u0275element(1, "span", 67);
    \u0275\u0275text(2, " Cargando disponibilidad...");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_25_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57);
    \u0275\u0275text(1, "Selecciona un profesional y fecha para ver los horarios.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_25_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1, "No hay horarios disponibles para esta fecha.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_25_Conditional_40_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1, "Ocupado");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_25_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_25_Conditional_40_For_2_Template_button_click_0_listener() {
      const s_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.start_time = s_r14.start_time);
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AppointmentsComponent_Conditional_25_Conditional_40_For_2_Conditional_2_Template, 2, 0, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.form.start_time === s_r14.start_time)("occupied", !s_r14.is_available);
    \u0275\u0275property("disabled", !s_r14.is_available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r14.start_time, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!s_r14.is_available ? 2 : -1);
  }
}
function AppointmentsComponent_Conditional_25_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275repeaterCreate(1, AppointmentsComponent_Conditional_25_Conditional_40_For_2_Template, 3, 7, "button", 68, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableSlots());
  }
}
function AppointmentsComponent_Conditional_25_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275property("value", t_r15.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15.label);
  }
}
function AppointmentsComponent_Conditional_25_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function AppointmentsComponent_Conditional_25_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Confirmar cita ");
  }
}
function AppointmentsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_25_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "h3");
    \u0275\u0275text(4, "Agendar Cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 45);
    \u0275\u0275conditionalCreate(9, AppointmentsComponent_Conditional_25_Conditional_9_Template, 4, 1, "div", 46);
    \u0275\u0275elementStart(10, "div", 47)(11, "div", 48)(12, "label");
    \u0275\u0275text(13, "Paciente *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 49)(15, "span", 8);
    \u0275\u0275text(16, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Conditional_25_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.patientSearch, $event) || (ctx_r1.patientSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AppointmentsComponent_Conditional_25_Template_input_keyup_enter_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchPatients());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 11);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_25_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchPatients());
    });
    \u0275\u0275text(19, "Buscar");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, AppointmentsComponent_Conditional_25_Conditional_20_Template, 3, 0, "div", 51);
    \u0275\u0275conditionalCreate(21, AppointmentsComponent_Conditional_25_Conditional_21_Template, 5, 4, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 53)(23, "label");
    \u0275\u0275text(24, "Profesional *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Conditional_25_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.professional_id, $event) || (ctx_r1.form.professional_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AppointmentsComponent_Conditional_25_Template_select_change_25_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProfessionalOrDateChange());
    });
    \u0275\u0275elementStart(26, "option", 55);
    \u0275\u0275text(27, "Seleccionar profesional...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, AppointmentsComponent_Conditional_25_For_29_Template, 2, 3, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 53)(31, "label");
    \u0275\u0275text(32, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Conditional_25_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.appointment_date, $event) || (ctx_r1.form.appointment_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AppointmentsComponent_Conditional_25_Template_input_change_33_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProfessionalOrDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 48)(35, "label");
    \u0275\u0275text(36, "Horario disponible *");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, AppointmentsComponent_Conditional_25_Conditional_37_Template, 3, 0, "p", 57)(38, AppointmentsComponent_Conditional_25_Conditional_38_Template, 2, 0, "p", 57)(39, AppointmentsComponent_Conditional_25_Conditional_39_Template, 2, 0, "p", 58)(40, AppointmentsComponent_Conditional_25_Conditional_40_Template, 3, 0, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 53)(42, "label");
    \u0275\u0275text(43, "Tipo de servicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Conditional_25_Template_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.appointment_type, $event) || (ctx_r1.form.appointment_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(45, AppointmentsComponent_Conditional_25_For_46_Template, 2, 2, "option", 55, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 53)(48, "label");
    \u0275\u0275text(49, "Motivo de consulta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Conditional_25_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.reason, $event) || (ctx_r1.form.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 62)(52, "button", 63);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_25_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(53, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 64);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_25_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAppointment());
    });
    \u0275\u0275conditionalCreate(55, AppointmentsComponent_Conditional_25_Conditional_55_Template, 2, 0)(56, AppointmentsComponent_Conditional_25_Conditional_56_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.formError() ? 9 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.patientSearch);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.patientSearchResults().length > 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedPatient() ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.professional_id);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.professionals());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.appointment_date);
    \u0275\u0275property("min", ctx_r1.today());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.slotsLoading() ? 37 : !ctx_r1.form.professional_id || !ctx_r1.form.appointment_date ? 38 : ctx_r1.availableSlots().length === 0 ? 39 : 40);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.appointment_type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.appointmentTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.reason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 55 : 56);
  }
}
function AppointmentsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCancelModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_26_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "h3");
    \u0275\u0275text(4, "Cancelar cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCancelModal.set(false));
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 45)(9, "div", 53)(10, "label");
    \u0275\u0275text(11, "Motivo de cancelaci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Conditional_26_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.cancelReason, $event) || (ctx_r1.cancelReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 62)(14, "button", 63);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_26_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCancelModal.set(false));
    });
    \u0275\u0275text(15, "Volver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 73);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_26_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmCancel());
    });
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Cancelar cita ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cancelReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.cancelReason.trim());
  }
}
function AppointmentsComponent_Conditional_27_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editError());
  }
}
function AppointmentsComponent_Conditional_27_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 8);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cita actual: ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r18 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r18.patient_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" \u2014 ", \u0275\u0275pipeBind2(7, 4, a_r18.appointment_date, "dd/MM/yyyy"), " a las ", a_r18.start_time.slice(0, 5), " con ", a_r18.professional_name, " ");
  }
}
function AppointmentsComponent_Conditional_27_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    \u0275\u0275property("value", p_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r19.full_name, " \u2014 ", p_r19.specialty ?? p_r19.role);
  }
}
function AppointmentsComponent_Conditional_27_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57);
    \u0275\u0275element(1, "span", 67);
    \u0275\u0275text(2, " Cargando horarios...");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_27_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57);
    \u0275\u0275text(1, "Selecciona profesional y fecha.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_27_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1, "No hay horarios disponibles.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_27_Conditional_32_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1, "Ocupado");
    \u0275\u0275elementEnd();
  }
}
function AppointmentsComponent_Conditional_27_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_27_Conditional_32_For_2_Template_button_click_0_listener() {
      const s_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editSlot = s_r21.start_time);
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AppointmentsComponent_Conditional_27_Conditional_32_For_2_Conditional_2_Template, 2, 0, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.editSlot === s_r21.start_time)("occupied", !s_r21.is_available);
    \u0275\u0275property("disabled", !s_r21.is_available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r21.start_time, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!s_r21.is_available ? 2 : -1);
  }
}
function AppointmentsComponent_Conditional_27_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275repeaterCreate(1, AppointmentsComponent_Conditional_27_Conditional_32_For_2_Template, 3, 7, "button", 68, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.editSlots());
  }
}
function AppointmentsComponent_Conditional_27_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function AppointmentsComponent_Conditional_27_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Guardar cambios ");
  }
}
function AppointmentsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEditModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_27_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "h3")(4, "span", 8);
    \u0275\u0275text(5, "edit_calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Modificar cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEditModal.set(false));
    });
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 45);
    \u0275\u0275conditionalCreate(11, AppointmentsComponent_Conditional_27_Conditional_11_Template, 4, 1, "div", 46);
    \u0275\u0275conditionalCreate(12, AppointmentsComponent_Conditional_27_Conditional_12_Template, 8, 7, "div", 74);
    \u0275\u0275elementStart(13, "div", 47)(14, "div", 53)(15, "label");
    \u0275\u0275text(16, "Profesional *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Conditional_27_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editProf, $event) || (ctx_r1.editProf = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AppointmentsComponent_Conditional_27_Template_select_change_17_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.editSlot = "";
      return \u0275\u0275resetView(ctx_r1.loadEditSlots());
    });
    \u0275\u0275elementStart(18, "option", 55);
    \u0275\u0275text(19, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, AppointmentsComponent_Conditional_27_For_21_Template, 2, 3, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 53)(23, "label");
    \u0275\u0275text(24, "Nueva fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Conditional_27_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editDate, $event) || (ctx_r1.editDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AppointmentsComponent_Conditional_27_Template_input_change_25_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.editSlot = "";
      return \u0275\u0275resetView(ctx_r1.loadEditSlots());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 48)(27, "label");
    \u0275\u0275text(28, "Nuevo horario *");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, AppointmentsComponent_Conditional_27_Conditional_29_Template, 3, 0, "p", 57)(30, AppointmentsComponent_Conditional_27_Conditional_30_Template, 2, 0, "p", 57)(31, AppointmentsComponent_Conditional_27_Conditional_31_Template, 2, 0, "p", 58)(32, AppointmentsComponent_Conditional_27_Conditional_32_Template, 3, 0, "div", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 62)(34, "button", 63);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_27_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEditModal.set(false));
    });
    \u0275\u0275text(35, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 64);
    \u0275\u0275listener("click", function AppointmentsComponent_Conditional_27_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275conditionalCreate(37, AppointmentsComponent_Conditional_27_Conditional_37_Template, 2, 0)(38, AppointmentsComponent_Conditional_27_Conditional_38_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.editError() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.editingAppointment()) ? 12 : -1, tmp_2_0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editProf);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.professionals());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editDate);
    \u0275\u0275property("min", ctx_r1.today());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.editSlotsLoading() ? 29 : !ctx_r1.editProf || !ctx_r1.editDate ? 30 : ctx_r1.editSlots().length === 0 ? 31 : 32);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.editSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editSaving() ? 37 : 38);
  }
}
var _AppointmentsComponent = class _AppointmentsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.router = inject(Router);
    this.appointments = signal([], ...ngDevMode ? [{ debugName: "appointments" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.filterFrom = "";
    this.filterTo = "";
    this.filterDocument = "";
    this.showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
    this.formError = signal("", ...ngDevMode ? [{ debugName: "formError" }] : []);
    this.professionals = signal([], ...ngDevMode ? [{ debugName: "professionals" }] : []);
    this.patientSearch = "";
    this.patientSearchResults = signal([], ...ngDevMode ? [{ debugName: "patientSearchResults" }] : []);
    this.selectedPatient = signal(null, ...ngDevMode ? [{ debugName: "selectedPatient" }] : []);
    this.availableSlots = signal([], ...ngDevMode ? [{ debugName: "availableSlots" }] : []);
    this.slotsLoading = signal(false, ...ngDevMode ? [{ debugName: "slotsLoading" }] : []);
    this.form = this.emptyForm();
    this.showCancelModal = signal(false, ...ngDevMode ? [{ debugName: "showCancelModal" }] : []);
    this.cancellingId = signal(null, ...ngDevMode ? [{ debugName: "cancellingId" }] : []);
    this.cancelReason = "";
    this.showEditModal = signal(false, ...ngDevMode ? [{ debugName: "showEditModal" }] : []);
    this.editingAppointment = signal(null, ...ngDevMode ? [{ debugName: "editingAppointment" }] : []);
    this.editProf = 0;
    this.editDate = "";
    this.editSlot = "";
    this.editSlots = signal([], ...ngDevMode ? [{ debugName: "editSlots" }] : []);
    this.editSlotsLoading = signal(false, ...ngDevMode ? [{ debugName: "editSlotsLoading" }] : []);
    this.editError = signal("", ...ngDevMode ? [{ debugName: "editError" }] : []);
    this.editSaving = signal(false, ...ngDevMode ? [{ debugName: "editSaving" }] : []);
    this.appointmentTypes = [
      { value: "consulta_medica", label: "Consulta m\xE9dica general" },
      { value: "enfermeria", label: "Enfermer\xEDa domiciliaria" },
      { value: "terapia_fisica", label: "Terapia f\xEDsica" },
      { value: "nutricion", label: "Nutrici\xF3n" },
      { value: "psicologia", label: "Psicolog\xEDa" },
      { value: "post_quirurgica", label: "Atenci\xF3n post-quir\xFArgica" },
      { value: "sueroterapia", label: "Sueroterapia" },
      { value: "seguimiento", label: "Seguimiento / Control" },
      { value: "urgencia", label: "Urgencia" }
    ];
  }
  ngOnInit() {
    this.loadAppointments();
    this.api.getProfessionals().subscribe((p) => this.professionals.set(p));
  }
  loadAppointments() {
    this.loading.set(true);
    const params = {};
    if (this.filterDocument.trim())
      params.document_number = this.filterDocument.trim();
    if (this.filterFrom)
      params.date_from = this.filterFrom;
    if (this.filterTo)
      params.date_to = this.filterTo;
    this.api.getAppointments(params).subscribe({
      next: (data) => {
        this.appointments.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  applyFilters() {
    this.loadAppointments();
  }
  clearFilters() {
    this.filterFrom = "";
    this.filterTo = "";
    this.filterDocument = "";
    this.loadAppointments();
  }
  // ── Nueva cita ────────────────────────────────────────────────────────────────
  openForm() {
    this.form = this.emptyForm();
    this.selectedPatient.set(null);
    this.patientSearch = "";
    this.patientSearchResults.set([]);
    this.availableSlots.set([]);
    this.formError.set("");
    this.showForm.set(true);
  }
  searchPatients() {
    if (!this.patientSearch.trim())
      return;
    this.api.getPatients(this.patientSearch).subscribe((r) => this.patientSearchResults.set(r));
  }
  selectPatient(p) {
    this.selectedPatient.set(p);
    this.form.patient_id = p.id;
    this.patientSearchResults.set([]);
    this.patientSearch = p.first_name + " " + p.last_name;
  }
  onProfessionalOrDateChange() {
    if (this.form.professional_id && this.form.appointment_date)
      this.loadSlots();
  }
  loadSlots() {
    this.slotsLoading.set(true);
    this.availableSlots.set([]);
    this.form.start_time = "";
    this.api.getCalendar(this.form.professional_id, this.form.appointment_date, this.form.appointment_date).subscribe({
      next: (days) => {
        const day = days.find((d) => d.date === this.form.appointment_date);
        this.availableSlots.set(day?.slots ?? []);
        this.slotsLoading.set(false);
      },
      error: () => this.slotsLoading.set(false)
    });
  }
  saveAppointment() {
    if (!this.form.patient_id || !this.form.professional_id || !this.form.appointment_date || !this.form.start_time || !this.form.appointment_type) {
      this.formError.set("Completa todos los campos requeridos.");
      return;
    }
    this.saving.set(true);
    this.formError.set("");
    this.api.createAppointment(this.form).subscribe({
      next: () => {
        this.saving.set(false);
        this.showForm.set(false);
        this.loadAppointments();
      },
      error: (err) => {
        this.saving.set(false);
        this.formError.set(err.error?.detail ?? "Error al agendar la cita.");
      }
    });
  }
  // ── Atender ───────────────────────────────────────────────────────────────────
  atender(a) {
    this.api.updateAppointment(a.id, { status: "en_atencion" }).subscribe(() => {
      this.loadAppointments();
      this.router.navigate(["/admin/clinical"], { queryParams: { patientId: a.patient_id } });
    });
  }
  // ── Cancelar ──────────────────────────────────────────────────────────────────
  openCancelModal(id) {
    this.cancellingId.set(id);
    this.cancelReason = "";
    this.showCancelModal.set(true);
  }
  confirmCancel() {
    if (!this.cancelReason.trim())
      return;
    this.api.cancelAppointment(this.cancellingId(), this.cancelReason).subscribe({
      next: () => {
        this.showCancelModal.set(false);
        this.loadAppointments();
      }
    });
  }
  // ── Editar / Reprogramar ──────────────────────────────────────────────────────
  openEditModal(a) {
    this.editingAppointment.set(a);
    this.editProf = a.professional_id;
    this.editDate = a.appointment_date;
    this.editSlot = a.start_time.slice(0, 5);
    this.editError.set("");
    this.editSlots.set([]);
    this.showEditModal.set(true);
    this.loadEditSlots();
  }
  loadEditSlots() {
    if (!this.editProf || !this.editDate)
      return;
    this.editSlotsLoading.set(true);
    this.editSlots.set([]);
    const apptId = this.editingAppointment()?.id;
    this.api.getCalendar(this.editProf, this.editDate, this.editDate).subscribe({
      next: (days) => {
        const day = days.find((d) => d.date === this.editDate);
        let slots = day?.slots ?? [];
        slots = slots.map((s) => s.start_time === this.editSlot ? __spreadProps(__spreadValues({}, s), { is_available: true }) : s);
        this.editSlots.set(slots);
        this.editSlotsLoading.set(false);
      },
      error: () => this.editSlotsLoading.set(false)
    });
  }
  saveEdit() {
    if (!this.editProf || !this.editDate || !this.editSlot) {
      this.editError.set("Selecciona profesional, fecha y horario.");
      return;
    }
    this.editSaving.set(true);
    this.editError.set("");
    this.api.updateAppointment(this.editingAppointment().id, {
      professional_id: this.editProf,
      appointment_date: this.editDate,
      start_time: this.editSlot
    }).subscribe({
      next: () => {
        this.editSaving.set(false);
        this.showEditModal.set(false);
        this.loadAppointments();
      },
      error: (err) => {
        this.editSaving.set(false);
        this.editError.set(err.error?.detail ?? "Error al modificar la cita.");
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────────────
  canAtender(a) {
    return ["agendada", "confirmada"].includes(a.status);
  }
  canEdit(a) {
    return !["completada", "cancelada", "no_asistio"].includes(a.status);
  }
  canCancel(a) {
    return !["completada", "cancelada", "no_asistio"].includes(a.status);
  }
  statusLabel(s) {
    const m = {
      agendada: "Agendada",
      confirmada: "Confirmada",
      completada: "Completada",
      cancelada: "Cancelada",
      en_atencion: "En atenci\xF3n",
      no_asistio: "No asisti\xF3",
      reprogramada: "Reprogramada"
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
      no_asistio: "badge-gray",
      reprogramada: "badge-amber"
    };
    return m[s] ?? "badge-gray";
  }
  typeLabel(t) {
    return this.appointmentTypes.find((x) => x.value === t)?.label ?? t;
  }
  today() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  emptyForm() {
    return { patient_id: 0, professional_id: 0, appointment_date: this.today(), start_time: "", appointment_type: "consulta_medica", reason: "" };
  }
};
_AppointmentsComponent.\u0275fac = function AppointmentsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppointmentsComponent)();
};
_AppointmentsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppointmentsComponent, selectors: [["app-appointments"]], decls: 28, vars: 9, consts: [[1, "module-header"], [1, "filters-row"], [1, "filter-group"], [1, "material-icons", "filter-icon"], ["type", "date", "placeholder", "Desde", 3, "ngModelChange", "change", "ngModel"], [1, "filter-sep"], ["type", "date", "placeholder", "Hasta", 3, "ngModelChange", "change", "ngModel"], [1, "search-box", "cedula-search"], [1, "material-icons"], ["type", "text", "placeholder", "Buscar por c\xE9dula...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-clear"], [1, "btn-icon", 3, "click"], [1, "btn-link"], [1, "btn-primary", 3, "click"], [1, "card"], [1, "loading"], [1, "empty"], [1, "data-table"], [1, "modal-backdrop"], [1, "btn-clear", 3, "click"], [1, "btn-link", 3, "click"], [1, "spinner"], [1, "date-cell"], [1, "time-cell"], [1, "patient-info"], [1, "patient-name"], [1, "patient-doc"], [1, "type-cell"], [1, "badge"], [1, "obs-cell"], [1, "obs-cancel"], [1, "obs-note"], [1, "obs-empty"], [1, "action-row"], ["title", "Iniciar atenci\xF3n y abrir Historia Cl\xEDnica", 1, "btn-action", "btn-atender"], [1, "in-progress-label"], ["title", "Modificar cita", 1, "btn-action", "btn-edit"], ["title", "Cancelar cita", 1, "btn-action", "btn-cancel"], ["title", "Iniciar atenci\xF3n y abrir Historia Cl\xEDnica", 1, "btn-action", "btn-atender", 3, "click"], ["title", "Modificar cita", 1, "btn-action", "btn-edit", 3, "click"], ["title", "Cancelar cita", 1, "btn-action", "btn-cancel", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", "modal-lg", 3, "click"], [1, "modal-header"], [1, "btn-icon-only", 3, "click"], [1, "modal-body"], [1, "alert-error"], [1, "form-grid"], [1, "field", "field-full"], [1, "search-inline"], ["type", "text", "placeholder", "Buscar por nombre o documento...", "name", "patient_search", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "search-dropdown"], [1, "selected-patient"], [1, "field"], ["name", "professional", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["type", "date", "name", "appt_date", 3, "ngModelChange", "change", "ngModel", "min"], [1, "slot-hint"], [1, "slot-hint", "no-slots"], [1, "slot-grid"], ["name", "appt_type", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "reason", "placeholder", "Breve descripci\xF3n...", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "search-option"], [1, "search-option", 3, "click"], [1, "spinner-sm"], ["type", "button", 1, "slot-btn", 3, "selected", "occupied", "disabled"], ["type", "button", 1, "slot-btn", 3, "click", "disabled"], [1, "slot-occ"], [1, "modal", "modal-sm", 3, "click"], ["rows", "3", "placeholder", "Indique el motivo...", 3, "ngModelChange", "ngModel"], [1, "btn-danger", 3, "click", "disabled"], [1, "edit-current-info"], [3, "ngModelChange", "change", "ngModel"], ["type", "date", 3, "ngModelChange", "change", "ngModel", "min"]], template: function AppointmentsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterFrom, $event) || (ctx.filterFrom = $event);
      return $event;
    });
    \u0275\u0275listener("change", function AppointmentsComponent_Template_input_change_5_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterTo, $event) || (ctx.filterTo = $event);
      return $event;
    });
    \u0275\u0275listener("change", function AppointmentsComponent_Template_input_change_8_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
    \u0275\u0275text(11, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function AppointmentsComponent_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filterDocument, $event) || (ctx.filterDocument = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function AppointmentsComponent_Template_input_keyup_enter_12_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AppointmentsComponent_Conditional_13_Template, 3, 0, "button", 10);
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function AppointmentsComponent_Template_button_click_14_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275text(15, "Buscar");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, AppointmentsComponent_Conditional_16_Template, 2, 0, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function AppointmentsComponent_Template_button_click_17_listener() {
      return ctx.openForm();
    });
    \u0275\u0275elementStart(18, "span", 8);
    \u0275\u0275text(19, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Nueva cita ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 14);
    \u0275\u0275conditionalCreate(22, AppointmentsComponent_Conditional_22_Template, 4, 0, "div", 15)(23, AppointmentsComponent_Conditional_23_Template, 7, 0, "div", 16)(24, AppointmentsComponent_Conditional_24_Template, 22, 0, "table", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, AppointmentsComponent_Conditional_25_Template, 57, 13, "div", 18);
    \u0275\u0275conditionalCreate(26, AppointmentsComponent_Conditional_26_Template, 20, 2, "div", 18);
    \u0275\u0275conditionalCreate(27, AppointmentsComponent_Conditional_27_Template, 39, 9, "div", 18);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.filterFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.filterTo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.filterDocument);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.filterDocument.trim() ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.filterFrom || ctx.filterTo || ctx.filterDocument.trim() ? 16 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.loading() ? 22 : ctx.appointments().length === 0 ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.showForm() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showCancelModal() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showEditModal() ? 27 : -1);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, \n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.btn-icon-only[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 10px;\n}\n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  cursor: pointer;\n  width: 130px;\n}\n.filter-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n}\n.filter-sep[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.8rem;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 0.8rem;\n  cursor: pointer;\n  padding: 0 4px;\n  white-space: nowrap;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  text-decoration: underline;\n}\n.cedula-search[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  display: flex;\n  color: #64748b;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.btn-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.date-cell[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  white-space: nowrap;\n}\n.time-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n.type-cell[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.patient-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n}\n.patient-doc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: all 0.15s;\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-action.btn-atender[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #15803d;\n}\n.btn-action.btn-atender[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n}\n.btn-action.btn-edit[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.btn-action.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.btn-action.btn-cancel[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.btn-action.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n.in-progress-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #c2410c;\n}\n.in-progress-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.obs-cell[_ngcontent-%COMP%] {\n  font-size: 0.79rem;\n  max-width: 200px;\n  min-width: 100px;\n}\n.obs-cancel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n  color: #b91c1c;\n  line-height: 1.4;\n}\n.obs-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.obs-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n  color: #64748b;\n  line-height: 1.4;\n  margin-top: 3px;\n}\n.obs-note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.obs-empty[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.edit-current-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n  color: #0369a1;\n  margin-bottom: 16px;\n}\n.edit-current-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal-sm[_ngcontent-%COMP%] {\n  max-width: 440px;\n}\n.search-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 0 10px;\n}\n.search-inline[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  background: #fff;\n}\n.search-inline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  flex: 1;\n  padding: 9px 0;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n}\n.search-inline[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-dropdown[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  margin-top: 4px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.search-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.search-option[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-option[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.search-option[_ngcontent-%COMP%]    + .search-option[_ngcontent-%COMP%] {\n  border-top: 1px solid #f1f5f9;\n}\n.selected-patient[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n  border-radius: 7px;\n  padding: 8px 12px;\n  font-size: 0.875rem;\n  margin-top: 6px;\n}\n.selected-patient[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.slot-hint[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  padding: 10px 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.slot-hint.no-slots[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.slot-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 4px;\n}\n.slot-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 7px;\n  border: 1.5px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.85rem;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.slot-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #2563eb;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.slot-btn.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #2563eb;\n  color: #fff;\n}\n.slot-btn.occupied[_ngcontent-%COMP%], \n.slot-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  background: #f1f5f9;\n}\n.slot-occ[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #ef4444;\n  font-weight: 400;\n}\n/*# sourceMappingURL=appointments.css.map */'] });
var AppointmentsComponent = _AppointmentsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppointmentsComponent, [{
    type: Component,
    args: [{ selector: "app-appointments", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Encabezado con filtros opcionales -->
<div class="module-header">
  <div class="filters-row">
    <div class="filter-group">
      <span class="material-icons filter-icon">calendar_today</span>
      <input type="date" [(ngModel)]="filterFrom" placeholder="Desde" (change)="applyFilters()">
      <span class="filter-sep">\u2014</span>
      <input type="date" [(ngModel)]="filterTo" placeholder="Hasta" (change)="applyFilters()">
    </div>
    <div class="search-box cedula-search">
      <span class="material-icons">badge</span>
      <input type="text" [(ngModel)]="filterDocument" placeholder="Buscar por c\xE9dula..."
             (keyup.enter)="applyFilters()">
      @if (filterDocument.trim()) {
        <button class="btn-clear" (click)="clearFilters()"><span class="material-icons">close</span></button>
      }
      <button class="btn-icon" (click)="applyFilters()">Buscar</button>
    </div>
    @if (filterFrom || filterTo || filterDocument.trim()) {
      <button class="btn-link" (click)="clearFilters()">Limpiar filtros</button>
    }
  </div>
  <button class="btn-primary" (click)="openForm()">
    <span class="material-icons">add</span> Nueva cita
  </button>
</div>

<div class="card">
  @if (loading()) {
    <div class="loading"><div class="spinner"></div><p>Cargando citas...</p></div>
  } @else if (appointments().length === 0) {
    <div class="empty">
      <span class="material-icons">event_busy</span>
      <p>No hay citas registradas.</p>
      <button class="btn-primary" (click)="openForm()">Agendar cita</button>
    </div>
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
          <th>Observaciones / Motivo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        @for (a of appointments(); track a.id) {
          <tr>
            <td class="date-cell">{{ a.appointment_date | date:'dd/MM/yyyy' }}</td>
            <td class="time-cell">{{ a.start_time.slice(0,5) }} \u2013 {{ a.end_time.slice(0,5) }}</td>
            <td>
              <div class="patient-info">
                <span class="patient-name">{{ a.patient_name }}</span>
                <span class="patient-doc">{{ a.patient_document }}</span>
              </div>
            </td>
            <td>{{ a.professional_name }}</td>
            <td class="type-cell">{{ typeLabel(a.appointment_type) }}</td>
            <td><span class="badge" [class]="statusClass(a.status)">{{ statusLabel(a.status) }}</span></td>
            <td class="obs-cell">
              @if (a.cancellation_reason) {
                <div class="obs-cancel"><span class="material-icons">cancel</span>{{ a.cancellation_reason }}</div>
              }
              @if (a.notes) {
                <div class="obs-note"><span class="material-icons">notes</span>{{ a.notes }}</div>
              }
              @if (!a.cancellation_reason && !a.notes) { <span class="obs-empty">\u2014</span> }
            </td>
            <td>
              <div class="action-row">
                @if (canAtender(a)) {
                  <button class="btn-action btn-atender" (click)="atender(a)" title="Iniciar atenci\xF3n y abrir Historia Cl\xEDnica">
                    <span class="material-icons">medical_services</span> Atender
                  </button>
                }
                @if (a.status === 'en_atencion') {
                  <span class="in-progress-label">
                    <span class="material-icons">radio_button_checked</span> En atenci\xF3n
                  </span>
                }
                @if (canEdit(a)) {
                  <button class="btn-action btn-edit" (click)="openEditModal(a)" title="Modificar cita">
                    <span class="material-icons">edit_calendar</span>
                  </button>
                }
                @if (canCancel(a)) {
                  <button class="btn-action btn-cancel" (click)="openCancelModal(a.id)" title="Cancelar cita">
                    <span class="material-icons">cancel</span>
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

<!-- \u2500\u2500 Modal Nueva Cita \u2500\u2500 -->
@if (showForm()) {
  <div class="modal-backdrop" (click)="showForm.set(false)">
    <div class="modal modal-lg" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>Agendar Cita</h3>
        <button class="btn-icon-only" (click)="showForm.set(false)"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (formError()) { <div class="alert-error"><span class="material-icons">error_outline</span>{{ formError() }}</div> }
        <div class="form-grid">
          <div class="field field-full">
            <label>Paciente *</label>
            <div class="search-inline">
              <span class="material-icons">search</span>
              <input type="text" [(ngModel)]="patientSearch" (keyup.enter)="searchPatients()"
                placeholder="Buscar por nombre o documento..." name="patient_search">
              <button class="btn-icon" (click)="searchPatients()">Buscar</button>
            </div>
            @if (patientSearchResults().length > 0) {
              <div class="search-dropdown">
                @for (p of patientSearchResults(); track p.id) {
                  <div class="search-option" (click)="selectPatient(p)">
                    <span class="material-icons">person</span>
                    <span><strong>{{ p.first_name }} {{ p.last_name }}</strong> \u2014 {{ p.document_type }} {{ p.document_number }}</span>
                  </div>
                }
              </div>
            }
            @if (selectedPatient()) {
              <div class="selected-patient">
                <span class="material-icons">check_circle</span>
                <span>{{ selectedPatient()!.first_name }} {{ selectedPatient()!.last_name }} ({{ selectedPatient()!.document_type }} {{ selectedPatient()!.document_number }})</span>
              </div>
            }
          </div>
          <div class="field">
            <label>Profesional *</label>
            <select [(ngModel)]="form.professional_id" name="professional" (change)="onProfessionalOrDateChange()">
              <option [value]="0">Seleccionar profesional...</option>
              @for (p of professionals(); track p.id) {
                <option [value]="p.id">{{ p.full_name }} \u2014 {{ p.specialty ?? p.role }}</option>
              }
            </select>
          </div>
          <div class="field">
            <label>Fecha *</label>
            <input type="date" [(ngModel)]="form.appointment_date" name="appt_date"
              (change)="onProfessionalOrDateChange()" [min]="today()">
          </div>
          <div class="field field-full">
            <label>Horario disponible *</label>
            @if (slotsLoading()) {
              <p class="slot-hint"><span class="spinner-sm"></span> Cargando disponibilidad...</p>
            } @else if (!form.professional_id || !form.appointment_date) {
              <p class="slot-hint">Selecciona un profesional y fecha para ver los horarios.</p>
            } @else if (availableSlots().length === 0) {
              <p class="slot-hint no-slots">No hay horarios disponibles para esta fecha.</p>
            } @else {
              <div class="slot-grid">
                @for (s of availableSlots(); track s.start_time) {
                  <button type="button" class="slot-btn"
                    [class.selected]="form.start_time === s.start_time"
                    [class.occupied]="!s.is_available"
                    [disabled]="!s.is_available"
                    (click)="form.start_time = s.start_time">
                    {{ s.start_time }}
                    @if (!s.is_available) { <span class="slot-occ">Ocupado</span> }
                  </button>
                }
              </div>
            }
          </div>
          <div class="field">
            <label>Tipo de servicio *</label>
            <select [(ngModel)]="form.appointment_type" name="appt_type">
              @for (t of appointmentTypes; track t.value) {
                <option [value]="t.value">{{ t.label }}</option>
              }
            </select>
          </div>
          <div class="field">
            <label>Motivo de consulta</label>
            <input type="text" [(ngModel)]="form.reason" name="reason" placeholder="Breve descripci\xF3n...">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showForm.set(false)">Cancelar</button>
        <button class="btn-primary" (click)="saveAppointment()" [disabled]="saving()">
          @if (saving()) { <span class="spinner-sm"></span> Guardando... }
          @else { <span class="material-icons">event</span> Confirmar cita }
        </button>
      </div>
    </div>
  </div>
}

<!-- \u2500\u2500 Modal Cancelar \u2500\u2500 -->
@if (showCancelModal()) {
  <div class="modal-backdrop" (click)="showCancelModal.set(false)">
    <div class="modal modal-sm" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>Cancelar cita</h3>
        <button class="btn-icon-only" (click)="showCancelModal.set(false)"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        <div class="field">
          <label>Motivo de cancelaci\xF3n *</label>
          <textarea [(ngModel)]="cancelReason" rows="3" placeholder="Indique el motivo..."></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showCancelModal.set(false)">Volver</button>
        <button class="btn-danger" (click)="confirmCancel()" [disabled]="!cancelReason.trim()">
          <span class="material-icons">cancel</span> Cancelar cita
        </button>
      </div>
    </div>
  </div>
}

<!-- \u2500\u2500 Modal Editar / Reprogramar \u2500\u2500 -->
@if (showEditModal()) {
  <div class="modal-backdrop" (click)="showEditModal.set(false)">
    <div class="modal modal-lg" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3><span class="material-icons">edit_calendar</span> Modificar cita</h3>
        <button class="btn-icon-only" (click)="showEditModal.set(false)"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (editError()) { <div class="alert-error"><span class="material-icons">error_outline</span>{{ editError() }}</div> }
        @if (editingAppointment(); as a) {
          <div class="edit-current-info">
            <span class="material-icons">info</span>
            Cita actual: <strong>{{ a.patient_name }}</strong> \u2014 {{ a.appointment_date | date:'dd/MM/yyyy' }} a las {{ a.start_time.slice(0,5) }} con {{ a.professional_name }}
          </div>
        }
        <div class="form-grid">
          <div class="field">
            <label>Profesional *</label>
            <select [(ngModel)]="editProf" (change)="editSlot=''; loadEditSlots()">
              <option [value]="0">Seleccionar...</option>
              @for (p of professionals(); track p.id) {
                <option [value]="p.id">{{ p.full_name }} \u2014 {{ p.specialty ?? p.role }}</option>
              }
            </select>
          </div>
          <div class="field">
            <label>Nueva fecha *</label>
            <input type="date" [(ngModel)]="editDate" (change)="editSlot=''; loadEditSlots()" [min]="today()">
          </div>
          <div class="field field-full">
            <label>Nuevo horario *</label>
            @if (editSlotsLoading()) {
              <p class="slot-hint"><span class="spinner-sm"></span> Cargando horarios...</p>
            } @else if (!editProf || !editDate) {
              <p class="slot-hint">Selecciona profesional y fecha.</p>
            } @else if (editSlots().length === 0) {
              <p class="slot-hint no-slots">No hay horarios disponibles.</p>
            } @else {
              <div class="slot-grid">
                @for (s of editSlots(); track s.start_time) {
                  <button type="button" class="slot-btn"
                    [class.selected]="editSlot === s.start_time"
                    [class.occupied]="!s.is_available"
                    [disabled]="!s.is_available"
                    (click)="editSlot = s.start_time">
                    {{ s.start_time }}
                    @if (!s.is_available) { <span class="slot-occ">Ocupado</span> }
                  </button>
                }
              </div>
            }
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showEditModal.set(false)">Cancelar</button>
        <button class="btn-primary" (click)="saveEdit()" [disabled]="editSaving()">
          @if (editSaving()) { <span class="spinner-sm"></span> Guardando... }
          @else { <span class="material-icons">save</span> Guardar cambios }
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/admin/appointments/appointments.scss */\n.module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.search-box .btn-icon {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box .btn-icon:hover {\n  background: #1d4ed8;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary,\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary:hover,\n.btn-danger:hover {\n  background: #f8fafc;\n}\n.btn-danger {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger:hover {\n  background: #fee2e2;\n}\n.btn-icon-only {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only .material-icons {\n  font-size: 20px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table tbody tr:hover {\n  background: #fafbfc;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty p {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full {\n  grid-column: 1/-1;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field input,\n.field select,\n.field textarea {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field input::placeholder,\n.field select::placeholder,\n.field textarea::placeholder {\n  color: #94a3b8;\n}\n.field textarea {\n  resize: vertical;\n}\n.field select {\n  cursor: pointer;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.filters-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 10px;\n}\n.filter-group input {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  cursor: pointer;\n  width: 130px;\n}\n.filter-icon {\n  font-size: 16px;\n  color: #64748b;\n}\n.filter-sep {\n  color: #64748b;\n  font-size: 0.8rem;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 0.8rem;\n  cursor: pointer;\n  padding: 0 4px;\n  white-space: nowrap;\n}\n.btn-link:hover {\n  color: #ef4444;\n  text-decoration: underline;\n}\n.cedula-search {\n  max-width: 300px;\n}\n.btn-clear {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  display: flex;\n  color: #64748b;\n}\n.btn-clear:hover {\n  color: #0f172a;\n}\n.btn-clear .material-icons {\n  font-size: 16px;\n}\n.date-cell {\n  font-size: 0.82rem;\n  color: #64748b;\n  white-space: nowrap;\n}\n.time-cell {\n  font-weight: 600;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n.type-cell {\n  font-size: 0.82rem;\n}\n.patient-name {\n  display: block;\n  font-weight: 500;\n}\n.patient-doc {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.action-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.btn-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: all 0.15s;\n}\n.btn-action .material-icons {\n  font-size: 15px;\n}\n.btn-action.btn-atender {\n  background: #f0fdf4;\n  color: #15803d;\n}\n.btn-action.btn-atender:hover {\n  background: #dcfce7;\n}\n.btn-action.btn-edit {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.btn-action.btn-edit:hover {\n  background: #dbeafe;\n}\n.btn-action.btn-cancel {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.btn-action.btn-cancel:hover {\n  background: #fecaca;\n}\n.in-progress-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #c2410c;\n}\n.in-progress-label .material-icons {\n  font-size: 14px;\n  animation: pulse 1.5s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.obs-cell {\n  font-size: 0.79rem;\n  max-width: 200px;\n  min-width: 100px;\n}\n.obs-cancel {\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n  color: #b91c1c;\n  line-height: 1.4;\n}\n.obs-cancel .material-icons {\n  font-size: 13px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.obs-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n  color: #64748b;\n  line-height: 1.4;\n  margin-top: 3px;\n}\n.obs-note .material-icons {\n  font-size: 13px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.obs-empty {\n  color: #94a3b8;\n}\n.edit-current-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n  color: #0369a1;\n  margin-bottom: 16px;\n}\n.edit-current-info .material-icons {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.modal-lg {\n  max-width: 720px;\n}\n.modal-sm {\n  max-width: 440px;\n}\n.search-inline {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 0 10px;\n}\n.search-inline:focus-within {\n  border-color: #2563eb;\n  background: #fff;\n}\n.search-inline .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-inline input {\n  border: none;\n  background: transparent;\n  outline: none;\n  flex: 1;\n  padding: 9px 0;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n}\n.search-inline .btn-icon {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-dropdown {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  margin-top: 4px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.search-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.search-option .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-option:hover {\n  background: #f8fafc;\n}\n.search-option + .search-option {\n  border-top: 1px solid #f1f5f9;\n}\n.selected-patient {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n  border-radius: 7px;\n  padding: 8px 12px;\n  font-size: 0.875rem;\n  margin-top: 6px;\n}\n.selected-patient .material-icons {\n  font-size: 18px;\n}\n.slot-hint {\n  font-size: 0.85rem;\n  color: #64748b;\n  padding: 10px 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.slot-hint.no-slots {\n  color: #b91c1c;\n}\n.slot-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 4px;\n}\n.slot-btn {\n  padding: 8px 14px;\n  border-radius: 7px;\n  border: 1.5px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.85rem;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.slot-btn:hover:not(:disabled) {\n  border-color: #2563eb;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.slot-btn.selected {\n  border-color: #2563eb;\n  background: #2563eb;\n  color: #fff;\n}\n.slot-btn.occupied,\n.slot-btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  background: #f1f5f9;\n}\n.slot-occ {\n  font-size: 0.65rem;\n  color: #ef4444;\n  font-weight: 400;\n}\n/*# sourceMappingURL=appointments.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppointmentsComponent, { className: "AppointmentsComponent", filePath: "src/app/admin/appointments/appointments.ts", lineNumber: 14 });
})();
export {
  AppointmentsComponent
};
//# sourceMappingURL=chunk-5XOFD3RV.mjs.map
