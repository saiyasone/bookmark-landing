import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    alert(`Congratulation ${this.form.value.email}`);
  }

  get isRequired(): boolean {
    return (
      this.f['email'].errors?.['required'] &&
      this.f['email'].invalid &&
      this.f['email'].touched
    );
  }

  get isEmail(): boolean {
    return this.f['email'].errors?.['email'];
  }
}
