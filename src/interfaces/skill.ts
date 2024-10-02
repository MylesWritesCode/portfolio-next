type TechSkillRating = 'low' | 'medium' | 'high' | 'expert';
type SoftSkillRating = 'low' | 'medium' | 'high';

interface BaseSkill {
  icon: React.ReactNode;
  name: string;
}

interface TechSkill extends BaseSkill {
  type: 'tech';
  experience: TechSkillRating;
}

interface SoftSkill extends BaseSkill {
  type: 'soft';
  experience: SoftSkillRating;
}

export type Skill = TechSkill | SoftSkill;
