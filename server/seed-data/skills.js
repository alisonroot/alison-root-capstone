const skillsData = [
  {
    id: 1,
    name: "Expanding Awareness Meditation",
    content:
      "Practice expanding your awareness by focusing on the present moment. Pay attention to your breathing and the sensations in your body. If your mind wanders, gently guide it back to the here and now.\nExpand your awareness to include everything around you. Notice the connection between your inner state and the external world. Let go of distractions and embrace the serenity of the present moment.",
    explanation:
      "This meditation helps anchor you in the present moment by broadening your awareness.",
    preview:
      "Anchor yourself in the present moment by expanding your awareness.",
    is_acronym: false,
    category: "break",
    tag: "Break",
    intensity: "mindfulness",
  },
  {
    id: 2,
    name: "Drop into Pauses",
    content:
      "Focus on the pauses between inhaling and exhaling. Notice the stillness and calm in these moments. Use these pauses to ground yourself. Pay attention to the transition between breaths and release tension.\nExplore the depth of each pause, allowing your mind and body to relax with each exhale. Embrace the peacefulness that comes with stillness and find clarity in the spaces between breaths.",
    explanation: "Pausing between breaths can help calm your mind and body.",
    preview: "Calm your mind with breath pauses and find peace in stillness.",
    is_acronym: false,
    category: "break",
    tag: "Break",
    intensity: "mindfulness",
  },
  {
    id: 3,
    name: "Mindful Movement",
    content:
      "Engage in gentle, mindful movements such as yoga or stretching. Focus on the sensations in your body. Move slowly and deliberately. Let your mind rest on the physical sensations and movements.\nConnect your breath with your movements, creating a harmonious flow of energy within your body. Feel the tension release with each stretch and embrace the mindfulness that envelops you. See mindful movement as a pathway to inner peace and physical well-being.",
    explanation:
      "Mindful movement combines physical activity with mindfulness to reduce stress.",
    preview: "Reduce stress with mindful movements and embrace inner peace.",
    is_acronym: false,
    category: "break",
    tag: "Break",
    intensity: "mindfulness",
  },
  {
    id: 4,
    name: "Guided Meditation",
    content:
      "Listen to a guided meditation that directs your focus. Follow the instructions to relax and center yourself. Allow the guidance to lead you to a peaceful state. These meditations can help with relaxation, focus, and emotional regulation.\nImmerse yourself in the soothing voice of the guide, letting go of worries and distractions. Visualize tranquility and harmony as you follow the gentle prompts. Experience a profound sense of calm and clarity with each session, nurturing your mind and spirit.",
    explanation: "Guided meditations provide structured relaxation and focus.",
    preview:
      "Relax and find focus with guided meditation for emotional balance.",
    is_acronym: false,
    category: "break",
    tag: "Break",
    intensity: "mindfulness",
  },
  {
    id: 5,
    name: "How Skills",
    content:
      "Engage in activities with awareness, one-mindfully, and non-judgmentally. Fully participate in the present activity. Let go of judgments and stay focused.\nPractice these skills to immerse yourself in each moment without distractions. Embrace your experiences fully and release critical thoughts. Strengthen your ability to be present and engaged, enhancing your overall well-being.",
    explanation: "How skills help you fully engage in the present moment.",
    preview: "Fully engage in the present moment with mindful activities.",
    is_acronym: false,
    category: "incorporate",
    tag: "Incorporate",
    intensity: "mindfulness",
  },
  {
    id: 6,
    name: "What Skills",
    content:
      "Observe, Describe, and Participate in the present moment. Notice what is happening, describe it, and engage fully. This helps ground you in the present and reduces distraction.\nSharpen your awareness by observing the details of your surroundings. Articulate your observations clearly, deepening your understanding of the present moment. Engage wholeheartedly in each experience, fostering connection and focus.",
    explanation: "What skills help you observe and describe your experience.",
    preview: "Observe and describe your experience to enhance mindfulness.",
    is_acronym: false,
    category: "incorporate",
    tag: "Incorporate",
    intensity: "mindfulness",
  },
  {
    id: 7,
    name: "4-7-8 Breathing",
    content:
      "Practice 4-7-8 breathing: Inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds. Repeat several times. This technique calms the nervous system and reduces anxiety. The extended exhale promotes deep relaxation.\nFocus on the rhythm of your breath, allowing each cycle to bring tranquility to your mind and body. Embrace the calming effects of prolonged exhalation, easing tension and restoring inner balance.",
    explanation:
      "4-7-8 breathing reduces anxiety and stress through extended exhalation.",
    preview:
      "Calm your nervous system with 4-7-8 breathing and promote relaxation.",
    is_acronym: false,
    category: "breathing",
    tag: "Breathing",
    intensity: "low",
  },
  {
    id: 8,
    name: "Box Breathing",
    content:
      "Practice box breathing: Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, and hold for 4 seconds. Repeat several times. This balanced breathing pattern reduces stress and enhances focus.\nFocus on the symmetry of your breath cycles, finding harmony in each inhale and exhale. Let the rhythmic pattern of box breathing guide you to a state of calm and clarity, improving your ability to concentrate and manage stress.",
    explanation:
      "Box breathing uses equal-length breaths and holds to reduce stress.",
    preview: "Reduce stress and improve focus with box breathing.",
    is_acronym: false,
    category: "breathing",
    tag: "Breathing",
    intensity: "low",
  },
  {
    id: 9,
    name: "Hand Breathing",
    content:
      "Practice hand breathing: Trace your fingers with your breath. Inhale as you trace up one finger, and exhale as you trace down. Repeat for each finger. This technique combines breath with tactile sensation to ground you in the present moment.\nFeel the connection between your breath and your fingertips, grounding yourself with each gentle movement. Allow the rhythm of hand breathing to bring awareness to the present and release tension, promoting a sense of calm and focus.",
    explanation:
      "Hand breathing combines breath with movement to enhance grounding.",
    preview: "Ground yourself in the present moment with hand breathing.",
    is_acronym: false,
    category: "breathing",
    tag: "Breathing",
    intensity: "low",
  },
  {
    id: 10,
    name: "5-4-3-2-1 Grounding",
    content:
      "Practice 5-4-3-2-1 grounding: Identify 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. Focus on each sense to ground yourself in the present moment.\nEngage your senses fully, exploring the details of your surroundings. Let each observation anchor you in the here and now, fostering mindfulness and reducing distraction. Use this technique to reconnect with the present and enhance your overall well-being.",
    explanation: "5-4-3-2-1 grounding brings you back to the present moment.",
    preview: "Ground yourself in the present moment with 5-4-3-2-1 grounding.",
    is_acronym: false,
    category: "grounding",
    tag: "Grounding",
    intensity: "low",
  },
  {
    id: 11,
    name: "Reality Acceptance",
    content:
      "Practice reality acceptance: Fully accept the present situation without resistance. Let go of the struggle against reality and embrace radical acceptance to reduce suffering.\nAcknowledge the reality as it is, without judgment or attempts to change it. Embrace the freedom that comes with accepting things beyond your control, allowing inner peace to replace inner turmoil. Use this skill to cultivate resilience and emotional well-being.",
    explanation: "Accepting reality reduces suffering caused by resistance.",
    preview: "Reduce suffering by accepting reality with radical acceptance.",
    is_acronym: false,
    category: "nocontrol",
    tag: "Can't Change",
    intensity: "medium",
  },
  {
    id: 12,
    name: "Pros and Cons",
    content:
      "Use pros and cons: Make a list of the advantages and disadvantages of acting on your emotions. Consider each factor carefully to make balanced decisions.\nExplore the benefits and drawbacks of different choices, gaining clarity and perspective. Use this skill to weigh your options objectively, promoting wise decision-making and emotional balance. Embrace the empowerment that comes from making informed choices based on rational evaluation.",
    explanation: "Using pros and cons helps make balanced decisions.",
    preview:
      "Make balanced decisions with pros and cons to enhance emotional regulation.",
    is_acronym: false,
    category: "control",
    tag: "Can Change",
    intensity: "medium",
  },
  {
    id: 13,
    name: "Problem Solving",
    content:
      "Practice problem solving: First, clearly identify the problem you're facing. Next, brainstorm potential solutions without judgment. Evaluate each solution based on its feasibility and potential outcomes. Choose the solution that best addresses the problem. Finally, implement your chosen solution and review its effectiveness over time.\nThis structured approach helps you tackle challenges effectively, fostering a sense of control and accomplishment.",
    explanation: "Problem solving addresses challenges methodically.",
    preview: "Address challenges with effective problem solving.",
    is_acronym: false,
    category: "control",
    tag: "Can Change",
    intensity: "medium",
  },
  {
    id: 14,
    name: "Improve",
    content:
      "Practice improvement skills: Identify areas in your life where positive changes can be made. Set realistic goals that align with your values and aspirations. Take gradual steps towards achieving these goals, and monitor your progress along the way.\nBy actively working towards positive changes, you cultivate resilience and self-growth. This skill empowers you to make meaningful improvements in various aspects of your life.",
    explanation: "Improvement skills foster positive changes in your life.",
    preview: "Make positive changes with focused improvement.",
    is_acronym: false,
    category: "control",
    tag: "Can Change",
    intensity: "medium",
  },
  {
    id: 15,
    name: "Opposite Action to Fear",
    content:
      "Practice opposite action to fear: If you fear social interactions, deliberately engage in them. Make eye contact, initiate conversations, and gradually expose yourself to social situations. By facing your fears directly, you diminish their influence over you.\nChallenge yourself to act opposite to the fear's pull, gradually building confidence and reducing avoidance behaviors. This skill empowers you to reclaim control over anxiety-provoking situations.",
    explanation: "Opposite action to fear reduces fear's impact.",
    preview: "Diminish fear by confronting it directly.",
    is_acronym: false,
    category: "nofit",
    tag: "Doesn't Fit Facts",
    intensity: "medium",
  },
  {
    id: 16,
    name: "Opposite Action to Shame",
    content:
      "Practice opposite action to shame: Instead of withdrawing, share your experience with a trusted person. Seek understanding and support, challenging feelings of shame. By opening up, you reduce the power shame holds over you.\nEmbrace vulnerability as a strength, allowing yourself to receive empathy and validation. This skill fosters emotional healing and resilience, promoting self-acceptance and connection.",
    explanation: "Sharing experiences reduces feelings of shame.",
    preview: "Reduce shame by embracing vulnerability.",
    is_acronym: false,
    category: "nofit",
    tag: "Doesn't Fit Facts",
    intensity: "medium",
  },
  {
    id: 17,
    name: "Opposite Action to Sadness",
    content:
      "Practice opposite action to sadness: Engage in activities that bring joy or satisfaction, even if you don't feel like it initially. Actively counteract sadness by participating in enjoyable activities. This helps lift your mood and increase positive emotions.\nChallenge the urge to withdraw and instead invest in experiences that promote well-being. By taking deliberate actions, you can shift your emotional state and enhance resilience.",
    explanation: "Engaging in enjoyable activities counters sadness.",
    preview: "Counteract sadness with positive actions.",
    is_acronym: false,
    category: "nofit",
    tag: "Doesn't Fit Facts",
    intensity: "medium",
  },
  {
    id: 18,
    name: "Opposite Action to Anxiety",
    content:
      "Practice opposite action to anxiety: Gradually approach situations that trigger anxiety. Take small, manageable steps to expose yourself to anxiety-provoking scenarios. By facing your fears gradually, you reduce anxiety's impact over time.\nChallenge avoidance behaviors and embrace discomfort as a pathway to growth. This skill empowers you to build resilience and expand your comfort zone, enhancing your ability to cope with anxiety.",
    explanation: "Gradual exposure to anxiety reduces its impact.",
    preview: "Reduce anxiety through gradual exposure.",
    is_acronym: false,
    category: "nofit",
    tag: "Doesn't Fit Facts",
    intensity: "medium",
  },
  {
    id: 19,
    name: "Radical Acceptance",
    content:
      "Practice radical acceptance: Fully and completely accept the current situation as it is, without resistance. Let go of the urge to fight reality or wish things were different. Radical acceptance involves embracing reality as it is, acknowledging that some situations are beyond your control.\nBy practicing radical acceptance, you reduce emotional suffering that arises from resisting reality. This skill promotes inner peace and emotional resilience.",
    explanation:
      "Radical acceptance reduces suffering caused by resisting reality.",
    preview: "Reduce suffering by fully accepting reality.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "high",
  },
  {
    id: 20,
    name: "Turning the Mind",
    content:
      "Practice turning the mind: Commit to accepting reality as it is, and consciously redirect your thoughts and attitudes towards acceptance whenever you catch yourself resisting. This may involve repeated recommitment to accepting reality and letting go of the urge to fight or deny what is.\nTurning the mind helps reduce emotional distress by fostering a mindset of acceptance rather than resistance. This skill promotes emotional flexibility and adaptive coping strategies.",
    explanation:
      "Turning the mind reduces emotional distress through acceptance.",
    preview: "Reduce distress by committing to acceptance.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "high",
  },
  {
    id: 21,
    name: "Urge Surfing",
    content:
      "Practice urge surfing: When faced with strong urges or impulses, observe them without acting on them. Notice how these urges arise, peak, and eventually subside, much like waves in the ocean. Allow yourself to experience the urges without judgment or the need to act upon them.\nUrge surfing helps reduce the power of urges over you by fostering mindfulness and non-reactivity. This skill promotes emotional regulation and empowers you to manage impulses effectively.",
    explanation:
      "Urge surfing reduces urge intensity by observing without action.",
    preview: "Reduce urge intensity with mindfulness through urge surfing.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "high",
  },
  {
    id: 22,
    name: "Willing Hands",
    content:
      "Practice willing hands: Relax your hands and let them rest naturally, palms facing up. This physical posture symbolizes openness and acceptance. By adopting this posture, you cultivate a sense of willingness to accept the present moment and what it entails.\nWilling hands help reduce resistance and increase acceptance by embodying a physical stance of openness. This skill promotes emotional resilience and facilitates a more receptive mindset.",
    explanation: "Willing hands reduce resistance and increase acceptance.",
    preview:
      "Increase acceptance with a relaxed, open posture of willing hands.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "high",
  },
  {
    id: 23,
    name: "TIPP",
    content:
      "Practice TIPP: Use this acronym for crisis intervention.\nTemperature: Splash your face with cold water to quickly change your body's physiological response.\nIntense Exercise: Engage in vigorous physical activity to release tension and redirect focus.\nPaced Breathing: Breathe slowly and deeply to calm your nervous system.\nPaired Muscle Relaxation: Tense and then relax each muscle group to reduce physical tension and promote relaxation.\nTIPP helps quickly reduce extreme emotions and promote emotional stability during crises.",
    explanation:
      "TIPP quickly reduces extreme emotions using physical interventions.",
    preview: "Quickly stabilize emotions with TIPP.",
    is_acronym: true,
    category: "emotions",
    tag: "Emotions",
    intensity: "crisis",
  },
  {
    id: 24,
    name: "Self-Soothe with Senses",
    content:
      "Practice self-soothing with your senses: Engage each of your five senses to comfort and calm yourself.\nSight: Look at calming images or scenes.\nSound: Listen to soothing music or sounds.\nTouch: Feel the texture of a soft blanket or comforting object.\nSmell: Inhale a pleasant scent or aroma.\nTaste: Eat or drink something enjoyable and soothing.\nUsing your senses to self-soothe can reduce emotional distress and promote relaxation during challenging moments.",
    explanation:
      "Using your senses promotes emotional soothing and distress reduction.",
    preview: "Soothe yourself with sensory experiences.",
    is_acronym: false,
    category: "emotions",
    tag: "Emotions",
    intensity: "crisis",
  },
  {
    id: 25,
    name: "Opposite Action",
    content:
      "Practice opposite action: When your emotion doesn’t fit the facts of the situation, deliberately choose to act opposite to what your emotion urges you to do. For example, if you feel like avoiding a situation due to anxiety, intentionally approach it instead. This skill helps to reduce the intensity of the emotion by changing your behavioral response to align with the situation rather than the emotion.",
    explanation:
      "Opposite action reduces emotion intensity by acting contrary to urges.",
    preview: "Reduce emotion intensity with opposite action.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "crisis",
  },
  {
    id: 26,
    name: "Distract with ACCEPTS",
    content:
      "Use ACCEPTS to distract from distressing emotions:\nActivities: Engage in enjoyable activities.\nContributing: Help someone else.\nComparisons: Compare yourself to others less fortunate.\nEmotions: Generate different emotions.\nPushing Away: Mentally push the situation away.\nThoughts: Focus on other thoughts.\nSensations: Create intense sensations.\nACCEPTS helps to shift your focus away from distressing emotions by engaging in various activities and cognitive strategies.",
    explanation: "ACCEPTS distracts from distressing emotions.",
    preview: "Distract yourself with ACCEPTS.",
    is_acronym: true,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "crisis",
  },
  {
    id: 27,
    name: "ABC Please",
    content:
      "Practice ABC Please to maintain emotional stability:\nAccumulate positive emotions: Engage in activities that bring you joy and happiness.\nBuild mastery: Develop new skills and enhance your confidence.\nCope ahead: Plan and prepare for challenging situations in advance.\nABC Please promotes emotional stability by fostering positive emotions, building competence, and proactive coping.",
    explanation:
      "ABC Please maintains emotional stability through positive habits.",
    preview: "Maintain stability with ABC Please.",
    is_acronym: true,
    category: "yesfit",
    tag: "Fits Facts",
    intensity: "medium",
  },
  {
    id: 28,
    name: "Wise Mind",
    content:
      "Find a balance between your emotional mind and reasonable mind to make decisions from a place of inner wisdom. Wise Mind integrates emotional and rational thinking to respond to situations in a balanced and effective manner.",
    explanation: "Wise Mind balances emotional and rational thinking.",
    preview: "Balance thinking with Wise Mind.",
    is_acronym: false,
    category: "yesfit",
    tag: "Fits Facts",
    intensity: "medium",
  },
  {
    id: 29,
    name: "FAST",
    content:
      "Practice FAST to maintain self-respect in relationships:\nFair: Be fair to yourself and others.\nApologies: Avoid unnecessary apologies.\nStick to values: Stay true to your personal values.\nTruthful: Be honest and avoid exaggerations.\nFAST helps to promote healthy boundaries and maintain self-respect in interpersonal interactions.",
    explanation: "FAST maintains self-respect in relationships.",
    preview: "Maintain self-respect with FAST.",
    is_acronym: true,
    category: "yesfit",
    tag: "Fits Facts",
    intensity: "medium",
  },
  {
    id: 30,
    name: "DEAR MAN",
    content:
      "Use DEAR MAN to assertively communicate your needs:\nDescribe: Describe the situation clearly.\nExpress: Express your feelings and thoughts about the situation.\nAssert: Assertively state your needs or requests.\nReinforce: Reinforce the benefits of meeting your request.\nMindful: Stay mindful of your goals during the interaction.\nAppear confident: Present yourself confidently.\nNegotiate: Be willing to negotiate to reach a mutually beneficial outcome.\nDEAR MAN helps you effectively communicate and assert your needs while maintaining self-respect and positive relationships.",
    explanation: "DEAR MAN supports assertive communication of needs.",
    preview: "Communicate assertively with DEAR MAN.",
    is_acronym: true,
    category: "yesfit",
    tag: "Fits Facts",
    intensity: "medium",
  },
];

export default skillsData;
