import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export enum ListType {
	USERS = "users",
	LESSONS = "lessons"
}

@Injectable()
export abstract class DataBaseService<T> {
	constructor(private http: HttpClient) {}

	protected getData<T>(listType: ListType): Observable<T> {
		return this.http.get<T>(`${environment.firebaseConfig.databaseURL}/${listType}.json`);
	}

	protected saveData<T>(listType: ListType, newData: T): Observable<T> {
		return this.http.post<T>(
			`${environment.firebaseConfig.databaseURL}/${listType}.json`,
			newData
		);
	}
}
