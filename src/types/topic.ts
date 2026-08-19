export type TopicSectionId = 
  | 'grammar' 
  | 'vocabulary' 
  | 'reading' 
  | 'writing' 
  | 'listening' 
  | 'speaking';

export interface SectionMeta {
  id: TopicSectionId;
  title: string;
  description: string;
  iconName: string;
  isAvailable: boolean;
  topicCount: number;
}

export interface CommonMistake {
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface IELTSApplicationTip {
  module: 'Writing' | 'Speaking' | 'Reading' | 'Listening';
  tip: string;
  example?: string;
}

export interface TenseDetail {
  id: string;
  title: string;
  formula: string;
  rule: string;
  examples: string[];
  whenToUse: string[];
  commonMistakes: CommonMistake[];
  ieltsTips?: IELTSApplicationTip[];
}

export interface TopicSubSection {
  id: string;
  title: string;
  overview?: string;
  tenses?: TenseDetail[];
  rules?: string[];
  examples?: string[];
  commonMistakes?: CommonMistake[];
  ieltsTips?: IELTSApplicationTip[];
}

export interface PracticeQuestion {
  id: string;
  question: string;
  type: 'mcq' | 'fill-blank';
  options?: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  section: TopicSectionId;
  sectionTitle: string;
  order: number;
  description: string;
  readTime: string;
  lastUpdated: string;
  overview: string;
  subsections: TopicSubSection[];
  summaryPoints: string[];
  ieltsOverview: string;
  practice: PracticeQuestion[];
  prevTopic?: { title: string; slug: string };
  nextTopic?: { title: string; slug: string };
}
