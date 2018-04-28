import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-bilgilendirme',
  templateUrl: 'bilgilendirme.html',
})
export class BilgilendirmePage {

  items: any = [];
  itemExpandHeight: number = 200;

  constructor(public navCtrl: NavController) {

    this.items = [
      {
        expanded: true,
        title: 'Balmumu Heykel Müzesi',
        description: `Eskişehir Büyükşehir Belediye Başkanı mertcan mertcan mertcan mertcan mertcan mertcanmertcan mertcan mertcanmertcan mertcan mertcan Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur. `,
        beingViewed: 'İncele'
      },
      {
        expanded: true,
        title: 'Odunpazarı Evleri',
        description: `Tarihi evlerin yer aldığı Odunpazarı semti Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.`,
        beingViewed: 'İncele'
      },
      {
        expanded: true,
        title: 'Sazova Parkı',
        description: `Tarihi evlerin yer aldığı Odunpazarı semti Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.`,
        beingViewed: 'İncele'
      }


    ];

  }

  expandItem(item) {
    item.expanded = !item.expanded;

    (item.expanded) ? item.beingViewed = 'İncele' : item.beingViewed = "Kapat";
  }

}
