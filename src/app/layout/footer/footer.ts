import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  variant = input<'full' | 'compact'>('full');
  compactNote = input('Quy chế hoạt động · Chính sách bảo mật');
}
