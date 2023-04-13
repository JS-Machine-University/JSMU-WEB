import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentee } from '../models/mentee'; 
import { ListType } from '../models/list-type';
import { DataBaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class MenteeService {

  constructor(private db: DataBaseService<any>) {}

  public getTalks(): Observable<any[]> {
		return this.db.getData<any[]>(ListType.MENTEE);
	}
}
