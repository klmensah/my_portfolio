'use server';

import { generateAboutMeSummary } from '@/ai/flows/generate-about-me-summary-flow';

export async function generateSummaryAction(strengths: string[]) {
  try {
    const result = await generateAboutMeSummary({ strengths });
    return { summary: result.summary };
  } catch (error) {
    console.error('Error generating summary:', error);
    // In a real app, you'd want to log this error more robustly
    return { error: 'Failed to generate summary. Please try again.' };
  }
}
