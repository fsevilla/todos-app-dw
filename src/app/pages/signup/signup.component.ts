import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SignupService } from '../../shared/services/signup.service';
import { SignupUser } from '../../shared/interfaces/signup-user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder, private signupService: SignupService, private router: Router) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: [() => this.comparePasswords()]
    });
  }

  signup() {
    if(this.form.valid) {
      const user: SignupUser = this.form.getRawValue();
      this.signupService.signup(user).subscribe({
        next: () => {
          this.router.navigate(['login']);
        },
        error: () => {
          alert('Invalid code');
        }
      });

    }
  }

  comparePasswords() {
    if(!this.form) return;
    
    const { password, confirm } = this.form.getRawValue();
    return password === confirm ? null : {
      mismatch: true
    }
  }
}
