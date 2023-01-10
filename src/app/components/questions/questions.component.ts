import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  accordion= [
    {title: 'هل الرعاية الصحية عن بعُد امنة؟', content: 'تُعد خصوصيتكمم وحماية معلوماتك من أهم أولويات اطلب دكتور. ستكون استشارتكم للرعاية الصحية عن بُعد خاصة وسرية تمامًا مثلما يتم إجراء موعدًا وجهًا لوجه. كما يتم تخزين معلوماتكم الطبية بسرية تامة على نفس نظام السجلات الطبية الإلكترونية المستخدم في مستشفيات وعيادات اطلب دكتور وبطريقة مشفرة.'},
    {title: 'هل الرعاية الصحية عن بعُد امنة؟', content: 'تُعد خصوصيتكمم وحماية معلوماتك من أهم أولويات اطلب دكتور. ستكون استشارتكم للرعاية الصحية عن بُعد خاصة وسرية تمامًا مثلما يتم إجراء موعدًا وجهًا لوجه. كما يتم تخزين معلوماتكم الطبية بسرية تامة على نفس نظام السجلات الطبية الإلكترونية المستخدم في مستشفيات وعيادات اطلب دكتور وبطريقة مشفرة.'}
  ]

  ngOnInit(): void {
    let anchor= document.querySelectorAll('.accordion-item .accordion-title');
    let anchorArr= Array.from(anchor);
    anchorArr.forEach((ele)=> {
      ele.classList.remove('active')
      ele.addEventListener('click', (e)=> {
        e.preventDefault();
        anchorArr.forEach((ele)=> {
          ele.classList.remove('active');
        });
        ele.classList.add('active')      
      })
    })
  }

}
