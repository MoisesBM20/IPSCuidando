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

// src/app/admin/users/users.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function UsersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando empleados...");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 2);
    \u0275\u0275text(2, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay empleados registrados.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_9_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "button", 12);
    \u0275\u0275listener("click", function UsersComponent_Conditional_9_For_19_Template_button_click_16_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleActive(u_r2));
    });
    \u0275\u0275elementStart(17, "span", 2);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inactive-row", !u_r2.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.document_number);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.roleBadgeClass(u_r2.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.roleLabel(u_r2.role));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.specialty ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(u_r2.is_active ? "badge-green" : "badge-gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r2.is_active ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", u_r2.is_active ? "Desactivar usuario" : "Activar usuario");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.is_active ? "toggle_on" : "toggle_off");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r2.is_active ? "Desactivar" : "Activar", " ");
  }
}
function UsersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 6)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Especialidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, UsersComponent_Conditional_9_For_19_Template, 20, 15, "tr", 9, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.users());
  }
}
function UsersComponent_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 2);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formError());
  }
}
function UsersComponent_Conditional_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 2);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formSuccess());
  }
}
function UsersComponent_Conditional_10_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("value", r_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.label);
  }
}
function UsersComponent_Conditional_10_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
    \u0275\u0275text(1, " Guardando... ");
  }
}
function UsersComponent_Conditional_10_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Crear empleado ");
  }
}
function UsersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function UsersComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275listener("click", function UsersComponent_Conditional_10_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 15)(3, "h3");
    \u0275\u0275text(4, "Registrar Empleado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function UsersComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275conditionalCreate(9, UsersComponent_Conditional_10_Conditional_9_Template, 4, 1, "div", 18);
    \u0275\u0275conditionalCreate(10, UsersComponent_Conditional_10_Conditional_10_Template, 4, 1, "div", 19);
    \u0275\u0275elementStart(11, "div", 20)(12, "div", 21)(13, "label");
    \u0275\u0275text(14, "Nombre completo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_10_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.full_name, $event) || (ctx_r2.form.full_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 23)(17, "label");
    \u0275\u0275text(18, "Correo electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_10_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 23)(21, "label");
    \u0275\u0275text(22, "Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_10_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.password, $event) || (ctx_r2.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "label");
    \u0275\u0275text(26, "N\xFAmero de documento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_10_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.document_number, $event) || (ctx_r2.form.document_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 23)(29, "label");
    \u0275\u0275text(30, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_10_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.phone, $event) || (ctx_r2.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "label");
    \u0275\u0275text(34, "Rol *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_10_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.role, $event) || (ctx_r2.form.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(36, UsersComponent_Conditional_10_For_37_Template, 2, 2, "option", 29, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 23)(39, "label");
    \u0275\u0275text(40, "Especialidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_10_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.specialty, $event) || (ctx_r2.form.specialty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 23)(43, "label");
    \u0275\u0275text(44, "No. Tarjeta profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_10_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.registration_number, $event) || (ctx_r2.form.registration_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 32)(47, "button", 33);
    \u0275\u0275listener("click", function UsersComponent_Conditional_10_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275text(48, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 34);
    \u0275\u0275listener("click", function UsersComponent_Conditional_10_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveUser());
    });
    \u0275\u0275conditionalCreate(50, UsersComponent_Conditional_10_Conditional_50_Template, 2, 0)(51, UsersComponent_Conditional_10_Conditional_51_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r2.formError() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formSuccess() ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.full_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.document_number);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.role);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.roles);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.specialty);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.registration_number);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 50 : 51);
  }
}
var _UsersComponent = class _UsersComponent {
  constructor() {
    this.api = inject(ApiService);
    this.users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
    this.formError = signal("", ...ngDevMode ? [{ debugName: "formError" }] : []);
    this.formSuccess = signal("", ...ngDevMode ? [{ debugName: "formSuccess" }] : []);
    this.form = this.emptyForm();
    this.roles = [
      { value: "admin", label: "Administrador" },
      { value: "doctor", label: "Doctor" },
      { value: "enfermero", label: "Enfermero/a" },
      { value: "recepcionista", label: "Recepcionista" },
      { value: "auditor", label: "Auditor" }
    ];
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.loading.set(true);
    this.api.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openForm() {
    this.form = this.emptyForm();
    this.formError.set("");
    this.formSuccess.set("");
    this.showForm.set(true);
  }
  saveUser() {
    if (!this.form.email || !this.form.password || !this.form.full_name || !this.form.document_number) {
      this.formError.set("Completa todos los campos obligatorios.");
      return;
    }
    this.saving.set(true);
    this.formError.set("");
    this.api.createUser(this.form).subscribe({
      next: () => {
        this.saving.set(false);
        this.formSuccess.set("Empleado creado correctamente.");
        this.loadUsers();
        setTimeout(() => this.showForm.set(false), 1200);
      },
      error: (err) => {
        this.saving.set(false);
        this.formError.set(err.error?.detail ?? "Error al crear el empleado.");
      }
    });
  }
  toggleActive(user) {
    this.api.toggleUserActive(user.id, !user.is_active).subscribe(() => this.loadUsers());
  }
  roleLabel(role) {
    const found = this.roles.find((r) => r.value === role)?.label;
    if (found)
      return found;
    return role.charAt(0).toUpperCase() + role.slice(1);
  }
  roleBadgeClass(role) {
    const m = {
      admin: "badge-purple",
      doctor: "badge-blue",
      enfermero: "badge-green",
      recepcionista: "badge-amber",
      auditor: "badge-gray"
    };
    return m[role] ?? "badge-gray";
  }
  emptyForm() {
    return { email: "", password: "", full_name: "", document_number: "", phone: "", role: "recepcionista", specialty: "", registration_number: "" };
  }
};
_UsersComponent.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsersComponent)();
};
_UsersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 11, vars: 2, consts: [[1, "module-header"], [1, "btn-primary", 3, "click"], [1, "material-icons"], [1, "card"], [1, "loading"], [1, "empty"], [1, "data-table"], [1, "modal-backdrop"], [1, "spinner"], [3, "inactive-row"], [1, "name-cell"], [1, "badge"], [1, "btn-toggle", 3, "click", "title"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "btn-icon-only", 3, "click"], [1, "modal-body"], [1, "alert-error"], [1, "alert-success"], [1, "form-grid"], [1, "field", "field-full"], ["type", "text", "name", "full_name", "placeholder", "Nombres y apellidos", 3, "ngModelChange", "ngModel"], [1, "field"], ["type", "email", "name", "email", "placeholder", "usuario@dominio.com", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "M\xEDn. 8 caracteres", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "doc_num", "placeholder", "Ej: 1012345678", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "Ej: 3001234567", 3, "ngModelChange", "ngModel"], ["name", "role", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "name", "specialty", "placeholder", "Ej: Medicina General", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "reg_num", "placeholder", "Ej: RM-001234", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"]], template: function UsersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div");
    \u0275\u0275elementStart(2, "button", 1);
    \u0275\u0275listener("click", function UsersComponent_Template_button_click_2_listener() {
      return ctx.openForm();
    });
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Nuevo empleado ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275conditionalCreate(7, UsersComponent_Conditional_7_Template, 4, 0, "div", 4)(8, UsersComponent_Conditional_8_Template, 5, 0, "div", 5)(9, UsersComponent_Conditional_9_Template, 20, 0, "table", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, UsersComponent_Conditional_10_Template, 52, 12, "div", 7);
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.loading() ? 7 : ctx.users().length === 0 ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.showForm() ? 10 : -1);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, \n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.btn-icon-only[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.name-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.inactive-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.btn-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.78rem;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  color: #64748b;\n  white-space: nowrap;\n}\n.btn-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-toggle[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n/*# sourceMappingURL=users.css.map */'] });
var UsersComponent = _UsersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="module-header">
  <div></div>
  <button class="btn-primary" (click)="openForm()">
    <span class="material-icons">person_add</span> Nuevo empleado
  </button>
</div>

<div class="card">
  @if (loading()) {
    <div class="loading"><div class="spinner"></div><p>Cargando empleados...</p></div>
  } @else if (users().length === 0) {
    <div class="empty"><span class="material-icons">manage_accounts</span><p>No hay empleados registrados.</p></div>
  } @else {
    <table class="data-table">
      <thead>
        <tr>
          <th>Nombre completo</th>
          <th>Correo electr\xF3nico</th>
          <th>Documento</th>
          <th>Rol</th>
          <th>Especialidad</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        @for (u of users(); track u.id) {
          <tr [class.inactive-row]="!u.is_active">
            <td class="name-cell">{{ u.full_name }}</td>
            <td>{{ u.email }}</td>
            <td>{{ u.document_number }}</td>
            <td><span class="badge" [class]="roleBadgeClass(u.role)">{{ roleLabel(u.role) }}</span></td>
            <td>{{ u.specialty ?? '\u2014' }}</td>
            <td>
              <span class="badge" [class]="u.is_active ? 'badge-green' : 'badge-gray'">
                {{ u.is_active ? 'Activo' : 'Inactivo' }}
              </span>
            </td>
            <td>
              <button class="btn-toggle" (click)="toggleActive(u)"
                [title]="u.is_active ? 'Desactivar usuario' : 'Activar usuario'">
                <span class="material-icons">{{ u.is_active ? 'toggle_on' : 'toggle_off' }}</span>
                {{ u.is_active ? 'Desactivar' : 'Activar' }}
              </button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  }
</div>

@if (showForm()) {
  <div class="modal-backdrop" (click)="showForm.set(false)">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>Registrar Empleado</h3>
        <button class="btn-icon-only" (click)="showForm.set(false)"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (formError()) { <div class="alert-error"><span class="material-icons">error_outline</span>{{ formError() }}</div> }
        @if (formSuccess()) { <div class="alert-success"><span class="material-icons">check_circle</span>{{ formSuccess() }}</div> }
        <div class="form-grid">
          <div class="field field-full">
            <label>Nombre completo *</label>
            <input type="text" [(ngModel)]="form.full_name" name="full_name" placeholder="Nombres y apellidos">
          </div>
          <div class="field">
            <label>Correo electr\xF3nico *</label>
            <input type="email" [(ngModel)]="form.email" name="email" placeholder="usuario@dominio.com">
          </div>
          <div class="field">
            <label>Contrase\xF1a *</label>
            <input type="password" [(ngModel)]="form.password" name="password" placeholder="M\xEDn. 8 caracteres">
          </div>
          <div class="field">
            <label>N\xFAmero de documento *</label>
            <input type="text" [(ngModel)]="form.document_number" name="doc_num" placeholder="Ej: 1012345678">
          </div>
          <div class="field">
            <label>Tel\xE9fono</label>
            <input type="tel" [(ngModel)]="form.phone" name="phone" placeholder="Ej: 3001234567">
          </div>
          <div class="field">
            <label>Rol *</label>
            <select [(ngModel)]="form.role" name="role">
              @for (r of roles; track r.value) {
                <option [value]="r.value">{{ r.label }}</option>
              }
            </select>
          </div>
          <div class="field">
            <label>Especialidad</label>
            <input type="text" [(ngModel)]="form.specialty" name="specialty" placeholder="Ej: Medicina General">
          </div>
          <div class="field">
            <label>No. Tarjeta profesional</label>
            <input type="text" [(ngModel)]="form.registration_number" name="reg_num" placeholder="Ej: RM-001234">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showForm.set(false)">Cancelar</button>
        <button class="btn-primary" (click)="saveUser()" [disabled]="saving()">
          @if (saving()) { <span class="spinner-sm"></span> Guardando... }
          @else { <span class="material-icons">save</span> Crear empleado }
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/admin/users/users.scss */\n.module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-row {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 420px;\n}\n.search-box:focus-within {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: #64748b;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  flex: 1;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  color: #0f172a;\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.search-box .btn-icon {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n}\n.search-box .btn-icon:hover {\n  background: #1d4ed8;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary,\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n}\n.btn-secondary:hover,\n.btn-danger:hover {\n  background: #f8fafc;\n}\n.btn-danger {\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.btn-danger:hover {\n  background: #fee2e2;\n}\n.btn-icon-only {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.btn-icon-only:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only .material-icons {\n  font-size: 20px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 10px 16px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 11px 16px;\n  color: #0f172a;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.data-table tbody tr:hover {\n  background: #fafbfc;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.badge-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.badge-red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.badge-amber {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.badge-purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.badge.badge-orange {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.badge.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n}\n.loading .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 12px;\n}\n.loading p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n  color: #64748b;\n  gap: 12px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty p {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n  border-radius: 0 0 12px 12px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field.field-full {\n  grid-column: 1/-1;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.field input,\n.field select,\n.field textarea {\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 0.875rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  border-color: #2563eb;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n.field input::placeholder,\n.field select::placeholder,\n.field textarea::placeholder {\n  color: #94a3b8;\n}\n.field textarea {\n  resize: vertical;\n}\n.field select {\n  cursor: pointer;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.name-cell {\n  font-weight: 500;\n}\n.inactive-row td {\n  opacity: 0.55;\n}\n.btn-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 0.78rem;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  color: #64748b;\n  white-space: nowrap;\n}\n.btn-toggle .material-icons {\n  font-size: 18px;\n}\n.btn-toggle:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n/*# sourceMappingURL=users.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/admin/users/users.ts", lineNumber: 13 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-6X7G4YC4.mjs.map
