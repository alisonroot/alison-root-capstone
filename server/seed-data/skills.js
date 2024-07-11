const skillsData = [
  {
    id: 1,
    name: "Expanding Awareness Meditation",
    content:
      "Focus on the present moment by expanding your awareness. Pay attention to your breathing and surroundings. Notice the sensations in your body. If your mind wanders, gently bring it back to the present moment.",
    explanation:
      "This meditation helps to anchor you in the present moment by broadening your awareness.",
    preview: "Anchor yourself in the present moment.",
    is_acronym: false,
    category: "break",
    tag: "Break",
    intensity: "Mindfulness",
  },
  {
    id: 2,
    name: "Drop into Pauses",
    content:
      "Focus on the pauses between inhaling and exhaling. Notice the stillness and calm in these moments. Use these pauses to ground yourself. Pay attention to the transition between breaths and let go of tension.",
    explanation: "Pausing between breaths can help to calm your mind and body.",
    preview: "Calm your mind with breath pauses.",
    is_acronym: false,
    category: "break",
    tag: "Break",
    intensity: "Mindfulness",
  },
  {
    id: 3,
    name: "Mindful Movement",
    content:
      "Engage in gentle, mindful movements like yoga or stretching. Focus on the sensations in your body. Move slowly and deliberately. Allow your mind to rest on the physical sensations and movements.",
    explanation:
      "Mindful movement combines physical activity with mindfulness to reduce stress.",
    preview: "Reduce stress with mindful movements.",
    is_acronym: false,
    category: "break",
    tag: "Break",
    intensity: "Mindfulness",
  },
  {
    id: 4,
    name: "Guided Meditation",
    content:
      "Listen to a guided meditation that directs your focus. Follow the instructions to relax and center yourself. Allow the guidance to lead you to a peaceful state. These meditations can help with relaxation, focus, and emotional regulation.",
    explanation: "Guided meditations provide structured relaxation and focus.",
    preview: "Relax with guided meditation.",
    is_acronym: false,
    category: "break",
    tag: "Break",
    intensity: "Mindfulness",
  },
  {
    id: 5,
    name: "How Skills",
    content:
      "Participate in activities with awareness, one-mindfully, and non-judgmentally. Engage fully in the present activity. Let go of judgments and stay focused. These skills help you to be present and engaged without being critical.",
    explanation: "How skills help you to fully engage in the present moment.",
    preview: "Engage fully in the present.",
    is_acronym: false,
    category: "incorporate",
    tag: "Incorporate",
    intensity: "Mindfulness",
  },
  {
    id: 6,
    name: "What Skills",
    content:
      "Observe, Describe, and Participate in the present moment. Notice what is happening, describe it, and engage fully. This helps to ground you in the present and reduces distraction.",
    explanation:
      "What skills help you to observe and describe your experience.",
    preview: "Observe and describe your experience.",
    is_acronym: false,
    category: "incorporate",
    tag: "Incorporate",
    intensity: "Mindfulness",
  },
  {
    id: 7,
    name: "4-7-8 Breathing",
    content:
      "Inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds. Repeat several times. This helps to calm the nervous system and reduce anxiety. The extended exhale promotes relaxation.",
    explanation:
      "4-7-8 breathing helps to reduce anxiety and stress by extending the exhale.",
    preview: "Calm your nervous system with extended exhales.",
    is_acronym: false,
    category: "breathing",
    tag: "Breathing",
    intensity: "Low",
  },
  {
    id: 8,
    name: "Box Breathing",
    content:
      "Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, and hold for 4 seconds. Repeat several times. This balanced breathing pattern can help to reduce stress and improve focus.",
    explanation:
      "Box breathing is a simple technique with equal-length breaths and holds to reduce stress.",
    preview: "Reduce stress with balanced breathing.",
    is_acronym: false,
    category: "breathing",
    tag: "Breathing",
    intensity: "Low",
  },
  {
    id: 9,
    name: "Hand Breathing",
    content:
      "Trace your fingers with your breath. Inhale as you trace up one finger, and exhale as you trace down. Continue tracing all your fingers. This combines breath with tactile sensation to ground you.",
    explanation:
      "Hand breathing combines breath with movement to ground yourself.",
    preview: "Ground yourself with hand breathing.",
    is_acronym: false,
    category: "breathing",
    tag: "Breathing",
    intensity: "Low",
  },
  {
    id: 10,
    name: "5-4-3-2-1 Grounding",
    content:
      "Identify 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. Focus on each one to ground yourself in the present moment.",
    explanation:
      "This grounding technique helps to bring you back to the present moment.",
    preview: "Ground yourself in the present moment.",
    is_acronym: false,
    category: "grounding",
    tag: "Grounding",
    intensity: "Low",
  },
  {
    id: 11,
    name: "Reality Acceptance",
    content:
      "Accept the situation fully and completely as it is. Let go of fighting reality. Practice radical acceptance to reduce suffering caused by resistance.",
    explanation:
      "Accepting reality helps to reduce suffering caused by resistance.",
    preview: "Reduce suffering by accepting reality.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "Medium",
  },
  {
    id: 12,
    name: "Pros and Cons",
    content:
      "Make a list of the pros and cons of acting on your emotions. Weigh the benefits and drawbacks carefully. This helps to make balanced decisions.",
    explanation: "Weighing pros and cons helps to make balanced decisions.",
    preview: "Make balanced decisions with pros and cons.",
    is_acronym: false,
    category: "control",
    tag: "Can Change",
    intensity: "Medium",
  },
  {
    id: 13,
    name: "Problem Solving",
    content:
      "Identify the problem clearly. Brainstorm possible solutions. Evaluate each solution and choose the best one. Implement the solution and review its effectiveness. This methodical approach helps to address issues effectively.",
    explanation: "Problem solving helps to address issues methodically.",
    preview: "Address issues with problem solving.",
    is_acronym: false,
    category: "control",
    tag: "Can Change",
    intensity: "Medium",
  },
  {
    id: 14,
    name: "Improve",
    content:
      "Identify areas where you can make positive changes. Set realistic goals. Take steps to achieve these goals and monitor your progress. This helps to make positive changes in your life.",
    explanation: "Improving skills help to make positive changes in your life.",
    preview: "Make positive changes with improve.",
    is_acronym: false,
    category: "control",
    tag: "Can Change",
    intensity: "Medium",
  },
  {
    id: 15,
    name: "Opposite Action to Fear",
    content:
      "If you fear social interaction, make eye contact and start a conversation. Gradually face your fears. This helps to reduce their power over you.",
    explanation: "Facing fears gradually helps to reduce their power.",
    preview: "Reduce fear by facing it gradually.",
    is_acronym: false,
    category: "nofit",
    tag: "Doesn't Fit Facts",
    intensity: "Medium",
  },
  {
    id: 16,
    name: "Opposite Action to Shame",
    content:
      "Instead of hiding, share your experience with a trusted person. Seek understanding and support. This helps to reduce feelings of shame.",
    explanation: "Sharing experiences can reduce feelings of shame.",
    preview: "Reduce shame by sharing experiences.",
    is_acronym: false,
    category: "nofit",
    tag: "Doesn't Fit Facts",
    intensity: "Medium",
  },
  {
    id: 17,
    name: "Opposite Action to Sadness",
    content:
      "Engage in activities that bring joy or satisfaction. Counteract sadness by doing things you enjoy. This helps to lift your mood.",
    explanation: "Doing enjoyable activities helps to counteract sadness.",
    preview: "Counteract sadness with enjoyable activities.",
    is_acronym: false,
    category: "nofit",
    tag: "Doesn't Fit Facts",
    intensity: "Medium",
  },
  {
    id: 18,
    name: "Opposite Action to Anxiety",
    content:
      "Approach the situation causing anxiety gradually. Take small steps towards facing it. This helps to reduce anxiety over time.",
    explanation:
      "Gradual exposure to anxiety-provoking situations reduces their impact.",
    preview: "Reduce anxiety with gradual exposure.",
    is_acronym: false,
    category: "nofit",
    tag: "Doesn't Fit Facts",
    intensity: "Medium",
  },
  {
    id: 19,
    name: "Radical Acceptance",
    content:
      "Accept the situation fully and completely as it is. Let go of fighting reality. Practice radical acceptance to reduce suffering caused by resistance.",
    explanation:
      "Accepting reality helps to reduce suffering caused by resistance.",
    preview: "Reduce suffering by accepting reality.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "High",
  },
  {
    id: 20,
    name: "Turning the Mind",
    content:
      "Commit to accepting reality and turn your mind towards acceptance whenever you find yourself resisting. Recommit as needed. This helps to reduce emotional distress.",
    explanation:
      "Turning the mind helps to reduce emotional distress by accepting reality.",
    preview: "Reduce distress by accepting reality.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "High",
  },
  {
    id: 21,
    name: "Urge Surfing",
    content:
      "Observe your urges without acting on them. Notice how they come and go, like waves. This helps to reduce the power of urges over you.",
    explanation: "Observing urges without acting on them reduces their power.",
    preview: "Reduce urge power by observing without acting.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "High",
  },
  {
    id: 22,
    name: "Willing Hands",
    content:
      "Relax your hands and let them rest naturally, palms facing up. This physical posture can help to cultivate a sense of acceptance and openness.",
    explanation:
      "Willing hands can help to reduce resistance and increase acceptance.",
    preview: "Increase acceptance with willing hands.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "High",
  },
  {
    id: 23,
    name: "TIPP",
    content:
      "Temperature: Splash your face with cold water.\nIntense Exercise: Engage in vigorous physical activity.\nPaced Breathing: Breathe slowly in and out.\nPaired Muscle Relaxation: Tense and then relax each muscle group.",
    explanation:
      "TIPP helps to quickly reduce extreme emotions by using physical interventions.",
    preview: "Quickly reduce extreme emotions with TIPP.",
    is_acronym: true,
    category: "emotions",
    tag: "Emotions",
    intensity: "Crisis",
  },
  {
    id: 24,
    name: "Self-Soothe with Senses",
    content:
      "Use your five senses to soothe yourself. Listen to calming music, look at beautiful images, touch a soft blanket, smell a pleasant scent, and taste something enjoyable. This helps to reduce emotional distress.",
    explanation: "Using your senses can help to soothe emotional distress.",
    preview: "Soothe yourself with your senses.",
    is_acronym: false,
    category: "emotions",
    tag: "Emotions",
    intensity: "Crisis",
  },
  {
    id: 25,
    name: "Opposite Action",
    content:
      "If your emotion doesn’t fit the facts, do the opposite of what it tells you. For example, if you're avoiding something due to anxiety, approach it instead. This helps to reduce the intensity of the emotion.",
    explanation:
      "Doing the opposite of your emotion's urge can reduce its intensity.",
    preview: "Reduce emotion intensity with opposite action.",
    is_acronym: false,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "Crisis",
  },
  {
    id: 26,
    name: "Distract with ACCEPTS",
    content:
      "Activities: Engage in enjoyable activities.\nContributing: Help someone else.\nComparisons: Compare yourself to others less fortunate.\nEmotions: Generate different emotions.\nPushing Away: Mentally push the situation away.\nThoughts: Focus on other thoughts.\nSensations: Create intense sensations.",
    explanation: "ACCEPTS helps to distract you from distressing emotions.",
    preview: "Distract yourself with ACCEPTS.",
    is_acronym: true,
    category: "behaviour",
    tag: "Behaviour",
    intensity: "Crisis",
  },
  {
    id: 27,
    name: "ABC Please",
    content:
      "Accumulate positive emotions: Do things that make you happy.\nBuild mastery: Develop skills and confidence.\nCope ahead: Plan for difficult situations.",
    explanation:
      "ABC Please helps to maintain emotional stability by building positive habits.",
    preview: "Maintain stability with ABC Please.",
    is_acronym: true,
    category: "yesfit",
    tag: "Fits Facts",
    intensity: "Medium",
  },
  {
    id: 28,
    name: "Wise Mind",
    content:
      "Find a balance between your emotional mind and reasonable mind. Make decisions from a place of inner wisdom. This helps to respond to situations in a balanced way.",
    explanation: "Wise Mind helps to balance emotional and rational thinking.",
    preview: "Balance thinking with Wise Mind.",
    is_acronym: false,
    category: "yesfit",
    tag: "Fits Facts",
    intensity: "Medium",
  },
  {
    id: 29,
    name: "FAST",
    content:
      "Fair: Be fair to yourself and others.\nApologies: Don’t apologize for being alive or for having an opinion.\nStick to values: Stay true to your values.\nTruthful: Be honest and avoid exaggerations.",
    explanation: "FAST helps to maintain self-respect in relationships.",
    preview: "Maintain self-respect with FAST.",
    is_acronym: true,
    category: "yesfit",
    tag: "Fits Facts",
    intensity: "Medium",
  },
  {
    id: 30,
    name: "DEAR MAN",
    content:
      "Describe: Describe the situation.\nExpress: Express your feelings.\nAssert: Assert your needs.\nReinforce: Reinforce the benefits of getting what you want.\nMindful: Stay mindful of your goals.\nAppear confident: Appear confident in your request.\nNegotiate: Be willing to negotiate.",
    explanation: "DEAR MAN helps to assertively communicate your needs.",
    preview: "Communicate assertively with DEAR MAN.",
    is_acronym: true,
    category: "yesfit",
    tag: "Fits Facts",
    intensity: "Medium",
  },
];

export default skillsData;
