import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentData } from './Model/student-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' }))
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'angular-expand-collapse-datatable';

  STUDENTS_DATA : StudentData[] =  [
    {
      id: 1,
      name: "Abby Jaskolski",
      age: 21,
      address: "India",
      isExpanded: false,
      subjects: [
        {
          name: "Bio",
          type: "Medical",
          grade: "A"
        },
        {
          name: "Chemistry",
          type: "Medical",
          grade: "A"
        },
        {
          name: "Physics",
          type: "Medical",
          grade: "A"
        }
      ]
    }, 
    {
      id: 2,
      name: "Abby Jaskolski",
      age: 21,
      address: "India",
      isExpanded: false,
      subjects: [
        {
          name: "Bio",
          type: "Medical",
          grade: "A"
        },
        {
          name: "Chemistry",
          type: "Medical",
          grade: "A"
        },
        {
          name: "Physics",
          type: "Medical",
          grade: "A"
        }
      ]
    }
  ];

  dataStudentsList : MatTableDataSource<StudentData> = new MatTableDataSource(this.STUDENTS_DATA);
  displayedStudentsColumnsList: string[] = ['id', 'name', 'age', 'address', 'actions'];

  ngOnInit() {
  }
}
