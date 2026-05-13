export default `<!DOCTYPE html><html lang="es"><head>
  <meta charset="utf-8">
  <title>Login | Panel Administrativo</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Accede a nuestros servicios de salud con la calidad y el respaldo que mereces. Tu bienestar es nuestra prioridad absoluta.">
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Bootstrap Icons para complementar -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="styles.css"><style ng-app-id="ng">

main[_ngcontent-ng-c2518764147] {
  overflow-x: hidden;
}
main.main-content[_ngcontent-ng-c2518764147] {
  min-height: calc(100vh - 200px);
  padding-top: 35px;
}
main[_ngcontent-ng-c2518764147]:not(.main-content) {
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
}
*[_ngcontent-ng-c2518764147] {
  box-sizing: border-box;
}
button[_ngcontent-ng-c2518764147], 
a[_ngcontent-ng-c2518764147] {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
img[_ngcontent-ng-c2518764147] {
  max-width: 100%;
  height: auto;
}
html[_ngcontent-ng-c2518764147] {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
@media (max-width: 768px) {
  main[_ngcontent-ng-c2518764147] {
    min-height: calc(100vh - 150px);
  }
}
@media (max-width: 480px) {
  main[_ngcontent-ng-c2518764147] {
    min-height: calc(100vh - 120px);
  }
}
.floating-contact-container[_ngcontent-ng-c2518764147] {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  align-items: center;
}
.floating-icons-stack[_ngcontent-ng-c2518764147] {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
.floating-icon-wrapper[_ngcontent-ng-c2518764147] {
  position: relative;
  display: flex;
  align-items: center;
}
.floating-contact-text[_ngcontent-ng-c2518764147] {
  position: absolute;
  right: 100%;
  margin-right: 8px;
  background-color: white;
  color: #005A9C;
  padding: 8px 16px;
  border-radius: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: all 0.3s ease;
  pointer-events: none;
}
.floating-text-top[_ngcontent-ng-c2518764147] {
  color: #0088cc;
}
.floating-text-bottom[_ngcontent-ng-c2518764147] {
  color: #25d366;
}
.floating-icon-wrapper[_ngcontent-ng-c2518764147]:hover   .floating-contact-text[_ngcontent-ng-c2518764147] {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}
.floating-icon-link[_ngcontent-ng-c2518764147] {
  display: flex;
  position: relative;
  z-index: 1;
  background: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}
.floating-icon-link[_ngcontent-ng-c2518764147]:hover {
  transform: scale(1.1);
}
.floating-icon-link.floating-icon-top[_ngcontent-ng-c2518764147] {
  background:
    linear-gradient(
      135deg,
      #0088cc 0%,
      #00a8ff 100%);
  border: 2px solid #fff;
}
.floating-icon-link.floating-icon-top[_ngcontent-ng-c2518764147]:hover {
  box-shadow: 0 6px 20px rgba(0, 136, 204, 0.3);
}
.floating-icon-link.floating-icon-top[_ngcontent-ng-c2518764147]   mat-icon[_ngcontent-ng-c2518764147] {
  font-size: 1.8rem;
  width: 1.8rem;
  height: 1.8rem;
  color: white;
}
.floating-icon-link.floating-icon-bottom[_ngcontent-ng-c2518764147] {
  background:
    linear-gradient(
      135deg,
      #25d366 0%,
      #128c7e 100%);
  border: 2px solid #fff;
}
.floating-icon-link.floating-icon-bottom[_ngcontent-ng-c2518764147]:hover {
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
}
.floating-icon-link[_ngcontent-ng-c2518764147]   img[_ngcontent-ng-c2518764147] {
  width: 80%;
  height: 80%;
  object-fit: contain;
  animation: _ngcontent-ng-c2518764147_signal-pulse 2.5s infinite ease-in-out;
}
@keyframes _ngcontent-ng-c2518764147_signal-pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.8;
  }
}
@media (max-width: 768px) {
  .floating-contact-container[_ngcontent-ng-c2518764147] {
    bottom: 20px;
    right: 20px;
  }
  .floating-icon-link[_ngcontent-ng-c2518764147] {
    width: 50px;
    height: 50px;
  }
  .floating-icon-link.floating-icon-top[_ngcontent-ng-c2518764147]   mat-icon[_ngcontent-ng-c2518764147] {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .floating-contact-text[_ngcontent-ng-c2518764147] {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
@media (max-width: 480px) {
  .floating-contact-container[_ngcontent-ng-c2518764147] {
    bottom: 15px;
    right: 15px;
  }
  .floating-icon-link[_ngcontent-ng-c2518764147] {
    width: 45px;
    height: 45px;
  }
  .floating-icon-link.floating-icon-top[_ngcontent-ng-c2518764147]   mat-icon[_ngcontent-ng-c2518764147] {
    font-size: 1.3rem;
    width: 1.3rem;
    height: 1.3rem;
  }
  .floating-contact-text[_ngcontent-ng-c2518764147] {
    font-size: 0.75rem;
    padding: 5px 10px;
  }
}
/*# sourceMappingURL=/app.css.map */</style><style ng-app-id="ng">.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}
</style><style ng-app-id="ng">

[_nghost-ng-c3053621516] {
  display: block;
  height: 100vh;
}
.login-page[_ngcontent-ng-c3053621516] {
  display: flex;
  height: 100vh;
  font-family: "Poppins", sans-serif;
}
.login-card[_ngcontent-ng-c3053621516] {
  flex: 0 0 440px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 40px;
  border-right: 1px solid #e2e8f0;
}
@media (max-width: 768px) {
  .login-card[_ngcontent-ng-c3053621516] {
    flex: 1;
    border-right: none;
    padding: 32px 24px;
  }
}
.login-header[_ngcontent-ng-c3053621516] {
  margin-bottom: 32px;
}
.login-header[_ngcontent-ng-c3053621516]   .login-logo[_ngcontent-ng-c3053621516] {
  height: 48px;
  margin-bottom: 20px;
  display: block;
}
.login-header[_ngcontent-ng-c3053621516]   h1[_ngcontent-ng-c3053621516] {
  font-size: 1.4rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px;
}
.login-header[_ngcontent-ng-c3053621516]   p[_ngcontent-ng-c3053621516] {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
}
.alert-error[_ngcontent-ng-c3053621516] {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fef2f2;
  color: #b91c1c;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.875rem;
  margin-bottom: 20px;
}
.alert-error[_ngcontent-ng-c3053621516]   .material-icons[_ngcontent-ng-c3053621516] {
  font-size: 18px;
}
.login-form[_ngcontent-ng-c3053621516] {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.field[_ngcontent-ng-c3053621516]   label[_ngcontent-ng-c3053621516] {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.input-row[_ngcontent-ng-c3053621516] {
  display: flex;
  align-items: center;
  background: #f1f5f9;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.input-row[_ngcontent-ng-c3053621516]:focus-within {
  border-color: #2d8cff;
  box-shadow: 0 0 0 3px rgba(45, 140, 255, 0.12);
  background: #fff;
}
.field-icon[_ngcontent-ng-c3053621516] {
  font-size: 18px;
  color: #64748b;
  padding: 0 10px;
  pointer-events: none;
}
.input-row[_ngcontent-ng-c3053621516]   input[_ngcontent-ng-c3053621516] {
  flex: 1;
  border: none;
  background: transparent;
  padding: 11px 8px;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  color: #0f172a;
  outline: none;
}
.input-row[_ngcontent-ng-c3053621516]   input[_ngcontent-ng-c3053621516]::placeholder {
  color: #94a3b8;
}
.toggle-vis[_ngcontent-ng-c3053621516] {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  color: #64748b;
  display: flex;
  align-items: center;
}
.toggle-vis[_ngcontent-ng-c3053621516]:hover {
  color: #0f172a;
}
.toggle-vis[_ngcontent-ng-c3053621516]   .material-icons[_ngcontent-ng-c3053621516] {
  font-size: 18px;
}
.btn-submit[_ngcontent-ng-c3053621516] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #1d56a3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.15s, transform 0.15s;
}
.btn-submit[_ngcontent-ng-c3053621516]   .material-icons[_ngcontent-ng-c3053621516] {
  font-size: 18px;
}
.btn-submit[_ngcontent-ng-c3053621516]:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-1px);
}
.btn-submit[_ngcontent-ng-c3053621516]:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
.spinner[_ngcontent-ng-c3053621516] {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _ngcontent-ng-c3053621516_spin 0.7s linear infinite;
  display: inline-block;
}
@keyframes _ngcontent-ng-c3053621516_spin {
  to {
    transform: rotate(360deg);
  }
}
.login-footer-links[_ngcontent-ng-c3053621516] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
}
.register-link[_ngcontent-ng-c3053621516] {
  font-size: 0.85rem;
  color: #64748b;
  text-decoration: none;
}
.register-link[_ngcontent-ng-c3053621516]   strong[_ngcontent-ng-c3053621516] {
  color: #1d56a3;
}
.register-link[_ngcontent-ng-c3053621516]:hover   strong[_ngcontent-ng-c3053621516] {
  text-decoration: underline;
}
.back-link[_ngcontent-ng-c3053621516] {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.15s;
}
.back-link[_ngcontent-ng-c3053621516]   .material-icons[_ngcontent-ng-c3053621516] {
  font-size: 16px;
}
.back-link[_ngcontent-ng-c3053621516]:hover {
  color: #1d56a3;
}
.login-info[_ngcontent-ng-c3053621516] {
  flex: 1;
  background:
    linear-gradient(
      145deg,
      #0f2644 0%,
      #1d56a3 60%,
      #1a6fd4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
}
@media (max-width: 768px) {
  .login-info[_ngcontent-ng-c3053621516] {
    display: none;
  }
}
.info-content[_ngcontent-ng-c3053621516] {
  max-width: 380px;
  color: #fff;
}
.info-content[_ngcontent-ng-c3053621516]   h2[_ngcontent-ng-c3053621516] {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}
.info-content[_ngcontent-ng-c3053621516]   p[_ngcontent-ng-c3053621516] {
  font-size: 1rem;
  opacity: 0.75;
  margin: 0 0 36px;
}
.feature-list[_ngcontent-ng-c3053621516] {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.feature-list[_ngcontent-ng-c3053621516]   li[_ngcontent-ng-c3053621516] {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  opacity: 0.9;
}
.feature-list[_ngcontent-ng-c3053621516]   li[_ngcontent-ng-c3053621516]   .material-icons[_ngcontent-ng-c3053621516] {
  font-size: 20px;
  opacity: 0.8;
  width: 24px;
}
/*# sourceMappingURL=/login.css.map */</style></head>
<body class="mat-typography"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["submit","input","compositionstart","compositionend","click"],["blur"]);</script>
  <app-root ng-version="20.1.2" _nghost-ng-c2518764147="" ngh="1" ng-server-context="ssg"><!--container--><main _ngcontent-ng-c2518764147="" class=""><router-outlet _ngcontent-ng-c2518764147=""></router-outlet><app-admin-login _nghost-ng-c3053621516="" ngh="0"><div _ngcontent-ng-c3053621516="" class="login-page"><div _ngcontent-ng-c3053621516="" class="login-card"><div _ngcontent-ng-c3053621516="" class="login-header"><img _ngcontent-ng-c3053621516="" src="assets/images/global/logo2.png" alt="Logo CUIDANDO DE TI" class="login-logo"><h1 _ngcontent-ng-c3053621516="">Panel Administrativo</h1><p _ngcontent-ng-c3053621516="">Ingresa tus credenciales para continuar</p></div><!--container--><form _ngcontent-ng-c3053621516="" novalidate="" class="login-form ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div _ngcontent-ng-c3053621516="" class="field"><label _ngcontent-ng-c3053621516="" for="email">Correo electrónico</label><div _ngcontent-ng-c3053621516="" class="input-row"><span _ngcontent-ng-c3053621516="" class="material-icons field-icon">mail_outline</span><input _ngcontent-ng-c3053621516="" id="email" type="email" name="email" placeholder="usuario@ipscuidandodeti.com" autocomplete="email" required="" class="ng-untouched ng-pristine ng-invalid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"></div></div><div _ngcontent-ng-c3053621516="" class="field"><label _ngcontent-ng-c3053621516="" for="password">Contraseña</label><div _ngcontent-ng-c3053621516="" class="input-row"><span _ngcontent-ng-c3053621516="" class="material-icons field-icon">lock_outline</span><input _ngcontent-ng-c3053621516="" id="password" name="password" placeholder="••••••••" autocomplete="current-password" required="" type="password" class="ng-untouched ng-pristine ng-invalid" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"><button _ngcontent-ng-c3053621516="" type="button" tabindex="-1" class="toggle-vis" jsaction="click:;"><span _ngcontent-ng-c3053621516="" class="material-icons">visibility</span></button></div></div><button _ngcontent-ng-c3053621516="" type="submit" class="btn-submit"><!--container--><span _ngcontent-ng-c3053621516="" class="material-icons">login</span> Ingresar <!--container--></button></form><div _ngcontent-ng-c3053621516="" class="login-footer-links"><a _ngcontent-ng-c3053621516="" routerlink="/" class="back-link" href="/" jsaction="click:;"><span _ngcontent-ng-c3053621516="" class="material-icons">arrow_back</span> Volver al sitio web </a><a _ngcontent-ng-c3053621516="" routerlink="/registro" class="register-link" href="/registro" jsaction="click:;"> ¿Eres paciente? <strong _ngcontent-ng-c3053621516="">Regístrate aquí</strong></a></div></div><div _ngcontent-ng-c3053621516="" class="login-info"><div _ngcontent-ng-c3053621516="" class="info-content"><h2 _ngcontent-ng-c3053621516="">CUIDANDO DE TI<br _ngcontent-ng-c3053621516="">CyE IPS SAS</h2><p _ngcontent-ng-c3053621516="">Sistema integrado de gestión de servicios de salud</p><ul _ngcontent-ng-c3053621516="" class="feature-list"><li _ngcontent-ng-c3053621516=""><span _ngcontent-ng-c3053621516="" class="material-icons">calendar_month</span> Gestión de citas y disponibilidad</li><li _ngcontent-ng-c3053621516=""><span _ngcontent-ng-c3053621516="" class="material-icons">folder_open</span> Historias clínicas electrónicas</li><li _ngcontent-ng-c3053621516=""><span _ngcontent-ng-c3053621516="" class="material-icons">people</span> Administración de pacientes</li><li _ngcontent-ng-c3053621516=""><span _ngcontent-ng-c3053621516="" class="material-icons">summarize</span> Reportes RIPS 2.0</li></ul></div></div></div></app-admin-login><!--container--></main><!--container--><!--container--></app-root>
<link rel="modulepreload" href="chunk-EFCNBKEP.js"><link rel="modulepreload" href="chunk-3N2L2BUB.js"><link rel="modulepreload" href="chunk-PT7R7SID.js"><link rel="modulepreload" href="chunk-QOYWAKCN.js"><link rel="modulepreload" href="chunk-QNZMPU6U.js"><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-WICBHKIH.js">
<link rel="modulepreload" href="chunk-NCFNA77J.js">

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"8":"t3","28":"t4","29":"t5"},"c":{"8":[],"28":[],"29":[{"i":"t5","r":2}]}},{"t":{"0":"t0","3":"t1","4":"t2"},"c":{"0":[],"2":[{"i":"c3053621516","r":1}],"3":[],"4":[]}}]}</script></body></html>`;