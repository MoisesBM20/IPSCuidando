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
import {
  Router
} from "./chunk-QOYWAKCN.js";
import {
  CommonModule,
  Component,
  DatePipe,
  computed,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QNZMPU6U.js";

// src/app/pages/portal/portal.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.service_type;
var _forTrack2 = ($index, $item) => $item.start_time;
function PortalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 18)(2, "span", 8);
    \u0275\u0275text(3, "waving_hand");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function PortalComponent_Conditional_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBooking());
    });
    \u0275\u0275elementStart(10, "span", 8);
    \u0275\u0275text(11, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Solicitar cita ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Bienvenido, ", p_r3.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", p_r3.document_type, " ", p_r3.document_number, " \xA0\xB7\xA0 EPS: ", p_r3.eps ?? "No registrada");
  }
}
function PortalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cargando citas...");
    \u0275\u0275elementEnd()();
  }
}
function PortalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 8);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No tienes citas pr\xF3ximas agendadas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function PortalComponent_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBooking());
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Solicitar una cita ");
    \u0275\u0275elementEnd()();
  }
}
function PortalComponent_Conditional_24_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r5.professional_name, " ");
  }
}
function PortalComponent_Conditional_24_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5.reason);
  }
}
function PortalComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 29)(8, "span", 8);
    \u0275\u0275text(9, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, PortalComponent_Conditional_24_For_2_Conditional_13_Template, 4, 1, "div", 31);
    \u0275\u0275conditionalCreate(14, PortalComponent_Conditional_24_For_2_Conditional_14_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClass(a_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(a_r5.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, a_r5.appointment_date, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", a_r5.start_time, " \u2014 ", a_r5.end_time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(a_r5.appointment_type));
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r5.professional_name ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r5.reason ? 14 : -1);
  }
}
function PortalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, PortalComponent_Conditional_24_For_2_Template, 15, 12, "div", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.upcoming());
  }
}
function PortalComponent_Conditional_25_For_21_Template(rf, ctx) {
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
    \u0275\u0275elementStart(10, "td")(11, "span", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, a_r6.appointment_date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r6.start_time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(a_r6.appointment_type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.professional_name ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClass(a_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(a_r6.status));
  }
}
function PortalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 13)(2, "span", 8);
    \u0275\u0275text(3, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Historial de citas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "table", 34)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, PortalComponent_Conditional_25_For_21_Template, 13, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.past());
  }
}
function PortalComponent_Conditional_26_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 8);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.profileMsg());
  }
}
function PortalComponent_Conditional_26_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.profileError());
  }
}
function PortalComponent_Conditional_26_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 48)(2, "label");
    \u0275\u0275text(3, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.phone, $event) || (ctx_r1.profileForm.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 48)(6, "label");
    \u0275\u0275text(7, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.email, $event) || (ctx_r1.profileForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "label");
    \u0275\u0275text(11, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.address, $event) || (ctx_r1.profileForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 48)(14, "label");
    \u0275\u0275text(15, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.city, $event) || (ctx_r1.profileForm.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 48)(18, "label");
    \u0275\u0275text(19, "EPS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.eps, $event) || (ctx_r1.profileForm.eps = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 48)(22, "label");
    \u0275\u0275text(23, "R\xE9gimen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.regime, $event) || (ctx_r1.profileForm.regime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 53);
    \u0275\u0275text(26, "\u2014 Seleccionar \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 54);
    \u0275\u0275text(28, "Contributivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 55);
    \u0275\u0275text(30, "Subsidiado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 56);
    \u0275\u0275text(32, "Especial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 57);
    \u0275\u0275text(34, "Vinculado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 48)(36, "label");
    \u0275\u0275text(37, "Contacto de emergencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.emergency_contact_name, $event) || (ctx_r1.profileForm.emergency_contact_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 48)(40, "label");
    \u0275\u0275text(41, "Tel\xE9fono emergencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.emergency_contact_phone, $event) || (ctx_r1.profileForm.emergency_contact_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 48)(44, "label");
    \u0275\u0275text(45, "Parentesco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_22_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.emergency_contact_relationship, $event) || (ctx_r1.profileForm.emergency_contact_relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.eps);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.regime);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.emergency_contact_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.emergency_contact_phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.emergency_contact_relationship);
  }
}
function PortalComponent_Conditional_26_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 48)(2, "label");
    \u0275\u0275text(3, "Contrase\xF1a actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_23_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pwForm.current_password, $event) || (ctx_r1.pwForm.current_password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 48)(6, "label");
    \u0275\u0275text(7, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_23_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pwForm.new_password, $event) || (ctx_r1.pwForm.new_password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "label");
    \u0275\u0275text(11, "Confirmar nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_26_Conditional_23_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pwForm.confirm, $event) || (ctx_r1.pwForm.confirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pwForm.current_password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pwForm.new_password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pwForm.confirm);
  }
}
function PortalComponent_Conditional_26_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 63);
  }
}
function PortalComponent_Conditional_26_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function PortalComponent_Conditional_26_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveProfile());
    });
    \u0275\u0275conditionalCreate(1, PortalComponent_Conditional_26_Conditional_27_Conditional_1_Template, 1, 0, "span", 63);
    \u0275\u0275text(2, " Guardar cambios ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.profileSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profileSaving() ? 1 : -1);
  }
}
function PortalComponent_Conditional_26_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 63);
  }
}
function PortalComponent_Conditional_26_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function PortalComponent_Conditional_26_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.savePassword());
    });
    \u0275\u0275conditionalCreate(1, PortalComponent_Conditional_26_Conditional_28_Conditional_1_Template, 1, 0, "span", 63);
    \u0275\u0275text(2, " Cambiar contrase\xF1a ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.profileSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profileSaving() ? 1 : -1);
  }
}
function PortalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function PortalComponent_Conditional_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showProfile.set(false));
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function PortalComponent_Conditional_26_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "h3")(4, "span", 8);
    \u0275\u0275text(5, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Mi perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 38);
    \u0275\u0275listener("click", function PortalComponent_Conditional_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showProfile.set(false));
    });
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 39)(11, "button", 40);
    \u0275\u0275listener("click", function PortalComponent_Conditional_26_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.profileTab.set("info");
      ctx_r1.profileMsg.set("");
      return \u0275\u0275resetView(ctx_r1.profileError.set(""));
    });
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Informaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 40);
    \u0275\u0275listener("click", function PortalComponent_Conditional_26_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.profileTab.set("password");
      ctx_r1.profileMsg.set("");
      return \u0275\u0275resetView(ctx_r1.profileError.set(""));
    });
    \u0275\u0275elementStart(16, "span", 8);
    \u0275\u0275text(17, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Contrase\xF1a ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 41);
    \u0275\u0275conditionalCreate(20, PortalComponent_Conditional_26_Conditional_20_Template, 4, 1, "div", 42);
    \u0275\u0275conditionalCreate(21, PortalComponent_Conditional_26_Conditional_21_Template, 4, 1, "div", 43);
    \u0275\u0275conditionalCreate(22, PortalComponent_Conditional_26_Conditional_22_Template, 47, 9, "div", 44);
    \u0275\u0275conditionalCreate(23, PortalComponent_Conditional_26_Conditional_23_Template, 13, 3, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 45)(25, "button", 46);
    \u0275\u0275listener("click", function PortalComponent_Conditional_26_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showProfile.set(false));
    });
    \u0275\u0275text(26, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, PortalComponent_Conditional_26_Conditional_27_Template, 3, 2, "button", 47)(28, PortalComponent_Conditional_26_Conditional_28_Template, 3, 2, "button", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275classProp("active", ctx_r1.profileTab() === "info");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.profileTab() === "password");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.profileMsg() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profileError() ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profileTab() === "info" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profileTab() === "password" ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.profileTab() === "info" ? 27 : 28);
  }
}
function PortalComponent_Conditional_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "\xA1Cita agendada con \xE9xito!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 68);
    \u0275\u0275text(8, "C\xF3digo: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 69)(12, "span")(13, "span", 8);
    \u0275\u0275text(14, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span")(17, "span", 8);
    \u0275\u0275text(18, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "span", 8);
    \u0275\u0275text(22, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 70);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_10_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeBooking());
    });
    \u0275\u0275text(25, "Cerrar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const res_r14 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(res_r14.message);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(res_r14.confirmation_code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", res_r14.professional_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(res_r14.appointment_date));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", res_r14.start_time, " \u2014 ", res_r14.end_time);
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cargando servicios...");
    \u0275\u0275elementEnd()();
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, "No hay servicios disponibles en este momento.");
    \u0275\u0275elementEnd();
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_For_4_Template_button_click_0_listener() {
      const svc_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.selectService(svc_r17));
    });
    \u0275\u0275elementStart(1, "span", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const svc_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", ((tmp_14_0 = ctx_r1.selectedService()) == null ? null : tmp_14_0.service_type) === svc_r17.service_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r17.display_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r17.description);
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r19.name, "", p_r19.specialty ? " \xB7 " + p_r19.specialty : "");
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "label");
    \u0275\u0275text(2, "Profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 52);
    \u0275\u0275listener("ngModelChange", function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_0_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.selectedProfId.set($event));
    });
    \u0275\u0275elementStart(4, "option", 86);
    \u0275\u0275text(5, "\u2014 Selecciona un profesional \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_0_For_7_Template, 2, 3, "option", 86, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const svc_r20 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.selectedProfId());
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(svc_r20.professionals);
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r20 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", svc_r20.professionals[0].specialty);
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span", 8);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Profesional: ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_1_Conditional_6_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r20 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(svc_r20.professionals[0].name);
    \u0275\u0275advance();
    \u0275\u0275conditional(svc_r20.professionals[0].specialty ? 6 : -1);
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_0_Template, 8, 2, "div", 48)(1, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Conditional_1_Template, 7, 2, "div", 85);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.professionals.length > 1 ? 0 : 1);
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, "Selecciona el tipo de consulta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 80);
    \u0275\u0275repeaterCreate(3, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_For_4_Template, 5, 4, "button", 81, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Conditional_5_Template, 2, 1);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.services());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.selectedService()) ? 5 : -1, tmp_5_0);
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275conditionalCreate(1, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_1_Template, 4, 0, "div", 14)(2, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_2_Template, 2, 0, "div", 77)(3, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Conditional_3_Template, 6, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 78)(5, "button", 46);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeBooking());
    });
    \u0275\u0275text(6, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 62);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_11_Conditional_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goStep2());
    });
    \u0275\u0275text(8, " Siguiente ");
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingServices() ? 1 : ctx_r1.services().length === 0 ? 2 : 3);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.selectedService() || !ctx_r1.selectedProfId());
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Buscando horarios disponibles...");
    \u0275\u0275elementEnd()();
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1, "No hay horarios disponibles para esta fecha. Intenta con otra.");
    \u0275\u0275elementEnd();
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_7_For_4_Template_button_click_0_listener() {
      const slot_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.selectSlot(slot_r23));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("available", slot_r23.is_available)("taken", !slot_r23.is_available)("selected", ctx_r1.selectedSlot() === slot_r23.start_time);
    \u0275\u0275property("disabled", !slot_r23.is_available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r23.start_time, " ");
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1, "Horarios disponibles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 90);
    \u0275\u0275repeaterCreate(3, PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_7_For_4_Template, 2, 8, "button", 91, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.slotsForDate());
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 48)(2, "label");
    \u0275\u0275text(3, "Fecha de la cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 87);
    \u0275\u0275listener("change", function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectedDate.set($event.target.value);
      return \u0275\u0275resetView(ctx_r1.onDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_5_Template, 4, 0, "div", 14)(6, PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_6_Template, 2, 0, "div", 88)(7, PortalComponent_Conditional_27_Conditional_11_Conditional_19_Conditional_7_Template, 5, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 78)(9, "button", 46);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.bookingStep.set(1));
    });
    \u0275\u0275elementStart(10, "span", 8);
    \u0275\u0275text(11, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Atr\xE1s ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 62);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_11_Conditional_19_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goStep3());
    });
    \u0275\u0275text(14, " Siguiente ");
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.selectedDate())("min", ctx_r1.minDate())("max", ctx_r1.maxDate());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingSlots() ? 5 : ctx_r1.selectedDate() && ctx_r1.availableDays().length === 0 && !ctx_r1.loadingSlots() ? 6 : ctx_r1.availableSlots().length > 0 ? 7 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.selectedDate() || !ctx_r1.selectedSlot());
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_20_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.bookingError());
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_20_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 63);
    \u0275\u0275text(1, " Agendando... ");
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_20_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Confirmar cita ");
  }
}
function PortalComponent_Conditional_27_Conditional_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 93)(2, "div", 94)(3, "span", 8);
    \u0275\u0275text(4, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 95);
    \u0275\u0275text(7, "Servicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 96);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 94)(11, "span", 8);
    \u0275\u0275text(12, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 95);
    \u0275\u0275text(15, "Profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 96);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 94)(19, "span", 8);
    \u0275\u0275text(20, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 95);
    \u0275\u0275text(23, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 96);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 94)(27, "span", 8);
    \u0275\u0275text(28, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 95);
    \u0275\u0275text(31, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 96);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 48)(35, "label");
    \u0275\u0275text(36, "Motivo de la consulta ");
    \u0275\u0275elementStart(37, "span", 97);
    \u0275\u0275text(38, "(opcional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "textarea", 98);
    \u0275\u0275twoWayListener("ngModelChange", function PortalComponent_Conditional_27_Conditional_11_Conditional_20_Template_textarea_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.bookingReason, $event) || (ctx_r1.bookingReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(40, PortalComponent_Conditional_27_Conditional_11_Conditional_20_Conditional_40_Template, 2, 1, "div", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 78)(42, "button", 46);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_11_Conditional_20_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.bookingStep.set(2));
    });
    \u0275\u0275elementStart(43, "span", 8);
    \u0275\u0275text(44, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Atr\xE1s ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 100);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Conditional_11_Conditional_20_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275conditionalCreate(47, PortalComponent_Conditional_27_Conditional_11_Conditional_20_Conditional_47_Template, 2, 0)(48, PortalComponent_Conditional_27_Conditional_11_Conditional_20_Conditional_48_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.selectedService()) == null ? null : tmp_3_0.display_name);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.selectedProfessional()) == null ? null : tmp_4_0.name);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedDate()));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedSlot());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bookingReason);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bookingError() ? 40 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.booking());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.booking() ? 47 : 48);
  }
}
function PortalComponent_Conditional_27_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "span", 73);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275text(5, "Servicio");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 75);
    \u0275\u0275elementStart(7, "div", 72)(8, "span", 73);
    \u0275\u0275text(9, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 74);
    \u0275\u0275text(11, "Fecha y hora");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 75);
    \u0275\u0275elementStart(13, "div", 72)(14, "span", 73);
    \u0275\u0275text(15, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 74);
    \u0275\u0275text(17, "Confirmar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, PortalComponent_Conditional_27_Conditional_11_Conditional_18_Template, 11, 2);
    \u0275\u0275conditionalCreate(19, PortalComponent_Conditional_27_Conditional_11_Conditional_19_Template, 17, 5);
    \u0275\u0275conditionalCreate(20, PortalComponent_Conditional_27_Conditional_11_Conditional_20_Template, 49, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.bookingStep() >= 1)("done", ctx_r1.bookingStep() > 1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("done", ctx_r1.bookingStep() > 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.bookingStep() >= 2)("done", ctx_r1.bookingStep() > 2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("done", ctx_r1.bookingStep() > 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.bookingStep() >= 3);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.bookingStep() === 1 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bookingStep() === 2 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bookingStep() === 3 ? 20 : -1);
  }
}
function PortalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBooking());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 65)(3, "h3")(4, "span", 8);
    \u0275\u0275text(5, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Solicitar cita ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 38);
    \u0275\u0275listener("click", function PortalComponent_Conditional_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBooking());
    });
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, PortalComponent_Conditional_27_Conditional_10_Template, 26, 6, "div", 66)(11, PortalComponent_Conditional_27_Conditional_11_Template, 21, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.bookingSuccess()) ? 10 : 11, tmp_1_0);
  }
}
var _PortalComponent = class _PortalComponent {
  constructor() {
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.appointments = signal([], ...ngDevMode ? [{ debugName: "appointments" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.profile = signal(null, ...ngDevMode ? [{ debugName: "profile" }] : []);
    this.showBooking = signal(false, ...ngDevMode ? [{ debugName: "showBooking" }] : []);
    this.bookingStep = signal(1, ...ngDevMode ? [{ debugName: "bookingStep" }] : []);
    this.services = signal([], ...ngDevMode ? [{ debugName: "services" }] : []);
    this.loadingServices = signal(false, ...ngDevMode ? [{ debugName: "loadingServices" }] : []);
    this.selectedService = signal(null, ...ngDevMode ? [{ debugName: "selectedService" }] : []);
    this.selectedProfId = signal(null, ...ngDevMode ? [{ debugName: "selectedProfId" }] : []);
    this.selectedDate = signal("", ...ngDevMode ? [{ debugName: "selectedDate" }] : []);
    this.loadingSlots = signal(false, ...ngDevMode ? [{ debugName: "loadingSlots" }] : []);
    this.availableDays = signal([], ...ngDevMode ? [{ debugName: "availableDays" }] : []);
    this.selectedSlot = signal("", ...ngDevMode ? [{ debugName: "selectedSlot" }] : []);
    this.bookingReason = "";
    this.booking = signal(false, ...ngDevMode ? [{ debugName: "booking" }] : []);
    this.bookingSuccess = signal(null, ...ngDevMode ? [{ debugName: "bookingSuccess" }] : []);
    this.bookingError = signal("", ...ngDevMode ? [{ debugName: "bookingError" }] : []);
    this.appointmentTypeLabels = {
      consulta_medica: "Consulta M\xE9dica",
      enfermeria: "Enfermer\xEDa",
      terapia_fisica: "Terapia F\xEDsica",
      nutricion: "Nutrici\xF3n",
      psicologia: "Psicolog\xEDa",
      post_quirurgica: "Post-quir\xFArgica",
      sueroterapia: "Sueroterapia",
      seguimiento: "Seguimiento",
      urgencia: "Urgencia"
    };
    this.selectedProfessional = computed(() => {
      const svc = this.selectedService();
      const id = this.selectedProfId();
      return svc?.professionals.find((p) => p.id === id) ?? null;
    }, ...ngDevMode ? [{ debugName: "selectedProfessional" }] : []);
    this.slotsForDate = computed(() => {
      const date = this.selectedDate();
      return this.availableDays().find((d) => d.date === date)?.slots ?? [];
    }, ...ngDevMode ? [{ debugName: "slotsForDate" }] : []);
    this.availableSlots = computed(() => this.slotsForDate().filter((s) => s.is_available), ...ngDevMode ? [{ debugName: "availableSlots" }] : []);
    this.showProfile = signal(false, ...ngDevMode ? [{ debugName: "showProfile" }] : []);
    this.profileTab = signal("info", ...ngDevMode ? [{ debugName: "profileTab" }] : []);
    this.profileSaving = signal(false, ...ngDevMode ? [{ debugName: "profileSaving" }] : []);
    this.profileMsg = signal("", ...ngDevMode ? [{ debugName: "profileMsg" }] : []);
    this.profileError = signal("", ...ngDevMode ? [{ debugName: "profileError" }] : []);
    this.profileForm = {
      phone: "",
      email: "",
      address: "",
      city: "",
      eps: "",
      regime: "",
      emergency_contact_name: "",
      emergency_contact_phone: "",
      emergency_contact_relationship: ""
    };
    this.pwForm = { current_password: "", new_password: "", confirm: "" };
  }
  minDate() {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }
  maxDate() {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().split("T")[0];
  }
  ngOnInit() {
    this.api.getMyProfile().subscribe({ next: (p) => this.profile.set(p), error: () => {
    } });
    this.loadAppointments();
  }
  loadAppointments() {
    this.loading.set(true);
    this.api.getMyAppointments().subscribe({
      next: (a) => {
        this.appointments.set(a);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  logout() {
    this.auth.logout();
  }
  upcoming() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return this.appointments().filter((a) => a.appointment_date >= today && !["cancelada", "completada", "no_asistio"].includes(a.status));
  }
  past() {
    return this.appointments().filter((a) => ["cancelada", "completada", "no_asistio"].includes(a.status));
  }
  // ── Booking flow ─────────────────────────────────────────────────────────────
  openBooking() {
    this.showBooking.set(true);
    this.bookingStep.set(1);
    this.selectedService.set(null);
    this.selectedProfId.set(null);
    this.selectedDate.set("");
    this.availableDays.set([]);
    this.selectedSlot.set("");
    this.bookingReason = "";
    this.bookingSuccess.set(null);
    this.bookingError.set("");
    this.loadingServices.set(true);
    this.api.getPublicServices().subscribe({
      next: (s) => {
        this.services.set(s);
        this.loadingServices.set(false);
      },
      error: () => this.loadingServices.set(false)
    });
  }
  closeBooking() {
    this.showBooking.set(false);
  }
  selectService(svc) {
    this.selectedService.set(svc);
    this.selectedProfId.set(svc.professionals.length === 1 ? svc.professionals[0].id : null);
  }
  goStep2() {
    if (!this.selectedService() || !this.selectedProfId())
      return;
    this.bookingStep.set(2);
    this.selectedDate.set("");
    this.availableDays.set([]);
    this.selectedSlot.set("");
  }
  onDateChange() {
    const date = this.selectedDate();
    const profId = this.selectedProfId();
    if (!date || !profId)
      return;
    this.loadingSlots.set(true);
    this.selectedSlot.set("");
    this.api.getPublicAvailability(profId, date, date).subscribe({
      next: (days) => {
        this.availableDays.set(days);
        this.loadingSlots.set(false);
      },
      error: () => this.loadingSlots.set(false)
    });
  }
  selectSlot(slot) {
    if (!slot.is_available)
      return;
    this.selectedSlot.set(slot.start_time);
  }
  goStep3() {
    if (!this.selectedDate() || !this.selectedSlot())
      return;
    this.bookingStep.set(3);
    this.bookingError.set("");
  }
  confirm() {
    const svc = this.selectedService();
    const profId = this.selectedProfId();
    const date = this.selectedDate();
    const slot = this.selectedSlot();
    if (!svc || !profId || !date || !slot)
      return;
    this.booking.set(true);
    this.bookingError.set("");
    this.api.bookPortalAppointment({
      professional_id: profId,
      appointment_date: date,
      start_time: slot,
      appointment_type: svc.service_type,
      reason: this.bookingReason || void 0
    }).subscribe({
      next: (res) => {
        this.booking.set(false);
        this.bookingSuccess.set(res);
        this.loadAppointments();
      },
      error: (err) => {
        this.booking.set(false);
        this.bookingError.set(err.error?.detail ?? "Error al agendar la cita.");
      }
    });
  }
  openProfile() {
    const p = this.profile();
    this.profileForm = {
      phone: p?.phone ?? "",
      email: p?.email ?? "",
      address: p?.address ?? "",
      city: p?.city ?? "",
      eps: p?.eps ?? "",
      regime: p?.regime ?? "",
      emergency_contact_name: p?.emergency_contact_name ?? "",
      emergency_contact_phone: p?.emergency_contact_phone ?? "",
      emergency_contact_relationship: p?.emergency_contact_relationship ?? ""
    };
    this.pwForm = { current_password: "", new_password: "", confirm: "" };
    this.profileMsg.set("");
    this.profileError.set("");
    this.profileTab.set("info");
    this.showProfile.set(true);
  }
  saveProfile() {
    this.profileSaving.set(true);
    this.profileMsg.set("");
    this.profileError.set("");
    this.api.updatePatientProfile(this.profileForm).subscribe({
      next: () => {
        this.profileSaving.set(false);
        this.profileMsg.set("Perfil actualizado correctamente.");
        this.api.getMyProfile().subscribe({ next: (p) => this.profile.set(p), error: () => {
        } });
      },
      error: (e) => {
        this.profileSaving.set(false);
        this.profileError.set(e.error?.detail ?? "Error al guardar.");
      }
    });
  }
  savePassword() {
    if (this.pwForm.new_password !== this.pwForm.confirm) {
      this.profileError.set("Las contrase\xF1as nuevas no coinciden.");
      return;
    }
    if (this.pwForm.new_password.length < 6) {
      this.profileError.set("M\xEDnimo 6 caracteres.");
      return;
    }
    this.profileSaving.set(true);
    this.profileMsg.set("");
    this.profileError.set("");
    this.api.updatePatientProfile({
      current_password: this.pwForm.current_password,
      new_password: this.pwForm.new_password
    }).subscribe({
      next: () => {
        this.profileSaving.set(false);
        this.profileMsg.set("Contrase\xF1a cambiada correctamente.");
        this.pwForm = { current_password: "", new_password: "", confirm: "" };
      },
      error: (e) => {
        this.profileSaving.set(false);
        this.profileError.set(e.error?.detail ?? "Error al cambiar contrase\xF1a.");
      }
    });
  }
  // ── Labels / styles ──────────────────────────────────────────────────────────
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
    return this.appointmentTypeLabels[t] ?? t;
  }
  formatDate(d) {
    const [y, m, day] = d.split("-");
    return `${day}/${m}/${y}`;
  }
};
_PortalComponent.\u0275fac = function PortalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PortalComponent)();
};
_PortalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalComponent, selectors: [["app-portal"]], decls: 28, vars: 6, consts: [[1, "portal-layout"], [1, "portal-topbar"], [1, "brand"], ["src", "assets/images/global/logo2.png", "alt", "Logo IPS", 1, "brand-logo"], [1, "brand-name"], [1, "topbar-right"], [1, "user-name"], ["title", "Mi perfil", 1, "btn-topbar-icon", 3, "click"], [1, "material-icons"], ["title", "Cerrar sesi\xF3n", 1, "btn-logout", 3, "click"], [1, "portal-content"], [1, "welcome-card"], [1, "section"], [1, "section-title"], [1, "loading-row"], [1, "empty-state"], [1, "appointments-grid"], [1, "modal-overlay"], [1, "welcome-icon"], [1, "welcome-info"], [1, "welcome-title"], [1, "welcome-sub"], [1, "btn-solicitar", 3, "click"], [1, "spinner"], [1, "btn-solicitar-center", 3, "click"], [1, "appt-card"], [1, "appt-header"], [1, "badge"], [1, "appt-date"], [1, "appt-time"], [1, "appt-type"], [1, "appt-prof"], [1, "appt-reason"], [1, "history-table-wrap"], [1, "history-table"], [1, "modal-overlay", 3, "click"], [1, "profile-modal", 3, "click"], [1, "profile-modal-header"], [1, "btn-close", 3, "click"], [1, "profile-tabs"], [3, "click"], [1, "profile-modal-body"], [1, "prof-alert-success"], [1, "prof-alert-error"], [1, "prof-form-grid"], [1, "profile-modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "disabled"], [1, "field-group"], ["type", "tel", "placeholder", "Ej: 3001234567", 3, "ngModelChange", "ngModel"], ["type", "email", 3, "ngModelChange", "ngModel"], ["type", "text", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Contributivo"], ["value", "Subsidiado"], ["value", "Especial"], ["value", "Vinculado"], ["type", "text", "placeholder", "Nombre", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ej: Esposo/a, Hijo/a", 3, "ngModelChange", "ngModel"], ["type", "password", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "M\xEDnimo 6 caracteres", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], [1, "booking-panel"], [1, "booking-header"], [1, "booking-success"], [1, "material-icons", "success-icon"], [1, "confirmation-code"], [1, "success-detail"], [1, "btn-primary", 3, "click"], [1, "steps-bar"], [1, "step"], [1, "step-num"], [1, "step-label"], [1, "step-line"], [1, "booking-body"], [1, "no-services"], [1, "booking-footer"], [1, "step-hint"], [1, "services-grid"], [1, "service-card", 3, "selected"], [1, "service-card", 3, "click"], [1, "service-name"], [1, "service-desc"], [1, "prof-auto"], [3, "ngValue"], ["type", "date", 3, "change", "value", "min", "max"], [1, "no-slots"], [1, "slots-label"], [1, "slots-grid"], [1, "slot-btn", 3, "available", "taken", "selected", "disabled"], [1, "slot-btn", 3, "click", "disabled"], [1, "confirm-summary"], [1, "confirm-row"], [1, "confirm-label"], [1, "confirm-value"], [1, "optional"], ["rows", "3", "placeholder", "Describe brevemente el motivo de tu consulta...", 3, "ngModelChange", "ngModel"], [1, "error-msg"], [1, "btn-primary", "btn-confirm", 3, "click", "disabled"]], template: function PortalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5, "CUIDANDO DE TI CyE IPS SAS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275listener("click", function PortalComponent_Template_button_click_9_listener() {
      return ctx.openProfile();
    });
    \u0275\u0275elementStart(10, "span", 8);
    \u0275\u0275text(11, "manage_accounts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function PortalComponent_Template_button_click_12_listener() {
      return ctx.logout();
    });
    \u0275\u0275elementStart(13, "span", 8);
    \u0275\u0275text(14, "logout");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "main", 10);
    \u0275\u0275conditionalCreate(16, PortalComponent_Conditional_16_Template, 13, 4, "div", 11);
    \u0275\u0275elementStart(17, "section", 12)(18, "h2", 13)(19, "span", 8);
    \u0275\u0275text(20, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Pr\xF3ximas citas ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, PortalComponent_Conditional_22_Template, 4, 0, "div", 14)(23, PortalComponent_Conditional_23_Template, 9, 0, "div", 15)(24, PortalComponent_Conditional_24_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, PortalComponent_Conditional_25_Template, 22, 0, "section", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, PortalComponent_Conditional_26_Template, 29, 9, "div", 17);
    \u0275\u0275conditionalCreate(27, PortalComponent_Conditional_27_Template, 12, 1);
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.full_name);
    \u0275\u0275advance(8);
    \u0275\u0275conditional((tmp_1_0 = ctx.profile()) ? 16 : -1, tmp_1_0);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.loading() ? 22 : ctx.upcoming().length === 0 ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.past().length > 0 ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showProfile() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showBooking() ? 27 : -1);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.portal-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f1f5f9;\n}\n.portal-topbar[_ngcontent-%COMP%] {\n  background: #0f2644;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  flex-shrink: 0;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #f1f5f9;\n  white-space: nowrap;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  color: #94a3b8;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f87171;\n}\n.btn-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.portal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  max-width: 900px;\n  margin: 0 auto;\n  width: 100%;\n}\n.welcome-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.welcome-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #dbeafe;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.welcome-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #2563eb;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.welcome-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 14px;\n  border-bottom: 2px solid #e2e8f0;\n  padding-bottom: 8px;\n}\n.section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2563eb;\n}\n.loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #64748b;\n  font-size: 0.875rem;\n  padding: 20px 0;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 40px;\n  text-align: center;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.3;\n  display: block;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 0.9rem;\n}\n.empty-state[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.appointments-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 14px;\n}\n.appt-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.appt-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.appt-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.appt-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.appt-time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n}\n.appt-type[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.appt-prof[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.82rem;\n  color: #64748b;\n  margin-top: 6px;\n}\n.appt-prof[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.appt-reason[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #0f172a;\n  margin-top: 6px;\n  padding-top: 6px;\n  border-top: 1px solid #e2e8f0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.history-table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.history-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.history-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 10px 14px;\n  text-align: left;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #e2e8f0;\n}\n.history-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n}\n.history-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.btn-solicitar[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-solicitar[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-solicitar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-solicitar-center[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 12px;\n}\n.btn-solicitar-center[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-solicitar-center[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.welcome-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.booking-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 14px;\n  width: 560px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  z-index: 101;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.booking-header[_ngcontent-%COMP%] {\n  border-radius: 14px 14px 0 0;\n}\n.booking-footer[_ngcontent-%COMP%] {\n  border-radius: 0 0 14px 14px;\n}\n.booking-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.booking-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.booking-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2563eb;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n  color: #64748b;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.steps-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 22px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.step[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  background: #fff;\n}\n.step[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #2563eb;\n  color: #fff;\n}\n.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.step.done[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #16a34a;\n  color: #fff;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e2e8f0;\n  margin: 0 8px;\n}\n.step-line.done[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.booking-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 22px;\n}\n.booking-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 22px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.step-hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 12px;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 14px;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.15s;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.service-card.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.service-card[_ngcontent-%COMP%]   .service-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.service-card[_ngcontent-%COMP%]   .service-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.no-services[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #64748b;\n  padding: 30px 0;\n  font-size: 0.875rem;\n}\n.prof-auto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  color: #0f172a;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.prof-auto[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #16a34a;\n}\n.field-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.field-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  color: #0f172a;\n  box-sizing: border-box;\n}\n.field-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.field-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.slots-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 10px;\n}\n.slots-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.slot-btn[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  background: #fff;\n  color: #64748b;\n  transition: all 0.15s;\n}\n.slot-btn.available[_ngcontent-%COMP%] {\n  border-color: #bbf7d0;\n  color: #15803d;\n  background: #f0fdf4;\n  cursor: pointer;\n}\n.slot-btn.available[_ngcontent-%COMP%]:hover {\n  border-color: #16a34a;\n  background: #dcfce7;\n}\n.slot-btn.taken[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #cbd5e1;\n  cursor: not-allowed;\n  text-decoration: line-through;\n}\n.slot-btn.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #2563eb;\n  color: #fff;\n}\n.no-slots[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 0.875rem;\n  color: #c2410c;\n  margin-top: 8px;\n}\n.confirm-summary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.confirm-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.confirm-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2563eb;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.confirm-row[_ngcontent-%COMP%]   .confirm-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.confirm-row[_ngcontent-%COMP%]   .confirm-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-top: 1px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #b91c1c;\n  margin-top: 4px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary.btn-confirm[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.btn-primary.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n.btn-topbar-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  color: #94a3b8;\n}\n.btn-topbar-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f1f5f9;\n}\n.btn-topbar-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.profile-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 500px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  z-index: 101;\n}\n.profile-modal-header[_ngcontent-%COMP%] {\n  border-radius: 14px 14px 0 0;\n}\n.profile-modal-footer[_ngcontent-%COMP%] {\n  border-radius: 0 0 14px 14px;\n}\n.profile-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.profile-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.profile-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2563eb;\n}\n.profile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e2e8f0;\n}\n.profile-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #64748b;\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.profile-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  background: #f8fafc;\n}\n.profile-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 600;\n}\n.profile-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.profile-modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.profile-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.prof-form-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.prof-alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #15803d;\n  margin-bottom: 14px;\n}\n.prof-alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.prof-alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #b91c1c;\n  margin-bottom: 14px;\n}\n.prof-alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.booking-success[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 32px 24px;\n  gap: 10px;\n}\n.booking-success[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: #16a34a;\n}\n.booking-success[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.booking-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 0;\n}\n.booking-success[_ngcontent-%COMP%]   .confirmation-code[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 8px 20px;\n  font-size: 0.875rem;\n  color: #15803d;\n}\n.success-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n  margin: 4px 0;\n}\n.success-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.success-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n}\n/*# sourceMappingURL=portal.css.map */"] });
var PortalComponent = _PortalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalComponent, [{
    type: Component,
    args: [{ selector: "app-portal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="portal-layout">

  <!-- Topbar -->
  <header class="portal-topbar">
    <div class="brand">
      <img src="assets/images/global/logo2.png" alt="Logo IPS" class="brand-logo">
      <span class="brand-name">CUIDANDO DE TI CyE IPS SAS</span>
    </div>
    <div class="topbar-right">
      <span class="user-name">{{ auth.currentUser()?.full_name }}</span>
      <button class="btn-topbar-icon" (click)="openProfile()" title="Mi perfil">
        <span class="material-icons">manage_accounts</span>
      </button>
      <button class="btn-logout" (click)="logout()" title="Cerrar sesi\xF3n">
        <span class="material-icons">logout</span>
      </button>
    </div>
  </header>

  <!-- Contenido -->
  <main class="portal-content">

    <!-- Bienvenida -->
    @if (profile(); as p) {
      <div class="welcome-card">
        <div class="welcome-icon"><span class="material-icons">waving_hand</span></div>
        <div class="welcome-info">
          <div class="welcome-title">Bienvenido, {{ p.full_name }}</div>
          <div class="welcome-sub">{{ p.document_type }} {{ p.document_number }} &nbsp;\xB7&nbsp; EPS: {{ p.eps ?? 'No registrada' }}</div>
        </div>
        <button class="btn-solicitar" (click)="openBooking()">
          <span class="material-icons">add_circle</span> Solicitar cita
        </button>
      </div>
    }

    <!-- Pr\xF3ximas citas -->
    <section class="section">
      <h2 class="section-title">
        <span class="material-icons">calendar_month</span> Pr\xF3ximas citas
      </h2>

      @if (loading()) {
        <div class="loading-row"><div class="spinner"></div><span>Cargando citas...</span></div>
      } @else if (upcoming().length === 0) {
        <div class="empty-state">
          <span class="material-icons">event_available</span>
          <p>No tienes citas pr\xF3ximas agendadas.</p>
          <button class="btn-solicitar-center" (click)="openBooking()">
            <span class="material-icons">add</span> Solicitar una cita
          </button>
        </div>
      } @else {
        <div class="appointments-grid">
          @for (a of upcoming(); track a.id) {
            <div class="appt-card">
              <div class="appt-header">
                <span class="badge" [class]="statusClass(a.status)">{{ statusLabel(a.status) }}</span>
                <span class="appt-date">{{ a.appointment_date | date:'dd/MM/yyyy' }}</span>
              </div>
              <div class="appt-time">
                <span class="material-icons">schedule</span> {{ a.start_time }} \u2014 {{ a.end_time }}
              </div>
              <div class="appt-type">{{ typeLabel(a.appointment_type) }}</div>
              @if (a.professional_name) {
                <div class="appt-prof">
                  <span class="material-icons">person</span> {{ a.professional_name }}
                </div>
              }
              @if (a.reason) {
                <div class="appt-reason">{{ a.reason }}</div>
              }
            </div>
          }
        </div>
      }
    </section>

    <!-- Historial -->
    @if (past().length > 0) {
      <section class="section">
        <h2 class="section-title">
          <span class="material-icons">history</span> Historial de citas
        </h2>
        <div class="history-table-wrap">
          <table class="history-table">
            <thead>
              <tr>
                <th>Fecha</th><th>Hora</th><th>Tipo</th><th>Profesional</th><th>Estado</th>
              </tr>
            </thead>
            <tbody>
              @for (a of past(); track a.id) {
                <tr>
                  <td>{{ a.appointment_date | date:'dd/MM/yyyy' }}</td>
                  <td>{{ a.start_time }}</td>
                  <td>{{ typeLabel(a.appointment_type) }}</td>
                  <td>{{ a.professional_name ?? '\u2014' }}</td>
                  <td><span class="badge" [class]="statusClass(a.status)">{{ statusLabel(a.status) }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </section>
    }

  </main>
</div>

<!-- \u2500\u2500 Modal Mi Perfil \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (showProfile()) {
  <div class="modal-overlay" (click)="showProfile.set(false)">
    <div class="profile-modal" (click)="$event.stopPropagation()">

      <div class="profile-modal-header">
        <h3><span class="material-icons">manage_accounts</span> Mi perfil</h3>
        <button class="btn-close" (click)="showProfile.set(false)">
          <span class="material-icons">close</span>
        </button>
      </div>

      <div class="profile-tabs">
        <button [class.active]="profileTab()==='info'"     (click)="profileTab.set('info');     profileMsg.set('');profileError.set('')">
          <span class="material-icons">person</span> Informaci\xF3n
        </button>
        <button [class.active]="profileTab()==='password'" (click)="profileTab.set('password'); profileMsg.set('');profileError.set('')">
          <span class="material-icons">lock</span> Contrase\xF1a
        </button>
      </div>

      <div class="profile-modal-body">
        @if (profileMsg()) {
          <div class="prof-alert-success"><span class="material-icons">check_circle</span> {{ profileMsg() }}</div>
        }
        @if (profileError()) {
          <div class="prof-alert-error"><span class="material-icons">error_outline</span> {{ profileError() }}</div>
        }

        @if (profileTab() === 'info') {
          <div class="prof-form-grid">
            <div class="field-group">
              <label>Tel\xE9fono</label>
              <input type="tel" [(ngModel)]="profileForm.phone" placeholder="Ej: 3001234567">
            </div>
            <div class="field-group">
              <label>Correo electr\xF3nico</label>
              <input type="email" [(ngModel)]="profileForm.email">
            </div>
            <div class="field-group">
              <label>Direcci\xF3n</label>
              <input type="text" [(ngModel)]="profileForm.address">
            </div>
            <div class="field-group">
              <label>Ciudad</label>
              <input type="text" [(ngModel)]="profileForm.city">
            </div>
            <div class="field-group">
              <label>EPS</label>
              <input type="text" [(ngModel)]="profileForm.eps">
            </div>
            <div class="field-group">
              <label>R\xE9gimen</label>
              <select [(ngModel)]="profileForm.regime">
                <option value="">\u2014 Seleccionar \u2014</option>
                <option value="Contributivo">Contributivo</option>
                <option value="Subsidiado">Subsidiado</option>
                <option value="Especial">Especial</option>
                <option value="Vinculado">Vinculado</option>
              </select>
            </div>
            <div class="field-group">
              <label>Contacto de emergencia</label>
              <input type="text" [(ngModel)]="profileForm.emergency_contact_name" placeholder="Nombre">
            </div>
            <div class="field-group">
              <label>Tel\xE9fono emergencia</label>
              <input type="tel" [(ngModel)]="profileForm.emergency_contact_phone" placeholder="Ej: 3001234567">
            </div>
            <div class="field-group">
              <label>Parentesco</label>
              <input type="text" [(ngModel)]="profileForm.emergency_contact_relationship" placeholder="Ej: Esposo/a, Hijo/a">
            </div>
          </div>
        }

        @if (profileTab() === 'password') {
          <div class="prof-form-grid">
            <div class="field-group">
              <label>Contrase\xF1a actual</label>
              <input type="password" [(ngModel)]="pwForm.current_password">
            </div>
            <div class="field-group">
              <label>Nueva contrase\xF1a</label>
              <input type="password" [(ngModel)]="pwForm.new_password" placeholder="M\xEDnimo 6 caracteres">
            </div>
            <div class="field-group">
              <label>Confirmar nueva contrase\xF1a</label>
              <input type="password" [(ngModel)]="pwForm.confirm">
            </div>
          </div>
        }
      </div>

      <div class="profile-modal-footer">
        <button class="btn-secondary" (click)="showProfile.set(false)">Cerrar</button>
        @if (profileTab() === 'info') {
          <button class="btn-primary" (click)="saveProfile()" [disabled]="profileSaving()">
            @if (profileSaving()) { <span class="spinner-sm"></span> } Guardar cambios
          </button>
        } @else {
          <button class="btn-primary" (click)="savePassword()" [disabled]="profileSaving()">
            @if (profileSaving()) { <span class="spinner-sm"></span> } Cambiar contrase\xF1a
          </button>
        }
      </div>
    </div>
  </div>
}

<!-- \u2500\u2500 Modal de solicitud de cita \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (showBooking()) {
  <div class="modal-overlay" (click)="closeBooking()"></div>
  <div class="booking-panel">

    <div class="booking-header">
      <h3>
        <span class="material-icons">event_note</span>
        Solicitar cita
      </h3>
      <button class="btn-close" (click)="closeBooking()">
        <span class="material-icons">close</span>
      </button>
    </div>

    <!-- \xC9xito -->
    @if (bookingSuccess(); as res) {
      <div class="booking-success">
        <span class="material-icons success-icon">check_circle</span>
        <h4>\xA1Cita agendada con \xE9xito!</h4>
        <p>{{ res.message }}</p>
        <div class="confirmation-code">C\xF3digo: <strong>{{ res.confirmation_code }}</strong></div>
        <div class="success-detail">
          <span><span class="material-icons">person</span> {{ res.professional_name }}</span>
          <span><span class="material-icons">calendar_today</span> {{ formatDate(res.appointment_date) }}</span>
          <span><span class="material-icons">schedule</span> {{ res.start_time }} \u2014 {{ res.end_time }}</span>
        </div>
        <button class="btn-primary" (click)="closeBooking()">Cerrar</button>
      </div>

    } @else {

      <!-- Indicador de pasos -->
      <div class="steps-bar">
        <div class="step" [class.active]="bookingStep() >= 1" [class.done]="bookingStep() > 1">
          <span class="step-num">1</span><span class="step-label">Servicio</span>
        </div>
        <div class="step-line" [class.done]="bookingStep() > 1"></div>
        <div class="step" [class.active]="bookingStep() >= 2" [class.done]="bookingStep() > 2">
          <span class="step-num">2</span><span class="step-label">Fecha y hora</span>
        </div>
        <div class="step-line" [class.done]="bookingStep() > 2"></div>
        <div class="step" [class.active]="bookingStep() >= 3">
          <span class="step-num">3</span><span class="step-label">Confirmar</span>
        </div>
      </div>

      <!-- \u2500\u2500 Paso 1: Servicio y profesional \u2500\u2500 -->
      @if (bookingStep() === 1) {
        <div class="booking-body">
          @if (loadingServices()) {
            <div class="loading-row"><div class="spinner"></div><span>Cargando servicios...</span></div>
          } @else if (services().length === 0) {
            <div class="no-services">No hay servicios disponibles en este momento.</div>
          } @else {
            <p class="step-hint">Selecciona el tipo de consulta:</p>
            <div class="services-grid">
              @for (svc of services(); track svc.service_type) {
                <button class="service-card" [class.selected]="selectedService()?.service_type === svc.service_type"
                        (click)="selectService(svc)">
                  <span class="service-name">{{ svc.display_name }}</span>
                  <span class="service-desc">{{ svc.description }}</span>
                </button>
              }
            </div>

            @if (selectedService(); as svc) {
              @if (svc.professionals.length > 1) {
                <div class="field-group">
                  <label>Profesional</label>
                  <select [ngModel]="selectedProfId()" (ngModelChange)="selectedProfId.set($event)">
                    <option [ngValue]="null">\u2014 Selecciona un profesional \u2014</option>
                    @for (p of svc.professionals; track p.id) {
                      <option [ngValue]="p.id">{{ p.name }}{{ p.specialty ? ' \xB7 ' + p.specialty : '' }}</option>
                    }
                  </select>
                </div>
              } @else {
                <div class="prof-auto">
                  <span class="material-icons">person</span>
                  Profesional: <strong>{{ svc.professionals[0].name }}</strong>
                  @if (svc.professionals[0].specialty) { <span> \xB7 {{ svc.professionals[0].specialty }}</span> }
                </div>
              }
            }
          }
        </div>
        <div class="booking-footer">
          <button class="btn-secondary" (click)="closeBooking()">Cancelar</button>
          <button class="btn-primary" [disabled]="!selectedService() || !selectedProfId()" (click)="goStep2()">
            Siguiente <span class="material-icons">arrow_forward</span>
          </button>
        </div>
      }

      <!-- \u2500\u2500 Paso 2: Fecha y hora \u2500\u2500 -->
      @if (bookingStep() === 2) {
        <div class="booking-body">
          <div class="field-group">
            <label>Fecha de la cita</label>
            <input type="date" [value]="selectedDate()" (change)="selectedDate.set($any($event.target).value); onDateChange()"
                   [min]="minDate()" [max]="maxDate()">
          </div>

          @if (loadingSlots()) {
            <div class="loading-row"><div class="spinner"></div><span>Buscando horarios disponibles...</span></div>
          } @else if (selectedDate() && availableDays().length === 0 && !loadingSlots()) {
            <div class="no-slots">No hay horarios disponibles para esta fecha. Intenta con otra.</div>
          } @else if (availableSlots().length > 0) {
            <div class="slots-label">Horarios disponibles:</div>
            <div class="slots-grid">
              @for (slot of slotsForDate(); track slot.start_time) {
                <button class="slot-btn"
                        [class.available]="slot.is_available"
                        [class.taken]="!slot.is_available"
                        [class.selected]="selectedSlot() === slot.start_time"
                        [disabled]="!slot.is_available"
                        (click)="selectSlot(slot)">
                  {{ slot.start_time }}
                </button>
              }
            </div>
          }
        </div>
        <div class="booking-footer">
          <button class="btn-secondary" (click)="bookingStep.set(1)">
            <span class="material-icons">arrow_back</span> Atr\xE1s
          </button>
          <button class="btn-primary" [disabled]="!selectedDate() || !selectedSlot()" (click)="goStep3()">
            Siguiente <span class="material-icons">arrow_forward</span>
          </button>
        </div>
      }

      <!-- \u2500\u2500 Paso 3: Confirmaci\xF3n \u2500\u2500 -->
      @if (bookingStep() === 3) {
        <div class="booking-body">
          <div class="confirm-summary">
            <div class="confirm-row">
              <span class="material-icons">medical_services</span>
              <div>
                <div class="confirm-label">Servicio</div>
                <div class="confirm-value">{{ selectedService()?.display_name }}</div>
              </div>
            </div>
            <div class="confirm-row">
              <span class="material-icons">person</span>
              <div>
                <div class="confirm-label">Profesional</div>
                <div class="confirm-value">{{ selectedProfessional()?.name }}</div>
              </div>
            </div>
            <div class="confirm-row">
              <span class="material-icons">calendar_today</span>
              <div>
                <div class="confirm-label">Fecha</div>
                <div class="confirm-value">{{ formatDate(selectedDate()) }}</div>
              </div>
            </div>
            <div class="confirm-row">
              <span class="material-icons">schedule</span>
              <div>
                <div class="confirm-label">Hora</div>
                <div class="confirm-value">{{ selectedSlot() }}</div>
              </div>
            </div>
          </div>

          <div class="field-group">
            <label>Motivo de la consulta <span class="optional">(opcional)</span></label>
            <textarea [(ngModel)]="bookingReason" rows="3"
                      placeholder="Describe brevemente el motivo de tu consulta..."></textarea>
          </div>

          @if (bookingError()) {
            <div class="error-msg">{{ bookingError() }}</div>
          }
        </div>
        <div class="booking-footer">
          <button class="btn-secondary" (click)="bookingStep.set(2)">
            <span class="material-icons">arrow_back</span> Atr\xE1s
          </button>
          <button class="btn-primary btn-confirm" [disabled]="booking()" (click)="confirm()">
            @if (booking()) { <div class="spinner-sm"></div> Agendando... }
            @else { <span class="material-icons">check</span> Confirmar cita }
          </button>
        </div>
      }

    }
  </div>
}
`, styles: ["/* src/app/pages/portal/portal.scss */\n:host {\n  display: block;\n}\n.portal-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f1f5f9;\n}\n.portal-topbar {\n  background: #0f2644;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  flex-shrink: 0;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.brand-logo {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n}\n.brand-name {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #f1f5f9;\n  white-space: nowrap;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-name {\n  font-size: 0.85rem;\n  color: #94a3b8;\n}\n.btn-logout {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  color: #94a3b8;\n}\n.btn-logout:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f87171;\n}\n.btn-logout .material-icons {\n  font-size: 20px;\n}\n.portal-content {\n  flex: 1;\n  padding: 24px;\n  max-width: 900px;\n  margin: 0 auto;\n  width: 100%;\n}\n.welcome-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.welcome-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #dbeafe;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.welcome-icon .material-icons {\n  font-size: 22px;\n  color: #2563eb;\n}\n.welcome-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.welcome-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.section {\n  margin-bottom: 28px;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 14px;\n  border-bottom: 2px solid #e2e8f0;\n  padding-bottom: 8px;\n}\n.section-title .material-icons {\n  font-size: 20px;\n  color: #2563eb;\n}\n.loading-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #64748b;\n  font-size: 0.875rem;\n  padding: 20px 0;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 40px;\n  text-align: center;\n  color: #64748b;\n}\n.empty-state .material-icons {\n  font-size: 40px;\n  opacity: 0.3;\n  display: block;\n  margin-bottom: 8px;\n}\n.empty-state p {\n  margin: 4px 0;\n  font-size: 0.9rem;\n}\n.empty-state .hint {\n  font-size: 0.82rem;\n}\n.appointments-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 14px;\n}\n.appt-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.appt-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.appt-date {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.appt-time {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.appt-time .material-icons {\n  font-size: 16px;\n  color: #64748b;\n}\n.appt-type {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin-top: 4px;\n}\n.appt-prof {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.82rem;\n  color: #64748b;\n  margin-top: 6px;\n}\n.appt-prof .material-icons {\n  font-size: 14px;\n}\n.appt-reason {\n  font-size: 0.82rem;\n  color: #0f172a;\n  margin-top: 6px;\n  padding-top: 6px;\n  border-top: 1px solid #e2e8f0;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.history-table-wrap {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.history-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.history-table th {\n  background: #f8fafc;\n  padding: 10px 14px;\n  text-align: left;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #e2e8f0;\n}\n.history-table td {\n  padding: 10px 14px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n}\n.history-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.btn-solicitar {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-solicitar:hover {\n  background: #1d4ed8;\n}\n.btn-solicitar .material-icons {\n  font-size: 18px;\n}\n.btn-solicitar-center {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 12px;\n}\n.btn-solicitar-center:hover {\n  background: #1d4ed8;\n}\n.btn-solicitar-center .material-icons {\n  font-size: 18px;\n}\n.welcome-info {\n  flex: 1;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.booking-panel {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 14px;\n  width: 560px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  z-index: 101;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.booking-header {\n  border-radius: 14px 14px 0 0;\n}\n.booking-footer {\n  border-radius: 0 0 14px 14px;\n}\n.booking-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.booking-header h3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.booking-header h3 .material-icons {\n  font-size: 20px;\n  color: #2563eb;\n}\n.btn-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n  color: #64748b;\n}\n.btn-close:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.steps-bar {\n  display: flex;\n  align-items: center;\n  padding: 16px 22px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.step {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.step .step-num {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  background: #fff;\n}\n.step .step-label {\n  font-size: 0.78rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.step.active .step-num {\n  border-color: #2563eb;\n  background: #2563eb;\n  color: #fff;\n}\n.step.active .step-label {\n  color: #0f172a;\n  font-weight: 600;\n}\n.step.done .step-num {\n  border-color: #16a34a;\n  background: #16a34a;\n  color: #fff;\n}\n.step-line {\n  flex: 1;\n  height: 2px;\n  background: #e2e8f0;\n  margin: 0 8px;\n}\n.step-line.done {\n  background: #16a34a;\n}\n.booking-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 22px;\n}\n.booking-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 22px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.step-hint {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 12px;\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.service-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 14px;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.15s;\n}\n.service-card:hover {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.service-card.selected {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.service-card .service-name {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n.service-card .service-desc {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.no-services {\n  text-align: center;\n  color: #64748b;\n  padding: 30px 0;\n  font-size: 0.875rem;\n}\n.prof-auto {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  color: #0f172a;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.prof-auto .material-icons {\n  font-size: 18px;\n  color: #16a34a;\n}\n.field-group {\n  margin-bottom: 16px;\n}\n.field-group label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.field-group label .optional {\n  font-weight: 400;\n}\n.field-group input,\n.field-group select,\n.field-group textarea {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  color: #0f172a;\n  box-sizing: border-box;\n}\n.field-group input:focus,\n.field-group select:focus,\n.field-group textarea:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.field-group textarea {\n  resize: vertical;\n  font-family: inherit;\n}\n.slots-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 10px;\n}\n.slots-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.slot-btn {\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  background: #fff;\n  color: #64748b;\n  transition: all 0.15s;\n}\n.slot-btn.available {\n  border-color: #bbf7d0;\n  color: #15803d;\n  background: #f0fdf4;\n  cursor: pointer;\n}\n.slot-btn.available:hover {\n  border-color: #16a34a;\n  background: #dcfce7;\n}\n.slot-btn.taken {\n  background: #f8fafc;\n  color: #cbd5e1;\n  cursor: not-allowed;\n  text-decoration: line-through;\n}\n.slot-btn.selected {\n  border-color: #2563eb;\n  background: #2563eb;\n  color: #fff;\n}\n.no-slots {\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 0.875rem;\n  color: #c2410c;\n  margin-top: 8px;\n}\n.confirm-summary {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.confirm-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.confirm-row .material-icons {\n  font-size: 20px;\n  color: #2563eb;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.confirm-row .confirm-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.confirm-row .confirm-value {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-top: 1px;\n}\n.error-msg {\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #b91c1c;\n  margin-top: 4px;\n}\n.btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary.btn-confirm {\n  background: #16a34a;\n}\n.btn-primary.btn-confirm:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-secondary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary:hover {\n  background: #f8fafc;\n}\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.spinner-sm {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n.btn-topbar-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  color: #94a3b8;\n}\n.btn-topbar-icon:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f1f5f9;\n}\n.btn-topbar-icon .material-icons {\n  font-size: 20px;\n}\n.profile-modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 500px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  z-index: 101;\n}\n.profile-modal-header {\n  border-radius: 14px 14px 0 0;\n}\n.profile-modal-footer {\n  border-radius: 0 0 14px 14px;\n}\n.profile-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.profile-modal-header h3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.profile-modal-header h3 .material-icons {\n  font-size: 20px;\n  color: #2563eb;\n}\n.profile-tabs {\n  display: flex;\n  border-bottom: 1px solid #e2e8f0;\n}\n.profile-tabs button {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #64748b;\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.profile-tabs button:hover {\n  color: #0f172a;\n  background: #f8fafc;\n}\n.profile-tabs button.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 600;\n}\n.profile-tabs button .material-icons {\n  font-size: 18px;\n}\n.profile-modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.profile-modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.prof-form-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.prof-alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #15803d;\n  margin-bottom: 14px;\n}\n.prof-alert-success .material-icons {\n  font-size: 18px;\n}\n.prof-alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #b91c1c;\n  margin-bottom: 14px;\n}\n.prof-alert-error .material-icons {\n  font-size: 18px;\n}\n.booking-success {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 32px 24px;\n  gap: 10px;\n}\n.booking-success .success-icon {\n  font-size: 52px;\n  color: #16a34a;\n}\n.booking-success h4 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.booking-success p {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 0;\n}\n.booking-success .confirmation-code {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 8px 20px;\n  font-size: 0.875rem;\n  color: #15803d;\n}\n.success-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n  margin: 4px 0;\n}\n.success-detail span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.success-detail span .material-icons {\n  font-size: 16px;\n  color: #64748b;\n}\n/*# sourceMappingURL=portal.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalComponent, { className: "PortalComponent", filePath: "src/app/pages/portal/portal.ts", lineNumber: 15 });
})();
export {
  PortalComponent
};
//# sourceMappingURL=chunk-2LFBNRD2.js.map
