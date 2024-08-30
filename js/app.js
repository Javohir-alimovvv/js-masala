// 1#

// {
//     let hafta = 2;

//     switch (hafta) {
//         case 1:
//             console.log("Monday")
//             break;
//         case 2:
//             console.log("Tuesday")
//             break;
//         case 3:
//             console.log("Wednesday")
//             break;
//         case 4:
//             console.log("Thursday")
//             break;
//         case 5:
//             console.log("Friday")
//             break;
//         case 6:
//             console.log("Saturday")
//             break;
//         case 7:
//             console.log("Sunday")
//             break;
//         default:
//             console.log("Hafta kunini kirirting")
//     }
// }


// 2#

// {
//     let k = 2;

//         switch (k) {
//             case 1:
//                 console.log("Yomon")
//                 break;
//             case 2:
//                 console.log("Qoniqarsiz")
//                 break;
//             case 3:
//                 console.log("Qoniqarli")
//                 break;
//             case 4:
//                 console.log("Yaxshi")
//                 break;
//             case 5:
//                 console.log("A'lo")
//                 break;
//             default:
//                 console.log("Sinfdan qoldirilasan")
//         }
// }


// 3#
// {
//     let month = 2;

//     switch (month) {
//         case 1:
//         case 2:
//         case 12:
//             console.log("Qish")
//             break;
//         case 3:
//         case 4:
//         case 5:
//             console.log("Bahor")
//             break;
//         case 6:
//         case 7:
//         case 8:
//             console.log("Yoz")
//             break;
//         case 9:
//         case 10:
//         case 11:
//             console.log("Ko'z")
//             break;
//         default:
//             console.log("Fasl kirirting")
//     }
// }


// 4#
// {
//     let monthday = "Yanvar";

//     switch (monthday) {
//         case "Yanvar":
//             console.log("31")
//             break;
//         case "Fevral":
//             console.log("28")
//             break;
//         case "Mart":
//             console.log("31")
//             break;
//         case "Aprel":
//             console.log("30")
//             break;
//         case "May":
//             console.log("31")
//             break;
//         case "Iyun":
//             console.log("30")
//             break;
//         case "Iyul":
//             console.log("31")
//             break;
//         case "Avgust":
//             console.log("31")
//             break;
//         case "Sentabir":
//             console.log("30")
//             break;
//         case "Oktabir":
//             console.log("31")
//             break;
//         case "Noyabir":
//             console.log("30")
//             break;
//         case "Dekabir":
//             console.log("31")
//             break;
//         default:
//             console.log("Fasl kirirting")
//     }
// }


// 5#

// {
//     let a = 12;
//     let b = 4;
//     let c = a + b;
//     let d = a - b;
//     let e = a * b;
//     let f = a / b;

//     function Value(value) {
//         switch (value) {
//             case c:
//                 console.log(c);
//                 break;
//             case d:
//                 console.log(d);
//                 break;
//             case e:
//                 console.log(e);
//                 break;
//             case f:
//                 console.log(f);
//                 break;
//             default:
//                 console.log("Hech qaysi shartga mos kelmadi");
//                 break;
//         }
//     }

//     Value(c);
//     Value(d);
//     Value(e);
//     Value(f);
// }


// 6#
// {
// let a = 5

// let detsimetr = 0.1 * a
// let kilometr = 1000 * a
// let metr = 1 * a
// let millimetr = 0.001 * a
// let santimetr = 0.01 * a

// function qiymat(value) {
//     switch (value) {
//         case detsimetr:
//             console.log(detsimetr);
//             break;
//         case kilometr:
//             console.log(kilometr);
//             break;
//         case metr:
//             console.log(metr);
//             break;
//         case millimetr:
//             console.log(millimetr);
//             break;
//         case santimetr:
//             console.log(santimetr);
//             break;
//         default:
//             console.log("Hech qaysi shart mos kelmadi");
//     }
// }
// qiymat(detsimetr);
// qiymat(kilometr);
// qiymat(metr);
// qiymat(millimetr);
// qiymat(santimetr);
// }


