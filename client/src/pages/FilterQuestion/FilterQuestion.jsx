import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./FilterQuestion.scss";
import questions from "../../data/filter-questions.json"

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
