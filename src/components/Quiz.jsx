import React from 'react';

const Quiz = () => {
  return <div>
         <section id="quiz" className="quiz">
      <div className="container my-5">
        <div id="intro">
          <div className="counter">
            <p className="prefix">Fragen:</p>
            <h1 id="counter">1/10</h1>
          </div>
          <div className="score">
            <p className="prefix">Punkten:</p>
            <h1 id="score">3</h1>
          </div>
        </div>
        <div className="question-holder row">
          <div className="col-12">
            <h1 id="question"></h1>
          </div>
        </div>
  
        <div className="row">
          <div className="col-12">
            <div className="answer-container card">
              <p className="answer-prefix">A</p>
              <p className="answer-text" data-answer="a">Antwort A</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="answer-container card">
              <p className="answer-prefix">B</p>
              <p className="answer-text" data-answer="b">Antwort B</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="answer-container card">
              <p className="answer-prefix">C</p>
              <p className="answer-text" data-answer="c">Antwort B</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="answer-container card">
              <p className="answer-prefix">D</p>
              <p className="answer-text" data-answer="d">Antwort D</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>;
};

export default Quiz;
