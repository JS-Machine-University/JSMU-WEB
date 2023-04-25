import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { MenteeService } from '../../services/mentee.service';

@Component({
  selector: 'jsmu-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: ['./mentee.component.scss']
})
export class MenteeComponent implements OnInit {

  constructor(private menteeService: MenteeService) {
    

   }

 

  ngOnInit(): void {
 
  }

 
    
   
		
  };

 







