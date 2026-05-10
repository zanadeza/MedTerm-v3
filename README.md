# 🩺 MedLex v3 — القاموس الطبي الذكي

> قاموس طبي تفاعلي بواجهة محادثة — PWA يعمل أوفلاين بالكامل

**الرابط:** `https://<username>.github.io/<repo>/`

---

## 📁 هيكل المشروع

```
medlex/
│
├── index.html              ← التطبيق كاملاً (HTML + CSS + JS)
├── manifest.json           ← إعدادات PWA
├── sw.js                   ← Service Worker
├── .nojekyll               ← ضروري لـ GitHub Pages
│
└── db/
    ├── index.json          ← إحصائيات + خريطة الملفات (4 KB)
    ├── db_ac.json          ← كلمات A–C (886 كلمة · 700 KB)
    ├── db_dh.json          ← كلمات D–H (947 كلمة · 736 KB)
    ├── db_ip.json          ← كلمات I–P (791 كلمة · 540 KB)
    ├── db_qs.json          ← كلمات Q–S (443 كلمة · 288 KB)
    ├── db_tz.json          ← كلمات T–Z (328 كلمة · 228 KB)
    ├── sentences.json      ← 958 جملة طبية (744 KB)
    └── images.json         ← 32 صورة طبية (8 KB)
```

---

## ✨ المميزات

| الميزة | التفاصيل |
|--------|----------|
| 📚 قاعدة البيانات | **3,395 مصطلح** من 11 فصل طبي |
| 🤖 محادثة ذكية | واجهة ChatGPT — بحث بالعربي والإنجليزي |
| ⚡ تحميل ذكي | Lazy loading — يحمّل فقط الملف المطلوب |
| 🔍 بحث شامل | يبحث في الكلمة، التعريف، المرادفات، العربية |
| 🔊 نطق صوتي | Web Speech API |
| 🌙 4 ثيمات | فاتح، داكن، دافئ، نعناعي |
| 📱 PWA كامل | يُثبَّت على الجوال ويعمل أوفلاين |

---

## 📖 الفصول المضمّنة

| # | الفصل | عدد المصطلحات |
|---|-------|--------------|
| 1 | Word Parts | 61 |
| 2 | Singular/Plural Endings | 50 |
| 3 | Anatomic Reference & Pathology | 53 |
| 4 | The Skeletal System | 72 |
| 5 | The Cardiovascular System | 67 |
| 6 | The Lymphatic & Immune Systems | 67 |
| 7 | The Respiratory System | 43 |
| 8 | The Digestive System | 59 |
| 9 | The Urinary System | 46 |
| 10 | The Endocrine System | 54 |
| 11 | Medical Abbreviations | 90 |
| + | قاعدة البيانات الأصلية | 2,733 |

---

## 🚀 الرفع على GitHub Pages

```
1. أنشئ Repository جديد
2. ارفع index.html · manifest.json · sw.js · .nojekyll
3. أنشئ مجلد db/ وارفع كل ملفات JSON
4. Settings → Pages → Branch: main / (root) → Save
```

---

## 🔄 Changelog

| الإصدار | التغييرات |
|---------|-----------|
| v3.0.0 | واجهة ChatGPT · 5 ملفات مقسّمة · lazy loading · 3,395 كلمة |
| v2.0.0 | تقسيم DB إلى words/sentences/images |
| v1.0.0 | الإصدار الأول |
