const express = require('express');
const cors = require('cors');
const bodyp = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyp.json());
app.get('/', (req, res) => {
  console.log("hello");
});
const questionTypes = ['longwords', 'select'];

const questionTypesDict = {
  'longwords': '简答描述题',
  'select': '选择题'
}

app.get('/api/questionTypes', (req, res) => {
  res.send(questionTypesDict);
})

app.get('/api/getQuestion', (req, res) => {
  res.send({
    Q_Id: 0,
    Q_Note: '谈谈对前端安全的理解，有什么，怎么防范',
    Q_Type: questionTypes[0]
  });
});

app.post('/api/postLongWordAnswer', (req, res) => {
  let ans = req.body.ans;
  let ansPoint = ans.split(';');
  
  setTimeout(() => {
    res.status(200).send({
      success: true
    })
  }, 5000);
});

app.listen(3000, () => {
  console.log('启动了');
});