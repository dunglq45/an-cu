import { Component, input } from '@angular/core';
import { Agent } from '../../../core/models/agent.model';
import { AvatarInitials } from '../avatar-initials/avatar-initials';

@Component({
  selector: 'app-agent-card',
  imports: [AvatarInitials],
  templateUrl: './agent-card.html',
  styleUrl: './agent-card.scss',
})
export class AgentCard {
  agent = input.required<Agent>();
  variant = input<'full' | 'condensed'>('full');
}
