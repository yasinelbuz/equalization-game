import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
   // detect user language
   // learn more: https://github.com/i18next/i18next-browser-languageDetector
   .use(LanguageDetector)
   // pass the i18n instance to react-i18next.
   .use(initReactI18next)
   // init i18next
   // for all options read: https://www.i18next.com/overview/configuration-options
   .init({
      debug: true,
      fallbackLng: 'en',
      interpolation: {
         escapeValue: false, // not needed for react as it escapes by default
      },
      resources: {
         en: {
            translation: {
               sidebar: {
                  rows: "Rows",
                  columns: "Columns",
                  equality: "Equality",
                  startGame: "Start Game",
                  default: "Default",
                  up: "Up",
                  down: "Down",
                  english: "English",
                  Turkish: "Turkish",
               },
               modal: {
                  title: "HOW TO PLAY:",
                  part1: "The goal of the equalize numbers game is to make all the numbers in the matrix the same.",
                  part2: "The default value is 20, you can change it if you want.",
                  part3: "When you click on each button in the matrix, it adds 1 number around it, and the number decreases from itself as much as its circumference.",
                  part4: "Good games.",
               }
            }
         },
         tr: {
            translation: {
               sidebar: {
                  rows: "Satır",
                  columns: "Sutun",
                  equality: "Eşitlik",
                  startGame: "Başla",
                  default: "Varsayılan",
                  up: "Yukarı",
                  down: "Aşağı",
                  english: "İngilizce",
                  Turkish: "Türkçe",
               },
               modal: {
                  title: "NASIL OYNANIR:",
                  part1: "Sayıları eşitle oyununun amacı, matristeki tüm sayıları aynı yapmaktır. ",
                  part2: "Varsayılan değer 20'dir, isterseniz değiştirebilirsiniz.",
                  part3: "Matristeki her butona tıkladığınızda çevresine 1 sayı ekliyor ve dağıttı sayı kadar kendisinden çıkarılıyor.",
                  part4: "İyi oyunlar.",
               }
            }
         }
      }
   });

export default i18n;