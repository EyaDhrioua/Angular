import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submit(): void {
    if (this.userForm.invalid) {
      return;
    }

    void this.router.navigate(['/registration/confirmation'], {
      state: { name: this.userForm.controls.username.value },
    });
  }
}
