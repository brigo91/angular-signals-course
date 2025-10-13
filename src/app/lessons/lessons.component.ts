import {Component, ElementRef, inject, signal, viewChild} from '@angular/core';
import {LessonsService} from "../services/lessons.service";
import {Lesson} from "../models/lesson.model";
import {LessonDetailComponent} from "./lesson-detail/lesson-detail.component";

@Component({
    selector: 'lessons',
    imports: [
        LessonDetailComponent
    ],
    templateUrl: './lessons.component.html',
    styleUrl: './lessons.component.scss'
})
export class LessonsComponent {
    
    mode = signal<'master' | 'detail'>("master");
    
    lessons = signal<Lesson[]>([]);
    
    selectedLesson = signal<Lesson | null>(null);
    
    lessonService = inject(LessonsService);
    
    onLessonUpdated($event: Event) {
    throw new Error('Method not implemented.');
    }
    onCancel() {
    throw new Error('Method not implemented.');
    }
    onLessonSelected(_t10: Lesson) {
    throw new Error('Method not implemented.');
    }
    onSearch() {
    throw new Error('Method not implemented.');
    }

}
