import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-area',
  templateUrl: './doctor-area.component.html',
  styleUrls: ['./doctor-area.component.scss']
})
export class DoctorAreaComponent implements OnInit {
  slidesImg:any = [
    {image:'./assets/doctors/162228271360b211d9778d2.jpeg', title: 'د.مؤمن ندا', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي    '},
    {image:'./assets/doctors/162228208560b20f6575aec.jpeg', title: 'د.عبدالرحمن علاء', content:'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي    '},
    {image:'./assets/doctors/162228271360b211d9778d2.jpeg',title: 'د.محمود طه', content: 'جراح اوعيه دمويه'},
    {image:'./assets/doctors/162230311560b2618b2e2dc.jpg',title: 'د.احمد عايد النجار', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي'},
    {image:'./assets/doctors/162427758060d0824c6d534.jpg',title: 'د.محمود صلاح', content: 'صدر'},
    {image:'./assets/doctors/162427800860d083f8e3954.jpg',title: 'د.حامد حجازي', content: 'نسا و توليد'},
    {image:'./assets/doctors/162431561960d116e3d5bcf.jpg',title: 'د.بيشوي عاطف', content: 'باطنه'},
    {image:'./assets/doctors/162431576960d1177999cae.jpg',title: 'د.مينا ماجد', content: 'باطنه'},
    {image:'./assets/doctors/162431618560d11919c98f3.jpg',title: 'د.امير امين', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي'},
    {image:'./assets/doctors/1628365425610ee271cb970.jpg',title: ' د.احمدعبدالستار', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي'},
    {image:'./assets/doctors/162903511461191a6a60172.jpg',title: 'د.احمد عزت', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي'},
    {image:'./assets/doctors/162903548661191bde443d4.jpg',title: 'د.احمد عصام', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي'},
    {image:'./assets/doctors/162903578161191d051eb1f.jpg',title: 'د.احمد جمال', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي'},
    {image:'./assets/doctors/162903578161191d051eb1f.jpg',title: 'د.احمد طارق', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي'},
    {image:'./assets/doctors/162903629461191f0630c11.jpg',title: 'د.بيتر سمير', content: 'أخصائي العلاج الطبيعي وإعاده التأهيل الحركي'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
