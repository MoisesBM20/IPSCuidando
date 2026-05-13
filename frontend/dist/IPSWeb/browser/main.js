import {
  A11yModule,
  AriaDescriber,
  ArrayDataSource,
  BidiModule,
  Directionality,
  ESCAPE,
  FocusMonitor,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatListModule,
  MatMiniFabButton,
  ObserversModule,
  Platform,
  RtlScrollAxisType,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
  _animationsDisabled,
  _getEventTarget,
  _isTestEnvironment,
  coerceArray,
  coerceBooleanProperty,
  coerceCssPixelValue,
  coerceElement,
  coerceNumberProperty,
  getRtlScrollAxisType,
  getSupportedInputTypes,
  hasModifierKey,
  isDataSource,
  normalizePassiveListenerOptions,
  supportsScrollBehavior
} from "./chunk-EFCNBKEP.js";
import {
  AuthService
} from "./chunk-3N2L2BUB.js";
import {
  DefaultValueAccessor,
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-PT7R7SID.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  withEventReplay
} from "./chunk-QOYWAKCN.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgModuleRef$1,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  afterRenderEffect,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  catchError,
  computed,
  contentChild,
  createComponent,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  inject,
  isObservable,
  isPlatformBrowser,
  isSignal,
  map,
  merge,
  of,
  pairwise,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZonelessChangeDetection,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  untracked,
  viewChild,
  withFetch,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-QNZMPU6U.js";

// src/app/components/hero/hero.ts
var _Hero = class _Hero {
  constructor() {
    this.slides = [
      {
        url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
        alt: "Enfermer\xEDa a domicilio",
        description: "Cuidados expertos en tu hogar"
      },
      {
        url: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
        alt: "Consulta m\xE9dica familiar",
        description: "Atenci\xF3n integral sin desplazamientos."
      },
      {
        url: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=800&auto=format&fit=crop",
        alt: "Terapia f\xEDsica",
        description: "Rehabilitaci\xF3n para adultos mayores."
      },
      {
        url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
        alt: "Doctora sonriendo",
        description: "Profesionalismo y calidez humana."
      },
      {
        url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
        alt: "Visita m\xE9dica",
        description: "Especialistas en tu hogar."
      },
      {
        url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
        alt: "Paciente sonriente",
        description: "Tu bienestar es nuestra prioridad."
      }
    ];
    this.currentIndex = 0;
    this.itemsPerSlide = 3;
    this.showModal = false;
    this.selectedSlide = null;
  }
  get totalSlides() {
    return Math.ceil(this.slides.length / this.itemsPerSlide);
  }
  ngOnInit() {
    this.startAutoSlide();
  }
  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.goToNext(), 3e3);
  }
  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalSlides - 1;
    }
  }
  goToNext() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }
  openModal(slide) {
    this.selectedSlide = slide;
    this.showModal = true;
    document.body.style.overflow = "hidden";
  }
  closeModal() {
    this.showModal = false;
    this.selectedSlide = null;
    document.body.style.overflow = "auto";
  }
};
_Hero.\u0275fac = function Hero_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Hero)();
};
_Hero.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero, selectors: [["app-hero"]], decls: 214, vars: 0, consts: [[1, "hero-section"], [1, "hero-background"], [1, "hero-bg-image"], [1, "hero-overlay"], [1, "hero-pattern"], [1, "container", "hero-container"], [1, "hero-content"], [1, "hero-text"], [1, "hero-title"], [1, "hero-title-highlight"], [1, "hero-description"], [1, "hero-actions"], ["mat-raised-button", "", "color", "primary", "routerLink", "/pqrs", 1, "hero-primary-btn"], ["mat-stroked-button", "", "routerLink", "/question", 1, "hero-secondary-btn"], [1, "hero-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "section-padding", "services-section"], [1, "container"], [1, "section-header"], [1, "section-title"], [1, "section-subtitle"], [1, "services-grid"], [1, "service-card"], [1, "service-icon"], [1, "section-action"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/services", 1, "see-more-btn"], [1, "pillars-section", "section-padding"], [1, "pillars-content"], [1, "pillars-text"], [1, "pillars-grid"], [1, "pillar-card"], [1, "pillar-icon-wrapper"], [1, "pillar-icon"], [1, "pillar-number"], [1, "pillar-content"], [1, "pillar-title"], [1, "pillar-description"], [1, "pillars-image"], ["src", "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop", "alt", "Doctora sonriendo a un paciente", 1, "main-pillar-img"], [1, "video-section", "section-padding"], [1, "container", "video-flex"], [1, "video-text"], [1, "video-title"], [1, "video-title-highlight"], [1, "video-desc"], [1, "video-card"], [1, "video-frame"], ["controls", "", "preload", "metadata", "poster", "assets/images/miniatura-video.jpg", 1, "video-player"], ["src", "assets/sueroterapia.mp4", "type", "video/mp4"], [1, "video-info-bar"], [1, "logo-container"], ["src", "assets/images/global/logo2.png", "alt", "Logo MayorSalud", 1, "video-logo"], [1, "video-info-text"], [1, "video-brand"], [1, "video-subbrand"], [1, "testimonials-section", "section-padding"], [1, "testimonials-grid"], [1, "testimonial-card"], [1, "testimonial-author"], ["src", "https://images.icon-icons.com/1674/PNG/512/person_110935.png", "alt", "Foto de Ana P\xE9rez"], ["src", "https://images.icon-icons.com/1674/PNG/512/person_110935.png", "alt", "Foto de Carlos G\xF3mez"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/testimonials", 1, "see-more-btn"]], template: function Hero_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h1", 8);
    \u0275\u0275text(9, " Cuidamos de ti y tu familia");
    \u0275\u0275element(10, "br");
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12, "TU SALUD PRIMERO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 10);
    \u0275\u0275text(14, " Accede a nuestros servicios de salud con la calidad y el respaldo que mereces. Tu bienestar es nuestra prioridad absoluta. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "button", 12)(17, "mat-icon");
    \u0275\u0275text(18, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " \xA1Cont\xE1ctanos! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 13)(21, "mat-icon");
    \u0275\u0275text(22, "priority_high");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Preguntas ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "span", 16);
    \u0275\u0275text(27, "50+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 17);
    \u0275\u0275text(29, "Pacientes atendidos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 15)(31, "span", 16);
    \u0275\u0275text(32, "24/7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 17);
    \u0275\u0275text(34, "Atenci\xF3n disponible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "span", 16);
    \u0275\u0275text(37, "98%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 17);
    \u0275\u0275text(39, "Satisfacci\xF3n");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(40, "section", 18)(41, "div", 19)(42, "div", 20)(43, "h2", 21);
    \u0275\u0275text(44, "Nuestros Servicios Domiciliarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 22);
    \u0275\u0275text(46, "Llevamos atenci\xF3n m\xE9dica de alta calidad directamente a tu puerta, con un equipo profesional y comprometido.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 23)(48, "mat-card", 24)(49, "div", 25)(50, "mat-icon");
    \u0275\u0275text(51, "house-heart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "mat-card-title");
    \u0275\u0275text(53, "Atenci\xF3n M\xE9dica Domiciliaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-card-content")(55, "p");
    \u0275\u0275text(56, "\u2022 Evaluaci\xF3n m\xE9dica general y de especialidades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p");
    \u0275\u0275text(58, "\u2022	Control de enfermedades cr\xF3nicas (hipertensi\xF3n, diabetes, etc.)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p");
    \u0275\u0275text(60, "\u2022	Manejo y ajuste de tratamientos farmacol\xF3gicos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p");
    \u0275\u0275text(62, "\u2022	Seguimiento postquir\xFArgico y de procedimientos m\xE9dicos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "mat-card", 24)(64, "div", 25)(65, "mat-icon");
    \u0275\u0275text(66, "person_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "mat-card-title");
    \u0275\u0275text(68, "Enfermer\xEDa Domiciliaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "mat-card-content")(70, "p");
    \u0275\u0275text(71, "\u2022	Administraci\xF3n de medicamentos y terapia intravenosa.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p");
    \u0275\u0275text(73, "\u2022	Curaci\xF3n de heridas y cuidado de \xFAlceras por presi\xF3n.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p");
    \u0275\u0275text(75, "\u2022	Monitoreo de signos vitales (presi\xF3n arterial, glucosa, etc.).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p");
    \u0275\u0275text(77, "\u2022	Asesoramiento a familiares sobre cuidados b\xE1sicos y prevenci\xF3n.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "mat-card", 24)(79, "div", 25)(80, "mat-icon");
    \u0275\u0275text(81, "accessibility_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "mat-card-title");
    \u0275\u0275text(83, "Nutricion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "mat-card-content")(85, "p");
    \u0275\u0275text(86, "\u2022	Monitoreo de condiciones cr\xF3nicas como diabetes, hipertensi\xF3n, insuficiencia renal, etc.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p");
    \u0275\u0275text(88, "\u2022	Educaci\xF3n al paciente y su familia sobre el autocontrol de la enfermedad.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "p");
    \u0275\u0275text(90, "\u2022	Planificaci\xF3n de dietas y h\xE1bitos de vida saludables.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "p");
    \u0275\u0275text(92, "\u2022	Ajustes y seguimiento del tratamiento m\xE9dico.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "mat-card", 24)(94, "div", 25)(95, "mat-icon");
    \u0275\u0275text(96, "psychology");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "mat-card-title");
    \u0275\u0275text(98, "Terapia Fisica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "mat-card-content")(100, "p");
    \u0275\u0275text(101, "Ofrecemos atenci\xF3n psicol\xF3gica domiciliaria dirigida a pacientes que atraviesan situaciones emocionales dif\xEDciles, como estr\xE9s, ansiedad, depresi\xF3n, trastornos del comportamiento, problemas de relaci\xF3n o cualquier otra condici\xF3n que afecte su equilibrio emocional");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(102, "div", 26)(103, "button", 27)(104, "mat-icon");
    \u0275\u0275text(105, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, " Ver todos los servicios\n");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(107, "section", 28)(108, "div", 19)(109, "div", 29)(110, "div", 30)(111, "h2", 21);
    \u0275\u0275text(112, "Nuestros Pilares Fundamentales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "p", 22);
    \u0275\u0275text(114, " En CUIDANDO DE TI CyE IPS SAS, ofrecemos servicios de salud integrales y humanizados de alta calidad, orientados a mejorar la calidad de vida de nuestros pacientes y sus familias. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 31)(116, "div", 32)(117, "div", 33)(118, "div", 34)(119, "mat-icon");
    \u0275\u0275text(120, "shield");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 35);
    \u0275\u0275text(122, "01");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 36)(124, "h3", 37);
    \u0275\u0275text(125, "Calidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "p", 38);
    \u0275\u0275text(127, "Protocolos rigurosos y personal calificado con certificaciones y est\xE1ndares ISO.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(128, "div", 32)(129, "div", 33)(130, "div", 34)(131, "mat-icon");
    \u0275\u0275text(132, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 35);
    \u0275\u0275text(134, "02");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 36)(136, "h3", 37);
    \u0275\u0275text(137, "Humanismo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "p", 38);
    \u0275\u0275text(139, "Trato digno, emp\xE1tico y cercano con atenci\xF3n personalizada y empat\xEDa profesional.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(140, "div", 32)(141, "div", 33)(142, "div", 34)(143, "mat-icon");
    \u0275\u0275text(144, "favorite");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div", 35);
    \u0275\u0275text(146, "03");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 36)(148, "h3", 37);
    \u0275\u0275text(149, "Cuidado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "p", 38);
    \u0275\u0275text(151, "Atenci\xF3n c\xE1lida y personalizada con cuidado integral y seguimiento continuo.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(152, "div", 39);
    \u0275\u0275element(153, "img", 40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(154, "section", 41)(155, "div", 42)(156, "div", 43)(157, "h2", 44);
    \u0275\u0275text(158, " Devolv\xE9 un poco del amor que te dieron");
    \u0275\u0275element(159, "br");
    \u0275\u0275elementStart(160, "span", 45);
    \u0275\u0275text(161, "con nuestros cuidados.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "p", 46);
    \u0275\u0275text(163, " Mir\xE1 el siguiente video para conocer en detalle nuestros servicios y el compromiso de nuestro equipo profesional. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 47)(165, "div", 48)(166, "video", 49);
    \u0275\u0275element(167, "source", 50);
    \u0275\u0275text(168, " Tu navegador no soporta el formato de video. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "div", 51)(170, "div", 52);
    \u0275\u0275element(171, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "div", 54)(173, "span", 55);
    \u0275\u0275text(174, "IPS Cuidando de Ti C & E ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "span", 56);
    \u0275\u0275text(176, "Informaci\xF3n de IPS");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(177, "section", 57)(178, "div", 19)(179, "div", 20)(180, "h2", 21);
    \u0275\u0275text(181, "Lo que nuestros pacientes dicen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "p", 22);
    \u0275\u0275text(183, "La satisfacci\xF3n y el bienestar de quienes conf\xEDan en nosotros es nuestro mayor orgullo.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "div", 58)(185, "mat-card", 59)(186, "mat-card-content")(187, "p");
    \u0275\u0275text(188, '"A m\xED, en lo personal, me fue bien; sent\xED un cambio. Con m\xE1s energ\xEDa y vitalidad, me ayud\xF3 mucho con mis ojos. Sufro de resequedad y siempre tengo que aplicarme unas gotas, pero sent\xED que tambi\xE9n me ayud\xF3, porque ya no me arden tanto los ojos. Gracias por pensar en nuestra salud"');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "mat-card-footer")(190, "div", 60);
    \u0275\u0275element(191, "img", 61);
    \u0275\u0275elementStart(192, "div")(193, "strong");
    \u0275\u0275text(194, "Esmeralda Natib");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "span");
    \u0275\u0275text(196, "Paciente");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(197, "mat-card", 59)(198, "mat-card-content")(199, "p");
    \u0275\u0275text(200, '"Tuvimos una excelente experiencia con el personal que nos aplic\xF3 los sueros en nuestra cl\xEDnica. El suero detox y la vitamina C fueron administrados de manera profesional, con mucha atenci\xF3n y cuidado en cada detalle. El equipo demostr\xF3 gran conocimiento y nos brind\xF3 confianza desde el primer momento. Sin duda, es un servicio de calidad que recomendamos por sus buenos resultados y trato amable."');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "mat-card-footer")(202, "div", 60);
    \u0275\u0275element(203, "img", 62);
    \u0275\u0275elementStart(204, "div")(205, "strong");
    \u0275\u0275text(206, "Mar\xEDa Camila Bedoya & Victor del Portillo Monard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "span");
    \u0275\u0275text(208, "Paciente");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(209, "div", 26)(210, "button", 63)(211, "mat-icon");
    \u0275\u0275text(212, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(213, " Ver m\xE1s testimonios ");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [CommonModule, MatButtonModule, MatButton, MatCardModule, MatCard, MatCardContent, MatCardFooter, MatCardTitle, MatIconModule, MatIcon, MatListModule, RouterModule, RouterLink], styles: [`

.hero-section[_ngcontent-%COMP%] {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background:
    linear-gradient(
      135deg,
      #f5f7fa 0%,
      #e2e8f0 50%,
      #f5f7fa 100%);
  overflow: hidden;
  margin-top: 0;
  padding-top: 65px;
}
.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-bg-image[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://colombia.unir.net/wp-content/uploads/sites/4/2024/05/Como-mejorar-los-servicios-de-salud2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(3px) brightness(0.8);
  transform: scale(1.1);
  z-index: 1;
  opacity: 0.5;
}
.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-overlay[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.247) 100%);
  z-index: 2;
}
.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .hero-pattern[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(
      circle at 20% 20%,
      rgba(0, 90, 156, 0.01) 0%,
      transparent 50%),
    radial-gradient(
      circle at 80% 80%,
      rgba(0, 181, 226, 0.005) 0%,
      transparent 50%),
    radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.02) 0%,
      transparent 70%);
  z-index: 3;
}
.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%] {
  position: relative;
  z-index: 4;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 65px);
  text-align: center;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {
  max-width: 800px;
  margin: 0 auto;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(204, 31, 31, 0.1);
  color: #005a9c;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 90, 156, 0.2);
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  width: 1.1rem;
  height: 1.1rem;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
  font-size: 4rem;
  font-weight: 800;
  color: #005a9c;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .hero-title-highlight[_ngcontent-%COMP%] {
  color: #00b5e2;
  position: relative;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .hero-title-highlight[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  border-radius: 2px;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {
  font-size: 1.3rem;
  color: #3b3b3b;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-primary-btn[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  color: white;
  border-radius: 2rem;
  padding: 1.2rem 2.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.4);
  transition: all 0.3s ease;
  border: none;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-primary-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  margin-right: 0.5rem;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-primary-btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 90, 156, 0.6);
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-secondary-btn[_ngcontent-%COMP%] {
  border: 2px solid #005a9c;
  color: #005a9c;
  border-radius: 2rem;
  padding: 1.2rem 2.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-secondary-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  margin-right: 0.5rem;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-secondary-btn[_ngcontent-%COMP%]:hover {
  background: #005a9c;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.3);
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 1.2rem;
  padding: 1.8rem 1rem;
  border: 2px solid rgba(0, 90, 156, 0.15);
  transition: all 0.3s ease;
  box-shadow: 0 6px 25px rgba(0, 90, 156, 0.1);
  position: relative;
  overflow: hidden;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  background: rgb(255, 255, 255);
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.2);
  border-color: rgba(0, 90, 156, 0.3);
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover::before {
  transform: scaleX(1);
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {
  font-size: 2.8rem;
  font-weight: 800;
  color: #005a9c;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 90, 156, 0.1);
}
.hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  color: #1e293b;
  font-weight: 600;
  line-height: 1.3;
}
.hero-section[_ngcontent-%COMP%]   .hero-wave[_ngcontent-%COMP%] {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 5;
  pointer-events: none;
}
.hero-section[_ngcontent-%COMP%]   .hero-wave[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  display: block;
}
.section-padding[_ngcontent-%COMP%] {
  padding: 5rem 0;
}
.container[_ngcontent-%COMP%] {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
.section-header[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 3.5rem;
}
.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}
.section-action[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.see-more-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.1);
  background: #fff;
  color: #005a9c;
  border: 2px solid #005a9c;
  transition: all 0.3s ease;
}
.see-more-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  color: #005a9c;
  transition: color 0.3s ease;
}
.see-more-btn[_ngcontent-%COMP%]:hover {
  background: #005a9c;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.2);
}
.see-more-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {
  color: #fff;
}
.services-section[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #e2e8f0 100%);
  position: relative;
  z-index: 1;
}
.services-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.services-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.service-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 1.2rem;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.08);
  border: 1px solid rgba(0, 90, 156, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.service-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.service-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.15);
}
.service-card[_ngcontent-%COMP%]:hover::before {
  transform: scaleX(1);
}
.service-card[_ngcontent-%COMP%]:hover   .service-icon[_ngcontent-%COMP%] {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(0, 90, 156, 0.3);
}
.service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.2rem;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  border-radius: 50%;
  width: 65px;
  height: 65px;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.2);
  transition: all 0.3s ease;
}
.service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
  color: #fff;
}
.service-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}
.service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}
.pillars-section[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #fff 0%,
      #f8fafc 100%);
  position: relative;
}
.pillars-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.pillars-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
.pillars-text[_ngcontent-%COMP%] {
  flex: 1;
  max-width: 600px;
}
.pillars-text[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.pillars-text[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.pillars-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}
.pillar-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.08);
  border: 1px solid rgba(0, 90, 156, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.pillar-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.pillar-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.15);
}
.pillar-card[_ngcontent-%COMP%]:hover::before {
  transform: scaleX(1);
}
.pillar-card[_ngcontent-%COMP%]:hover   .pillar-icon[_ngcontent-%COMP%] {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.3);
}
.pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%] {
  position: relative;
  margin-bottom: 1.5rem;
}
.pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-icon[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 90, 156, 0.2);
  transition: all 0.3s ease;
  margin: 0 auto;
}
.pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 1.8rem;
  width: 1.8rem;
  height: 1.8rem;
  color: #fff;
}
.pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-number[_ngcontent-%COMP%] {
  position: absolute;
  top: -10px;
  right: -10px;
  background:
    linear-gradient(
      135deg,
      #00b5e2 0%,
      #005a9c 100%);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 90, 156, 0.3);
}
.pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%] {
  text-align: center;
}
.pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%]   .pillar-title[_ngcontent-%COMP%] {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.3;
}
.pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%]   .pillar-description[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}
.pillars-image[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pillars-image[_ngcontent-%COMP%]   .main-pillar-img[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 450px;
  height: 350px;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.15);
  transition: transform 0.3s ease;
}
.pillars-image[_ngcontent-%COMP%]   .main-pillar-img[_ngcontent-%COMP%]:hover {
  transform: scale(1.02);
}
.video-section[_ngcontent-%COMP%] {
  padding: 80px 0;
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #e2e8f0 100%);
  position: relative;
}
.video-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.video-flex[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 992px) {
  .video-flex[_ngcontent-%COMP%] {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
}
.video-text[_ngcontent-%COMP%] {
  flex: 1;
  max-width: 500px;
}
.video-text[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
.video-text[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%]   .video-title-highlight[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}
.video-card[_ngcontent-%COMP%] {
  flex: 1.2;
  width: 100%;
  max-width: 650px;
  background: #fff;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 90, 156, 0.2);
  transition: transform 0.3s ease;
}
.video-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
}
.video-card[_ngcontent-%COMP%]   .video-frame[_ngcontent-%COMP%] {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  display: flex;
  align-items: center;
}
.video-card[_ngcontent-%COMP%]   .video-frame[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-card[_ngcontent-%COMP%]   .video-info-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 1.2rem 1.5rem;
  background: #ffffff;
  gap: 1.2rem;
}
.video-card[_ngcontent-%COMP%]   .video-info-bar[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  padding: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.video-card[_ngcontent-%COMP%]   .video-info-bar[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .video-logo[_ngcontent-%COMP%] {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.video-card[_ngcontent-%COMP%]   .video-info-bar[_ngcontent-%COMP%]   .video-info-text[_ngcontent-%COMP%]   .video-brand[_ngcontent-%COMP%] {
  display: block;
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
}
.video-card[_ngcontent-%COMP%]   .video-info-bar[_ngcontent-%COMP%]   .video-info-text[_ngcontent-%COMP%]   .video-subbrand[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.carousel-section[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #e2e8f0 100%);
  padding: 4rem 0;
  text-align: center;
  position: relative;
}
.carousel-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.carousel-section[_ngcontent-%COMP%]   .carousel-title[_ngcontent-%COMP%] {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 0.8rem;
  line-height: 1.2;
}
.carousel-section[_ngcontent-%COMP%]   .carousel-subtitle[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.carousel-container[_ngcontent-%COMP%] {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}
.carousel-container[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.15);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-container[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%]:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.25);
}
.carousel-container[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 1.3rem;
  color: #005a9c;
}
.carousel-container[_ngcontent-%COMP%]   .nav-button.left[_ngcontent-%COMP%] {
  left: 0.5rem;
}
.carousel-container[_ngcontent-%COMP%]   .nav-button.right[_ngcontent-%COMP%] {
  right: 0.5rem;
}
.carousel-container[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%] {
  overflow: hidden;
  border-radius: 1.2rem;
  margin: 0 1rem;
}
.carousel-container[_ngcontent-%COMP%]   .carousel-track[_ngcontent-%COMP%] {
  display: flex;
  transition: transform 0.6s ease-in-out;
}
.carousel-container[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {
  min-width: 33.333%;
  padding: 0 0.75rem;
  box-sizing: border-box;
  cursor: pointer;
}
.carousel-container[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.12);
  transition: all 0.3s ease;
  background: #fff;
}
.carousel-container[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.2);
}
.carousel-container[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.carousel-container[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {
  transform: scale(1.05);
}
.carousel-container[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .info-blur[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  padding: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.carousel-container[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .info-blur[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  width: 1.2rem;
  height: 1.2rem;
  animation: _ngcontent-%COMP%_pulse 2s infinite;
  color: #00b5e2;
}
.carousel-container[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .info-blur[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  flex: 1;
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}
.testimonials-section[_ngcontent-%COMP%] {
  background: #fff;
  position: relative;
}
.testimonials-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.testimonials-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}
.testimonial-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #e2e8f0 100%);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.08);
  border: 1px solid rgba(0, 90, 156, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.testimonial-card[_ngcontent-%COMP%]::before {
  content: '"';
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  color: rgba(0, 90, 156, 0.1);
  font-family: serif;
  line-height: 1;
}
.testimonial-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 90, 156, 0.15);
}
.testimonial-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.testimonial-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.7;
  font-style: italic;
  margin: 0;
  position: relative;
  z-index: 1;
}
.testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 4px 15px rgba(0, 90, 156, 0.1);
}
.testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #1e293b;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}
.testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.9rem;
}
@media (max-width: 1200px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 1.5rem;
  }
  .hero-section[_ngcontent-%COMP%] {
    min-height: 85vh;
    padding-top: 65px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {
    min-height: calc(85vh - 65px);
    padding: 1.5rem 0;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {
    max-width: 700px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 3.2rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {
    margin-bottom: 2rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {
    gap: 1.5rem;
    margin-top: 2rem;
    max-width: 500px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {
    padding: 1.5rem 0.8rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {
    font-size: 2.2rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .pillars-content[_ngcontent-%COMP%], 
   .video-flex[_ngcontent-%COMP%] {
    gap: 3rem;
  }
  .services-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  .testimonials-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}
@media (max-width: 992px) {
  .section-padding[_ngcontent-%COMP%] {
    padding: 4rem 0;
  }
  .hero-section[_ngcontent-%COMP%] {
    min-height: 80vh;
    padding-top: 60px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {
    min-height: calc(80vh - 60px);
    padding: 1rem 0;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {
    max-width: 600px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 2.8rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {
    margin-bottom: 1.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {
    gap: 1rem;
    margin-top: 1.5rem;
    max-width: 450px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {
    padding: 1.2rem 0.6rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .pillars-content[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
  .pillars-text[_ngcontent-%COMP%] {
    max-width: 100%;
  }
  .pillars-text[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
    text-align: center;
  }
  .pillars-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .video-flex[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
  .services-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  .carousel-item[_ngcontent-%COMP%] {
    min-width: 50%;
  }
  .testimonials-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
@media (max-width: 768px) {
  .section-padding[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .container[_ngcontent-%COMP%] {
    padding: 0 1rem;
  }
  .hero-section[_ngcontent-%COMP%] {
    min-height: 80vh;
    padding-top: 55px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {
    min-height: calc(80vh - 55px);
    padding: 1rem 0;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {
    max-width: 500px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 2.2rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 1.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-primary-btn[_ngcontent-%COMP%], 
   .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-secondary-btn[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {
    gap: 0.8rem;
    margin-top: 1.5rem;
    max-width: 400px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {
    padding: 1rem 0.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
    font-size: 0.8rem;
  }
  .section-header[_ngcontent-%COMP%] {
    margin-bottom: 2.5rem;
  }
  .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
    font-size: 1.8rem;
  }
  .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .services-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .service-card[_ngcontent-%COMP%] {
    padding: 1.8rem 1.2rem;
  }
  .service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {
    width: 60px;
    height: 60px;
  }
  .service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .pillars-text[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
    font-size: 1.8rem;
  }
  .pillars-text[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
    font-size: 0.95rem;
  }
  .pillars-grid[_ngcontent-%COMP%] {
    gap: 0.8rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%] {
    padding: 1.2rem 1rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%] {
    margin-bottom: 0.8rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-icon[_ngcontent-%COMP%] {
    width: 45px;
    height: 45px;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
    font-size: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-number[_ngcontent-%COMP%] {
    width: 20px;
    height: 20px;
    font-size: 0.65rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%]   .pillar-title[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%]   .pillar-description[_ngcontent-%COMP%] {
    font-size: 0.8rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%]   .pillar-features[_ngcontent-%COMP%]   .pillar-feature[_ngcontent-%COMP%] {
    font-size: 0.7rem;
  }
  .pillars-image[_ngcontent-%COMP%]   .main-pillar-img[_ngcontent-%COMP%] {
    max-width: 350px;
    height: 280px;
  }
  .video-text[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .carousel-section[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .carousel-section[_ngcontent-%COMP%]   .carousel-title[_ngcontent-%COMP%] {
    font-size: 1.8rem;
  }
  .carousel-section[_ngcontent-%COMP%]   .carousel-subtitle[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .carousel-item[_ngcontent-%COMP%] {
    min-width: 100%;
  }
  .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    height: 180px;
  }
  .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .info-blur[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .info-blur[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {
    font-size: 1.1rem;
    width: 1.1rem;
    height: 1.1rem;
  }
  .carousel-item[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .info-blur[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .testimonial-card[_ngcontent-%COMP%] {
    padding: 2rem;
  }
  .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    width: 50px;
    height: 50px;
  }
  .see-more-btn[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
  }
}
@media (max-width: 480px) {
  .section-padding[_ngcontent-%COMP%] {
    padding: 2rem 0;
  }
  .hero-section[_ngcontent-%COMP%] {
    min-height: 75vh;
    padding-top: 50px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {
    min-height: calc(75vh - 50px);
    padding: 0.5rem 0;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {
    max-width: 400px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 1.8rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-primary-btn[_ngcontent-%COMP%], 
   .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .hero-secondary-btn[_ngcontent-%COMP%] {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
    max-width: 280px;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {
    padding: 1rem 0.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
    font-size: 0.8rem;
  }
  .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .service-card[_ngcontent-%COMP%] {
    padding: 1.5rem 1rem;
  }
  .service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {
    width: 55px;
    height: 55px;
  }
  .service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
    font-size: 1.4rem;
    width: 1.4rem;
    height: 1.4rem;
  }
  .service-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .pillars-text[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .pillars-text[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .pillars-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%] {
    padding: 1rem 0.8rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%] {
    margin-bottom: 0.6rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-icon[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
    font-size: 1.1rem;
    width: 1.1rem;
    height: 1.1rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-icon-wrapper[_ngcontent-%COMP%]   .pillar-number[_ngcontent-%COMP%] {
    width: 18px;
    height: 18px;
    font-size: 0.6rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%]   .pillar-title[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%]   .pillar-description[_ngcontent-%COMP%] {
    font-size: 0.75rem;
  }
  .pillars-grid[_ngcontent-%COMP%]   .pillar-card[_ngcontent-%COMP%]   .pillar-content[_ngcontent-%COMP%]   .pillar-features[_ngcontent-%COMP%]   .pillar-feature[_ngcontent-%COMP%] {
    font-size: 0.65rem;
  }
  .pillars-image[_ngcontent-%COMP%]   .main-pillar-img[_ngcontent-%COMP%] {
    max-width: 280px;
    height: 220px;
  }
  .video-text[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .carousel-section[_ngcontent-%COMP%]   .carousel-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .testimonial-card[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
  .testimonial-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%] {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    width: 45px;
    height: 45px;
  }
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;
}
.modal-content[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 1.5rem;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  animation: _ngcontent-%COMP%_slideIn 0.3s ease;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
}
.modal-close[_ngcontent-%COMP%] {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}
.modal-close[_ngcontent-%COMP%]:hover {
  background: #fff;
  transform: scale(1.1);
}
.modal-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1.2rem;
}
.modal-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.modal-body[_ngcontent-%COMP%]   .modal-image[_ngcontent-%COMP%] {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%] {
  padding: 2rem;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-description[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  color: #00b5e2;
  font-size: 1.2rem;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: #1e293b;
  font-weight: 500;
  font-size: 1rem;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-cta[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  color: white;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.3);
  transition: all 0.3s ease;
  border: none;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  margin-right: 0.5rem;
}
.modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-cta[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.4);
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 768px) {
  .modal-content[_ngcontent-%COMP%] {
    width: 95%;
    max-height: 95vh;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-image[_ngcontent-%COMP%] {
    height: 200px;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-description[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%] {
    gap: 0.8rem;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {
    gap: 0.6rem;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .modal-body[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-cta[_ngcontent-%COMP%] {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
/*# sourceMappingURL=hero.css.map */`] });
var Hero = _Hero;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero, [{
    type: Component,
    args: [{ selector: "app-hero", standalone: true, imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatListModule, RouterModule], template: '<!-- Secci\xF3n Principal (Hero) - Redise\xF1o Elegante -->\r\n<section class="hero-section">\r\n  <div class="hero-background">\r\n    <div class="hero-bg-image"></div>\r\n    <div class="hero-overlay"></div>\r\n    <div class="hero-pattern"></div>\r\n  </div>\r\n  \r\n  <div class="container hero-container">\r\n    <div class="hero-content">\r\n      <div class="hero-text">\r\n        <h1 class="hero-title">\r\n          Cuidamos de ti y tu familia<br>\r\n          <span class="hero-title-highlight">TU SALUD PRIMERO</span>\r\n        </h1>\r\n        \r\n        <p class="hero-description">\r\n          Accede a nuestros servicios de salud con la calidad y el respaldo que mereces. \r\n          Tu bienestar es nuestra prioridad absoluta.\r\n        </p>\r\n        \r\n        <div class="hero-actions">\r\n          <button mat-raised-button color="primary" class="hero-primary-btn" routerLink="/pqrs">\r\n            <mat-icon>phone</mat-icon>\r\n            \xA1Cont\xE1ctanos!\r\n          </button>\r\n          <button mat-stroked-button class="hero-secondary-btn" routerLink="/question">\r\n            <mat-icon>priority_high</mat-icon>\r\n            Preguntas\r\n          </button>\r\n        </div>\r\n        \r\n        <div class="hero-stats">\r\n          <div class="stat-item">\r\n            <span class="stat-number">50+</span>\r\n            <span class="stat-label">Pacientes atendidos</span>\r\n          </div>\r\n          <div class="stat-item">\r\n            <span class="stat-number">24/7</span>\r\n            <span class="stat-label">Atenci\xF3n disponible</span>\r\n          </div>\r\n          <div class="stat-item">\r\n            <span class="stat-number">98%</span>\r\n            <span class="stat-label">Satisfacci\xF3n</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</section>\r\n\r\n<!-- Secci\xF3n de Servicios -->\r\n<section class="section-padding services-section">\r\n  <div class="container">\r\n    <div class="section-header">\r\n      <h2 class="section-title">Nuestros Servicios Domiciliarios</h2>\r\n      <p class="section-subtitle">Llevamos atenci\xF3n m\xE9dica de alta calidad directamente a tu puerta, con un equipo profesional y comprometido.</p>\r\n    </div>\r\n    <div class="services-grid">\r\n      <mat-card class="service-card">\r\n        <div class="service-icon"><mat-icon>house-heart</mat-icon></div>\r\n        <mat-card-title>Atenci\xF3n M\xE9dica Domiciliaria</mat-card-title>\r\n        <mat-card-content>\r\n          <p>\u2022 Evaluaci\xF3n m\xE9dica general y de especialidades</p>\r\n           <p>\u2022	Control de enfermedades cr\xF3nicas (hipertensi\xF3n, diabetes, etc.)</p> \r\n           <p>\u2022	Manejo y ajuste de tratamientos farmacol\xF3gicos </p> \r\n           <p>\u2022	Seguimiento postquir\xFArgico y de procedimientos m\xE9dicos</p> \r\n          \r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class="service-card">\r\n        <div class="service-icon"><mat-icon>person_add</mat-icon></div>\r\n        <mat-card-title>Enfermer\xEDa Domiciliaria</mat-card-title>\r\n        <mat-card-content>\r\n          <p>\u2022	Administraci\xF3n de medicamentos y terapia intravenosa.</p>\r\n           <p>\u2022	Curaci\xF3n de heridas y cuidado de \xFAlceras por presi\xF3n.</p> \r\n           <p>\u2022	Monitoreo de signos vitales (presi\xF3n arterial, glucosa, etc.).</p> \r\n           <p>\u2022	Asesoramiento a familiares sobre cuidados b\xE1sicos y prevenci\xF3n.</p> \r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class="service-card">\r\n        <div class="service-icon"><mat-icon>accessibility_new</mat-icon></div>\r\n        <mat-card-title>Nutricion</mat-card-title>\r\n        <mat-card-content>\r\n          <p>\u2022	Monitoreo de condiciones cr\xF3nicas como diabetes, hipertensi\xF3n, insuficiencia renal, etc.</p>\r\n           <p>\u2022	Educaci\xF3n al paciente y su familia sobre el autocontrol de la enfermedad.</p> \r\n           <p>\u2022	Planificaci\xF3n de dietas y h\xE1bitos de vida saludables.</p> \r\n           <p>\u2022	Ajustes y seguimiento del tratamiento m\xE9dico.</p> \r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class="service-card">\r\n        <div class="service-icon"><mat-icon>psychology</mat-icon></div>\r\n        <mat-card-title>Terapia Fisica</mat-card-title>\r\n        <mat-card-content>\r\n          <p>Ofrecemos atenci\xF3n psicol\xF3gica domiciliaria dirigida a pacientes que atraviesan situaciones emocionales dif\xEDciles, como estr\xE9s, ansiedad, depresi\xF3n, trastornos del comportamiento, problemas de relaci\xF3n o cualquier otra condici\xF3n que afecte su equilibrio emocional</p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class="section-action">\r\n<button mat-stroked-button color="primary" class="see-more-btn" routerLink="/services">\r\n  <mat-icon>arrow_forward</mat-icon>\r\n  Ver todos los servicios\r\n</button>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Secci\xF3n Pilares (Sobre Nosotros) - Redise\xF1o Compacto -->\r\n<section class="pillars-section section-padding">\r\n  <div class="container">\r\n    <div class="pillars-content">\r\n      <div class="pillars-text">\r\n        <h2 class="section-title">Nuestros Pilares Fundamentales</h2>\r\n        <p class="section-subtitle">\r\n          En CUIDANDO DE TI CyE IPS SAS, ofrecemos servicios de salud integrales y humanizados de alta calidad, \r\n          orientados a mejorar la calidad de vida de nuestros pacientes y sus familias.\r\n        </p>\r\n        \r\n        <div class="pillars-grid">\r\n          <div class="pillar-card">\r\n            <div class="pillar-icon-wrapper">\r\n              <div class="pillar-icon">\r\n                <mat-icon>shield</mat-icon>\r\n              </div>\r\n              <div class="pillar-number">01</div>\r\n            </div>\r\n            <div class="pillar-content">\r\n              <h3 class="pillar-title">Calidad</h3>\r\n              <p class="pillar-description">Protocolos rigurosos y personal calificado con certificaciones y est\xE1ndares ISO.</p>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="pillar-card">\r\n            <div class="pillar-icon-wrapper">\r\n              <div class="pillar-icon">\r\n                <mat-icon>people</mat-icon>\r\n              </div>\r\n              <div class="pillar-number">02</div>\r\n            </div>\r\n            <div class="pillar-content">\r\n              <h3 class="pillar-title">Humanismo</h3>\r\n              <p class="pillar-description">Trato digno, emp\xE1tico y cercano con atenci\xF3n personalizada y empat\xEDa profesional.</p>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="pillar-card">\r\n            <div class="pillar-icon-wrapper">\r\n              <div class="pillar-icon">\r\n                <mat-icon>favorite</mat-icon>\r\n              </div>\r\n              <div class="pillar-number">03</div>\r\n            </div>\r\n            <div class="pillar-content">\r\n              <h3 class="pillar-title">Cuidado</h3>\r\n              <p class="pillar-description">Atenci\xF3n c\xE1lida y personalizada con cuidado integral y seguimiento continuo.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class="pillars-image">\r\n        <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop" alt="Doctora sonriendo a un paciente" class="main-pillar-img">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Secci\xF3n Video -->\r\n<section class="video-section section-padding">\r\n  <div class="container video-flex">\r\n    <div class="video-text">\r\n      <h2 class="video-title">\r\n        Devolv\xE9 un poco del amor que te dieron<br>\r\n        <span class="video-title-highlight">con nuestros cuidados.</span>\r\n      </h2>\r\n      <p class="video-desc">\r\n        Mir\xE1 el siguiente video para conocer en detalle nuestros servicios y el compromiso de nuestro equipo profesional.\r\n      </p>\r\n    </div>\r\n    \r\n    <div class="video-card">\r\n      <div class="video-frame">\r\n        <video \r\n          controls \r\n          preload="metadata" \r\n          poster="assets/images/miniatura-video.jpg" \r\n          class="video-player">\r\n          <source src="assets/sueroterapia.mp4" type="video/mp4">\r\n          Tu navegador no soporta el formato de video.\r\n        </video>\r\n      </div>\r\n      \r\n      <div class="video-info-bar">\r\n        <div class="logo-container">\r\n            <img src="assets/images/global/logo2.png" alt="Logo MayorSalud" class="video-logo">\r\n        </div>\r\n        <div class="video-info-text">\r\n          <span class="video-brand">IPS Cuidando de Ti C & E </span>\r\n          <span class="video-subbrand">Informaci\xF3n de IPS</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Secci\xF3n Rese\xF1as -->\r\n<section class="testimonials-section section-padding">\r\n  <div class="container">\r\n    <div class="section-header">\r\n      <h2 class="section-title">Lo que nuestros pacientes dicen</h2>\r\n      <p class="section-subtitle">La satisfacci\xF3n y el bienestar de quienes conf\xEDan en nosotros es nuestro mayor orgullo.</p>\r\n    </div>\r\n    <div class="testimonials-grid">\r\n      <mat-card class="testimonial-card">\r\n        <mat-card-content>\r\n          <p>"A m\xED, en lo personal, me fue bien; sent\xED un cambio. Con m\xE1s energ\xEDa y vitalidad, me ayud\xF3 mucho con mis ojos. Sufro de resequedad y siempre tengo que aplicarme unas gotas, pero sent\xED que tambi\xE9n me ayud\xF3, porque ya no me arden tanto los ojos. Gracias por pensar en nuestra salud"</p>\r\n        </mat-card-content>\r\n        <mat-card-footer>\r\n          <div class="testimonial-author">\r\n            <img src="https://images.icon-icons.com/1674/PNG/512/person_110935.png" alt="Foto de Ana P\xE9rez">\r\n            <div>\r\n              <strong>Esmeralda Natib</strong>\r\n              <span>Paciente</span>\r\n            </div>\r\n          </div>\r\n        </mat-card-footer>\r\n      </mat-card>\r\n      <mat-card class="testimonial-card">\r\n        <mat-card-content>\r\n          <p>"Tuvimos una excelente experiencia con el personal que nos aplic\xF3 los sueros en nuestra cl\xEDnica. El suero detox y la vitamina C fueron administrados de manera profesional, con mucha atenci\xF3n y cuidado en cada detalle. El equipo demostr\xF3 gran conocimiento y nos brind\xF3 confianza desde el primer momento. Sin duda, es un servicio de calidad que recomendamos por sus buenos resultados y trato amable."</p>\r\n        </mat-card-content>\r\n        <mat-card-footer>\r\n          <div class="testimonial-author">\r\n            <img src="https://images.icon-icons.com/1674/PNG/512/person_110935.png" alt="Foto de Carlos G\xF3mez">\r\n            <div>\r\n              <strong>Mar\xEDa Camila Bedoya & Victor del Portillo Monard</strong>\r\n              <span>Paciente</span>\r\n            </div>\r\n          </div>\r\n        </mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n    <div class="section-action">\r\n      <button mat-stroked-button color="primary" class="see-more-btn" routerLink="/testimonials">\r\n        <mat-icon>arrow_forward</mat-icon>\r\n        Ver m\xE1s testimonios\r\n      </button>\r\n    </div>\r\n  </div>\r\n</section>', styles: [`/* src/app/components/hero/hero.scss */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background:
    linear-gradient(
      135deg,
      #f5f7fa 0%,
      #e2e8f0 50%,
      #f5f7fa 100%);
  overflow: hidden;
  margin-top: 0;
  padding-top: 65px;
}
.hero-section .hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.hero-section .hero-background .hero-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://colombia.unir.net/wp-content/uploads/sites/4/2024/05/Como-mejorar-los-servicios-de-salud2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(3px) brightness(0.8);
  transform: scale(1.1);
  z-index: 1;
  opacity: 0.5;
}
.hero-section .hero-background .hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.247) 100%);
  z-index: 2;
}
.hero-section .hero-background .hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(
      circle at 20% 20%,
      rgba(0, 90, 156, 0.01) 0%,
      transparent 50%),
    radial-gradient(
      circle at 80% 80%,
      rgba(0, 181, 226, 0.005) 0%,
      transparent 50%),
    radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.02) 0%,
      transparent 70%);
  z-index: 3;
}
.hero-section .hero-container {
  position: relative;
  z-index: 4;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
.hero-section .hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 65px);
  text-align: center;
}
.hero-section .hero-text {
  max-width: 800px;
  margin: 0 auto;
}
.hero-section .hero-text .hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(204, 31, 31, 0.1);
  color: #005a9c;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 90, 156, 0.2);
}
.hero-section .hero-text .hero-badge mat-icon {
  font-size: 1.1rem;
  width: 1.1rem;
  height: 1.1rem;
}
.hero-section .hero-text .hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: #005a9c;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
}
.hero-section .hero-text .hero-title .hero-title-highlight {
  color: #00b5e2;
  position: relative;
}
.hero-section .hero-text .hero-title .hero-title-highlight::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  border-radius: 2px;
}
.hero-section .hero-text .hero-description {
  font-size: 1.3rem;
  color: #3b3b3b;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);
}
.hero-section .hero-text .hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.hero-section .hero-text .hero-actions .hero-primary-btn {
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  color: white;
  border-radius: 2rem;
  padding: 1.2rem 2.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.4);
  transition: all 0.3s ease;
  border: none;
}
.hero-section .hero-text .hero-actions .hero-primary-btn mat-icon {
  margin-right: 0.5rem;
}
.hero-section .hero-text .hero-actions .hero-primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 90, 156, 0.6);
}
.hero-section .hero-text .hero-actions .hero-secondary-btn {
  border: 2px solid #005a9c;
  color: #005a9c;
  border-radius: 2rem;
  padding: 1.2rem 2.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}
.hero-section .hero-text .hero-actions .hero-secondary-btn mat-icon {
  margin-right: 0.5rem;
}
.hero-section .hero-text .hero-actions .hero-secondary-btn:hover {
  background: #005a9c;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.3);
}
.hero-section .hero-text .hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.hero-section .hero-text .hero-stats .stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 1.2rem;
  padding: 1.8rem 1rem;
  border: 2px solid rgba(0, 90, 156, 0.15);
  transition: all 0.3s ease;
  box-shadow: 0 6px 25px rgba(0, 90, 156, 0.1);
  position: relative;
  overflow: hidden;
}
.hero-section .hero-text .hero-stats .stat-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.hero-section .hero-text .hero-stats .stat-item:hover {
  transform: translateY(-8px);
  background: rgb(255, 255, 255);
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.2);
  border-color: rgba(0, 90, 156, 0.3);
}
.hero-section .hero-text .hero-stats .stat-item:hover::before {
  transform: scaleX(1);
}
.hero-section .hero-text .hero-stats .stat-item .stat-number {
  font-size: 2.8rem;
  font-weight: 800;
  color: #005a9c;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 90, 156, 0.1);
}
.hero-section .hero-text .hero-stats .stat-item .stat-label {
  font-size: 0.95rem;
  color: #1e293b;
  font-weight: 600;
  line-height: 1.3;
}
.hero-section .hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 5;
  pointer-events: none;
}
.hero-section .hero-wave svg {
  width: 100%;
  height: 100%;
  display: block;
}
.section-padding {
  padding: 5rem 0;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}
.section-header .section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.section-header .section-subtitle {
  color: #64748b;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}
.section-action {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.see-more-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.1);
  background: #fff;
  color: #005a9c;
  border: 2px solid #005a9c;
  transition: all 0.3s ease;
}
.see-more-btn mat-icon {
  font-size: 1.2rem;
  color: #005a9c;
  transition: color 0.3s ease;
}
.see-more-btn:hover {
  background: #005a9c;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.2);
}
.see-more-btn:hover mat-icon {
  color: #fff;
}
.services-section {
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #e2e8f0 100%);
  position: relative;
  z-index: 1;
}
.services-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.service-card {
  background: #fff;
  border-radius: 1.2rem;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.08);
  border: 1px solid rgba(0, 90, 156, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.15);
}
.service-card:hover::before {
  transform: scaleX(1);
}
.service-card:hover .service-icon {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(0, 90, 156, 0.3);
}
.service-card .service-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.2rem;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  border-radius: 50%;
  width: 65px;
  height: 65px;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.2);
  transition: all 0.3s ease;
}
.service-card .service-icon mat-icon {
  font-size: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
  color: #fff;
}
.service-card mat-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}
.service-card mat-card-content p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}
.pillars-section {
  background:
    linear-gradient(
      135deg,
      #fff 0%,
      #f8fafc 100%);
  position: relative;
}
.pillars-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.pillars-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
.pillars-text {
  flex: 1;
  max-width: 600px;
}
.pillars-text .section-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.pillars-text .section-subtitle {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}
.pillar-card {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.08);
  border: 1px solid rgba(0, 90, 156, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.pillar-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.pillar-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.15);
}
.pillar-card:hover::before {
  transform: scaleX(1);
}
.pillar-card:hover .pillar-icon {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.3);
}
.pillar-card .pillar-icon-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}
.pillar-card .pillar-icon-wrapper .pillar-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 90, 156, 0.2);
  transition: all 0.3s ease;
  margin: 0 auto;
}
.pillar-card .pillar-icon-wrapper .pillar-icon mat-icon {
  font-size: 1.8rem;
  width: 1.8rem;
  height: 1.8rem;
  color: #fff;
}
.pillar-card .pillar-icon-wrapper .pillar-number {
  position: absolute;
  top: -10px;
  right: -10px;
  background:
    linear-gradient(
      135deg,
      #00b5e2 0%,
      #005a9c 100%);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 90, 156, 0.3);
}
.pillar-card .pillar-content {
  text-align: center;
}
.pillar-card .pillar-content .pillar-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.3;
}
.pillar-card .pillar-content .pillar-description {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}
.pillars-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pillars-image .main-pillar-img {
  width: 100%;
  max-width: 450px;
  height: 350px;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.15);
  transition: transform 0.3s ease;
}
.pillars-image .main-pillar-img:hover {
  transform: scale(1.02);
}
.video-section {
  padding: 80px 0;
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #e2e8f0 100%);
  position: relative;
}
.video-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.video-flex {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
@media (max-width: 992px) {
  .video-flex {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
}
.video-text {
  flex: 1;
  max-width: 500px;
}
.video-text .video-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
.video-text .video-title .video-title-highlight {
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}
.video-card {
  flex: 1.2;
  width: 100%;
  max-width: 650px;
  background: #fff;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 90, 156, 0.2);
  transition: transform 0.3s ease;
}
.video-card:hover {
  transform: translateY(-8px);
}
.video-card .video-frame {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  display: flex;
  align-items: center;
}
.video-card .video-frame .video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-card .video-info-bar {
  display: flex;
  align-items: center;
  padding: 1.2rem 1.5rem;
  background: #ffffff;
  gap: 1.2rem;
}
.video-card .video-info-bar .logo-container {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  padding: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.video-card .video-info-bar .logo-container .video-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.video-card .video-info-bar .video-info-text .video-brand {
  display: block;
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
}
.video-card .video-info-bar .video-info-text .video-subbrand {
  color: #64748b;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.carousel-section {
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #e2e8f0 100%);
  padding: 4rem 0;
  text-align: center;
  position: relative;
}
.carousel-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.carousel-section .carousel-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 0.8rem;
  line-height: 1.2;
}
.carousel-section .carousel-subtitle {
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.carousel-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}
.carousel-container .nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.15);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-container .nav-button:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.25);
}
.carousel-container .nav-button mat-icon {
  font-size: 1.3rem;
  color: #005a9c;
}
.carousel-container .nav-button.left {
  left: 0.5rem;
}
.carousel-container .nav-button.right {
  right: 0.5rem;
}
.carousel-container .carousel-wrapper {
  overflow: hidden;
  border-radius: 1.2rem;
  margin: 0 1rem;
}
.carousel-container .carousel-track {
  display: flex;
  transition: transform 0.6s ease-in-out;
}
.carousel-container .carousel-item {
  min-width: 33.333%;
  padding: 0 0.75rem;
  box-sizing: border-box;
  cursor: pointer;
}
.carousel-container .carousel-item .image-wrapper {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.12);
  transition: all 0.3s ease;
  background: #fff;
}
.carousel-container .carousel-item .image-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 90, 156, 0.2);
}
.carousel-container .carousel-item .image-wrapper img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.carousel-container .carousel-item .image-wrapper:hover img {
  transform: scale(1.05);
}
.carousel-container .carousel-item .image-wrapper .info-blur {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  padding: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.carousel-container .carousel-item .image-wrapper .info-blur .info-icon {
  font-size: 1.2rem;
  width: 1.2rem;
  height: 1.2rem;
  animation: pulse 2s infinite;
  color: #00b5e2;
}
.carousel-container .carousel-item .image-wrapper .info-blur .description {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  flex: 1;
}
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}
.testimonials-section {
  background: #fff;
  position: relative;
}
.testimonials-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 90, 156, 0.1),
      transparent);
}
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}
.testimonial-card {
  background:
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #e2e8f0 100%);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.08);
  border: 1px solid rgba(0, 90, 156, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.testimonial-card::before {
  content: '"';
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  color: rgba(0, 90, 156, 0.1);
  font-family: serif;
  line-height: 1;
}
.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 90, 156, 0.15);
}
.testimonial-card mat-card-content {
  margin-bottom: 2rem;
}
.testimonial-card mat-card-content p {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.7;
  font-style: italic;
  margin: 0;
  position: relative;
  z-index: 1;
}
.testimonial-card .testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.testimonial-card .testimonial-author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 4px 15px rgba(0, 90, 156, 0.1);
}
.testimonial-card .testimonial-author div {
  display: flex;
  flex-direction: column;
}
.testimonial-card .testimonial-author div strong {
  color: #1e293b;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}
.testimonial-card .testimonial-author div span {
  color: #64748b;
  font-size: 0.9rem;
}
@media (max-width: 1200px) {
  .container {
    padding: 0 1.5rem;
  }
  .hero-section {
    min-height: 85vh;
    padding-top: 65px;
  }
  .hero-section .hero-content {
    min-height: calc(85vh - 65px);
    padding: 1.5rem 0;
  }
  .hero-section .hero-text {
    max-width: 700px;
  }
  .hero-section .hero-text .hero-title {
    font-size: 3.2rem;
  }
  .hero-section .hero-text .hero-description {
    font-size: 1.1rem;
  }
  .hero-section .hero-text .hero-actions {
    margin-bottom: 2rem;
  }
  .hero-section .hero-text .hero-stats {
    gap: 1.5rem;
    margin-top: 2rem;
    max-width: 500px;
  }
  .hero-section .hero-text .hero-stats .stat-item {
    padding: 1.5rem 0.8rem;
  }
  .hero-section .hero-text .hero-stats .stat-item .stat-number {
    font-size: 2.2rem;
  }
  .hero-section .hero-text .hero-stats .stat-item .stat-label {
    font-size: 0.9rem;
  }
  .pillars-content,
  .video-flex {
    gap: 3rem;
  }
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}
@media (max-width: 992px) {
  .section-padding {
    padding: 4rem 0;
  }
  .hero-section {
    min-height: 80vh;
    padding-top: 60px;
  }
  .hero-section .hero-content {
    min-height: calc(80vh - 60px);
    padding: 1rem 0;
  }
  .hero-section .hero-text {
    max-width: 600px;
  }
  .hero-section .hero-text .hero-title {
    font-size: 2.8rem;
  }
  .hero-section .hero-text .hero-description {
    font-size: 1rem;
  }
  .hero-section .hero-text .hero-actions {
    margin-bottom: 1.5rem;
  }
  .hero-section .hero-text .hero-stats {
    gap: 1rem;
    margin-top: 1.5rem;
    max-width: 450px;
  }
  .hero-section .hero-text .hero-stats .stat-item {
    padding: 1.2rem 0.6rem;
  }
  .hero-section .hero-text .hero-stats .stat-item .stat-number {
    font-size: 2rem;
  }
  .hero-section .hero-text .hero-stats .stat-item .stat-label {
    font-size: 0.85rem;
  }
  .section-header .section-title {
    font-size: 2rem;
  }
  .pillars-content {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
  .pillars-text {
    max-width: 100%;
  }
  .pillars-text .section-title {
    text-align: center;
  }
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .video-flex {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  .carousel-item {
    min-width: 50%;
  }
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
@media (max-width: 768px) {
  .section-padding {
    padding: 3rem 0;
  }
  .container {
    padding: 0 1rem;
  }
  .hero-section {
    min-height: 80vh;
    padding-top: 55px;
  }
  .hero-section .hero-content {
    min-height: calc(80vh - 55px);
    padding: 1rem 0;
  }
  .hero-section .hero-text {
    max-width: 500px;
  }
  .hero-section .hero-text .hero-title {
    font-size: 2.2rem;
  }
  .hero-section .hero-text .hero-description {
    font-size: 1rem;
  }
  .hero-section .hero-text .hero-actions {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 1.5rem;
  }
  .hero-section .hero-text .hero-actions .hero-primary-btn,
  .hero-section .hero-text .hero-actions .hero-secondary-btn {
    width: 100%;
    justify-content: center;
  }
  .hero-section .hero-text .hero-stats {
    gap: 0.8rem;
    margin-top: 1.5rem;
    max-width: 400px;
  }
  .hero-section .hero-text .hero-stats .stat-item {
    padding: 1rem 0.5rem;
  }
  .hero-section .hero-text .hero-stats .stat-item .stat-number {
    font-size: 1.5rem;
  }
  .hero-section .hero-text .hero-stats .stat-item .stat-label {
    font-size: 0.8rem;
  }
  .section-header {
    margin-bottom: 2.5rem;
  }
  .section-header .section-title {
    font-size: 1.8rem;
  }
  .section-header .section-subtitle {
    font-size: 1rem;
  }
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .service-card {
    padding: 1.8rem 1.2rem;
  }
  .service-card .service-icon {
    width: 60px;
    height: 60px;
  }
  .service-card .service-icon mat-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .pillars-text .section-title {
    font-size: 1.8rem;
  }
  .pillars-text .section-subtitle {
    font-size: 0.95rem;
  }
  .pillars-grid {
    gap: 0.8rem;
  }
  .pillars-grid .pillar-card {
    padding: 1.2rem 1rem;
  }
  .pillars-grid .pillar-card .pillar-icon-wrapper {
    margin-bottom: 0.8rem;
  }
  .pillars-grid .pillar-card .pillar-icon-wrapper .pillar-icon {
    width: 45px;
    height: 45px;
  }
  .pillars-grid .pillar-card .pillar-icon-wrapper .pillar-icon mat-icon {
    font-size: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  .pillars-grid .pillar-card .pillar-icon-wrapper .pillar-number {
    width: 20px;
    height: 20px;
    font-size: 0.65rem;
  }
  .pillars-grid .pillar-card .pillar-content .pillar-title {
    font-size: 0.9rem;
  }
  .pillars-grid .pillar-card .pillar-content .pillar-description {
    font-size: 0.8rem;
  }
  .pillars-grid .pillar-card .pillar-content .pillar-features .pillar-feature {
    font-size: 0.7rem;
  }
  .pillars-image .main-pillar-img {
    max-width: 350px;
    height: 280px;
  }
  .video-text .video-title {
    font-size: 2rem;
  }
  .carousel-section {
    padding: 3rem 0;
  }
  .carousel-section .carousel-title {
    font-size: 1.8rem;
  }
  .carousel-section .carousel-subtitle {
    font-size: 0.9rem;
  }
  .carousel-item {
    min-width: 100%;
  }
  .carousel-item .image-wrapper img {
    height: 180px;
  }
  .carousel-item .image-wrapper .info-blur {
    padding: 1rem;
  }
  .carousel-item .image-wrapper .info-blur .info-icon {
    font-size: 1.1rem;
    width: 1.1rem;
    height: 1.1rem;
  }
  .carousel-item .image-wrapper .info-blur .description {
    font-size: 0.85rem;
  }
  .testimonial-card {
    padding: 2rem;
  }
  .testimonial-card .testimonial-author img {
    width: 50px;
    height: 50px;
  }
  .see-more-btn {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
  }
}
@media (max-width: 480px) {
  .section-padding {
    padding: 2rem 0;
  }
  .hero-section {
    min-height: 75vh;
    padding-top: 50px;
  }
  .hero-section .hero-content {
    min-height: calc(75vh - 50px);
    padding: 0.5rem 0;
  }
  .hero-section .hero-text {
    max-width: 400px;
  }
  .hero-section .hero-text .hero-title {
    font-size: 1.8rem;
  }
  .hero-section .hero-text .hero-description {
    font-size: 0.9rem;
  }
  .hero-section .hero-text .hero-actions {
    margin-bottom: 1rem;
  }
  .hero-section .hero-text .hero-actions .hero-primary-btn,
  .hero-section .hero-text .hero-actions .hero-secondary-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  .hero-section .hero-text .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
    max-width: 280px;
  }
  .hero-section .hero-text .hero-stats .stat-item {
    padding: 1rem 0.5rem;
  }
  .hero-section .hero-text .hero-stats .stat-item .stat-number {
    font-size: 1.5rem;
  }
  .hero-section .hero-text .hero-stats .stat-item .stat-label {
    font-size: 0.8rem;
  }
  .section-header .section-title {
    font-size: 1.5rem;
  }
  .service-card {
    padding: 1.5rem 1rem;
  }
  .service-card .service-icon {
    width: 55px;
    height: 55px;
  }
  .service-card .service-icon mat-icon {
    font-size: 1.4rem;
    width: 1.4rem;
    height: 1.4rem;
  }
  .service-card mat-card-title {
    font-size: 1rem;
  }
  .service-card mat-card-content p {
    font-size: 0.85rem;
  }
  .pillars-text .section-title {
    font-size: 1.5rem;
  }
  .pillars-text .section-subtitle {
    font-size: 0.85rem;
  }
  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  .pillars-grid .pillar-card {
    padding: 1rem 0.8rem;
  }
  .pillars-grid .pillar-card .pillar-icon-wrapper {
    margin-bottom: 0.6rem;
  }
  .pillars-grid .pillar-card .pillar-icon-wrapper .pillar-icon {
    width: 40px;
    height: 40px;
  }
  .pillars-grid .pillar-card .pillar-icon-wrapper .pillar-icon mat-icon {
    font-size: 1.1rem;
    width: 1.1rem;
    height: 1.1rem;
  }
  .pillars-grid .pillar-card .pillar-icon-wrapper .pillar-number {
    width: 18px;
    height: 18px;
    font-size: 0.6rem;
  }
  .pillars-grid .pillar-card .pillar-content .pillar-title {
    font-size: 0.85rem;
  }
  .pillars-grid .pillar-card .pillar-content .pillar-description {
    font-size: 0.75rem;
  }
  .pillars-grid .pillar-card .pillar-content .pillar-features .pillar-feature {
    font-size: 0.65rem;
  }
  .pillars-image .main-pillar-img {
    max-width: 280px;
    height: 220px;
  }
  .video-text .video-title {
    font-size: 1.5rem;
  }
  .carousel-section .carousel-title {
    font-size: 1.5rem;
  }
  .testimonial-card {
    padding: 1.5rem;
  }
  .testimonial-card mat-card-content p {
    font-size: 1rem;
  }
  .testimonial-card .testimonial-author {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  .testimonial-card .testimonial-author img {
    width: 45px;
    height: 45px;
  }
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;
}
.modal-content {
  background: #fff;
  border-radius: 1.5rem;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  animation: slideIn 0.3s ease;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
}
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}
.modal-close:hover {
  background: #fff;
  transform: scale(1.1);
}
.modal-close mat-icon {
  color: #64748b;
  font-size: 1.2rem;
}
.modal-body {
  display: flex;
  flex-direction: column;
}
.modal-body .modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.modal-body .modal-info {
  padding: 2rem;
}
.modal-body .modal-info .modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.modal-body .modal-info .modal-description {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.modal-body .modal-info .modal-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}
.modal-body .modal-info .modal-features .feature-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.modal-body .modal-info .modal-features .feature-item mat-icon {
  color: #00b5e2;
  font-size: 1.2rem;
}
.modal-body .modal-info .modal-features .feature-item span {
  color: #1e293b;
  font-weight: 500;
  font-size: 1rem;
}
.modal-body .modal-info .modal-cta {
  background:
    linear-gradient(
      135deg,
      #005a9c 0%,
      #00b5e2 100%);
  color: white;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(0, 90, 156, 0.3);
  transition: all 0.3s ease;
  border: none;
}
.modal-body .modal-info .modal-cta mat-icon {
  margin-right: 0.5rem;
}
.modal-body .modal-info .modal-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 90, 156, 0.4);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 95vh;
  }
  .modal-body .modal-image {
    height: 200px;
  }
  .modal-body .modal-info {
    padding: 1.5rem;
  }
  .modal-body .modal-info .modal-title {
    font-size: 1.5rem;
  }
  .modal-body .modal-info .modal-description {
    font-size: 1rem;
  }
  .modal-body .modal-info .modal-features {
    gap: 0.8rem;
  }
  .modal-body .modal-info .modal-features .feature-item {
    gap: 0.6rem;
  }
  .modal-body .modal-info .modal-features .feature-item mat-icon {
    font-size: 1.1rem;
  }
  .modal-body .modal-info .modal-features .feature-item span {
    font-size: 0.9rem;
  }
  .modal-body .modal-info .modal-cta {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
/*# sourceMappingURL=hero.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero, { className: "Hero", filePath: "src/app/components/hero/hero.ts", lineNumber: 24 });
})();

// src/app/components/bussiness/bussiness.ts
var _Bussiness = class _Bussiness {
  constructor(router) {
    this.router = router;
  }
  // Método para navegar a la página de servicios
  navigateToServices() {
    this.router.navigate(["/services"]);
  }
  // Método para agendar cita (placeholder)
  scheduleAppointment() {
    console.log("Agendar cita");
    this.router.navigate(["/pqrs"]);
  }
  // Método para navegar al inicio
  navigateToHome() {
    this.router.navigate(["/"]);
  }
};
_Bussiness.\u0275fac = function Bussiness_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Bussiness)(\u0275\u0275directiveInject(Router));
};
_Bussiness.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Bussiness, selectors: [["app-bussiness"]], decls: 109, vars: 0, consts: [[1, "business-container"], [1, "about-section"], [1, "container"], [1, "about-layout"], [1, "about-content"], [1, "section-header"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "title-icon"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"], [1, "section-subtitle"], [1, "about-text"], [1, "values-grid"], [1, "value-item"], [1, "value-icon"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], ["d", "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"], ["d", "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"], [1, "mission-vision-section"], [1, "mission-vision-grid"], [1, "mission-card"], [1, "card-icon"], [1, "mission-points"], [1, "vision-card"], ["d", "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"], [1, "vision-points"], [1, "focus-section"], [1, "cta-section"], [1, "cta-content"], [1, "cta-buttons"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"]], template: function Bussiness_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(7, "svg", 6);
    \u0275\u0275domElement(8, "path", 7);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(9, " Acerca de nosotros ");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(10, "p", 8);
    \u0275\u0275text(11, "Una instituci\xF3n comprometida con la excelencia en el cuidado de la salud");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 9)(13, "p")(14, "b");
    \u0275\u0275text(15, "CUIDANDO DE TI C&E IPS SAS");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(16, " es una empresa creada por profesionales de la salud que nace desde el amor y el entendimiento que la recuperaci\xF3n y el bienestar de nuestros pacientes muchas veces se fortalecen en la comodidad del hogar. Por ello, hemos desarrollado un portafolio integral de servicios de atenci\xF3n domiciliaria, orientado a brindar cuidados seguros, personalizados y humanizados directamente en el entorno familiar.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "p");
    \u0275\u0275text(18, "Nuestro enfoque est\xE1 centrado en la persona, garantizando continuidad en el tratamiento m\xE9dico, apoyo emocional y acompa\xF1amiento profesional sin que el paciente tenga que desplazarse a un centro asistencial. Contamos con un equipo interdisciplinario de profesionales capacitados \u2014 m\xE9dicos, enfermeros, terapeutas, psic\xF3logos, nutricionistas y auxiliares de enfermer\xEDa que trabajan coordinadamente para cubrir las necesidades en salud de nuestros usuarios.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(19, "p");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div", 10)(21, "div", 11)(22, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(23, "svg", 13);
    \u0275\u0275domElement(24, "path", 14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(25, "h4");
    \u0275\u0275text(26, "Compromiso");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "p");
    \u0275\u0275text(28, "Trabajamos con responsabilidad y vocaci\xF3n de servicio en cada intervenci\xF3n de salud.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(29, "div", 11)(30, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(31, "svg", 13);
    \u0275\u0275domElement(32, "path", 7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(33, "h4");
    \u0275\u0275text(34, "Humanizaci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "p");
    \u0275\u0275text(36, "Brindamos atenci\xF3n centrada en la persona, con respeto, empat\xEDa, calidez y amor.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(37, "div", 11)(38, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(39, "svg", 13);
    \u0275\u0275domElement(40, "path", 15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(41, "h4");
    \u0275\u0275text(42, "Calidad");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "p");
    \u0275\u0275text(44, "Aplicamos est\xE1ndares cl\xEDnicos y operativos que garantizan servicios seguros y eficaces.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(45, "div", 11)(46, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(47, "svg", 13);
    \u0275\u0275domElement(48, "path", 16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(49, "h4");
    \u0275\u0275text(50, "Trabajo en equipo");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "p");
    \u0275\u0275text(52, "Promovemos la colaboraci\xF3n interdisciplinaria como base para una atenci\xF3n integral.");
    \u0275\u0275domElementEnd()()()()()()();
    \u0275\u0275domElementStart(53, "section", 17)(54, "div", 2)(55, "div", 18)(56, "div", 19)(57, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(58, "svg", 13);
    \u0275\u0275domElement(59, "path", 14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(60, "h3");
    \u0275\u0275text(61, "Nuestra Misi\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(62, "p");
    \u0275\u0275text(63, "Brindar atenci\xF3n en salud domiciliaria con altos est\xE1ndares de calidad, humanizaci\xF3n y seguridad, mediante un equipo interdisciplinario comprometido con el bienestar integral de nuestros pacientes, promoviendo la recuperaci\xF3n en un entorno familiar y velando por la seguridad del paciente. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(64, "ul", 21)(65, "li");
    \u0275\u0275text(66, "Proporcionar atenci\xF3n m\xE9dica integral y personalizada");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(67, "li");
    \u0275\u0275text(68, "Promover la prevenci\xF3n y el autocuidado");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(69, "li");
    \u0275\u0275text(70, "Garantizar la accesibilidad a servicios de salud");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(71, "li");
    \u0275\u0275text(72, "Mantener los m\xE1s altos est\xE1ndares de calidad");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(73, "div", 22)(74, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(75, "svg", 13);
    \u0275\u0275domElement(76, "path", 23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(77, "h3");
    \u0275\u0275text(78, "Nuestra Visi\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(79, "p");
    \u0275\u0275text(80, "Ser l\xEDderes en la prestaci\xF3n de servicios de atenci\xF3n domiciliaria en salud a nivel regional/nacional, reconocidos por la excelencia en el cuidado humanizado, la innovaci\xF3n en nuestros procesos y el impacto positivo en la calidad de vida de nuestros usuarios y sus familias.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(81, "ul", 24)(82, "li");
    \u0275\u0275text(83, "Liderar la transformaci\xF3n del sector salud");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(84, "li");
    \u0275\u0275text(85, "Ser referente en innovaci\xF3n m\xE9dica");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(86, "li");
    \u0275\u0275text(87, "Expandir nuestra cobertura de servicios");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(88, "li");
    \u0275\u0275text(89, "Contribuir al desarrollo de la comunidad");
    \u0275\u0275domElementEnd()()()()()();
    \u0275\u0275domElementStart(90, "section", 25)(91, "div", 2)(92, "div", 5)(93, "h2");
    \u0275\u0275text(94, "NUESTRO COMPROMISO ES EL CUIDADO EN CASA!");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(95, "p", 8);
    \u0275\u0275text(96, "En CUIDANDO DE TI CyE IPS SAS entendemos que la recuperaci\xF3n y el bienestar de nuestros pacientes muchas veces se fortalecen en la comodidad del hogar. Por ello, hemos desarrollado un portafolio integral de servicios de atenci\xF3n domiciliaria en salud, orientado a brindar cuidados seguros, personalizados y humanizados directamente en el entorno familiar.");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(97, "section", 26)(98, "div", 2)(99, "div", 27)(100, "h2");
    \u0275\u0275text(101, "\xBFListo unirte a la familia?");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(102, "p");
    \u0275\u0275text(103, "\xDAnete a nuestra familia y descubre por qu\xE9 somos la IPS de confianza para muchos pacientes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(104, "div", 28)(105, "button", 29);
    \u0275\u0275domListener("click", function Bussiness_Template_button_click_105_listener() {
      return ctx.scheduleAppointment();
    });
    \u0275\u0275text(106, "Contactanos");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(107, "button", 30);
    \u0275\u0275domListener("click", function Bussiness_Template_button_click_107_listener() {
      return ctx.navigateToServices();
    });
    \u0275\u0275text(108, "Conocer Servicios");
    \u0275\u0275domElementEnd()()()()()();
  }
}, styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #005A9C;\n  --accent-color: #00B5E2;\n  --secondary-color: #004a8c;\n  --white: #ffffff;\n  --light-gray: #f8f9fa;\n  --dark-gray: #343a40;\n  --text-dark: #2c3e50;\n  --text-light: #6c757d;\n  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  --shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.15);\n  --transition: all 0.3s ease;\n  --border-radius: 15px;\n}\n.business-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: hidden;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n  position: relative;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: var(--primary-color);\n  transition: var(--transition);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n  transform: scale(1.1);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 40px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 2px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 40px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-color),\n      var(--primary-color));\n  border-radius: 2px;\n}\n.section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-light);\n  max-width: 1400px;\n  margin: auto;\n}\n.about-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--light-gray);\n  position: relative;\n  overflow: hidden;\n}\n.about-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 90, 156, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 181, 226, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(0, 90, 156, 0.05) 0%,\n      transparent 50%);\n  z-index: 1;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  gap: 3rem;\n  align-items: start;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-bottom: 1.5rem;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: var(--text-dark);\n  margin-bottom: 1.5rem;\n  text-align: justify;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem 1rem;\n  background: var(--white);\n  border-radius: var(--border-radius);\n  transition: var(--transition);\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  border: 3px solid var(--accent-color);\n  width: 250px;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]:hover   .value-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.4);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  box-shadow: 0 6px 20px rgba(0, 90, 156, 0.3);\n  transition: all 0.4s ease;\n  position: relative;\n  border: 2px solid var(--white);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n  position: relative;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 30px;\n  height: 2px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 2px;\n  transition: width 0.3s ease;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]::after {\n  width: 40px;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  line-height: 1.5;\n  font-size: 0.85rem;\n  margin-top: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 2rem;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  max-width: 600px;\n  min-height: 400px;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  border: 6px solid var(--accent-color);\n  transition: var(--transition);\n  position: relative;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: var(--transition);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n  transform: translateX(-50px);\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite 1.5s;\n  transform: translateX(50px);\n  margin-top: 50px;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite 3s;\n  transform: translateX(-50px);\n  margin-top: 20px;\n}\n.about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite 4.5s;\n  transform: translateX(50px);\n  margin-top: 80px;\n}\n.mission-vision-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--white);\n  position: relative;\n  overflow: hidden;\n}\n.mission-vision-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 90, 156, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 181, 226, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(0, 90, 156, 0.05) 0%,\n      transparent 50%);\n  z-index: 1;\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem;\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  padding: 2.5rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  border: 3px solid var(--accent-color);\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]:hover, \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.4);\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--light-gray),\n      #e9ecef);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 2rem;\n  border: 3px solid var(--accent-color);\n  box-shadow: 0 4px 15px rgba(0, 90, 156, 0.3);\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: var(--primary-color);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  text-align: justify;\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  margin-bottom: 0.8rem;\n  padding-left: 1.5rem;\n  position: relative;\n  text-align: justify;\n}\n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, \n.mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  color: var(--accent-color);\n  font-weight: bold;\n}\n.focus-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--light-gray);\n  position: relative;\n  overflow: hidden;\n}\n.focus-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 90, 156, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 181, 226, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(0, 90, 156, 0.05) 0%,\n      transparent 50%);\n  z-index: 1;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  margin-top: 3rem;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  padding: 2.5rem 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  text-align: center;\n  transition: var(--transition);\n  border: 3px solid var(--accent-color);\n  position: relative;\n  overflow: hidden;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]:hover   .focus-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.4);\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]:hover   .focus-content-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]:hover   .focus-content-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n  box-shadow: 0 6px 20px rgba(0, 90, 156, 0.3);\n  transition: all 0.4s ease;\n  position: relative;\n  border: 3px solid var(--white);\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  color: black;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-content-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n  position: relative;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-content-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 40px;\n  height: 3px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 2px;\n  transition: width 0.3s ease;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-content-text[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]::after {\n  width: 60px;\n}\n.focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-content-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  line-height: 1.6;\n  font-size: 0.95rem;\n  margin: 0;\n  text-align: justify;\n}\n.recognition-section[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  color: var(--white);\n}\n.recognition-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.recognition-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.recognition-section[_ngcontent-%COMP%]   .recognition-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  margin-bottom: 4rem;\n}\n.recognition-section[_ngcontent-%COMP%]   .recognition-grid[_ngcontent-%COMP%]   .recognition-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 2rem;\n  border-radius: var(--border-radius);\n  text-align: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: var(--transition);\n}\n.recognition-section[_ngcontent-%COMP%]   .recognition-grid[_ngcontent-%COMP%]   .recognition-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  background: rgba(255, 255, 255, 0.15);\n}\n.recognition-section[_ngcontent-%COMP%]   .recognition-grid[_ngcontent-%COMP%]   .recognition-card[_ngcontent-%COMP%]   .recognition-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n.recognition-section[_ngcontent-%COMP%]   .recognition-grid[_ngcontent-%COMP%]   .recognition-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.recognition-section[_ngcontent-%COMP%]   .recognition-grid[_ngcontent-%COMP%]   .recognition-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  line-height: 1.6;\n}\n.recognition-section[_ngcontent-%COMP%]   .certifications-list[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 3rem;\n  border-radius: var(--border-radius);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.recognition-section[_ngcontent-%COMP%]   .certifications-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  font-size: 1.5rem;\n}\n.recognition-section[_ngcontent-%COMP%]   .certifications-list[_ngcontent-%COMP%]   .cert-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n.recognition-section[_ngcontent-%COMP%]   .certifications-list[_ngcontent-%COMP%]   .cert-grid[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 1.5rem;\n  border-radius: 10px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.recognition-section[_ngcontent-%COMP%]   .certifications-list[_ngcontent-%COMP%]   .cert-grid[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   .cert-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n}\n.recognition-section[_ngcontent-%COMP%]   .certifications-list[_ngcontent-%COMP%]   .cert-grid[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   .cert-desc[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-size: 0.9rem;\n}\n.team-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--light-gray);\n  position: relative;\n  overflow: hidden;\n}\n.team-section[_ngcontent-%COMP%]   .team-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.team-section[_ngcontent-%COMP%]   .team-background[_ngcontent-%COMP%]   .bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 90, 156, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 181, 226, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(0, 90, 156, 0.05) 0%,\n      transparent 50%);\n}\n.team-section[_ngcontent-%COMP%]   .team-background[_ngcontent-%COMP%]   .floating-elements[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.team-section[_ngcontent-%COMP%]   .team-background[_ngcontent-%COMP%]   .floating-elements[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2rem;\n  opacity: 0.1;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n}\n.team-section[_ngcontent-%COMP%]   .team-background[_ngcontent-%COMP%]   .floating-elements[_ngcontent-%COMP%]   .floating-element.element-1[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.team-section[_ngcontent-%COMP%]   .team-background[_ngcontent-%COMP%]   .floating-elements[_ngcontent-%COMP%]   .floating-element.element-2[_ngcontent-%COMP%] {\n  top: 20%;\n  right: 15%;\n  animation-delay: 1.5s;\n}\n.team-section[_ngcontent-%COMP%]   .team-background[_ngcontent-%COMP%]   .floating-elements[_ngcontent-%COMP%]   .floating-element.element-3[_ngcontent-%COMP%] {\n  bottom: 30%;\n  left: 20%;\n  animation-delay: 3s;\n}\n.team-section[_ngcontent-%COMP%]   .team-background[_ngcontent-%COMP%]   .floating-elements[_ngcontent-%COMP%]   .floating-element.element-4[_ngcontent-%COMP%] {\n  bottom: 20%;\n  right: 10%;\n  animation-delay: 4.5s;\n}\n.team-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.team-section[_ngcontent-%COMP%]   .team-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n.team-section[_ngcontent-%COMP%]   .team-stats[_ngcontent-%COMP%]   .team-stat[_ngcontent-%COMP%] {\n  text-align: center;\n  background: var(--white);\n  padding: 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  border: 2px solid #e9ecef;\n}\n.team-section[_ngcontent-%COMP%]   .team-stats[_ngcontent-%COMP%]   .team-stat[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--accent-color);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.team-section[_ngcontent-%COMP%]   .team-stats[_ngcontent-%COMP%]   .team-stat[_ngcontent-%COMP%]:hover   .stat-number[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  transform: scale(1.1);\n}\n.team-section[_ngcontent-%COMP%]   .team-stats[_ngcontent-%COMP%]   .team-stat[_ngcontent-%COMP%]:hover   .stat-label[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-weight: 600;\n}\n.team-section[_ngcontent-%COMP%]   .team-stats[_ngcontent-%COMP%]   .team-stat[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--accent-color);\n  margin-bottom: 0.5rem;\n}\n.team-section[_ngcontent-%COMP%]   .team-stats[_ngcontent-%COMP%]   .team-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-weight: 500;\n}\n.team-section[_ngcontent-%COMP%]   .team-description[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto 3rem;\n  text-align: center;\n}\n.team-section[_ngcontent-%COMP%]   .team-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: var(--text-dark);\n  text-align: justify;\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--border-radius);\n  padding: 1.5rem;\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  display: flex;\n  align-items: flex-start;\n  gap: 1.2rem;\n  border: 3px solid var(--accent-color);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover, \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.4);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover   .member-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover   .member-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover   .member-position[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover   .member-position[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover   .member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:hover   .member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  box-shadow: 0 4px 15px rgba(0, 90, 156, 0.3);\n  position: relative;\n  overflow: hidden;\n  border: 3px solid var(--white);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]::before, \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 70%);\n  transform: translateX(-100%);\n  transition: transform 0.6s ease;\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]:hover::before, \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]:hover::before {\n  transform: translateX(100%);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  z-index: 2;\n  position: relative;\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-position[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-position[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--accent-color);\n  color: var(--white);\n  padding: 0.3rem 1rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  border: 2px solid var(--accent-color);\n}\n.team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  line-height: 1.6;\n  font-size: 0.95rem;\n  margin: 0;\n}\n.team-section[_ngcontent-%COMP%]   .admin-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6c757d,\n      #495057);\n}\n.floating-elements[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.1;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid rgba(0, 181, 226, 0.3);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: var(--accent-color);\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-element.element-1[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-element.element-2[_ngcontent-%COMP%] {\n  top: 60%;\n  right: 15%;\n  animation-delay: 2s;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-element.element-3[_ngcontent-%COMP%] {\n  bottom: 30%;\n  left: 20%;\n  animation-delay: 4s;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-element.element-4[_ngcontent-%COMP%] {\n  top: 40%;\n  right: 25%;\n  animation-delay: 1s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  33% {\n    transform: translateY(-10px) rotate(5deg);\n  }\n  66% {\n    transform: translateY(5px) rotate(-5deg);\n  }\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  color: var(--white);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 50%);\n  z-index: 1;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 600px;\n  margin: 0 auto;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 3rem;\n  border-radius: var(--border-radius);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n  text-align: justify;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 1rem;\n  text-decoration: none;\n  transition: var(--transition);\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, \n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n  background: #f8f9fa;\n  color: var(--secondary-color);\n  border-color: #f8f9fa;\n  scale: 1.05;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--white);\n  color: var(--primary-color);\n  border-color: var(--white);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: var(--secondary-color);\n  border-color: #f8f9fa;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--white);\n  border-color: var(--white);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--white);\n  color: var(--primary-color);\n  border-color: var(--white);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n  scale: 1.05;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n  .about-layout[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n  .focus-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.5rem;\n  }\n  .mission-vision-grid[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n  .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    margin-bottom: 3rem;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .about-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%] {\n    order: 2;\n    padding-top: 1rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n    max-width: 100%;\n    min-height: 300px;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n    transform: none !important;\n    margin-top: 0 !important;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-1[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-2[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-3[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-4[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .mission-vision-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .focus-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    margin-top: 2rem;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 1rem;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-content-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .team-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .team-section[_ngcontent-%COMP%]   .team-description[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .team-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.5rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%] {\n    margin: 0 auto 1rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-position[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.2rem 0.8rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    margin-bottom: 2rem;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    padding: 1rem 1.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 0.8rem;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .about-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.6;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%] {\n    padding: 1.2rem 1rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin-bottom: 0.8rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%] {\n    gap: 1.2rem;\n    min-height: 250px;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n    transform: none !important;\n    margin-top: 0 !important;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-1[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-2[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-3[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-4[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .mission-vision-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 1.5rem;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    line-height: 1.5;\n  }\n  .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n   .mission-vision-section[_ngcontent-%COMP%]   .mission-vision-grid[_ngcontent-%COMP%]   .vision-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    margin-bottom: 0.6rem;\n  }\n  .focus-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n    margin-top: 1.5rem;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin-bottom: 0.8rem;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-content-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .focus-section[_ngcontent-%COMP%]   .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%]   .focus-content-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .team-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .team-section[_ngcontent-%COMP%]   .team-description[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .team-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%] {\n    padding: 1.2rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-position[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 0.15rem 0.6rem;\n  }\n  .team-section[_ngcontent-%COMP%]   .medical-team[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n    gap: 0.8rem;\n  }\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    padding: 0.8rem 1.2rem;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 360px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%] {\n    gap: 1rem;\n    min-height: 200px;\n  }\n  .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    transform: none !important;\n    margin-top: 0 !important;\n  }\n  .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-1[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-2[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-3[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-layout[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]   .circular-images[_ngcontent-%COMP%]   .circular-image.image-4[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .focus-grid[_ngcontent-%COMP%]   .focus-card[_ngcontent-%COMP%] {\n    padding: 1rem 0.8rem;\n  }\n  .team-member[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=bussiness.css.map */'] });
var Bussiness = _Bussiness;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bussiness, [{
    type: Component,
    args: [{ selector: "app-bussiness", imports: [], template: '<div class="business-container">\r\n\r\n  <!-- Qui\xE9nes Somos -->\r\n  <section class="about-section">\r\n    <div class="container">\r\n      <div class="about-layout">\r\n        <div class="about-content">\r\n          <div class="section-header">\r\n            <h2>\r\n              <svg class="title-icon" viewBox="0 0 24 24" fill="currentColor">\r\n                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>\r\n              </svg>\r\n              Acerca de nosotros\r\n            </h2>\r\n            <p class="section-subtitle">Una instituci\xF3n comprometida con la excelencia en el cuidado de la salud</p>\r\n          </div>\r\n          \r\n          <div class="about-text">\r\n            <p><b>CUIDANDO DE TI C&E IPS SAS</b> es una empresa creada por\r\n            profesionales de la salud que nace desde el amor y el entendimiento\r\n            que la recuperaci\xF3n y el bienestar de nuestros pacientes muchas veces\r\n            se fortalecen en la comodidad del hogar. Por ello, hemos desarrollado\r\n            un portafolio integral de servicios de atenci\xF3n domiciliaria, orientado a\r\n            brindar cuidados seguros, personalizados y humanizados directamente\r\n            en el entorno familiar.</p>\r\n            <p>Nuestro enfoque est\xE1 centrado en la persona, garantizando continuidad\r\n            en el tratamiento m\xE9dico, apoyo emocional y acompa\xF1amiento\r\n            profesional sin que el paciente tenga que desplazarse a un centro\r\n            asistencial. Contamos con un equipo interdisciplinario de profesionales\r\n            capacitados \u2014 m\xE9dicos, enfermeros, terapeutas, psic\xF3logos,\r\n            nutricionistas y auxiliares de enfermer\xEDa que trabajan\r\n            coordinadamente para cubrir las necesidades en salud de nuestros\r\n            usuarios.</p>\r\n\r\n            <p></p>\r\n          </div>\r\n          \r\n          <div class="values-grid">\r\n            <div class="value-item">\r\n              <div class="value-icon">\r\n                <svg viewBox="0 0 24 24" fill="currentColor">\r\n                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>\r\n                </svg>\r\n              </div>\r\n              <h4>Compromiso</h4>\r\n              <p>Trabajamos con responsabilidad y vocaci\xF3n de servicio en cada intervenci\xF3n de salud.</p>\r\n            </div>\r\n            <div class="value-item">\r\n              <div class="value-icon">\r\n                <svg viewBox="0 0 24 24" fill="currentColor">\r\n                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>\r\n                </svg>\r\n              </div>\r\n              <h4>Humanizaci\xF3n</h4>\r\n              <p>Brindamos atenci\xF3n centrada en la persona, con respeto, empat\xEDa, calidez y amor.</p>\r\n            </div>\r\n            <div class="value-item">\r\n              <div class="value-icon">\r\n                <svg viewBox="0 0 24 24" fill="currentColor">\r\n                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>\r\n                </svg>\r\n              </div>\r\n              <h4>Calidad</h4>\r\n              <p>Aplicamos est\xE1ndares cl\xEDnicos y operativos que garantizan servicios seguros y eficaces.</p>\r\n            </div>\r\n            <div class="value-item">\r\n              <div class="value-icon">\r\n                <svg viewBox="0 0 24 24" fill="currentColor">\r\n                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>\r\n                </svg>\r\n              </div>\r\n              <h4>Trabajo en equipo</h4>\r\n              <p>Promovemos la colaboraci\xF3n interdisciplinaria como base para una atenci\xF3n integral.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Misi\xF3n y Visi\xF3n -->\r\n  <section class="mission-vision-section">\r\n    <div class="container">\r\n      <div class="mission-vision-grid">\r\n        <div class="mission-card">\r\n          <div class="card-icon">\r\n            <svg viewBox="0 0 24 24" fill="currentColor">\r\n              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Nuestra Misi\xF3n</h3>\r\n          <p>Brindar atenci\xF3n en salud domiciliaria con altos est\xE1ndares de calidad, humanizaci\xF3n y seguridad, mediante un equipo interdisciplinario comprometido con el bienestar integral de nuestros pacientes, promoviendo la recuperaci\xF3n en un entorno familiar y velando por la seguridad del paciente. </p>\r\n          <ul class="mission-points">\r\n            <li>Proporcionar atenci\xF3n m\xE9dica integral y personalizada</li>\r\n            <li>Promover la prevenci\xF3n y el autocuidado</li>\r\n            <li>Garantizar la accesibilidad a servicios de salud</li>\r\n            <li>Mantener los m\xE1s altos est\xE1ndares de calidad</li>\r\n          </ul>\r\n        </div>\r\n        \r\n        <div class="vision-card">\r\n          <div class="card-icon">\r\n            <svg viewBox="0 0 24 24" fill="currentColor">\r\n              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Nuestra Visi\xF3n</h3>\r\n          <p>Ser l\xEDderes en la prestaci\xF3n de servicios de atenci\xF3n domiciliaria en salud a nivel regional/nacional, reconocidos por la excelencia en el cuidado humanizado, la innovaci\xF3n en nuestros procesos y el impacto positivo en la calidad de vida de nuestros usuarios y sus familias.</p>\r\n          <ul class="vision-points">\r\n            <li>Liderar la transformaci\xF3n del sector salud</li>\r\n            <li>Ser referente en innovaci\xF3n m\xE9dica</li>\r\n            <li>Expandir nuestra cobertura de servicios</li>\r\n            <li>Contribuir al desarrollo de la comunidad</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Enfoque y Especialidades -->\r\n  <section class="focus-section">\r\n    <div class="container">\r\n      <div class="section-header">\r\n        <h2>NUESTRO COMPROMISO ES EL CUIDADO EN CASA!</h2>\r\n        <p class="section-subtitle">En CUIDANDO DE TI CyE IPS SAS entendemos que la recuperaci\xF3n y el bienestar de nuestros pacientes muchas veces se fortalecen en la comodidad del hogar. Por ello, hemos desarrollado un portafolio integral de servicios de atenci\xF3n domiciliaria en salud, orientado a brindar cuidados seguros, personalizados y humanizados directamente en el entorno familiar.</p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n      \r\n\r\n  <!-- CTA Section -->\r\n  <section class="cta-section">\r\n    <div class="container">\r\n      <div class="cta-content">\r\n        <h2>\xBFListo unirte a la familia?</h2>\r\n        <p>\xDAnete a nuestra familia y descubre por qu\xE9 somos la IPS de confianza para muchos pacientes</p>\r\n        <div class="cta-buttons">\r\n          <button class="btn-primary" (click)="scheduleAppointment()">Contactanos</button>\r\n          <button class="btn-secondary" (click)="navigateToServices()">Conocer Servicios</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/components/bussiness/bussiness.scss */\n:root {\n  --primary-color: #005A9C;\n  --accent-color: #00B5E2;\n  --secondary-color: #004a8c;\n  --white: #ffffff;\n  --light-gray: #f8f9fa;\n  --dark-gray: #343a40;\n  --text-dark: #2c3e50;\n  --text-light: #6c757d;\n  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  --shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.15);\n  --transition: all 0.3s ease;\n  --border-radius: 15px;\n}\n.business-container {\n  width: 100%;\n  overflow-x: hidden;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.section-header {\n  text-align: center;\n  margin-bottom: 4rem;\n  position: relative;\n}\n.section-header h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.section-header h2 .title-icon {\n  width: 32px;\n  height: 32px;\n  color: var(--primary-color);\n  transition: var(--transition);\n}\n.section-header h2 .title-icon:hover {\n  color: var(--accent-color);\n  transform: scale(1.1);\n}\n.section-header h2::before {\n  content: "";\n  width: 40px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 2px;\n}\n.section-header h2::after {\n  content: "";\n  width: 40px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent-color),\n      var(--primary-color));\n  border-radius: 2px;\n}\n.section-header .section-subtitle {\n  font-size: 1.1rem;\n  color: var(--text-light);\n  max-width: 1400px;\n  margin: auto;\n}\n.about-section {\n  padding: 4rem 0;\n  background: var(--light-gray);\n  position: relative;\n  overflow: hidden;\n}\n.about-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 90, 156, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 181, 226, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(0, 90, 156, 0.05) 0%,\n      transparent 50%);\n  z-index: 1;\n}\n.about-section .about-layout {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  gap: 3rem;\n  align-items: start;\n}\n.about-section .about-layout .about-content .about-text {\n  max-width: 100%;\n  margin-bottom: 1.5rem;\n}\n.about-section .about-layout .about-content .about-text p {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: var(--text-dark);\n  margin-bottom: 1.5rem;\n  text-align: justify;\n}\n.about-section .about-layout .about-content .values-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n.about-section .about-layout .about-content .values-grid .value-item {\n  text-align: center;\n  padding: 1.5rem 1rem;\n  background: var(--white);\n  border-radius: var(--border-radius);\n  transition: var(--transition);\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  border: 3px solid var(--accent-color);\n  width: 250px;\n}\n.about-section .about-layout .about-content .values-grid .value-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.about-section .about-layout .about-content .values-grid .value-item:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.about-section .about-layout .about-content .values-grid .value-item:hover::before {\n  transform: scaleX(1);\n}\n.about-section .about-layout .about-content .values-grid .value-item:hover .value-icon {\n  transform: scale(1.1) rotate(5deg);\n  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.4);\n}\n.about-section .about-layout .about-content .values-grid .value-item:hover h4 {\n  color: var(--primary-color);\n}\n.about-section .about-layout .about-content .values-grid .value-item:hover p {\n  color: var(--text-dark);\n}\n.about-section .about-layout .about-content .values-grid .value-item .value-icon {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  box-shadow: 0 6px 20px rgba(0, 90, 156, 0.3);\n  transition: all 0.4s ease;\n  position: relative;\n  border: 2px solid var(--white);\n}\n.about-section .about-layout .about-content .values-grid .value-item .value-icon::after {\n  content: "";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.about-section .about-layout .about-content .values-grid .value-item .value-icon:hover::after {\n  opacity: 1;\n}\n.about-section .about-layout .about-content .values-grid .value-item .value-icon svg {\n  width: 25px;\n  height: 25px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.about-section .about-layout .about-content .values-grid .value-item h4 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n  position: relative;\n}\n.about-section .about-layout .about-content .values-grid .value-item h4::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 30px;\n  height: 2px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 2px;\n  transition: width 0.3s ease;\n}\n.about-section .about-layout .about-content .values-grid .value-item:hover h4::after {\n  width: 40px;\n}\n.about-section .about-layout .about-content .values-grid .value-item p {\n  color: var(--text-light);\n  line-height: 1.5;\n  font-size: 0.85rem;\n  margin-top: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n.about-section .about-layout .about-image {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 2rem;\n}\n.about-section .about-layout .about-image .circular-images {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  max-width: 600px;\n  min-height: 400px;\n}\n.about-section .about-layout .about-image .circular-images .circular-image {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  border: 6px solid var(--accent-color);\n  transition: var(--transition);\n  position: relative;\n}\n.about-section .about-layout .about-image .circular-images .circular-image:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n}\n.about-section .about-layout .about-image .circular-images .circular-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: var(--transition);\n}\n.about-section .about-layout .about-image .circular-images .circular-image.image-1 {\n  animation: float 6s ease-in-out infinite;\n  transform: translateX(-50px);\n}\n.about-section .about-layout .about-image .circular-images .circular-image.image-2 {\n  animation: float 6s ease-in-out infinite 1.5s;\n  transform: translateX(50px);\n  margin-top: 50px;\n}\n.about-section .about-layout .about-image .circular-images .circular-image.image-3 {\n  animation: float 6s ease-in-out infinite 3s;\n  transform: translateX(-50px);\n  margin-top: 20px;\n}\n.about-section .about-layout .about-image .circular-images .circular-image.image-4 {\n  animation: float 6s ease-in-out infinite 4.5s;\n  transform: translateX(50px);\n  margin-top: 80px;\n}\n.mission-vision-section {\n  padding: 4rem 0;\n  background: var(--white);\n  position: relative;\n  overflow: hidden;\n}\n.mission-vision-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 90, 156, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 181, 226, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(0, 90, 156, 0.05) 0%,\n      transparent 50%);\n  z-index: 1;\n}\n.mission-vision-section .mission-vision-grid {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem;\n}\n.mission-vision-section .mission-vision-grid .mission-card,\n.mission-vision-section .mission-vision-grid .vision-card {\n  background: var(--white);\n  padding: 2.5rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  border: 3px solid var(--accent-color);\n}\n.mission-vision-section .mission-vision-grid .mission-card:hover,\n.mission-vision-section .mission-vision-grid .vision-card:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.mission-vision-section .mission-vision-grid .mission-card:hover .card-icon,\n.mission-vision-section .mission-vision-grid .vision-card:hover .card-icon {\n  transform: scale(1.1);\n  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.4);\n}\n.mission-vision-section .mission-vision-grid .mission-card:hover h3,\n.mission-vision-section .mission-vision-grid .vision-card:hover h3 {\n  color: var(--primary-color);\n}\n.mission-vision-section .mission-vision-grid .mission-card:hover p,\n.mission-vision-section .mission-vision-grid .mission-card:hover li,\n.mission-vision-section .mission-vision-grid .vision-card:hover p,\n.mission-vision-section .mission-vision-grid .vision-card:hover li {\n  color: var(--text-dark);\n}\n.mission-vision-section .mission-vision-grid .mission-card .card-icon,\n.mission-vision-section .mission-vision-grid .vision-card .card-icon {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--light-gray),\n      #e9ecef);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 2rem;\n  border: 3px solid var(--accent-color);\n  box-shadow: 0 4px 15px rgba(0, 90, 156, 0.3);\n}\n.mission-vision-section .mission-vision-grid .mission-card .card-icon svg,\n.mission-vision-section .mission-vision-grid .vision-card .card-icon svg {\n  width: 40px;\n  height: 40px;\n  color: var(--primary-color);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.mission-vision-section .mission-vision-grid .mission-card h3,\n.mission-vision-section .mission-vision-grid .vision-card h3 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.mission-vision-section .mission-vision-grid .mission-card p,\n.mission-vision-section .mission-vision-grid .vision-card p {\n  color: var(--text-light);\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  text-align: justify;\n}\n.mission-vision-section .mission-vision-grid .mission-card ul,\n.mission-vision-section .mission-vision-grid .vision-card ul {\n  list-style: none;\n  padding: 0;\n}\n.mission-vision-section .mission-vision-grid .mission-card ul li,\n.mission-vision-section .mission-vision-grid .vision-card ul li {\n  color: var(--text-light);\n  margin-bottom: 0.8rem;\n  padding-left: 1.5rem;\n  position: relative;\n  text-align: justify;\n}\n.mission-vision-section .mission-vision-grid .mission-card ul li::before,\n.mission-vision-section .mission-vision-grid .vision-card ul li::before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  color: var(--accent-color);\n  font-weight: bold;\n}\n.focus-section {\n  padding: 4rem 0;\n  background: var(--light-gray);\n  position: relative;\n  overflow: hidden;\n}\n.focus-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 90, 156, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 181, 226, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(0, 90, 156, 0.05) 0%,\n      transparent 50%);\n  z-index: 1;\n}\n.focus-section .focus-grid {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  margin-top: 3rem;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.focus-section .focus-grid .focus-card {\n  background: var(--white);\n  padding: 2.5rem 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  text-align: center;\n  transition: var(--transition);\n  border: 3px solid var(--accent-color);\n  position: relative;\n  overflow: hidden;\n}\n.focus-section .focus-grid .focus-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.focus-section .focus-grid .focus-card:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n}\n.focus-section .focus-grid .focus-card:hover::before {\n  transform: scaleX(1);\n}\n.focus-section .focus-grid .focus-card:hover .focus-icon {\n  transform: scale(1.1) rotate(5deg);\n  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.4);\n}\n.focus-section .focus-grid .focus-card:hover .focus-content-text h4 {\n  color: var(--primary-color);\n}\n.focus-section .focus-grid .focus-card:hover .focus-content-text p {\n  color: var(--text-dark);\n}\n.focus-section .focus-grid .focus-card .focus-icon {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n  box-shadow: 0 6px 20px rgba(0, 90, 156, 0.3);\n  transition: all 0.4s ease;\n  position: relative;\n  border: 3px solid var(--white);\n}\n.focus-section .focus-grid .focus-card .focus-icon::after {\n  content: "";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.focus-section .focus-grid .focus-card .focus-icon:hover::after {\n  opacity: 1;\n}\n.focus-section .focus-grid .focus-card .focus-icon svg {\n  width: 35px;\n  height: 35px;\n  color: black;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.focus-section .focus-grid .focus-card .focus-content-text h4 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n  position: relative;\n}\n.focus-section .focus-grid .focus-card .focus-content-text h4::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 40px;\n  height: 3px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 2px;\n  transition: width 0.3s ease;\n}\n.focus-section .focus-grid .focus-card .focus-content-text:hover h4::after {\n  width: 60px;\n}\n.focus-section .focus-grid .focus-card .focus-content-text p {\n  color: var(--text-light);\n  line-height: 1.6;\n  font-size: 0.95rem;\n  margin: 0;\n  text-align: justify;\n}\n.recognition-section {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  color: var(--white);\n}\n.recognition-section .section-header h2,\n.recognition-section .section-header .section-subtitle {\n  color: var(--white);\n}\n.recognition-section .recognition-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  margin-bottom: 4rem;\n}\n.recognition-section .recognition-grid .recognition-card {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 2rem;\n  border-radius: var(--border-radius);\n  text-align: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: var(--transition);\n}\n.recognition-section .recognition-grid .recognition-card:hover {\n  transform: translateY(-5px);\n  background: rgba(255, 255, 255, 0.15);\n}\n.recognition-section .recognition-grid .recognition-card .recognition-icon {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n.recognition-section .recognition-grid .recognition-card h4 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.recognition-section .recognition-grid .recognition-card p {\n  opacity: 0.9;\n  line-height: 1.6;\n}\n.recognition-section .certifications-list {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 3rem;\n  border-radius: var(--border-radius);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.recognition-section .certifications-list h3 {\n  text-align: center;\n  margin-bottom: 2rem;\n  font-size: 1.5rem;\n}\n.recognition-section .certifications-list .cert-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n.recognition-section .certifications-list .cert-grid .cert-item {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 1.5rem;\n  border-radius: 10px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.recognition-section .certifications-list .cert-grid .cert-item .cert-name {\n  display: block;\n  font-weight: 600;\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n}\n.recognition-section .certifications-list .cert-grid .cert-item .cert-desc {\n  opacity: 0.8;\n  font-size: 0.9rem;\n}\n.team-section {\n  padding: 4rem 0;\n  background: var(--light-gray);\n  position: relative;\n  overflow: hidden;\n}\n.team-section .team-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.team-section .team-background .bg-pattern {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(0, 90, 156, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(0, 181, 226, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(0, 90, 156, 0.05) 0%,\n      transparent 50%);\n}\n.team-section .team-background .floating-elements {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.team-section .team-background .floating-elements .floating-element {\n  position: absolute;\n  font-size: 2rem;\n  opacity: 0.1;\n  animation: float 6s ease-in-out infinite;\n}\n.team-section .team-background .floating-elements .floating-element.element-1 {\n  top: 10%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.team-section .team-background .floating-elements .floating-element.element-2 {\n  top: 20%;\n  right: 15%;\n  animation-delay: 1.5s;\n}\n.team-section .team-background .floating-elements .floating-element.element-3 {\n  bottom: 30%;\n  left: 20%;\n  animation-delay: 3s;\n}\n.team-section .team-background .floating-elements .floating-element.element-4 {\n  bottom: 20%;\n  right: 10%;\n  animation-delay: 4.5s;\n}\n.team-section .container {\n  position: relative;\n  z-index: 2;\n}\n.team-section .team-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n.team-section .team-stats .team-stat {\n  text-align: center;\n  background: var(--white);\n  padding: 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  border: 2px solid #e9ecef;\n}\n.team-section .team-stats .team-stat:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--accent-color);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.team-section .team-stats .team-stat:hover .stat-number {\n  color: var(--primary-color);\n  transform: scale(1.1);\n}\n.team-section .team-stats .team-stat:hover .stat-label {\n  color: var(--text-dark);\n  font-weight: 600;\n}\n.team-section .team-stats .team-stat .stat-number {\n  display: block;\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--accent-color);\n  margin-bottom: 0.5rem;\n}\n.team-section .team-stats .team-stat .stat-label {\n  color: var(--text-light);\n  font-weight: 500;\n}\n.team-section .team-description {\n  max-width: 800px;\n  margin: 0 auto 3rem;\n  text-align: center;\n}\n.team-section .team-description p {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: var(--text-dark);\n  text-align: justify;\n}\n.team-section .medical-team,\n.team-section .admin-team {\n  margin-bottom: 3rem;\n}\n.team-section .medical-team .team-grid,\n.team-section .admin-team .team-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.team-section .medical-team .team-grid .team-member,\n.team-section .admin-team .team-grid .team-member {\n  background: var(--white);\n  border-radius: var(--border-radius);\n  padding: 1.5rem;\n  box-shadow: var(--shadow);\n  transition: var(--transition);\n  display: flex;\n  align-items: flex-start;\n  gap: 1.2rem;\n  border: 3px solid var(--accent-color);\n}\n.team-section .medical-team .team-grid .team-member:hover,\n.team-section .admin-team .team-grid .team-member:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary-color);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n}\n.team-section .medical-team .team-grid .team-member:hover .member-avatar .avatar-placeholder,\n.team-section .admin-team .team-grid .team-member:hover .member-avatar .avatar-placeholder {\n  transform: scale(1.1);\n  box-shadow: 0 8px 25px rgba(0, 90, 156, 0.4);\n}\n.team-section .medical-team .team-grid .team-member:hover .member-info h4,\n.team-section .admin-team .team-grid .team-member:hover .member-info h4 {\n  color: var(--primary-color);\n}\n.team-section .medical-team .team-grid .team-member:hover .member-position,\n.team-section .admin-team .team-grid .team-member:hover .member-position {\n  background: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.team-section .medical-team .team-grid .team-member:hover .member-info p,\n.team-section .admin-team .team-grid .team-member:hover .member-info p {\n  color: var(--text-dark);\n}\n.team-section .medical-team .team-grid .team-member .member-avatar,\n.team-section .admin-team .team-grid .team-member .member-avatar {\n  flex-shrink: 0;\n}\n.team-section .medical-team .team-grid .team-member .member-avatar .avatar-placeholder,\n.team-section .admin-team .team-grid .team-member .member-avatar .avatar-placeholder {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  box-shadow: 0 4px 15px rgba(0, 90, 156, 0.3);\n  position: relative;\n  overflow: hidden;\n  border: 3px solid var(--white);\n}\n.team-section .medical-team .team-grid .team-member .member-avatar .avatar-placeholder::before,\n.team-section .admin-team .team-grid .team-member .member-avatar .avatar-placeholder::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 70%);\n  transform: translateX(-100%);\n  transition: transform 0.6s ease;\n}\n.team-section .medical-team .team-grid .team-member .member-avatar .avatar-placeholder:hover::before,\n.team-section .admin-team .team-grid .team-member .member-avatar .avatar-placeholder:hover::before {\n  transform: translateX(100%);\n}\n.team-section .medical-team .team-grid .team-member .member-avatar .avatar-placeholder svg,\n.team-section .admin-team .team-grid .team-member .member-avatar .avatar-placeholder svg {\n  width: 40px;\n  height: 40px;\n  z-index: 2;\n  position: relative;\n}\n.team-section .medical-team .team-grid .team-member .member-info,\n.team-section .admin-team .team-grid .team-member .member-info {\n  flex: 1;\n}\n.team-section .medical-team .team-grid .team-member .member-info h4,\n.team-section .admin-team .team-grid .team-member .member-info h4 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n}\n.team-section .medical-team .team-grid .team-member .member-info .member-position,\n.team-section .admin-team .team-grid .team-member .member-info .member-position {\n  display: inline-block;\n  background: var(--accent-color);\n  color: var(--white);\n  padding: 0.3rem 1rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  border: 2px solid var(--accent-color);\n}\n.team-section .medical-team .team-grid .team-member .member-info p,\n.team-section .admin-team .team-grid .team-member .member-info p {\n  color: var(--text-light);\n  line-height: 1.6;\n  font-size: 0.95rem;\n  margin: 0;\n}\n.team-section .admin-team .team-grid .team-member .member-avatar .avatar-placeholder {\n  background:\n    linear-gradient(\n      135deg,\n      #6c757d,\n      #495057);\n}\n.floating-elements {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n.floating-elements .floating-element {\n  position: absolute;\n  opacity: 0.1;\n  animation: float 6s ease-in-out infinite;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  padding: 10px;\n  border: 2px solid rgba(0, 181, 226, 0.3);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.floating-elements .floating-element svg {\n  width: 40px;\n  height: 40px;\n  color: var(--accent-color);\n}\n.floating-elements .floating-element.element-1 {\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.floating-elements .floating-element.element-2 {\n  top: 60%;\n  right: 15%;\n  animation-delay: 2s;\n}\n.floating-elements .floating-element.element-3 {\n  bottom: 30%;\n  left: 20%;\n  animation-delay: 4s;\n}\n.floating-elements .floating-element.element-4 {\n  top: 40%;\n  right: 25%;\n  animation-delay: 1s;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  33% {\n    transform: translateY(-10px) rotate(5deg);\n  }\n  66% {\n    transform: translateY(5px) rotate(-5deg);\n  }\n}\n.cta-section {\n  padding: 4rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  color: var(--white);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 40% 40%,\n      rgba(255, 255, 255, 0.05) 0%,\n      transparent 50%);\n  z-index: 1;\n}\n.cta-section .cta-content {\n  position: relative;\n  z-index: 2;\n  max-width: 600px;\n  margin: 0 auto;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 3rem;\n  border-radius: var(--border-radius);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n}\n.cta-section .cta-content h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.cta-section .cta-content p {\n  font-size: 1.2rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n  text-align: justify;\n}\n.cta-section .cta-content .cta-buttons {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-section .cta-content .cta-buttons .btn-primary,\n.cta-section .cta-content .cta-buttons .btn-secondary {\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 1rem;\n  text-decoration: none;\n  transition: var(--transition);\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n.cta-section .cta-content .cta-buttons .btn-primary:hover,\n.cta-section .cta-content .cta-buttons .btn-secondary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n  background: #f8f9fa;\n  color: var(--secondary-color);\n  border-color: #f8f9fa;\n  scale: 1.05;\n}\n.cta-section .cta-content .cta-buttons .btn-primary {\n  background: var(--white);\n  color: var(--primary-color);\n  border-color: var(--white);\n}\n.cta-section .cta-content .cta-buttons .btn-primary:hover {\n  background: #f8f9fa;\n  color: var(--secondary-color);\n  border-color: #f8f9fa;\n}\n.cta-section .cta-content .cta-buttons .btn-secondary {\n  background: transparent;\n  color: var(--white);\n  border-color: var(--white);\n}\n.cta-section .cta-content .cta-buttons .btn-secondary:hover {\n  background: var(--white);\n  color: var(--primary-color);\n  border-color: var(--white);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n  scale: 1.05;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .container {\n    padding: 0 1.5rem;\n  }\n  .about-layout {\n    gap: 2rem;\n  }\n  .focus-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.5rem;\n  }\n  .mission-vision-grid {\n    gap: 2rem;\n  }\n  .team-grid {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 0 1rem;\n  }\n  .section-header {\n    margin-bottom: 3rem;\n  }\n  .section-header h2 {\n    font-size: 2rem;\n  }\n  .section-header .section-subtitle {\n    font-size: 1rem;\n  }\n  .about-section {\n    padding: 3rem 0;\n  }\n  .about-section .about-layout {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .about-section .about-layout .about-content {\n    order: 1;\n  }\n  .about-section .about-layout .about-content .values-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n  }\n  .about-section .about-layout .about-image {\n    order: 2;\n    padding-top: 1rem;\n  }\n  .about-section .about-layout .about-image .circular-images {\n    flex-direction: column;\n    gap: 1.5rem;\n    max-width: 100%;\n    min-height: 300px;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image {\n    width: 150px;\n    height: 150px;\n    transform: none !important;\n    margin-top: 0 !important;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image.image-1 {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image.image-2 {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image.image-3 {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image.image-4 {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .mission-vision-section {\n    padding: 3rem 0;\n  }\n  .mission-vision-section .mission-vision-grid {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card,\n  .mission-vision-section .mission-vision-grid .vision-card {\n    padding: 2rem;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card h3,\n  .mission-vision-section .mission-vision-grid .vision-card h3 {\n    font-size: 1.5rem;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card p,\n  .mission-vision-section .mission-vision-grid .vision-card p {\n    font-size: 1rem;\n  }\n  .focus-section {\n    padding: 3rem 0;\n  }\n  .focus-section .focus-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    margin-top: 2rem;\n  }\n  .focus-section .focus-grid .focus-card {\n    padding: 2rem 1.5rem;\n  }\n  .focus-section .focus-grid .focus-card .focus-icon {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 1rem;\n  }\n  .focus-section .focus-grid .focus-card .focus-icon svg {\n    width: 25px;\n    height: 25px;\n  }\n  .focus-section .focus-grid .focus-card .focus-content-text h4 {\n    font-size: 1.2rem;\n  }\n  .team-section {\n    padding: 3rem 0;\n  }\n  .team-section .team-description {\n    margin-bottom: 2rem;\n  }\n  .team-section .team-description p {\n    font-size: 1rem;\n  }\n  .team-section .medical-team .team-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .team-section .medical-team .team-grid .team-member {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.5rem;\n  }\n  .team-section .medical-team .team-grid .team-member .member-avatar {\n    margin: 0 auto 1rem;\n  }\n  .team-section .medical-team .team-grid .team-member .member-avatar .avatar-placeholder {\n    width: 60px;\n    height: 60px;\n  }\n  .team-section .medical-team .team-grid .team-member .member-avatar .avatar-placeholder svg {\n    width: 30px;\n    height: 30px;\n  }\n  .team-section .medical-team .team-grid .team-member .member-info h4 {\n    font-size: 1.2rem;\n  }\n  .team-section .medical-team .team-grid .team-member .member-info .member-position {\n    font-size: 0.8rem;\n    padding: 0.2rem 0.8rem;\n  }\n  .team-section .medical-team .team-grid .team-member .member-info p {\n    font-size: 0.9rem;\n  }\n  .cta-section {\n    padding: 3rem 0;\n  }\n  .cta-section .cta-content {\n    padding: 2rem;\n  }\n  .cta-section .cta-content h2 {\n    font-size: 2rem;\n  }\n  .cta-section .cta-content p {\n    font-size: 1.1rem;\n    margin-bottom: 2rem;\n  }\n  .cta-section .cta-content .cta-buttons {\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n  }\n  .cta-section .cta-content .cta-buttons .btn-primary,\n  .cta-section .cta-content .cta-buttons .btn-secondary {\n    width: 100%;\n    max-width: 300px;\n    padding: 1rem 1.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .container {\n    padding: 0 0.8rem;\n  }\n  .section-header {\n    margin-bottom: 2rem;\n  }\n  .section-header h2 {\n    font-size: 1.8rem;\n  }\n  .section-header .section-subtitle {\n    font-size: 0.9rem;\n  }\n  .about-section {\n    padding: 2rem 0;\n  }\n  .about-section .about-layout {\n    gap: 1.5rem;\n  }\n  .about-section .about-layout .about-content .about-text p {\n    font-size: 1rem;\n    line-height: 1.6;\n  }\n  .about-section .about-layout .about-content .values-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .about-section .about-layout .about-content .values-grid .value-item {\n    padding: 1.2rem 1rem;\n  }\n  .about-section .about-layout .about-content .values-grid .value-item .value-icon {\n    width: 50px;\n    height: 50px;\n    margin-bottom: 0.8rem;\n  }\n  .about-section .about-layout .about-content .values-grid .value-item .value-icon svg {\n    width: 20px;\n    height: 20px;\n  }\n  .about-section .about-layout .about-content .values-grid .value-item h4 {\n    font-size: 1rem;\n  }\n  .about-section .about-layout .about-content .values-grid .value-item p {\n    font-size: 0.8rem;\n  }\n  .about-section .about-layout .about-image .circular-images {\n    gap: 1.2rem;\n    min-height: 250px;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image {\n    width: 120px;\n    height: 120px;\n    transform: none !important;\n    margin-top: 0 !important;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image.image-1 {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image.image-2 {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image.image-3 {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-section .about-layout .about-image .circular-images .circular-image.image-4 {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .mission-vision-section {\n    padding: 2rem 0;\n  }\n  .mission-vision-section .mission-vision-grid {\n    gap: 1.5rem;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card,\n  .mission-vision-section .mission-vision-grid .vision-card {\n    padding: 1.5rem;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card .card-icon,\n  .mission-vision-section .mission-vision-grid .vision-card .card-icon {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 1.5rem;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card .card-icon svg,\n  .mission-vision-section .mission-vision-grid .vision-card .card-icon svg {\n    width: 30px;\n    height: 30px;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card h3,\n  .mission-vision-section .mission-vision-grid .vision-card h3 {\n    font-size: 1.3rem;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card p,\n  .mission-vision-section .mission-vision-grid .vision-card p {\n    font-size: 0.9rem;\n    line-height: 1.5;\n  }\n  .mission-vision-section .mission-vision-grid .mission-card ul li,\n  .mission-vision-section .mission-vision-grid .vision-card ul li {\n    font-size: 0.85rem;\n    margin-bottom: 0.6rem;\n  }\n  .focus-section {\n    padding: 2rem 0;\n  }\n  .focus-section .focus-grid {\n    gap: 1rem;\n    margin-top: 1.5rem;\n  }\n  .focus-section .focus-grid .focus-card {\n    padding: 1.5rem 1rem;\n  }\n  .focus-section .focus-grid .focus-card .focus-icon {\n    width: 50px;\n    height: 50px;\n    margin-bottom: 0.8rem;\n  }\n  .focus-section .focus-grid .focus-card .focus-icon svg {\n    width: 20px;\n    height: 20px;\n  }\n  .focus-section .focus-grid .focus-card .focus-content-text h4 {\n    font-size: 1.1rem;\n  }\n  .focus-section .focus-grid .focus-card .focus-content-text p {\n    font-size: 0.85rem;\n  }\n  .team-section {\n    padding: 2rem 0;\n  }\n  .team-section .team-description {\n    margin-bottom: 1.5rem;\n  }\n  .team-section .team-description p {\n    font-size: 0.9rem;\n  }\n  .team-section .medical-team .team-grid {\n    gap: 1rem;\n  }\n  .team-section .medical-team .team-grid .team-member {\n    padding: 1.2rem;\n  }\n  .team-section .medical-team .team-grid .team-member .member-avatar .avatar-placeholder {\n    width: 50px;\n    height: 50px;\n  }\n  .team-section .medical-team .team-grid .team-member .member-avatar .avatar-placeholder svg {\n    width: 25px;\n    height: 25px;\n  }\n  .team-section .medical-team .team-grid .team-member .member-info h4 {\n    font-size: 1.1rem;\n  }\n  .team-section .medical-team .team-grid .team-member .member-info .member-position {\n    font-size: 0.75rem;\n    padding: 0.15rem 0.6rem;\n  }\n  .team-section .medical-team .team-grid .team-member .member-info p {\n    font-size: 0.8rem;\n  }\n  .cta-section {\n    padding: 2rem 0;\n  }\n  .cta-section .cta-content {\n    padding: 1.5rem;\n  }\n  .cta-section .cta-content h2 {\n    font-size: 1.6rem;\n  }\n  .cta-section .cta-content p {\n    font-size: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .cta-section .cta-content .cta-buttons {\n    gap: 0.8rem;\n  }\n  .cta-section .cta-content .cta-buttons .btn-primary,\n  .cta-section .cta-content .cta-buttons .btn-secondary {\n    padding: 0.8rem 1.2rem;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 360px) {\n  .container {\n    padding: 0 0.5rem;\n  }\n  .section-header h2 {\n    font-size: 1.6rem;\n  }\n  .section-header h2 .title-icon {\n    width: 24px;\n    height: 24px;\n  }\n  .about-layout .about-image .circular-images {\n    gap: 1rem;\n    min-height: 200px;\n  }\n  .about-layout .about-image .circular-images .circular-image {\n    width: 100px;\n    height: 100px;\n    transform: none !important;\n    margin-top: 0 !important;\n  }\n  .about-layout .about-image .circular-images .circular-image.image-1 {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-layout .about-image .circular-images .circular-image.image-2 {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .about-layout .about-image .circular-images .circular-image.image-3 {\n    align-self: flex-start;\n    margin-left: 0;\n  }\n  .about-layout .about-image .circular-images .circular-image.image-4 {\n    align-self: flex-end;\n    margin-right: 0;\n  }\n  .focus-grid .focus-card {\n    padding: 1rem 0.8rem;\n  }\n  .team-member {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=bussiness.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Bussiness, { className: "Bussiness", filePath: "src/app/components/bussiness/bussiness.ts", lineNumber: 10 });
})();

// src/app/components/questions/questions.ts
function Questions_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function Questions_div_4_Template_div_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFaq(i_r2));
    });
    \u0275\u0275elementStart(1, "div", 4)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    \u0275\u0275classProp("active", faq_r4.open);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r4.open ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r4.pregunta, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", faq_r4.open ? "200px" : "0");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r4.respuesta, " ");
  }
}
var _Questions = class _Questions {
  constructor() {
    this.faqs = [
      {
        pregunta: "\xBFC\xF3mo puedo solicitar un servicio de enfermer\xEDa a domicilio?",
        respuesta: "Puedes contactarnos a trav\xE9s del formulario de contacto o llamando al n\xFAmero de atenci\xF3n para agendar tu servicio.",
        open: false
      },
      {
        pregunta: "\xBFCu\xE1les son los horarios de atenci\xF3n?",
        respuesta: "Nuestro horario de atenci\xF3n es de lunes a s\xE1bado de 8:00 a.m. a 6:00 p.m.",
        open: false
      },
      {
        pregunta: "\xBFQu\xE9 tipo de servicios prestan?",
        respuesta: "Ofrecemos servicios de salud domiciliaria como enfermer\xEDa, terapias respiratorias, y seguimiento m\xE9dico.",
        open: false
      },
      {
        pregunta: "\xBFAtienden emergencias?",
        respuesta: "No. Nuestro servicio es programado. Para emergencias m\xE9dicas, dir\xEDgete al centro de salud m\xE1s cercano.",
        open: false
      }
    ];
  }
  toggleFaq(index) {
    this.faqs[index].open = !this.faqs[index].open;
  }
};
_Questions.\u0275fac = function Questions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Questions)();
};
_Questions.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Questions, selectors: [["app-questions"]], decls: 5, vars: 1, consts: [[1, "faq-section"], [1, "faq-grid"], ["class", "faq-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "faq-item", 3, "click"], [1, "faq-question"], [1, "faq-answer"]], template: function Questions_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h2");
    \u0275\u0275text(2, "Preguntas Frecuentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275template(4, Questions_div_4_Template, 7, 7, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.faqs);
  }
}, dependencies: [CommonModule, NgForOf, MatIconModule, MatIcon], styles: ["\n\n.faq-section[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 4rem auto;\n  padding: 2rem;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);\n}\n.faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  color: #0a3d62;\n}\n.faq-section[_ngcontent-%COMP%]   .faq-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .faq-section[_ngcontent-%COMP%]   .faq-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.faq-section[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 8px;\n  padding: 1rem;\n  cursor: pointer;\n  transition: background 0.3s;\n  overflow: hidden;\n}\n.faq-section[_ngcontent-%COMP%]   .faq-item.active[_ngcontent-%COMP%] {\n  background: #eef6ff;\n}\n.faq-section[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .faq-question[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  color: #0a3d62;\n}\n.faq-section[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .faq-question[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.faq-section[_ngcontent-%COMP%]   .faq-item[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  color: #333;\n}\n/*# sourceMappingURL=questions.css.map */"] });
var Questions = _Questions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Questions, [{
    type: Component,
    args: [{ selector: "app-questions", imports: [CommonModule, MatIconModule], template: `<section class="faq-section">\r
  <h2>Preguntas Frecuentes</h2>\r
  <div class="faq-grid">\r
    <div\r
      class="faq-item"\r
      *ngFor="let faq of faqs; let i = index"\r
      (click)="toggleFaq(i)"\r
      [class.active]="faq.open"\r
    >\r
      <div class="faq-question">\r
        <mat-icon>{{ faq.open ? 'expand_less' : 'expand_more' }}</mat-icon>\r
        {{ faq.pregunta }}\r
      </div>\r
      <div class="faq-answer" [style.maxHeight]="faq.open ? '200px' : '0'">\r
        {{ faq.respuesta }}\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/components/questions/questions.scss */\n.faq-section {\n  max-width: 1000px;\n  margin: 4rem auto;\n  padding: 2rem;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);\n}\n.faq-section h2 {\n  text-align: center;\n  margin-bottom: 2rem;\n  color: #0a3d62;\n}\n.faq-section .faq-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .faq-section .faq-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.faq-section .faq-item {\n  background: #f9f9f9;\n  border-radius: 8px;\n  padding: 1rem;\n  cursor: pointer;\n  transition: background 0.3s;\n  overflow: hidden;\n}\n.faq-section .faq-item.active {\n  background: #eef6ff;\n}\n.faq-section .faq-item .faq-question {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  color: #0a3d62;\n}\n.faq-section .faq-item .faq-question mat-icon {\n  margin-right: 0.5rem;\n}\n.faq-section .faq-item .faq-answer {\n  margin-top: 0.5rem;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  color: #333;\n}\n/*# sourceMappingURL=questions.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Questions, { className: "Questions", filePath: "src/app/components/questions/questions.ts", lineNumber: 11 });
})();

// node_modules/emailjs-com/es/store/store.js
var store = {
  _origin: "https://api.emailjs.com"
};

// node_modules/emailjs-com/es/methods/init/init.js
var init = (userID, origin = "https://api.emailjs.com") => {
  store._userID = userID;
  store._origin = origin;
};

// node_modules/emailjs-com/es/utils/validateParams.js
var validateParams = (userID, serviceID, templateID) => {
  if (!userID) {
    throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
  }
  if (!serviceID) {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID) {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
  return true;
};

// node_modules/emailjs-com/es/models/EmailJSResponseStatus.js
var EmailJSResponseStatus = class {
  constructor(httpResponse) {
    this.status = httpResponse.status;
    this.text = httpResponse.responseText;
  }
};

// node_modules/emailjs-com/es/api/sendPost.js
var sendPost = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", ({ target }) => {
      const responseStatus = new EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === "OK") {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener("error", ({ target }) => {
      reject(new EmailJSResponseStatus(target));
    });
    xhr.open("POST", store._origin + url, true);
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};

// node_modules/emailjs-com/es/methods/send/send.js
var send = (serviceID, templateID, templatePrams, userID) => {
  const uID = userID || store._userID;
  validateParams(uID, serviceID, templateID);
  const params = {
    lib_version: "3.2.0",
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};

// node_modules/emailjs-com/es/methods/sendForm/sendForm.js
var findHTMLForm = (form) => {
  let currentForm;
  if (typeof form === "string") {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
  }
  return currentForm;
};
var sendForm = (serviceID, templateID, form, userID) => {
  const uID = userID || store._userID;
  const currentForm = findHTMLForm(form);
  validateParams(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append("lib_version", "3.2.0");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", uID);
  return sendPost("/api/v1.0/email/send-form", formData);
};

// node_modules/emailjs-com/es/index.js
var es_default = {
  init,
  send,
  sendForm
};

// src/app/components/pqrs/pqrs.ts
function Pqrs_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Mensaje enviado con \xE9xito. Te responderemos pronto.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275listener("click", function Pqrs_div_43_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModals());
    });
    \u0275\u0275text(7, "Cerrar");
    \u0275\u0275elementEnd()()();
  }
}
function Pqrs_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 19)(2, "mat-icon");
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Error al enviar el mensaje. Verifica tus datos e intenta de nuevo.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275listener("click", function Pqrs_div_44_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModals());
    });
    \u0275\u0275text(7, "Cerrar");
    \u0275\u0275elementEnd()()();
  }
}
var _Pqrs = class _Pqrs {
  constructor() {
    this.formData = {
      nombre: "",
      email: "",
      mensaje: "",
      telefono: ""
    };
    this.isSubmitting = false;
    this.showSuccess = false;
    this.showError = false;
    this.serviceID = "service_mltki39";
    this.templateID = "template_es6hb0g";
    this.publicKey = "suQaP75ZIQ1ILc_FQ";
  }
  onSubmit() {
    if (!this.formData.nombre || !this.formData.email || !this.formData.mensaje) {
      this.showError = true;
      return;
    }
    this.isSubmitting = true;
    const params = {
      from_name: this.formData.nombre,
      email: this.formData.email,
      telefono: this.formData.telefono,
      message: this.formData.mensaje
    };
    es_default.send(this.serviceID, this.templateID, params, this.publicKey).then((response) => {
      this.isSubmitting = false;
      this.showSuccess = true;
      this.resetForm();
    }).catch(() => {
      this.isSubmitting = false;
      this.showError = true;
    });
  }
  resetForm() {
    this.formData = {
      nombre: "",
      email: "",
      mensaje: "",
      telefono: ""
    };
  }
  closeModals() {
    this.showSuccess = false;
    this.showError = false;
  }
};
_Pqrs.\u0275fac = function Pqrs_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Pqrs)();
};
_Pqrs.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pqrs, selectors: [["app-pqrs"]], decls: 45, vars: 8, consts: [["form", "ngForm"], [1, "pqrs-container"], [1, "form-wrapper"], ["novalidate", "", 3, "ngSubmit"], [1, "form-field"], ["type", "text", "name", "nombre", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "telefono", 3, "ngModelChange", "ngModel"], ["name", "mensaje", "rows", "4", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 3, "disabled"], [1, "info-sidebar"], [1, "social-links"], ["href", "https://wa.me/+573001234567", "target", "_blank", 1, "social-item", "whatsapp"], ["href", "https://t.me/+573001234567", "target", "_blank", 1, "social-item", "telegram"], [1, "horario"], ["class", "modal", 4, "ngIf"], [1, "modal"], [1, "modal-content", "success"], [3, "click"], [1, "modal-content", "error"]], template: function Pqrs_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1)(1, "h2");
    \u0275\u0275text(2, "Cont\xE1ctanos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "form", 3, 0);
    \u0275\u0275listener("ngSubmit", function Pqrs_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275elementStart(6, "div", 4)(7, "label");
    \u0275\u0275text(8, "Nombre completo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function Pqrs_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.formData.nombre, $event) || (ctx.formData.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 4)(11, "label");
    \u0275\u0275text(12, "Correo electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function Pqrs_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.formData.email, $event) || (ctx.formData.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function Pqrs_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.formData.telefono, $event) || (ctx.formData.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 4)(19, "label");
    \u0275\u0275text(20, "Mensaje *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 8);
    \u0275\u0275twoWayListener("ngModelChange", function Pqrs_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.formData.mensaje, $event) || (ctx.formData.mensaje = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 9);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 10)(25, "h3");
    \u0275\u0275text(26, "Otras v\xEDas de contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28, "Si prefieres una atenci\xF3n inmediata, escr\xEDbenos por nuestras redes sociales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 11)(30, "a", 12)(31, "mat-icon");
    \u0275\u0275text(32, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "WhatsApp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "a", 13)(36, "mat-icon");
    \u0275\u0275text(37, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Telegram");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 14)(41, "small");
    \u0275\u0275text(42, "Atenci\xF3n: Lun - Vie, 8:00 AM - 6:00 PM");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(43, Pqrs_div_43_Template, 8, 0, "div", 15)(44, Pqrs_div_44_Template, 8, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.formData.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.formData.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.formData.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.formData.mensaje);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Enviando..." : "Enviar mensaje", " ");
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx.showSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showError);
  }
}, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, MatIconModule, MatIcon], styles: ["\n\n.pqrs-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 3rem auto;\n  padding: 2rem;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n}\n.pqrs-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  color: #0a3d62;\n}\n.pqrs-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.pqrs-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%] {\n  flex: 0 0 250px;\n  padding-left: 2rem;\n  border-left: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0a3d62;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin-bottom: 1.5rem;\n  line-height: 1.4;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  padding: 0.8rem;\n  border-radius: 8px;\n  color: white;\n  font-weight: bold;\n  transition: transform 0.2s;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-item.whatsapp[_ngcontent-%COMP%] {\n  background-color: #25d366;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-item.telegram[_ngcontent-%COMP%] {\n  background-color: #0088cc;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%]   .horario[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  color: #999;\n  font-style: italic;\n}\n.pqrs-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.2rem;\n}\n.pqrs-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  font-weight: 500;\n}\n.pqrs-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.pqrs-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n.pqrs-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #0a3d62;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n.pqrs-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #aaa;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .pqrs-container[_ngcontent-%COMP%]   .info-sidebar[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid #eee;\n    padding-left: 0;\n    padding-top: 2rem;\n    flex: 1 1 100%;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  max-width: 400px;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 1rem;\n}\n.modal[_ngcontent-%COMP%]   .modal-content.success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n.modal[_ngcontent-%COMP%]   .modal-content.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0a3d62;\n  color: white;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=pqrs.css.map */"] });
var Pqrs = _Pqrs;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pqrs, [{
    type: Component,
    args: [{ selector: "app-pqrs", standalone: true, imports: [CommonModule, FormsModule, MatIconModule], template: `<section class="pqrs-container">\r
  <h2>Cont\xE1ctanos</h2>\r
\r
  <div class="form-wrapper">\r
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>\r
      <div class="form-field">\r
        <label>Nombre completo *</label>\r
        <input type="text" name="nombre" [(ngModel)]="formData.nombre" required />\r
      </div>\r
\r
      <div class="form-field">\r
        <label>Correo electr\xF3nico *</label>\r
        <input type="email" name="email" [(ngModel)]="formData.email" required />\r
      </div>\r
\r
      <div class="form-field">\r
        <label>Tel\xE9fono</label>\r
        <input type="tel" name="telefono" [(ngModel)]="formData.telefono" />\r
      </div>\r
\r
      <div class="form-field">\r
        <label>Mensaje *</label>\r
        <textarea name="mensaje" rows="4" [(ngModel)]="formData.mensaje" required></textarea>\r
      </div>\r
\r
      <button type="submit" [disabled]="isSubmitting">\r
        {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}\r
      </button>\r
    </form>\r
\r
    <div class="info-sidebar">\r
      <h3>Otras v\xEDas de contacto</h3>\r
      <p>Si prefieres una atenci\xF3n inmediata, escr\xEDbenos por nuestras redes sociales:</p>\r
      \r
      <div class="social-links">\r
        <a href="https://wa.me/+573001234567" target="_blank" class="social-item whatsapp">\r
          <mat-icon>chat</mat-icon>\r
          <span>WhatsApp</span>\r
        </a>\r
\r
        <a href="https://t.me/+573001234567" target="_blank" class="social-item telegram">\r
          <mat-icon>send</mat-icon>\r
          <span>Telegram</span>\r
        </a>\r
      </div>\r
      \r
      <div class="horario">\r
        <small>Atenci\xF3n: Lun - Vie, 8:00 AM - 6:00 PM</small>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="modal" *ngIf="showSuccess">\r
    <div class="modal-content success">\r
      <mat-icon>check_circle</mat-icon>\r
      <p>Mensaje enviado con \xE9xito. Te responderemos pronto.</p>\r
      <button (click)="closeModals()">Cerrar</button>\r
    </div>\r
  </div>\r
\r
  <div class="modal" *ngIf="showError">\r
    <div class="modal-content error">\r
      <mat-icon>error</mat-icon>\r
      <p>Error al enviar el mensaje. Verifica tus datos e intenta de nuevo.</p>\r
      <button (click)="closeModals()">Cerrar</button>\r
    </div>\r
  </div>\r
</section>`, styles: ["/* src/app/components/pqrs/pqrs.scss */\n.pqrs-container {\n  max-width: 900px;\n  margin: 3rem auto;\n  padding: 2rem;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n}\n.pqrs-container h2 {\n  text-align: center;\n  margin-bottom: 2rem;\n  color: #0a3d62;\n}\n.pqrs-container .form-wrapper {\n  display: flex;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.pqrs-container form {\n  flex: 1;\n  min-width: 300px;\n}\n.pqrs-container .info-sidebar {\n  flex: 0 0 250px;\n  padding-left: 2rem;\n  border-left: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.pqrs-container .info-sidebar h3 {\n  color: #0a3d62;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n}\n.pqrs-container .info-sidebar p {\n  font-size: 0.9rem;\n  color: #666;\n  margin-bottom: 1.5rem;\n  line-height: 1.4;\n}\n.pqrs-container .info-sidebar .social-links {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.pqrs-container .info-sidebar .social-links .social-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  padding: 0.8rem;\n  border-radius: 8px;\n  color: white;\n  font-weight: bold;\n  transition: transform 0.2s;\n}\n.pqrs-container .info-sidebar .social-links .social-item:hover {\n  transform: translateX(5px);\n}\n.pqrs-container .info-sidebar .social-links .social-item.whatsapp {\n  background-color: #25d366;\n}\n.pqrs-container .info-sidebar .social-links .social-item.telegram {\n  background-color: #0088cc;\n}\n.pqrs-container .info-sidebar .social-links .social-item mat-icon {\n  font-size: 20px;\n}\n.pqrs-container .info-sidebar .horario {\n  margin-top: 2rem;\n  color: #999;\n  font-style: italic;\n}\n.pqrs-container .form-field {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.2rem;\n}\n.pqrs-container .form-field label {\n  margin-bottom: 0.4rem;\n  font-weight: 500;\n}\n.pqrs-container .form-field input,\n.pqrs-container .form-field textarea {\n  padding: 0.7rem;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n.pqrs-container button {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #0a3d62;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n.pqrs-container button:disabled {\n  background-color: #aaa;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .pqrs-container .info-sidebar {\n    border-left: none;\n    border-top: 1px solid #eee;\n    padding-left: 0;\n    padding-top: 2rem;\n    flex: 1 1 100%;\n  }\n}\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal .modal-content {\n  background: #fff;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  max-width: 400px;\n}\n.modal .modal-content mat-icon {\n  font-size: 40px;\n  margin-bottom: 1rem;\n}\n.modal .modal-content.success mat-icon {\n  color: green;\n}\n.modal .modal-content.error mat-icon {\n  color: red;\n}\n.modal .modal-content p {\n  margin-bottom: 1rem;\n}\n.modal .modal-content button {\n  background-color: #0a3d62;\n  color: white;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=pqrs.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pqrs, { className: "Pqrs", filePath: "src/app/components/pqrs/pqrs.ts", lineNumber: 14 });
})();

// src/app/components/testimonials/testimonials.ts
var _Testimonials = class _Testimonials {
};
_Testimonials.\u0275fac = function Testimonials_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Testimonials)();
};
_Testimonials.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Testimonials, selectors: [["app-testimonials"]], decls: 28, vars: 0, consts: [[1, "testimonials-container"], [1, "testimonials-title"], [1, "testimonials-subtitle"], [1, "testimonials-grid"], [1, "testimonial-card"], [1, "testimonial-avatar"], ["src", "https://images.icon-icons.com/1674/PNG/512/person_110935.png", "alt", "Foto de Ana P\xE9rez"], [1, "testimonial-content"], [1, "testimonial-text"], [1, "testimonial-author"], ["src", "https://images.icon-icons.com/1674/PNG/512/person_110935.png", "alt", "Foto de Laura Rodr\xEDguez"]], template: function Testimonials_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2, "Lo que nuestros pacientes dicen");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 2);
    \u0275\u0275text(4, " La satisfacci\xF3n y el bienestar de quienes conf\xEDan en nosotros es nuestro mayor orgullo. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4)(7, "div", 5);
    \u0275\u0275domElement(8, "img", 6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 7)(10, "p", 8);
    \u0275\u0275text(11, ' "A m\xED, en lo personal, me fue bien; sent\xED un cambio. Con m\xE1s energ\xEDa y vitalidad, me ayud\xF3 mucho con mis ojos. Sufro de resequedad y siempre tengo que aplicarme unas gotas, pero sent\xED que tambi\xE9n me ayud\xF3, porque ya no me arden tanto los ojos. Gracias por pensar en nuestra salud" ');
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 9)(13, "strong");
    \u0275\u0275text(14, "Esmeralda Natib");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span");
    \u0275\u0275text(16, "Paciente");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(17, "div", 4)(18, "div", 5);
    \u0275\u0275domElement(19, "img", 10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div", 7)(21, "p", 8);
    \u0275\u0275text(22, ' "Tuvimos una excelente experiencia con el personal que nos aplic\xF3 los sueros en nuestra cl\xEDnica. El suero detox y la vitamina C fueron administrados de manera profesional, con mucha atenci\xF3n y cuidado en cada detalle. El equipo demostr\xF3 gran conocimiento y nos brind\xF3 confianza desde el primer momento. Sin duda, es un servicio de calidad que recomendamos por sus buenos resultados y trato amable." ');
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "div", 9)(24, "strong");
    \u0275\u0275text(25, "Mar\xEDa Camila Bedoya & Victor del Portillo Monard");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "span");
    \u0275\u0275text(27, "Paciente");
    \u0275\u0275domElementEnd()()()()()();
  }
}, styles: ['@charset "UTF-8";\n\n\n\n.testimonials-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eaf6fb 0%,\n      #f9f9f9 100%);\n  padding: 3rem 1rem;\n  border-radius: 18px;\n  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);\n  max-width: 1400px;\n  margin: 2rem auto;\n  text-align: center;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonials-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #1976d2;\n  margin-bottom: 0.5rem;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonials-subtitle[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 1.1rem;\n  margin-bottom: 2.5rem;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n  padding-right: 10px;\n  margin-bottom: 2rem;\n  scrollbar-width: thin;\n  scrollbar-color: #1976d2 #eaf6fb;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  background: #eaf6fb;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #1976d2;\n  border-radius: 8px;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.07);\n  padding: 2rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: transform 0.2s;\n  min-height: 220px;\n  position: relative;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.03);\n  box-shadow: 0 6px 24px rgba(44, 62, 80, 0.12);\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]::before {\n  content: "\\2605";\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  font-size: 1.2rem;\n  color: #ffd700;\n  opacity: 0.7;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  border: 2px solid #1976d2;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-content[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  color: #333;\n  font-style: italic;\n  margin-bottom: 1rem;\n  min-height: 70px;\n  line-height: 1.5;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-content[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-content[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1976d2;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.testimonials-container[_ngcontent-%COMP%]   .testimonial-content[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.95rem;\n}\n@media (max-width: 900px) {\n  .testimonials-container[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    gap: 1.2rem;\n    max-height: 60vh;\n  }\n  .testimonials-container[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%] {\n    padding: 1.2rem 0.7rem;\n    min-height: 180px;\n  }\n}\n/*# sourceMappingURL=testimonials.css.map */'] });
var Testimonials = _Testimonials;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testimonials, [{
    type: Component,
    args: [{ selector: "app-testimonials", imports: [], template: '<div class="testimonials-container">\r\n  <h2 class="testimonials-title">Lo que nuestros pacientes dicen</h2>\r\n  <p class="testimonials-subtitle">\r\n    La satisfacci\xF3n y el bienestar de quienes conf\xEDan en nosotros es nuestro mayor orgullo.\r\n  </p>\r\n  <div class="testimonials-grid">\r\n    <div class="testimonial-card">\r\n      <div class="testimonial-avatar">\r\n        <img src="https://images.icon-icons.com/1674/PNG/512/person_110935.png" alt="Foto de Ana P\xE9rez">\r\n      </div>\r\n      <div class="testimonial-content">\r\n        <p class="testimonial-text">\r\n          "A m\xED, en lo personal, me fue bien; sent\xED un cambio. Con m\xE1s energ\xEDa y vitalidad, me ayud\xF3 mucho con mis ojos. Sufro de resequedad y siempre tengo que aplicarme unas gotas, pero sent\xED que tambi\xE9n me ayud\xF3, porque ya no me arden tanto los ojos. Gracias por pensar en nuestra salud"\r\n        </p>\r\n        <div class="testimonial-author">\r\n          <strong>Esmeralda Natib</strong>\r\n          <span>Paciente</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="testimonial-card">\r\n      <div class="testimonial-avatar">\r\n        <img src="https://images.icon-icons.com/1674/PNG/512/person_110935.png" alt="Foto de Laura Rodr\xEDguez">\r\n      </div>\r\n      <div class="testimonial-content">\r\n        <p class="testimonial-text">\r\n          "Tuvimos una excelente experiencia con el personal que nos aplic\xF3 los sueros en nuestra cl\xEDnica. El suero detox y la vitamina C fueron administrados de manera profesional, con mucha atenci\xF3n y cuidado en cada detalle. El equipo demostr\xF3 gran conocimiento y nos brind\xF3 confianza desde el primer momento. Sin duda, es un servicio de calidad que recomendamos por sus buenos resultados y trato amable."\r\n        </p>\r\n        <div class="testimonial-author">\r\n          <strong>Mar\xEDa Camila Bedoya & Victor del Portillo Monard</strong>\r\n          <span>Paciente</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Agrega aqu\xED todas las rese\xF1as que necesites, cada una en su .testimonial-card -->\r\n  </div>\r\n\r\n   <!-- <div class="screenshots-section">\r\n            <h3 class="screenshots-title">Rese\xF1as en redes y WhatsApp</h3>\r\n            <p class="screenshots-subtitle">Aqu\xED mostramos capturas reales de mensajes y comentarios que nos han enviado nuestros pacientes y familiares.</p>\r\n            <div class="screenshots-grid">\r\n            <div class="screenshot-card">\r\n                <img src="assets/screenshots/review1.png" alt="Rese\xF1a de WhatsApp 1">\r\n            </div>\r\n            <div class="screenshot-card">\r\n                <img src="assets/screenshots/review2.png" alt="Rese\xF1a de WhatsApp 2">\r\n            </div>\r\n            <div class="screenshot-card">\r\n                <img src="assets/screenshots/review3.png" alt="Rese\xF1a de Facebook 1">\r\n            </div>\r\n              Agrega m\xE1s pantallazos aqu\xED \r\n            </div>\r\n        </div> -->\r\n</div>\r\n', styles: ['@charset "UTF-8";\n\n/* src/app/components/testimonials/testimonials.scss */\n.testimonials-container {\n  background:\n    linear-gradient(\n      135deg,\n      #eaf6fb 0%,\n      #f9f9f9 100%);\n  padding: 3rem 1rem;\n  border-radius: 18px;\n  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);\n  max-width: 1400px;\n  margin: 2rem auto;\n  text-align: center;\n}\n.testimonials-container .testimonials-title {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #1976d2;\n  margin-bottom: 0.5rem;\n}\n.testimonials-container .testimonials-subtitle {\n  color: #555;\n  font-size: 1.1rem;\n  margin-bottom: 2.5rem;\n}\n.testimonials-container .testimonials-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n  padding-right: 10px;\n  margin-bottom: 2rem;\n  scrollbar-width: thin;\n  scrollbar-color: #1976d2 #eaf6fb;\n}\n.testimonials-container .testimonials-grid::-webkit-scrollbar {\n  width: 8px;\n  background: #eaf6fb;\n}\n.testimonials-container .testimonials-grid::-webkit-scrollbar-thumb {\n  background: #1976d2;\n  border-radius: 8px;\n}\n.testimonials-container .testimonial-card {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.07);\n  padding: 2rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: transform 0.2s;\n  min-height: 220px;\n  position: relative;\n}\n.testimonials-container .testimonial-card:hover {\n  transform: translateY(-6px) scale(1.03);\n  box-shadow: 0 6px 24px rgba(44, 62, 80, 0.12);\n}\n.testimonials-container .testimonial-card::before {\n  content: "\\2605";\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  font-size: 1.2rem;\n  color: #ffd700;\n  opacity: 0.7;\n}\n.testimonials-container .testimonial-avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  border: 2px solid #1976d2;\n}\n.testimonials-container .testimonial-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.testimonials-container .testimonial-content .testimonial-text {\n  font-size: 1.08rem;\n  color: #333;\n  font-style: italic;\n  margin-bottom: 1rem;\n  min-height: 70px;\n  line-height: 1.5;\n}\n.testimonials-container .testimonial-content .testimonial-author {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.testimonials-container .testimonial-content .testimonial-author strong {\n  color: #1976d2;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.testimonials-container .testimonial-content .testimonial-author span {\n  color: #888;\n  font-size: 0.95rem;\n}\n@media (max-width: 900px) {\n  .testimonials-container .testimonials-grid {\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    gap: 1.2rem;\n    max-height: 60vh;\n  }\n  .testimonials-container .testimonial-card {\n    padding: 1.2rem 0.7rem;\n    min-height: 180px;\n  }\n}\n/*# sourceMappingURL=testimonials.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Testimonials, { className: "Testimonials", filePath: "src/app/components/testimonials/testimonials.ts", lineNumber: 9 });
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  /** The attached viewport. */
  _viewport = null;
  /** The size of the items in the virtually scrolling list. */
  _itemSize;
  /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
  _minBufferPx;
  /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
  _maxBufferPx;
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  /** The scroll strategy used by this directive. */
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static \u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  constructor() {
  }
  /** Subject for notifying that a registered scrollable reference element has been scrolled. */
  _scrolled = new Subject();
  /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
  _scrolledCount = 0;
  /**
   * Map of all the scrollable references that are registered with the service and their
   * scroll event subscriptions.
   */
  scrollContainers = /* @__PURE__ */ new Map();
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  constructor() {
  }
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static \u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], () => [], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  /** Cached viewport dimensions. */
  _viewportSize;
  /** Stream of viewport change events. */
  _change = new Subject();
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT);
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ViewportRuler,
    factory: _ViewportRuler.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor() {
    super();
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static \u0275fac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollable,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  /** Emits when the viewport is detached from a CdkVirtualForOf. */
  _detachedSubject = new Subject();
  /** Emits when the rendered range changes. */
  _renderedRangeSubject = new Subject();
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  /**
   * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
   * will be removed.
   */
  appendOnly = false;
  // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
  // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
  // depending on how the strategy calculates the scrolled index, it may come at a cost to
  // performance.
  /** Emits when the index of the first element visible in the viewport changes. */
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  /** The element that wraps the rendered content. */
  _contentWrapper;
  /** A stream that emits whenever the rendered range changes. */
  renderedRangeStream = this._renderedRangeSubject;
  /**
   * The total size of all content (in pixels), including content that is not currently rendered.
   */
  _totalContentSize = 0;
  /** A string representing the `style.width` property value to be used for the spacer element. */
  _totalContentWidth = signal("");
  /** A string representing the `style.height` property value to be used for the spacer element. */
  _totalContentHeight = signal("");
  /**
   * The CSS transform applied to the rendered subset of items so that they appear within the bounds
   * of the visible viewport.
   */
  _renderedContentTransform;
  /** The currently rendered range of indices. */
  _renderedRange = {
    start: 0,
    end: 0
  };
  /** The length of the data bound to this viewport (in number of items). */
  _dataLength = 0;
  /** The size of the viewport (in pixels). */
  _viewportSize = 0;
  /** the currently attached CdkVirtualScrollRepeater. */
  _forOf;
  /** The last rendered content offset that was set. */
  _renderedContentOffset = 0;
  /**
   * Whether the last rendered content offset was to the end of the content (and therefore needs to
   * be rewritten as an offset to the start of the content).
   */
  _renderedContentOffsetNeedsRewrite = false;
  _changeDetectionNeeded = signal(false);
  /** A list of functions to run after the next change detection cycle. */
  _runAfterChangeDetection = [];
  /** Subscription to changes in the viewport size. */
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
    const ref = effect(
      () => {
        if (this._changeDetectionNeeded()) {
          this._doChangeDetection();
        }
      },
      // Using ApplicationRef injector is important here because we want this to be a root
      // effect that runs before change detection of any application views (since we're depending on markForCheck marking parents dirty)
      {
        injector: inject(ApplicationRef).injector
      }
    );
    inject(DestroyRef).onDestroy(() => void ref.destroy());
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (untracked(this._changeDetectionNeeded)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this.ngZone.run(() => {
          this._changeDetectionNeeded.set(true);
        });
      });
    });
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      afterNextRender(() => {
        this._changeDetectionNeeded.set(false);
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
    this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
  }
  static \u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
      deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
      }
    },
    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
  _viewport = inject(CdkVirtualScrollViewport, {
    skipSelf: true
  });
  /** Emits when the rendered view of the data changes. */
  viewChange = new Subject();
  /** Subject that emits when a new DataSource instance is given. */
  _dataSourceChanges = new Subject();
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  /** Emits whenever the data in the current DataSource changes. */
  dataStream = this._dataSourceChanges.pipe(
    // Start off with null `DataSource`.
    startWith(null),
    // Bundle up the previous and current data sources so we can work with both.
    pairwise(),
    // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
    // Replay the last emitted data when someone subscribes.
    shareReplay(1)
  );
  /** The differ used to calculate changes to the data. */
  _differ = null;
  /** The most recent data emitted from the DataSource. */
  _data;
  /** The currently rendered items. */
  _renderedItems;
  /** The currently rendered range of indices. */
  _renderedRange;
  /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static \u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _RecycleViewRepeaterStrategy
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor() {
    super();
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static \u0275fac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableElement)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static \u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static \u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static \u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/portal.mjs
function throwNullPortalError() {
  throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
  throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
  throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
  throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
  throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal = class {
  _attachedHost;
  /** Attach this portal to a host. */
  attach(host) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (host == null) {
        throwNullPortalOutletError();
      }
      if (host.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
    }
    this._attachedHost = host;
    return host.attach(this);
  }
  /** Detach this portal from its host */
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwNoPortalAttachedError();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
   * the PortalOutlet when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var ComponentPortal = class extends Portal {
  /** The type of the component that will be instantiated for attachment. */
  component;
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This is different from where the component *renders*, which is determined by the PortalOutlet.
   * The origin is necessary when the host is outside of the Angular application context.
   */
  viewContainerRef;
  /** Injector used for the instantiation of the component. */
  injector;
  /**
   * List of DOM nodes that should be projected through `<ng-content>` of the attached component.
   */
  projectableNodes;
  constructor(component, viewContainerRef, injector, projectableNodes) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.projectableNodes = projectableNodes;
  }
};
var TemplatePortal = class extends Portal {
  templateRef;
  viewContainerRef;
  context;
  injector;
  constructor(templateRef, viewContainerRef, context, injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  /**
   * Attach the portal to the provided `PortalOutlet`.
   * When a context is provided it will override the `context` property of the `TemplatePortal`
   * instance.
   */
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = void 0;
    return super.detach();
  }
};
var DomPortal = class extends Portal {
  /** DOM node hosting the portal's content. */
  element;
  constructor(element) {
    super();
    this.element = element instanceof ElementRef ? element.nativeElement : element;
  }
};
var BasePortalOutlet = class {
  /** The portal currently attached to the host. */
  _attachedPortal;
  /** A function that will permanently dispose this host. */
  _disposeFn;
  /** Whether this host has already been permanently disposed. */
  _isDisposed = false;
  /** Whether this host has an attached portal. */
  hasAttached() {
    return !!this._attachedPortal;
  }
  /** Attaches a portal. */
  attach(portal) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!portal) {
        throwNullPortalError();
      }
      if (this.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
      if (this._isDisposed) {
        throwPortalOutletAlreadyDisposedError();
      }
    }
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwUnknownPortalTypeError();
    }
  }
  // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
  attachDomPortal = null;
  /** Detaches a previously attached portal. */
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  /** Permanently dispose of this portal host. */
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  /** @docs-private */
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
};
var DomPortalOutlet = class extends BasePortalOutlet {
  outletElement;
  _appRef;
  _defaultInjector;
  /**
   * @param outletElement Element into which the content is projected.
   * @param _appRef Reference to the application. Only used in component portals when there
   *   is no `ViewContainerRef` available.
   * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
   *   have one. Only used for component portals.
   */
  constructor(outletElement, _appRef, _defaultInjector) {
    super();
    this.outletElement = outletElement;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
  }
  /**
   * Attach the given ComponentPortal to DOM element.
   * @param portal Portal to be attached
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    let componentRef;
    if (portal.viewContainerRef) {
      const injector = portal.injector || portal.viewContainerRef.injector;
      const ngModuleRef = injector.get(NgModuleRef$1, null, {
        optional: true
      }) || void 0;
      componentRef = portal.viewContainerRef.createComponent(portal.component, {
        index: portal.viewContainerRef.length,
        injector,
        ngModuleRef,
        projectableNodes: portal.projectableNodes || void 0
      });
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
        throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
      }
      const appRef = this._appRef;
      const elementInjector = portal.injector || this._defaultInjector || Injector.NULL;
      const environmentInjector = elementInjector.get(EnvironmentInjector, appRef.injector);
      componentRef = createComponent(portal.component, {
        elementInjector,
        environmentInjector,
        projectableNodes: portal.projectableNodes || void 0
      });
      appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        if (appRef.viewCount > 0) {
          appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  /**
   * Attaches a template portal to the DOM as an embedded view.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    });
    this._attachedPortal = portal;
    return viewRef;
  }
  /**
   * Attaches a DOM portal by transferring its content into the outlet.
   * @param portal Portal to be attached.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = (portal) => {
    const element = portal.element;
    if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("DOM portal content must be attached to a parent node.");
    }
    const anchorNode = this.outletElement.ownerDocument.createComment("dom-portal");
    element.parentNode.insertBefore(anchorNode, element);
    this.outletElement.appendChild(element);
    this._attachedPortal = portal;
    super.setDisposeFn(() => {
      if (anchorNode.parentNode) {
        anchorNode.parentNode.replaceChild(element, anchorNode);
      }
    });
  };
  /**
   * Clears out a portal from the DOM.
   */
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var CdkPortal = class _CdkPortal extends TemplatePortal {
  constructor() {
    const templateRef = inject(TemplateRef);
    const viewContainerRef = inject(ViewContainerRef);
    super(templateRef, viewContainerRef);
  }
  static \u0275fac = function CdkPortal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkPortal)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkPortal,
    selectors: [["", "cdkPortal", ""]],
    exportAs: ["cdkPortal"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortal, [{
    type: Directive,
    args: [{
      selector: "[cdkPortal]",
      exportAs: "cdkPortal"
    }]
  }], () => [], null);
})();
var TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TemplatePortalDirective_BaseFactory;
    return function TemplatePortalDirective_Factory(__ngFactoryType__) {
      return (\u0275TemplatePortalDirective_BaseFactory || (\u0275TemplatePortalDirective_BaseFactory = \u0275\u0275getInheritedFactory(_TemplatePortalDirective)))(__ngFactoryType__ || _TemplatePortalDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TemplatePortalDirective,
    selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
    exportAs: ["cdkPortal"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkPortal,
      useExisting: _TemplatePortalDirective
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatePortalDirective, [{
    type: Directive,
    args: [{
      selector: "[cdk-portal], [portal]",
      exportAs: "cdkPortal",
      providers: [{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }]
    }]
  }], null, null);
})();
var CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
  _moduleRef = inject(NgModuleRef$1, {
    optional: true
  });
  _document = inject(DOCUMENT);
  _viewContainerRef = inject(ViewContainerRef);
  /** Whether the portal component is initialized. */
  _isInitialized = false;
  /** Reference to the currently-attached component/view ref. */
  _attachedRef;
  constructor() {
    super();
  }
  /** Portal associated with the Portal outlet. */
  get portal() {
    return this._attachedPortal;
  }
  set portal(portal) {
    if (this.hasAttached() && !portal && !this._isInitialized) {
      return;
    }
    if (this.hasAttached()) {
      super.detach();
    }
    if (portal) {
      super.attach(portal);
    }
    this._attachedPortal = portal || null;
  }
  /** Emits when a portal is attached to the outlet. */
  attached = new EventEmitter();
  /** Component or view reference that is attached to the portal. */
  get attachedRef() {
    return this._attachedRef;
  }
  ngOnInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    super.dispose();
    this._attachedRef = this._attachedPortal = null;
  }
  /**
   * Attach the given ComponentPortal to this PortalOutlet.
   *
   * @param portal Portal to be attached to the portal outlet.
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    portal.setAttachedHost(this);
    const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
    const ref = viewContainerRef.createComponent(portal.component, {
      index: viewContainerRef.length,
      injector: portal.injector || viewContainerRef.injector,
      projectableNodes: portal.projectableNodes || void 0,
      ngModuleRef: this._moduleRef || void 0
    });
    if (viewContainerRef !== this._viewContainerRef) {
      this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
    }
    super.setDisposeFn(() => ref.destroy());
    this._attachedPortal = portal;
    this._attachedRef = ref;
    this.attached.emit(ref);
    return ref;
  }
  /**
   * Attach the given TemplatePortal to this PortalHost as an embedded View.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    portal.setAttachedHost(this);
    const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    super.setDisposeFn(() => this._viewContainerRef.clear());
    this._attachedPortal = portal;
    this._attachedRef = viewRef;
    this.attached.emit(viewRef);
    return viewRef;
  }
  /**
   * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
   * @param portal Portal to be attached.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = (portal) => {
    const element = portal.element;
    if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("DOM portal content must be attached to a parent node.");
    }
    const anchorNode = this._document.createComment("dom-portal");
    portal.setAttachedHost(this);
    element.parentNode.insertBefore(anchorNode, element);
    this._getRootNode().appendChild(element);
    this._attachedPortal = portal;
    super.setDisposeFn(() => {
      if (anchorNode.parentNode) {
        anchorNode.parentNode.replaceChild(element, anchorNode);
      }
    });
  };
  /** Gets the root node of the portal outlet. */
  _getRootNode() {
    const nativeElement = this._viewContainerRef.element.nativeElement;
    return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
  }
  static \u0275fac = function CdkPortalOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkPortalOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkPortalOutlet,
    selectors: [["", "cdkPortalOutlet", ""]],
    inputs: {
      portal: [0, "cdkPortalOutlet", "portal"]
    },
    outputs: {
      attached: "attached"
    },
    exportAs: ["cdkPortalOutlet"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortalOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalOutlet]",
      exportAs: "cdkPortalOutlet"
    }]
  }], () => [], {
    portal: [{
      type: Input,
      args: ["cdkPortalOutlet"]
    }],
    attached: [{
      type: Output
    }]
  });
})();
var PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PortalHostDirective_BaseFactory;
    return function PortalHostDirective_Factory(__ngFactoryType__) {
      return (\u0275PortalHostDirective_BaseFactory || (\u0275PortalHostDirective_BaseFactory = \u0275\u0275getInheritedFactory(_PortalHostDirective)))(__ngFactoryType__ || _PortalHostDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PortalHostDirective,
    selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
    inputs: {
      portal: [0, "cdkPortalHost", "portal"]
    },
    exportAs: ["cdkPortalHost"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkPortalOutlet,
      useExisting: _PortalHostDirective
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalHost], [portalHost]",
      exportAs: "cdkPortalHost",
      inputs: [{
        name: "portal",
        alias: "cdkPortalHost"
      }],
      providers: [{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }]
    }]
  }], null, null);
})();
var PortalModule = class _PortalModule {
  static \u0275fac = function PortalModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortalModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PortalModule,
    imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
    exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalModule, [{
    type: NgModule,
    args: [{
      imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
      exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/overlay-module-Bd2UplUU.mjs
var scrollBehaviorSupported = supportsScrollBehavior();
function createBlockScrollStrategy(injector) {
  return new BlockScrollStrategy(injector.get(ViewportRuler), injector.get(DOCUMENT));
}
var BlockScrollStrategy = class {
  _viewportRuler;
  _previousHTMLStyles = {
    top: "",
    left: ""
  };
  _previousScrollPosition;
  _isEnabled = false;
  _document;
  constructor(_viewportRuler, document2) {
    this._viewportRuler = _viewportRuler;
    this._document = document2;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach() {
  }
  /** Blocks page-level scroll while the attached overlay is open. */
  enable() {
    if (this._canBeEnabled()) {
      const root = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
      this._previousHTMLStyles.left = root.style.left || "";
      this._previousHTMLStyles.top = root.style.top || "";
      root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
      root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
      root.classList.add("cdk-global-scrollblock");
      this._isEnabled = true;
    }
  }
  /** Unblocks page-level scroll while the attached overlay is open. */
  disable() {
    if (this._isEnabled) {
      const html = this._document.documentElement;
      const body = this._document.body;
      const htmlStyle = html.style;
      const bodyStyle = body.style;
      const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
      const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
      this._isEnabled = false;
      htmlStyle.left = this._previousHTMLStyles.left;
      htmlStyle.top = this._previousHTMLStyles.top;
      html.classList.remove("cdk-global-scrollblock");
      if (scrollBehaviorSupported) {
        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
      }
      window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
      if (scrollBehaviorSupported) {
        htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
        bodyStyle.scrollBehavior = previousBodyScrollBehavior;
      }
    }
  }
  _canBeEnabled() {
    const html = this._document.documentElement;
    if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
      return false;
    }
    const rootElement = this._document.documentElement;
    const viewport = this._viewportRuler.getViewportSize();
    return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
  }
};
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}
function createCloseScrollStrategy(injector, config) {
  return new CloseScrollStrategy(injector.get(ScrollDispatcher), injector.get(NgZone), injector.get(ViewportRuler), config);
}
var CloseScrollStrategy = class {
  _scrollDispatcher;
  _ngZone;
  _viewportRuler;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  _initialScrollPosition;
  constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._config = _config;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables the closing of the attached overlay on scroll. */
  enable() {
    if (this._scrollSubscription) {
      return;
    }
    const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
      return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
    }));
    if (this._config && this._config.threshold && this._config.threshold > 1) {
      this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
      this._scrollSubscription = stream.subscribe(() => {
        const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
        if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
          this._detach();
        } else {
          this._overlayRef.updatePosition();
        }
      });
    } else {
      this._scrollSubscription = stream.subscribe(this._detach);
    }
  }
  /** Disables the closing the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
  /** Detaches the overlay ref and disables the scroll strategy. */
  _detach = () => {
    this.disable();
    if (this._overlayRef.hasAttached()) {
      this._ngZone.run(() => this._overlayRef.detach());
    }
  };
};
var NoopScrollStrategy = class {
  /** Does nothing, as this scroll strategy is a no-op. */
  enable() {
  }
  /** Does nothing, as this scroll strategy is a no-op. */
  disable() {
  }
  /** Does nothing, as this scroll strategy is a no-op. */
  attach() {
  }
};
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some((containerBounds) => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some((scrollContainerRect) => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
function createRepositionScrollStrategy(injector, config) {
  return new RepositionScrollStrategy(injector.get(ScrollDispatcher), injector.get(ViewportRuler), injector.get(NgZone), config);
}
var RepositionScrollStrategy = class {
  _scrollDispatcher;
  _viewportRuler;
  _ngZone;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this._config = _config;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables repositioning of the attached overlay on scroll. */
  enable() {
    if (!this._scrollSubscription) {
      const throttle = this._config ? this._config.scrollThrottle : 0;
      this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
        this._overlayRef.updatePosition();
        if (this._config && this._config.autoClose) {
          const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
          const {
            width,
            height
          } = this._viewportRuler.getViewportSize();
          const parentRects = [{
            width,
            height,
            bottom: height,
            right: width,
            top: 0,
            left: 0
          }];
          if (isElementScrolledOutsideView(overlayRect, parentRects)) {
            this.disable();
            this._ngZone.run(() => this._overlayRef.detach());
          }
        }
      });
    }
  }
  /** Disables repositioning of the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
};
var ScrollStrategyOptions = class _ScrollStrategyOptions {
  _injector = inject(Injector);
  constructor() {
  }
  /** Do nothing on scroll. */
  noop = () => new NoopScrollStrategy();
  /**
   * Close the overlay as soon as the user scrolls.
   * @param config Configuration to be used inside the scroll strategy.
   */
  close = (config) => createCloseScrollStrategy(this._injector, config);
  /** Block scrolling. */
  block = () => createBlockScrollStrategy(this._injector);
  /**
   * Update the overlay's position on scroll.
   * @param config Configuration to be used inside the scroll strategy.
   * Allows debouncing the reposition calls.
   */
  reposition = (config) => createRepositionScrollStrategy(this._injector, config);
  static \u0275fac = function ScrollStrategyOptions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollStrategyOptions)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollStrategyOptions,
    factory: _ScrollStrategyOptions.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollStrategyOptions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OverlayConfig = class {
  /** Strategy with which to position the overlay. */
  positionStrategy;
  /** Strategy to be used when handling scroll events while the overlay is open. */
  scrollStrategy = new NoopScrollStrategy();
  /** Custom class to add to the overlay pane. */
  panelClass = "";
  /** Whether the overlay has a backdrop. */
  hasBackdrop = false;
  /** Custom class to add to the backdrop */
  backdropClass = "cdk-overlay-dark-backdrop";
  /** Whether to disable any built-in animations. */
  disableAnimations;
  /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
  width;
  /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
  height;
  /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
  minWidth;
  /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
  minHeight;
  /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
  maxWidth;
  /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
  maxHeight;
  /**
   * Direction of the text in the overlay panel. If a `Directionality` instance
   * is passed in, the overlay will handle changes to its value automatically.
   */
  direction;
  /**
   * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  disposeOnNavigation = false;
  constructor(config) {
    if (config) {
      const configKeys = Object.keys(config);
      for (const key of configKeys) {
        if (config[key] !== void 0) {
          this[key] = config[key];
        }
      }
    }
  }
};
var ConnectedOverlayPositionChange = class {
  connectionPair;
  scrollableViewProperties;
  constructor(connectionPair, scrollableViewProperties) {
    this.connectionPair = connectionPair;
    this.scrollableViewProperties = scrollableViewProperties;
  }
};
function validateVerticalPosition(property, value) {
  if (value !== "top" && value !== "bottom" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
  }
}
function validateHorizontalPosition(property, value) {
  if (value !== "start" && value !== "end" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
  }
}
var BaseOverlayDispatcher = class _BaseOverlayDispatcher {
  /** Currently attached overlays in the order they were attached. */
  _attachedOverlays = [];
  _document = inject(DOCUMENT);
  _isAttached;
  constructor() {
  }
  ngOnDestroy() {
    this.detach();
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    this.remove(overlayRef);
    this._attachedOverlays.push(overlayRef);
  }
  /** Remove an overlay from the list of attached overlay refs. */
  remove(overlayRef) {
    const index = this._attachedOverlays.indexOf(overlayRef);
    if (index > -1) {
      this._attachedOverlays.splice(index, 1);
    }
    if (this._attachedOverlays.length === 0) {
      this.detach();
    }
  }
  static \u0275fac = function BaseOverlayDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseOverlayDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseOverlayDispatcher,
    factory: _BaseOverlayDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseOverlayDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OverlayKeyboardDispatcher = class _OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupKeydown;
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    super.add(overlayRef);
    if (!this._isAttached) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener);
      });
      this._isAttached = true;
    }
  }
  /** Detaches the global keyboard event listener. */
  detach() {
    if (this._isAttached) {
      this._cleanupKeydown?.();
      this._isAttached = false;
    }
  }
  /** Keyboard event listener that will be attached to the body. */
  _keydownListener = (event) => {
    const overlays = this._attachedOverlays;
    for (let i = overlays.length - 1; i > -1; i--) {
      if (overlays[i]._keydownEvents.observers.length > 0) {
        this._ngZone.run(() => overlays[i]._keydownEvents.next(event));
        break;
      }
    }
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OverlayKeyboardDispatcher_BaseFactory;
    return function OverlayKeyboardDispatcher_Factory(__ngFactoryType__) {
      return (\u0275OverlayKeyboardDispatcher_BaseFactory || (\u0275OverlayKeyboardDispatcher_BaseFactory = \u0275\u0275getInheritedFactory(_OverlayKeyboardDispatcher)))(__ngFactoryType__ || _OverlayKeyboardDispatcher);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayKeyboardDispatcher,
    factory: _OverlayKeyboardDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayKeyboardDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OverlayOutsideClickDispatcher = class _OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cursorOriginalValue;
  _cursorStyleIsSet = false;
  _pointerDownEventTarget;
  _cleanups;
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    super.add(overlayRef);
    if (!this._isAttached) {
      const body = this._document.body;
      const eventOptions = {
        capture: true
      };
      const renderer = this._renderer;
      this._cleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(body, "pointerdown", this._pointerDownListener, eventOptions), renderer.listen(body, "click", this._clickListener, eventOptions), renderer.listen(body, "auxclick", this._clickListener, eventOptions), renderer.listen(body, "contextmenu", this._clickListener, eventOptions)]);
      if (this._platform.IOS && !this._cursorStyleIsSet) {
        this._cursorOriginalValue = body.style.cursor;
        body.style.cursor = "pointer";
        this._cursorStyleIsSet = true;
      }
      this._isAttached = true;
    }
  }
  /** Detaches the global keyboard event listener. */
  detach() {
    if (this._isAttached) {
      this._cleanups?.forEach((cleanup) => cleanup());
      this._cleanups = void 0;
      if (this._platform.IOS && this._cursorStyleIsSet) {
        this._document.body.style.cursor = this._cursorOriginalValue;
        this._cursorStyleIsSet = false;
      }
      this._isAttached = false;
    }
  }
  /** Store pointerdown event target to track origin of click. */
  _pointerDownListener = (event) => {
    this._pointerDownEventTarget = _getEventTarget(event);
  };
  /** Click event listener that will be attached to the body propagate phase. */
  _clickListener = (event) => {
    const target = _getEventTarget(event);
    const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
    this._pointerDownEventTarget = null;
    const overlays = this._attachedOverlays.slice();
    for (let i = overlays.length - 1; i > -1; i--) {
      const overlayRef = overlays[i];
      if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
        continue;
      }
      if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
        break;
      }
      const outsidePointerEvents = overlayRef._outsidePointerEvents;
      if (this._ngZone) {
        this._ngZone.run(() => outsidePointerEvents.next(event));
      } else {
        outsidePointerEvents.next(event);
      }
    }
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OverlayOutsideClickDispatcher_BaseFactory;
    return function OverlayOutsideClickDispatcher_Factory(__ngFactoryType__) {
      return (\u0275OverlayOutsideClickDispatcher_BaseFactory || (\u0275OverlayOutsideClickDispatcher_BaseFactory = \u0275\u0275getInheritedFactory(_OverlayOutsideClickDispatcher)))(__ngFactoryType__ || _OverlayOutsideClickDispatcher);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayOutsideClickDispatcher,
    factory: _OverlayOutsideClickDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayOutsideClickDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
var _CdkOverlayStyleLoader = class __CdkOverlayStyleLoader {
  static \u0275fac = function _CdkOverlayStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkOverlayStyleLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __CdkOverlayStyleLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-overlay-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _CdkOverlayStyleLoader_Template(rf, ctx) {
    },
    styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkOverlayStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-overlay-style-loader": ""
      },
      styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"]
    }]
  }], null, null);
})();
var OverlayContainer = class _OverlayContainer {
  _platform = inject(Platform);
  _containerElement;
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  constructor() {
  }
  ngOnDestroy() {
    this._containerElement?.remove();
  }
  /**
   * This method returns the overlay container element. It will lazily
   * create the element the first time it is called to facilitate using
   * the container in non-browser environments.
   * @returns the container element
   */
  getContainerElement() {
    this._loadStyles();
    if (!this._containerElement) {
      this._createContainer();
    }
    return this._containerElement;
  }
  /**
   * Create the overlay container element, which is simply a div
   * with the 'cdk-overlay-container' class on the document body.
   */
  _createContainer() {
    const containerClass = "cdk-overlay-container";
    if (this._platform.isBrowser || _isTestEnvironment()) {
      const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
      for (let i = 0; i < oppositePlatformContainers.length; i++) {
        oppositePlatformContainers[i].remove();
      }
    }
    const container = this._document.createElement("div");
    container.classList.add(containerClass);
    if (_isTestEnvironment()) {
      container.setAttribute("platform", "test");
    } else if (!this._platform.isBrowser) {
      container.setAttribute("platform", "server");
    }
    this._document.body.appendChild(container);
    this._containerElement = container;
  }
  /** Loads the structural styles necessary for the overlay to work. */
  _loadStyles() {
    this._styleLoader.load(_CdkOverlayStyleLoader);
  }
  static \u0275fac = function OverlayContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayContainer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayContainer,
    factory: _OverlayContainer.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var BackdropRef = class {
  _renderer;
  _ngZone;
  element;
  _cleanupClick;
  _cleanupTransitionEnd;
  _fallbackTimeout;
  constructor(document2, _renderer, _ngZone, onClick) {
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this.element = document2.createElement("div");
    this.element.classList.add("cdk-overlay-backdrop");
    this._cleanupClick = _renderer.listen(this.element, "click", onClick);
  }
  detach() {
    this._ngZone.runOutsideAngular(() => {
      const element = this.element;
      clearTimeout(this._fallbackTimeout);
      this._cleanupTransitionEnd?.();
      this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this.dispose);
      this._fallbackTimeout = setTimeout(this.dispose, 500);
      element.style.pointerEvents = "none";
      element.classList.remove("cdk-overlay-backdrop-showing");
    });
  }
  dispose = () => {
    clearTimeout(this._fallbackTimeout);
    this._cleanupClick?.();
    this._cleanupTransitionEnd?.();
    this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0;
    this.element.remove();
  };
};
var OverlayRef = class {
  _portalOutlet;
  _host;
  _pane;
  _config;
  _ngZone;
  _keyboardDispatcher;
  _document;
  _location;
  _outsideClickDispatcher;
  _animationsDisabled;
  _injector;
  _renderer;
  _backdropClick = new Subject();
  _attachments = new Subject();
  _detachments = new Subject();
  _positionStrategy;
  _scrollStrategy;
  _locationChanges = Subscription.EMPTY;
  _backdropRef = null;
  _detachContentMutationObserver;
  _detachContentAfterRenderRef;
  /**
   * Reference to the parent of the `_host` at the time it was detached. Used to restore
   * the `_host` to its original position in the DOM when it gets re-attached.
   */
  _previousHostParent;
  /** Stream of keydown events dispatched to this overlay. */
  _keydownEvents = new Subject();
  /** Stream of mouse outside events dispatched to this overlay. */
  _outsidePointerEvents = new Subject();
  /** Reference to the currently-running `afterNextRender` call. */
  _afterNextRenderRef;
  constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled2 = false, _injector, _renderer) {
    this._portalOutlet = _portalOutlet;
    this._host = _host;
    this._pane = _pane;
    this._config = _config;
    this._ngZone = _ngZone;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._document = _document;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsDisabled = _animationsDisabled2;
    this._injector = _injector;
    this._renderer = _renderer;
    if (_config.scrollStrategy) {
      this._scrollStrategy = _config.scrollStrategy;
      this._scrollStrategy.attach(this);
    }
    this._positionStrategy = _config.positionStrategy;
  }
  /** The overlay's HTML element */
  get overlayElement() {
    return this._pane;
  }
  /** The overlay's backdrop HTML element. */
  get backdropElement() {
    return this._backdropRef?.element || null;
  }
  /**
   * Wrapper around the panel element. Can be used for advanced
   * positioning where a wrapper with specific styling is
   * required around the overlay pane.
   */
  get hostElement() {
    return this._host;
  }
  /**
   * Attaches content, given via a Portal, to the overlay.
   * If the overlay is configured to have a backdrop, it will be created.
   *
   * @param portal Portal instance to which to attach the overlay.
   * @returns The portal attachment result.
   */
  attach(portal) {
    if (!this._host.parentElement && this._previousHostParent) {
      this._previousHostParent.appendChild(this._host);
    }
    const attachResult = this._portalOutlet.attach(portal);
    if (this._positionStrategy) {
      this._positionStrategy.attach(this);
    }
    this._updateStackingOrder();
    this._updateElementSize();
    this._updateElementDirection();
    if (this._scrollStrategy) {
      this._scrollStrategy.enable();
    }
    this._afterNextRenderRef?.destroy();
    this._afterNextRenderRef = afterNextRender(() => {
      if (this.hasAttached()) {
        this.updatePosition();
      }
    }, {
      injector: this._injector
    });
    this._togglePointerEvents(true);
    if (this._config.hasBackdrop) {
      this._attachBackdrop();
    }
    if (this._config.panelClass) {
      this._toggleClasses(this._pane, this._config.panelClass, true);
    }
    this._attachments.next();
    this._completeDetachContent();
    this._keyboardDispatcher.add(this);
    if (this._config.disposeOnNavigation) {
      this._locationChanges = this._location.subscribe(() => this.dispose());
    }
    this._outsideClickDispatcher.add(this);
    if (typeof attachResult?.onDestroy === "function") {
      attachResult.onDestroy(() => {
        if (this.hasAttached()) {
          this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
        }
      });
    }
    return attachResult;
  }
  /**
   * Detaches an overlay from a portal.
   * @returns The portal detachment result.
   */
  detach() {
    if (!this.hasAttached()) {
      return;
    }
    this.detachBackdrop();
    this._togglePointerEvents(false);
    if (this._positionStrategy && this._positionStrategy.detach) {
      this._positionStrategy.detach();
    }
    if (this._scrollStrategy) {
      this._scrollStrategy.disable();
    }
    const detachmentResult = this._portalOutlet.detach();
    this._detachments.next();
    this._completeDetachContent();
    this._keyboardDispatcher.remove(this);
    this._detachContentWhenEmpty();
    this._locationChanges.unsubscribe();
    this._outsideClickDispatcher.remove(this);
    return detachmentResult;
  }
  /** Cleans up the overlay from the DOM. */
  dispose() {
    const isAttached = this.hasAttached();
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._disposeScrollStrategy();
    this._backdropRef?.dispose();
    this._locationChanges.unsubscribe();
    this._keyboardDispatcher.remove(this);
    this._portalOutlet.dispose();
    this._attachments.complete();
    this._backdropClick.complete();
    this._keydownEvents.complete();
    this._outsidePointerEvents.complete();
    this._outsideClickDispatcher.remove(this);
    this._host?.remove();
    this._afterNextRenderRef?.destroy();
    this._previousHostParent = this._pane = this._host = this._backdropRef = null;
    if (isAttached) {
      this._detachments.next();
    }
    this._detachments.complete();
    this._completeDetachContent();
  }
  /** Whether the overlay has attached content. */
  hasAttached() {
    return this._portalOutlet.hasAttached();
  }
  /** Gets an observable that emits when the backdrop has been clicked. */
  backdropClick() {
    return this._backdropClick;
  }
  /** Gets an observable that emits when the overlay has been attached. */
  attachments() {
    return this._attachments;
  }
  /** Gets an observable that emits when the overlay has been detached. */
  detachments() {
    return this._detachments;
  }
  /** Gets an observable of keydown events targeted to this overlay. */
  keydownEvents() {
    return this._keydownEvents;
  }
  /** Gets an observable of pointer events targeted outside this overlay. */
  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }
  /** Gets the current overlay configuration, which is immutable. */
  getConfig() {
    return this._config;
  }
  /** Updates the position of the overlay based on the position strategy. */
  updatePosition() {
    if (this._positionStrategy) {
      this._positionStrategy.apply();
    }
  }
  /** Switches to a new position strategy and updates the overlay position. */
  updatePositionStrategy(strategy) {
    if (strategy === this._positionStrategy) {
      return;
    }
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._positionStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      this.updatePosition();
    }
  }
  /** Update the size properties of the overlay. */
  updateSize(sizeConfig) {
    this._config = __spreadValues(__spreadValues({}, this._config), sizeConfig);
    this._updateElementSize();
  }
  /** Sets the LTR/RTL direction for the overlay. */
  setDirection(dir) {
    this._config = __spreadProps(__spreadValues({}, this._config), {
      direction: dir
    });
    this._updateElementDirection();
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, true);
    }
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, false);
    }
  }
  /**
   * Returns the layout direction of the overlay panel.
   */
  getDirection() {
    const direction = this._config.direction;
    if (!direction) {
      return "ltr";
    }
    return typeof direction === "string" ? direction : direction.value;
  }
  /** Switches to a new scroll strategy. */
  updateScrollStrategy(strategy) {
    if (strategy === this._scrollStrategy) {
      return;
    }
    this._disposeScrollStrategy();
    this._scrollStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      strategy.enable();
    }
  }
  /** Updates the text direction of the overlay panel. */
  _updateElementDirection() {
    this._host.setAttribute("dir", this.getDirection());
  }
  /** Updates the size of the overlay element based on the overlay config. */
  _updateElementSize() {
    if (!this._pane) {
      return;
    }
    const style = this._pane.style;
    style.width = coerceCssPixelValue(this._config.width);
    style.height = coerceCssPixelValue(this._config.height);
    style.minWidth = coerceCssPixelValue(this._config.minWidth);
    style.minHeight = coerceCssPixelValue(this._config.minHeight);
    style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
    style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
  }
  /** Toggles the pointer events for the overlay pane element. */
  _togglePointerEvents(enablePointer) {
    this._pane.style.pointerEvents = enablePointer ? "" : "none";
  }
  /** Attaches a backdrop for this overlay. */
  _attachBackdrop() {
    const showingClass = "cdk-overlay-backdrop-showing";
    this._backdropRef?.dispose();
    this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, (event) => {
      this._backdropClick.next(event);
    });
    if (this._animationsDisabled) {
      this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation");
    }
    if (this._config.backdropClass) {
      this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
    }
    this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
    if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => this._backdropRef?.element.classList.add(showingClass));
      });
    } else {
      this._backdropRef.element.classList.add(showingClass);
    }
  }
  /**
   * Updates the stacking order of the element, moving it to the top if necessary.
   * This is required in cases where one overlay was detached, while another one,
   * that should be behind it, was destroyed. The next time both of them are opened,
   * the stacking will be wrong, because the detached element's pane will still be
   * in its original DOM position.
   */
  _updateStackingOrder() {
    if (this._host.nextSibling) {
      this._host.parentNode.appendChild(this._host);
    }
  }
  /** Detaches the backdrop (if any) associated with the overlay. */
  detachBackdrop() {
    if (this._animationsDisabled) {
      this._backdropRef?.dispose();
      this._backdropRef = null;
    } else {
      this._backdropRef?.detach();
    }
  }
  /** Toggles a single CSS class or an array of classes on an element. */
  _toggleClasses(element, cssClasses, isAdd) {
    const classes = coerceArray(cssClasses || []).filter((c) => !!c);
    if (classes.length) {
      isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
    }
  }
  /** Detaches the overlay once the content finishes animating and is removed from the DOM. */
  _detachContentWhenEmpty() {
    let rethrow = false;
    try {
      this._detachContentAfterRenderRef = afterNextRender(() => {
        rethrow = true;
        this._detachContent();
      }, {
        injector: this._injector
      });
    } catch (e) {
      if (rethrow) {
        throw e;
      }
      this._detachContent();
    }
    if (globalThis.MutationObserver && this._pane) {
      this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
        this._detachContent();
      });
      this._detachContentMutationObserver.observe(this._pane, {
        childList: true
      });
    }
  }
  _detachContent() {
    if (!this._pane || !this._host || this._pane.children.length === 0) {
      if (this._pane && this._config.panelClass) {
        this._toggleClasses(this._pane, this._config.panelClass, false);
      }
      if (this._host && this._host.parentElement) {
        this._previousHostParent = this._host.parentElement;
        this._host.remove();
      }
      this._completeDetachContent();
    }
  }
  _completeDetachContent() {
    this._detachContentAfterRenderRef?.destroy();
    this._detachContentAfterRenderRef = void 0;
    this._detachContentMutationObserver?.disconnect();
  }
  /** Disposes of a scroll strategy. */
  _disposeScrollStrategy() {
    const scrollStrategy = this._scrollStrategy;
    scrollStrategy?.disable();
    scrollStrategy?.detach?.();
  }
};
var boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
var cssUnitPattern = /([A-Za-z%]+)$/;
function createFlexibleConnectedPositionStrategy(injector, origin) {
  return new FlexibleConnectedPositionStrategy(origin, injector.get(ViewportRuler), injector.get(DOCUMENT), injector.get(Platform), injector.get(OverlayContainer));
}
var FlexibleConnectedPositionStrategy = class {
  _viewportRuler;
  _document;
  _platform;
  _overlayContainer;
  /** The overlay to which this strategy is attached. */
  _overlayRef;
  /** Whether we're performing the very first positioning of the overlay. */
  _isInitialRender;
  /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
  _lastBoundingBoxSize = {
    width: 0,
    height: 0
  };
  /** Whether the overlay was pushed in a previous positioning. */
  _isPushed = false;
  /** Whether the overlay can be pushed on-screen on the initial open. */
  _canPush = true;
  /** Whether the overlay can grow via flexible width/height after the initial open. */
  _growAfterOpen = false;
  /** Whether the overlay's width and height can be constrained to fit within the viewport. */
  _hasFlexibleDimensions = true;
  /** Whether the overlay position is locked. */
  _positionLocked = false;
  /** Cached origin dimensions */
  _originRect;
  /** Cached overlay dimensions */
  _overlayRect;
  /** Cached viewport dimensions */
  _viewportRect;
  /** Cached container dimensions */
  _containerRect;
  /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
  _viewportMargin = 0;
  /** The Scrollable containers used to check scrollable view properties on position change. */
  _scrollables = [];
  /** Ordered list of preferred positions, from most to least desirable. */
  _preferredPositions = [];
  /** The origin element against which the overlay will be positioned. */
  _origin;
  /** The overlay pane element. */
  _pane;
  /** Whether the strategy has been disposed of already. */
  _isDisposed;
  /**
   * Parent element for the overlay panel used to constrain the overlay panel's size to fit
   * within the viewport.
   */
  _boundingBox;
  /** The last position to have been calculated as the best fit position. */
  _lastPosition;
  /** The last calculated scroll visibility. Only tracked  */
  _lastScrollVisibility;
  /** Subject that emits whenever the position changes. */
  _positionChanges = new Subject();
  /** Subscription to viewport size changes. */
  _resizeSubscription = Subscription.EMPTY;
  /** Default offset for the overlay along the x axis. */
  _offsetX = 0;
  /** Default offset for the overlay along the y axis. */
  _offsetY = 0;
  /** Selector to be used when finding the elements on which to set the transform origin. */
  _transformOriginSelector;
  /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
  _appliedPanelClasses = [];
  /** Amount by which the overlay was pushed in each axis during the last time it was positioned. */
  _previousPushAmount;
  /** Observable sequence of position changes. */
  positionChanges = this._positionChanges;
  /** Ordered list of preferred positions, from most to least desirable. */
  get positions() {
    return this._preferredPositions;
  }
  constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
    this.setOrigin(connectedTo);
  }
  /** Attaches this position strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("This position strategy is already attached to an overlay");
    }
    this._validatePositions();
    overlayRef.hostElement.classList.add(boundingBoxClass);
    this._overlayRef = overlayRef;
    this._boundingBox = overlayRef.hostElement;
    this._pane = overlayRef.overlayElement;
    this._isDisposed = false;
    this._isInitialRender = true;
    this._lastPosition = null;
    this._resizeSubscription.unsubscribe();
    this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      this._isInitialRender = true;
      this.apply();
    });
  }
  /**
   * Updates the position of the overlay element, using whichever preferred position relative
   * to the origin best fits on-screen.
   *
   * The selection of a position goes as follows:
   *  - If any positions fit completely within the viewport as-is,
   *      choose the first position that does so.
   *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
   *      choose the position with the greatest available size modified by the positions' weight.
   *  - If pushing is enabled, take the position that went off-screen the least and push it
   *      on-screen.
   *  - If none of the previous criteria were met, use the position that goes off-screen the least.
   * @docs-private
   */
  apply() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses();
    this._resetOverlayElementStyles();
    this._resetBoundingBoxStyles();
    this._viewportRect = this._getNarrowedViewportRect();
    this._originRect = this._getOriginRect();
    this._overlayRect = this._pane.getBoundingClientRect();
    this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
    const originRect = this._originRect;
    const overlayRect = this._overlayRect;
    const viewportRect = this._viewportRect;
    const containerRect = this._containerRect;
    const flexibleFits = [];
    let fallback;
    for (let pos of this._preferredPositions) {
      let originPoint = this._getOriginPoint(originRect, containerRect, pos);
      let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
      let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
      if (overlayFit.isCompletelyWithinViewport) {
        this._isPushed = false;
        this._applyPosition(pos, originPoint);
        return;
      }
      if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
        flexibleFits.push({
          position: pos,
          origin: originPoint,
          overlayRect,
          boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
        });
        continue;
      }
      if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
        fallback = {
          overlayFit,
          overlayPoint,
          originPoint,
          position: pos,
          overlayRect
        };
      }
    }
    if (flexibleFits.length) {
      let bestFit = null;
      let bestScore = -1;
      for (const fit of flexibleFits) {
        const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
        if (score > bestScore) {
          bestScore = score;
          bestFit = fit;
        }
      }
      this._isPushed = false;
      this._applyPosition(bestFit.position, bestFit.origin);
      return;
    }
    if (this._canPush) {
      this._isPushed = true;
      this._applyPosition(fallback.position, fallback.originPoint);
      return;
    }
    this._applyPosition(fallback.position, fallback.originPoint);
  }
  detach() {
    this._clearPanelClasses();
    this._lastPosition = null;
    this._previousPushAmount = null;
    this._resizeSubscription.unsubscribe();
  }
  /** Cleanup after the element gets destroyed. */
  dispose() {
    if (this._isDisposed) {
      return;
    }
    if (this._boundingBox) {
      extendStyles(this._boundingBox.style, {
        top: "",
        left: "",
        right: "",
        bottom: "",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: ""
      });
    }
    if (this._pane) {
      this._resetOverlayElementStyles();
    }
    if (this._overlayRef) {
      this._overlayRef.hostElement.classList.remove(boundingBoxClass);
    }
    this.detach();
    this._positionChanges.complete();
    this._overlayRef = this._boundingBox = null;
    this._isDisposed = true;
  }
  /**
   * This re-aligns the overlay element with the trigger in its last calculated position,
   * even if a position higher in the "preferred positions" list would now fit. This
   * allows one to re-align the panel without changing the orientation of the panel.
   */
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    const lastPosition = this._lastPosition;
    if (lastPosition) {
      this._originRect = this._getOriginRect();
      this._overlayRect = this._pane.getBoundingClientRect();
      this._viewportRect = this._getNarrowedViewportRect();
      this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
      const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
      this._applyPosition(lastPosition, originPoint);
    } else {
      this.apply();
    }
  }
  /**
   * Sets the list of Scrollable containers that host the origin element so that
   * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
   * Scrollable must be an ancestor element of the strategy's origin element.
   */
  withScrollableContainers(scrollables) {
    this._scrollables = scrollables;
    return this;
  }
  /**
   * Adds new preferred positions.
   * @param positions List of positions options for this overlay.
   */
  withPositions(positions) {
    this._preferredPositions = positions;
    if (positions.indexOf(this._lastPosition) === -1) {
      this._lastPosition = null;
    }
    this._validatePositions();
    return this;
  }
  /**
   * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
   * @param margin Required margin between the overlay and the viewport edge in pixels.
   */
  withViewportMargin(margin) {
    this._viewportMargin = margin;
    return this;
  }
  /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
  withFlexibleDimensions(flexibleDimensions = true) {
    this._hasFlexibleDimensions = flexibleDimensions;
    return this;
  }
  /** Sets whether the overlay can grow after the initial open via flexible width/height. */
  withGrowAfterOpen(growAfterOpen = true) {
    this._growAfterOpen = growAfterOpen;
    return this;
  }
  /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
  withPush(canPush = true) {
    this._canPush = canPush;
    return this;
  }
  /**
   * Sets whether the overlay's position should be locked in after it is positioned
   * initially. When an overlay is locked in, it won't attempt to reposition itself
   * when the position is re-applied (e.g. when the user scrolls away).
   * @param isLocked Whether the overlay should locked in.
   */
  withLockedPosition(isLocked = true) {
    this._positionLocked = isLocked;
    return this;
  }
  /**
   * Sets the origin, relative to which to position the overlay.
   * Using an element origin is useful for building components that need to be positioned
   * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
   * used for cases like contextual menus which open relative to the user's pointer.
   * @param origin Reference to the new origin.
   */
  setOrigin(origin) {
    this._origin = origin;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the x-axis.
   * @param offset New offset in the X axis.
   */
  withDefaultOffsetX(offset) {
    this._offsetX = offset;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the y-axis.
   * @param offset New offset in the Y axis.
   */
  withDefaultOffsetY(offset) {
    this._offsetY = offset;
    return this;
  }
  /**
   * Configures that the position strategy should set a `transform-origin` on some elements
   * inside the overlay, depending on the current position that is being applied. This is
   * useful for the cases where the origin of an animation can change depending on the
   * alignment of the overlay.
   * @param selector CSS selector that will be used to find the target
   *    elements onto which to set the transform origin.
   */
  withTransformOriginOn(selector) {
    this._transformOriginSelector = selector;
    return this;
  }
  /**
   * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
   */
  _getOriginPoint(originRect, containerRect, pos) {
    let x;
    if (pos.originX == "center") {
      x = originRect.left + originRect.width / 2;
    } else {
      const startX = this._isRtl() ? originRect.right : originRect.left;
      const endX = this._isRtl() ? originRect.left : originRect.right;
      x = pos.originX == "start" ? startX : endX;
    }
    if (containerRect.left < 0) {
      x -= containerRect.left;
    }
    let y;
    if (pos.originY == "center") {
      y = originRect.top + originRect.height / 2;
    } else {
      y = pos.originY == "top" ? originRect.top : originRect.bottom;
    }
    if (containerRect.top < 0) {
      y -= containerRect.top;
    }
    return {
      x,
      y
    };
  }
  /**
   * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
   * origin point to which the overlay should be connected.
   */
  _getOverlayPoint(originPoint, overlayRect, pos) {
    let overlayStartX;
    if (pos.overlayX == "center") {
      overlayStartX = -overlayRect.width / 2;
    } else if (pos.overlayX === "start") {
      overlayStartX = this._isRtl() ? -overlayRect.width : 0;
    } else {
      overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
    }
    let overlayStartY;
    if (pos.overlayY == "center") {
      overlayStartY = -overlayRect.height / 2;
    } else {
      overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
    }
    return {
      x: originPoint.x + overlayStartX,
      y: originPoint.y + overlayStartY
    };
  }
  /** Gets how well an overlay at the given point will fit within the viewport. */
  _getOverlayFit(point, rawOverlayRect, viewport, position) {
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    let {
      x,
      y
    } = point;
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      x += offsetX;
    }
    if (offsetY) {
      y += offsetY;
    }
    let leftOverflow = 0 - x;
    let rightOverflow = x + overlay.width - viewport.width;
    let topOverflow = 0 - y;
    let bottomOverflow = y + overlay.height - viewport.height;
    let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
    let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
    let visibleArea = visibleWidth * visibleHeight;
    return {
      visibleArea,
      isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
      fitsInViewportVertically: visibleHeight === overlay.height,
      fitsInViewportHorizontally: visibleWidth == overlay.width
    };
  }
  /**
   * Whether the overlay can fit within the viewport when it may resize either its width or height.
   * @param fit How well the overlay fits in the viewport at some position.
   * @param point The (x, y) coordinates of the overlay at some position.
   * @param viewport The geometry of the viewport.
   */
  _canFitWithFlexibleDimensions(fit, point, viewport) {
    if (this._hasFlexibleDimensions) {
      const availableHeight = viewport.bottom - point.y;
      const availableWidth = viewport.right - point.x;
      const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
      const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
      const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
      const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
      return verticalFit && horizontalFit;
    }
    return false;
  }
  /**
   * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
   * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
   * right and bottom).
   *
   * @param start Starting point from which the overlay is pushed.
   * @param rawOverlayRect Dimensions of the overlay.
   * @param scrollPosition Current viewport scroll position.
   * @returns The point at which to position the overlay after pushing. This is effectively a new
   *     originPoint.
   */
  _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
    if (this._previousPushAmount && this._positionLocked) {
      return {
        x: start.x + this._previousPushAmount.x,
        y: start.y + this._previousPushAmount.y
      };
    }
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    const viewport = this._viewportRect;
    const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
    const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
    const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
    const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
    let pushX = 0;
    let pushY = 0;
    if (overlay.width <= viewport.width) {
      pushX = overflowLeft || -overflowRight;
    } else {
      pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
    }
    if (overlay.height <= viewport.height) {
      pushY = overflowTop || -overflowBottom;
    } else {
      pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
    }
    this._previousPushAmount = {
      x: pushX,
      y: pushY
    };
    return {
      x: start.x + pushX,
      y: start.y + pushY
    };
  }
  /**
   * Applies a computed position to the overlay and emits a position change.
   * @param position The position preference
   * @param originPoint The point on the origin element where the overlay is connected.
   */
  _applyPosition(position, originPoint) {
    this._setTransformOrigin(position);
    this._setOverlayElementStyles(originPoint, position);
    this._setBoundingBoxStyles(originPoint, position);
    if (position.panelClass) {
      this._addPanelClasses(position.panelClass);
    }
    if (this._positionChanges.observers.length) {
      const scrollVisibility = this._getScrollVisibility();
      if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
        const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
        this._positionChanges.next(changeEvent);
      }
      this._lastScrollVisibility = scrollVisibility;
    }
    this._lastPosition = position;
    this._isInitialRender = false;
  }
  /** Sets the transform origin based on the configured selector and the passed-in position.  */
  _setTransformOrigin(position) {
    if (!this._transformOriginSelector) {
      return;
    }
    const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
    let xOrigin;
    let yOrigin = position.overlayY;
    if (position.overlayX === "center") {
      xOrigin = "center";
    } else if (this._isRtl()) {
      xOrigin = position.overlayX === "start" ? "right" : "left";
    } else {
      xOrigin = position.overlayX === "start" ? "left" : "right";
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
    }
  }
  /**
   * Gets the position and size of the overlay's sizing container.
   *
   * This method does no measuring and applies no styles so that we can cheaply compute the
   * bounds for all positions and choose the best fit based on these results.
   */
  _calculateBoundingBoxRect(origin, position) {
    const viewport = this._viewportRect;
    const isRtl = this._isRtl();
    let height, top, bottom;
    if (position.overlayY === "top") {
      top = origin.y;
      height = viewport.height - top + this._viewportMargin;
    } else if (position.overlayY === "bottom") {
      bottom = viewport.height - origin.y + this._viewportMargin * 2;
      height = viewport.height - bottom + this._viewportMargin;
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
      const previousHeight = this._lastBoundingBoxSize.height;
      height = smallestDistanceToViewportEdge * 2;
      top = origin.y - smallestDistanceToViewportEdge;
      if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
        top = origin.y - previousHeight / 2;
      }
    }
    const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
    const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
    let width, left, right;
    if (isBoundedByLeftViewportEdge) {
      right = viewport.width - origin.x + this._viewportMargin * 2;
      width = origin.x - this._viewportMargin;
    } else if (isBoundedByRightViewportEdge) {
      left = origin.x;
      width = viewport.right - origin.x;
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
      const previousWidth = this._lastBoundingBoxSize.width;
      width = smallestDistanceToViewportEdge * 2;
      left = origin.x - smallestDistanceToViewportEdge;
      if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
        left = origin.x - previousWidth / 2;
      }
    }
    return {
      top,
      left,
      bottom,
      right,
      width,
      height
    };
  }
  /**
   * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
   * origin's connection point and stretches to the bounds of the viewport.
   *
   * @param origin The point on the origin element where the overlay is connected.
   * @param position The position preference
   */
  _setBoundingBoxStyles(origin, position) {
    const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
    if (!this._isInitialRender && !this._growAfterOpen) {
      boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
      boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
    }
    const styles = {};
    if (this._hasExactPosition()) {
      styles.top = styles.left = "0";
      styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = "";
      styles.width = styles.height = "100%";
    } else {
      const maxHeight = this._overlayRef.getConfig().maxHeight;
      const maxWidth = this._overlayRef.getConfig().maxWidth;
      styles.height = coerceCssPixelValue(boundingBoxRect.height);
      styles.top = coerceCssPixelValue(boundingBoxRect.top);
      styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
      styles.width = coerceCssPixelValue(boundingBoxRect.width);
      styles.left = coerceCssPixelValue(boundingBoxRect.left);
      styles.right = coerceCssPixelValue(boundingBoxRect.right);
      if (position.overlayX === "center") {
        styles.alignItems = "center";
      } else {
        styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
      }
      if (position.overlayY === "center") {
        styles.justifyContent = "center";
      } else {
        styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
      }
      if (maxHeight) {
        styles.maxHeight = coerceCssPixelValue(maxHeight);
      }
      if (maxWidth) {
        styles.maxWidth = coerceCssPixelValue(maxWidth);
      }
    }
    this._lastBoundingBoxSize = boundingBoxRect;
    extendStyles(this._boundingBox.style, styles);
  }
  /** Resets the styles for the bounding box so that a new positioning can be computed. */
  _resetBoundingBoxStyles() {
    extendStyles(this._boundingBox.style, {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "",
      width: "",
      alignItems: "",
      justifyContent: ""
    });
  }
  /** Resets the styles for the overlay pane so that a new positioning can be computed. */
  _resetOverlayElementStyles() {
    extendStyles(this._pane.style, {
      top: "",
      left: "",
      bottom: "",
      right: "",
      position: "",
      transform: ""
    });
  }
  /** Sets positioning styles to the overlay element. */
  _setOverlayElementStyles(originPoint, position) {
    const styles = {};
    const hasExactPosition = this._hasExactPosition();
    const hasFlexibleDimensions = this._hasFlexibleDimensions;
    const config = this._overlayRef.getConfig();
    if (hasExactPosition) {
      const scrollPosition = this._viewportRuler.getViewportScrollPosition();
      extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
      extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
    } else {
      styles.position = "static";
    }
    let transformString = "";
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      transformString += `translateX(${offsetX}px) `;
    }
    if (offsetY) {
      transformString += `translateY(${offsetY}px)`;
    }
    styles.transform = transformString.trim();
    if (config.maxHeight) {
      if (hasExactPosition) {
        styles.maxHeight = coerceCssPixelValue(config.maxHeight);
      } else if (hasFlexibleDimensions) {
        styles.maxHeight = "";
      }
    }
    if (config.maxWidth) {
      if (hasExactPosition) {
        styles.maxWidth = coerceCssPixelValue(config.maxWidth);
      } else if (hasFlexibleDimensions) {
        styles.maxWidth = "";
      }
    }
    extendStyles(this._pane.style, styles);
  }
  /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayY(position, originPoint, scrollPosition) {
    let styles = {
      top: "",
      bottom: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    if (position.overlayY === "bottom") {
      const documentHeight = this._document.documentElement.clientHeight;
      styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
    } else {
      styles.top = coerceCssPixelValue(overlayPoint.y);
    }
    return styles;
  }
  /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayX(position, originPoint, scrollPosition) {
    let styles = {
      left: "",
      right: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    let horizontalStyleProperty;
    if (this._isRtl()) {
      horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
    } else {
      horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
    }
    if (horizontalStyleProperty === "right") {
      const documentWidth = this._document.documentElement.clientWidth;
      styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
    } else {
      styles.left = coerceCssPixelValue(overlayPoint.x);
    }
    return styles;
  }
  /**
   * Gets the view properties of the trigger and overlay, including whether they are clipped
   * or completely outside the view of any of the strategy's scrollables.
   */
  _getScrollVisibility() {
    const originBounds = this._getOriginRect();
    const overlayBounds = this._pane.getBoundingClientRect();
    const scrollContainerBounds = this._scrollables.map((scrollable) => {
      return scrollable.getElementRef().nativeElement.getBoundingClientRect();
    });
    return {
      isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
      isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
      isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
      isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
    };
  }
  /** Subtracts the amount that an element is overflowing on an axis from its length. */
  _subtractOverflows(length, ...overflows) {
    return overflows.reduce((currentValue, currentOverflow) => {
      return currentValue - Math.max(currentOverflow, 0);
    }, length);
  }
  /** Narrows the given viewport rect by the current _viewportMargin. */
  _getNarrowedViewportRect() {
    const width = this._document.documentElement.clientWidth;
    const height = this._document.documentElement.clientHeight;
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    return {
      top: scrollPosition.top + this._viewportMargin,
      left: scrollPosition.left + this._viewportMargin,
      right: scrollPosition.left + width - this._viewportMargin,
      bottom: scrollPosition.top + height - this._viewportMargin,
      width: width - 2 * this._viewportMargin,
      height: height - 2 * this._viewportMargin
    };
  }
  /** Whether the we're dealing with an RTL context */
  _isRtl() {
    return this._overlayRef.getDirection() === "rtl";
  }
  /** Determines whether the overlay uses exact or flexible positioning. */
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  /** Retrieves the offset of a position along the x or y axis. */
  _getOffset(position, axis) {
    if (axis === "x") {
      return position.offsetX == null ? this._offsetX : position.offsetX;
    }
    return position.offsetY == null ? this._offsetY : position.offsetY;
  }
  /** Validates that the current position match the expected values. */
  _validatePositions() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._preferredPositions.length) {
        throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
      }
      this._preferredPositions.forEach((pair) => {
        validateHorizontalPosition("originX", pair.originX);
        validateVerticalPosition("originY", pair.originY);
        validateHorizontalPosition("overlayX", pair.overlayX);
        validateVerticalPosition("overlayY", pair.overlayY);
      });
    }
  }
  /** Adds a single CSS class or an array of classes on the overlay panel. */
  _addPanelClasses(cssClasses) {
    if (this._pane) {
      coerceArray(cssClasses).forEach((cssClass) => {
        if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
          this._appliedPanelClasses.push(cssClass);
          this._pane.classList.add(cssClass);
        }
      });
    }
  }
  /** Clears the classes that the position strategy has applied from the overlay panel. */
  _clearPanelClasses() {
    if (this._pane) {
      this._appliedPanelClasses.forEach((cssClass) => {
        this._pane.classList.remove(cssClass);
      });
      this._appliedPanelClasses = [];
    }
  }
  /** Returns the DOMRect of the current origin. */
  _getOriginRect() {
    const origin = this._origin;
    if (origin instanceof ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
};
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== "number" && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === "px" ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
var wrapperClass = "cdk-global-overlay-wrapper";
function createGlobalPositionStrategy(_injector) {
  return new GlobalPositionStrategy();
}
var GlobalPositionStrategy = class {
  /** The overlay to which this strategy is attached. */
  _overlayRef;
  _cssPosition = "static";
  _topOffset = "";
  _bottomOffset = "";
  _alignItems = "";
  _xPosition = "";
  _xOffset = "";
  _width = "";
  _height = "";
  _isDisposed = false;
  attach(overlayRef) {
    const config = overlayRef.getConfig();
    this._overlayRef = overlayRef;
    if (this._width && !config.width) {
      overlayRef.updateSize({
        width: this._width
      });
    }
    if (this._height && !config.height) {
      overlayRef.updateSize({
        height: this._height
      });
    }
    overlayRef.hostElement.classList.add(wrapperClass);
    this._isDisposed = false;
  }
  /**
   * Sets the top position of the overlay. Clears any previously set vertical position.
   * @param value New top offset.
   */
  top(value = "") {
    this._bottomOffset = "";
    this._topOffset = value;
    this._alignItems = "flex-start";
    return this;
  }
  /**
   * Sets the left position of the overlay. Clears any previously set horizontal position.
   * @param value New left offset.
   */
  left(value = "") {
    this._xOffset = value;
    this._xPosition = "left";
    return this;
  }
  /**
   * Sets the bottom position of the overlay. Clears any previously set vertical position.
   * @param value New bottom offset.
   */
  bottom(value = "") {
    this._topOffset = "";
    this._bottomOffset = value;
    this._alignItems = "flex-end";
    return this;
  }
  /**
   * Sets the right position of the overlay. Clears any previously set horizontal position.
   * @param value New right offset.
   */
  right(value = "") {
    this._xOffset = value;
    this._xPosition = "right";
    return this;
  }
  /**
   * Sets the overlay to the start of the viewport, depending on the overlay direction.
   * This will be to the left in LTR layouts and to the right in RTL.
   * @param offset Offset from the edge of the screen.
   */
  start(value = "") {
    this._xOffset = value;
    this._xPosition = "start";
    return this;
  }
  /**
   * Sets the overlay to the end of the viewport, depending on the overlay direction.
   * This will be to the right in LTR layouts and to the left in RTL.
   * @param offset Offset from the edge of the screen.
   */
  end(value = "") {
    this._xOffset = value;
    this._xPosition = "end";
    return this;
  }
  /**
   * Sets the overlay width and clears any previously set width.
   * @param value New width for the overlay
   * @deprecated Pass the `width` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  width(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        width: value
      });
    } else {
      this._width = value;
    }
    return this;
  }
  /**
   * Sets the overlay height and clears any previously set height.
   * @param value New height for the overlay
   * @deprecated Pass the `height` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  height(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        height: value
      });
    } else {
      this._height = value;
    }
    return this;
  }
  /**
   * Centers the overlay horizontally with an optional offset.
   * Clears any previously set horizontal position.
   *
   * @param offset Overlay offset from the horizontal center.
   */
  centerHorizontally(offset = "") {
    this.left(offset);
    this._xPosition = "center";
    return this;
  }
  /**
   * Centers the overlay vertically with an optional offset.
   * Clears any previously set vertical position.
   *
   * @param offset Overlay offset from the vertical center.
   */
  centerVertically(offset = "") {
    this.top(offset);
    this._alignItems = "center";
    return this;
  }
  /**
   * Apply the position to the element.
   * @docs-private
   */
  apply() {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parentStyles = this._overlayRef.hostElement.style;
    const config = this._overlayRef.getConfig();
    const {
      width,
      height,
      maxWidth,
      maxHeight
    } = config;
    const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
    const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
    const xPosition = this._xPosition;
    const xOffset = this._xOffset;
    const isRtl = this._overlayRef.getConfig().direction === "rtl";
    let marginLeft = "";
    let marginRight = "";
    let justifyContent = "";
    if (shouldBeFlushHorizontally) {
      justifyContent = "flex-start";
    } else if (xPosition === "center") {
      justifyContent = "center";
      if (isRtl) {
        marginRight = xOffset;
      } else {
        marginLeft = xOffset;
      }
    } else if (isRtl) {
      if (xPosition === "left" || xPosition === "end") {
        justifyContent = "flex-end";
        marginLeft = xOffset;
      } else if (xPosition === "right" || xPosition === "start") {
        justifyContent = "flex-start";
        marginRight = xOffset;
      }
    } else if (xPosition === "left" || xPosition === "start") {
      justifyContent = "flex-start";
      marginLeft = xOffset;
    } else if (xPosition === "right" || xPosition === "end") {
      justifyContent = "flex-end";
      marginRight = xOffset;
    }
    styles.position = this._cssPosition;
    styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
    styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
    styles.marginBottom = this._bottomOffset;
    styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
    parentStyles.justifyContent = justifyContent;
    parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
  }
  /**
   * Cleans up the DOM changes from the position strategy.
   * @docs-private
   */
  dispose() {
    if (this._isDisposed || !this._overlayRef) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parent = this._overlayRef.hostElement;
    const parentStyles = parent.style;
    parent.classList.remove(wrapperClass);
    parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
    this._overlayRef = null;
    this._isDisposed = true;
  }
};
var OverlayPositionBuilder = class _OverlayPositionBuilder {
  _injector = inject(Injector);
  constructor() {
  }
  /**
   * Creates a global position strategy.
   */
  global() {
    return createGlobalPositionStrategy();
  }
  /**
   * Creates a flexible position strategy.
   * @param origin Origin relative to which to position the overlay.
   */
  flexibleConnectedTo(origin) {
    return createFlexibleConnectedPositionStrategy(this._injector, origin);
  }
  static \u0275fac = function OverlayPositionBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayPositionBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayPositionBuilder,
    factory: _OverlayPositionBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayPositionBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function createOverlayRef(injector, config) {
  injector.get(_CdkPrivateStyleLoader).load(_CdkOverlayStyleLoader);
  const overlayContainer = injector.get(OverlayContainer);
  const doc = injector.get(DOCUMENT);
  const idGenerator = injector.get(_IdGenerator);
  const appRef = injector.get(ApplicationRef);
  const directionality = injector.get(Directionality);
  const host = doc.createElement("div");
  const pane = doc.createElement("div");
  pane.id = idGenerator.getId("cdk-overlay-");
  pane.classList.add("cdk-overlay-pane");
  host.appendChild(pane);
  overlayContainer.getContainerElement().appendChild(host);
  const portalOutlet = new DomPortalOutlet(pane, appRef, injector);
  const overlayConfig = new OverlayConfig(config);
  const renderer = injector.get(Renderer2, null, {
    optional: true
  }) || injector.get(RendererFactory2).createRenderer(null, null);
  overlayConfig.direction = overlayConfig.direction || directionality.value;
  return new OverlayRef(portalOutlet, host, pane, overlayConfig, injector.get(NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(Location), injector.get(OverlayOutsideClickDispatcher), config?.disableAnimations ?? injector.get(ANIMATION_MODULE_TYPE, null, {
    optional: true
  }) === "NoopAnimations", injector.get(EnvironmentInjector), renderer);
}
var Overlay = class _Overlay {
  scrollStrategies = inject(ScrollStrategyOptions);
  _positionBuilder = inject(OverlayPositionBuilder);
  _injector = inject(Injector);
  constructor() {
  }
  /**
   * Creates an overlay.
   * @param config Configuration applied to the overlay.
   * @returns Reference to the created overlay.
   */
  create(config) {
    return createOverlayRef(this._injector, config);
  }
  /**
   * Gets a position builder that can be used, via fluent API,
   * to construct and configure a position strategy.
   * @returns An overlay position builder.
   */
  position() {
    return this._positionBuilder;
  }
  static \u0275fac = function Overlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Overlay)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Overlay,
    factory: _Overlay.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var defaultPositionList = [{
  originX: "start",
  originY: "bottom",
  overlayX: "start",
  overlayY: "top"
}, {
  originX: "start",
  originY: "top",
  overlayX: "start",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "top",
  overlayX: "end",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "bottom",
  overlayX: "end",
  overlayY: "top"
}];
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var CdkOverlayOrigin = class _CdkOverlayOrigin {
  elementRef = inject(ElementRef);
  constructor() {
  }
  static \u0275fac = function CdkOverlayOrigin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkOverlayOrigin)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkOverlayOrigin,
    selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
    exportAs: ["cdkOverlayOrigin"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkOverlayOrigin, [{
    type: Directive,
    args: [{
      selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
      exportAs: "cdkOverlayOrigin"
    }]
  }], () => [], null);
})();
var CdkConnectedOverlay = class _CdkConnectedOverlay {
  _dir = inject(Directionality, {
    optional: true
  });
  _injector = inject(Injector);
  _overlayRef;
  _templatePortal;
  _backdropSubscription = Subscription.EMPTY;
  _attachSubscription = Subscription.EMPTY;
  _detachSubscription = Subscription.EMPTY;
  _positionSubscription = Subscription.EMPTY;
  _offsetX;
  _offsetY;
  _position;
  _scrollStrategyFactory = inject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY);
  _disposeOnNavigation = false;
  _ngZone = inject(NgZone);
  /** Origin for the connected overlay. */
  origin;
  /** Registered connected position pairs. */
  positions;
  /**
   * This input overrides the positions input if specified. It lets users pass
   * in arbitrary positioning strategies.
   */
  positionStrategy;
  /** The offset in pixels for the overlay connection point on the x-axis */
  get offsetX() {
    return this._offsetX;
  }
  set offsetX(offsetX) {
    this._offsetX = offsetX;
    if (this._position) {
      this._updatePositionStrategy(this._position);
    }
  }
  /** The offset in pixels for the overlay connection point on the y-axis */
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(offsetY) {
    this._offsetY = offsetY;
    if (this._position) {
      this._updatePositionStrategy(this._position);
    }
  }
  /** The width of the overlay panel. */
  width;
  /** The height of the overlay panel. */
  height;
  /** The min width of the overlay panel. */
  minWidth;
  /** The min height of the overlay panel. */
  minHeight;
  /** The custom class to be set on the backdrop element. */
  backdropClass;
  /** The custom class to add to the overlay pane element. */
  panelClass;
  /** Margin between the overlay and the viewport edges. */
  viewportMargin = 0;
  /** Strategy to be used when handling scroll events while the overlay is open. */
  scrollStrategy;
  /** Whether the overlay is open. */
  open = false;
  /** Whether the overlay can be closed by user interaction. */
  disableClose = false;
  /** CSS selector which to set the transform origin. */
  transformOriginSelector;
  /** Whether or not the overlay should attach a backdrop. */
  hasBackdrop = false;
  /** Whether or not the overlay should be locked when scrolling. */
  lockPosition = false;
  /** Whether the overlay's width and height can be constrained to fit within the viewport. */
  flexibleDimensions = false;
  /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
  growAfterOpen = false;
  /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
  push = false;
  /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
  get disposeOnNavigation() {
    return this._disposeOnNavigation;
  }
  set disposeOnNavigation(value) {
    this._disposeOnNavigation = value;
  }
  /** Event emitted when the backdrop is clicked. */
  backdropClick = new EventEmitter();
  /** Event emitted when the position has changed. */
  positionChange = new EventEmitter();
  /** Event emitted when the overlay has been attached. */
  attach = new EventEmitter();
  /** Event emitted when the overlay has been detached. */
  detach = new EventEmitter();
  /** Emits when there are keyboard events that are targeted at the overlay. */
  overlayKeydown = new EventEmitter();
  /** Emits when there are mouse outside click events that are targeted at the overlay. */
  overlayOutsideClick = new EventEmitter();
  // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
  constructor() {
    const templateRef = inject(TemplateRef);
    const viewContainerRef = inject(ViewContainerRef);
    this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    this.scrollStrategy = this._scrollStrategyFactory();
  }
  /** The associated overlay reference. */
  get overlayRef() {
    return this._overlayRef;
  }
  /** The element's layout direction. */
  get dir() {
    return this._dir ? this._dir.value : "ltr";
  }
  ngOnDestroy() {
    this._attachSubscription.unsubscribe();
    this._detachSubscription.unsubscribe();
    this._backdropSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
    this._overlayRef?.dispose();
  }
  ngOnChanges(changes) {
    if (this._position) {
      this._updatePositionStrategy(this._position);
      this._overlayRef?.updateSize({
        width: this.width,
        minWidth: this.minWidth,
        height: this.height,
        minHeight: this.minHeight
      });
      if (changes["origin"] && this.open) {
        this._position.apply();
      }
    }
    if (changes["open"]) {
      this.open ? this.attachOverlay() : this.detachOverlay();
    }
  }
  /** Creates an overlay */
  _createOverlay() {
    if (!this.positions || !this.positions.length) {
      this.positions = defaultPositionList;
    }
    const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
    this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
    this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
    overlayRef.keydownEvents().subscribe((event) => {
      this.overlayKeydown.next(event);
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.detachOverlay();
      }
    });
    this._overlayRef.outsidePointerEvents().subscribe((event) => {
      const origin = this._getOriginElement();
      const target = _getEventTarget(event);
      if (!origin || origin !== target && !origin.contains(target)) {
        this.overlayOutsideClick.next(event);
      }
    });
  }
  /** Builds the overlay config based on the directive's inputs */
  _buildConfig() {
    const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
    const overlayConfig = new OverlayConfig({
      direction: this._dir || "ltr",
      positionStrategy,
      scrollStrategy: this.scrollStrategy,
      hasBackdrop: this.hasBackdrop,
      disposeOnNavigation: this.disposeOnNavigation
    });
    if (this.width || this.width === 0) {
      overlayConfig.width = this.width;
    }
    if (this.height || this.height === 0) {
      overlayConfig.height = this.height;
    }
    if (this.minWidth || this.minWidth === 0) {
      overlayConfig.minWidth = this.minWidth;
    }
    if (this.minHeight || this.minHeight === 0) {
      overlayConfig.minHeight = this.minHeight;
    }
    if (this.backdropClass) {
      overlayConfig.backdropClass = this.backdropClass;
    }
    if (this.panelClass) {
      overlayConfig.panelClass = this.panelClass;
    }
    return overlayConfig;
  }
  /** Updates the state of a position strategy, based on the values of the directive inputs. */
  _updatePositionStrategy(positionStrategy) {
    const positions = this.positions.map((currentPosition) => ({
      originX: currentPosition.originX,
      originY: currentPosition.originY,
      overlayX: currentPosition.overlayX,
      overlayY: currentPosition.overlayY,
      offsetX: currentPosition.offsetX || this.offsetX,
      offsetY: currentPosition.offsetY || this.offsetY,
      panelClass: currentPosition.panelClass || void 0
    }));
    return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
  }
  /** Returns the position strategy of the overlay to be set on the overlay config */
  _createPositionStrategy() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
    this._updatePositionStrategy(strategy);
    return strategy;
  }
  _getOrigin() {
    if (this.origin instanceof CdkOverlayOrigin) {
      return this.origin.elementRef;
    } else {
      return this.origin;
    }
  }
  _getOriginElement() {
    if (this.origin instanceof CdkOverlayOrigin) {
      return this.origin.elementRef.nativeElement;
    }
    if (this.origin instanceof ElementRef) {
      return this.origin.nativeElement;
    }
    if (typeof Element !== "undefined" && this.origin instanceof Element) {
      return this.origin;
    }
    return null;
  }
  /** Attaches the overlay. */
  attachOverlay() {
    if (!this._overlayRef) {
      this._createOverlay();
    } else {
      this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
    }
    if (!this._overlayRef.hasAttached()) {
      this._overlayRef.attach(this._templatePortal);
    }
    if (this.hasBackdrop) {
      this._backdropSubscription = this._overlayRef.backdropClick().subscribe((event) => {
        this.backdropClick.emit(event);
      });
    } else {
      this._backdropSubscription.unsubscribe();
    }
    this._positionSubscription.unsubscribe();
    if (this.positionChange.observers.length > 0) {
      this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
        this._ngZone.run(() => this.positionChange.emit(position));
        if (this.positionChange.observers.length === 0) {
          this._positionSubscription.unsubscribe();
        }
      });
    }
    this.open = true;
  }
  /** Detaches the overlay. */
  detachOverlay() {
    this._overlayRef?.detach();
    this._backdropSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
    this.open = false;
  }
  static \u0275fac = function CdkConnectedOverlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkConnectedOverlay)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkConnectedOverlay,
    selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
    inputs: {
      origin: [0, "cdkConnectedOverlayOrigin", "origin"],
      positions: [0, "cdkConnectedOverlayPositions", "positions"],
      positionStrategy: [0, "cdkConnectedOverlayPositionStrategy", "positionStrategy"],
      offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"],
      offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"],
      width: [0, "cdkConnectedOverlayWidth", "width"],
      height: [0, "cdkConnectedOverlayHeight", "height"],
      minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"],
      minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"],
      backdropClass: [0, "cdkConnectedOverlayBackdropClass", "backdropClass"],
      panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"],
      viewportMargin: [0, "cdkConnectedOverlayViewportMargin", "viewportMargin"],
      scrollStrategy: [0, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
      open: [0, "cdkConnectedOverlayOpen", "open"],
      disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"],
      transformOriginSelector: [0, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
      hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute],
      lockPosition: [2, "cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute],
      flexibleDimensions: [2, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute],
      growAfterOpen: [2, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute],
      push: [2, "cdkConnectedOverlayPush", "push", booleanAttribute],
      disposeOnNavigation: [2, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", booleanAttribute]
    },
    outputs: {
      backdropClick: "backdropClick",
      positionChange: "positionChange",
      attach: "attach",
      detach: "detach",
      overlayKeydown: "overlayKeydown",
      overlayOutsideClick: "overlayOutsideClick"
    },
    exportAs: ["cdkConnectedOverlay"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkConnectedOverlay, [{
    type: Directive,
    args: [{
      selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
      exportAs: "cdkConnectedOverlay"
    }]
  }], () => [], {
    origin: [{
      type: Input,
      args: ["cdkConnectedOverlayOrigin"]
    }],
    positions: [{
      type: Input,
      args: ["cdkConnectedOverlayPositions"]
    }],
    positionStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayPositionStrategy"]
    }],
    offsetX: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetX"]
    }],
    offsetY: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetY"]
    }],
    width: [{
      type: Input,
      args: ["cdkConnectedOverlayWidth"]
    }],
    height: [{
      type: Input,
      args: ["cdkConnectedOverlayHeight"]
    }],
    minWidth: [{
      type: Input,
      args: ["cdkConnectedOverlayMinWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["cdkConnectedOverlayMinHeight"]
    }],
    backdropClass: [{
      type: Input,
      args: ["cdkConnectedOverlayBackdropClass"]
    }],
    panelClass: [{
      type: Input,
      args: ["cdkConnectedOverlayPanelClass"]
    }],
    viewportMargin: [{
      type: Input,
      args: ["cdkConnectedOverlayViewportMargin"]
    }],
    scrollStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayScrollStrategy"]
    }],
    open: [{
      type: Input,
      args: ["cdkConnectedOverlayOpen"]
    }],
    disableClose: [{
      type: Input,
      args: ["cdkConnectedOverlayDisableClose"]
    }],
    transformOriginSelector: [{
      type: Input,
      args: ["cdkConnectedOverlayTransformOriginOn"]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayHasBackdrop",
        transform: booleanAttribute
      }]
    }],
    lockPosition: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayLockPosition",
        transform: booleanAttribute
      }]
    }],
    flexibleDimensions: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayFlexibleDimensions",
        transform: booleanAttribute
      }]
    }],
    growAfterOpen: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayGrowAfterOpen",
        transform: booleanAttribute
      }]
    }],
    push: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayPush",
        transform: booleanAttribute
      }]
    }],
    disposeOnNavigation: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayDisposeOnNavigation",
        transform: booleanAttribute
      }]
    }],
    backdropClick: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    attach: [{
      type: Output
    }],
    detach: [{
      type: Output
    }],
    overlayKeydown: [{
      type: Output
    }],
    overlayOutsideClick: [{
      type: Output
    }]
  });
})();
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
  provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
  useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var OverlayModule = class _OverlayModule {
  static \u0275fac = function OverlayModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _OverlayModule,
    imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
    exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
    imports: [BidiModule, PortalModule, ScrollingModule, ScrollingModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
      exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/overlay.mjs
var FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _fullScreenEventName;
  _cleanupFullScreenListener;
  constructor() {
    super();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupFullScreenListener?.();
  }
  _createContainer() {
    const eventName = this._getEventName();
    super._createContainer();
    this._adjustParentForFullscreenChange();
    if (eventName) {
      this._cleanupFullScreenListener?.();
      this._cleanupFullScreenListener = this._renderer.listen("document", eventName, () => {
        this._adjustParentForFullscreenChange();
      });
    }
  }
  _adjustParentForFullscreenChange() {
    if (this._containerElement) {
      const fullscreenElement = this.getFullscreenElement();
      const parent = fullscreenElement || this._document.body;
      parent.appendChild(this._containerElement);
    }
  }
  _getEventName() {
    if (!this._fullScreenEventName) {
      const _document = this._document;
      if (_document.fullscreenEnabled) {
        this._fullScreenEventName = "fullscreenchange";
      } else if (_document.webkitFullscreenEnabled) {
        this._fullScreenEventName = "webkitfullscreenchange";
      } else if (_document.mozFullScreenEnabled) {
        this._fullScreenEventName = "mozfullscreenchange";
      } else if (_document.msFullscreenEnabled) {
        this._fullScreenEventName = "MSFullscreenChange";
      }
    }
    return this._fullScreenEventName;
  }
  /**
   * When the page is put into fullscreen mode, a specific element is specified.
   * Only that element and its children are visible when in fullscreen mode.
   */
  getFullscreenElement() {
    const _document = this._document;
    return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
  }
  static \u0275fac = function FullscreenOverlayContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FullscreenOverlayContainer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FullscreenOverlayContainer,
    factory: _FullscreenOverlayContainer.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenOverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/material/fesm2022/module-DVPFZEhf.mjs
var _c02 = ["tooltip"];
var SCROLL_THROTTLE_MS = 20;
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
var MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector, {
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector, {
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
  providedIn: "root",
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
var PANEL_CLASS = "tooltip-panel";
var passiveListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
var UNBOUNDED_ANCHOR_GAP = 8;
var MIN_HEIGHT = 24;
var MAX_WIDTH = 200;
var MatTooltip = class _MatTooltip {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _ariaDescriber = inject(AriaDescriber);
  _focusMonitor = inject(FocusMonitor);
  _dir = inject(Directionality);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef;
  _tooltipInstance;
  _overlayPanelClass;
  // Used for styling internally.
  _portal;
  _position = "below";
  _positionAtOrigin = false;
  _disabled = false;
  _tooltipClass;
  _viewInitialized = false;
  _pointerExitEventsInitialized = false;
  _tooltipComponent = TooltipComponent;
  _viewportMargin = 8;
  _currentPosition;
  _cssClassPrefix = "mat-mdc";
  _ariaDescriptionPending;
  _dirSubscribed = false;
  /** Allows the user to define the position of the tooltip relative to the parent element */
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  /**
   * Whether tooltip should be relative to the click or touch origin
   * instead of outside the element bounding box.
   */
  get positionAtOrigin() {
    return this._positionAtOrigin;
  }
  set positionAtOrigin(value) {
    this._positionAtOrigin = coerceBooleanProperty(value);
    this._detach();
    this._overlayRef = null;
  }
  /** Disables the display of the tooltip. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const isDisabled = coerceBooleanProperty(value);
    if (this._disabled !== isDisabled) {
      this._disabled = isDisabled;
      if (isDisabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
      this._syncAriaDescription(this.message);
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = coerceNumberProperty(value);
  }
  _showDelay;
  /** The default delay in ms before hiding the tooltip after hide is called */
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = coerceNumberProperty(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  _hideDelay;
  /**
   * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
   * uses a long press gesture to show and hide, however it can conflict with the native browser
   * gestures. To work around the conflict, Angular Material disables native gestures on the
   * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
   * elements). The different values for this option configure the touch event handling as follows:
   * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
   *   browser gestures on particular elements. In particular, it allows text selection on inputs
   *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
   * - `on` - Enables touch gestures for all elements and disables native
   *   browser gestures with no exceptions.
   * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
   *   showing on touch devices.
   */
  touchGestures = "auto";
  /** The message to be displayed in the tooltip */
  get message() {
    return this._message;
  }
  set message(value) {
    const oldMessage = this._message;
    this._message = value != null ? String(value).trim() : "";
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
    }
    this._syncAriaDescription(oldMessage);
  }
  _message = "";
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  /** Manually-bound passive event listeners. */
  _passiveListeners = [];
  /** Timer started at the last `touchstart` event. */
  _touchstartTimeout = null;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Whether ngOnDestroyed has been called. */
  _isDestroyed = false;
  constructor() {
    const defaultOptions = this._defaultOptions;
    if (defaultOptions) {
      this._showDelay = defaultOptions.showDelay;
      this._hideDelay = defaultOptions.hideDelay;
      if (defaultOptions.position) {
        this.position = defaultOptions.position;
      }
      if (defaultOptions.positionAtOrigin) {
        this.positionAtOrigin = defaultOptions.positionAtOrigin;
      }
      if (defaultOptions.touchGestures) {
        this.touchGestures = defaultOptions.touchGestures;
      }
      if (defaultOptions.tooltipClass) {
        this.tooltipClass = defaultOptions.tooltipClass;
      }
    }
    this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
  }
  ngAfterViewInit() {
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === "keyboard") {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    if (this._touchstartTimeout) {
      clearTimeout(this._touchstartTimeout);
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });
    this._passiveListeners.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
    this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
  show(delay = this.showDelay, origin) {
    if (this.disabled || !this.message || this._isTooltipVisible()) {
      this._tooltipInstance?._cancelPendingAnimations();
      return;
    }
    const overlayRef = this._createOverlay(origin);
    this._detach();
    this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
  hide(delay = this.hideDelay) {
    const instance = this._tooltipInstance;
    if (instance) {
      if (instance.isVisible()) {
        instance.hide(delay);
      } else {
        instance._cancelPendingAnimations();
        this._detach();
      }
    }
  }
  /** Shows/hides the tooltip */
  toggle(origin) {
    this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
  }
  /** Returns true if the tooltip is currently visible to the user */
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */
  _createOverlay(origin) {
    if (this._overlayRef) {
      const existingStrategy = this._overlayRef.getConfig().positionStrategy;
      if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
        return this._overlayRef;
      }
      this._detach();
    }
    const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
    const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
    strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = createOverlayRef(this._injector, {
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
      scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
      disableAnimations: this._animationsDisabled
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
        event.preventDefault();
        event.stopPropagation();
        this._ngZone.run(() => this.hide(0));
      }
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    if (!this._dirSubscribed) {
      this._dirSubscribed = true;
      this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
        }
      });
    }
    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)), this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */
  _addOffset(position) {
    const offset = UNBOUNDED_ANCHOR_GAP;
    const isLtr = !this._dir || this._dir.value == "ltr";
    if (position.originY === "top") {
      position.offsetY = -offset;
    } else if (position.originY === "bottom") {
      position.offsetY = offset;
    } else if (position.originX === "start") {
      position.offsetX = isLtr ? -offset : offset;
    } else if (position.originX === "end") {
      position.offsetX = isLtr ? offset : -offset;
    }
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let originPosition;
    if (position == "above" || position == "below") {
      originPosition = {
        originX: "center",
        originY: position == "above" ? "top" : "bottom"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      originPosition = {
        originX: "start",
        originY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      originPosition = {
        originX: "end",
        originY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let overlayPosition;
    if (position == "above") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "bottom"
      };
    } else if (position == "below") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "top"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      overlayPosition = {
        overlayX: "end",
        overlayY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      overlayPosition = {
        overlayX: "start",
        overlayY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */
  _updateTooltipMessage() {
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      afterNextRender(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      }, {
        injector: this._injector
      });
    }
  }
  /** Updates the tooltip class */
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */
  _invertPosition(x, y) {
    if (this.position === "above" || this.position === "below") {
      if (y === "top") {
        y = "bottom";
      } else if (y === "bottom") {
        y = "top";
      }
    } else {
      if (x === "end") {
        x = "start";
      } else if (x === "start") {
        x = "end";
      }
    }
    return {
      x,
      y
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    if (overlayY === "center") {
      if (this._dir && this._dir.value === "rtl") {
        newPosition = originX === "end" ? "left" : "right";
      } else {
        newPosition = originX === "start" ? "left" : "right";
      }
    } else {
      newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */
  _setupPointerEnterEventsIfNeeded() {
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    }
    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(["mouseenter", (event) => {
        this._setupPointerExitEventsIfNeeded();
        let point = void 0;
        if (event.x !== void 0 && event.y !== void 0) {
          point = event;
        }
        this.show(void 0, point);
      }]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      this._passiveListeners.push(["touchstart", (event) => {
        const touch = event.targetTouches?.[0];
        const origin = touch ? {
          x: touch.clientX,
          y: touch.clientY
        } : void 0;
        this._setupPointerExitEventsIfNeeded();
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        const DEFAULT_LONGPRESS_DELAY = 500;
        this._touchstartTimeout = setTimeout(() => {
          this._touchstartTimeout = null;
          this.show(void 0, origin);
        }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
      }]);
    }
    this._addListeners(this._passiveListeners);
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    const exitListeners = [];
    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(["mouseleave", (event) => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      }], ["wheel", (event) => this._wheelListener(event)]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = () => {
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        this.hide(this._defaultOptions?.touchendHideDelay);
      };
      exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
    }
    this._addListeners(exitListeners);
    this._passiveListeners.push(...exitListeners);
  }
  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }
  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */
  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
      const element = this._elementRef.nativeElement;
      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== "off") {
      const element = this._elementRef.nativeElement;
      const style = element.style;
      if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
        style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
      }
      if (gestures === "on" || !element.draggable) {
        style.webkitUserDrag = "none";
      }
      style.touchAction = "none";
      style.webkitTapHighlightColor = "transparent";
    }
  }
  /** Updates the tooltip's ARIA description based on it current state. */
  _syncAriaDescription(oldMessage) {
    if (this._ariaDescriptionPending) {
      return;
    }
    this._ariaDescriptionPending = true;
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
    if (!this._isDestroyed) {
      afterNextRender({
        write: () => {
          this._ariaDescriptionPending = false;
          if (this.message && !this.disabled) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
          }
        }
      }, {
        injector: this._injector
      });
    }
  }
  static \u0275fac = function MatTooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltip)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTooltip,
    selectors: [["", "matTooltip", ""]],
    hostAttrs: [1, "mat-mdc-tooltip-trigger"],
    hostVars: 2,
    hostBindings: function MatTooltip_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tooltip-disabled", ctx.disabled);
      }
    },
    inputs: {
      position: [0, "matTooltipPosition", "position"],
      positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
      disabled: [0, "matTooltipDisabled", "disabled"],
      showDelay: [0, "matTooltipShowDelay", "showDelay"],
      hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
      touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
      message: [0, "matTooltip", "message"],
      tooltipClass: [0, "matTooltipClass", "tooltipClass"]
    },
    exportAs: ["matTooltip"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltip, [{
    type: Directive,
    args: [{
      selector: "[matTooltip]",
      exportAs: "matTooltip",
      host: {
        "class": "mat-mdc-tooltip-trigger",
        "[class.mat-mdc-tooltip-disabled]": "disabled"
      }
    }]
  }], () => [], {
    position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }],
    positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }],
    disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }],
    showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }],
    touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }],
    message: [{
      type: Input,
      args: ["matTooltip"]
    }],
    tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }]
  });
})();
var TooltipComponent = class _TooltipComponent {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  /* Whether the tooltip text overflows to multiple lines */
  _isMultiline = false;
  /** Message to display in the tooltip */
  message;
  /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
  tooltipClass;
  /** The timeout ID of any current timer set to show the tooltip */
  _showTimeoutId;
  /** The timeout ID of any current timer set to hide the tooltip */
  _hideTimeoutId;
  /** Element that caused the tooltip to open. */
  _triggerElement;
  /** Amount of milliseconds to delay the closing sequence. */
  _mouseLeaveHideDelay;
  /** Whether animations are currently disabled. */
  _animationsDisabled = _animationsDisabled();
  /** Reference to the internal tooltip element. */
  _tooltip;
  /** Whether interactions on the page should close the tooltip */
  _closeOnInteraction = false;
  /** Whether the tooltip is currently visible. */
  _isVisible = false;
  /** Subject for notifying that the tooltip has been hidden from the view */
  _onHide = new Subject();
  /** Name of the show animation and the class that toggles it. */
  _showAnimation = "mat-mdc-tooltip-show";
  /** Name of the hide animation and the class that toggles it. */
  _hideAnimation = "mat-mdc-tooltip-hide";
  constructor() {
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */
  show(delay) {
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = void 0;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */
  hide(delay) {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = void 0;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */
  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    this._cancelPendingAnimations();
    this._onHide.complete();
    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      if (this.isVisible()) {
        this.hide(this._mouseLeaveHideDelay);
      } else {
        this._finalizeAnimation(false);
      }
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */
  _onShow() {
    this._isMultiline = this._isTooltipMultiline();
    this._markForCheck();
  }
  /** Whether the tooltip text has overflown to the next line */
  _isTooltipMultiline() {
    const rect = this._elementRef.nativeElement.getBoundingClientRect();
    return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
  }
  /** Event listener dispatched when an animation on the tooltip finishes. */
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Cancels any pending animation sequences. */
  _cancelPendingAnimations() {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = this._hideTimeoutId = void 0;
  }
  /** Handles the cleanup after an animation has finished. */
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */
  _toggleVisibility(isVisible) {
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    if (this._isVisible !== isVisible) {
      this._isVisible = isVisible;
      this._changeDetectorRef.markForCheck();
    }
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
      const styles = getComputedStyle(tooltip);
      if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add("_mat-animation-noopable");
      this._finalizeAnimation(isVisible);
    }
  }
  static \u0275fac = function TooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TooltipComponent,
    selectors: [["mat-tooltip-component"]],
    viewQuery: function TooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
      }
    },
    hostAttrs: ["aria-hidden", "true"],
    hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
          return ctx._handleMouseLeave($event);
        });
      }
    },
    decls: 4,
    vars: 4,
    consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
    template: function TooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleAnimationEnd($event));
        });
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mdc-tooltip--multiline", ctx._isMultiline);
        \u0275\u0275property("ngClass", ctx.tooltipClass);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.message);
      }
    },
    dependencies: [NgClass],
    styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "mat-tooltip-component",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      },
      imports: [NgClass],
      template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n',
      styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n']
    }]
  }], () => [], {
    _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();
var MatTooltipModule = class _MatTooltipModule {
  static \u0275fac = function MatTooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTooltipModule,
    imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
    exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// src/app/components/sueroterapia/sueroterapia.ts
function SueroterapiaComponent_div_76_mat_card_9_mat_list_item_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item")(1, "mat-icon", 42);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4);
  }
}
function SueroterapiaComponent_div_76_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 38)(1, "div", 39)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-header")(5, "mat-card-title");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-card-content")(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-list");
    \u0275\u0275template(11, SueroterapiaComponent_div_76_mat_card_9_mat_list_item_11_Template, 5, 1, "mat-list-item", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-card-actions")(13, "button", 41);
    \u0275\u0275text(14, "SOLICITAR CITA");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r5.color)("matTooltip", "Protocolo: " + p_r5.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.titulo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.desc);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", p_r5.items);
  }
}
function SueroterapiaComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "h3", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "button", 34);
    \u0275\u0275listener("click", function SueroterapiaComponent_div_76_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const caru_r2 = \u0275\u0275reference(8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll(caru_r2, "left"));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35, 0);
    \u0275\u0275template(9, SueroterapiaComponent_div_76_mat_card_9_Template, 15, 6, "mat-card", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 37);
    \u0275\u0275listener("click", function SueroterapiaComponent_div_76_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const caru_r2 = \u0275\u0275reference(8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll(caru_r2, "right"));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r6.nombre);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", cat_r6.protocolos);
  }
}
function SueroterapiaComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-icon");
    \u0275\u0275text(2, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pat_r7 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pat_r7.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pat_r7.desc);
  }
}
var _SueroterapiaComponent = class _SueroterapiaComponent {
  constructor() {
    this.categorias = [];
    this.patologias = [];
  }
  ngOnInit() {
    this.cargarDatos();
  }
  // Función para mover el carrusel con los botones en PC
  scroll(container, direction) {
    const scrollAmount = 344;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
  cargarDatos() {
    this.patologias = [
      { titulo: "Obesidad", desc: "Metabolismo celular y graso." },
      { titulo: "Diabetes", desc: "Control de az\xFAcar e insulina." },
      { titulo: "Ansiedad", desc: "Bienestar del sistema nervioso." },
      { titulo: "Articular", desc: "Inflamaci\xF3n y fibromialgia." }
    ];
    this.categorias = [
      {
        nombre: "Bienestar & Balance General",
        protocolos: [
          { titulo: "Detoxificaci\xF3n", desc: "Elimina toxinas y metales pesados para un h\xEDgado fuerte.", color: "teal", icon: "clean_hands", items: ["Glutati\xF3n", "Vitamina C", "Limpieza celular"] },
          { titulo: "Energizante", desc: "Combate el cansancio y estr\xE9s cr\xF3nico aportando vitalidad.", color: "orange", icon: "bolt", items: ["Complejo B", "Minerales", "Concentraci\xF3n"] },
          { titulo: "Inmunol\xF3gica", desc: "Refuerza las defensas para prevenir infecciones.", color: "blue", icon: "shield", items: ["Zinc y Selenio", "Vitamina C alta", "Resistencia"] },
          { titulo: "Ansiedad y Distr\xE9s", desc: "Mejora el sistema nervioso y el bienestar emocional.", color: "indigo", icon: "psychology", items: ["Magnesio", "Grupo B", "Equilibrio"] },
          { titulo: "Aparato Digestivo", desc: "Equilibra el sistema digestivo y mejora la absorci\xF3n.", color: "teal", icon: "restaurant_menu", items: ["Funci\xF3n hep\xE1tica", "Microbiota", "Digesti\xF3n"] }
        ]
      },
      {
        nombre: "Salud Metab\xF3lica & Cr\xF3nica",
        protocolos: [
          { titulo: "Obesidad y Peso", desc: "Aumenta el metabolismo celular y graso.", color: "green", icon: "monitor_weight", items: ["Control apetito", "Metabolismo activo", "Circulaci\xF3n"] },
          { titulo: "Diabetes Mellitus", desc: "Nutrientes que ayudan a controlar el az\xFAcar en sangre.", color: "green", icon: "opacity", items: ["Control gluc\xE9mico", "Saciedad", "Mejora insulina"] },
          { titulo: "Hipertensi\xF3n", desc: "Protege las paredes de los vasos y el coraz\xF3n.", color: "red", icon: "favorite", items: ["Protecci\xF3n card\xEDaca", "Reparaci\xF3n vascular", "Glutati\xF3n"] },
          { titulo: "Quelaci\xF3n", desc: "Desintoxica el sistema circulatorio de metales pesados.", color: "lime", icon: "loop", items: ["Limpieza arterial", "Triglic\xE9ridos", "Prevenci\xF3n"] },
          { titulo: "Gl\xE1ndula Tiroidea", desc: "Apoyo nutricional para equilibrio hormonal.", color: "pink", icon: "female", items: ["Control hormonal", "Vitalidad", "Minerales"] }
        ]
      },
      {
        nombre: "Est\xE9tica & Recuperaci\xF3n",
        protocolos: [
          { titulo: "Antiedad", desc: "Retrasa el envejecimiento y promueve col\xE1geno.", color: "pink", icon: "auto_fix_high", items: ["Antioxidantes", "Amino\xE1cidos", "Elasticidad"] },
          { titulo: "Belleza", desc: "Potencia el brillo de piel, u\xF1as y cabello.", color: "purple", icon: "face", items: ["Biotina", "Col\xE1geno", "Hidrataci\xF3n"] },
          { titulo: "Post-Entrenamiento", desc: "Recuperaci\xF3n muscular r\xE1pida para deportistas.", color: "red", icon: "fitness_center", items: ["Amino\xE1cidos", "Electrolitos", "Menos dolor"] },
          { titulo: "Piel (Acn\xE9)", desc: "Desintoxica para mejorar la textura cut\xE1nea.", color: "orange", icon: "health_and_safety", items: ["Control sebo", "Cicatrizaci\xF3n", "Desinflamaci\xF3n"] },
          { titulo: "Pre/Postquir\xFArgico", desc: "Acelera la cicatrizaci\xF3n y respuesta corporal.", color: "blue-grey", icon: "medical_services", items: ["Recuperaci\xF3n r\xE1pida", "Menos infecci\xF3n", "Cicatrizaci\xF3n"] }
        ]
      },
      {
        nombre: "Cuidado Especializado",
        protocolos: [
          { titulo: "Enf. Osteoarticular", desc: "Reduce el dolor en fibromialgia y fatiga.", color: "blue", icon: "accessibility_new", items: ["Control dolor", "Modulaci\xF3n inmune", "Antiinflamatorio"] },
          { titulo: "Plasma Rico en Plaquetas", desc: "Medicina regenerativa para reparar tejidos.", color: "red", icon: "bloodtype", items: ["Regeneraci\xF3n", "Factores crecimiento", "Tejidos"] },
          { titulo: "Neoplasias", desc: "Altas dosis de Vitamina C para proteger tejidos.", color: "teal", icon: "biotech", items: ["Protecci\xF3n celular", "Apoyo en c\xE1ncer", "Inmunidad"] },
          { titulo: "Parkinson/Alzheimer", desc: "Mejora la funci\xF3n cerebral y s\xEDntomas neurol\xF3gicos.", color: "purple", icon: "psychology", items: ["Vitaminas B", "Cognici\xF3n", "Antioxidantes"] },
          { titulo: "Pr\xF3stata/Renal", desc: "Ayuda en la relajaci\xF3n y expulsi\xF3n de c\xE1lculos.", color: "teal", icon: "medication_liquid", items: ["Desinflamaci\xF3n", "Alivio renal", "Hidrataci\xF3n"] },
          { titulo: "Respiratoria", desc: "Desinflama la v\xEDa a\xE9rea en asma y alergias.", color: "blue", icon: "air", items: ["Apoyo pulmonar", "Nutrientes", "Inmunidad"] }
        ]
      }
    ];
  }
};
_SueroterapiaComponent.\u0275fac = function SueroterapiaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SueroterapiaComponent)();
};
_SueroterapiaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SueroterapiaComponent, selectors: [["app-sueroterapia"]], decls: 84, vars: 2, consts: [["caru", ""], [1, "health-page"], [1, "hero-header"], [1, "main-container"], [1, "hero-content"], [1, "eyebrow"], [1, "highlight"], [1, "stats-row"], ["matTooltip", "IPS legalmente constituida", 1, "stat-box"], [1, "icon-wrapper"], [1, "text-wrapper"], [1, "stat-number"], [1, "stat-label"], ["matTooltip", "Atenci\xF3n en toda la ciudad", 1, "stat-box"], ["matTooltip", "Atenci\xF3n todos los d\xEDas", 1, "stat-box"], [1, "video-section"], [1, "video-grid"], [1, "video-info"], [1, "badge"], [1, "primary-text"], [1, "feature-list"], [1, "video-card"], [1, "video-aspect"], ["src", "assets/sueroterapia.mp4", "preload", "metadata", "playsinline", "", "controls", "", "poster", "assets/img/preview-video.jpg", 1, "local-video"], [1, "services-carousel-section"], [1, "section-header"], ["class", "category-block", 4, "ngFor", "ngForOf"], [1, "path-section"], [1, "path-header"], [1, "path-grid"], ["class", "path-card", 4, "ngFor", "ngForOf"], [1, "category-block"], [1, "cat-title"], [1, "carousel-wrapper"], ["mat-mini-fab", "", 1, "nav-btn", "prev", 3, "click"], [1, "carousel-container"], ["class", "service-card", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", 1, "nav-btn", "next", 3, "click"], [1, "service-card"], [1, "card-icon", 3, "ngClass", "matTooltip"], [4, "ngFor", "ngForOf"], ["mat-flat-button", "", "routerLink", "/pqrs", 1, "btn-cta"], ["matListItemIcon", "", 1, "check"], ["matListItemTitle", ""], [1, "path-card"]], template: function SueroterapiaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "span", 5);
    \u0275\u0275text(5, "CUIDANDO DE TI C&E IPS S.A.S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1");
    \u0275\u0275text(7, "Sueroterapia ");
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "Ortomolecular");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Tratamientos intravenosos directamente en tu hogar con rigor cient\xEDfico y seguridad cl\xEDnica.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "mat-icon");
    \u0275\u0275text(16, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "span", 11);
    \u0275\u0275text(19, "IPS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 12);
    \u0275\u0275text(21, "Habilitada");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 13)(23, "div", 9)(24, "mat-icon");
    \u0275\u0275text(25, "location_on");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 10)(27, "span", 11);
    \u0275\u0275text(28, "Cali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 12);
    \u0275\u0275text(30, "Sede Principal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 14)(32, "div", 9)(33, "mat-icon");
    \u0275\u0275text(34, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 10)(36, "span", 11);
    \u0275\u0275text(37, "24/7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 12);
    \u0275\u0275text(39, "Disponibilidad");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(40, "section", 15)(41, "div", 3)(42, "div", 16)(43, "div", 17)(44, "span", 18);
    \u0275\u0275text(45, "Nuestra Experiencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h2");
    \u0275\u0275text(47, "C\xF3mo funciona la ");
    \u0275\u0275elementStart(48, "span", 19);
    \u0275\u0275text(49, "Sueroterapia Domiciliaria");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51, "Llevamos la cl\xEDnica a tu hogar. Nuestro proceso garantiza la m\xE1xima absorci\xF3n de nutrientes bajo estricta supervisi\xF3n profesional.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ul", 20)(53, "li")(54, "mat-icon");
    \u0275\u0275text(55, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Evaluaci\xF3n m\xE9dica previa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "li")(58, "mat-icon");
    \u0275\u0275text(59, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Protocolos personalizados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "li")(62, "mat-icon");
    \u0275\u0275text(63, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Insumos certificados");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 21)(66, "div", 22)(67, "video", 23);
    \u0275\u0275text(68, " Tu navegador no soporta videos. ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(69, "section", 24)(70, "div", 3)(71, "div", 25)(72, "h2");
    \u0275\u0275text(73, "Portafolio de Especialidades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p");
    \u0275\u0275text(75, "Desliza o usa las flechas para explorar nuestros protocolos");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(76, SueroterapiaComponent_div_76_Template, 13, 2, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "section", 27)(78, "div", 3)(79, "div", 28)(80, "h2");
    \u0275\u0275text(81, "Apoyo en Patolog\xEDas Cr\xF3nicas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 29);
    \u0275\u0275template(83, SueroterapiaComponent_div_83_Template, 8, 2, "div", 30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(76);
    \u0275\u0275property("ngForOf", ctx.categorias);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.patologias);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatButtonModule, MatButton, MatMiniFabButton, MatIconModule, MatIcon, MatListModule, MatList, MatListItem, MatListItemIcon, MatListItemTitle, MatTooltipModule, MatTooltip, RouterModule, RouterLink], styles: ['\n\n.health-page[_ngcontent-%COMP%] {\n  font-family: "Roboto", sans-serif;\n  color: #1a1c1e;\n  overflow-x: hidden;\n}\n.health-page[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #005cbb 0%,\n      #0a468b 100%);\n  color: white;\n  padding: 80px 0;\n  text-align: center;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 6px 16px;\n  border-radius: 30px;\n  margin-bottom: 20px;\n  display: inline-block;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 6vw, 4rem);\n  font-weight: 800;\n  margin-bottom: 20px;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #8ab4f8;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  max-width: 650px;\n  margin: 0 auto 40px;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 20px;\n  border-radius: 16px;\n  min-width: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #8ab4f8;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  display: block;\n}\n.health-page[_ngcontent-%COMP%]   .hero-header[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  opacity: 0.8;\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   .video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n@media (max-width: 960px) {\n  .health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   .video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 800;\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .primary-text[_ngcontent-%COMP%] {\n  color: #005cbb;\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n@media (max-width: 960px) {\n  .health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   .video-aspect[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  background: #000;\n}\n.health-page[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   .video-aspect[_ngcontent-%COMP%]   .local-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: #f8f9ff;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 2.2rem;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .category-block[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .cat-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 25px;\n  border-left: 6px solid #005cbb;\n  padding-left: 15px;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  background: white !important;\n  color: #005cbb !important;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%]   .nav-btn.prev[_ngcontent-%COMP%] {\n  left: -15px;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%]   .nav-btn.next[_ngcontent-%COMP%] {\n  right: -15px;\n}\n@media (max-width: 768px) {\n  .health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  padding: 15px 5px;\n  scrollbar-width: none;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%] {\n  min-width: 320px;\n  max-width: 320px;\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  border-radius: 24px;\n  border: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05) !important;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 24px 0 8px 24px;\n  overflow: hidden;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.teal[_ngcontent-%COMP%] {\n  background: #e0f2f1;\n  color: #00796b;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.orange[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #f57c00;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.blue[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.pink[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c2185b;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.purple[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.green[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.red[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.indigo[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  color: #3f51b5;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.amber[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #ff8f00;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.lime[_ngcontent-%COMP%] {\n  background: #f9fbe7;\n  color: #827717;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .card-icon.blue-grey[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #455a64;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #44474e;\n  min-height: 50px;\n  line-height: 1.5;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-size: 18px;\n  margin-right: 8px;\n  font-weight: bold;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  height: auto !important;\n  padding: 4px 0;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n}\n.health-page[_ngcontent-%COMP%]   .services-carousel-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .btn-cta[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50px;\n  background: #005cbb !important;\n  color: white !important;\n  font-weight: 700;\n  height: 48px;\n}\n.health-page[_ngcontent-%COMP%]   .path-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.health-page[_ngcontent-%COMP%]   .path-section[_ngcontent-%COMP%]   .path-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.health-page[_ngcontent-%COMP%]   .path-section[_ngcontent-%COMP%]   .path-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n.health-page[_ngcontent-%COMP%]   .path-section[_ngcontent-%COMP%]   .path-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 24px;\n  background: #f8f9ff;\n  border-radius: 16px;\n}\n.health-page[_ngcontent-%COMP%]   .path-section[_ngcontent-%COMP%]   .path-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #005cbb;\n}\n.health-page[_ngcontent-%COMP%]   .path-section[_ngcontent-%COMP%]   .path-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n}\n.health-page[_ngcontent-%COMP%]   .path-section[_ngcontent-%COMP%]   .path-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #44474e;\n}\n/*# sourceMappingURL=sueroterapia.css.map */'] });
var SueroterapiaComponent = _SueroterapiaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SueroterapiaComponent, [{
    type: Component,
    args: [{ selector: "app-sueroterapia", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatTooltipModule,
      RouterModule
    ], template: `<div class="health-page">\r
  <header class="hero-header">\r
    <div class="main-container">\r
      <div class="hero-content">\r
        <span class="eyebrow">CUIDANDO DE TI C&E IPS S.A.S</span>\r
        <h1>Sueroterapia <span class="highlight">Ortomolecular</span></h1>\r
        <p>Tratamientos intravenosos directamente en tu hogar con rigor cient\xEDfico y seguridad cl\xEDnica.</p>\r
        \r
        <div class="stats-row">\r
          <div class="stat-box" matTooltip="IPS legalmente constituida">\r
            <div class="icon-wrapper"><mat-icon>verified</mat-icon></div>\r
            <div class="text-wrapper">\r
              <span class="stat-number">IPS</span>\r
              <span class="stat-label">Habilitada</span>\r
            </div>\r
          </div>\r
          <div class="stat-box" matTooltip="Atenci\xF3n en toda la ciudad">\r
            <div class="icon-wrapper"><mat-icon>location_on</mat-icon></div>\r
            <div class="text-wrapper">\r
              <span class="stat-number">Cali</span>\r
              <span class="stat-label">Sede Principal</span>\r
            </div>\r
          </div>\r
          <div class="stat-box" matTooltip="Atenci\xF3n todos los d\xEDas">\r
            <div class="icon-wrapper"><mat-icon>schedule</mat-icon></div>\r
            <div class="text-wrapper">\r
              <span class="stat-number">24/7</span>\r
              <span class="stat-label">Disponibilidad</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </header>\r
\r
  <section class="video-section">\r
    <div class="main-container">\r
      <div class="video-grid">\r
        <div class="video-info">\r
          <span class="badge">Nuestra Experiencia</span>\r
          <h2>C\xF3mo funciona la <span class="primary-text">Sueroterapia Domiciliaria</span></h2>\r
          <p>Llevamos la cl\xEDnica a tu hogar. Nuestro proceso garantiza la m\xE1xima absorci\xF3n de nutrientes bajo estricta supervisi\xF3n profesional.</p>\r
          <ul class="feature-list">\r
            <li><mat-icon>check_circle</mat-icon> Evaluaci\xF3n m\xE9dica previa</li>\r
            <li><mat-icon>check_circle</mat-icon> Protocolos personalizados</li>\r
            <li><mat-icon>check_circle</mat-icon> Insumos certificados</li>\r
          </ul>\r
        </div>\r
        <div class="video-card">\r
          <div class="video-aspect">\r
            <video \r
              class="local-video" \r
              src="assets/sueroterapia.mp4" \r
              preload="metadata"\r
              playsinline \r
              controls\r
              poster="assets/img/preview-video.jpg"> Tu navegador no soporta videos.\r
            </video>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="services-carousel-section">\r
    <div class="main-container">\r
      <div class="section-header">\r
        <h2>Portafolio de Especialidades</h2>\r
        <p>Desliza o usa las flechas para explorar nuestros protocolos</p>\r
      </div>\r
\r
      <div class="category-block" *ngFor="let cat of categorias">\r
        <h3 class="cat-title">{{cat.nombre}}</h3>\r
        \r
        <div class="carousel-wrapper">\r
          <button mat-mini-fab class="nav-btn prev" (click)="scroll(caru, 'left')">\r
            <mat-icon>chevron_left</mat-icon>\r
          </button>\r
\r
          <div class="carousel-container" #caru>\r
            <mat-card class="service-card" *ngFor="let p of cat.protocolos">\r
              <div class="card-icon" [ngClass]="p.color" [matTooltip]="'Protocolo: ' + p.titulo">\r
                <mat-icon>{{p.icon}}</mat-icon>\r
              </div>\r
              \r
              <mat-card-header>\r
                <mat-card-title>{{p.titulo}}</mat-card-title>\r
              </mat-card-header>\r
\r
              <mat-card-content>\r
                <p>{{p.desc}}</p>\r
                <mat-list>\r
                  <mat-list-item *ngFor="let item of p.items">\r
                    <mat-icon matListItemIcon class="check">done</mat-icon>\r
                    <span matListItemTitle>{{item}}</span>\r
                  </mat-list-item>\r
                </mat-list>\r
              </mat-card-content>\r
\r
              <mat-card-actions>\r
                <button mat-flat-button class="btn-cta" routerLink="/pqrs">SOLICITAR CITA</button>\r
              </mat-card-actions>\r
            </mat-card>\r
          </div>\r
\r
          <button mat-mini-fab class="nav-btn next" (click)="scroll(caru, 'right')">\r
            <mat-icon>chevron_right</mat-icon>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="path-section">\r
    <div class="main-container">\r
      <div class="path-header"><h2>Apoyo en Patolog\xEDas Cr\xF3nicas</h2></div>\r
      <div class="path-grid">\r
        <div class="path-card" *ngFor="let pat of patologias">\r
          <mat-icon>medical_services</mat-icon>\r
          <div>\r
            <h4>{{pat.titulo}}</h4>\r
            <p>{{pat.desc}}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>`, styles: ['/* src/app/components/sueroterapia/sueroterapia.scss */\n.health-page {\n  font-family: "Roboto", sans-serif;\n  color: #1a1c1e;\n  overflow-x: hidden;\n}\n.health-page .main-container {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.health-page .hero-header {\n  background:\n    linear-gradient(\n      135deg,\n      #005cbb 0%,\n      #0a468b 100%);\n  color: white;\n  padding: 80px 0;\n  text-align: center;\n}\n.health-page .hero-header .eyebrow {\n  font-size: 0.8rem;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 6px 16px;\n  border-radius: 30px;\n  margin-bottom: 20px;\n  display: inline-block;\n}\n.health-page .hero-header h1 {\n  font-size: clamp(2.5rem, 6vw, 4rem);\n  font-weight: 800;\n  margin-bottom: 20px;\n}\n.health-page .hero-header h1 .highlight {\n  color: #8ab4f8;\n}\n.health-page .hero-header p {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  max-width: 650px;\n  margin: 0 auto 40px;\n}\n.health-page .hero-header .stats-row {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.health-page .hero-header .stats-row .stat-box {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 20px;\n  border-radius: 16px;\n  min-width: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.health-page .hero-header .stats-row .stat-box .icon-wrapper mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #8ab4f8;\n}\n.health-page .hero-header .stats-row .stat-box .stat-number {\n  font-size: 1.8rem;\n  font-weight: 800;\n  display: block;\n}\n.health-page .hero-header .stats-row .stat-box .stat-label {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  opacity: 0.8;\n}\n.health-page .video-section {\n  padding: 100px 0;\n}\n.health-page .video-section .video-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n@media (max-width: 960px) {\n  .health-page .video-section .video-grid {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.health-page .video-section h2 {\n  font-size: 2.4rem;\n  font-weight: 800;\n}\n.health-page .video-section h2 .primary-text {\n  color: #005cbb;\n}\n.health-page .video-section .feature-list {\n  list-style: none;\n  padding: 0;\n}\n.health-page .video-section .feature-list li {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n@media (max-width: 960px) {\n  .health-page .video-section .feature-list li {\n    justify-content: center;\n  }\n}\n.health-page .video-section .feature-list li mat-icon {\n  color: #4caf50;\n}\n.health-page .video-section .video-card .video-aspect {\n  aspect-ratio: 16/9;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  background: #000;\n}\n.health-page .video-section .video-card .video-aspect .local-video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.health-page .services-carousel-section {\n  padding: 80px 0;\n  background: #f8f9ff;\n}\n.health-page .services-carousel-section .section-header {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.health-page .services-carousel-section .section-header h2 {\n  font-weight: 800;\n  font-size: 2.2rem;\n}\n.health-page .services-carousel-section .category-block {\n  margin-bottom: 60px;\n}\n.health-page .services-carousel-section .cat-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 25px;\n  border-left: 6px solid #005cbb;\n  padding-left: 15px;\n}\n.health-page .services-carousel-section .carousel-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.health-page .services-carousel-section .carousel-wrapper .nav-btn {\n  position: absolute;\n  z-index: 10;\n  background: white !important;\n  color: #005cbb !important;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;\n}\n.health-page .services-carousel-section .carousel-wrapper .nav-btn.prev {\n  left: -15px;\n}\n.health-page .services-carousel-section .carousel-wrapper .nav-btn.next {\n  right: -15px;\n}\n@media (max-width: 768px) {\n  .health-page .services-carousel-section .carousel-wrapper .nav-btn {\n    display: none;\n  }\n}\n.health-page .services-carousel-section .carousel-container {\n  display: flex;\n  gap: 24px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  padding: 15px 5px;\n  scrollbar-width: none;\n}\n.health-page .services-carousel-section .carousel-container::-webkit-scrollbar {\n  display: none;\n}\n.health-page .services-carousel-section .service-card {\n  min-width: 320px;\n  max-width: 320px;\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  border-radius: 24px;\n  border: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05) !important;\n}\n.health-page .services-carousel-section .service-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;\n}\n.health-page .services-carousel-section .service-card .card-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 24px 0 8px 24px;\n  overflow: hidden;\n}\n.health-page .services-carousel-section .service-card .card-icon mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.health-page .services-carousel-section .service-card .card-icon.teal {\n  background: #e0f2f1;\n  color: #00796b;\n}\n.health-page .services-carousel-section .service-card .card-icon.orange {\n  background: #fff3e0;\n  color: #f57c00;\n}\n.health-page .services-carousel-section .service-card .card-icon.blue {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.health-page .services-carousel-section .service-card .card-icon.pink {\n  background: #fce4ec;\n  color: #c2185b;\n}\n.health-page .services-carousel-section .service-card .card-icon.purple {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.health-page .services-carousel-section .service-card .card-icon.green {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.health-page .services-carousel-section .service-card .card-icon.red {\n  background: #ffebee;\n  color: #c62828;\n}\n.health-page .services-carousel-section .service-card .card-icon.indigo {\n  background: #e8eaf6;\n  color: #3f51b5;\n}\n.health-page .services-carousel-section .service-card .card-icon.amber {\n  background: #fff8e1;\n  color: #ff8f00;\n}\n.health-page .services-carousel-section .service-card .card-icon.lime {\n  background: #f9fbe7;\n  color: #827717;\n}\n.health-page .services-carousel-section .service-card .card-icon.blue-grey {\n  background: #eceff1;\n  color: #455a64;\n}\n.health-page .services-carousel-section .service-card mat-card-header {\n  padding: 8px 24px;\n}\n.health-page .services-carousel-section .service-card mat-card-header mat-card-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.health-page .services-carousel-section .service-card mat-card-content {\n  padding: 12px 24px;\n}\n.health-page .services-carousel-section .service-card mat-card-content p {\n  font-size: 0.95rem;\n  color: #44474e;\n  min-height: 50px;\n  line-height: 1.5;\n}\n.health-page .services-carousel-section .service-card mat-card-content .check {\n  color: #4caf50;\n  font-size: 18px;\n  margin-right: 8px;\n  font-weight: bold;\n}\n.health-page .services-carousel-section .service-card mat-card-content mat-list-item {\n  font-size: 0.85rem;\n  height: auto !important;\n  padding: 4px 0;\n}\n.health-page .services-carousel-section .service-card mat-card-actions {\n  padding: 0 24px 24px;\n}\n.health-page .services-carousel-section .service-card mat-card-actions .btn-cta {\n  width: 100%;\n  border-radius: 50px;\n  background: #005cbb !important;\n  color: white !important;\n  font-weight: 700;\n  height: 48px;\n}\n.health-page .path-section {\n  padding: 80px 0;\n}\n.health-page .path-section .path-header {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.health-page .path-section .path-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n.health-page .path-section .path-card {\n  display: flex;\n  gap: 16px;\n  padding: 24px;\n  background: #f8f9ff;\n  border-radius: 16px;\n}\n.health-page .path-section .path-card mat-icon {\n  color: #005cbb;\n}\n.health-page .path-section .path-card h4 {\n  margin: 0;\n  font-weight: 700;\n}\n.health-page .path-section .path-card p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #44474e;\n}\n/*# sourceMappingURL=sueroterapia.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SueroterapiaComponent, { className: "SueroterapiaComponent", filePath: "src/app/components/sueroterapia/sueroterapia.ts", lineNumber: 25 });
})();

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.currentUser())
    return true;
  if (!auth.getToken())
    return router.createUrlTree(["/admin/login"]);
  return auth.fetchMe().pipe(map((user) => {
    const staffRoles = ["admin", "doctor", "enfermero", "recepcionista", "auditor"];
    if (staffRoles.includes(user.role))
      return true;
    return router.createUrlTree(["/admin/login"]);
  }), catchError(() => of(router.createUrlTree(["/admin/login"]))));
};

// src/app/guards/portal.guard.ts
var portalGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const user = auth.currentUser();
  if (user) {
    return user.role === "paciente" ? true : router.createUrlTree(["/admin/login"]);
  }
  if (!auth.getToken())
    return router.createUrlTree(["/admin/login"]);
  return auth.fetchMe().pipe(map((u) => u.role === "paciente" ? true : router.createUrlTree(["/admin/login"])), catchError(() => of(router.createUrlTree(["/admin/login"]))));
};

// src/app/app.routes.ts
var routes = [
  // ── Sitio público ──────────────────────────────────────────────────────
  { path: "", component: Hero, title: "Inicio | CUIDANDO DE TI CyE IPS SAS" },
  __spreadValues({ path: "services", loadComponent: () => import("./chunk-U2IAPDC5.js").then((m) => m.Services) }, false ? { \u0275entryName: "src/app/components/services/services.ts" } : {}),
  { path: "bussiness", component: Bussiness },
  { path: "question", component: Questions },
  { path: "pqrs", component: Pqrs },
  { path: "testimonials", component: Testimonials },
  { path: "sueroterapia", component: SueroterapiaComponent },
  // ── Registro y portal paciente ────────────────────────────────────────
  __spreadValues({ path: "registro", loadComponent: () => import("./chunk-NPQOGV6U.js").then((m) => m.RegistroComponent), title: "Registro de Paciente" }, false ? { \u0275entryName: "src/app/pages/registro/registro.ts" } : {}),
  __spreadValues({ path: "portal", loadComponent: () => import("./chunk-2LFBNRD2.js").then((m) => m.PortalComponent), canActivate: [portalGuard], title: "Mi portal | CUIDANDO DE TI" }, false ? { \u0275entryName: "src/app/pages/portal/portal.ts" } : {}),
  // ── Panel administrativo ───────────────────────────────────────────────
  {
    path: "admin",
    children: [
      __spreadValues({
        path: "login",
        loadComponent: () => import("./chunk-3JLFRLZB.js").then((m) => m.AdminLogin),
        title: "Login | Panel Administrativo"
      }, false ? { \u0275entryName: "src/app/admin/login/login.ts" } : {}),
      __spreadValues({
        path: "",
        loadComponent: () => import("./chunk-WICBHKIH.js").then((m) => m.AdminShell),
        canActivate: [authGuard],
        children: [
          { path: "dashboard", loadComponent: () => import("./chunk-AVQSC7XG.js").then((m) => m.AdminDashboard), title: "Dashboard" },
          { path: "patients", loadComponent: () => import("./chunk-CG333RUK.js").then((m) => m.PatientsComponent), title: "Pacientes" },
          { path: "appointments", loadComponent: () => import("./chunk-QVYQ6OCE.js").then((m) => m.AppointmentsComponent), title: "Citas" },
          { path: "availability", loadComponent: () => import("./chunk-AGUXFHEZ.js").then((m) => m.AvailabilityComponent), title: "Disponibilidad" },
          { path: "users", loadComponent: () => import("./chunk-HHUB6ILW.js").then((m) => m.UsersComponent), title: "Empleados" },
          { path: "rips", loadComponent: () => import("./chunk-X65C37OZ.js").then((m) => m.RipsComponent), title: "RIPS" },
          { path: "clinical", loadComponent: () => import("./chunk-REFHRYLV.js").then((m) => m.ClinicalComponent), title: "Historias Cl\xEDnicas" },
          { path: "audit", loadComponent: () => import("./chunk-NTZB6UAH.js").then((m) => m.AuditComponent), title: "Registro de Actividad" },
          { path: "", redirectTo: "dashboard", pathMatch: "full" }
        ]
      }, false ? { \u0275entryName: "src/app/admin/shell/admin-shell.ts" } : {})
    ]
  }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem("token");
    if (token) {
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
      return next(authReq);
    }
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor]))
  ]
};

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c03 = ["*", [["mat-toolbar-row"]]];
var _c12 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static \u0275fac = function MatToolbarRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      }
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the toolbar. This API is supported in M2 themes only, it has
   * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Reference to all toolbar row elements that have been projected. */
  _toolbarRows;
  constructor() {
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static \u0275fac = function MatToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatToolbarRow, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 6,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    ngContentSelectors: _c12,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
      }
    },
    styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static \u0275fac = function MatToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatToolbarModule,
    imports: [MatCommonModule, MatToolbar, MatToolbarRow],
    exports: [MatToolbar, MatToolbarRow, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
  static \u0275fac = function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __CdkTextFieldStyleLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-text-field-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _CdkTextFieldStyleLoader_Template(rf, ctx) {
    },
    styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkTextFieldStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-text-field-style-loader": ""
      },
      styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"]
    }]
  }], null, null);
})();
var listenerOptions = {
  passive: true
};
var AutofillMonitor = class _AutofillMonitor {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _monitoredElements = /* @__PURE__ */ new Map();
  constructor() {
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    this._styleLoader.load(_CdkTextFieldStyleLoader);
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const subject = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = (event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    };
    const unlisten = this._ngZone.runOutsideAngular(() => {
      element.classList.add("cdk-text-field-autofill-monitored");
      return this._renderer.listen(element, "animationstart", listener, listenerOptions);
    });
    this._monitoredElements.set(element, {
      subject,
      unlisten
    });
    return subject;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
  static \u0275fac = function AutofillMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutofillMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutofillMonitor,
    factory: _AutofillMonitor.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkAutofill = class _CdkAutofill {
  _elementRef = inject(ElementRef);
  _autofillMonitor = inject(AutofillMonitor);
  /** Emits when the autofill state of the element changes. */
  cdkAutofill = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
  static \u0275fac = function CdkAutofill_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAutofill)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAutofill,
    selectors: [["", "cdkAutofill", ""]],
    outputs: {
      cdkAutofill: "cdkAutofill"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]"
    }]
  }], () => [], {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var CdkTextareaAutosize = class _CdkTextareaAutosize {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _resizeEvents = new Subject();
  /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
  _previousValue;
  _initialHeight;
  _destroyed = new Subject();
  _listenerCleanups;
  _minRows;
  _maxRows;
  _enabled = true;
  /**
   * Value of minRows as of last resize. If the minRows has decreased, the
   * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
   * does not have the same problem because it does not affect the textarea's scrollHeight.
   */
  _previousMinRows = -1;
  _textareaElement;
  /** Minimum amount of rows in the textarea. */
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  /** Maximum amount of rows in the textarea. */
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  /** Whether autosizing is enabled or not */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  /** Cached height of a textarea with a single row. */
  _cachedLineHeight;
  /** Cached height of a textarea with only the placeholder. */
  _cachedPlaceholderHeight;
  /** Cached scroll top of a textarea */
  _cachedScrollTop;
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT);
  _hasFocus;
  _isViewInited = false;
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_CdkTextFieldStyleLoader);
    this._textareaElement = this._elementRef.nativeElement;
  }
  /** Sets the minimum height of the textarea as determined by minRows. */
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  /** Sets the maximum height of the textarea as determined by maxRows. */
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
        this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
          this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
          this.resizeToFitContent(true);
        });
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
    this._resizeEvents.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Cache the height of a single-row textarea if it has not already been cached.
   *
   * We need to know how large a single "row" of a textarea is in order to apply minRows and
   * maxRows. For the initial version, we will assume that the height of a single line in the
   * textarea does not ever change.
   */
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    const textareaClone = this._textareaElement.cloneNode(false);
    const cloneStyles = textareaClone.style;
    textareaClone.rows = 1;
    cloneStyles.position = "absolute";
    cloneStyles.visibility = "hidden";
    cloneStyles.border = "none";
    cloneStyles.padding = "0";
    cloneStyles.height = "";
    cloneStyles.minHeight = "";
    cloneStyles.maxHeight = "";
    cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
    cloneStyles.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = isFirefox && this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  /** Handles `focus` and `blur` events. */
  _handleFocusEvent = (event) => {
    this._hasFocus = event.type === "focus";
  };
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  /**
   * Resize the textarea to fit its content.
   * @param force Whether to force a height recalculation. By default the height will be
   *    recalculated only if the value changed since the last call.
   */
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    this._cachedScrollTop = this._textareaElement.scrollTop;
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  /**
   * Resets the textarea to its original size
   */
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  /**
   * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
   * prevent it from scrolling to the caret position. We need to re-set the selection
   * in order for it to scroll to the proper position.
   */
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
      textarea.scrollTop = this._cachedScrollTop;
    }
  }
  static \u0275fac = function CdkTextareaAutosize_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextareaAutosize)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTextareaAutosize,
    selectors: [["textarea", "cdkTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
    hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function CdkTextareaAutosize_input_HostBindingHandler() {
          return ctx._noopInputHandler();
        });
      }
    },
    inputs: {
      minRows: [0, "cdkAutosizeMinRows", "minRows"],
      maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
      enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
      placeholder: "placeholder"
    },
    exportAs: ["cdkTextareaAutosize"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        "rows": "1",
        "(input)": "_noopInputHandler()"
      }
    }]
  }], () => [], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var TextFieldModule = class _TextFieldModule {
  static \u0275fac = function TextFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextFieldModule,
    imports: [CdkAutofill, CdkTextareaAutosize],
    exports: [CdkAutofill, CdkTextareaAutosize]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input-value-accessor-D1GvPuqO.mjs
var MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");

// node_modules/@angular/cdk/fesm2022/observers/private.mjs
var loopLimitExceededErrorHandler = (e) => {
  if (e instanceof ErrorEvent && e.message === "ResizeObserver loop limit exceeded") {
    console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
  }
};
var SingleBoxSharedResizeObserver = class {
  _box;
  /** Stream that emits when the shared observer is destroyed. */
  _destroyed = new Subject();
  /** Stream of all events from the ResizeObserver. */
  _resizeSubject = new Subject();
  /** ResizeObserver used to observe element resize events. */
  _resizeObserver;
  /** A map of elements to streams of their resize events. */
  _elementObservables = /* @__PURE__ */ new Map();
  constructor(_box) {
    this._box = _box;
    if (typeof ResizeObserver !== "undefined") {
      this._resizeObserver = new ResizeObserver((entries) => this._resizeSubject.next(entries));
    }
  }
  /**
   * Gets a stream of resize events for the given element.
   * @param target The element to observe.
   * @return The stream of resize events for the element.
   */
  observe(target) {
    if (!this._elementObservables.has(target)) {
      this._elementObservables.set(target, new Observable((observer) => {
        const subscription = this._resizeSubject.subscribe(observer);
        this._resizeObserver?.observe(target, {
          box: this._box
        });
        return () => {
          this._resizeObserver?.unobserve(target);
          subscription.unsubscribe();
          this._elementObservables.delete(target);
        };
      }).pipe(
        filter((entries) => entries.some((entry) => entry.target === target)),
        // Share a replay of the last event so that subsequent calls to observe the same element
        // receive initial sizing info like the first one. Also enable ref counting so the
        // element will be automatically unobserved when there are no more subscriptions.
        shareReplay({
          bufferSize: 1,
          refCount: true
        }),
        takeUntil(this._destroyed)
      ));
    }
    return this._elementObservables.get(target);
  }
  /** Destroys this instance. */
  destroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._resizeSubject.complete();
    this._elementObservables.clear();
  }
};
var SharedResizeObserver = class _SharedResizeObserver {
  _cleanupErrorListener;
  /** Map of box type to shared resize observer. */
  _observers = /* @__PURE__ */ new Map();
  /** The Angular zone. */
  _ngZone = inject(NgZone);
  constructor() {
    if (typeof ResizeObserver !== "undefined" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      this._ngZone.runOutsideAngular(() => {
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        this._cleanupErrorListener = renderer.listen("window", "error", loopLimitExceededErrorHandler);
      });
    }
  }
  ngOnDestroy() {
    for (const [, observer] of this._observers) {
      observer.destroy();
    }
    this._observers.clear();
    this._cleanupErrorListener?.();
  }
  /**
   * Gets a stream of resize events for the given target element and box type.
   * @param target The element to observe for resizes.
   * @param options Options to pass to the `ResizeObserver`
   * @return The stream of resize events for the element.
   */
  observe(target, options) {
    const box = options?.box || "content-box";
    if (!this._observers.has(box)) {
      this._observers.set(box, new SingleBoxSharedResizeObserver(box));
    }
    return this._observers.get(box).observe(target);
  }
  static \u0275fac = function SharedResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedResizeObserver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SharedResizeObserver,
    factory: _SharedResizeObserver.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/material/fesm2022/form-field-D9B5IUZf.mjs
var _c04 = ["notch"];
var _c13 = ["matFormFieldNotchedOutline", ""];
var _c2 = ["*"];
var _c3 = ["iconPrefixContainer"];
var _c4 = ["textPrefixContainer"];
var _c5 = ["iconSuffixContainer"];
var _c6 = ["textSuffixContainer"];
var _c7 = ["textField"];
var _c8 = ["*", [["mat-label"]], [["", "matPrefix", ""], ["", "matIconPrefix", ""]], [["", "matTextPrefix", ""]], [["", "matTextSuffix", ""]], [["", "matSuffix", ""], ["", "matIconSuffix", ""]], [["mat-error"], ["", "matError", ""]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
var _c9 = ["*", "mat-label", "[matPrefix], [matIconPrefix]", "[matTextPrefix]", "[matTextSuffix]", "[matSuffix], [matIconSuffix]", "mat-error, [matError]", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
function MatFormField_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
}
function MatFormField_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 19);
    \u0275\u0275projection(1, 1);
    \u0275\u0275conditionalCreate(2, MatFormField_ng_template_0_Conditional_0_Conditional_2_Template, 1, 0, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("floating", ctx_r1._shouldLabelFloat())("monitorResize", ctx_r1._hasOutline())("id", ctx_r1._labelId);
    \u0275\u0275attribute("for", ctx_r1._control.disableAutomaticLabeling ? null : ctx_r1._control.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hideRequiredMarker && ctx_r1._control.required ? 2 : -1);
  }
}
function MatFormField_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatFormField_ng_template_0_Conditional_0_Template, 3, 5, "label", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1._hasFloatingLabel() ? 0 : -1);
  }
}
function MatFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function MatFormField_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function MatFormField_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatFormField_Conditional_6_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const labelTemplate_r3 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", labelTemplate_r3);
  }
}
function MatFormField_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, MatFormField_Conditional_6_Conditional_1_Template, 1, 1, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matFormFieldNotchedOutlineOpen", ctx_r1._shouldLabelFloat());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1._forceDisplayInfixLabel() ? 1 : -1);
  }
}
function MatFormField_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 2);
    \u0275\u0275projection(2, 2);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11, 3);
    \u0275\u0275projection(2, 3);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_10_ng_template_0_Template(rf, ctx) {
}
function MatFormField_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatFormField_Conditional_10_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const labelTemplate_r3 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", labelTemplate_r3);
  }
}
function MatFormField_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14, 4);
    \u0275\u0275projection(2, 4);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15, 5);
    \u0275\u0275projection(2, 5);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function MatFormField_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 6);
  }
}
function MatFormField_Case_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r1._hintLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.hintLabel);
  }
}
function MatFormField_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatFormField_Case_18_Conditional_0_Template, 2, 2, "mat-hint", 21);
    \u0275\u0275projection(1, 7);
    \u0275\u0275element(2, "div", 22);
    \u0275\u0275projection(3, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hintLabel ? 0 : -1);
  }
}
var MatLabel = class _MatLabel {
  static \u0275fac = function MatLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatLabel,
    selectors: [["mat-label"]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLabel, [{
    type: Directive,
    args: [{
      selector: "mat-label"
    }]
  }], null, null);
})();
var MAT_ERROR = new InjectionToken("MatError");
var MatError = class _MatError {
  id = inject(_IdGenerator).getId("mat-mdc-error-");
  constructor() {
  }
  static \u0275fac = function MatError_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatError)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatError,
    selectors: [["mat-error"], ["", "matError", ""]],
    hostAttrs: [1, "mat-mdc-form-field-error", "mat-mdc-form-field-bottom-align"],
    hostVars: 1,
    hostBindings: function MatError_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ERROR,
      useExisting: _MatError
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatError, [{
    type: Directive,
    args: [{
      selector: "mat-error, [matError]",
      host: {
        "class": "mat-mdc-form-field-error mat-mdc-form-field-bottom-align",
        "[id]": "id"
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], () => [], {
    id: [{
      type: Input
    }]
  });
})();
var MatHint = class _MatHint {
  /** Whether to align the hint label at the start or end of the line. */
  align = "start";
  /** Unique ID for the hint. Used for the aria-describedby on the form field control. */
  id = inject(_IdGenerator).getId("mat-mdc-hint-");
  static \u0275fac = function MatHint_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatHint)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHint,
    selectors: [["mat-hint"]],
    hostAttrs: [1, "mat-mdc-form-field-hint", "mat-mdc-form-field-bottom-align"],
    hostVars: 4,
    hostBindings: function MatHint_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("align", null);
        \u0275\u0275classProp("mat-mdc-form-field-hint-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align",
      id: "id"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHint, [{
    type: Directive,
    args: [{
      selector: "mat-hint",
      host: {
        "class": "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align",
        "[class.mat-mdc-form-field-hint-end]": 'align === "end"',
        "[id]": "id",
        // Remove align attribute to prevent it from interfering with layout.
        "[attr.align]": "null"
      }
    }]
  }], null, {
    align: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var MAT_PREFIX = new InjectionToken("MatPrefix");
var MatPrefix = class _MatPrefix {
  set _isTextSelector(value) {
    this._isText = true;
  }
  _isText = false;
  static \u0275fac = function MatPrefix_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPrefix)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatPrefix,
    selectors: [["", "matPrefix", ""], ["", "matIconPrefix", ""], ["", "matTextPrefix", ""]],
    inputs: {
      _isTextSelector: [0, "matTextPrefix", "_isTextSelector"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_PREFIX,
      useExisting: _MatPrefix
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPrefix, [{
    type: Directive,
    args: [{
      selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }], null, {
    _isTextSelector: [{
      type: Input,
      args: ["matTextPrefix"]
    }]
  });
})();
var MAT_SUFFIX = new InjectionToken("MatSuffix");
var MatSuffix = class _MatSuffix {
  set _isTextSelector(value) {
    this._isText = true;
  }
  _isText = false;
  static \u0275fac = function MatSuffix_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSuffix)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSuffix,
    selectors: [["", "matSuffix", ""], ["", "matIconSuffix", ""], ["", "matTextSuffix", ""]],
    inputs: {
      _isTextSelector: [0, "matTextSuffix", "_isTextSelector"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SUFFIX,
      useExisting: _MatSuffix
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSuffix, [{
    type: Directive,
    args: [{
      selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }], null, {
    _isTextSelector: [{
      type: Input,
      args: ["matTextSuffix"]
    }]
  });
})();
var FLOATING_LABEL_PARENT = new InjectionToken("FloatingLabelParent");
var MatFormFieldFloatingLabel = class _MatFormFieldFloatingLabel {
  _elementRef = inject(ElementRef);
  /** Whether the label is floating. */
  get floating() {
    return this._floating;
  }
  set floating(value) {
    this._floating = value;
    if (this.monitorResize) {
      this._handleResize();
    }
  }
  _floating = false;
  /** Whether to monitor for resize events on the floating label. */
  get monitorResize() {
    return this._monitorResize;
  }
  set monitorResize(value) {
    this._monitorResize = value;
    if (this._monitorResize) {
      this._subscribeToResize();
    } else {
      this._resizeSubscription.unsubscribe();
    }
  }
  _monitorResize = false;
  /** The shared ResizeObserver. */
  _resizeObserver = inject(SharedResizeObserver);
  /** The Angular zone. */
  _ngZone = inject(NgZone);
  /** The parent form-field. */
  _parent = inject(FLOATING_LABEL_PARENT);
  /** The current resize event subscription. */
  _resizeSubscription = new Subscription();
  constructor() {
  }
  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
  /** Gets the width of the label. Used for the outline notch. */
  getWidth() {
    return estimateScrollWidth(this._elementRef.nativeElement);
  }
  /** Gets the HTML element for the floating label. */
  get element() {
    return this._elementRef.nativeElement;
  }
  /** Handles resize events from the ResizeObserver. */
  _handleResize() {
    setTimeout(() => this._parent._handleLabelResized());
  }
  /** Subscribes to resize events. */
  _subscribeToResize() {
    this._resizeSubscription.unsubscribe();
    this._ngZone.runOutsideAngular(() => {
      this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, {
        box: "border-box"
      }).subscribe(() => this._handleResize());
    });
  }
  static \u0275fac = function MatFormFieldFloatingLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldFloatingLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldFloatingLabel,
    selectors: [["label", "matFormFieldFloatingLabel", ""]],
    hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
    hostVars: 2,
    hostBindings: function MatFormFieldFloatingLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-floating-label--float-above", ctx.floating);
      }
    },
    inputs: {
      floating: "floating",
      monitorResize: "monitorResize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldFloatingLabel, [{
    type: Directive,
    args: [{
      selector: "label[matFormFieldFloatingLabel]",
      host: {
        "class": "mdc-floating-label mat-mdc-floating-label",
        "[class.mdc-floating-label--float-above]": "floating"
      }
    }]
  }], () => [], {
    floating: [{
      type: Input
    }],
    monitorResize: [{
      type: Input
    }]
  });
})();
function estimateScrollWidth(element) {
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}
var ACTIVATE_CLASS = "mdc-line-ripple--active";
var DEACTIVATING_CLASS = "mdc-line-ripple--deactivating";
var MatFormFieldLineRipple = class _MatFormFieldLineRipple {
  _elementRef = inject(ElementRef);
  _cleanupTransitionEnd;
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(Renderer2);
    ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionEnd);
    });
  }
  activate() {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(DEACTIVATING_CLASS);
    classList.add(ACTIVATE_CLASS);
  }
  deactivate() {
    this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
  }
  _handleTransitionEnd = (event) => {
    const classList = this._elementRef.nativeElement.classList;
    const isDeactivating = classList.contains(DEACTIVATING_CLASS);
    if (event.propertyName === "opacity" && isDeactivating) {
      classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
    }
  };
  ngOnDestroy() {
    this._cleanupTransitionEnd();
  }
  static \u0275fac = function MatFormFieldLineRipple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldLineRipple)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldLineRipple,
    selectors: [["div", "matFormFieldLineRipple", ""]],
    hostAttrs: [1, "mdc-line-ripple"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldLineRipple, [{
    type: Directive,
    args: [{
      selector: "div[matFormFieldLineRipple]",
      host: {
        "class": "mdc-line-ripple"
      }
    }]
  }], () => [], null);
})();
var MatFormFieldNotchedOutline = class _MatFormFieldNotchedOutline {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  /** Whether the notch should be opened. */
  open = false;
  _notch;
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    const label = element.querySelector(".mdc-floating-label");
    if (label) {
      element.classList.add("mdc-notched-outline--upgraded");
      if (typeof requestAnimationFrame === "function") {
        label.style.transitionDuration = "0s";
        this._ngZone.runOutsideAngular(() => {
          requestAnimationFrame(() => label.style.transitionDuration = "");
        });
      }
    } else {
      element.classList.add("mdc-notched-outline--no-label");
    }
  }
  _setNotchWidth(labelWidth) {
    const notch = this._notch.nativeElement;
    if (!this.open || !labelWidth) {
      notch.style.width = "";
    } else {
      const NOTCH_ELEMENT_PADDING = 8;
      const NOTCH_ELEMENT_BORDER = 1;
      notch.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
    }
  }
  _setMaxWidth(prefixAndSuffixWidth) {
    this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width", `calc(100% - ${prefixAndSuffixWidth}px)`);
  }
  static \u0275fac = function MatFormFieldNotchedOutline_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldNotchedOutline)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFormFieldNotchedOutline,
    selectors: [["div", "matFormFieldNotchedOutline", ""]],
    viewQuery: function MatFormFieldNotchedOutline_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._notch = _t.first);
      }
    },
    hostAttrs: [1, "mdc-notched-outline"],
    hostVars: 2,
    hostBindings: function MatFormFieldNotchedOutline_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-notched-outline--notched", ctx.open);
      }
    },
    inputs: {
      open: [0, "matFormFieldNotchedOutlineOpen", "open"]
    },
    attrs: _c13,
    ngContentSelectors: _c2,
    decls: 5,
    vars: 0,
    consts: [["notch", ""], [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"]],
    template: function MatFormFieldNotchedOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElement(0, "div", 1);
        \u0275\u0275domElementStart(1, "div", 2, 0);
        \u0275\u0275projection(3);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(4, "div", 3);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldNotchedOutline, [{
    type: Component,
    args: [{
      selector: "div[matFormFieldNotchedOutline]",
      host: {
        "class": "mdc-notched-outline",
        // Besides updating the notch state through the MDC component, we toggle this class through
        // a host binding in order to ensure that the notched-outline renders correctly on the server.
        "[class.mdc-notched-outline--notched]": "open"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n'
    }]
  }], null, {
    open: [{
      type: Input,
      args: ["matFormFieldNotchedOutlineOpen"]
    }],
    _notch: [{
      type: ViewChild,
      args: ["notch"]
    }]
  });
})();
var MatFormFieldControl = class _MatFormFieldControl {
  /** The value of the control. */
  value;
  /**
   * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
   * needs to run change detection.
   */
  stateChanges;
  /** The element ID for this control. */
  id;
  /** The placeholder for this control. */
  placeholder;
  /** Gets the AbstractControlDirective for this control. */
  ngControl;
  /** Whether the control is focused. */
  focused;
  /** Whether the control is empty. */
  empty;
  /** Whether the `MatFormField` label should try to float. */
  shouldLabelFloat;
  /** Whether the control is required. */
  required;
  /** Whether the control is disabled. */
  disabled;
  /** Whether the control is in an error state. */
  errorState;
  /**
   * An optional name for the control type that can be used to distinguish `mat-form-field` elements
   * based on their control type. The form field will add a class,
   * `mat-form-field-type-{{controlType}}` to its root element.
   */
  controlType;
  /**
   * Whether the input is currently in an autofilled state. If property is not present on the
   * control it is assumed to be false.
   */
  autofilled;
  /**
   * Value of `aria-describedby` that should be merged with the described-by ids
   * which are set by the form-field.
   */
  userAriaDescribedBy;
  /**
   * Whether to automatically assign the ID of the form field as the `for` attribute
   * on the `<label>` inside the form field. Set this to true to prevent the form
   * field from associating the label with non-native elements.
   */
  disableAutomaticLabeling;
  /** Gets the list of element IDs that currently describe this control. */
  describedByIds;
  static \u0275fac = function MatFormFieldControl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldControl)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldControl
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldControl, [{
    type: Directive
  }], null, null);
})();
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error("mat-form-field must contain a MatFormFieldControl.");
}
var MAT_FORM_FIELD = new InjectionToken("MatFormField");
var MAT_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken("MAT_FORM_FIELD_DEFAULT_OPTIONS");
var DEFAULT_APPEARANCE = "fill";
var DEFAULT_FLOAT_LABEL = "auto";
var DEFAULT_SUBSCRIPT_SIZING = "fixed";
var FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
var MatFormField = class _MatFormField {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality);
  _platform = inject(Platform);
  _idGenerator = inject(_IdGenerator);
  _ngZone = inject(NgZone);
  _defaults = inject(MAT_FORM_FIELD_DEFAULT_OPTIONS, {
    optional: true
  });
  _textField;
  _iconPrefixContainer;
  _textPrefixContainer;
  _iconSuffixContainer;
  _textSuffixContainer;
  _floatingLabel;
  _notchedOutline;
  _lineRipple;
  _iconPrefixContainerSignal = viewChild("iconPrefixContainer");
  _textPrefixContainerSignal = viewChild("textPrefixContainer");
  _iconSuffixContainerSignal = viewChild("iconSuffixContainer");
  _textSuffixContainerSignal = viewChild("textSuffixContainer");
  _prefixSuffixContainers = computed(() => {
    return [this._iconPrefixContainerSignal(), this._textPrefixContainerSignal(), this._iconSuffixContainerSignal(), this._textSuffixContainerSignal()].map((container) => container?.nativeElement).filter((e) => e !== void 0);
  });
  _formFieldControl;
  _prefixChildren;
  _suffixChildren;
  _errorChildren;
  _hintChildren;
  _labelChild = contentChild(MatLabel);
  /** Whether the required marker should be hidden. */
  get hideRequiredMarker() {
    return this._hideRequiredMarker;
  }
  set hideRequiredMarker(value) {
    this._hideRequiredMarker = coerceBooleanProperty(value);
  }
  _hideRequiredMarker = false;
  /**
   * Theme color of the form field. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/form-field/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color = "primary";
  /** Whether the label should always float or float as the user types. */
  get floatLabel() {
    return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
  }
  set floatLabel(value) {
    if (value !== this._floatLabel) {
      this._floatLabel = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _floatLabel;
  /** The form field appearance style. */
  get appearance() {
    return this._appearanceSignal();
  }
  set appearance(value) {
    const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (newAppearance !== "fill" && newAppearance !== "outline") {
        throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
      }
    }
    this._appearanceSignal.set(newAppearance);
  }
  _appearanceSignal = signal(DEFAULT_APPEARANCE);
  /**
   * Whether the form field should reserve space for one line of hint/error text (default)
   * or to have the spacing grow from 0px as needed based on the size of the hint/error content.
   * Note that when using dynamic sizing, layout shifts will occur when hint/error text changes.
   */
  get subscriptSizing() {
    return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  set subscriptSizing(value) {
    this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  _subscriptSizing = null;
  /** Text for the form field hint. */
  get hintLabel() {
    return this._hintLabel;
  }
  set hintLabel(value) {
    this._hintLabel = value;
    this._processHints();
  }
  _hintLabel = "";
  _hasIconPrefix = false;
  _hasTextPrefix = false;
  _hasIconSuffix = false;
  _hasTextSuffix = false;
  // Unique id for the internal form field label.
  _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
  // Unique id for the hint label.
  _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
  // Ids obtained from the error and hint fields
  _describedByIds;
  /** Gets the current form field control */
  get _control() {
    return this._explicitFormFieldControl || this._formFieldControl;
  }
  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  _destroyed = new Subject();
  _isFocused = null;
  _explicitFormFieldControl;
  _previousControl = null;
  _previousControlValidatorFn = null;
  _stateChanges;
  _valueChanges;
  _describedByChanges;
  _outlineLabelOffsetResizeObserver = null;
  _animationsDisabled = _animationsDisabled();
  constructor() {
    const defaults = this._defaults;
    if (defaults) {
      if (defaults.appearance) {
        this.appearance = defaults.appearance;
      }
      this._hideRequiredMarker = Boolean(defaults?.hideRequiredMarker);
      if (defaults.color) {
        this.color = defaults.color;
      }
    }
    this._syncOutlineLabelOffset();
  }
  ngAfterViewInit() {
    this._updateFocusState();
    if (!this._animationsDisabled) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");
        }, 300);
      });
    }
    this._changeDetectorRef.detectChanges();
  }
  ngAfterContentInit() {
    this._assertFormFieldControl();
    this._initializeSubscript();
    this._initializePrefixAndSuffix();
  }
  ngAfterContentChecked() {
    this._assertFormFieldControl();
    if (this._control !== this._previousControl) {
      this._initializeControl(this._previousControl);
      if (this._control.ngControl && this._control.ngControl.control) {
        this._previousControlValidatorFn = this._control.ngControl.control.validator;
      }
      this._previousControl = this._control;
    }
    if (this._control.ngControl && this._control.ngControl.control) {
      const validatorFn = this._control.ngControl.control.validator;
      if (validatorFn !== this._previousControlValidatorFn) {
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  ngOnDestroy() {
    this._outlineLabelOffsetResizeObserver?.disconnect();
    this._stateChanges?.unsubscribe();
    this._valueChanges?.unsubscribe();
    this._describedByChanges?.unsubscribe();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Gets the id of the label element. If no label is present, returns `null`.
   */
  getLabelId = computed(() => this._hasFloatingLabel() ? this._labelId : null);
  /**
   * Gets an ElementRef for the element that a overlay attached to the form field
   * should be positioned relative to.
   */
  getConnectedOverlayOrigin() {
    return this._textField || this._elementRef;
  }
  /** Animates the placeholder up and locks it in position. */
  _animateAndLockLabel() {
    if (this._hasFloatingLabel()) {
      this.floatLabel = "always";
    }
  }
  /** Initializes the registered form field control. */
  _initializeControl(previousControl) {
    const control = this._control;
    const classPrefix = "mat-mdc-form-field-type-";
    if (previousControl) {
      this._elementRef.nativeElement.classList.remove(classPrefix + previousControl.controlType);
    }
    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(classPrefix + control.controlType);
    }
    this._stateChanges?.unsubscribe();
    this._stateChanges = control.stateChanges.subscribe(() => {
      this._updateFocusState();
      this._changeDetectorRef.markForCheck();
    });
    this._describedByChanges?.unsubscribe();
    this._describedByChanges = control.stateChanges.pipe(startWith([void 0, void 0]), map(() => [control.errorState, control.userAriaDescribedBy]), pairwise(), filter(([[prevErrorState, prevDescribedBy], [currentErrorState, currentDescribedBy]]) => {
      return prevErrorState !== currentErrorState || prevDescribedBy !== currentDescribedBy;
    })).subscribe(() => this._syncDescribedByIds());
    this._valueChanges?.unsubscribe();
    if (control.ngControl && control.ngControl.valueChanges) {
      this._valueChanges = control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    }
  }
  _checkPrefixAndSuffixTypes() {
    this._hasIconPrefix = !!this._prefixChildren.find((p) => !p._isText);
    this._hasTextPrefix = !!this._prefixChildren.find((p) => p._isText);
    this._hasIconSuffix = !!this._suffixChildren.find((s) => !s._isText);
    this._hasTextSuffix = !!this._suffixChildren.find((s) => s._isText);
  }
  /** Initializes the prefix and suffix containers. */
  _initializePrefixAndSuffix() {
    this._checkPrefixAndSuffixTypes();
    merge(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
      this._checkPrefixAndSuffixTypes();
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * Initializes the subscript by validating hints and synchronizing "aria-describedby" ids
   * with the custom form field control. Also subscribes to hint and error changes in order
   * to be able to validate and synchronize ids on change.
   */
  _initializeSubscript() {
    this._hintChildren.changes.subscribe(() => {
      this._processHints();
      this._changeDetectorRef.markForCheck();
    });
    this._errorChildren.changes.subscribe(() => {
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    this._validateHints();
    this._syncDescribedByIds();
  }
  /** Throws an error if the form field's control is missing. */
  _assertFormFieldControl() {
    if (!this._control && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatFormFieldMissingControlError();
    }
  }
  _updateFocusState() {
    const controlFocused = this._control.focused;
    if (controlFocused && !this._isFocused) {
      this._isFocused = true;
      this._lineRipple?.activate();
    } else if (!controlFocused && (this._isFocused || this._isFocused === null)) {
      this._isFocused = false;
      this._lineRipple?.deactivate();
    }
    this._elementRef.nativeElement.classList.toggle("mat-focused", controlFocused);
    this._textField?.nativeElement.classList.toggle("mdc-text-field--focused", controlFocused);
  }
  /**
   * The floating label in the docked state needs to account for prefixes. The horizontal offset
   * is calculated whenever the appearance changes to `outline`, the prefixes change, or when the
   * form field is added to the DOM. This method sets up all subscriptions which are needed to
   * trigger the label offset update.
   */
  _syncOutlineLabelOffset() {
    afterRenderEffect({
      earlyRead: () => {
        if (this._appearanceSignal() !== "outline") {
          this._outlineLabelOffsetResizeObserver?.disconnect();
          return null;
        }
        if (globalThis.ResizeObserver) {
          this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => {
            this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());
          });
          for (const el of this._prefixSuffixContainers()) {
            this._outlineLabelOffsetResizeObserver.observe(el, {
              box: "border-box"
            });
          }
        }
        return this._getOutlinedLabelOffset();
      },
      write: (labelStyles) => this._writeOutlinedLabelStyles(labelStyles())
    });
  }
  /** Whether the floating label should always float or not. */
  _shouldAlwaysFloat() {
    return this.floatLabel === "always";
  }
  _hasOutline() {
    return this.appearance === "outline";
  }
  /**
   * Whether the label should display in the infix. Labels in the outline appearance are
   * displayed as part of the notched-outline and are horizontally offset to account for
   * form field prefix content. This won't work in server side rendering since we cannot
   * measure the width of the prefix container. To make the docked label appear as if the
   * right offset has been calculated, we forcibly render the label inside the infix. Since
   * the label is part of the infix, the label cannot overflow the prefix content.
   */
  _forceDisplayInfixLabel() {
    return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
  }
  _hasFloatingLabel = computed(() => !!this._labelChild());
  _shouldLabelFloat() {
    if (!this._hasFloatingLabel()) {
      return false;
    }
    return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
  }
  /**
   * Determines whether a class from the AbstractControlDirective
   * should be forwarded to the host element.
   */
  _shouldForward(prop) {
    const control = this._control ? this._control.ngControl : null;
    return control && control[prop];
  }
  /** Gets the type of subscript message to render (error or hint). */
  _getSubscriptMessageType() {
    return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint";
  }
  /** Handle label resize events. */
  _handleLabelResized() {
    this._refreshOutlineNotchWidth();
  }
  /** Refreshes the width of the outline-notch, if present. */
  _refreshOutlineNotchWidth() {
    if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
      this._notchedOutline?._setNotchWidth(0);
    } else {
      this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
    }
  }
  /** Does any extra processing that is required when handling the hints. */
  _processHints() {
    this._validateHints();
    this._syncDescribedByIds();
  }
  /**
   * Ensure that there is a maximum of one of each "mat-hint" alignment specified. The hint
   * label specified set through the input is being considered as "start" aligned.
   *
   * This method is a noop if Angular runs in production mode.
   */
  _validateHints() {
    if (this._hintChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      let startHint;
      let endHint;
      this._hintChildren.forEach((hint) => {
        if (hint.align === "start") {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError("start");
          }
          startHint = hint;
        } else if (hint.align === "end") {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError("end");
          }
          endHint = hint;
        }
      });
    }
  }
  /**
   * Sets the list of element IDs that describe the child control. This allows the control to update
   * its `aria-describedby` attribute accordingly.
   */
  _syncDescribedByIds() {
    if (this._control) {
      let ids = [];
      if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === "string") {
        ids.push(...this._control.userAriaDescribedBy.split(" "));
      }
      if (this._getSubscriptMessageType() === "hint") {
        const startHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "start") : null;
        const endHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "end") : null;
        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }
        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids.push(...this._errorChildren.map((error) => error.id));
      }
      const existingDescribedBy = this._control.describedByIds;
      let toAssign;
      if (existingDescribedBy) {
        const exclude = this._describedByIds || ids;
        toAssign = ids.concat(existingDescribedBy.filter((id) => id && !exclude.includes(id)));
      } else {
        toAssign = ids;
      }
      this._control.setDescribedByIds(toAssign);
      this._describedByIds = ids;
    }
  }
  /**
   * Calculates the horizontal offset of the label in the outline appearance. In the outline
   * appearance, the notched-outline and label are not relative to the infix container because
   * the outline intends to surround prefixes, suffixes and the infix. This means that the
   * floating label by default overlaps prefixes in the docked state. To avoid this, we need to
   * horizontally offset the label by the width of the prefix container. The MDC text-field does
   * not need to do this because they use a fixed width for prefixes. Hence, they can simply
   * incorporate the horizontal offset into their default text-field styles.
   */
  _getOutlinedLabelOffset() {
    const dir = this._dir.valueSignal();
    if (!this._hasOutline() || !this._floatingLabel) {
      return null;
    }
    if (!this._iconPrefixContainer && !this._textPrefixContainer) {
      return ["", null];
    }
    if (!this._isAttachedToDom()) {
      return null;
    }
    const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
    const textPrefixContainer = this._textPrefixContainer?.nativeElement;
    const iconSuffixContainer = this._iconSuffixContainer?.nativeElement;
    const textSuffixContainer = this._textSuffixContainer?.nativeElement;
    const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
    const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
    const iconSuffixContainerWidth = iconSuffixContainer?.getBoundingClientRect().width ?? 0;
    const textSuffixContainerWidth = textSuffixContainer?.getBoundingClientRect().width ?? 0;
    const negate = dir === "rtl" ? "-1" : "1";
    const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
    const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
    const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
    const floatingLabelTransform = `var(--mat-mdc-form-field-label-transform, ${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}))`;
    const notchedOutlineWidth = iconPrefixContainerWidth + textPrefixContainerWidth + iconSuffixContainerWidth + textSuffixContainerWidth;
    return [floatingLabelTransform, notchedOutlineWidth];
  }
  /** Writes the styles produced by `_getOutlineLabelOffset` synchronously to the DOM. */
  _writeOutlinedLabelStyles(styles) {
    if (styles !== null) {
      const [floatingLabelTransform, notchedOutlineWidth] = styles;
      if (this._floatingLabel) {
        this._floatingLabel.element.style.transform = floatingLabelTransform;
      }
      if (notchedOutlineWidth !== null) {
        this._notchedOutline?._setMaxWidth(notchedOutlineWidth);
      }
    }
  }
  /** Checks whether the form field is attached to the DOM. */
  _isAttachedToDom() {
    const element = this._elementRef.nativeElement;
    if (element.getRootNode) {
      const rootNode = element.getRootNode();
      return rootNode && rootNode !== element;
    }
    return document.documentElement.contains(element);
  }
  static \u0275fac = function MatFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFormField,
    selectors: [["mat-form-field"]],
    contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx._labelChild, MatLabel, 5);
        \u0275\u0275contentQuery(dirIndex, MatFormFieldControl, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_PREFIX, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_SUFFIX, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_ERROR, 5);
        \u0275\u0275contentQuery(dirIndex, MatHint, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._formFieldControl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._prefixChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._suffixChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._errorChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._hintChildren = _t);
      }
    },
    viewQuery: function MatFormField_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._iconPrefixContainerSignal, _c3, 5);
        \u0275\u0275viewQuerySignal(ctx._textPrefixContainerSignal, _c4, 5);
        \u0275\u0275viewQuerySignal(ctx._iconSuffixContainerSignal, _c5, 5);
        \u0275\u0275viewQuerySignal(ctx._textSuffixContainerSignal, _c6, 5);
        \u0275\u0275viewQuery(_c7, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
        \u0275\u0275viewQuery(_c6, 5);
        \u0275\u0275viewQuery(MatFormFieldFloatingLabel, 5);
        \u0275\u0275viewQuery(MatFormFieldNotchedOutline, 5);
        \u0275\u0275viewQuery(MatFormFieldLineRipple, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(4);
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textField = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._iconPrefixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textPrefixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._iconSuffixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textSuffixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._floatingLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._notchedOutline = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lineRipple = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-form-field"],
    hostVars: 38,
    hostBindings: function MatFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-form-field-label-always-float", ctx._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix", ctx._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix", ctx._hasIconSuffix)("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-hide-placeholder", ctx._hasFloatingLabel() && !ctx._shouldLabelFloat())("mat-primary", ctx.color !== "accent" && ctx.color !== "warn")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"));
      }
    },
    inputs: {
      hideRequiredMarker: "hideRequiredMarker",
      color: "color",
      floatLabel: "floatLabel",
      appearance: "appearance",
      subscriptSizing: "subscriptSizing",
      hintLabel: "hintLabel"
    },
    exportAs: ["matFormField"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_FORM_FIELD,
      useExisting: _MatFormField
    }, {
      provide: FLOATING_LABEL_PARENT,
      useExisting: _MatFormField
    }])],
    ngContentSelectors: _c9,
    decls: 19,
    vars: 25,
    consts: [["labelTemplate", ""], ["textField", ""], ["iconPrefixContainer", ""], ["textPrefixContainer", ""], ["textSuffixContainer", ""], ["iconSuffixContainer", ""], [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"], [1, "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-flex"], ["matFormFieldNotchedOutline", "", 3, "matFormFieldNotchedOutlineOpen"], [1, "mat-mdc-form-field-icon-prefix"], [1, "mat-mdc-form-field-text-prefix"], [1, "mat-mdc-form-field-infix"], [3, "ngTemplateOutlet"], [1, "mat-mdc-form-field-text-suffix"], [1, "mat-mdc-form-field-icon-suffix"], ["matFormFieldLineRipple", ""], [1, "mat-mdc-form-field-subscript-wrapper", "mat-mdc-form-field-bottom-align"], ["aria-atomic", "true", "aria-live", "polite"], ["matFormFieldFloatingLabel", "", 3, "floating", "monitorResize", "id"], ["aria-hidden", "true", 1, "mat-mdc-form-field-required-marker", "mdc-floating-label--required"], [3, "id"], [1, "mat-mdc-form-field-hint-spacer"]],
    template: function MatFormField_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c8);
        \u0275\u0275template(0, MatFormField_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 6, 1);
        \u0275\u0275listener("click", function MatFormField_Template_div_click_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._control.onContainerClick($event));
        });
        \u0275\u0275conditionalCreate(4, MatFormField_Conditional_4_Template, 1, 0, "div", 7);
        \u0275\u0275elementStart(5, "div", 8);
        \u0275\u0275conditionalCreate(6, MatFormField_Conditional_6_Template, 2, 2, "div", 9);
        \u0275\u0275conditionalCreate(7, MatFormField_Conditional_7_Template, 3, 0, "div", 10);
        \u0275\u0275conditionalCreate(8, MatFormField_Conditional_8_Template, 3, 0, "div", 11);
        \u0275\u0275elementStart(9, "div", 12);
        \u0275\u0275conditionalCreate(10, MatFormField_Conditional_10_Template, 1, 1, null, 13);
        \u0275\u0275projection(11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, MatFormField_Conditional_12_Template, 3, 0, "div", 14);
        \u0275\u0275conditionalCreate(13, MatFormField_Conditional_13_Template, 3, 0, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, MatFormField_Conditional_14_Template, 1, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 17)(16, "div", 18);
        \u0275\u0275conditionalCreate(17, MatFormField_Case_17_Template, 1, 0)(18, MatFormField_Case_18_Template, 4, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_19_0;
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mdc-text-field--filled", !ctx._hasOutline())("mdc-text-field--outlined", ctx._hasOutline())("mdc-text-field--no-label", !ctx._hasFloatingLabel())("mdc-text-field--disabled", ctx._control.disabled)("mdc-text-field--invalid", ctx._control.errorState);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx._hasOutline() && !ctx._control.disabled ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasOutline() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasIconPrefix ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasTextPrefix ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx._hasOutline() || ctx._forceDisplayInfixLabel() ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasTextSuffix ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasIconSuffix ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx._hasOutline() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-mdc-form-field-subscript-dynamic-size", ctx.subscriptSizing === "dynamic");
        const subscriptMessageType_r4 = ctx._getSubscriptMessageType();
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-mdc-form-field-error-wrapper", subscriptMessageType_r4 === "error")("mat-mdc-form-field-hint-wrapper", subscriptMessageType_r4 === "hint");
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_19_0 = subscriptMessageType_r4) === "error" ? 17 : tmp_19_0 === "hint" ? 18 : -1);
      }
    },
    dependencies: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
    styles: ['.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator,.mdc-text-field__input::-webkit-search-cancel-button{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormField, [{
    type: Component,
    args: [{
      selector: "mat-form-field",
      exportAs: "matFormField",
      host: {
        "class": "mat-mdc-form-field",
        "[class.mat-mdc-form-field-label-always-float]": "_shouldAlwaysFloat()",
        "[class.mat-mdc-form-field-has-icon-prefix]": "_hasIconPrefix",
        "[class.mat-mdc-form-field-has-icon-suffix]": "_hasIconSuffix",
        // Note that these classes reuse the same names as the non-MDC version, because they can be
        // considered a public API since custom form controls may use them to style themselves.
        // See https://github.com/angular/components/pull/20502#discussion_r486124901.
        "[class.mat-form-field-invalid]": "_control.errorState",
        "[class.mat-form-field-disabled]": "_control.disabled",
        "[class.mat-form-field-autofilled]": "_control.autofilled",
        "[class.mat-form-field-appearance-fill]": 'appearance == "fill"',
        "[class.mat-form-field-appearance-outline]": 'appearance == "outline"',
        "[class.mat-form-field-hide-placeholder]": "_hasFloatingLabel() && !_shouldLabelFloat()",
        "[class.mat-primary]": 'color !== "accent" && color !== "warn"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.ng-untouched]": '_shouldForward("untouched")',
        "[class.ng-touched]": '_shouldForward("touched")',
        "[class.ng-pristine]": '_shouldForward("pristine")',
        "[class.ng-dirty]": '_shouldForward("dirty")',
        "[class.ng-valid]": '_shouldForward("valid")',
        "[class.ng-invalid]": '_shouldForward("invalid")',
        "[class.ng-pending]": '_shouldForward("pending")'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }, {
        provide: FLOATING_LABEL_PARENT,
        useExisting: MatFormField
      }],
      imports: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
      template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div\n    class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n    [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  <!-- \n    Use a single permanent wrapper for both hints and errors so aria-live works correctly,\n    as having it appear post render will not consistently work. We also do not want to add\n    additional divs as it causes styling regressions.\n    -->\n  <div aria-atomic="true" aria-live="polite" \n      [class.mat-mdc-form-field-error-wrapper]="subscriptMessageType === \'error\'"\n      [class.mat-mdc-form-field-hint-wrapper]="subscriptMessageType === \'hint\'"\n    >\n    @switch (subscriptMessageType) {\n      @case (\'error\') {\n        <ng-content select="mat-error, [matError]"></ng-content>\n      }\n\n      @case (\'hint\') {\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      }\n    }\n  </div>\n</div>\n',
      styles: ['.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator,.mdc-text-field__input::-webkit-search-cancel-button{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n']
    }]
  }], () => [], {
    _textField: [{
      type: ViewChild,
      args: ["textField"]
    }],
    _iconPrefixContainer: [{
      type: ViewChild,
      args: ["iconPrefixContainer"]
    }],
    _textPrefixContainer: [{
      type: ViewChild,
      args: ["textPrefixContainer"]
    }],
    _iconSuffixContainer: [{
      type: ViewChild,
      args: ["iconSuffixContainer"]
    }],
    _textSuffixContainer: [{
      type: ViewChild,
      args: ["textSuffixContainer"]
    }],
    _floatingLabel: [{
      type: ViewChild,
      args: [MatFormFieldFloatingLabel]
    }],
    _notchedOutline: [{
      type: ViewChild,
      args: [MatFormFieldNotchedOutline]
    }],
    _lineRipple: [{
      type: ViewChild,
      args: [MatFormFieldLineRipple]
    }],
    _formFieldControl: [{
      type: ContentChild,
      args: [MatFormFieldControl]
    }],
    _prefixChildren: [{
      type: ContentChildren,
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: ContentChildren,
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }],
    _errorChildren: [{
      type: ContentChildren,
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: ContentChildren,
      args: [MatHint, {
        descendants: true
      }]
    }],
    hideRequiredMarker: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    floatLabel: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    subscriptSizing: [{
      type: Input
    }],
    hintLabel: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/material/fesm2022/error-options-DCNQlTOA.mjs
var ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
  static \u0275fac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowOnDirtyErrorStateMatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ShowOnDirtyErrorStateMatcher,
    factory: _ShowOnDirtyErrorStateMatcher.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
    type: Injectable
  }], null, null);
})();
var ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
  static \u0275fac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorStateMatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ErrorStateMatcher,
    factory: _ErrorStateMatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorStateMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/error-state-Dtb1IHM-.mjs
var _ErrorStateTracker = class {
  _defaultMatcher;
  ngControl;
  _parentFormGroup;
  _parentForm;
  _stateChanges;
  /** Whether the tracker is currently in an error state. */
  errorState = false;
  /** User-defined matcher for the error state. */
  matcher;
  constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this.ngControl = ngControl;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
  }
  /** Updates the error state based on the provided error state matcher. */
  updateErrorState() {
    const oldState = this.errorState;
    const parent = this._parentFormGroup || this._parentForm;
    const matcher = this.matcher || this._defaultMatcher;
    const control = this.ngControl ? this.ngControl.control : null;
    const newState = matcher?.isErrorState(control, parent) ?? false;
    if (newState !== oldState) {
      this.errorState = newState;
      this._stateChanges.next();
    }
  }
};

// node_modules/@angular/material/fesm2022/module-Dj5gfeAg.mjs
var MatFormFieldModule = class _MatFormFieldModule {
  static \u0275fac = function MatFormFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatFormFieldModule,
    imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
    exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, ObserversModule, MatFormField, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
var MatInput = class _MatInput {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  _autofillMonitor = inject(AutofillMonitor);
  _ngZone = inject(NgZone);
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _renderer = inject(Renderer2);
  _uid = inject(_IdGenerator).getId("mat-input-");
  _previousNativeValue;
  _inputValueAccessor;
  _signalBasedValueAccessor;
  _previousPlaceholder;
  _errorStateTracker;
  _config = inject(MAT_INPUT_CONFIG, {
    optional: true
  });
  _cleanupIosKeyup;
  _cleanupWebkitWheel;
  /** Whether the component is being rendered on the server. */
  _isServer;
  /** Whether the component is a native html select. */
  _isNativeSelect;
  /** Whether the component is a textarea. */
  _isTextarea;
  /** Whether the input is inside of a form field. */
  _isInFormField;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  focused = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  stateChanges = new Subject();
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  controlType = "mat-input";
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  autofilled = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  _disabled = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  _id;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  placeholder;
  /**
   * Name of the input.
   * @docs-private
   */
  name;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  _required;
  /** Input type of the element. */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "text";
    this._validateType();
    if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  _type = "text";
  /** An object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  userAriaDescribedBy;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      if (this._signalBasedValueAccessor) {
        this._signalBasedValueAccessor.value.set(value);
      } else {
        this._inputValueAccessor.value = value;
      }
      this.stateChanges.next();
    }
  }
  /** Whether the element is readonly. */
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  _readonly = false;
  /** Whether the input should remain interactive when it is disabled. */
  disabledInteractive;
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter((t) => getSupportedInputTypes().has(t));
  constructor() {
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, {
      optional: true,
      self: true
    });
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    if (accessor) {
      if (isSignal(accessor.value)) {
        this._signalBasedValueAccessor = accessor;
      } else {
        this._inputValueAccessor = accessor;
      }
    } else {
      this._inputValueAccessor = element;
    }
    this._previousNativeValue = this.value;
    this.id = this.id;
    if (this._platform.IOS) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === "select";
    this._isTextarea = nodeName === "textarea";
    this._isInFormField = !!this._formField;
    this.disabledInteractive = this._config?.disabledInteractive || false;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
    }
    if (this._signalBasedValueAccessor) {
      effect(() => {
        this._signalBasedValueAccessor.value();
        this.stateChanges.next();
      });
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    this._cleanupIosKeyup?.();
    this._cleanupWebkitWheel?.();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    this._dirtyCheckNativeValue();
    this._dirtyCheckPlaceholder();
  }
  /** Focuses the input. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Callback for the cases where the focused state of the input changes. */
  _focusChanged(isFocused) {
    if (isFocused === this.focused) {
      return;
    }
    if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
      const element = this._elementRef.nativeElement;
      if (element.type === "number") {
        element.type = "text";
        element.setSelectionRange(0, 0);
        element.type = "number";
      } else {
        element.setSelectionRange(0, 0);
      }
    }
    this.focused = isFocused;
    this.stateChanges.next();
  }
  _onInput() {
  }
  /** Does some manual dirty checking on the native input `value` property. */
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Does some manual dirty checking on the native input `placeholder` attribute. */
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
    }
  }
  /** Gets the current placeholder of the form field. */
  _getPlaceholder() {
    return this.placeholder || null;
  }
  /** Make sure the input is a supported type. */
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  /** Checks whether the input type is one of the types that are never empty. */
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  /** Checks whether the input is invalid based on the native validation. */
  _isBadInput() {
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused && !this.disabled || !this.empty;
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  /** Whether the form control is a native select that is displayed inline. */
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
  _iOSKeyupListener = (event) => {
    const el = event.target;
    if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
      el.setSelectionRange(1, 1);
      el.setSelectionRange(0, 0);
    }
  };
  /** Gets the value to set on the `readonly` attribute. */
  _getReadonlyAttribute() {
    if (this._isNativeSelect) {
      return null;
    }
    if (this.readonly || this.disabled && this.disabledInteractive) {
      return "true";
    }
    return null;
  }
  static \u0275fac = function MatInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatInput,
    selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
    hostAttrs: [1, "mat-mdc-input-element"],
    hostVars: 21,
    hostBindings: function MatInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatInput_focus_HostBindingHandler() {
          return ctx._focusChanged(true);
        })("blur", function MatInput_blur_HostBindingHandler() {
          return ctx._focusChanged(false);
        })("input", function MatInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        \u0275\u0275attribute("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
        \u0275\u0275classProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
      }
    },
    inputs: {
      disabled: "disabled",
      id: "id",
      placeholder: "placeholder",
      name: "name",
      required: "required",
      type: "type",
      errorStateMatcher: "errorStateMatcher",
      userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
      value: "value",
      readonly: "readonly",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    exportAs: ["matInput"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatInput
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInput, [{
    type: Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: "matInput",
      host: {
        "class": "mat-mdc-input-element",
        // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
        // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
        // this MDC equivalent input.
        "[class.mat-input-server]": "_isServer",
        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
        "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
        "[class.mdc-text-field__input]": "_isInFormField",
        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[id]": "id",
        "[disabled]": "disabled && !disabledInteractive",
        "[required]": "required",
        "[attr.name]": "name || null",
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        // Only mark the input as invalid for assistive technology if it has a value since the
        // state usually overlaps with `aria-required` when the input is empty and can be redundant.
        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
        "[attr.aria-required]": "required",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[attr.id]": "id",
        "(focus)": "_focusChanged(true)",
        "(blur)": "_focusChanged(false)",
        "(input)": "_onInput()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatInput
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    value: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatInputModule = class _MatInputModule {
  static \u0275fac = function MatInputModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatInputModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatInputModule,
    imports: [MatCommonModule, MatFormFieldModule, MatInput],
    exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatFormFieldModule, MatFormFieldModule, TextFieldModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInputModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatFormFieldModule, MatInput],
      exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/layout/navbar/navbar.ts
var _Navbar = class _Navbar {
  constructor() {
    this.isMenuOpen = false;
    this.searchQuery = "";
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  onSearch() {
    console.log("Buscando:", this.searchQuery);
    this.searchQuery = "";
  }
};
_Navbar.\u0275fac = function Navbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Navbar)();
};
_Navbar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 78, vars: 4, consts: [["color", "primary", 1, "navbar-sticky"], [1, "navbar-container"], [1, "left-section"], [1, "navbar-brand"], ["routerLink", "/", 1, "logo-link"], ["src", "assets/images/global/logo2.png", "alt", "Logo C&E IPS S.A.S", 1, "logo"], [1, "navbar-nav"], ["mat-button", "", "routerLink", "/", 1, "nav-link"], ["mat-button", "", "routerLink", "/sueroterapia", 1, "nav-link"], ["mat-button", "", "routerLink", "/services", 1, "nav-link"], ["mat-button", "", "routerLink", "/bussiness", 1, "nav-link"], ["mat-button", "", "routerLink", "/pqrs", 1, "nav-link"], ["mat-raised-button", "", "routerLink", "/admin/login", 1, "login-btn"], [1, "mobile-toggle"], ["mat-icon-button", "", 1, "menu-btn", 3, "click"], [1, "mobile-menu"], [1, "mobile-search-container"], [1, "mobile-search-wrapper"], ["type", "text", "placeholder", "Buscar servicios...", 1, "mobile-search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "mobile-search-button", 3, "click"], ["mat-button", "", "routerLink", "/", 1, "mobile-nav-link", 3, "click"], ["mat-button", "", "routerLink", "/sueroterapia", 1, "mobile-nav-link", 3, "click"], ["mat-button", "", "routerLink", "/services", 1, "mobile-nav-link", 3, "click"], ["mat-button", "", "routerLink", "/bussiness", 1, "mobile-nav-link", 3, "click"], ["mat-button", "", "routerLink", "/pqrs", 1, "mobile-nav-link", 3, "click"], ["mat-raised-button", "", "routerLink", "/admin/login", 1, "mobile-login-btn", 3, "click"]], template: function Navbar_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-toolbar", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 6)(7, "a", 7)(8, "mat-icon");
    \u0275\u0275text(9, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "INICIO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 8)(13, "mat-icon");
    \u0275\u0275text(14, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "SUEROTERAPIA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 9)(18, "mat-icon");
    \u0275\u0275text(19, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "SERVICIOS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 10)(23, "mat-icon");
    \u0275\u0275text(24, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "NOSOTROS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "a", 11)(28, "mat-icon");
    \u0275\u0275text(29, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "CONTACTO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "a", 12)(33, "mat-icon");
    \u0275\u0275text(34, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "LOGIN");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 13)(38, "button", 14);
    \u0275\u0275listener("click", function Navbar_Template_button_click_38_listener() {
      return ctx.toggleMenu();
    });
    \u0275\u0275elementStart(39, "mat-icon");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "div", 15)(42, "div", 16)(43, "div", 17)(44, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function Navbar_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function Navbar_Template_input_keyup_enter_44_listener() {
      return ctx.onSearch();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 19);
    \u0275\u0275listener("click", function Navbar_Template_button_click_45_listener() {
      return ctx.onSearch();
    });
    \u0275\u0275elementStart(46, "mat-icon");
    \u0275\u0275text(47, "search");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "a", 20);
    \u0275\u0275listener("click", function Navbar_Template_a_click_48_listener() {
      return ctx.closeMenu();
    });
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52, "INICIO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "a", 21);
    \u0275\u0275listener("click", function Navbar_Template_a_click_53_listener() {
      return ctx.closeMenu();
    });
    \u0275\u0275elementStart(54, "mat-icon");
    \u0275\u0275text(55, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57, "SUEROTERAPIA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "a", 22);
    \u0275\u0275listener("click", function Navbar_Template_a_click_58_listener() {
      return ctx.closeMenu();
    });
    \u0275\u0275elementStart(59, "mat-icon");
    \u0275\u0275text(60, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "SERVICIOS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "a", 23);
    \u0275\u0275listener("click", function Navbar_Template_a_click_63_listener() {
      return ctx.closeMenu();
    });
    \u0275\u0275elementStart(64, "mat-icon");
    \u0275\u0275text(65, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67, "NOSOTROS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "a", 24);
    \u0275\u0275listener("click", function Navbar_Template_a_click_68_listener() {
      return ctx.closeMenu();
    });
    \u0275\u0275elementStart(69, "mat-icon");
    \u0275\u0275text(70, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72, "CONTACTO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "a", 25);
    \u0275\u0275listener("click", function Navbar_Template_a_click_73_listener() {
      return ctx.closeMenu();
    });
    \u0275\u0275elementStart(74, "mat-icon");
    \u0275\u0275text(75, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span");
    \u0275\u0275text(77, "LOGIN");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(40);
    \u0275\u0275textInterpolate(ctx.isMenuOpen ? "close" : "menu");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx.isMenuOpen);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
  }
}, dependencies: [
  CommonModule,
  MatToolbarModule,
  MatToolbar,
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatIconModule,
  MatIcon,
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  RouterModule,
  RouterLink
], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --navbar-height: 70px;\n  --primary-color: #005A9C;\n  --accent-color: #00B5E2;\n  --white: #ffffff;\n  --text-light: #f8f9fa;\n  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  --transition: all 0.3s ease;\n}\n[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  background: #003d7a;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  color: var(--white);\n  height: var(--navbar-height);\n  padding: 0 !important;\n  box-shadow: var(--shadow);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.navbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 2rem;\n  gap: 1.5rem;\n}\n.left-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  flex: 1;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.navbar-brand[_ngcontent-%COMP%]   .logo-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: var(--transition);\n  padding: 0.5rem;\n  border-radius: 12px;\n}\n.navbar-brand[_ngcontent-%COMP%]   .logo-link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  background: rgba(255, 255, 255, 0.1);\n}\n.navbar-brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 60px;\n  width: auto;\n  filter: brightness(0) invert(1);\n  transition: var(--transition);\n}\n.search-container[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 300px;\n}\n.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 30px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  transition: var(--transition);\n  overflow: hidden;\n}\n.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]:hover {\n  background: rgb(255, 255, 255);\n  border-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]:focus-within {\n  background: rgb(255, 255, 255);\n  border-color: var(--accent-color);\n  box-shadow: 0 4px 20px rgba(0, 181, 226, 0.1490196078);\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 0.8rem 1.2rem;\n  font-size: 0.95rem;\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 90, 156, 0.6);\n  font-weight: 400;\n}\n.search-container[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #003d7a;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin: 0.3rem;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.search-container[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]:hover {\n  background: #0099cc;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(0, 181, 226, 0.3);\n}\n.search-container[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  flex-shrink: 0;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--white);\n  text-decoration: none;\n  padding: 0.7rem 1.2rem;\n  border-radius: 25px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: var(--transition);\n  background: transparent;\n  border: 2px solid transparent;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  transition: left 0.5s ease;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--white);\n  transition: var(--transition);\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: var(--accent-color);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  transform: scale(1.1);\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.navbar-nav[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #f7931e 100%);\n  color: var(--white) !important;\n  padding: 0.7rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: var(--transition);\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);\n}\n.navbar-nav[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.navbar-nav[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.5);\n  background:\n    linear-gradient(\n      135deg,\n      #e55a25 0%,\n      #e07818 100%);\n}\n.navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-color) 0%,\n      #0099cc 100%);\n  color: var(--white);\n  padding: 0.7rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(0, 181, 226, 0.3);\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--white);\n  transition: var(--transition);\n}\n.navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0099cc 0%,\n      var(--accent-color) 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(0, 181, 226, 0.4);\n}\n.navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px);\n}\n.mobile-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.mobile-toggle[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  color: var(--white);\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  transition: var(--transition);\n  border: 2px solid transparent;\n}\n.mobile-toggle[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: var(--accent-color);\n  transform: scale(1.1);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.mobile-toggle[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--white);\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: var(--navbar-height);\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.98);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  padding: 2rem;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n  z-index: 999;\n  flex-direction: column;\n  gap: 1rem;\n  border-bottom: 1px solid rgba(0, 90, 156, 0.1);\n}\n.mobile-menu.active[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  display: block !important;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex !important;\n  align-items: center;\n  background: rgb(255, 255, 255);\n  border-radius: 25px;\n  border: 2px solid rgba(0, 90, 156, 0.2);\n  transition: var(--transition);\n  overflow: hidden;\n  width: 100%;\n  min-height: 50px;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-wrapper[_ngcontent-%COMP%]:hover {\n  background: rgb(255, 255, 255);\n  border-color: rgba(0, 90, 156, 0.3);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-wrapper[_ngcontent-%COMP%]:focus-within {\n  background: rgb(255, 255, 255);\n  border-color: var(--accent-color);\n  box-shadow: 0 4px 20px rgba(0, 181, 226, 0.15);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 1rem 1.2rem;\n  font-size: 1rem;\n  color: var(--primary-color);\n  font-weight: 500;\n  width: 100%;\n  display: block !important;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 90, 156, 0.6);\n  font-weight: 400;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-button[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  background: var(--accent-color);\n  color: var(--white);\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin: 0.3rem;\n  cursor: pointer;\n  transition: var(--transition);\n  flex-shrink: 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-button[_ngcontent-%COMP%]:hover {\n  background: #0099cc;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(0, 181, 226, 0.3);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: var(--primary-color);\n  text-decoration: none;\n  padding: 1.2rem 1.5rem;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: var(--transition);\n  background: transparent;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--primary-color);\n  transition: var(--transition);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 181, 226, 0.1);\n  border-color: var(--accent-color);\n  transform: translateX(8px);\n  box-shadow: 0 4px 15px rgba(0, 181, 226, 0.15);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  transform: scale(1.1);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-login-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #f7931e 100%);\n  color: var(--white) !important;\n  padding: 1.2rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-decoration: none;\n  margin: 0.5rem 1.5rem;\n  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);\n  border: none;\n  cursor: pointer;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-login-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-login-btn[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.5);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-portal-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-color) 0%,\n      #0099cc 100%);\n  color: var(--white);\n  padding: 1.2rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-decoration: none;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(0, 181, 226, 0.3);\n  border: none;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-portal-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--white);\n  transition: var(--transition);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-portal-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0099cc 0%,\n      var(--accent-color) 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 181, 226, 0.4);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-portal-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n@media (max-width: 1200px) {\n  .navbar-container[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0.6rem 1rem;\n    font-size: 0.85rem;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 1rem;\n    height: 1rem;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%] {\n    padding: 0.6rem 1.2rem;\n    font-size: 0.85rem;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .portal-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 1rem;\n    height: 1rem;\n  }\n}\n@media (max-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --navbar-height: 65px;\n  }\n  .navbar-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .navbar-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .navbar-brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n  .left-section[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-menu.active[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%] {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-wrapper[_ngcontent-%COMP%] {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%] {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-button[_ngcontent-%COMP%] {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n}\n@media (max-width: 768px) {\n  [_ngcontent-%COMP%]:root {\n    --navbar-height: 60px;\n  }\n  .navbar-container[_ngcontent-%COMP%] {\n    padding: 0 0.8rem;\n  }\n  .navbar-brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    height: 45px;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    top: var(--navbar-height);\n    padding: 1.5rem;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%] {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    margin-bottom: 1.5rem;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-wrapper[_ngcontent-%COMP%] {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    min-height: 50px;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%] {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-button[_ngcontent-%COMP%] {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n}\n@media (max-width: 480px) {\n  [_ngcontent-%COMP%]:root {\n    --navbar-height: 55px;\n  }\n  .navbar-container[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n  }\n  .navbar-brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    top: var(--navbar-height);\n    padding: 1rem;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%] {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    margin-bottom: 1.5rem;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-wrapper[_ngcontent-%COMP%] {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    min-height: 50px;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%] {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .mobile-search-button[_ngcontent-%COMP%] {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n    padding: 1rem 1.2rem;\n    font-size: 1rem;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .mobile-portal-btn[_ngcontent-%COMP%] {\n    padding: 1rem 1.2rem;\n    font-size: 1rem;\n  }\n}\n.navbar-sticky[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\n/*# sourceMappingURL=navbar.css.map */'] });
var Navbar = _Navbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      FormsModule,
      RouterModule
    ], template: `<mat-toolbar color="primary" class="navbar-sticky">\r
  <div class="navbar-container">\r
    <!-- Logo y barra de b\xFAsqueda a la izquierda -->\r
    <div class="left-section">\r
      <!-- Logo -->\r
      <div class="navbar-brand">\r
        <a routerLink="/" class="logo-link">\r
          <img src="assets/images/global/logo2.png" alt="Logo C&E IPS S.A.S" class="logo">\r
        </a>\r
      </div>\r
      \r
    </div>\r
    \r
    <!-- Navegaci\xF3n a la derecha -->\r
    <div class="navbar-nav">\r
      <a mat-button routerLink="/" class="nav-link">\r
        <mat-icon>home</mat-icon>\r
        <span>INICIO</span>\r
      </a>\r
      <a mat-button routerLink="/sueroterapia" class="nav-link">\r
        <mat-icon>medical_services</mat-icon>\r
        <span>SUEROTERAPIA</span>\r
      </a>\r
      <a mat-button routerLink="/services" class="nav-link">\r
        <mat-icon>medical_services</mat-icon>\r
        <span>SERVICIOS</span>\r
      </a>\r
\r
      <a mat-button routerLink="/bussiness" class="nav-link">\r
        <mat-icon>groups</mat-icon>\r
        <span>NOSOTROS</span>\r
      </a>\r
      <a mat-button routerLink="/pqrs" class="nav-link">\r
        <mat-icon>call</mat-icon>\r
        <span>CONTACTO</span>\r
      </a>\r
      <a mat-raised-button routerLink="/admin/login" class="login-btn">\r
        <mat-icon>lock</mat-icon>\r
        <span>LOGIN</span>\r
      </a>\r
    </div>\r
    \r
    <!-- Bot\xF3n m\xF3vil -->\r
    <div class="mobile-toggle">\r
      <button mat-icon-button (click)="toggleMenu()" class="menu-btn">\r
        <mat-icon>{{ isMenuOpen ? 'close' : 'menu' }}</mat-icon>\r
      </button>\r
    </div>\r
  </div>\r
</mat-toolbar>\r
\r
<!-- Men\xFA m\xF3vil -->\r
<div class="mobile-menu" [class.active]="isMenuOpen">\r
  <!-- Nueva Barra de b\xFAsqueda m\xF3vil -->\r
  <div class="mobile-search-container">\r
    <div class="mobile-search-wrapper">\r
      <input \r
        type="text" \r
        placeholder="Buscar servicios..." \r
        [(ngModel)]="searchQuery"\r
        (keyup.enter)="onSearch()"\r
        class="mobile-search-input">\r
      <button \r
        (click)="onSearch()"\r
        class="mobile-search-button">\r
        <mat-icon>search</mat-icon>\r
      </button>\r
    </div>\r
  </div>\r
  \r
  <a mat-button routerLink="/" class="mobile-nav-link" (click)="closeMenu()">\r
    <mat-icon>home</mat-icon>\r
    <span>INICIO</span>\r
  </a>\r
  <a mat-button routerLink="/sueroterapia" class="mobile-nav-link" (click)="closeMenu()">\r
    <mat-icon>medical_services</mat-icon>\r
    <span>SUEROTERAPIA</span>\r
  </a>\r
  <a mat-button routerLink="/services" class="mobile-nav-link" (click)="closeMenu()">\r
    <mat-icon>medical_services</mat-icon>\r
    <span>SERVICIOS</span>\r
  </a>\r
  <a mat-button routerLink="/bussiness" class="mobile-nav-link" (click)="closeMenu()">\r
    <mat-icon>groups</mat-icon>\r
    <span>NOSOTROS</span>\r
  </a>\r
  <a mat-button routerLink="/pqrs" class="mobile-nav-link" (click)="closeMenu()">\r
    <mat-icon>call</mat-icon>\r
    <span>CONTACTO</span>\r
  </a>\r
  <a mat-raised-button routerLink="/admin/login" class="mobile-login-btn" (click)="closeMenu()">\r
    <mat-icon>lock</mat-icon>\r
    <span>LOGIN</span>\r
  </a>\r
</div>`, styles: ['/* src/app/layout/navbar/navbar.scss */\n:root {\n  --navbar-height: 70px;\n  --primary-color: #005A9C;\n  --accent-color: #00B5E2;\n  --white: #ffffff;\n  --text-light: #f8f9fa;\n  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  --transition: all 0.3s ease;\n}\n:host {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\nmat-toolbar {\n  background: #003d7a;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  color: var(--white);\n  height: var(--navbar-height);\n  padding: 0 !important;\n  box-shadow: var(--shadow);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.navbar-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 2rem;\n  gap: 1.5rem;\n}\n.left-section {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  flex: 1;\n}\n.navbar-brand {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.navbar-brand .logo-link {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: var(--transition);\n  padding: 0.5rem;\n  border-radius: 12px;\n}\n.navbar-brand .logo-link:hover {\n  transform: scale(1.05);\n  background: rgba(255, 255, 255, 0.1);\n}\n.navbar-brand .logo {\n  height: 60px;\n  width: auto;\n  filter: brightness(0) invert(1);\n  transition: var(--transition);\n}\n.search-container {\n  flex: 0 0 auto;\n  width: 300px;\n}\n.search-container .search-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 30px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  transition: var(--transition);\n  overflow: hidden;\n}\n.search-container .search-wrapper:hover {\n  background: rgb(255, 255, 255);\n  border-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.search-container .search-wrapper:focus-within {\n  background: rgb(255, 255, 255);\n  border-color: var(--accent-color);\n  box-shadow: 0 4px 20px rgba(0, 181, 226, 0.1490196078);\n}\n.search-container .search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 0.8rem 1.2rem;\n  font-size: 0.95rem;\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.search-container .search-input::placeholder {\n  color: rgba(0, 90, 156, 0.6);\n  font-weight: 400;\n}\n.search-container .search-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #003d7a;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin: 0.3rem;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.search-container .search-button:hover {\n  background: #0099cc;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(0, 181, 226, 0.3);\n}\n.search-container .search-button mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.navbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  flex-shrink: 0;\n}\n.navbar-nav .nav-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--white);\n  text-decoration: none;\n  padding: 0.7rem 1.2rem;\n  border-radius: 25px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: var(--transition);\n  background: transparent;\n  border: 2px solid transparent;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.navbar-nav .nav-link::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  transition: left 0.5s ease;\n}\n.navbar-nav .nav-link:hover::before {\n  left: 100%;\n}\n.navbar-nav .nav-link mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--white);\n  transition: var(--transition);\n}\n.navbar-nav .nav-link span {\n  position: relative;\n  z-index: 1;\n}\n.navbar-nav .nav-link:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: var(--accent-color);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n}\n.navbar-nav .nav-link:hover mat-icon {\n  color: var(--accent-color);\n  transform: scale(1.1);\n}\n.navbar-nav .nav-link:active {\n  transform: translateY(0);\n}\n.navbar-nav .login-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #f7931e 100%);\n  color: var(--white) !important;\n  padding: 0.7rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: var(--transition);\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);\n}\n.navbar-nav .login-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.navbar-nav .login-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.5);\n  background:\n    linear-gradient(\n      135deg,\n      #e55a25 0%,\n      #e07818 100%);\n}\n.navbar-nav .portal-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-color) 0%,\n      #0099cc 100%);\n  color: var(--white);\n  padding: 0.7rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(0, 181, 226, 0.3);\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.navbar-nav .portal-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.navbar-nav .portal-btn:hover::before {\n  left: 100%;\n}\n.navbar-nav .portal-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--white);\n  transition: var(--transition);\n}\n.navbar-nav .portal-btn span {\n  position: relative;\n  z-index: 1;\n}\n.navbar-nav .portal-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0099cc 0%,\n      var(--accent-color) 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(0, 181, 226, 0.4);\n}\n.navbar-nav .portal-btn:hover mat-icon {\n  transform: scale(1.1);\n}\n.navbar-nav .portal-btn:active {\n  transform: translateY(-1px);\n}\n.mobile-toggle {\n  display: none;\n}\n.mobile-toggle .menu-btn {\n  color: var(--white);\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  transition: var(--transition);\n  border: 2px solid transparent;\n}\n.mobile-toggle .menu-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: var(--accent-color);\n  transform: scale(1.1);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.mobile-toggle .menu-btn mat-icon {\n  font-size: 1.3rem;\n  color: var(--white);\n}\n.mobile-menu {\n  display: none;\n  position: fixed;\n  top: var(--navbar-height);\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.98);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  padding: 2rem;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n  z-index: 999;\n  flex-direction: column;\n  gap: 1rem;\n  border-bottom: 1px solid rgba(0, 90, 156, 0.1);\n}\n.mobile-menu.active {\n  display: flex !important;\n}\n.mobile-menu .mobile-search-container {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  display: block !important;\n}\n.mobile-menu .mobile-search-container .mobile-search-wrapper {\n  position: relative;\n  display: flex !important;\n  align-items: center;\n  background: rgb(255, 255, 255);\n  border-radius: 25px;\n  border: 2px solid rgba(0, 90, 156, 0.2);\n  transition: var(--transition);\n  overflow: hidden;\n  width: 100%;\n  min-height: 50px;\n}\n.mobile-menu .mobile-search-container .mobile-search-wrapper:hover {\n  background: rgb(255, 255, 255);\n  border-color: rgba(0, 90, 156, 0.3);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.mobile-menu .mobile-search-container .mobile-search-wrapper:focus-within {\n  background: rgb(255, 255, 255);\n  border-color: var(--accent-color);\n  box-shadow: 0 4px 20px rgba(0, 181, 226, 0.15);\n}\n.mobile-menu .mobile-search-container .mobile-search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 1rem 1.2rem;\n  font-size: 1rem;\n  color: var(--primary-color);\n  font-weight: 500;\n  width: 100%;\n  display: block !important;\n}\n.mobile-menu .mobile-search-container .mobile-search-input::placeholder {\n  color: rgba(0, 90, 156, 0.6);\n  font-weight: 400;\n}\n.mobile-menu .mobile-search-container .mobile-search-button {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  background: var(--accent-color);\n  color: var(--white);\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin: 0.3rem;\n  cursor: pointer;\n  transition: var(--transition);\n  flex-shrink: 0;\n}\n.mobile-menu .mobile-search-container .mobile-search-button:hover {\n  background: #0099cc;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(0, 181, 226, 0.3);\n}\n.mobile-menu .mobile-search-container .mobile-search-button mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.mobile-menu .mobile-nav-link {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: var(--primary-color);\n  text-decoration: none;\n  padding: 1.2rem 1.5rem;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: var(--transition);\n  background: transparent;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n.mobile-menu .mobile-nav-link mat-icon {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--primary-color);\n  transition: var(--transition);\n}\n.mobile-menu .mobile-nav-link:hover {\n  background: rgba(0, 181, 226, 0.1);\n  border-color: var(--accent-color);\n  transform: translateX(8px);\n  box-shadow: 0 4px 15px rgba(0, 181, 226, 0.15);\n}\n.mobile-menu .mobile-nav-link:hover mat-icon {\n  color: var(--accent-color);\n  transform: scale(1.1);\n}\n.mobile-menu .mobile-login-btn {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #f7931e 100%);\n  color: var(--white) !important;\n  padding: 1.2rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-decoration: none;\n  margin: 0.5rem 1.5rem;\n  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);\n  border: none;\n  cursor: pointer;\n}\n.mobile-menu .mobile-login-btn mat-icon {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.mobile-menu .mobile-login-btn:hover {\n  transform: translateX(4px);\n  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.5);\n}\n.mobile-menu .mobile-portal-btn {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-color) 0%,\n      #0099cc 100%);\n  color: var(--white);\n  padding: 1.2rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-decoration: none;\n  transition: var(--transition);\n  box-shadow: 0 4px 15px rgba(0, 181, 226, 0.3);\n  border: none;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n.mobile-menu .mobile-portal-btn mat-icon {\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--white);\n  transition: var(--transition);\n}\n.mobile-menu .mobile-portal-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0099cc 0%,\n      var(--accent-color) 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 181, 226, 0.4);\n}\n.mobile-menu .mobile-portal-btn:hover mat-icon {\n  transform: scale(1.1);\n}\n@media (max-width: 1200px) {\n  .navbar-container {\n    padding: 0 1.5rem;\n  }\n  .search-container {\n    width: 280px;\n  }\n  .navbar-nav .nav-link {\n    padding: 0.6rem 1rem;\n    font-size: 0.85rem;\n  }\n  .navbar-nav .nav-link mat-icon {\n    font-size: 1rem;\n    width: 1rem;\n    height: 1rem;\n  }\n  .navbar-nav .portal-btn {\n    padding: 0.6rem 1.2rem;\n    font-size: 0.85rem;\n  }\n  .navbar-nav .portal-btn mat-icon {\n    font-size: 1rem;\n    width: 1rem;\n    height: 1rem;\n  }\n}\n@media (max-width: 992px) {\n  :root {\n    --navbar-height: 65px;\n  }\n  .navbar-nav {\n    display: none;\n  }\n  .search-container {\n    display: none;\n  }\n  .mobile-toggle {\n    display: block;\n  }\n  .navbar-container {\n    padding: 0 1rem;\n  }\n  .navbar-brand .logo {\n    height: 50px;\n  }\n  .left-section {\n    gap: 1.5rem;\n  }\n  .mobile-menu {\n    display: none;\n  }\n  .mobile-menu.active {\n    display: flex !important;\n  }\n  .mobile-menu .mobile-search-container {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-wrapper {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-input {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-button {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n}\n@media (max-width: 768px) {\n  :root {\n    --navbar-height: 60px;\n  }\n  .navbar-container {\n    padding: 0 0.8rem;\n  }\n  .navbar-brand .logo {\n    height: 45px;\n  }\n  .mobile-menu {\n    top: var(--navbar-height);\n    padding: 1.5rem;\n  }\n  .mobile-menu .mobile-search-container {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    margin-bottom: 1.5rem;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-wrapper {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    min-height: 50px;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-input {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-button {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n}\n@media (max-width: 480px) {\n  :root {\n    --navbar-height: 55px;\n  }\n  .navbar-container {\n    padding: 0 0.5rem;\n  }\n  .navbar-brand .logo {\n    height: 40px;\n  }\n  .mobile-menu {\n    top: var(--navbar-height);\n    padding: 1rem;\n  }\n  .mobile-menu .mobile-search-container {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    margin-bottom: 1.5rem;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-wrapper {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    min-height: 50px;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-input {\n    display: block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu .mobile-search-container .mobile-search-button {\n    display: flex !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n  }\n  .mobile-menu .mobile-nav-link {\n    padding: 1rem 1.2rem;\n    font-size: 1rem;\n  }\n  .mobile-menu .mobile-portal-btn {\n    padding: 1rem 1.2rem;\n    font-size: 1rem;\n  }\n}\n.navbar-sticky {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\n/*# sourceMappingURL=navbar.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/layout/navbar/navbar.ts", lineNumber: 29 });
})();

// src/app/layout/footer/footer.ts
var _Footer = class _Footer {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
};
_Footer.\u0275fac = function Footer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Footer)();
};
_Footer.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 59, vars: 1, consts: [[1, "footer"], [1, "container", "footer-grid"], [1, "footer-col"], ["src", "/assets/images/global/logo.png", "alt", "Logo C&E IPS S.A.S", 1, "footer-logo"], ["href", "/services"], ["href", "/bussiness"], ["href", "/question"], [1, "bi", "bi-geo-alt-fill"], [1, "bi", "bi-telephone-fill"], [1, "bi", "bi-envelope-fill"], [1, "social-links"], ["href", "https://www.facebook.com/profile.php?id=61579108148916", "aria-label", "Facebook"], [1, "bi", "bi-facebook"], ["href", "https://www.instagram.com/cuidandodeticeips", "aria-label", "Instagram"], [1, "bi", "bi-instagram"], ["href", "#", "aria-label", "tiktok"], [1, "bi", "bi-tiktok"], ["href", "#", "aria-label", "X"], [1, "bi", "bi-twitter-x"], ["href", "#", "aria-label", "LinkedIn"], [1, "bi", "bi-linkedin"], [1, "footer-bottom"], [1, "container"], ["href", "https://www.vooltlab.com"], ["href", "#"]], template: function Footer_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275domElement(3, "img", 3);
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5, "Comprometidos con tu salud y la de tu familia, ofreciendo un servicio humano y de calidad.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 2)(7, "h4");
    \u0275\u0275text(8, "Enlaces R\xE1pidos");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "ul")(10, "li")(11, "a", 4);
    \u0275\u0275text(12, "Servicios");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "li")(14, "a", 5);
    \u0275\u0275text(15, "Empresa");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "li")(17, "a", 6);
    \u0275\u0275text(18, "Preguntas Frecuentes");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(19, "div", 2)(20, "h4");
    \u0275\u0275text(21, "Contacto");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "ul")(23, "li");
    \u0275\u0275domElement(24, "i", 7);
    \u0275\u0275text(25, "Cali, Colombia");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "li");
    \u0275\u0275domElement(27, "i", 8);
    \u0275\u0275text(28, " +57 315 105 4448");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "li");
    \u0275\u0275domElement(30, "i", 9);
    \u0275\u0275text(31, " gerencia@ipscuidandodeti.com");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(32, "div", 2)(33, "h4");
    \u0275\u0275text(34, "S\xEDguenos");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "div", 10)(36, "a", 11);
    \u0275\u0275domElement(37, "i", 12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "a", 13);
    \u0275\u0275domElement(39, "i", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "a", 15);
    \u0275\u0275domElement(41, "i", 16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "a", 17);
    \u0275\u0275domElement(43, "i", 18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "a", 19);
    \u0275\u0275domElement(45, "i", 20);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(46, "div", 21)(47, "div", 22)(48, "p");
    \u0275\u0275text(49);
    \u0275\u0275domElementStart(50, "b")(51, "a", 23);
    \u0275\u0275text(52, "VooltLab Software");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(53, "p")(54, "a", 24);
    \u0275\u0275text(55, "T\xE9rminos y Condiciones");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(56, " | ");
    \u0275\u0275domElementStart(57, "a", 24);
    \u0275\u0275text(58, "Pol\xEDtica de Privacidad");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(49);
    \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " C&E IPS S.A.S. Todos los derechos reservados. - Desarrollado por: ");
  }
}, dependencies: [CommonModule], styles: ['\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #002d4d;\n  color: rgba(255, 255, 255, 0.8);\n  padding-top: 4rem;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  padding-bottom: 3rem;\n}\n.footer-col[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  height: 250px;\n  position: static;\n  margin-bottom: 1rem;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-size: 1.2rem;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -8px;\n  width: 40px;\n  height: 2px;\n  background-color: var(--secondary-color);\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: color 0.3s, padding-left 0.3s;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--white);\n  padding-left: 5px;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: var(--secondary-color);\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: var(--white);\n  font-size: 1.5rem;\n  margin-right: 1.5rem;\n  transition: transform 0.3s, color 0.3s;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  color: var(--secondary-color);\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  background-color: #001f33;\n  padding: 1.5rem 0;\n  text-align: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  font-size: 0.9rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n}\n.footer-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 1200px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    gap: 1.5rem;\n  }\n  .footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 992px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n  }\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n  }\n  .footer-col[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n    height: 45px;\n  }\n}\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-top: 2.5rem;\n  }\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding-bottom: 2rem;\n  }\n  .footer-col[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  .footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n  }\n  .footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 0.6rem;\n  }\n  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    margin-right: 1rem;\n  }\n  .footer-bottom[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin: 0.3rem;\n  }\n}\n@media (max-width: 480px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n  }\n  .footer-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n    padding-bottom: 1.5rem;\n  }\n  .footer-col[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  .footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n    font-size: 0.9rem;\n  }\n  .footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 8px;\n  }\n  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-right: 0.8rem;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=footer.css.map */'] });
var Footer = _Footer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule], template: '<footer class="footer">\r\n    <div class="container footer-grid">\r\n      <!-- Columna 1: Logo e Info -->\r\n      <div class="footer-col">\r\n        <img src="/assets/images/global/logo.png" alt="Logo C&E IPS S.A.S" class="footer-logo">\r\n        <p>Comprometidos con tu salud y la de tu familia, ofreciendo un servicio humano y de calidad.</p>\r\n      </div>\r\n  \r\n      <!-- Columna 2: Enlaces R\xE1pidos -->\r\n      <div class="footer-col">\r\n        <h4>Enlaces R\xE1pidos</h4>\r\n        <ul>\r\n          <li><a href="/services">Servicios</a></li>\r\n          <li><a href="/bussiness">Empresa</a></li>\r\n          <li><a href="/question">Preguntas Frecuentes</a></li>\r\n        </ul>\r\n      </div>\r\n  \r\n      <!-- Columna 3: Contacto -->\r\n      <div class="footer-col">\r\n        <h4>Contacto</h4>\r\n        <ul>\r\n          <li><i class="bi bi-geo-alt-fill"></i>Cali, Colombia</li>\r\n          <li><i class="bi bi-telephone-fill"></i> +57 315 105 4448</li>\r\n          <li><i class="bi bi-envelope-fill"></i> gerencia@ipscuidandodeti.com</li>\r\n        </ul>\r\n      </div>\r\n  \r\n      <!-- Columna 4: Redes Sociales -->\r\n      <div class="footer-col">\r\n        <h4>S\xEDguenos</h4>\r\n        <div class="social-links">\r\n          <a href="https://www.facebook.com/profile.php?id=61579108148916" aria-label="Facebook"><i class="bi bi-facebook"></i></a>\r\n          <a href="https://www.instagram.com/cuidandodeticeips" aria-label="Instagram"><i class="bi bi-instagram"></i></a>\r\n          <a href="#" aria-label="tiktok"><i class="bi bi-tiktok"></i></a>\r\n          <a href="#" aria-label="X"><i class="bi bi-twitter-x"></i></a>\r\n          <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="footer-bottom">\r\n      <div class="container">\r\n        <p>&copy; {{ currentYear }} C&E IPS S.A.S. Todos los derechos reservados. - Desarrollado por: <b><a href="https://www.vooltlab.com">VooltLab Software</a></b></p>\r\n        <p><a href="#">T\xE9rminos y Condiciones</a> | <a href="#">Pol\xEDtica de Privacidad</a></p>\r\n      </div>\r\n    </div>\r\n  </footer>', styles: ['/* src/app/layout/footer/footer.scss */\n.footer {\n  background-color: #002d4d;\n  color: rgba(255, 255, 255, 0.8);\n  padding-top: 4rem;\n}\n.footer-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  padding-bottom: 3rem;\n}\n.footer-col .footer-logo {\n  height: 250px;\n  position: static;\n  margin-bottom: 1rem;\n}\n.footer-col h4 {\n  color: var(--white);\n  font-size: 1.2rem;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.footer-col h4::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -8px;\n  width: 40px;\n  height: 2px;\n  background-color: var(--secondary-color);\n}\n.footer-col ul {\n  list-style: none;\n  padding: 0;\n}\n.footer-col ul li {\n  margin-bottom: 0.8rem;\n}\n.footer-col ul li a {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: color 0.3s, padding-left 0.3s;\n}\n.footer-col ul li a:hover {\n  color: var(--white);\n  padding-left: 5px;\n}\n.footer-col ul li i {\n  margin-right: 10px;\n  color: var(--secondary-color);\n}\n.social-links a {\n  display: inline-block;\n  color: var(--white);\n  font-size: 1.5rem;\n  margin-right: 1.5rem;\n  transition: transform 0.3s, color 0.3s;\n}\n.social-links a:hover {\n  transform: scale(1.2);\n  color: var(--secondary-color);\n}\n.footer-bottom {\n  background-color: #001f33;\n  padding: 1.5rem 0;\n  text-align: center;\n}\n.footer-bottom .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.footer-bottom p {\n  margin: 0.5rem;\n  font-size: 0.9rem;\n}\n.footer-bottom a {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n}\n.footer-bottom a:hover {\n  text-decoration: underline;\n}\n@media (max-width: 1200px) {\n  .footer-grid {\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    gap: 1.5rem;\n  }\n  .footer-col h4 {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 992px) {\n  .footer {\n    padding-top: 3rem;\n  }\n  .footer-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n  }\n  .footer-col .footer-logo {\n    height: 45px;\n  }\n}\n@media (max-width: 768px) {\n  .footer {\n    padding-top: 2.5rem;\n  }\n  .footer-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding-bottom: 2rem;\n  }\n  .footer-col .footer-logo {\n    height: 40px;\n  }\n  .footer-col h4 {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n  }\n  .footer-col ul li {\n    margin-bottom: 0.6rem;\n  }\n  .social-links a {\n    font-size: 1.3rem;\n    margin-right: 1rem;\n  }\n  .footer-bottom {\n    padding: 1rem 0;\n  }\n  .footer-bottom .container {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .footer-bottom p {\n    font-size: 0.8rem;\n    margin: 0.3rem;\n  }\n}\n@media (max-width: 480px) {\n  .footer {\n    padding-top: 2rem;\n  }\n  .footer-grid {\n    gap: 1rem;\n    padding-bottom: 1.5rem;\n  }\n  .footer-col .footer-logo {\n    height: 35px;\n  }\n  .footer-col h4 {\n    font-size: 0.9rem;\n  }\n  .footer-col ul li {\n    margin-bottom: 0.5rem;\n    font-size: 0.9rem;\n  }\n  .footer-col ul li i {\n    margin-right: 8px;\n  }\n  .social-links a {\n    font-size: 1.2rem;\n    margin-right: 0.8rem;\n  }\n  .footer-bottom p {\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=footer.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/layout/footer/footer.ts", lineNumber: 11 });
})();

// src/app/app.ts
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
function AppComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-footer");
  }
}
function AppComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "Consulta r\xE1pida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 4)(6, "mat-icon");
    \u0275\u0275text(7, "headphones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 2)(9, "span", 5);
    \u0275\u0275text(10, "Agenda tu cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 6);
    \u0275\u0275element(12, "img", 7);
    \u0275\u0275elementEnd()()()();
  }
}
var _AppComponent = class _AppComponent {
  constructor(router) {
    this.router = router;
    this.title = "IPSWEB";
    this.isAdminRoute = signal(false, ...ngDevMode ? [{ debugName: "isAdminRoute" }] : []);
    const platformId = inject(PLATFORM_ID);
    const isBrowser = isPlatformBrowser(platformId);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = event.urlAfterRedirects;
      const isAdmin = url.startsWith("/admin") || url.startsWith("/portal") || url.startsWith("/registro");
      this.isAdminRoute.set(isAdmin);
      if (isBrowser) {
        document.body.classList.toggle("is-admin-route", isAdmin);
      }
    });
    if (isBrowser) {
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      });
      this.initTypebot();
    }
  }
  initTypebot() {
    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";
    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

Typebot.initBubble({
  typebot: "customer-support-igk60g0",
  apiHost: "http://51.79.55.23:9091",
  previewMessage: { message: "\xBFTienes alguna pregunta! " },
  theme: {
    placement: "left",
    button: { backgroundColor: "#4A8BB2", size: "large" },
    chatWindow: { backgroundColor: "#F8F8F8" },
  },
});
`;
    document.body.append(typebotInitScript);
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Router));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 5, vars: 5, consts: [[1, "floating-contact-container"], [1, "floating-icons-stack"], [1, "floating-icon-wrapper"], [1, "floating-contact-text", "floating-text-top"], ["href", "https://t.me/+573151054448", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Contactar por Aud\xEDfonos", 1, "floating-icon-link", "floating-icon-top"], [1, "floating-contact-text", "floating-text-bottom"], ["href", "https://wa.me/+573151054448", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Contactar por WhatsApp", 1, "floating-icon-link", "floating-icon-bottom"], ["src", "assets/images/global/wsp.png", "alt", "WhatsApp"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppComponent_Conditional_0_Template, 1, 0, "app-navbar");
    \u0275\u0275elementStart(1, "main");
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AppComponent_Conditional_3_Template, 1, 0, "app-footer");
    \u0275\u0275conditionalCreate(4, AppComponent_Conditional_4_Template, 13, 0, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.isAdminRoute() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("main-content", !ctx.isAdminRoute());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.isAdminRoute() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isAdminRoute() ? 4 : -1);
  }
}, dependencies: [RouterOutlet, MatIconModule, MatIcon, Navbar, Footer, CommonModule], styles: ['\n\nmain[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\nmain.main-content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 200px);\n  padding-top: 35px;\n}\nmain[_ngcontent-%COMP%]:not(.main-content) {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  overflow: hidden;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbutton[_ngcontent-%COMP%], \na[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n  touch-action: manipulation;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n}\n@media (max-width: 768px) {\n  main[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 150px);\n  }\n}\n@media (max-width: 480px) {\n  main[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 120px);\n  }\n}\n.floating-contact-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n}\n.floating-icons-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n}\n.floating-icon-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.floating-contact-text[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 100%;\n  margin-right: 8px;\n  background-color: white;\n  color: #005A9C;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-size: 0.9rem;\n  white-space: nowrap;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(10px);\n  transition: all 0.3s ease;\n  pointer-events: none;\n}\n.floating-text-top[_ngcontent-%COMP%] {\n  color: #0088cc;\n}\n.floating-text-bottom[_ngcontent-%COMP%] {\n  color: #25d366;\n}\n.floating-icon-wrapper[_ngcontent-%COMP%]:hover   .floating-contact-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.floating-icon-link[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n.floating-icon-link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.floating-icon-link.floating-icon-top[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0088cc 0%,\n      #00a8ff 100%);\n  border: 2px solid #fff;\n}\n.floating-icon-link.floating-icon-top[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 136, 204, 0.3);\n}\n.floating-icon-link.floating-icon-top[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  color: white;\n}\n.floating-icon-link.floating-icon-bottom[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #25d366 0%,\n      #128c7e 100%);\n  border: 2px solid #fff;\n}\n.floating-icon-link.floating-icon-bottom[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);\n}\n.floating-icon-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: contain;\n  animation: _ngcontent-%COMP%_signal-pulse 2.5s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_signal-pulse {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n}\n@media (max-width: 768px) {\n  .floating-contact-container[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n  }\n  .floating-icon-link[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .floating-icon-link.floating-icon-top[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .floating-contact-text[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 6px 12px;\n  }\n}\n@media (max-width: 480px) {\n  .floating-contact-container[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n  }\n  .floating-icon-link[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n  .floating-icon-link.floating-icon-top[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .floating-contact-text[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 5px 10px;\n  }\n}\n/*# sourceMappingURL=app.css.map */'] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, MatIconModule, Navbar, Footer, CommonModule], template: '@if (!isAdminRoute()) {\n  <app-navbar></app-navbar>\n}\n\n<main [class.main-content]="!isAdminRoute()">\n  <router-outlet></router-outlet>\n</main>\n\n@if (!isAdminRoute()) {\n  <app-footer></app-footer>\n}\n\n<!-- Botones flotantes solo en el sitio p\xFAblico -->\n@if (!isAdminRoute()) {\n  <div class="floating-contact-container">\n    <div class="floating-icons-stack">\n      <div class="floating-icon-wrapper">\n        <span class="floating-contact-text floating-text-top">Consulta r\xE1pida</span>\n        <a href="https://t.me/+573151054448" target="_blank" rel="noopener noreferrer" class="floating-icon-link floating-icon-top" aria-label="Contactar por Aud\xEDfonos">\n          <mat-icon>headphones</mat-icon>\n        </a>\n      </div>\n      <div class="floating-icon-wrapper">\n        <span class="floating-contact-text floating-text-bottom">Agenda tu cita</span>\n        <a href="https://wa.me/+573151054448" target="_blank" rel="noopener noreferrer" class="floating-icon-link floating-icon-bottom" aria-label="Contactar por WhatsApp">\n          <img src="assets/images/global/wsp.png" alt="WhatsApp">\n        </a>\n      </div>\n    </div>\n  </div>\n}\n', styles: ['/* src/app/app.scss */\nmain {\n  overflow-x: hidden;\n}\nmain.main-content {\n  min-height: calc(100vh - 200px);\n  padding-top: 35px;\n}\nmain:not(.main-content) {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  overflow: hidden;\n}\n* {\n  box-sizing: border-box;\n}\nbutton,\na {\n  -webkit-tap-highlight-color: transparent;\n  touch-action: manipulation;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\nhtml {\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n}\n@media (max-width: 768px) {\n  main {\n    min-height: calc(100vh - 150px);\n  }\n}\n@media (max-width: 480px) {\n  main {\n    min-height: calc(100vh - 120px);\n  }\n}\n.floating-contact-container {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n}\n.floating-icons-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n}\n.floating-icon-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.floating-contact-text {\n  position: absolute;\n  right: 100%;\n  margin-right: 8px;\n  background-color: white;\n  color: #005A9C;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-size: 0.9rem;\n  white-space: nowrap;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(10px);\n  transition: all 0.3s ease;\n  pointer-events: none;\n}\n.floating-text-top {\n  color: #0088cc;\n}\n.floating-text-bottom {\n  color: #25d366;\n}\n.floating-icon-wrapper:hover .floating-contact-text {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.floating-icon-link {\n  display: flex;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n.floating-icon-link:hover {\n  transform: scale(1.1);\n}\n.floating-icon-link.floating-icon-top {\n  background:\n    linear-gradient(\n      135deg,\n      #0088cc 0%,\n      #00a8ff 100%);\n  border: 2px solid #fff;\n}\n.floating-icon-link.floating-icon-top:hover {\n  box-shadow: 0 6px 20px rgba(0, 136, 204, 0.3);\n}\n.floating-icon-link.floating-icon-top mat-icon {\n  font-size: 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  color: white;\n}\n.floating-icon-link.floating-icon-bottom {\n  background:\n    linear-gradient(\n      135deg,\n      #25d366 0%,\n      #128c7e 100%);\n  border: 2px solid #fff;\n}\n.floating-icon-link.floating-icon-bottom:hover {\n  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);\n}\n.floating-icon-link img {\n  width: 80%;\n  height: 80%;\n  object-fit: contain;\n  animation: signal-pulse 2.5s infinite ease-in-out;\n}\n@keyframes signal-pulse {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.8;\n  }\n}\n@media (max-width: 768px) {\n  .floating-contact-container {\n    bottom: 20px;\n    right: 20px;\n  }\n  .floating-icon-link {\n    width: 50px;\n    height: 50px;\n  }\n  .floating-icon-link.floating-icon-top mat-icon {\n    font-size: 1.5rem;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .floating-contact-text {\n    font-size: 0.8rem;\n    padding: 6px 12px;\n  }\n}\n@media (max-width: 480px) {\n  .floating-contact-container {\n    bottom: 15px;\n    right: 15px;\n  }\n  .floating-icon-link {\n    width: 45px;\n    height: 45px;\n  }\n  .floating-icon-link.floating-icon-top mat-icon {\n    font-size: 1.3rem;\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .floating-contact-text {\n    font-size: 0.75rem;\n    padding: 5px 10px;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 17 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
