import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageShell } from '../../layout/page-shell/page-shell';
import { Breadcrumb } from '../../shared/ui/breadcrumb/breadcrumb';
import { LeadForm } from '../../shared/ui/lead-form/lead-form';
import { Accordion } from '../../shared/ui/accordion/accordion';
import { FloorPlan } from './floor-plan/floor-plan';
import { GatedPricingTable } from './gated-pricing-table/gated-pricing-table';
import { MOCK_PROJECTS } from '../../core/data/mock-projects';

@Component({
  selector: 'app-project-detail-page',
  imports: [RouterLink, PageShell, Breadcrumb, LeadForm, Accordion, FloorPlan, GatedPricingTable],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetailPage {
  slug = input<string>('');

  project = computed(() => MOCK_PROJECTS.find((p) => p.slug === this.slug()) ?? MOCK_PROJECTS[0]);

  breadcrumbItems = computed(() => [
    { label: 'Trang chủ', link: '/' },
    { label: 'Dự án', link: '/' },
    { label: this.project().name },
  ]);

  activeSection = signal('tong-quan');

  readonly sectionNav = [
    { id: 'tong-quan', label: 'Tổng quan' },
    { id: 'mat-bang', label: 'Mặt bằng' },
    { id: 'bang-gia', label: 'Bảng giá' },
    { id: 'tien-do', label: 'Tiến độ' },
    { id: 'faq', label: 'Câu hỏi thường gặp' },
  ];

  selectSection(id: string): void {
    this.activeSection.set(id);
  }
}
