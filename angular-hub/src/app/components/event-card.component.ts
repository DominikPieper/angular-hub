import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Event} from "../models/event.model";
import {ContentFile} from "@analogjs/content";
import {RouterLink} from "@angular/router";
import {DatePipe, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-event-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <a class="flex w-full items-center gap-4" [href]="event.attributes.url" target="_blank" [attr.aria-labelledby]="event.attributes.title">
          <img class="rounded-xl" [ngSrc]="event.attributes.logo" height="80" width="80" priority alt="">
          <div class="text-start">
              <span class="font-bold text-[#BF25B9]" itemprop="date">{{event.attributes.date | date}}</span>
              <h3 [attr.id]="event.attributes.title" class="text-xl font-bold" itemprop="title">{{event.attributes.title}}</h3>
              <span class="text-gray-500" itemprop="location">{{event.attributes.location}}</span>
          </div>
      </a>
  `,
  imports: [
    RouterLink,
    DatePipe,
    NgOptimizedImage,
    NgIf
  ],
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        padding: 0.25rem;
      }
    `
  ]
})
export class EventCardComponent {
  @Input({required: true}) event!: ContentFile<Event>;
}