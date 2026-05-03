import {
  ActivatedRoute,
  AllTasksComponent,
  AuthService,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  CommonModule,
  Component,
  DefaultValueAccessor,
  DragDropModule,
  EventEmitter,
  FormsModule,
  Input,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  Output,
  ProjectService,
  RecentProjectService,
  ReportsComponent,
  RequiredValidator,
  Router,
  RouterModule,
  RouterOutlet,
  SettingsComponent,
  SharedModule,
  SidebarComponent,
  TaskService,
  setClassMetadata,
  transferArrayItem,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NPQY6UCU.js";

// src/app/components/create-project-modal/create-project-modal.component.ts
var CreateProjectModalComponent = class _CreateProjectModalComponent {
  constructor() {
    this.close = new EventEmitter();
    this.projectCreated = new EventEmitter();
    this.name = "";
    this.description = "";
  }
  submit() {
    if (this.name.trim()) {
      this.projectCreated.emit({
        name: this.name.trim(),
        description: this.description.trim()
      });
      this.close.emit();
    }
  }
  closeModal() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function CreateProjectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateProjectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateProjectModalComponent, selectors: [["app-create-project-modal"]], outputs: { close: "close", projectCreated: "projectCreated" }, standalone: false, decls: 17, vars: 3, consts: [[1, "modal-backdrop"], [1, "modal-dialog", "bg-white", "p-4", "rounded", "shadow"], [1, "form-group", "mb-3"], [1, "form-label"], ["required", "", "autofocus", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-success", 3, "click", "disabled"]], template: function CreateProjectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u0440\u043E\u0435\u043A\u0442");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6, "\u041D\u0430\u0437\u0432\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0443");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function CreateProjectModalComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 2)(9, "label", 3);
        \u0275\u0275text(10, "\u041E\u043F\u0438\u0441");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "textarea", 5);
        \u0275\u0275twoWayListener("ngModelChange", function CreateProjectModalComponent_Template_textarea_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
        \u0275\u0275listener("click", function CreateProjectModalComponent_Template_button_click_13_listener() {
          return ctx.closeModal();
        });
        \u0275\u0275text(14, "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function CreateProjectModalComponent_Template_button_click_15_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(16, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.description);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.name.trim());
      }
    }, dependencies: [DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1050;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.32);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n/*# sourceMappingURL=create-project-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateProjectModalComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-create-project-modal", template: '<!-- src/app/components/create-project-modal/create-project-modal.component.html -->\n<div class="modal-backdrop">\n  <div class="modal-dialog bg-white p-4 rounded shadow">\n    <h5>\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u0440\u043E\u0435\u043A\u0442</h5>\n\n    <div class="form-group mb-3">\n      <label class="form-label">\u041D\u0430\u0437\u0432\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0443</label>\n      <input class="form-control" [(ngModel)]="name" required autofocus />\n    </div>\n\n    <div class="form-group mb-3">\n      <label class="form-label">\u041E\u043F\u0438\u0441</label>\n      <textarea class="form-control" rows="3" [(ngModel)]="description"></textarea>\n    </div>\n\n    <div class="d-flex justify-content-between">\n      <button class="btn btn-secondary" (click)="closeModal()">\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438</button>\n      <button class="btn btn-success" (click)="submit()" [disabled]="!name.trim()">\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438</button>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/components/create-project-modal/create-project-modal.component.scss */\n.modal-backdrop {\n  position: fixed;\n  z-index: 1050;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.32);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-backdrop {\n  pointer-events: auto;\n}\n.modal-dialog {\n  pointer-events: auto;\n}\n/*# sourceMappingURL=create-project-modal.component.css.map */\n"] }]
  }], null, { close: [{
    type: Output
  }], projectCreated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateProjectModalComponent, { className: "CreateProjectModalComponent", filePath: "src/app/components/create-project-modal/create-project-modal.component.ts", lineNumber: 10 });
})();

