function GetQuestions (questions) {
  return {
    type: 'get_questions',
    question : questions
  }
}

function GetQuestionDict(dict) {
  return {
    type: 'save_question_dict',
    qTypes: dict
  } 
}

function PostResult(res) {
  return {
    type: 'get_post_ans_result',
    success: res.result
  }
}

export function ForPost(waitPost = false) {
  return {
    type: 'posting_result',
    posting: waitPost
  }
}

export function PostAsAsync(ans) {
  let pAns = {
    ans: ans
  }
  return (dispatch) => {
    fetch(new Request('http://localhost:3000/api/postLongWordAnswer', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(pAns)
    })).then(res => {
      return res.json;
    }).then(res => {
      dispatch(PostResult(JSON.parse(res)));
      dispatch(ForPost());
    })
  };
}

export function GetQuestionsAsync(){
  return (dispatch) => {
    fetch("http://localhost:3000/api/getQuestion").then(res => {
      return res.text();
    }).then(res => {
      dispatch(GetQuestions(JSON.parse(res)));
    })
  };
}

export function GetQuestionDictAsync() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/questionTypes").then(res => {
      return res.text();
    }).then(res => {
      dispatch(GetQuestionDict(res));
    });
  };
}