/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PainPoint {
  id: string;
  text: string;
  iconName: string;
  description: string;
}

export interface GrowthStep {
  letter: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
}

export interface WeeklyMilestone {
  week: string;
  title: string;
  badge: string;
  description: string;
  items: string[];
}

export interface AudiencePersona {
  role: string;
  description: string;
  iconName: string;
}

export interface DiagnosticQuestion {
  id: string;
  text: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}

export interface DiagnosticResponse {
  name: string;
  email: string;
  phone?: string;
  answers: Record<string, number>;
}
