import './polyfills.server.mjs';
import {
  Router
} from "./chunk-MZDMLOMT.mjs";
import {
  HttpClient,
  Injectable,
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-OCB3LWCK.mjs";

// src/app/services/auth.service.ts
var API_URL = "/api";
var _AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this.platformId = inject(PLATFORM_ID);
    this.currentUser = signal(null, ...ngDevMode ? [{ debugName: "currentUser" }] : []);
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem("token");
      if (token) {
        this.fetchMe().subscribe({ error: () => this.logout() });
      }
    }
  }
  login(email, password) {
    return this.http.post(`${API_URL}/auth/login/json`, { email, password }).pipe(tap((res) => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("role", res.role);
      }
      this.currentUser.set({
        id: res.user_id,
        full_name: res.full_name,
        role: res.role,
        email
      });
    }));
  }
  fetchMe() {
    return this.http.get(`${API_URL}/auth/me`).pipe(tap((user) => this.currentUser.set(user)));
  }
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    }
    this.currentUser.set(null);
    this.router.navigate(["/admin/login"]);
  }
  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem("token");
    }
    return null;
  }
  isLoggedIn() {
    return this.currentUser() !== null;
  }
  hasRole(...roles) {
    const user = this.currentUser();
    return user !== null && roles.includes(user.role);
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-VDQOQQLF.mjs.map
