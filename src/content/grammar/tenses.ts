import { Topic } from '../../types/topic';

export const tensesTopic: Topic = {
  id: 'tenses',
  slug: 'tenses',
  title: 'English Tenses for IELTS',
  section: 'grammar',
  sectionTitle: 'Grammar',
  order: 1,
  description: 'Master the 12 English tenses with formulas, real-world examples, common student mistakes, timeline comparisons, and IELTS Writing & Speaking applications.',
  readTime: '18 min read',
  lastUpdated: 'August 2026',
  overview: 'English has 3 main time periods (Present, Past, Future) and 4 forms (Simple, Continuous, Perfect, Perfect Continuous), creating 12 tenses in total. In IELTS, Grammatical Range and Accuracy accounts for 25% of your total score in Writing and Speaking. Rather than just memorizing tables, you should learn tenses based on when and why you use them in IELTS tasks.',

  subsections: [
    {
      id: 'the-big-picture',
      title: 'The Big Picture: 12 Tenses Overview',
      overview: 'Understanding how time periods and aspect forms combine allows you to navigate past trends, ongoing situations, and future forecasts with confidence.',
      tenses: [
        {
          id: 'timeline-overview',
          title: 'Timeline & Aspect Matrix',
          formula: 'PAST (had done) ← NOW (have done) → FUTURE (will have done)',
          rule: 'Always select your tense based on the relationship between when the action happens and the moment of speaking or reference.',
          examples: [
            'Present Simple: I work (habitual / fact)',
            'Past Simple: I worked (finished past time)',
            'Future Simple: I will work (future prediction)',
            'Present Perfect: I have worked (past connecting to now)'
          ],
          whenToUse: [
            'Present: now / generally',
            'Past: before now',
            'Future: after now'
          ],
          commonMistakes: [
            {
              incorrect: 'I study English yesterday.',
              correct: 'I studied English yesterday.',
              explanation: 'Past time indicators ("yesterday") require the Past Simple tense.'
            }
          ]
        }
      ]
    },
    {
      id: 'present-tenses',
      title: 'Present Tenses',
      overview: 'Present tenses are used to express general facts, habits, ongoing developments, and events connecting past occurrences to the current moment.',
      tenses: [
        {
          id: 'present-simple',
          title: '1. Present Simple ⭐⭐⭐⭐⭐',
          formula: 'Subject + base verb (add -s/-es for he/she/it)',
          rule: 'Use Present Simple for general facts, habits, universal truths, and present-day arguments in IELTS Task 2.',
          examples: [
            'The Earth revolves around the Sun. (General fact)',
            'I study English every day. (Habit)',
            'Exercise improves physical health. (General truth)',
            'Technology plays an important role in modern society. (IELTS Task 2 argument)'
          ],
          whenToUse: [
            'Stating scientific facts and universal truths',
            'Describing habits and daily routines',
            'Presenting arguments in IELTS Task 2 essays'
          ],
          commonMistakes: [
            {
              incorrect: 'He study English every evening.',
              correct: 'He studies English every evening.',
              explanation: 'Third-person singular subjects (he, she, it) require the -s/-es verb ending in Present Simple.'
            },
            {
              incorrect: 'The government is believing that education is crucial.',
              correct: 'The government believes that education is crucial.',
              explanation: 'Stative verbs like "believe", "know", and "understand" are used in Present Simple, not continuous.'
            }
          ],
          ieltsTips: [
            {
              module: 'Writing',
              tip: 'Use Present Simple in Task 2 essays when discussing general concepts and presenting your stance.',
              example: 'Many people believe that education is essential for economic development.'
            }
          ]
        },
        {
          id: 'present-continuous',
          title: '2. Present Continuous',
          formula: 'Subject + am/is/are + verb-ing',
          rule: 'Use Present Continuous for actions happening right now or around the current time period.',
          examples: [
            'I am studying English right now.',
            'Many students are using AI tools to improve their learning.',
            'The proportion of people using renewable energy is rising.'
          ],
          whenToUse: [
            'Describing actions happening at the moment of speaking',
            'Describing temporary current trends'
          ],
          commonMistakes: [
            {
              incorrect: 'The climate is changing since 1990.',
              correct: 'The climate has been changing since 1990.',
              explanation: 'When an action started in the past and continues to now with "since", use Present Perfect Continuous.'
            }
          ],
          ieltsTips: [
            {
              module: 'Writing',
              tip: 'Useful in Writing Task 1 when analyzing current ongoing trends in graphs.',
              example: 'The percentage of urban residents is growing steadily.'
            }
          ]
        },
        {
          id: 'present-perfect',
          title: '3. Present Perfect ⭐⭐⭐',
          formula: 'Subject + have/has + V3 (past participle)',
          rule: 'Use Present Perfect for an action completed in the past that connects to or has relevance in the present.',
          examples: [
            'Technology has changed the way people communicate.',
            'Many countries have implemented strict recycling regulations.',
            'I have completed three IELTS mock tests this week.'
          ],
          whenToUse: [
            'Describing experiences without specifying an exact past time',
            'Highlighting past actions with present consequences'
          ],
          commonMistakes: [
            {
              incorrect: 'I have visited London yesterday.',
              correct: 'I visited London yesterday.',
              explanation: 'Do not use Present Perfect with specific finished time expressions like "yesterday" or "in 2010".'
            }
          ]
        },
        {
          id: 'present-perfect-continuous',
          title: '4. Present Perfect Continuous ⭐⭐⭐⭐⭐',
          formula: 'Subject + have/has + been + verb-ing',
          rule: 'Use Present Perfect Continuous to emphasize the duration of an action that started in the past and continues up to the present moment.',
          examples: [
            'I have been studying English for three years.',
            'She has been working at the company since 2023.',
            'People have been using social media increasingly over the past decade.'
          ],
          whenToUse: [
            'Emphasizing how long an ongoing activity has been occurring (using "for" or "since")',
            'Highlighting continuous efforts in IELTS Speaking responses'
          ],
          commonMistakes: [
            {
              incorrect: 'I am learning IELTS for six months.',
              correct: 'I have been learning IELTS for six months.',
              explanation: 'Stating duration ("for six months") up to the present requires Present Perfect Continuous.'
            }
          ]
        }
      ]
    },
    {
      id: 'past-tenses',
      title: 'Past Tenses',
      overview: 'Past tenses are critical for describing past historical data in IELTS Writing Task 1 and sharing personal anecdotes in Speaking Part 2.',
      tenses: [
        {
          id: 'past-simple',
          title: '5. Past Simple ⭐⭐⭐⭐⭐',
          formula: 'Subject + V2 (past verb)',
          rule: 'Use Past Simple for completed actions at a specific finished time in the past.',
          examples: [
            'I visited Pokhara last year.',
            'The government introduced the policy in 2020.',
            'The number of students increased significantly between 2010 and 2015.'
          ],
          whenToUse: [
            'Describing completed past actions with markers like "yesterday", "last year", "in 2020", "two years ago"',
            'Reporting historical data in Writing Task 1'
          ],
          commonMistakes: [
            {
              incorrect: 'In 2010, the population has grown to 5 million.',
              correct: 'In 2010, the population grew to 5 million.',
              explanation: 'Specific past years ("In 2010") require Past Simple.'
            }
          ],
          ieltsTips: [
            {
              module: 'Writing',
              tip: 'The primary tense for Writing Task 1 charts that feature past dates (e.g. 1995-2015).',
              example: 'Car sales experienced a sharp drop in 2012.'
            }
          ]
        },
        {
          id: 'past-continuous',
          title: '6. Past Continuous',
          formula: 'Subject + was/were + verb-ing',
          rule: 'Use Past Continuous for actions that were in progress at a specific moment in the past or interrupted by another action.',
          examples: [
            'I was studying for my exam when the power went out.',
            'While the government was expanding transport, car emissions were declining.'
          ],
          whenToUse: [
            'Describing continuous background past actions'
          ],
          commonMistakes: [
            {
              incorrect: 'While I cooked, the phone was ringing.',
              correct: 'While I was cooking, the phone rang.',
              explanation: 'The background continuous action uses Past Continuous; the interrupting event uses Past Simple.'
            }
          ]
        },
        {
          id: 'past-perfect',
          title: '7. Past Perfect',
          formula: 'Subject + had + V3',
          rule: 'Use Past Perfect when two past events occurred, to indicate which event happened first.',
          examples: [
            'When I arrived at the airport, the plane had left.',
            'By 2010, the government had introduced several environmental policies.',
            'Pollution had increased before the government introduced the policy.'
          ],
          whenToUse: [
            'Establishing sequence: Event 1 (had + V3) happened before Event 2 (Past Simple)'
          ],
          commonMistakes: [
            {
              incorrect: 'When I arrived, the movie started.',
              correct: 'When I arrived, the movie had already started.',
              explanation: 'The movie starting occurred prior to my arrival, so it takes Past Perfect.'
            }
          ],
          ieltsTips: [
            {
              module: 'Writing',
              tip: 'Use Past Perfect in Task 1 reports with expressions like "By [past year]".',
              example: 'By 2015, renewable output had surpassed fossil fuels.'
            }
          ]
        },
        {
          id: 'past-perfect-continuous',
          title: '8. Past Perfect Continuous',
          formula: 'Subject + had + been + verb-ing',
          rule: 'Use Past Perfect Continuous for an action that continued for a period of time before another past event occurred.',
          examples: [
            'I had been studying for three hours when my friend called.',
            'She was tired because she had been working all day.',
            'Before the new policy was introduced, pollution levels had been increasing for several years.'
          ],
          whenToUse: [
            'Highlighting duration prior to a past milestone'
          ],
          commonMistakes: [
            {
              incorrect: 'He was waiting for two hours before the bus came.',
              correct: 'He had been waiting for two hours before the bus came.',
              explanation: 'Duration before a past event requires Past Perfect Continuous.'
            }
          ]
        }
      ]
    },
    {
      id: 'future-tenses',
      title: 'Future Tenses',
      overview: 'Future tenses allow you to make predictions, describe intentions, and project data into upcoming years in IELTS Task 1 & 2.',
      tenses: [
        {
          id: 'future-simple',
          title: '9. Future Simple (Will)',
          formula: 'Subject + will + base verb',
          rule: 'Use Future Simple for predictions, general future projections, or instant decisions.',
          examples: [
            'Climate change will affect future generations.',
            'Technology will continue to develop.',
            'The demand for renewable energy will increase in the coming years.'
          ],
          whenToUse: [
            'Making future predictions based on opinion or trends'
          ],
          commonMistakes: [
            {
              incorrect: 'Technology will to change our lives.',
              correct: 'Technology will change our lives.',
              explanation: 'Modal verb "will" is followed directly by the base verb without "to".'
            }
          ]
        },
        {
          id: 'be-going-to',
          title: '10. "Be going to"',
          formula: 'Subject + am/is/are + going to + base verb',
          rule: 'Use "be going to" for planned future intentions or predictions based on current visible evidence.',
          examples: [
            'I am going to study IELTS next month. (Plan)',
            'Look at those dark clouds! It is going to rain. (Evidence)'
          ],
          whenToUse: [
            'Stating prior plans or predictions supported by current evidence'
          ],
          commonMistakes: [
            {
              incorrect: 'Look at the clouds, it will rain.',
              correct: 'Look at the clouds, it is going to rain.',
              explanation: 'When clear present evidence exists, use "going to".'
            }
          ]
        },
        {
          id: 'future-continuous',
          title: '11. Future Continuous',
          formula: 'Subject + will be + verb-ing',
          rule: 'Use Future Continuous for an action that will be in progress at a specific time in the future.',
          examples: [
            'At 8 PM tonight, I will be studying IELTS.',
            'By this time next year, many companies will be using more advanced AI systems.'
          ],
          whenToUse: [
            'Describing an action underway at a future point'
          ],
          commonMistakes: [
            {
              incorrect: 'This time next year, I will studying in London.',
              correct: 'This time next year, I will be studying in London.',
              explanation: 'Future continuous requires "will be + V-ing".'
            }
          ]
        },
        {
          id: 'future-perfect',
          title: '12. Future Perfect ⭐',
          formula: 'Subject + will have + V3',
          rule: 'Use Future Perfect for an action that will be completed BEFORE a specified time in the future.',
          examples: [
            'By 2030, technology will have transformed many industries.',
            'By 2035, the population will have increased significantly.',
            'By 2030, many countries will have reduced their dependence on fossil fuels.'
          ],
          whenToUse: [
            'Expressing completed milestones using "by + future time"'
          ],
          commonMistakes: [
            {
              incorrect: 'By 2030, scientists will has developed new energy sources.',
              correct: 'By 2030, scientists will have developed new energy sources.',
              explanation: 'Always use "will have" regardless of singular or plural subject.'
            }
          ],
          ieltsTips: [
            {
              module: 'Writing',
              tip: 'High Band 8 structure when reporting projected data endpoints in Task 1 line graphs.',
              example: 'By 2040, solar power will have surpassed wind energy.'
            }
          ]
        }
      ]
    }
  ],

  summaryPoints: [
    'Always match time indicators ("yesterday", "since 2020", "by 2030") to the appropriate tense.',
    'Present Simple states facts & IELTS essay stances; Present Continuous states current trends.',
    'Past Simple requires finished past time markers; Past Perfect indicates an action completed BEFORE another past event.',
    'Present Perfect Continuous emphasizes duration up to NOW; Past Perfect Continuous emphasizes duration up to a PAST event.',
    'Future Perfect ("will have + V3") indicates an action finished before a designated future date.'
  ],

  ieltsOverview: 'Grammatical Range and Accuracy carries 25% weight in IELTS Writing and Speaking. Demonstrating smooth control over simple, continuous, perfect, and continuous perfect tenses elevates your essay structure and speaking fluency to Band 7+.',

  practice: [
    {
      id: 'q1',
      question: 'When I arrived at the airport, the plane _____.',
      type: 'mcq',
      options: ['left', 'had left', 'has left'],
      correctAnswer: 'had left',
      hint: 'The plane departure happened BEFORE my arrival in the past.',
      explanation: 'The plane left before I arrived. The earlier of two past events uses Past Perfect ("had left").'
    },
    {
      id: 'q2',
      question: 'She _____ dinner before she went to bed.',
      type: 'mcq',
      options: ['had eaten', 'ate', 'has eaten'],
      correctAnswer: 'had eaten',
      hint: 'Eating dinner happened first, before going to bed.',
      explanation: 'Action completed before another past event requires Past Perfect ("had eaten").'
    },
    {
      id: 'q3',
      question: 'By the time we reached the cinema, the movie _____.',
      type: 'mcq',
      options: ['started', 'has started', 'had started'],
      correctAnswer: 'had started',
      hint: '"By the time + past event" triggers the earlier past action.',
      explanation: 'The movie start preceded our arrival, requiring Past Perfect ("had started").'
    },
    {
      id: 'q4',
      question: 'I couldn\'t enter the house because I _____ my keys.',
      type: 'mcq',
      options: ['lost', 'had lost', 'have lost'],
      correctAnswer: 'had lost',
      hint: 'Losing keys happened prior to being unable to enter.',
      explanation: 'The loss occurred before the past moment of trying to enter, requiring Past Perfect ("had lost").'
    },
    {
      id: 'q5',
      question: 'I _____ English for three years.',
      type: 'mcq',
      options: ['have studied', 'have been studying', 'Both can be correct'],
      correctAnswer: 'Both can be correct',
      hint: 'Both state duration from past to present; one emphasizes result, the other duration.',
      explanation: 'Both options are grammatically correct. Present Perfect Continuous ("have been studying") emphasizes ongoing duration, while Present Perfect ("have studied") focuses on the experience.'
    },
    {
      id: 'q6',
      question: 'She _____ for two hours when her friend called.',
      type: 'mcq',
      options: ['had been studying', 'has been studying', 'will be studying'],
      correctAnswer: 'had been studying',
      hint: 'Continuous activity before a past interruption ("when her friend called").',
      explanation: 'Activity in progress for a duration prior to a past event uses Past Perfect Continuous ("had been studying").'
    },
    {
      id: 'q7',
      question: 'By 2030, scientists _____ new solutions to this problem.',
      type: 'mcq',
      options: ['will develop', 'will have developed', 'have developed'],
      correctAnswer: 'will have developed',
      hint: 'Notice "By 2030" indicating a future completion point.',
      explanation: 'Expressions with "By + future date" require Future Perfect ("will have developed").'
    },
    {
      id: 'q8',
      question: 'Look at those dark clouds! It _____ rain.',
      type: 'mcq',
      options: ['will', 'is going to', 'has'],
      correctAnswer: 'is going to',
      hint: 'There is clear present evidence (dark clouds).',
      explanation: 'When present physical evidence indicates an impending event, use "is going to".'
    },
    {
      id: 'q9',
      question: 'At 9 PM tonight, I _____ for my IELTS exam.',
      type: 'mcq',
      options: ['will study', 'will be studying', 'have studied'],
      correctAnswer: 'will be studying',
      hint: 'An action in progress at a specific time in the future.',
      explanation: 'Action underway at a specific future moment (9 PM tonight) requires Future Continuous ("will be studying").'
    },
    {
      id: 'q10',
      question: 'Before the police arrived, the suspect _____ for several hours.',
      type: 'mcq',
      options: ['had been hiding', 'has been hiding', 'will be hiding'],
      correctAnswer: 'had been hiding',
      hint: 'Ongoing action before a past milestone ("before police arrived").',
      explanation: 'Action continuing up to a point in the past requires Past Perfect Continuous ("had been hiding").'
    }
  ],

  nextTopic: {
    title: 'Subject-Verb Agreement',
    slug: 'subject-verb-agreement'
  }
};
