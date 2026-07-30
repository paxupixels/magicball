import { answers } from '$lib/answers';

export function giveRandomAnswer(): string {
	return answers[Math.floor(Math.random() * answers.length)];
}
