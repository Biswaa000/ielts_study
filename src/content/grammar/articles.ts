import { Topic } from '../../types/topic';

export const articlesTopic: Topic = {
  id: 'articles',
  slug: 'articles',
  title: 'Articles: A / An / The',
  section: 'grammar',
  sectionTitle: 'Grammar',
  order: 3,
  description: 'Master the rules of definite (the), indefinite (a/an), and zero article (Ø), with explicit guidelines for IELTS Writing Task 1 & Task 2 general vs. specific statements.',
  readTime: '17 min read',
  lastUpdated: 'August 2026',
  overview: 'English has three articles: a, an, and the, alongside the zero article (Ø). In IELTS, article errors are among the most frequent grammatical mistakes candidates make. Master the core rule: a/an = one non-specific item; the = specific or unique item; Ø = things or uncountable concepts in general.',

  subsections: [
    {
      id: 'indefinite-articles',
      title: '1. Indefinite Articles: A vs AN',
      overview: 'Use a/an with singular countable nouns when referring to one non-specific item or stating a profession.',
      tenses: [
        {
          id: 'a-an-basics',
          title: 'A / AN — One Non-Specific Noun',
          formula: 'a/an + Singular Countable Noun',
          rule: 'Use "a" before consonant sounds and "an" before vowel sounds (determined by sound, not spelling).',
          examples: [
            'I bought a car. (One car, not specific)',
            'She is a student.',
            'I need a laptop.',
            'a university (starts with /yu/ consonant sound)',
            'a European country (starts with /yu/ sound)',
            'an apple | an engineer | an orange',
            'an hour (starts with silent /h/, vowel sound /our/)'
          ],
          whenToUse: [
            'First mention of a singular countable noun',
            'Stating jobs and professions (e.g. She is an engineer)'
          ],
          commonMistakes: [
            {
              incorrect: 'I am engineer.',
              correct: 'I am an engineer.',
              explanation: 'Professions with singular countable nouns must take an indefinite article.'
            },
            {
              incorrect: 'She is an university student.',
              correct: 'She is a university student.',
              explanation: '"University" begins with the consonant /y/ sound (/yuniversity/), so it takes "a".'
            },
            {
              incorrect: 'I bought a students book.',
              correct: 'I bought a student\'s book.',
              explanation: 'Never use a/an with plural nouns.'
            }
          ]
        }
      ]
    },
    {
      id: 'definite-article-the',
      title: '2. Definite Article: THE',
      overview: 'Use "the" when both speaker and listener know which specific item is being discussed.',
      tenses: [
        {
          id: 'the-specific-rules',
          title: 'Specific, Unique, & Mentioned Nouns',
          formula: 'First Mention → a/an | Second Mention → THE',
          rule: 'Use "the" when the noun was mentioned previously, when context makes it clear, for unique items (the Sun, the Internet), and with superlatives/ordinals.',
          examples: [
            'I saw a dog. The dog was very friendly. (First vs Second mention)',
            'I bought a laptop yesterday. The laptop cost $800.',
            'Please close the door. (Contextually known)',
            'the Sun | the Moon | the Earth | the Internet (Unique entities)',
            'the most important factor (Superlative)',
            'the first reason (Ordinal number)'
          ],
          whenToUse: [
            'Second or subsequent mentions of an item',
            'Unique global or environmental entities',
            'Superlatives (the best, the highest) and ordinals (the first, the second)'
          ],
          commonMistakes: [
            {
              incorrect: 'Internet has changed communication.',
              correct: 'The Internet has changed communication.',
              explanation: 'Unique global entities like the Internet take "the".'
            },
            {
              incorrect: 'Mount Everest is highest mountain.',
              correct: 'Mount Everest is the highest mountain.',
              explanation: 'Superlatives always require "the".'
            }
          ],
          ieltsTips: [
            {
              module: 'Writing',
              tip: 'Use ordinal phrases with "the" when introducing body paragraph points in Task 2.',
              example: 'The first reason for this trend is urbanization. The second factor is economic growth.'
            }
          ]
        }
      ]
    },
    {
      id: 'zero-article-general',
      title: '3. Zero Article (Ø): General Statements',
      overview: 'This is the MOST important article concept for IELTS. General plurals and general uncountable nouns take NO article.',
      tenses: [
        {
          id: 'general-vs-specific',
          title: 'General vs. Specific Rule ⭐⭐⭐⭐⭐',
          formula: 'General Plural / Uncountable → Ø | Specific Group → THE',
          rule: 'Do not use "the" when speaking about things, people, or uncountable concepts in general.',
          examples: [
            'General: Children need education. (All children generally)',
            'Specific: The children in this school need better facilities. (A specific group)',
            'General: Education is important. | Technology has changed society.',
            'Specific: The education provided by this university is excellent.',
            'Specific: The technology used in modern hospitals is expensive.'
          ],
          whenToUse: [
            'Discussing general concepts, technology, education, pollution, or society in Task 2 essays'
          ],
          commonMistakes: [
            {
              incorrect: 'The government should provide better education to the students.',
              correct: 'Governments should provide better education to students.',
              explanation: 'General plural nouns ("students") and general entities ("governments") should not take "the".'
            },
            {
              incorrect: 'The technology has many advantages.',
              correct: 'Technology has many advantages.',
              explanation: 'When discussing technology in general, use zero article (Ø).'
            }
          ],
          ieltsTips: [
            {
              module: 'Writing',
              tip: 'Avoid adding "the" to general abstract nouns in Task 2 thesis statements (e.g. Education, Pollution, Technology).',
              example: 'Pollution poses a severe threat to global health.'
            }
          ]
        }
      ]
    },
    {
      id: 'countable-vs-uncountable-articles',
      title: '4. Countable vs Uncountable Articles',
      overview: 'A/an can NEVER be used with uncountable nouns like information, advice, research, or equipment.',
      tenses: [
        {
          id: 'uncountable-noun-rules',
          title: 'Uncountable Nouns Rules',
          formula: 'Uncountable Noun → Ø / some / a piece of',
          rule: 'Nouns like information, advice, research, knowledge, furniture, equipment are uncountable and cannot take "a/an" or a plural form.',
          examples: [
            'I need some information. (NOT: an information)',
            'She gave me a piece of advice. (NOT: an advice)',
            'Researchers conducted extensive research. (NOT: a research)'
          ],
          whenToUse: [
            'Using quantifier phrases like "a piece of advice" or "some research"'
          ],
          commonMistakes: [
            {
              incorrect: 'He gave me an advice.',
              correct: 'He gave me a piece of advice.',
              explanation: '"Advice" is uncountable and cannot take the indefinite article "an".'
            }
          ]
        }
      ]
    },
    {
      id: 'proper-nouns-geography',
      title: '5. Proper Nouns & Geographical Features',
      overview: 'Rules for countries, cities, languages, subjects, oceans, rivers, and mountain ranges.',
      tenses: [
        {
          id: 'geography-rules',
          title: 'Geographical Features & Names',
          formula: 'Oceans / Rivers / Mountain Ranges → THE | Countries / Cities / Languages → Ø',
          rule: 'Most countries, cities, continents, languages, academic subjects, and individual mountains take NO article. Oceans, rivers, seas, mountain ranges, and kingdom/union country names take THE.',
          examples: [
            'Countries: Nepal, India, China, Canada, Japan (No article)',
            'Country Exceptions: the United States, the United Kingdom, the Netherlands, the United Arab Emirates',
            'Cities & Continents: Kathmandu, London, Asia, Europe (No article)',
            'Languages & Subjects: English, Mathematics, Physics (No article; but "the English language")',
            'Rivers & Oceans: the Nile, the Amazon, the Pacific Ocean, the Himalayas (Use THE)',
            'Single Mountain: Mount Everest (No article)'
          ],
          whenToUse: [
            'Writing country names, regional references, and geographical descriptions in Task 1 maps or reports'
          ],
          commonMistakes: [
            {
              incorrect: 'I live in the Nepal.',
              correct: 'I live in Nepal.',
              explanation: 'Country names without "United", "Republic", or "Kingdom" take zero article.'
            },
            {
              incorrect: 'We crossed the Mount Everest.',
              correct: 'We crossed Mount Everest.',
              explanation: 'Individual mountain peaks do not take "the".'
            }
          ]
        }
      ]
    }
  ],

  summaryPoints: [
    'a/an = one non-specific item; the = specific / unique / second mention; Ø = general plural / uncountable.',
    'Use "a" before consonant sounds (a university) and "an" before vowel sounds (an hour).',
    'Do not use "the" for general concepts (e.g. "Technology is useful", NOT "The technology is useful").',
    'Uncountable nouns (information, advice, research) never take "a/an".',
    'A singular countable noun MUST have an article or determiner (e.g. "A government should...", NOT "Government should...").'
  ],

  ieltsOverview: 'Missing articles on singular countable nouns or inserting unnecessary "the" before general nouns are among the most common errors penalizing candidate scores in IELTS Writing Task 2. Applying the 4-step decision system guarantees clean, Band 8+ grammatical precision.',

  practice: [
    {
      id: 'q1',
      question: 'She is _____ engineer.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'an',
      hint: '"engineer" starts with a vowel sound /e/.',
      explanation: 'Professions with singular countable nouns take a/an. Since "engineer" begins with a vowel sound, use "an".'
    },
    {
      id: 'q2',
      question: '_____ education plays an important role in society.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'Ø',
      hint: 'This is a general statement about education as a whole.',
      explanation: 'General abstract uncountable nouns take zero article (Ø).'
    },
    {
      id: 'q3',
      question: 'I bought _____ laptop yesterday. _____ laptop is very fast.',
      type: 'mcq',
      options: ['a / The', 'the / A', 'an / The', 'Ø / The'],
      correctAnswer: 'a / The',
      hint: 'First mention uses indefinite article; second mention uses definite article.',
      explanation: 'First mention takes "a" (a laptop); second mention takes "The" (The laptop).'
    },
    {
      id: 'q4',
      question: '_____ students need good teachers.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'Ø',
      hint: 'This refers to students generally, not a specific group.',
      explanation: 'Plural nouns when spoken about generally take zero article (Ø).'
    },
    {
      id: 'q5',
      question: '_____ students in my class are preparing for an exam.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'the',
      hint: 'Notice the specific group: "in my class".',
      explanation: 'This refers to a specific group of students ("in my class"), so use "the".'
    },
    {
      id: 'q6',
      question: 'Nepal is located in _____ Asia.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'Ø',
      hint: 'Continents do not take an article.',
      explanation: 'Names of continents (Asia, Europe, Africa) take zero article (Ø).'
    },
    {
      id: 'q7',
      question: 'Mount Everest is _____ highest mountain in the world.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'the',
      hint: '"highest" is a superlative adjective.',
      explanation: 'Superlatives ("the highest", "the best") always require the definite article "the".'
    },
    {
      id: 'q8',
      question: 'I need _____ information about the IELTS exam.',
      type: 'mcq',
      options: ['an', 'a', 'the', 'Ø'],
      correctAnswer: 'Ø',
      hint: '"information" is an uncountable noun.',
      explanation: '"information" is uncountable and cannot take "a" or "an". Use zero article (Ø) or "some".'
    },
    {
      id: 'q9',
      question: '_____ technology used in modern hospitals is expensive.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'the',
      hint: 'Specific technology: "used in modern hospitals".',
      explanation: 'Because it refers to specific technology ("used in modern hospitals"), use "the".'
    },
    {
      id: 'q10',
      question: 'He wants to become _____ doctor.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'a',
      hint: '"doctor" is a profession starting with a consonant sound.',
      explanation: 'Singular professions starting with a consonant sound take "a".'
    },
    {
      id: 'q11',
      question: '_____ Internet has transformed communication.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'the',
      hint: 'The Internet is a unique global entity.',
      explanation: 'Unique global entities like the Internet take "the".'
    },
    {
      id: 'q12',
      question: 'Kathmandu is _____ capital of Nepal.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'the',
      hint: 'Nepal has only one capital (unique).',
      explanation: 'Nepal has only one capital city, making it a unique noun requiring "the".'
    },
    {
      id: 'q13',
      question: 'She gave me _____ useful piece of advice.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'a',
      hint: '"useful" starts with the consonant sound /y/ (/yusful/).',
      explanation: 'Even though "useful" starts with the letter \'u\', it makes the consonant sound /y/, so it takes "a".'
    },
    {
      id: 'q14',
      question: '_____ pollution is becoming a serious global problem.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'Ø',
      hint: 'General statement about pollution as an uncountable concept.',
      explanation: 'Uncountable general concepts take zero article (Ø).'
    },
    {
      id: 'q15',
      question: 'We travelled across _____ United States.',
      type: 'mcq',
      options: ['a', 'an', 'the', 'Ø'],
      correctAnswer: 'the',
      hint: 'Country names containing "United" take "the".',
      explanation: 'Country names with "United", "Kingdom", "Republic", or "Emirates" take "the".'
    }
  ],

  prevTopic: {
    title: 'Subject–Verb Agreement',
    slug: 'subject-verb-agreement'
  }
};