// src/app/modules/projects/projects-list.component.ts
function ProjectsListComponent_app_create_project_modal_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-project-modal", 6);
    \u0275\u0275listener("close", function ProjectsListComponent_app_create_project_modal_5_Template_app_create_project_modal_close_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateProjectModal = false);
    })("projectCreated", function ProjectsListComponent_app_create_project_modal_5_Template_app_create_project_modal_projectCreated_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleProjectCreated($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ProjectsListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275listener("click", function ProjectsListComponent_div_7_Template_div_click_1_listener() {
      const project_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openProject(project_r4));
    });
    \u0275\u0275elementStart(2, "button", 9);
    \u0275\u0275listener("click", function ProjectsListComponent_div_7_Template_button_click_2_listener($event) {
      const project_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteProject(project_r4, $event));
    });
    \u0275\u0275text(3, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u041F\u0440\u043E\u0435\u043A\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div")(6, "h5", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9, "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0434\u043B\u044F \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0442\u044F");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "i", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(project_r4.name);
  }
}
var ProjectsListComponent = class _ProjectsListComponent {
  constructor(projectService, recentProjectService, router) {
    this.projectService = projectService;
    this.recentProjectService = recentProjectService;
    this.router = router;
    this.projects = [];
    this.showCreateProjectModal = false;
  }
  ngOnInit() {
    this.projectService.getAll().subscribe((data) => this.projects = data);
  }
  openProject(project) {
    this.recentProjectService.setRecentProject({
      id: String(project.id),
      name: project.name,
      description: project.description
    });
    this.router.navigate(["/projects", project.id]);
  }
  createProject() {
    const name = prompt("\u041D\u0430\u0437\u0432\u0430 \u043F\u0440\u043E\u0454\u043A\u0442\u0443?");
    const description = prompt("\u041E\u043F\u0438\u0441 \u043F\u0440\u043E\u0454\u043A\u0442\u0443?");
    if (name) {
      this.projectService.createProject({ name, description: description || "" }).subscribe(() => {
        this.projectService.getAll().subscribe((data) => this.projects = data);
      });
    }
  }
  deleteProject(project, event) {
    event.stopPropagation();
    if (confirm(`\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u0440\u043E\u0454\u043A\u0442 "${project.name}"?`)) {
      this.projectService.deleteProject(project.id).subscribe(() => {
        this.projects = this.projects.filter((p) => p.id !== project.id);
      });
    }
  }
  handleProjectCreated(event) {
    this.projectService.createProject({ name: event.name, description: event.description }).subscribe(() => {
      this.projectService.getAll().subscribe((data) => this.projects = data);
    });
  }
  static {
    this.\u0275fac = function ProjectsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsListComponent)(\u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(RecentProjectService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsListComponent, selectors: [["app-projects-list"]], standalone: false, decls: 8, vars: 2, consts: [[1, "container", "mt-4"], [1, "h5", "fw-bold", "mb-4"], [1, "btn", "btn-primary", "mb-3", 3, "click"], [3, "close", "projectCreated", 4, "ngIf"], [1, "row", "row-cols-1", "row-cols-md-2", "g-3"], ["class", "col", 4, "ngFor", "ngForOf"], [3, "close", "projectCreated"], [1, "col"], [1, "project-card", "card", "border-0", "shadow-sm", "h-100", 3, "click"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "card-body", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-1"], [1, "card-text", "text-muted", "small", "mb-0"], [1, "bi", "bi-chevron-right", "fs-5", "text-muted"]], template: function ProjectsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function ProjectsListComponent_Template_button_click_3_listener() {
          return ctx.showCreateProjectModal = true;
        });
        \u0275\u0275text(4, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u041F\u0440\u043E\u0435\u043A\u0442");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ProjectsListComponent_app_create_project_modal_5_Template, 1, 0, "app-create-project-modal", 3);
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275template(7, ProjectsListComponent_div_7_Template, 11, 1, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.showCreateProjectModal);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.projects);
      }
    }, dependencies: [NgForOf, NgIf, CreateProjectModalComponent], styles: ["\n\n.project-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.project-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #212529;\n}\n.project-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=projects-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsListComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-projects-list", template: '<div class="container mt-4">\r\n  <h2 class="h5 fw-bold mb-4">\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432</h2>\r\n  <button class="btn btn-primary mb-3" (click)="showCreateProjectModal = true">\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u041F\u0440\u043E\u0435\u043A\u0442</button>\r\n  <app-create-project-modal\r\n    *ngIf="showCreateProjectModal"\r\n    (close)="showCreateProjectModal = false"\r\n    (projectCreated)="handleProjectCreated($event)">\r\n  </app-create-project-modal>\r\n  <div class="row row-cols-1 row-cols-md-2 g-3">\r\n    <div class="col" *ngFor="let project of projects">\r\n      <div class="project-card card border-0 shadow-sm h-100"\r\n           (click)="openProject(project)">\r\n        <button class="btn btn-sm btn-outline-secondary" (click)="deleteProject(project, $event)">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u041F\u0440\u043E\u0435\u043A\u0442</button>\r\n        <div class="card-body d-flex justify-content-between align-items-center">\r\n          <div>\r\n            <h5 class="card-title mb-1">{{ project.name }}</h5>\r\n            <p class="card-text text-muted small mb-0">\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0434\u043B\u044F \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0442\u044F</p>\r\n          </div>\r\n          <i class="bi bi-chevron-right fs-5 text-muted"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/modules/projects/projects-list.component.scss */\n.project-card {\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.project-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.project-card .card-title {\n  font-weight: 600;\n  color: #212529;\n}\n.project-card .card-text {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=projects-list.component.css.map */\n"] }]
  }], () => [{ type: ProjectService }, { type: RecentProjectService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsListComponent, { className: "ProjectsListComponent", filePath: "src/app/modules/projects/projects-list.component.ts", lineNumber: 13 });
})();

