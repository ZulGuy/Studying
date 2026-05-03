// src/app/components/create-project-modal/create-project-modal.component.ts
import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
  styleUrls: ['./create-project-modal.component.scss'],
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProjectModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() projectCreated = new EventEmitter<{ name: string, description: string }>();

  name = '';
  description = '';

  submit() {
    if (this.name.trim()) {
      this.projectCreated.emit({
        name: this.name.trim(),
        description: this.description.trim()
      });
      this.close.emit();
    }
  }

  closeModal() {
    this.close.emit();
  }
}
