'use strict'

var test = {
  testHeader: 'Тест по программированию',

  questionList: [
    {
      question: 'Вопрос №1',
      answerVariants: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      rightAnswer: 1
    },
        {
      question: 'Вопрос №2',
      answerVariants: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      rightAnswer: 2
    },
        {
      question: 'Вопрос №3',
      answerVariants: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4'],
      rightAnswer: 3
    },
  ]
};

var testStr = JSON.stringify(test);
    localStorage.setItem('str', testStr);

    testStr = localStorage.getItem('str');
    var testForGen = JSON.parse(testStr); //js-obj from localStorage

$(function () {
  var testTmpl = $('#tmpl').html();
  var content = tmpl(testTmpl, testForGen);

  $('#test').prepend(content);

  var sum = 0;

  $('#check-result').on('click', function() {
    $('input:checked').each(function() {
      var inputCheckedId = $(this).attr('id');
      
      var ques = Math.floor(inputCheckedId/10); //номер вопроса
      var answ = inputCheckedId%10; //номер выбранного ответа

      if (testForGen.questionList[ques-1].rightAnswer === answ) {
        sum += 1
      }

      $(this).attr('checked', false)//очищаем инпуты
    })


    if (sum == testForGen.questionList.length) {
    alert('Тест пройден!');
    sum = 0; //после закрытия модальки обнуляем сумму и можно проходить тест заново без перезагрузки страницы
    return sum
    }
    else {
      alert('Тест не пройден... Количество неправильных ответов: ' + (testForGen.questionList.length - sum));
      sum = 0;
      return sum
    }
  })


})



