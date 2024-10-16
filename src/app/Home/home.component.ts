import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from "../shared/components/event-card/event-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, MatSelectModule, EventCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent { }
