import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en', // Fallback to English if no match
        returnObjects: true,
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        resources: {
            en: {
                translation: {
                    main: "Access Government Schemes for Everyone!",
                    hero_title: "Find the Right Government Scheme for You in Seconds!",
                    hero_subtitle: "Easily search, filter, and apply for farming subsidies, loans, and grants.",
                    hero_button: "Find Schemes Now"
                }
            },
            hi: { // Corrected language code
                translation: {
                    main: "हर किसी के लिए सरकारी योजनाओं तक पहुंच!",
                    hero_title: "सेकंडों में सही सरकारी योजना खोजें!",
                    hero_subtitle: "कृषि सब्सिडी, ऋण और अनुदान को आसानी से खोजें, फ़िल्टर करें और आवेदन करें।",
                    hero_button: "अभी योजनाएं खोजें"
                }
            },
            bn: {
                translation: {
                    main: "সকলের জন্য সরকারি প্রকল্পে প্রবেশাধিকার",
                    hero_title: "সেকেন্ডের মধ্যে আপনার জন্য সঠিক সরকারি প্রকল্প খুঁজুন!",
                    hero_subtitle: "সহজেই কৃষি ভর্তুকি, ঋণ এবং অনুদানের জন্য অনুসন্ধান করুন, ফিল্টার করুন এবং আবেদন করুন।",
                    hero_button: "এখনই প্রকল্প খুঁজুন"
                }
            }
        }
    });

export default i18n;
