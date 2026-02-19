'use server';
/**
 * @fileOverview A Genkit flow for generating a concise 'About Me' summary based on provided professional strengths.
 *
 * - generateAboutMeSummary - A function that handles the generation of the About Me summary.
 * - GenerateAboutMeSummaryInput - The input type for the generateAboutMeSummary function.
 * - GenerateAboutMeSummaryOutput - The return type for the generateAboutMeSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeSummaryInputSchema = z.object({
  strengths: z
    .array(z.string())
    .describe('A list of professional strengths as bullet points.'),
});
export type GenerateAboutMeSummaryInput = z.infer<
  typeof GenerateAboutMeSummaryInputSchema
>;

const GenerateAboutMeSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise and impactful "About Me" summary paragraph.'),
});
export type GenerateAboutMeSummaryOutput = z.infer<
  typeof GenerateAboutMeSummaryOutputSchema
>;

export async function generateAboutMeSummary(
  input: GenerateAboutMeSummaryInput
): Promise<GenerateAboutMeSummaryOutput> {
  return generateAboutMeSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMeSummaryPrompt',
  input: {schema: GenerateAboutMeSummaryInputSchema},
  output: {schema: GenerateAboutMeSummaryOutputSchema},
  prompt: `You are a professional copywriter. Generate a concise and impactful 'About Me' summary paragraph for a portfolio, highlighting the following key professional strengths.

Craft a summary that seamlessly integrates these points into a compelling narrative, focusing on value proposition.

Strengths:
{{#each strengths}}
- {{{this}}}
{{/each}}`,
});

const generateAboutMeSummaryFlow = ai.defineFlow(
  {
    name: 'generateAboutMeSummaryFlow',
    inputSchema: GenerateAboutMeSummaryInputSchema,
    outputSchema: GenerateAboutMeSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
