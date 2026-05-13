import {
  AuthService
} from "./chunk-3N2L2BUB.js";
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
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-QOYWAKCN.js";
import {
  CommonModule,
  Component,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
} from "./chunk-QNZMPU6U.js";

// src/app/admin/shell/admin-shell.ts
var _forTrack0 = ($index, $item) => $item.route;
function AdminShell_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function AdminShell_Conditional_45_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 7);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.profileMsg());
  }
}
function AdminShell_Conditional_45_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 7);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.profileError());
  }
}
function AdminShell_Conditional_45_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 48)(2, "label");
    \u0275\u0275text(3, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AdminShell_Conditional_45_Conditional_26_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.profileForm.full_name, $event) || (ctx_r2.profileForm.full_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 48)(6, "label");
    \u0275\u0275text(7, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AdminShell_Conditional_45_Conditional_26_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.profileForm.email, $event) || (ctx_r2.profileForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "label");
    \u0275\u0275text(11, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AdminShell_Conditional_45_Conditional_26_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.profileForm.phone, $event) || (ctx_r2.profileForm.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.profileForm.full_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.profileForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.profileForm.phone);
  }
}
function AdminShell_Conditional_45_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 48)(2, "label");
    \u0275\u0275text(3, "Contrase\xF1a actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AdminShell_Conditional_45_Conditional_27_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.pwForm.current_password, $event) || (ctx_r2.pwForm.current_password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 48)(6, "label");
    \u0275\u0275text(7, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function AdminShell_Conditional_45_Conditional_27_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.pwForm.new_password, $event) || (ctx_r2.pwForm.new_password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "label");
    \u0275\u0275text(11, "Confirmar nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AdminShell_Conditional_45_Conditional_27_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.pwForm.confirm, $event) || (ctx_r2.pwForm.confirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pwForm.current_password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pwForm.new_password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pwForm.confirm);
  }
}
function AdminShell_Conditional_45_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
}
function AdminShell_Conditional_45_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function AdminShell_Conditional_45_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveProfile());
    });
    \u0275\u0275conditionalCreate(1, AdminShell_Conditional_45_Conditional_31_Conditional_1_Template, 1, 0, "span", 56);
    \u0275\u0275text(2, " Guardar cambios ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.profileSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.profileSaving() ? 1 : -1);
  }
}
function AdminShell_Conditional_45_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
}
function AdminShell_Conditional_45_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function AdminShell_Conditional_45_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.savePassword());
    });
    \u0275\u0275conditionalCreate(1, AdminShell_Conditional_45_Conditional_32_Conditional_1_Template, 1, 0, "span", 56);
    \u0275\u0275text(2, " Cambiar contrase\xF1a ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.profileSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.profileSaving() ? 1 : -1);
  }
}
function AdminShell_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function AdminShell_Conditional_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showProfile.set(false));
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function AdminShell_Conditional_45_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "div", 35)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h3", 36);
    \u0275\u0275text(8, "Mi perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 38);
    \u0275\u0275listener("click", function AdminShell_Conditional_45_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showProfile.set(false));
    });
    \u0275\u0275elementStart(12, "span", 7);
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 39)(15, "button", 40);
    \u0275\u0275listener("click", function AdminShell_Conditional_45_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.profileTab.set("info");
      ctx_r2.profileMsg.set("");
      return \u0275\u0275resetView(ctx_r2.profileError.set(""));
    });
    \u0275\u0275elementStart(16, "span", 7);
    \u0275\u0275text(17, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Informaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 40);
    \u0275\u0275listener("click", function AdminShell_Conditional_45_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.profileTab.set("password");
      ctx_r2.profileMsg.set("");
      return \u0275\u0275resetView(ctx_r2.profileError.set(""));
    });
    \u0275\u0275elementStart(20, "span", 7);
    \u0275\u0275text(21, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Contrase\xF1a ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 41);
    \u0275\u0275conditionalCreate(24, AdminShell_Conditional_45_Conditional_24_Template, 4, 1, "div", 42);
    \u0275\u0275conditionalCreate(25, AdminShell_Conditional_45_Conditional_25_Template, 4, 1, "div", 43);
    \u0275\u0275conditionalCreate(26, AdminShell_Conditional_45_Conditional_26_Template, 13, 3, "div", 44);
    \u0275\u0275conditionalCreate(27, AdminShell_Conditional_45_Conditional_27_Template, 13, 3, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 45)(29, "button", 46);
    \u0275\u0275listener("click", function AdminShell_Conditional_45_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showProfile.set(false));
    });
    \u0275\u0275text(30, "Cerrar");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(31, AdminShell_Conditional_45_Conditional_31_Template, 3, 2, "button", 47)(32, AdminShell_Conditional_45_Conditional_32_Template, 3, 2, "button", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.userInitials());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.roleLabel(((tmp_2_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_2_0.role) ?? ""));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.profileTab() === "info");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.profileTab() === "password");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.profileMsg() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.profileError() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.profileTab() === "info" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.profileTab() === "password" ? 27 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.profileTab() === "info" ? 31 : 32);
  }
}
var _AdminShell = class _AdminShell {
  constructor() {
    this.auth = inject(AuthService);
    this.api = inject(ApiService);
    this.router = inject(Router);
    this.sidebarOpen = signal(true, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : []);
    this.currentTitle = signal("Dashboard", ...ngDevMode ? [{ debugName: "currentTitle" }] : []);
    this.showProfile = signal(false, ...ngDevMode ? [{ debugName: "showProfile" }] : []);
    this.profileTab = signal("info", ...ngDevMode ? [{ debugName: "profileTab" }] : []);
    this.profileSaving = signal(false, ...ngDevMode ? [{ debugName: "profileSaving" }] : []);
    this.profileMsg = signal("", ...ngDevMode ? [{ debugName: "profileMsg" }] : []);
    this.profileError = signal("", ...ngDevMode ? [{ debugName: "profileError" }] : []);
    this.profileForm = { full_name: "", phone: "", email: "" };
    this.pwForm = { current_password: "", new_password: "", confirm: "" };
    this.navItems = [
      { icon: "dashboard", label: "Dashboard", route: "/admin/dashboard", roles: ["admin", "doctor", "enfermero", "recepcionista", "auditor"] },
      { icon: "calendar_month", label: "Citas", route: "/admin/appointments", roles: ["admin", "doctor", "enfermero", "recepcionista"] },
      { icon: "people", label: "Pacientes", route: "/admin/patients", roles: ["admin", "doctor", "enfermero", "recepcionista"] },
      { icon: "folder_open", label: "Historias Cl\xEDnicas", route: "/admin/clinical", roles: ["admin", "doctor", "enfermero"] },
      { icon: "schedule", label: "Disponibilidad", route: "/admin/availability", roles: ["admin", "doctor", "enfermero"] },
      { icon: "manage_accounts", label: "Empleados", route: "/admin/users", roles: ["admin"] },
      { icon: "summarize", label: "RIPS", route: "/admin/rips", roles: ["admin", "auditor"] },
      { icon: "history", label: "Actividad", route: "/admin/audit", roles: ["admin", "auditor"] }
    ];
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const match = this.navItems.find((n) => e.urlAfterRedirects.startsWith(n.route));
      if (match)
        this.currentTitle.set(match.label);
    });
  }
  get visibleNav() {
    const role = this.auth.currentUser()?.role ?? "";
    return this.navItems.filter((n) => n.roles.includes(role));
  }
  logout() {
    this.auth.logout();
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  openProfile() {
    const u = this.auth.currentUser();
    this.profileForm = { full_name: u?.full_name ?? "", phone: "", email: u?.email ?? "" };
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
    this.api.updateStaffProfile(this.profileForm).subscribe({
      next: () => {
        this.profileSaving.set(false);
        this.profileMsg.set("Perfil actualizado correctamente.");
        this.auth.fetchMe().subscribe();
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
    this.api.changePassword({ current_password: this.pwForm.current_password, new_password: this.pwForm.new_password }).subscribe({
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
  userInitials() {
    const name = this.auth.currentUser()?.full_name ?? "";
    return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  }
  roleLabel(role) {
    const map = {
      admin: "Administrador",
      doctor: "Doctor",
      enfermero: "Enfermero",
      recepcionista: "Recepcionista",
      auditor: "Auditor"
    };
    return map[role] ?? role;
  }
};
_AdminShell.\u0275fac = function AdminShell_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminShell)();
};
_AdminShell.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminShell, selectors: [["app-admin-shell"]], decls: 46, vars: 10, consts: [[1, "shell"], [1, "sidebar"], [1, "sidebar-top"], [1, "brand"], ["src", "assets/images/global/logo2.png", "alt", "Logo IPS", 1, "brand-logo"], [1, "brand-name"], ["title", "Contraer men\xFA", 1, "collapse-btn", 3, "click"], [1, "material-icons"], [1, "nav"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "sidebar-footer"], ["title", "Mi perfil", 1, "user-block", 3, "click"], [1, "user-avatar"], [1, "user-text"], [1, "user-name"], [1, "user-role"], [1, "material-icons", 2, "font-size", "16px", "color", "var(--muted)", "margin-left", "auto"], ["title", "Cerrar sesi\xF3n", 1, "logout-btn", 3, "click"], [1, "content-wrapper"], [1, "topbar"], [1, "topbar-left"], [1, "topbar-toggle", 3, "click"], [1, "page-title"], [1, "topbar-right"], [1, "topbar-profile-btn", 3, "click"], [1, "user-avatar-sm"], [1, "topbar-user"], [1, "material-icons", 2, "font-size", "16px"], [1, "page-content"], [1, "modal-backdrop"], [1, "material-icons", "nav-icon"], [1, "nav-label"], [1, "modal-backdrop", 3, "click"], [1, "modal", "modal-profile", 3, "click"], [1, "modal-header"], [2, "display", "flex", "align-items", "center", "gap", "12px"], [2, "margin", "0", "font-size", "1rem", "font-weight", "700"], [2, "font-size", "0.78rem", "color", "var(--muted)"], [1, "btn-icon-only", 3, "click"], [1, "profile-tabs"], [3, "click"], [1, "modal-body"], [1, "alert-success"], [1, "alert-error"], [1, "form-grid", "form-grid-1"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "disabled"], [1, "field"], ["type", "text", "name", "pf_name", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "pf_email", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "pf_phone", "placeholder", "Ej: 3001234567", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "pw_cur", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "pw_new", "placeholder", "M\xEDnimo 6 caracteres", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "pw_conf", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], [1, "spinner-sm"]], template: function AdminShell_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "IPS Cuidando");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function AdminShell_Template_button_click_7_listener() {
      return ctx.toggleSidebar();
    });
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "nav", 8);
    \u0275\u0275repeaterCreate(11, AdminShell_For_12_Template, 5, 3, "a", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
    \u0275\u0275listener("click", function AdminShell_Template_button_click_14_listener() {
      return ctx.openProfile();
    });
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 17);
    \u0275\u0275listener("click", function AdminShell_Template_button_click_24_listener() {
      return ctx.logout();
    });
    \u0275\u0275elementStart(25, "span", 7);
    \u0275\u0275text(26, "logout");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 18)(28, "header", 19)(29, "div", 20)(30, "button", 21);
    \u0275\u0275listener("click", function AdminShell_Template_button_click_30_listener() {
      return ctx.toggleSidebar();
    });
    \u0275\u0275elementStart(31, "span", 7);
    \u0275\u0275text(32, "menu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "h1", 22);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 23)(36, "button", 24);
    \u0275\u0275listener("click", function AdminShell_Template_button_click_36_listener() {
      return ctx.openProfile();
    });
    \u0275\u0275elementStart(37, "span", 25);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 26);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 27);
    \u0275\u0275text(42, "expand_more");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "main", 28);
    \u0275\u0275element(44, "router-outlet");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(45, AdminShell_Conditional_45_Template, 33, 11, "div", 29);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    \u0275\u0275classProp("collapsed", !ctx.sidebarOpen());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.sidebarOpen() ? "chevron_left" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.visibleNav);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.userInitials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx.auth.currentUser()) == null ? null : tmp_4_0.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.roleLabel(((tmp_5_0 = ctx.auth.currentUser()) == null ? null : tmp_5_0.role) ?? ""));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.currentTitle());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.userInitials());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx.auth.currentUser()) == null ? null : tmp_8_0.full_name);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.showProfile() ? 45 : -1);
  }
}, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  font-family: "Poppins", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #0f2644;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  transition: width 0.25s ease;\n  overflow: hidden;\n  z-index: 50;\n}\n.shell.collapsed[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.shell.collapsed[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n.shell.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n.shell.collapsed[_ngcontent-%COMP%]   .user-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.shell.collapsed[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.sidebar-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  height: 56px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  gap: 8px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n  flex: 1;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n  flex-shrink: 0;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #f1f5f9;\n  white-space: nowrap;\n}\n.collapse-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.collapse-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f1f5f9;\n}\n.collapse-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n  scrollbar-width: none;\n}\n.nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 16px;\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n  transition: background 0.15s, color 0.15s;\n  border-left: 3px solid transparent;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: #1a3a5c;\n  color: #f1f5f9;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: #1d56a3;\n  color: #fff;\n  border-left-color: #2d8cff;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  flex-shrink: 0;\n}\n.nav-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.user-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 6px;\n  text-align: left;\n  box-sizing: border-box;\n}\n.user-block[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #1d56a3;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #f1f5f9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.15);\n  color: #f87171;\n}\n.logout-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 56px;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  flex-shrink: 0;\n  z-index: 10;\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.topbar-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.topbar-toggle[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.topbar-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.topbar-profile-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.topbar-profile-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #1d56a3;\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  line-height: 1;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 300;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-radius: 14px 14px 0 0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-radius: 0 0 14px 14px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.btn-icon-only[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n  color: #64748b;\n}\n.btn-icon-only[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.profile-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e2e8f0;\n}\n.profile-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #64748b;\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n}\n.profile-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  background: #f8fafc;\n}\n.profile-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #1d56a3;\n  border-bottom-color: #1d56a3;\n  font-weight: 600;\n}\n.profile-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.form-grid-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 5px;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 0.875rem;\n  color: #0f172a;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2d8cff;\n  box-shadow: 0 0 0 3px rgba(45, 140, 255, 0.12);\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #15803d;\n  margin-bottom: 14px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #b91c1c;\n  margin-bottom: 14px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #1d56a3;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #174a8c;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #374151;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin-sm 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin-sm {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .shell[_ngcontent-%COMP%]:not(.collapsed)   .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    z-index: 200;\n  }\n  .brand-name[_ngcontent-%COMP%], \n   .nav-label[_ngcontent-%COMP%], \n   .user-text[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    width: 64px !important;\n  }\n  .page-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=admin-shell.css.map */'] });
var AdminShell = _AdminShell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminShell, [{
    type: Component,
    args: [{ selector: "app-admin-shell", standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule], template: `<div class="shell" [class.collapsed]="!sidebarOpen()">

  <!-- \u2500\u2500 Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <aside class="sidebar">
    <div class="sidebar-top">
      <div class="brand">
        <img src="assets/images/global/logo2.png" alt="Logo IPS" class="brand-logo">
        <span class="brand-name">IPS Cuidando</span>
      </div>
      <button class="collapse-btn" (click)="toggleSidebar()" title="Contraer men\xFA">
        <span class="material-icons">{{ sidebarOpen() ? 'chevron_left' : 'chevron_right' }}</span>
      </button>
    </div>

    <nav class="nav">
      @for (item of visibleNav; track item.route) {
        <a [routerLink]="item.route" routerLinkActive="active" class="nav-link">
          <span class="material-icons nav-icon">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
        </a>
      }
    </nav>

    <div class="sidebar-footer">
      <button class="user-block" (click)="openProfile()" title="Mi perfil">
        <div class="user-avatar">{{ userInitials() }}</div>
        <div class="user-text">
          <div class="user-name">{{ auth.currentUser()?.full_name }}</div>
          <div class="user-role">{{ roleLabel(auth.currentUser()?.role ?? '') }}</div>
        </div>
        <span class="material-icons" style="font-size:16px;color:var(--muted);margin-left:auto">edit</span>
      </button>
      <button class="logout-btn" (click)="logout()" title="Cerrar sesi\xF3n">
        <span class="material-icons">logout</span>
      </button>
    </div>
  </aside>

  <!-- \u2500\u2500 Contenido \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="content-wrapper">
    <header class="topbar">
      <div class="topbar-left">
        <button class="topbar-toggle" (click)="toggleSidebar()">
          <span class="material-icons">menu</span>
        </button>
        <h1 class="page-title">{{ currentTitle() }}</h1>
      </div>
      <div class="topbar-right">
        <button class="topbar-profile-btn" (click)="openProfile()">
          <span class="user-avatar-sm">{{ userInitials() }}</span>
          <span class="topbar-user">{{ auth.currentUser()?.full_name }}</span>
          <span class="material-icons" style="font-size:16px">expand_more</span>
        </button>
      </div>
    </header>

    <main class="page-content">
      <router-outlet></router-outlet>
    </main>
  </div>

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL MI PERFIL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showProfile()) {
  <div class="modal-backdrop" (click)="showProfile.set(false)">
    <div class="modal modal-profile" (click)="$event.stopPropagation()">

      <div class="modal-header">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="user-avatar">{{ userInitials() }}</div>
          <div>
            <h3 style="margin:0;font-size:1rem;font-weight:700">Mi perfil</h3>
            <div style="font-size:0.78rem;color:var(--muted)">{{ roleLabel(auth.currentUser()?.role ?? '') }}</div>
          </div>
        </div>
        <button class="btn-icon-only" (click)="showProfile.set(false)">
          <span class="material-icons">close</span>
        </button>
      </div>

      <!-- Tabs -->
      <div class="profile-tabs">
        <button [class.active]="profileTab()==='info'"     (click)="profileTab.set('info');    profileMsg.set('');profileError.set('')">
          <span class="material-icons">person</span> Informaci\xF3n
        </button>
        <button [class.active]="profileTab()==='password'" (click)="profileTab.set('password');profileMsg.set('');profileError.set('')">
          <span class="material-icons">lock</span> Contrase\xF1a
        </button>
      </div>

      <div class="modal-body">
        @if (profileMsg()) {
          <div class="alert-success"><span class="material-icons">check_circle</span> {{ profileMsg() }}</div>
        }
        @if (profileError()) {
          <div class="alert-error"><span class="material-icons">error_outline</span> {{ profileError() }}</div>
        }

        <!-- Tab: Informaci\xF3n -->
        @if (profileTab() === 'info') {
          <div class="form-grid form-grid-1">
            <div class="field">
              <label>Nombre completo</label>
              <input type="text" [(ngModel)]="profileForm.full_name" name="pf_name">
            </div>
            <div class="field">
              <label>Correo electr\xF3nico</label>
              <input type="email" [(ngModel)]="profileForm.email" name="pf_email">
            </div>
            <div class="field">
              <label>Tel\xE9fono</label>
              <input type="tel" [(ngModel)]="profileForm.phone" name="pf_phone" placeholder="Ej: 3001234567">
            </div>
          </div>
        }

        <!-- Tab: Contrase\xF1a -->
        @if (profileTab() === 'password') {
          <div class="form-grid form-grid-1">
            <div class="field">
              <label>Contrase\xF1a actual</label>
              <input type="password" [(ngModel)]="pwForm.current_password" name="pw_cur">
            </div>
            <div class="field">
              <label>Nueva contrase\xF1a</label>
              <input type="password" [(ngModel)]="pwForm.new_password" name="pw_new" placeholder="M\xEDnimo 6 caracteres">
            </div>
            <div class="field">
              <label>Confirmar nueva contrase\xF1a</label>
              <input type="password" [(ngModel)]="pwForm.confirm" name="pw_conf">
            </div>
          </div>
        }
      </div>

      <div class="modal-footer">
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
`, styles: ['/* src/app/admin/shell/admin-shell.scss */\n:host {\n  display: block;\n  height: 100vh;\n}\n.shell {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  font-family: "Poppins", sans-serif;\n}\n.sidebar {\n  width: 240px;\n  background: #0f2644;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  transition: width 0.25s ease;\n  overflow: hidden;\n  z-index: 50;\n}\n.shell.collapsed .sidebar {\n  width: 64px;\n}\n.shell.collapsed .brand-name,\n.shell.collapsed .nav-label,\n.shell.collapsed .user-text {\n  display: none;\n}\n.shell.collapsed .collapse-btn {\n  margin-left: auto;\n}\n.sidebar-top {\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  height: 56px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  gap: 8px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n  flex: 1;\n}\n.brand-logo {\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n  flex-shrink: 0;\n}\n.brand-name {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #f1f5f9;\n  white-space: nowrap;\n}\n.collapse-btn {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.collapse-btn:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f1f5f9;\n}\n.collapse-btn .material-icons {\n  font-size: 20px;\n}\n.nav {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n  scrollbar-width: none;\n}\n.nav::-webkit-scrollbar {\n  display: none;\n}\n.nav-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 16px;\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n  transition: background 0.15s, color 0.15s;\n  border-left: 3px solid transparent;\n}\n.nav-link:hover {\n  background: #1a3a5c;\n  color: #f1f5f9;\n}\n.nav-link.active {\n  background: #1d56a3;\n  color: #fff;\n  border-left-color: #2d8cff;\n}\n.nav-icon {\n  font-size: 20px;\n  width: 20px;\n  flex-shrink: 0;\n}\n.nav-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar-footer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.user-block {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px 6px;\n  border-radius: 6px;\n  text-align: left;\n  box-sizing: border-box;\n}\n.user-block:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.user-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #1d56a3;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #f1f5f9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.logout-btn {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.logout-btn:hover {\n  background: rgba(220, 38, 38, 0.15);\n  color: #f87171;\n}\n.logout-btn .material-icons {\n  font-size: 20px;\n}\n.content-wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.topbar {\n  height: 56px;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  flex-shrink: 0;\n  z-index: 10;\n}\n.topbar-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.topbar-toggle {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n}\n.topbar-toggle:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.topbar-toggle .material-icons {\n  font-size: 20px;\n}\n.page-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n}\n.topbar-profile-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.topbar-profile-btn:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.user-avatar-sm {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #1d56a3;\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  line-height: 1;\n}\n.page-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 300;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-header {\n  border-radius: 14px 14px 0 0;\n}\n.modal-footer {\n  border-radius: 0 0 14px 14px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.btn-icon-only {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n  color: #64748b;\n}\n.btn-icon-only:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-icon-only .material-icons {\n  font-size: 20px;\n}\n.profile-tabs {\n  display: flex;\n  border-bottom: 1px solid #e2e8f0;\n}\n.profile-tabs button {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #64748b;\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n}\n.profile-tabs button:hover {\n  color: #0f172a;\n  background: #f8fafc;\n}\n.profile-tabs button.active {\n  color: #1d56a3;\n  border-bottom-color: #1d56a3;\n  font-weight: 600;\n}\n.profile-tabs button .material-icons {\n  font-size: 18px;\n}\n.modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.form-grid-1 {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.field label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 5px;\n}\n.field input {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 0.875rem;\n  color: #0f172a;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n.field input:focus {\n  outline: none;\n  border-color: #2d8cff;\n  box-shadow: 0 0 0 3px rgba(45, 140, 255, 0.12);\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #15803d;\n  margin-bottom: 14px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  color: #b91c1c;\n  margin-bottom: 14px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #1d56a3;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #174a8c;\n}\n.btn-primary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #374151;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-secondary:hover {\n  background: #f8fafc;\n}\n.spinner-sm {\n  width: 15px;\n  height: 15px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin-sm 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin-sm {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .shell:not(.collapsed) .sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    z-index: 200;\n  }\n  .brand-name,\n  .nav-label,\n  .user-text {\n    display: none !important;\n  }\n  .sidebar {\n    width: 64px !important;\n  }\n  .page-content {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=admin-shell.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminShell, { className: "AdminShell", filePath: "src/app/admin/shell/admin-shell.ts", lineNumber: 23 });
})();
export {
  AdminShell
};
//# sourceMappingURL=chunk-WICBHKIH.js.map
