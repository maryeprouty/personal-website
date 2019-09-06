import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  clearMind: Project;
  healthItForward: Project;
  attackAnalysis: Project;
  courier: Project;
  pounce: Project;

  constructor() {
  }

  ngOnInit() {
    // Adds each project to the projects array for html display
    this.clearMind = new Project('ClearMind', 'https://github.com/MarkOrestis/ClearMind',
      '../assets/clearmind.png');
    this.clearMind.setDescription('A cross-platform mobile application that calculates and updates users on changes ' +
      'in weather conditions, including barometric pressure, UV index, and different types of pollen counts, ' +
      'all of which may cause allergies, migraines, or sinus infections.');

    this.healthItForward = new Project('HealthItForward', 'https://github.com/adunford3/HealthItForward.github.io',
      '../assets/healthitforward.png');
    this.healthItForward.setDescription('A progressive web based platform that aims to connect patients, caregivers, ' +
      'doctors, and medical researchers. The goal of HealthItForward is to accumulate medical data ' +
      'in order to help advance current medicine, both alternative and allopathic,' +
      'as well as raise awareness of incurable diseases like Parkinson\'s.');

    this.attackAnalysis = new Project('Attack Analysis', 'https://github.com/maryeprouty/attack-analysis',
      '../assets/attack.png');
    this.attackAnalysis.setDescription('A Java program mapping malicious attack behaviors to common software weaknesses ' +
      'in order to prioritize technical debt in a security setting and refactor the' +
      'vulnerabilities that pose the greatest threat in a software system. This research project' +
      'was developed under the guidance of Dr. Clemente Izurieta, who co-authored the resulting' +
      'pilot study with me, which can be found below.');

    this.courier = new Project('Courier Replica', 'https://github.com/maryeprouty/courier-replica',
      '../assets/courier.png');
    this.courier.setDescription('A replica of the Microsoft Courier tablet designed in Java Swing. This application' +
      'features a multitude of drawing tools such as free-form digital ink, rubberbanding' +
      'rectangles, and pink sticky notes for typed text, as well as a Simple Gesture Recognizer' +
      'and animations between pages, all of which leverage the redraw pipeline.');

    this.pounce = new Project('Pounce!', 'https://github.com/maryeprouty/pounce',
      '../assets/calico.png');
    this.pounce.setDescription('A Gameboy game where you, a small bunny, must maneuver through hedge mazes' +
      'and avoid the evil cats lurking about. Four levels of fun with my own original' +
      'sprites and game design!');

    this.projects = [this.clearMind, this.healthItForward, this.attackAnalysis, this.courier,
      this.pounce];
  }

}
