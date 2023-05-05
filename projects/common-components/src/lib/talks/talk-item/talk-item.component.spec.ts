import { MenteeTalksFacadeService } from "@jsmu/core";
import { TalkItemComponent } from "./talk-item.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { talkMock } from "../../../../../../src/assets/tests/talkMocks";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IterableNullCheckPipe } from "projects/shared/src/lib/pipes/not-null/iterable.null.check";

describe("TalkItemComponent", () => {
	let component: TalkItemComponent;
	let fixture: ComponentFixture<TalkItemComponent>;
	let facadeService: jasmine.SpyObj<MenteeTalksFacadeService>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalkItemComponent, IterableNullCheckPipe],
			providers: [{ provide: MenteeTalksFacadeService, useValue: facadeService }],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(TalkItemComponent);
		component = fixture.componentInstance;

		component.talk = talkMock;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
