import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomFieldService } from '../../services/custom-field.service';
import { CustomFieldDTO, FieldType } from '../../types/api.types';

@Component({
  standalone: false,
  selector: 'app-custom-field-list',
  templateUrl: './custom-field-list.component.html',
  styleUrls: ['./custom-field-list.component.scss']
})
export class CustomFieldListComponent implements OnInit {
  fields: CustomFieldDTO[] = [];
  newField = { name: '', fieldType: 'TEXT' as FieldType };
  readonly fieldTypes: FieldType[] = ['TEXT', 'NUMBER', 'DATE', 'SELECT'];

  constructor(private customFieldService: CustomFieldService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.customFieldService.getAll().subscribe(fields => this.fields = fields);
  }

  addField(): void {
    if (!this.newField.name.trim()) return;
    this.customFieldService.add({ name: this.newField.name.trim(), fieldType: this.newField.fieldType }).subscribe(() => {
      this.newField = { name: '', fieldType: 'TEXT' };
      this.load();
    });
  }

  deleteField(id: number): void {
    this.customFieldService.delete(id).subscribe(() => this.load());
  }

  editField(id: number): void {
    this.router.navigate(['/admin/custom-fields', id]);
  }
}
