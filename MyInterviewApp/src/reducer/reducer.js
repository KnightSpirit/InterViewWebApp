import { combineReducers } from 'redux';
function question(state={}, action) {
  switch(action.type) {
    case 'get_questions':
      return { ...state, question: {...action.question}};
    case 'posting_result': 
      return { ...state, posting: true, content: '提交答案中' }
    case 'get_post_ans_result': 
      return { ...state, posting: false }
    default:
      return state;
  }
}

function questionsType(state= {}, action) {
  switch(action.type) {
    case 'hide_toast': 
      return {...state, timeout: action.hide}
    case 'show_toast': 
      return {...state, content: action.content, show: true}
    case 'save_question_dict':
      let qTypes = action.qTypes;
      SaveQuestionTypeToLocal(qTypes);
      return { ...state, init: true};
    default:
      return state;
  }
}

function SaveQuestionTypeToLocal(qTypesStr){
  localStorage.setItem('type_dict', qTypesStr);
}

const questionsReducer = combineReducers({question, questionsType});
export default questionsReducer;