// 7#
// {
// let a = 10

// let kilogram = 1 * a
// let milligram = 0.000001 * a
// let gram = 1000 * a
// let tonna = 1000 * a
// let setner = 100 * a

// function qiymat(value) {
//     switch (value) {
//         case kilogram:
//             console.log(${kilogram} kilogram teng );
//             break;
//         case milligram:
//             console.log(${milligram} kilogram teng);
//             break;
//         case gram:
//             console.log(${gram} kilogram teng);
//             break;
//         case tonna:
//             console.log(${tonna} kilogram teng);
//             break;
//         case setner:
//             console.log(${setner} kilogram teng);
//             break;
//         default:
//             console.log("Hech qaysi shart mos kelmadi");
//     }
// }
// qiymat(kilogram);
// qiymat(milligram);
// qiymat(gram);
// qiymat(tonna);
// qiymat(setner);
// }



// 8#
// {
// let month = "fevral";
// let day = 29;

// switch (month) {
//     case "yanvar":
//         day === 31
//         console.log(yanvar 31 kun 1yilda 365 kun);
//         break;
//     case "fevral":
//         day === 28
//         console.log(fevral 28 kun 1yilda 365 kun);
//         if (day === 29) {
//             console.log(fevral 29 kun Kabisa yili 366 kun);
//         }
//         break;
//     case "mart":
//         day === 31
//         console.log(mart 31 kun 1yilda 365 kun);
//         break;
//     case "april":
//         day === 30
//         console.log(april 30 kun 1yilda 365 kun);
//         break;
//     case "may":
//         day === 31
//         console.log(may 31 kun 1yilda 365 kun);
//         break;
//     case "iyun":
//         day === 30
//         console.log(iyun 30 kun 1yilda 365 kun);
//         break;
//     case "iyul":
//         day === 31
//         console.log(iyul 31 kun 1yilda 365 kun);
//         break;
//     case "avgust":
//         day === 31
//         console.log(avgust 31 kun 1yilda 365 kun);
//         break;
//     case "sentabr":
//         day === 30
//         console.log(sentabr 30 kun 1yilda 365 kun);
//         break;
//     case "oktobr":
//         day === 31
//         console.log(oktobr 31 kun 1yilda 365 kun);
//         break;
//     case "noyabr":
//         day === 30
//         console.log(noyabr 30 kun 1yilda 365 kun);
//         break;
//     case "dekabr":
//         day === 31
//         console.log(dekabr 31 kun 1yilda 365 kun);
//         break;
//     default:
//         console.log("Berilgan sanani kiriting");
// }
// }



// 9#

// {
// let month = "yanvar";
// let day = 30;

// switch (month) {
//     case "yanvar":
//         day === 31
//         console.log(day + 1);
//         break;
//     case "fevral":
//         day === 28
//         console.log(day + 1);
//         break;
//     case "mart":
//         day === 31
//         console.log(day + 1);
//         break;
//     case "april":
//         day === 30
//         console.log(day + 1);
//         break;
//     case "may":
//         day === 31
//         console.log(day + 1);
//         break;
//     case "iyun":
//         day === 30
//         console.log(day + 1);
//         break;
//     case "iyul":
//         day === 31
//         console.log(day + 1);
//         break;
//     case "avgust":
//         day === 31
//         console.log(day + 1);
//         break;
//     case "sentabr":
//         day === 30
//         console.log(day + 1);
//         break;
//     case "oktobr":
//         day === 31
//         console.log(day + 1);
//         break;
//     case "noyabr":
//         day === 30
//         console.log(day + 1);
//         break;
//     case "dekabr":
//         day === 31
//         console.log(day + 1);
//         break;
//     default:
//         console.log("xato");
// }
// }

// 10#
// ishlolmadim


{
    function updateClock() {
        const now = new Date();
        const date = now.getFullYear() + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.' + String(now.getDate()).padStart(2, '0');
        const time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');
        const dateTime = date + ' ' + time;
        document.getElementById('clock').textContent = dateTime;
    }
    setInterval(updateClock, 1000);
    updateClock();
}



