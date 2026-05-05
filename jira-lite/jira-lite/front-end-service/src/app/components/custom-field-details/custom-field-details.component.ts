import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomFieldService } from '../../services/custom-field.service';
import { CustomFieldDTO } from '../../types/api.types';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-custom-field-details',
  templateUrl: './custom-field-details.component.html',
  styleUrls: ['./custom-field-details.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class CustomFieldDetailsComponent implements OnInit {
  field: CustomFieldDTO | null = null;
  newName = '';
  success = false;
  error = '';

  constructor(private route: ActivatedRoute, private customFieldService: CustomFieldService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customFieldService.getById(id).subscribe(f => {
      this.field = f;
      this.newName = f.name;
    });
  }

  save(): void {
    if (!this.field || !this.newName.trim()) return;
    this.success = false;
    this.error = '';
    this.customFieldService.updateName(this.field.id, this.newName.trim()).subscribe({
      next: () => { this.success = true; if (this.field) this.field.name = this.newName; },
      error: () => { this.error = 'Failed to update field name.'; }
    });
  }
}
