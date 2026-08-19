import { SectionMeta, Topic, TopicSectionId } from '../types/topic';
import { tensesTopic } from './grammar/tenses';
import { subjectVerbAgreementTopic } from './grammar/subject-verb-agreement';
import { articlesTopic } from './grammar/articles';

export const IELTS_SECTIONS: SectionMeta[] = [
  {
    id: 'grammar',
    title: 'Grammar',
    description: 'Master sentence structures, tenses, articles, prepositions, and grammatical accuracy for IELTS Writing and Speaking.',
    iconName: 'BookOpen',
    isAvailable: true,
    topicCount: 3
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary',
    description: 'Academic Word List (AWL), topic-specific vocabulary, collocations, and idioms for Band 7+ score.',
    iconName: 'Sparkles',
    isAvailable: false,
    topicCount: 0
  },
  {
    id: 'reading',
    title: 'Reading',
    description: 'Strategies for Skimming, Scanning, True/False/Not Given, Matching Headings, and time management.',
    iconName: 'FileText',
    isAvailable: false,
    topicCount: 0
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Task 1 data reports, diagrams, maps, and Task 2 essay templates, argument structuring, and cohesion.',
    iconName: 'PenTool',
    isAvailable: false,
    topicCount: 0
  },
  {
    id: 'listening',
    title: 'Listening',
    description: 'Note-taking skills, map labeling, multiple choice techniques, and accent familiarity practice.',
    iconName: 'Headphones',
    isAvailable: false,
    topicCount: 0
  },
  {
    id: 'speaking',
    title: 'Speaking',
    description: 'Part 1 intro templates, Part 2 cue-card structures, Part 3 deep discussions, and fluency drills.',
    iconName: 'Mic',
    isAvailable: false,
    topicCount: 0
  }
];

/**
 * Main registry of study topics in strict chronological study order.
 * Order:
 * 1. Tenses
 * 2. Subject-Verb Agreement
 * 3. Articles: A / An / The
 */
const topicsList: Topic[] = [
  tensesTopic,
  subjectVerbAgreementTopic,
  articlesTopic
];

export const getAllTopics = (): Topic[] => {
  return topicsList;
};

export const getTopicBySlug = (slug: string): Topic | undefined => {
  return topicsList.find((topic) => topic.slug.toLowerCase() === slug.toLowerCase());
};

export const getTopicsBySection = (sectionId: TopicSectionId): Topic[] => {
  return topicsList.filter((topic) => topic.section === sectionId);
};

export const getSectionMeta = (sectionId: TopicSectionId): SectionMeta | undefined => {
  const meta = IELTS_SECTIONS.find((sec) => sec.id === sectionId);
  if (meta) {
    const count = getTopicsBySection(sectionId).length;
    return {
      ...meta,
      topicCount: count,
      isAvailable: count > 0
    };
  }
  return undefined;
};
