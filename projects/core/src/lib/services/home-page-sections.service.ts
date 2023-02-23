import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HomePageSectionsService {
	constructor(private http: HttpClient) {}

	public getSections<HomePageSection>(): Observable<HomePageSection> {
		return this.http.get<HomePageSection>(`assets/sections.json`);
	}
}
