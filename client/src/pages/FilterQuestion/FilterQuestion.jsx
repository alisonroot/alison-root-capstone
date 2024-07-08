import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./FilterQuestion.scss";
import questions from "../../data/filter-questions.json"

// const questions = [
//   {
//     id: "1",
//     explanation:
//       "Great to hear you're feeling fine! This is a great time to strengthen your mindfulness skills.",
//     question:
//       "Would you prefer to do a meditation or incorporate mindfulness into an activity?",
//     button1: "Take a break",
//     button1path: "/skills/category/break",
//     button2: "Incorporate",
//     button2path: "/skills/category/incorporate",
//     extraButton: false,
//   },
//   {
//     id: "2",
//     explanation:
//       "You chose low emotional intensity. A quick breathing or grounding exercise may help.",
//     question: "Would you prefer breathing exercises or grounding techniques?",
//     button1: "Breathing",
//     button1path: "/skills/category/breathing",
//     button2: "Grounding",
//     button2path: "/skills/category/grounding",
//     extraButton: false,
//   },
//   {
//     id: "3",
//     explanation:
//       "By better understanding your feelings, you'll be able to make better decisions.",
//     question: "Does this emotion fit the facts of the situation?",
//     button1: "Yes",
//     button1path: "/question/6",
//     button2: "No",
//     button2path: "/skills/category/nofit",
//     extraButton: true,
//     extraButtonText: "I'm not sure",
//     extraButtonPath: "FitFactsModal",
//   },
//   {
//     id: "4",
//     explanation: "Filler text",
//     question: "Are you able to change the situation?",
//     button1: "Yes",
//     button1path: "/skills/category/control",
//     button2: "No",
//     button2path: "/skills/category/nocontrol",
//     extraButton: false,
//   },
//   {
//     id: "5",
//     explanation: "Filler text",
//     question: "Are you concerned about your emotions or your actions?",
//     button1: "Emotions",
//     button1path: "/skills/category/emotion",
//     button2: "Actions",
//     button2path: "/skills/category/behaviour",
//     extraButton: false,
//   },
//   {
//     id: "6",
//     explanation: "Now think about the following:",
//     question: "Is acting on this emotion effective?",
//     button1: "Take a break",
//     button1path: "/skills/category/break",
//     button2: "Incorporate",
//     button2path: "/skills/category/incorporate",
//     extraButton: true,
//     extraButtonText: "I'm not sure",
//     extraButtonPath: "/skills/category/evaluate",
//   },
// ];

function FilterQuestion() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    const question = questions.find((q) => q.id === questionId);
    if (question) {
      setQuestionData(question);
    }
  }, [questionId]);

  if (!questionData) {
    return <span>Loading question</span>;
  }

  return (
    <div>
      <h3>{questionData.explanation}</h3>
      <h2>{questionData.question}</h2>
      <div>
        <Button
          buttonText={questionData.button1}
          onClick={() => navigate(questionData.button1path)}
        />
        <Button
          buttonText={questionData.button2}
          onClick={() => navigate(questionData.button2path)}
        />
      </div>
      {questionData.extraButton && (
        <Button
          buttonText={questionData.extraButtonText}
          onClick={() => navigate(questionData.extraButtonPath)}
        />
      )}
    </div>
  );
}

export default FilterQuestion;
