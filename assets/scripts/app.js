class ToolTip {}

class ProjectItem {
  constructor(id, updateProjListFunc) {
    this.id = id;
    this.updateProjListHandler = updateProjListFunc;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn();
  }

  connectMoreInfoBtn() {}
  connectSwitchBtn() {
    const projectCardElement = document.getElementById(this.id);
    const switchBtn = projectCardElement.querySelector("button: last-of-type");
    switchBtn.addEventListener("click", this.updateProjListHandler);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;

    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)));
    }
  }

  setSwitchHandlerFunc(switchHandlerFunc) {
    this.switchHandler = switchHandlerFunc;
  }

  addProject() {
    console.log(this);
  }
  switchProject(projectId) {
    // this.projects = this.projects.filter(p => p.id !== projectId); This is another option to remove the card
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    this.projects.splice(projectIndex, 1);
  }
}

class App {
  static init() {
    const activeProjects = new ProjectList("active");
    const finishedProjects = new ProjectList("finished");
    activeProjects.setSwitchHandlerFunc(
      finishedProjects.addProject.bind(finishedProjects)
    );
    finishedProjects.setSwitchHandlerFunc(
      activeProjects.addProject.bind(activeProjects)
    );
  }
}

App.init();
