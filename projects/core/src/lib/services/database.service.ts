import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ListType } from "../models/list-type";

@Injectable()
export class DataBaseService<T> {
	constructor(private http: HttpClient) {}

	public getData<T>(listType: ListType): Observable<T> {
		return this.http.get<T>(`${environment.firebaseConfig.databaseURL}/${listType}.json`);
	}

	public saveData<T>(listType: ListType, newData: T): Observable<T> {
		return this.http.post<T>(
			`${environment.firebaseConfig.databaseURL}/${listType}.json`,
			newData
		);
	}

	public updateData<T>(listType: ListType, id: number, newData: T): Observable<T> {
		return this.http.patch<T>(
			`${environment.firebaseConfig.databaseURL}/${listType}/${id}.json`,
			newData
		);
	}
}
