import type { Skill } from '@/interfaces/skill';
import { AiOutlineKubernetes } from 'react-icons/ai';
import { FaAws, FaGolang } from 'react-icons/fa6';
import { IoGitMerge, IoLogoDocker, IoLogoJavascript, IoLogoPython, IoLogoReact } from 'react-icons/io5';
import { SiCsharp, SiPostgresql, SiRust, SiTypescript } from 'react-icons/si';

export const SKILLS: Skill[] = [
  { icon: <IoLogoJavascript size={24} />, type: 'tech', name: 'JavaScript', experience: 'expert' },
  { icon: <SiTypescript size={24} />, type: 'tech', name: 'TypeScript', experience: 'expert' },
  { icon: <IoLogoReact size={24} />, type: 'tech', name: 'React', experience: 'expert' },
  { icon: <SiRust size={24} />, type: 'tech', name: 'Rust', experience: 'high' },
  { icon: <FaGolang size={24} />, type: 'tech', name: 'Go', experience: 'high' },
  { icon: <IoGitMerge size={24} />, type: 'tech', name: 'Git', experience: 'high' },
  { icon: <IoLogoDocker size={24} />, type: 'tech', name: 'Docker', experience: 'high' },
  { icon: <SiPostgresql size={24} />, type: 'tech', name: 'SQL', experience: 'medium' },
  { icon: <FaAws size={24} />, type: 'tech', name: 'AWS', experience: 'medium' },
  { icon: <AiOutlineKubernetes size={24} />, type: 'tech', name: 'Kubernetes', experience: 'medium' },
  { icon: <IoLogoPython size={24} />, type: 'tech', name: 'Python', experience: 'medium' },
  { icon: <SiCsharp size={24} />, type: 'tech', name: 'C#', experience: 'medium' },
];
