import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs:any= [
    {
      image: './assets/articles/162220484860b0e1b0e0439.jpeg', 
      title: 'علاج أمراض الكلى',
      content: 'يشمل علاج امراض الكلى عدداً من الخطط العلاجية المتبعة للسيطرة على أعراض المرض والحد من المضاعفات. حيث يعتمد البرنامج العلاجي على التخلص من العامل',
      link: '/article-content/1'
    },
    {
      image: './assets/articles/162220513060b0e2ca623b0.jpg',
      title: 'اعراض ارتفاع الضغط',
      content: 'يعد ارتفاع ضغط الدم (بالإنجليزية: Hypertension) من الحالات الشائعة، ويحدث نتيجة لتضيق الشرايين ومقاومتها لمرور الدم من خلالها مما يزيد من العبء على القلب',
      link: '/article-content/2'
    },
    {
      image: './assets/articles/162220541460b0e3e6978b9.jpg',
      title: 'علاج الام الركبة بطرق طبيعية',
      content: `تعد آلام الركبة من المشكلات الصحية الشائعة التي تصيب عدد كبير من الأشخاص، ويمكن أن تكون الآلام مؤقتة أو دائمة نتيجة الإصابة بالتهابات في العظام والمفاصل.`,
      link: '/article-content/3'
    }
  ]
  constructor() { 
  
  }

  ngOnInit(): void {
    var btn= document.querySelector('.more-services-btn');
    btn?.classList.add('remove')
  }
  

}
