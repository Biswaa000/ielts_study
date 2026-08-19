import { Topic } from '../../types/topic';

export const subjectVerbAgreementTopic: Topic = {
  id: 'subject-verb-agreement',
  slug: 'subject-verb-agreement',
  title: 'Subject–Verb Agreement',
  section: 'grammar',
  sectionTitle: 'Grammar',
  order: 2,
  description: 'Master the 13 fundamental rules of Subject-Verb Agreement, distractor clauses in long sentences, opposite-looking ending rules, and IELTS Band 7+ accuracy tips.',
  readTime: '16 min read',
  lastUpdated: 'August 2026',
  overview: 'Subject–verb agreement means the subject and verb must match in number: a singular subject takes a singular verb, while a plural subject takes a plural verb. In IELTS essays and speaking, subject-verb disagreement is one of the most common errors that prevents candidates from reaching Band 7 in Grammatical Range and Accuracy.',

  subsections: [
    {
      id: 'basic-rule',
      title: '1. Basic Rule & The Verb "BE"',
      overview: 'The fundamental rule is simple: singular subjects take singular verbs, and plural subjects take plural verbs.',
      tenses: [
        {
          id: 'singular-plural-agreement',
          title: 'Number Matching',
          formula: 'He / She / It → Verb + s | I / You / We / They → Base Verb',
          rule: 'Always identify whether your subject is singular or plural before selecting the verb form.',
          examples: [
            'She works every day. (Singular subject → singular verb)',
            'They work every day. (Plural subject → plural verb)',
            'I am a student. | She is intelligent. | They are students.'
          ],
          whenToUse: [
            'Present Simple statement matching',
            'Selecting correct forms of the verb "BE" (am / is / are in present, was / were in past)'
          ],
          commonMistakes: [
            {
              incorrect: 'She work every day.',
              correct: 'She works every day.',
              explanation: 'Third-person singular subjects (she, he, it) require the -s verb ending in Present Simple.'
            },
            {
              incorrect: 'They works every day.',
              correct: 'They work every day.',
              explanation: 'Plural subjects (they, we) do not take the -s verb ending.'
            }
          ]
        }
      ]
    },
    {
      id: 'nouns-vs-verbs',
      title: '2. The Tricky Part: "s" on Nouns vs Verbs',
      overview: 'This is a common confusion for English learners because nouns and verbs use the letter "s" in opposite ways.',
      tenses: [
        {
          id: 'opposite-endings',
          title: 'Opposite Ending Rule',
          formula: 'Plural Noun = Noun + s | Singular Verb = Verb + s',
          rule: 'A plural noun gets an "-s" (e.g. Student → Students), but a third-person singular verb gets an "-s" (e.g. He works).',
          examples: [
            'One student works. (Singular noun without -s → singular verb with -s)',
            'Two students work. (Plural noun with -s → plural verb without -s)'
          ],
          whenToUse: [
            'Checking subject-verb balance in any Present Simple sentence'
          ],
          commonMistakes: [
            {
              incorrect: 'Two students works hard.',
              correct: 'Two students work hard.',
              explanation: 'Do not put an -s on both the plural noun and the verb.'
            }
          ]
        }
      ]
    },
    {
      id: 'conjunctions-and-or',
      title: '3. Connecting Subjects: AND vs OR / NOR',
      overview: 'How subjects are joined together dictates whether the resulting subject is singular or plural.',
      tenses: [
        {
          id: 'and-conjunction',
          title: 'Two Subjects Connected by AND (A + B = Plural)',
          formula: 'Subject A + AND + Subject B → Plural Verb',
          rule: 'When two or more subjects are connected by "and", use a plural verb.',
          examples: [
            'Tom and Jerry are friends.',
            'My brother and sister live in Kathmandu.'
          ],
          whenToUse: [
            'Combining two distinct nouns or people'
          ],
          commonMistakes: [
            {
              incorrect: 'Tom and Jerry is friends.',
              correct: 'Tom and Jerry are friends.',
              explanation: 'Two items joined by "and" equal a plural subject.'
            }
          ]
        },
        {
          id: 'or-nor-conjunction',
          title: 'Subjects Connected by OR / NOR (Proximity Rule)',
          formula: 'Either A or B → Verb agrees with Subject B (closer subject)',
          rule: 'When subjects are connected by "or", "nor", "either...or", or "neither...nor", the verb agrees with the closer subject.',
          examples: [
            'Either the teacher or the students are responsible. (students → are)',
            'Either the students or the teacher is responsible. (teacher → is)',
            'Neither the teacher nor the students are available.'
          ],
          whenToUse: [
            'Expressing alternatives with either/or or neither/nor'
          ],
          commonMistakes: [
            {
              incorrect: 'Neither the students nor the teacher are available.',
              correct: 'Neither the students nor the teacher is available.',
              explanation: 'The closer subject to the verb is "teacher" (singular), so use "is".'
            }
          ]
        }
      ]
    },
    {
      id: 'distractors-and-pronouns',
      title: '4. Intervening Words & Indefinite Pronouns',
      overview: 'Long phrases between the subject and verb often distract learners into making agreement errors in complex IELTS sentences.',
      tenses: [
        {
          id: 'distractor-phrases',
          title: 'Don\'t Get Distracted by Words Between Subject and Verb',
          formula: 'Main Subject + [extra prepositional information] + Verb',
          rule: 'Ignore words inside prepositional phrases (like "of apples", "in my class") and align the verb directly with the main subject.',
          examples: [
            'The box of apples is on the table. (Main subject: box → is)',
            'The students in my class are hardworking. (Main subject: students → are)'
          ],
          whenToUse: [
            'Analyzing complex IELTS sentences with noun post-modifiers'
          ],
          commonMistakes: [
            {
              incorrect: 'The box of apples are on the table.',
              correct: 'The box of apples is on the table.',
              explanation: 'Do not agree the verb with "apples". The true subject of the sentence is "box" (singular).'
            }
          ]
        },
        {
          id: 'indefinite-pronouns',
          title: 'Indefinite Pronouns: Everyone, Each, Every',
          formula: 'everyone / everybody / each / every / someone → Singular Verb',
          rule: 'Words like everyone, everybody, someone, somebody, anyone, anybody, no one, nobody, each, and every are ALWAYS singular.',
          examples: [
            'Everyone is happy.',
            'Each student has a laptop.',
            'Every student needs a book.'
          ],
          whenToUse: [
            'Stating generalizations in academic essays'
          ],
          commonMistakes: [
            {
              incorrect: 'Everyone are happy.',
              correct: 'Everyone is happy.',
              explanation: 'Indefinite pronouns take singular verbs.'
            },
            {
              incorrect: 'Each student have a laptop.',
              correct: 'Each student has a laptop.',
              explanation: 'Even if referring to many students, "Each" demands a singular verb ("has").'
            }
          ]
        }
      ]
    },
    {
      id: 'special-cases',
      title: '5. Special Noun Categories',
      overview: 'Certain categories of nouns require special rules regarding countability and singular vs plural verb forms.',
      tenses: [
        {
          id: 'there-is-are',
          title: '"There is" vs "There are"',
          formula: 'There is + Singular Noun | There are + Plural Noun',
          rule: 'Look at the noun that comes AFTER the verb to determine whether to use "is" or "are".',
          examples: [
            'There is a book on the table.',
            'There are three books on the table.',
            'There are several problems with this system.'
          ],
          whenToUse: [
            'Introducing data or introducing problems/solutions in essays'
          ],
          commonMistakes: [
            {
              incorrect: 'There is many problems with this system.',
              correct: 'There are many problems with this system.',
              explanation: '"problems" is plural, so use "There are".'
            }
          ]
        },
        {
          id: 'collective-and-unusual-nouns',
          title: 'Collective Nouns & Plural-Looking Words',
          formula: 'News / Physics / Government → Singular | Police / People → Plural',
          rule: 'Words ending in -s like "news", "mathematics", "economics", and "physics" are singular. Words like "people", "police", and "children" are plural.',
          examples: [
            'The news is shocking. (Singular)',
            'Mathematics is difficult. (Singular)',
            'The police are investigating the case. (Plural)',
            'The government has announced a new policy. (Singular unit)'
          ],
          whenToUse: [
            'Writing formal Task 2 essays discussing policy, science, or public issues'
          ],
          commonMistakes: [
            {
              incorrect: 'The news are shocking.',
              correct: 'The news is shocking.',
              explanation: '"News" is uncountable and singular.'
            },
            {
              incorrect: 'The police is investigating.',
              correct: 'The police are investigating.',
              explanation: '"Police" is a plural noun and takes a plural verb.'
            }
          ]
        }
      ]
    }
  ],

  summaryPoints: [
    'Always find the true subject of the sentence by asking: "Who or what is doing the action?"',
    'Ignore prepositional phrases ("of apples", "in the room") between the main subject and the verb.',
    'Nouns get -s for plural; verbs get -s for 3rd person singular (opposite ending rule).',
    'Either A or B / Neither A nor B: verb agrees with Subject B (closest subject).',
    'Each, every, everyone, everybody, news, mathematics take singular verbs; police and people take plural verbs.'
  ],

  ieltsOverview: 'In IELTS Writing Task 2, candidate sentences often contain long modifier phrases between the subject and verb. Finding the main subject and maintaining correct agreement across complex sentences is essential for achieving Band 7+ in Grammatical Range and Accuracy.',

  practice: [
    {
      id: 'q1',
      question: 'She _____ to school every day.',
      type: 'mcq',
      options: ['go', 'goes'],
      correctAnswer: 'goes',
      hint: 'Third-person singular subject ("She") in Present Simple.',
      explanation: '"She" is third-person singular, so the verb takes -s ("goes").'
    },
    {
      id: 'q2',
      question: 'The students _____ very hard.',
      type: 'mcq',
      options: ['studies', 'study'],
      correctAnswer: 'study',
      hint: 'Plural subject ("students").',
      explanation: 'Plural subjects do not take -s on the verb ("study").'
    },
    {
      id: 'q3',
      question: 'Everyone _____ responsible for their work.',
      type: 'mcq',
      options: ['is', 'are'],
      correctAnswer: 'is',
      hint: 'Indefinite pronoun ("Everyone").',
      explanation: '"Everyone" is an indefinite pronoun and always takes a singular verb ("is").'
    },
    {
      id: 'q4',
      question: 'The box of books _____ heavy.',
      type: 'mcq',
      options: ['is', 'are'],
      correctAnswer: 'is',
      hint: 'Ignore "of books". What is the main subject?',
      explanation: 'The main subject is "box" (singular), not "books", so the correct verb is "is".'
    },
    {
      id: 'q5',
      question: 'Tom and his friends _____ football.',
      type: 'mcq',
      options: ['plays', 'play'],
      correctAnswer: 'play',
      hint: 'Two subjects connected by AND (A + B = Plural).',
      explanation: 'Subjects connected by "and" form a plural subject, taking "play".'
    },
    {
      id: 'q6',
      question: 'Either the teacher or the students _____ responsible.',
      type: 'mcq',
      options: ['is', 'are'],
      correctAnswer: 'are',
      hint: 'Proximity rule for Either...or: verb agrees with closer subject ("students").',
      explanation: 'The closer subject is "students" (plural), so the verb is "are".'
    },
    {
      id: 'q7',
      question: 'Either the students or the teacher _____ responsible.',
      type: 'mcq',
      options: ['is', 'are'],
      correctAnswer: 'is',
      hint: 'Proximity rule: verb agrees with closer subject ("teacher").',
      explanation: 'The closer subject is "teacher" (singular), so the verb is "is".'
    },
    {
      id: 'q8',
      question: 'There _____ many problems with this system.',
      type: 'mcq',
      options: ['is', 'are'],
      correctAnswer: 'are',
      hint: 'Look at the noun following the verb ("many problems").',
      explanation: '"many problems" is plural, so use "There are".'
    },
    {
      id: 'q9',
      question: 'Each student _____ a computer.',
      type: 'mcq',
      options: ['have', 'has'],
      correctAnswer: 'has',
      hint: '"Each" takes a singular verb.',
      explanation: '"Each" is always treated as singular, requiring "has".'
    },
    {
      id: 'q10',
      question: 'The effects of pollution _____ serious.',
      type: 'mcq',
      options: ['is', 'are'],
      correctAnswer: 'are',
      hint: 'Find the main subject: "effects" or "pollution"?',
      explanation: 'The main subject is "effects" (plural), so the verb is "are".'
    }
  ],

  prevTopic: {
    title: 'English Tenses for IELTS',
    slug: 'tenses'
  },
  nextTopic: {
    title: 'Articles: A / An / The',
    slug: 'articles'
  }
};
