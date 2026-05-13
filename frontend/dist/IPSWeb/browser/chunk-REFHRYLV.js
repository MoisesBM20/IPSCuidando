import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-PT7R7SID.js";
import {
  ApiService
} from "./chunk-NCFNA77J.js";
import {
  ActivatedRoute
} from "./chunk-QOYWAKCN.js";
import {
  CommonModule,
  Component,
  DatePipe,
  __spreadProps,
  __spreadValues,
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

// src/app/admin/clinical/clinical.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function ClinicalComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Cargando...");
    \u0275\u0275elementEnd()()();
  }
}
function ClinicalComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9)(2, "span", 4);
    \u0275\u0275text(3, "folder_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.listSearch ? 'Sin resultados para "' + ctx_r1.listSearch + '".' : "No hay historias cl\xEDnicas registradas a\xFAn.");
  }
}
function ClinicalComponent_Conditional_0_Conditional_8_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 11);
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
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 12);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_0_Conditional_8_For_17_Template_button_click_14_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectFromList(item_r4));
    });
    \u0275\u0275elementStart(15, "span", 4);
    \u0275\u0275text(16, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Ver HC ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.patient_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r4.patient_document_type, " ", item_r4.patient_document);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.record_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.total_entries);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 6, item_r4.opened_at, "dd/MM/yyyy"));
  }
}
function ClinicalComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "N\xB0 HC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Entradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Apertura");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ClinicalComponent_Conditional_0_Conditional_8_For_17_Template, 18, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.recordList());
  }
}
function ClinicalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_0_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.listSearch, $event) || (ctx_r1.listSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ClinicalComponent_Conditional_0_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadList());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(6, ClinicalComponent_Conditional_0_Conditional_6_Template, 5, 0, "div", 6)(7, ClinicalComponent_Conditional_0_Conditional_7_Template, 6, 1, "div", 6)(8, ClinicalComponent_Conditional_0_Conditional_8_Template, 18, 0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.listSearch);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.listLoading() ? 6 : ctx_r1.recordList().length === 0 ? 7 : 8);
  }
}
function ClinicalComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_1_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEntryForm());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nueva entrada ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_1_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportPDF());
    });
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Exportar / Imprimir ");
    \u0275\u0275elementEnd();
  }
}
function ClinicalComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.searchError());
  }
}
function ClinicalComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Cargando historia cl\xEDnica...");
    \u0275\u0275elementEnd()()();
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("N\xB0 ", ctx.record_number);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "\u26A0 Alergias:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const patient_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(patient_r7.allergies);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "Contacto emergencia:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const patient_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", patient_r7.emergency_contact_name, "", patient_r7.emergency_contact_phone ? " \u2014 " + patient_r7.emergency_contact_phone : "", "", patient_r7.emergency_contact_relationship ? " (" + patient_r7.emergency_contact_relationship + ")" : "");
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 4);
    \u0275\u0275text(2, "note_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Este paciente no tiene historia cl\xEDnica abierta.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_1_Conditional_8_Conditional_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRecord());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Abrir historia cl\xEDnica ");
    \u0275\u0275elementEnd()();
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " Sin entradas. Presiona ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Nueva entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " para comenzar la atenci\xF3n. ");
    \u0275\u0275elementEnd();
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "tbody")(2, "tr")(3, "td", 37);
    \u0275\u0275text(4, "Motivo de consulta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(entry_r9.reason_for_visit);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "tbody")(2, "tr")(3, "td", 37);
    \u0275\u0275text(4, "Anamnesis / Historia de la enfermedad actual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(entry_r9.anamnesis);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "tbody")(2, "tr")(3, "td", 37);
    \u0275\u0275text(4, "OBJETIVO \u2014 Examen f\xEDsico por sistemas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(entry_r9.physical_exam);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "tbody")(2, "tr")(3, "td", 37);
    \u0275\u0275text(4, "AN\xC1LISIS / PLAN DE MANEJO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(entry_r9.treatment_plan);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "tbody")(2, "tr")(3, "td", 37);
    \u0275\u0275text(4, "Notas adicionales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(entry_r9.additional_notes);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "thead")(2, "tr")(3, "th", 39);
    \u0275\u0275text(4, "Signos Vitales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 40);
    \u0275\u0275text(7, "PA (mmHg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 40);
    \u0275\u0275text(9, "FC (lpm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 40);
    \u0275\u0275text(11, "FR (rpm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 40);
    \u0275\u0275text(13, "Temp (\xB0C)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 40);
    \u0275\u0275text(15, "SpO\u2082 (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 40);
    \u0275\u0275text(17, "Peso (Kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 40);
    \u0275\u0275text(19, "Talla (cm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 40);
    \u0275\u0275text(21, "IMC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody")(23, "tr", 41)(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vs_r10 = ctx;
    \u0275\u0275advance(25);
    \u0275\u0275textInterpolate(vs_r10.blood_pressure || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vs_r10.heart_rate || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vs_r10.respiratory_rate || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vs_r10.temperature || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vs_r10.oxygen_saturation || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vs_r10.weight || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vs_r10.height || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vs_r10.bmi || "\u2014");
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "thead")(2, "tr")(3, "th", 26);
    \u0275\u0275text(4, "Diagn\xF3sticos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 27);
    \u0275\u0275text(7, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 27);
    \u0275\u0275text(9, "C\xF3digo CIE-10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 27);
    \u0275\u0275text(13, "Tipo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody")(15, "tr")(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 4, entry_r9.entry_date, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r9.diagnosis_code ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r9.diagnosis_description ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.diagnosisTypeLabel(entry_r9.diagnosis_type));
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "thead")(2, "tr")(3, "th", 26);
    \u0275\u0275text(4, "Remisi\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tbody")(6, "tr")(7, "td", 27);
    \u0275\u0275text(8, "Destino:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 27);
    \u0275\u0275text(12, "Motivo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(entry_r9.referral_destination ?? "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r9.referral_reason ?? "\u2014");
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "thead")(2, "tr")(3, "th", 42);
    \u0275\u0275text(4, "Prescripciones / F\xF3rmula M\xE9dica");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tbody")(6, "tr")(7, "td", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(entry_r9.prescriptions);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 25)(4, "thead")(5, "tr")(6, "th", 26);
    \u0275\u0275text(7, "ATENCI\xD3N CL\xCDNICA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "td", 27);
    \u0275\u0275text(11, "Tipo de atenci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 27);
    \u0275\u0275text(15, "Profesional:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tr")(19, "td", 27);
    \u0275\u0275text(20, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 27);
    \u0275\u0275text(25, "Hora:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(29, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_29_Template, 8, 1, "table", 25);
    \u0275\u0275conditionalCreate(30, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_30_Template, 8, 1, "table", 25);
    \u0275\u0275conditionalCreate(31, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_31_Template, 8, 1, "table", 25);
    \u0275\u0275conditionalCreate(32, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_32_Template, 8, 1, "table", 25);
    \u0275\u0275conditionalCreate(33, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_33_Template, 8, 1, "table", 25);
    \u0275\u0275elementStart(34, "table", 25)(35, "tbody")(36, "tr")(37, "td", 34);
    \u0275\u0275text(38, "Responsable:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td")(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td", 35);
    \u0275\u0275text(43, "RM:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td", 36);
    \u0275\u0275text(47, "V\xE1lido como Firma Electr\xF3nica");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(48, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_48_Template, 40, 8, "table", 25);
    \u0275\u0275conditionalCreate(49, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_49_Template, 26, 7, "table", 25);
    \u0275\u0275conditionalCreate(50, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_50_Template, 15, 2, "table", 25);
    \u0275\u0275conditionalCreate(51, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Conditional_51_Template, 9, 1, "table", 25);
  }
  if (rf & 2) {
    let tmp_27_0;
    const entry_r9 = ctx.$implicit;
    const \u0275$index_292_r11 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" Entrada ", \u0275$index_292_r11 + 1, " \u2014 ", ctx_r1.entryTypeLabel(entry_r9.entry_type), " \u2014 ", \u0275\u0275pipeBind2(2, 17, entry_r9.entry_date, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.entryTypeLabel(entry_r9.entry_type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r9.professional_name ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 20, entry_r9.entry_date, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 23, entry_r9.entry_date, "HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(entry_r9.reason_for_visit ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.anamnesis ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.physical_exam ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.treatment_plan ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.additional_notes ? 33 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(entry_r9.professional_name ?? "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275conditional((tmp_27_0 = ctx_r1.parseVitals(entry_r9)) ? 48 : -1, tmp_27_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.diagnosis_code || entry_r9.diagnosis_description ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.referral_destination || entry_r9.referral_reason ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.prescriptions ? 51 : -1);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_Conditional_0_Template, 5, 0, "div", 32);
    \u0275\u0275repeaterCreate(1, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_For_2_Template, 52, 26, null, null, _forTrack0);
  }
  if (rf & 2) {
    const rec_r12 = ctx;
    \u0275\u0275conditional(rec_r12.entries.length === 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(rec_r12.entries);
  }
}
function ClinicalComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18)(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4, "CUIDANDO DE TI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6, "CyE IPS SAS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275text(8, " HISTORIA CL\xCDNICA ");
    \u0275\u0275conditionalCreate(9, ClinicalComponent_Conditional_1_Conditional_8_Conditional_9_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 24);
    \u0275\u0275text(11, " Cali, Valle del Cauca");
    \u0275\u0275element(12, "br");
    \u0275\u0275text(13, "NIT: 900000000 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "table", 25)(15, "thead")(16, "tr")(17, "th", 26);
    \u0275\u0275text(18, "DATOS GENERALES");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody")(20, "tr")(21, "td", 27);
    \u0275\u0275text(22, "Paciente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 28)(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tr")(27, "td", 27);
    \u0275\u0275text(28, "Doc. Identificaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 27);
    \u0275\u0275text(32, "N\xB0 Historia Cl\xEDnica:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tr")(36, "td", 27);
    \u0275\u0275text(37, "Fecha Nacimiento:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td", 27);
    \u0275\u0275text(42, "Edad:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td")(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tr")(47, "td", 27);
    \u0275\u0275text(48, "Sexo Biol\xF3gico:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td", 27);
    \u0275\u0275text(52, "Grupo Sangu\xEDneo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "tr")(56, "td", 27);
    \u0275\u0275text(57, "Aseguradora (EPS):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td", 27);
    \u0275\u0275text(61, "R\xE9gimen:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "tr")(65, "td", 27);
    \u0275\u0275text(66, "Direcci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td", 27);
    \u0275\u0275text(70, "Tel\xE9fono:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(73, ClinicalComponent_Conditional_1_Conditional_8_Conditional_73_Template, 5, 1, "tr");
    \u0275\u0275conditionalCreate(74, ClinicalComponent_Conditional_1_Conditional_8_Conditional_74_Template, 5, 3, "tr");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(75, ClinicalComponent_Conditional_1_Conditional_8_Conditional_75_Template, 9, 0, "div", 29);
    \u0275\u0275conditionalCreate(76, ClinicalComponent_Conditional_1_Conditional_8_Conditional_76_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_6_0;
    let tmp_18_0;
    const patient_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.record()) ? 9 : -1, tmp_3_0);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate2("", patient_r7.first_name, " ", patient_r7.last_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", patient_r7.document_type, " ", patient_r7.document_number);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r1.record()) == null ? null : tmp_6_0.record_number) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 20, patient_r7.birth_date, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.calcAge(patient_r7.birth_date), " a\xF1os ", ctx_r1.calcMonths(patient_r7.birth_date), " meses");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(patient_r7.gender === "M" ? "Masculino" : patient_r7.gender === "F" ? "Femenino" : "Indeterminado");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(patient_r7.blood_type ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(patient_r7.eps ?? "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(patient_r7.regime ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", patient_r7.address ?? "\u2014", "", patient_r7.city ? ", " + patient_r7.city : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(patient_r7.phone ?? "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(patient_r7.allergies ? 73 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(patient_r7.emergency_contact_name ? 74 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.notFound() ? 75 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = ctx_r1.record()) ? 76 : -1, tmp_18_0);
  }
}
function ClinicalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Volver a la lista ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ClinicalComponent_Conditional_1_Conditional_5_Template, 8, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ClinicalComponent_Conditional_1_Conditional_6_Template, 4, 1, "div", 15);
    \u0275\u0275conditionalCreate(7, ClinicalComponent_Conditional_1_Conditional_7_Template, 5, 0, "div", 6);
    \u0275\u0275conditionalCreate(8, ClinicalComponent_Conditional_1_Conditional_8_Template, 77, 23, "div", 16);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.record() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchError() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.patientInfo()) ? 8 : -1, tmp_4_0);
  }
}
function ClinicalComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
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
function ClinicalComponent_Conditional_2_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xA0\xB7\xA0 ", p_r14.eps, " ");
  }
}
function ClinicalComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 4);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, ClinicalComponent_Conditional_2_Conditional_10_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", p_r14.first_name, " ", p_r14.last_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" \xA0\xB7\xA0 ", p_r14.document_type, " ", p_r14.document_number, " \xA0\xB7\xA0 ", ctx_r1.calcAge(p_r14.birth_date), " a\xF1os ");
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r14.eps ? 6 : -1);
  }
}
function ClinicalComponent_Conditional_2_For_20_Template(rf, ctx) {
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
function ClinicalComponent_Conditional_2_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 85);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function ClinicalComponent_Conditional_2_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Guardar entrada ");
  }
}
function ClinicalComponent_Conditional_2_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Conditional_137_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showEntryCloseConfirm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 87);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Conditional_137_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "p")(3, "strong");
    \u0275\u0275text(4, "\xBFSalir sin guardar?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 88);
    \u0275\u0275text(6, "Perder\xE1s los datos ingresados en esta entrada.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 89)(8, "button", 14);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Conditional_137_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showEntryCloseConfirm.set(false));
    });
    \u0275\u0275text(9, "Seguir editando");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 90);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Conditional_137_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmCloseEntry());
    });
    \u0275\u0275text(11, "Salir sin guardar");
    \u0275\u0275elementEnd()()()();
  }
}
function ClinicalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEntryForm());
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "h3");
    \u0275\u0275text(4, "Nueva Entrada Cl\xEDnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEntryForm());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 48);
    \u0275\u0275conditionalCreate(9, ClinicalComponent_Conditional_2_Conditional_9_Template, 4, 1, "div", 15);
    \u0275\u0275conditionalCreate(10, ClinicalComponent_Conditional_2_Conditional_10_Template, 7, 6, "div", 49);
    \u0275\u0275elementStart(11, "div", 50)(12, "div", 51);
    \u0275\u0275text(13, "Tipo de Atenci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 52)(15, "div", 53)(16, "label");
    \u0275\u0275text(17, "Tipo de entrada *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.entry_type, $event) || (ctx_r1.form.entry_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(19, ClinicalComponent_Conditional_2_For_20_Template, 2, 2, "option", 55, _forTrack1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 50)(22, "div", 51);
    \u0275\u0275text(23, "Signos Vitales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 56)(25, "div", 53)(26, "label");
    \u0275\u0275text(27, "PA (mmHg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vitalSigns.blood_pressure, $event) || (ctx_r1.vitalSigns.blood_pressure = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 53)(30, "label");
    \u0275\u0275text(31, "FC (lpm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vitalSigns.heart_rate, $event) || (ctx_r1.vitalSigns.heart_rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 53)(34, "label");
    \u0275\u0275text(35, "FR (rpm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vitalSigns.respiratory_rate, $event) || (ctx_r1.vitalSigns.respiratory_rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 53)(38, "label");
    \u0275\u0275text(39, "Temperatura (\xB0C)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vitalSigns.temperature, $event) || (ctx_r1.vitalSigns.temperature = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 53)(42, "label");
    \u0275\u0275text(43, "SpO\u2082 (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vitalSigns.oxygen_saturation, $event) || (ctx_r1.vitalSigns.oxygen_saturation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 53)(46, "label");
    \u0275\u0275text(47, "Peso (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vitalSigns.weight, $event) || (ctx_r1.vitalSigns.weight = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_48_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcBMI());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 53)(50, "label");
    \u0275\u0275text(51, "Talla (cm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vitalSigns.height, $event) || (ctx_r1.vitalSigns.height = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_52_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcBMI());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 53)(54, "label");
    \u0275\u0275text(55, "IMC (auto)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vitalSigns.bmi, $event) || (ctx_r1.vitalSigns.bmi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 50)(58, "div", 51);
    \u0275\u0275text(59, "Motivo de Consulta y Anamnesis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 65)(61, "div", 53)(62, "label");
    \u0275\u0275text(63, "Motivo de consulta *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_textarea_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.reason_for_visit, $event) || (ctx_r1.form.reason_for_visit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 53)(66, "label");
    \u0275\u0275text(67, "Anamnesis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "textarea", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.anamnesis, $event) || (ctx_r1.form.anamnesis = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div", 50)(70, "div", 51);
    \u0275\u0275text(71, "OBJETIVO \u2014 Examen F\xEDsico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 53)(73, "label");
    \u0275\u0275text(74, "Hallazgos por sistemas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "textarea", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_textarea_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.physical_exam, $event) || (ctx_r1.form.physical_exam = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 50)(77, "div", 51);
    \u0275\u0275text(78, "Diagn\xF3stico (CIE-10)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 69)(80, "div", 53)(81, "label");
    \u0275\u0275text(82, "C\xF3digo CIE-10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.diagnosis_code, $event) || (ctx_r1.form.diagnosis_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 71)(85, "label");
    \u0275\u0275text(86, "Descripci\xF3n diagn\xF3stica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.diagnosis_description, $event) || (ctx_r1.form.diagnosis_description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 53)(89, "label");
    \u0275\u0275text(90, "Tipo de diagn\xF3stico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_select_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.diagnosis_type, $event) || (ctx_r1.form.diagnosis_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(92, "option", 74);
    \u0275\u0275text(93, "Impresi\xF3n diagn\xF3stica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "option", 75);
    \u0275\u0275text(95, "Confirmado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "option", 76);
    \u0275\u0275text(97, "Descartado");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(98, "div", 50)(99, "div", 51);
    \u0275\u0275text(100, "AN\xC1LISIS / Plan de Manejo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 53)(102, "label");
    \u0275\u0275text(103, "Tratamiento / Conducta a seguir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "textarea", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_textarea_ngModelChange_104_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.treatment_plan, $event) || (ctx_r1.form.treatment_plan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 50)(106, "div", 51);
    \u0275\u0275text(107, "Prescripciones / F\xF3rmula M\xE9dica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 53)(109, "label");
    \u0275\u0275text(110, "Medicamentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "textarea", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_textarea_ngModelChange_111_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.prescriptions, $event) || (ctx_r1.form.prescriptions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "div", 50)(113, "div", 51);
    \u0275\u0275text(114, "Remisi\xF3n (si aplica)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 52)(116, "div", 53)(117, "label");
    \u0275\u0275text(118, "Destino de remisi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_119_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.referral_destination, $event) || (ctx_r1.form.referral_destination = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 53)(121, "label");
    \u0275\u0275text(122, "Motivo de remisi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_input_ngModelChange_123_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.referral_reason, $event) || (ctx_r1.form.referral_reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(124, "div", 50)(125, "div", 51);
    \u0275\u0275text(126, "Notas Adicionales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 53)(128, "label");
    \u0275\u0275text(129, "Observaciones / Pr\xF3xima cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "textarea", 81);
    \u0275\u0275twoWayListener("ngModelChange", function ClinicalComponent_Conditional_2_Template_textarea_ngModelChange_130_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.additional_notes, $event) || (ctx_r1.form.additional_notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(131, "div", 82)(132, "button", 14);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Template_button_click_132_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEntryForm());
    });
    \u0275\u0275text(133, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "button", 83);
    \u0275\u0275listener("click", function ClinicalComponent_Conditional_2_Template_button_click_134_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEntry());
    });
    \u0275\u0275conditionalCreate(135, ClinicalComponent_Conditional_2_Conditional_135_Template, 2, 0)(136, ClinicalComponent_Conditional_2_Conditional_136_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(137, ClinicalComponent_Conditional_2_Conditional_137_Template, 12, 0, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.formError() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.patientInfo()) ? 10 : -1, tmp_2_0);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.entry_type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.entryTypes);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vitalSigns.blood_pressure);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vitalSigns.heart_rate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vitalSigns.respiratory_rate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vitalSigns.temperature);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vitalSigns.oxygen_saturation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vitalSigns.weight);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vitalSigns.height);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vitalSigns.bmi);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.reason_for_visit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.anamnesis);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.physical_exam);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.diagnosis_code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.diagnosis_description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.diagnosis_type);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.treatment_plan);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.prescriptions);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.referral_destination);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.referral_reason);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.additional_notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 135 : 136);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showEntryCloseConfirm() ? 137 : -1);
  }
}
var _ClinicalComponent = class _ClinicalComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.view = signal("list", ...ngDevMode ? [{ debugName: "view" }] : []);
    this.recordList = signal([], ...ngDevMode ? [{ debugName: "recordList" }] : []);
    this.listLoading = signal(true, ...ngDevMode ? [{ debugName: "listLoading" }] : []);
    this.listSearch = "";
    this.patientInfo = signal(null, ...ngDevMode ? [{ debugName: "patientInfo" }] : []);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.record = signal(null, ...ngDevMode ? [{ debugName: "record" }] : []);
    this.notFound = signal(false, ...ngDevMode ? [{ debugName: "notFound" }] : []);
    this.searchError = signal("", ...ngDevMode ? [{ debugName: "searchError" }] : []);
    this.showEntryForm = signal(false, ...ngDevMode ? [{ debugName: "showEntryForm" }] : []);
    this.showEntryCloseConfirm = signal(false, ...ngDevMode ? [{ debugName: "showEntryCloseConfirm" }] : []);
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
    this.formError = signal("", ...ngDevMode ? [{ debugName: "formError" }] : []);
    this.form = this.emptyEntry();
    this.vitalSigns = this.emptyVitals();
    this.entryTypes = [
      { value: "consulta", label: "Consulta m\xE9dica" },
      { value: "nota_enfermeria", label: "Nota de Enfermer\xEDa" },
      { value: "evolucion", label: "Evoluci\xF3n" },
      { value: "procedimiento", label: "Procedimiento" },
      { value: "medicamento", label: "Medicamento" },
      { value: "resultado_laboratorio", label: "Resultado de Laboratorio" },
      { value: "imagen_diagnostica", label: "Imagen Diagn\xF3stica" },
      { value: "remision", label: "Remisi\xF3n" },
      { value: "egreso", label: "Egreso" }
    ];
  }
  ngOnInit() {
    this.loadList();
    this.route.queryParams.subscribe((params) => {
      if (params["patientId"]) {
        const patientId = parseInt(params["patientId"], 10);
        this.loading.set(true);
        this.view.set("detail");
        this.api.getPatient(patientId).subscribe({
          next: (p) => {
            this.patientInfo.set(p);
            this.loadRecord(p.id);
          },
          error: () => {
            this.loading.set(false);
            this.searchError.set("No se encontr\xF3 el paciente.");
          }
        });
      }
    });
  }
  // ── Lista ─────────────────────────────────────────────────────────────────────
  loadList() {
    this.listLoading.set(true);
    this.api.listClinicalRecords(this.listSearch || void 0).subscribe({
      next: (data) => {
        this.recordList.set(data);
        this.listLoading.set(false);
      },
      error: () => this.listLoading.set(false)
    });
  }
  selectFromList(item) {
    this.view.set("detail");
    this.searchError.set("");
    this.record.set(null);
    this.notFound.set(false);
    this.loading.set(true);
    this.api.getPatient(item.patient_id).subscribe({
      next: (p) => {
        this.patientInfo.set(p);
        this.loadRecord(p.id);
      },
      error: () => this.loading.set(false)
    });
  }
  backToList() {
    this.view.set("list");
    this.patientInfo.set(null);
    this.record.set(null);
    this.notFound.set(false);
    this.searchError.set("");
    this.loadList();
  }
  // ── Detalle ────────────────────────────────────────────────────────────────────
  loadRecord(patientId) {
    this.loading.set(true);
    this.notFound.set(false);
    this.api.getClinicalRecord(patientId).subscribe({
      next: (r) => {
        this.record.set(r);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        if (err.status === 404)
          this.notFound.set(true);
      }
    });
  }
  openRecord() {
    const p = this.patientInfo();
    if (!p)
      return;
    this.loading.set(true);
    this.api.openClinicalRecord(p.id).subscribe({
      next: (r) => {
        this.record.set(r);
        this.notFound.set(false);
        this.loading.set(false);
        this.loadList();
      },
      error: () => this.loading.set(false)
    });
  }
  openEntryForm() {
    this.form = this.emptyEntry();
    this.vitalSigns = this.emptyVitals();
    if (this.record())
      this.form.clinical_record_id = this.record().id;
    this.formError.set("");
    this.showEntryCloseConfirm.set(false);
    this.showEntryForm.set(true);
  }
  closeEntryForm() {
    if (this.entryFormHasData()) {
      this.showEntryCloseConfirm.set(true);
    } else {
      this.showEntryForm.set(false);
    }
  }
  confirmCloseEntry() {
    this.showEntryCloseConfirm.set(false);
    this.showEntryForm.set(false);
  }
  calcBMI() {
    const w = this.vitalSigns.weight;
    const h = this.vitalSigns.height;
    if (w && h && h > 0)
      this.vitalSigns.bmi = Math.round(w / (h / 100) ** 2 * 10) / 10;
  }
  saveEntry() {
    if (!this.form.reason_for_visit?.trim()) {
      this.formError.set("El motivo de consulta es obligatorio.");
      return;
    }
    const vs = this.vitalSigns;
    const hasVitals = !!(vs.blood_pressure || vs.heart_rate || vs.respiratory_rate || vs.temperature || vs.oxygen_saturation || vs.weight || vs.height);
    const payload = __spreadProps(__spreadValues({}, this.form), { vital_signs: hasVitals ? vs : null });
    this.saving.set(true);
    this.formError.set("");
    this.api.addClinicalEntry(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.showEntryForm.set(false);
        const p = this.patientInfo();
        if (p)
          this.loadRecord(p.id);
      },
      error: (err) => {
        this.saving.set(false);
        this.formError.set(err.error?.detail ?? "Error al guardar.");
      }
    });
  }
  // ── Exportar PDF ──────────────────────────────────────────────────────────────
  exportPDF() {
    const patient = this.patientInfo();
    const rec = this.record();
    if (!patient || !rec)
      return;
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(this.buildPrintHTML(patient, rec));
      win.document.close();
    }
    this.api.getAppointments({ patient_id: patient.id, status: "en_atencion" }).subscribe({
      next: (apts) => {
        if (apts.length > 0) {
          this.api.updateAppointment(apts[0].id, { status: "completada" }).subscribe({
            next: () => this.loadList()
          });
        }
      }
    });
  }
  // ── Helpers ────────────────────────────────────────────────────────────────────
  parseVitals(entry) {
    if (!entry.vital_signs)
      return null;
    try {
      return JSON.parse(entry.vital_signs);
    } catch {
      return null;
    }
  }
  entryTypeLabel(t) {
    return this.entryTypes.find((e) => e.value === t)?.label ?? t;
  }
  calcAge(birthDate) {
    return Math.floor((Date.now() - new Date(birthDate).getTime()) / (1e3 * 60 * 60 * 24 * 365.25));
  }
  calcMonths(birthDate) {
    const diff = (Date.now() - new Date(birthDate).getTime()) % (365.25 * 24 * 3600 * 1e3);
    return Math.floor(diff / (30.44 * 24 * 3600 * 1e3));
  }
  diagnosisTypeLabel(t) {
    if (t === "confirmado")
      return "Confirmado";
    if (t === "impresion_diagnostica")
      return "Impresi\xF3n Diagn\xF3stica";
    if (t === "descartado")
      return "Descartado";
    return t ?? "";
  }
  fmtDate(d) {
    return new Date(d).toLocaleDateString("es-CO", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  fmtTime(d) {
    return new Date(d).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
  }
  // ── HTML del documento imprimible ─────────────────────────────────────────────
  buildPrintHTML(patient, rec) {
    const age = this.calcAge(patient.birth_date);
    const months = this.calcMonths(patient.birth_date);
    const genderLabel = patient.gender === "M" ? "Masculino" : patient.gender === "F" ? "Femenino" : "Indeterminado";
    const printDate = `${(/* @__PURE__ */ new Date()).toLocaleDateString("es-CO")} ${(/* @__PURE__ */ new Date()).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}`;
    const entriesHTML = rec.entries.length === 0 ? '<p style="text-align:center;padding:20px;color:#888;">Sin entradas registradas.</p>' : rec.entries.map((e, i) => this.buildEntryHTML(e, i)).join("");
    return `<!DOCTYPE html>
<html lang="es"><head>
<meta charset="UTF-8">
<title>Historia Cl\xEDnica \u2014 ${patient.first_name} ${patient.last_name}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 10pt; color: #000; background: #fff; }
  .page { max-width: 210mm; margin: 0 auto; padding: 8mm 10mm; }
  .hc-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #1a3c6e; padding-bottom: 8px; margin-bottom: 8px; }
  .brand { font-size: 13pt; font-weight: bold; color: #1a3c6e; line-height: 1.2; }
  .brand small { font-size: 8pt; font-weight: normal; color: #555; display: block; }
  .hc-center-title { text-align: center; flex: 1; }
  .hc-center-title h1 { font-size: 14pt; font-weight: bold; color: #1a3c6e; text-transform: uppercase; }
  .hc-center-title p { font-size: 10pt; color: #1a3c6e; margin-top: 2px; }
  .hc-contact { font-size: 8pt; text-align: right; color: #555; line-height: 1.6; }
  table.hc { width: 100%; border-collapse: collapse; margin-bottom: 5px; border: 1px solid #666; }
  table.hc td, table.hc th { border: 1px solid #bbb; padding: 3px 7px; font-size: 9.5pt; vertical-align: top; }
  .hdr { background: #1a3c6e; color: #fff; font-weight: bold; font-size: 10pt; text-align: center; padding: 5px 7px; text-transform: uppercase; letter-spacing: 0.5px; }
  .lbl { background: #dde6f0; font-weight: bold; white-space: nowrap; color: #1e3a5f; width: 1%; }
  .sub { background: #d0e4f5; font-weight: bold; font-size: 9.5pt; }
  .pre { white-space: pre-wrap; line-height: 1.5; min-height: 18px; font-size: 9.5pt; }
  .mono { font-family: 'Courier New', monospace; }
  .entry-sep { background: #1a3c6e; color: #fff; padding: 4px 10px; font-size: 9pt; font-weight: bold; border-top: 6px solid #fff; margin: 0; }
  .alert { color: #b91c1c; }
  .center { text-align: center; }
  .footer { font-size: 8pt; color: #777; border-top: 1px solid #ccc; padding-top: 4px; margin-top: 10px; display: flex; justify-content: space-between; }
  @page { size: A4; margin: 1cm; }
  @media print { .page { padding: 0; max-width: 100%; } }
</style>
</head>
<body onload="window.print()">
<div class="page">

<div class="hc-header">
  <div class="brand">CUIDANDO DE TI<br>CyE IPS SAS<small>Excelencia en salud a su servicio</small></div>
  <div class="hc-center-title"><h1>Historia Cl\xEDnica</h1><p>N\xB0 ${rec.record_number}</p></div>
  <div class="hc-contact">Cali, Valle del Cauca<br>NIT: 900000000<br>Tel: +57 (2) 000-0000</div>
</div>

<table class="hc">
  <tr><td class="hdr" colspan="4">DATOS GENERALES</td></tr>
  <tr>
    <td class="lbl">Paciente:</td>
    <td colspan="3"><strong>${patient.first_name} ${patient.last_name}</strong></td>
  </tr>
  <tr>
    <td class="lbl">Doc. Identificaci\xF3n:</td>
    <td>${patient.document_type} ${patient.document_number}</td>
    <td class="lbl">N\xB0 Historia Cl\xEDnica:</td>
    <td>${rec.record_number}</td>
  </tr>
  <tr>
    <td class="lbl">Fecha Nacimiento:</td>
    <td>${this.fmtDate(patient.birth_date)}</td>
    <td class="lbl">Edad:</td>
    <td><strong>${age} a\xF1os ${months} meses</strong> &nbsp; Sexo Biol\xF3gico: <strong>${genderLabel}</strong></td>
  </tr>
  <tr>
    <td class="lbl">Aseguradora (EPS):</td>
    <td>${this.esc(patient.eps ?? "\u2014")}</td>
    <td class="lbl">R\xE9gimen:</td>
    <td>${this.esc(patient.regime ?? "\u2014")}</td>
  </tr>
  <tr>
    <td class="lbl">Grupo sangu\xEDneo:</td>
    <td>${patient.blood_type ?? "\u2014"}</td>
    <td class="lbl">Tel\xE9fono:</td>
    <td>${patient.phone ?? "\u2014"}</td>
  </tr>
  <tr>
    <td class="lbl">Direcci\xF3n:</td>
    <td colspan="3">${this.esc(patient.address ?? "\u2014")}${patient.city ? ", " + this.esc(patient.city) : ""}</td>
  </tr>
  ${patient.allergies ? `<tr><td class="lbl alert">\u26A0 Alergias:</td><td colspan="3" class="alert">${this.esc(patient.allergies)}</td></tr>` : ""}
  ${patient.emergency_contact_name ? `<tr><td class="lbl">Contacto emergencia:</td><td colspan="3">${this.esc(patient.emergency_contact_name)}${patient.emergency_contact_phone ? " \u2014 " + patient.emergency_contact_phone : ""}${patient.emergency_contact_relationship ? " (" + this.esc(patient.emergency_contact_relationship) + ")" : ""}</td></tr>` : ""}
</table>

${entriesHTML}

<div class="footer">
  <span>Paciente: ${patient.first_name} ${patient.last_name} \u2014 ${patient.document_type} ${patient.document_number}</span>
  <span>Impreso: ${printDate}</span>
</div>
</div>
</body></html>`;
  }
  buildEntryHTML(entry, idx) {
    const fecha = this.fmtDate(entry.entry_date);
    const hora = this.fmtTime(entry.entry_date);
    const vs = this.parseVitals(entry);
    const diagType = this.diagnosisTypeLabel(entry.diagnosis_type);
    const typeLabel = this.entryTypeLabel(entry.entry_type);
    return `
<div class="entry-sep">Entrada ${idx + 1} \u2014 ${typeLabel} \u2014 ${fecha}</div>

<table class="hc">
  <tr><td class="hdr" colspan="4">ATENCI\xD3N CL\xCDNICA</td></tr>
  <tr>
    <td class="lbl">Tipo de atenci\xF3n:</td><td>${typeLabel}</td>
    <td class="lbl">Profesional:</td><td>${this.esc(entry.professional_name ?? "\u2014")}</td>
  </tr>
  <tr>
    <td class="lbl">Fecha:</td><td>${fecha}</td>
    <td class="lbl">Hora:</td><td>${hora}</td>
  </tr>
</table>

${entry.reason_for_visit ? `<table class="hc"><tr><td class="sub">Motivo de consulta</td></tr><tr><td class="pre">${this.esc(entry.reason_for_visit)}</td></tr></table>` : ""}
${entry.anamnesis ? `<table class="hc"><tr><td class="sub">Anamnesis / Historia de la enfermedad actual</td></tr><tr><td class="pre">${this.esc(entry.anamnesis)}</td></tr></table>` : ""}
${entry.physical_exam ? `<table class="hc"><tr><td class="sub">OBJETIVO \u2014 Examen f\xEDsico por sistemas</td></tr><tr><td class="pre">${this.esc(entry.physical_exam)}</td></tr></table>` : ""}
${entry.treatment_plan ? `<table class="hc"><tr><td class="sub">AN\xC1LISIS / PLAN DE MANEJO</td></tr><tr><td class="pre">${this.esc(entry.treatment_plan)}</td></tr></table>` : ""}
${entry.additional_notes ? `<table class="hc"><tr><td class="sub">Notas adicionales</td></tr><tr><td class="pre">${this.esc(entry.additional_notes)}</td></tr></table>` : ""}

<table class="hc">
  <tr>
    <td class="lbl" style="width:110px">Responsable:</td>
    <td><strong>${this.esc(entry.professional_name ?? "\u2014")}</strong></td>
    <td class="lbl" style="width:50px">RM:</td>
    <td>\u2014</td>
    <td class="lbl" style="width:160px">V\xE1lido como Firma Electr\xF3nica</td>
  </tr>
</table>

${vs ? `
<table class="hc">
  <tr><td class="hdr" colspan="8">Signos Vitales</td></tr>
  <tr class="center">
    <td class="lbl">PA (mmHg)</td><td class="lbl">FC (lpm)</td><td class="lbl">FR (rpm)</td><td class="lbl">Temp (\xB0C)</td>
    <td class="lbl">SpO\u2082 (%)</td><td class="lbl">Peso (Kg)</td><td class="lbl">Talla (cm)</td><td class="lbl">IMC</td>
  </tr>
  <tr class="center">
    <td>${vs.blood_pressure ?? "\u2014"}</td><td>${vs.heart_rate ?? "\u2014"}</td><td>${vs.respiratory_rate ?? "\u2014"}</td><td>${vs.temperature ?? "\u2014"}</td>
    <td>${vs.oxygen_saturation ?? "\u2014"}</td><td>${vs.weight ?? "\u2014"}</td><td>${vs.height ?? "\u2014"}</td><td>${vs.bmi ?? "\u2014"}</td>
  </tr>
</table>` : ""}

${entry.diagnosis_code || entry.diagnosis_description ? `
<table class="hc">
  <tr><td class="hdr" colspan="4">Diagn\xF3sticos</td></tr>
  <tr><td class="lbl">Fecha</td><td class="lbl">C\xF3digo CIE-10</td><td class="lbl">Descripci\xF3n</td><td class="lbl">Tipo</td></tr>
  <tr><td>${fecha}</td><td>${entry.diagnosis_code ?? "\u2014"}</td><td>${this.esc(entry.diagnosis_description ?? "\u2014")}</td><td>${diagType}</td></tr>
</table>` : ""}

${entry.referral_destination || entry.referral_reason ? `
<table class="hc">
  <tr><td class="hdr" colspan="4">Remisi\xF3n</td></tr>
  <tr><td class="lbl">Destino:</td><td>${this.esc(entry.referral_destination ?? "\u2014")}</td><td class="lbl">Motivo:</td><td>${this.esc(entry.referral_reason ?? "\u2014")}</td></tr>
</table>` : ""}

${entry.prescriptions ? `
<table class="hc">
  <tr><td class="hdr">Prescripciones / F\xF3rmula M\xE9dica</td></tr>
  <tr><td class="pre mono">${this.esc(entry.prescriptions)}</td></tr>
</table>` : ""}`;
  }
  esc(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  entryFormHasData() {
    const f = this.form;
    const vs = this.vitalSigns;
    return !!(f.reason_for_visit?.trim() || f.anamnesis?.trim() || f.physical_exam?.trim() || f.treatment_plan?.trim() || f.prescriptions?.trim() || f.additional_notes?.trim() || f.diagnosis_code?.trim() || f.diagnosis_description?.trim() || f.referral_destination?.trim() || f.referral_reason?.trim() || vs.blood_pressure || vs.heart_rate || vs.respiratory_rate || vs.temperature || vs.oxygen_saturation || vs.weight || vs.height);
  }
  emptyEntry() {
    return {
      clinical_record_id: 0,
      entry_type: "consulta",
      reason_for_visit: "",
      anamnesis: "",
      physical_exam: "",
      diagnosis_code: "",
      diagnosis_description: "",
      diagnosis_type: "impresion_diagnostica",
      treatment_plan: "",
      prescriptions: "",
      additional_notes: "",
      referral_destination: "",
      referral_reason: ""
    };
  }
  emptyVitals() {
    return { blood_pressure: "", heart_rate: null, respiratory_rate: null, temperature: null, oxygen_saturation: null, weight: null, height: null, bmi: null };
  }
};
_ClinicalComponent.\u0275fac = function ClinicalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClinicalComponent)();
};
_ClinicalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClinicalComponent, selectors: [["app-clinical"]], decls: 3, vars: 3, consts: [[1, "modal-backdrop"], [1, "module-header"], [1, "search-row"], [1, "search-box"], [1, "material-icons"], ["type", "text", "placeholder", "Filtrar por nombre o documento...", 3, "ngModelChange", "input", "ngModel"], [1, "card"], [1, "loading"], [1, "spinner"], [1, "empty"], [1, "data-table"], [1, "text-muted"], [1, "btn-primary", "btn-sm", 3, "click"], [1, "detail-actions"], [1, "btn-secondary", 3, "click"], [1, "alert-error"], [1, "hc-doc"], [1, "btn-primary", 3, "click"], [1, "hc-doc-header"], [1, "hc-brand"], [1, "hc-brand-name"], [1, "hc-brand-sub"], [1, "hc-doc-title"], [1, "hc-doc-num"], [1, "hc-doc-contact"], [1, "hc-table"], ["colspan", "4", 1, "hc-hdr"], [1, "hc-lbl"], ["colspan", "3"], [1, "hc-no-record"], [1, "hc-lbl", "hc-alert-lbl"], ["colspan", "3", 1, "hc-alert-val"], [1, "hc-no-entries"], [1, "hc-entry-sep"], [1, "hc-lbl", "hc-w110"], [1, "hc-lbl", "hc-w50"], [1, "hc-lbl", "hc-w150"], [1, "hc-sub"], [1, "hc-pre"], ["colspan", "8", 1, "hc-hdr"], [1, "hc-lbl", "hc-center"], [1, "hc-center"], [1, "hc-hdr"], [1, "hc-pre", "hc-mono"], [1, "modal-backdrop", 3, "click"], [1, "modal", "modal-hc", 3, "click"], [1, "modal-header"], [1, "btn-icon-only", 3, "click"], [1, "modal-body"], [1, "form-patient-banner"], [1, "form-section"], [1, "form-section-title"], [1, "form-grid", "form-grid-2"], [1, "field"], ["name", "entry_type", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "form-grid", "form-grid-4"], ["type", "text", "name", "bp", "placeholder", "120/80", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "hr", "placeholder", "72", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "rr", "placeholder", "18", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", "name", "temp", "placeholder", "36.5", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "spo2", "placeholder", "98", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", "name", "peso", "placeholder", "70", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "talla", "placeholder", "170", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", "name", "bmi", "readonly", "", 3, "ngModelChange", "ngModel"], [1, "form-grid", "form-grid-1"], ["rows", "2", "name", "reason", "placeholder", "Motivo principal de la consulta...", 3, "ngModelChange", "ngModel"], ["rows", "3", "name", "anamnesis", "placeholder", "Historia de la enfermedad actual, antecedentes relevantes...", 3, "ngModelChange", "ngModel"], ["rows", "3", "name", "phys", "placeholder", "Hallazgos al examen f\xEDsico por sistemas...", 3, "ngModelChange", "ngModel"], [1, "form-grid", "form-grid-diag"], ["type", "text", "name", "cie10", "placeholder", "Ej: J06.9", 3, "ngModelChange", "ngModel"], [1, "field", "field-span2"], ["type", "text", "name", "diag_desc", "placeholder", "Ej: IRA no especificada", 3, "ngModelChange", "ngModel"], ["name", "diag_type", 3, "ngModelChange", "ngModel"], ["value", "impresion_diagnostica"], ["value", "confirmado"], ["value", "descartado"], ["rows", "2", "name", "treatment", "placeholder", "Indicaciones, conducta, paracl\xEDnicos solicitados...", 3, "ngModelChange", "ngModel"], ["rows", "3", "name", "presc", "placeholder", "Nombre del medicamento, dosis, frecuencia, v\xEDa, duraci\xF3n...", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "ref_dest", "placeholder", "Especialidad o instituci\xF3n", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "ref_reason", "placeholder", "Raz\xF3n de la remisi\xF3n", 3, "ngModelChange", "ngModel"], ["rows", "2", "name", "notes", "placeholder", "Recomendaciones, fecha pr\xF3xima cita...", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-primary", 3, "click", "disabled"], [1, "confirm-over"], [1, "spinner-sm"], [1, "confirm-over", 3, "click"], [1, "confirm-dialog", 3, "click"], [1, "confirm-sub"], [1, "confirm-actions"], [1, "btn-danger", 3, "click"]], template: function ClinicalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ClinicalComponent_Conditional_0_Template, 9, 2);
    \u0275\u0275conditionalCreate(1, ClinicalComponent_Conditional_1_Template, 9, 4);
    \u0275\u0275conditionalCreate(2, ClinicalComponent_Conditional_2_Template, 138, 25, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.view() === "list" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "detail" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showEntryForm() ? 2 : -1);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, \n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.btn-icon-only[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px !important;\n  font-size: 0.82rem !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.hc-doc[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.hc-doc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 16px 20px 12px;\n  border-bottom: 3px solid #1a3c6e;\n  background: #f8fafc;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.hc-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hc-brand-name[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #1a3c6e;\n  letter-spacing: 0.03em;\n}\n.hc-brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.hc-doc-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #1a3c6e;\n  text-align: center;\n}\n.hc-doc-num[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 2px;\n}\n.hc-doc-contact[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  text-align: right;\n  line-height: 1.5;\n}\n.hc-entry-sep[_ngcontent-%COMP%] {\n  background: #1a3c6e;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 6px 16px;\n}\n.hc-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n  color: #0f172a;\n}\n.hc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.hc-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #c8d5e8;\n  padding: 6px 10px;\n  vertical-align: middle;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-hdr[_ngcontent-%COMP%] {\n  background: #1a3c6e;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  text-align: left;\n  padding: 7px 12px;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-lbl[_ngcontent-%COMP%] {\n  background: #dce8f4;\n  color: #1a3c6e;\n  font-weight: 700;\n  font-size: 0.78rem;\n  white-space: nowrap;\n  width: 160px;\n  min-width: 100px;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-sub[_ngcontent-%COMP%] {\n  background: #eaf0f8;\n  color: #1a3c6e;\n  font-weight: 700;\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 5px 10px;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  line-height: 1.6;\n  padding: 8px 12px;\n  font-size: 0.85rem;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  background: #f8fafc;\n  font-size: 0.82rem;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-alert-lbl[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-alert-val[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 600;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-w50[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-w110[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.hc-table[_ngcontent-%COMP%]   .hc-w150[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.hc-no-record[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 40px 20px;\n  color: #64748b;\n  text-align: center;\n}\n.hc-no-record[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #2563eb;\n}\n.hc-no-record[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n}\n.hc-no-entries[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 0.875rem;\n  color: #64748b;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n}\n.form-patient-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #1e40af;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.form-patient-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.form-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.form-section-title[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #2563eb;\n  border-bottom: 1px solid #dbeafe;\n  padding-bottom: 5px;\n  margin-bottom: 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.form-grid-1[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.form-grid-2[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 560px) {\n  .form-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-grid-4[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n}\n@media (max-width: 600px) {\n  .form-grid-4[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.form-grid-diag[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 2fr 1fr;\n}\n@media (max-width: 600px) {\n  .form-grid-diag[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-span2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.modal-hc[_ngcontent-%COMP%] {\n  max-width: 820px;\n}\n.confirm-over[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 1100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 24px 28px;\n  max-width: 360px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);\n}\n.confirm-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.confirm-dialog[_ngcontent-%COMP%]   .confirm-sub[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin-bottom: 18px;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  padding: 8px 18px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n/*# sourceMappingURL=clinical.css.map */'] });
var ClinicalComponent = _ClinicalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClinicalComponent, [{
    type: Component,
    args: [{ selector: "app-clinical", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA: LISTA \u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (view() === 'list') {

  <div class="module-header">
    <div class="search-row">
      <div class="search-box">
        <span class="material-icons">search</span>
        <input type="text" [(ngModel)]="listSearch" placeholder="Filtrar por nombre o documento..."
               (input)="loadList()">
      </div>
    </div>
  </div>

  @if (listLoading()) {
    <div class="card"><div class="loading"><div class="spinner"></div><p>Cargando...</p></div></div>
  } @else if (recordList().length === 0) {
    <div class="card">
      <div class="empty">
        <span class="material-icons">folder_off</span>
        <p>{{ listSearch ? 'Sin resultados para "' + listSearch + '".' : 'No hay historias cl\xEDnicas registradas a\xFAn.' }}</p>
      </div>
    </div>
  } @else {
    <div class="card">
      <table class="data-table">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Documento</th>
            <th>N\xB0 HC</th>
            <th>Entradas</th>
            <th>Apertura</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (item of recordList(); track item.id) {
            <tr>
              <td><strong>{{ item.patient_name }}</strong></td>
              <td class="text-muted">{{ item.patient_document_type }} {{ item.patient_document }}</td>
              <td>{{ item.record_number }}</td>
              <td>{{ item.total_entries }}</td>
              <td>{{ item.opened_at | date:'dd/MM/yyyy' }}</td>
              <td>
                <button class="btn-primary btn-sm" (click)="selectFromList(item)">
                  <span class="material-icons">folder_open</span> Ver HC
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
}

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA: DETALLE \u2550\u2550\u2550\u2550\u2550 -->
@if (view() === 'detail') {

  <div class="detail-actions">
    <button class="btn-secondary" (click)="backToList()">
      <span class="material-icons">arrow_back</span> Volver a la lista
    </button>
    @if (record()) {
      <button class="btn-primary" (click)="openEntryForm()">
        <span class="material-icons">add</span> Nueva entrada
      </button>
      <button class="btn-secondary" (click)="exportPDF()">
        <span class="material-icons">picture_as_pdf</span> Exportar / Imprimir
      </button>
    }
  </div>

  @if (searchError()) {
    <div class="alert-error"><span class="material-icons">error_outline</span>{{ searchError() }}</div>
  }

  @if (loading()) {
    <div class="card"><div class="loading"><div class="spinner"></div><p>Cargando historia cl\xEDnica...</p></div></div>
  }

  @if (patientInfo(); as patient) {
    <div class="hc-doc">

      <!-- \u2500\u2500 Encabezado del documento \u2500\u2500 -->
      <div class="hc-doc-header">
        <div class="hc-brand">
          <span class="hc-brand-name">CUIDANDO DE TI</span>
          <span class="hc-brand-sub">CyE IPS SAS</span>
        </div>
        <div class="hc-doc-title">
          HISTORIA CL\xCDNICA
          @if (record(); as rec) {
            <div class="hc-doc-num">N\xB0 {{ rec.record_number }}</div>
          }
        </div>
        <div class="hc-doc-contact">
          Cali, Valle del Cauca<br>NIT: 900000000
        </div>
      </div>

      <!-- \u2500\u2500 DATOS GENERALES \u2500\u2500 -->
      <table class="hc-table">
        <thead>
          <tr><th class="hc-hdr" colspan="4">DATOS GENERALES</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="hc-lbl">Paciente:</td>
            <td colspan="3"><strong>{{ patient.first_name }} {{ patient.last_name }}</strong></td>
          </tr>
          <tr>
            <td class="hc-lbl">Doc. Identificaci\xF3n:</td>
            <td>{{ patient.document_type }} {{ patient.document_number }}</td>
            <td class="hc-lbl">N\xB0 Historia Cl\xEDnica:</td>
            <td>{{ record()?.record_number ?? '\u2014' }}</td>
          </tr>
          <tr>
            <td class="hc-lbl">Fecha Nacimiento:</td>
            <td>{{ patient.birth_date | date:'dd/MM/yyyy' }}</td>
            <td class="hc-lbl">Edad:</td>
            <td><strong>{{ calcAge(patient.birth_date) }} a\xF1os {{ calcMonths(patient.birth_date) }} meses</strong></td>
          </tr>
          <tr>
            <td class="hc-lbl">Sexo Biol\xF3gico:</td>
            <td>{{ patient.gender === 'M' ? 'Masculino' : patient.gender === 'F' ? 'Femenino' : 'Indeterminado' }}</td>
            <td class="hc-lbl">Grupo Sangu\xEDneo:</td>
            <td>{{ patient.blood_type ?? '\u2014' }}</td>
          </tr>
          <tr>
            <td class="hc-lbl">Aseguradora (EPS):</td>
            <td>{{ patient.eps ?? '\u2014' }}</td>
            <td class="hc-lbl">R\xE9gimen:</td>
            <td>{{ patient.regime ?? '\u2014' }}</td>
          </tr>
          <tr>
            <td class="hc-lbl">Direcci\xF3n:</td>
            <td>{{ patient.address ?? '\u2014' }}{{ patient.city ? ', ' + patient.city : '' }}</td>
            <td class="hc-lbl">Tel\xE9fono:</td>
            <td>{{ patient.phone ?? '\u2014' }}</td>
          </tr>
          @if (patient.allergies) {
            <tr>
              <td class="hc-lbl hc-alert-lbl">\u26A0 Alergias:</td>
              <td colspan="3" class="hc-alert-val">{{ patient.allergies }}</td>
            </tr>
          }
          @if (patient.emergency_contact_name) {
            <tr>
              <td class="hc-lbl">Contacto emergencia:</td>
              <td colspan="3">{{ patient.emergency_contact_name }}{{ patient.emergency_contact_phone ? ' \u2014 ' + patient.emergency_contact_phone : '' }}{{ patient.emergency_contact_relationship ? ' (' + patient.emergency_contact_relationship + ')' : '' }}</td>
            </tr>
          }
        </tbody>
      </table>

      <!-- \u2500\u2500 Sin HC a\xFAn \u2500\u2500 -->
      @if (notFound()) {
        <div class="hc-no-record">
          <span class="material-icons">note_add</span>
          <p>Este paciente no tiene historia cl\xEDnica abierta.</p>
          <button class="btn-primary" (click)="openRecord()">
            <span class="material-icons">folder_open</span> Abrir historia cl\xEDnica
          </button>
        </div>
      }

      <!-- \u2500\u2500 Entradas \u2500\u2500 -->
      @if (record(); as rec) {
        @if (rec.entries.length === 0) {
          <div class="hc-no-entries">
            Sin entradas. Presiona <strong>Nueva entrada</strong> para comenzar la atenci\xF3n.
          </div>
        }

        @for (entry of rec.entries; track entry.id; let idx = $index) {

          <div class="hc-entry-sep">
            Entrada {{ idx + 1 }} \u2014 {{ entryTypeLabel(entry.entry_type) }} \u2014 {{ entry.entry_date | date:'dd/MM/yyyy' }}
          </div>

          <!-- Atenci\xF3n cl\xEDnica -->
          <table class="hc-table">
            <thead>
              <tr><th class="hc-hdr" colspan="4">ATENCI\xD3N CL\xCDNICA</th></tr>
            </thead>
            <tbody>
              <tr>
                <td class="hc-lbl">Tipo de atenci\xF3n:</td>
                <td>{{ entryTypeLabel(entry.entry_type) }}</td>
                <td class="hc-lbl">Profesional:</td>
                <td>{{ entry.professional_name ?? '\u2014' }}</td>
              </tr>
              <tr>
                <td class="hc-lbl">Fecha:</td>
                <td>{{ entry.entry_date | date:'dd/MM/yyyy' }}</td>
                <td class="hc-lbl">Hora:</td>
                <td>{{ entry.entry_date | date:'HH:mm' }}</td>
              </tr>
            </tbody>
          </table>

          @if (entry.reason_for_visit) {
            <table class="hc-table">
              <tbody>
                <tr><td class="hc-sub">Motivo de consulta</td></tr>
                <tr><td class="hc-pre">{{ entry.reason_for_visit }}</td></tr>
              </tbody>
            </table>
          }
          @if (entry.anamnesis) {
            <table class="hc-table">
              <tbody>
                <tr><td class="hc-sub">Anamnesis / Historia de la enfermedad actual</td></tr>
                <tr><td class="hc-pre">{{ entry.anamnesis }}</td></tr>
              </tbody>
            </table>
          }
          @if (entry.physical_exam) {
            <table class="hc-table">
              <tbody>
                <tr><td class="hc-sub">OBJETIVO \u2014 Examen f\xEDsico por sistemas</td></tr>
                <tr><td class="hc-pre">{{ entry.physical_exam }}</td></tr>
              </tbody>
            </table>
          }
          @if (entry.treatment_plan) {
            <table class="hc-table">
              <tbody>
                <tr><td class="hc-sub">AN\xC1LISIS / PLAN DE MANEJO</td></tr>
                <tr><td class="hc-pre">{{ entry.treatment_plan }}</td></tr>
              </tbody>
            </table>
          }
          @if (entry.additional_notes) {
            <table class="hc-table">
              <tbody>
                <tr><td class="hc-sub">Notas adicionales</td></tr>
                <tr><td class="hc-pre">{{ entry.additional_notes }}</td></tr>
              </tbody>
            </table>
          }

          <!-- Responsable -->
          <table class="hc-table">
            <tbody>
              <tr>
                <td class="hc-lbl hc-w110">Responsable:</td>
                <td><strong>{{ entry.professional_name ?? '\u2014' }}</strong></td>
                <td class="hc-lbl hc-w50">RM:</td>
                <td>\u2014</td>
                <td class="hc-lbl hc-w150">V\xE1lido como Firma Electr\xF3nica</td>
              </tr>
            </tbody>
          </table>

          <!-- Signos Vitales -->
          @if (parseVitals(entry); as vs) {
            <table class="hc-table">
              <thead>
                <tr><th class="hc-hdr" colspan="8">Signos Vitales</th></tr>
                <tr>
                  <td class="hc-lbl hc-center">PA (mmHg)</td>
                  <td class="hc-lbl hc-center">FC (lpm)</td>
                  <td class="hc-lbl hc-center">FR (rpm)</td>
                  <td class="hc-lbl hc-center">Temp (\xB0C)</td>
                  <td class="hc-lbl hc-center">SpO\u2082 (%)</td>
                  <td class="hc-lbl hc-center">Peso (Kg)</td>
                  <td class="hc-lbl hc-center">Talla (cm)</td>
                  <td class="hc-lbl hc-center">IMC</td>
                </tr>
              </thead>
              <tbody>
                <tr class="hc-center">
                  <td>{{ vs.blood_pressure || '\u2014' }}</td>
                  <td>{{ vs.heart_rate || '\u2014' }}</td>
                  <td>{{ vs.respiratory_rate || '\u2014' }}</td>
                  <td>{{ vs.temperature || '\u2014' }}</td>
                  <td>{{ vs.oxygen_saturation || '\u2014' }}</td>
                  <td>{{ vs.weight || '\u2014' }}</td>
                  <td>{{ vs.height || '\u2014' }}</td>
                  <td>{{ vs.bmi || '\u2014' }}</td>
                </tr>
              </tbody>
            </table>
          }

          <!-- Diagn\xF3sticos -->
          @if (entry.diagnosis_code || entry.diagnosis_description) {
            <table class="hc-table">
              <thead>
                <tr><th class="hc-hdr" colspan="4">Diagn\xF3sticos</th></tr>
                <tr>
                  <td class="hc-lbl">Fecha</td>
                  <td class="hc-lbl">C\xF3digo CIE-10</td>
                  <td class="hc-lbl">Descripci\xF3n</td>
                  <td class="hc-lbl">Tipo</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ entry.entry_date | date:'dd/MM/yyyy' }}</td>
                  <td><strong>{{ entry.diagnosis_code ?? '\u2014' }}</strong></td>
                  <td>{{ entry.diagnosis_description ?? '\u2014' }}</td>
                  <td>{{ diagnosisTypeLabel(entry.diagnosis_type) }}</td>
                </tr>
              </tbody>
            </table>
          }

          <!-- Remisi\xF3n -->
          @if (entry.referral_destination || entry.referral_reason) {
            <table class="hc-table">
              <thead>
                <tr><th class="hc-hdr" colspan="4">Remisi\xF3n</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td class="hc-lbl">Destino:</td>
                  <td>{{ entry.referral_destination ?? '\u2014' }}</td>
                  <td class="hc-lbl">Motivo:</td>
                  <td>{{ entry.referral_reason ?? '\u2014' }}</td>
                </tr>
              </tbody>
            </table>
          }

          <!-- Prescripciones -->
          @if (entry.prescriptions) {
            <table class="hc-table">
              <thead>
                <tr><th class="hc-hdr">Prescripciones / F\xF3rmula M\xE9dica</th></tr>
              </thead>
              <tbody>
                <tr><td class="hc-pre hc-mono">{{ entry.prescriptions }}</td></tr>
              </tbody>
            </table>
          }

        } <!-- @for entries -->
      } <!-- @if record -->
    </div> <!-- .hc-doc -->
  } <!-- @if patientInfo -->
} <!-- @if view === detail -->


<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL: Nueva entrada cl\xEDnica \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showEntryForm()) {
  <div class="modal-backdrop" (click)="closeEntryForm()">
    <div class="modal modal-hc" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>Nueva Entrada Cl\xEDnica</h3>
        <button class="btn-icon-only" (click)="closeEntryForm()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="modal-body">
        @if (formError()) {
          <div class="alert-error"><span class="material-icons">error_outline</span>{{ formError() }}</div>
        }

        @if (patientInfo(); as p) {
          <div class="form-patient-banner">
            <span class="material-icons">person</span>
            <strong>{{ p.first_name }} {{ p.last_name }}</strong>
            &nbsp;\xB7&nbsp; {{ p.document_type }} {{ p.document_number }}
            &nbsp;\xB7&nbsp; {{ calcAge(p.birth_date) }} a\xF1os
            @if (p.eps) { &nbsp;\xB7&nbsp; {{ p.eps }} }
          </div>
        }

        <!-- Tipo de atenci\xF3n -->
        <div class="form-section">
          <div class="form-section-title">Tipo de Atenci\xF3n</div>
          <div class="form-grid form-grid-2">
            <div class="field">
              <label>Tipo de entrada *</label>
              <select [(ngModel)]="form.entry_type" name="entry_type">
                @for (t of entryTypes; track t.value) {
                  <option [value]="t.value">{{ t.label }}</option>
                }
              </select>
            </div>
          </div>
        </div>

        <!-- Signos vitales -->
        <div class="form-section">
          <div class="form-section-title">Signos Vitales</div>
          <div class="form-grid form-grid-4">
            <div class="field">
              <label>PA (mmHg)</label>
              <input type="text" [(ngModel)]="vitalSigns.blood_pressure" name="bp" placeholder="120/80">
            </div>
            <div class="field">
              <label>FC (lpm)</label>
              <input type="number" [(ngModel)]="vitalSigns.heart_rate" name="hr" placeholder="72">
            </div>
            <div class="field">
              <label>FR (rpm)</label>
              <input type="number" [(ngModel)]="vitalSigns.respiratory_rate" name="rr" placeholder="18">
            </div>
            <div class="field">
              <label>Temperatura (\xB0C)</label>
              <input type="number" step="0.1" [(ngModel)]="vitalSigns.temperature" name="temp" placeholder="36.5">
            </div>
            <div class="field">
              <label>SpO\u2082 (%)</label>
              <input type="number" [(ngModel)]="vitalSigns.oxygen_saturation" name="spo2" placeholder="98">
            </div>
            <div class="field">
              <label>Peso (kg)</label>
              <input type="number" step="0.1" [(ngModel)]="vitalSigns.weight" name="peso"
                     (ngModelChange)="calcBMI()" placeholder="70">
            </div>
            <div class="field">
              <label>Talla (cm)</label>
              <input type="number" [(ngModel)]="vitalSigns.height" name="talla"
                     (ngModelChange)="calcBMI()" placeholder="170">
            </div>
            <div class="field">
              <label>IMC (auto)</label>
              <input type="number" step="0.1" [(ngModel)]="vitalSigns.bmi" name="bmi" readonly>
            </div>
          </div>
        </div>

        <!-- Motivo y anamnesis -->
        <div class="form-section">
          <div class="form-section-title">Motivo de Consulta y Anamnesis</div>
          <div class="form-grid form-grid-1">
            <div class="field">
              <label>Motivo de consulta *</label>
              <textarea [(ngModel)]="form.reason_for_visit" rows="2" name="reason"
                        placeholder="Motivo principal de la consulta..."></textarea>
            </div>
            <div class="field">
              <label>Anamnesis</label>
              <textarea [(ngModel)]="form.anamnesis" rows="3" name="anamnesis"
                        placeholder="Historia de la enfermedad actual, antecedentes relevantes..."></textarea>
            </div>
          </div>
        </div>

        <!-- Examen f\xEDsico -->
        <div class="form-section">
          <div class="form-section-title">OBJETIVO \u2014 Examen F\xEDsico</div>
          <div class="field">
            <label>Hallazgos por sistemas</label>
            <textarea [(ngModel)]="form.physical_exam" rows="3" name="phys"
                      placeholder="Hallazgos al examen f\xEDsico por sistemas..."></textarea>
          </div>
        </div>

        <!-- Diagn\xF3stico -->
        <div class="form-section">
          <div class="form-section-title">Diagn\xF3stico (CIE-10)</div>
          <div class="form-grid form-grid-diag">
            <div class="field">
              <label>C\xF3digo CIE-10</label>
              <input type="text" [(ngModel)]="form.diagnosis_code" name="cie10" placeholder="Ej: J06.9">
            </div>
            <div class="field field-span2">
              <label>Descripci\xF3n diagn\xF3stica</label>
              <input type="text" [(ngModel)]="form.diagnosis_description" name="diag_desc"
                     placeholder="Ej: IRA no especificada">
            </div>
            <div class="field">
              <label>Tipo de diagn\xF3stico</label>
              <select [(ngModel)]="form.diagnosis_type" name="diag_type">
                <option value="impresion_diagnostica">Impresi\xF3n diagn\xF3stica</option>
                <option value="confirmado">Confirmado</option>
                <option value="descartado">Descartado</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Plan de manejo -->
        <div class="form-section">
          <div class="form-section-title">AN\xC1LISIS / Plan de Manejo</div>
          <div class="field">
            <label>Tratamiento / Conducta a seguir</label>
            <textarea [(ngModel)]="form.treatment_plan" rows="2" name="treatment"
                      placeholder="Indicaciones, conducta, paracl\xEDnicos solicitados..."></textarea>
          </div>
        </div>

        <!-- F\xF3rmula m\xE9dica -->
        <div class="form-section">
          <div class="form-section-title">Prescripciones / F\xF3rmula M\xE9dica</div>
          <div class="field">
            <label>Medicamentos</label>
            <textarea [(ngModel)]="form.prescriptions" rows="3" name="presc"
                      placeholder="Nombre del medicamento, dosis, frecuencia, v\xEDa, duraci\xF3n..."></textarea>
          </div>
        </div>

        <!-- Remisi\xF3n -->
        <div class="form-section">
          <div class="form-section-title">Remisi\xF3n (si aplica)</div>
          <div class="form-grid form-grid-2">
            <div class="field">
              <label>Destino de remisi\xF3n</label>
              <input type="text" [(ngModel)]="form.referral_destination" name="ref_dest"
                     placeholder="Especialidad o instituci\xF3n">
            </div>
            <div class="field">
              <label>Motivo de remisi\xF3n</label>
              <input type="text" [(ngModel)]="form.referral_reason" name="ref_reason"
                     placeholder="Raz\xF3n de la remisi\xF3n">
            </div>
          </div>
        </div>

        <!-- Notas adicionales -->
        <div class="form-section">
          <div class="form-section-title">Notas Adicionales</div>
          <div class="field">
            <label>Observaciones / Pr\xF3xima cita</label>
            <textarea [(ngModel)]="form.additional_notes" rows="2" name="notes"
                      placeholder="Recomendaciones, fecha pr\xF3xima cita..."></textarea>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeEntryForm()">Cancelar</button>
        <button class="btn-primary" (click)="saveEntry()" [disabled]="saving()">
          @if (saving()) { <span class="spinner-sm"></span> Guardando... }
          @else { <span class="material-icons">save</span> Guardar entrada }
        </button>
      </div>

      @if (showEntryCloseConfirm()) {
        <div class="confirm-over" (click)="showEntryCloseConfirm.set(false)">
          <div class="confirm-dialog" (click)="$event.stopPropagation()">
            <p><strong>\xBFSalir sin guardar?</strong></p>
            <p class="confirm-sub">Perder\xE1s los datos ingresados en esta entrada.</p>
            <div class="confirm-actions">
              <button class="btn-secondary" (click)="showEntryCloseConfirm.set(false)">Seguir editando</button>
              <button class="btn-danger" (click)="confirmCloseEntry()">Salir sin guardar</button>
            </div>
          </div>
        </div>
      }
    </div>
  </div>
}
`, styles: ['/* src/app/admin/clinical/clinical.scss */\n.module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.search-box .btn-icon {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box .btn-icon:hover {\n  background: #1d4ed8;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary,\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary:hover,\n.btn-danger:hover {\n  background: #f8fafc;\n}\n.btn-danger {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger:hover {\n  background: #fee2e2;\n}\n.btn-icon-only {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only .material-icons {\n  font-size: 20px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table tbody tr:hover {\n  background: #fafbfc;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty p {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full {\n  grid-column: 1/-1;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field input,\n.field select,\n.field textarea {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field input::placeholder,\n.field select::placeholder,\n.field textarea::placeholder {\n  color: #94a3b8;\n}\n.field textarea {\n  resize: vertical;\n}\n.field select {\n  cursor: pointer;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.btn-sm {\n  padding: 6px 12px !important;\n  font-size: 0.82rem !important;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.hc-doc {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.hc-doc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 16px 20px 12px;\n  border-bottom: 3px solid #1a3c6e;\n  background: #f8fafc;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.hc-brand {\n  display: flex;\n  flex-direction: column;\n}\n.hc-brand-name {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #1a3c6e;\n  letter-spacing: 0.03em;\n}\n.hc-brand-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.hc-doc-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #1a3c6e;\n  text-align: center;\n}\n.hc-doc-num {\n  font-size: 0.78rem;\n  color: #64748b;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 2px;\n}\n.hc-doc-contact {\n  font-size: 0.78rem;\n  color: #64748b;\n  text-align: right;\n  line-height: 1.5;\n}\n.hc-entry-sep {\n  background: #1a3c6e;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 6px 16px;\n}\n.hc-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n  color: #0f172a;\n}\n.hc-table td,\n.hc-table th {\n  border: 1px solid #c8d5e8;\n  padding: 6px 10px;\n  vertical-align: middle;\n}\n.hc-table .hc-hdr {\n  background: #1a3c6e;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  text-align: left;\n  padding: 7px 12px;\n}\n.hc-table .hc-lbl {\n  background: #dce8f4;\n  color: #1a3c6e;\n  font-weight: 700;\n  font-size: 0.78rem;\n  white-space: nowrap;\n  width: 160px;\n  min-width: 100px;\n}\n.hc-table .hc-sub {\n  background: #eaf0f8;\n  color: #1a3c6e;\n  font-weight: 700;\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 5px 10px;\n}\n.hc-table .hc-pre {\n  white-space: pre-wrap;\n  line-height: 1.6;\n  padding: 8px 12px;\n  font-size: 0.85rem;\n}\n.hc-table .hc-mono {\n  font-family: "Courier New", monospace;\n  background: #f8fafc;\n  font-size: 0.82rem;\n}\n.hc-table .hc-center {\n  text-align: center;\n}\n.hc-table .hc-alert-lbl {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.hc-table .hc-alert-val {\n  color: #b91c1c;\n  font-weight: 600;\n}\n.hc-table .hc-w50 {\n  width: 50px;\n}\n.hc-table .hc-w110 {\n  width: 110px;\n}\n.hc-table .hc-w150 {\n  width: 150px;\n}\n.hc-no-record {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 40px 20px;\n  color: #64748b;\n  text-align: center;\n}\n.hc-no-record .material-icons {\n  font-size: 48px;\n  color: #2563eb;\n}\n.hc-no-record p {\n  margin: 0;\n  font-size: 0.9rem;\n}\n.hc-no-entries {\n  padding: 16px 20px;\n  font-size: 0.875rem;\n  color: #64748b;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n}\n.form-patient-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #1e40af;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.form-patient-banner .material-icons {\n  font-size: 18px;\n}\n.form-section {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.form-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.form-section-title {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #2563eb;\n  border-bottom: 1px solid #dbeafe;\n  padding-bottom: 5px;\n  margin-bottom: 12px;\n}\n.form-grid {\n  display: grid;\n  gap: 12px;\n}\n.form-grid-1 {\n  grid-template-columns: 1fr;\n}\n.form-grid-2 {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 560px) {\n  .form-grid-2 {\n    grid-template-columns: 1fr;\n  }\n}\n.form-grid-4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n@media (max-width: 600px) {\n  .form-grid-4 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.form-grid-diag {\n  grid-template-columns: 1fr 2fr 1fr;\n}\n@media (max-width: 600px) {\n  .form-grid-diag {\n    grid-template-columns: 1fr;\n  }\n}\n.field-span2 {\n  grid-column: span 2;\n}\n.modal-hc {\n  max-width: 820px;\n}\n.confirm-over {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 1100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.confirm-dialog {\n  background: #fff;\n  border-radius: 10px;\n  padding: 24px 28px;\n  max-width: 360px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);\n}\n.confirm-dialog p {\n  font-size: 0.95rem;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.confirm-dialog .confirm-sub {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin-bottom: 18px;\n}\n.confirm-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  padding: 8px 18px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-danger:hover {\n  background: #b91c1c;\n}\n/*# sourceMappingURL=clinical.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClinicalComponent, { className: "ClinicalComponent", filePath: "src/app/admin/clinical/clinical.ts", lineNumber: 17 });
})();
export {
  ClinicalComponent
};
//# sourceMappingURL=chunk-REFHRYLV.js.map
