import {
  AuthService
} from "./chunk-3N2L2BUB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-PT7R7SID.js";
import {
  Router,
  RouterLink
} from "./chunk-QOYWAKCN.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QNZMPU6U.js";

// src/app/admin/login/login.ts
function AdminLogin_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 14);
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
function AdminLogin_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
    \u0275\u0275text(1, " Verificando... ");
  }
}
function AdminLogin_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Ingresar ");
  }
}
var _AdminLogin = class _AdminLogin {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.email = "";
    this.password = "";
    this.showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.errorMsg = signal("", ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
  }
  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMsg.set("Por favor ingresa tu email y contrase\xF1a.");
      return;
    }
    this.loading.set(true);
    this.errorMsg.set("");
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        if (res.role === "paciente") {
          this.router.navigate(["/portal"]);
        } else {
          this.router.navigate(["/admin/dashboard"]);
        }
      },
      error: (err) => {
        this.loading.set(false);
        if (err.status === 401) {
          this.errorMsg.set("Email o contrase\xF1a incorrectos.");
        } else if (err.status === 403) {
          this.errorMsg.set("Tu cuenta est\xE1 inactiva. Contacta al administrador.");
        } else {
          this.errorMsg.set("Error de conexi\xF3n. Verifica que el servidor est\xE9 activo.");
        }
      }
    });
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
};
_AdminLogin.\u0275fac = function AdminLogin_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminLogin)();
};
_AdminLogin.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLogin, selectors: [["app-admin-login"]], decls: 64, vars: 7, consts: [[1, "login-page"], [1, "login-card"], [1, "login-header"], ["src", "assets/images/global/logo2.png", "alt", "Logo CUIDANDO DE TI", 1, "login-logo"], [1, "alert-error"], [1, "login-form", 3, "ngSubmit"], [1, "field"], ["for", "email"], [1, "input-row"], [1, "material-icons", "field-icon"], ["id", "email", "type", "email", "name", "email", "placeholder", "usuario@ipscuidandodeti.com", "autocomplete", "email", "required", "", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", "required", "", 3, "ngModelChange", "type", "ngModel"], ["type", "button", "tabindex", "-1", 1, "toggle-vis", 3, "click"], [1, "material-icons"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "login-footer-links"], ["routerLink", "/", 1, "back-link"], ["routerLink", "/registro", 1, "register-link"], [1, "login-info"], [1, "info-content"], [1, "feature-list"], [1, "spinner"]], template: function AdminLogin_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Panel Administrativo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Ingresa tus credenciales para continuar");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, AdminLogin_Conditional_8_Template, 4, 1, "div", 4);
    \u0275\u0275elementStart(9, "form", 5);
    \u0275\u0275listener("ngSubmit", function AdminLogin_Template_form_ngSubmit_9_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
    \u0275\u0275text(12, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8)(14, "span", 9);
    \u0275\u0275text(15, "mail_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AdminLogin_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 6)(18, "label", 11);
    \u0275\u0275text(19, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 8)(21, "span", 9);
    \u0275\u0275text(22, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function AdminLogin_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 13);
    \u0275\u0275listener("click", function AdminLogin_Template_button_click_24_listener() {
      return ctx.togglePassword();
    });
    \u0275\u0275elementStart(25, "span", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "button", 15);
    \u0275\u0275conditionalCreate(28, AdminLogin_Conditional_28_Template, 2, 0)(29, AdminLogin_Conditional_29_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 16)(31, "a", 17)(32, "span", 14);
    \u0275\u0275text(33, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Volver al sitio web ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 18);
    \u0275\u0275text(36, " \xBFEres paciente? ");
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38, "Reg\xEDstrate aqu\xED");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 19)(40, "div", 20)(41, "h2");
    \u0275\u0275text(42, "CUIDANDO DE TI");
    \u0275\u0275element(43, "br");
    \u0275\u0275text(44, "CyE IPS SAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p");
    \u0275\u0275text(46, "Sistema integrado de gesti\xF3n de servicios de salud");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ul", 21)(48, "li")(49, "span", 14);
    \u0275\u0275text(50, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Gesti\xF3n de citas y disponibilidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "li")(53, "span", 14);
    \u0275\u0275text(54, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Historias cl\xEDnicas electr\xF3nicas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "li")(57, "span", 14);
    \u0275\u0275text(58, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " Administraci\xF3n de pacientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "li")(61, "span", 14);
    \u0275\u0275text(62, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " Reportes RIPS 2.0");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.errorMsg() ? 8 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.showPassword() ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading() ? 28 : 29);
  }
}, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n.login-page[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  font-family: "Poppins", sans-serif;\n}\n.login-card[_ngcontent-%COMP%] {\n  flex: 0 0 440px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 48px 40px;\n  border-right: 1px solid #e2e8f0;\n}\n@media (max-width: 768px) {\n  .login-card[_ngcontent-%COMP%] {\n    flex: 1;\n    border-right: none;\n    padding: 32px 24px;\n  }\n}\n.login-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.login-header[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  margin-bottom: 20px;\n  display: block;\n}\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 20px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.input-row[_ngcontent-%COMP%]:focus-within {\n  border-color: #2d8cff;\n  box-shadow: 0 0 0 3px rgba(45, 140, 255, 0.12);\n  background: #fff;\n}\n.field-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n  padding: 0 10px;\n  pointer-events: none;\n}\n.input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  padding: 11px 8px;\n  font-size: 0.9rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  outline: none;\n}\n.input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.toggle-vis[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 10px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n}\n.toggle-vis[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.toggle-vis[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: #1d56a3;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  margin-top: 4px;\n  transition: background 0.15s, transform 0.15s;\n}\n.btn-submit[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  margin-top: 24px;\n}\n.register-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  text-decoration: none;\n}\n.register-link[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1d56a3;\n}\n.register-link[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #64748b;\n  text-decoration: none;\n  font-size: 0.85rem;\n  transition: color 0.15s;\n}\n.back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #1d56a3;\n}\n.login-info[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      145deg,\n      #0f2644 0%,\n      #1d56a3 60%,\n      #1a6fd4 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n}\n@media (max-width: 768px) {\n  .login-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.info-content[_ngcontent-%COMP%] {\n  max-width: 380px;\n  color: #fff;\n}\n.info-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.2;\n  margin: 0 0 12px;\n  letter-spacing: -0.02em;\n}\n.info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.75;\n  margin: 0 0 36px;\n}\n.feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.95rem;\n  opacity: 0.9;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.8;\n  width: 24px;\n}\n/*# sourceMappingURL=login.css.map */'] });
var AdminLogin = _AdminLogin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLogin, [{
    type: Component,
    args: [{ selector: "app-admin-login", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="login-page">
  <div class="login-card">

    <div class="login-header">
      <img src="assets/images/global/logo2.png" alt="Logo CUIDANDO DE TI" class="login-logo">
      <h1>Panel Administrativo</h1>
      <p>Ingresa tus credenciales para continuar</p>
    </div>

    @if (errorMsg()) {
      <div class="alert-error">
        <span class="material-icons">error_outline</span>
        {{ errorMsg() }}
      </div>
    }

    <form (ngSubmit)="onSubmit()" class="login-form">
      <div class="field">
        <label for="email">Correo electr\xF3nico</label>
        <div class="input-row">
          <span class="material-icons field-icon">mail_outline</span>
          <input id="email" type="email" [(ngModel)]="email" name="email"
            placeholder="usuario@ipscuidandodeti.com" autocomplete="email" required>
        </div>
      </div>

      <div class="field">
        <label for="password">Contrase\xF1a</label>
        <div class="input-row">
          <span class="material-icons field-icon">lock_outline</span>
          <input id="password" [type]="showPassword() ? 'text' : 'password'"
            [(ngModel)]="password" name="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            autocomplete="current-password" required>
          <button type="button" class="toggle-vis" (click)="togglePassword()" tabindex="-1">
            <span class="material-icons">{{ showPassword() ? 'visibility_off' : 'visibility' }}</span>
          </button>
        </div>
      </div>

      <button type="submit" class="btn-submit" [disabled]="loading()">
        @if (loading()) {
          <span class="spinner"></span> Verificando...
        } @else {
          <span class="material-icons">login</span> Ingresar
        }
      </button>
    </form>

    <div class="login-footer-links">
      <a routerLink="/" class="back-link">
        <span class="material-icons">arrow_back</span> Volver al sitio web
      </a>
      <a routerLink="/registro" class="register-link">
        \xBFEres paciente? <strong>Reg\xEDstrate aqu\xED</strong>
      </a>
    </div>

  </div>

  <div class="login-info">
    <div class="info-content">
      <h2>CUIDANDO DE TI<br>CyE IPS SAS</h2>
      <p>Sistema integrado de gesti\xF3n de servicios de salud</p>
      <ul class="feature-list">
        <li><span class="material-icons">calendar_month</span> Gesti\xF3n de citas y disponibilidad</li>
        <li><span class="material-icons">folder_open</span> Historias cl\xEDnicas electr\xF3nicas</li>
        <li><span class="material-icons">people</span> Administraci\xF3n de pacientes</li>
        <li><span class="material-icons">summarize</span> Reportes RIPS 2.0</li>
      </ul>
    </div>
  </div>
</div>
`, styles: ['/* src/app/admin/login/login.scss */\n:host {\n  display: block;\n  height: 100vh;\n}\n.login-page {\n  display: flex;\n  height: 100vh;\n  font-family: "Poppins", sans-serif;\n}\n.login-card {\n  flex: 0 0 440px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 48px 40px;\n  border-right: 1px solid #e2e8f0;\n}\n@media (max-width: 768px) {\n  .login-card {\n    flex: 1;\n    border-right: none;\n    padding: 32px 24px;\n  }\n}\n.login-header {\n  margin-bottom: 32px;\n}\n.login-header .login-logo {\n  height: 48px;\n  margin-bottom: 20px;\n  display: block;\n}\n.login-header h1 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.login-header p {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.875rem;\n  margin-bottom: 20px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.field label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.input-row {\n  display: flex;\n  align-items: center;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.input-row:focus-within {\n  border-color: #2d8cff;\n  box-shadow: 0 0 0 3px rgba(45, 140, 255, 0.12);\n  background: #fff;\n}\n.field-icon {\n  font-size: 18px;\n  color: #64748b;\n  padding: 0 10px;\n  pointer-events: none;\n}\n.input-row input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  padding: 11px 8px;\n  font-size: 0.9rem;\n  font-family: "Poppins", sans-serif;\n  color: #0f172a;\n  outline: none;\n}\n.input-row input::placeholder {\n  color: #94a3b8;\n}\n.toggle-vis {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 10px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n}\n.toggle-vis:hover {\n  color: #0f172a;\n}\n.toggle-vis .material-icons {\n  font-size: 18px;\n}\n.btn-submit {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: #1d56a3;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  margin-top: 4px;\n  transition: background 0.15s, transform 0.15s;\n}\n.btn-submit .material-icons {\n  font-size: 18px;\n}\n.btn-submit:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n.btn-submit:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-footer-links {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  margin-top: 24px;\n}\n.register-link {\n  font-size: 0.85rem;\n  color: #64748b;\n  text-decoration: none;\n}\n.register-link strong {\n  color: #1d56a3;\n}\n.register-link:hover strong {\n  text-decoration: underline;\n}\n.back-link {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #64748b;\n  text-decoration: none;\n  font-size: 0.85rem;\n  transition: color 0.15s;\n}\n.back-link .material-icons {\n  font-size: 16px;\n}\n.back-link:hover {\n  color: #1d56a3;\n}\n.login-info {\n  flex: 1;\n  background:\n    linear-gradient(\n      145deg,\n      #0f2644 0%,\n      #1d56a3 60%,\n      #1a6fd4 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n}\n@media (max-width: 768px) {\n  .login-info {\n    display: none;\n  }\n}\n.info-content {\n  max-width: 380px;\n  color: #fff;\n}\n.info-content h2 {\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.2;\n  margin: 0 0 12px;\n  letter-spacing: -0.02em;\n}\n.info-content p {\n  font-size: 1rem;\n  opacity: 0.75;\n  margin: 0 0 36px;\n}\n.feature-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.feature-list li {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.95rem;\n  opacity: 0.9;\n}\n.feature-list li .material-icons {\n  font-size: 20px;\n  opacity: 0.8;\n  width: 24px;\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLogin, { className: "AdminLogin", filePath: "src/app/admin/login/login.ts", lineNumber: 14 });
})();
export {
  AdminLogin
};
//# sourceMappingURL=chunk-3JLFRLZB.js.map
