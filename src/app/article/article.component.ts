import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  id:any= '';
  articleArr: any= [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      if(params.has('id')) {
        this.id= params.get('id');
        console.log(this.id);  
      }
    });

    if(this.id== 1) {
      this.articleArr= [
        {
          title: 'أهمية العلاج الطبيعي بعد عملية الغضروف',
          content: 'في حال تمزق أحد الغضاريف وخروجه من بين العظام، فإنه من الممكن أن يضغط على الأعصاب المجاورة مؤديًا لألم وتنميل وضعف في الظهر والساقين والذراعين، وهذا الألم يمكن تخفيفه في كثير من الأحيان بالراحة والمسكنات والعلاج الطبيعي.﻿'
        },
        {
          title: 'العلاج الطبيعي لتصحيح الوضع ',
          content: 'يجب أن يحافظ المريض على وضعية صحيحة بعد إجراء عملية الغضروف حيث يعلم المعالج الطبيعي المريض وضعية الجلوس المناسبة باستخدام لفافة أسفل الظهر لحماية الفقرات والعضلات الملتئمة، وتعد هذه الخطوة من أهم الخطوات لحماية الظهر ومنع حدوث نوبات الألم أسفل الظهر مستقبلًا.'
        },
        {
          title: 'نبذة عن مرض النقرس',
          content: 'النقرس هو أحد أنواع مرض التهاب المفاصل، ينشأ النقرس جراء ارتفاع منسوب حمض اليوريك وبدء تراكمه في الجسم، وحمض اليوريك هو مادة يتم تصنيعها عند هضم وتفكيك مركبات البيورينات (Purines)، وهي مركبات تتواجد في بعض أنسجة الجسم وفي أغذية معينة.'
        }
    ];
     // var random_index = Math.floor(Math.random() * 3);
    }

    if(this.id== 2) {
      this.articleArr= [
        {
          title: 'تقنية العلاج باستخدام التنويم المغناطيسي',
          content: 'اصبح التداوي باستخدام تقنية العلاج الكمي بالرنين المغناطيسي بالانجليزية Quantum Healing Hypnosis Technique QHHT من طرق التداوي الشائعة لدى بعض المجتمعات وتساعد هذه التقنية العلاجية التي قامت باكتشافها...'
        }
      ]
    }

    if(this.id== 3) {
      this.articleArr= [
        {
          title: 'اللحميات الأنفية لدى الأطفال',
          content: 'ما هي الناميات خلف الانفية و تعرف ايضا باللحميات الانفية و هي عبارة عن نسيج ليمفاوي موجود في المنطقة خلف الانفية البلعوم الانفي و هي جزء من حلقة من الانسجة الليمفاوية الموجودة في البلعوم'
        },
        {
          title: 'نصائح للعناية بثقب الأذن والأنف',
          content: 'ثقب الاذن او الانف المخاطر المتعلقة بثقب الاذن والانف كيفية العناية بثقب الاذن كيفية العناية بثقب الانف خطوات التحضير لثقب الانف طرق العناية بثقب الانف ثقب الاذن او الانف يعتبر ثقب الجسم موضة منتشرة'
        }
      ]
    }

      if(this.id== 4) {
      this.articleArr= [
        {
          title: 'امراض الكلى والتقدم في العمر',
          content: 'كل شخص يعيش لعمر طويل يمكنه أن يعاني من اختلال وظائف الكلى، وللأشخاص الأصحاء الذين يزيد عمرهم عن 40 سنة، فإن قيمة معدل الترشيح تتدنى بنحو 1% سنوياً من قيمته العليا التي تقع بين 120 و130 (مل/دقيقة)، وهذا التدني المرتبط بتقدم العمر يكون أقوى قليلاً لدى الرجال مقارنة بالنساء، ولكن لأن الإنسان مولود بسعة كبيرة للكلى، فإنه لن يلاحظ هذا الانحدار ما دام سليم الجسم.'
        }
      ]
    }

    if(this.id== 5) {
      this.articleArr= [
        {
          title: 'التهاب الكبد ب - Hepatitis B',
          content: 'التهاب الكبد ب الطويل الحضانة، أو التهاب الكبد الفيروسي ب هو تلوث حاد وخطير يصيب الكبد، يسببه فيروس التهاب الكبد ب (HBV - Hepatitis B virus).غالبية الأشخاص الذين يصابون بعدوى فيروس..'
        },
        {
          title: 'مرض تليف الكبد - Cirrhosis',
          content: 'مرض تليف الكبد أو تشمع الكبد هو مرض صعب جدًا يحدث عندما يصيب الكبد ندبة، والكبد هو عضو كبير ينتمي إلى الجهاز الهضمي.يقوم الكبد بتشكيلة واسعة من الوظائف الضرورية والحيوية لاستمرار الحياة للإنسان،.. '
        },
        {
          title:'سرطان الكبد - Liver Cancer',
          content: 'الكبد هو المسؤول عن التصفية المتواصلة للدم المتدفق في الجسم، كما يقوم بتحويل المواد المغذية والأدوية التي يتم امتصاصها في الجهاز الهضمي إلى مواد كيميائية جاهزة للاستعمال، وللكبد وظائف مهمة أخرى من..'
        },
        {
          title: 'التهاب الكبد - Hepatitis',
          content: 'يعد الكبد من الأعضاء الحيوية المهمة في جسم الإنسان الذي يساعد على تنقية الجسم من السموم، وإفراز البيليروبين، وتكسير الكربوهيدرات والدهون والبروتينات، والعديد من الوظائف الأخرى المهمة.'
        }
      ]
    }

    if(this.id== 6) {
      this.articleArr= [
        {
          title: 'ادوية القلب',
          content: 'الاسبرين تم اكتشاف فوائد الأسبرين للقلب والأوعية الدموية في الستينات، حيث يمكن أن يساعد الأسبرين في الحفاظ على كفاءة نقل الدم عبر الشرايين ومنع تخثر الدم بسبب آثاره المضادة للتجلط. تكون الجرعة المعيارية لمرضى القلب هي 81 مجم في اليوم من البيبي اسبرين'
        },
        {
          title: 'ادوية خفض الكوليسترول',
          content: 'يساعد الكوليسترول الجسم على بناء الخلايا الجديدة وإنتاج المادة العازلة للأعصاب، وإنتاج الهرمونات، لكن حدوث الالتهاب في جدران الأوعية الدموية يدفع الكوليسترول إلى التراكم، وبالتالي تزداد فرصة الإصابة بنوبة قلبية أو سكتة دماغية.'
        },
        {
          title: 'الوحمات الدموية',
          content: 'تحدث الوحمات الدموية فى نسبة عالية من المواليد، حيث قد تصل الإصابات إلى حوالي 10%، وعادة ما تظهر عند الولادة أو في الأسابيع الأولى بعدها، وتكون هذه الوحمات بشكل عام مسطحة أو مرتفعة قليلاً عن سطح الجلد، وذات لون زهري أو أحمر يميل إلى الزرقة، وقد جاءت التسمية العربية نتيجة الاعتقاد السائد بأن وحام الأم على شيء أثناء فترة حملها يؤدي إلى ولادة الطفل بجزء من هذا الشيء الذي تمنته الأم وتوحمت عليه.'
        }
      ]
    }

    if(this.id== 7) {
      this.articleArr=[
      {
        title: 'الشوفان لخفض الكولسترول',
        content: 'يزود 1-2 جرام من الشوفان الجسم بالألياف القابلة للذوبان مثل البيتا جلوكان، وهو أحد الألياف التي تشكل مادة هلامية بعد تناوله ترتبط بالكوليسترول داخل الحمض الصفراوي ويقلل نسبته في الدم، مما يجعله خيار مناسب يمكن إضافته إلى النظام الغذائي لمرضى الكوليسترول في الإفطار أو إلى الشوربات.'
      }
    ]
    }

    if(this.id== 8) {
      this.articleArr= [
        {
            title: 'طريقة اجراء عملية مفصل الكوع ',       
            content: 'إن عملية مفصل الكوع هى عملية جراحية يتم استبدال الأجزاء التالفة من عظام العضد و الزند بمفصل كوع اصطناعى'
        },

        {
          title: 'علاج الام الركبة بالزنجبيل',
          content: 'يتمتع الزنجبيل بخصائص مضادة للإلتهابات تجعله فعالا فى علاج الام الركبة و الام المفاصل'
        }
     ]
    }

    if(this.id== 9) {
      this.articleArr=[
        {
          title: 'فوائد اليانسون للصدر',
          content: 'يمكن أن يساهم اليانسون في علاج ضعف صحة الجهاز التنفسي، وقد عرف قديماً علاقة اليانسون والجهاز التنفسي، لذا استخدم في علاج العديد من الاضطرابات الصدرية التنفسية، لاحتوائه على المركبات النباتية التي تكافح الالتهاب، وتمنع العدوى'
        },
        {
          title: 'العلاقة بين الربو والرياضة',
          content: 'يعرف الربو على أنه حالة طبية مزمنة تؤثر على الشعب الهوائية في الرئتين وتسبب التهابها وتورمها، الأمر الذي يجعل من التنفس تحدياً صعباً أمام المريض، ويتسبب بظهور العديد من الأعراض المزمنة، مثل السعال والصفير أثناء التنفس.'
        }
      ]
    }

    if(this.id== 10) {
      this.articleArr= [
        {
          title: 'جراحة العمود الفقري بالتداخل المحدود',
          content: 'جراحة العمود الفقري بالتداخل المحدود (بالإنجليزية: Minimally Invasive Surgery)، هي نوع متقدم من أنواع جراحة العمود الفقري، والتي يتم فيها إجراء عمليات علاج الديسك وتثبيت الفقرات وغيرها من مشاكل العمود الفقري، عن طريق جرح صغير في الجلد.'
        }
      ]
    }

    if(this.id== 11) {
      this.articleArr= [
        {
          title: 'علاج التهاب المسالك البولية',
          content: 'تحدث عدوى المسالك البولية نتيجة دخول البكتيريا إلى جزء من أجزاء المسالك البولية مثل الكلى والمثانة ومجرى البول وتسببها بالعدوى والالتهاب في تلك الأنسجة مما يؤدي لظهور أعراض مثل الشعور بالحرقة والألم عند التبول، والحاجة الملحة للتبول وغيرها من الأعراض.'
        },
        {
          title: 'مدة علاج التهاب المسالك البولية',
          content: 'عادة ما تحتاج عدوى المسالك البولية غير المعقدة  إلى العلاج بالمضادات الحيوية لمدة تتراوح بين يومين إلى ثلاثة أيام، وفي حالات أخرى قد تكون هناك حاجة للعلاج لمدة تتراوح بين 7- 10 أيام.'
        }
      ]
    }
   
    if(this.id== 12) {
      this.articleArr= [
        {
          title: 'الصدفية',
          content: 'تعدّ الصدفية من أمراض المناعة الذاتية التي تنتج عن قيام الجسم بمهاجمة خلايا الجلد السليمة، وبمرور الوقت، يتسبب هذا الهجوم في ظهور بقع حمراء كثيرة على الجلد، ويصاحبها رغبة شديدة في الحكّة، وبسبب مظهرها الملحوظ، يعتقد بعض الأشخاص أن الصدفية مرض معدي، وخاصةً عند ظهورها في مناطق مكشوفة مثل اليدين، ولكنها في الحقيقة لا يمكن أن تنتقل من شخص لآخر.'
        },
        {
          title: 'البهاق',
          content: 'ينتج البهاق عن اضطراب في المناعة الذاتية، إذ يقوم الجسم بمهاجمة الخلايا الصباغية في الجلد، والتي تقوم بإنتاج الصبغة المسؤولة عن لون البشرة والشعر، مما يؤدي إلى ظهور بقع باللون الأبيض على الجلد.'
        },
        {
          title: 'الإكزيما',
          content: 'تعرف أيضاً بـ"التهاب الجلد التأتبي"، وهو اضطراب في الجلد يسبب الشعور بالحكّة، وغالباً ما يصيب الأطفال أكثر من الكبار، ويمكن أن يستمر حتى مرحلة البلوغ، ويكون على هيئة لون أحمر في الجلد ومغطى بالقشور، وعلى الرغم من أنها مشكلة جلدية غير معدية،'
        }
      ]
    }

    if(this.id== 13) {
      this.articleArr= [
        {
          title: 'إصابة الضفيرة العضدية عند حديثي الولادة',
          content: 'تعتبر الضفيرة العضدية مجموعه عصبية تتمحور حول الكتف وهي مسؤولة عن حركات الذراع وفي حال حدوث اي اضطراب في حركة الذراع قد يكون سببها حدوث ضعف او تدمير كامل لتلك الاعصاب وعاده ما تحصل اصابة الضفيرة العضدية اثر حدوث خلع الكتف عند الاطفال حديثي الولادة حيث من الممكن حصول هذا الخلل اثر حدوث صعوبه في الولادة.'
        }
      ]
    }

    if(this.id== 14) {
      this.articleArr= [
        {
          title: 'الاسبرين',
          content: 'تم اكتشاف فوائد الأسبرين للقلب والأوعية الدموية في الستينات، حيث يمكن أن يساعد الأسبرين في الحفاظ على كفاءة نقل الدم عبر الشرايين ومنع تخثر الدم بسبب آثاره المضادة للتجلط. تكون الجرعة المعيارية لمرضى القلب هي 81 مجم في اليوم من البيبي اسبرين (بالإنجليزية: Baby aspirin).'
        },
        {
          title: 'ادوية خفض الكوليسترول',
          content: 'يساعد الكوليسترول الجسم على بناء الخلايا الجديدة وإنتاج المادة العازلة للأعصاب، وإنتاج الهرمونات، لكن حدوث الالتهاب في جدران الأوعية الدموية يدفع الكوليسترول إلى التراكم، وبالتالي تزداد فرصة الإصابة بنوبة قلبية أو سكتة دماغية.'
        }
      ]
    }
    if(this.id== 15) {
      this.articleArr= [
        {
          title: 'جفاف الفم عند الحامل',
          content: 'جفاف الفم أثناء الحمل هو أمر شائع أثناء فترة الحمل، فالمرأة الحامل تحتاج لشرب كميات أكثر من الماء، لأن الماء مهم جداً لنمو الجنين، وكذلك إن التغيرات الهرمونية أثناء الحمل قد تسبب جفاف الفم، وقد يكون سكري الحمل هو أحد أسباب جفاف الفم عند الحامل. في هذا المقال سنناقش أسباب جفاف الفم لدى الحامل، والأعراض المرتبطة به، بالإضافة إلى كيفية علاج جفاف الفم عند الحامل.'
        },
        {
          title: 'زيادة وزن الحامل',
          content: 'من الصعب التنبؤ بدقة بوزن الطفل خلال فترة الحمل، إذ تعطي الفحوصات التي يتم إجراؤها مثل فحص الموجات فوق الصوتية (الألتراساوند) مؤشراً تقديرياً فقط لوزن الطفل المتوقع عند الولادة، ولا يمكن اعتبار وزن الأم خلال الحمل وحده مؤشراً كافياً لمدى تطور الجنين داخل الرحم وسرعة نموه.'
        }
      ]
    }

    if(this.id== 16) {
      this.articleArr= [
        {
          title: 'مرض السرطان - Cancer ',
          content: 'السرطان هو مصطلح طبى يشمل مجموعة واسعة من الأمراض التى تتميز بنمو غير طبيعى للخلايا التى تنقسم بدون رقابة ولديها القدرة على اختراق الانسجة و تدمير انسجة سلمية فى الجسم'
        },
        {
          title: 'سرطان البروستاتا - Prostate Cancer',
          content: 'سرطان البروستاتا هو السرطان الذي يتكون ويتطور داخل غدة البروستاتا التي تشبه في شكلها حبة الجوز، وهي المسؤولة عن إنتاج السائل المنوي الذي يغذي وينقل الخلايا المنوية.'
        },
        {
          title: 'مرض سرطان الرئة - Lung Cancer',
          content: 'يشكل سرطان الرئة المسبب الأول للوفيات التي تحصل نتيجة لمرض السرطان سواء بين النساء أو بين الرجال، ويوقع سرطان الرئة عددًا من الضحايا سنويًا أكبر بكثير مما يحصده سرطان القولون، وسرطان البروستاتا،..'
        }
      ]
    }

    if(this.id== 17) {
      this.articleArr= [
        {
          title: 'خلال العملية الجراحية',
          content: 'يُعطى المريضُ رداءً خاصاً ليرتديه خلال العملية. وسوف يلتقي بطبيب التخدير الذي سيراجع ملفَّه الطبِّي ونتائج فحوصاته الطبِّية. كما سيكون مسؤولاً عن متابعة تخديره طوال العملية الجراحية. وقد يعطيه طبيبُ التخدير مسكِّناً لتهدئة أعصابه قبل الذهاب إلى العملية الجراحية'
        }
      ]
    }

    if(this.id== 18) {
      this.articleArr= [
        {
          title: 'التغذية الصحية للرياضيين',
          content: 'تلعب التغذية دوراً أساسياً في حياة الإنسان؛ لذلك يجب أن يراعى في ذلك أسس التغذية الصحية وأن يكفي الغذاء لسد جميع احتياجات الجسم. أما بالنسبة للرياضيين، فتعتبر التغذية الجيدة والسليمة في كل الأوقات شيء أساسي من أجل تحسين الأداء الرياضي واللياقة البدنية لديهم. '
        },
        {
          title: 'تغذية فروة الرأس',
          content: 'الاهتمام والعناية بفروة الشعر يزيد من نمو الشعر ولمعانه ونضارته، كما أن العناية بفروة الرأس تساعد في علاج تساقط الشعر، وتساعد في التخلص من القشرة وتجعل الشعر غزيراً وطويلاً. تصاب فروة الشعر بالجفاف نتيجة غسل الشعر المتكرر، أو عدم شرب كميات كافية من الماء، أو وضع مواد كيماوية على فروة الشعر، لذا يجب علينا معرفة ما هي الطرق الطبيعية لتغذية فروة الرأس والحصول على شعر لامع وطويل.'
        }
      ]
    }

    if(this.id== 19) {
      this.articleArr= [
        {
          title: 'بنج الاسنان ومضاعفاته',
          content: 'منذ أن وجد الإنسان على هذه الأرض كانت الأمراض ملازمة لنسبة كبيرة من البشر، وقد سعى الإنسان لمحاولة تخفيف الألم الذي يصاب به بطرق شتى ومتعددة، وقد استعمل في سبيل هذا العديد من الوسائل والطرق القديمة، ومنها الكي والأعشاب والنباتات، مثل القنب الهندي، وعصير الخشخاش، و البلادونا التي كانت تستعمل باخذها عن طريق الفم أو استنشاق ابخرتها.'
        },
        {
          title: 'اكتشاف التخدير الموضعي للاسنان',
          content: 'مع تطور طب الأسنان تم اكتشاف مادة تسمى بروكايين أو نوفاكايين أو البنج الموضعي للاسنان وذلك عام 1905، وقد تطورت هذه الأنواع مع تطور العلم، وأصبح منها تراكيز متعددة بنسبة 1%، و2%، و3%، و4%. '
        }
      ]
    }
    if(this.id== 20) {
      this.articleArr= [
        {
          title: 'ماذا تعرف عن دور المسنين والرعاية؟',
          content: 'يحتاج بعض الأفراد، أو كبار السن، أو العاجزين إلى الرعاية والاهتمام، حيث قد لا يجدون هذه الرعاية طويلة الأمد في منازلهم من أفراد عائلتهم أو أصدقائهم، أو قد لا تتوافر البرامج التي تقدم الدعم لهم، إذ يحتاج هؤلاء الأفراد إلى تفرغ وعناية كبيرة، مما يضطرهم للانتقال إلى دور الرعاية المنزلية أو دور التمريض.'
        }
      ]
    }

    console.log(this.articleArr);
    
  }

  

}