// src/app/models/column.model.ts
var Column = class {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }
};

// src/app/components/create-task-modal/create-task-modal.component.ts
var CreateTaskModalComponent = class _CreateTaskModalComponent {
  constructor() {
    this.close = new EventEmitter();
    this.taskCreated = new EventEmitter();
    this.summary = "";
    this.description = "";
  }
  submit() {
    if (this.summary.trim()) {
      this.taskCreated.emit({
        summary: this.summary,
        description: this.description,
        status: "TODO",
        assigneeId: null,
        initiatorId: this.initiatorId,
        projectId: this.projectId
      });
      this.close.emit();
    }
  }
  closeModal() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function CreateTaskModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateTaskModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateTaskModalComponent, selectors: [["app-create-task-modal"]], inputs: { projectId: "projectId", initiatorId: "initiatorId" }, outputs: { close: "close", taskCreated: "taskCreated" }, standalone: false, decls: 17, vars: 3, consts: [[1, "modal-backdrop"], [1, "modal-dialog", "bg-white", "p-4", "rounded", "shadow"], [1, "form-group", "mb-3"], [1, "form-label"], ["required", "", "autofocus", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-success", 3, "click", "disabled"]], template: function CreateTaskModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function CreateTaskModalComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.summary, $event) || (ctx.summary = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 2)(9, "label", 3);
        \u0275\u0275text(10, "\u041E\u043F\u0438\u0441");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "textarea", 5);
        \u0275\u0275twoWayListener("ngModelChange", function CreateTaskModalComponent_Template_textarea_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
        \u0275\u0275listener("click", function CreateTaskModalComponent_Template_button_click_13_listener() {
          return ctx.closeModal();
        });
        \u0275\u0275text(14, "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function CreateTaskModalComponent_Template_button_click_15_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(16, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.summary);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.description);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.summary.trim());
      }
    }, dependencies: [DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1050;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.32);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n/*# sourceMappingURL=create-task-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateTaskModalComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-create-task-modal", template: '<div class="modal-backdrop">\n  <div class="modal-dialog bg-white p-4 rounded shadow">\n    <h5>\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443</h5>\n\n    <div class="form-group mb-3">\n      <label class="form-label">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</label>\n      <input class="form-control" [(ngModel)]="summary" required autofocus />\n    </div>\n\n    <div class="form-group mb-3">\n      <label class="form-label">\u041E\u043F\u0438\u0441</label>\n      <textarea class="form-control" rows="3" [(ngModel)]="description"></textarea>\n    </div>\n\n    <div class="d-flex justify-content-between">\n      <button class="btn btn-secondary" (click)="closeModal()">\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438</button>\n      <button class="btn btn-success" (click)="submit()" [disabled]="!summary.trim()">\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438</button>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/components/create-task-modal/create-task-modal.component.scss */\n.modal-backdrop {\n  position: fixed;\n  z-index: 1050;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.32);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-backdrop {\n  pointer-events: auto;\n}\n.modal-dialog {\n  pointer-events: auto;\n}\n/*# sourceMappingURL=create-task-modal.component.css.map */\n"] }]
  }], null, { projectId: [{
    type: Input
  }], initiatorId: [{
    type: Input
  }], close: [{
    type: Output
  }], taskCreated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateTaskModalComponent, { className: "CreateTaskModalComponent", filePath: "src/app/components/create-task-modal/create-task-modal.component.ts", lineNumber: 9 });
})();

