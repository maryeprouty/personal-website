// Model for Project, including each html field necessary for display

export class Project {

  title: String;
  link: String;
  path: String;
  description: String;

  constructor(title, link, path) {
    this.title = title;
    this.link = link;
    this.path = path;
  }
  setDescription(description) {
    this.description = description;
  }

}
