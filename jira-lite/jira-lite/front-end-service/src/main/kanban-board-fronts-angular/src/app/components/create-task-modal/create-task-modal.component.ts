import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.scss'],
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskModalComponent {
  @Input() projectId!: number;
  @Input() initiatorId!: number;
  @Output() close = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<any>();

  summary = '';
  description = '';

  submit() {
    if (this.summary.trim()) {
      this.taskCreated.emit({
        summary: this.summary,
        description: this.description,
        status: 'TODO',
        assigneeId: null,
        initiatorId: this.initiatorId,
        projectId: this.projectId
      });
      this.close.emit();
    }
  }

  closeModal() {
    this.close.emit();
  }
}
