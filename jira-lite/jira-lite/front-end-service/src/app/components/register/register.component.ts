import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, CommonModule, RouterLink]
})
export class RegisterComponent {
  form = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  submit() {
    this.authService.register(this.form).subscribe({
      next: () => {
        alert('✅ Registered!');
        setTimeout(() => this.router.navigate(['/login']), 100); // ← тестова затримка
      },
      error: err => {
        console.error('Register error:', err);
        const msg = typeof err.error === 'string'
          ? err.error
          : err.error?.message || 'Registration failed';
        alert(msg);
      }
    });
  }
}
