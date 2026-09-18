import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShell } from '../../layout/page-shell/page-shell';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink, PageShell],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFoundPage {}
