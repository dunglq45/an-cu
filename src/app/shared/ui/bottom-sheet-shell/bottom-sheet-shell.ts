import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet-shell',
  templateUrl: './bottom-sheet-shell.html',
  styleUrl: './bottom-sheet-shell.scss',
})
export class BottomSheetShell {
  open = model.required<boolean>();
  title = input('');
  resetLabel = input('Xoá lọc');

  reset = output<void>();

  close(): void {
    this.open.set(false);
  }
}