// src/app/components/main-view/main-view.component.ts
function MainViewComponent_app_create_task_modal_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-task-modal", 13);
    \u0275\u0275listener("close", function MainViewComponent_app_create_task_modal_8_Template_app_create_task_modal_close_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateTaskModal = false);
    })("taskCreated", function MainViewComponent_app_create_task_modal_8_Template_app_create_task_modal_taskCreated_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleTaskCreated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("projectId", ctx_r1.projectId)("initiatorId", ctx_r1.currentUserId);
  }
}
function MainViewComponent_div_15_div_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F464} Assignee: ", item_r6.assignee.name, "");
  }
}
function MainViewComponent_div_15_div_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DD} Reporter: ", item_r6.initiator.name, "");
  }
}
function MainViewComponent_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function MainViewComponent_div_15_div_4_Template_div_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openTask(item_r6));
    });
    \u0275\u0275elementStart(1, "h6", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275template(6, MainViewComponent_div_15_div_4_span_6_Template, 2, 1, "span", 22)(7, MainViewComponent_div_15_div_4_span_7_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23)(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const column_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.summary);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r6.assignee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.initiator);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", column_r4.name, " ");
  }
}
function MainViewComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275listener("cdkDropListDropped", function MainViewComponent_div_15_Template_div_cdkDropListDropped_3_listener($event) {
      const column_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event, column_r4.name));
    });
    \u0275\u0275template(4, MainViewComponent_div_15_div_4_Template, 11, 5, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(column_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", column_r4.tasks);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", column_r4.tasks);
  }
}
var MainViewComponent = class _MainViewComponent {
  constructor(projectService, route, router, taskService, authService) {
    this.projectService = projectService;
    this.route = route;
    this.router = router;
    this.taskService = taskService;
    this.authService = authService;
    this.board = {
      name: "",
      description: "",
      columns: [
        { name: "TODO", tasks: [] },
        { name: "IN_PROGRESS", tasks: [] },
        { name: "DONE", tasks: [] }
      ]
    };
    this.showCreateTaskModal = false;
  }
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.projectId = +id;
        this.loadProject();
        this.loadTasks();
      }
    });
    this.currentUserId = this.authService.getCurrentUser().id;
  }
  drop(event, newStatus) {
    const task = event.previousContainer.data[event.previousIndex];
    const oldStatus = task.status;
    if (newStatus === "DONE" && oldStatus !== "IN_PROGRESS") {
      alert('\u0417\u0430\u0434\u0430\u0447\u0443 \u043C\u043E\u0436\u043D\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u043B\u0438\u0448\u0435 \u0437\u0456 \u0441\u0442\u0430\u0442\u0443\u0441\u0443 "IN_PROGRESS"');
      return;
    }
    if (oldStatus === newStatus)
      return;
    const previousList = event.previousContainer.data;
    const currentList = event.container.data;
    const previousIndex = event.previousIndex;
    task.status = newStatus;
    this.taskService.updateTask(task).subscribe({
      next: () => {
        if (newStatus === "DONE") {
          this.loadTasks();
        } else {
          transferArrayItem(previousList, currentList, previousIndex, event.currentIndex);
        }
      },
      error: () => {
        task.status = oldStatus;
      }
    });
  }
  openTask(task) {
    this.router.navigate(["/task", task.id]);
  }
  loadProject() {
    this.projectService.getById(this.projectId).subscribe((project) => {
      this.board.name = project.name;
      this.board.description = project.description;
    });
  }
  loadTasks() {
    this.taskService.getTasksForProject(this.projectId).subscribe((tasks) => {
      const columnsMap = {
        TODO: [],
        IN_PROGRESS: [],
        DONE: []
      };
      for (const task of tasks) {
        if (task.status === "DONE")
          continue;
        const status = task.status || "TODO";
        if (columnsMap[status]) {
          columnsMap[status].push(task);
        }
      }
      this.board.columns = [
        new Column("TODO", columnsMap.TODO),
        new Column("IN_PROGRESS", columnsMap.IN_PROGRESS),
        new Column("DONE", [])
        // пустий, бо ми їх не відображаємо
      ];
    });
  }
  handleTaskCreated(task) {
    this.taskService.createTask(task).subscribe(() => this.loadTasks());
  }
  static {
    this.\u0275fac = function MainViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MainViewComponent)(\u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TaskService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainViewComponent, selectors: [["app-main-view"]], standalone: false, decls: 16, vars: 4, consts: [[1, "root"], [1, "navbar", "has-background-dark"], [1, "navbar-brand"], [1, "navbar-item"], [1, "app-name", "has-gradient-text"], [1, "btn", "btn-primary", 3, "click"], [3, "projectId", "initiatorId", "close", "taskCreated", 4, "ngIf"], [1, "board"], [1, "board-bar"], [1, "board-name"], [1, "board-wrapper"], ["cdkDropListGroup", "", 1, "board-columns"], ["class", "board-column", 4, "ngFor", "ngForOf"], [3, "close", "taskCreated", "projectId", "initiatorId"], [1, "board-column"], [1, "column-title"], ["cdkDropList", "", 1, "tasks-container", 3, "cdkDropListDropped", "cdkDropListData"], ["class", "task card shadow-sm mb-2 p-2", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "task", "card", "shadow-sm", "mb-2", "p-2", 3, "click"], [1, "mb-1", "fw-bold", "text-dark"], [1, "mb-1", "text-muted", "small"], [1, "d-flex", "flex-column", "small", "text-muted", "mt-2"], [4, "ngIf"], [1, "d-flex", "justify-content-end", "mt-2"], [1, "badge", "bg-light", "border", "text-uppercase", "small", "text-muted"]], template: function MainViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275listener("click", function MainViewComponent_Template_button_click_6_listener() {
          return ctx.showCreateTaskModal = true;
        });
        \u0275\u0275text(7, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, MainViewComponent_app_create_task_modal_8_Template, 1, 2, "app-create-task-modal", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "p", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
        \u0275\u0275template(15, MainViewComponent_div_15_Template, 5, 3, "div", 12);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.board.name);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.showCreateTaskModal);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.board.description);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.board.columns);
      }
    }, dependencies: [NgForOf, NgIf, CdkDropList, CdkDropListGroup, CdkDrag, CreateTaskModalComponent], styles: ['\n\n.root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.app-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n}\n.has-gradient-text[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(#13f7f4, #2af598);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n.board[_ngcontent-%COMP%]   .board-bar[_ngcontent-%COMP%] {\n  background: rgba(128, 128, 128, 0.5);\n  padding: 8px 15px;\n}\n.board[_ngcontent-%COMP%]   .board-bar[_ngcontent-%COMP%]   .board-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 0;\n  min-width: 300px;\n  margin: 50px;\n  padding: 25px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0;\n}\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  font-family: "Lato", sans-serif;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.tasks-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.task[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px 12px;\n  background: white;\n  border-bottom: solid 1px #ddd;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  box-shadow: 0 px 5px -3px rgba(0, 0, 0, 0.05), 0 3px 14px 2px rgba(0, 0, 0, 0.05);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.tasks-container.cdk-drop-list-dragging[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=main-view.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainViewComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-main-view", template: '<div class="root">\r\n  <div class="navbar has-background-dark">\r\n    <div class="navbar-brand">\r\n      <div class="navbar-item">\r\n        <h1 class="app-name has-gradient-text">{{board.name}}</h1>\r\n        <button class="btn btn-primary" (click)="showCreateTaskModal = true">\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443</button>\r\n        <app-create-task-modal\r\n          *ngIf="showCreateTaskModal"\r\n          [projectId]="projectId"\r\n          [initiatorId]="currentUserId"\r\n          (close)="showCreateTaskModal = false"\r\n          (taskCreated)="handleTaskCreated($event)">\r\n        </app-create-task-modal>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="board">\r\n\r\n    <div class="board-bar">\r\n      <p class="board-name">{{board.description}}</p>\r\n    </div>\r\n\r\n    <div class="board-wrapper">\r\n      <div class="board-columns" cdkDropListGroup>\r\n        <div class="board-column" *ngFor="let column of board.columns">\r\n          <div class="column-title">{{column.name}}</div>\r\n          <div\r\n            class="tasks-container"\r\n            cdkDropList\r\n            [cdkDropListData]="column.tasks"\r\n            (cdkDropListDropped)="drop($event, column.name)"\r\n          >\r\n            <div class="task card shadow-sm mb-2 p-2" *ngFor="let item of column.tasks"\r\n                 (click)="openTask(item)" cdkDrag>\r\n              <h6 class="mb-1 fw-bold text-dark">{{ item.summary }}</h6>\r\n              <p class="mb-1 text-muted small">{{ item.description }}</p>\r\n\r\n              <div class="d-flex flex-column small text-muted mt-2">\r\n                <span *ngIf="item.assignee">\u{1F464} Assignee: {{ item.assignee.name }}</span>\r\n                <span *ngIf="item.initiator">\u{1F4DD} Reporter: {{ item.initiator.name }}</span>\r\n              </div>\r\n\r\n              <div class="d-flex justify-content-end mt-2">\r\n    <span class="badge bg-light border text-uppercase small text-muted">\r\n      {{ column.name }}\r\n    </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/components/main-view/main-view.component.scss */\n.root {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.app-name {\n  font-size: 28px;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n}\n.has-gradient-text {\n  background: -webkit-linear-gradient(#13f7f4, #2af598);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.board {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n.board .board-bar {\n  background: rgba(128, 128, 128, 0.5);\n  padding: 8px 15px;\n}\n.board .board-bar .board-name {\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n}\n.board .board-wrapper {\n  display: flex;\n  flex-grow: 1;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.board .board-wrapper .board-columns {\n  display: flex;\n  flex-grow: 1;\n}\n.board .board-wrapper .board-columns .board-column {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 0;\n  min-width: 300px;\n  margin: 50px;\n  padding: 25px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.board .board-wrapper .board-columns .board-column:not(:first-child) {\n  margin-left: 0;\n}\n.board .board-wrapper .board-columns .board-column .column-title {\n  font-size: 20px;\n  font-weight: 800;\n  font-family: "Lato", sans-serif;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.tasks-container {\n  flex-grow: 1;\n}\n.task {\n  display: flex;\n  padding: 15px 12px;\n  background: white;\n  border-bottom: solid 1px #ddd;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  box-shadow: 0 px 5px -3px rgba(0, 0, 0, 0.05), 0 3px 14px 2px rgba(0, 0, 0, 0.05);\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=main-view.component.css.map */\n'] }]
  }], () => [{ type: ProjectService }, { type: ActivatedRoute }, { type: Router }, { type: TaskService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainViewComponent, { className: "MainViewComponent", filePath: "src/app/components/main-view/main-view.component.ts", lineNumber: 16 });
})();

// src/app/modules/projects/project-board.component.ts
var ProjectBoardComponent = class _ProjectBoardComponent {
  constructor(route, projectService) {
    this.route = route;
    this.projectService = projectService;
    this.project = null;
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.projectService.getById(id).subscribe((data) => this.project = data);
    this.projectService.setProject(this.project);
  }
  static {
    this.\u0275fac = function ProjectBoardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectBoardComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProjectService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectBoardComponent, selectors: [["app-projects-board"]], standalone: false, decls: 1, vars: 0, template: function ProjectBoardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-main-view");
      }
    }, dependencies: [MainViewComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectBoardComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-projects-board", template: "<app-main-view></app-main-view>\r\n" }]
  }], () => [{ type: ActivatedRoute }, { type: ProjectService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectBoardComponent, { className: "ProjectBoardComponent", filePath: "src/app/modules/projects/project-board.component.ts", lineNumber: 12 });
})();

