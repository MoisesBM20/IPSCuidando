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
  Router,
  RouterLink
} from "./chunk-QOYWAKCN.js";
import {
  CommonModule,
  Component,
  __objRest,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QNZMPU6U.js";

// src/app/pages/registro/registro.ts
var _forTrack0 = ($index, $item) => $item.value;
function RegistroComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 27);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg(), " ");
  }
}
function RegistroComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dt_r2 = ctx.$implicit;
    \u0275\u0275property("value", dt_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dt_r2.label);
  }
}
function RegistroComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    \u0275\u0275property("value", g_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r3.label);
  }
}
function RegistroComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bt_r4 = ctx.$implicit;
    \u0275\u0275property("value", bt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bt_r4.label);
  }
}
function RegistroComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("value", r_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5);
  }
}
function RegistroComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
    \u0275\u0275text(1, " Creando cuenta... ");
  }
}
function RegistroComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Crear mi cuenta ");
  }
}
var _RegistroComponent = class _RegistroComponent {
  constructor() {
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.errorMsg = signal("", ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
    this.step = signal("form", ...ngDevMode ? [{ debugName: "step" }] : []);
    this.form = {
      full_name: "",
      email: "",
      password: "",
      password_confirm: "",
      document_type: "CC",
      document_number: "",
      birth_date: "",
      gender: "M",
      blood_type: "UNKNOWN",
      phone: "",
      address: "",
      city: "Cali",
      eps: "",
      regime: ""
    };
    this.documentTypes = [
      { value: "CC", label: "C\xE9dula de ciudadan\xEDa" },
      { value: "TI", label: "Tarjeta de identidad" },
      { value: "CE", label: "C\xE9dula de extranjer\xEDa" },
      { value: "PA", label: "Pasaporte" }
    ];
    this.genders = [
      { value: "M", label: "Masculino" },
      { value: "F", label: "Femenino" },
      { value: "I", label: "Indeterminado" }
    ];
    this.bloodTypes = [
      { value: "A_POS", label: "A+" },
      { value: "A_NEG", label: "A-" },
      { value: "B_POS", label: "B+" },
      { value: "B_NEG", label: "B-" },
      { value: "AB_POS", label: "AB+" },
      { value: "AB_NEG", label: "AB-" },
      { value: "O_POS", label: "O+" },
      { value: "O_NEG", label: "O-" },
      { value: "UNKNOWN", label: "Desconocido" }
    ];
    this.regimes = ["Contributivo", "Subsidiado", "Vinculado", "Excepci\xF3n"];
  }
  onSubmit() {
    const f = this.form;
    if (!f.full_name || !f.email || !f.password || !f.document_number || !f.birth_date || !f.phone || !f.address || !f.city || !f.eps || !f.regime) {
      this.errorMsg.set("Completa todos los campos obligatorios.");
      return;
    }
    if (this.form.password !== this.form.password_confirm) {
      this.errorMsg.set("Las contrase\xF1as no coinciden.");
      return;
    }
    if (this.form.password.length < 6) {
      this.errorMsg.set("La contrase\xF1a debe tener al menos 6 caracteres.");
      return;
    }
    this.loading.set(true);
    this.errorMsg.set("");
    const _a = this.form, { password_confirm } = _a, body = __objRest(_a, ["password_confirm"]);
    this.api.registerPatient(body).subscribe({
      next: (res) => {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("role", res.role);
        this.auth.fetchMe().subscribe(() => {
          this.router.navigate(["/portal"]);
        });
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMsg.set(err.error?.detail ?? "Error al registrarse. Intenta de nuevo.");
      }
    });
  }
};
_RegistroComponent.\u0275fac = function RegistroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegistroComponent)();
};
_RegistroComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistroComponent, selectors: [["app-registro"]], decls: 83, vars: 17, consts: [[1, "registro-page"], [1, "registro-card"], [1, "registro-header"], ["src", "assets/images/global/logo2.png", "alt", "Logo IPS", 1, "logo"], [1, "alert-error"], [1, "form-grid"], [1, "field", "field-full"], ["type", "text", "name", "full_name", "placeholder", "Nombres y apellidos", 3, "ngModelChange", "ngModel"], [1, "field"], ["name", "doc_type", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "name", "doc_num", "placeholder", "Ej: 1012345678", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "birth_date", 3, "ngModelChange", "ngModel"], ["name", "gender", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "correo@ejemplo.com", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "M\xEDnimo 6 caracteres", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password_confirm", "placeholder", "Repite la contrase\xF1a", 3, "ngModelChange", "ngModel"], ["name", "blood_type", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "Ej: 3001234567", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "eps", "placeholder", "Ej: Sura, Nueva EPS", 3, "ngModelChange", "ngModel"], ["name", "regime", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "text", "name", "city", "placeholder", "Ej: Cali", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "address", "placeholder", "Direcci\xF3n de residencia", 3, "ngModelChange", "ngModel"], [1, "btn-submit", 3, "click", "disabled"], [1, "login-link"], ["routerLink", "/admin/login"], [1, "material-icons"], [1, "spinner"]], template: function RegistroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Crear cuenta de paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Reg\xEDstrate para agendar tus citas en l\xEDnea");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, RegistroComponent_Conditional_8_Template, 4, 1, "div", 4);
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "label");
    \u0275\u0275text(12, "Nombre completo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.full_name, $event) || (ctx.form.full_name = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "label");
    \u0275\u0275text(16, "Tipo de documento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.document_type, $event) || (ctx.form.document_type = $event);
      return $event;
    });
    \u0275\u0275repeaterCreate(18, RegistroComponent_For_19_Template, 2, 2, "option", 10, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 8)(21, "label");
    \u0275\u0275text(22, "N\xFAmero de documento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.document_number, $event) || (ctx.form.document_number = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 8)(25, "label");
    \u0275\u0275text(26, "Fecha de nacimiento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.birth_date, $event) || (ctx.form.birth_date = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label");
    \u0275\u0275text(30, "Sexo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.gender, $event) || (ctx.form.gender = $event);
      return $event;
    });
    \u0275\u0275repeaterCreate(32, RegistroComponent_For_33_Template, 2, 2, "option", 10, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 6)(35, "label");
    \u0275\u0275text(36, "Correo electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 8)(39, "label");
    \u0275\u0275text(40, "Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 8)(43, "label");
    \u0275\u0275text(44, "Confirmar contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.password_confirm, $event) || (ctx.form.password_confirm = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 8)(47, "label");
    \u0275\u0275text(48, "Grupo sangu\xEDneo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.blood_type, $event) || (ctx.form.blood_type = $event);
      return $event;
    });
    \u0275\u0275repeaterCreate(50, RegistroComponent_For_51_Template, 2, 2, "option", 10, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 8)(53, "label");
    \u0275\u0275text(54, "Tel\xE9fono *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 8)(57, "label");
    \u0275\u0275text(58, "EPS / Aseguradora *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.eps, $event) || (ctx.form.eps = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 8)(61, "label");
    \u0275\u0275text(62, "R\xE9gimen *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_select_ngModelChange_63_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.regime, $event) || (ctx.form.regime = $event);
      return $event;
    });
    \u0275\u0275elementStart(64, "option", 21);
    \u0275\u0275text(65, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(66, RegistroComponent_For_67_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 8)(69, "label");
    \u0275\u0275text(70, "Ciudad *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.city, $event) || (ctx.form.city = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 6)(73, "label");
    \u0275\u0275text(74, "Direcci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.address, $event) || (ctx.form.address = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "button", 24);
    \u0275\u0275listener("click", function RegistroComponent_Template_button_click_76_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275conditionalCreate(77, RegistroComponent_Conditional_77_Template, 2, 0)(78, RegistroComponent_Conditional_78_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 25);
    \u0275\u0275text(80, " \xBFYa tienes cuenta? ");
    \u0275\u0275elementStart(81, "a", 26);
    \u0275\u0275text(82, "Iniciar sesi\xF3n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.errorMsg() ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.full_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.document_type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.documentTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.document_number);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.birth_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.gender);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.genders);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.password_confirm);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.blood_type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.bloodTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.eps);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.regime);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.regimes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.address);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading() ? 77 : 78);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n.registro-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f1f5f9;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n}\n.registro-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n  padding: 36px;\n}\n.registro-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.registro-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-bottom: 12px;\n}\n.registro-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #0f2644;\n  margin: 0 0 6px;\n}\n.registro-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 20px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 560px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  background: #0f2644;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: background 0.15s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d3a5c;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=registro.css.map */'] });
var RegistroComponent = _RegistroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistroComponent, [{
    type: Component,
    args: [{ selector: "app-registro", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: '<div class="registro-page">\n  <div class="registro-card">\n    <div class="registro-header">\n      <img src="assets/images/global/logo2.png" alt="Logo IPS" class="logo">\n      <h1>Crear cuenta de paciente</h1>\n      <p>Reg\xEDstrate para agendar tus citas en l\xEDnea</p>\n    </div>\n\n    @if (errorMsg()) {\n      <div class="alert-error">\n        <span class="material-icons">error_outline</span> {{ errorMsg() }}\n      </div>\n    }\n\n    <div class="form-grid">\n      <div class="field field-full">\n        <label>Nombre completo *</label>\n        <input type="text" [(ngModel)]="form.full_name" name="full_name" placeholder="Nombres y apellidos">\n      </div>\n      <div class="field">\n        <label>Tipo de documento *</label>\n        <select [(ngModel)]="form.document_type" name="doc_type">\n          @for (dt of documentTypes; track dt.value) {\n            <option [value]="dt.value">{{ dt.label }}</option>\n          }\n        </select>\n      </div>\n      <div class="field">\n        <label>N\xFAmero de documento *</label>\n        <input type="text" [(ngModel)]="form.document_number" name="doc_num" placeholder="Ej: 1012345678">\n      </div>\n      <div class="field">\n        <label>Fecha de nacimiento *</label>\n        <input type="date" [(ngModel)]="form.birth_date" name="birth_date">\n      </div>\n      <div class="field">\n        <label>Sexo *</label>\n        <select [(ngModel)]="form.gender" name="gender">\n          @for (g of genders; track g.value) {\n            <option [value]="g.value">{{ g.label }}</option>\n          }\n        </select>\n      </div>\n      <div class="field field-full">\n        <label>Correo electr\xF3nico *</label>\n        <input type="email" [(ngModel)]="form.email" name="email" placeholder="correo@ejemplo.com">\n      </div>\n      <div class="field">\n        <label>Contrase\xF1a *</label>\n        <input type="password" [(ngModel)]="form.password" name="password" placeholder="M\xEDnimo 6 caracteres">\n      </div>\n      <div class="field">\n        <label>Confirmar contrase\xF1a *</label>\n        <input type="password" [(ngModel)]="form.password_confirm" name="password_confirm" placeholder="Repite la contrase\xF1a">\n      </div>\n      <div class="field">\n        <label>Grupo sangu\xEDneo *</label>\n        <select [(ngModel)]="form.blood_type" name="blood_type">\n          @for (bt of bloodTypes; track bt.value) {\n            <option [value]="bt.value">{{ bt.label }}</option>\n          }\n        </select>\n      </div>\n      <div class="field">\n        <label>Tel\xE9fono *</label>\n        <input type="tel" [(ngModel)]="form.phone" name="phone" placeholder="Ej: 3001234567">\n      </div>\n      <div class="field">\n        <label>EPS / Aseguradora *</label>\n        <input type="text" [(ngModel)]="form.eps" name="eps" placeholder="Ej: Sura, Nueva EPS">\n      </div>\n      <div class="field">\n        <label>R\xE9gimen *</label>\n        <select [(ngModel)]="form.regime" name="regime">\n          <option value="">Seleccionar...</option>\n          @for (r of regimes; track r) {\n            <option [value]="r">{{ r }}</option>\n          }\n        </select>\n      </div>\n      <div class="field">\n        <label>Ciudad *</label>\n        <input type="text" [(ngModel)]="form.city" name="city" placeholder="Ej: Cali">\n      </div>\n      <div class="field field-full">\n        <label>Direcci\xF3n *</label>\n        <input type="text" [(ngModel)]="form.address" name="address" placeholder="Direcci\xF3n de residencia">\n      </div>\n    </div>\n\n    <button class="btn-submit" (click)="onSubmit()" [disabled]="loading()">\n      @if (loading()) { <span class="spinner"></span> Creando cuenta... }\n      @else { Crear mi cuenta }\n    </button>\n\n    <p class="login-link">\n      \xBFYa tienes cuenta? <a routerLink="/admin/login">Iniciar sesi\xF3n</a>\n    </p>\n  </div>\n</div>\n', styles: ['/* src/app/pages/registro/registro.scss */\n.registro-page {\n  min-height: 100vh;\n  background: #f1f5f9;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n}\n.registro-card {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n  padding: 36px;\n}\n.registro-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.registro-header .logo {\n  width: 64px;\n  margin-bottom: 12px;\n}\n.registro-header h1 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #0f2644;\n  margin: 0 0 6px;\n}\n.registro-header p {\n  color: #64748b;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 20px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 560px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full {\n  grid-column: 1/-1;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field input,\n.field select {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n}\n.field input:focus,\n.field select:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field input::placeholder,\n.field select::placeholder {\n  color: #94a3b8;\n}\n.btn-submit {\n  width: 100%;\n  padding: 13px;\n  background: #0f2644;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: background 0.15s;\n}\n.btn-submit:hover:not(:disabled) {\n  background: #1d3a5c;\n}\n.btn-submit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-link {\n  text-align: center;\n  margin-top: 16px;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.login-link a {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-link a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=registro.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistroComponent, { className: "RegistroComponent", filePath: "src/app/pages/registro/registro.ts", lineNumber: 15 });
})();
export {
  RegistroComponent
};
//# sourceMappingURL=chunk-NPQOGV6U.js.map
