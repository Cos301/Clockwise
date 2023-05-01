import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllChatsComponent } from './get-all-chats.component';

describe('GetAllPostsComponent', () => {
    let component: GetAllChatsComponent;
    let fixture: ComponentFixture<GetAllChatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GetAllChatsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GetAllChatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