// src/app/modules/projects/layouts/project-layout/project-layout.component.ts
var ProjectLayoutComponent = class _ProjectLayoutComponent {
  static {
    this.\u0275fac = function ProjectLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectLayoutComponent, selectors: [["app-project-layout"]], standalone: false, decls: 4, vars: 0, consts: [[1, "project-layout"], [1, "project-content"]], template: function ProjectLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterOutlet, SidebarComponent], styles: ["\n\n.project-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n.project-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 24px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=project-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectLayoutComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-project-layout", template: '<div class="project-layout">\r\n  <app-sidebar></app-sidebar>\r\n  <main class="project-content">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n', styles: ["/* src/app/modules/projects/layouts/project-layout/project-layout.component.scss */\n.project-layout {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n.project-content {\n  flex-grow: 1;\n  padding: 24px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=project-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectLayoutComponent, { className: "ProjectLayoutComponent", filePath: "src/app/modules/projects/layouts/project-layout/project-layout.component.ts", lineNumber: 9 });
})();

// src/app/modules/projects/projects-routing.module.ts
var routes = [
  { path: "", component: ProjectsListComponent },
  {
    path: ":id",
    component: ProjectLayoutComponent,
    children: [
      { path: "", component: ProjectBoardComponent },
      { path: "all-tasks", component: AllTasksComponent },
      { path: "reports", component: ReportsComponent },
      { path: "settings", component: SettingsComponent }
    ]
  }
];
var ProjectsRoutingModule = class _ProjectsRoutingModule {
  static {
    this.\u0275fac = function ProjectsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/projects/projects.module.ts
var ProjectsModule = class _ProjectsModule {
  static {
    this.\u0275fac = function ProjectsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ProjectsRoutingModule,
      FormsModule,
      SharedModule,
      DragDropModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ProjectsListComponent,
        ProjectBoardComponent,
        MainViewComponent,
        ProjectLayoutComponent,
        CreateTaskModalComponent,
        CreateProjectModalComponent
      ],
      imports: [
        CommonModule,
        ProjectsRoutingModule,
        FormsModule,
        SharedModule,
        DragDropModule
      ]
    }]
  }], null, null);
})();
export {
  ProjectsModule
};
//# sourceMappingURL=chunk-EUCXN6WZ.js.map
