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
  ApiService,
  BLOOD_TYPE_LABEL
} from "./chunk-NCFNA77J.js";
import {
  Router
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

// src/app/admin/patients/patients.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function PatientsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando pacientes...");
    \u0275\u0275elementEnd()();
  }
}
function PatientsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 3);
    \u0275\u0275text(2, "people_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No se encontraron pacientes.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 6);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForm());
    });
    \u0275\u0275text(6, "Registrar primer paciente");
    \u0275\u0275elementEnd()();
  }
}
function PatientsComponent_Conditional_15_For_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "S\xED");
    \u0275\u0275elementEnd();
  }
}
function PatientsComponent_Conditional_15_For_19_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "No");
    \u0275\u0275elementEnd();
  }
}
function PatientsComponent_Conditional_15_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275conditionalCreate(14, PatientsComponent_Conditional_15_For_19_Conditional_14_Template, 2, 0, "span", 16)(15, PatientsComponent_Conditional_15_For_19_Conditional_15_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "button", 18);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_15_For_19_Template_button_click_17_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(p_r4));
    });
    \u0275\u0275elementStart(18, "span", 3);
    \u0275\u0275text(19, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Ver ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.document_type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.document_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r4.first_name, " ", p_r4.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.calcAge(p_r4.birth_date), " a\xF1os");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.phone ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.eps ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r4.has_appointment ? 14 : 15);
  }
}
function PatientsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 10)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Edad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "EPS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Cita activa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, PatientsComponent_Conditional_15_For_19_Template, 21, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.patients());
  }
}
function PatientsComponent_Conditional_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 3);
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
function PatientsComponent_Conditional_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formSuccess());
  }
}
function PatientsComponent_Conditional_16_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dt_r6 = ctx.$implicit;
    \u0275\u0275property("value", dt_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dt_r6.label);
  }
}
function PatientsComponent_Conditional_16_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r7 = ctx.$implicit;
    \u0275\u0275property("value", g_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r7.label);
  }
}
function PatientsComponent_Conditional_16_Conditional_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function PatientsComponent_Conditional_16_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Guardar paciente ");
  }
}
function PatientsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "h3");
    \u0275\u0275text(4, "Registrar Paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275conditionalCreate(9, PatientsComponent_Conditional_16_Conditional_9_Template, 4, 1, "div", 24);
    \u0275\u0275conditionalCreate(10, PatientsComponent_Conditional_16_Conditional_10_Template, 4, 1, "div", 25);
    \u0275\u0275elementStart(11, "div", 26)(12, "div", 27)(13, "label");
    \u0275\u0275text(14, "Tipo de documento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.document_type, $event) || (ctx_r1.form.document_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(16, PatientsComponent_Conditional_16_For_17_Template, 2, 2, "option", 29, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 27)(19, "label");
    \u0275\u0275text(20, "N\xFAmero de documento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.document_number, $event) || (ctx_r1.form.document_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 27)(23, "label");
    \u0275\u0275text(24, "Nombres *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.first_name, $event) || (ctx_r1.form.first_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 27)(27, "label");
    \u0275\u0275text(28, "Apellidos *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.last_name, $event) || (ctx_r1.form.last_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 27)(31, "label");
    \u0275\u0275text(32, "Fecha de nacimiento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.birth_date, $event) || (ctx_r1.form.birth_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 27)(35, "label");
    \u0275\u0275text(36, "Sexo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.gender, $event) || (ctx_r1.form.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(38, PatientsComponent_Conditional_16_For_39_Template, 2, 2, "option", 29, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 27)(41, "label");
    \u0275\u0275text(42, "Grupo sangu\xEDneo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.blood_type, $event) || (ctx_r1.form.blood_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(44, "option", 36);
    \u0275\u0275text(45, "Desconocido / No registrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 37);
    \u0275\u0275text(47, "A+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 38);
    \u0275\u0275text(49, "A-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 39);
    \u0275\u0275text(51, "B+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 40);
    \u0275\u0275text(53, "B-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 41);
    \u0275\u0275text(55, "AB+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 42);
    \u0275\u0275text(57, "AB-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 43);
    \u0275\u0275text(59, "O+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 44);
    \u0275\u0275text(61, "O-");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 27)(63, "label");
    \u0275\u0275text(64, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 27)(67, "label");
    \u0275\u0275text(68, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 27)(71, "label");
    \u0275\u0275text(72, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 27)(75, "label");
    \u0275\u0275text(76, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 27)(79, "label");
    \u0275\u0275text(80, "EPS / Aseguradora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.eps, $event) || (ctx_r1.form.eps = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 27)(83, "label");
    \u0275\u0275text(84, "R\xE9gimen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "select", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_select_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.regime, $event) || (ctx_r1.form.regime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(86, "option", 51);
    \u0275\u0275text(87, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "option", 52);
    \u0275\u0275text(89, "Contributivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "option", 53);
    \u0275\u0275text(91, "Subsidiado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "option", 54);
    \u0275\u0275text(93, "Vinculado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "option", 55);
    \u0275\u0275text(95, "Particular");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 56)(97, "span", 57);
    \u0275\u0275text(98, "Contacto de emergencia");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 27)(100, "label");
    \u0275\u0275text(101, "Nombre del contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_102_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emergency_contact_name, $event) || (ctx_r1.form.emergency_contact_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 27)(104, "label");
    \u0275\u0275text(105, "Tel\xE9fono del contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_106_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emergency_contact_phone, $event) || (ctx_r1.form.emergency_contact_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 27)(108, "label");
    \u0275\u0275text(109, "Parentesco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_input_ngModelChange_110_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emergency_contact_relationship, $event) || (ctx_r1.form.emergency_contact_relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 56)(112, "span", 57);
    \u0275\u0275text(113, "Antecedentes cl\xEDnicos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 61)(115, "label");
    \u0275\u0275text(116, "Alergias conocidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_textarea_ngModelChange_117_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.allergies, $event) || (ctx_r1.form.allergies = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 61)(119, "label");
    \u0275\u0275text(120, "Antecedentes m\xE9dicos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "textarea", 63);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_16_Template_textarea_ngModelChange_121_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.background_notes, $event) || (ctx_r1.form.background_notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(122, "div", 64)(123, "button", 65);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_16_Template_button_click_123_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(124, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "button", 66);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_16_Template_button_click_125_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePatient());
    });
    \u0275\u0275conditionalCreate(126, PatientsComponent_Conditional_16_Conditional_126_Template, 2, 0)(127, PatientsComponent_Conditional_16_Conditional_127_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.formError() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formSuccess() ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.document_type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.documentTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.document_number);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.first_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.last_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.birth_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.gender);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.genders);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.blood_type);
    \u0275\u0275advance(22);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.eps);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.regime);
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emergency_contact_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emergency_contact_phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emergency_contact_relationship);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.allergies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.background_notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 126 : 127);
  }
}
function PatientsComponent_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 8);
    \u0275\u0275element(2, "div", 13);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2, "Tipo de sangre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.bloodTypeLabel(p_r11.blood_type));
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 79);
    \u0275\u0275text(2, "Alergias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r11.allergies);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 79);
    \u0275\u0275text(2, "Antecedentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r11.background_notes);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 79);
    \u0275\u0275text(2, "Contacto de emergencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", p_r11.emergency_contact_name, " (", p_r11.emergency_contact_relationship, ") \u2014 ", p_r11.emergency_contact_phone);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "button", 74);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToClinical());
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "medical_information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Historia cl\xEDnica");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 75);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToTab("basic"));
    });
    \u0275\u0275elementStart(7, "span", 3);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Datos personales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 76);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToTab("extra"));
    });
    \u0275\u0275elementStart(12, "span", 3);
    \u0275\u0275text(13, "note_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Datos adicionales");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 77)(17, "div", 78)(18, "span", 79);
    \u0275\u0275text(19, "Edad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 80);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 78)(23, "span", 79);
    \u0275\u0275text(24, "Fecha de nacimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 80);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 78)(29, "span", 79);
    \u0275\u0275text(30, "Sexo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 80);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 78)(34, "span", 79);
    \u0275\u0275text(35, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 80);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 78)(39, "span", 79);
    \u0275\u0275text(40, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 80);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 78)(44, "span", 79);
    \u0275\u0275text(45, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 80);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 78)(49, "span", 79);
    \u0275\u0275text(50, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 80);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 78)(54, "span", 79);
    \u0275\u0275text(55, "EPS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 80);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 78)(59, "span", 79);
    \u0275\u0275text(60, "R\xE9gimen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 80);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(63, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Conditional_63_Template, 5, 1, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(64, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Conditional_64_Template, 5, 1, "div", 81);
    \u0275\u0275conditionalCreate(65, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Conditional_65_Template, 5, 1, "div", 81);
    \u0275\u0275conditionalCreate(66, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Conditional_66_Template, 5, 3, "div", 81);
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate1("", ctx_r1.calcAge(p_r11.birth_date), " a\xF1os");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 13, p_r11.birth_date, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r11.gender === "M" ? "Masculino" : p_r11.gender === "F" ? "Femenino" : "Indeterminado");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r11.phone ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r11.email ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r11.address ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r11.city ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r11.eps ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r11.regime ?? "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r11.blood_type ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r11.allergies ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r11.background_notes ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r11.emergency_contact_name ? 66 : -1);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editError());
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dt_r13 = ctx.$implicit;
    \u0275\u0275property("value", dt_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dt_r13.label);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = ctx.$implicit;
    \u0275\u0275property("value", g_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r14.label);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "button", 84);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.detailTab.set("info"));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Editar datos personales");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Conditional_6_Template, 4, 1, "div", 24);
    \u0275\u0275elementStart(7, "div", 26)(8, "div", 27)(9, "label");
    \u0275\u0275text(10, "Nombres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.first_name, $event) || (ctx_r1.editBasic.first_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 27)(13, "label");
    \u0275\u0275text(14, "Apellidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.last_name, $event) || (ctx_r1.editBasic.last_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 27)(17, "label");
    \u0275\u0275text(18, "Tipo de documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.document_type, $event) || (ctx_r1.editBasic.document_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(20, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_For_21_Template, 2, 2, "option", 29, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 27)(23, "label");
    \u0275\u0275text(24, "N\xFAmero de documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.document_number, $event) || (ctx_r1.editBasic.document_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 27)(27, "label");
    \u0275\u0275text(28, "Fecha de nacimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.birth_date, $event) || (ctx_r1.editBasic.birth_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 27)(31, "label");
    \u0275\u0275text(32, "Sexo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 90);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.gender, $event) || (ctx_r1.editBasic.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(34, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_For_35_Template, 2, 2, "option", 29, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 27)(37, "label");
    \u0275\u0275text(38, "Grupo sangu\xEDneo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 91);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.blood_type, $event) || (ctx_r1.editBasic.blood_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(40, "option", 36);
    \u0275\u0275text(41, "Desconocido / No registrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 37);
    \u0275\u0275text(43, "A+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 38);
    \u0275\u0275text(45, "A-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 39);
    \u0275\u0275text(47, "B+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 40);
    \u0275\u0275text(49, "B-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 41);
    \u0275\u0275text(51, "AB+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 42);
    \u0275\u0275text(53, "AB-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 43);
    \u0275\u0275text(55, "O+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 44);
    \u0275\u0275text(57, "O-");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 27)(59, "label");
    \u0275\u0275text(60, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.phone, $event) || (ctx_r1.editBasic.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 27)(63, "label");
    \u0275\u0275text(64, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.email, $event) || (ctx_r1.editBasic.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 61)(67, "label");
    \u0275\u0275text(68, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.address, $event) || (ctx_r1.editBasic.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 27)(71, "label");
    \u0275\u0275text(72, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editBasic.city, $event) || (ctx_r1.editBasic.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.editError() ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.first_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.last_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.document_type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.documentTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.document_number);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.birth_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.gender);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.genders);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.blood_type);
    \u0275\u0275advance(22);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editBasic.city);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editError());
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "button", 84);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.detailTab.set("info"));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Editar datos adicionales");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Conditional_6_Template, 4, 1, "div", 24);
    \u0275\u0275elementStart(7, "div", 26)(8, "div", 27)(9, "label");
    \u0275\u0275text(10, "EPS / Aseguradora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editExtra.eps, $event) || (ctx_r1.editExtra.eps = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 27)(13, "label");
    \u0275\u0275text(14, "R\xE9gimen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editExtra.regime, $event) || (ctx_r1.editExtra.regime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 51);
    \u0275\u0275text(17, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 52);
    \u0275\u0275text(19, "Contributivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 53);
    \u0275\u0275text(21, "Subsidiado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 54);
    \u0275\u0275text(23, "Vinculado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 55);
    \u0275\u0275text(25, "Particular");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 61)(27, "label");
    \u0275\u0275text(28, "Alergias conocidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 98);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editExtra.allergies, $event) || (ctx_r1.editExtra.allergies = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 61)(31, "label");
    \u0275\u0275text(32, "Antecedentes m\xE9dicos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 99);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editExtra.background_notes, $event) || (ctx_r1.editExtra.background_notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 27)(35, "label");
    \u0275\u0275text(36, "Contacto de emergencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editExtra.emergency_contact_name, $event) || (ctx_r1.editExtra.emergency_contact_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 27)(39, "label");
    \u0275\u0275text(40, "Tel\xE9fono contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editExtra.emergency_contact_phone, $event) || (ctx_r1.editExtra.emergency_contact_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 27)(43, "label");
    \u0275\u0275text(44, "Parentesco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editExtra.emergency_contact_relationship, $event) || (ctx_r1.editExtra.emergency_contact_relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.editError() ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editExtra.eps);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editExtra.regime);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editExtra.allergies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editExtra.background_notes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editExtra.emergency_contact_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editExtra.emergency_contact_phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editExtra.emergency_contact_relationship);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Guardar cambios ");
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "button", 65);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.detailTab.set("info"));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Volver sin guardar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.detailTab() === "basic" ? ctx_r1.saveBasic() : ctx_r1.saveExtra());
    });
    \u0275\u0275conditionalCreate(6, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_16_Conditional_6_Template, 2, 0)(7, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_16_Conditional_7_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.editSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editSaving() ? 6 : 7);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "span", 3);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 71)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(10, "span", 3);
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 23);
    \u0275\u0275conditionalCreate(13, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_13_Template, 67, 16);
    \u0275\u0275conditionalCreate(14, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_14_Template, 74, 12);
    \u0275\u0275conditionalCreate(15, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_15_Template, 46, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Conditional_16_Template, 8, 2, "div", 64);
  }
  if (rf & 2) {
    const p_r11 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", p_r11.first_name, " ", p_r11.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r11.document_type, " ", p_r11.document_number);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.detailTab() === "info" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.detailTab() === "basic" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.detailTab() === "extra" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.detailTab() !== "info" ? 16 : -1);
  }
}
function PatientsComponent_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PatientsComponent_Conditional_17_Conditional_3_Conditional_0_Template, 17, 8);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.detailPatient()) ? 0 : -1, tmp_2_0);
  }
}
function PatientsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 68);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275conditionalCreate(2, PatientsComponent_Conditional_17_Conditional_2_Template, 5, 0, "div", 23)(3, PatientsComponent_Conditional_17_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.detailLoading() ? 2 : 3);
  }
}
function PatientsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCloseConfirm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 104);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "h3")(4, "span", 105);
    \u0275\u0275text(5, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "Cambios sin guardar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "p", 106);
    \u0275\u0275text(9, " Tienes cambios que no se han guardado.");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, " \xBFDeseas cerrar de todas formas y perder los cambios? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 64)(13, "button", 65);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_18_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCloseConfirm.set(false));
    });
    \u0275\u0275elementStart(14, "span", 3);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Seguir editando ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 107);
    \u0275\u0275listener("click", function PatientsComponent_Conditional_18_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmClose());
    });
    \u0275\u0275elementStart(18, "span", 3);
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Cerrar sin guardar ");
    \u0275\u0275elementEnd()()()();
  }
}
var _PatientsComponent = class _PatientsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.router = inject(Router);
    this.patients = signal([], ...ngDevMode ? [{ debugName: "patients" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.searchTerm = "";
    this.showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
    this.formError = signal("", ...ngDevMode ? [{ debugName: "formError" }] : []);
    this.formSuccess = signal("", ...ngDevMode ? [{ debugName: "formSuccess" }] : []);
    this.form = this.emptyForm();
    this.detailPatient = signal(null, ...ngDevMode ? [{ debugName: "detailPatient" }] : []);
    this.detailLoading = signal(false, ...ngDevMode ? [{ debugName: "detailLoading" }] : []);
    this.showDetail = signal(false, ...ngDevMode ? [{ debugName: "showDetail" }] : []);
    this.showCloseConfirm = signal(false, ...ngDevMode ? [{ debugName: "showCloseConfirm" }] : []);
    this.detailTab = signal("info", ...ngDevMode ? [{ debugName: "detailTab" }] : []);
    this.editSaving = signal(false, ...ngDevMode ? [{ debugName: "editSaving" }] : []);
    this.editError = signal("", ...ngDevMode ? [{ debugName: "editError" }] : []);
    this.editBasic = {};
    this.editExtra = {};
    this.documentTypes = [
      { value: "CC", label: "C\xE9dula de ciudadan\xEDa" },
      { value: "TI", label: "Tarjeta de identidad" },
      { value: "CE", label: "C\xE9dula de extranjer\xEDa" },
      { value: "PA", label: "Pasaporte" },
      { value: "RC", label: "Registro civil" },
      { value: "MS", label: "Menor sin identificaci\xF3n" }
    ];
    this.genders = [
      { value: "M", label: "Masculino" },
      { value: "F", label: "Femenino" },
      { value: "I", label: "Indeterminado" }
    ];
  }
  ngOnInit() {
    this.loadPatients();
  }
  loadPatients() {
    this.loading.set(true);
    this.api.getPatients(this.searchTerm || void 0).subscribe({
      next: (data) => {
        this.patients.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onSearch() {
    this.loadPatients();
  }
  // ── Nuevo paciente ────────────────────────────────────────────────────────────
  openForm() {
    this.form = this.emptyForm();
    this.formError.set("");
    this.formSuccess.set("");
    this.showForm.set(true);
  }
  closeForm() {
    this.showForm.set(false);
  }
  savePatient() {
    if (!this.form.document_number || !this.form.first_name || !this.form.last_name || !this.form.birth_date) {
      this.formError.set("Completa los campos obligatorios: documento, nombres, apellidos y fecha de nacimiento.");
      return;
    }
    this.saving.set(true);
    this.formError.set("");
    this.api.createPatient(this.form).subscribe({
      next: () => {
        this.saving.set(false);
        this.formSuccess.set("Paciente registrado correctamente.");
        this.loadPatients();
        setTimeout(() => this.showForm.set(false), 1200);
      },
      error: (err) => {
        this.saving.set(false);
        this.formError.set(err.error?.detail ?? "Error al registrar el paciente.");
      }
    });
  }
  // ── Panel de detalle ──────────────────────────────────────────────────────────
  openDetail(summary) {
    this.showDetail.set(true);
    this.detailTab.set("info");
    this.detailLoading.set(true);
    this.editError.set("");
    this.api.getPatient(summary.id).subscribe({
      next: (p) => {
        this.detailPatient.set(p);
        this.detailLoading.set(false);
      },
      error: () => this.detailLoading.set(false)
    });
  }
  closeDetail() {
    if (this.detailTab() !== "info") {
      this.showCloseConfirm.set(true);
      return;
    }
    this._doClose();
  }
  confirmClose() {
    this.showCloseConfirm.set(false);
    this._doClose();
  }
  _doClose() {
    this.showDetail.set(false);
    this.detailPatient.set(null);
    this.detailTab.set("info");
    this.editError.set("");
  }
  goToTab(tab) {
    const p = this.detailPatient();
    if (!p)
      return;
    this.detailTab.set(tab);
    this.editError.set("");
    if (tab === "basic") {
      this.editBasic = {
        document_type: p.document_type,
        document_number: p.document_number,
        first_name: p.first_name,
        last_name: p.last_name,
        birth_date: p.birth_date,
        gender: p.gender,
        blood_type: p.blood_type ?? "",
        phone: p.phone ?? "",
        email: p.email ?? "",
        address: p.address ?? "",
        city: p.city ?? "Cali"
      };
    }
    if (tab === "extra") {
      this.editExtra = {
        eps: p.eps ?? "",
        regime: p.regime ?? "",
        allergies: p.allergies ?? "",
        background_notes: p.background_notes ?? "",
        emergency_contact_name: p.emergency_contact_name ?? "",
        emergency_contact_phone: p.emergency_contact_phone ?? "",
        emergency_contact_relationship: p.emergency_contact_relationship ?? ""
      };
    }
  }
  saveBasic() {
    const p = this.detailPatient();
    if (!p)
      return;
    this.editSaving.set(true);
    this.editError.set("");
    this.api.updatePatient(p.id, this.editBasic).subscribe({
      next: (updated) => {
        this.editSaving.set(false);
        this.detailPatient.set(updated);
        this.detailTab.set("info");
        this.loadPatients();
      },
      error: (err) => {
        this.editSaving.set(false);
        this.editError.set(err.error?.detail ?? "Error al guardar.");
      }
    });
  }
  saveExtra() {
    const p = this.detailPatient();
    if (!p)
      return;
    this.editSaving.set(true);
    this.editError.set("");
    this.api.updatePatient(p.id, this.editExtra).subscribe({
      next: (updated) => {
        this.editSaving.set(false);
        this.detailPatient.set(updated);
        this.detailTab.set("info");
      },
      error: (err) => {
        this.editSaving.set(false);
        this.editError.set(err.error?.detail ?? "Error al guardar.");
      }
    });
  }
  goToClinical() {
    const p = this.detailPatient();
    if (!p)
      return;
    this._doClose();
    this.router.navigate(["/admin/clinical"], {
      queryParams: { patientId: p.id, name: `${p.first_name} ${p.last_name}`, doc: p.document_number }
    });
  }
  bloodTypeLabel(bt) {
    if (!bt)
      return "\u2014";
    return BLOOD_TYPE_LABEL[bt] ?? bt;
  }
  calcAge(birthDate) {
    const diff = Date.now() - new Date(birthDate).getTime();
    return Math.floor(diff / (1e3 * 60 * 60 * 24 * 365.25));
  }
  emptyForm() {
    return {
      document_type: "CC",
      document_number: "",
      first_name: "",
      last_name: "",
      birth_date: "",
      gender: "M",
      blood_type: "",
      phone: "",
      email: "",
      address: "",
      city: "Cali",
      eps: "",
      regime: "",
      allergies: "",
      background_notes: "",
      emergency_contact_name: "",
      emergency_contact_phone: "",
      emergency_contact_relationship: ""
    };
  }
};
_PatientsComponent.\u0275fac = function PatientsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PatientsComponent)();
};
_PatientsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientsComponent, selectors: [["app-patients"]], decls: 19, vars: 5, consts: [[1, "module-header"], [1, "search-row"], [1, "search-box"], [1, "material-icons"], ["type", "text", "placeholder", "Buscar por nombre o documento...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-icon", 3, "click"], [1, "btn-primary", 3, "click"], [1, "card"], [1, "loading"], [1, "empty"], [1, "data-table"], [1, "modal-backdrop"], [1, "modal-backdrop", "confirm-over"], [1, "spinner"], [1, "doc-type"], [1, "name-cell"], [1, "badge", "badge-green"], [1, "badge", "badge-gray"], ["title", "Ver informaci\xF3n del paciente", 1, "btn-ver", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "btn-icon-only", 3, "click"], [1, "modal-body"], [1, "alert-error"], [1, "alert-success"], [1, "form-grid"], [1, "field"], ["name", "doc_type", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "name", "doc_num", "placeholder", "Ej: 1012345678", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "first_name", "placeholder", "Nombres", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "last_name", "placeholder", "Apellidos", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "birth_date", 3, "ngModelChange", "ngModel"], ["name", "gender", 3, "ngModelChange", "ngModel"], ["name", "blood_type", 3, "ngModelChange", "ngModel"], ["value", "UNKNOWN"], ["value", "A_POS"], ["value", "A_NEG"], ["value", "B_POS"], ["value", "B_NEG"], ["value", "AB_POS"], ["value", "AB_NEG"], ["value", "O_POS"], ["value", "O_NEG"], ["type", "tel", "name", "phone", "placeholder", "Ej: 3001234567", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "correo@ejemplo.com", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "address", "placeholder", "Calle y barrio", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "city", "placeholder", "Ej: Cali", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "eps", "placeholder", "Ej: Sura, Nueva EPS", 3, "ngModelChange", "ngModel"], ["name", "regime", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Contributivo"], ["value", "Subsidiado"], ["value", "Vinculado"], ["value", "Particular"], [1, "field", "field-full", "form-section-sep"], [1, "form-subsection"], ["type", "text", "name", "ecn", "placeholder", "Nombre completo", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "ecp", "placeholder", "3001234567", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "ecr", "placeholder", "Ej: Esposo/a, Hijo/a", 3, "ngModelChange", "ngModel"], [1, "field", "field-full"], ["name", "allergies", "rows", "2", "placeholder", "Medicamentos, alimentos, otros...", 3, "ngModelChange", "ngModel"], ["name", "bg_notes", "rows", "2", "placeholder", "Enfermedades previas, cirug\xEDas, condiciones cr\xF3nicas...", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"], [1, "modal", "modal-patient", 3, "click"], [1, "modal-header", "patient-modal-header"], [1, "detail-avatar"], [1, "detail-title"], [1, "detail-doc"], [1, "quick-actions"], [1, "quick-btn", "qa-clinical", 3, "click"], [1, "quick-btn", "qa-edit", 3, "click"], [1, "quick-btn", "qa-extra", 3, "click"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "info-section"], [1, "info-text"], [1, "edit-section-title"], [1, "btn-back", 3, "click"], ["type", "text", "name", "efn", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "eln", 3, "ngModelChange", "ngModel"], ["name", "edt", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "edn", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "ebd", 3, "ngModelChange", "ngModel"], ["name", "eg", 3, "ngModelChange", "ngModel"], ["name", "ebt", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "eph", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "eem", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "ead", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "ect", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "xeps", 3, "ngModelChange", "ngModel"], ["name", "xrg", 3, "ngModelChange", "ngModel"], ["name", "xal", "rows", "2", "placeholder", "Medicamentos, alimentos, otros...", 3, "ngModelChange", "ngModel"], ["name", "xbg", "rows", "2", "placeholder", "Enfermedades previas, cirug\xEDas...", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "xecn", "placeholder", "Nombre", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "xecp", "placeholder", "3001234567", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "xecr", "placeholder", "Ej: Esposo/a, Hijo/a", 3, "ngModelChange", "ngModel"], [1, "modal-backdrop", "confirm-over", 3, "click"], [1, "modal", "modal-sm", 3, "click"], [1, "material-icons", 2, "font-size", "20px", "color", "#d97706", "vertical-align", "middle", "margin-right", "6px"], [2, "font-size", "0.9rem", "color", "#334155", "line-height", "1.6"], [1, "btn-danger", 3, "click"]], template: function PatientsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function PatientsComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function PatientsComponent_Template_input_keyup_enter_5_listener() {
      return ctx.onSearch();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function PatientsComponent_Template_button_click_6_listener() {
      return ctx.onSearch();
    });
    \u0275\u0275text(7, "Buscar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "button", 6);
    \u0275\u0275listener("click", function PatientsComponent_Template_button_click_8_listener() {
      return ctx.openForm();
    });
    \u0275\u0275elementStart(9, "span", 3);
    \u0275\u0275text(10, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Nuevo paciente ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7);
    \u0275\u0275conditionalCreate(13, PatientsComponent_Conditional_13_Template, 4, 0, "div", 8)(14, PatientsComponent_Conditional_14_Template, 7, 0, "div", 9)(15, PatientsComponent_Conditional_15_Template, 20, 0, "table", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, PatientsComponent_Conditional_16_Template, 128, 22, "div", 11);
    \u0275\u0275conditionalCreate(17, PatientsComponent_Conditional_17_Template, 4, 1, "div", 11);
    \u0275\u0275conditionalCreate(18, PatientsComponent_Conditional_18_Template, 21, 0, "div", 12);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.loading() ? 13 : ctx.patients().length === 0 ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.showForm() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showDetail() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showCloseConfirm() ? 18 : -1);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, \n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.btn-icon-only[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.doc-type[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.name-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.btn-ver[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f1f5f9;\n  color: #334155;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 5px 12px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: all 0.15s;\n}\n.btn-ver[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-ver[_ngcontent-%COMP%]:hover {\n  background: #0f2644;\n  color: #fff;\n  border-color: #0f2644;\n}\n.form-section-sep[_ngcontent-%COMP%] {\n  border: none !important;\n  padding-bottom: 0 !important;\n  margin-bottom: -4px;\n}\n.form-subsection[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #2563eb;\n  border-bottom: 1px solid #dbeafe;\n  padding-bottom: 4px;\n  width: 100%;\n}\n.modal-patient[_ngcontent-%COMP%] {\n  max-width: 750px;\n}\n.patient-modal-header[_ngcontent-%COMP%] {\n  gap: 14px;\n  padding: 14px 18px;\n}\n.detail-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #dbeafe;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.detail-avatar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #2563eb;\n}\n.detail-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.detail-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.detail-doc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  border: none;\n  border-radius: 10px;\n  padding: 12px 8px;\n  cursor: pointer;\n  font-size: 0.72rem;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n  transition: all 0.15s;\n}\n.quick-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.quick-btn.qa-clinical[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.quick-btn.qa-clinical[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.quick-btn.qa-edit[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.quick-btn.qa-edit[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n}\n.quick-btn.qa-extra[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #c2410c;\n}\n.quick-btn.qa-extra[_ngcontent-%COMP%]:hover {\n  background: #ffedd5;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n  font-weight: 500;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0f172a;\n  margin: 4px 0 0;\n  line-height: 1.5;\n}\n.edit-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.edit-section-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: none;\n  border-radius: 6px;\n  padding: 4px 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.confirm-over[_ngcontent-%COMP%] {\n  z-index: 1100;\n}\n/*# sourceMappingURL=patients.css.map */'] });
var PatientsComponent = _PatientsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientsComponent, [{
    type: Component,
    args: [{ selector: "app-patients", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="module-header">
  <div class="search-row">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input type="text" [(ngModel)]="searchTerm" (keyup.enter)="onSearch()"
        placeholder="Buscar por nombre o documento...">
      <button class="btn-icon" (click)="onSearch()">Buscar</button>
    </div>
  </div>
  <button class="btn-primary" (click)="openForm()">
    <span class="material-icons">person_add</span> Nuevo paciente
  </button>
</div>

<div class="card">
  @if (loading()) {
    <div class="loading"><div class="spinner"></div><p>Cargando pacientes...</p></div>
  } @else if (patients().length === 0) {
    <div class="empty">
      <span class="material-icons">people_outline</span>
      <p>No se encontraron pacientes.</p>
      <button class="btn-primary" (click)="openForm()">Registrar primer paciente</button>
    </div>
  } @else {
    <table class="data-table">
      <thead>
        <tr>
          <th>Documento</th>
          <th>Nombre completo</th>
          <th>Edad</th>
          <th>Tel\xE9fono</th>
          <th>EPS</th>
          <th>Cita activa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        @for (p of patients(); track p.id) {
          <tr>
            <td><span class="doc-type">{{ p.document_type }}</span> {{ p.document_number }}</td>
            <td class="name-cell">{{ p.first_name }} {{ p.last_name }}</td>
            <td>{{ calcAge(p.birth_date) }} a\xF1os</td>
            <td>{{ p.phone ?? '\u2014' }}</td>
            <td>{{ p.eps ?? '\u2014' }}</td>
            <td>
              @if (p.has_appointment) {
                <span class="badge badge-green">S\xED</span>
              } @else {
                <span class="badge badge-gray">No</span>
              }
            </td>
            <td>
              <button class="btn-ver" (click)="openDetail(p)" title="Ver informaci\xF3n del paciente">
                <span class="material-icons">manage_accounts</span> Ver
              </button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  }
</div>

<!-- \u2500\u2500 Modal Nuevo Paciente \u2500\u2500 -->
@if (showForm()) {
  <div class="modal-backdrop" (click)="closeForm()">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>Registrar Paciente</h3>
        <button class="btn-icon-only" (click)="closeForm()"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (formError()) { <div class="alert-error"><span class="material-icons">error_outline</span>{{ formError() }}</div> }
        @if (formSuccess()) { <div class="alert-success"><span class="material-icons">check_circle</span>{{ formSuccess() }}</div> }
        <div class="form-grid">
          <div class="field">
            <label>Tipo de documento *</label>
            <select [(ngModel)]="form.document_type" name="doc_type">
              @for (dt of documentTypes; track dt.value) {
                <option [value]="dt.value">{{ dt.label }}</option>
              }
            </select>
          </div>
          <div class="field">
            <label>N\xFAmero de documento *</label>
            <input type="text" [(ngModel)]="form.document_number" name="doc_num" placeholder="Ej: 1012345678">
          </div>
          <div class="field">
            <label>Nombres *</label>
            <input type="text" [(ngModel)]="form.first_name" name="first_name" placeholder="Nombres">
          </div>
          <div class="field">
            <label>Apellidos *</label>
            <input type="text" [(ngModel)]="form.last_name" name="last_name" placeholder="Apellidos">
          </div>
          <div class="field">
            <label>Fecha de nacimiento *</label>
            <input type="date" [(ngModel)]="form.birth_date" name="birth_date">
          </div>
          <div class="field">
            <label>Sexo *</label>
            <select [(ngModel)]="form.gender" name="gender">
              @for (g of genders; track g.value) {
                <option [value]="g.value">{{ g.label }}</option>
              }
            </select>
          </div>
          <div class="field">
            <label>Grupo sangu\xEDneo</label>
            <select [(ngModel)]="form.blood_type" name="blood_type">
              <option value="UNKNOWN">Desconocido / No registrado</option>
              <option value="A_POS">A+</option>
              <option value="A_NEG">A-</option>
              <option value="B_POS">B+</option>
              <option value="B_NEG">B-</option>
              <option value="AB_POS">AB+</option>
              <option value="AB_NEG">AB-</option>
              <option value="O_POS">O+</option>
              <option value="O_NEG">O-</option>
            </select>
          </div>
          <div class="field">
            <label>Tel\xE9fono</label>
            <input type="tel" [(ngModel)]="form.phone" name="phone" placeholder="Ej: 3001234567">
          </div>
          <div class="field">
            <label>Correo electr\xF3nico</label>
            <input type="email" [(ngModel)]="form.email" name="email" placeholder="correo@ejemplo.com">
          </div>
          <div class="field">
            <label>Direcci\xF3n</label>
            <input type="text" [(ngModel)]="form.address" name="address" placeholder="Calle y barrio">
          </div>
          <div class="field">
            <label>Ciudad</label>
            <input type="text" [(ngModel)]="form.city" name="city" placeholder="Ej: Cali">
          </div>
          <div class="field">
            <label>EPS / Aseguradora</label>
            <input type="text" [(ngModel)]="form.eps" name="eps" placeholder="Ej: Sura, Nueva EPS">
          </div>
          <div class="field">
            <label>R\xE9gimen</label>
            <select [(ngModel)]="form.regime" name="regime">
              <option value="">Seleccionar...</option>
              <option value="Contributivo">Contributivo</option>
              <option value="Subsidiado">Subsidiado</option>
              <option value="Vinculado">Vinculado</option>
              <option value="Particular">Particular</option>
            </select>
          </div>
          <div class="field field-full form-section-sep">
            <span class="form-subsection">Contacto de emergencia</span>
          </div>
          <div class="field">
            <label>Nombre del contacto</label>
            <input type="text" [(ngModel)]="form.emergency_contact_name" name="ecn" placeholder="Nombre completo">
          </div>
          <div class="field">
            <label>Tel\xE9fono del contacto</label>
            <input type="tel" [(ngModel)]="form.emergency_contact_phone" name="ecp" placeholder="3001234567">
          </div>
          <div class="field">
            <label>Parentesco</label>
            <input type="text" [(ngModel)]="form.emergency_contact_relationship" name="ecr" placeholder="Ej: Esposo/a, Hijo/a">
          </div>
          <div class="field field-full form-section-sep">
            <span class="form-subsection">Antecedentes cl\xEDnicos</span>
          </div>
          <div class="field field-full">
            <label>Alergias conocidas</label>
            <textarea [(ngModel)]="form.allergies" name="allergies" rows="2"
              placeholder="Medicamentos, alimentos, otros..."></textarea>
          </div>
          <div class="field field-full">
            <label>Antecedentes m\xE9dicos</label>
            <textarea [(ngModel)]="form.background_notes" name="bg_notes" rows="2"
              placeholder="Enfermedades previas, cirug\xEDas, condiciones cr\xF3nicas..."></textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeForm()">Cancelar</button>
        <button class="btn-primary" (click)="savePatient()" [disabled]="saving()">
          @if (saving()) { <span class="spinner-sm"></span> Guardando... }
          @else { <span class="material-icons">save</span> Guardar paciente }
        </button>
      </div>
    </div>
  </div>
}

<!-- \u2500\u2500 Modal Detalle Paciente \u2500\u2500 -->
@if (showDetail()) {
  <div class="modal-backdrop" (click)="closeDetail()">
    <div class="modal modal-patient" (click)="$event.stopPropagation()">

      @if (detailLoading()) {
        <div class="modal-body"><div class="loading"><div class="spinner"></div><p>Cargando...</p></div></div>
      } @else {
      @if (detailPatient(); as p) {

        <!-- Cabecera -->
        <div class="modal-header patient-modal-header">
          <div class="detail-avatar"><span class="material-icons">person</span></div>
          <div class="detail-title">
            <h3>{{ p.first_name }} {{ p.last_name }}</h3>
            <span class="detail-doc">{{ p.document_type }} {{ p.document_number }}</span>
          </div>
          <button class="btn-icon-only" (click)="closeDetail()"><span class="material-icons">close</span></button>
        </div>

        <!-- Cuerpo scrollable -->
        <div class="modal-body">

          <!-- Acciones r\xE1pidas (s\xF3lo en info) -->
          @if (detailTab() === 'info') {
            <div class="quick-actions">
              <button class="quick-btn qa-clinical" (click)="goToClinical()">
                <span class="material-icons">medical_information</span>
                <span>Historia cl\xEDnica</span>
              </button>
              <button class="quick-btn qa-edit" (click)="goToTab('basic')">
                <span class="material-icons">edit</span>
                <span>Datos personales</span>
              </button>
              <button class="quick-btn qa-extra" (click)="goToTab('extra')">
                <span class="material-icons">note_add</span>
                <span>Datos adicionales</span>
              </button>
            </div>

            <!-- Vista de informaci\xF3n -->
            <div class="info-grid">
              <div class="info-item"><span class="info-label">Edad</span><span class="info-value">{{ calcAge(p.birth_date) }} a\xF1os</span></div>
              <div class="info-item"><span class="info-label">Fecha de nacimiento</span><span class="info-value">{{ p.birth_date | date:'dd/MM/yyyy' }}</span></div>
              <div class="info-item"><span class="info-label">Sexo</span><span class="info-value">{{ p.gender === 'M' ? 'Masculino' : p.gender === 'F' ? 'Femenino' : 'Indeterminado' }}</span></div>
              <div class="info-item"><span class="info-label">Tel\xE9fono</span><span class="info-value">{{ p.phone ?? '\u2014' }}</span></div>
              <div class="info-item"><span class="info-label">Correo</span><span class="info-value">{{ p.email ?? '\u2014' }}</span></div>
              <div class="info-item"><span class="info-label">Direcci\xF3n</span><span class="info-value">{{ p.address ?? '\u2014' }}</span></div>
              <div class="info-item"><span class="info-label">Ciudad</span><span class="info-value">{{ p.city ?? '\u2014' }}</span></div>
              <div class="info-item"><span class="info-label">EPS</span><span class="info-value">{{ p.eps ?? '\u2014' }}</span></div>
              <div class="info-item"><span class="info-label">R\xE9gimen</span><span class="info-value">{{ p.regime ?? '\u2014' }}</span></div>
              @if (p.blood_type) {
                <div class="info-item"><span class="info-label">Tipo de sangre</span><span class="info-value">{{ bloodTypeLabel(p.blood_type) }}</span></div>
              }
            </div>
            @if (p.allergies) {
              <div class="info-section"><span class="info-label">Alergias</span><p class="info-text">{{ p.allergies }}</p></div>
            }
            @if (p.background_notes) {
              <div class="info-section"><span class="info-label">Antecedentes</span><p class="info-text">{{ p.background_notes }}</p></div>
            }
            @if (p.emergency_contact_name) {
              <div class="info-section"><span class="info-label">Contacto de emergencia</span><p class="info-text">{{ p.emergency_contact_name }} ({{ p.emergency_contact_relationship }}) \u2014 {{ p.emergency_contact_phone }}</p></div>
            }
          }

          <!-- Editar datos personales -->
          @if (detailTab() === 'basic') {
            <div class="edit-section-title">
              <button class="btn-back" (click)="detailTab.set('info')"><span class="material-icons">arrow_back</span></button>
              <h4>Editar datos personales</h4>
            </div>
            @if (editError()) { <div class="alert-error"><span class="material-icons">error_outline</span>{{ editError() }}</div> }
            <div class="form-grid">
              <div class="field"><label>Nombres</label><input type="text" [(ngModel)]="editBasic.first_name" name="efn"></div>
              <div class="field"><label>Apellidos</label><input type="text" [(ngModel)]="editBasic.last_name" name="eln"></div>
              <div class="field">
                <label>Tipo de documento</label>
                <select [(ngModel)]="editBasic.document_type" name="edt">
                  @for (dt of documentTypes; track dt.value) { <option [value]="dt.value">{{ dt.label }}</option> }
                </select>
              </div>
              <div class="field"><label>N\xFAmero de documento</label><input type="text" [(ngModel)]="editBasic.document_number" name="edn"></div>
              <div class="field"><label>Fecha de nacimiento</label><input type="date" [(ngModel)]="editBasic.birth_date" name="ebd"></div>
              <div class="field">
                <label>Sexo</label>
                <select [(ngModel)]="editBasic.gender" name="eg">
                  @for (g of genders; track g.value) { <option [value]="g.value">{{ g.label }}</option> }
                </select>
              </div>
              <div class="field">
                <label>Grupo sangu\xEDneo</label>
                <select [(ngModel)]="editBasic.blood_type" name="ebt">
                  <option value="UNKNOWN">Desconocido / No registrado</option>
                  <option value="A_POS">A+</option><option value="A_NEG">A-</option>
                  <option value="B_POS">B+</option><option value="B_NEG">B-</option>
                  <option value="AB_POS">AB+</option><option value="AB_NEG">AB-</option>
                  <option value="O_POS">O+</option><option value="O_NEG">O-</option>
                </select>
              </div>
              <div class="field"><label>Tel\xE9fono</label><input type="tel" [(ngModel)]="editBasic.phone" name="eph"></div>
              <div class="field"><label>Correo</label><input type="email" [(ngModel)]="editBasic.email" name="eem"></div>
              <div class="field field-full"><label>Direcci\xF3n</label><input type="text" [(ngModel)]="editBasic.address" name="ead"></div>
              <div class="field"><label>Ciudad</label><input type="text" [(ngModel)]="editBasic.city" name="ect"></div>
            </div>
          }

          <!-- Editar datos adicionales -->
          @if (detailTab() === 'extra') {
            <div class="edit-section-title">
              <button class="btn-back" (click)="detailTab.set('info')"><span class="material-icons">arrow_back</span></button>
              <h4>Editar datos adicionales</h4>
            </div>
            @if (editError()) { <div class="alert-error"><span class="material-icons">error_outline</span>{{ editError() }}</div> }
            <div class="form-grid">
              <div class="field"><label>EPS / Aseguradora</label><input type="text" [(ngModel)]="editExtra.eps" name="xeps"></div>
              <div class="field">
                <label>R\xE9gimen</label>
                <select [(ngModel)]="editExtra.regime" name="xrg">
                  <option value="">Seleccionar...</option>
                  <option value="Contributivo">Contributivo</option>
                  <option value="Subsidiado">Subsidiado</option>
                  <option value="Vinculado">Vinculado</option>
                  <option value="Particular">Particular</option>
                </select>
              </div>
              <div class="field field-full"><label>Alergias conocidas</label><textarea [(ngModel)]="editExtra.allergies" name="xal" rows="2" placeholder="Medicamentos, alimentos, otros..."></textarea></div>
              <div class="field field-full"><label>Antecedentes m\xE9dicos</label><textarea [(ngModel)]="editExtra.background_notes" name="xbg" rows="2" placeholder="Enfermedades previas, cirug\xEDas..."></textarea></div>
              <div class="field"><label>Contacto de emergencia</label><input type="text" [(ngModel)]="editExtra.emergency_contact_name" name="xecn" placeholder="Nombre"></div>
              <div class="field"><label>Tel\xE9fono contacto</label><input type="tel" [(ngModel)]="editExtra.emergency_contact_phone" name="xecp" placeholder="3001234567"></div>
              <div class="field"><label>Parentesco</label><input type="text" [(ngModel)]="editExtra.emergency_contact_relationship" name="xecr" placeholder="Ej: Esposo/a, Hijo/a"></div>
            </div>
          }

        </div><!-- /.modal-body -->

        <!-- Footer con acciones de edici\xF3n -->
        @if (detailTab() !== 'info') {
          <div class="modal-footer">
            <button class="btn-secondary" (click)="detailTab.set('info')">
              <span class="material-icons">arrow_back</span> Volver sin guardar
            </button>
            <button class="btn-primary" (click)="detailTab() === 'basic' ? saveBasic() : saveExtra()" [disabled]="editSaving()">
              @if (editSaving()) { <span class="spinner-sm"></span> Guardando... }
              @else { <span class="material-icons">save</span> Guardar cambios }
            </button>
          </div>
        }

      }
      } <!-- /else loading -->
    </div>
  </div>
}

<!-- \u2500\u2500 Confirmaci\xF3n: cerrar sin guardar \u2500\u2500 -->
@if (showCloseConfirm()) {
  <div class="modal-backdrop confirm-over" (click)="showCloseConfirm.set(false)">
    <div class="modal modal-sm" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3><span class="material-icons" style="font-size:20px;color:#d97706;vertical-align:middle;margin-right:6px">warning</span>Cambios sin guardar</h3>
      </div>
      <div class="modal-body">
        <p style="font-size:0.9rem;color:#334155;line-height:1.6;">
          Tienes cambios que no se han guardado.<br>
          \xBFDeseas cerrar de todas formas y perder los cambios?
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showCloseConfirm.set(false)">
          <span class="material-icons">edit</span> Seguir editando
        </button>
        <button class="btn-danger" (click)="confirmClose()">
          <span class="material-icons">close</span> Cerrar sin guardar
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/admin/patients/patients.scss */\n.module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.search-box .btn-icon {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box .btn-icon:hover {\n  background: #1d4ed8;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary,\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary:hover,\n.btn-danger:hover {\n  background: #f8fafc;\n}\n.btn-danger {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger:hover {\n  background: #fee2e2;\n}\n.btn-icon-only {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only .material-icons {\n  font-size: 20px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table tbody tr:hover {\n  background: #fafbfc;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty p {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full {\n  grid-column: 1/-1;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field input,\n.field select,\n.field textarea {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field input::placeholder,\n.field select::placeholder,\n.field textarea::placeholder {\n  color: #94a3b8;\n}\n.field textarea {\n  resize: vertical;\n}\n.field select {\n  cursor: pointer;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.doc-type {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.name-cell {\n  font-weight: 500;\n}\n.btn-ver {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f1f5f9;\n  color: #334155;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 5px 12px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: all 0.15s;\n}\n.btn-ver .material-icons {\n  font-size: 16px;\n}\n.btn-ver:hover {\n  background: #0f2644;\n  color: #fff;\n  border-color: #0f2644;\n}\n.form-section-sep {\n  border: none !important;\n  padding-bottom: 0 !important;\n  margin-bottom: -4px;\n}\n.form-subsection {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #2563eb;\n  border-bottom: 1px solid #dbeafe;\n  padding-bottom: 4px;\n  width: 100%;\n}\n.modal-patient {\n  max-width: 750px;\n}\n.patient-modal-header {\n  gap: 14px;\n  padding: 14px 18px;\n}\n.detail-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #dbeafe;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.detail-avatar .material-icons {\n  font-size: 24px;\n  color: #2563eb;\n}\n.detail-title {\n  flex: 1;\n}\n.detail-title h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.detail-doc {\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.quick-actions {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.quick-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  border: none;\n  border-radius: 10px;\n  padding: 12px 8px;\n  cursor: pointer;\n  font-size: 0.72rem;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n  transition: all 0.15s;\n}\n.quick-btn .material-icons {\n  font-size: 22px;\n}\n.quick-btn.qa-clinical {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.quick-btn.qa-clinical:hover {\n  background: #dbeafe;\n}\n.quick-btn.qa-edit {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.quick-btn.qa-edit:hover {\n  background: #dcfce7;\n}\n.quick-btn.qa-extra {\n  background: #fff7ed;\n  color: #c2410c;\n}\n.quick-btn.qa-extra:hover {\n  background: #ffedd5;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.info-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.info-value {\n  font-size: 0.875rem;\n  color: #0f172a;\n  font-weight: 500;\n}\n.info-section {\n  margin-bottom: 10px;\n}\n.info-text {\n  font-size: 0.875rem;\n  color: #0f172a;\n  margin: 4px 0 0;\n  line-height: 1.5;\n}\n.edit-section-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.edit-section-title h4 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.btn-back {\n  background: #f1f5f9;\n  border: none;\n  border-radius: 6px;\n  padding: 4px 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-back:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.btn-back .material-icons {\n  font-size: 18px;\n}\n.confirm-over {\n  z-index: 1100;\n}\n/*# sourceMappingURL=patients.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientsComponent, { className: "PatientsComponent", filePath: "src/app/admin/patients/patients.ts", lineNumber: 14 });
})();
export {
  PatientsComponent
};
//# sourceMappingURL=chunk-CG333RUK.js.map
