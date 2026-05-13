import './polyfills.server.mjs';
import {
  HttpClient,
  HttpParams,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OCB3LWCK.mjs";

// src/app/services/api.service.ts
var BASE = "/api";
var BLOOD_TYPE_LABEL = {
  A_POS: "A+",
  A_NEG: "A-",
  B_POS: "B+",
  B_NEG: "B-",
  AB_POS: "AB+",
  AB_NEG: "AB-",
  O_POS: "O+",
  O_NEG: "O-",
  UNKNOWN: "Desconocido"
};
var _ApiService = class _ApiService {
  constructor() {
    this.http = inject(HttpClient);
  }
  // Dashboard
  getDashboardStats() {
    return this.http.get(`${BASE}/dashboard/stats`);
  }
  // Users
  getUsers(role) {
    let params = new HttpParams();
    if (role)
      params = params.set("role", role);
    return this.http.get(`${BASE}/users`, { params });
  }
  getProfessionals() {
    return this.http.get(`${BASE}/users/professionals`);
  }
  createUser(body) {
    return this.http.post(`${BASE}/users/`, body);
  }
  toggleUserActive(id, is_active) {
    return this.http.patch(`${BASE}/users/${id}/`, { is_active });
  }
  // Patients
  getPatients(search) {
    let params = new HttpParams();
    if (search)
      params = params.set("search", search);
    return this.http.get(`${BASE}/patients`, { params });
  }
  getPatient(id) {
    return this.http.get(`${BASE}/patients/${id}`);
  }
  getPatientByDocument(doc) {
    return this.http.get(`${BASE}/patients/document/${doc}`);
  }
  createPatient(body) {
    return this.http.post(`${BASE}/patients/`, body);
  }
  updatePatient(id, body) {
    return this.http.patch(`${BASE}/patients/${id}/`, body);
  }
  // Appointments
  getAppointments(params) {
    let p = new HttpParams();
    if (params?.date_from)
      p = p.set("date_from", params.date_from);
    if (params?.date_to)
      p = p.set("date_to", params.date_to);
    if (params?.professional_id)
      p = p.set("professional_id", params.professional_id);
    if (params?.patient_id)
      p = p.set("patient_id", params.patient_id);
    if (params?.document_number)
      p = p.set("document_number", params.document_number);
    if (params?.status)
      p = p.set("status", params.status);
    return this.http.get(`${BASE}/appointments`, { params: p });
  }
  getTodayAppointments() {
    return this.http.get(`${BASE}/appointments/today`);
  }
  createAppointment(body) {
    return this.http.post(`${BASE}/appointments/`, body);
  }
  updateAppointment(id, body) {
    return this.http.patch(`${BASE}/appointments/${id}/`, body);
  }
  cancelAppointment(id, reason) {
    return this.http.delete(`${BASE}/appointments/${id}/`, { params: { reason } });
  }
  // Availability
  getAvailabilitySlots(professionalId) {
    return this.http.get(`${BASE}/availability/${professionalId}/slots`);
  }
  addAvailabilitySlot(professionalId, body) {
    return this.http.post(`${BASE}/availability/${professionalId}/slots/`, body);
  }
  deleteAvailabilitySlot(professionalId, slotId) {
    return this.http.delete(`${BASE}/availability/${professionalId}/slots/${slotId}/`);
  }
  getCalendar(professionalId, startDate, endDate) {
    const params = new HttpParams().set("start_date", startDate).set("end_date", endDate);
    return this.http.get(`${BASE}/availability/${professionalId}/calendar`, { params });
  }
  getBlockedDates(professionalId) {
    return this.http.get(`${BASE}/availability/${professionalId}/blocked-dates`);
  }
  blockDate(professionalId, date, reason) {
    return this.http.post(`${BASE}/availability/blocked-dates/`, { professional_id: professionalId, blocked_date: date, reason });
  }
  // Clinical Records
  listClinicalRecords(search) {
    let params = new HttpParams();
    if (search)
      params = params.set("search", search);
    return this.http.get(`${BASE}/clinical-records`, { params });
  }
  getClinicalRecord(patientId) {
    return this.http.get(`${BASE}/clinical-records/patients/${patientId}`);
  }
  openClinicalRecord(patientId) {
    return this.http.post(`${BASE}/clinical-records/patients/${patientId}/`, {});
  }
  addClinicalEntry(body) {
    return this.http.post(`${BASE}/clinical-records/entries/`, body);
  }
  // Patient registration (public)
  registerPatient(body) {
    return this.http.post(`${BASE}/auth/register/`, body);
  }
  // Patient portal
  getMyAppointments() {
    return this.http.get(`${BASE}/portal/my-appointments`);
  }
  getMyProfile() {
    return this.http.get(`${BASE}/portal/me`);
  }
  updatePatientProfile(body) {
    return this.http.patch(`${BASE}/portal/profile/`, body);
  }
  updateStaffProfile(body) {
    return this.http.patch(`${BASE}/auth/profile/`, body);
  }
  changePassword(body) {
    return this.http.post(`${BASE}/auth/change-password/`, body);
  }
  bookPortalAppointment(body) {
    return this.http.post(`${BASE}/portal/book-appointment/`, body);
  }
  // Public (no auth)
  getPublicServices() {
    return this.http.get(`${BASE}/public/services`);
  }
  getPublicAvailability(professionalId, dateFrom, dateTo) {
    const params = new HttpParams().set("professional_id", professionalId).set("date_from", dateFrom).set("date_to", dateTo);
    return this.http.get(`${BASE}/public/availability`, { params });
  }
  // Audit
  getAuditLogs(params) {
    let p = new HttpParams();
    if (params?.search)
      p = p.set("search", params.search);
    if (params?.entity_type)
      p = p.set("entity_type", params.entity_type);
    if (params?.limit)
      p = p.set("limit", params.limit);
    return this.http.get(`${BASE}/audit/logs`, { params: p });
  }
  // RIPS
  getRIPSReports() {
    return this.http.get(`${BASE}/rips`);
  }
  generateRIPS(periodStart, periodEnd, notes) {
    return this.http.post(`${BASE}/rips/generate/`, { period_start: periodStart, period_end: periodEnd, notes });
  }
  downloadRIPS(id) {
    return this.http.get(`${BASE}/rips/${id}/download`, { responseType: "blob" });
  }
  markRIPSSubmitted(id) {
    return this.http.patch(`${BASE}/rips/${id}/submit/`, {});
  }
};
_ApiService.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiService)();
};
_ApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
var ApiService = _ApiService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  BLOOD_TYPE_LABEL,
  ApiService
};
//# sourceMappingURL=chunk-NFAQJ3OI.mjs.map
