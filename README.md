# Can Akgül - Kişisel Portfolyo Sitesi

Modern, minimalist ve responsive tasarıma sahip kişisel portfolyo sitesi. Umut Özyurt'un sitesinden ilham alınarak sade ve professional bir yaklaşımla tasarlanmıştır.

## 🚀 Özellikler

### ✨ Tasarım
- **Koyu/Aydınlık Mod**: Sağ üstteki toggle ile tema değiştirme
- **Minimalist Tasarım**: Sade ve professional görünüm
- **Smooth Animasyonlar**: Akıcı geçişler ve hover efektleri
- **Modern Typography**: Inter font ailesi kullanımı

### 📱 Responsive Tasarım
- **Mobile-First Yaklaşım**: Tüm cihazlarda uyumlu
- **Hamburger Menu**: Mobilde kolay navigasyon
- **Adaptive Layout**: İçerik cihaza göre optimize edilir

### 🎯 Kullanıcı Deneyimi
- **Smooth Scroll**: Akıcı sayfa içi geçişler
- **Active Navigation**: Scroll'a göre aktif menü vurgulama
- **Scroll-to-Top**: Sayfanın başına dönüş butonu
- **Loading Animasyonları**: Intersect Observer ile section animasyonları

### ⚡ Performans
- **Optimize Edilmiş Kod**: Debounce ve throttle ile performans
- **Lazy Loading**: İçerikler ihtiyaca göre yüklenir
- **Local Storage**: Tema tercihi kaydedilir

## 📂 Dosya Yapısı

```
website/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stilleri ve responsive tasarım
├── script.js           # JavaScript işlevsellik
├── README.md           # Bu dosya
└── LICENSE             # Lisans dosyası
```

## 🛠️ Kurulum

### Gereksinimler
- Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)
- HTTP server (opsiyonel, local test için)

### Çalıştırma

**1. Python HTTP Server ile:**
```bash
cd website
python3 -m http.server 8000
# Tarayıcıda http://localhost:8000 adresini ziyaret edin
```

**2. Live Server ile (VS Code):**
- Live Server extension'ını yükleyin
- `index.html` dosyasına sağ tıklayın
- "Open with Live Server" seçeneğini seçin

**3. Direct File:**
- `index.html` dosyasını tarayıcıda doğrudan açabilirsiniz

## 🎨 Özelleştirme

### Renk Değişkenleri
CSS'teki `:root` ve `.dark-mode` sınıflarında renk değişkenlerini özelleştirebilirsiniz:

```css
:root {
    --text-accent: #3b82f6;  /* Ana vurgu rengi */
    --bg-primary: #ffffff;   /* Ana arka plan */
    /* ... diğer değişkenler */
}
```

### İçerik Güncellemesi
`index.html` dosyasında kişisel bilgilerinizi güncelleyin:
- İsim ve unvan
- Eğitim bilgileri
- Deneyim kayıtları
- Proje örnekleri
- İletişim bilgileri

### Yeni Bölümler Ekleme
1. HTML'de yeni `<section>` ekleyin
2. CSS'te stillendirin
3. JavaScript'te scroll animasyonu ekleyin
4. Navigation'a yeni menü öğesi ekleyin

## 🔧 Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties
- **Vanilla JavaScript**: Modern ES6+ syntax
- **Font Awesome**: Icon library
- **Google Fonts**: Inter typography
- **Intersection Observer API**: Scroll animations

## 📱 Browser Desteği

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Kullanım

Site aşağıdaki bölümlerden oluşur:

1. **Home**: Kişisel tanıtım ve hero section
2. **Education**: Eğitim geçmişi
3. **Experience**: İş deneyimi
4. **Projects**: Proje portföyü
5. **Hobbies**: Kişisel ilgi alanları
6. **Contact**: İletişim bilgileri

## 🔄 Güncellemeler

Sitenizi güncellemek için:
1. İlgili HTML bölümlerini düzenleyin
2. Gerekirse CSS stilleri ekleyin/değiştirin
3. JavaScript işlevsellik ekleyin

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 🤝 Katkıda Bulunma

Bu bir kişisel portfolyo projesidir, ancak önerilerinizi paylaşabilirsiniz.

## 📞 İletişim

Sorularınız için demo iletişim bilgilerini kendi bilgilerinizle güncelleyin.

---

**Not**: Demo içerik ile hazırlanmıştır. Kişisel bilgilerinizle güncelleyiniz. 