import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno'
import { ALUMNOS } from '../mock-alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {
  alumnos = ALUMNOS;
  selectedAlumno: Alumno;

  constructor() { }

  ngOnInit() {
  }

  onSelect(alumno: Alumno): void {
    this.selectedAlumno = alumno;
  }

  evento1():void{
    console.log("Se dio click")
  }
}
