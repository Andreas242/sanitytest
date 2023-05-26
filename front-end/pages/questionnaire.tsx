import client from '../client'
function Questionnaire({ questions }) {
    return (
      <div>
        {questions.map((question) => (
          <div key={question._id}>
            <h2>{question.questionText}</h2>
            {question.options.map((option) => (
              <div key={option._key}>
                <p>{option.optionText}</p>
                <p>Score: {option.score}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  // This would be in your Next.js page component
  export async function getServerSideProps() {
    const data = await client.fetch('*[_type == "question"]');
    
    return {
      props: {
        questions: data,
      },
    };
  }
  
  export default Questionnaire;