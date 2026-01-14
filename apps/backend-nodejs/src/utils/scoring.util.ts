export function score(skillMatch: boolean, experience: number) {
  let score = skillMatch ? 70 : 30;
  score += Math.min(experience * 5, 30);
  return score;
}
