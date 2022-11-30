class ToolTip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`); 
    console.log(prjItems);  
  }
}

class App {
  static init() {
    const activeProjects = new ProjectList("active");
    const finishedProjects = new ProjectList("finished");
  }
}

App.init();
