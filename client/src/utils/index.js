import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // Check to see if were not getting the same prompt twice in a row.
    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}